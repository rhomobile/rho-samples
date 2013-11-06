App.Product = DS.Model.extend({
  name: DS.attr('string'),
  brand: DS.attr('string'),
  qty: DS.attr('number'),
  isAvailable: DS.attr('boolean')
});

App.ProductAdapter = DS.RhomAdapter.extend({
  model: "Product"
});

App.Product.FIXTURES = [
 {
  id: 1,
  name: '328i',
  brand: 'BMW',
  qty: 5,
  isAvailable: true
 },
 {
  id: 2,
  name: '528i',
  brand: 'BMW',
  qty: 3,
  isAvailable: true
 },
 {
  id: 3,
  name: '728i',
  brand: 'BMW',
  qty: 0,
  isAvailable: false
 },
];