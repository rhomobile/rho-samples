KitchenSink.Samples.Camera = KitchenSink.Samples.Camera || (function($) {
	  
    var cameras = [];
      
    function picture_taken_callback(params) {
      // Did we receive an image?
      if (params["status"]=="ok") {
        $("#captured_image").attr("src", Rho.Application.expandDatabaseBlobFilePath(params["imageUri"]));
      }

    }
    
    function take_picture_with_default_camera() {
      // Capture an image from the default camera on the device, using the default image settings
      Rho.Camera.takePicture({}, picture_taken_callback);
    }

    function take_picture_with_camera(cameraIndex) {
      var camera = cameras[cameraIndex];
      camera.takePicture({}, picture_taken_callback);
    }
    
    function choose_camera() {
      // get all available cameras
      cameras = Rho.Camera.enumerate();

      // build an HTML list
      var cameraList = "<ul>";
           
      for (var cameraIndex=0; cameraIndex<cameras.length; cameraIndex++) {
        var camera = cameras[cameraIndex];
        // Create a link for each camera with an onclick handler
        cameraList = cameraList +'<li><a href="#" class="take_picture_with_selected_camera" onclick="take_picture_with_camera('+cameraIndex+')" data-role="button">'+camera.cameraType+'</a></li>';
      }
      
      cameraList = cameraList+"</ul>";
      
      // make camera list visible to the user
      $(this).closest(".sample.javascript").find(".camera_list").html(cameraList).trigger("create");
    }
    
    function determine_camera_capabilities() {
      var capabilitiesList = "<ul>"; 
    
      // Get all capabilities of the camera...
      var capabilities = Rho.Camera.getAllProperties();

      // ... compose a nicely formatted list with their names and values ...
      for (var capability in capabilities) {
        capabilitiesList+="<li>"+capability+": "+capabilities[capability]+"</li>";
      }

      capabilitiesList += "</ul>";
      
      // ... and show it
      $("#camera_capabilities").html(capabilitiesList);
    }
    
    function sample_control_image_properties() {
      // Instead of accepting the defaults, let's set some properties to our liking
      
      // We will ask for a PNG file...
      Rho.Camera.compressionFormat = "png";
      
      // ...a particular image size...
      Rho.Camera.desiredWidth = 1024;
      Rho.Camera.desiredHeight = 768;
      
      // ...and force the flash to be used
      Rho.Camera.flashMode = "on";
      
      // Now, take the picture
      Rho.Camera.takePicture({}, picture_taken_callback);   
    }

    function _read_properties_from_form() {
    	var result={};
    	$.mobile.activePage.find("form input[type=radio]:checked").each(function() {
    		var element = $(this);
    		result[element.attr('name')] = element.val();
    	});
    	
    	return result;
    }
    
    function set_image_properties() {
    	var properties = _read_properties_from_form();
    	var resolution = properties.resolution.split("x");
    	var desired_width = resolution[0];
    	var desired_height = resolution[1];
    	
    	Rho.Camera.takePicture({
    		compressionFormat : properties["compressionFormat"],
			desiredWidth : desired_width,
			desiredHeight: desired_height
    	}, picture_taken_callback);
    }
    
    function select_picture_from_gallery() {
      Rho.Camera.choosePicture({}, picture_taken_callback);
    }
    
    function picture_taken_callback_save_to_gallery(params) {
      if (params["status"]=="ok") {
        Rho.Camera.saveImageToDeviceGallery(Rho.Application.expandDatabaseBlobFilePath(params["imageUri"]));
          
        alert("Image saved to gallery");
      }
    }
    
    function take_picture_and_save_it_to_gallery() {
      Rho.Camera.takePicture({}, picture_taken_callback_save_to_gallery);
    }
    	
	return {
		take_picture_with_default_camera : take_picture_with_default_camera,
		choose_camera : choose_camera,
		determine_camera_capabilities : determine_camera_capabilities,
		set_image_properties : set_image_properties,
		take_picture_and_save_it_to_gallery : take_picture_and_save_it_to_gallery,
		select_picture_from_gallery : select_picture_from_gallery
	};

})(jQuery);