require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class ScreenorientationController < Rho::RhoController
  include BrowserHelper

  def auto_rotate
    @is_auto_rotated = Rho::ScreenOrientation.autoRotate
  end
  
  def toggle_autorotation
    Rho::ScreenOrientation.autoRotate = !Rho::ScreenOrientation.autoRotate
    redirect :action => :auto_rotate
  end
  
  def set_callback
    Rho::ScreenOrientation.setScreenOrientationEvent(url_for(:action => :orientation_callback))
    redirect :action => :confirm_set_callback
  end
  
  def remove_callback
    Rho::ScreenOrientation.setScreenOrientationEvent("")
    redirect :action => :confirm_set_callback
  end
  
  def orientation_callback
    Rho::Notification.showPopup({
      :message => "The screen changed orientation. The new orientation is: #{@params["result"]}",
      :buttons => ["OK"]
    })
  end
  
  def left_handed_position
    Rho::ScreenOrientation.leftHanded
    redirect :action => :change_orientations
  end
  
  def right_handed_position
    Rho::ScreenOrientation.rightHanded
    redirect :action => :change_orientations
  end
  
  def upside_down_position
    Rho::ScreenOrientation.upsideDown
    redirect :action => :change_orientations
  end
  
  def normal_position
    Rho::ScreenOrientation.normal
    redirect :action => :change_orientations
  end

end