require 'rho/rhocontroller'
require 'helpers/browser_helper'

class RhomproductController < Rho::RhoController
  include BrowserHelper

  # GET /Rhomproduct
  def index
    @rhomproducts = Rhomproduct.find(:all)
    render :back => '/app'
  end

  # GET /Rhomproduct/{1}
  def show
    @rhomproduct = Rhomproduct.find(@params['id'])
    if @rhomproduct
      render :action => :show, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # GET /Rhomproduct/new
  def new
    @rhomproduct = Rhomproduct.new
    render :action => :new, :back => url_for(:action => :index)
  end

  # GET /Rhomproduct/{1}/edit
  def edit
    @rhomproduct = Rhomproduct.find(@params['id'])
    if @rhomproduct
      render :action => :edit, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  def deleteprompt
    @rhomproduct = Rhomproduct.find(@params['id'])
    if @rhomproduct
      render :action => :deleteprompt, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # POST /Rhomproduct/create
  def create
    @rhomproduct = Rhomproduct.create(@params['rhomproduct'])
    redirect :action => :index
  end

  # POST /Rhomproduct/{1}/update
  def update
    @rhomproduct = Rhomproduct.find(@params['id'])
    @rhomproduct.update_attributes(@params['rhomproduct']) if @rhomproduct
    redirect :action => :index
  end

  # POST /Rhomproduct/{1}/delete
  def delete
    @rhomproduct = Rhomproduct.find(@params['id'])
    @rhomproduct.destroy if @rhomproduct
    redirect :action => :index  
  end
end
