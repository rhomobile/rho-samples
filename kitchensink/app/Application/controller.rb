require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class ApplicationController < Rho::RhoController
  include BrowserHelper
  
  def index
    render
  end
  
  def app_folder 
    # Get and show the various app folders
    @app_folder = Rho::Application.appBundleFolder
    @apps_bundle_folder = Rho::Application.appsBundleFolder
    @database_blob_folder = Rho::Application.databaseBlobFolder
    @public_folder = Rho::Application.publicFolder
    @user_folder = Rho::Application.userFolder
  end


   def quit_app 
    Rho::Application.quit
   end

  def minimize_app
    Rho::Application.minimize
    render :action => :confirm_minimize_app
  end
  
  def restore_app
    Rho::Application.minimize
    sleep(2)
  	Rho::Application.restore
  	render :action => :confirm_restore_app
  end
end
