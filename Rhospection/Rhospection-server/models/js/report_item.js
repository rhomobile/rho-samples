var rc = require('rhoconnect_helpers');
var Parse = require('parse').Parse;
var Store = rc.Store;
var Common = require('../../controllers/js/common.js');

var ReportItem = function(){

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
    
    //current user is the user that was logged in via login method
    var currentUser = Parse.User.current();
    
    var pReportItem = Parse.Object.extend("ReportItem");
    
    // Parse APi for querying a model
    // TODo - paginate results 
    var query = new Parse.Query(pReportItem);
    query.find({
      success: function(results) {
        //This is where we map the backend data to the Rhom Models
        for (var i = 0; i < results.length; i++) { 
          var object = { reportid: results[i].get('reportid'), 
              productid: results[i].get('productid'),
              imgsrcLocal: results[i].get('imgsrcLocal'),
              imgsrcRemote: results[i].get('imgsrcRemote'),
              status: results[i].get('status'),
            };
          result[results[i].id.toString()] = object;
        }
        
        resp.send(result);

      },
      error: function(error) {
        
        resp.send(result);
      }
    });
  };

  this.create = function(resp){
    
    // console.log(resp.params.create_object);
    Parse.initialize(Common.parse_app_id, Common.parse_key_js);
    var currentUser = Parse.User.current();
    
    var PObject = Parse.Object.extend("ReportItem");
    var pObject = new PObject();
    pObject.save(resp.params.create_object, {
      success: function(object) {
        pid=object.id;
        resp.send(pid);
        },
      error: function(object) {
        resp.send('-1');
        }
      });
  };

  this.update = function(resp){
     
    var objId = resp.params.update_object.id;
    Parse.initialize(Common.parse_app_id, Common.parse_key_js);
    var currentUser = Parse.User.current();
    
    var PObject = Parse.Object.extend("ReportItem");
    var query = new Parse.Query(PObject);
    query.get(objId, {
      success: function(pObject) {
        // The object was retrieved successfully.
        pObject.save(resp.params.update_object, {
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


    
  };

  this.del = function(resp){
    var objId = resp.params.delete_object.id;
    Parse.initialize(Common.parse_app_id, Common.parse_key_js);
    var currentUser = Parse.User.current();
    
    var PObject = Parse.Object.extend("ReportItem");
    var query = new Parse.Query(PObject);
    query.get(objId, {
      success: function(pObject) {
        // The object was retrieved successfully.
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
    console.log(JSON.stringify(resp));
    new rc.Exception(
      resp, "Please provide some code to handle blobs if you are using them."
    );
  };
};

module.exports = new ReportItem();