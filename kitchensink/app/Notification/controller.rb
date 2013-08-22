require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class NotificationController < Rho::RhoController
  include BrowserHelper
  

  def notification_menu
    render
  end
  
  def beep
    Rho::Notification.beep({
      :frequency => 40000,
      :volume => 1,
      :duration => 2000
    })
    
    redirect :notification_menu
  end
  
  def popup
    Rho::Notification.showPopup({
      :message => "Hello, world!",
      :title => "Greeting",
      :icon => :info,
      :buttons => ["Fine"]
    })
    redirect :notification_menu
  end
  
  def popup_with_multiple_buttons
    Rho::Notification.showPopup({
      :message => "How are you feeling today?",
      :title => "Hey there",
      :icon => :question,
      :buttons => [
        { :id => "1",
          :title => "Amazing"
        },
        { :id => "42",
          :title => "Super"
        },
        { :id => "3",
          :title => "Great"
        }
        ]
    },url_for(:action => :popup_callback))
    redirect :notification_menu
  end
  
  def popup_callback
    Rho::Notification.showPopup({
      :message => "You clicked a button with id=#{@params["button_id"]}, index=#{@params["button_index"]} and title=#{@params["button_title"]}",
      :buttons => ["OK"]
    })
  end
end