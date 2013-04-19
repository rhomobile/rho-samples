App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationController = Ember.Controller.extend({
    isLogged: function(){return false}

});

App.Router.map(function () {

    this.route('choose');
    this.route('customers');
    this.route('customer', {path: '/customers/:customer_id'});
    this.route('products');
    this.route('product', {path: '/products/:product_id'});
    this.route('contributors');
    this.route('contributor', {path: '/contributors/:contributor_id'});
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        var path = Rho.RhoconnectClient.isLoggedIn() ? 'home' : 'login';
        this.transitionTo(path);
    }
});

App.LoginRoute = Ember.Route.extend({
    setupController: function (controller) {
        controller.set('title', 'The is the login controller');
    }
});

App.ChooseRoute = Ember.Route.extend({
    setupController: function (controller) {
        controller.set('title', 'The is the choose controller');
    }
});

App.CustomersRoute = Ember.Route.extend({
    setupController: function (controller) {
        controller.set('title', 'The is the customers controller');
    },
    model: function () {
        return App.Customer.customers();
    }
});

App.ProductsRoute = Ember.Route.extend({
    setupController: function (controller) {
        controller.set('title', 'The is the products controller');
    }, model: function () {
        return App.Product.products();
    }
});


App.Customer = Ember.Object.extend({
    id: null,
    firstName: null,
    lastName: null,
    address: null,
    email: null,
    phone: null
});
App.Customer.reopenClass({
    _customers: [],
    customers: function () {
        return this._customers
    },
    addCustomer: function (aCustomer) {
        this._customers.addObject(aCustomer)
    },
    readCustomers: function () {
        for (var i = 1; i < 10; i++) {
            this.addCustomer(App.Customer.create({id: i, firstName: "firstName " + i, lastName: "lastName " + i}));
        }
    }
})

App.Product = Ember.Object.extend({
    id: null,
    name: null,
    sku: null,
    brand: null,
    price: null,
    quantity: null
});

App.Product.reopenClass({
    _products: [],
    products: function () {
        return this._products
    },
    addProduct: function (aProduct) {
        this._products.addObject(aProduct)
    },
    readProducts: function () {
        for (var i = 1; i < 10; i++) {
            this.addProduct(App.Product.create({id: i, name: "product " + i, brand: "brand " + i}));
        }
    }
});

App.Customer.readCustomers();
App.Product.readProducts();

App.Contributor = Ember.Object.extend();
App.Contributor.reopenClass({
    allContributors: [],
    all: function () {
        this.allContributors = [];
        $.ajax({
            url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
            dataType: 'jsonp',
            context: this,
            success: function (response) {
                response.data.forEach(function (contributor) {
                    this.allContributors.addObject(App.Contributor.create(contributor))
                }, this)
            }
        })
        return this.allContributors;
    }
});

App.ContributorsRoute = Ember.Route.extend({
    model: function () {
        return App.Contributor.all();
    }
});

