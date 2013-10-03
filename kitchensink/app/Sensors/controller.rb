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
    Rho::WebView.executeJavascript("KitchenSink.Samples.Sensors.update_values(#{@params.to_json})")
  end
  
  def start_accelerometer_test
    $accelerometer_sensor = Rho::Sensor.makeSensorByType(Rho::Sensor::SENSOR_TYPE_ACCELEROMETER)
    if $accelerometer_sensor != nil
      $accelerometer_sensor.start("callback:#{url_for(:action => :accelerometer_callback)}")
    else
      Rho::Notification.showPopup({
        :title => "RhoMobile 4.0 Kitchen Sink",
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
