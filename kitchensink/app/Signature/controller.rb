require 'rho/rhocontroller'

class SignatureController < Rho::RhoController
 
  def index
    render  
  end

  def capture_fullscreen
    # Invoke signature capture screen and assign callback
    Rho::Signature.takeFullScreen({}, url_for(:action => :signature_callback))
      
    render :action => :show_signature
  end

  def signature_callback
    Rho::ScreenOrientation.normal();
    Rho::Log.info("Signature callback received", "Signature example")
    # If status is not 'ok', the capture was cancelled
    if @params['status'] == 'ok'
      Rho::Log.info("Signature was captured: #{@params["imageUri"]}", "Signature example")
      # By default, the output format is "image", so the imageUri parameter will contain the relative filename of an image
      # We must convert that relative filename to an absolute path in order to access the file. However, if the output format is
      # "dataUri", then imageUri will contain the image as a data URI we can assign directly to an img element
      signature = @params["imageUri"]
      signature = Rho::Application.expandDatabaseBlobFilePath(signature) unless signature.start_with?("data:image")

      # In our example, we will display the signature as soon as it is captured.
      # We have a javascript function in our page to set the src attribute of an img element and we will call it now
      # 
      WebView.executeJavascript("KitchenSink.Samples.Signature.update_signature(#{signature.to_json})")
    else
      Rho::Log.info("Signature capture was cancelled", "Signature example")
      # if we did not really capture a signature, there is nothing else to do here
      WebView.navigateBack
    end  
  end
  
  def set_properties
    if (@params["change_orientation"]=="yes")
      Rho::ScreenOrientation.upsideDown();
    end           
    Rho::Signature.takeFullScreen(@params, url_for(:action => :signature_callback))
    render :action => :show_signature  
  end
  
  def edit_properties
  end
  
  def capture_inline
    Rho::Signature.show({
      :top => 0,
      :left => 0,
      :width => 320,
      :height => Rho::System.screenHeight / 3,
      :fullScreen => false,
    })
    
    redirect :action => :confirm_capture_inline
  end

  def capture_inline_docapture
    Rho::Signature.capture(url_for( :action => :signature_callback))
    redirect :action => :confirm_capture_inline
  end
  
  def capture_inline_cancel
    Rho::Signature.hide
    redirect :action => :confirm_capture_inline
  end
  
  
  def capture_datauri
    # Ask for a DataURI repesentation of the image instead of a file
    Rho::Signature.takeFullScreen({:outputFormat => "dataUri"}, url_for(:action => :signature_callback))
          
    render :action => :show_signature
  end
  
  def do_capture          
    Signature.capture(url_for( :action => :signature_callback))    
  end
  
  def clear_capture          
    Signature.clear()    
  end
  
end
