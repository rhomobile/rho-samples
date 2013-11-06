require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class CameraController < Rho::RhoController
  include BrowserHelper
  
  
  def take_picture_with_default_camera
    # Capture an image from the default camera on the device, using the default image settings
    Camera.take_picture(url_for(:action => :picture_taken_callback),{:desired_width => "640",:desired_height => "480"})
  end
  
  def picture_taken_callback
    if (@params["status"]=="ok")
      image = Rho::Application.expandDatabaseBlobFilePath(@params["image_uri"])
      Rho::WebView.execute_js("change_image_source('"+image+"')")
    else
      Rho::WebView.execute_js("alert('Error taking Picture')")
    end
  end
  

end