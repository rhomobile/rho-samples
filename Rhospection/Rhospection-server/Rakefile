require 'rubygems'
require 'bundler/setup'
require 'rhoconnect/tasks'
require 'rhoconnect'
require 'resque/tasks'

ROOT_PATH = File.expand_path(File.dirname(__FILE__))

task 'resque:setup' do
  # The number of redis connections you want a job to have
  Rhoconnect.connection_pool_size = 1
  require 'rhoconnect/application/init'
  
  Resque.after_fork do
    Store.reconnect
  end
end
