App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    customerModel: Rho.ORM.addModel('Customer'),
    productModel: Rho.ORM.addModel('Product'),
});

App.customerModel.create({'name': "Customer A"});
App.customerModel.create({'name': "Customer B"});
App.customerModel.create({'name': "Customer C"});
App.productModel.create({'name': "Product A"});
App.productModel.create({'name': "Product B"});


App.Router.map(function () {
    this.route('/');
    this.route('login');
    this.route('home');
    this.route('products');
    this.route('product', {path: '/products/:product_id'});
    this.route('customers');
    this.route('customer', {path: '/customers/:customer_id'});

});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        Rho.Log.info('Is LoggedIn = ' + Rho.RhoConnectClient.isLoggedIn(), 'Store')
        var path = Rho.RhoConnectClient.isLoggedIn() ? 'home' : 'login';
        this.transitionTo(path);
    }
});

App.HomeRoute = Ember.Route.extend({

});

App.LoginController = Ember.Controller.extend({
    doLogin: function (login, password) {
        var thisController = this;
        Rho.RhoConnectClient.login(login, password, function (value) {
            if (value.error_code == 0) {
                thisController.transitionToRoute('home');
            } else {
                thisController.transitionToRoute('/');
            }
        })
    }
});

App.HomeController = Ember.Controller.extend({
    doLogout: function () {
        Rho.RhoConnectClient.logout();
        this.transitionToRoute('login');
    }
});

App.ProductsController = Ember.Controller.extend({
    goHome: function () {
        this.transitionToRoute('home')
    },
    products: App.productModel.find('all')

});

App.CustomersController = Ember.Controller.extend({
    goHome: function () {
        this.transitionToRoute('home')
    },
    customers: App.customerModel.find('all')
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


