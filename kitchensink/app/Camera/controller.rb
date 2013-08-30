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
    Camera.take_picture(url_for(:action => :picture_taken_callback))
    redirect :action => :confirm_take_picture_with_default_camera
  end
  
  def picture_taken_callback
    Rho::Log.info(@params.inspect,"callback params")
    # Did we really take a picture?
    if (@params["status"]=="ok")
      # If so, copy it from its temporary location and show it
      image = Rho::Application.expandDatabaseBlobFilePath(@params["image_uri"])
      # remove URL schema

      Rho::WebView.navigate(url_for(:action => :show_picture, :query => {:image => image}))
    else
      # Otherwise we are done here
      Rho::WebView.navigate(url_for(:action => :picture_was_not_taken))
    end
  end
  
  def show_picture
    @image = @params["image"]
    render
  end
  
  def select_picture_from_gallery 
    Camera::choose_picture(url_for(:action => :picture_taken_callback))
  end
  
  def confirm_take_picture_and_save_it_to_gallery
    render
  end
  
  def take_picture_and_save_it_to_gallery
    Camera::take_picture(url_for(:action => :picture_taken_callback_save_to_gallery))    
  end
  
  def picture_taken_callback_save_to_gallery
    # Did we really take a picture?
    if (@params["status"]=="ok")
      # If so, save it to the gallery
      Camera::save_image_to_device_gallery(Rho::Application.expandDatabaseBlobFilePath(@params["image"]))
      Rho::Notification.showPopup({
        :title => "RhoMobile 4.0 Kitchen Sink",
        :message => "Image saved to gallery",
        :buttons => ["OK"]
      })
    end

    Rho::WebView.navigate(url_for(:action => :confirm_take_picture_and_save_it_to_gallery))
    
  end  
end
