App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function () {
    this.route('/');
    this.route('initial');
    this.route('login');
    this.route('home');
    this.resource("products", {path: '/products'}, function () {
        this.route("new")
    });
    this.resource("product", { path: "/products/:product_id" }, function () {
        this.route("/new");
    });
    this.route('customers');
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo("initial");
    }
});

App.InitialController = Ember.Controller.extend({
    goLogin: function () {
        this.transitionToRoute('login')
    }
});

App.HomeRoute = Ember.Route.extend({

});

App.LoginController = Ember.Controller.extend({
    doLogin: function (login, password) {
        var thisController = this;
        Rho.Log.info("Before login", "JS-Store");
        Rho.RhoConnectClient.login(login, password, function (value) {
            Rho.Log.info(value.error_code, "JS-Store");
            if (value.error_code == 0) {
                thisController.transitionToRoute('home');
            } else {
                thisController.transitionToRoute('index');
            }
        });
        Rho.Log.info("After login", "JS-Store");
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

App.HomeController = Ember.Controller.extend({
    doLogout: function () {
        Rho.RhoConnectClient.logout();
        this.transitionToRoute('initial');
    }
});
