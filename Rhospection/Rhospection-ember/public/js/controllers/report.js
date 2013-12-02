App.ReportsView = Ember.View.extend({
    didInsertElement: function() {
      this._super();
      console.log('Report View');
      if(Rho.ORM.haveLocalChanges()){
        this.$('#message').show();
        this.$('#message').html('<a href="/app/Sync" class=""><i class="icon icon-warning-sign icon-small"></i><strong>Local Changes Not Synced</strong></a>');
      }
      else
      {
        this.$('#message').hide();

      }

    }

});

App.ReportnewView = Ember.View.extend({
    didInsertElement: function() {
      this._super();
      this.$('#pass-switch').bootstrapSwitch('setOnClass', 'success');
      this.$('#pass-switch').bootstrapSwitch('setOffClass', 'warning');
      console.log('UI');

    }

});


App.ReportnewController = Ember.ArrayController.extend({
  actions: {
    save: function () {
      
      var thisReport = this.store.createRecord('Report', {
        name: this.get('name'),
        pass: $('#pass').is(':checked'),
        ispublic: $('#ispublic').is(':checked'),

      });

      // console.log(thisReport);

      // Save the new model
      thisReport.save();

      this.transitionTo('reports');
     
    }
  }
});


App.ReporteditController = Ember.ObjectController.extend({
  actions: {
    save: function () {
      this.get('model').set('pass', $('#pass').is(':checked'));
      this.get('model').set('ispublic', $('#ispublic').is(':checked'));
      this.get('model').save();
      this.transitionTo('reports');
     
    },
    delete: function (){
    thisReport.destroy();
    this.transitionTo('reports')

    }
  }
});