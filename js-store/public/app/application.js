App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    productModel: Rho.ORM.addModel('Product'),
    customerModel: Rho.ORM.addModel('Customer')
});

if (App.productModel.find('all').length == 0) {
    App.productModel.create({'name': "Galaxy S3", sku: '5678', brand: 'Samsung', price: 199, quantity: 2 });
    App.productModel.create({'name': "iPhone 5", sku: '1234', brand: 'Apple', price: 219, quantity: 3 });
}

ProductProxy = Ember.Object.extend({

    object: function () {
        return this.subject.get('object');
    }.property('subject'),

    name: function () {
        return this.subject.get('name');
    }.property('subject'),

    sku: function () {
        return this.subject.get('sku');
    }.property('subject'),

    brand: function () {
        return this.subject.get('brand');
    }.property('subject'),

    price: function () {
        return this.subject.get('price');
    }.property('subject'),

    quantity: function () {
        return this.subject.get('quantity');
    }.property('subject')

});

App.Router.map(function () {
    this.route('welcome');
    this.route('login');
    this.route('choose');
    this.resource('products', function () {
        this.resource('product', {path: ":product_id"}, function () {
            this.route('edit');
            this.route('delete');
        });
        this.route('new');
    });
    this.resource('customers', function () {
        this.resource('customer', {path: ":customer_id"}, function () {
            this.route('edit');
            this.route('delete');
        });
        this.route('new');
    });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo("products.index");
    }
});

App.WelcomeController = Ember.Controller.extend({
    goLogin: function () {
        this.transitionToRoute('login')
    }
});

App.ChooseController = Ember.Controller.extend({
    goProducts: function () {
        this.transitionToRoute('products.index')
    },
    goCustomers: function () {
        this.transitionToRoute('customers.index')
    }
});

App.LoginController = Ember.Controller.extend({
    doLogin: function (login, password) {
        var thisController = this;
        Rho.RhoConnectClient.login(login, password, function (value) {
            if (value.error_code == 0) {
                thisController.transitionToRoute('choose');
            } else {
                thisController.transitionToRoute('login');
            }
        });
    }
});

App.LoginFormView = Ember.View.extend({
    tagName: 'form',
    login: null,
    password: null,

    submit: function (event) {
        event.preventDefault();
        var login = this.get('login');
        var password = this.get('password');
        this.get('controller').doLogin(login, password)
    }
});

App.NewProductFormView = Ember.View.extend({
    tagName: 'form',
    brand: null,
    name: null,
    sku: null,
    price: null,
    quantity: null,
    submit: function (event) {
        event.preventDefault();
        var brand = this.get('brand');
        var name = this.get('name');
        var sku = this.get('sku');
        var price = this.get('price');
        var quantity = this.get('quantity');
        App.productModel.create({name: name, brand: brand, sku: sku, price: price, quantity: quantity})
        this.get('controller').transitionToRoute('products.index')
    }
});

App.EditProductFormView = Ember.View.extend({
    tagName: 'form',
    brand: null,
    name: null,
    sku: null,
    price: null,
    quantity: null,
    willInsertElement: function () {
        var object = this.get('controller').get('model').subject;
        this.set('brand', object.get('brand'));
        this.set('name', object.get('name'));
        this.set('sku', object.get('sku'));
        this.set('price', object.get('price'));
        this.set('quantity', object.get('quantity'));
    },

    submit: function (event) {
        event.preventDefault();
        var object = this.get('controller').get('model').subject;
        object.set('brand', this.get('brand'));
        object.set('name', this.get('name'));
        object.set('sku', this.get('sku'));
        object.set('price', this.get('price'));
        object.set('quantity', this.get('quantity'));
        //TODO: remove comment when ORM support method "save()"
        //object.save();
        this.get('controller').transitionToRoute('product', this.get('controller').get('model'))
    }
});

App.ChooseController = Ember.Controller.extend({
    doLogout: function () {
        Rho.RhoConnectClient.logout();
        this.transitionToRoute('welcome');
    },
    doSync: function () {/* doSync */
    },
    goProducts: function () {
        this.transitionToRoute('products.index')
    },
    goCustomers: function () {
        this.transitionToRoute('customers.index')
    }
});


App.ProductsIndexRoute = Ember.Route.extend({
    model: function (params) {
        var _readedProducts = App.productModel.find('all');
        var _products = [];
        for (var i = 0; i < _readedProducts.length; i++) {
            var _productProxy = ProductProxy.create({subject: _readedProducts[i]});
            _products.pushObject(_productProxy);
        }
        return {products: _products}
    },
    events: {doNewProduct: function () {
        this.transitionTo('products.new')
    }
    }
});


App.ProductRoute = Ember.Route.extend({
    model: function (params) {
        // need return concrete product, but method "find" not supports select criteria now
        var _productProxy = null;
        var _products = App.productModel.find('all');
        for (var i = 0; i < _products.length; i++) {
            if (_products[i].get('object') == params.product_id) {
                _productProxy = ProductProxy.create({subject: _products[i]});
            }
        }
        return  _productProxy;
    },
    serialize: function (product) {
        return {product_id: product.get('object')}
    },
    setupController: function (controller, model) {
        controller.set('model', model);
    },
    events: {
        doDeleteProduct: function (params) {
            params.get('subject').destroy();
            this.transitionTo('products.index');
        },

        doEditProduct: function (params) {
            this.controller.transitionToRoute('product.edit', params);
        }
    }
});

App.ProductEditRoute = Ember.Route.extend({
    model: function (params) {
        return this.modelFor('product')
    },
    serialize: function (product) {
        return {product_id: product.get('object')}
    },
    setupController: function (controller, model) {
        controller.set('model', model);
    }
});

App.ProductIndexController = Ember.ObjectController.extend({
    needs: ['product']
});

App.ProductController = Ember.ObjectController.extend({
    needs: ['product']
});

App.ProductEditController = Ember.ObjectController.extend({
    needs: ['product']
});

App.ProductDeleteController = Ember.ObjectController.extend({
    needs: ['product']
});


