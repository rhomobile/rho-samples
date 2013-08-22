require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class NativeMenubarController < Rho::RhoController
  include BrowserHelper
  
  def menubar_menu
    render
  end
  
  
  def create_menuitems
    Rho::NativeMenubar.extraButton = {
      :label => "Extra"
    }

    Rho::NativeMenubar.extraMenu = [
      {
        :label => "Show alert 1",
        :action => url_for(:action => :show_alert_1)
      },
      {
        :label => "Show alert 2",
        :action => url_for(:action => :show_alert_2)
      },
      {
        :label => "Win the lottery",
        :disabled => true # sorry! maybe in the next version. Pull requests welcome
      }
    ]

    Rho::Notification.showPopup({
      :message => "Items added - check the app's left-key menu",
      :buttons => ["OK"]
    })
    
    render :action => :menubar_menu
  end

  def show_alert_1
    Rho::Notification.showPopup({
      :message => "This alert was invoked from a NativeMenubar item",
      :buttons => ["OK"]
    })
    render :action => :menubar_menu    
  end

  def show_alert_2
    Rho::Notification.showPopup({
      :message => "This is another alert, also called from the NativeMenubar",
      :buttons => ["OK"]
    })
    render :action => :menubar_menu    
  end
  
  def remove_menuitems
    Rho::NativeMenubar.extraMenu = []
    render :action => :menubar_menu
  end
end