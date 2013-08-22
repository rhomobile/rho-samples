// WARNING! THIS FILE IS GENERATED AUTOMATICALLY! DO NOT EDIT IT MANUALLY!
// Module rhoapi

var Rho = Rho || (function ($) {
    

    // === API configuration ========================================================

    var thisFileName = 'rhoapi.js';

    var RHO_ID_PARAM = '__rhoID';
    var RHO_CLASS_PARAM = '__rhoClass';
    var RHO_CALLBACK_PARAM = '__rhoCallback';

    var API_CONTROLLER_URL = '/system/js_api_entrypoint';
    //var API_CALLBACK_BASE_URL = '/system/js_api_entrypoint';
    var API_CALLBACK_BASE_URL = '';

    var NOT_INSTANCE_ID = '0';

    // === Core parts ============================================================

    var idCount = 0;
    var pendingCallbacks = {};

    function getVmID() {
        return window['__rhoJsVmID'] || null;
    }

    function defaultEmptyCallback() {
    }

    function nextId(tag) {
        if ('undefined' == typeof tag || !tag)
            tag = RHO_ID_PARAM;

        return (tag + '#' + idCount++);
    }

    function prepareCallback(callback, /*opt*/ isPersistent, /*opt*/ id) {
        /*
        Rho.Log.info('prepareCallback.callback: type: ' + typeof callback,"JSC");
        Rho.Log.info('prepareCallback.callback: isPersistent: ' + isPersistent,"JSC");
        Rho.Log.info('prepareCallback.callback: id: ' + id,"JSC");
        */

        if ('string' == typeof callback)
            return callback;

        if ('function' != typeof callback)
            callback = defaultEmptyCallback;

        if ('undefined' == typeof id || !id)
            id = nextId();

        var data = {
            id: id,
            callback: callback,
            isPersistent: ('undefined' != typeof isPersistent) && isPersistent
        };

        pendingCallbacks[id] = data;

        /*
        var arr = [], p, i = 0;
        for (p in data) {
            arr[i++] = " " + p + " : " + data[p]+" ";
        }
        var str = arr.join(', ');

        Rho.Log.info('prepareCallback.callback: pendingCallbacks: {' + str + "}","JSC");
        */
        // store options for pending callback
        return API_CALLBACK_BASE_URL + id;
    }

    function scanForInstances(value) {
        for (var prop in value) {
            if (!value.hasOwnProperty(prop)) continue;
            if ('object' == typeof value[prop]) {
                value[prop] = createInstances(value[prop]);
            }
        }
        return value;
    }

    function createInstances(value) {
        if ('object' == typeof value) {
            if (value[RHO_ID_PARAM] && value[RHO_CLASS_PARAM]) {
                return objectForClass(value[RHO_CLASS_PARAM], value[RHO_ID_PARAM]);
            } else {
                return scanForInstances(value);
            }
        }
        return value;
    }

    function jsValue(result) {

        if ('undefined' == typeof result)
            throw 'Invalid API JSON response';

        if (null == result || 'object' != typeof result)
            return result;

        var value = $.extend(result instanceof Array ? [] : {}, result);

        return createInstances(value);
    }

    function namesToProps(names) {
        var namesObj = {};
        if ("string" == typeof names) {
            names = names.split(/[\s\,]/);
        }
        if (names instanceof Array) {
            for (var i = 0; i < names.length; i++) {
                if (0 < names[i].length)
                    namesObj[names[i]] = null;
            }
        } else if (names instanceof Object) {
            namesObj = names;
        }
        return namesObj;
    }

    function namesToArray(names) {
        var namesArray = [];
        if ("string" == typeof names) {
            names = names.split(/[\s\,]/);
        }
        if (names instanceof Array) {
            for (var i = 0; i < names.length; i++) {
                if (0 < names[i].length)
                    namesArray.push(names[i]);
            }
        } else if (names instanceof Object) {
            for (var name in names) {
                if (names.hasOwnProperty(name) && 0 < name.length)
                    namesArray.push(name);
            }
        }
        return namesArray;
    }

    var reqIdCount = 0;

    function commonReq(params) {

        var valueCallback = null;

        if ("number" == typeof params.valueCallbackIndex) {
            if (params.valueCallbackIndex < params.args.length - 1)
                throw 'Generated API method error: wrong position for value callback argument!';

            if (params.valueCallbackIndex == params.args.length - 1)
                valueCallback = params.args.pop();

            if (valueCallback && "function" != typeof valueCallback)
                throw 'Value callback should be a function!';
        }

        var persistentCallback = null;
        var persistentCallbackOptParams = null;

        if ("number" == typeof params.persistentCallbackIndex) {
            if (params.persistentCallbackIndex < params.args.length - 2)
                throw 'Generated API method error: wrong position for persistent callback argument!';

            if (params.persistentCallbackIndex == params.args.length - 2) {
                persistentCallbackOptParams = params.args.pop();
                persistentCallback = params.args.pop();
            } else if (params.persistentCallbackIndex == params.args.length - 1) {
                persistentCallback = params.args.pop();
            }

            if (persistentCallback && 'function' != typeof persistentCallback)
                throw 'Persistent callback should be a function!';

            if (persistentCallbackOptParams && 'string' != typeof persistentCallbackOptParams)
                throw 'Persistent callback optional parameters should be a string!';

            var persistentCallbackOptParams = persistentCallbackOptParams || null;

            if (persistentCallback)
                persistentCallback = prepareCallback(persistentCallback, true);
        }

        var cmd = { 'method': params.method, 'params': params.args };

        cmd[RHO_CLASS_PARAM] = params.module;
        cmd[RHO_ID_PARAM] = params.instanceId || null;
        cmd['jsonrpc'] = '2.0';
        cmd['id'] = reqIdCount++;

        if (persistentCallback) {
            cmd[RHO_CALLBACK_PARAM] = {
                id: persistentCallback,
                vmID: getVmID(),
                optParams: persistentCallbackOptParams
            };
        }

        var cmdText = $.toJSON(cmd);
        console.log(cmdText);

        var result = null;
        var deferred = new $.Deferred(function (dfr) {

            function handleResult(rawResult) {
                result = jsValue(rawResult);
                dfr.resolve(result);
                if (valueCallback) {
                    valueCallback(result);
                }
            }

            function handleError(errObject) {
                dfr.reject(errObject.message, errObject.code);
                throw errObject.message;
            }

            Rho.platform.nativeApiCall(cmdText, null != valueCallback, function (result) {
                if (result['error'])
                    handleError(result['error']);
                else
                    handleResult(result['result']);
            });

        }).promise();

        return (null != valueCallback) ? deferred : result;
    }

    function apiReqFor(module) {
        return function (params) {
            params.args = Array.prototype.slice.call(params.args);
            if ('getProperties' == params.method && 0 < params.args.length) {
                params.args[0] = namesToArray(params.args[0]);
            }
            params.module = module;
            params.method = params.method;
            return commonReq(params);
        };
    }

    function extendSafely(destination, source, override) {
        var src = source;
        var dst = destination;
        var sourceIsFunc = false;

        if ('function' == typeof src) {
            if ('function' == typeof dst && !override)
                throw "Namespace definition conflict!";

            sourceIsFunc = true;
            src = destination;
            dst = source;
        }

        for (var prop in src) {
            if (!src.hasOwnProperty(prop)) continue;
            if (dst.hasOwnProperty(prop) && !override) continue;
            if ('prototype' == prop) {
                if(sourceIsFunc) continue;

                if('object' != typeof dst[prop])
                    dst[prop] = {};
                for (var subProp in src[prop]) {
                    if (!src[prop].hasOwnProperty(subProp)) continue;
                    dst[prop][subProp] = src[prop][subProp];
                }
                continue;
            }
            dst[prop] = src[prop];
        }
        return dst;
    }

    function namespace(nsPathStr, membersObj, override) {
        membersObj = membersObj || {};

        var ns = window;
        var parts = nsPathStr.split(/[\:\.]/);
        var nsLog = '';

        for (var i = 0; i < parts.length; i++) {
            var nsProp = parts[i];
            nsLog = nsLog + (i == 0 ? '' : '.') + nsProp;

            var subNs = ns[nsProp];
            if (!(subNs instanceof Object || 'undefined' == typeof subNs)) {
                throw "Namespace " + nsLog + " is already defined and it isn't an object!";
            }

            if (i == parts.length - 1) {
                if (ns[nsProp])
                    ns[nsProp] = extendSafely(ns[nsProp], membersObj, override);
                else
                    ns[nsProp] = membersObj;
            }
            ns[nsProp] = ns[nsProp] || {};
            ns = ns[nsProp];
        }
        return ns;
    }

    // === Property proxy support ====================================================

    var propsSupport = {
        ffHackKeywords: false,
        ffHackMethod: false,
        js185: false
    };

    (function propertySupportCheck() {
        propsSupport.ffHackKeywords = (function supported_firefoxHack_keywords() {
            var testObj = {};
            var okGet = false;
            var okSet = false;
            try {
                testObj = {
                    get propGet() {
                        okGet = true;
                        return okGet;
                    },
                    set propSet(val) {
                        okSet = val;
                    }
                };
                testObj.propSet = testObj.propGet;
            } catch (ex) {};
            return okGet && okSet;
        })();

        propsSupport.ffHackMethod = (function supported_firefoxHack_method() {
            var testObj = {};
            var okGet = false;
            var okSet = false;
            try {
                testObj.__defineGetter__('propGet', function () {
                    okGet = true;
                    return okGet;
                });
                testObj.__defineSetter__('propSet', function (val) {
                    okSet = val;
                });

                testObj.propSet = testObj.propGet;
            } catch (ex) {};
            return okGet && okSet;
        })();

        propsSupport.js185 = (function supported_js185_standard() {
            var testObj = {};
            var okGet = false;
            var okSet = false;
            try {
                Object.defineProperty(testObj, 'propGet', {
                    get: function () {
                        okGet = true;
                        return okGet;
                    }
                });
                Object.defineProperty(testObj, 'propSet', {
                    set: function (val) {
                        okSet = val;
                    }
                });
                testObj.propSet = testObj.propGet;
            } catch (ex) {};
            return okGet && okSet;
        })();
    })();
    // at this point we have property support level already detected


    function propAccessReqFunc(apiReqFunc, propName, rw, idFunc, customFunc) {
        var isSet = ('w' == rw);

        var propNameParts = propName.split(':');

        propName = propNameParts[0];
        var methodGet = propName;
        var methodSet = propName + '=';

        if (2 < propNameParts.length)
            methodSet = propNameParts[2];

        if (1 < propNameParts.length)
            methodGet = propNameParts[1];

        return function () {
            try {
                if ('function' == typeof customFunc)
                    customFunc.apply(this, arguments);
            } catch(ex) {}

            return apiReqFunc({
                instanceId: ('function' == typeof idFunc) ? idFunc.apply(this, []) : NOT_INSTANCE_ID,
                args: arguments,
                method: isSet ? methodSet : methodGet,
                valueCallbackIndex: (isSet ? 1 : 0)
            });
        };
    }

    // Here is default (fallback option) implementation of property using explicit accessors.
    // It will be used in case we have no any support for natural props syntax in a browser.
    // Usage sample: obj.setSomething(123), var abc = obj.getSomething()
    // ====================================================================================
    var createPropProxy_fallback = function (obj, propDescr, propAccess, apiReqFunc, idFunc, customGet, customSet) {
        var propName = propDescr.split(':')[0];

        function accessorName(accessor, name) {
            return accessor + name.charAt(0).toUpperCase() + name.slice(1);
        }

        if (0 <= propAccess.indexOf('w')) {
            obj[accessorName('set', propName)] = propAccessReqFunc(apiReqFunc, propDescr, 'w', idFunc, customSet);
        }
        if (0 <= propAccess.indexOf('r')) {
            obj[accessorName('get', propName)] = propAccessReqFunc(apiReqFunc, propDescr, 'r', idFunc, customGet);
        }
    };

    var createPropProxy = createPropProxy_fallback;

    if (propsSupport.js185) {
        // the best case, js185 props are supported
        createPropProxy = function (obj, propDescr, propAccess, apiReqFunc, idFunc, customGet, customSet) {
            var propName = propDescr.split(':')[0];

            var propDef = {};
            if (0 <= propAccess.indexOf('r')) {
                propDef['get'] = propAccessReqFunc(apiReqFunc, propDescr, 'r', idFunc, customGet);
            }
            if (0 <= propAccess.indexOf('w')) {
                propDef['set'] = propAccessReqFunc(apiReqFunc, propDescr, 'w', idFunc, customSet);
            }
            Object.defineProperty(obj, propName, propDef);
        };
    } else if (propsSupport.ffHackMethod) {
        // backup option, props are supported with firefox hack
        createPropProxy = function (obj, propDescr, propAccess, apiReqFunc, idFunc, customGet, customSet) {
            var propName = propDescr.split(':')[0];

            obj.__defineGetter__(propName, propAccessReqFunc(apiReqFunc, propDescr, 'r', idFunc, customGet));
            obj.__defineSetter__(propName, propAccessReqFunc(apiReqFunc, propDescr, 'w', idFunc, customSet));
        };
    } else {
        // Sorry, no luck. We can provide just a default implementation with explicit accessors.
        // It is the best thing we can do.
    }

    var incompatibleProps = [];

    // Properties bulk definition.
    // Sample:
    //
    //    Rho.util.createPropsProxy(Application, {
    //        'publicFolder': 'r',
    //        'startURI': 'rw',
    //        'version': 'r',
    //        'title': 'rw'
    //    }, apiReq);
    //
    function createPropsProxy(obj, propDefs, apiReq, idFunc) {
        if (!(propDefs instanceof Array))
            throw 'Property definitions list should be Array instance';

        for (var i=0; i<propDefs.length; i++) {
            var propDef = propDefs[i];

            try {
                createPropProxy(obj, propDef['propName'], propDef['propAccess'], apiReq, idFunc, propDef['customGet'], propDef['customSet']);
            } catch (ex) {
                // we unable to create property with this name, so log it
                incompatibleProps.push(name);
            }
            // create explicit accessors
            createPropProxy_fallback(obj, propDef['propName'], propDef['propAccess'], apiReq, idFunc, propDef['customGet'], propDef['customSet']);
        }
    }

    function methodAccessReqFunc(nativeName, persistentCallbackIndex, valueCallbackIndex, apiReq, idFunc) {
        return function() {
            return apiReq({
                instanceId: ('function' == typeof idFunc) ? idFunc.apply(this, []) : NOT_INSTANCE_ID,
                args: arguments,
                method: nativeName,
                persistentCallbackIndex: persistentCallbackIndex,
                valueCallbackIndex: valueCallbackIndex
            });
        }
    }

    function createMethodsProxy(obj, methodDefs, apiReq, idFunc) {
        if (!(methodDefs instanceof Array))
            throw 'Property definitions list should be Array instance';
        
        for (var i=0; i<methodDefs.length; i++) {
            var methodDef = methodDefs[i];
            try {
                obj[methodDef['methodName']] = methodAccessReqFunc(
                    methodDef['nativeName'],
                    methodDef['persistentCallbackIndex'],
                    methodDef['valueCallbackIndex'],
                    apiReq, idFunc
                );
            } catch (ex) {
                // we unable to create property with this name, so log it..
                incompatibleProps.push(methodDef['methodName']);
            }
        }
    }

    // === Factory handling =========================================================

    function objectForClass(className, id) {
        var instObject = {};
        instObject[RHO_CLASS_PARAM] = className;
        instObject[RHO_ID_PARAM] = id;
        return new (namespace(className))(instObject);
    }

    // === Modules loading implementation ============================================

    function loadCSS(url) {
        $('<link>').attr('rel', 'stylesheet').attr('href', url).appendTo('head');
    }

    function loadScript(url) {
        $('<script>').attr('type', 'text/javascript').attr('src', url).appendTo('head');
    }

    var thisFileURL = $("script[src$='" + thisFileName + "']").attr('src');
    //
    function loadApiModule(moduleName) {
        loadScript(thisFileURL.replace(thisFileName, moduleName + '.js'));
    }

    //
    function loadApiModules(parts) {
        for (var i = 0; i < parts.length; i++) {
            loadApiModule(parts[i]);
        }
    }

    // === Callback handler ==========================================================

    function callbackHandler(callbackId, resultObj) {
        var cbId = decodeURIComponent(callbackId);
        //console.log('Rho.callback_handler: callback for: ' +cbId);
        //console.log('Rho.callback_handler: resultObj: ' +resultObj);

        var opts = pendingCallbacks[cbId];

        if ('object' == typeof opts && opts) {
            //console.log('Rho.callback_handler: callback found!');

            if ('function' == typeof opts.callback) {
                var result = null;
                var err = null;
                if (resultObj) {
                    result = resultObj['result'];
                    err = resultObj['error'];
                }
                opts.callback(result, err);
            }

            if (!opts.isPersistent)
                delete pendingCallbacks[cbId];
        }
    };

    // === Native API call ===========================================================

    function nativeApiCall_ajax(cmdText, async, resultHandler) {
        $.ajax({
            async: async,
            type: 'post',
            url: API_CONTROLLER_URL,
            data: cmdText,
            dataType: 'json',
            headers: {'Accept': 'text/plain'}
        }).done(function (data) {
            resultHandler(data);
        }).fail(function (xhr, status, message) {
            resultHandler({error: {message: message, code: xhr.statusCode()}});
        });
    }



    // === Utility internal methods ==================================================

    var util = {
        loadApiModules: loadApiModules,
        namespace: namespace,
        apiReqFor: apiReqFor,
        namesToProps: namesToProps,
        namesToArray: namesToArray,
        createPropsProxy: createPropsProxy,
        createMethodsProxy: createMethodsProxy,
        incompatibleProps: incompatibleProps,
        rhoIdParam: function () { return RHO_ID_PARAM },
        rhoClassParam: function () { return RHO_CLASS_PARAM },
        nextId: nextId
    };

    var platform = {
        nativeApiCall: nativeApiCall_ajax,
        nativeApiResult: function(){/* intentionally empty stub function */}
    }

    // === Public interface ==========================================================

    return {
        util: util,
        platform: platform,
        callbackHandler: callbackHandler
    };

})(jQuery);
// Module Rho.ORM


