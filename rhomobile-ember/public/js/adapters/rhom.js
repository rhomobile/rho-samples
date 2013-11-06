DS.RhomAdapter = DS.Adapter.extend(Ember.Evented, {

    extractVars: function(rhomRecord) {
        return rhomRecord.vars();
    },

    objectToId: function(record) {
        record["id"] = record.object;
        return Ember.copy(record);
    },

    find: function(store, type, id) {
        console.log('find');
        var record = Rho.ORM.getModel(this.model).find(
            'first',
            {
                conditions: {object: id}
            }
        );
        var result = record.vars();
        result["id"] = result.object;
        return Ember.RSVP.resolve(result);
    },

    findAll: function(store, type) {
        console.log('findALl');
        var records = Rho.ORM.getModel(this.model).find('all');
        var results = records.map(this.extractVars);
        var results = results.map(this.objectToId);
        var promise = new Ember.RSVP.Promise(function(resolve, reject){
          // succeed
          resolve(results);
          // or reject
          reject([]);
        });
        return promise;
    },

    createRecord: function(store, type, record) {
      var json = record.toJSON();
      thisRecord = Rho.ORM.getModel(this.model).create(record.toJSON());
      json.id = thisRecord.get('object'); 
      return Ember.RSVP.resolve(json);
        // Rho.ORM.getModel(this.model).create(record.toJSON());
        // return Ember.RSVP.resolve();
    },

    updateRecord: function(store, type, record) {
        console.log(record.get('id'));
        var result = Rho.ORM.getModel(this.model).find('first', {conditions: {object: record.get('id')}});
        result.updateAttributes(record.toJSON());
        return Ember.RSVP.resolve();
    },

    deleteRecord: function(store, type, record) {
        var result = Rho.ORM.getModel(this.model).find('first', {conditions: {object: record.get('id')}});
        result.destroy();
        return Ember.RSVP.resolve();
    }


});


