

App.ProductnewController = Ember.ArrayController.extend({
  actions: {
    save: function () {
      console.log(this);
      var name = this.get('name');
      // if (!name.trim()) { return; }
      
      var brand = this.get('brand');
      
      var qty = this.get('qty');
      // if (!qty.trim()) { qty=0; }
      
      var product = this.store.createRecord('product', {
        name: name,
        brand: brand,
        qty: qty,
        isAvailable: true

      });

      console.log(product);

      // Save the new model
      product.save();

      this.transitionTo('products');
    }
  }
});

App.ProducteditController = Ember.ObjectController.extend({
  actions: {
    save: function () {

      var name = this.get('name');
      //if (!name.trim()) { return; }
      
      var brand = this.get('brand');
      
      var qty = this.get('qty');
      // if (!qty.trim()) { qty=0; }
      
      this.get('model').save();

      this.transitionTo('products');
    }
  }
});


App.ProductdeleteController = Ember.ObjectController.extend({
  actions: {
    delete: function () {
      // console.log(this.get('model'));
      var product = this.get('model');
      product.deleteRecord();
      product.save();
      this.transitionTo('products');
    }
  }
});