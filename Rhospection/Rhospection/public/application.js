var	Report = Rho.ORM.addModel(function(model){
  model.modelName("Report");
  model.property("name","string");
  model.property("pass","boolean");
  model.property("date","string");
  model.property("location","string");
  model.property("author","string");
  model.property("reportid","string");
  model.enable("sync");
  model.set("partition","user");
});

var ReportItem = Rho.ORM.addModel(function(model){
  model.modelName("ReportItem");
  model.property("reportid","string");
  model.property("productid","string");
  model.property("imgsrcLocal","string");
  model.property("imgsrcRemote","string");
  model.property("status","string");

  model.enable("sync");
  model.set("partition","user");
});

