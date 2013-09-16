var rc = require('rhoconnect_helpers');
var http = require('http');
var Parse = require('parse').Parse;
var Store = rc.Store;
var Common = require('../../controllers/js/common.js');

var Report = function(){

  //The login method gets called each time before the CRUD methods
  this.login = function(resp){
      username = resp.currentUser;
      password = '';
      resp.params = username;
      
      // Retrieving the password for the user that was stored in redis 
      Store.getValue(resp, function(resp){
        password = resp.result;

         Parse.initialize(Common.parse_app_id, Common.parse_key_js);
  
         Parse.User.logIn(username, password, {
           success: function(user) {
            console.log('My Backend Login: Success');
      
            resp.send(true);
           },
           error: function(user, error) {
              console.log('Error Logging In My Backend');
             resp.send(false);
           }
         });
            
        
      });
    
  };

  this.query = function(resp){
    var result = {};
        
    Parse.initialize(Common.parse_app_id, Common.parse_key_js);
    //Parse.User.current should be available because we logged in in Login method
    //This is used to retrieve a list of Reports that is available to this user
    //If the ACL attribute contains the ACl that is generated for that user then
    //they would see 'private records'
    var currentUser = Parse.User.current();

    //This is the 'Report' model on Parse
    var pReport = Parse.Object.extend("Report");
    
    //Standard Parse.com JS API for query
    // Normally you will have to implement paging so that this does not return all records
    // Parse API will only return the first 1000 as default
    var query = new Parse.Query(pReport);
    query.find({
      success: function(results) {
        //Build response hash that will represent the record set
        for (var i = 0; i < results.length; i++) { 

          //This is where we map the backend data to the Rho Models
          var object = { name: results[i].get('name'), 
              pass: results[i].get('pass'),
              reportid: results[i].get('reportid')
            };
          result[results[i].id.toString()] = object
        }
        //return the result
        resp.send(result);

      },
      error: function(error) {
        resp.send(result);
      }
    });
  };

  this.create = function(resp){

    Parse.initialize(Common.parse_app_id, Common.parse_key_js);
    var currentUser = Parse.User.current();
    var PObject = Parse.Object.extend("Report");
    var pObject = new PObject();

    //resp.params.create_object will be a JS object for the new record
    //Parse also uses a schemaless method for storing data
    //each attribute on the Rho model will be created on the backend
    //so managing fields is automatic
    pObject.save(resp.params.create_object, {
      success: function(object) {
        //We need to return the backend ID for this model
        //This will replace on the device the Model.object field
        pid=object.id;
        resp.send(pid);
        },
      error: function(object) {
        console.log('create ERROR');
        resp.send(false);
        }
      });
  };

  this.update = function(resp){
    Parse.initialize(Common.parse_app_id, Common.parse_key_js);
    var currentUser = Parse.User.current();
    var PObject = Parse.Object.extend("Report");
    
    //The 'update_object.id' field will be the backend's ID
    //because on Create we are mapping these fields
    var objId = resp.params.update_object.id;

    //Standard Parse API for updating an object
    var query = new Parse.Query(PObject);
    query.get(objId, {
      success: function(pObject) {
        pObject.save(resp.params.update_object, {
              success: function(object) {
        
                resp.send(true);
                },
              error: function(object) {
                console.log('Update ERROR');
                resp.send(false);
                }
              });

      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and description.
        resp.send(false);
      }
    });


    
  };

  this.del = function(resp){
    
    Parse.initialize(Common.parse_app_id, Common.parse_key_js);
    var currentUser = Parse.User.current();
    var PObject = Parse.Object.extend("Report");
    
    //The 'delete_object.id' field will be the backend's ID
    //because on Create we are mapping these fields
    var objId = resp.params.delete_object.id;
    
    var query = new Parse.Query(PObject);
    query.get(objId, {
      success: function(pObject) {
        // The object was retrieved successfully.
        // Delete the object with Parse Object.destroy method
        pObject.destroy( {
              success: function(object) {
                resp.send(true);
                },
              error: function(object) {
                resp.send(false);
                }
              });

      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and description.
        resp.send(false);
      }
    });

    resp.send(true);
  };

  this.logoff = function(resp){
    // TODO: Logout from the data source if necessary.
    resp.send(true);
  };

  this.storeBlob = function(resp){
    // TODO: Handle post requests for blobs here.
    // Reference the blob object's path with resp.params.path.
    new rc.Exception(
      resp, "Please provide some code to handle blobs if you are using them."
    );
  };
};

module.exports = new Report();