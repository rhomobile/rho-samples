var rhoconnectExists = function() {
  return Rho.RhoConnectClient !== undefined;
}

App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  productModel: Rho.NewORM.addModel('Product', function(model){
    model.fixed_schema = true;
    model.enable('sync');
    model.setProperty('schema_version','1.0.1');
    model.setModelProperty('name','string','');
    model.setModelProperty('sku','string','');
    model.setModelProperty('brand','string','');
    model.setModelProperty('price','string','');
    model.setModelProperty('quantity','string','');
    model.setModelProperty('created_at', 'string', '');
    model.setModelProperty('updated_at', 'string', '');
  }),
  customerModel: Rho.NewORM.addModel('Customer', function(model){
    model.fixed_schema = false;
    model.enable('sync'); 
  })
});


// Some fixture data if we aren't using RhoConnect
if(!rhoconnectExists()) {
  App.productModel.create({
    name: "Galaxy S3",
    sku: '5678', 
    brand: 'Samsung', 
    price: 199, 
    quantity: 2 
  });
  App.productModel.create({
    name: "iPhone 5",
    sku: '1234', 
    brand: 'Apple', 
    price: 219, 
    quantity: 3 
  });

  App.customerModel.create({
    name: "Galaxy S3",
    sku: '5678', 
    brand: 'Samsung', 
    price: 199, 
    quantity: 2 
  });
  App.customerModel.create({
    name: "iPhone 5",
    sku: '1234', 
    brand: 'Apple', 
    price: 219, 
    quantity: 3 
  });
}

ProductProxy = Ember.Object.extend({

  object: function () {
    //console.log("Subject is : " + JSON.stringify(this.subject));
    return this.subject.object;
  }.property('subject'),

  name: function () {
    return this.subject.name;
  }.property('subject'),

  sku: function () {
    return this.subject.sku;
  }.property('subject'),

  brand: function () {
    return this.subject.brand;
  }.property('subject'),

  price: function () {
    return this.subject.price;
  }.property('subject'),

  quantity: function () {
    return this.subject.quantity;
  }.property('subject')

});

CustomerProxy = Ember.Object.extend({

  object: function () {
    return this.subject.object;
  }.property('subject'),

  name: function () {
    return this.subject.name;
  }.property('subject'),

  sku: function () {
    return this.subject.sku;
  }.property('subject'),

  brand: function () {
    return this.subject.brand;
  }.property('subject'),

  price: function () {
    return this.subject.price;
  }.property('subject'),

  quantity: function () {
    return this.subject.quantity;
  }.property('subject')

});

App.Router.map(function () {
  this.route('welcome');
  this.route('login');
  this.route('home');
  this.route('wait');
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
    this.transitionTo("welcome");
  }
});

App.WelcomeController = Ember.Controller.extend({
  goLogin: function () {
    this.transitionToRoute('login')
  }
});


