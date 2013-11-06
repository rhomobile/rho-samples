require 'rho/rhocontroller'
require 'helpers/browser_helper'

class SyncController < Rho::RhoController
  include BrowserHelper

  # GET /Report
  def index
  end

  # GET /Report/{1}
  def show
  end

  # GET /Report/new
  def new
  end

  # GET /Report/{1}/edit
  def edit
    render :action => :new
  end

  # POST /Report/create
  def create
  end

  # POST /Report/{1}/update
  def update
  end

  # POST /Report/{1}/delete
  def delete
  end
end