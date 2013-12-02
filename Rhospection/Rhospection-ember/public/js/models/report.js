Rho.ORM.addModel(function(model){
  model.modelName("Report");
  
});

App.Report = DS.Model.extend({
  name: DS.attr('string'),
  pass: DS.attr('boolean'),
  ispublic: DS.attr('boolean'),
  author: DS.attr('string'),
  reportid: DS.attr('string')
});

App.ReportAdapter = DS.RhomAdapter.extend({
  model: "Report"
});


App.ReportsRoute = Ember.Route.extend({
  model: function(){
    console.log(this.store.find('report').length);
    return this.store.find('report');
   }
});

App.ReporteditRoute = Ember.Route.extend({
  model: function(params) {
        console.log('Edit');
        console.log(this.store.findBy('id',params.report_id));
        return this.store.findBy('id',params.report_id);

    
  }
});

