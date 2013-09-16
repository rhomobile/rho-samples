var rc = require('rhoconnect_helpers');
var http = require('http');
var Parse = require('parse').Parse;
var Store = rc.Store;

var Report = function(){

  this.login = function(resp){
      username = resp.currentUser;
      password = '';
      resp.params = username;
      Store.getValue(resp, function(resp){
        password = resp.result;
        // console.log('Get Value:'+ username + ':' + password + ':' + JSON.stringify(resp));

         Parse.initialize("3zvw9xgwWsaTqF3LyJD7TIoEySn5rgUJkMSxkMRI", "ghqCxF1bVtNCl4oxUAMqovHtD5WRPJoEZ0YWxXoX");
  
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
    console.log('REPORT QUERY');
        
    Parse.initialize("3zvw9xgwWsaTqF3LyJD7TIoEySn5rgUJkMSxkMRI", "ghqCxF1bVtNCl4oxUAMqovHtD5WRPJoEZ0YWxXoX");
    var currentUser = Parse.User.current();
    console.log('ParseUser'+JSON.stringify(currentUser));
    var pReport = Parse.Object.extend("Report");
    var query = new Parse.Query(pReport);
    query.find({
      success: function(results) {
    console.log('PARSE SUCCESS QUERY'+results.length);

        for (var i = 0; i < results.length; i++) { 
    console.log('QUERY'+results[i].get('name'));

          var object = { name: results[i].get('name'), 
              pass: results[i].get('pass'),
              reportid: results[i].get('reportid')
            };
          result[results[i].id.toString()] = object
        }
        // console.log('DONE');
        // console.log(result);
        resp.send(result);

      },
      error: function(error) {
        console.log('ERROR');
        resp.send(result);
      }
    });
  };

  this.create = function(resp){
    console.log('Creating');
    console.log(JSON.stringify(resp.params.create_object));
    Parse.initialize("3zvw9xgwWsaTqF3LyJD7TIoEySn5rgUJkMSxkMRI", "ghqCxF1bVtNCl4oxUAMqovHtD5WRPJoEZ0YWxXoX");
    var currentUser = Parse.User.current();
    console.log('ParseUser'+JSON.stringify(currentUser));
    var PObject = Parse.Object.extend("Report");
    var pObject = new PObject();
    pObject.save(resp.params.create_object, {
      success: function(object) {
    console.log('REPORT CREATED'+object.id);
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
    // TODO: Update an existing record in your backend data source.
    // Then return the result.
    var objId = resp.params.update_object.id;
    console.log('updating Report'+objId);
    Parse.initialize("3zvw9xgwWsaTqF3LyJD7TIoEySn5rgUJkMSxkMRI", "ghqCxF1bVtNCl4oxUAMqovHtD5WRPJoEZ0YWxXoX");
    var currentUser = Parse.User.current();
    console.log('ParseUser'+JSON.stringify(currentUser));
    var PObject = Parse.Object.extend("Report");
    var query = new Parse.Query(PObject);
    query.get(objId, {
      success: function(pObject) {
        // The object was retrieved successfully.
        pObject.save(resp.params.update_object, {
              success: function(object) {
                    console.log('REPORT Updated'+object.id);

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
    // TODO: Delete an existing record in your backend data source
    // if applicable.  Be sure to have a hash key and value for
    // "object" and return the result.
    var objId = resp.params.delete_object.id;
    console.log('Deleting Report'+objId);
    
    Parse.initialize("3zvw9xgwWsaTqF3LyJD7TIoEySn5rgUJkMSxkMRI", "ghqCxF1bVtNCl4oxUAMqovHtD5WRPJoEZ0YWxXoX");
    var currentUser = Parse.User.current();
    console.log('ParseUser'+JSON.stringify(currentUser));
    var PObject = Parse.Object.extend("Report");
    var query = new Parse.Query(PObject);
    query.get(objId, {
      success: function(pObject) {
        // The object was retrieved successfully.
        pObject.destroy( {
              success: function(object) {
                console.log('Success deleting');
    
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