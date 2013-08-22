require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class SensorsController < Rho::RhoController
  include BrowserHelper
  
  def accelerometer_test
    render
  end
  
  def accelerometer_callback
    @accelerometer_x = @params['accelerometer_x']
    @accelerometer_y = @params['accelerometer_y']
    @accelerometer_z = @params['accelerometer_z']
    Rho::WebView.executeJavascript("$('.ui-page-active .accelerometer_x').text('#{@accelerometer_x}');")
    Rho::WebView.executeJavascript("$('.ui-page-active .accelerometer_y').text('#{@accelerometer_y}');")
    Rho::WebView.executeJavascript("$('.ui-page-active .accelerometer_z').text('#{@accelerometer_z}');")
  end
  
  def start_accelerometer_test
    $accelerometer_sensor = Rho::Sensor.makeSensorByType(Rho::Sensor::SENSOR_TYPE_ACCELEROMETER)
    if $accelerometer_sensor != nil
      $accelerometer_sensor.minimumGap = 1000
      $accelerometer_sensor.start("callback: #{url_for(:action => :accelerometer_callback)}")
    else
      Rho::Notification.showPopup({
        :message => "Device has not Accelerometer sensor",
        :buttons => ["OK"]
      })
    end  
    redirect :accelerometer_test
  end
  
  def stop_accelerometer_test
    if $accelerometer_sensor != nil
      $accelerometer_sensor.stop
    end
    redirect :accelerometer_test
  end
end
