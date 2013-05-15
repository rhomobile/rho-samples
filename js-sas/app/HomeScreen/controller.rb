require 'rho/rhocontroller'

class HomeScreenController < Rho::RhoController
  
  def homeScreen

    @menu =  { 'Home'=> 'javascript:goHome()' , 'Exit'=> 'javascript:onExit()' }

    render 
  end

end
