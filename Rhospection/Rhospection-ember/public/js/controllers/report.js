App.ReportnewController = Ember.ObjectController.extend({
  actions: {
    save: function () {
      //Save in RhomFirst
      thisReport = Report.create({
              name:$('#name').val(),
              pass:$('#pass').is(':checked'),
              author:Rho.RhoConnectClient.userName,
              ispublic:$('#ispublic').is(':checked')
            });
      //update reportid field to use object
      //so after rhoconnect sync can still link
      //to ReportItems
      thisReport.updateAttributes({reportid:thisReport.get("object")});

      this.transitionTo('reports');
     
    }
  }
});


App.ReporteditController = Ember.ObjectController.extend({
  actions: {
    save: function () {

      //Save in RhomFirst
      // thisReport.updateAttributes({
      //         name:$('#name').val(),
      //         pass:$('#pass').is(':checked'),
      //         ispublic:$('#ispublic').is(':checked')
      //       });
      
      console.log(this.get('model'));

      this.get('store').commit();
      this.transitionTo('reports');
     
    },
    delete: function (){
    thisReport.destroy();
    this.transitionTo('reports')

    }
  }
});