require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class ORMController < Rho::RhoController
  include BrowserHelper
  
  def js_model_menu
    
    render
  end
end
