require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class FileController < Rho::RhoController
  include BrowserHelper
  def browse_filesystem
    @start_from_path = @params["start_from_path"] || Rho::Application.appsBundleFolder

    @folders = []
    @files = []

    # TODO: move from RhoFile to File when implemented
    @entries = Rho::RhoFile.listDir(@start_from_path)

    @entries.each do |entry|
      unless (entry == "." || entry == "..")
        (Rho::RhoFile.isDir(Rho::RhoFile.join(@start_from_path,entry)) ? @folders : @files) << entry
      end
    end

    render
  end

end
