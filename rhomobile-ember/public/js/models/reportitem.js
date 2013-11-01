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
