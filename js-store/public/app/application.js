App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    productModel: Rho.ORM.addModel('Product'),
    customerModel: Rho.ORM.addModel('Customer'),
    products: [1, 2 , 3]
});

if (App.productModel.find('all').length == 0) {
    App.productModel.create({id: 1, 'name': "Galaxy S3", sku: '5678', brand: 'Samsung', price: 199, quantity: 2 });
    App.productModel.create({id: 2, 'name': "iPhone 5", sku: '1234', brand: 'Apple', price: 219, quantity: 3 });
}

App.reopen({
    products: App.productModel.find('all')
})

ProductProxy = Ember.Object.extend({
    subject: null,

    id: function () {
        return this.subject.get('id');
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
    }
});


App.ProductRoute = Ember.Route.extend({
    model: function (params) {
        // need return concrete product, but method "find" not supports select criteria now
        return ProductProxy.create(App.productModel.find('first'));
    },
    serialize: function (product) {
        return {product_id: product.get('id')}
    },
    setupController: function (controller, model) {
        this._super(controller, model);
        this.controllerFor('productIndex').set('model', model);
    }
});

App.ProductIndexController = Ember.ObjectController.extend({
    needs: ['product']
});

App.ProductEditController = Ember.ObjectController.extend({
    needs: ['product']
});

App.ProductDeleteController = Ember.ObjectController.extend({
    needs: ['product']
});

App.ProductsNewRoute = Ember.Route.extend({
    model: function (params) {
        return { id: -1, brand: "some brand", prodName: "some name", sku: "some sku", qty: "some qty" };
    },
    serialize: function (product) {
        return { product_id: product.get('id') };
    }
});


