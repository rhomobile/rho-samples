require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class SignalController < Rho::RhoController
  include BrowserHelper

  def signal_status
    signal_values = Rho::SignalIndicators.wlanStatus()
    Rho::Notification.showPopup({
        :message => "Signal Status:\nStrength: #{signal_values["signalStrength"]}\nESS ID: #{signal_values["essid"]}\nMacAddress: #{signal_values["macAddress"]}\nAdapterName: #{signal_values["adapterName"]}\nDHCP Server: #{signal_values["dhcpServer"]}\nDHCP Static: #{signal_values["dhcpStatic"]}\nGateway: #{signal_values["gateway"]},\nIP Address: #{signal_values["ipAddress"]},\nRSSI: #{signal_values["rssi"]},\nSubnet Mask: #{signal_values["subnetMask"]},\nWins: #{signal_values["wins"]}",
        :buttons => ["OK"]
      })
    redirect :confirm_signal_status
  end

  def show_signal_icon
  	Rho::SignalIndicators.showIcon({color:'#FF0000',layout: @params['iconLayout']})
  	redirect :confirm_signal_indicator
  end

  def hide_signal_icon
  	Rho::SignalIndicators.hideIcon()
  	redirect :confirm_signal_indicator
  end
end