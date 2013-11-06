

App = Ember.Application.create();


App.Router.map(function() {
  // put your routes here
  this.resource('register');
  this.resource('forgot');
  this.resource('reports');
  this.resource('reportedit', { path: ':report_object' });
  this.resource('reportnew');
});



Ember.Handlebars.helper('log-model', function(input) {
  console.log(input);
  return ;
});