(function ($, rho, rhoUtil) {
    // 

    // === ORM class implementation details ===

    var RRho = Rho;
    var impl = (function() {
        // Opal v0.3.33
        // http://opalrb.org
        // Copyright 2013, Adam Beynon
        // Released under the MIT License
        (function(undefined) {
        // The Opal object that is exposed globally
        var Opal = this.Opal = {};

        // Very root class
        function BasicObject(){}

        // Core Object class
        function Object(){}

        // Class' class
        function Class(){}

        // the class of nil
        function NilClass(){}

        // TopScope is used for inheriting constants from the top scope
        var TopScope = function(){};

        // Opal just acts as the top scope
        TopScope.prototype = Opal;

        // To inherit scopes
        Opal.alloc  = TopScope;

        // This is a useful reference to global object inside ruby files
        Opal.global = this;

        // Minify common function calls
        var __hasOwn = Opal.hasOwnProperty;
        var __slice  = Opal.slice = Array.prototype.slice;

        // Generates unique id for every ruby object
        var unique_id = 0;

        // Table holds all class variables
        Opal.cvars = {};

        // Globals table
        Opal.gvars = {};

        Opal.klass = function(base, superklass, id, constructor) {
          var klass;
          if (base._isObject) {
            base = base._klass;
          }

          if (superklass === null) {
            superklass = Object;
          }

          if (__hasOwn.call(base._scope, id)) {
            klass = base._scope[id];
          }
          else {
            if (!superklass._methods) {
              var bridged = superklass;
              superklass  = Object;
              klass       = bridge_class(bridged);
            }
            else {
              klass = boot_class(superklass, constructor);
            }

            klass._name = (base === Object ? id : base._name + '::' + id);

            var const_alloc   = function() {};
            var const_scope   = const_alloc.prototype = new base._scope.alloc();
            klass._scope      = const_scope;
            const_scope.alloc = const_alloc;

            base[id] = base._scope[id] = klass;

            if (superklass.$inherited) {
              superklass.$inherited(klass);
            }
          }

          return klass;
        };

        // Define new module (or return existing module)
        Opal.module = function(base, id, constructor) {
          var klass;
          if (base._isObject) {
            base = base._klass;
          }

          if (__hasOwn.call(base._scope, id)) {
            klass = base._scope[id];
          }
          else {
            klass = boot_class(Class, constructor);
            klass._name = (base === Object ? id : base._name + '::' + id);

            klass.$included_in = [];

            var const_alloc   = function() {};
            var const_scope   = const_alloc.prototype = new base._scope.alloc();
            klass._scope      = const_scope;
            const_scope.alloc = const_alloc;

            base[id] = base._scope[id]    = klass;
          }

          return klass;
        }

        // Utility function to raise a "no block given" error
        var no_block_given = function() {
          throw new Error('no block given');
        };

        // Boot a base class (makes instances).
        var boot_defclass = function(id, constructor, superklass) {
          if (superklass) {
            var ctor           = function() {};
                ctor.prototype = superklass.prototype;

            constructor.prototype = new ctor();
          }

          var prototype = constructor.prototype;

          prototype.constructor = constructor;
          prototype._isObject   = true;
          prototype._klass      = constructor;

          constructor._included_in  = [];
          constructor._isClass      = true;
          constructor._name         = id;
          constructor._super        = superklass;
          constructor._methods      = [];
          constructor._smethods     = [];
          constructor._isObject     = false;

          constructor._donate = __donate;
          constructor._sdonate = __sdonate;

          Opal[id] = constructor;

          return constructor;
        };

        // Create generic class with given superclass.
        var boot_class = function(superklass, constructor) {
          var ctor = function() {};
              ctor.prototype = superklass.prototype;

          constructor.prototype = new ctor();
          var prototype = constructor.prototype;

          prototype._klass      = constructor;
          prototype.constructor = constructor;

          constructor._included_in  = [];
          constructor._isClass      = true;
          constructor._super        = superklass;
          constructor._methods      = [];
          constructor._isObject     = false;
          constructor._klass        = Class;
          constructor._donate       = __donate
          constructor._sdonate      = __sdonate;

          constructor['$==='] = module_eqq;
          constructor.$to_s = module_to_s;

          var smethods;

          smethods = superklass._smethods.slice();

          constructor._smethods = smethods;
          for (var i = 0, length = smethods.length; i < length; i++) {
            var m = smethods[i];
            constructor[m] = superklass[m];
          }

          return constructor;
        };

        var bridge_class = function(constructor) {
          constructor.prototype._klass = constructor;

          constructor._included_in  = [];
          constructor._isClass      = true;
          constructor._super        = Object;
          constructor._klass        = Class;
          constructor._methods      = [];
          constructor._smethods     = [];
          constructor._isObject     = false;

          constructor._donate = function(){};
          constructor._sdonate = __sdonate;

          constructor['$==='] = module_eqq;
          constructor.$to_s = module_to_s;

          var smethods = constructor._smethods = Class._methods.slice();
          for (var i = 0, length = smethods.length; i < length; i++) {
            var m = smethods[i];
            constructor[m] = Object[m];
          }

          bridged_classes.push(constructor);

          var table = Object.prototype, methods = Object._methods;

          for (var i = 0, length = methods.length; i < length; i++) {
            var m = methods[i];
            constructor.prototype[m] = table[m];
          }

          constructor._smethods.push('$allocate');

          return constructor;
        };

        Opal.puts = function(a) { console.log(a); };

        // Initialization
        // --------------

        boot_defclass('BasicObject', BasicObject)
        boot_defclass('Object', Object, BasicObject);
        boot_defclass('Class', Class, Object);

        Class.prototype = Function.prototype;

        BasicObject._klass = Object._klass = Class._klass = Class;

        // Implementation of Class#===
        function module_eqq(object) {
          if (object == null) {
            return false;
          }

          var search = object._klass;

          while (search) {
            if (search === this) {
              return true;
            }

            search = search._super;
          }

          return false;
        }

        // Implementation of Class#to_s
        function module_to_s() {
          return this._name;
        }

        // Donator for all 'normal' classes and modules
        function __donate(defined, indirect) {
          var methods = this._methods, included_in = this.$included_in;

          // if (!indirect) {
            this._methods = methods.concat(defined);
          // }

          if (included_in) {
            for (var i = 0, length = included_in.length; i < length; i++) {
              var includee = included_in[i];
              var dest = includee.prototype;

              for (var j = 0, jj = defined.length; j < jj; j++) {
                var method = defined[j];
                dest[method] = this.prototype[method];
              }

              if (includee.$included_in) {
                includee._donate(defined, true);
              }
            }

          }
        }

        // Donator for singleton (class) methods
        function __sdonate(defined) {
          this._smethods = this._smethods.concat(defined);
        }

        var bridged_classes = Object.$included_in = [];

        BasicObject._scope = Object._scope = Opal;
        Opal.Module = Opal.Class;
        Opal.Kernel = Object;

        var class_const_alloc = function(){};
        var class_const_scope = new TopScope();
        class_const_scope.alloc = class_const_alloc;
        Class._scope = class_const_scope;

        Object.prototype.toString = function() {
          return this.$to_s();
        };

        Opal.top = new Object;

        Opal.klass(Object, Object, 'NilClass', NilClass)
        Opal.nil = new NilClass;

        Opal.breaker  = new Error('unexpected break');

        Opal.version = "0.3.33";
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, def = self._klass.prototype, __breaker = __opal.breaker, __slice = __opal.slice, __gvars = __opal.gvars;
          __gvars["~"] = nil;
          __gvars["/"] = "\n";
          __scope.RUBY_ENGINE = "opal";
          __scope.RUBY_PLATFORM = "opal";
          __scope.RUBY_VERSION = "1.9.2";
          __scope.OPAL_VERSION = __opal.version;
          self.$to_s = function() {
            
            return "main";
          };
          return self.$include = function(mod) {
            
            return __scope.Object.$include(mod);
          };
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function Class() {};
            Class = __klass(__base, __super, "Class", Class);

            ;Class._sdonate(["$new"]);    var def = Class.prototype, __scope = Class._scope;

            Class.$new = function(sup, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (sup == null || sup === block) {
                sup = __scope.Object
              }
              
              function AnonClass(){};
              var klass   = boot_class(sup, AnonClass)
              klass._name = nil;

              sup.$inherited(klass);

              if (block !== nil) {
                var block_self = block._s;
                block._s = null;
                block.call(klass);
                block._s = block_self;
              }

              return klass;
            
            };

            def.$allocate = function() {
              
              
              var obj = new this;
              obj._id = unique_id++;
              return obj;
            
            };

            def.$alias_method = function(newname, oldname) {
              
              this.prototype['$' + newname] = this.prototype['$' + oldname];
              return this;
            };

            def.$ancestors = function() {
              
              
              var parent = this,
                  result = [];

              while (parent) {
                result.push(parent);
                parent = parent._super;
              }

              return result;
            
            };

            def.$append_features = function(klass) {
              
              
              var module = this;

              if (!klass.$included_modules) {
                klass.$included_modules = [];
              }

              for (var idx = 0, length = klass.$included_modules.length; idx < length; idx++) {
                if (klass.$included_modules[idx] === module) {
                  return;
                }
              }

              klass.$included_modules.push(module);

              if (!module.$included_in) {
                module.$included_in = [];
              }

              module.$included_in.push(klass);

              var donator   = module.prototype,
                  prototype = klass.prototype,
                  methods   = module._methods;

              for (var i = 0, length = methods.length; i < length; i++) {
                var method = methods[i];
                prototype[method] = donator[method];
              }

              if (prototype._smethods) {
                prototype._sdonate(methods);
              }

              if (klass.$included_in) {
                klass._donate(methods.slice(), true);
              }
            
              return this;
            };

            def.$attr_accessor = function(names) {
              names = __slice.call(arguments, 0);
              this.$attr_reader.apply(this, [].concat(names));
              return this.$attr_writer.apply(this, [].concat(names));
            };

            def.$attr_reader = function(names) {
              names = __slice.call(arguments, 0);
              
              var proto = this.prototype;
              for (var i = 0, length = names.length; i < length; i++) {
                (function(name) {
                  proto[name] = nil;

                  proto['$' + name] = function() {
                    return this[name];
                  };
                })(names[i]);
              }
            
              return nil;
            };

            def.$attr_writer = function(names) {
              names = __slice.call(arguments, 0);
              
              var proto = this.prototype;
              for (var i = 0, length = names.length; i < length; i++) {
                (function(name) {
                  proto[name] = nil;

                  proto['$' + name + '='] = function(value) {
                    return this[name] = value;
                  };
                })(names[i]);
              }
            
              return nil;
            };

            def.$attr = def.$attr_accessor;

            def.$define_method = function(name, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              if (block === nil) {
                no_block_given();
              }

              var jsid    = '$' + name;
              block._jsid = jsid;
              block._sup  = this.prototype[jsid];
              block._s    = null;

              this.prototype[jsid] = block;
              this._donate([jsid]);

              return nil;
            
            };

            def.$include = function(mods) {
              mods = __slice.call(arguments, 0);
              
              var i = mods.length - 1, mod;
              while (i >= 0) {
                mod = mods[i];
                i--;

                if (mod === this) {
                  continue;
                }

                (mod).$append_features(this);
                (mod).$included(this);
              }

              return this;
            
            };

            def.$instance_methods = function(include_super) {
              if (include_super == null) {
                include_super = false
              }
              
              var methods = [], proto = this.prototype;

              for (var prop in this.prototype) {
                if (!include_super && !proto.hasOwnProperty(prop)) {
                  continue;
                }

                if (prop.charAt(0) === '$') {
                  methods.push(prop.substr(1));
                }
              }

              return methods;
            
            };

            def.$included = function(mod) {
              
              return nil;
            };

            def.$inherited = function(cls) {
              
              return nil;
            };

            def.$module_eval = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              if (block === nil) {
                no_block_given();
              }

              var block_self = block._s, result;

              block._s = null;
              result = block.call(this);
              block._s = block_self;

              return result;
            
            };

            def.$class_eval = def.$module_eval;

            def.$name = function() {
              
              return this._name;
            };

            def.$new = function() {
              
              
              var args = __slice.call(arguments);
              var obj = new this;
              obj._id = unique_id++;

              obj.$initialize.apply(obj, args);
              return obj;
            
            };

            def.$public = function() {
              
              return nil;
            };

            def.$private = def.$public;

            def.$protected = def.$public;

            def.$superclass = function() {
              
              
              return this._super || nil;
            
            };

            return nil;
          })(self, null)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function BasicObject() {};
            BasicObject = __klass(__base, __super, "BasicObject", BasicObject);

            var def = BasicObject.prototype, __scope = BasicObject._scope;

            def.$initialize = function() {
              
              return nil;
            };

            def['$=='] = function(other) {
              
              return this === other;
            };

            def.$__send__ = function(symbol, args, block) {
              var block;args = __slice.call(arguments, 1);
              if (typeof(args[args.length - 1]) === 'function') { block = args.pop(); } else { block = nil; }
              
              
              return this['$' + symbol].apply(this, args);
            
            };

            def['$eql?'] = def['$=='];

            def['$equal?'] = def['$=='];

            def.$instance_eval = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              if (block === nil) {
                no_block_given();
              }

              var block_self = block._s, result;

              block._s = null;
              result = block.call(this, this);
              block._s = block_self;

              return result;
            
            };

            def.$instance_exec = function(args, block) {
              var block;args = __slice.call(arguments, 0);
              if (typeof(args[args.length - 1]) === 'function') { block = args.pop(); } else { block = nil; }
              
              
              if (block === nil) {
                no_block_given();
              }

              var block_self = block._s, result;

              block._s = null;
              result = block.apply(this, args);
              block._s = block_self;

              return result;
            
            };

            return nil;
          })(self, null)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
          return (function(__base){
            function Kernel() {};
            Kernel = __module(__base, "Kernel", Kernel);
            var def = Kernel.prototype, __scope = Kernel._scope;

            def.$initialize = def.$initialize;

            def['$=='] = def['$=='];

            def.$__send__ = def.$__send__;

            def['$eql?'] = def['$eql?'];

            def['$equal?'] = def['$equal?'];

            def.$instance_eval = def.$instance_eval;

            def.$instance_exec = def.$instance_exec;

            def['$=~'] = function(obj) {
              
              return false;
            };

            def['$==='] = function(other) {
              
              return this == other;
            };

            def.$method = function(name) {
              
              
              var recv = this,
                  meth = recv['$' + name],
                  func = function() {
                    return meth.apply(recv, __slice.call(arguments, 0));
                  };

              if (!meth) {
                this.$raise(__scope.NameError);
              }

              func._klass = __scope.Method;
              return func;
            
            };

            def.$methods = function(all) {
              if (all == null) {
                all = true
              }
              
              var methods = [];
              for(var k in this) {
                if(k[0] == "$" && typeof (this)[k] === "function") {
                  if(all === false || all === nil) {
                    if(!Object.hasOwnProperty.call(this, k)) {
                      continue;
                    }
                  }
                  methods.push(k.substr(1));
                }
              }
              return methods;
            
            };

            def.$Array = function(object) {
              
              
              if (object.$to_ary) {
                return object.$to_ary();
              }
              else if (object.$to_a) {
                return object.$to_a();
              }

              return [object];
            
            };

            def.$class = function() {
              
              return this._klass;
            };

            def.$define_singleton_method = function(name, body) {
              if (typeof(body) !== 'function') { body = nil }
              
              if (body === nil) {
                no_block_given();
              }

              var jsid   = '$' + name;
              body._jsid = jsid;
              body._sup  = this[jsid];
              body._s    = null;

              this[jsid] = body;

              return this;
            
            };

            def['$equal?'] = function(other) {
              
              return this === other;
            };

            def.$extend = function(mods) {
              mods = __slice.call(arguments, 0);
              
              for (var i = 0, length = mods.length; i < length; i++) {
                this.$singleton_class().$include(mods[i]);
              }

              return this;
            
            };

            def.$format = function(format, args) {
              args = __slice.call(arguments, 1);
              
              var idx = 0;
              return format.replace(/%(\d+\$)?([-+ 0]*)(\d*|\*(\d+\$)?)(?:\.(\d*|\*(\d+\$)?))?([cspdiubBoxXfgeEG])|(%%)/g, function(str, idx_str, flags, width_str, w_idx_str, prec_str, p_idx_str, spec, escaped) {
                if (escaped) {
                  return '%';
                }

                var width,
                prec,
                is_integer_spec = ("diubBoxX".indexOf(spec) != -1),
                is_float_spec = ("eEfgG".indexOf(spec) != -1),
                prefix = '',
                obj;

                if (width_str === undefined) {
                  width = undefined;
                } else if (width_str.charAt(0) == '*') {
                  var w_idx = idx++;
                  if (w_idx_str) {
                    w_idx = parseInt(w_idx_str, 10) - 1;
                  }
                  width = (args[w_idx]).$to_i();
                } else {
                  width = parseInt(width_str, 10);
                }
                if (prec_str === undefined) {
                  prec = is_float_spec ? 6 : undefined;
                } else if (prec_str.charAt(0) == '*') {
                  var p_idx = idx++;
                  if (p_idx_str) {
                    p_idx = parseInt(p_idx_str, 10) - 1;
                  }
                  prec = (args[p_idx]).$to_i();
                } else {
                  prec = parseInt(prec_str, 10);
                }
                if (idx_str) {
                  idx = parseInt(idx_str, 10) - 1;
                }
                switch (spec) {
                case 'c':
                  obj = args[idx];
                  if (obj._isString) {
                    str = obj.charAt(0);
                  } else {
                    str = String.fromCharCode((obj).$to_i());
                  }
                  break;
                case 's':
                  str = (args[idx]).$to_s();
                  if (prec !== undefined) {
                    str = str.substr(0, prec);
                  }
                  break;
                case 'p':
                  str = (args[idx]).$inspect();
                  if (prec !== undefined) {
                    str = str.substr(0, prec);
                  }
                  break;
                case 'd':
                case 'i':
                case 'u':
                  str = (args[idx]).$to_i().toString();
                  break;
                case 'b':
                case 'B':
                  str = (args[idx]).$to_i().toString(2);
                  break;
                case 'o':
                  str = (args[idx]).$to_i().toString(8);
                  break;
                case 'x':
                case 'X':
                  str = (args[idx]).$to_i().toString(16);
                  break;
                case 'e':
                case 'E':
                  str = (args[idx]).$to_f().toExponential(prec);
                  break;
                case 'f':
                  str = (args[idx]).$to_f().toFixed(prec);
                  break;
                case 'g':
                case 'G':
                  str = (args[idx]).$to_f().toPrecision(prec);
                  break;
                }
                idx++;
                if (is_integer_spec || is_float_spec) {
                  if (str.charAt(0) == '-') {
                    prefix = '-';
                    str = str.substr(1);
                  } else {
                    if (flags.indexOf('+') != -1) {
                      prefix = '+';
                    } else if (flags.indexOf(' ') != -1) {
                      prefix = ' ';
                    }
                  }
                }
                if (is_integer_spec && prec !== undefined) {
                  if (str.length < prec) {
                    str = "0"['$*'](prec - str.length) + str;
                  }
                }
                var total_len = prefix.length + str.length;
                if (width !== undefined && total_len < width) {
                  if (flags.indexOf('-') != -1) {
                    str = str + " "['$*'](width - total_len);
                  } else {
                    var pad_char = ' ';
                    if (flags.indexOf('0') != -1) {
                      str = "0"['$*'](width - total_len) + str;
                    } else {
                      prefix = " "['$*'](width - total_len) + prefix;
                    }
                  }
                }
                var result = prefix + str;
                if ('XEG'.indexOf(spec) != -1) {
                  result = result.toUpperCase();
                }
                return result;
              });
            
            };

            def.$hash = function() {
              
              return this._id;
            };

            def.$inspect = function() {
              
              return this.$to_s();
            };

            def['$instance_of?'] = function(klass) {
              
              return this._klass === klass;
            };

            def['$instance_variable_defined?'] = function(name) {
              
              return __hasOwn.call(this, name.substr(1));
            };

            def.$instance_variable_get = function(name) {
              
              
              var ivar = this[name.substr(1)];

              return ivar == null ? nil : ivar;
            
            };

            def.$instance_variable_set = function(name, value) {
              
              return this[name.substr(1)] = value;
            };

            def['$const_defined?'] = function(name) {
              
              return __hasOwn.call(this, name);
            };

            def.$const_set = function(name, value) {
              
              this[name] = this._scope[name] = value;

              var fn = function() { return { '$to_s': function() { return name; } } };

              // fake to pass through this code:
              // return this.$class().$name().$to_s();
              value._klass = value.prototype._klass = { '$name': fn };

              value.$name = fn;

              return value;
            };

            def.$instance_variables = function() {
              
              
              var result = [];

              for (var name in this) {
                result.push(name);
              }

              return result;
            
            };

            def['$is_a?'] = function(klass) {
              
              
              var search = this._klass;

              while (search) {
                if (search === klass) {
                  return true;
                }

                search = search._super;
              }

              return false;
            
            };

            def['$kind_of?'] = def['$is_a?'];

            def.$lambda = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              return block;
            };

            def.$loop = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              while (true) {;
              if (block() === __breaker) return __breaker.$v;
              };
              return this;
            };

            def['$nil?'] = function() {
              
              return false;
            };

            def.$object_id = function() {
              
              return this._id || (this._id = unique_id++);
            };

            def.$printf = function(args) {
              var fmt = nil;args = __slice.call(arguments, 0);
              if (args.$length()['$>'](0)) {
                fmt = args.$shift();
                this.$print(this.$format.apply(this, [fmt].concat(args)));
              };
              return nil;
            };

            def.$proc = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              if (block === nil) {
                no_block_given();
              }
              block.is_lambda = false;
              return block;
            
            };

            def.$puts = function(strs) {
              strs = __slice.call(arguments, 0);
              
              for (var i = 0; i < strs.length; i++) {
                if(strs[i] instanceof Array) {
                  this.$puts.apply(this, [].concat((strs[i])))
                } else {
                  __opal.puts((strs[i]).$to_s());
                }
              }
            
              return nil;
            };

            def.$p = function(args) {
              args = __slice.call(arguments, 0);
              console.log.apply(console, args);
              if (args.$length()['$<='](1)) {
                return args['$[]'](0)
                } else {
                return args
              };
            };

            def.$print = def.$puts;

            def.$raise = function(exception, string) {
              
              
              if (typeof(exception) === 'string') {
                exception = __scope.RuntimeError.$new(exception);
              }
              else if (!exception['$is_a?'](__scope.Exception)) {
                exception = exception.$new(string);
              }

              throw exception;
            
            };

            def.$rand = function(max) {
              
              return max == null ? Math.random() : Math.floor(Math.random() * max);
            };

            def['$respond_to?'] = function(name) {
              
              return !!this['$' + name];
            };

            def.$send = def.$__send__;

            def.$singleton_class = function() {
              
              
              if (this._isClass) {
                if (this._singleton) {
                  return this._singleton;
                }

                var meta = new __opal.Class;
                meta._klass = __opal.Class;
                this._singleton = meta;
                meta.prototype = this;

                return meta;
              }

              if (!this._isObject) {
                return this._klass;
              }

              function Singleton() {};

              if (this._singleton) {
                return this._singleton;
              }

              else {
                var orig_class = this._klass,
                    class_id   = "#<Class:#<" + orig_class._name + ":" + orig_class._id + ">>";


                var meta = boot_class(orig_class, Singleton);
                meta._name = class_id;

                meta.prototype = this;
                this._singleton = meta;
                meta._klass = orig_class._klass;

                return meta;
              }
            
            };

            def.$sprintf = def.$format;

            def.$tap = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              if (block(this) === __breaker) return __breaker.$v;
              return this;
            };

            def.$to_json = function() {
              
              return this.$to_s().$to_json();
            };

            def.$to_proc = function() {
              
              return this;
            };

            def.$to_s = function() {
              
              return "#<" + this._klass._name + ":" + this._id + ">";
            };
                ;Kernel._donate(["$initialize", "$==", "$__send__", "$eql?", "$equal?", "$instance_eval", "$instance_exec", "$=~", "$===", "$method", "$methods", "$Array", "$class", "$define_singleton_method", "$equal?", "$extend", "$format", "$hash", "$inspect", "$instance_of?", "$instance_variable_defined?", "$instance_variable_get", "$instance_variable_set", "$instance_variables", "$is_a?", "$kind_of?", "$lambda", "$loop", "$nil?", "$object_id", "$printf", "$proc", "$puts", "$p", "$print", "$raise", "$rand", "$respond_to?", "$send", "$singleton_class", "$sprintf", "$tap", "$to_json", "$to_proc", "$to_s", "$const_defined?", "$const_set"]);
          })(self)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function NilClass() {};
            NilClass = __klass(__base, __super, "NilClass", NilClass);

            var def = NilClass.prototype, __scope = NilClass._scope;

            def['$&'] = function(other) {
              
              return false;
            };

            def['$|'] = function(other) {
              
              return other !== false && other !== nil;
            };

            def['$^'] = function(other) {
              
              return other !== false && other !== nil;
            };

            def['$=='] = function(other) {
              
              return other === nil;
            };

            def.$inspect = function() {
              
              return "nil";
            };

            def['$nil?'] = function() {
              
              return true;
            };

            def.$singleton_class = function() {
              
              return __scope.NilClass;
            };

            def.$to_a = function() {
              
              return [];
            };

            def.$to_i = function() {
              
              return 0;
            };

            def.$to_f = def.$to_i;

            def.$to_json = function() {
              
              return "null";
            };

            def.$to_native = function() {
              
              return null;
            };

            def.$to_s = function() {
              
              return "";
            };

            return nil;
          })(self, null)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function Boolean() {};
            Boolean = __klass(__base, __super, "Boolean", Boolean);

            var def = Boolean.prototype, __scope = Boolean._scope;

            
            Boolean.prototype._isBoolean = true;
          

            def['$&'] = function(other) {
              
              return (this == true) ? (other !== false && other !== nil) : false;
            };

            def['$|'] = function(other) {
              
              return (this == true) ? true : (other !== false && other !== nil);
            };

            def['$^'] = function(other) {
              
              return (this == true) ? (other === false || other === nil) : (other !== false && other !== nil);
            };

            def['$=='] = function(other) {
              
              return (this == true) === other.valueOf();
            };

            def.$singleton_class = def.$class;

            def.$to_json = function() {
              
              return (this == true) ? 'true' : 'false';
            };

            def.$to_s = function() {
              
              return (this == true) ? 'true' : 'false';
            };

            return nil;
          })(self, Boolean)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          (function(__base, __super){
            function Exception() {};
            Exception = __klass(__base, __super, "Exception", Exception);

            ;Exception._sdonate(["$new"]);    var def = Exception.prototype, __scope = Exception._scope;
            def.message = nil;

            def.$message = function() {
              
              return this.message
            }, nil;

            Exception.$new = function(message) {
              if (message == null) {
                message = ""
              }
              
              var err = new Error(message);
              err._klass = this;
              return err;
            
            };

            def.$backtrace = function() {
              
              
              var backtrace = this.stack;

              if (typeof(backtrace) === 'string') {
                return backtrace.split("\n").slice(0, 15);
              }
              else if (backtrace) {
                return backtrace.slice(0, 15);
              }

              return [];
            
            };

            def.$inspect = function() {
              
              return "#<" + (this.$class().$name()) + ": '" + (this.message) + "'>";
            };

            return def.$to_s = def.$message;
          })(self, Error);
          __scope.StandardError = __scope.Exception;
          __scope.RuntimeError = __scope.Exception;
          __scope.LocalJumpError = __scope.Exception;
          __scope.TypeError = __scope.Exception;
          __scope.NameError = __scope.Exception;
          __scope.NoMethodError = __scope.Exception;
          __scope.ArgumentError = __scope.Exception;
          __scope.IndexError = __scope.Exception;
          __scope.KeyError = __scope.Exception;
          return __scope.RangeError = __scope.Exception;
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass, __gvars = __opal.gvars;
          (function(__base, __super){
            function Regexp() {};
            Regexp = __klass(__base, __super, "Regexp", Regexp);

            ;Regexp._sdonate(["$escape", "$new"]);    var def = Regexp.prototype, __scope = Regexp._scope;

            Regexp.$escape = function(string) {
              
              return string.replace(/([.*+?^=!:${}()|[]\/\])/g, '\$1');
            };

            Regexp.$new = function(string, options) {
              
              return new RegExp(string, options);
            };

            def['$=='] = function(other) {
              
              return other.constructor == RegExp && this.toString() === other.toString();
            };

            def['$==='] = def.test;

            def['$=~'] = function(string) {
              
              
              var result = this.exec(string);

              if (result) {
                result.$to_s    = match_to_s;
                result.$inspect = match_inspect;
                result._klass = __scope.MatchData;

                __gvars["~"] = result;
              }
              else {
                __gvars["~"] = nil;
              }

              return result ? result.index : nil;
            
            };

            def['$eql?'] = def['$=='];

            def.$inspect = def.toString;

            def.$match = function(pattern) {
              
              
              var result  = this.exec(pattern);

              if (result) {
                result.$to_s    = match_to_s;
                result.$inspect = match_inspect;
                result._klass = __scope.MatchData;

                return __gvars["~"] = result;
              }
              else {
                return __gvars["~"] = nil;
              }
            
            };

            def.$to_s = function() {
              
              return this.source;
            };

            
            function match_to_s() {
              return this[0];
            }

            function match_inspect() {
              return "<#MatchData " + this[0].$inspect() + ">";
            }
          
          })(self, RegExp);
          return (function(__base, __super){
            function MatchData() {};
            MatchData = __klass(__base, __super, "MatchData", MatchData);

            var def = MatchData.prototype, __scope = MatchData._scope;

            return nil
          })(self, null);
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
          return (function(__base){
            function Comparable() {};
            Comparable = __module(__base, "Comparable", Comparable);
            var def = Comparable.prototype, __scope = Comparable._scope;

            def['$<'] = function(other) {
              
              return this['$<=>'](other)['$=='](-1);
            };

            def['$<='] = function(other) {
              
              return this['$<=>'](other)['$<='](0);
            };

            def['$=='] = function(other) {
              
              return this['$<=>'](other)['$=='](0);
            };

            def['$>'] = function(other) {
              
              return this['$<=>'](other)['$=='](1);
            };

            def['$>='] = function(other) {
              
              return this['$<=>'](other)['$>='](0);
            };

            def['$between?'] = function(min, max) {
              var _a;
              return ((_a = this['$>'](min)) ? this['$<'](max) : _a);
            };
                ;Comparable._donate(["$<", "$<=", "$==", "$>", "$>=", "$between?"]);
          })(self)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module;
          return (function(__base){
            function Enumerable() {};
            Enumerable = __module(__base, "Enumerable", Enumerable);
            var def = Enumerable.prototype, __scope = Enumerable._scope;

            def['$all?'] = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = true, proc;

              if (block !== nil) {
                proc = function(obj) {
                  var value;

                  if ((value = block(obj)) === __breaker) {
                    return __breaker.$v;
                  }

                  if (value === false || value === nil) {
                    result = false;
                    __breaker.$v = nil;

                    return __breaker;
                  }
                }
              }
              else {
                proc = function(obj) {
                  if (obj === false || obj === nil) {
                    result = false;
                    __breaker.$v = nil;

                    return __breaker;
                  }
                }
              }

              this.$each(proc);

              return result;
            
            };

            def['$any?'] = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = false, proc;

              if (block !== nil) {
                proc = function(obj) {
                  var value;

                  if ((value = block(obj)) === __breaker) {
                    return __breaker.$v;
                  }

                  if (value !== false && value !== nil) {
                    result       = true;
                    __breaker.$v = nil;

                    return __breaker;
                  }
                }
              }
              else {
                proc = function(obj) {
                  if (obj !== false && obj !== nil) {
                    result      = true;
                    __breaker.$v = nil;

                    return __breaker;
                  }
                }
              }

              this.$each(proc);

              return result;
            
            };

            def.$collect = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              var proc = function() {
                var obj = __slice.call(arguments), value;

                if ((value = block.apply(null, obj)) === __breaker) {
                  return __breaker.$v;
                }

                result.push(value);
              };

              this.$each(proc);

              return result;
            
            };

            def.$reduce = function(object, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (object === block && typeof(object) === 'function') { object = undefined; }
              
              var result = object == undefined ? 0 : object;

              var proc = function() {
                var obj = __slice.call(arguments), value;

                if ((value = block.apply(null, [result].concat(obj))) === __breaker) {
                  result = __breaker.$v;
                  __breaker.$v = nil;

                  return __breaker;
                }

                result = value;
              };

              this.$each(proc);

              return result;
            
            };

            def.$count = function(object, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (object === block && typeof(object) === 'function') { object = undefined; }
              
              var result = 0;

              if (object != null) {
                block = function(obj) { return (obj)['$=='](object); };
              }
              else if (block === nil) {
                block = function() { return true; };
              }

              var proc = function(obj) {
                var value;

                if ((value = block(obj)) === __breaker) {
                  return __breaker.$v;
                }

                if (value !== false && value !== nil) {
                  result++;
                }
              }

              this.$each(proc);

              return result;
            
            };

            def.$detect = function(ifnone, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (ifnone === block && typeof(ifnone) === 'function') { ifnone = undefined; }
              
              var result = nil;

              this.$each(function(obj) {
                var value;

                if ((value = block(obj)) === __breaker) {
                  return __breaker.$v;
                }

                if (value !== false && value !== nil) {
                  result      = obj;
                  __breaker.$v = nil;

                  return __breaker;
                }
              });

              if (result !== nil) {
                return result;
              }

              if (typeof(ifnone) === 'function') {
                return ifnone.$call();
              }

              return ifnone == null ? nil : ifnone;
            
            };

            def.$drop = function(number) {
              
              
              var result  = [],
                  current = 0;

              this.$each(function(obj) {
                if (number < current) {
                  result.push(e);
                }

                current++;
              });

              return result;
            
            };

            def.$drop_while = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              this.$each(function(obj) {
                var value;

                if ((value = block(obj)) === __breaker) {
                  return __breaker;
                }

                if (value === false || value === nil) {
                  result.push(obj);
                  return value;
                }

                return __breaker;
              });

              return result;
            
            };

            def.$each_with_index = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var index = 0;

              this.$each(function(obj) {
                var value;

                if ((value = block(obj, index)) === __breaker) {
                  return __breaker.$v;
                }

                index++;
              });

              return nil;
            
            };

            def.$each_with_object = function(object, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              this.$each(function(obj) {
                var value;

                if ((value = block(obj, object)) === __breaker) {
                  return __breaker.$v;
                }
              });

              return object;
            
            };

            def.$entries = function() {
              
              
              var result = [];

              this.$each(function(obj) {
                result.push(obj);
              });

              return result;
            
            };

            def.$find = def.$detect;

            def.$find_all = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              this.$each(function(obj) {
                var value;

                if ((value = block(obj)) === __breaker) {
                  return __breaker.$v;
                }

                if (value !== false && value !== nil) {
                  result.push(obj);
                }
              });

              return result;
            
            };

            def.$find_index = function(object, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (object === block && typeof(object) === 'function') { object = undefined; }
              
              var proc, result = nil, index = 0;

              if (object != null) {
                proc = function (obj) {
                  if ((obj)['$=='](object)) {
                    result = index;
                    return __breaker;
                  }
                  index += 1;
                };
              }
              else {
                proc = function(obj) {
                  var value;

                  if ((value = block(obj)) === __breaker) {
                    return __breaker.$v;
                  }

                  if (value !== false && value !== nil) {
                    result     = index;
                    __breaker.$v = index;

                    return __breaker;
                  }
                  index += 1;
                };
              }

              this.$each(proc);

              return result;
            
            };

            def.$first = function(number) {
              
              
              var result = [],
                  current = 0,
                  proc;

              if (number == null) {
                result = nil;
                proc = function(obj) {
                    result = obj; return __breaker;
                  };
              } else {
                proc = function(obj) {
                    if (number <= current) {
                      return __breaker;
                    }

                    result.push(obj);

                    current++;
                  };
              }

              this.$each(proc);

              return result;
            
            };

            def.$grep = function(pattern, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              this.$each(block !== nil
                ? function(obj) {
                    var value = pattern['$==='](obj);

                    if (value !== false && value !== nil) {
                      if ((value = block(obj)) === __breaker) {
                        return __breaker.$v;
                      }

                      result.push(value);
                    }
                  }
                : function(obj) {
                    var value = pattern['$==='](obj);

                    if (value !== false && value !== nil) {
                      result.push(obj);
                    }
                  });

              return result;
            
            };

            def.$map = def.$collect;

            def.$select = def.$find_all;

            def.$take = def.$first;

            def.$to_a = def.$entries;

            def.$inject = def.$reduce;
                ;Enumerable._donate(["$all?", "$any?", "$collect", "$reduce", "$count", "$detect", "$drop", "$drop_while", "$each_with_index", "$each_with_object", "$entries", "$find", "$find_all", "$find_index", "$first", "$grep", "$map", "$select", "$take", "$to_a", "$inject"]);
          })(self)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function Array() {};
            Array = __klass(__base, __super, "Array", Array);

            ;Array._sdonate(["$[]", "$new"]);    var def = Array.prototype, __scope = Array._scope;

            
            Array.prototype._isArray = true;
          

            Array.$include(__scope.Enumerable);

            Array['$[]'] = function(objects) {
              objects = __slice.call(arguments, 0);
              
              return objects;
            
            };

            Array.$new = function(size, obj, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (obj == null || obj === block) {
                obj = nil
              }
              
              var arr = [];

              if (size && size._isArray) {
                for (var i = 0; i < size.length; i++) {
                  arr[i] = size[i];
                }
              }
              else {
                if (block === nil) {
                  for (var i = 0; i < size; i++) {
                    arr[i] = obj;
                  }
                }
                else {
                  for (var i = 0; i < size; i++) {
                    arr[i] = block(i);
                  }
                }
              }

              return arr;
            
            };

            def['$&'] = function(other) {
              
              
              var result = [],
                  seen   = {};

              for (var i = 0, length = this.length; i < length; i++) {
                var item = this[i];

                if (!seen[item]) {
                  for (var j = 0, length2 = other.length; j < length2; j++) {
                    var item2 = other[j];

                    if ((item === item2) && !seen[item]) {
                      seen[item] = true;

                      result.push(item);
                    }
                  }
                }
              }

              return result;
            
            };

            def['$*'] = function(other) {
              
              
              if (typeof(other) === 'string') {
                return this.join(other);
              }

              var result = [];

              for (var i = 0; i < other; i++) {
                result = result.concat(this);
              }

              return result;
            
            };

            def['$+'] = function(other) {
              
              return this.slice().concat(other.slice());
            };

            def['$-'] = function(other) {
              var TMP_1;
              return this.$reject((TMP_1 = function(i) {

                var self = TMP_1._s || this;
                if (i == null) i = nil;

                return other['$include?'](i)
              }, TMP_1._s = this, TMP_1));
            };

            def['$<<'] = function(object) {
              
              this.push(object);
              return this;
            };

            def['$<=>'] = function(other) {
              
              
              if (this.$hash() === other.$hash()) {
                return 0;
              }

              if (this.length != other.length) {
                return (this.length > other.length) ? 1 : -1;
              }

              for (var i = 0, length = this.length, tmp; i < length; i++) {
                if ((tmp = (this[i])['$<=>'](other[i])) !== 0) {
                  return tmp;
                }
              }

              return 0;
            
            };

            def['$=='] = function(other) {
              
              
              if (!other || (this.length !== other.length)) {
                return false;
              }

              for (var i = 0, length = this.length; i < length; i++) {
                if (!(this[i])['$=='](other[i])) {
                  return false;
                }
              }

              return true;
            
            };

            def['$[]'] = function(index, length) {
              
              
              var size = this.length;

              if (typeof index !== 'number') {
                if (index._isRange) {
                  var exclude = index.exclude;
                  length      = index.end;
                  index       = index.begin;

                  if (index > size) {
                    return nil;
                  }

                  if (length < 0) {
                    length += size;
                  }

                  if (!exclude) length += 1;
                  return this.slice(index, length);
                }
                else {
                  this.$raise("bad arg for Array#[]");
                }
              }

              if (index < 0) {
                index += size;
              }

              if (length !== undefined) {
                if (length < 0 || index > size || index < 0) {
                  return nil;
                }

                return this.slice(index, index + length);
              }
              else {
                if (index >= size || index < 0) {
                  return nil;
                }

                return this[index];
              }
            
            };

            def['$[]='] = function(index, value) {
              
              
              var size = this.length;

              if (index < 0) {
                index += size;
              }

              return this[index] = value;
            
            };

            def.$assoc = function(object) {
              
              
              for (var i = 0, length = this.length, item; i < length; i++) {
                if (item = this[i], item.length && (item[0])['$=='](object)) {
                  return item;
                }
              }

              return nil;
            
            };

            def.$at = function(index) {
              
              
              if (index < 0) {
                index += this.length;
              }

              if (index < 0 || index >= this.length) {
                return nil;
              }

              return this[index];
            
            };

            def.$clear = function() {
              
              this.splice(0, this.length);
              return this;
            };

            def.$clone = function() {
              
              return this.slice();
            };

            def.$collect = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              for (var i = 0, length = this.length, value; i < length; i++) {
                if ((value = block(this[i])) === __breaker) {
                  return __breaker.$v;
                }

                result.push(value);
              }

              return result;
            
            };

            def['$collect!'] = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              for (var i = 0, length = this.length, val; i < length; i++) {
                if ((val = block(this[i])) === __breaker) {
                  return __breaker.$v;
                }

                this[i] = val;
              }
            
              return this;
            };

            def.$compact = function() {
              
              
              var result = [];

              for (var i = 0, length = this.length, item; i < length; i++) {
                if ((item = this[i]) !== nil) {
                  result.push(item);
                }
              }

              return result;
            
            };

            def['$compact!'] = function() {
              
              
              var original = this.length;

              for (var i = 0, length = this.length; i < length; i++) {
                if (this[i] === nil) {
                  this.splice(i, 1);

                  length--;
                  i--;
                }
              }

              return this.length === original ? nil : this;
            
            };

            def.$concat = function(other) {
              
              
              for (var i = 0, length = other.length; i < length; i++) {
                this.push(other[i]);
              }
            
              return this;
            };

            def.$count = function(object) {
              
              
              if (object == null) {
                return this.length;
              }

              var result = 0;

              for (var i = 0, length = this.length; i < length; i++) {
                if ((this[i])['$=='](object)) {
                  result++;
                }
              }

              return result;
            
            };

            def.$delete = function(object) {
              
              
              var original = this.length;

              for (var i = 0, length = original; i < length; i++) {
                if ((this[i])['$=='](object)) {
                  this.splice(i, 1);

                  length--;
                  i--;
                }
              }

              return this.length === original ? nil : object;
            
            };

            def.$delete_at = function(index) {
              
              
              if (index < 0) {
                index += this.length;
              }

              if (index < 0 || index >= this.length) {
                return nil;
              }

              var result = this[index];

              this.splice(index, 1);

              return result;
            
            };

            def.$delete_if = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              for (var i = 0, length = this.length, value; i < length; i++) {
                if ((value = block(this[i])) === __breaker) {
                  return __breaker.$v;
                }

                if (value !== false && value !== nil) {
                  this.splice(i, 1);

                  length--;
                  i--;
                }
              }
            
              return this;
            };

            def.$drop = function(number) {
              
              return this.slice(number);
            };

            def.$dup = def.$clone;

            def.$each = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              for (var i = 0, length = this.length; i < length; i++) {
              if (block(this[i]) === __breaker) return __breaker.$v;
              };
              return this;
            };

            def.$each_index = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              for (var i = 0, length = this.length; i < length; i++) {
              if (block(i) === __breaker) return __breaker.$v;
              };
              return this;
            };

            def['$empty?'] = function() {
              
              return !this.length;
            };

            def.$fetch = function(index, defaults, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var original = index;

              if (index < 0) {
                index += this.length;
              }

              if (index >= 0 && index < this.length) {
                return this[index];
              }

              if (defaults != null) {
                return defaults;
              }

              if (block !== nil) {
                return block(original);
              }

              this.$raise("Array#fetch");
            
            };

            def.$first = function(count) {
              
              
              if (count != null) {
                return this.slice(0, count);
              }

              return this.length === 0 ? nil : this[0];
            
            };

            def.$flatten = function(level) {
              
              
              var result = [];

              for (var i = 0, length = this.length, item; i < length; i++) {
                item = this[i];

                if (item._isArray) {
                  if (level == null) {
                    result = result.concat((item).$flatten());
                  }
                  else if (level === 0) {
                    result.push(item);
                  }
                  else {
                    result = result.concat((item).$flatten(level - 1));
                  }
                }
                else {
                  result.push(item);
                }
              }

              return result;
            
            };

            def['$flatten!'] = function(level) {
              
              
              var size = this.length;
              this.$replace(this.$flatten(level));

              return size === this.length ? nil : this;
            
            };

            def.$hash = function() {
              
              return this._id || (this._id = unique_id++);
            };

            def['$include?'] = function(member) {
              
              
              for (var i = 0, length = this.length; i < length; i++) {
                if ((this[i])['$=='](member)) {
                  return true;
                }
              }

              return false;
            
            };

            def.$index = function(object, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (object === block && typeof(object) === 'function') { object = undefined; }
              
              if (object != null) {
                for (var i = 0, length = this.length; i < length; i++) {
                  if ((this[i])['$=='](object)) {
                    return i;
                  }
                }
              }
              else if (block !== nil) {
                for (var i = 0, length = this.length, value; i < length; i++) {
                  if ((value = block(this[i])) === __breaker) {
                    return __breaker.$v;
                  }

                  if (value !== false && value !== nil) {
                    return i;
                  }
                }
              }

              return nil;
            
            };

            def.$insert = function(index, objects) {
              objects = __slice.call(arguments, 1);
              
              if (objects.length > 0) {
                if (index < 0) {
                  index += this.length + 1;

                  if (index < 0) {
                    this.$raise("" + (index) + " is out of bounds");
                  }
                }
                if (index > this.length) {
                  for (var i = this.length; i < index; i++) {
                    this.push(nil);
                  }
                }

                this.splice.apply(this, [index, 0].concat(objects));
              }
            
              return this;
            };

            def.$inspect = function() {
              
              
              var i, inspect, el, el_insp, length, object_id;

              inspect = [];
              object_id = this.$object_id();
              length = this.length;

              for (i = 0; i < length; i++) {
                el = this['$[]'](i);

                // Check object_id to ensure it's not the same array get into an infinite loop
                el_insp = (el).$object_id() === object_id ? '[...]' : (el).$inspect();

                inspect.push(el_insp);
              }
              return '[' + inspect.join(', ') + ']';
            
            };

            def.$join = function(sep) {
              if (sep == null) {
                sep = ""
              }
              
              var result = [];

              for (var i = 0, length = this.length; i < length; i++) {
                result.push((this[i]).$to_s());
              }

              return result.join(sep);
            
            };

            def.$keep_if = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              for (var i = 0, length = this.length, value; i < length; i++) {
                if ((value = block(this[i])) === __breaker) {
                  return __breaker.$v;
                }

                if (value === false || value === nil) {
                  this.splice(i, 1);

                  length--;
                  i--;
                }
              }
            
              return this;
            };

            def.$last = function(count) {
              
              
              var length = this.length;

              if (count == null) {
                return length === 0 ? nil : this[length - 1];
              }
              else if (count < 0) {
                this.$raise("negative count given");
              }

              if (count > length) {
                count = length;
              }

              return this.slice(length - count, length);
            
            };

            def.$length = function() {
              
              return this.length;
            };

            def.$map = def.$collect;

            def['$map!'] = def['$collect!'];

            def.$pop = function(count) {
              
              
              var length = this.length;

              if (count == null) {
                return length === 0 ? nil : this.pop();
              }

              if (count < 0) {
                this.$raise("negative count given");
              }

              return count > length ? this.splice(0, this.length) : this.splice(length - count, length);
            
            };

            def.$push = function(objects) {
              objects = __slice.call(arguments, 0);
              
              for (var i = 0, length = objects.length; i < length; i++) {
                this.push(objects[i]);
              }
            
              return this;
            };

            def.$rassoc = function(object) {
              
              
              for (var i = 0, length = this.length, item; i < length; i++) {
                item = this[i];

                if (item.length && item[1] !== undefined) {
                  if ((item[1])['$=='](object)) {
                    return item;
                  }
                }
              }

              return nil;
            
            };

            def.$reject = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              for (var i = 0, length = this.length, value; i < length; i++) {
                if ((value = block(this[i])) === __breaker) {
                  return __breaker.$v;
                }

                if (value === false || value === nil) {
                  result.push(this[i]);
                }
              }
              return result;
            
            };

            def['$reject!'] = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var original = this.length;
              this.$delete_if(block.$to_proc());
              return this.length === original ? nil : this;
            
            };

            def.$replace = function(other) {
              
              
              this.splice(0, this.length);
              this.push.apply(this, other);
              return this;
            
            };

            def.$reverse = def.reverse;

            def['$reverse!'] = function() {
              
              
              this.splice(0);
              this.push.apply(this, this.$reverse());
              return this;
            
            };

            def.$reverse_each = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              this.$reverse().$each(block.$to_proc());
              return this;
            };

            def.$rindex = function(object, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (object === block && typeof(object) === 'function') { object = undefined; }
              
              if (block !== nil) {
                for (var i = this.length - 1, value; i >= 0; i--) {
                  if ((value = block(this[i])) === __breaker) {
                    return __breaker.$v;
                  }

                  if (value !== false && value !== nil) {
                    return i;
                  }
                }
              }
              else {
                for (var i = this.length - 1; i >= 0; i--) {
                  if ((this[i])['$=='](object)) {
                    return i;
                  }
                }
              }

              return nil;
            
            };

            def.$select = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              for (var i = 0, length = this.length, item, value; i < length; i++) {
                item = this[i];

                if ((value = block(item)) === __breaker) {
                  return __breaker.$v;
                }

                if (value !== false && value !== nil) {
                  result.push(item);
                }
              }

              return result;
            
            };

            def['$select!'] = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var original = this.length;
              this.$keep_if(block.$to_proc());
              return this.length === original ? nil : this;
            
            };

            def.$shift = function(count) {
              
              
              if (this.length === 0) {
                return nil;
              }

              return count == null ? this.shift() : this.splice(0, count)
            
            };

            def.$size = def.$length;

            def.$slice = def['$[]'];

            def['$slice!'] = function(index, length) {
              
              
              if (index < 0) {
                index += this.length;
              }

              if (length != null) {
                return this.splice(index, length);
              }

              if (index < 0 || index >= this.length) {
                return nil;
              }

              return this.splice(index, 1)[0];
            
            };

            def.$take = function(count) {
              
              return this.slice(0, count);
            };

            def.$take_while = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var result = [];

              for (var i = 0, length = this.length, item, value; i < length; i++) {
                item = this[i];

                if ((value = block(item)) === __breaker) {
                  return __breaker.$v;
                }

                if (value === false || value === nil) {
                  return result;
                }

                result.push(item);
              }

              return result;
            
            };

            def.$to_a = function() {
              
              return this;
            };

            def.$to_ary = def.$to_a;

            def.$to_json = function() {
              
              
              var result = [];

              for (var i = 0, length = this.length; i < length; i++) {
                result.push((this[i]).$to_json());
              }

              return '[' + result.join(', ') + ']';
            
            };

            def.$to_s = def.$inspect;

            def.$uniq = function() {
              
              
              var result = [],
                  seen   = {};

              for (var i = 0, length = this.length, item, hash; i < length; i++) {
                item = this[i];
                hash = item;

                if (!seen[hash]) {
                  seen[hash] = true;

                  result.push(item);
                }
              }

              return result;
            
            };

            def['$uniq!'] = function() {
              
              
              var original = this.length,
                  seen     = {};

              for (var i = 0, length = original, item, hash; i < length; i++) {
                item = this[i];
                hash = item;

                if (!seen[hash]) {
                  seen[hash] = true;
                }
                else {
                  this.splice(i, 1);

                  length--;
                  i--;
                }
              }

              return this.length === original ? nil : this;
            
            };

            def.$unshift = function(objects) {
              objects = __slice.call(arguments, 0);
              
              for (var i = objects.length - 1; i >= 0; i--) {
                this.unshift(objects[i]);
              }

              return this;
            
            };

            def.$zip = function(others, block) {
              var block;others = __slice.call(arguments, 0);
              if (typeof(others[others.length - 1]) === 'function') { block = others.pop(); } else { block = nil; }
              
              
              var result = [], size = this.length, part, o;

              for (var i = 0; i < size; i++) {
                part = [this[i]];

                for (var j = 0, jj = others.length; j < jj; j++) {
                  o = others[j][i];

                  if (o == null) {
                    o = nil;
                  }

                  part[j + 1] = o;
                }

                result[i] = part;
              }

              if (block !== nil) {
                for (var i = 0; i < size; i++) {
                  block(result[i]);
                }

                return nil;
              }

              return result;
            
            };

            def.$sort = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var copy = this.slice();

              if (block !== nil) {
                return copy.sort(block);
              }

              return copy.sort();
            
            };

            def['$sort!'] = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              if (block !== nil) {
                return this.sort(block);
              }

              return this.sort();
            
            };

            return nil;
          })(self, Array)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function Hash() {};
            Hash = __klass(__base, __super, "Hash", Hash);

            ;Hash._sdonate(["$[]", "$allocate", "$from_native", "$new"]);    var def = Hash.prototype, __scope = Hash._scope;
            def.proc = def.none = nil;

            Hash.$include(__scope.Enumerable);

            
            __hash = Opal.hash = function() {
              var hash   = new Hash,
                  args   = __slice.call(arguments),
                  keys   = [],
                  assocs = {};

              hash.map   = assocs;
              hash.keys  = keys;

              for (var i = 0, length = args.length, key; i < length; i++) {
                var key = args[i], obj = args[++i];

                if (assocs[key] == null) {
                  keys.push(key);
                }

                assocs[key] = obj;
              }

              return hash;
            };

            // hash2 is a faster creator for hashes that just use symbols and
            // strings as keys. The map and keys array can be constructed at
            // compile time, so they are just added here by the constructor
            // function
            __hash2 = Opal.hash2 = function(map) {
              var hash = new Hash;
              hash.map = map;
              return hash;
            }
          

            Hash['$[]'] = function(objs) {
              objs = __slice.call(arguments, 0);
              return __hash.apply(null, objs);
            };

            Hash.$allocate = function() {
              
              return __hash();
            };

            Hash.$from_native = function(obj) {
              
              
              var hash = __hash(), map = hash.map;

              for (var key in obj) {
                map[key] = obj[key];
              }

              return hash;
            
            };

            Hash.$new = function(defaults, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (defaults === block && typeof(defaults) === 'function') { defaults = undefined; }
              
              var hash = __hash();

              if (defaults != null) {
                hash.none = defaults;
              }
              else if (block !== nil) {
                hash.proc = block;
              }

              return hash;
            
            };

            def['$=='] = function(other) {
              var _a;
              
              if (this === other) {
                return true;
              }

              if (other.map == null) {
                return false;
              }

              var map  = this.map,
                  map2 = other.map;

              for (var key in map) {
                var obj = map[key], obj2 = map2[key];

                if ((_a = (obj)['$=='](obj2), (_a === nil || _a === false))) {
                  return false;
                }
              }

              return true;
            
            };

            def['$[]'] = function(key) {
              
              
              var obj = this.map[key];

              if (obj != null) {
                return obj;
              }

              var proc = this.proc;

              if (proc !== nil) {
                return (proc).$call(this, key);
              }

              return this.none;
            
            };

            def['$[]='] = function(key, value) {
              
              
              this.map[key] = value;
              return value;
            
            };

            def.$assoc = function(object) {
              
              
              var map = this.map;

              for (var key in map) {
                if ((key)['$=='](object)) {
                  return [key, map[key]];
                }
              }

              return nil;
            
            };

            def.$clear = function() {
              
              
              this.map = {};
              return this;
            
            };

            def.$clone = function() {
              
              
              var result = __hash(),
                  map    = this.map,
                  map2   = result.map;

              for (var key in map) {
                map2[key] = map[key];
              }

              return result;
            
            };

            def.$default = function() {
              
              return this.none;
            };

            def['$default='] = function(object) {
              
              return this.none = object;
            };

            def.$default_proc = function() {
              
              return this.proc;
            };

            def['$default_proc='] = function(proc) {
              
              return this.proc = proc;
            };

            def.$delete = function(key) {
              
              
              var map = this.map, result = map[key];

              if (result != null) {
                delete map[key];
                return result;
              }

              return nil;
            
            };

            def.$delete_if = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map, value;

              for (var key in map) {
                if ((value = block(key, map[key])) === __breaker) {
                  return __breaker.$v;
                }

                if (value !== false && value !== nil) {
                  delete map[key]
                }
              }

              return this;
            
            };

            def.$dup = def.$clone;

            def.$each = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map;

              for (var key in map) {
                if (block(key, map[key]) === __breaker) {
                  return __breaker.$v;
                }
              }

              return this;
            
            };

            def.$each_key = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map;

              for (var key in map) {
                if (block(key) === __breaker) {
                  return __breaker.$v;
                }
              }

              return this;
            
            };

            def.$each_pair = def.$each;

            def.$each_value = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map;

              for (var key in map) {
                if (block(map[key]) === __breaker) {
                  return __breaker.$v;
                }
              }

              return this;
            
            };

            def['$empty?'] = function() {
              
              
              for (var key in this.map) {
                return false;
              }

              return true;
            
            };

            def['$eql?'] = def['$=='];

            def.$fetch = function(key, defaults, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (defaults === block && typeof(defaults) === 'function') { defaults = undefined; }
              
              var value = this.map[key];

              if (value != null) {
                return value;
              }

              if (block !== nil) {
                var value;

                if ((value = block(key)) === __breaker) {
                  return __breaker.$v;
                }

                return value;
              }

              if (defaults != null) {
                return defaults;
              }

              this.$raise("key not found");
            
            };

            def.$flatten = function(level) {
              
              
              var map = this.map, result = [];

              for (var key in map) {
                var value = map[key];

                result.push(key);

                if (value._isArray) {
                  if (level == null || level === 1) {
                    result.push(value);
                  }
                  else {
                    result = result.concat((value).$flatten(level - 1));
                  }
                }
                else {
                  result.push(value);
                }
              }

              return result;
            
            };

            def['$has_key?'] = function(key) {
              
              return this.map[key] != null;
            };

            def['$has_value?'] = function(value) {
              
              
              var map = this.map;

              for (var key in map) {
                if ((map[key])['$=='](value)) {
                  return true;
                }
              }

              return false;
            
            };

            def.$hash = function() {
              
              return this._id;
            };

            def['$include?'] = def['$has_key?'];

            def.$index = function(object) {
              
              
              var map = this.map;

              for (var key in map) {
                if (object['$=='](map[key])) {
                  return key;
                }
              }

              return nil;
            
            };

            def.$indexes = function(keys) {
              keys = __slice.call(arguments, 0);
              
              var result = [], map = this.map, val;

              for (var i = 0, length = keys.length; i < length; i++) {
                val = map[keys[i]];

                if (val != null) {
                  result.push(val);
                }
                else {
                  result.push(this.none);
                }
              }

              return result;
            
            };

            def.$indices = def.$indexes;

            def.$inspect = function() {
              
              
              var inspect = [], map = this.map;

              for (var key in map) {
                inspect.push((key).$inspect() + '=>' + (map[key]).$inspect());
              }

              return '{' + inspect.join(', ') + '}';
            
            };

            def.$invert = function() {
              
              
              var result = __hash(), map = this.map, map2 = result.map;

              for (var key in map) {
                var obj = map[key];
                map2[obj] = key;
              }

              return result;
            
            };

            def.$keep_if = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map, value;

              for (var key in map) {
                var obj = map[key];

                if ((value = block(key, obj)) === __breaker) {
                  return __breaker.$v;
                }

                if (value === false || value === nil) {
                  delete map[key];
                }
              }

              return this;
            
            };

            def.$key = def.$index;

            def['$key?'] = def['$has_key?'];

            def.$keys = function() {
              
              
              var result = [], map = this.map;

              for (var key in map) {
                result.push(key);
              }

              return result;
            
            };

            def.$length = function() {
              
              
              var length = 0, map = this.map;

              for (var key in map) {
                length++;
              }

              return length;
            
            };

            def['$member?'] = def['$has_key?'];

            def.$merge = function(other, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map, result = __hash(), map2 = result.map;

              for (var key in map) {
                map2[key] = map[key];
              }

              map = other.map;

              if (block === nil) {
                for (key in map) {
                  map2[key] = map[key];
                }
              }
              else {
                for (key in map) {
                  if (map2[key] == null) {
                    map2[key] = map[key];
                  }
                  else {
                    map2[key] = block(key, map2[key], map[key]);
                  }
                }
              }

              return result;
            
            };

            def['$merge!'] = function(other, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map, map2 = other.map;

              if (block === nil) {
                for (var key in map2) {
                  map[key] = map2[key];
                }
              }
              else {
                for (key in map2) {
                  if (map[key] == null) {
                    map[key] = map2[key];
                  }
                  else {
                    map[key] = block(key, map[key], map2[key]);
                  }
                }
              }

              return this;
            
            };

            def.$rassoc = function(object) {
              
              
              var map = this.map;

              for (var key in map) {
                var obj = map[key];

                if ((obj)['$=='](object)) {
                  return [key, obj];
                }
              }

              return nil;
            
            };

            def.$reject = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map, result = __hash(), map2 = result.map;

              for (var key in map) {
                var obj = map[key], value;

                if ((value = block(key, obj)) === __breaker) {
                  return __breaker.$v;
                }

                if (value === false || value === nil) {
                  map2[key] = obj;
                }
              }

              return result;
            
            };

            def.$replace = function(other) {
              
              
              var map = this.map = {}, map2 = other.map;

              for (var key in map2) {
                map[key] = map2[key];
              }

              return this;
            
            };

            def.$select = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map, result = __hash(), map2 = result.map;

              for (var key in map) {
                var obj = map[key], value;

                if ((value = block(key, obj)) === __breaker) {
                  return __breaker.$v;
                }

                if (value !== false && value !== nil) {
                  map2[key] = obj;
                }
              }

              return result;
            
            };

            def['$select!'] = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              var map = this.map, value, result = nil;

              for (var key in map) {
                var obj = map[key];

                if ((value = block(key, obj)) === __breaker) {
                  return __breaker.$v;
                }

                if (value === false || value === nil) {
                  delete map[key];

                  result = this
                }
              }

              return result;
            
            };

            def.$shift = function() {
              
              
              var map = this.map;

              for (var key in map) {
                var obj = map[key];
                delete map[key];
                return [key, obj];
              }

              return nil;
            
            };

            def.$size = def.$length;

            def.$to_a = function() {
              
              
              var map = this.map, result = [];

              for (var key in map) {
                result.push([key, map[key]]);
              }

              return result;
            
            };

            def.$to_hash = function() {
              
              return this;
            };

            def.$to_json = function() {
              
              
              var inspect = [], map = this.map;

              for (var key in map) {
                inspect.push((key).$to_json() + ': ' + (map[key]).$to_json());
              }

              return '{' + inspect.join(', ') + '}';
            
            };

            def.$to_native = function() {
              
              
              var result = {}, map = this.map;

              for (var key in map) {
                var obj = map[key];

                if (obj.$to_native) {
                  result[key] = (obj).$to_native();
                }
                else {
                  result[key] = obj;
                }
              }

              return result;
            
            };

            def.$to_s = def.$inspect;

            def.$update = def['$merge!'];

            def['$value?'] = function(value) {
              
              
              var map = this.map;

              for (var assoc in map) {
                var v = map[assoc];
                if ((v)['$=='](value)) {
                  return true;
                }
              }

              return false;
            
            };

            def.$values_at = def.$indexes;

            def.$values = function() {
              
              
              var map    = this.map,
                  result = [];

              for (var key in map) {
                result.push(map[key]);
              }

              return result;
            
            };

            return nil;
          })(self, null)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass, __gvars = __opal.gvars;
          (function(__base, __super){
            function String() {};
            String = __klass(__base, __super, "String", String);

            ;String._sdonate(["$try_convert", "$new"]);    var def = String.prototype, __scope = String._scope;

            String.prototype._isString = true;

            String.$include(__scope.Comparable);

            String.$try_convert = function(what) {
              
              try {
                return what.$to_str()
              } catch ($err) {
              if (true) {
                nil}
              else { throw $err; }
              }
            };

            String.$new = function(str) {
              if (str == null) {
                str = ""
              }
              
              return new String(str)
            ;
            };

            def['$%'] = function(data) {
              var _a;
              if ((_a = data['$is_a?'](__scope.Array)) !== false && _a !== nil) {
                return this.$format.apply(this, [this].concat(data))
                } else {
                return this.$format(this, data)
              };
            };

            def['$*'] = function(count) {
              
              
              if (count < 1) {
                return '';
              }

              var result  = '',
                  pattern = this.valueOf();

              while (count > 0) {
                if (count & 1) {
                  result += pattern;
                }

                count >>= 1, pattern += pattern;
              }

              return result;
            
            };

            def['$+'] = function(other) {
              
              return this.toString() + other;
            };

            def['$<=>'] = function(other) {
              
              
              if (typeof other !== 'string') {
                return nil;
              }

              return this > other ? 1 : (this < other ? -1 : 0);
            
            };

            def['$<'] = function(other) {
              
              return this < other;
            };

            def['$<='] = function(other) {
              
              return this <= other;
            };

            def['$>'] = function(other) {
              
              return this > other;
            };

            def['$>='] = function(other) {
              
              return this >= other;
            };

            def['$=='] = function(other) {
              
              return other == String(this);
            };

            def['$==='] = def['$=='];

            def['$=~'] = function(other) {
              
              
              if (typeof other === 'string') {
                this.$raise("string given");
              }

              return other['$=~'](this);
            
            };

            def['$[]'] = function(index, length) {
              
              
              var size = this.length;

              if (index._isRange) {
                var exclude = index.exclude,
                    length  = index.end,
                    index   = index.begin;

                if (index > size) {
                  return nil;
                }

                if (length < 0) {
                  length += size;
                }

                if (exclude) length -= 1;
                return this.substr(index, length);
              }

              if (index < 0) {
                index += this.length;
              }

              if (length == null) {
                if (index >= this.length || index < 0) {
                  return nil;
                }

                return this.substr(index, 1);
              }

              if (index > this.length || index < 0) {
                return nil;
              }

              return this.substr(index, length);
            
            };

            def.$capitalize = function() {
              
              return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase();
            };

            def.$casecmp = function(other) {
              
              
              if (typeof other !== 'string') {
                return other;
              }

              var a = this.toLowerCase(),
                  b = other.toLowerCase();

              return a > b ? 1 : (a < b ? -1 : 0);
            
            };

            def.$chars = function(__yield) {
              if (typeof(__yield) !== 'function') { __yield = nil }
              
              for (var i = 0, length = this.length; i < length; i++) {
                if (__yield(this.charAt(i)) === __breaker) return __breaker.$v
              }
            
            };

            def.$chomp = function(separator) {
              if (separator == null) {
                separator = __gvars["/"]
              }
              
              if (separator === "\n") {
                return this.replace(/(\n|\r|\r\n)$/, '');
              }
              else if (separator === "") {
                return this.replace(/(\n|\r\n)+$/, '');
              }
              return this.replace(new RegExp(separator + '$'), '');
            
            };

            def.$chop = function() {
              
              return this.substr(0, this.length - 1);
            };

            def.$chr = function() {
              
              return this.charAt(0);
            };

            def.$count = function(str) {
              
              return (this.length - this.replace(new RegExp(str,"g"), '').length) / str.length;
            };

            def.$demodulize = function() {
              
              
              var idx = this.lastIndexOf('::');

              if (idx > -1) {
                return this.substr(idx + 2);
              }
              
              return this;
            
            };

            def.$downcase = def.toLowerCase;

            def.$each_char = def.$chars;

            def.$each_line = function(separator, __yield) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { __yield = arguments[BLOCK_IDX] } else { __yield = nil }if (separator == null || separator === __yield) {
                separator = __gvars["/"]
              }
              
              var splitted = this.split(separator);

              for (var i = 0, length = splitted.length; i < length; i++) {
                if (__yield(splitted[i] + separator) === __breaker) return __breaker.$v
              }
            
            };

            def['$empty?'] = function() {
              
              return this.length === 0;
            };

            def['$end_with?'] = function(suffixes) {
              suffixes = __slice.call(arguments, 0);
              
              for (var i = 0, length = suffixes.length; i < length; i++) {
                var suffix = suffixes[i];

                if (this.lastIndexOf(suffix) === this.length - suffix.length) {
                  return true;
                }
              }

              return false;
            
            };

            def['$eql?'] = def['$=='];

            def['$equal?'] = function(val) {
              
              return this.toString() === val.toString();
            };

            def.$getbyte = def.charCodeAt;

            def.$gsub = function(pattern, replace) {
              var _a;
              if ((_a = pattern['$is_a?'](__scope.String)) !== false && _a !== nil) {
                pattern = (new RegExp("" + __scope.Regexp.$escape(pattern)))
              };
              
              var pattern = pattern.toString(),
                  options = pattern.substr(pattern.lastIndexOf('/') + 1) + 'g',
                  regexp  = pattern.substr(1, pattern.lastIndexOf('/') - 1);

              return this.$sub(new RegExp(regexp, options), replace);
            
            };

            def.$hash = def.toString;

            def.$hex = function() {
              
              return this.$to_i(16);
            };

            def['$include?'] = function(other) {
              
              return this.indexOf(other) !== -1;
            };

            def.$index = function(what, offset) {
              var _a;
              
              if (!what._isString && !what._isRegexp) {
                throw new Error('type mismatch');
              }

              var result = -1;

              if (offset != null) {
                if (offset < 0) {
                  offset = this.length - offset;
                }

                if (what['$is_a?'](__scope.Regexp)) {
                  result = ((_a = what['$=~'](this.substr(offset))), _a !== false && _a !== nil ? _a : -1)
                }
                else {
                  result = this.substr(offset).indexOf(substr);
                }

                if (result !== -1) {
                  result += offset;
                }
              }
              else {
                if (what['$is_a?'](__scope.Regexp)) {
                  result = ((_a = what['$=~'](this)), _a !== false && _a !== nil ? _a : -1)
                }
                else {
                  result = this.indexOf(substr);
                }
              }

              return result === -1 ? nil : result;
            
            };

            def.$inspect = function() {
              
              
              var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                  meta      = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"' : '\\"',
                    '\\': '\\\\'
                  };

              escapable.lastIndex = 0;

              return escapable.test(this) ? '"' + this.replace(escapable, function(a) {
                var c = meta[a];

                return typeof c === 'string' ? c :
                  '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
              }) + '"' : '"' + this + '"';
          
            };

            def.$intern = function() {
              
              return this;
            };

            def.$lines = def.$each_line;

            def.$length = function() {
              
              return this.length;
            };

            def.$ljust = function(integer, padstr) {
              if (padstr == null) {
                padstr = " "
              }
              return this.$raise(__scope.NotImplementedError);
            };

            def.$lstrip = function() {
              
              return this.replace(/^\s*/, '');
            };

            def.$match = function(pattern, pos, block) {
              var _a;if (typeof(block) !== 'function') { block = nil }
              return (function() { if ((_a = pattern['$is_a?'](__scope.Regexp)) !== false && _a !== nil) {
                return pattern
                } else {
                return (new RegExp("" + __scope.Regexp.$escape(pattern)))
              }; return nil; }).call(this).$match(this, pos, block.$to_proc());
            };

            def.$next = function() {
              
              
              if (this.length === 0) {
                return "";
              }

              var initial = this.substr(0, this.length - 1);
              var last    = String.fromCharCode(this.charCodeAt(this.length - 1) + 1);

              return initial + last;
            
            };

            def.$ord = function() {
              
              return this.charCodeAt(0);
            };

            def.$partition = function(str) {
              
              
              var result = this.split(str);
              var splitter = (result[0].length === this.length ? "" : str);

              return [result[0], splitter, result.slice(1).join(str.toString())];
            
            };

            def.$reverse = function() {
              
              return this.split('').reverse().join('');
            };

            def.$rstrip = function() {
              
              return this.replace(/\s*$/, '');
            };

            def.$size = def.$length;

            def.$slice = def['$[]'];

            def.$split = function(pattern, limit) {
              var _a;if (pattern == null) {
                pattern = ((_a = __gvars[";"]), _a !== false && _a !== nil ? _a : " ")
              }
              return this.split(pattern, limit);
            };

            def['$start_with?'] = function(prefixes) {
              prefixes = __slice.call(arguments, 0);
              
              for (var i = 0, length = prefixes.length; i < length; i++) {
                if (this.indexOf(prefixes[i]) === 0) {
                  return true;
                }
              }

              return false;
            
            };

            def.$strip = function() {
              
              return this.replace(/^\s*/, '').replace(/\s*$/, '');
            };

            def.$sub = function(pattern, replace, block) {
              var BLOCK_IDX = arguments.length - 1;
              if (typeof(arguments[BLOCK_IDX]) === 'function' && arguments[BLOCK_IDX]._s !== undefined) { block = arguments[BLOCK_IDX] } else { block = nil }if (replace === block && typeof(replace) === 'function') { replace = undefined; }
              
              if (typeof(replace) === 'string') {
                return this.replace(pattern, replace);
              }
              if (block !== nil) {
                return this.replace(pattern, function(str, a) {
                  __gvars["1"] = a;
                  return block(str);
                });
              }
              else if (replace !== undefined) {
                if (replace['$is_a?'](__scope.Hash)) {
                  return this.replace(pattern, function(str) {
                    var value = replace['$[]'](this.$str());

                    return (value == null) ? nil : this.$value().$to_s();
                  });
                }
                else {
                  replace = __scope.String.$try_convert(replace);

                  if (replace == null) {
                    this.$raise(__scope.TypeError, "can't convert " + (replace.$class()) + " into String");
                  }

                  return this.replace(pattern, replace);
                }
              }
              else {
                return this.replace(pattern, replace.toString());
              }
            
            };

            def.$succ = def.$next;

            def.$sum = function(n) {
              if (n == null) {
                n = 16
              }
              
              var result = 0;

              for (var i = 0, length = this.length; i < length; i++) {
                result += (this.charCodeAt(i) % ((1 << n) - 1));
              }

              return result;
            
            };

            def.$swapcase = function() {
              
              
              var str = this.replace(/([a-z]+)|([A-Z]+)/g, function($0,$1,$2) {
                return $1 ? $0.toUpperCase() : $0.toLowerCase();
              });

              if (this._klass === String) {
                return str;
              }

              return this.$class().$new(str);
            
            };

            def.$to_a = function() {
              
              
              if (this.length === 0) {
                return [];
              }

              return [this];
            
            };

            def.$to_f = function() {
              
              
              var result = parseFloat(this);

              return isNaN(result) ? 0 : result;
            
            };

            def.$to_i = function(base) {
              if (base == null) {
                base = 10
              }
              
              var result = parseInt(this, base);

              if (isNaN(result)) {
                return 0;
              }

              return result;
            
            };

            def.$to_json = def.$inspect;

            def.$to_proc = function() {
              
              
              var name = '$' + this;

              return function(arg) { return arg[name](arg); };
            
            };

            def.$to_s = def.toString;

            def.$to_str = def.$to_s;

            def.$to_sym = def.$intern;

            def.$underscore = function() {
              
              return this.replace(/[-\s]+/g, '_')
                    .replace(/([A-Z\d]+)([A-Z][a-z])/g, '$1_$2')
                    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
                    .toLowerCase();
            };

            return def.$upcase = def.toUpperCase;
          })(self, String);
          return __scope.Symbol = __scope.String;
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          (function(__base, __super){
            function Numeric() {};
            Numeric = __klass(__base, __super, "Numeric", Numeric);

            var def = Numeric.prototype, __scope = Numeric._scope;

            
            Numeric.prototype._isNumber = true;
          

            Numeric.$include(__scope.Comparable);

            def['$+'] = function(other) {
              
              return this + other;
            };

            def['$-'] = function(other) {
              
              return this - other;
            };

            def['$*'] = function(other) {
              
              return this * other;
            };

            def['$/'] = function(other) {
              
              return this / other;
            };

            def['$%'] = function(other) {
              
              return this % other;
            };

            def['$&'] = function(other) {
              
              return this & other;
            };

            def['$|'] = function(other) {
              
              return this | other;
            };

            def['$^'] = function(other) {
              
              return this ^ other;
            };

            def['$<'] = function(other) {
              
              return this < other;
            };

            def['$<='] = function(other) {
              
              return this <= other;
            };

            def['$>'] = function(other) {
              
              return this > other;
            };

            def['$>='] = function(other) {
              
              return this >= other;
            };

            def['$<<'] = function(count) {
              
              return this << count;
            };

            def['$>>'] = function(count) {
              
              return this >> count;
            };

            def['$+@'] = function() {
              
              return +this;
            };

            def['$-@'] = function() {
              
              return -this;
            };

            def['$~'] = function() {
              
              return ~this;
            };

            def['$**'] = function(other) {
              
              return Math.pow(this, other);
            };

            def['$=='] = function(other) {
              
              return this == other;
            };

            def['$<=>'] = function(other) {
              
              
              if (typeof(other) !== 'number') {
                return nil;
              }

              return this < other ? -1 : (this > other ? 1 : 0);
            
            };

            def.$abs = function() {
              
              return Math.abs(this);
            };

            def.$ceil = function() {
              
              return Math.ceil(this);
            };

            def.$chr = function() {
              
              return String.fromCharCode(this);
            };

            def.$downto = function(finish, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              for (var i = this; i >= finish; i--) {
                if (block(i) === __breaker) {
                  return __breaker.$v;
                }
              }

              return this;
            
            };

            def['$eql?'] = def['$=='];

            def['$even?'] = function() {
              
              return this % 2 === 0;
            };

            def.$floor = function() {
              
              return Math.floor(this);
            };

            def.$hash = function() {
              
              return this.toString();
            };

            def['$integer?'] = function() {
              
              return this % 1 === 0;
            };

            def.$magnitude = def.$abs;

            def.$modulo = def['$%'];

            def.$next = function() {
              
              return this + 1;
            };

            def['$nonzero?'] = function() {
              
              return this === 0 ? nil : this;
            };

            def['$odd?'] = function() {
              
              return this % 2 !== 0;
            };

            def.$ord = function() {
              
              return this;
            };

            def.$pred = function() {
              
              return this - 1;
            };

            def.$succ = def.$next;

            def.$times = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              
              for (var i = 0; i < this; i++) {
                if (block(i) === __breaker) {
                  return __breaker.$v;
                }
              }

              return this;
            
            };

            def.$to_f = function() {
              
              return parseFloat(this);
            };

            def.$to_i = function() {
              
              return parseInt(this);
            };

            def.$to_json = function() {
              
              return this.toString();
            };

            def.$to_s = function(base) {
              if (base == null) {
                base = 10
              }
              return this.toString();
            };

            def.$upto = function(finish, block) {
              if (typeof(block) !== 'function') { block = nil }
              
              for (var i = this; i <= finish; i++) {
                if (block(i) === __breaker) {
                  return __breaker.$v;
                }
              }

              return this;
            
            };

            def['$zero?'] = function() {
              
              return this == 0;
            };

            return nil;
          })(self, Number);
          return __scope.Fixnum = __scope.Numeric;
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          (function(__base, __super){
            function Proc() {};
            Proc = __klass(__base, __super, "Proc", Proc);

            ;Proc._sdonate(["$new"]);    var def = Proc.prototype, __scope = Proc._scope;

            
            Proc.prototype._isProc = true;
            Proc.prototype.is_lambda = true;
          

            Proc.$new = function(block) {
              if (typeof(block) !== 'function') { block = nil }
              if (block === nil) no_block_given();
              block.is_lambda = false;
              return block;
            };

            def.$call = function(args) {
              args = __slice.call(arguments, 0);
              return this.apply(null, args);
            };

            def.$to_proc = function() {
              
              return this;
            };

            def['$lambda?'] = function() {
              
              return !!this.is_lambda;
            };

            def.$arity = function() {
              
              return this.length - 1;
            };

            return nil;
          })(self, Function);
          return (function(__base, __super){
            function Method() {};
            Method = __klass(__base, __super, "Method", Method);

            var def = Method.prototype, __scope = Method._scope;

            return nil
          })(self, __scope.Proc);
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function Range() {};
            Range = __klass(__base, __super, "Range", Range);

            var def = Range.prototype, __scope = Range._scope;
            def.begin = def.end = nil;

            Range.$include(__scope.Enumerable);

            
            Range.prototype._isRange = true;

            Opal.range = function(beg, end, exc) {
              var range         = new Range;
                  range.begin   = beg;
                  range.end     = end;
                  range.exclude = exc;

              return range;
            };
          

            def.$begin = function() {
              
              return this.begin
            }, nil;

            def.$end = function() {
              
              return this.end
            }, nil;

            def.$initialize = function(min, max, exclude) {
              if (exclude == null) {
                exclude = false
              }
              this.begin = min;
              this.end = max;
              return this.exclude = exclude;
            };

            def['$=='] = function(other) {
              
              
              if (!other._isRange) {
                return false;
              }

              return this.exclude === other.exclude && this.begin == other.begin && this.end == other.end;
            
            };

            def['$==='] = function(obj) {
              
              return obj >= this.begin && (this.exclude ? obj < this.end : obj <= this.end);
            };

            def['$cover?'] = function(value) {
              var _a, _b;
              return ((_a = (this.begin)['$<='](value)) ? value['$<=']((function() { if ((_b = this['$exclude_end?']()) !== false && _b !== nil) {
                return (this.end)['$-'](1)
                } else {
                return this.end;
              }; return nil; }).call(this)) : _a);
            };

            def.$each = function(block) {
              var current = nil, _a, _b, _c;if (typeof(block) !== 'function') { block = nil }
              current = this.$min();
              while ((_b = (_c = current['$=='](this.$max()), (_c === nil || _c === false))) !== false && _b !== nil){if (block(current) === __breaker) return __breaker.$v;
              current = current.$succ();};
              if ((_a = this['$exclude_end?']()) === false || _a === nil) {
                if (block(current) === __breaker) return __breaker.$v
              };
              return this;
            };

            def['$eql?'] = function(other) {
              var _a;
              if ((_a = __scope.Range['$==='](other)) === false || _a === nil) {
                return false
              };
              return (_a = ((_a = this['$exclude_end?']()['$=='](other['$exclude_end?']())) ? (this.begin)['$eql?'](other.$begin()) : _a), _a !== false && _a !== nil ? (this.end)['$eql?'](other.$end()) : _a);
            };

            def['$exclude_end?'] = function() {
              
              return this.exclude;
            };

            def['$include?'] = function(val) {
              
              return obj >= this.begin && obj <= this.end;
            };

            def.$max = def.$end;

            def.$min = def.$begin;

            def['$member?'] = def['$include?'];

            def.$step = function(n) {
              if (n == null) {
                n = 1
              }
              return this.$raise(__scope.NotImplementedError);
            };

            def.$to_s = function() {
              
              return this.begin + (this.exclude ? '...' : '..') + this.end;
            };

            return def.$inspect = def.$to_s;
          })(self, null)
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          return (function(__base, __super){
            function Time() {};
            Time = __klass(__base, __super, "Time", Time);

            ;Time._sdonate(["$at", "$new", "$now"]);    var def = Time.prototype, __scope = Time._scope;

            Time.$include(__scope.Comparable);

            Time.$at = function(seconds, frac) {
              if (frac == null) {
                frac = 0
              }
              return new Date(seconds * 1000 + frac);
            };

            Time.$new = function(year, month, day, hour, minute, second, millisecond) {
              
              
              switch (arguments.length) {
                case 1:
                  return new Date(year);
                case 2:
                  return new Date(year, month - 1);
                case 3:
                  return new Date(year, month - 1, day);
                case 4:
                  return new Date(year, month - 1, day, hour);
                case 5:
                  return new Date(year, month - 1, day, hour, minute);
                case 6:
                  return new Date(year, month - 1, day, hour, minute, second);
                case 7:
                  return new Date(year, month - 1, day, hour, minute, second, millisecond);
                default:
                  return new Date();
              }
            
            };

            Time.$mktime = function(year, month, day, hour, minute, second, millisecond) {

                return Time.$new(year, month, day, hour, minute, second, millisecond);
            };

            Time.$now = function() {
              
              return new Date();
            };

            def['$+'] = function(other) {
              
              return __scope.Time.$allocate(this.$to_f()['$+'](other.$to_f()));
            };

            def['$-'] = function(other) {
              
              return __scope.Time.$allocate(this.$to_f()['$-'](other.$to_f()));
            };

            def['$<=>'] = function(other) {
              
              return this.$to_f()['$<=>'](other.$to_f());
            };

            def.$day = def.getDate;

            def['$eql?'] = function(other) {
              var _a;
              return (_a = other['$is_a?'](__scope.Time), _a !== false && _a !== nil ? this['$<=>'](other)['$zero?']() : _a);
            };

            def['$friday?'] = function() {
              
              return this.getDay() === 5;
            };

            def.$hour = def.getHours;

            def.$inspect = def.toString;

            def.$mday = def.$day;

            def.$min = def.getMinutes;

            def.$mon = function() {
              
              return this.getMonth() + 1;
            };

            def['$monday?'] = function() {
              
              return this.getDay() === 1;
            };

            def.$month = def.$mon;

            def['$saturday?'] = function() {
              
              return this.getDay() === 6;
            };

            def.$sec = def.getSeconds;

            def['$sunday?'] = function() {
              
              return this.getDay() === 0;
            };

            def['$thursday?'] = function() {
              
              return this.getDay() === 4;
            };

            def.$to_f = function() {
              
              return this.getTime() / 1000;
            };

            def.$to_i = function() {
              
              return parseInt(this.getTime() / 1000);
            };

            def.$to_s = def.$inspect;

            def['$tuesday?'] = function() {
              
              return this.getDay() === 2;
            };

            def.$wday = def.getDay;

            def['$wednesday?'] = function() {
              
              return this.getDay() === 3;
            };

            return def.$year = def.getFullYear;
          })(self, Date)
        })();
        (function() {
          var date_constructor = nil, __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
          date_constructor = Date;
          return (function(__base, __super){
            function Date() {};
            Date = __klass(__base, __super, "Date", Date);

            ;Date._sdonate(["$today"]);    var def = Date.prototype, __scope = Date._scope;

            Date.$today = function() {
              
              
              var date = this.$new();
              date._date = new date_constructor();
              return date;
            
            };

            def.$initialize = function(year, month, day) {
              
              return this._date = new date_constructor(year, month - 1, day);
            };

            def.$day = function() {
              
              return this._date.getDate();
            };

            def.$month = function() {
              
              return this._date.getMonth() + 1;
            };

            def.$to_s = function() {
              
              
              var d = this._date;
              return '' + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
            
            };

            def.$year = function() {
              
              return this._date.getFullYear();
            };

            return nil;
          })(self, null);
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __hash2 = __opal.hash2;
          var json_parse = JSON.parse;
          return (function(__base){
            function JSON() {};
            JSON = __module(__base, "JSON", JSON);
            var def = JSON.prototype, __scope = JSON._scope;

            JSON.$parse = function(source) {
              
              return to_opal(json_parse(source));
            };

            JSON.$from_object = function(js_object) {
              
              return to_opal(js_object);
            };

            
            function to_opal(value) {
              switch (typeof value) {
                case 'string':
                  return value;

                case 'number':
                  return value;

                case 'boolean':
                  return !!value;

                case 'null':
                  return nil;

                case 'object':
                  if (!value) return nil;

                  if (value._isArray) {
                    var arr = [];

                    for (var i = 0, ii = value.length; i < ii; i++) {
                      arr.push(to_opal(value[i]));
                    }

                    return arr;
                  }
                  else {
                    var hash = __hash2({}), v, map = hash.map;

                    for (var k in value) {
                      if (__hasOwn.call(value, k)) {
                        v = to_opal(value[k]);
                        map[k] = v;
                      }
                    }
                  }

                  return hash;
              }
            };
          
                ;JSON._sdonate(["$parse", "$from_object"]);
          })(self);
        })();
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass, __hash2 = __opal.hash2;
          return (function(__base, __super){
            function ERB() {};
            ERB = __klass(__base, __super, "ERB", ERB);

            ;ERB._sdonate(["$[]", "$[]="]);    var def = ERB.prototype, __scope = ERB._scope;
            def.body = nil;

            ERB._cache = __hash2({});

            ERB['$[]'] = function(name) {
              
              if (this._cache == null) this._cache = nil;

              return this._cache['$[]'](name)
            };

            ERB['$[]='] = function(name, instance) {
              
              if (this._cache == null) this._cache = nil;

              return this._cache['$[]='](name, instance)
            };

            def.$initialize = function(name, body) {
              if (typeof(body) !== 'function') { body = nil }
              this.body = body;
              this.name = name;
              return __scope.ERB['$[]='](name, this);
            };

            def.$render = function(ctx) {
              if (ctx == null) {
                ctx = this
              }
              return ctx.$instance_eval(this.body.$to_proc());
            };

            return nil;
          })(self, null)
        })();
        }).call(this);

        Opal.Database = (function() {
            var initDbSchemaSQL = [
                'DROP TABLE IF EXISTS client_info;',
                'CREATE TABLE client_info (',
                '        "client_id" VARCHAR(255) default NULL,',
                '        "session" VARCHAR(255) default NULL,',
                '        "token" VARCHAR(255) default NULL,',
                '        "token_sent" BIGINT default 0,',
                '        "reset" BIGINT default 0,',
                '        "port" VARCHAR(10) default NULL,',
                '        "last_sync_success" VARCHAR(100) default NULL);',
                'DROP TABLE IF EXISTS object_values;',
                'CREATE TABLE object_values (',
                '        "source_id" BIGINT default NULL,',
                '        "attrib" varchar(255) default NULL,',
                '        "object" varchar(255) default NULL,',
                '        "value" varchar default NULL);',
                'DROP TABLE IF EXISTS changed_values;',
                'CREATE TABLE changed_values (',
                '        "source_id" BIGINT default NULL,',
                '        "attrib" varchar(255) default NULL,',
                '        "object" varchar(255) default NULL,',
                '        "value" varchar default NULL,',
                '        "attrib_type" varchar(255) default NULL,',
                '        "update_type" varchar(255) default NULL,',
                '        "sent" BIGINT default 0);',
                'DROP TABLE IF EXISTS sources;',
                'CREATE TABLE sources (',
                '        "source_id" BIGINT PRIMARY KEY,',
                '        "name" VARCHAR(255) default NULL,',
                '        "token" BIGINT default NULL,',
                '        "sync_priority" BIGINT,',
                '        "partition" VARCHAR(255),',
                '        "sync_type" VARCHAR(255),',
                '        "metadata" varchar default NULL,',
                '        "last_updated" BIGINT default 0,',
                '        "last_inserted_size" BIGINT default 0,',
                '        "last_deleted_size" BIGINT default 0,',
                '        "last_sync_duration" BIGINT default 0,',
                '        "last_sync_success" BIGINT default 0,',
                '        "backend_refresh_time" BIGINT default 0,',
                '        "source_attribs" varchar default NULL,',
                '        "schema" varchar default NULL,',
                '        "schema_version" varchar default NULL,',
                '        "associations" varchar default NULL,',
                '        "blob_attribs" varchar default NULL);',
                'DROP INDEX IF EXISTS by_src_id;',
                'CREATE INDEX by_src_id on object_values ("source_id");',
                'DROP INDEX IF EXISTS by_src_object;',
                'CREATE UNIQUE INDEX by_src_object ON object_values ("object", "attrib", "source_id");',
                'DROP INDEX IF EXISTS by_src_value;',
                'CREATE INDEX by_src_value ON object_values ("attrib", "source_id", "value");'
            ].join('\n');

            var log = function(text) {
                return console.log(text);
            };

            var makeSetParams = function(map) {
                var sets = [];
                var values = [];

                for (var key in map) {
                    if (map.hasOwnProperty(key)) {
                        sets.push('"' + key + '"=?');
                        values.push(map[key]);
                    }
                }
                return {clause: 'set ' + sets.join(', '), values: values};
            };

            var makeWhereParams = function(condition, op) {
                var conds = [];
                var values = [];
             
                for (var key in condition) {
                    if (condition.hasOwnProperty(key)) {
                        var value = condition[key];
                        if (value === null) {
                            conds.push('"' + key + '" IS NULL');
                        } else {
                            conds.push('"' + key + '"=?');
                            values.push(value);
                        }
                    }
                }
                return {clause: 'where ' + conds.join(' ' + op + ' '), values: values};
            };

            var newDb = function(dbfile, partition) {
                var db = new Rho.Database(dbfile, partition);

                var start_transaction = function() {
                    db.startTransaction();
                };

                var commit = function() {
                    db.commitTransaction();
                };

                var rollback = function() {
                    db.rollbackTransaction();
                };

                var lock_db = function() {
                    db.lockDb();
                };

                var unlock_db = function() {
                    db.unlockDb();
                };

                var execute_sql = function(sql, args) {
                    var rows = db.executeSql(sql, args);
                    for (var i = 0; i < rows.length; ++i) {
                        rows[i] = Opal.hash2(rows[i]);
                    }
                    return rows;
                };

                var insert_into_table = function(table, values, excludes) {
                    values = values.map;
                    excludes = (excludes) ? excludes.map : {};
                    var cols = [];
                    var quests = [];
                    var vals = [];

                    for (var key in values) {
                        if (!values.hasOwnProperty(key)) {
                            continue;
                        }
                        if (excludes.hasOwnProperty(key)) {
                            continue;
                        }
                        cols.push(key);
                        quests.push('?');
                        vals.push(values[key]);
                    }
                    
                    var query = 'insert into "' + table + '" ("' + cols.join('", "') + '") values (' + quests.join(', ') + ')';
                    execute_sql(query, vals);
                };

                var delete_from_table = function(table, condition) {
                    var where = makeWhereParams(condition.map, 'and');
                    execute_sql('delete from "' + table + '" ' + where.clause, where.values);
                };

                var select_from_table = function(table, column, condition, params) {
                    var query = ['select'];
                    var values = [];

                    if (params !== undefined && params['distinct']) {
                        query.push('distinct');
                    }

                    query.push('"' + column + '"');
                    query.push('from "' + table + '"');

                    if (condition !== undefined) {
                        var where = makeWhereParams(condition.map, 'and');
                        values = where.values;
                        query.push(where.clause);
                    }

                    if (params !== undefined && params['order by']) {
                        query.push('order by "' + params['order by'] + '"');
                    }

                    return execute_sql(query.join(' '), values);
                };

                var update_into_table = function(table, values, condition) {
                    var columns = makeSetParams(values.map);

                    var query = ['update "' + table + '"', columns.clause];
                    var values = columns.values;

                    if (condition !== undefined) {
                        var where = makeWhereParams(condition.map, 'and');
                        query.push(where.clause);
                        values = values.concat(where.values);
                    }
                    return execute_sql(query.join(' '), values);
                };


                execute_sql(initDbSchemaSQL, []);

                return {
                    $start_transaction: start_transaction,
                    $commit: commit,
                    $rollback: rollback,
                    $lock_db: lock_db,
                    $unlock_db: unlock_db,
                    $insert_into_table: insert_into_table,
                    $delete_from_table: delete_from_table,
                    $select_from_table: select_from_table,
                    $update_into_table: update_into_table,
                    $execute_sql: execute_sql
                };
            };

            return {$new: newDb};
        })();

        // rhom/rhom_object.rb
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __range = __opal.range, __hash2 = __opal.hash2;
          return (function(__base){
            function Rhom() {};
            Rhom = __module(__base, "Rhom", Rhom);
            var def = Rhom.prototype, __scope = Rhom._scope;

            (function(__base){
              function RhomObject() {};
              RhomObject = __module(__base, "RhomObject", RhomObject);
              var def = RhomObject.prototype, __scope = RhomObject._scope;

              def.$strip_braces = function(str) {
                if (str == null) {
                  str = nil
                }
                if (str !== false && str !== nil) {
                  return str.$gsub(/\{/, "").$gsub(/\}/, "")
                  } else {
                  return nil
                };
              };

              def.$djb_hash = function(str, len) {
                var hash = nil, TMP_1;
                hash = 5381;
                this.$for(this.$i(this.$in(__range(0, len, false))), (TMP_1 = function() {

                  var self = TMP_1._s || this;
                  
                  return hash = hash['$<<'](5)['$+'](hash)['$+'](str['$[]'](self.$i()).$to_i())
                }, TMP_1._s = this, TMP_1));
                return hash;
              };

              def.$extract_options = function(arr) {
                var _a;if (arr == null) {
                  arr = []
                }
                if ((_a = arr.$last()['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                  return arr.$pop()
                  } else {
                  return __hash2({})
                };
              };

              (Opal.cvars["@@reserved_names"] = __hash2({"object": "1", "source_id": "1", "update_type": "1", "attrib_type": "1", "set_notification": "1", "clear_notification": "1"}));

              __scope.RhomObject['$method_name_reserved?'] = function(method) {
                var _a;
                return ((_a = Opal.cvars["@@reserved_names"]) == null ? nil : _a)['$has_key?'](method)
              };
                    ;RhomObject._donate(["$strip_braces", "$djb_hash", "$extract_options"]);
            })(Rhom)
            
          })(self)
        })();
        // rhom/rhom_object_factory.rb
        (function() {
          var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass, __hash2 = __opal.hash2, __hash = __opal.hash;
          return (function(__base){
            function Rhom() {};
            Rhom = __module(__base, "Rhom", Rhom);
            var def = Rhom.prototype, __scope = Rhom._scope;

            Rhom['$any_model_changed?'] = function() {
              var TMP_1;
              (__opal.Object._scope.Rho)._scope.RHO.$get_db_partitions().$each_value((TMP_1 = function(db) {

                var result = nil, self = TMP_1._s || this, _a, _b;
                if (db == null) db = nil;

                result = db.$execute_sql("SELECT object FROM changed_values LIMIT 1 OFFSET 0", []);
                if ((_a = ((_b = result !== false && result !== nil) ? result.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                  return true
                  } else {
                  return nil
                };
              }, TMP_1._s = this, TMP_1));
              return false;
            };

            (function(__base, __super){
              function RhomObjectFactory() {};
              RhomObjectFactory = __klass(__base, __super, "RhomObjectFactory", RhomObjectFactory);

              ;RhomObjectFactory._sdonate(["$init_object"]);      var def = RhomObjectFactory.prototype, __scope = RhomObjectFactory._scope;

              def.$initialize = function() {
                
                return nil;
              };

              RhomObjectFactory.$init_object = function(classname) {
                var _a, TMP_2;
                if ((_a = __scope.Object['$const_defined?'](classname.$intern())) !== false && _a !== nil) {
                  return nil
                  } else {
                  return __scope.Object.$const_set(classname.$intern(), __scope.Class.$new((TMP_2 = function() {

                    var self = TMP_2._s || this, def = (self._isObject ? self : self.prototype);
                    
                    self.$include((__scope.Rhom)._scope.RhomObject);
                    self.$extend((__scope.Rhom)._scope.RhomObject);
                    self.$attr_accessor("vars");
                    def.$generate_id = function() {
                      
                      return (__scope.Rho)._scope.RhoConfig.$generate_id();
                    };
                    def.$initialize = function(obj) {
                      var _a, _b, TMP_3;
                      if (this.vars == null) this.vars = nil;
        if (obj == null) {
                        obj = nil
                      }
                      this.vars = __hash2({});
                      // this.$rhom_init(this.vars);
                      if ((_a = ((_b = obj !== false && obj !== nil) ? obj['$[]']("object") : _b)) === false || _a === nil) {
                        this.$vars()['$[]=']("object", "" + (this.$generate_id()))
                      };
                      this.$vars()['$[]=']("source_id", this.$get_inst_source_id().$to_i());
                      if (obj !== false && obj !== nil) {
                        return obj.$each((TMP_3 = function(key, value) {

                          var self = TMP_3._s || this, _a, _b;
                          if (key == null) key = nil;
        if (value == null) value = nil;

                          if ((_a = ((_b = key !== false && key !== nil) ? key.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                            return self.$vars()['$[]='](key.$to_sym(), value)
                            } else {
                            return nil
                          }
                        }, TMP_3._s = this, TMP_3))
                        } else {
                        return nil
                      };
                    };
                    def.$object = function() {
                      
                      if (this.vars == null) this.vars = nil;

                      return this.vars['$[]']("object");
                    };
                    def.$source_id = function() {
                      
                      if (this.vars == null) this.vars = nil;

                      return this.vars['$[]']("source_id");
                    };
                    def.$to_s = function() {
                      var _a;
                      if (this.vars == null) this.vars = nil;

                      if ((_a = this.vars) !== false && _a !== nil) {
                        return this.vars.$to_s()
                        } else {
                        return nil
                      };
                    };
                    def.$to_json = function(args) {
                      var _a;
                      if (this.vars == null) this.vars = nil;
        args = __slice.call(arguments, 0);
                      if ((_a = this.vars) !== false && _a !== nil) {
                        return (_a = this.vars).$to_json.apply(_a, [].concat(args))
                        } else {
                        return nil
                      };
                    };
                    def.$method_missing = function(name, args) {
                      var s_name = nil;
                      if (this.vars == null) this.vars = nil;
        args = __slice.call(arguments, 1);
                      if (name['$=='](__scope.Fixnum)) {
                        return nil
                        } else {
                        if (name['$[]'](name.$length()['$-'](1))['$==']("=")) {
                          s_name = name.$to_s().$chop();
                          this.$check_freezing_model(s_name);
                          return this.vars['$[]='](s_name.$to_sym(), args['$[]'](0));
                          } else {
                          return this.vars['$[]'](name)
                        }
                      };
                    };
                    def.$check_freezing_model = function(obj) {
                      var is_schema_src, hash_props = nil, _a, _b, _c, TMP_4;
                      is_schema_src = this.$is_inst_schema_source();
                      var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_inst_source_name());
                      // return unless obj && (isSchemaSrc || Rho::RhoConfig.sources[get_inst_source_name()]['freezed'])
                      if ((obj !== false && obj !== nil) && !is_schema_src) {
                          _a = source['freezed'];
                          if (_a === undefined || !_a) {
                              return nil;
                          }
                      }
                      hash_props = (is_schema_src) ? source['schema']['property'] : source['property'];
                      if ((_a = obj['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                        return obj.$each((TMP_4 = function(key, value) {

                          var self = TMP_4._s || this, _a;
                          if (key == null) key = nil;
        if (value == null) value = nil;

                          if (key.$to_s()['$==']("object")) {
                            return nil;
                          };
                          if ((_a = hash_props['$[]'](key.$to_s())) !== false && _a !== nil) {
                            return nil
                            } else {
                            return self.$raise(__scope.ArgumentError.$new("Non-exist property : " + (key) + ". For model : " + (self.$get_inst_source_name())))
                          };
                        }, TMP_4._s = this, TMP_4))
                        } else {
                        if ((_a = (_b = obj.$to_s()['$==']("object"), (_b === nil || _b === false))) !== false && _a !== nil) {
                          if ((_a = hash_props['$[]'](obj.$to_s())) !== false && _a !== nil) {
                            return nil
                            } else {
                            return this.$raise(__scope.ArgumentError.$new("Non-exist property : " + (obj) + ". For model : " + (this.$get_inst_source_name())))
                          }
                          } else {
                          return nil
                        }
                      };
                    };
                    (function(){var def = self; def.$metadata = function() {
                      var src_name = nil, db = nil, result = nil, _a, _b;
                      src_name = this.$get_source_name();
                      if ((_a = (__scope.Rho)._scope.RhoController.$cached_metadata()['$has_key?'](src_name)) !== false && _a !== nil) {
                        return (__scope.Rho)._scope.RhoController.$cached_metadata()['$[]'](src_name)
                      };
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(src_name);
                      result = db.$select_from_table("sources", "metadata", __hash2({"name": src_name}));
                      if ((_a = (_b = ((_b = result !== false && result !== nil) ? result.$length()['$>'](0) : _b), _b !== false && _b !== nil ? result['$[]'](0)['$[]']("metadata") : _b)) !== false && _a !== nil) {
                        (__scope.Rho)._scope.RhoController.$cached_metadata()['$[]='](src_name, (__scope.Rho)._scope.JSON.$parse(result['$[]'](0)['$[]']("metadata")))
                        } else {
                        (__scope.Rho)._scope.RhoController.$cached_metadata()['$[]='](src_name, nil)
                      };
                      return (__scope.Rho)._scope.RhoController.$cached_metadata()['$[]'](src_name);
                    };
                    def['$metadata='] = function(metadata_doc) {
                      var src_name = nil, db = nil;
                      src_name = this.$get_source_name();
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(src_name);
                      return db.$execute_sql("UPDATE sources set metadata=? where name=?", [metadata_doc, src_name]);
                    };
                    def.$count = function() {
                      var db = nil, db_res = nil, res = nil, _a, _b;
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      if ((_a = this.$is_schema_source()) !== false && _a !== nil) {
                        db_res = db.$execute_sql("SELECT COUNT(*) FROM "['$+'](this.$get_schema_table_name()), []);
                        if ((_a = ((_b = db_res !== false && db_res !== nil) ? db_res.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                          res = db_res['$[]'](0).$values()['$[]'](0)
                          } else {
                          res = 0
                        };
                        } else {
                        res = db.$select_from_table("object_values", "object", __hash2({"source_id": this.$get_source_id()}), __hash2({"distinct": true})).$length()
                      };
                      return res.$to_i();
                    };
                    def.$backend_refresh_time = function() {
                      var db = nil, result = nil, n_time = nil, _a, _b;
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      result = db.$select_from_table("sources", "backend_refresh_time", __hash2({"source_id": this.$get_source_id()}));
                      n_time = 0;
                      if ((_a = (_b = ((_b = result !== false && result !== nil) ? result.$length()['$>'](0) : _b), _b !== false && _b !== nil ? result['$[]'](0)['$[]']("backend_refresh_time") : _b)) !== false && _a !== nil) {
                        n_time = result['$[]'](0)['$[]']("backend_refresh_time").$to_i()
                      };
                      return __scope.Time.$at(n_time);
                    };
                    def.$get_source_name = function() {
                      
                      return this.$name().$to_s();
                    };
                    def.$is_sync_source = function() {
                        var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_source_name());
                        return source['sync_type'] !== 'none';
                    };
                    def.$is_schema_source = function() {
                        var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_source_name());
                        return source.hasOwnProperty('schema');
                    };
                    def.$get_schema_table_name = function() {
                      
                      return this.$get_source_name();
                    };
                    def.$get_values_table_name = function() {
                      var _a;
                      if ((_a = this.$is_schema_source()) !== false && _a !== nil) {
                        return this.$get_schema_table_name()
                        } else {
                        return "object_values"
                      };
                    };
                    def.$get_source_id = function() {
                      var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_source_name());
                      return source['source_id'];
                    };
                    def.$convertOpToStr = function(val_op, value) {
                      var res = nil, svalue = nil, _a, _b, TMP_5, TMP_6;
                      res = "";
                      if ((_a = ((_b = val_op.$upcase()['$==']("IN")), _b !== false && _b !== nil ? _b : val_op.$upcase()['$==']("NOT IN"))) !== false && _a !== nil) {
                        if ((_a = value['$is_a?'](__scope.String)) !== false && _a !== nil) {
                          value = value.$split(",");
                          value.$each((TMP_5 = function(item) {

                            var self = TMP_5._s || this, _a, _b, _c;
                            if (item == null) item = nil;

                            item['$strip!']();
                            if ((_a = ((_b = (_c = item['$start_with?']("\""), _c !== false && _c !== nil ? item['$end_with?']("\"") : _c)), _b !== false && _b !== nil ? _b : (_c = item['$start_with?']("'"), _c !== false && _c !== nil ? item['$end_with?']("'") : _c))) !== false && _a !== nil) {
                              item['$slice!'](0);
                              return item['$chop!']();
                              } else {
                              return nil
                            };
                          }, TMP_5._s = this, TMP_5));
                        };
                        if ((_a = value['$is_a?'](__scope.Array)) !== false && _a !== nil) {
                          svalue = "";
                          value.$each((TMP_6 = function(item) {

                            var self = TMP_6._s || this;
                            if (item == null) item = nil;

                            if (svalue.$length()['$>'](0)) {
                              svalue = svalue['$+'](",")
                            };
                            return svalue = svalue['$+']("'" + (item) + "'");
                          }, TMP_6._s = this, TMP_6));
                          res = res['$+'](val_op['$+'](" ( ")['$+'](svalue)['$+'](" )"));
                          } else {
                          this.$raise(__scope.ArgumentError, "IN parameters should be String or Array")
                        };
                        } else {
                        res = res['$+'](val_op['$+'](" ")['$+']((__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$get_value_for_sql_stmt(value, false)))
                      };
                      return res;
                    };
                    def.$convertSqlConditionToStr = function(cond, op) {
                      var condition_str = nil, _a, _b, TMP_7;
                      if ((_a = cond['$is_a?'](__scope.String)) !== false && _a !== nil) {
                        return cond
                      };
                      if ((_a = (_b = cond['$is_a?'](__scope.Array), _b !== false && _b !== nil ? (_b = op, (_b === nil || _b === false)) : _b)) !== false && _a !== nil) {
                        condition_str = cond['$[]'](0).$split(/\?/).$each_with_index((TMP_7 = function(param, i) {

                          var self = TMP_7._s || this;
                          if (param == null) param = nil;
        if (i == null) i = nil;

                          return param['$<<'](cond['$[]'](i['$+'](1)).$to_s())
                        }, TMP_7._s = this, TMP_7)).$join(" ").$to_s();
                        this.$puts("condition_str : " + (condition_str));
                        return condition_str;
                      };
                      return nil;
                    };
                    def.$convertConditionToStatement = function(cond, op, sql, vals) {
                      var sql_res = nil, vals_res = nil, b_simple_hash = nil, sql_cond = nil, vals_cond = nil, _a, TMP_8, _b, TMP_9;
                      if ((_a = cond['$is_a?'](__scope.Array)) !== false && _a !== nil) {
                        if ((_a = op) === false || _a === nil) {
                          return nil
                        };
                        sql_res = "";
                        vals_res = [];
                        cond.$each((TMP_8 = function(item) {

                          var sql_cond = nil, vals_cond = nil, self = TMP_8._s || this;
                          if (item == null) item = nil;

                          if (sql_res.$length()['$>'](0)) {
                            sql_res = sql_res['$+'](" "['$+'](op)['$+'](" "))
                          };
                          sql_cond = "";
                          vals_cond = [];
                          self.$convertConditionToStatement(item['$[]']("conditions"), item['$[]']("op"), sql_cond, vals_cond);
                          sql_res['$<<']("("['$+'](sql_cond)['$+'](")"));
                          return vals_res.$concat(vals_cond);
                        }, TMP_8._s = this, TMP_8));
                        sql['$<<'](sql_res);
                        vals.$concat(vals_res);
                        return nil;
                      };
                      if ((_a = (_b = cond['$is_a?'](__scope.Hash), (_b === nil || _b === false))) !== false && _a !== nil) {
                        return nil
                      };
                      b_simple_hash = true;
                      if ((_a = op) === false || _a === nil) {
                        op = "AND"
                      };
                      cond.$each((TMP_9 = function(key, value) {

                        var sql_cond = nil, vals_cond = nil, self = TMP_9._s || this, _a, _b;
                        if (key == null) key = nil;
        if (value == null) value = nil;

                        if ((_a = key['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                          ((_a = self.$makeCondWhereEx(key, value, nil))._isArray ? _a : (_a = [_a])), sql_cond = (_a[0] == null ? nil : _a[0]), vals_cond = (_a[1] == null ? nil : _a[1]);
                          if ((_a = (_b = b_simple_hash, (_b === nil || _b === false))) !== false && _a !== nil) {
                            sql['$<<'](" "['$+'](op)['$+'](" "))
                          };
                          sql['$<<'](sql_cond);
                          vals.$concat(vals_cond);
                          return b_simple_hash = false;
                          } else {
                          return nil
                        }
                      }, TMP_9._s = this, TMP_9));
                      if (b_simple_hash !== false && b_simple_hash !== nil) {
                        ((_a = (__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$make_where_params(cond, "AND"))._isArray ? _a : (_a = [_a])), sql_cond = (_a[0] == null ? nil : _a[0]), vals_cond = (_a[1] == null ? nil : _a[1]);
                        sql['$<<'](sql_cond);
                        return vals.$concat(vals_cond);
                        } else {
                        return nil
                      };
                    };
                    def.$makeCondWhere = function(key, value, srcid_value) {
                      var sql = nil, val_op = nil, val_func = nil, attrib_name = nil, _a;
                      sql = "";
                      val_op = "=";
                      val_func = "";
                      attrib_name = "";
                      if ((_a = key['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                        if ((_a = key['$[]']("op")) !== false && _a !== nil) {
                          val_op = key['$[]']("op")
                        };
                        if ((_a = key['$[]']("func")) !== false && _a !== nil) {
                          val_func = key['$[]']("func")
                        };
                        if ((_a = key['$[]']("name")) !== false && _a !== nil) {
                          attrib_name = key['$[]']("name")
                        };
                        } else {
                        attrib_name = key
                      };
                      sql['$<<']("attrib="['$+']((__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$get_value_for_sql_stmt((function() { if (val_func.$upcase()['$==']("CAST")) {
                        return attrib_name.$split(" ")['$[]'](0)
                        } else {
                        return attrib_name
                      }; return nil; }).call(this))));
                      sql['$<<'](" AND source_id="['$+'](srcid_value));
                      if (val_func.$upcase()['$==']("CAST")) {
                        sql['$<<'](" AND "['$+'](val_func)['$+']("(value ")['$+'](attrib_name.$split(" ")['$[]'](1))['$+'](" ")['$+'](attrib_name.$split(" ")['$[]'](2))['$+'](" ) "))
                        } else {
                        sql['$<<'](" AND "['$+']((function() { if (val_func.$length()['$>'](0)) {
                          return val_func['$+']("(value)")
                          } else {
                          return "value"
                        }; return nil; }).call(this))['$+'](" "))
                      };
                      sql['$<<'](this.$convertOpToStr(val_op, value));
                      return sql;
                    };
                    def.$getCondAttribName = function(key) {
                      var attrib_name = nil, _a;
                      if ((_a = key['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                        if ((_a = key['$[]']("name")) !== false && _a !== nil) {
                          attrib_name = key['$[]']("name")
                        }
                        } else {
                        attrib_name = key
                      };
                      return attrib_name;
                    };
                    def.$makeCondWhereEx = function(key, value, srcid_value) {
                      var sql = nil, vals = nil, val_op = nil, val_func = nil, attrib_name = nil, _a, _b, TMP_10;
                      sql = "";
                      vals = [];
                      val_op = "=";
                      val_func = "";
                      attrib_name = "";
                      if ((_a = key['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                        if ((_a = key['$[]']("op")) !== false && _a !== nil) {
                          val_op = key['$[]']("op")
                        };
                        if ((_a = key['$[]']("func")) !== false && _a !== nil) {
                          val_func = key['$[]']("func")
                        };
                        if ((_a = key['$[]']("name")) !== false && _a !== nil) {
                          attrib_name = key['$[]']("name")
                        };
                        } else {
                        attrib_name = key
                      };
                      if ((_a = srcid_value['$nil?']()) !== false && _a !== nil) {
                        sql += (function() {
                            if (val_func.$length()['$>'](0)) {
                                return val_func['$+']("(" + (attrib_name) + ")");
                            } else {
                                return "" + attrib_name;
                            }
                        }).call(this)['$+'](" ");
                        } else {
                        if ((_a = (_b = attrib_name['$is_a?'](__scope.String), _b !== false && _b !== nil ? attrib_name['$==']("object") : _b)) !== false && _a !== nil) {
                          sql += " source_id=?";
                          vals['$<<'](srcid_value);
                          sql += " AND object ";
                        } else {
                          sql += "attrib=?";
                          vals['$<<']((function() { if (val_func.$upcase()['$==']("CAST")) {
                            return attrib_name.$split(" ")['$[]'](0)
                            } else {
                            return attrib_name
                          }; return nil; }).call(this));
                          sql += " AND source_id=?";
                          vals['$<<'](srcid_value);
                          if (val_func.$upcase()['$==']("CAST")) {
                            sql += " AND "['$+'](val_func)['$+']("(value ")['$+'](attrib_name.$split(" ")['$[]'](1))['$+'](" ")['$+'](attrib_name.$split(" ")['$[]'](2))['$+'](" ) ");
                            } else {
                            sql += " AND " + (function() {
                                if (val_func.$length()['$>'](0)) {
                                    return val_func['$+']("(value)");
                                }
                                return "value";
                            }).call(this) + " ";
                          };
                        }
                      };
                      if ((_a = ((_b = val_op.$upcase()['$==']("IN")), _b !== false && _b !== nil ? _b : val_op.$upcase()['$==']("NOT IN"))) !== false && _a !== nil) {
                        if ((_a = value['$is_a?'](__scope.String)) !== false && _a !== nil) {
                          value = value.$split(",");
                          value.$each((TMP_10 = function(item) {

                            var self = TMP_10._s || this, _a, _b;
                            if (item == null) item = nil;

                            item['$strip!']();
                            if ((_a = (_b = item['$start_with?']("\""), _b !== false && _b !== nil ? item['$end_with?']("\"") : _b)) !== false && _a !== nil) {
                              item['$slice!'](0);
                              return item['$chop!']();
                              } else {
                              return nil
                            };
                          }, TMP_10._s = this, TMP_10));
                        };
                        if ((_a = value['$is_a?'](__scope.Array)) !== false && _a !== nil) {
                          sql += val_op['$+'](" ( " + (__scope.Array.$new(value.$length(), "?").$join(",")) + " )");
                          vals.$concat(value);
                          } else {
                          this.$raise(__scope.ArgumentError, "IN parameters should be String or Array")
                        };
                        } else {
                        sql += val_op['$+'](" ?");
                        vals['$<<'](value);
                      };
                      return [sql, vals];
                    };
                    def.$find_objects = function(condition_hash, op, limit, offset, order_attr, block) {

                      var size = function(object) {
                          var size = 0;
                          for (var key in object) {
                              if (object.hasOwnProperty(key)) {
                                  ++size;
                              }
                          }
                          return size;
                      };

                      var each = function(object, f) {
                          for (var key in object) {
                              if (object.hasOwnProperty(key)) {
                                  f(key, object[key]);
                              }
                          }
                      };

                      var nulls_cond = {}, str_limit = nil, db = nil, list_objs = nil, srcid_value = nil, map_objs = nil, b_stop = nil, sql = nil, vals = nil, n_index = nil, res = nil, TMP_11, _a, _b, _c, TMP_12, TMP_14, TMP_15;if (typeof(block) !== 'function') { block = nil }
                      if (op === 'AND') {
                          each(condition_hash, function(key, value) {
                              if (value === null) {
                                  nulls_cond[key] = value;
                                  delete condition_hash[key];
                              }
                          });
                      };
                      str_limit = nil;
                      if (block === nil && order_attr === undefined) {
                          if (limit !== undefined && offset !== undefined && size(condition_hash) <= 1 && size(nulls_cond) === 0) {
                              str_limit = " LIMIT "['$+'](limit.$to_s())['$+'](" OFFSET ")['$+'](offset.$to_s())
                          }
                      }
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      list_objs = [];
                      if ((_a = ((_b = op['$==']("OR")) ? size(condition_hash) > 1 : _b)) !== false && _a !== nil) {
                        srcid_value = (__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$get_value_for_sql_stmt(this.$get_source_id());
                        map_objs = __hash2({});
                        b_stop = false;
                        each(condition_hash, (TMP_12 = function(key, value) {

                          var sql = nil, res_objs = nil, self = TMP_12._s || this, TMP_13;
                          if (key == null) key = nil;
        if (value == null) value = nil;

                          sql = "";
                          sql['$<<']("SELECT object,attrib,value FROM object_values WHERE \n");
                          sql['$<<'](self.$makeCondWhere(key, value, srcid_value));
                          res_objs = db.$execute_sql(sql, []);
                          res_objs.$each((TMP_13 = function(rec) {

                            var self = TMP_13._s || this, _a, _b;
                            if (rec == null) rec = nil;

                            if ((_a = map_objs['$[]'](rec['$[]']("object"))) !== false && _a !== nil) {
                              return nil;
                            };
                            map_objs['$[]='](rec['$[]']("object"), 1);
                            list_objs['$<<'](rec);
                            if (order_attr === undefined && limit !== undefined && offset !== undefined && size(nulls_cond) === 0 && list_objs.length >= offset + limit) {
                                return (__breaker.$v = nil, __breaker);
                            }
                            return nil;

                          }, TMP_13._s = self, TMP_13));
                          if (b_stop !== false && b_stop !== nil) {
                            return (__breaker.$v = nil, __breaker)
                            } else {
                            return nil
                          };
                        }, TMP_12._s = this, TMP_12));
                        } else {
                        if (size(condition_hash) > 0) {
                          sql = "";
                          vals = [];
                          each(condition_hash, (TMP_14 = function(key, value) {

                            var attrib_name = nil, sql_cond = nil, val_cond = nil, self = TMP_14._s || this, _a, _b;
                            if (key == null) key = nil;
                            if (value == null) value = nil;

                            if (sql.length > 0) {
                              sql += "\nINTERSECT\n";
                            };
                            attrib_name = self.$getCondAttribName(key);
                            if ((_a = (_b = ((_b = attrib_name !== false && attrib_name !== nil) ? attrib_name['$is_a?'](__scope.String) : _b), _b !== false && _b !== nil ? attrib_name['$==']("object") : _b)) !== false && _a !== nil) {
                              sql += "SELECT DISTINCT(object) FROM object_values WHERE \n";
                              } else {
                              sql += "SELECT object FROM object_values WHERE \n";
                            };
                            ((_a = self.$makeCondWhereEx(key, value, self.$get_source_id()))._isArray ? _a : (_a = [_a])), sql_cond = (_a[0] == null ? nil : _a[0]), val_cond = (_a[1] == null ? nil : _a[1]);
                            sql += sql_cond;
                            vals = vals['$+'](val_cond);
                            if (str_limit !== false && str_limit !== nil) {
                              sql += str_limit;
                            };
                          }, TMP_14._s = this, TMP_14));
                          list_objs = db.$execute_sql(sql, vals);
                        } else {
                          sql = "";
                          vals = [];
                          sql += "SELECT distinct( object ) FROM object_values WHERE \n";
                          sql += "source_id=?";
                          vals['$<<'](this.$get_source_id());
                          if (str_limit !== false && str_limit !== nil) {
                            sql += str_limit;
                          };
                          list_objs = db.$execute_sql(sql, vals);
                        }
                      };
                      n_index = -1;
                      res = [];
                      list_objs.$each((TMP_15 = function(obj) {

                        var b_skip = nil, self = TMP_15._s || this, _a, _b, _c, TMP_16;
                        if (obj == null) obj = nil;

                        n_index = n_index['$+'](1);
                        if (order_attr === undefined && offset !== undefined && n_index < offset && (str_limit === nil || str_limit === false)) {
                            return nil;
                        }
                        b_skip = false;
                        each(nulls_cond, (TMP_16 = function(key, value) {

                          var attr_val = nil, self = TMP_16._s || this, _a, _b;
                          if (key == null) key = nil;
        if (value == null) value = nil;

                          sql = "";
                          sql['$<<']("SELECT value FROM object_values WHERE \n");
                          sql['$<<']("object=?");
                          sql['$<<'](" AND attrib=?");
                          sql['$<<'](" AND source_id=?");
                          attr_val = db.$execute_sql(sql, [obj['$[]']("object"), key, self.$get_source_id()]);
                          if ((_a = (_b = ((_b = attr_val !== false && attr_val !== nil) ? attr_val.$length()['$>'](0) : _b), _b !== false && _b !== nil ? attr_val['$[]'](0)['$[]']("value") : _b)) !== false && _a !== nil) {
                            b_skip = true;
                            return (__breaker.$v = nil, __breaker);
                            } else {
                            return nil
                          };
                        }, TMP_16._s = self, TMP_16));
                        if (b_skip !== false && b_skip !== nil) {
                          return nil;
                        };
                        return res['$<<'](obj);
                      }, TMP_15._s = this, TMP_15));
                      return res;
                    };
                    def.$find_objects_ex = function(condition_ar, op, limit, offset, order_attr, block) {
                      var map_objs = nil, list_objs = nil, TMP_17;if (typeof(block) !== 'function') { block = nil }
                      map_objs = __hash2({});
                      list_objs = [];
                      condition_ar.$each((TMP_17 = function(cond) {

                        var res = nil, and_res = nil, self = TMP_17._s || this, TMP_18, TMP_19, TMP_20;
                        if (cond == null) cond = nil;

                        res = self.$find_objects(cond['$[]']("conditions"), cond['$[]']("op"), limit, offset, order_attr, block.$to_proc());
                        if (list_objs.$length()['$=='](0)) {
                          if (condition_ar.$length()['$>'](1)) {
                            res.$each((TMP_18 = function(hash_attrs) {

                              var self = TMP_18._s || this;
                              if (hash_attrs == null) hash_attrs = nil;

                              return map_objs['$[]='](hash_attrs['$[]']("object"), 1)
                            }, TMP_18._s = self, TMP_18))
                          };
                          return list_objs = res;
                          } else {
                          if (op['$==']("OR")) {
                            return res.$each((TMP_19 = function(hash_attrs) {

                              var obj = nil, self = TMP_19._s || this, _a, _b;
                              if (hash_attrs == null) hash_attrs = nil;

                              obj = hash_attrs['$[]']("object");
                              if ((_a = (_b = map_objs['$has_key?'](obj), (_b === nil || _b === false))) !== false && _a !== nil) {
                                list_objs['$<<'](hash_attrs);
                                return map_objs['$[]='](obj, 1);
                                } else {
                                return nil
                              };
                            }, TMP_19._s = self, TMP_19))
                            } else {
                            and_res = [];
                            res.$each((TMP_20 = function(hash_attrs) {

                              var obj = nil, self = TMP_20._s || this, _a;
                              if (hash_attrs == null) hash_attrs = nil;

                              obj = hash_attrs['$[]']("object");
                              if ((_a = map_objs['$has_key?'](obj)) !== false && _a !== nil) {
                                return and_res['$<<'](hash_attrs)
                                } else {
                                return nil
                              };
                            }, TMP_20._s = self, TMP_20));
                            return list_objs = and_res;
                          }
                        };
                      }, TMP_17._s = this, TMP_17));
                      return list_objs;
                    };
                    def.$find_bycondhash = function(args, block) {
                      var condition_hash = undefined, select_arr = undefined, limit = undefined, offset = undefined, order_dir = undefined, ret_list = nil, op = nil, n_src_id = nil, order_attr = undefined, attribs = nil, order_attr_arr = nil, db = nil, list_objs = nil, n_count = nil, _a, TMP_21, _b;if (typeof(block) !== 'function') { block = nil }
                      condition_hash = {};
                      select_arr = undefined;
                      limit = undefined;
                      offset = 0;
                      order_dir = "";
                      ret_list = [];
                      op = "AND";
                      n_src_id = this.$get_source_id().$to_i();

                      var what = args[0];
                      var options = args[1];

                      if (options !== undefined) {
                        if (options['conditions'] !== undefined) {
                            condition_hash = options['conditions']
                        };
                        if (options['per_page'] !== undefined) {
                            limit = options['per_page'].$to_i();
                            offset = (options['offset'] === undefined) ? 0 : options['offset'].$to_i();
                        };
                        if (options['select'] !== undefined) {
                            select_arr = options['select'];
                        };
                        order_dir = options['orderdir'];
                        order_attr = options['order'];
                        if (options['op'] !== undefined) {
                            op = options['op'].$upcase()
                        };
                      };
                      if (what === 'first') {
                        limit = 1;
                        if (offset === undefined) {
                            offset = 0;
                        }
                      }
                      attribs = nil;
                      if (select_arr !== undefined) {
                        attribs = select_arr;
                        if (order_attr !== undefined) {
                          order_attr_arr = [];
                          if ((_a = order_attr['$is_a?'](__scope.Array)) !== false && _a !== nil) {
                              order_attr_arr = order_attr;
                          } else {
                              order_attr_arr.$push(order_attr);
                          };
                          attribs = attribs['$|'](order_attr_arr);
                        };
                      };
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      db.$lock_db();
                      try {
        list_objs = [];
                      if (condition_hash instanceof Array) {
                        list_objs = this.$find_objects_ex(condition_hash, op, limit, offset, order_attr, block.$to_proc())
                      } else {
                        list_objs = this.$find_objects(condition_hash, op, limit, offset, order_attr, block.$to_proc())
                      };
                      n_count = 0;
                      if (what === 'count') {
                        n_count = list_objs.$length()
                      } else {
                        list_objs.$each((TMP_21 = function(obj) {

                          var values = nil, list_attrs = nil, new_obj = nil, self = TMP_21._s || this, TMP_22, _a, _b, _c;
                          if (obj == null) obj = nil;

                          list_attrs = db.$execute_sql(
                              'SELECT attrib,value FROM object_values WHERE object=? AND source_id=?',
                              [obj['$[]']("object"), self.$get_source_id()]
                          );
                          new_obj = self.$new(__hash2({"object": "" + (obj['$[]']("object"))}));
                          list_attrs.$each((TMP_22 = function(attr_val_hash) {

                            var attr_name = nil, attr_val = nil, self = TMP_22._s || this, _a, _b, _c;
                            if (attr_val_hash == null) attr_val_hash = nil;

                            attr_name = attr_val_hash['$[]']("attrib");
                            attr_val = attr_val_hash['$[]']("value");
                            if ((_a = ((_b = attribs !== false && attribs !== nil) ? (_c = attribs['$==']("*"), (_c === nil || _c === false)) : _b)) !== false && _a !== nil) {
                              if ((_a = attribs['$include?'](attr_name)) === false || _a === nil) {
                                return nil;
                              }
                            };
                            if (attr_val !== false && attr_val !== nil) {
                              return new_obj.$vars()['$[]='](attr_name.$to_sym(), attr_val)
                              } else {
                              return nil
                            };
                          }, TMP_22._s = self, TMP_22));
                          ret_list['$<<'](new_obj);

                          if (order_attr === undefined && limit !== undefined && ret_list.length >= limit) {
                              return (__breaker.$v = nil, __breaker);
                          }
                          return nil;

                        }, TMP_21._s = this, TMP_21))
                      };}
                      finally {
                      db.$unlock_db()};
                      this.$order_array(ret_list, order_attr, order_dir, block.$to_proc());
                      if ((block !== nil || order_attr !== undefined) && limit !== undefined) {
                          ret_list = ret_list.$slice(offset, limit);
                      }
                      if (what === 'count') {
                        return n_count
                      };
                      if (what === 'first') {
                        return (function() { if (ret_list.$length()['$>'](0)) {
                          return ret_list['$[]'](0)
                          } else {
                          return nil
                        }; return nil; }).call(this)
                      };
                      return ret_list;
                    };
                    def.$order_array = function(ret_list, order_attr, order_dir, block) {
                      var TMP_23, TMP_25;if (typeof(block) !== 'function') { block = nil }
                      if (order_attr !== undefined) {
                        return ret_list['$sort!']((TMP_23 = function(x, y) {

                          var res = nil, vx = nil, vy = nil, self = TMP_23._s || this, _a, TMP_24, _b;
                          if (x == null) x = nil;
        if (y == null) y = nil;

                          res = 0;
                          if ((_a = order_attr['$is_a?'](__scope.Array)) !== false && _a !== nil) {
                            order_attr.$each_index((TMP_24 = function(i) {

                              var vx = nil, vy = nil, dir = nil, self = TMP_24._s || this, _a, _b;
                              if (i == null) i = nil;

                              vx = x.$vars()['$[]'](order_attr['$[]'](i).$to_sym());
                              vy = y.$vars()['$[]'](order_attr['$[]'](i).$to_sym());
                              res = ((vx !== false && vx !== nil) && (vy !== false && vy !== nil)) ? vx['$<=>'](vy) : 0;
                              dir = "ASC";
                              if ((_a = (_b = (order_dir !== undefined && order_dir['$is_a?'](__scope.Array)), _b ? i['$<'](order_dir.$length()) : _b)) !== false && _a !== nil) {
                                dir = order_dir['$[]'](i).$upcase()
                                } else {
                                if (order_dir !== undefined && order_dir['$is_a?'](__scope.String)) {
                                  dir = order_dir.$upcase()
                                }
                              };
                              if ((_a = ((_b = dir !== false && dir !== nil) ? dir['$==']("DESC") : _b)) !== false && _a !== nil) {
                                res = res['$*'](-1)
                              };
                              if ((_a = (_b = res['$=='](0), (_b === nil || _b === false))) !== false && _a !== nil) {
                                return (__breaker.$v = nil, __breaker)
                                } else {
                                return nil
                              };
                            }, TMP_24._s = self, TMP_24))
                            } else {
                            vx = x.$vars()['$[]'](order_attr.$to_sym());
                            vy = y.$vars()['$[]'](order_attr.$to_sym());
                            res = ((vx !== false && vx !== nil) && (vy !== false && vy !== nil)) ? vx['$<=>'](vy) : 0;
                            if (order_dir !== undefined && order_dir.$upcase()['$==']("DESC")) {
                                res = res['$*'](-1);
                            };
                          };
                          return res;
                        }, TMP_23._s = this, TMP_23))
                        } else {
                        if ((block !== nil)) {
                          return ret_list['$sort!']((TMP_25 = function(x, y) {

                            var res = nil, self = TMP_25._s || this, _a, _b;
                            if (x == null) x = nil;
        if (y == null) y = nil;

                            res = (((_a = __yield(x, y)) === __breaker) ? __breaker.$v : _a);
                            if (order_dir !== undefined && order_dir.$upcase()['$==']("DESC")) {
                              res = res['$*'](-1)
                            };
                            return res;
                          }, TMP_25._s = this, TMP_25))
                          } else {
                          return nil
                        }
                      };
                    };
                    def.$make_sql_order = function(params) {
                      var order_attr = nil, order_dir = nil, res = nil, _a, _b, TMP_26;
                      order_attr = params['$[]']("order");
                      order_dir = params['$[]']("orderdir");
                      res = "";
                      if ((_a = ((_b = order_attr !== false && order_attr !== nil) ? order_attr['$is_a?'](__scope.Array) : _b)) !== false && _a !== nil) {
                        order_attr.$each_index((TMP_26 = function(i) {

                          var self = TMP_26._s || this, _a, _b;
                          if (i == null) i = nil;

                          if (i['$>'](0)) {
                            res = res['$+'](",")
                          };
                          res = res['$+']("\"" + (order_attr['$[]'](i)) + "\" ");
                          if ((_a = (_b = ((_b = order_dir !== false && order_dir !== nil) ? order_dir['$is_a?'](__scope.Array) : _b), _b !== false && _b !== nil ? i['$<'](order_dir.$length()) : _b)) !== false && _a !== nil) {
                            return res = res['$+'](order_dir['$[]'](i).$upcase())
                            } else {
                            return res = res['$+']((function() { if ((_a = ((_b = order_dir !== false && order_dir !== nil) ? order_dir['$is_a?'](__scope.String) : _b)) !== false && _a !== nil) {
                              return order_dir.$upcase()
                              } else {
                              return "ASC"
                            }; return nil; }).call(self))
                          };
                        }, TMP_26._s = this, TMP_26))
                        } else {
                        res = ("\"" + (order_attr) + "\" ")['$+']((function() { if (order_dir !== false && order_dir !== nil) {
                          return order_dir.$upcase()
                          } else {
                          return ""
                        }; return nil; }).call(this))
                      };
                      return res;
                    };
                    def.$find = function(args, block) {
                      var ret_list = nil, where_cond = nil, limit = undefined, offset = undefined, select_arr = undefined, condition_str = nil, order_dir = undefined, n_src_id = nil, order_attr = undefined, str_limit = nil, attribs = nil, order_manually = nil, sql = nil, list = nil, db = nil, objects = nil, values = nil, new_item = nil, vals = nil, sql_cond = nil, _a, _b, _c, _d, TMP_27, TMP_29, TMP_30, TMP_31, block;args = __slice.call(arguments, 0);
                      if (typeof(args[args.length - 1]) === 'function') { block = args.pop(); } else { block = nil; }
                      
                      if ((_a = ((_b = args['$[]'](0)['$nil?']()), _b !== false && _b !== nil ? _b : args.$length()['$=='](0))) !== false && _a !== nil) {
                        ((this.$raise())._scope.Rhom)._scope.RecordNotFound
                      };
                      ret_list = [];
                      where_cond = nil;
                      limit = undefined;
                      offset = undefined;

                      var what = args['$[]'](0);
                      var options = args['$[]'](1);

                      if (what === 'all' || what === 'first' || what === 'count') {
                        if ((_a = (_b = this.$is_schema_source(), (_b === nil || _b === false))) !== false && _a !== nil) {
                          if (options !== undefined && options['conditions'] !== undefined) {
                              if (options['conditions'] instanceof Object) {
                                return this.$find_bycondhash(args, block.$to_proc())
                              }
                              if ((options['conditions'] instanceof Array) && options['op'] !== undefined) {
                                return this.$find_bycondhash(args, block.$to_proc())
                              }
                          }
                          where_cond = __hash2({"source_id": this.$get_source_id()});
                        }
                        } else {
                        if ((_a = args.$first()['$is_a?'](__scope.String)) !== false && _a !== nil) {
                          if ((_a = (_b = this.$is_schema_source(), (_b === nil || _b === false))) !== false && _a !== nil) {
                            where_cond = __hash2({"object": this.$strip_braces(args.$first().$to_s()), "source_id": this.$get_source_id()})
                            } else {
                            where_cond = __hash2({"object": this.$strip_braces(args.$first().$to_s())})
                          };
                          limit = 1;
                          offset = 0;
                        }
                      };
                      if ((_a = ((_b = args.$first()['$==']("count")) ? (_c = args['$[]'](1), (_c === nil || _c === false)) : _b)) !== false && _a !== nil) {
                        return this.$count()
                      };
                      select_arr = undefined;
                      condition_str = nil;
                      order_dir = "";
                      n_src_id = this.$get_source_id().$to_i();
                      if (options !== undefined) {
                          if (options['conditions'] !== undefined) {
                              condition_str = this.$convertSqlConditionToStr(options['conditions'], options['op']);
                          };
                          if (options['per_page'] !== undefined) {
                              limit = options['per_page'].$to_i();
                              offset = (options['offset'] === undefined) ? 0 : options['offset'].$to_i();
                          };
                          if (options['select'] !== undefined) {
                              select_arr = options['select'];
                          };
                          order_dir = options['orderdir'];
                          order_attr = options['order'];
                      };
                      if (args.$first()['$==']("first")) {
                        limit = 1;
                        if (offset === undefined) {
                            offset = 0;
                        }
                      }
                      str_limit = nil;
                      if ((_a = (_b = (block !== nil), (_b === nil || _b === false))) !== false && _a !== nil) {
                          if (limit !== undefined && offset !== undefined) {
                              str_limit = " LIMIT "['$+'](limit.$to_s())['$+'](" OFFSET ")['$+'](offset.$to_s());
                          }
                      };
                      if (select_arr !== undefined) {
                        attribs = select_arr
                      } else {
                        attribs = "*"
                      };
                      order_manually = false;
                      if ((_a = ((_b = attribs !== false && attribs !== nil) ? attribs.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                        sql = "";
                        list = [];
                        db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                        if ((_a = (_b = this.$is_schema_source(), (_b === nil || _b === false))) !== false && _a !== nil) {
                          objects = nil;
                          if ((_a = (_b = condition_str, (_b === nil || _b === false))) !== false && _a !== nil) {
                            values = [];
                            if ((_a = (_b = args.$first()['$is_a?'](__scope.String), _b !== false && _b !== nil ? (_b = ((_c = ((_d = args.$first()['$==']("all")), _d !== false && _d !== nil ? _d : args.$first()['$==']("first"))), _c !== false && _c !== nil ? _c : args.$first()['$==']("count")), (_b === nil || _b === false)) : _b)) !== false && _a !== nil) {
                              objects = [__hash2({"object": this.$strip_braces(args.$first().$to_s())})]
                            } else {
                              if (block === nil && order_attr !== undefined && typeof order_attr == 'string') {
                                if ((_a = (_b = args['$[]'](1)['$[]']("dont_ignore_missed_attribs"), (_b === nil || _b === false))) !== false && _a !== nil) {
                                  sql += "SELECT object FROM object_values WHERE source_id=? ";
                                  sql += " AND attrib=? ORDER BY \"value\" " + ((order_dir !== undefined) ? order_dir : '');
                                  values['$<<'](n_src_id);
                                  values['$<<'](order_attr);
                                }
                              } else {
                                if ((_a = (_b = (_b = ((_b = attribs !== false && attribs !== nil) ? (_c = attribs['$==']("*"), (_c === nil || _c === false)) : _b), _b !== false && _b !== nil ? (_b = attribs.$length()['$=='](0), (_b === nil || _b === false)) : _b), _b !== false && _b !== nil ? (_b = args['$[]'](1)['$[]']("dont_ignore_missed_attribs"), (_b === nil || _b === false)) : _b)) !== false && _a !== nil) {
                                  sql += ("SELECT object FROM object_values WHERE attrib=? AND source_id=?");
                                  values['$<<'](attribs['$[]'](0));
                                  values['$<<'](n_src_id);
                                  } else {
                                  if (limit === 1 && offset === 0) {
                                    sql = "SELECT object FROM object_values WHERE source_id=?";
                                    values['$<<'](n_src_id);
                                  } else {
                                    if (str_limit !== false && str_limit !== nil) {
                                      sql = "SELECT distinct(object) FROM object_values WHERE source_id=?";
                                      values['$<<'](n_src_id);
                                    }
                                  }
                                };
                                order_manually = order_attr !== undefined;
                              };
                              if (sql.$length()['$>'](0)) {
                                if (str_limit !== false && str_limit !== nil) {
                                  sql += (str_limit)
                                };
                                objects = db.$execute_sql(sql, values);
                              };
                            };
                            if (objects !== false && objects !== nil) {
                              objects.$each((TMP_27 = function(object) {

                                var object_id = nil, sql2 = nil, values2 = nil, item_attribs = nil, new_item = nil, self = TMP_27._s || this, _a, _b, TMP_28;
                                if (object == null) object = nil;

                                object_id = object['$[]']("object");
                                sql2 = "SELECT attrib,value FROM object_values WHERE object=? AND source_id=?";
                                values2 = [];
                                values2['$<<'](object_id);
                                values2['$<<'](n_src_id);
                                item_attribs = db.$execute_sql(sql2, values2);
                                if ((_a = ((_b = item_attribs !== false && item_attribs !== nil) ? item_attribs.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                                  new_item = __hash2({"object": object_id});
                                  item_attribs.$each((TMP_28 = function(item) {

                                    var self = TMP_28._s || this, _a, _b, _c;
                                    if (item == null) item = nil;

                                    if ((_a = ((_b = attribs !== false && attribs !== nil) ? (_c = attribs['$==']("*"), (_c === nil || _c === false)) : _b)) !== false && _a !== nil) {
                                      if ((_a = attribs['$include?'](item['$[]']("attrib"))) === false || _a === nil) {
                                        return nil;
                                      }
                                    };
                                    return new_item['$[]='](item['$[]']("attrib"), item['$[]']("value"));
                                  }, TMP_28._s = self, TMP_28));
                                  return list['$<<'](new_item);
                                  } else {
                                  return nil
                                };
                              }, TMP_27._s = this, TMP_27))
                            };
                          };
                          if ((_a = objects['$nil?']()) !== false && _a !== nil) {
                            if ((condition_str === nil || condition_str === false) && (options === undefined || options['dont_ignore_missed_attribs'] === undefined)) {
                              sql = "SELECT object, attrib, value FROM object_values WHERE source_id=? order by object";
                              values = [n_src_id];
                              objects = db.$execute_sql(sql, values);
                              new_item = nil;
                              objects.$each((TMP_29 = function(item) {

                                var self = TMP_29._s || this, _a, _b, _c;
                                if (item == null) item = nil;

                                if ((_a = ((_b = (_c = new_item, (_c === nil || _c === false))), _b !== false && _b !== nil ? _b : (_c = new_item['$[]']("object")['$=='](item['$[]']("object")), (_c === nil || _c === false)))) !== false && _a !== nil) {
                                  if (new_item !== false && new_item !== nil) {
                                    list['$<<'](new_item)
                                  };
                                  new_item = __hash2({"object": item['$[]']("object")});
                                };
                                if ((_a = item['$[]']("value")) !== false && _a !== nil) {
                                  return new_item['$[]='](item['$[]']("attrib"), item['$[]']("value"))
                                  } else {
                                  return nil
                                };
                              }, TMP_29._s = this, TMP_29));
                              if (new_item !== false && new_item !== nil) {
                                list['$<<'](new_item)
                              };
                              order_manually = order_attr !== undefined;
                            } else {
                              if (attribs['$==']("*")) {
                                this.$raise(__scope.ArgumentError, "Use Rhom advanced find syntax or specify :select parameter when use sql queries!")
                              };
                              if ((_a = ((_b = attribs !== false && attribs !== nil) ? attribs.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                                if (condition_str !== false && condition_str !== nil) {
                                  sql += ("SELECT * FROM (\n")
                                };
                                sql += ("SELECT object, \n");
                                attribs.$each((TMP_30 = function(attrib) {

                                  var self = TMP_30._s || this, _a, _b, _c;
                                  if (attrib == null) attrib = nil;

                                  if ((_a = ((_b = ((_c = attrib['$nil?']()), _c !== false && _c !== nil ? _c : attrib.$length()['$=='](0))), _b !== false && _b !== nil ? _b : (__opal.Object._scope.Rhom)._scope.RhomObject['$method_name_reserved?'](attrib))) !== false && _a !== nil) {
                                    return nil
                                    } else {
                                    return sql += ("MAX(CASE WHEN attrib = '" + (attrib) + "' THEN value ELSE NULL END) AS '" + (attrib) + "',\n")
                                  }
                                }, TMP_30._s = this, TMP_30));
                                sql['$chomp!']();
                                sql['$chop!']();
                                sql += (" FROM object_values ov \n");
                                if ((_a = ((_b = where_cond !== false && where_cond !== nil) ? where_cond.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                                  sql += ("where "['$+']((__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$where_str(where_cond))['$+']("\n"))
                                };
                                sql += ("group by object\n");
                                if (block === nil && order_attr !== undefined) {
                                    sql += ("order by "['$+'](this.$make_sql_order(args['$[]'](1))))
                                }
                                if (condition_str !== false && condition_str !== nil) {
                                  sql += (") WHERE "['$+'](condition_str))
                                };
                                if (str_limit !== false && str_limit !== nil) {
                                  sql += (str_limit)
                                };
                                list = db.$execute_sql(sql, []);
                              };
                            }
                          };
                          } else {
                          if ((_a = attribs['$is_a?'](__scope.Array)) !== false && _a !== nil) {
                            attribs = attribs.$join(",")
                          };
                          sql += ("SELECT " + (attribs) + " FROM " + (this.$get_schema_table_name()));
                          vals = [];
                          if ((_a = ((_b = where_cond !== false && where_cond !== nil) ? where_cond.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                            sql += (" WHERE "['$+']((__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$where_str(where_cond)))
                            } else {
                            if (condition_str !== false && condition_str !== nil) {
                              sql += (" WHERE "['$+'](condition_str))
                              } else {
                              if ((_a = (_b = args['$[]'](1), _b !== false && _b !== nil ? args['$[]'](1)['$[]']("conditions") : _b)) !== false && _a !== nil) {
                                sql_cond = "";
                                this.$convertConditionToStatement(args['$[]'](1)['$[]']("conditions"), args['$[]'](1)['$[]']("op"), sql_cond, vals);
                                if (sql_cond.$length()['$>'](0)) {
                                  sql += (" WHERE "['$+'](sql_cond))
                                };
                              }
                            }
                          };
                          if (block === nil && order_attr !== undefined) {
                              sql += " order by "['$+'](this.$make_sql_order(args['$[]'](1)));
                          }
                          if (str_limit !== false && str_limit !== nil) {
                            sql += (str_limit)
                          };
                          list = db.$execute_sql(sql, vals);
                        };
                        if ((_a = (_b = args.$first()['$==']("count"), (_b === nil || _b === false))) !== false && _a !== nil) {
                          list.$each((TMP_31 = function(rowhash) {

                            var new_obj = nil, self = TMP_31._s || this, TMP_32;
                            if (rowhash == null) rowhash = nil;

                            new_obj = self.$new(__hash2({"object": "" + (rowhash['$[]']("object"))}));
                            rowhash.$each((TMP_32 = function(attr_name, attr_val) {

                              var self = TMP_32._s || this;
                              if (attr_name == null) attr_name = nil;
        if (attr_val == null) attr_val = nil;

                              if (attr_val !== false && attr_val !== nil) {
                                return new_obj.$vars()['$merge!'](__hash(attr_name.$to_sym(), attr_val))
                                } else {
                                return nil
                              }
                            }, TMP_32._s = self, TMP_32));
                            return ret_list['$<<'](new_obj);
                          }, TMP_31._s = this, TMP_31))
                        };
                        } else {
                        this.$puts("Processing rhom objects end, no attributes found.")
                      };
                      if ((_a = ((_b = (block !== nil)), _b !== false && _b !== nil ? _b : order_manually)) !== false && _a !== nil) {
                        this.$order_array(ret_list, order_attr, order_dir, block.$to_proc());
                        if (limit !== undefined) {
                          ret_list = ret_list.$slice(offset, limit)
                        };
                      };
                      if (args.$first()['$==']("count")) {
                        return list.$length()
                      };
                      if (args.$first()['$==']("all")) {
                          return ret_list;
                      }
                      if ((_a = ((_b = args.$first()['$==']("first")), _b !== false && _b !== nil ? _b : args.$first()['$is_a?'](__scope.String))) !== false && _a !== nil) {
                        return (function() { if (ret_list.$length()['$>'](0)) {
                          return ret_list['$[]'](0)
                          } else {
                          return nil
                        }; return nil; }).call(this)
                      };
                      return ret_list;
                    };
                    def.$find_by_sql = function(sql_query) {
                      var db = nil, list = nil, ret_list = nil, _a, _b, TMP_33;
                      if ((_a = (_b = this.$is_schema_source(), (_b === nil || _b === false))) !== false && _a !== nil) {
                        this.$raise(__scope.ArgumentError, "find_by_sql only works with FixedSchema models")
                      };
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      list = db.$execute_sql(sql_query, []);
                      ret_list = [];
                      list.$each((TMP_33 = function(rowhash) {

                        var new_obj = nil, self = TMP_33._s || this, TMP_34;
                        if (rowhash == null) rowhash = nil;

                        new_obj = self.$new(__hash2({"object": "" + (rowhash['$[]']("object"))}));
                        rowhash.$each((TMP_34 = function(attr_name, attr_val) {

                          var self = TMP_34._s || this;
                          if (attr_name == null) attr_name = nil;
        if (attr_val == null) attr_val = nil;

                          if (attr_val !== false && attr_val !== nil) {
                            return new_obj.$vars()['$merge!'](__hash(attr_name.$to_sym(), attr_val))
                            } else {
                            return nil
                          }
                        }, TMP_34._s = self, TMP_34));
                        return ret_list['$<<'](new_obj);
                      }, TMP_33._s = this, TMP_33));
                      return ret_list;
                    };
                    def.$search = function(args) {
                      var _a;
                      if ((_a = true) !== false && _a !== nil) {
                        args['$[]=']("source_names", [this.$name().$to_s()]);
                        return __scope.SyncEngine.$search(args);
                        } else {
                        return nil
                      };
                    };
                    def.$sync = function(callback, show_status_popup, query_params) {
                      // if defined?(RHOCONNECT_CLIENT_PRESENT)
                      if (typeof RRho !== 'undefined' && typeof RRho.RhoConnectClient !== 'undefined') {
                          if (callback !== undefined) {
                              RRho.RhoConnectClient.setNotification(this.$get_source_name(), callback);
                          }
                          return RRho.RhoConnectClient.doSyncSource(
                              this.$get_source_id().$to_i(),
                              (show_status_popup === undefined) || show_status_popup,
                              (query_params === undefined) ? '' :  query_params
                          );
                      }
                    };
                    def.$find_all = function(args) {
                      if (args == null) {
                        args = nil
                      }
                      return this.$find("all", args);
                    };
                    def.$paginate = function(args) {
                      if (args == null) {
                        args = nil
                      }
                      'FIXME(op_asgn1)';
                      'FIXME(op_asgn1)';
                      args['$[]=']("offset", args['$[]']("page")['$*'](args['$[]']("per_page")));
                      return this.$find("all", args);
                    };
                    def.$set_notification = function(url, params) {
                      var _a;
                      if ((_a = true) !== false && _a !== nil) {
                        return __scope.SyncEngine.$set_notification(this.$get_source_id().$to_i(), url, params)
                        } else {
                        return nil
                      };
                    };
                    def.$clear_notification = function() {
                      var _a;
                      if ((_a = true) !== false && _a !== nil) {
                        return __scope.SyncEngine.$clear_notification(this.$get_source_id().$to_i())
                        } else {
                        return nil
                      };
                    };
                    def.$is_blob_attrib = function(db_partition, n_src_id, attrib_name) {
                      
                      return RRho.Database.SQLite3.isBlobAttr(db_partition, n_src_id.$to_i(), attrib_name);
                    };
                    def.$on_sync_delete_error = function(objects, action) {
                      var n_src_id = nil, db_partition = nil, db = nil, e = nil, _a, TMP_35;
                      if ((_a = true) !== false && _a !== nil) {
                        if ((_a = action['$==']("retry")) === false || _a === nil) {
                          this.$raise(__scope.ArgumentError, "on_sync_delete_error action should be :retry")
                        }
                        if (!this.$is_sync_source()) {
                            return nil;
                        }
                        n_src_id = this.$get_source_id();
                        var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_source_name());
                        db_partition = source['partition'];
                        db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                        db.$start_transaction();
                        return (function() { try {
                          objects.$each((TMP_35 = function(obj, values) {

                            var self = TMP_35._s || this, TMP_36;
                            if (obj == null) obj = nil;
        if (values == null) values = nil;

                            return values['$[]']("attributes").$each((TMP_36 = function(attrib, value) {

                              var res_update_type = nil, attrib_type = nil, self = TMP_36._s || this, _a, _b;
                              if (attrib == null) attrib = nil;
        if (value == null) value = nil;

                              res_update_type = db.$select_from_table("changed_values", "update_type", __hash2({"object": obj, "source_id": n_src_id, "attrib": attrib, "sent": 0}));
                              if ((_a = ((_b = res_update_type !== false && res_update_type !== nil) ? res_update_type.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                                return nil;
                              };
                              attrib_type = (function() { if ((_a = self.$is_blob_attrib(db_partition, n_src_id, attrib)) !== false && _a !== nil) {
                                return "blob.file"
                                } else {
                                return ""
                              }; return nil; }).call(self);
                              return db.$insert_into_table("changed_values", __hash2({"source_id": n_src_id, "object": obj, "attrib": attrib, "value": value, "update_type": "delete", "attrib_type": attrib_type}));
                            }, TMP_36._s = self, TMP_36))
                          }, TMP_35._s = this, TMP_35));
                          db.$commit();
                        } catch ($err) {
                        if (__scope.Exception['$===']($err)) {
                          e = $err;this.$puts("on_sync_delete_error Exception: "['$+'](e.$inspect()));
                          db.$rollback();
                          this.$raise();}
                        else { throw $err; }
                        } }).call(this);
                        } else {
                        return nil
                      };
                    };
                    def.$on_sync_update_error = function(objects, action, rollback_data) {
                      var n_src_id = nil, db_partition = nil, table_name = nil, db = nil, e = nil, _a, _b, TMP_37, TMP_39;if (rollback_data == null) {
                        rollback_data = nil
                      }
                      if ((_a = true) !== false && _a !== nil) {
                        if ((_a = ((_b = action['$==']("retry")), _b !== false && _b !== nil ? _b : action['$==']("rollback"))) === false || _a === nil) {
                          this.$raise(__scope.ArgumentError, "on_sync_update_error action should be :retry or :rollback")
                        };
                        if ((_a = this.$is_sync_source()) === false || _a === nil) {
                          return nil
                        };
                        n_src_id = this.$get_source_id();
                        var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_source_name());
                        db_partition = source['partition'];
                        table_name = (function() { if ((_a = this.$is_schema_source()) !== false && _a !== nil) {
                          return this.$get_schema_table_name()
                          } else {
                          return "object_values"
                        }; return nil; }).call(this);
                        db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                        db.$start_transaction();
                        return (function() { try {
                          (function() { if (action['$==']("rollback")) {
                            if ((_a = rollback_data) === false || _a === nil) {
                              this.$raise(__scope.ArgumentError, "on_sync_update_error with :rollback action should provide update-rollback parameter")
                            };
                            return rollback_data.$each((TMP_37 = function(obj, values) {

                              var self = TMP_37._s || this, TMP_38;
                              if (obj == null) obj = nil;
        if (values == null) values = nil;

                              return values['$[]']("attributes").$each((TMP_38 = function(attrib, value) {

                                var self = TMP_38._s || this;
                                if (attrib == null) attrib = nil;
        if (value == null) value = nil;

                                return self.$_insert_or_update_attr(db, self.$is_schema_source(), table_name, n_src_id, obj, attrib, value)
                              }, TMP_38._s = self, TMP_38))
                            }, TMP_37._s = this, TMP_37));
                            } else {
                            return objects.$each((TMP_39 = function(obj, values) {

                              var self = TMP_39._s || this, TMP_40;
                              if (obj == null) obj = nil;
        if (values == null) values = nil;

                              return values['$[]']("attributes").$each((TMP_40 = function(attrib, value) {

                                var res_update_type = nil, attrib_type = nil, self = TMP_40._s || this, _a, _b;
                                if (attrib == null) attrib = nil;
        if (value == null) value = nil;

                                res_update_type = db.$select_from_table("changed_values", "update_type", __hash2({"object": obj, "source_id": n_src_id, "attrib": attrib, "sent": 0}));
                                if ((_a = ((_b = res_update_type !== false && res_update_type !== nil) ? res_update_type.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                                  return nil;
                                };
                                attrib_type = (function() { if ((_a = self.$is_blob_attrib(db_partition, n_src_id, attrib)) !== false && _a !== nil) {
                                  return "blob.file"
                                  } else {
                                  return ""
                                }; return nil; }).call(self);
                                return db.$insert_into_table("changed_values", __hash2({"source_id": n_src_id, "object": obj, "attrib": attrib, "value": value, "update_type": "update", "attrib_type": attrib_type}));
                              }, TMP_40._s = self, TMP_40))
                            }, TMP_39._s = this, TMP_39))
                          }; return nil; }).call(this);
                          db.$commit();
                        } catch ($err) {
                        if (__scope.Exception['$===']($err)) {
                          e = $err;this.$puts("on_sync_update_error Exception: "['$+'](e.$inspect()));
                          db.$rollback();
                          this.$raise();}
                        else { throw $err; }
                        } }).call(this);
                        } else {
                        return nil
                      };
                    };
                    def.$push_changes = function() {
                      var n_src_id = nil, db = nil, _a;
                      if ((_a = this.$is_sync_source()) === false || _a === nil) {
                        return nil
                      };
                      n_src_id = this.$get_source_id();
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      return db.$insert_into_table("changed_values", __hash2({"update_type": "push_changes", "source_id": n_src_id}));
                    };
                    def.$on_sync_create_error = function(objects, action) {
                      var ar_objs = nil, table_name = nil, n_src_id = nil, db = nil, e = nil, _a, _b, TMP_41;
                      if ((_a = true) !== false && _a !== nil) {
                        if ((_a = ((_b = action['$==']("delete")), _b !== false && _b !== nil ? _b : action['$==']("recreate"))) === false || _a === nil) {
                          this.$raise(__scope.ArgumentError, "on_sync_create_error action should be :delete or :recreate")
                        };
                        if ((_a = this.$is_sync_source()) === false || _a === nil) {
                          return nil
                        };
                        ar_objs = objects;
                        if ((_a = objects['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                          ar_objs = objects.$keys()
                          } else {
                          if ((_a = (_b = objects['$is_a?'](__scope.Array), (_b === nil || _b === false))) !== false && _a !== nil) {
                            ar_objs = [objects]
                          }
                        };
                        this.$puts("ar_objs : " + (ar_objs));
                        table_name = (function() { if ((_a = this.$is_schema_source()) !== false && _a !== nil) {
                          return this.$get_schema_table_name()
                          } else {
                          return "object_values"
                        }; return nil; }).call(this);
                        n_src_id = this.$get_source_id();
                        db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                        db.$start_transaction();
                        return (function() { try {
                          ar_objs.$each((TMP_41 = function(obj) {

                            var deletes = nil, self = TMP_41._s || this, _a, _b;
                            if (obj == null) obj = nil;

                            if (action['$==']("recreate")) {
                              deletes = db.$select_from_table("changed_values", "object", __hash2({"update_type": "delete", "object": obj, "source_id": n_src_id}));
                              if ((_a = ((_b = deletes !== false && deletes !== nil) ? deletes.$length()['$>'](0) : _b)) === false || _a === nil) {
                                db.$delete_from_table("changed_values", __hash2({"object": obj, "source_id": n_src_id}));
                                db.$insert_into_table("changed_values", __hash2({"update_type": "create", "attrib": "object", "source_id": n_src_id, "object": obj}));
                                return nil;;
                              };
                            };
                            db.$delete_from_table("changed_values", __hash2({"object": obj, "source_id": n_src_id}));
                            if ((_a = self.$is_schema_source()) !== false && _a !== nil) {
                              return db.$delete_from_table(table_name, __hash2({"object": obj}))
                              } else {
                              return db.$delete_from_table(table_name, __hash2({"object": obj, "source_id": n_src_id}))
                            };
                          }, TMP_41._s = this, TMP_41));
                          db.$commit();
                        } catch ($err) {
                        if (__scope.Exception['$===']($err)) {
                          e = $err;this.$puts("on_create_error Exception: "['$+'](e.$inspect()));
                          db.$rollback();
                          this.$raise();}
                        else { throw $err; }
                        } }).call(this);
                        } else {
                        return nil
                      };
                    };
                    def.$delete_all = function(args) {
                      var db = nil, table_name = nil, op = nil, conditions = nil, vals = nil, sql_cond = nil, sql = nil, list_objs = nil, e = nil, _a, _b, TMP_42, TMP_44;args = __slice.call(arguments, 0);
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      table_name = (function() { if ((_a = this.$is_schema_source()) !== false && _a !== nil) {
                        return this.$get_schema_table_name()
                        } else {
                        return "object_values"
                      }; return nil; }).call(this);
                      op = "AND";
                      if ((_a = (_b = ((_b = args !== false && args !== nil) ? args['$[]'](0) : _b), _b !== false && _b !== nil ? args['$[]'](0)['$[]']("op") : _b)) !== false && _a !== nil) {
                        op = args['$[]'](0)['$[]']("op").$upcase()
                      };
                      if ((_a = (_b = ((_b = args !== false && args !== nil) ? args['$[]'](0) : _b), _b !== false && _b !== nil ? args['$[]'](0)['$[]']("conditions") : _b)) !== false && _a !== nil) {
                        conditions = args['$[]'](0)['$[]']("conditions")
                      };
                      return (function() { try {
                        db.$start_transaction();
                        (function() { if ((_a = this.$is_schema_source()) !== false && _a !== nil) {
                          vals = [];
                          sql_cond = "";
                          this.$convertConditionToStatement(conditions, op, sql_cond, vals);
                          if ((_a = this.$is_sync_source()) !== false && _a !== nil) {
                            sql = "SELECT object FROM " + (table_name);
                            if (sql_cond.$length()['$>'](0)) {
                              sql['$<<'](" WHERE "['$+'](sql_cond))
                            };
                            list_objs = db.$execute_sql(sql, vals);
                            return list_objs.$each((TMP_42 = function(item) {

                              var attrs_list = nil, values = nil, self = TMP_42._s || this, TMP_43;
                              if (item == null) item = nil;

                              db.$delete_from_table("changed_values", __hash2({"object": item['$[]']("object"), "source_id": self.$get_source_id(), "sent": 0}));
                              attrs_list = db.$select_from_table(table_name, "*", __hash2({"object": item['$[]']("object")}));
                              attrs_list['$[]'](0).$each((TMP_43 = function(attr_name, attr_value) {

                                var self = TMP_43._s || this;
                                if (attr_name == null) attr_name = nil;
        if (attr_value == null) attr_value = nil;

                                if (attr_name['$==']("object")) {
                                  return nil;
                                };
                                return db.$insert_into_table("changed_values", __hash2({"source_id": self.$get_source_id(), "object": item['$[]']("object"), "attrib": attr_name, "value": attr_value, "update_type": "delete"}));
                              }, TMP_43._s = self, TMP_43));
                              sql = "DELETE FROM " + (table_name) + " WHERE object=?";
                              values = [item['$[]']("object")];
                              return db.$execute_sql(sql, values);
                            }, TMP_42._s = this, TMP_42));
                            } else {
                            sql = "DELETE FROM " + (table_name);
                            if (sql_cond.$length()['$>'](0)) {
                              sql['$<<'](" WHERE "['$+'](sql_cond))
                            };
                            return db.$execute_sql(sql, vals);
                          };
                          } else {
                          list_objs = [];
                          if ((_a = (_b = conditions, (_b === nil || _b === false))) !== false && _a !== nil) {
                            if ((_a = this.$is_sync_source()) !== false && _a !== nil) {
                              list_objs = db.$execute_sql("SELECT DISTINCT(object) FROM " + (table_name) + " WHERE source_id=?", [this.$get_source_id()])
                              } else {
                              db.$delete_from_table(table_name, __hash2({"source_id": this.$get_source_id()}))
                            }
                            } else {
                            if ((_a = conditions['$is_a?'](__scope.Hash)) !== false && _a !== nil) {
                              list_objs = this.$find_objects(conditions, op, nil, 0, nil)
                              } else {
                              list_objs = this.$find_objects_ex(conditions, op, nil, 0, nil)
                            }
                          };
                          return list_objs.$each((TMP_44 = function(item) {

                            var attrs_list = nil, values = nil, self = TMP_44._s || this, _a, TMP_45;
                            if (item == null) item = nil;

                            if ((_a = self.$is_sync_source()) !== false && _a !== nil) {
                              db.$delete_from_table("changed_values", __hash2({"object": item['$[]']("object"), "source_id": self.$get_source_id(), "sent": 0}));
                              attrs_list = db.$select_from_table(table_name, "*", __hash2({"object": item['$[]']("object"), "source_id": self.$get_source_id()}));
                              attrs_list.$each((TMP_45 = function(attr_name) {

                                var self = TMP_45._s || this;
                                if (attr_name == null) attr_name = nil;

                                return db.$insert_into_table("changed_values", __hash2({"source_id": self.$get_source_id(), "object": item['$[]']("object"), "attrib": attr_name['$[]']("attrib"), "value": attr_name['$[]']("value"), "update_type": "delete"}))
                              }, TMP_45._s = self, TMP_45));
                            };
                            sql = "DELETE FROM " + (table_name) + " WHERE \n";
                            sql['$<<']("object=? AND source_id=?");
                            values = [];
                            values['$<<'](item['$[]']("object"));
                            values['$<<'](self.$get_source_id());
                            return db.$execute_sql(sql, values);
                          }, TMP_44._s = this, TMP_44));
                        }; return nil; }).call(this);
                        db.$commit();
                      } catch ($err) {
                      if (__scope.Exception['$===']($err)) {
                        e = $err;this.$puts("delete_all Exception: "['$+'](e.$inspect()));
                        db.$rollback();
                        this.$raise();}
                      else { throw $err; }
                      } }).call(this);
                    };
                    return def.$create = function(obj) {
                      var new_obj = nil;
                      new_obj = this.$new(obj);
                      new_obj.$create();
                      return new_obj;
                    };}).call(self.$singleton_class());
                    def.$can_modify = function() {
                      var db = nil, obj = nil, result = nil, _a, _b;
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_inst_source_name());
                      obj = this.$object();
                      result = db.$execute_sql("SELECT object FROM changed_values WHERE source_id=? and object=? and sent>1 LIMIT 1 OFFSET 0", [this.$get_inst_source_id().$to_i(), obj]);
                      return (_a = ((_b = result !== false && result !== nil) ? result.$length()['$>'](0) : _b), (_a === nil || _a === false));
                    };
                    self['$changed?'] = function() {
                      var db = nil, result = nil, _a;
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_source_name());
                      result = db.$execute_sql("SELECT object FROM changed_values WHERE source_id=? LIMIT 1 OFFSET 0", [this.$get_source_id().$to_i()]);
                      return ((_a = result !== false && result !== nil) ? result.$length()['$>'](0) : _a);
                    };
                    def['$changed?'] = function() {
                      var db = nil, obj = nil, result = nil, _a;
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_inst_source_name());
                      obj = this.$object();
                      result = db.$execute_sql("SELECT object FROM changed_values WHERE source_id=?  and object=? LIMIT 1 OFFSET 0", [this.$get_inst_source_id().$to_i(), obj]);
                      return ((_a = result !== false && result !== nil) ? result.$length()['$>'](0) : _a);
                    };
                    def.$destroy = function() {
                      var obj = nil, update_type = nil, db = nil, table_name = nil, attrs_list = nil, res_update_type = nil, e = nil, _a, _b, TMP_46, TMP_47;
                      obj = this.$object();
                      update_type = "delete";
                      if (obj !== false && obj !== nil) {
                        db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_inst_source_name());
                        try {
                          table_name = (this.$is_inst_schema_source()) ? this.$get_inst_schema_table_name() : "object_values";
                          db.$start_transaction();
                          attrs_list = nil;
                          if (this.$is_inst_schema_source()) {
                            attrs_list = db.$select_from_table(table_name, "*", __hash2({"object": obj}));
                            db.$delete_from_table(table_name, __hash2({"object": obj}));
                          } else {
                            attrs_list = db.$select_from_table(table_name, "*", __hash2({"object": obj, "source_id": this.$get_inst_source_id()}));
                            db.$delete_from_table(table_name, __hash2({"object": obj, "source_id": this.$get_inst_source_id()}));
                          };
                          res_update_type = (function() { if ((_a = this.$is_inst_sync_source()) !== false && _a !== nil) {
                            return db.$select_from_table("changed_values", "update_type", __hash2({"object": obj, "update_type": "create", "sent": 0}))
                            } else {
                            return nil
                          }; return nil; }).call(this);
                          if ((_a = ((_b = res_update_type !== false && res_update_type !== nil) ? res_update_type.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                            update_type = nil
                          };
                          if ((_a = this.$is_inst_sync_source()) !== false && _a !== nil) {
                            db.$delete_from_table("changed_values", __hash2({"object": obj, "source_id": this.$get_inst_source_id(), "sent": 0}))
                          };
                          if ((_a = (_b = (_b = (_b = this.$is_inst_sync_source(), _b !== false && _b !== nil ? update_type : _b), _b !== false && _b !== nil ? attrs_list : _b), _b !== false && _b !== nil ? attrs_list.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                            if (this.$is_inst_schema_source()) {
                              attrs_list['$[]'](0).$each((TMP_46 = function(attr_name, attr_value) {

                                var self = TMP_46._s || this;
                                if (attr_name == null) attr_name = nil;
        if (attr_value == null) attr_value = nil;

                                if (attr_name['$==']("object")) {
                                  return nil;
                                };
                                return db.$insert_into_table("changed_values", __hash2({"source_id": self.$get_inst_source_id(), "object": obj, "attrib": attr_name, "value": attr_value, "update_type": update_type}));
                              }, TMP_46._s = this, TMP_46))
                              } else {
                              attrs_list.$each((TMP_47 = function(attr_name) {

                                var self = TMP_47._s || this;
                                if (attr_name == null) attr_name = nil;

                                return db.$insert_into_table("changed_values", __hash2({"source_id": self.$get_inst_source_id(), "object": obj, "attrib": attr_name['$[]']("attrib"), "value": attr_name['$[]']("value"), "update_type": update_type}))
                              }, TMP_47._s = this, TMP_47))
                            }
                          };
                          db.$commit();
                        } catch ($err) {
                        if (__scope.Exception['$===']($err)) {
                          e = $err;this.$puts("destroy Exception: "['$+'](e.$inspect()));
                          db.$rollback();
                          this.$raise();}
                        else { throw $err; }
                        };
                      };
                      return true;
                    };
                    def.$create = function() {
                      var n_src_id = nil, obj = nil, src_name = nil, table_name = nil, is_schema_src, db = nil, e = nil, _a, TMP_48;
                      n_src_id = this.$get_inst_source_id();
                      obj = this.$object();
                      src_name = this.$get_inst_source_name();
                      table_name = (this.$is_inst_schema_source()) ? this.$get_inst_schema_table_name() : "object_values";
                      is_schema_src = this.$is_inst_schema_source();
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(src_name);
                      return (function() { try {
                        db.$start_transaction();
                        (function() { if ((_a = this.$is_inst_sync_source()) !== false && _a !== nil) {
                          return db.$insert_into_table("changed_values", __hash2({"update_type": "create", "attrib": "object", "source_id": n_src_id, "object": obj}))
                          } else {
                          return nil
                        }; return nil; }).call(this);
                        (function() {
                          if (is_schema_src) {
                              return db.$insert_into_table(table_name, this.$vars(), __hash2({"source_id": true}));
                          } else {
                          return this.$vars().$each((TMP_48 = function(key_a, value) {

                            var key = nil, val = nil, self = TMP_48._s || this, _a;
                            if (key_a == null) key_a = nil;
        if (value == null) value = nil;

                            key = key_a.$to_s();
                            if ((_a = (__opal.Object._scope.Rhom)._scope.RhomObject['$method_name_reserved?'](key)) !== false && _a !== nil) {
                              return nil;
                            };
                            val = value.$to_s();
                            return db.$insert_into_table(table_name, __hash2({"source_id": n_src_id, "object": obj, "attrib": key, "value": val}));
                          }, TMP_48._s = this, TMP_48))
                        }; return nil; }).call(this);
                        db.$commit();
                      } catch ($err) {
                      if (__scope.Exception['$===']($err)) {
                        e = $err;this.$puts("create Exception: "['$+'](e.$inspect()));
                        db.$rollback();
                        this.$raise();}
                      else { throw $err; }
                      } }).call(this);
                    };
                    def.$save = function() {
                      var obj = nil, n_src_id = nil, db = nil, db_partition = nil, table_name = nil, is_schema_src = nil, is_new_item = nil, existing_attribs = nil, e = nil, update_type = nil, ignore_changed_values = nil, res_update_type = nil, _a, _b, TMP_49;
                      obj = this.$object();
                      n_src_id = this.$get_inst_source_id();
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_inst_source_name());
                      var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_inst_source_name());
                      db_partition = source['partition'];
                      table_name = (this.$is_inst_schema_source()) ? this.$get_inst_schema_table_name() : 'object_values';
                      is_schema_src = this.$is_inst_schema_source();
                      is_new_item = false;
                      try {
                        db.$lock_db();
                        if (is_schema_src !== false && is_schema_src !== nil) {
                          existing_attribs = db.$execute_sql("SELECT object FROM " + (table_name) + " WHERE object=? LIMIT 1 OFFSET 0", [obj])
                          } else {
                          existing_attribs = db.$execute_sql("SELECT object FROM " + (table_name) + " WHERE object=? AND source_id=? LIMIT 1 OFFSET 0", [obj, n_src_id])
                        };
                        if ((_a = ((_b = existing_attribs !== false && existing_attribs !== nil) ? existing_attribs.$length()['$>'](0) : _b)) === false || _a === nil) {
                          is_new_item = true;
                          this.$create();
                        };
                        db.$unlock_db();
                      } catch ($err) {
                      if (__scope.Exception['$===']($err)) {
                        e = $err;this.$puts("save Exception: "['$+'](e.$inspect()));
                        db.$unlock_db();
                        this.$raise();}
                      else { throw $err; }
                      };
                      if (is_new_item !== false && is_new_item !== nil) {
                        return nil
                      };
                      try {
                        db.$start_transaction();
                        update_type = "update";
                        ignore_changed_values = true;
                        res_update_type = nil;
                        if ((_a = this.$is_inst_sync_source()) !== false && _a !== nil) {
                          res_update_type = db.$select_from_table("changed_values", "update_type", __hash2({"object": obj, "source_id": n_src_id, "sent": 0}));
                          if ((_a = ((_b = res_update_type !== false && res_update_type !== nil) ? res_update_type.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                            update_type = res_update_type['$[]'](0)['$[]']("update_type")
                          };
                          ignore_changed_values = update_type['$==']("create");
                        };
                        this.$vars().$each((TMP_49 = function(key_a, value) {

                          var key = nil, val = nil, fields = nil, res_value = nil, is_modified = nil, old_value = nil, self = TMP_49._s || this, _a, _b;
                          if (key_a == null) key_a = nil;
        if (value == null) value = nil;

                          key = key_a.$to_s();
                          if ((_a = (__opal.Object._scope.Rhom)._scope.RhomObject['$method_name_reserved?'](key)) !== false && _a !== nil) {
                            return nil;
                          };
                          val = value.$to_s();
                          fields = __hash2({"source_id": n_src_id, "object": obj, "attrib": key, "value": val, "update_type": update_type});
                          fields = (function() { if ((_a = self.constructor.$is_blob_attrib(db_partition, n_src_id, key)) !== false && _a !== nil) {
                            return fields['$merge!'](__hash2({"attrib_type": "blob.file"}))
                            } else {
                            return fields
                          }; return nil; }).call(self);
                          res_value = nil;
                          if (is_schema_src !== false && is_schema_src !== nil) {
                            res_value = db.$select_from_table(table_name, key, __hash2({"object": obj}))
                            } else {
                            res_value = db.$select_from_table(table_name, "value", __hash2({"object": obj, "attrib": key, "source_id": n_src_id}))
                          };
                          if ((_a = ((_b = res_value !== false && res_value !== nil) ? res_value.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                            is_modified = false;
                            old_value = (function() { if (is_schema_src !== false && is_schema_src !== nil) {
                              return res_value['$[]'](0)['$[]'](key)
                              } else {
                              return res_value['$[]'](0)['$[]']("value")
                            }; return nil; }).call(self);
                            is_modified = (_a = old_value['$=='](val), (_a === nil || _a === false));
                            if ((_a = (_b = (_b = ((_b = is_modified !== false && is_modified !== nil) ? val : _b), _b !== false && _b !== nil ? old_value['$nil?']() : _b), _b !== false && _b !== nil ? val.$to_s().$length()['$=='](0) : _b)) !== false && _a !== nil) {
                              is_modified = false
                            };
                            if ((_a = (_b = (_b = ((_b = is_modified !== false && is_modified !== nil) ? old_value : _b), _b !== false && _b !== nil ? val['$nil?']() : _b), _b !== false && _b !== nil ? old_value.$to_s().$length()['$=='](0) : _b)) !== false && _a !== nil) {
                              is_modified = false
                            };
                            if (is_modified !== false && is_modified !== nil) {
                              if ((_a = ignore_changed_values) === false || _a === nil) {
                                res_update_type = db.$select_from_table("changed_values", "update_type", __hash2({"object": obj, "attrib": key, "source_id": n_src_id, "sent": 0}));
                                if ((_a = ((_b = res_update_type !== false && res_update_type !== nil) ? res_update_type.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                                  db.$update_into_table("changed_values", __hash2({"value": val}), __hash2({"object": obj, "attrib": key, "source_id": n_src_id}))
                                  } else {
                                  db.$insert_into_table("changed_values", fields)
                                };
                              };
                              if (is_schema_src !== false && is_schema_src !== nil) {
                                return db.$update_into_table(table_name, __hash(key, val), __hash2({"object": obj}))
                                } else {
                                return db.$update_into_table(table_name, __hash2({"value": val}), __hash2({"object": obj, "attrib": key, "source_id": n_src_id}))
                              };
                              } else {
                              return nil
                            };
                            } else {
                            if ((_a = ignore_changed_values) === false || _a === nil) {
                              db.$insert_into_table("changed_values", fields)
                            };
                            fields.$delete("update_type");
                            fields.$delete("attrib_type");
                            if (is_schema_src !== false && is_schema_src !== nil) {
                              return db.$insert_into_table(table_name, __hash(key, val, "object", obj))
                              } else {
                              return db.$insert_into_table(table_name, fields)
                            };
                          };
                        }, TMP_49._s = this, TMP_49));
                        db.$commit();
                      } catch ($err) {
                      if (__scope.Exception['$===']($err)) {
                        e = $err;this.$puts("save Exception: "['$+'](e.$inspect()));
                        db.$rollback();
                        this.$raise();}
                      else { throw $err; }
                      };
                      return true;
                    };
                    self.$_insert_or_update_attr = function(db, is_schema, table_name, n_src_id, obj, attrib, new_val) {
                      var result = nil, _a, _b;
                      if (is_schema !== false && is_schema !== nil) {
                        result = db.$select_from_table(table_name, "object", __hash2({"object": obj}));
                        if ((_a = ((_b = result !== false && result !== nil) ? result.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                          return db.$update_into_table(table_name, __hash(attrib, new_val), __hash2({"object": obj}))
                          } else {
                          return db.$insert_into_table(table_name, __hash("object", obj, attrib, new_val))
                        };
                        } else {
                        result = db.$select_from_table(table_name, "source_id", __hash2({"object": obj, "attrib": attrib, "source_id": n_src_id}));
                        if ((_a = ((_b = result !== false && result !== nil) ? result.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                          return db.$update_into_table(table_name, __hash2({"value": new_val}), __hash2({"object": obj, "attrib": attrib, "source_id": n_src_id}))
                          } else {
                          return db.$insert_into_table(table_name, __hash2({"source_id": n_src_id, "object": obj, "attrib": attrib, "value": new_val}))
                        };
                      }
                    };
                    def.$update_attributes = function(attrs) {
                      var obj = nil, update_type = nil, n_src_id = nil, db = nil, db_partition = nil, table_name = nil, ignore_changed_values = nil, res_update_type = nil, e = nil, _a, _b, TMP_50;
                      this.$check_freezing_model(attrs);
                      obj = this.$object();
                      update_type = "update";
                      n_src_id = this.$get_inst_source_id();
                      db = (__opal.Object._scope.Rho)._scope.RHO.$get_src_db(this.$get_inst_source_name());
                      var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_inst_source_name());
                      db_partition = source['partition'];
                      table_name = (this.$is_inst_schema_source()) ? this.$get_inst_schema_table_name() : 'object_values';
                      try {
                        db.$start_transaction();
                        ignore_changed_values = true;
                        if ((_a = this.$is_inst_sync_source()) !== false && _a !== nil) {
                          res_update_type = db.$select_from_table("changed_values", "update_type", __hash2({"object": obj, "source_id": n_src_id, "sent": 0}));
                          if ((_a = ((_b = res_update_type !== false && res_update_type !== nil) ? res_update_type.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                            update_type = res_update_type['$[]'](0)['$[]']("update_type")
                          };
                          ignore_changed_values = update_type['$==']("create");
                        };
                        attrs.$each((TMP_50 = function(attrib, val) {

                          var new_val = nil, is_modified = nil, old_val = nil, attrib_type = nil, self = TMP_50._s || this, _a, _b;
                          if (attrib == null) attrib = nil;
        if (val == null) val = nil;

                          attrib = attrib.$to_s().$gsub(/@/, "");
                          if ((_a = (__opal.Object._scope.Rhom)._scope.RhomObject['$method_name_reserved?'](attrib)) !== false && _a !== nil) {
                            return nil;
                          };
                          new_val = val.$to_s();
                          is_modified = false;
                          if ((_a = (__opal.Object._scope.Rhom)._scope.RhomObject['$method_name_reserved?'](attrib)) === false || _a === nil) {
                            // old_val = self.$send(attrib.$to_sym())
                            old_val = self.$vars()['$[]'](attrib);
                          };
                          is_modified = (_a = old_val['$=='](new_val), (_a === nil || _a === false));
                          if ((_a = (_b = (_b = ((_b = is_modified !== false && is_modified !== nil) ? new_val : _b), _b !== false && _b !== nil ? old_val['$nil?']() : _b), _b !== false && _b !== nil ? new_val.$to_s().$length()['$=='](0) : _b)) !== false && _a !== nil) {
                            is_modified = false
                          };
                          if ((_a = (_b = (_b = ((_b = is_modified !== false && is_modified !== nil) ? old_val : _b), _b !== false && _b !== nil ? new_val['$nil?']() : _b), _b !== false && _b !== nil ? old_val.$to_s().$length()['$=='](0) : _b)) !== false && _a !== nil) {
                            is_modified = false
                          };
                          if (is_modified !== false && is_modified !== nil) {
                            self.constructor.$_insert_or_update_attr(db, self.$is_inst_schema_source(), table_name, n_src_id, obj, attrib, new_val);
                            if ((_a = ignore_changed_values) === false || _a === nil) {
                              if ((_a = ((_b = res_update_type !== false && res_update_type !== nil) ? res_update_type.$length()['$>'](0) : _b)) !== false && _a !== nil) {
                                db.$delete_from_table("changed_values", __hash2({"object": obj, "attrib": attrib, "source_id": n_src_id, "sent": 0}))
                              };
                              attrib_type = (function() { if ((_a = self.$is_blob_attrib(db_partition, n_src_id, attrib)) !== false && _a !== nil) {
                                return "blob.file"
                                } else {
                                return ""
                              }; return nil; }).call(self);
                              db.$insert_into_table("changed_values", __hash2({"source_id": n_src_id, "object": obj, "attrib": attrib, "value": new_val, "update_type": update_type, "attrib_type": attrib_type}));
                            };
                            return self.$vars()['$[]='](attrib.$to_sym(), new_val);
                            } else {
                            return nil
                          };
                        }, TMP_50._s = this, TMP_50));
                        db.$commit();
                      } catch ($err) {
                      if (__scope.Exception['$===']($err)) {
                        e = $err;this.$puts("update_attributes Exception: "['$+'](e.$inspect()));
                        db.$rollback();
                        this.$raise();}
                      else { throw $err; }
                      };
                      return true;
                    };
                    def.$get_inst_source_name = function() {
                      
                      return this.$class().$name().$to_s();
                    };
                    def.$get_inst_source_id = function() {
                      var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_inst_source_name());
                      return source['source_id'];
                    };
                    def.$is_inst_sync_source = function() {
                        var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_inst_source_name());
                        return source['sync_type'] !== 'none';
                    };
                    def.$is_inst_schema_source = function() {
                        var source = (__scope.Rho)._scope.RhoConfig.$sources()['$[]'](this.$get_inst_source_name());
                        return source.hasOwnProperty('schema');
                    }
                    def.$get_inst_schema_table_name = function() {
                      
                      return this.$get_inst_source_name();
                    };
                    return def.$inst_strip_braces = function(str) {
                      if (str == null) {
                        str = nil
                      }
                      if (str !== false && str !== nil) {
                        return str.$gsub(/\{/, "").$gsub(/\}/, "")
                        } else {
                        return nil
                      };
                    };
                  }, TMP_2._s = this, TMP_2)))
                }
              };

              return nil;
            })(Rhom, null);
                ;Rhom._sdonate(["$any_model_changed?"]);
          })(self)
        })();
        // app.rb
        (function() {
          var my_object = nil, my_objects = nil, TMP_1, __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, __breaker = __opal.breaker, __slice = __opal.slice, __module = __opal.module, __klass = __opal.klass, __hash2 = __opal.hash2;
          __scope.RHO_RB_EXT = ".rb";
          __scope.RHO_APPS_DIR = "";
          (function(__base){
            function Rho() {};
            Rho = __module(__base, "Rho", Rho);
            var def = Rho.prototype, __scope = Rho._scope;

            (function(__base, __super){
              function RHO() {};
              RHO = __klass(__base, __super, "RHO", RHO);

              ;RHO._sdonate(["$get_src_db"]);      var def = RHO.prototype, __scope = RHO._scope;

              (Opal.cvars["@@db"] = nil);

              RHO.$get_src_db = function(src_name) {
                var _a, _b;
                if ((_a = ((_b = Opal.cvars["@@db"]) == null ? nil : _b)) === false || _a === nil) {
                  (Opal.cvars["@@db"] = __scope.Database.$new(RRho.Application.databaseFilePath('user'), "user"))
                };
                return ((_a = Opal.cvars["@@db"]) == null ? nil : _a);
              };

              return nil;
            })(Rho, null);

            (function(__base, __super){
              function RhoConfig() {};
              RhoConfig = __klass(__base, __super, "RhoConfig", RhoConfig);

              var def = RhoConfig.prototype, __scope = RhoConfig._scope;

              return (function(){var __scope = RhoConfig._scope, def = RhoConfig;(Opal.cvars["@@g_base_temp_id"] = nil);
              def.$generate_id = function() {
                var _a, _b;
                if ((_a = ((_b = Opal.cvars["@@g_base_temp_id"]) == null ? nil : _b)) === false || _a === nil) {
                  (Opal.cvars["@@g_base_temp_id"] = __scope.Time.$now().$to_f()['$-'](__scope.Time.$mktime(2009, 1, 1, 0, 0, 0, 0).$to_f())['$*']((10)['$**'](6)))
                };
                (Opal.cvars["@@g_base_temp_id"] = ((_a = Opal.cvars["@@g_base_temp_id"]) == null ? nil : _a)['$+'](1));
                return ((_a = Opal.cvars["@@g_base_temp_id"]) == null ? nil : _a);
              };
              (Opal.cvars["@@sources"] = nil);
              return def.$sources = function() {
                var my_model = nil, _a, _b;
                if ((_a = ((_b = Opal.cvars["@@sources"]) == null ? nil : _b)) === false || _a === nil) {
                  (Opal.cvars["@@sources"] = __hash2({}));
                };
                return ((_a = Opal.cvars["@@sources"]) == null ? nil : _a);
              };}).call(RhoConfig.$singleton_class())
            })(Rho, null);
            
          })(self);
        })();
    })();

    var moduleNS = 'Rho.ORM';


    // === ORM class definition ===

    var freeSourceIds = {
        'user' :     1,
        'app'  : 20001,
        'local': 40001
    };
    var getSourceId = function(partition) {
        return freeSourceIds[partition];
    };
    var accountSourceId = function(partition, sourceId) {
        if (freeSourceIds[partition] <= sourceId) {
            freeSourceIds[partition] = sourceId + 1;
        }
    };


    var opalHash = function(values) {
        return Opal.hash2((values === undefined) ? {} : values);
    };

    var wrapOpalObject = function(opalObject) {
        return {
            object: function() {
                return opalObject.$vars().map['object'];
            },
            get: function(name) {
                return opalObject.$vars().map[name];
            },
            set: function(name, value) {
                opalObject.$method_missing(Opal.String(name + '='), value);
                return this;
            },
            has: function(name) {
                return opalObject.$vars().map.hasOwnProperty(name);
            },
            vars: function() {
                return opalObject.$vars().map;
            },
            save: function() {
                opalObject.$save();
            },
            updateAttributes: function(attributes) {
                opalObject.$update_attributes(opalHash(attributes));
            },
            destroy: function() {
                opalObject.$destroy();
            }
        };
    };

    var wrapOpalObjects = function(opalObjects) {
        var list = new Array(opalObjects.length);
        for (var i = 0; i < opalObjects.length; ++i) {
            list[i] = wrapOpalObject(opalObjects[i]);
        }
        return list;
    };

    var makeModelBuilder = function() {
        var fixedSchema = false;
        var params = {};
        var properties = {};

        var set = function(name, value) {
            if (name === 'sync') {
                if (value) {
                    if (!params.hasOwnProperty('sync_type')) {
                        params['sync_type'] = 'incremental';
                    }
                } else {
                    delete params['sync_type'];
                }
            } else {
                params[name] = value;
            }
            return model;
        };

        var model = {
            propertyBag: function() {
                fixedSchema = false;
                return model;
            },
            fixedSchema: function() {
                fixedSchema = true;
                return model;
            },
            property: function(name, type, option) {
                if (type === undefined) {
                    type = 'string';
                }
                properties[name] = [type, option];
                return model;
            },
            set: set,
            enable: function(name) {
                return set(name, true);
            },
            belongs_to: function(name, owner) {
                if (!params.hasOwnProperty('belongs_to')) {
                    params['belongs_to'] = [];
                }
                if (owner instanceof Array) {
                    for (var i = 0; i < owner.length; ++i) {
                        params['belongs_to'].push(owner[i]);
                    }
                } else {
                    params['belongs_to'].push(owner);
                }
                return model;
            }
        };
        var addIndex = function(index) {
            model[index] = function(name, cols) {
                if (!params.hasOwnProperty(index)) {
                    params[index] = {};
                }
                params[index][name] = cols;
                return model;
            };
        };
        addIndex('index');
        addIndex('unique_index');

        var makeParams = function() {
            if (fixedSchema) {
                params['schema'] = {property: properties};
            } else {
                params['property'] = properties;
            }
            return params;
        };

        return {model: model, makeParams: makeParams};
    };

    var clone = function(original) {
        var clone = {};
        for (var key in original) {
            if (original.hasOwnProperty(key)) {
                clone[key] = original[key];
            }
        }
        return clone;
    };

    var addLoadedSource = function(modelName, newSource) {
        var sources = Opal.Rho._scope.RhoConfig.$sources();
        if (sources.map.hasOwnProperty(modelName)) {
            return;
        }

        var source = clone(newSource);

        var setDefault = function(key, value) {
            if (!source.hasOwnProperty(key)) {
                source[key] = value;
            }
        };

        source['loaded'] = true;
        source['name'] = modelName;
        setDefault('sync_priority', 1000);
        setDefault('sync_type', 'none');
        setDefault('partition', (source['sync_type'] !== 'none') ? 'user' : 'local');
        setDefault('source_id', getSourceId(source['partition']));

        accountSourceId(source['partition'], source['source_id']);

        sources['$[]='](modelName, source);
    };
      
    var makeModel = function(modelName, initialize) {
        Opal.Rhom._scope.RhomObjectFactory.$init_object(modelName);

        var builder = makeModelBuilder(false);
        if (initialize !== undefined) {
            initialize(builder.model);
        }

        addLoadedSource(modelName, builder.makeParams());

        var opalModel = Opal.Object._scope[modelName];
        return {
            make: function(values) {
                return wrapOpalObject(opalModel.$new(opalHash(values)));
            },
            create: function(values) {
                return wrapOpalObject(opalModel.$create(opalHash(values)));
            },
            count: function() {
                return opalModel.$count();
            },
            find: function(what, options) {
                var found = opalModel.$find(what, options);
                switch (what) {
                    case 'all'  : return wrapOpalObjects(found);
                    case 'count': return                 found ;
                    case 'first':
                    default     : return wrapOpalObject (found);
                }
            },
            sync: function(callback, show_status_popup, query_params) {
                opalModel.$sync(callback, show_status_popup, query_params);
            },
            deleteAll: function() {
                opalModel.$delete_all();
            }
        };
    };

    var models = {};

    var ORM = {
        clear: function() {
            models = {};
        },
        addModel: function(modelName) {
            models[modelName] = makeModel(modelName);
            return models[modelName];
        },
        getModel: function(modelName) {
            return models[modelName];
        }
    };


    rhoUtil.namespace(moduleNS, ORM);

})(jQuery, Rho, Rho.util);
// Module Rho.Application


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Application';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Application class definition ===

    function Application() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Application.getId = function() { return currentDefaultID; }

    // === Application instance properties ===

    rhoUtil.createPropsProxy(Application.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Application instance methods ===

    rhoUtil.createMethodsProxy(Application.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === Application constants ===

    
            Application.APP_EVENT_ACTIVATED = 'Activated'; 
    
            Application.APP_EVENT_DEACTIVATED = 'Deactivated'; 
    
            Application.APP_EVENT_UICREATED = 'UICreated'; 
    
            Application.APP_EVENT_UIDESTROYED = 'UIDestroyed'; 
    
            Application.APP_EVENT_SYNCUSERCHANGED = 'SyncUserChanged'; 
    
            Application.APP_EVENT_CONFIGCONFLICT = 'ConfigConflict'; 
    
            Application.APP_EVENT_DBMIGRATESOURCE = 'DBMigrateSource'; 
    


    // === Application hash keys ===
    
    
            Application.HK_APPLICATION_EVENT = "applicationEvent"; 

            Application.HK_COMPONENT_VERSIONS = "componentVersions"; 

            Application.HK_EVENT_DATA = "eventData"; 

            Application.HK_HOT_FIXES = "hotFixes"; 

            Application.HK_PRODUCT_VERSION = "productVersion"; 


    // === Application static properties ===

    rhoUtil.createPropsProxy(Application, [
        { propName: 'appBundleFolder', propAccess: 'r' }
      , { propName: 'appsBundleFolder', propAccess: 'r' }
      , { propName: 'userFolder', propAccess: 'r' }
      , { propName: 'configPath', propAccess: 'r' }
      , { propName: 'modelsManifestPath', propAccess: 'r' }
      , { propName: 'databaseBlobFolder', propAccess: 'r' }
      , { propName: 'publicFolder', propAccess: 'r' }
      , { propName: 'startURI', propAccess: 'rw' }
      , { propName: 'settingsPageURI', propAccess: 'rw' }
      , { propName: 'splash', propAccess: 'r' }
      , { propName: 'version', propAccess: 'r' }
      , { propName: 'title', propAccess: 'rw' }
      , { propName: 'name', propAccess: 'r' }
      , { propName: 'locale', propAccess: 'r' }
      , { propName: 'country', propAccess: 'r' }
      , { propName: 'nativeMenu', propAccess: 'rw' }
      , { propName: 'defaultNativeMenu', propAccess: 'r' }
      , { propName: 'securityTokenNotPassed', propAccess: 'r' }
      , { propName: 'invalidSecurityTokenStartPath', propAccess: 'rw' }
      , { propName: 'badLinkURI', propAccess: 'rw' }
    ], apiReq);

    // === Application static methods ===

    rhoUtil.createMethodsProxy(Application, [
    
          // function(/* const rho::String& */ name, /* optional function */ oResult)
          { methodName: 'modelFolderPath', nativeName: 'modelFolderPath', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ partitionName, /* optional function */ oResult)
        , { methodName: 'databaseFilePath', nativeName: 'databaseFilePath', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ relativePath, /* optional function */ oResult)
        , { methodName: 'expandDatabaseBlobFilePath', nativeName: 'expandDatabaseBlobFilePath', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ absolutePath, /* optional function */ oResult)
        , { methodName: 'relativeDatabaseBlobFilePath', nativeName: 'relativeDatabaseBlobFilePath', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'quit', nativeName: 'quit', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'minimize', nativeName: 'minimize', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'restore', nativeName: 'restore', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'setApplicationNotify', nativeName: 'setApplicationNotify', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getRhoPlatformVersion', nativeName: 'getRhoPlatformVersion', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
    ], apiReq);

    // === Application default instance support ===
    

    rhoUtil.namespace(moduleNS, Application);

})(jQuery, Rho, Rho.util);
// Module Rho.Database


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Database';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Database class definition ===

    function Database() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Database.getId = function() { return currentDefaultID; }

    // === Database instance properties ===

    rhoUtil.createPropsProxy(Database.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Database instance methods ===

    rhoUtil.createMethodsProxy(Database.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === Database constants ===

    


    // === Database hash keys ===
    
    
            Database.HK_EXCLUDE = "exclude"; 

            Database.HK_INCLUDE = "include"; 


    // === Database static properties ===

    rhoUtil.createPropsProxy(Database, [
    ], apiReq);

    // === Database static methods ===

    rhoUtil.createMethodsProxy(Database, [
    
    ], apiReq);

    // === Database default instance support ===
    

    rhoUtil.namespace(moduleNS, Database);

})(jQuery, Rho, Rho.util);
// Module Rho.Database.SQLite3


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Database.SQLite3';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === SQLite3 class definition ===

    function SQLite3() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
                this.open.apply(this, arguments);
            
        }
    };

    SQLite3.getId = function() { return currentDefaultID; }

    // === SQLite3 instance properties ===

    rhoUtil.createPropsProxy(SQLite3.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === SQLite3 instance methods ===

    rhoUtil.createMethodsProxy(SQLite3.prototype, [
    
          // function(/* const rho::String& */ dbPath, /* const rho::String& */ dbPartition, /* optional function */ oResult)
          { methodName: 'open', nativeName: 'open', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'close', nativeName: 'close', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'startTransaction', nativeName: 'startTransaction', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'commitTransaction', nativeName: 'commitTransaction', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'rollbackTransaction', nativeName: 'rollbackTransaction', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'lockDb', nativeName: 'lockDb', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'unlockDb', nativeName: 'unlockDb', valueCallbackIndex: 0 }
    
          // function(/* const rho::Vector<rho::String>& */ include, /* const rho::Vector<rho::String>& */ exclude, /* optional function */ oResult)
        , { methodName: 'destroyTables', nativeName: 'destroyTables', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ tableName, /* optional function */ oResult)
        , { methodName: 'isTableExist', nativeName: 'isTableExist', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isUiWaitForDb', nativeName: 'isUiWaitForDb', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ sqlStmt, /* bool */ isBatch, /* const rho::Vector<rho::String>& */ args, /* optional function */ oResult)
        , { methodName: 'execute', nativeName: 'execute', valueCallbackIndex: 3 }
    
    ], apiReq, function(){ return this.getId(); });

    // === SQLite3 constants ===

    



    // === SQLite3 static properties ===

    rhoUtil.createPropsProxy(SQLite3, [
    ], apiReq);

    // === SQLite3 static methods ===

    rhoUtil.createMethodsProxy(SQLite3, [
    
          // function(/* const rho::String& */ partition, /* int */ sourceID, /* const rho::String& */ attrName, /* optional function */ oResult)
          { methodName: 'isBlobAttr', nativeName: 'isBlobAttr', valueCallbackIndex: 3 }
    
    ], apiReq);

    // === SQLite3 default instance support ===
    

    rhoUtil.namespace(moduleNS, SQLite3);

})(jQuery, Rho, Rho.util);
// Module Rho.Log


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Log';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Log class definition ===

    function Log() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Log.getId = function() { return currentDefaultID; }

    // === Log instance properties ===

    rhoUtil.createPropsProxy(Log.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Log instance methods ===

    rhoUtil.createMethodsProxy(Log.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === Log constants ===

    
            Log.LEVEL_TRACE = 0;
    
            Log.LEVEL_INFO = 1;
    
            Log.LEVEL_WARNING = 2;
    
            Log.LEVEL_ERROR = 3;
    
            Log.LEVEL_FATAL = 4;
    
            Log.DEST_FILE = 'file'; 
    
            Log.DEST_OUTPUT = 'stdio'; 
    
            Log.DEST_URI = 'uri'; 
    



    // === Log static properties ===

    rhoUtil.createPropsProxy(Log, [
        { propName: 'level', propAccess: 'rw' }
      , { propName: 'destination', propAccess: 'rw' }
      , { propName: 'includeCategories', propAccess: 'rw' }
      , { propName: 'excludeCategories', propAccess: 'rw' }
      , { propName: 'fileSize', propAccess: 'rw' }
      , { propName: 'filePath', propAccess: 'rw' }
      , { propName: 'memoryPeriod', propAccess: 'rw' }
      , { propName: 'netTrace', propAccess: 'rw' }
      , { propName: 'skipPost', propAccess: 'rw' }
      , { propName: 'excludeFilter', propAccess: 'rw' }
      , { propName: 'destinationURI', propAccess: 'rw' }
    ], apiReq);

    // === Log static methods ===

    rhoUtil.createMethodsProxy(Log, [
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
          { methodName: 'trace', nativeName: 'trace', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'info', nativeName: 'info', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'warning', nativeName: 'warning', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'error', nativeName: 'error', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'fatalError', nativeName: 'fatalError', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'sendLogFile', nativeName: 'sendLogFile', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'showLog', nativeName: 'showLog', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'cleanLogFile', nativeName: 'cleanLogFile', valueCallbackIndex: 0 }
    
          // function(/* int */ limit, /* optional function */ oResult)
        , { methodName: 'readLogFile', nativeName: 'readLogFile', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === Log default instance support ===
    

    rhoUtil.namespace(moduleNS, Log);

})(jQuery, Rho, Rho.util);
// Module Rho.NativeMenubar


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.NativeMenubar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === NativeMenubar class definition ===

    function NativeMenubar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    NativeMenubar.getId = function() { return currentDefaultID; }

    // === NativeMenubar instance properties ===

    rhoUtil.createPropsProxy(NativeMenubar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeMenubar instance methods ===

    rhoUtil.createMethodsProxy(NativeMenubar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === NativeMenubar constants ===

    



    // === NativeMenubar static properties ===

    rhoUtil.createPropsProxy(NativeMenubar, [
        { propName: 'mainMenu', propAccess: 'rw' }
      , { propName: 'extraMenu', propAccess: 'rw' }
      , { propName: 'mainButton', propAccess: 'rw' }
      , { propName: 'extraButton', propAccess: 'rw' }
    ], apiReq);

    // === NativeMenubar static methods ===

    rhoUtil.createMethodsProxy(NativeMenubar, [
    
    ], apiReq);

    // === NativeMenubar default instance support ===
    

    rhoUtil.namespace(moduleNS, NativeMenubar);

})(jQuery, Rho, Rho.util);
// Module Rho.NativeTabbar


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.NativeTabbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === NativeTabbar class definition ===

    function NativeTabbar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    NativeTabbar.getId = function() { return currentDefaultID; }

    // === NativeTabbar instance properties ===

    rhoUtil.createPropsProxy(NativeTabbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeTabbar instance methods ===

    rhoUtil.createMethodsProxy(NativeTabbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === NativeTabbar constants ===

    


    // === NativeTabbar hash keys ===
    
    
            NativeTabbar.HK_BACKGROUND_COLOR = "backgroundColor"; 

            NativeTabbar.HK_CREATE_ON_INIT = "createOnInit"; 

            NativeTabbar.HK_HIDDEN_TABS = "hiddenTabs"; 

            NativeTabbar.HK_NEW_TAB_INDEX = "newTabIndex"; 

            NativeTabbar.HK_OLD_TAB_INDEX = "oldTabIndex"; 

            NativeTabbar.HK_PLACE_TABS_BOTTOM = "placeTabsBottom"; 

            NativeTabbar.HK_TAB_EVENT = "tabEvent"; 

            NativeTabbar.HK_TAB_INDEX = "tab_index"; 

            NativeTabbar.HK_VERTICAL_ORIENTATION = "verticalOrientation"; 


    // === NativeTabbar static properties ===

    rhoUtil.createPropsProxy(NativeTabbar, [
    ], apiReq);

    // === NativeTabbar static methods ===

    rhoUtil.createMethodsProxy(NativeTabbar, [
    
          // function(/* const rho::Vector<rho::String>& */ tabElements, /* const rho::Hashtable<rho::String, rho::String>& */ tabBarProperties, /* optional function */ oResult)
          { methodName: 'create', nativeName: 'create', persistentCallbackIndex: 2, valueCallbackIndex: 4 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'currentTabIndex', nativeName: 'currentTabIndex', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'remove', nativeName: 'remove', valueCallbackIndex: 0 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'removeTab', nativeName: 'removeTab', valueCallbackIndex: 1 }
    
          // function(/* int */ tabIndex, /* const rho::String& */ badge, /* optional function */ oResult)
        , { methodName: 'setTabBadge', nativeName: 'setTabBadge', valueCallbackIndex: 2 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'switchTab', nativeName: 'switchTab', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isCreated', nativeName: 'isCreated', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NativeTabbar default instance support ===
    

    rhoUtil.namespace(moduleNS, NativeTabbar);

})(jQuery, Rho, Rho.util);
// Module Rho.NativeToolbar


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.NativeToolbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === NativeToolbar class definition ===

    function NativeToolbar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    NativeToolbar.getId = function() { return currentDefaultID; }

    // === NativeToolbar instance properties ===

    rhoUtil.createPropsProxy(NativeToolbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeToolbar instance methods ===

    rhoUtil.createMethodsProxy(NativeToolbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === NativeToolbar constants ===

    


    // === NativeToolbar hash keys ===
    
    
            NativeToolbar.HK_BACKGROUND_COLOR = "backgroundColor"; 

            NativeToolbar.HK_MASK_COLOR = "maskColor"; 

            NativeToolbar.HK_VIEW_HEIGHT = "viewHeight"; 


    // === NativeToolbar static properties ===

    rhoUtil.createPropsProxy(NativeToolbar, [
    ], apiReq);

    // === NativeToolbar static methods ===

    rhoUtil.createMethodsProxy(NativeToolbar, [
    
          // function(/* const rho::Vector<rho::String>& */ toolbarElements, /* const rho::Hashtable<rho::String, rho::String>& */ toolBarProperties, /* optional function */ oResult)
          { methodName: 'create', nativeName: 'create', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'remove', nativeName: 'remove', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isCreated', nativeName: 'isCreated', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NativeToolbar default instance support ===
    

    rhoUtil.namespace(moduleNS, NativeToolbar);

})(jQuery, Rho, Rho.util);
// Module Rho.Navbar


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Navbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Navbar class definition ===

    function Navbar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Navbar.getId = function() { return currentDefaultID; }

    // === Navbar instance properties ===

    rhoUtil.createPropsProxy(Navbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Navbar instance methods ===

    rhoUtil.createMethodsProxy(Navbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === Navbar constants ===

    


    // === Navbar hash keys ===
    
    
            Navbar.HK_ACTION = "action"; 

            Navbar.HK_LABEL = "label"; 

            Navbar.HK_LEFT = "left"; 

            Navbar.HK_RIGHT = "right"; 

            Navbar.HK_TITLE = "title"; 


    // === Navbar static properties ===

    rhoUtil.createPropsProxy(Navbar, [
    ], apiReq);

    // === Navbar static methods ===

    rhoUtil.createMethodsProxy(Navbar, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ navBarProperties, /* optional function */ oResult)
          { methodName: 'create', nativeName: 'create', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'remove', nativeName: 'remove', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'started', nativeName: 'started', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === Navbar default instance support ===
    

    rhoUtil.namespace(moduleNS, Navbar);

})(jQuery, Rho, Rho.util);
// Module Rho.Network


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Network';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Network class definition ===

    function Network() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Network.getId = function() { return currentDefaultID; }

    // === Network instance properties ===

    rhoUtil.createPropsProxy(Network.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Network instance methods ===

    rhoUtil.createMethodsProxy(Network.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === Network constants ===

    
            Network.AUTH_BASIC = 'basic'; 
    


    // === Network hash keys ===
    
    
            Network.HK_BODY = "body"; 

            Network.HK_CONNECTION_INFORMATION = "connectionInformation"; 

            Network.HK_CONNECTION_MANAGER_MESSAGE = "connectionManagerMessage"; 

            Network.HK_CONNECTION_TYPE_AVAILABLE = "connectionTypeAvailable"; 

            Network.HK_CONNECTION_TYPE_CONNECTED = "connectionTypeConnected"; 

            Network.HK_CONTENT_TYPE = "contentType"; 

            Network.HK_COOKIES = "cookies"; 

            Network.HK_CREATE_FOLDERS = "createFolders"; 

            Network.HK_CURRENT_STATUS = "current_status"; 

            Network.HK_DETECTION_TIMEOUT = "detectionTimeout"; 

            Network.HK_FAILURE_MESSAGE = "failureMessage"; 

            Network.HK_FILENAME = "filename"; 

            Network.HK_FILENAME_BASE = "filenameBase"; 

            Network.HK_FILE_CONTENT_TYPE = "fileContentType"; 

            Network.HK_FILE_EXISTS = "fileExists"; 

            Network.HK_HEADERS = "headers"; 

            Network.HK_HOST = "host"; 

            Network.HK_HTTP_ERROR = "http_error"; 

            Network.HK_MULTIPART = "multipart"; 

            Network.HK_NAME = "name"; 

            Network.HK_NETWORK_OPERATOR = "networkOperator"; 

            Network.HK_OVERWRITE_FILE = "overwriteFile"; 

            Network.HK_PHONE_SIGNAL_STRENGTH = "phoneSignalStrength"; 

            Network.HK_POLL_INTERVAL = "pollInterval"; 

            Network.HK_PORT = "port"; 

            Network.HK_PREV_STATUS = "prev_status"; 

            Network.HK_URL = "url"; 


    // === Network static properties ===

    rhoUtil.createPropsProxy(Network, [
        { propName: 'url', propAccess: 'rw' }
      , { propName: 'authType', propAccess: 'rw' }
      , { propName: 'authUser', propAccess: 'rw' }
      , { propName: 'authPassword', propAccess: 'rw' }
      , { propName: 'verifyPeerCertificate', propAccess: 'rw' }
      , { propName: 'httpVerb', propAccess: 'rw' }
      , { propName: 'headers', propAccess: 'rw' }
      , { propName: 'responseTimeout', propAccess: 'rw' }
    ], apiReq);

    // === Network static methods ===

    rhoUtil.createMethodsProxy(Network, [
    
          // function(/* optional function */ oResult)
          { methodName: 'cancel', nativeName: 'cancel', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'downloadFile', nativeName: 'downloadFile', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'get', nativeName: 'get', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'post', nativeName: 'post', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'uploadFile', nativeName: 'uploadFile', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hasNetwork', nativeName: 'hasNetwork', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hasWifiNetwork', nativeName: 'hasWifiNetwork', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hasCellNetwork', nativeName: 'hasCellNetwork', valueCallbackIndex: 0 }
    
          // function(/* int */ pollInterval, /* optional function */ oResult)
        , { methodName: 'startStatusNotify', nativeName: 'startStatusNotify', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopStatusNotify', nativeName: 'stopStatusNotify', valueCallbackIndex: 0 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'detectConnection', nativeName: 'detectConnection', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopDetectingConnection', nativeName: 'stopDetectingConnection', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ connectionDestination, /* optional function */ oResult)
        , { methodName: 'connectWan', nativeName: 'connectWan', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'disconnectWan', nativeName: 'disconnectWan', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === Network default instance support ===
    

    rhoUtil.namespace(moduleNS, Network);

})(jQuery, Rho, Rho.util);
// Module Rho.Notification


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Notification';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Notification class definition ===

    function Notification() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Notification.getId = function() { return currentDefaultID; }

    // === Notification instance properties ===

    rhoUtil.createPropsProxy(Notification.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Notification instance methods ===

    rhoUtil.createMethodsProxy(Notification.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === Notification constants ===

    


    // === Notification hash keys ===
    
    
            Notification.HK_BUTTONS = "buttons"; 

            Notification.HK_BUTTON_ID = "button_id"; 

            Notification.HK_BUTTON_INDEX = "button_index"; 

            Notification.HK_BUTTON_TITLE = "button_title"; 

            Notification.HK_DURATION = "duration"; 

            Notification.HK_FREQUENCY = "frequency"; 

            Notification.HK_ICON = "icon"; 

            Notification.HK_MESSAGE = "message"; 

            Notification.HK_TITLE = "title"; 

            Notification.HK_VOLUME = "volume"; 


    // === Notification static properties ===

    rhoUtil.createPropsProxy(Notification, [
    ], apiReq);

    // === Notification static methods ===

    rhoUtil.createMethodsProxy(Notification, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
          { methodName: 'showPopup', nativeName: 'showPopup', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hidePopup', nativeName: 'hidePopup', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ title, /* const rho::String& */ status_text, /* const rho::String& */ hide_button_label, /* optional function */ oResult)
        , { methodName: 'showStatus', nativeName: 'showStatus', valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'beep', nativeName: 'beep', valueCallbackIndex: 1 }
    
          // function(/* int */ duration, /* optional function */ oResult)
        , { methodName: 'vibrate', nativeName: 'vibrate', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === Notification default instance support ===
    

    rhoUtil.namespace(moduleNS, Notification);

})(jQuery, Rho, Rho.util);
// Module Rho.Push


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Push';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Push class definition ===

    function Push() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Push.getId = function() { return currentDefaultID; }

    // === Push instance properties ===

    rhoUtil.createPropsProxy(Push.prototype, [
        { propName: 'type', propAccess: 'r' }
      , { propName: 'id', propAccess: 'r' }
      , { propName: 'deviceId', propAccess: 'r' }
      , { propName: 'userNotifyMode', propAccess: 'rw' }
      , { propName: 'senderId', propAccess: 'rw' }
      , { propName: 'pushServer', propAccess: 'rw' }
      , { propName: 'pushAppName', propAccess: 'rw' }
    ], apiReq, function(){ return this.getId(); });

    // === Push instance methods ===

    rhoUtil.createMethodsProxy(Push.prototype, [
    
          // function(/* optional function */ oResult)
          { methodName: 'startNotifications', nativeName: 'startNotifications', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopNotifications', nativeName: 'stopNotifications', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
        , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'clearAllProperties', nativeName: 'clearAllProperties', valueCallbackIndex: 0 }
    
    ], apiReq, function(){ return this.getId(); });

    // === Push constants ===

    
            Push.PUSH_TYPE_RHOCONNECT = 'rhoconnect-push'; 
    
            Push.PUSH_TYPE_NATIVE = 'native-push'; 
    
            Push.PUSH_NOTIFY_NONE = 'none'; 
    
            Push.PUSH_NOTIFY_ALERTS = 'alert'; 
    
            Push.PUSH_NOTIFY_NOTIFICATIONS = 'notification'; 
    
            Push.PUSH_NOTIFY_NOTIFICATIONS_AND_ALERTS = 'backgroundNotifications'; 
    


    // === Push hash keys ===
    
    
            Push.HK_ALERT_SOUND = "alertSound"; 

            Push.HK_ALERT_TEXT = "alertText"; 

            Push.HK_DO_SYNC = "doSync"; 

            Push.HK_VIBRATE_DURATION = "vibrateDuration"; 


    // === Push static properties ===

    rhoUtil.createPropsProxy(Push, [
    ], apiReq);

    // === Push static methods ===

    rhoUtil.createMethodsProxy(Push, [
    
          // function(/* optional function */ oResult)
          { methodName: 'enumerate', nativeName: 'enumerate', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
    ], apiReq);

    // === Push default instance support ===
    

        rhoUtil.createPropsProxy(Push, [
            { propName: 'default:getDefault', propAccess: 'r' }
          , { propName: 'defaultID:getDefaultID::setDefaultID', propAccess: 'rw', customSet: function(id) {currentDefaultID = id;} }
        ], apiReq);

        Push.getId = function() {
            if (null == currentDefaultID) {
                currentDefaultID = Push.getDefaultID();
            }
            return currentDefaultID;
        }

        // === Push default instance properties ===

        rhoUtil.createPropsProxy(Push, [
            { propName: 'type', propAccess: 'r' }
          , { propName: 'id', propAccess: 'r' }
          , { propName: 'deviceId', propAccess: 'r' }
          , { propName: 'userNotifyMode', propAccess: 'rw' }
          , { propName: 'senderId', propAccess: 'rw' }
          , { propName: 'pushServer', propAccess: 'rw' }
          , { propName: 'pushAppName', propAccess: 'rw' }
        ], apiReq, function(){ return this.getId(); });

        // === Push default instance methods ===

        rhoUtil.createMethodsProxy(Push, [
        
              // function(/* optional function */ oResult)
              { methodName: 'startNotifications', nativeName: 'startNotifications', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'stopNotifications', nativeName: 'stopNotifications', valueCallbackIndex: 0 }
        
              // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
            , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
            , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
            , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
        
              // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
            , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'clearAllProperties', nativeName: 'clearAllProperties', valueCallbackIndex: 0 }
        
        ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.namespace(moduleNS, Push);

})(jQuery, Rho, Rho.util);
// Module Rho.RhoFile


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.RhoFile';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === RhoFile class definition ===

    function RhoFile() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    RhoFile.getId = function() { return currentDefaultID; }

    // === RhoFile instance properties ===

    rhoUtil.createPropsProxy(RhoFile.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === RhoFile instance methods ===

    rhoUtil.createMethodsProxy(RhoFile.prototype, [
    
          // function(/* const rho::String& */ path, /* int */ mode, /* optional function */ oResult)
          { methodName: 'open', nativeName: 'open', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'close', nativeName: 'close', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isOpened', nativeName: 'isOpened', valueCallbackIndex: 0 }
    
          // function(/* int */ size, /* optional function */ oResult)
        , { methodName: 'read', nativeName: 'read', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'readAll', nativeName: 'readAll', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ val, /* optional function */ oResult)
        , { methodName: 'write', nativeName: 'write', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'flush', nativeName: 'flush', valueCallbackIndex: 0 }
    
          // function(/* int */ pos, /* optional function */ oResult)
        , { methodName: 'seek', nativeName: 'seek', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'size', nativeName: 'size', valueCallbackIndex: 0 }
    
    ], apiReq, function(){ return this.getId(); });

    // === RhoFile constants ===

    
            RhoFile.OPEN_FOR_APPEND = 1;
    
            RhoFile.OPEN_FOR_READ = 2;
    
            RhoFile.OPEN_FOR_WRITE = 3;
    
            RhoFile.OPEN_FOR_READ_WRITE = 4;
    



    // === RhoFile static properties ===

    rhoUtil.createPropsProxy(RhoFile, [
    ], apiReq);

    // === RhoFile static methods ===

    rhoUtil.createMethodsProxy(RhoFile, [
    
          // function(/* const rho::String& */ from, /* const rho::String& */ to, /* optional function */ oResult)
          { methodName: 'copy', nativeName: 'copy', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ from, /* const rho::String& */ to, /* optional function */ oResult)
        , { methodName: 'rename', nativeName: 'rename', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'makeDir', nativeName: 'makeDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'exists', nativeName: 'exists', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'getFileSize', nativeName: 'getFileSize', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'isDir', nativeName: 'isDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'isFile', nativeName: 'isFile', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'deleteFile', nativeName: 'deleteFile', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'deleteDir', nativeName: 'deleteDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'makeDirs', nativeName: 'makeDirs', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* bool */ leaveRoot, /* optional function */ oResult)
        , { methodName: 'deleteRecursive', nativeName: 'deleteRecursive', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'listDir', nativeName: 'listDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'basename', nativeName: 'basename', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'dirname', nativeName: 'dirname', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ p1, /* const rho::String& */ p2, /* optional function */ oResult)
        , { methodName: 'join', nativeName: 'join', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'read', nativeName: 'read', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === RhoFile default instance support ===
    

    rhoUtil.namespace(moduleNS, RhoFile);

})(jQuery, Rho, Rho.util);
// Module Rho.System


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.System';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === System class definition ===

    function System() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    System.getId = function() { return currentDefaultID; }

    // === System instance properties ===

    rhoUtil.createPropsProxy(System.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === System instance methods ===

    rhoUtil.createMethodsProxy(System.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === System constants ===

    
            System.PLATFORM_WM_CE = 'WINDOWS'; 
    
            System.PLATFORM_ANDROID = 'ANDROID'; 
    
            System.PLATFORM_IOS = 'APPLE'; 
    
            System.PLATFORM_WP8 = 'WP8'; 
    
            System.PLATFORM_WINDOWS_DESKTOP = 'WINDOWS_DESKTOP'; 
    
            System.SCREEN_PORTRAIT = 'portrait'; 
    
            System.SCREEN_LANDSCAPE = 'landscape'; 
    
            System.KEYBOARD_SHOWN = 'shown'; 
    
            System.KEYBOARD_HIDDEN = 'hidden'; 
    
            System.KEYBOARD_AUTOMATIC = 'automatic'; 
    
            System.REGKEY_CLASSES_ROOT = 'HKCR'; 
    
            System.REGKEY_CURRENT_USER = 'HKCU'; 
    
            System.REGKEY_LOCAL_MACHINE = 'HKLM'; 
    
            System.REGKEY_USERS = 'HKU'; 
    
            System.REGTYPE_SZ = 'String'; 
    
            System.REGTYPE_BINARY = 'Binary'; 
    
            System.REGTYPE_DWORD = 'DWORD'; 
    
            System.REGTYPE_MULTI_SZ = 'MultiSZ'; 
    


    // === System hash keys ===
    
    
            System.HK_HIVE = "hive"; 

            System.HK_KEY = "key"; 

            System.HK_PERSISTENT = "persistent"; 

            System.HK_SETTING = "setting"; 

            System.HK_TYPE = "type"; 

            System.HK_VALUE = "value"; 


    // === System static properties ===

    rhoUtil.createPropsProxy(System, [
        { propName: 'platform', propAccess: 'r' }
      , { propName: 'hasCamera', propAccess: 'r' }
      , { propName: 'screenWidth', propAccess: 'r' }
      , { propName: 'screenHeight', propAccess: 'r' }
      , { propName: 'realScreenWidth', propAccess: 'r' }
      , { propName: 'realScreenHeight', propAccess: 'r' }
      , { propName: 'screenOrientation', propAccess: 'r' }
      , { propName: 'ppiX', propAccess: 'r' }
      , { propName: 'ppiY', propAccess: 'r' }
      , { propName: 'phoneNumber', propAccess: 'r' }
      , { propName: 'deviceOwnerEmail', propAccess: 'r' }
      , { propName: 'deviceOwnerName', propAccess: 'r' }
      , { propName: 'devicePushId', propAccess: 'r' }
      , { propName: 'phoneId', propAccess: 'r' }
      , { propName: 'deviceName', propAccess: 'r' }
      , { propName: 'osVersion', propAccess: 'r' }
      , { propName: 'locale', propAccess: 'r' }
      , { propName: 'country', propAccess: 'r' }
      , { propName: 'isEmulator', propAccess: 'r' }
      , { propName: 'isRhoSimulator', propAccess: 'r' }
      , { propName: 'hasCalendar', propAccess: 'r' }
      , { propName: 'isMotorolaDevice', propAccess: 'r' }
      , { propName: 'oemInfo', propAccess: 'r' }
      , { propName: 'uuid', propAccess: 'r' }
      , { propName: 'applicationIconBadge', propAccess: 'rw' }
      , { propName: 'httpProxyURI', propAccess: 'rw' }
      , { propName: 'lockWindowSize', propAccess: 'rw' }
      , { propName: 'keyboardState', propAccess: 'rw' }
      , { propName: 'localServerPort', propAccess: 'r' }
      , { propName: 'freeServerPort', propAccess: 'r' }
      , { propName: 'screenAutoRotate', propAccess: 'rw' }
      , { propName: 'hasTouchscreen', propAccess: 'r' }
      , { propName: 'webviewFramework', propAccess: 'r' }
      , { propName: 'screenSleeping', propAccess: 'rw' }
      , { propName: 'hasNetwork', propAccess: 'r' }
      , { propName: 'hasWifiNetwork', propAccess: 'r' }
      , { propName: 'hasCellNetwork', propAccess: 'r' }
      , { propName: 'hasSqlite', propAccess: 'r' }
    ], apiReq);

    // === System static methods ===

    rhoUtil.createMethodsProxy(System, [
    
          // function(/* const rho::String& */ applicationUrl, /* optional function */ oResult)
          { methodName: 'applicationInstall', nativeName: 'applicationInstall', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ applicationName, /* optional function */ oResult)
        , { methodName: 'isApplicationInstalled', nativeName: 'isApplicationInstalled', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ applicationName, /* optional function */ oResult)
        , { methodName: 'applicationUninstall', nativeName: 'applicationUninstall', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getStartParams', nativeName: 'getStartParams', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ url, /* optional function */ oResult)
        , { methodName: 'openUrl', nativeName: 'openUrl', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ localPathToZip, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'unzipFile', nativeName: 'unzipFile', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ localPathToZip, /* const rho::String& */ localPathToFile, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'zipFile', nativeName: 'zipFile', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ localPathToZip, /* const rho::String& */ basePath, /* const rho::Vector<rho::String>& */ filePathsToZip, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'zipFiles', nativeName: 'zipFiles', valueCallbackIndex: 4 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setRegistrySetting', nativeName: 'setRegistrySetting', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'getRegistrySetting', nativeName: 'getRegistrySetting', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'deleteRegistrySetting', nativeName: 'deleteRegistrySetting', valueCallbackIndex: 1 }
    
          // function(/* int */ x, /* int */ y, /* int */ width, /* int */ height, /* optional function */ oResult)
        , { methodName: 'setWindowFrame', nativeName: 'setWindowFrame', valueCallbackIndex: 4 }
    
          // function(/* int */ x, /* int */ y, /* optional function */ oResult)
        , { methodName: 'setWindowPosition', nativeName: 'setWindowPosition', valueCallbackIndex: 2 }
    
          // function(/* int */ width, /* int */ height, /* optional function */ oResult)
        , { methodName: 'setWindowSize', nativeName: 'setWindowSize', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'bringToFront', nativeName: 'bringToFront', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ pathToBundle, /* const rho::Hashtable<rho::String, rho::String>& */ params, /* optional function */ oResult)
        , { methodName: 'replaceCurrentBundle', nativeName: 'replaceCurrentBundle', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ pathToFolder, /* optional function */ oResult)
        , { methodName: 'deleteFolder', nativeName: 'deleteFolder', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ pathToFile, /* bool */ doNotBackup, /* optional function */ oResult)
        , { methodName: 'setDoNotBackupAttribute', nativeName: 'setDoNotBackupAttribute', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
        , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'clearAllProperties', nativeName: 'clearAllProperties', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === System default instance support ===
    

    rhoUtil.namespace(moduleNS, System);

})(jQuery, Rho, Rho.util);
// Module Rho.System.Process


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.System.Process';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Process class definition ===

    function Process() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Process.getId = function() { return currentDefaultID; }

    // === Process instance properties ===

    rhoUtil.createPropsProxy(Process.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Process instance methods ===

    rhoUtil.createMethodsProxy(Process.prototype, [
    
          // function(/* optional function */ oResult)
          { methodName: 'waitForApplication', nativeName: 'waitForApplication', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'closeHandle', nativeName: 'closeHandle', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getProcessExitCode', nativeName: 'getProcessExitCode', valueCallbackIndex: 0 }
    
    ], apiReq, function(){ return this.getId(); });

    // === Process constants ===

    



    // === Process static properties ===

    rhoUtil.createPropsProxy(Process, [
    ], apiReq);

    // === Process static methods ===

    rhoUtil.createMethodsProxy(Process, [
    
          // function(/* const rho::String& */ appName, /* const rho::String& */ params, /* bool */ blockingCall, /* optional function */ oResult)
          { methodName: 'runApplication', nativeName: 'runApplication', valueCallbackIndex: 3 }
    
    ], apiReq);

    // === Process default instance support ===
    

    rhoUtil.namespace(moduleNS, Process);

})(jQuery, Rho, Rho.util);
// Module Rho.WebView


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.WebView';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === WebView class definition ===

    function WebView() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    WebView.getId = function() { return currentDefaultID; }

    // === WebView instance properties ===

    rhoUtil.createPropsProxy(WebView.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === WebView instance methods ===

    rhoUtil.createMethodsProxy(WebView.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === WebView constants ===

    
            WebView.SCROLL_NONE = 'None'; 
    
            WebView.SCROLL_SCROLLBARS = 'Scrollbars'; 
    
            WebView.SCROLL_FINGER = 'FingerScroll'; 
    
            WebView.SAVE_FORMAT_JPEG = 'jpeg'; 
    



    // === WebView static properties ===

    rhoUtil.createPropsProxy(WebView, [
        { propName: 'framework', propAccess: 'r' }
      , { propName: 'fullScreen', propAccess: 'rw' }
      , { propName: 'enableZoom', propAccess: 'rw' }
      , { propName: 'enablePageLoadingIndication', propAccess: 'rw' }
      , { propName: 'enableWebPlugins', propAccess: 'rw' }
      , { propName: 'navigationTimeout', propAccess: 'rw' }
      , { propName: 'scrollTechnique', propAccess: 'r' }
      , { propName: 'fontFamily', propAccess: 'r' }
      , { propName: 'userAgent', propAccess: 'r' }
      , { propName: 'viewportEnabled', propAccess: 'r' }
      , { propName: 'viewportWidth', propAccess: 'r' }
      , { propName: 'cacheSize', propAccess: 'r' }
      , { propName: 'enableCache', propAccess: 'rw' }
      , { propName: 'acceptLanguage', propAccess: 'rw' }
      , { propName: 'zoomPage', propAccess: 'rw' }
      , { propName: 'textZoomLevel', propAccess: 'rw' }
      , { propName: 'activeTab', propAccess: 'r' }
    ], apiReq);

    // === WebView static methods ===

    rhoUtil.createMethodsProxy(WebView, [
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
          { methodName: 'refresh', nativeName: 'refresh', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ url, /* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'navigate', nativeName: 'navigate', valueCallbackIndex: 2 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'navigateBack', nativeName: 'navigateBack', valueCallbackIndex: 1 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'currentLocation', nativeName: 'currentLocation', valueCallbackIndex: 1 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'currentURL', nativeName: 'currentURL', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ javascriptText, /* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'executeJavascript', nativeName: 'executeJavascript', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ url, /* const rho::String& */ cookie, /* optional function */ oResult)
        , { methodName: 'setCookie', nativeName: 'setCookie', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ format, /* const rho::String& */ path, /* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'save', nativeName: 'save', valueCallbackIndex: 3 }
    
    ], apiReq);

    // === WebView default instance support ===
    

    rhoUtil.namespace(moduleNS, WebView);

})(jQuery, Rho, Rho.util);
// Module Rho.Barcode


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Barcode';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Barcode class definition ===

    function Barcode() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Barcode.getId = function() { return currentDefaultID; }

    // === Barcode instance properties ===

    rhoUtil.createPropsProxy(Barcode.prototype, [
        { propName: 'autoEnter', propAccess: 'rw' }
      , { propName: 'autoTab', propAccess: 'rw' }
      , { propName: 'hapticFeedback', propAccess: 'rw' }
      , { propName: 'linearSecurityLevel', propAccess: 'rw' }
      , { propName: 'scanTimeout', propAccess: 'rw' }
      , { propName: 'rasterMode', propAccess: 'rw' }
      , { propName: 'rasterHeight', propAccess: 'rw' }
      , { propName: 'aimType', propAccess: 'rw' }
      , { propName: 'timedAimDuration', propAccess: 'rw' }
      , { propName: 'sameSymbolTimeout', propAccess: 'rw' }
      , { propName: 'differentSymbolTimeout', propAccess: 'rw' }
      , { propName: 'aimMode', propAccess: 'rw' }
      , { propName: 'picklistMode', propAccess: 'rw' }
      , { propName: 'viewfinderMode', propAccess: 'rw' }
      , { propName: 'viewfinderX', propAccess: 'rw' }
      , { propName: 'viewfinderY', propAccess: 'rw' }
      , { propName: 'viewfinderWidth', propAccess: 'rw' }
      , { propName: 'viewfinderHeight', propAccess: 'rw' }
      , { propName: 'viewfinderFeedback', propAccess: 'rw' }
      , { propName: 'viewfinderFeedbackTime', propAccess: 'rw' }
      , { propName: 'focusMode', propAccess: 'rw' }
      , { propName: 'illuminationMode', propAccess: 'rw' }
      , { propName: 'dpmMode', propAccess: 'rw' }
      , { propName: 'inverse1dMode', propAccess: 'rw' }
      , { propName: 'poorQuality1dMode', propAccess: 'rw' }
      , { propName: 'beamWidth', propAccess: 'rw' }
      , { propName: 'dbpMode', propAccess: 'rw' }
      , { propName: 'klasseEins', propAccess: 'rw' }
      , { propName: 'adaptiveScanning', propAccess: 'rw' }
      , { propName: 'bidirectionalRedundancy', propAccess: 'rw' }
      , { propName: 'barcodeDataFormat', propAccess: 'rw' }
      , { propName: 'dataBufferSize', propAccess: 'rw' }
      , { propName: 'connectionIdleTimeout', propAccess: 'rw' }
      , { propName: 'disconnectBtOnDisable', propAccess: 'rw' }
      , { propName: 'displayBtAddressBarcodeOnEnable', propAccess: 'rw' }
      , { propName: 'enableTimeout', propAccess: 'rw' }
      , { propName: 'friendlyName', propAccess: 'r' }
      , { propName: 'lowBatteryScan', propAccess: 'rw' }
      , { propName: 'disableScannerDuringNavigate', propAccess: 'rw' }
      , { propName: 'decodeVolume', propAccess: 'rw' }
      , { propName: 'decodeDuration', propAccess: 'rw' }
      , { propName: 'decodeFrequency', propAccess: 'rw' }
      , { propName: 'invalidDecodeFrequency', propAccess: 'rw' }
      , { propName: 'decodeSound', propAccess: 'rw' }
      , { propName: 'invalidDecodeSound', propAccess: 'rw' }
      , { propName: 'scannerType', propAccess: 'r' }
      , { propName: 'allDecoders', propAccess: 'rw' }
      , { propName: 'aztec', propAccess: 'rw' }
      , { propName: 'chinese2of5', propAccess: 'rw' }
      , { propName: 'codabar', propAccess: 'rw' }
      , { propName: 'codabarClsiEditing', propAccess: 'rw' }
      , { propName: 'codabarMaxLength', propAccess: 'rw' }
      , { propName: 'codabarMinLength', propAccess: 'rw' }
      , { propName: 'codabarNotisEditing', propAccess: 'rw' }
      , { propName: 'codabarRedundancy', propAccess: 'rw' }
      , { propName: 'code11', propAccess: 'rw' }
      , { propName: 'code11checkDigitCount', propAccess: 'rw' }
      , { propName: 'code11maxLength', propAccess: 'rw' }
      , { propName: 'code11minLength', propAccess: 'rw' }
      , { propName: 'code11redundancy', propAccess: 'rw' }
      , { propName: 'code11reportCheckDigit', propAccess: 'rw' }
      , { propName: 'code128', propAccess: 'rw' }
      , { propName: 'code128checkIsBtTable', propAccess: 'rw' }
      , { propName: 'code128ean128', propAccess: 'rw' }
      , { propName: 'code128isbt128', propAccess: 'rw' }
      , { propName: 'code128isbt128ConcatMode', propAccess: 'rw' }
      , { propName: 'code128maxLength', propAccess: 'rw' }
      , { propName: 'code128minLength', propAccess: 'rw' }
      , { propName: 'code128other128', propAccess: 'rw' }
      , { propName: 'code128redundancy', propAccess: 'rw' }
      , { propName: 'code128securityLevel', propAccess: 'rw' }
      , { propName: 'compositeAb', propAccess: 'rw' }
      , { propName: 'compositeAbUccLinkMode', propAccess: 'rw' }
      , { propName: 'compositeAbUseUpcPreambleCheckDigitRules', propAccess: 'rw' }
      , { propName: 'compositeC', propAccess: 'rw' }
      , { propName: 'code39', propAccess: 'rw' }
      , { propName: 'code39code32Prefix', propAccess: 'rw' }
      , { propName: 'code39convertToCode32', propAccess: 'rw' }
      , { propName: 'code39fullAscii', propAccess: 'rw' }
      , { propName: 'code39maxLength', propAccess: 'rw' }
      , { propName: 'code39minLength', propAccess: 'rw' }
      , { propName: 'code39redundancy', propAccess: 'rw' }
      , { propName: 'code39reportCheckDigit', propAccess: 'rw' }
      , { propName: 'code39securityLevel', propAccess: 'rw' }
      , { propName: 'code39verifyCheckDigit', propAccess: 'rw' }
      , { propName: 'code93', propAccess: 'rw' }
      , { propName: 'code93maxLength', propAccess: 'rw' }
      , { propName: 'code93minLength', propAccess: 'rw' }
      , { propName: 'code93redundancy', propAccess: 'rw' }
      , { propName: 'd2of5', propAccess: 'rw' }
      , { propName: 'd2of5maxLength', propAccess: 'rw' }
      , { propName: 'd2of5minLength', propAccess: 'rw' }
      , { propName: 'd2of5redundancy', propAccess: 'rw' }
      , { propName: 'datamatrix', propAccess: 'rw' }
      , { propName: 'ean13', propAccess: 'rw' }
      , { propName: 'ean8', propAccess: 'rw' }
      , { propName: 'ean8convertToEan13', propAccess: 'rw' }
      , { propName: 'i2of5', propAccess: 'rw' }
      , { propName: 'i2of5convertToEan13', propAccess: 'rw' }
      , { propName: 'i2of5maxLength', propAccess: 'rw' }
      , { propName: 'i2of5minLength', propAccess: 'rw' }
      , { propName: 'i2of5redundancy', propAccess: 'rw' }
      , { propName: 'i2of5reportCheckDigit', propAccess: 'rw' }
      , { propName: 'i2of5verifyCheckDigit', propAccess: 'rw' }
      , { propName: 'korean3of5', propAccess: 'rw' }
      , { propName: 'korean3of5redundancy', propAccess: 'rw' }
      , { propName: 'korean3of5maxLength', propAccess: 'rw' }
      , { propName: 'korean3of5minLength', propAccess: 'rw' }
      , { propName: 'macroPdf', propAccess: 'rw' }
      , { propName: 'macroPdfBufferLabels', propAccess: 'rw' }
      , { propName: 'macroPdfConvertToPdf417', propAccess: 'rw' }
      , { propName: 'macroPdfExclusive', propAccess: 'rw' }
      , { propName: 'macroMicroPdf', propAccess: 'rw' }
      , { propName: 'macroMicroPdfBufferLabels', propAccess: 'rw' }
      , { propName: 'macroMicroPdfConvertToMicroPdf', propAccess: 'rw' }
      , { propName: 'macroMicroPdfExclusive', propAccess: 'rw' }
      , { propName: 'macroMicroPdfReportAppendInfo', propAccess: 'rw' }
      , { propName: 'matrix2of5', propAccess: 'rw' }
      , { propName: 'matrix2of5maxLength', propAccess: 'rw' }
      , { propName: 'matrix2of5minLength', propAccess: 'rw' }
      , { propName: 'matrix2of5reportCheckDigit', propAccess: 'rw' }
      , { propName: 'matrix2of5verifyCheckDigit', propAccess: 'rw' }
      , { propName: 'maxiCode', propAccess: 'rw' }
      , { propName: 'microPdf', propAccess: 'rw' }
      , { propName: 'microQr', propAccess: 'rw' }
      , { propName: 'msi', propAccess: 'rw' }
      , { propName: 'msiCheckDigits', propAccess: 'rw' }
      , { propName: 'msiCheckDigitScheme', propAccess: 'rw' }
      , { propName: 'msiMaxLength', propAccess: 'rw' }
      , { propName: 'msiMinLength', propAccess: 'rw' }
      , { propName: 'msiRedundancy', propAccess: 'rw' }
      , { propName: 'msiReportCheckDigit', propAccess: 'rw' }
      , { propName: 'pdf417', propAccess: 'rw' }
      , { propName: 'signature', propAccess: 'rw' }
      , { propName: 'signatureImageHeight', propAccess: 'rw' }
      , { propName: 'signatureImageWidth', propAccess: 'rw' }
      , { propName: 'signatureImageQuality', propAccess: 'rw' }
      , { propName: 'ausPostal', propAccess: 'rw' }
      , { propName: 'canPostal', propAccess: 'rw' }
      , { propName: 'dutchPostal', propAccess: 'rw' }
      , { propName: 'japPostal', propAccess: 'rw' }
      , { propName: 'ukPostal', propAccess: 'rw' }
      , { propName: 'ukPostalReportCheckDigit', propAccess: 'rw' }
      , { propName: 'us4state', propAccess: 'rw' }
      , { propName: 'us4stateFics', propAccess: 'rw' }
      , { propName: 'usPlanet', propAccess: 'rw' }
      , { propName: 'usPlanetReportCheckDigit', propAccess: 'rw' }
      , { propName: 'usPostNet', propAccess: 'rw' }
      , { propName: 'usPostNetReportCheckDigit', propAccess: 'rw' }
      , { propName: 'qrCode', propAccess: 'rw' }
      , { propName: 'gs1dataBar', propAccess: 'rw' }
      , { propName: 'gs1dataBarExpanded', propAccess: 'rw' }
      , { propName: 'gs1dataBarLimited', propAccess: 'rw' }
      , { propName: 'tlc39', propAccess: 'rw' }
      , { propName: 'trioptic39', propAccess: 'rw' }
      , { propName: 'trioptic39Redundancy', propAccess: 'rw' }
      , { propName: 'upcEanBookland', propAccess: 'rw' }
      , { propName: 'upcEanBooklandFormat', propAccess: 'rw' }
      , { propName: 'upcEanConvertGs1dataBarToUpcEan', propAccess: 'rw' }
      , { propName: 'upcEanCoupon', propAccess: 'rw' }
      , { propName: 'upcEanLinearDecode', propAccess: 'rw' }
      , { propName: 'upcEanRandomWeightCheckDigit', propAccess: 'rw' }
      , { propName: 'upcEanRetryCount', propAccess: 'rw' }
      , { propName: 'upcEanSecurityLevel', propAccess: 'rw' }
      , { propName: 'upcEanSupplemental2', propAccess: 'rw' }
      , { propName: 'upcEanSupplemental5', propAccess: 'rw' }
      , { propName: 'upcEanSupplementalMode', propAccess: 'rw' }
      , { propName: 'upca', propAccess: 'rw' }
      , { propName: 'upcaPreamble', propAccess: 'rw' }
      , { propName: 'upcaReportCheckDigit', propAccess: 'rw' }
      , { propName: 'upce0', propAccess: 'rw' }
      , { propName: 'upce0convertToUpca', propAccess: 'rw' }
      , { propName: 'upce0preamble', propAccess: 'rw' }
      , { propName: 'upce0reportCheckDigit', propAccess: 'rw' }
      , { propName: 'upce1', propAccess: 'rw' }
      , { propName: 'upce1convertToUpca', propAccess: 'rw' }
      , { propName: 'upce1preamble', propAccess: 'rw' }
      , { propName: 'upce1reportCheckDigit', propAccess: 'rw' }
      , { propName: 'webcode', propAccess: 'rw' }
      , { propName: 'webcodeDecodeGtSubtype', propAccess: 'rw' }
      , { propName: 'rsmModelNumber', propAccess: 'r' }
      , { propName: 'rsmSerialNumber', propAccess: 'r' }
      , { propName: 'rsmDateOfManufacture', propAccess: 'r' }
      , { propName: 'rsmDateOfService', propAccess: 'r' }
      , { propName: 'rsmBluetoothAddress', propAccess: 'r' }
      , { propName: 'rsmFirmwareVersion', propAccess: 'r' }
      , { propName: 'rsmDeviceClass', propAccess: 'r' }
      , { propName: 'rsmBatteryStatus', propAccess: 'r' }
      , { propName: 'rsmBatteryCapacity', propAccess: 'r' }
      , { propName: 'rsmBatteryId', propAccess: 'r' }
      , { propName: 'rsmBluetoothAuthentication', propAccess: 'rw' }
      , { propName: 'rsmBluetoothEncryption', propAccess: 'rw' }
      , { propName: 'rsmBluetoothPinCode', propAccess: 'rw' }
      , { propName: 'rsmBluetoothPinCodeType', propAccess: 'rw' }
      , { propName: 'rsmBluetoothReconnectionAttempts', propAccess: 'rw' }
      , { propName: 'rsmBluetoothBeepOnReconnectAttempt', propAccess: 'rw' }
      , { propName: 'rsmBluetoothHidAutoReconnect', propAccess: 'rw' }
      , { propName: 'rsmBluetoothFriendlyName', propAccess: 'rw' }
      , { propName: 'rsmBluetoothInquiryMode', propAccess: 'rw' }
      , { propName: 'rsmBluetoothAutoReconnect', propAccess: 'rw' }
      , { propName: 'rsmForceSavePairingBarcode', propAccess: 'rw' }
      , { propName: 'rsmLowBatteryIndication', propAccess: 'rw' }
      , { propName: 'rsmLowBatteryIndicationCycle', propAccess: 'rw' }
      , { propName: 'rsmScanLineWidth', propAccess: 'rw' }
      , { propName: 'rsmGoodScansDelay', propAccess: 'rw' }
      , { propName: 'rsmDecodeFeedback', propAccess: 'rw' }
      , { propName: 'rsmIgnoreCode128Usps', propAccess: 'rw' }
      , { propName: 'rsmScanTriggerWakeup', propAccess: 'rw' }
      , { propName: 'rsmMems', propAccess: 'rw' }
      , { propName: 'rsmProximityEnable', propAccess: 'rw' }
      , { propName: 'rsmProximityContinuous', propAccess: 'rw' }
      , { propName: 'rsmProximityDistance', propAccess: 'rw' }
      , { propName: 'rsmPagingEnable', propAccess: 'rw' }
      , { propName: 'rsmPagingBeepSequence', propAccess: 'rw' }
    ], apiReq, function(){ return this.getId(); });

    // === Barcode instance methods ===

    rhoUtil.createMethodsProxy(Barcode.prototype, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
          { methodName: 'enable', nativeName: 'enable', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'registerBluetoothStatus', nativeName: 'registerBluetoothStatus', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'start', nativeName: 'start', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stop', nativeName: 'stop', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'disable', nativeName: 'disable', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getSupportedProperties', nativeName: 'getSupportedProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'take', nativeName: 'take', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ command, /* optional function */ oResult)
        , { methodName: 'commandRemoteScanner', nativeName: 'commandRemoteScanner', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
        , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'clearAllProperties', nativeName: 'clearAllProperties', valueCallbackIndex: 0 }
    
    ], apiReq, function(){ return this.getId(); });

    // === Barcode constants ===

    
            Barcode.REDUNDANCY_AND_LENGTH = 'redundancyAndLength'; 
    
            Barcode.SHORT_OR_CODABAR = 'shortOrCodabar'; 
    
            Barcode.LONG_AND_SHORT = 'longAndShort'; 
    
            Barcode.ALL_TWICE = 'allTwice'; 
    
            Barcode.ALL_THRICE = 'allThrice'; 
    
            Barcode.RASTER_NONE = 'none'; 
    
            Barcode.RASTER_OPEN_ALWAYS = 'openAlways'; 
    
            Barcode.RASTER_SMART = 'smart'; 
    
            Barcode.RASTER_CYCLONE = 'cyclone'; 
    
            Barcode.AIMTYPE_TRIGGER = 'trigger'; 
    
            Barcode.AIMTYPE_TIMED_HOLD = 'timedHold'; 
    
            Barcode.AIMTYPE_TIMED_RELEASE = 'timedRelease'; 
    
            Barcode.AIMTYPE_PRESENTATION = 'presentation'; 
    
            Barcode.AIMTYPE_PRESS_AND_RELEASE = 'pressAndRelease'; 
    
            Barcode.AIMTYPE_CONTINUOUS_READ = 'continuousRead'; 
    
            Barcode.AIMMODE_NONE = 'none'; 
    
            Barcode.AIMMODE_DOT = 'dot'; 
    
            Barcode.AIMMODE_SLAB = 'slab'; 
    
            Barcode.AIMMODE_RETICLE = 'reticle'; 
    
            Barcode.PICKLIST_DISABLED = 'disabled'; 
    
            Barcode.PICKLIST_HARDWARE_RETICLE = 'hardwareReticle'; 
    
            Barcode.PICKLIST_SOFTWARE_RETICLE = 'softwareReticle'; 
    
            Barcode.VIEWFINDER_ENABLED = 'enabled'; 
    
            Barcode.VIEWFINDER_DISABLED = 'disabled'; 
    
            Barcode.VIEWFINDER_STATIC_RETICLE = 'staticReticle'; 
    
            Barcode.VIEWFINDER_DYNAMIC_RETICLE = 'dynamicReticle'; 
    
            Barcode.VF_FEEDBACK_ENABLED = 'enabled'; 
    
            Barcode.VF_FEEDBACK_DISABLED = 'disabled'; 
    
            Barcode.VF_FEEDBACK_RETICLE = 'reticle'; 
    
            Barcode.FOCUS_FIXED = 'fixed'; 
    
            Barcode.FOCUS_AUTO = 'auto'; 
    
            Barcode.ILLUMINATION_AUTO = 'auto'; 
    
            Barcode.ILLUMINATION_ALWAYS_ON = 'alwaysOn'; 
    
            Barcode.ILLUMINATION_ALWAYS_OFF = 'alwaysOff'; 
    
            Barcode.INVERSE_ENABLED = 'enabled'; 
    
            Barcode.INVERSE_DISABLED = 'disabled'; 
    
            Barcode.INVERSE_AUTO = 'auto'; 
    
            Barcode.BEAM_NORMAL = 'normal'; 
    
            Barcode.BEAM_WIDE = 'wide'; 
    
            Barcode.BEAM_NARROW = 'narrow'; 
    
            Barcode.DBP_NORMAL = 'normal'; 
    
            Barcode.DBP_COMPOSITE = 'composite'; 
    
            Barcode.FORMAT_BINARY = 'binary'; 
    
            Barcode.FORMAT_TEXT = 'text'; 
    
            Barcode.CODE11_CHECKDIGIT_NONE = 'none'; 
    
            Barcode.CODE11_CHECKDIGIT_ONE = 'one'; 
    
            Barcode.CODE11_CHECKDIGIT_TWO = 'two'; 
    
            Barcode.CODE128ISBT_NEVER = 'never'; 
    
            Barcode.CODE128ISBT_ALWAYS = 'always'; 
    
            Barcode.CODE128ISBT_AUTO = 'auto'; 
    
            Barcode.UCC_NEVER = 'never'; 
    
            Barcode.UCC_ALWAYS = 'always'; 
    
            Barcode.UCC_AUTO = 'auto'; 
    
            Barcode.I2OF5_VERIFY_NONE = 'none'; 
    
            Barcode.I2OF5_VERIFY_USS = 'uss'; 
    
            Barcode.I2OF5_VERIFY_OPCC = 'opcc'; 
    
            Barcode.MSI_CHECKDIGITS_ONE = 'one'; 
    
            Barcode.MSI_CHECKDIGITS_TWO = 'two'; 
    
            Barcode.MSI_CHECKDIGITS_MOD11 = 'mod11'; 
    
            Barcode.MSI_CHECKDIGITS_MOD10 = 'mod10'; 
    
            Barcode.BOOKLAND_ISBN10 = 'isbn10'; 
    
            Barcode.BOOKLAND_ISBN13 = 'isbn13'; 
    
            Barcode.UPCEAN_NONE = 'none'; 
    
            Barcode.UPCEAN_AUTO = 'auto'; 
    
            Barcode.UPCEAN_ALWAYS = 'always'; 
    
            Barcode.UPCEAN_SMART = 'smart'; 
    
            Barcode.UPCEAN_379 = '378or379'; 
    
            Barcode.UPCEAN_979 = '978or979'; 
    
            Barcode.UPCEAN_439 = '414or419or434or439'; 
    
            Barcode.UPCA_PREAMBLE_NONE = 'none'; 
    
            Barcode.UPCA_PREAMBLE_SYSTEMCHAR = 'systemChar'; 
    
            Barcode.UPCA_PREAMBLE_COUNTRY = 'countryAndSystemChars'; 
    
            Barcode.UPCE0_PREAMBLE_NONE = 'none'; 
    
            Barcode.UPCE0_PREAMBLE_SYSTEMCHAR = 'systemChar'; 
    
            Barcode.UPCE0_PREAMBLE_COUNTRY = 'countryAndSystemChars'; 
    
            Barcode.UPCE1_PREAMBLE_NONE = 'none'; 
    
            Barcode.UPCE1_PREAMBLE_SYSTEMCHAR = 'systemChar'; 
    
            Barcode.UPCE1_PREAMBLE_COUNTRY = 'countryAndSystemChars'; 
    
            Barcode.RSM_AUTORECONNECT_NONE = 'none'; 
    
            Barcode.RSM_AUTORECONNECT_ON_POWER = 'onPower'; 
    
            Barcode.RSM_AUTORECONNECT_ON_OUT_OF_RANGE = 'onOutOfRange'; 
    
            Barcode.RSM_AUTORECONNECT_ON_POWER_OUT_OF_RANGE = 'onPowerOutOfRange'; 
    


    // === Barcode hash keys ===
    
    
            Barcode.HK_BARCODE = "barcode"; 

            Barcode.HK_DATA = "data"; 

            Barcode.HK_DIRECTION = "direction"; 

            Barcode.HK_LENGTH = "length"; 

            Barcode.HK_SOURCE = "source"; 

            Barcode.HK_STATUS = "status"; 

            Barcode.HK_TIME = "time"; 

            Barcode.HK_TYPE = "type"; 


    // === Barcode static properties ===

    rhoUtil.createPropsProxy(Barcode, [
    ], apiReq);

    // === Barcode static methods ===

    rhoUtil.createMethodsProxy(Barcode, [
    
          // function(/* optional function */ oResult)
          { methodName: 'enumerate', nativeName: 'enumerate', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
    ], apiReq);

    // === Barcode default instance support ===
    

        rhoUtil.createPropsProxy(Barcode, [
            { propName: 'default:getDefault', propAccess: 'r' }
          , { propName: 'defaultID:getDefaultID::setDefaultID', propAccess: 'rw', customSet: function(id) {currentDefaultID = id;} }
        ], apiReq);

        Barcode.getId = function() {
            if (null == currentDefaultID) {
                currentDefaultID = Barcode.getDefaultID();
            }
            return currentDefaultID;
        }

        // === Barcode default instance properties ===

        rhoUtil.createPropsProxy(Barcode, [
            { propName: 'autoEnter', propAccess: 'rw' }
          , { propName: 'autoTab', propAccess: 'rw' }
          , { propName: 'hapticFeedback', propAccess: 'rw' }
          , { propName: 'linearSecurityLevel', propAccess: 'rw' }
          , { propName: 'scanTimeout', propAccess: 'rw' }
          , { propName: 'rasterMode', propAccess: 'rw' }
          , { propName: 'rasterHeight', propAccess: 'rw' }
          , { propName: 'aimType', propAccess: 'rw' }
          , { propName: 'timedAimDuration', propAccess: 'rw' }
          , { propName: 'sameSymbolTimeout', propAccess: 'rw' }
          , { propName: 'differentSymbolTimeout', propAccess: 'rw' }
          , { propName: 'aimMode', propAccess: 'rw' }
          , { propName: 'picklistMode', propAccess: 'rw' }
          , { propName: 'viewfinderMode', propAccess: 'rw' }
          , { propName: 'viewfinderX', propAccess: 'rw' }
          , { propName: 'viewfinderY', propAccess: 'rw' }
          , { propName: 'viewfinderWidth', propAccess: 'rw' }
          , { propName: 'viewfinderHeight', propAccess: 'rw' }
          , { propName: 'viewfinderFeedback', propAccess: 'rw' }
          , { propName: 'viewfinderFeedbackTime', propAccess: 'rw' }
          , { propName: 'focusMode', propAccess: 'rw' }
          , { propName: 'illuminationMode', propAccess: 'rw' }
          , { propName: 'dpmMode', propAccess: 'rw' }
          , { propName: 'inverse1dMode', propAccess: 'rw' }
          , { propName: 'poorQuality1dMode', propAccess: 'rw' }
          , { propName: 'beamWidth', propAccess: 'rw' }
          , { propName: 'dbpMode', propAccess: 'rw' }
          , { propName: 'klasseEins', propAccess: 'rw' }
          , { propName: 'adaptiveScanning', propAccess: 'rw' }
          , { propName: 'bidirectionalRedundancy', propAccess: 'rw' }
          , { propName: 'barcodeDataFormat', propAccess: 'rw' }
          , { propName: 'dataBufferSize', propAccess: 'rw' }
          , { propName: 'connectionIdleTimeout', propAccess: 'rw' }
          , { propName: 'disconnectBtOnDisable', propAccess: 'rw' }
          , { propName: 'displayBtAddressBarcodeOnEnable', propAccess: 'rw' }
          , { propName: 'enableTimeout', propAccess: 'rw' }
          , { propName: 'friendlyName', propAccess: 'r' }
          , { propName: 'lowBatteryScan', propAccess: 'rw' }
          , { propName: 'disableScannerDuringNavigate', propAccess: 'rw' }
          , { propName: 'decodeVolume', propAccess: 'rw' }
          , { propName: 'decodeDuration', propAccess: 'rw' }
          , { propName: 'decodeFrequency', propAccess: 'rw' }
          , { propName: 'invalidDecodeFrequency', propAccess: 'rw' }
          , { propName: 'decodeSound', propAccess: 'rw' }
          , { propName: 'invalidDecodeSound', propAccess: 'rw' }
          , { propName: 'scannerType', propAccess: 'r' }
          , { propName: 'allDecoders', propAccess: 'rw' }
          , { propName: 'aztec', propAccess: 'rw' }
          , { propName: 'chinese2of5', propAccess: 'rw' }
          , { propName: 'codabar', propAccess: 'rw' }
          , { propName: 'codabarClsiEditing', propAccess: 'rw' }
          , { propName: 'codabarMaxLength', propAccess: 'rw' }
          , { propName: 'codabarMinLength', propAccess: 'rw' }
          , { propName: 'codabarNotisEditing', propAccess: 'rw' }
          , { propName: 'codabarRedundancy', propAccess: 'rw' }
          , { propName: 'code11', propAccess: 'rw' }
          , { propName: 'code11checkDigitCount', propAccess: 'rw' }
          , { propName: 'code11maxLength', propAccess: 'rw' }
          , { propName: 'code11minLength', propAccess: 'rw' }
          , { propName: 'code11redundancy', propAccess: 'rw' }
          , { propName: 'code11reportCheckDigit', propAccess: 'rw' }
          , { propName: 'code128', propAccess: 'rw' }
          , { propName: 'code128checkIsBtTable', propAccess: 'rw' }
          , { propName: 'code128ean128', propAccess: 'rw' }
          , { propName: 'code128isbt128', propAccess: 'rw' }
          , { propName: 'code128isbt128ConcatMode', propAccess: 'rw' }
          , { propName: 'code128maxLength', propAccess: 'rw' }
          , { propName: 'code128minLength', propAccess: 'rw' }
          , { propName: 'code128other128', propAccess: 'rw' }
          , { propName: 'code128redundancy', propAccess: 'rw' }
          , { propName: 'code128securityLevel', propAccess: 'rw' }
          , { propName: 'compositeAb', propAccess: 'rw' }
          , { propName: 'compositeAbUccLinkMode', propAccess: 'rw' }
          , { propName: 'compositeAbUseUpcPreambleCheckDigitRules', propAccess: 'rw' }
          , { propName: 'compositeC', propAccess: 'rw' }
          , { propName: 'code39', propAccess: 'rw' }
          , { propName: 'code39code32Prefix', propAccess: 'rw' }
          , { propName: 'code39convertToCode32', propAccess: 'rw' }
          , { propName: 'code39fullAscii', propAccess: 'rw' }
          , { propName: 'code39maxLength', propAccess: 'rw' }
          , { propName: 'code39minLength', propAccess: 'rw' }
          , { propName: 'code39redundancy', propAccess: 'rw' }
          , { propName: 'code39reportCheckDigit', propAccess: 'rw' }
          , { propName: 'code39securityLevel', propAccess: 'rw' }
          , { propName: 'code39verifyCheckDigit', propAccess: 'rw' }
          , { propName: 'code93', propAccess: 'rw' }
          , { propName: 'code93maxLength', propAccess: 'rw' }
          , { propName: 'code93minLength', propAccess: 'rw' }
          , { propName: 'code93redundancy', propAccess: 'rw' }
          , { propName: 'd2of5', propAccess: 'rw' }
          , { propName: 'd2of5maxLength', propAccess: 'rw' }
          , { propName: 'd2of5minLength', propAccess: 'rw' }
          , { propName: 'd2of5redundancy', propAccess: 'rw' }
          , { propName: 'datamatrix', propAccess: 'rw' }
          , { propName: 'ean13', propAccess: 'rw' }
          , { propName: 'ean8', propAccess: 'rw' }
          , { propName: 'ean8convertToEan13', propAccess: 'rw' }
          , { propName: 'i2of5', propAccess: 'rw' }
          , { propName: 'i2of5convertToEan13', propAccess: 'rw' }
          , { propName: 'i2of5maxLength', propAccess: 'rw' }
          , { propName: 'i2of5minLength', propAccess: 'rw' }
          , { propName: 'i2of5redundancy', propAccess: 'rw' }
          , { propName: 'i2of5reportCheckDigit', propAccess: 'rw' }
          , { propName: 'i2of5verifyCheckDigit', propAccess: 'rw' }
          , { propName: 'korean3of5', propAccess: 'rw' }
          , { propName: 'korean3of5redundancy', propAccess: 'rw' }
          , { propName: 'korean3of5maxLength', propAccess: 'rw' }
          , { propName: 'korean3of5minLength', propAccess: 'rw' }
          , { propName: 'macroPdf', propAccess: 'rw' }
          , { propName: 'macroPdfBufferLabels', propAccess: 'rw' }
          , { propName: 'macroPdfConvertToPdf417', propAccess: 'rw' }
          , { propName: 'macroPdfExclusive', propAccess: 'rw' }
          , { propName: 'macroMicroPdf', propAccess: 'rw' }
          , { propName: 'macroMicroPdfBufferLabels', propAccess: 'rw' }
          , { propName: 'macroMicroPdfConvertToMicroPdf', propAccess: 'rw' }
          , { propName: 'macroMicroPdfExclusive', propAccess: 'rw' }
          , { propName: 'macroMicroPdfReportAppendInfo', propAccess: 'rw' }
          , { propName: 'matrix2of5', propAccess: 'rw' }
          , { propName: 'matrix2of5maxLength', propAccess: 'rw' }
          , { propName: 'matrix2of5minLength', propAccess: 'rw' }
          , { propName: 'matrix2of5reportCheckDigit', propAccess: 'rw' }
          , { propName: 'matrix2of5verifyCheckDigit', propAccess: 'rw' }
          , { propName: 'maxiCode', propAccess: 'rw' }
          , { propName: 'microPdf', propAccess: 'rw' }
          , { propName: 'microQr', propAccess: 'rw' }
          , { propName: 'msi', propAccess: 'rw' }
          , { propName: 'msiCheckDigits', propAccess: 'rw' }
          , { propName: 'msiCheckDigitScheme', propAccess: 'rw' }
          , { propName: 'msiMaxLength', propAccess: 'rw' }
          , { propName: 'msiMinLength', propAccess: 'rw' }
          , { propName: 'msiRedundancy', propAccess: 'rw' }
          , { propName: 'msiReportCheckDigit', propAccess: 'rw' }
          , { propName: 'pdf417', propAccess: 'rw' }
          , { propName: 'signature', propAccess: 'rw' }
          , { propName: 'signatureImageHeight', propAccess: 'rw' }
          , { propName: 'signatureImageWidth', propAccess: 'rw' }
          , { propName: 'signatureImageQuality', propAccess: 'rw' }
          , { propName: 'ausPostal', propAccess: 'rw' }
          , { propName: 'canPostal', propAccess: 'rw' }
          , { propName: 'dutchPostal', propAccess: 'rw' }
          , { propName: 'japPostal', propAccess: 'rw' }
          , { propName: 'ukPostal', propAccess: 'rw' }
          , { propName: 'ukPostalReportCheckDigit', propAccess: 'rw' }
          , { propName: 'us4state', propAccess: 'rw' }
          , { propName: 'us4stateFics', propAccess: 'rw' }
          , { propName: 'usPlanet', propAccess: 'rw' }
          , { propName: 'usPlanetReportCheckDigit', propAccess: 'rw' }
          , { propName: 'usPostNet', propAccess: 'rw' }
          , { propName: 'usPostNetReportCheckDigit', propAccess: 'rw' }
          , { propName: 'qrCode', propAccess: 'rw' }
          , { propName: 'gs1dataBar', propAccess: 'rw' }
          , { propName: 'gs1dataBarExpanded', propAccess: 'rw' }
          , { propName: 'gs1dataBarLimited', propAccess: 'rw' }
          , { propName: 'tlc39', propAccess: 'rw' }
          , { propName: 'trioptic39', propAccess: 'rw' }
          , { propName: 'trioptic39Redundancy', propAccess: 'rw' }
          , { propName: 'upcEanBookland', propAccess: 'rw' }
          , { propName: 'upcEanBooklandFormat', propAccess: 'rw' }
          , { propName: 'upcEanConvertGs1dataBarToUpcEan', propAccess: 'rw' }
          , { propName: 'upcEanCoupon', propAccess: 'rw' }
          , { propName: 'upcEanLinearDecode', propAccess: 'rw' }
          , { propName: 'upcEanRandomWeightCheckDigit', propAccess: 'rw' }
          , { propName: 'upcEanRetryCount', propAccess: 'rw' }
          , { propName: 'upcEanSecurityLevel', propAccess: 'rw' }
          , { propName: 'upcEanSupplemental2', propAccess: 'rw' }
          , { propName: 'upcEanSupplemental5', propAccess: 'rw' }
          , { propName: 'upcEanSupplementalMode', propAccess: 'rw' }
          , { propName: 'upca', propAccess: 'rw' }
          , { propName: 'upcaPreamble', propAccess: 'rw' }
          , { propName: 'upcaReportCheckDigit', propAccess: 'rw' }
          , { propName: 'upce0', propAccess: 'rw' }
          , { propName: 'upce0convertToUpca', propAccess: 'rw' }
          , { propName: 'upce0preamble', propAccess: 'rw' }
          , { propName: 'upce0reportCheckDigit', propAccess: 'rw' }
          , { propName: 'upce1', propAccess: 'rw' }
          , { propName: 'upce1convertToUpca', propAccess: 'rw' }
          , { propName: 'upce1preamble', propAccess: 'rw' }
          , { propName: 'upce1reportCheckDigit', propAccess: 'rw' }
          , { propName: 'webcode', propAccess: 'rw' }
          , { propName: 'webcodeDecodeGtSubtype', propAccess: 'rw' }
          , { propName: 'rsmModelNumber', propAccess: 'r' }
          , { propName: 'rsmSerialNumber', propAccess: 'r' }
          , { propName: 'rsmDateOfManufacture', propAccess: 'r' }
          , { propName: 'rsmDateOfService', propAccess: 'r' }
          , { propName: 'rsmBluetoothAddress', propAccess: 'r' }
          , { propName: 'rsmFirmwareVersion', propAccess: 'r' }
          , { propName: 'rsmDeviceClass', propAccess: 'r' }
          , { propName: 'rsmBatteryStatus', propAccess: 'r' }
          , { propName: 'rsmBatteryCapacity', propAccess: 'r' }
          , { propName: 'rsmBatteryId', propAccess: 'r' }
          , { propName: 'rsmBluetoothAuthentication', propAccess: 'rw' }
          , { propName: 'rsmBluetoothEncryption', propAccess: 'rw' }
          , { propName: 'rsmBluetoothPinCode', propAccess: 'rw' }
          , { propName: 'rsmBluetoothPinCodeType', propAccess: 'rw' }
          , { propName: 'rsmBluetoothReconnectionAttempts', propAccess: 'rw' }
          , { propName: 'rsmBluetoothBeepOnReconnectAttempt', propAccess: 'rw' }
          , { propName: 'rsmBluetoothHidAutoReconnect', propAccess: 'rw' }
          , { propName: 'rsmBluetoothFriendlyName', propAccess: 'rw' }
          , { propName: 'rsmBluetoothInquiryMode', propAccess: 'rw' }
          , { propName: 'rsmBluetoothAutoReconnect', propAccess: 'rw' }
          , { propName: 'rsmForceSavePairingBarcode', propAccess: 'rw' }
          , { propName: 'rsmLowBatteryIndication', propAccess: 'rw' }
          , { propName: 'rsmLowBatteryIndicationCycle', propAccess: 'rw' }
          , { propName: 'rsmScanLineWidth', propAccess: 'rw' }
          , { propName: 'rsmGoodScansDelay', propAccess: 'rw' }
          , { propName: 'rsmDecodeFeedback', propAccess: 'rw' }
          , { propName: 'rsmIgnoreCode128Usps', propAccess: 'rw' }
          , { propName: 'rsmScanTriggerWakeup', propAccess: 'rw' }
          , { propName: 'rsmMems', propAccess: 'rw' }
          , { propName: 'rsmProximityEnable', propAccess: 'rw' }
          , { propName: 'rsmProximityContinuous', propAccess: 'rw' }
          , { propName: 'rsmProximityDistance', propAccess: 'rw' }
          , { propName: 'rsmPagingEnable', propAccess: 'rw' }
          , { propName: 'rsmPagingBeepSequence', propAccess: 'rw' }
        ], apiReq, function(){ return this.getId(); });

        // === Barcode default instance methods ===

        rhoUtil.createMethodsProxy(Barcode, [
        
              // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
              { methodName: 'enable', nativeName: 'enable', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'registerBluetoothStatus', nativeName: 'registerBluetoothStatus', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'start', nativeName: 'start', valueCallbackIndex: 0 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'stop', nativeName: 'stop', valueCallbackIndex: 0 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'disable', nativeName: 'disable', valueCallbackIndex: 0 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'getSupportedProperties', nativeName: 'getSupportedProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
            , { methodName: 'take', nativeName: 'take', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* const rho::String& */ command, /* optional function */ oResult)
            , { methodName: 'commandRemoteScanner', nativeName: 'commandRemoteScanner', valueCallbackIndex: 1 }
        
              // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
            , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
            , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
            , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
        
              // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
            , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'clearAllProperties', nativeName: 'clearAllProperties', valueCallbackIndex: 0 }
        
        ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.namespace(moduleNS, Barcode);

})(jQuery, Rho, Rho.util);
// Module Rho.Signature


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Signature';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var currentDefaultID = null;

    // === Signature class definition ===

    function Signature() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    Signature.getId = function() { return currentDefaultID; }

    // === Signature instance properties ===

    rhoUtil.createPropsProxy(Signature.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Signature instance methods ===

    rhoUtil.createMethodsProxy(Signature.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === Signature constants ===

    
            Signature.COMPRESSION_FORMAT_JPG = 'jpg'; 
    
            Signature.COMPRESSION_FORMAT_PNG = 'png'; 
    
            Signature.COMPRESSION_FORMAT_BMP = 'bmp'; 
    
            Signature.OUTPUT_FORMAT_IMAGE = 'image'; 
    
            Signature.OUTPUT_FORMAT_DATAURI = 'dataUri'; 
    


    // === Signature hash keys ===
    
    
            Signature.HK_IMAGE_URI = "imageUri"; 

            Signature.HK_SIGNATURE_URI_DEPRECATED = "signature_uri"; 

            Signature.HK_STATUS = "status"; 

            Signature.HK_VECTOR_ARRAY = "vectorArray"; 


    // === Signature static properties ===

    rhoUtil.createPropsProxy(Signature, [
        { propName: 'compressionFormat', propAccess: 'rw' }
      , { propName: 'outputFormat', propAccess: 'rw' }
      , { propName: 'fileName', propAccess: 'rw' }
      , { propName: 'border', propAccess: 'rw' }
      , { propName: 'penColor', propAccess: 'rw' }
      , { propName: 'penWidth', propAccess: 'rw' }
      , { propName: 'bgColor', propAccess: 'rw' }
      , { propName: 'left', propAccess: 'rw' }
      , { propName: 'top', propAccess: 'rw' }
      , { propName: 'width', propAccess: 'rw' }
      , { propName: 'height', propAccess: 'rw' }
    ], apiReq);

    // === Signature static methods ===

    rhoUtil.createMethodsProxy(Signature, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
          { methodName: 'takeFullScreen', nativeName: 'takeFullScreen', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'show', nativeName: 'show', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'capture', nativeName: 'capture', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'clear', nativeName: 'clear', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hide', nativeName: 'hide', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'setVectorCallback', nativeName: 'setVectorCallback', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
    ], apiReq);

    // === Signature default instance support ===
    

    rhoUtil.namespace(moduleNS, Signature);

})(jQuery, Rho, Rho.util);
// Module Rho.Database


(function ($, rho, rhoUtil) {
    

    var moduleNS = 'Rho.Database';

    var executeSql = function(db, sqlStmt, isBatch, args) {
        return (sqlStmt === undefined) ? [] : db.execute(sqlStmt, isBatch, args);
    }


    // === Database class definition ===

    function Database() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:

            this.initialize.apply(this, arguments);

        }
    };

    // === Database instance members ===


    Database.prototype.initialize = function(/* const rho::String& */ dbPath, /* const rho::String& */ dbPartition) {
        this.dbPath = dbPath;
        this.db = new Rho.Database.SQLite3(dbPath, dbPartition);
    };


    Database.prototype.close = function() {
        if (this.db === null) {
            return false;
        }
        this.db.close();
        this.dbPath = null;
        this.db = null;
        return true;
    };

    Database.prototype.startTransaction = function() {
        this.db.startTransaction();
    };


    Database.prototype.commitTransaction = function() {
        this.db.commitTransaction();
    };


    Database.prototype.rollbackTransaction = function() {
        this.db.rollbackTransaction();
    };


    Database.prototype.lockDb = function() {
        this.db.lockDb();
    };


    Database.prototype.unlockDb = function() {
        this.db.unlockDb();
    };


    Database.prototype.isUiWaitForDb = function() {
        return this.db.isUiWaitForDb();
    };


    Database.prototype.executeSql = function(/* const rho::String& */ sqlStmt, /* const rho::Vector<rho::String>& */ args) {
        return executeSql(this.db, sqlStmt, false, args);
    };


    Database.prototype.executeBatchSql = function(/* const rho::String& */ sqlStmt, /* const rho::Vector<rho::String>& */ args) {
        return executeSql(this.db, sqlStmt, true, args);
    };


    Database.prototype.destroyTable = function(/* const rho::String& */ tableName) {
        this.db.destroyTables([tableName], []);
    };


    Database.prototype.destroyTables = function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap) {
        this.db.destroyTables(propertyMap['include'], propertyMap['exclude']);
    };


    Database.prototype.isTableExist = function(/* const rho::String& */ tableName) {
        return this.db.isTableExist(tableName);
    };


    Database.prototype.setDoNotBackupAttribute = function(/* bool */ setFlag) {
        setFlag = (setFlag === undefined) ? true : setFlag;
        if (Rho.System.getProperty('platform') === 'APPLE') {
            Rho.System.setDoNotBackupAttribute(this.dbPath             , setFlag);
            Rho.System.setDoNotBackupAttribute(this.dbPath + '.version', setFlag);
        }                         
    };


    // === Database static members ===



    // === Database default instance support ===



    rhoUtil.namespace(moduleNS, Database, true);

})(jQuery, Rho, Rho.util);
// Module rhoapi-native.rhosim

/* */