KitchenSink.Samples.ORM = KitchenSink.Samples.ORM || (function() {

	function create_model() {
		var model = get_model();
		if (!model) {
			model = Rho.ORM.addModel(function(model) {
				model.modelName("Product");
				model.enable("sync");
				model.property("name", "string");
				model.property("brand", "string");
				model.property("price", "float");
				model.set("partition", "user");
			});
		}
		return model;
	}
	
	function get_model() {
		var model = Rho.ORM.getModel("Product");
		return model;
	}
	
	function if_model_exists(callback) {
		var model = get_model();
		if (!model) {
			alert("The \"Product\" model does not exist. Please create it before running this sample");
			return false;
		} else {
			if (callback) {
				return callback(model);
			}
		}
	}
	
	function refresh_view() {
		var template = ""+
        "<tr>"+
        "<td><%= product.name %></td>"+
        "<td><%= product.brand %></td>"+
        "<td><%= product.price %></td>"+
      "</tr>";

        var model = get_model();
        var products = model.find("all");
        var body_html = "";
        for (var i=0; i < products.length; i++) {
        	var product = products[i];
        	var row_html = "<tr>"+
            "<td>"+product.get("name")+"</td>"+
            "<td>"+product.get("brand")+"</td>"+
            "<td>"+product.get("price")+"</td>"+
			"</tr><tr>"+
            "<td colspan='3'><a data-role='button' data-inline='true' data-product-id='"+product.object()+"' class='shuffle_price'>Shuffle price</a>"+

            	"<a data-role='button' data-inline='true' data-product-id='"+product.object()+"' class='delete_product'>Delete</a>"+
			"</td>"+
            "</tr>";

            body_html+=row_html;
        }
        
		table = $("#products_table");
		table.find("tbody").html(body_html).trigger("create");
		
	}
	
	function generate_price() {
		return (99.99+(Math.random()*100+1)).toFixed(2);
	}
	
	function create_object() {
		var product = if_model_exists(function(model) {
			var product = model.create({
				  brand: 'Motorola',
				  name: 'ET1',
				  price: generate_price()
			});
			
			refresh_view();
			
			return product
		});
	}
	
	function shuffle_price(id) {
		var model = get_model();
		var product = model.find("first", {
			conditions: {"object" : id}
		});
		product.set("price", generate_price());
		product.save();
	}

	function delete_product(id) {
		var model = get_model();
		var product = model.find("first", {
			conditions: {"object" : id}
		});
		product.destroy();
	}

	$(document).on("click", ".shuffle_price", function(){
		var id = $(this).data("product-id").toString();
		shuffle_price(id);
		refresh_view();
	});
	
	$(document).on("click", ".delete_product", function() {
		var id = $(this).data("product-id").toString();
		delete_product(id);
		refresh_view();
	});
	
	return {		
		create_model : create_model,		
		create_object : create_object,
		refresh_view : refresh_view,
		shuffle_price : shuffle_price
	};

})();