App.LoginController = Ember.Controller.extend({
  goBack: function () {
    this.transitionToRoute('welcome');
  },
  doLogin: function (login, password) {
    var thisController = this;
    if(rhoconnectExists()) {
      Rho.RhoConnectClient.login(login, password, function (value) {
        if (value.error_code == 0) {
          Rho.RhoConnectClient.setNotification('*', function(value){
              if (value.status == 'complete') {
                  Rho.RhoConnectClient.clearNotification('*');
                  thisController.transitionToRoute('home');
              }
          })
          Rho.RhoConnectClient.doSync();
          thisController.transitionToRoute('wait');
        } else {
          thisController.transitionToRoute('login');
        }
      });
    } else {
      thisController.transitionToRoute('home');
    }
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

App.HomeRoute = Ember.Route.extend({
  events: {
    doLogout: function () {
      Rho.RhoConnectClient.logout();
      this.controller.transitionToRoute('welcome');
    },
    doSync: function () {
        var thisRoute = this;
        thisRoute.controller.transitionToRoute('wait');
        Rho.RhoConnectClient.setNotification('*', function(value){
            console.dir(value);
            if (value.status == 'complete') {
                Rho.RhoConnectClient.clearNotification('*');
                thisRoute.controller.transitionToRoute('home');
            }
        });
        Rho.RhoConnectClient.doSync();

    },
    goProducts: function () {
      this.controller.transitionToRoute('products.index')
    },
    goCustomers: function () {
      this.controller.transitionToRoute('customers.index')
    }        
  }
});

App.ProductsIndexRoute = Ember.Route.extend({
  model: function (params) {
    var _readedProducts = App.productModel.find('all');
    console.log("MZV_DEBUG:" + JSON.stringify(_readedProducts));
    console.log("MZV_DEBUG:" + JSON.stringify(params));
    var _products = [];
    for (var i = 0; i < _readedProducts.length; i++) {
      var _productProxy = ProductProxy.create({subject: _readedProducts[i]});
      _products.pushObject(_productProxy);
    }
    return {products: _products}
  },
  events: {
    home: function () {
      this.controller.transitionToRoute('home')
    },
    doNewProduct: function () {
      this.controller.transitionToRoute('products.new')
    }
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    // need return concrete product, but method "find" not supports select criteria now
    var _productProxy = null;
    var _products = App.productModel.find('all');
    for (var i = 0; i < _products.length; i++) {
      if (_products[i].object == params.product_id) {
        _productProxy = ProductProxy.create({subject: _products[i]});
      }
    }
    return  _productProxy;
  },
  serialize: function (product) {
    return {product_id: product.subject.object}
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  },
  events: {
    back: function () {
      this.controller.transitionToRoute('products.index');
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
    return {product_id: product.subject.object}
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  },
  events: {
    doDeleteProduct: function (params) {
      params.subject.destroy();
      this.controller.transitionToRoute('products.index');
    },
    doCancel: function (params) {
      this.controller.transitionToRoute('product', params)
    }
  }
});

App.ProductsNewRoute = Ember.Route.extend({
  events: {
    doCancel: function (params) {
      this.controller.transitionToRoute('products')
    }
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
    this.get('controller').get('model').tag = '123';
    var object = this.get('controller').get('model').subject;
    this.set('brand', object.brand);
    this.set('name', object.name);
    this.set('sku', object.sku);
    this.set('price', object.price);
    this.set('quantity', object.quantity);
  },

  submit: function (event) {
    event.preventDefault();
    var productProxy = this.get('controller').get('model');
    var product = productProxy.subject;
    var newAttrs = {};
    newAttrs.brand = this.get('brand');
    newAttrs.name = this.get('name');
    newAttrs.sku = this.get('sku');
    newAttrs.price = this.get('price');
    newAttrs.quantity = this.get('quantity');
    product.updateAttributes(newAttrs);
    //TODO: it's weird, but productProxy.set('subject', object) not updated computed properties as expected
    productProxy = ProductProxy.create({"subject": product});
    this.get('controller').transitionToRoute('product', productProxy)
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

/* ++++++++++++++++++++++++++++++++++++ */

App.CustomersIndexRoute = Ember.Route.extend({
  setupController: function (controller) {
    var readedCustomers = App.customerModel.find('all');
    var customerProxies = [];
    for (var i = 0; i < readedCustomers.length; i++) {
      var customerProxy = CustomerProxy.create({subject: readedCustomers[i]});
      customerProxies.pushObject(customerProxy);
    }
    controller.set('content', customerProxies);
  },
  events: {
    home: function () {
      this.controller.transitionToRoute('home')
    },
    doNewCustomer: function () {
      this.controller.transitionToRoute('customers.new')
    }
  }
});

App.CustomerRoute = Ember.Route.extend({
  model: function (params) {
    // need return concrete product, but method "find" not supports select criteria now
    var _customerProxy = null;
    var _customers = App.customerModel.find('all');
    for (var i = 0; i < _customers.length; i++) {
      if (_customers[i].get('object') == params.customer_id) {
        _customerProxy = CustomerProxy.create({subject: _customers[i]});
      }
    }
    return  _customerProxy;
  },
  serialize: function (customer) {
    return {customer_id: customer.get('object')}
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  },
  events: {
    back: function () {
      this.controller.transitionToRoute('customers.index');
    },

    doEditCustomer: function (params) {
      this.controller.transitionToRoute('customer.edit', params);
    }
  }
});

App.CustomerEditRoute = Ember.Route.extend({
  model: function (params) {
    return this.modelFor('customer')
  },
  serialize: function (customer) {
    return {customer_id: customer.get('object')}
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  },
  events: {
    doDeleteCustomer: function (params) {
      params.subject.destroy();
      this.controller.transitionToRoute('customers.index');
    },
    doCancel: function (params) {
      this.controller.transitionToRoute('customer', params)
    }
  }
});

App.CustomersNewRoute = Ember.Route.extend({
  events: {
    doCancel: function (params) {
      this.controller.transitionToRoute('customers')
    }
  }
});

App.CustomerSearchFormView = Ember.View.extend({
  tagName: 'form',
  query: null,

  submit: function (event) {
    event.preventDefault();
    this.get('controller').search(this.get('query'));
  }
});

App.NewCustomerFormView = Ember.View.extend({
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
    App.customerModel.create({name: name, brand: brand, sku: sku, price: price, quantity: quantity})
    this.get('controller').transitionToRoute('customers.index')
  }
});

App.EditCustomerFormView = Ember.View.extend({
  tagName: 'form',
  brand: null,
  name: null,
  sku: null,
  price: null,
  quantity: null,
  willInsertElement: function () {
    this.get('controller').get('model').tag = '123';
    var object = this.get('controller').get('model').subject;
    this.set('brand', object.get('brand'));
    this.set('name', object.get('name'));
    this.set('sku', object.get('sku'));
    this.set('price', object.get('price'));
    this.set('quantity', object.get('quantity'));
  },

  submit: function (event) {
    event.preventDefault();
    var customerProxy = this.get('controller').get('model');
    var customer = customerProxy.subject;
    customer.set('brand', this.get('brand'));
    customer.set('name', this.get('name'));
    customer.set('sku', this.get('sku'));
    customer.set('price', this.get('price'));
    customer.set('quantity', this.get('quantity'));
    customer.save();
        //TODO: it's weird, but customerProxy.set('subject', object) not updated computed properties as expected
        customerProxy = CustomerProxy.create({"subject": customer});
        this.get('controller').transitionToRoute('customer', customerProxy);
      }
    });


App.CustomersIndexController = Ember.ObjectController.extend({
  needs: ['customer'],
  search: function (query) {
    var _readedCustomers = [];
    if ((query == null) || (query.length == 0)) {
      _readedCustomers = App.customerModel.find('all');
    }
    else {
      _readedCustomers = App.customerModel.find('all', {conditions: {first: query}});
    }
    var _customers = [];
    for (var i = 0; i < _readedCustomers.length; i++) {
      var _customerProxy = CustomerProxy.create({subject: _readedCustomers[i]});
      _customers.pushObject(_customerProxy);
    }
    this.set('content', _customers);
  }
});

App.CustomerIndexController = Ember.ObjectController.extend({
  needs: ['customer']
});


App.CustomerController = Ember.ObjectController.extend({
  needs: ['customer']
});

App.CustomerEditController = Ember.ObjectController.extend({
  needs: ['customer']
});

App.CustomerDeleteController = Ember.ObjectController.extend({
  needs: ['customer']
});
