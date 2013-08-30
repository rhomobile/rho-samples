require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class CardreaderController < Rho::RhoController
  include BrowserHelper
  
  def index
    render
  end
  
  def open_cardreader
    render
  end
  
  def connect
    Rho::CardReader.open(url_for(:action => :cardreader_callback))
    redirect :open_cardreader
  end
  
  def cardreader_callback
    p @params,"--------------------cardreader_callback"
    Rho::Notification.showPopup({
      :title => "RhoMobile 4.0 Kitchen Sink",
      :message => "Received card reader data: #{@params["data"]}",
      :buttons => ["OK"]
    })
  end
  def properties
    render
  end
  def set_properties
    # Configure the MSR to output keystrokes instead of calling a function when a card is swiped
    # Note the absence of a callback parameter
    set_selected_property
    Rho::CardReader.open(url_for(:action => :cardreader_callback))
    redirect :properties
  end

  def set_selected_property
    if @params["property"] == 'autoTab'
      Rho::CardReader.autoTab = true
    else
      Rho::CardReader.autoEnter = true
    end
  end
end
