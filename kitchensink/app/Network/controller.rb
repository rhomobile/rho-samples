require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'
require 'base64'
class NetworkController < Rho::RhoController
 include BrowserHelper

  def index
		render
  end

  def confirm_network_availability
  	# check the network availability
    if (Rho::System.platform == "ANDROID" || Rho::System.platform == "APPLE" || Rho::System.platform == "WINDOWS")
  	  @cell_network = Rho::Network.hasCellNetwork
  	  @wifi_network = Rho::Network.hasWifiNetwork
      @network = Rho::Network.hasNetwork
    end
  end

  def detect_connection
    Rho::Notification.showPopup({
      :message => "Detect connection host motorolasolutions.com",
      :buttons => ["OK"]
    })
  	puts "detect_connection---------------"
  	networkProps = Hash.new
  	networkProps['host'] = 'www.motorolasolutions.com'
  	networkProps['port'] = '80'
  	networkProps['pollInterval'] = 5000
  	networkProps['detectionTimeout'] = 1000 
  	Rho::Network.detectConnection(networkProps, url_for(:action => :connectionEventCallback))  	
  end

  def connectionEventCallback
  	puts "Detect connection callback event #{@params}---------------"
  	if @params['connectionInformation'] == 'Disconnected'
      Rho::Notification.showPopup({
        :message => "Connection Lost",
        :buttons => ["OK"]
      })
  	else
      Rho::Notification.showPopup({
        :message => "Connection Restored",
        :buttons => ["OK"]
      })
  	end
  end

  def start_status_notify
    # Request the system to check every 3 seconds and call us back if there is a change in network connectivity
  	Rho::Network.startStatusNotify(3000, url_for(:action => :status_notify_callback))
    Rho::Notification.showPopup({
      :message => "Started network status notifications",
      :buttons => ["OK"]
    })
    redirect :confirm_detect_network_events
  end

  # This is our notification that the status of the network changed. old_status and new_status can be "disconnected" or "connected"
  def status_notify_callback
    Rho::Notification.showPopup({
      :message => "Network status changed from #{@params["prev_status"]} to #{@params["current_status"]}",
      :buttons => ["OK"]
    })
  end

  def stop_status_notify
    # Stop network status notifications
  	Rho::Network.stopStatusNotify
    Rho::Notification.showPopup({
      :message => "Stopped network status notifications",
      :buttons => ["OK"]
    })
    redirect :confirm_detect_network_events
  end

  def confirm_detect_network_events
    render
  end

  def upload_file
    # Upload the specified file using HTTP POST.
    uploadfileProps = Hash.new
    uploadfileProps["url"] = "http://www.example.com"
    uploadfileProps["filename"] = Rho::RhoFile.join(Rho::RhoFile.join(Rho::Application.publicFolder,"images"),"backButton.png")
    uploadfileProps["body"] = "uploading file"
    uploadfileProps["fileContentType"]="image/png"
    Rho::Network.uploadFile(uploadfileProps, url_for(:action => :upload_file_callback))
    render :action => :transferring
  end

  def upload_file_callback
  	if @params["status"] == "ok"
      Rho::Notification.showPopup({
        :message => "Upload Succeeded",
        :buttons => ["OK"]
      })
  	else
      Rho::Notification.showPopup({
        :message => "Upload Failed",
        :buttons => ["OK"]
      })
  	end
    Rho::WebView.navigate(url_for(:action => :confirm_upload))  	
  end

  def confirm_download
    render
  end
  
  def download_file
    # Download a file to the specified filename. Be careful with the overwriteFile parameter!
    downloadfileProps = Hash.new
    downloadfileProps["url"]='http://www.google.com/images/icons/product/chrome-48.png'
    downloadfileProps["filename"] = Rho::RhoFile.join(Rho::Application.userFolder, "sample.png")
    downloadfileProps["overwriteFile"] = true
    Rho::Network.downloadFile(downloadfileProps, url_for(:action => :download_file_callback))
    render :action => :transferring
  end
  
  def download_file_callback
  	if @params["status"] == "ok"
      Rho::Notification.showPopup({
        :message => "Download Success. File saved to " + Rho::RhoFile.join(Rho::Application.userFolder, "sample.png"),
        :buttons => ["OK"]
      })
  	else
      Rho::Notification.showPopup({
        :buttons => ["OK"]
      })
  	end
  	Rho::WebView.navigate(url_for(:action => :confirm_download))
  end

  def get
    #Perform an HTTP GET request.
    getProps = Hash.new
    getProps['url'] = "http://www.apache.org/licenses/LICENSE-2.0"
    getProps['headers'] = {"Content-Type" => "application/json"}
    Rho::Network.get(getProps, url_for(:action => :get_callback))
    render :action => :transferring
  end
  
  def get_callback
    if @params['status'] == "ok"
      @@get_result = @params['body']
      WebView.navigate(url_for(:action => :show_result))
    else
      WebView.navigate(url_for(:action => :show_error ))
    end
  end
  
  def show_result
  end

  def show_error
    Rho::Notification.showPopup({
      :buttons => ["OK"]
    })
    render :action => :index
  end

  def get_resposnse
    @@get_result
  end

  def post
    #Download a file to the specified filename.
    body = '{"product" : {"name" : "test_name", "brand" : "test_brand", "sku" : "1" , "price" : "$2000" , "quantity" : "2" } }'   
    postProps = Hash.new
    postProps['url'] = "http://rhostore.herokuapp.com/products.json"
    postProps['headers'] = {"Content-Type" => "application/json"}
    postProps['body'] = body
    postProps['httpVerb'] = "POST"
    Rho::Network.post( postProps, url_for(:action => :post_callback)) 
    render :action => :confirm_headers_and_verbs
  end

  def post_callback
    if @params['status'] == "ok"
      Rho::Notification.showPopup({
        :message => "Posted Success - #{@params['body']}",
        :buttons => ["OK"]
      })
    else
      Rho::Notification.showPopup({
        :message => "Posted Failed - #{@params['body']}",
        :buttons => ["OK"]
      })
    end
    Rho::Log.info(@params, "callback results")    
  end

  def confirm_basic_auth
    render
  end
  
  def do_basic_auth
    #Perform an HTTP GET request with basic authentication.
    @response= Rho::Network.get(
      :url => "http://rhodes-basic-auth.herokuapp.com/secret.json",
      :headers =>  {"Content-Type" => "application/json"},
      :authType => :basic,
      :authUser => "test",
      :authPassword => "test12345"
    )
    Rho::Notification.showPopup({
      :message => "#{@response['body']}",
      :buttons => ["OK"]
    })
    redirect :action => :confirm_basic_auth
  end
end
