

App = Ember.Application.create();


App.Router.map(function() {
  // put your routes here
  this.resource('register');
  this.resource('forgot');
  this.resource('reports');
  this.resource('reportedit', { path: 'Report/:report_id' });
  this.resource('reportnew');
});


Ember.Handlebars.helper('log-model', function(input) {
  console.log('Model:');
  console.log(input);
  return ;
});