require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class KeystateController < Rho::RhoController
  include BrowserHelper

  def index
    render
  end

  def show_keystates(params)
    Rho::KeyState.showStates(params)
    redirect :action => :index
  end

  def show_keystates_top
    margin = 40
    height = 25
    width = 25
    right = Rho::System.screenWidth - margin
        
    show_keystates( {
      :top => margin,
      :right => right,
      :width => width,
      :height => height
    }) 
    redirect :action => :index
  end
  
  def show_keystates_bottom
    margin = 10
    height = 25
    width = 25
    top = Rho::System.screenHeight - margin - height
    right = Rho::System.screenWidth - margin
    
    show_keystates( {
      :top => top,
      :right => right,
      :width => width,
      :height => height,
    })
    redirect :action => :index     
  end
  
  def hide_keystates
    Rho::KeyState.hideStates
    redirect :action => :index
  end
  
end
