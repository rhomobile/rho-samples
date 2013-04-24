App.reopen({
    productClass: Rho.ORM.addModel('Product')
});

if (App.productClass.find('all').length == 0) {
    App.productClass.create({'name': "Galaxy S3"});
    App.productClass.create({'name': "iPhone 5"});
}

ProductProxy = Ember.Object.extend({
    subject: null,

    id: function () {
        return this.subject.get('object');
    }.property('subject'),

    name: function () {
        return this.subject.get('name');
    }.property('subject')
});

/* Ember.Handlebars.registerBoundHelper('name', function (ormModel) {
 return ormModel.get('name');
 });

 Ember.Handlebars.registerBoundHelper('object', function (ormModel) {
 return ormModel.get('object');
 });

 */

App.ProductsController = Ember.Controller.extend({
    goHome: function () {
        this.transitionToRoute('home')
    },
    new: function () {
        this.transitionToRoute('products/new')
    },
    products: [],
    readProducts: function () {
        this.products = [];
        var readedProducts = App.productClass.find('all');
        for (var i = 0; i < readedProducts.length; i++) {
            var productProxy = ProductProxy.create({subject: readedProducts[i]});
            this.products.pushObject(productProxy)
        }
    }
});

App.ProductsRoute = Ember.Route.extend({
    setupController: function (controller) {
        controller.readProducts();
    }
});

