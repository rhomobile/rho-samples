require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class DatabaseController < Rho::RhoController
  include BrowserHelper
  
  def open_db
    db = Rho::Database.new(Rho::Application.databaseFilePath("sample"),"sample")
    return db
  end

  def confirm_init_db
    render
  end
  
  def init_db
    Rho::Log.info("Initializing database", "Init DB Sample")
    db = open_db
    Rho::Log.info("Database initialized", "Init DB Sample")
    Rho::Notification.showPopup({
      :message => "Sample database initialized",
      :buttons => ["OK"]
    })
    db.close
    
    redirect :confirm_init_db
  end  
  
  def transactions
    # Let's assume we have a table called users_sample with a two columns, "user_id" and "active"
    db = open_db

    # Begin transaction
    db.startTransaction
    
    # Execute updates
    db.executeSql("Delete from users_sample where active = 1")
    
    # Uh oh... maybe we should not really do that after all. Let's rollback the transaction
    db.rollbackTransaction

    # At this point, our database is in exactly the same state as it was before we started.
    # It's as if the "Delete" SQL statement had never existed
    
    # Now let's execute a different statement that we actually want
    # Begin another transaction...
    db.startTransaction
    
    # Execute updates - we can issue multiple SQL commands within the same transaction
    
    db.executeSql("Update users_sample set active = 0 where user_id = ?", [2])
    db.executeSql("Update users_sample set active = 0 where user_id = ?", [3])
    db.executeSql("Update users_sample set active = 0 where user_id = ?", [4])
    db.executeSql("Update users_sample set active = 0 where user_id = ?", [5])
    
    # This is the point of no return. After commitTransaction is called, all the updates will become permanent
    db.commitTransaction
    
    db.close

    redirect :confirm_transactions
  end

  def confirm_transactions
    db = open_db
    
    if !db.isTableExist("users_sample")
      db.close
      Rho::Notification.showPopup({
        :message => "Please seed the database before running this sample",
        :buttons => ["OK"]
      })
      redirect :action => :confirm_seed_db
    else
      @users = db.executeSql("Select user_id,active from users_sample")
      db.close
      render      
    end
  end
  
  def confirm_seed_db
    render
  end 

  def seed_db
    db = open_db
    db.executeSql("Drop table if exists users_sample")
    db.executeSql("Create table users_sample (user_id integer, active integer)")
    
    # one way to execute inserts is to simply have a hardcoded SQL command
    db.executeSql("Insert into users_sample (user_id,active) values (0,1)")

    # the other is to use parameters. Use this style if your data is dynamic, never use string interpolation in SQL
    db.executeSql("Insert into users_sample (user_id,active) values (?,?)",[1,1])
    db.executeSql("Insert into users_sample (user_id,active) values (?,?)",[2,1])
    db.executeSql("Insert into users_sample (user_id,active) values (?,?)",[3,1])
    db.executeSql("Insert into users_sample (user_id,active) values (?,?)",[4,1])
    db.executeSql("Insert into users_sample (user_id,active) values (?,?)",[5,1])

    # we could have written the above more succintly using a block
    (6..9).each do |user_id|
      db.executeSql("Insert into users_sample (user_id,active) values (?,1)",[user_id])
    end
    
    db.close
    Rho::Notification.showPopup({
        :message => "Seed Succeeded",
        :buttons => ["OK"]
      })
    redirect :confirm_seed_db
  end

  def confirm_export_db
    render
  end

  def export_db 
   #export database
   db = open_db
   export_path = db.export
   db.close
   Rho::Notification.showPopup({
      :message => "Export path - #{export_path}",
      :buttons => ["OK"]
   })
   redirect :confirm_export_db
  end

  def confirm_import_db
    render
  end

  def import_db
    #export database
    db = open_db
    export_path = db.export
    #import database
    db.close
    db = open_db
    db.import(export_path)
    db.close
    Rho::Notification.showPopup({
      :message => "Database Import Succeeded",
      :buttons => ["OK"]
    })
    redirect :confirm_import_db
  end
end
