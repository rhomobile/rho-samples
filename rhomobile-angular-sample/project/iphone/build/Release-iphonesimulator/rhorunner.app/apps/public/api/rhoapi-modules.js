// WARNING! THIS FILE IS GENERATED AUTOMATICALLY! DO NOT EDIT IT MANUALLY!
// Module jquery-2.0.2-rho-custom.min

// Module rhoapi

var Rho = Rho || (function ($) {
    'use strict';

    // === API configuration ========================================================

    var thisFileName = 'rhoapi.js';

    var RHO_ID_PARAM = '__rhoID';
    var RHO_CLASS_PARAM = '__rhoClass';
    var RHO_CALLBACK_PARAM = '__rhoCallback';

    var API_CONTROLLER_URL = '/system/js_api_entrypoint';
    //var API_CALLBACK_BASE_URL = '/system/js_api_entrypoint';
    var API_CALLBACK_BASE_URL = '';

    var NOT_INSTANCE_ID = '0';

    // === simplified jQuery 1.9.1 parts =============================================

    var __$$ = {
        isFunction: function (obj) {
            return 'function' === typeof obj;
        },
    
        isPlainObject: function (obj) {
            return obj && 'object' === typeof obj;
        },
    
        isArray: function (obj) {
            return 'array' === typeof obj;
        },
    
        extend: function () {
        	var src, copyIsArray, copy, name, options, clone,
        		target = arguments[0] || {},
        		i = 1,
        		length = arguments.length,
        		deep = false;
    
        	// Handle a deep copy situation
        	if ( typeof target === "boolean" ) {
        		deep = target;
    
        		// skip the boolean and the target
        		target = arguments[ i ] || {};
        		i++;
        	}
    
        	// Handle case when target is a string or something (possible in deep copy)
        	if ( typeof target !== "object" && !__$$.isFunction(target) ) {
        		target = {};
        	}
    
        	// extend jQuery itself if only one argument is passed
        	if ( i === length ) {
        		target = this;
        		i--;
        	}
    
        	for ( ; i < length; i++ ) {
        		// Only deal with non-null/undefined values
        		if ( (options = arguments[ i ]) != null ) {
        			// Extend the base object
        			for ( name in options ) {
        				src = target[ name ];
        				copy = options[ name ];
    
        				// Prevent never-ending loop
        				if ( target === copy ) {
        					continue;
        				}
    
        				// Recurse if we're merging plain objects or arrays
        				if ( deep && copy && ( __$$.isPlainObject(copy) || (copyIsArray = __$$.isArray(copy)) ) ) {
        					if ( copyIsArray ) {
        						copyIsArray = false;
        						clone = src && __$$.isArray(src) ? src : [];
    
        					} else {
        						clone = src && __$$.isPlainObject(src) ? src : {};
        					}
    
        					// Never move original objects, clone them
        					target[ name ] = __$$.extend( deep, clone, copy );
    
        				// Don't bring in undefined values
        				} else if ( copy !== undefined ) {
        					target[ name ] = copy;
        				}
        			}
        		}
        	}
    
        	// Return the modified object
        	return target;
        },
    
        ajax: function (opts) {
    
            if (!opts) return;
    
            function newXhr() {
                if (typeof XMLHttpRequest !== 'undefined') {
                    return new XMLHttpRequest();
                } else {
                    var versions = ["MSXML2.XmlHttp.5.0",
                        "MSXML2.XmlHttp.4.0",
                        "MSXML2.XmlHttp.3.0",
                        "MSXML2.XmlHttp.2.0",
                        "Microsoft.XmlHttp"]
                    for (var i = 0, len = versions.length; i < len; i++) {
                        try {
                            return new ActiveXObject(versions[i]);
                        } catch (ex) {}
                    }
                }
                return null;
            }
    
            var xhr = newXhr();
    
            xhr.onreadystatechange = function () {
           		// not ready yet
                if(xhr.readyState < 4) return;
    
           		// error
                if(xhr.status !== 200 && xhr.status !== 0) {
                    // TODO: why 0 is success?
                    // Investigate a native side for iOS.
                    // It looks like it should return something wia HTTP.
                    (opts.error || function(){})(xhr, 'error', xhr.statusText);
                    return;
           		}
    
           		// success
                if(xhr.readyState === 4) {
                    var data = null;
                    try {
                        // this API supports JSON responses only
                        data = JSON.parse(xhr.responseText);
                    } catch(ex) {}
                    (opts.success || function(){})(data, 'success', xhr);
           		}
           	}
    
           	xhr.open(opts.type || 'get', opts.url || '', opts.async === true);
    
            var hdrs = opts.headers || {};
            for (var name in hdrs) {
                if (!hdrs.hasOwnProperty(name)) continue;
                xhr.setRequestHeader(name, hdrs[name]);
            }
    
           	xhr.send(opts.data);
        }
    };
    
    // use original jQuery if available
    if (null != $) {
        // __$$ = $;
    }

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

    function toBool(value) {
        if (value && 'string' == typeof value) {
            return (value.toLowerCase() == "true")
        }
        return false;
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

        var value = __$$.extend(result instanceof Array ? [] : {}, result);

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

    function wrapFunctions(key, value) {
        if ('function' != typeof value) return value;

        return RHO_CALLBACK_PARAM + ":" + prepareCallback(value, true);
    }

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

        var cmdText = JSON.stringify(cmd, wrapFunctions);
        //console.log(cmdText);

        var result = null;

        function handleResult(rawResult) {
            result = jsValue(rawResult);
            if (valueCallback) {
                valueCallback(result);
            }
        }

        function handleError(errObject) {
            throw errObject.message;
        }

        Rho.platform.nativeApiCall(cmdText, null != valueCallback, function (result) {
            if (result['error'])
                handleError(result['error']);
            else
                handleResult(result['result']);
        });

        return (null != valueCallback) ? null : result;
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

    // Here is default (fallback option) implementation of property using explicit accessors.
    // It will be used in case we have no any support for natural props syntax in a browser.
    // Usage sample: obj.setSomething(123), var abc = obj.getSomething()
    // ====================================================================================
    var createPropProxy_fallback = function (obj, propDescr, getter, setter) {
        var propName = propDescr.split(':')[0];

        function accessorName(accessor, propDescr) {
            var names = propDescr.split(':');
            var propName = names[0];
            var getterName = names[1];
            var setterName = names[2];

            if (('get' == accessor) && getterName)
                return getterName;

            if (('set' == accessor) && setterName)
                return setterName;

            return accessor + propName.charAt(0).toUpperCase() + propName.slice(1);
        }

        if (null != getter && 'function' == typeof getter) {
            obj[accessorName('get', propDescr)] = getter; 
        }
        if (null != setter && 'function' == typeof setter) {
            obj[accessorName('set', propDescr)] = setter; 
        }
    };

    var createPropProxy = createPropProxy_fallback;

    if (propsSupport.js185) {
        // the best case, js185 props are supported
        createPropProxy = function (obj, propDescr, getter, setter) {
            var propName = propDescr.split(':')[0];

            // TODO: implement enumeration of propProxy to extend target namespace with them.
            var js185PropDef = {configurable: true, enumerable: false /* true */};
            if (null != getter && 'function' == typeof getter) {
                js185PropDef['get'] = getter;
            }
            if (null != setter && 'function' == typeof setter) {
                js185PropDef['set'] = setter;
            }
            Object.defineProperty(obj, propName, js185PropDef);
        };
    } else if (propsSupport.ffHackMethod) {
        // backup option, props are supported with firefox hack
        createPropProxy = function (obj, propDescr, getter, setter) {
            var propName = propDescr.split(':')[0];

            obj.__defineGetter__(propName, getter);
            obj.__defineSetter__(propName, setter);
        };
    } else {
        // Sorry, no luck. We able provide just a default implementation with explicit accessors.
        // It is the best thing we can do in this case.
    }

    // ====================================================================================

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
                    return customFunc.apply(this, arguments);
            } catch(ex) {
                throw "Custom accessor function exception: " + ex;
            }

            return apiReqFunc({
                instanceId: ('function' == typeof idFunc) ? idFunc.apply(this, []) : NOT_INSTANCE_ID,
                args: arguments,
                method: isSet ? methodSet : methodGet,
                valueCallbackIndex: (isSet ? 1 : 0)
            });
        };
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
            var propAccess = propDef['propAccess'];

            var getter = (0 <= propAccess.indexOf('r')) ? propAccessReqFunc(apiReq, propDef['propName'], 'r', idFunc, propDef['customGet']) : null;
            var setter = (0 <= propAccess.indexOf('w')) ? propAccessReqFunc(apiReq, propDef['propName'], 'w', idFunc, propDef['customSet']) : null;

            try {
                createPropProxy(obj, propDef['propName'], getter, setter);
            } catch (ex) {
                // we unable to create property with this name, so log it
                incompatibleProps.push(name);
            }
            // create explicit accessors
            createPropProxy_fallback(obj, propDef['propName'], getter, setter);
        }
    }

    // entity property support =======================================================

    function createRawPropsProxy(obj, propDefs, force_fallback ) {
        if (!(propDefs instanceof Array))
            throw 'Property definitions list should be Array instance';

        if (createPropProxy != createPropProxy_fallback || true == force_fallback) {
            for (var i=0; i<propDefs.length; i++) {
                var propDef = propDefs[i];

                try {
                    createPropProxy(obj, propDef['propName'], propDef['propGetter'], propDef['propSetter']);
                } catch (ex) {
                    // we unable to create property with this name, so log it
                    incompatibleProps.push(name);
                }
            }
        }
    }

    // === Method calls =========================================================

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

    function namespaceAlias(ns, parent, alias) {
        if (!parent) throw 'No parent namespace for alias!';
        if (parent[alias]) throw 'Alias definition conflict!';

        parent[alias] = ns;
    }

    // === Factory handling =========================================================

    function objectForClass(className, id) {
        var instObject = {};
        instObject[RHO_CLASS_PARAM] = className;
        instObject[RHO_ID_PARAM] = id;
        return new (namespace(className))(instObject);
    }

    // === Modules loading implementation ============================================

    function appendDomElement(target, tagName, attributes) {
        var elm = document.createElement(tagName);
        for (var name in attributes) {
            if (!attributes.hasOwnProperty(name)) continue;
            elm.setAttribute(name, attributes[name]);
        }
        target.appendChild(elm);
    }


    function loadCSS(url) {
        appendDomElement(document.getElementsByTagName('head')[0], 'link', {
            'rel': 'stylesheet',
            'href': url
        });
    }

    function loadScript(url) {
        appendDomElement(document.getElementsByTagName('head')[0], 'script', {
            'type': 'text/javascript',
            'src': url
        });
    }

    function findThisScriptElement(scriptName) {
        var elm = null;
        var scripts = document.getElementsByTagName('script');

        for (var i=0; i<scripts.length; i++) {
            var url = (scripts[i].getAttribute('src') || '').replace(/\?.*$/gi, ''); // w/o a query part of URL
            if (url.indexOf(scriptName, url.length - scriptName.length) !== -1) {
                elm = scripts[i];
                break;
            }
        }
        return elm;
    }

    var apiCoreFileElement = findThisScriptElement(thisFileName);

    function loadApiModule(moduleName) {
        if (null == apiCoreFileElement || null == moduleName || !moduleName) return;

        var apiCoreFileURL = apiCoreFileElement.getAttribute('src');
        loadScript(apiCoreFileURL.replace(thisFileName, moduleName + '.js'));
    }

    function loadApiModules(moduleNames) {
        if (null == moduleNames) return;

        var modules = [];
        if ('object' == typeof moduleNames && 'Array' == moduleNames.constructor.name)
            modules = moduleNames;
        if ('string' == typeof moduleNames)
            modules = moduleNames.trim().split(/[,\s]+/);

        for (var i = 0; i < modules.length; i++) {
            var module = modules[i].trim();
            if (0 < module.length) {
                module = (0 == module.indexOf('Rho.')) ? module : 'rho.'+module;
                loadApiModule(module);
            }
        }
    }

    if (null != apiCoreFileElement ) {
        loadApiModules(apiCoreFileElement.getAttribute('data-api-modules'));
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
                    err = resultObj['error'];
                    if (!err)
                        result = jsValue(resultObj['result']);
                }
                opts.callback(result, err);
            }

            if (!opts.isPersistent)
                delete pendingCallbacks[cbId];
        }
    };

    // === Native API call ===========================================================

    var apiPort = 'RHO_AJAX-->12345<--PORT_NUMBER'; // to be set at run or build time.
    var apiBaseUrl = 'http://127.0.0.1';
    var apiUrl = null;

    function apiControllerUrl() {
        // it has been already detected
        if (apiUrl)
            return apiUrl;

        // it may be hardcoded by developer in html this way:
        //
        //      window['__rho_ajaxBaseUrl'] = 'http://some_server:12345/some/root/path';
        //
        var baseUrl = window[Rho.util.flag.API_AJAX_URL];
        if (baseUrl)
            return (apiUrl = baseUrl);

        // it should be a default value for other protocols
        if (0 != window.location.protocol.indexOf('file'))
            return (apiUrl = API_CONTROLLER_URL);

        // in case of none of above we are going to detect it
        var portStr = apiPort.replace(/[\-<>A-Z_]*/g, '');
        var port = Number(portStr);

        if (0 < portStr.length && !isNaN(port))
            return (apiUrl = (apiBaseUrl.replace(/\/$/, '') +':'+ port + API_CONTROLLER_URL));

        throw 'Unknown API AJAX URL for application loaded with file:// protocol';
    }

    function nativeApiCall_ajax(cmdText, async, resultHandler) {
        __$$.ajax({
            async: async,
            type: 'post',
            url: apiControllerUrl(),
            data: cmdText,
            dataType: 'json',
            headers: {'Accept': 'text/plain'},
            success: function (data) {
                resultHandler(data);
            },
            error: function (xhr, status, message) {
                resultHandler({error: {message: message, code: xhr.status}});
            }
        });
    }

    // === Old API support ===========================================================

    function importOldApiTo(namespace) {
        // move non-conflicting modules from old js api to this one
        if ('undefined' != typeof window.RhoOld) {
            if ('object' == typeof window.RhoOld) {
                for (var prop in window.RhoOld) {
                    if (window.RhoOld.hasOwnProperty(prop)
                        && 'undefined' != typeof window.RhoOld[prop]
                        && 'undefined' == typeof namespace[prop]) {

                        namespace[prop] = window.RhoOld[prop];
                    }
                }
            }
            //delete window.RhoOld;
            window.RhoOld = undefined;
        }
        return namespace;
    }

    // === Utility internal methods ==================================================

    var rhoUtil = {
        flag: {
            API_AJAX_URL: '__rho_apiAjaxURL',
            USE_AJAX_BRIDGE: '__rho_useAjaxBridge',
            NATIVE_BRIDGE_TYPE: '__rho_nativeBridgeType'
        },
        loadApiModules: loadApiModules,
        namespace: namespace,
        namespaceAlias: namespaceAlias,
        apiReqFor: apiReqFor,
        namesToProps: namesToProps,
        namesToArray: namesToArray,
        createPropsProxy: createPropsProxy,
        createRawPropsProxy: createRawPropsProxy,
        createMethodsProxy: createMethodsProxy,
        methodAccessReqFunc: methodAccessReqFunc,
        incompatibleProps: incompatibleProps,
        rhoIdParam: function () { return RHO_ID_PARAM },
        rhoClassParam: function () { return RHO_CLASS_PARAM },
        nextId: nextId
    };

    var rhoPlatform = {
        id: {
            AJAX: 'ajax',
            AUTO: 'auto',
            RHOSIMULATOR: 'rhosimulator',
            ANDROID: 'android',
            IPHONE:  'iphone',
            WP8: 'wp8',
            WM: 'wm',
            WIN32: 'win32'
        },
        nativeApiCall: nativeApiCall_ajax,
        nativeApiResult: function(){/* intentionally empty stub function */}
    }

    // === Public interface ==========================================================

    var rho = importOldApiTo({
            jQuery: __$$,
            util: rhoUtil,
            platform: rhoPlatform,
            callbackHandler: callbackHandler
    });

    // === js-to-native bridges ======================================================

    /* ========================================================================
    You can force bridge type will be used in a following ways:

        window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] = rhoPlatform.id.ANDROID;
        window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] = 'android';
        window['__rho_nativeBridgeType'] = 'android';

    Feel free to define it at any moment.
    ======================================================================== */

    var RHO_API_CALL_TAG = '__rhoNativeApiCall';
    var RHO_API_TAG = '__rhoNativeApi';

    var bridges = {};
    var addBridge = function(platformId, bridgeFactory) {
        bridges[platformId] = function() {
            var bridge = bridgeFactory();
            bridge.apiCall.platformId = platformId;
            return bridge;
        };
    };

    addBridge(rhoPlatform.id.ANDROID, function() {
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var nativeApiResult = {};
                if (window[RHO_API_TAG] && 'function' == typeof window[RHO_API_TAG]['apiCall']) {
                    nativeApiResult = window[RHO_API_TAG].apiCall(cmdText, async);
                } else {
                    nativeApiResult = prompt(cmdText, RHO_API_CALL_TAG + ':prompt');
                }
                resultHandler(JSON.parse(nativeApiResult));
            }
        };
    });

    addBridge(rhoPlatform.id.IPHONE, function() {
        return window[RHO_API_TAG] || {
            apiCall: function (cmdText, async, resultHandler) {
                var headers = {};
                headers[RHO_API_CALL_TAG] = cmdText;
                __$$.ajax({
                    async: async,
                    type: 'head',
                    url: '/!'+RHO_API_TAG+'?' + (+new Date()),
                    dataType: 'json',
                    headers: headers,
                    success: function (data, status, jqXHR) {
                        resultHandler(JSON.parse(jqXHR.responseText));
                    },
                    error: function (xhr, status, message) {
                        resultHandler({error: {message: message, code: xhr.status}});
                    }
                });
            }
        };
    });

    addBridge(rhoPlatform.id.WP8, function() {
        var apiResult = undefined;
        rhoPlatform.nativeApiResult = function(result) { apiResult = result; };
        window['__rhoNativeApiResult'] = rhoPlatform.nativeApiResult;

        return {
            apiCall: function (cmdText, async, resultHandler) {
                window.external.notify(cmdText);
                resultHandler(JSON.parse(apiResult));
            }
        }
    });

    addBridge(rhoPlatform.id.WM, function() {
        var bridge = new WebkitBridge();
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var apiResult = bridge.framework(cmdText);
                resultHandler(JSON.parse(apiResult));
            }
        }
    });

    addBridge(rhoPlatform.id.RHOSIMULATOR, function() {
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var nativeApiResult = {};

                if (window[RHO_API_TAG] && 'function' == typeof window[RHO_API_TAG]['apiCall']) {
                    nativeApiResult = window[RHO_API_TAG].apiCall(cmdText, async);
                }
                resultHandler(JSON.parse(nativeApiResult));
            }
        };
    });

    addBridge(rhoPlatform.id.WIN32, function() {
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var nativeApiResult = {};

                if (window[RHO_API_TAG] && 'function' == typeof window[RHO_API_TAG]['apiCall']) {
                    nativeApiResult = window[RHO_API_TAG].apiCall(cmdText, async);
                }
                resultHandler(JSON.parse(nativeApiResult));
            }
        };
    });

    var ajaxBridgeApiCall = rhoPlatform.nativeApiCall;
    addBridge(rhoPlatform.id.AJAX, function() {
        return {
            apiCall: ajaxBridgeApiCall
        }
    });

    // the order is important
    var bridgeMapping = [
        [/RhoSimulator/                    , bridges[rhoPlatform.id.RHOSIMULATOR]],
        [/Android/                         , bridges[rhoPlatform.id.ANDROID]     ],
        [/iPhone|iPod|iPad/                , bridges[rhoPlatform.id.IPHONE]      ],
        [/Windows\s+Phone/                 , bridges[rhoPlatform.id.WP8]         ],
        [/Windows\s+(?:Mobile|CE)|WM [0-9]/, bridges[rhoPlatform.id.WM]          ],
        [/Windows/                         , bridges[rhoPlatform.id.WIN32]       ]
    ];

    // autodetect a bridge type
    var detectedPlatformBridge = null;
    for (var i = 0; i < bridgeMapping.length; ++i) {
        if (bridgeMapping[i][0].test(navigator.userAgent)) {
            detectedPlatformBridge = bridgeMapping[i][1];
            break;
        }
    }

    if (!detectedPlatformBridge) {
        if (console && console.warn)
            console.warn('User-Agent [' + navigator.userAgent + '] does not match any known platform. Falling back to use AJAX bridge by default.');
        detectedPlatformBridge = bridges[rhoPlatform.id.AJAX];
    }

    rhoPlatform.nativeApiCall = function() {
        // use forced bridge type value in case it defined,
        // otherwise use auto-detected bridge type
        var platformBridge = bridges[window[rhoUtil.flag.NATIVE_BRIDGE_TYPE]] || detectedPlatformBridge;

        platformBridge().apiCall.apply(this, arguments);
    }

    return rho;

})('undefined' == typeof jQuery ? undefined : jQuery);
// Module Rho.Application


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Application';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === Application instance properties ===

    rhoUtil.createPropsProxy(Application.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Application instance methods ===

    rhoUtil.createMethodsProxy(Application.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Application.prototype, [
    ]);

    // === Application constants ===

    
            Application.APP_EVENT_ACTIVATED = 'Activated'; 
    
            Application.APP_EVENT_CONFIGCONFLICT = 'ConfigConflict'; 
    
            Application.APP_EVENT_DBMIGRATESOURCE = 'DBMigrateSource'; 
    
            Application.APP_EVENT_DEACTIVATED = 'Deactivated'; 
    
            Application.APP_EVENT_SCREEN_OFF = 'ScreenOff'; 
    
            Application.APP_EVENT_SCREEN_ON = 'ScreenOn'; 
    
            Application.APP_EVENT_SYNCUSERCHANGED = 'SyncUserChanged'; 
    
            Application.APP_EVENT_UICREATED = 'UICreated'; 
    
            Application.APP_EVENT_UIDESTROYED = 'UIDestroyed'; 
    



    // === Application static properties ===

    rhoUtil.createPropsProxy(Application, [
        { propName: 'appBundleFolder', propAccess: 'r' }
      , { propName: 'appsBundleFolder', propAccess: 'r' }
      , { propName: 'bundleFolder', propAccess: 'r' }
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
      , { propName: 'appName', propAccess: 'r' }
      , { propName: 'locale', propAccess: 'r' }
      , { propName: 'country', propAccess: 'r' }
      , { propName: 'nativeMenu', propAccess: 'rw' }
      , { propName: 'defaultNativeMenu', propAccess: 'r' }
      , { propName: 'securityTokenNotPassed', propAccess: 'r' }
      , { propName: 'invalidSecurityTokenStartPath', propAccess: 'r' }
      , { propName: 'rhoPlatformVersion', propAccess: 'r' }
      , { propName: 'badLinkURI', propAccess: 'r' }
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
    
    ], apiReq);

    // === Application default instance support ===
    

    rhoUtil.namespace(moduleNS, Application);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Database


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Database';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === Database instance properties ===

    rhoUtil.createPropsProxy(Database.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Database instance methods ===

    rhoUtil.createMethodsProxy(Database.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Database.prototype, [
    ]);

    // === Database constants ===

    



    // === Database static properties ===

    rhoUtil.createPropsProxy(Database, [
    ], apiReq);

    // === Database static methods ===

    rhoUtil.createMethodsProxy(Database, [
    
    ], apiReq);

    // === Database default instance support ===
    

    rhoUtil.namespace(moduleNS, Database);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Database.SQLite3


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Database.SQLite3';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    

    rhoUtil.createRawPropsProxy(SQLite3.prototype, [
    ]);

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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Intent


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Intent';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Intent class definition ===

    function Intent() {
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

    // === Intent instance properties ===

    rhoUtil.createPropsProxy(Intent.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Intent instance methods ===

    rhoUtil.createMethodsProxy(Intent.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Intent.prototype, [
    ]);

    // === Intent constants ===

    
            Intent.BROADCAST = 'broadcast'; 
    
            Intent.START_ACTIVITY = 'startActivity'; 
    
            Intent.START_SERVICE = 'startService'; 
    



    // === Intent static properties ===

    rhoUtil.createPropsProxy(Intent, [
    ], apiReq);

    // === Intent static methods ===

    rhoUtil.createMethodsProxy(Intent, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ params, /* optional function */ oResult)
          { methodName: 'send', nativeName: 'send', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'startListening', nativeName: 'startListening', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopListening', nativeName: 'stopListening', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === Intent default instance support ===
    

    rhoUtil.namespace(moduleNS, Intent);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Log


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Log';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === Log instance properties ===

    rhoUtil.createPropsProxy(Log.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Log instance methods ===

    rhoUtil.createMethodsProxy(Log.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Log.prototype, [
    ]);

    // === Log constants ===

    
            Log.DEST_FILE = 'file'; 
    
            Log.DEST_OUTPUT = 'stdio'; 
    
            Log.DEST_URI = 'uri'; 
    
            Log.LEVEL_ERROR = 3;
    
            Log.LEVEL_FATAL = 4;
    
            Log.LEVEL_INFO = 1;
    
            Log.LEVEL_TRACE = 0;
    
            Log.LEVEL_WARNING = 2;
    



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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeMenubar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NativeMenubar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === NativeMenubar instance properties ===

    rhoUtil.createPropsProxy(NativeMenubar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeMenubar instance methods ===

    rhoUtil.createMethodsProxy(NativeMenubar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NativeMenubar.prototype, [
    ]);

    // === NativeMenubar constants ===

    



    // === NativeMenubar static properties ===

    rhoUtil.createPropsProxy(NativeMenubar, [
        { propName: 'mainMenu', propAccess: 'rw' }
      , { propName: 'extraMenu', propAccess: 'rw' }
      , { propName: 'mainButton', propAccess: 'rw' }
      , { propName: 'extraButton', propAccess: 'rw' }
      , { propName: 'defaultMainMenu', propAccess: 'r' }
    ], apiReq);

    // === NativeMenubar static methods ===

    rhoUtil.createMethodsProxy(NativeMenubar, [
    
    ], apiReq);

    // === NativeMenubar default instance support ===
    

    rhoUtil.namespace(moduleNS, NativeMenubar);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeTabbar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NativeTabbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === NativeTabbar instance properties ===

    rhoUtil.createPropsProxy(NativeTabbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeTabbar instance methods ===

    rhoUtil.createMethodsProxy(NativeTabbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NativeTabbar.prototype, [
    ]);

    // === NativeTabbar constants ===

    
            NativeTabbar.ON_TAB_FOCUS = 'onTabFocus'; 
    
            NativeTabbar.ON_TAB_NEW_ERROR = 'onTabNewError'; 
    



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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeToolbar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NativeToolbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === NativeToolbar instance properties ===

    rhoUtil.createPropsProxy(NativeToolbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeToolbar instance methods ===

    rhoUtil.createMethodsProxy(NativeToolbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NativeToolbar.prototype, [
    ]);

    // === NativeToolbar constants ===

    
            NativeToolbar.BACK = 'back'; 
    
            NativeToolbar.CLOSE = 'close'; 
    
            NativeToolbar.EXIT = 'exit'; 
    
            NativeToolbar.FULLSCREEN = 'fullscreen'; 
    
            NativeToolbar.HOME = 'home'; 
    
            NativeToolbar.LOG = 'log'; 
    
            NativeToolbar.MINIMIZE = 'minimize'; 
    
            NativeToolbar.OPTIONS = 'options'; 
    
            NativeToolbar.REFRESH = 'refresh'; 
    
            NativeToolbar.SEPARATOR = 'separator'; 
    
            NativeToolbar.SIP = 'SIP'; 
    
            NativeToolbar.SYNC = 'sync'; 
    



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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Navbar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Navbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === Navbar instance properties ===

    rhoUtil.createPropsProxy(Navbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Navbar instance methods ===

    rhoUtil.createMethodsProxy(Navbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Navbar.prototype, [
    ]);

    // === Navbar constants ===

    



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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Network


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Network';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === Network instance properties ===

    rhoUtil.createPropsProxy(Network.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Network instance methods ===

    rhoUtil.createMethodsProxy(Network.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Network.prototype, [
    ]);

    // === Network constants ===

    
            Network.AUTH_BASIC = 'basic'; 
    



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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NewORM


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NewORM';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === NewORM class definition ===

    function NewORM() {
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

    // === NewORM instance properties ===

    rhoUtil.createPropsProxy(NewORM.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NewORM instance methods ===

    rhoUtil.createMethodsProxy(NewORM.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NewORM.prototype, [
    ]);

    // === NewORM constants ===

    



    // === NewORM static properties ===

    rhoUtil.createPropsProxy(NewORM, [
    ], apiReq);

    // === NewORM static methods ===

    rhoUtil.createMethodsProxy(NewORM, [
    
          // function(/* optional function */ oResult)
          { methodName: 'useNewOrm', nativeName: 'useNewOrm', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getClientId', nativeName: 'getClientId', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'haveLocalChanges', nativeName: 'haveLocalChanges', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'databaseLocalReset', nativeName: 'databaseLocalReset', valueCallbackIndex: 0 }
    
          // function(/* bool */ resetLocalModels, /* optional function */ oResult)
        , { methodName: 'databaseClientReset', nativeName: 'databaseClientReset', valueCallbackIndex: 1 }
    
          // function(/* const rho::Vector<rho::String>& */ models, /* bool */ resetClientInfo, /* bool */ resetLocalModels, /* optional function */ oResult)
        , { methodName: 'databaseFullResetEx', nativeName: 'databaseFullResetEx', valueCallbackIndex: 3 }
    
          // function(/* bool */ resetClientInfo, /* bool */ resetLocalModels, /* optional function */ oResult)
        , { methodName: 'databaseFullReset', nativeName: 'databaseFullReset', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'databaseFullResetAndLogout', nativeName: 'databaseFullResetAndLogout', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'databaseFullclientResetAndLogout', nativeName: 'databaseFullclientResetAndLogout', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'generateId', nativeName: 'generateId', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NewORM default instance support ===
    

    rhoUtil.namespace(moduleNS, NewORM);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NewORMModel


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NewORMModel';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === NewORMModel class definition ===

    function NewORMModel() {
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
            
                this.init.apply(this, arguments);
            
        }
    };

    // === NewORMModel instance properties ===

    rhoUtil.createPropsProxy(NewORMModel.prototype, [
        { propName: 'loaded', propAccess: 'rw' }
      , { propName: 'model_name', propAccess: 'rw' }
      , { propName: 'sync_type', propAccess: 'rw' }
      , { propName: 'sync_priority', propAccess: 'rw' }
      , { propName: 'partition', propAccess: 'rw' }
      , { propName: 'source_id', propAccess: 'rw' }
      , { propName: 'fixed_schema', propAccess: 'rw' }
      , { propName: 'freezed', propAccess: 'rw' }
      , { propName: 'associations', propAccess: 'rw' }
    ], apiReq, function(){ return this.getId(); });

    // === NewORMModel instance methods ===

    rhoUtil.createMethodsProxy(NewORMModel.prototype, [
    
          // function(/* const rho::String& */ modelName, /* optional function */ oResult)
          { methodName: 'init', nativeName: 'init', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'initModel', nativeName: 'initModel', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'setBelongsTo', nativeName: 'setBelongsTo', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getBelongsTo', nativeName: 'getBelongsTo', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'set', nativeName: 'set', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'enable', nativeName: 'enable', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyType, /* const rho::String& */ propOption, /* optional function */ oResult)
        , { methodName: 'setModelProperty', nativeName: 'setModelProperty', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getModelProperty', nativeName: 'getModelProperty', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ indexName, /* const rho::Vector<rho::String>& */ indexCols, /* bool */ is_unique, /* optional function */ oResult)
        , { methodName: 'setSchemaIndex', nativeName: 'setSchemaIndex', valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'destroy', nativeName: 'destroy', valueCallbackIndex: 0 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ attrs, /* optional function */ oResult)
        , { methodName: 'createObject', nativeName: 'createObject', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ attrs, /* optional function */ oResult)
        , { methodName: 'createInstance', nativeName: 'createInstance', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'anyChangedObjects', nativeName: 'anyChangedObjects', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ objId, /* optional function */ oResult)
        , { methodName: 'hasChanges', nativeName: 'hasChanges', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ objId, /* optional function */ oResult)
        , { methodName: 'canModify', nativeName: 'canModify', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ oldAttrs, /* const rho::Hashtable<rho::String, rho::String>& */ newAttrs, /* optional function */ oResult)
        , { methodName: 'updateObject', nativeName: 'updateObject', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ attrs, /* optional function */ oResult)
        , { methodName: 'saveObject', nativeName: 'saveObject', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ objId, /* optional function */ oResult)
        , { methodName: 'deleteObject', nativeName: 'deleteObject', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ quests, /* optional function */ oResult)
        , { methodName: 'deleteObjects', nativeName: 'deleteObjects', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ conditions, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* optional function */ oResult)
        , { methodName: 'deleteObjectsPropertyBagByCondHash', nativeName: 'deleteObjectsPropertyBagByCondHash', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ conditions, /* const rho::Vector<rho::String>& */ quests, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* optional function */ oResult)
        , { methodName: 'deleteObjectsPropertyBagByCondArray', nativeName: 'deleteObjectsPropertyBagByCondArray', valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getCount', nativeName: 'getCount', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getBackendRefreshTime', nativeName: 'getBackendRefreshTime', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ whatParam, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ quests, /* const rho::Vector<rho::String>& */ selectAttrs, /* const rho::Vector<rho::String>& */ orderAttrs, /* optional function */ oResult)
        , { methodName: 'findObjects', nativeName: 'findObjects', valueCallbackIndex: 5 }
    
          // function(/* const rho::String& */ whatParam, /* const rho::Hashtable<rho::String, rho::String>& */ conditions, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ selectAttrs, /* optional function */ oResult)
        , { methodName: 'findObjectsPropertyBagByCondHash', nativeName: 'findObjectsPropertyBagByCondHash', valueCallbackIndex: 4 }
    
          // function(/* const rho::String& */ whatParam, /* const rho::String& */ conditions, /* const rho::Vector<rho::String>& */ quests, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ selectAttrs, /* optional function */ oResult)
        , { methodName: 'findObjectsPropertyBagByCondArray', nativeName: 'findObjectsPropertyBagByCondArray', valueCallbackIndex: 5 }
    
          // function(/* const rho::String& */ sqlQuery, /* optional function */ oResult)
        , { methodName: 'find_by_sql', nativeName: 'find_by_sql', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ attrName, /* optional function */ oResult)
        , { methodName: 'validateFreezedAttribute', nativeName: 'validateFreezedAttribute', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ attrHash, /* optional function */ oResult)
        , { methodName: 'validateFreezedAttributes', nativeName: 'validateFreezedAttributes', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ attrKey, /* const rho::Vector<rho::String>& */ attrValues, /* const rho::String& */ valOp, /* const rho::String& */ valFunc, /* optional function */ oResult)
        , { methodName: 'buildComplexWhereCond', nativeName: 'buildComplexWhereCond', valueCallbackIndex: 4 }
    
          // function(/* const rho::String& */ whatArg, /* const rho::Hashtable<rho::String, rho::String>& */ hashArgs, /* optional function */ oResult)
        , { methodName: 'buildFindLimits', nativeName: 'buildFindLimits', valueCallbackIndex: 2 }
    
          // function(/* const rho::Vector<rho::String>& */ order_attrs, /* const rho::Vector<rho::String>& */ order_ops, /* optional function */ oResult)
        , { methodName: 'buildFindOrder', nativeName: 'buildFindOrder', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ what, /* const rho::Vector<rho::String>& */ conditions, /* optional function */ oResult)
        , { methodName: 'buildSimpleWhereCond', nativeName: 'buildSimpleWhereCond', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ attrHash, /* const rho::String& */ action, /* optional function */ oResult)
        , { methodName: 'onSyncDeleteError', nativeName: 'onSyncDeleteError', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ attrHash, /* const rho::Hashtable<rho::String, rho::String>& */ rollbackHash, /* const rho::String& */ action, /* optional function */ oResult)
        , { methodName: 'onSyncUpdateError', nativeName: 'onSyncUpdateError', valueCallbackIndex: 4 }
    
          // function(/* const rho::Vector<rho::String>& */ objects, /* const rho::String& */ action, /* optional function */ oResult)
        , { methodName: 'onSyncCreateError', nativeName: 'onSyncCreateError', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'pushChanges', nativeName: 'pushChanges', valueCallbackIndex: 0 }
    
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
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NewORMModel.prototype, [
    ]);

    // === NewORMModel constants ===

    



    // === NewORMModel static properties ===

    rhoUtil.createPropsProxy(NewORMModel, [
    ], apiReq);

    // === NewORMModel static methods ===

    rhoUtil.createMethodsProxy(NewORMModel, [
    
          // function(/* optional function */ oResult)
          { methodName: 'enumerate', nativeName: 'enumerate', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ modelName, /* optional function */ oResult)
        , { methodName: 'getModel', nativeName: 'getModel', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'clear', nativeName: 'clear', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NewORMModel default instance support ===
    

    rhoUtil.namespace(moduleNS, NewORMModel);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Notification


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Notification';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === Notification instance properties ===

    rhoUtil.createPropsProxy(Notification.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Notification instance methods ===

    rhoUtil.createMethodsProxy(Notification.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Notification.prototype, [
    ]);

    // === Notification constants ===

    
            Notification.TYPE_DIALOG = 'dialog'; 
    
            Notification.TYPE_NOTIFICATION = 'notification'; 
    
            Notification.TYPE_NOTIFICATION_DIALOG = 'notificationDialog'; 
    
            Notification.TYPE_TOAST = 'toast'; 
    



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
    
          // function(/* const rho::String& */ path, /* const rho::String& */ media_type, /* optional function */ oResult)
        , { methodName: 'playFile', nativeName: 'playFile', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'beep', nativeName: 'beep', valueCallbackIndex: 1 }
    
          // function(/* int */ duration, /* optional function */ oResult)
        , { methodName: 'vibrate', nativeName: 'vibrate', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === Notification default instance support ===
    

    rhoUtil.namespace(moduleNS, Notification);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Push


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Push';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === Push instance properties ===

    rhoUtil.createPropsProxy(Push.prototype, [
        { propName: 'type', propAccess: 'r' }
      , { propName: 'userNotifyMode', propAccess: 'rw' }
      , { propName: 'pushServer', propAccess: 'r' }
      , { propName: 'pushAppName', propAccess: 'r' }
    ], apiReq, function(){ return this.getId(); });

    // === Push instance methods ===

    rhoUtil.createMethodsProxy(Push.prototype, [
    
          // function(/* optional function */ oResult)
          { methodName: 'getDeviceId', nativeName: 'getDeviceId', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'startNotifications', nativeName: 'startNotifications', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
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
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Push.prototype, [
    ]);

    // === Push constants ===

    
            Push.PUSH_NOTIFY_ALERTS = 'alert'; 
    
            Push.PUSH_NOTIFY_NONE = 'none'; 
    
            Push.PUSH_NOTIFY_NOTIFICATIONS = 'notification'; 
    
            Push.PUSH_NOTIFY_NOTIFICATIONS_AND_ALERTS = 'backgroundNotifications'; 
    
            Push.PUSH_TYPE_NATIVE = 'native-push'; 
    
            Push.PUSH_TYPE_RHOCONNECT = 'rhoconnect-push'; 
    



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
            { propName: 'defaultInstance:getDefault:setDefault', propAccess: 'rw', customSet: function(obj) { if(!obj || 'function' != typeof obj.getId){ throw 'Default object should provide getId method!' }; Push.setDefaultID(obj.getId()); } }
          , { propName: 'defaultID:getDefaultID:setDefaultID', propAccess: 'rw' }
        ], apiReq);

        Push.getId = function() {
            return Push.getDefaultID();
        }

        // === Push default instance properties ===

        rhoUtil.createPropsProxy(Push, [
            { propName: 'type', propAccess: 'r' }
          , { propName: 'userNotifyMode', propAccess: 'rw' }
          , { propName: 'pushServer', propAccess: 'r' }
          , { propName: 'pushAppName', propAccess: 'r' }
        ], apiReq, function(){ return this.getId(); });

        // === Push default instance methods ===

        rhoUtil.createMethodsProxy(Push, [
        
              // function(/* optional function */ oResult)
              { methodName: 'getDeviceId', nativeName: 'getDeviceId', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'startNotifications', nativeName: 'startNotifications', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
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
        
        ], apiReq, function(){ return this.getId(); });

        // will reuse already defined methods
        rhoUtil.createRawPropsProxy(Push, [
        ]);

    

    rhoUtil.namespace(moduleNS, Push);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.RhoFile


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.RhoFile';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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
            
                this.open.apply(this, arguments);
            
        }
    };

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

    

    rhoUtil.createRawPropsProxy(RhoFile.prototype, [
    ]);

    // === RhoFile constants ===

    
            RhoFile.OPEN_FOR_APPEND = 1;
    
            RhoFile.OPEN_FOR_READ = 2;
    
            RhoFile.OPEN_FOR_READ_WRITE = 4;
    
            RhoFile.OPEN_FOR_WRITE = 3;
    



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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.System


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.System';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === System instance properties ===

    rhoUtil.createPropsProxy(System.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === System instance methods ===

    rhoUtil.createMethodsProxy(System.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(System.prototype, [
    ]);

    // === System constants ===

    
            System.KEYBOARD_AUTOMATIC = 'automatic'; 
    
            System.KEYBOARD_HIDDEN = 'hidden'; 
    
            System.KEYBOARD_SHOWN = 'shown'; 
    
            System.PLATFORM_ANDROID = 'ANDROID'; 
    
            System.PLATFORM_IOS = 'APPLE'; 
    
            System.PLATFORM_WINDOWS_DESKTOP = 'WINDOWS_DESKTOP'; 
    
            System.PLATFORM_WM_CE = 'WINDOWS'; 
    
            System.PLATFORM_WP8 = 'WP8'; 
    
            System.REGKEY_CLASSES_ROOT = 'HKCR'; 
    
            System.REGKEY_CURRENT_USER = 'HKCU'; 
    
            System.REGKEY_LOCAL_MACHINE = 'HKLM'; 
    
            System.REGKEY_USERS = 'HKU'; 
    
            System.REGTYPE_BINARY = 'Binary'; 
    
            System.REGTYPE_DWORD = 'DWORD'; 
    
            System.REGTYPE_MULTI_SZ = 'MultiSZ'; 
    
            System.REGTYPE_SZ = 'String'; 
    
            System.SCREEN_LANDSCAPE = 'landscape'; 
    
            System.SCREEN_PORTRAIT = 'portrait'; 
    



    // === System static properties ===

    rhoUtil.createPropsProxy(System, [
        { propName: 'main_window_closed', propAccess: 'r' }
      , { propName: 'platform', propAccess: 'r' }
      , { propName: 'hasCamera', propAccess: 'r' }
      , { propName: 'screenWidth', propAccess: 'r' }
      , { propName: 'screenHeight', propAccess: 'r' }
      , { propName: 'realScreenWidth', propAccess: 'r' }
      , { propName: 'realScreenHeight', propAccess: 'r' }
      , { propName: 'screenOrientation', propAccess: 'r' }
      , { propName: 'ppiX', propAccess: 'r' }
      , { propName: 'ppiY', propAccess: 'r' }
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
    
          // function(/* const rho::String& */ pathToFile, /* bool */ doNotBackup, /* optional function */ oResult)
        , { methodName: 'setDoNotBackupAttribute', nativeName: 'setDoNotBackupAttribute', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ appName, /* const rho::String& */ params, /* bool */ blockingCall, /* optional function */ oResult)
        , { methodName: 'runApplication', nativeName: 'runApplication', valueCallbackIndex: 3 }
    
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
    
    ], apiReq);

    // === System default instance support ===
    

    rhoUtil.namespace(moduleNS, System);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.System.Process


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.System.Process';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    

    rhoUtil.createRawPropsProxy(Process.prototype, [
    ]);

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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.WebView


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.WebView';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


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

    // === WebView instance properties ===

    rhoUtil.createPropsProxy(WebView.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === WebView instance methods ===

    rhoUtil.createMethodsProxy(WebView.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(WebView.prototype, [
    ]);

    // === WebView constants ===

    
            WebView.SAVE_FORMAT_JPEG = 'jpeg'; 
    
            WebView.SCROLL_FINGER = 'FingerScroll'; 
    
            WebView.SCROLL_NONE = 'None'; 
    
            WebView.SCROLL_SCROLLBARS = 'Scrollbars'; 
    



    // === WebView static properties ===

    rhoUtil.createPropsProxy(WebView, [
        { propName: 'framework', propAccess: 'r' }
      , { propName: 'fullScreen', propAccess: 'rw' }
      , { propName: 'enableZoom', propAccess: 'r' }
      , { propName: 'enablePageLoadingIndication', propAccess: 'r' }
      , { propName: 'enableWebPlugins', propAccess: 'r' }
      , { propName: 'navigationTimeout', propAccess: 'rw' }
      , { propName: 'scrollTechnique', propAccess: 'r' }
      , { propName: 'fontFamily', propAccess: 'r' }
      , { propName: 'userAgent', propAccess: 'r' }
      , { propName: 'viewportEnabled', propAccess: 'r' }
      , { propName: 'viewportWidth', propAccess: 'r' }
      , { propName: 'cacheSize', propAccess: 'r' }
      , { propName: 'enableCache', propAccess: 'r' }
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

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.RhoConnectClient


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.RhoConnectClient';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === RhoConnectClient class definition ===

    function RhoConnectClient() {
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

    // === RhoConnectClient instance properties ===

    rhoUtil.createPropsProxy(RhoConnectClient.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === RhoConnectClient instance methods ===

    rhoUtil.createMethodsProxy(RhoConnectClient.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(RhoConnectClient.prototype, [
    ]);

    // === RhoConnectClient constants ===

    



    // === RhoConnectClient static properties ===

    rhoUtil.createPropsProxy(RhoConnectClient, [
        { propName: 'userName', propAccess: 'r' }
      , { propName: 'pollInterval', propAccess: 'rw' }
      , { propName: 'syncServer', propAccess: 'rw' }
      , { propName: 'bulksyncState', propAccess: 'rw' }
      , { propName: 'pageSize', propAccess: 'rw' }
      , { propName: 'threadedMode', propAccess: 'rw' }
      , { propName: 'showStatusPopup', propAccess: 'rw' }
      , { propName: 'sslVerifyPeer', propAccess: 'rw' }
    ], apiReq);

    // === RhoConnectClient static methods ===

    rhoUtil.createMethodsProxy(RhoConnectClient, [
    
          // function(/* optional function */ oResult)
          { methodName: 'isLoggedIn', nativeName: 'isLoggedIn', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isSyncing', nativeName: 'isSyncing', valueCallbackIndex: 0 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ args, /* optional function */ oResult)
        , { methodName: 'search', nativeName: 'search', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* bool */ showStatusPopup, /* const rho::String& */ queryParams, /* bool */ syncOnlyChangedSources, /* optional function */ oResult)
        , { methodName: 'doSync', nativeName: 'doSync', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ sourceName, /* bool */ showStatusPopup, /* const rho::String& */ queryParams, /* optional function */ oResult)
        , { methodName: 'doSyncSource', nativeName: 'doSyncSource', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ login, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'login', nativeName: 'login', persistentCallbackIndex: 2, valueCallbackIndex: 4 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'logout', nativeName: 'logout', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopSync', nativeName: 'stopSync', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'setNotification', nativeName: 'setNotification', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'clearNotification', nativeName: 'clearNotification', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'setObjectNotification', nativeName: 'setObjectNotification', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ sourceName, /* const rho::String& */ object, /* optional function */ oResult)
        , { methodName: 'addObjectNotify', nativeName: 'addObjectNotify', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'cleanObjectNotify', nativeName: 'cleanObjectNotify', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'getLastSyncObjectCount', nativeName: 'getLastSyncObjectCount', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ sourceName, /* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setSourceProperty', nativeName: 'setSourceProperty', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ sourceName, /* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getSourceProperty', nativeName: 'getSourceProperty', valueCallbackIndex: 2 }
    
    ], apiReq);

    // === RhoConnectClient default instance support ===
    

    rhoUtil.namespace(moduleNS, RhoConnectClient);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Application

(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Application';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var App = {};

    // At this moment we unable to extend target namespace with property proxies defined in a local namespace.
    // So defining (overwriting) them right in the target namespace.
    rhoUtil.createPropsProxy( Rho.Application, [
        { propName: 'defaultNativeMenu', propAccess: 'r', customGet: function(){
            return [
                {'label':'Home', 'action': 'home'},
                {'label':'Refresh', 'action': 'refresh'},
                {'label':'Sync', 'action': 'sync'},
                {'label':'Settings', 'action': 'options'},
                {'label':'Log', 'action': 'log'},
                {'label':'separator', 'action': ''},
                {'label':'Exit', 'action': 'close'}
            ];
        } }
    ], apiReq);

    function processApplicationEvent(event) {
        applicationEvent = event.applicationEvent;
        eventData = event.eventData;
        
        // UICreated
        if (applicationEvent == Rho.Application.APP_EVENT_UICREATED) {
            console.log("AppEvent: "+ applicationEvent);
            start_url = Rho.Application.startURI;
            if (!start_url){
                start_url = "";
            }
            if (Rho.System.platform != Rho.System.PLATFORM_WP8) {
              invalid_security_token_start_path = Rho.Application.invalidSecurityTokenStartPath;

              if (Rho.Application.securityTokenNotPassed) {
                if (invalid_security_token_start_path && invalid_security_token_start_path.length() > 0) {
                  start_url = invalid_security_token_start_path;
                } else {
                  // exit from application - old way
                  Rho.Log.fatalError('processApplicationEvent: security_token is not passed - application will closed','EROOR');
                  Rho.System.exit();
                }
              }
            }
            console.log("on_ui_created.navigate to start url: "+ start_url);
            Rho.WebView.navigate(start_url);
        }
        // UIDestroyed
        else if (applicationEvent==Rho.Application.APP_EVENT_UIDESTROYED) {
            console.log("AppEvent: "+ applicationEvent);
        }
        else if (applicationEvent==Rho.Application.APP_EVENT_CONFIGCONFLICT) {
            console.log("AppEvent: "+ applicationEvent);
        }
        //
        else if (applicationEvent==Rho.Application.APP_EVENT_DBMIGRATESOURCE) {
            console.log("AppEvent: "+ applicationEvent);
            console.log( "default on_migrate_source - do nothing; old_version :"+eventData.old_version+"; new_src : "+eventData.new_src);
            //if new_src['schema']
            //    db = ::Rho::RHO.get_src_db(new_src['name'])
            //    db.delete_table(new_src['name'])
            //    return false  #create new table
            //end
            return true
        }
        //
        else if (applicationEvent==Rho.Application.APP_EVENT_SYNCUSERCHANGED) {
            Rho.ORM.databaseFullReset(false, false)
            //::Rho::RHO.get_user_db().execute_sql("UPDATE client_info SET client_id=?", "")
        }
    }

    var App = {
        processApplicationEvent : function(event) {
            processApplicationEvent(event);
        }
    };

    rhoUtil.namespace(moduleNS, App, true);

    // function setAppEventsHandler()
    // {
    //     Rho.Application.setApplicationNotify(processApplicationEvent);
    // }

    // $(document).ready( setAppEventsHandler );

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Database


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Database';

    var executeSql = function(db, sqlStmt, isBatch, args) {
        return (sqlStmt === undefined) ? [] : db.execute(sqlStmt, isBatch, args);
    };


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
    }

    // === Database instance members ===


    Database.prototype.initialize = function(dbPath,dbPartition) {
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


    Database.prototype.executeBatchSql = function(/* const rho::String& */ sqlStmt) {
        return executeSql(this.db, sqlStmt, true, []);
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

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NewORMHelper

(function ($, rho, rhoUtil) {
    'use strict';

    // === Rho.NewORM wrapper members ===
    Rho.NewORM.addModel = function(modelname, modeldef){
        var model = new Rho.NewORMModel(modelname);
        modeldef(model);
        model.initModel();
        return model;
    };
    Rho.NewORM.getModel = function(modelname){
        return Rho.NewORMModel.getModel(modelname);
    };

    // === Rho.NewORMModel wrapper members ===
    Rho.NewORMModel.prototype._normalize_complex_conditions = function(conditions, op){
        if(!conditions){
            return ['', []];
        };
        op = op || 'AND';
        if(Object.prototype.toString.call(conditions) === '[object Array]') {
            var quests = new Array();
            var sqlRes = '';
            for (var item in conditions) {
                if (sqlRes.length > 0) {
                    sqlRes += ' ' + op + ' ';
                };
                if(item.hasOwnProperty('conditions')) {
                    var subCond = this._normalize_complex_conditions(item.conditions, item.op);
                }
                else {
                    var subCond = this._normalize_hash_condition(item, 'AND');
                }
                sqlRes += '(' + subCond[0] + ')';
                quests = quests.concat(subCond[1]);
            }
            return [sqlRes, quests];
        }
        else {
            return this._normalize_hash_condition(conditions, op);
        };
    };

    Rho.NewORMModel.prototype._normalize_hash_condition = function(item, op){
        // Hash condition can be of two forms:
        // 1) {'key1':'value'1, 'key2':'value2' ... }, 'op':'OP1' => translates into : key1=value1 OP1 key2=value2
        // 2) or full form { 'op':'OP1', 'func':'FUNC1', 'attrib':'key1', 'value(s)':'value1' } => translates into FUNC1(key1) OP1 value1
        if(item.hasOwnProperty('attrib')) {
            var itemOp = "=";
            var itemFunc = "";
            var itemName = "";
            var itemValues = "";
            for (var propName in item) {
                switch (propName) {
                case 'op'  :
                    itemOp = item[propName];
                    break;
                case 'func':
                    itemFunc = item[propName];
                    break;
                case 'attrib':
                    itemName = item[propName];
                    break;
                case 'value':
                case 'values':
                    itemValues = item[propName];
                    break;
                };
            };
            if(itemValues instanceof String){
                itemValues = [itemValues];
            };

            subCond = this.buildComplexWhereCond(itemName, itemValues, itemOp, itemFunc);
            return [subCond[0], subCond.slice(1)];
        }
        else {
            var sqlRes = "";
            var condQuests = new Array();
            for (var propName in item) {
                var subCond = this.buildComplexWhereCond(propName, [item[propName]], "=", '');
                if(sqlRes.length > 0) {
                    sqlRes += " " + op + " ";
                };
                sqlRes += subCond[0];
                condQuests = condQuests.concat(subCond.slice(1));
            };
            return [sqlRes, condQuests];
        };
    };


    Rho.NewORMModel.prototype._normalize_conditions = function(what, conditions, op){
        if (!op) {
            var retV;
            if(!conditions) {
                retV = this.buildSimpleWhereCond(what, []);
                return [retV[0], retV.slice(1)];
            }
            else if(Object.prototype.toString.call(conditions) === '[object String]') {
                retV = this.buildSimpleWhereCond(what, [conditions]);
                return [retV[0], retV.slice(1)];
            }
            else if(Object.prototype.toString.call(conditions) === '[object Array]') {
                retV = this.buildSimpleWhereCond(what, conditions);
                return [retV[0], retV.slice(1)];
            } else {
                return this._normalize_complex_conditions(conditions, 'AND');
            };
        };
        return this._normalize_complex_conditions(conditions, op);
    };


    Rho.NewORMModel.prototype._normalize_args_for_find = function(what, options, normalized_string_args, normalized_vector_args){
        // 1) Normalize LIMITS
        var limitArgs = this.buildFindLimits(what, options);
        for (var property in limitArgs) {
            normalized_string_args[property] = limitArgs[property];
        }

        // 2) Normalize ORDER BY
        var order_dir = options.orderdir || [];
        var order_attr = options.order || [];
        if(Object.prototype.toString.call(order_dir) === '[object String]'){
            order_dir = [order_dir];
        };
        if(Object.prototype.toString.call(order_attr) === '[object String]'){
            order_attr = [order_attr];
        };
        normalized_vector_args.order = this.buildFindOrder(order_attr, order_dir);

        // 3) Normalize SELECT
        var select_arr = options.select || [];
        if(Object.prototype.toString.call(options.conditions) === '[object String]') {
            select_arr = [select_arr];
        };
        normalized_vector_args.select = select_arr;

        // 4) Build Where Conditions
        var condVal = this._normalize_conditions(what, options.conditions, options.op);
        normalized_string_args.conditions = condVal[0] || "";
        normalized_vector_args.quests = condVal[1] || [];
    };

    Rho.NewORMModel.prototype.find = function(what, options){
        what = what || 'all';
        options = options || {};
        var _found;
        // first - check for Hash conditions PropertyBag
        if(this.fixed_schema) {
            var normalized_vector_args = {};
            var normalized_string_args = {};
            this._normalize_args_for_find(what, options, normalized_string_args, normalized_vector_args);
            _found = this.findObjects(what, normalized_string_args,
                                    normalized_vector_args['quests'],
                                    normalized_vector_args['select'],
                                    normalized_vector_args['order']);
        } else { // property bag
            // only LIMIT is supported
            normalized_string_args = {};
            var limitArgs = this.buildFindLimits(what, options);
            for (var property in limitArgs) {
                normalized_string_args[property] = limitArgs[property];
            }
            // 3) Normalize SELECT
            var select_arr = options.select || [];
            if(Object.prototype.toString.call(options.conditions) === '[object String]') {
                select_arr = [select_arr];
            };
            normalized_string_args['op'] = options.op || 'AND';
            if(Object.prototype.toString.call(options.conditions) === '[object Object]'){
                _found = this.findObjectsPropertyBagByCondHash(what, options.conditions, normalized_string_args, select_arr);
            } else { // the only other supported case is simple string (WHERE sql) or array (WHERE sql + quests)
                options.conditions = options.conditions || [""];
                options.quests = [];
                if(Object.prototype.toString.call(options.conditions) === '[object Array]') {
                    options.quests = options.conditions.slice(1);
                    options.conditions = options.conditions[0];
                };
                _found = this.findObjectsPropertyBagByCondArray(what, options.conditions, options.quests, normalized_string_args, select_arr);
            };
        };

        switch (what) {
            case 'all'  : return this._wrapORMInstances(_found);
            case 'count': return _found ;
            case 'first':
            default     : return this._wrapORMInstance(_found[0]);
        };
    };

    Rho.NewORMModel.prototype.findBySql = function(sqlQuery){
        var _found = this.find_by_sql(sqlQuery);
        return this._wrapORMInstances(_found);
    };

    Rho.NewORMModel.prototype.paginate = function(options){
        options['page'] = options['page'] || 0;
        options['per_page'] = options['per_page'] || 10;
        options['offset'] = options['page'] * options['per_page'];
        return this.find('all', options);
    };

    Rho.NewORMModel.prototype.delete_all = function(options){
        var conditions = options || {};
        options = {};
        options.conditions = conditions;

        if(this.fixed_schema) {
            var normalized_vector_args = {};
            var normalized_string_args = {};
            this._normalize_args_for_find("all", options, normalized_string_args, normalized_vector_args);
            return this.deleteObjects(normalized_string_args,
                                      normalized_vector_args['quests']);
        } else { // property bag
            normalized_string_args = {};
            var limitArgs = this.buildFindLimits("all", options);
            for (var property in limitArgs) {
                normalized_string_args[property] = limitArgs[property];
            }
            normalized_string_args.op = options.op || 'AND';
            if(Object.prototype.toString.call(options.conditions) === '[object Object]'){
                return this.deleteObjectsPropertyBagByCondHash(options.conditions, normalized_string_args);
            } else { // the only other supported case is simple string (WHERE sql) or array (WHERE sql + quests)
                conditions = options.conditions || [""];
                quests = [];
                if(Object.prototype.toString.call(options.conditions) === '[object Array]') {
                    quests = options.conditions.slice(1);
                    conditions = options.conditions[0];
                };
                return this.deleteObjectsPropertyBagByCondArray(conditions, quests, normalized_string_args);
            };
        };
    };
    Rho.NewORMModel.prototype.deleteAll = function(options){
        return this.delete_all(options);
    };
    Rho.NewORMModel.prototype._wrapORMInstance = function(objInst){
        if(!objInst) {
            return undefined;
        }
        var _new_instance = new _ORMObjectInstance(this, objInst);
        return _new_instance;
    };
    Rho.NewORMModel.prototype._wrapORMInstances = function(_objects){
        var _model_instances = [];
        for (var i = 0; i < _objects.length; i++) {
            var _object_instance = new _ORMObjectInstance(this, _objects[i]);
            _model_instances.push(_object_instance);
        };
        return _model_instances;
    };
    Rho.NewORMModel.prototype.make = function(objHash){
        var _new_instance = new _ORMObjectInstance(this, this.createInstance(objHash));
        return _new_instance;
    };
    Rho.NewORMModel.prototype.count = function(){
        return this.getCount();
    };
    Rho.NewORMModel.prototype.create = function(objHash){
        var _new_instance = new _ORMObjectInstance(this, this.createObject(objHash));
        return _new_instance;
    };

    // === Rho.NewORMModel Object's wrapper methods ===
    var _ORMObjectInstance = function(model, obj){
        for (var attrname in obj) { this[attrname] = obj[attrname]; }
        this.source_id = model.source_id

        Object.defineProperty(this, '_klass_model', {
            value: function () {
                return model;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'vars', {
            value: function () {
                var objAttrs = {};
                for (var attrname in this) { objAttrs[attrname] = this[attrname]; }
                return objAttrs;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'get', {
            value: function (propname) {
                return this[propname];
            },
            enumerable: false
        });
        Object.defineProperty(this, 'has', {
            value: function (propname) {
                return this.hasOwnProperty(propname);
            },
            enumerable: false
        });
        Object.defineProperty(this, 'set', {
            value: function (propname, value) {
                this[propname] = value;
                return this;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'updateAttributes', {
            value: function (newAttrs) {
                var updatedAttrs = this._klass_model().updateObject(this.object, this, newAttrs);
                for (var attrname in updatedAttrs) { this[attrname] = updatedAttrs[attrname]; }
                return this;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'save', {
            value: function () {
                var updatedAttrs = this._klass_model().saveObject(this.object, this);
                for (var attrname in updatedAttrs) { this[attrname] = updatedAttrs[attrname]; }
                return this;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'destroy', {
            value: function () {
                this._klass_model().deleteObject(this.object);
                return this;
            },
            enumerable: false
        });
    };

    Rho.NewORM.dbPartitions = {};
    Rho.NewORM.dbConnection = function (partition){
        //look for db connection, if not found create one
        var filepath = Rho.Application.databaseFilePath(partition);
        var partitions = Rho.NewORM.getDbPartitions();
        var db;
        if(partitions && partitions[partition]){
            db = partitions[partition];
        }
        else{
            db = new Rho.Database(filepath, partition);
            partitions[partition] = db;
        }
        return db;
    };
    Rho.NewORM.getDbPartitions = function() {
        return Rho.NewORM.dbPartitions;
    };
    Rho.NewORM.clear = function(){
        Rho.NewORMModel.clear();
    };

    // Global initialization
    console.log("Replacing Old Rho.ORM with new one!!!");
    Rho.ORM = Rho.NewORM;
    Rho.ORMHelper = Rho.NewORM;
    Rho.ORMModel = Rho.NewORMModel;
    Rho.ORM.dbConnection('local');
    Rho.ORM.dbConnection('user');
    Rho.ORM.dbConnection('app');


})(Rho.jQuery, Rho, Rho.util);

