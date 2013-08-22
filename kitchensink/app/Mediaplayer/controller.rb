require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class MediaplayerController < Rho::RhoController
  include BrowserHelper
  def play_all
    render
  end
  
  def load_ringtones
      Rho::Mediaplayer.getAllRingtones(url_for(:action => :mediaplayer_callback))
      render :action => :loading
  end
  
  def mediaplayer_callback
   $ringtones = @params["result"]
   Rho::WebView.navigate(url_for(:action => :list_ringtones))
  end
  
  def list_ringtones
    render
  end
  
  def play
     puts "Play ringtone"

     $selected = @params['name']
     Rho::Mediaplayer.playRingTone($selected)
     render :action => :playing
  end
  
  def stop
      puts "Stop playing"

      Rho::Mediaplayer.stopRingTone()
      redirect :action => :list_ringtones
    end 
end