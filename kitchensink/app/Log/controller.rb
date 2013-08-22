require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class LogController < Rho::RhoController
  include BrowserHelper
  
  def index
    render
  end
  
  def log_categories
    Rho::Log.info("Consectetuer adipiscing elit", "Lorem Ipsum")
    Rho::Log.info("Foo acquired value Bar in method Baz", "Miscellaneous")    
    redirect :logging_categories
  end
  

  def logging_categories
    render
  end
  
  def start_logging_memory_usage
    # Request that memory usage be logged automatically by the system every second
    Rho::Log.memoryPeriod = 1000
    redirect :action => :log_memory_usage
  end
  
  def stop_logging_memory_usage
    Rho::Log.memoryPeriod = 0
    redirect :action => :log_memory_usage
  end
  
  def show_log_info
    render
  end
 
  def log_memory_usage
    @memory_period = Rho::Log.memoryPeriod
  end
  
  def show_log
    # Show the contents of the log file in a window with controls to refresh, clear and send. Useful for debugging and when asking users to report error messages
    Rho::Log.showLog
    redirect :confirm_show_log
  end
  
  def read_log_file
    # Read at most 16384 symbols
    @logFileContent = Rho::Log.readLogFile 16384
    Rho::Log.info(@logFileContent, "Log file content")

    render
  end
  
  def confirm_read_log
    render
  end
  
  def clean_log_file
    # Read log file
    @logFileContentBefore = Rho::Log.readLogFile 1024
    
    # Clear log file
    Rho::Log.cleanLogFile
    
    # Read log file again - this time it will be empty
    @logFileContentAfter = Rho::Log.readLogFile 1024
    render :action => :confirm_clean_log_file
  end

  def confirm_clean_log_file
    render
  end
  
  def confirm_send_log_file
    render
  end
  
  def send_log_file
    # Read log file
    @logFileContentBefore = Rho::Log.readLogFile 16384
    if !@logFileContentBefore.empty?
      #Send log file to destinationURI property.
      Rho::Log.destinationURI="http://rhodes-server-log.herokuapp.com/rholog?log_name=RMS_CodeSample_App_Log"
      Rho::Log.sendLogFile(url_for(:action => :send_log_callback))
      render :action => :server_log
    else
      Rho::Notification.showPopup({
        :message => "Log FileContents are empty",
        :buttons => ["OK"]
      })
      render :action => :confirm_read_log
    end
  end

  def send_log_callback
    Rho::Notification.showPopup({
        :message => "Result of sending log file: #{@params["status"]}",
        :buttons => ["OK"]
    })
    WebView.navigate(url_for(:action => :confirm_send_log_file))
  end
end
