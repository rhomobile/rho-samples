(function() {

    $(document).bind("mobileinit", function () {
        $.mobile.ajaxEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
    });



    var rhoProductModel = Rho.ORM.addModel('Product', function(model) {
        // Uncomment for RhoConnect integration
        // model.enable("sync");
        model.setModelProperty("name", "string");
        model.setModelProperty("brand", "string");
        model.set("partition", "app");
    });




    var productApp = angular.module("ProductApp", ['ngRoute']);


    productApp.factory("ProductHelper", function() {
        var ormModel = Rho.ORM.getModel("Product");
        return {
            products: [],
            load_products: function() {
                // we do not want to reassign the array, because we are binding it in the
                // Home controller's scope and that would break the binding. Instead, we
                // just empty it before loading products from the database
                this.products.splice(0,this.products.length);

                var rhoProducts = ormModel.find("all");
                for (var i = 0; i < rhoProducts.length; i++) {
                    var rhoProduct = rhoProducts[i];
                    this.products.push(this.to_hash(rhoProduct));
                }
            },
            create: function(params) {
                var rhoProduct = ormModel.create(params);
                var hash = this.to_hash(rhoProduct);
                this.products.push(hash);
                return hash;
            },
            del: function(product_id) {
                var rhoProduct = this.find_by_id(product_id);
                if (rhoProduct) {
                    // remove the product from the database
                    rhoProduct.destroy();
                }

                // remove the product from the products array
                // this is faster than discarding and re-reading the whole collection
                for (var i=0; i<this.products.length; i++) {
                    var product = this.products[i];

                    if (product.object == product_id) {
                        this.products.splice(i,1);
                        break;
                    }
                }
            },
            update: function(rhoProduct, hash) {
                rhoProduct.updateAttributes(hash);

                for (var i=0; i<this.products.length; i++) {
                    var product = this.products[i];
                    if (product.object==hash.object) {
                        this.products[i] = hash;
                        break;
                    }
                }
            },
            find_by_id: function(product_id) {
                //return ormModel.find("first", {conditions: {"object": product_id}});
                return ormModel.find(product_id);
            },
            to_hash: function(rhoProduct) {
                return {
                    object: rhoProduct.object,
                    name: rhoProduct.get("name"),
                    brand: rhoProduct.get("brand")
                }
            }
        };
    });

    productApp.controller("HomeCtrl",
        // request the ProductHelper via dependency injection
        function HomeCtrl($scope, $location, ProductHelper) {

            $scope.products = ProductHelper.products;

            $scope.create = function() {
                // navigate to edit page without passing an id
                // the Edit controller will interpret that as a request to create a new product
                $location.url("/edit");
            }

            $scope.create_with_data = function() {
                ProductHelper.create({name: "New product"});
            }

            $scope.del = function(product_id) {
                ProductHelper.del(product_id);
            }

            $scope.sync = function() {
                // RhoConnect integration
                Rho.RhoConnectClient.doSync();
            }

            $scope.$on("$viewContentLoaded", function($scope) {
                $(".ui-page-active").trigger("create");
            });
        }
    );

    productApp.controller("EditCtrl",
        function EditCtrl($scope,$routeParams,$location,ProductHelper) {
            var product_id = $routeParams.id;

            if (product_id) {
                var rhoProduct = ProductHelper.find_by_id(product_id);
                $scope.product = ProductHelper.to_hash(rhoProduct);
                $scope.rhoProduct = rhoProduct;
            } else {
                $scope.product = {};
            }

            $scope.save = function() {

                if (this.rhoProduct) {
                    ProductHelper.update(this.rhoProduct,this.product);
                } else {
                    ProductHelper.create(this.product);
                }
                $location.url("/app");
            }
        }
    );

    productApp.config(function($routeProvider) {
        $routeProvider.when("/app", {
            templateUrl: "/public/partials/index.html",
            controller: "HomeCtrl"
        })
            .when("/edit/:id", {
                templateUrl: "/public/partials/edit.html",
                controller: "EditCtrl"
            })
            .when("/edit", {
                templateUrl: "/public/partials/edit.html",
                controller: "EditCtrl"
            })
            .otherwise({
                redirectTo: "/app"
            });
    });

    productApp.run(function(ProductHelper) {
        ProductHelper.load_products();
    });

    // directive to trigger "create" on an ngRepeat after the last element is rendered
    productApp.directive("jqmElement", function() {
        return function(scope, element, attrs) {
            if (scope.$last) {
                $(element).closest(".ui-page").trigger("create");
            }
        }
    });

})();
