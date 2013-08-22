require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class BarcodeController < Rho::RhoController
  include BrowserHelper

  def index
    render
  end
  
  def scan_using_default_scanner
    # Scan with default options
    Rho::Barcode.take({}, url_for(:action => :scan_received_callback))
    redirect :action => :await_scanner_result      
  end
  
  def scan_received_callback
    # Did we actually find a barcode ?
    # If status is not 'ok', the scan was cancelled
    if @params["status"] == "ok"
      Rho::WebView.executeJavascript("KitchenSink.Samples.Barcode.update_scanner_result('Barcode found: #{@params["barcode"]}')")
    else
      Rho::WebView.executeJavascript("KitchenSink.Samples.Barcode.update_scanner_result('Barcode scan cancelled')")
    end
  end
  
  def choose_scanner
    $scanners = Rho::Barcode.enumerate
    render
  end
    
  def scan_using_chosen_scanner
    scanner = $scanners[@params["scanner_index"].to_i]
    scanner.take({}, url_for(:action => :scan_received_callback))
    redirect :action => :await_scanner_result
  end
  
  def set_symbology
    # For the purpose of this example, let's say our application only needs to recognize one type of barcode.
    # In that case, we will disable all decoders...
    Rho::Barcode.allDecoders = false
    # ... and enable only the one we are interested in:
    Rho::Barcode.upca = true
    # All other barcode symbologies will be ignored
    scan_using_default_scanner      
  end
  
  def control_properties_sample
    # There are over 200 properties to fine-tune the barcode scanner functionality and adapt it to suit your application.
    # Almost all properties depend on the scanner hardware for support, please check the documentation to see if your device
    # supports a particular setting
    
    # Here are examples of setting some of the properties. The documentation lists the acceptable values for each of them
    
    # Aiming mode (visual cue):  
    Rho::Barcode.aimMode = "none"
    Rho::Barcode.aimMode = "dot"
    Rho::Barcode.aimMode = "slab"
    Rho::Barcode.aimMode = "reticle"

    # Aiming type (processing mode):
    Rho::Barcode.aimType = "trigger"
    Rho::Barcode.aimType = "timedHold"
    Rho::Barcode.aimType = "timedRelease"
    Rho::Barcode.aimType = "presentation"
    Rho::Barcode.aimType = "pressAndRelease"
    Rho::Barcode.aimType = "continuousRead"
        
    # Generate an "Enter" keypress after a barcode is recognized. Useful for sending forms automatically after a scan
    Rho::Barcode.autoEnter = true
    
    # Select the beam width of the scanner (only supported on some devices)
    Rho::Barcode.beamWidth = "normal"
    Rho::Barcode.beamWidth = "narrow"
    Rho::Barcode.beamWidth = "wide"
  end
  
  def set_properties
    Rho::Barcode.aimMode = @params["aimMode"]
    Rho::Barcode.aimType = @params["aimType"]
    Rho::Barcode.beamWidth = @params["beamWidth"]

    scan_using_default_scanner
  end
  
  def sample_change_audible_options
    # Maximum volume (default)
    Rho::Barcode.decodeVolume = 5
    # Low-pitched sound
    Rho::Barcode.decodeFrequency = 1000
    # One-second long
    Rho::Barcode.decodeDuration = 1000
    
    scan_using_default_scanner
  end
  
  def set_audible_options
    Rho::Barcode.decodeVolume = @params[:decodeVolume]
    Rho::Barcode.decodeFrequency = @params[:decodeFrequency]
    Rho::Barcode.decodeDuration = @params[:decodeDuration]
      
    scan_using_default_scanner
  end
end
