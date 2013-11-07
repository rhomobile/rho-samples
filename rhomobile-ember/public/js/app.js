Rho.ORM.addModel(function(model){
  model.modelName("Product");
  model.property("name","string");
  
});



App = Ember.Application.create();


 App.ApplicationAdapter = DS.FixtureAdapter.extend();

// App.store = DS.Store.create({
//   adapter: App.RhomAdapter
// });

App.Router.map(function() {
  // put your routes here
  this.resource('products', {path: '/'}, function(){
  this.resource('productedit', { path: ':product_id' });
  this.resource('productdelete', { path: '/:product_id/delete' });
  this.resource('productnew');
  });
});


App.ProductsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('product');
  },
  actions: {
    up: function(m) {
    	m.set('qty',parseInt(m.get('qty')) + 1);
    	m.save();
    },
    down: function(m) {
    	m.set('qty',parseInt(m.get('qty')) - 1);
    	m.save();
    }
  }
});


App.ProductsEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.findBy('id',params.product_id);
    
  }
});

App.ProductsDeleteRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.findBy('id',params.product_id);
    
  }
});


Ember.Handlebars.helper('log-model', function(input) {

  console.log(input.get('qty'));
  return ;
});