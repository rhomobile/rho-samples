require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class NavbarController < Rho::RhoController
  include BrowserHelper
  
  def navbar_menu
    render
  end
  
  def create_navbar
    Rho::Navbar.create({
      :left => {
        :label => "Home",
        :action => url_for(Rho::Application.startURI)
      },
      :right => {
        :label => "example.com",
        :action => "http://www.example.com",
      },
      :title => "Navbar title"
    })
        
    render :action => :navbar_menu
  end

  def remove_navbar
    Rho::Navbar.remove
    render :action => :navbar_menu
  end
end