require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class WebviewController < Rho::RhoController
  include BrowserHelper
  
  def index
    render
  end
  
  def set_properties
    Rho::WebView.acceptLanguage = Rho::WebView.acceptLanguage == "en-US" ? "de" : "en-US"
    @fullScreen = Rho::WebView.fullScreen ? "Yes" : "No"
    @currentURL = Rho::WebView.currentURL
    @currentLocation = Rho::WebView.currentLocation
  end
  
  def toggle_fullscreen
    Rho::WebView.fullScreen = !Rho::WebView.fullScreen
    redirect :set_properties
  end
  
  def execute_code
    #call javascript alert on the current page
    Rho::WebView.executeJavascript("alert('This javascript alert was called from ruby code');")
    redirect :call_js
  end
  
  def go_back
     #Force WebView to navigate to the previous page using Browser back.
      Rho::WebView.navigateBack
  end
  
  def navigate_page
    #Force WebView to navigate to a URL.
    Rho::WebView.navigate(url_for(:action => :set_properties))
  end
  
  def refresh
    # call to refresh the current page.
    Rho::WebView.refresh()
    redirect :action => :refresh_page
  end
  
  def refresh_page
    render
  end
  def save
    # saves the current page
    filename = Rho::RhoFile.join(Rho::Application.userFolder,'current_page.jpeg')
    Rho::WebView.save('jpeg',filename)
    Rho::Notification.showPopup({
      :message => "Current page was saved in the #{filename}",
      :buttons => ["OK"]
    })
    redirect :action => :save_page
  end
  
  def call_js
    render
  end
  
  def navigate
    render
  end
end

