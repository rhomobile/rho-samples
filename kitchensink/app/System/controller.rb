require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class SystemController < Rho::RhoController
  include BrowserHelper
  
  def index
    render
  end
  
  
  def capabilities 
  	# Returns true if device supports Motorola device capabilities, such as Scanner, etc.
  	@is_motorola_device = Rho::System.isMotorolaDevice
  	@has_calendar = Rho::System.hasCalendar
  	@has_camera = Rho::System.hasCamera
    @has_cell_network = Rho::System.hasCellNetwork
    @has_wifi_network = Rho::System.hasWifiNetwork
    @has_network = Rho::System.hasNetwork
    @has_sqlite = Rho::System.hasSqlite
    @has_touchscreen = Rho::System.hasTouchscreen
    
   
  end

  def install_app
    #install an android application from given url
    Rho::System.applicationInstall(get_install_app_url)
    Rho::Notification.showPopup("Application is ready to install")
    redirect :action => :confirm_install_app
  end

  def uninstall_app
    # uninstall the application
    if Rho::System.isApplicationInstalled(get_uninstall_app_name)
      Rho::System.applicationUninstall(get_uninstall_app_name)
      Rho::Notification.showPopup("simple_app is uninstalled")
    else 
      Rho::Notification.showPopup("Please install application before running this sample")
    end
    redirect :action => :confirm_install_app
  end
 
  def get_install_app_url
    if Rho::System.platform == "ANDROID"
      return "http://rhodes-server-log.herokuapp.com/simple_app_signed.apk"
    elsif Rho::System.platform == "WINDOWS"
      return "http://rhodes-server-log.herokuapp.com/simple_app.cab"
    else 
      #Url for Windows Desktop 
      return ""
    end
  end 

  def get_uninstall_app_name
    if Rho::System.platform == "ANDROID"
      return "com.rhomobile.simple_app"
    elsif Rho::System.platform == "WINDOWS"
      return "rhomobile simple_app/simple_app.exe"
    else 
      return "rhomobile/simple_app/simple_app.exe"
    end
  end

  def get_version_info
  	version_info = Rho::System.osVersion
    Rho::Notification.showPopup({
      :message => "#{version_info}",
      :buttons => ["OK"]
    })
  end

  def local_serverport
  	# Get port of the local (embedded) HTTP server
  	local_port = Rho::System.localServerPort()
    Rho::Notification.showPopup({
      :message => "#{local_port}",
      :buttons => ["OK"]
    })
  end

  def zip_files
    destination_zip = Rho::RhoFile.join(Rho::Application.userFolder, "public.zip")
  	Rho::System.zipFiles(destination_zip, Rho::Application.publicFolder, ["css", "images"])
    Rho::Notification.showPopup({
      :buttons => ["OK"]
    })
  	redirect :action => :confirm_zip
  end
  
  def get_version
     @version_info = Rho::System.osVersion
  #   Alert.show_popup(version_info)
   end
   
  def get_local_serverport
      # Get port of the local (embedded) HTTP server
      @local_port = Rho::System.localServerPort()
      #Alert.show_popup(local_port)
  end
  
  def confirm_zip
    render
  end
end
