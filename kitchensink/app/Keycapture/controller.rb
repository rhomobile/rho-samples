require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class KeycaptureController < Rho::RhoController
  include BrowserHelper

  def index
    render
  end

  def keycapture_callback
    Rho::Notification.showPopup({
      :title => "RhoMobile 4.0 Kitchen Sink",
      :message => "Captured key: #{@params["keyValue"]}",
      :buttons => ["OK"]
    })
  end

  def start_keycapture
    Rho::KeyCapture.captureKey(false,"all", url_for(:action => :keycapture_callback))
    redirect :action => :index
  end
  
  def stop_keycapture
    Rho::KeyCapture.captureKey(true,"all")
    redirect :action => :index
  end
end
