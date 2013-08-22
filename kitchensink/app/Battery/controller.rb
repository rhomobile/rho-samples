require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class BatteryController < Rho::RhoController
  include BrowserHelper

  def battery_status
    battery_values = Rho::Battery.batteryStatus({:trigger => @params['trigger']})
    puts "Battery Event Fired: #{battery_values}--------------battery_status_callback-------------------"
    Rho::Notification.showPopup({
        :message => "AC Line Status: #{battery_values["acLineStatus"]},Battery Life Percent: #{battery_values["batteryLifePercent"]}",
        :buttons => ["OK"]
      })
    redirect :confirm_battery_status
  end

  def show_battery_icon
  	Rho::Battery.showIcon({color:'#FF0000',layout: @params['iconLayout']})
  	redirect :confirm_battery_indicator
  end

  def hide_battery_icon
  	Rho::Battery.hideIcon()
  	redirect :confirm_battery_indicator
  end
end