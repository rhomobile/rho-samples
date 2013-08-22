require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class VideocaptureController < Rho::RhoController
  include BrowserHelper
  
  def index
    render
  end
  
  def capture_video
    Rho::Videocapture.fileName = '/RhoVideoCapture'
    Rho::Videocapture.duration = 60000
    Rho::Videocapture.start(url_for(:action => :save_captured_video))
    redirect :index
  end

  def save_captured_video
    puts "Save params: #{@params}"
    puts "Result is #{@params['transferResult']}"
    puts "Name is #{@params['fileName']}"       
    puts "Size is #{@params['size']}" 
    Rho::Notification.showPopup({
      :message => "Video was saved in the #{@params['fileName']}",
      :buttons => ["OK"]
    })
  end
  
  def capture_video_with_resolution
    Rho::Videocapture.fileName = '/RhoVideoCapture'
    Rho::Videocapture.resolution = @params['resolution']
    Rho::Videocapture.duration = 60000
    Rho::Videocapture.start(url_for(:action => :save_captured_video))
    redirect :select_resolution
  end
end
