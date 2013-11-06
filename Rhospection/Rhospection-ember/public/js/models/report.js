var	Report = Rho.ORM.addModel(function(model){
  model.modelName("Report");
  model.property("name","string");
  model.property("pass","boolean");
  model.property("date","string");
  model.property("location","string");
  model.property("author","string");
  model.property("ispublic","boolean");
  model.property("reportid","string");
  model.enable("sync");
  model.set("partition","user");
});

App.Report = DS.Model.extend({
  object: DS.attr('string'),
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
    return this.store.find('report');
   }
});

App.ReporteditRoute = Ember.Route.extend({
  model: function(params) {
        console.log(params.report_id);
        return this.store.findBy('id',params.report_id);

    
  }
});

