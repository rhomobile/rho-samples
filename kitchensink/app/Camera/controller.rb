require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class CameraController < Rho::RhoController
  include BrowserHelper
  
  def index
    render
  end
  
  def confirm_take_picture_with_default_camera
    render
  end
  
  def take_picture_with_default_camera
    # Capture an image from the default camera on the device, using the default image settings
    Rho::Camera.takePicture({:fileName => Rho::RhoFile.join(Rho::Application.userFolder,"tmp")}, url_for(:action => :picture_taken_callback))
  end
  
  def picture_taken_callback
    Rho::Log.info(@params.inspect,"callback params")
    # Did we really take a picture?
    if (@params["status"]=="ok")
      # If so, copy it from its temporary location and show it
      tmp_image = @params["imageUri"]
      # remove URL schema
      if (tmp_image.start_with?("file://"))
        tmp_image["file://"]=""
        extension = Rho::RhoFile.basename(tmp_image).split(".")[1]
        saved_image = Rho::RhoFile.join(Rho::Application.userFolder,"image.#{extension}")
  
        # delete previous file if it exists
        result = Rho::RhoFile.deleteFile(saved_image)
        
        Rho::Log.info("Result of deleting #{saved_image} : #{result}", "CAMERA CALLBACK")
  
        # rename temporary file to new location
        result = Rho::RhoFile.rename(tmp_image,saved_image)
        Rho::Log.info("Result of renaming #{tmp_image} to #{saved_image} : #{result}", "CAMERA CALLBACK")
        
        Rho::Log.info("#{saved_image} exists?: #{Rho::RhoFile.exists(saved_image)}", "CAMERA CALLBACK")
      else
        saved_image = tmp_image
      end
      Rho::WebView.navigate(url_for(:action => :show_picture, :query => {:image => saved_image}))
    else
      # Otherwise we are done here
      Rho::WebView.navigate(url_for(:action => :picture_was_not_taken))
    end
  end
  
  def show_picture
    @image = @params["image"]
    render
  end
  
  def choose_camera
    $cameras = Rho::Camera.enumerate
    render
  end
  
  def take_picture_using_chosen_camera
    camera = $cameras[@params["camera_index"].to_i]
    camera.takePicture({:fileName => Rho::RhoFile.join(Rho::Application.userFolder,"tmp")}, url_for(:action => :picture_taken_callback))
  end
  
  def determine_camera_capabilities
    # Get all camera properties
    @properties = Rho::Camera.getAllProperties
    render
  end

  def sample_control_image_properties
    # Instead of accepting the defaults, let's set some properties to our liking
    
    # We will ask for a PNG file...
    Rho::Camera.compressionFormat = "png"
    
    # ...a particular image size...
    Rho::Camera.desiredWidth = 1024
    Rho::Camera.desiredHeight = 768
    
    # ...and force the flash to be used
    Rho::Camera.flashMode = "on"
    
    # Now, take the picture
    Rho::Camera.takePicture({:fileName => Rho::RhoFile.join(Rho::Application.userFolder,"tmp")}, url_for(:action => :picture_taken_callback))    
  end
  
  def edit_image_properties
    @valid_sizes = Rho::Camera.supportedSizeList
    render
  end
  
  def set_image_properties
    Rho::Log.info(@params.inspect,"Image properties - parameters")
    desiredWidth, desiredHeight = @params["resolution"].split("x")

    Rho::Camera.takePicture({
      :fileName => Rho::RhoFile.join(Rho::Application.userFolder,"tmp"),
      :compressionFormat => @params["compressionFormat"], 
      :desiredWidth => desiredWidth,
      :desiredHeight => desiredHeight
    },
    url_for(:action => :picture_taken_callback))      
  end
  
  def select_picture_from_gallery 
    Rho::Camera.choosePicture({:fileName => Rho::RhoFile.join(Rho::Application.userFolder,"tmp")}, url_for(:action => :picture_taken_callback))
  end
  
  def confirm_take_picture_and_save_it_to_gallery
    render
  end
  
  def take_picture_and_save_it_to_gallery
    Rho::Camera.takePicture({
      :fileName => Rho::RhoFile.join(Rho::Application.userFolder,"tmp"),
      :saveToDeviceGallery => true
    }, url_for(:action => :picture_taken_callback))    
  end
  
  def picture_taken_callback_save_to_gallery
    # Did we really take a picture?
    if (@params["status"]=="ok")
      # If so, save it to the gallery
      Rho::Camera.saveImageToDeviceGallery(@params["imageUri"])
      Rho::Notification.showPopup({
        :message => "Image saved to gallery",
        :buttons => ["OK"]
      })
    end

    Rho::WebView.navigate(url_for(:action => :confirm_take_picture_and_save_it_to_gallery))
    
  end  
end
