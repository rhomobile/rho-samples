// WARNING! THIS FILE IS GENERATED AUTOMATICALLY! DO NOT EDIT IT MANUALLY!
// Module jquery-2.0.2-rho-custom.min

/*! jQuery v2.0.2 -wrap,-css,-ajax/script,-ajax/jsonp,-effects,-offset,-dimensions,-deprecated | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,a=o.documentElement,s=e.jQuery,u=e.$,l={},c=[],f="2.0.2 -wrap,-css,-ajax/script,-ajax/jsonp,-effects,-offset,-dimensions,-deprecated",p=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,N=/^-ms-/,k=/-([\da-z])/gi,S=function(e,t){return t.toUpperCase()},E=function(){o.removeEventListener("DOMContentLoaded",E,!1),e.removeEventListener("load",E,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[1]||{},s=2),"object"==typeof a||x.isFunction(a)||(a={}),u===s&&(a=this,--s);u>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},a[t]=x.extend(l,o,r)):r!==undefined&&(a[t]=r));return a},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=s),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(N,"ms-").replace(k,S)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=D(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(D(Object(e))?x.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=D(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return p.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(t||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(s in n)x.access(e,t,s,n[s],!0,o,a)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",E,!1),e.addEventListener("load",E,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function D(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),N=st(),k=st(),S=!1,E=function(){return 0},D=typeof undefined,A=1<<31,j={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,M=L.slice,F=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",$="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",B=$.replace("w","w#"),I="\\["+R+"*("+$+")"+R+"*(?:([*^$|!~]?=)"+R+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+B+")|)|)"+R+"*\\]",W=":("+$+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+I.replace(3,8)+")*)|.*)\\)|)",_=RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),X=RegExp("^"+R+"*,"+R+"*"),z=RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=RegExp(R+"*[+~]"),V=RegExp("="+R+"*([^\\]'\"]*)"+R+"*\\]","g"),G=RegExp(W),J=RegExp("^"+B+"$"),Q={ID:RegExp("^#("+$+")"),CLASS:RegExp("^\\.("+$+")"),TAG:RegExp("^("+$.replace("w","w*")+")"),ATTR:RegExp("^"+I),PSEUDO:RegExp("^"+W),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:RegExp("^(?:"+P+")$","i"),needsContext:RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Y=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=M.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,M.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,a,s,u,l,p,g,m,x,w;if((t?t.ownerDocument||t:b)!==f&&c(t),t=t||f,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(d&&!i){if(o=K.exec(e))if(s=o[1]){if(9===u){if(a=t.getElementById(s),!a||!a.parentNode)return r;if(a.id===s)return r.push(a),r}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&y(t,a)&&a.id===s)return r.push(a),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((s=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(s)),r}if(n.qsa&&(!h||!h.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){p=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=p.length;while(l--)p[l]=m+xt(p[l]);x=U.test(e)&&t.parentNode||t,w=p.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return Et(e.replace(_,"$1"),t,r,i)}function at(e){return Y.test(e+"")}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,a=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function pt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function dt(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function ht(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}a=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==f&&9===t.nodeType&&t.documentElement?(f=t,p=t.documentElement,d=!a(t),r&&r.frameElement&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",pt,"#"===e.firstChild.getAttribute("href")),ct(P,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",dt,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return p.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==D&&d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==D&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==D?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==D&&d?t.getElementsByClassName(e):undefined},g=[],h=[],(n.qsa=at(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+R+"*(?:value|"+P+")"),e.querySelectorAll(":checked").length||h.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&h.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(n.matchesSelector=at(m=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",W)}),h=h.length&&RegExp(h.join("|")),g=g.length&&RegExp(g.join("|")),y=at(p.contains)||p.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),E=p.compareDocumentPosition?function(e,r){if(e===r)return S=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?F.call(l,e)-F.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,a=n.parentNode,s=[e],u=[n];if(e===n)return S=!0,0;if(!o||!a)return e===t?-1:n===t?1:o?-1:a?1:l?F.call(l,e)-F.call(l,n):0;if(o===a)return ht(e,n);r=e;while(r=r.parentNode)s.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(s[i]===u[i])i++;return i?ht(s[i],u[i]):s[i]===b?-1:u[i]===b?1:0},t):f},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&c(e),t=t.replace(V,"='$1']"),!(!n.matchesSelector||!d||g&&g.test(t)||h&&h.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,f,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==f&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==f&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&j.call(i.attrHandle,t.toLowerCase())?r(e,t,!d):undefined;return o===undefined?n.attributes||!d?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(S=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(E),S){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&G.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==D&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),x=!u&&!s;if(m){if(o){while(g){f=t;while(f=f[g])if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&x){c=m[v]||(m[v]={}),l=c[e]||[],d=l[0]===w&&l[1],p=l[0]===w&&l[2],f=d&&m.childNodes[d];while(f=++d&&f&&f[g]||(p=d=0)||h.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[w,d,p];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)p=l[1];else while(f=++d&&f&&f[g]||(p=d=0)||h.pop())if((s?f.nodeName.toLowerCase()===y:1===f.nodeType)&&++p&&(x&&((f[v]||(f[v]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=s(e.replace(_,"$1"));return r[v]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return J.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,a,s,u,l,c=N[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=z.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(_," ")}),s=s.slice(n.length));for(a in i.filter)!(r=Q[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ot.error(e):N(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,f=w+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===f){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[f],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Tt(g,p,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=Tt(y,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(y[d[c]]=!(m[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&&(l=i?F.call(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else y=Tt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):O.apply(a,y)})}function Nt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],l=a?1:0,c=bt(function(e){return e===t},s,!0),f=bt(function(e){return F.call(t,e)>-1},s,!0),p=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])p=[bt(wt(p),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(p),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(_,"$1"),n,r>l&&Nt(e.slice(l,r)),o>r&&Nt(e=e.slice(r)),o>r&&xt(e))}p.push(n)}return wt(p)}function kt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,x="0",b=s&&[],T=null!=d,C=u,N=s||a&&i.find.TAG("*",d&&l.parentNode||l),k=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==f&&l,r=n);null!=(h=N[x]);x++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}T&&(w=k,r=++n)}o&&((h=!m&&h)&&v--,s&&b.push(h))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(s){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(p));y=Tt(y)}O.apply(p,y),T&&!s&&y.length>0&&v+t.length>1&&ot.uniqueSort(p)}return T&&(w=k,u=C),b};return o?ut(s):s}s=ot.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=Nt(t[n]),o[v]?r.push(o):i.push(o);o=k(e,kt(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function Et(e,t,r,o){var a,u,l,c,f,p=vt(e);if(!o&&1===p.length){if(u=p[0]=p[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&d&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}a=Q.needsContext.test(e)?0:u.length;while(a--){if(l=u[a],i.relative[c=l.type])break;if((f=i.find[c])&&(o=f(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(a,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return s(e,p)(o,t,!d,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function Dt(){}Dt.prototype=i.filters=i.pseudos,i.setFilters=new Dt,n.sortStable=v.split("").sort(E).join("")===v,c(),[0,0].sort(E),n.detectDuplicates=S,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var A={};function j(e){var t=A[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?A[e]||j(e):x.extend({},e);var t,n,r,i,o,a,s=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,a=i||0,i=0,o=s.length,r=!0;s&&o>a;a++)if(s[a].apply(f[0],f[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,s&&(u?u.length&&l(u.shift()):t?s=[]:c.disable())},c={add:function(){if(s){var n=s.length;(function a(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||s.push(n):n&&n.length&&"string"!==r&&a(n)})})(arguments),r?o=s.length:t&&(i=n,l(t))}return this},remove:function(){return s&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,s,n))>-1)s.splice(n,1),r&&(o>=n&&o--,a>=n&&a--)}),this},has:function(e){return e?x.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],o=0,this},disable:function(){return s=u=t=undefined,this},disabled:function(){return!s},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!s||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),a=o.createElement("select"),s=a.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=s.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,a.disabled=!0,t.optDisabled=!s.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,a="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",s=o.getElementsByTagName("body")[0];s&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(s,null!=s.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=a,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),s.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function M(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}M.uid=1,M.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},M.prototype={key:function(e){if(!M.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=M.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(w)||[])),n=r.length;while(n--)delete a[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new M,H=new M,x.extend({acceptData:M.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,a=null;if(e===undefined){if(this.length&&(a=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),F(i,r,a[r]));H.set(i,"hasDataAttrs",!0)}return a}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=F(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function F(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(a--)n=H.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var P,R,$=/[\t\r\n\f]/g,B=/\r/g,I=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace($," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace($," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),u=t,l=e.match(w)||[];while(o=l[a++])u=i?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace($," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace(B,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===r?x.prop(e,t,n):(1===a&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?R:P)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||I.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),R={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var W=/^key/,_=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,z=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function V(){return!1}function G(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=H.get(e);if(y){n.handler&&(a=n,n=a.handler,o=a.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(s.elem,arguments)},s.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=z.exec(t[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),h&&(p=x.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=x.event.special[h]||{},f=x.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),x.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=z.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=x.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)x.event.remove(e,d+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var a,s,u,l,c,f,p,d=[r||o],h=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(s=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!X.test(h+x.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,t=t[x.expando]?t:new x.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[h]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&&!p.noBubble&&!x.isWindow(r)){for(l=p.delegateType||h,X.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(r.ownerDocument||o)&&d.push(u.defaultView||u.parentWindow||e)}a=0;while((s=d[a++])&&!t.isPropagationStopped())t.type=a>1?l:p.bindType||h,f=(H.get(s,"events")||{})[t.type]&&H.get(s,"handle"),f&&f.apply(s,n),f=c&&s[c],f&&x.acceptData(s)&&f.apply&&f.apply(s,n)===!1&&t.preventDefault();return t.type=h,i||t.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[h])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=h,r[h](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,a=[],s=h.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){a=x.event.handlers.call(this,e,u),t=0;while((i=a[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return t.length>s&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,a=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||a===undefined||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=_.test(i)?this.mouseHooks:W.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,a):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==G()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===G()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:V):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:V,isPropagationStopped:V,isImmediatePropagationStopped:V,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(a in e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=V;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=V),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var J=/^.[^:#\[\.,]*$/,Q=/^(?:parents|prev(?:Until|All))/,Y=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Y.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=Y.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),Q.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(J.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,at=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&ht(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,a,s,u,l=0,c=this.length,f=this,d=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&at.test(h))return this.each(function(r){var i=f.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),pt),a=o.length;c>l;l++)s=r,l!==d&&(s=x.clone(s,!0,!0),a&&x.merge(o,mt(s,"script"))),t.call(this[l],s,l);if(a)for(u=o[o.length-1].ownerDocument,x.map(o,dt),l=0;a>l;l++)s=o[l],st.test(s.type||"")&&!H.access(s,"globalEval")&&x.contains(u,s)&&(s.src?x._evalUrl(s.src):x.globalEval(s.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,a=0;for(;o>=a;a++)n=a===o?this:this.clone(!0),x(i[a])[t](n),d.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(a=mt(s),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],a[r]);if(t)if(n)for(o=o||mt(e),a=a||mt(s),r=0,i=o.length;i>r;r++)gt(o[r],a[r]);else gt(e,s);return a=mt(s,"script"),a.length>0&&ht(a,!u&&mt(e,"script")),s},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c=0,f=e.length,p=t.createDocumentFragment(),d=[];for(;f>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(d,i.nodeType?[i]:i);else if(rt.test(i)){o=o||p.appendChild(t.createElement("div")),a=(nt.exec(i)||["",""])[1].toLowerCase(),s=ct[a]||ct._default,o.innerHTML=s[1]+i.replace(tt,"<$1></$2>")+s[2],l=s[0];while(l--)o=o.firstChild;x.merge(d,o.childNodes),o=p.firstChild,o.textContent=""}else d.push(t.createTextNode(i));p.textContent="",c=0;while(i=d[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(p.appendChild(i),"script"),u&&ht(o),n)){l=0;while(i=o[l++])st.test(i.type||"")&&n.push(i)}return p},cleanData:function(e){var t,n,r,i,o,a,s=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(M.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(a=0;(i=r[a])!==undefined;a++)s[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function ft(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function pt(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function dt(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function ht(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),a=H.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(s=L.access(e),u=x.extend({},s),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}var vt=/%20/g,xt=/\[\]$/,bt=/\r?\n/g,wt=/^(?:submit|button|image|reset|file)$/i,Tt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&Tt.test(this.nodeName)&&!wt.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(bt,"\r\n")}}):{name:t.name,value:n.replace(bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)Ct(n,e[n],t,i);return r.join("&").replace(vt,"+")};function Ct(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||xt.test(e)?r(e,i):Ct(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)Ct(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Nt,kt,St=x.now(),Et=/\?/,Dt=/#.*$/,At=/([?&])_=[^&]*/,jt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,qt=/^\/\//,Ot=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Mt=x.fn.load,Ft={},Pt={},Rt="*/".concat("*");try{kt=i.href}catch($t){kt=o.createElement("a"),kt.href="",kt=kt.href}Nt=Ot.exec(kt.toLowerCase())||[];function Bt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function It(e,t,n,r){var i={},o=e===Pt;function a(s){var u;return i[s]=!0,x.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Wt(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&Mt)return Mt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=e.slice(s),e=e.slice(0,s)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),a.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:kt,type:"GET",isLocal:Lt.test(Nt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,x.ajaxSettings),t):Wt(x.ajaxSettings,e)},ajaxPrefilter:Bt(Ft),ajaxTransport:Bt(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,a,s,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?x(f):x.event,d=x.Deferred(),h=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=jt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),N(0,t),this}};if(d.promise(T).complete=h.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||kt)+"").replace(Dt,"").replace(qt,Nt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(s=Ot.exec(c.url.toLowerCase()),c.crossDomain=!(!s||s[1]===Nt[1]&&s[2]===Nt[2]&&(s[3]||("http:"===s[1]?"80":"443"))===(Nt[3]||("http:"===Nt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),It(Ft,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Ht.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Et.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=At.test(r)?r.replace(At,"$1_="+St++):r+(Et.test(r)?"&":"?")+"_="+St++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+Rt+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=It(Pt,c,t,T)){T.readyState=1,u&&p.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(a=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,N)}catch(C){if(!(2>v))throw C;N(-1,C)}}else N(-1,"No Transport");function N(e,t,o,s){var l,m,y,b,w,C=t;2!==v&&(v=2,a&&clearTimeout(a),n=undefined,i=s||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=_t(c,T,o)),b=Xt(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?d.resolveWith(f,[m,C,T]):d.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),h.fireWith(f,[T,C]),u&&(p.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function _t(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);
break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function Xt(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var zt=x.ajaxSettings.xhr(),Ut={0:200,1223:204},Vt=0,Gt={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in Gt)Gt[e]();Gt=undefined}),x.support.cors=!!zt&&"withCredentials"in zt,x.support.ajax=zt=!!zt,x.ajaxTransport(function(e){var t;return x.support.cors||zt&&!e.crossDomain?{send:function(n,r){var i,o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)a[i]=e.xhrFields[i];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)a.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Gt[o],t=a.onload=a.onerror=null,"abort"===e?a.abort():"error"===e?r(a.status||404,a.statusText):r(Ut[a.status]||a.status,a.statusText,"string"==typeof a.responseText?{text:a.responseText}:undefined,a.getAllResponseHeaders()))}},a.onload=t(),a.onerror=t("error"),t=Gt[o=Vt++]=t("abort"),a.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined}),"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);// Module rhoapi

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

    // Here is default (fallback option) implementation of property using explicit accessors.
    // It will be used in case we have no any support for natural props syntax in a browser.
    // Usage sample: obj.setSomething(123), var abc = obj.getSomething()
    // ====================================================================================
    var createPropProxy_fallback = function (obj, propDescr, propAccess, apiReqFunc, idFunc, customGet, customSet) {
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

        if (0 <= propAccess.indexOf('w')) {
            obj[accessorName('set', propDescr)] = propAccessReqFunc(apiReqFunc, propDescr, 'w', idFunc, customSet);
        }
        if (0 <= propAccess.indexOf('r')) {
            obj[accessorName('get', propDescr)] = propAccessReqFunc(apiReqFunc, propDescr, 'r', idFunc, customGet);
        }
    };

    var createPropProxy = createPropProxy_fallback;

    if (propsSupport.js185) {
        // the best case, js185 props are supported
        createPropProxy = function (obj, propDescr, propAccess, apiReqFunc, idFunc, customGet, customSet) {
            var propName = propDescr.split(':')[0];

            // TODO: implement enumeration of propProxy to extend target namespace with them.
            var js185PropDef = {configurable: true, enumerable: false /* true */};
            if (0 <= propAccess.indexOf('r')) {
                js185PropDef['get'] = propAccessReqFunc(apiReqFunc, propDescr, 'r', idFunc, customGet);
            }
            if (0 <= propAccess.indexOf('w')) {
                js185PropDef['set'] = propAccessReqFunc(apiReqFunc, propDescr, 'w', idFunc, customSet);
            }
            Object.defineProperty(obj, propName, js185PropDef);
        };
    } else if (propsSupport.ffHackMethod) {
        // backup option, props are supported with firefox hack
        createPropProxy = function (obj, propDescr, propAccess, apiReqFunc, idFunc, customGet, customSet) {
            var propName = propDescr.split(':')[0];

            obj.__defineGetter__(propName, propAccessReqFunc(apiReqFunc, propDescr, 'r', idFunc, customGet));
            obj.__defineSetter__(propName, propAccessReqFunc(apiReqFunc, propDescr, 'w', idFunc, customSet));
        };
    } else {
        // Sorry, no luck. We able provide just a default implementation with explicit accessors.
        // It is the best thing we can do in this case.
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
                    result = jsValue(resultObj['result']);
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

    var util = {
        flag: {
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
        createMethodsProxy: createMethodsProxy,
        incompatibleProps: incompatibleProps,
        rhoIdParam: function () { return RHO_ID_PARAM },
        rhoClassParam: function () { return RHO_CLASS_PARAM },
        nextId: nextId
    };

    var platform = {
        id: {
            AJAX: 'ajax',
            AUTO: 'auto',
            RHOSIMLATOR: 'rhosimulator',
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

    return importOldApiTo({
            jQuery: $,
            util: util,
            platform: platform,
            callbackHandler: callbackHandler
    });

})(jQuery.noConflict(true));
// Module Rho.ORM

// === ORM class definition ===
(function ($, rho, rhoUtil) {
  'use strict';

  var builder;
  var modelname;
  var unprocessedModels = {};
  var models = {};

  var freeSourceIds = {
    'user' :     1,
    'app'  : 20001,
    'local': 40001
  };

  var clearFreeSourceIds = function(){
    freeSourceIds['user'] = 1;
    freeSourceIds['app'] = 20001;
    freeSourceIds['local'] = 40001;
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

  var enable = function(name){
    builder.model.enable(name);
  };

  var property = function(name,type,option){
    builder.model.property(name,type,option);
  };

  var belongs_to = function(owner){
    builder.model.belongs_to(owner);
  };

  var addUniqueIndex = function(name,column){
    builder.model.addUniqueIndex(name,column);
  };

  var addIndex = function(name,column){
    builder.model.addIndex(name,column);
  };

  var set = function(name,value){
    builder.model.set(name,value);
  };

  var modelName = function(name){
    modelname = name;
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
      }else if(name === 'propertyBag'){
        fixedSchema = false;
      }else if(name === 'fixedSchema'){
        fixedSchema = true;
      } else {
        params[name] = value;
      }
      return model;
    };

    var model = {
      property: function(name, type, option) {
          if (type === undefined) {
              type = 'string';
          }
          properties[name] = [type, option];
          return model;
      },
      //addIndex: addIndex,
      set: function(name,value){
        return set(name,value);
      },
      enable: function(name) {
          return set(name, true);
      },
      belongs_to: function(owner) {
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
      },
      addIndex: function(name,column) {
          if (!params.hasOwnProperty('index')) {
              params['index'] = {};
          }
          if (!params['index'].hasOwnProperty(name)){
              params['index'][name] = [];
          }
          if (column instanceof Array) {
              for (var i = 0; i < column.length; ++i) {
                  params['index'][name].push(column[i]);
              }
          } else {
              params['index'][name].push(column);
          }
          return model;
      },
      addUniqueIndex: function(name,column) {
          if (!params.hasOwnProperty('unique_index')) {
              params['unique_index'] = {};
          }
          if (!params['unique_index'].hasOwnProperty(name)){
              params['unique_index'][name] = [];
          }
          if (column instanceof Array) {
              for (var i = 0; i < column.length; ++i) {
                  params['unique_index'][name].push(column[i]);
              }
          } else {
              params['unique_index'][name].push(column);
          }
          return model;
      }
    };

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
      return sources.map[modelName];
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

    // setup source id from table if it has already been loaded before
    var db = Rho.ORMHelper.dbConnection(source['partition']);
    var res = db.$execute_sql("select * from sources where name = '" + modelName + "'");
    if(res !== undefined && res[0] !== undefined){
      source['source_id'] = res[0].map.source_id;
    }
    else{
      setDefault('source_id', getSourceId(source['partition']));
      accountSourceId(source['partition'], source['source_id']);
    }
    sources['$[]='](modelName, source);
    return source;
  };

  function processBelongsTo(source){
    var associationsSrc;
    var str_associations;
    $.each(source['belongs_to'],function(attrib,src_name){
        associationsSrc = Opal.Rho._scope.RhoConfig.$sources().map[src_name];
        if(associationsSrc === undefined || associationsSrc === null){
          console.log("Warning: belongs_to "+source['name']+" : source name" +src_name+ "does not exist. will try to load later");
          if(unprocessedModels[src_name] !== undefined)
            unprocessedModels[src_name] += "," + source['name'];
          else
            unprocessedModels[src_name] = source['name'];
        }
        else{
          if(associationsSrc['str_associations'] !== undefined && associationsSrc['str_associations'].length > 0){
            str_associations = associationsSrc['str_associations'];
            str_associations += ',';
          }
          else{
            str_associations = "";
          }
          str_associations += source['name']; //+ ',' + attrib;
          associationsSrc['str_associations'] = str_associations;
        }
    });
  }

  function setup_late_assocation(source){
    if(source['str_associations'] !== undefined)
      source['str_associations'] = "," + unprocessedModels[source['name']];
    else
      source['str_associations'] = unprocessedModels[source['name']];
    delete unprocessedModels[source['name']];
  }

  function getClientId(){
    var db = Rho.ORMHelper.dbConnection('user');
    var res = db.$execute_sql("SELECT client_id,reset from client_info limit 1");
    return res;
  }

  function haveLocalChanges(){
    var res = Opal.Rhom['$any_model_changed?']();
    return res;
  }
//ary_models,reset_client_info,reset_local_models
  function databaseFullResetEx(args_hash){
    //set default values if nothing is passed
    var reset_client_info = typeof args_hash["reset_client_info"] !== 'undefined' ? args_hash["reset_client_info"] : false;
    var reset_local_models = typeof args_hash["reset_local_models"] !== 'undefined' ? args_hash["reset_local_models"] : false;

    var sources = Rho.ORMHelper.getAllSources();
    var old_interval;
    var ary = args_hash['models'];

    if(Rho.RhoConnectClient !== undefined){
      old_interval = Rho.RhoConnectClient.pollInterval;
      Rho.RhoConnectClient.pollInterval = 0;
      Rho.RhoConnectClient.stopSync();
    }

    Rho.ORMHelper.dbConnection('user').$execute_sql("UPDATE client_info SET reset=1");
    models = {};

    $.each(ary,function(index,src_name){
      var source = sources[src_name];
      var src_partition = source['partition'];
      var db = Rho.ORMHelper.dbConnection(src_partition);

      if(src_partition == 'local' && !reset_local_models){
        //do nothing
      }else{
        //need to figure out how to save reset models so that client thread can get
        if(src_partition !== 'local'){
          if(Rho.RhoConnectClient !== undefined){
            if(Rho.RhoConnectClient.reset_models !== undefined){
              Rho.RhoConnectClient.reset_models += "," + src_name;
            }else{
              Rho.RhoConnectClient.reset_models = src_name;
            }
          }
        }

        try{
          db.$start_transaction;
          db.$execute_sql("UPDATE sources SET token=0 WHERE name = ?", src_name );
          if(source['schema'] !== undefined){
            db.$execute_sql("DELETE FROM " + src_name + ";");
          }else{
            db.$execute_sql("DELETE FROM object_values WHERE source_id=" + source['source_id']);
          }
          if(reset_client_info)
            db.$execute_sql("DELETE FROM client_info");

          db.$commit;
        }catch(e){
          console.error("databaseFullResetEx Exception: " + e);
          db.$rollback;
        }

        if(Rho.RhoConnectClient !== undefined){
          Rho.RhoConnectClient.pollInterval = old_interval;
        }

    }
  });
}

  function databaseFullReset(reset_client_info,reset_local_models){
    //set default values
    reset_client_info = typeof reset_client_info !== 'undefined' ? reset_client_info : false;
    reset_local_models = typeof reset_local_models !== 'undefined' ? reset_local_models : false;

    var old_interval;

    if(Rho.RhoConnectClient !== undefined){
      old_interval = Rho.RhoConnectClient.pollInterval;
      Rho.RhoConnectClient.pollInterval = 0;
      Rho.RhoConnectClient.stopSync();
    }

    Rho.ORMHelper.dbConnection('user').$execute_sql("UPDATE client_info SET reset=1");

    if(Rho.RhoConnectClient !== undefined && Rho.RhoConnectClient.bulksync_state !== undefined)
      Rho.RhoConnectClient.bulksync_state='0';

    $.each(Rho.ORMHelper.getDbPartitions(),function(name,db){
      if(name === 'local' && !reset_local_models){
        //do nothing
      }else{
        db.$execute_sql("UPDATE sources SET token=0");
        if(reset_client_info)
          db.$execute_sql("DELETE FROM client_info");
        db.$execute_sql("DELETE FROM object_values");
        $.each(Rho.ORMHelper.getAllSources(),function(src_name,model){
          if(model['partition'] === name)
            if(model["schema"] !== undefined){
              db.$execute_sql("DROP TABLE " + src_name);
              Rho.ORMHelper.createTable(model);
            }
        });
      }
    });

    //if(reset_client_info && Rho.RhoConnectClient.push_pin !== undefined)
    //  Rho.RhoConnectClient.push_pin = '';


    if(Rho.RhoConnectClient !== undefined){
      Rho.RhoConnectClient.pollInterval = old_interval;
    }
  }

  function databaseLocalReset(){
    db = Rho.ORMHelper.dbConnection("local");
    $.each(Rho.ORMHelper.getAllSources(),function(src_name,model){
        if(model['partition'] === "local"){
          if(model['schema'] !== undefined){
            db.$execute_sql("DROP TABLE " + src_name);
            Rho.ORMHelper.createTable(model);
          }
          else
            db.$execute_sql("DELETE FROM object_values WHERE source_id=" + model['source_id']);
        }
    });
  }

  function databaseFullResetAndLogout(){
    databaseFullReset(false,true);
    if(Rho.RhoConnectClient !== undefined)
      Rho.RhoConnectClient.logout();
  }

  function databaseFullclientResetAndLogout(){
    databaseFullReset(true,true);
    if(Rho.RhoConnectClient !== undefined)
      Rho.RhoConnectClient.logout();
  }

  var makeModel = function(modelName, builder) {
    Opal.Rhom._scope.RhomObjectFactory.$init_object(modelName);

    var source = addLoadedSource(modelName, builder.makeParams());

    //check for any belongs to that could not setup b/c model def not loaded
    if(unprocessedModels[source['name']] !== undefined)
      setup_late_assocation(source);

    if(source['schema'] !== undefined){
      Rho.ORMHelper.createTable(source);
    }
    if(source['sync_type'] !== undefined && source['sync_type'] !== 'none'){
      //TODO should belongs_to assocations with models not sync enabled be ignored?
      if(source['belongs_to'] !== undefined && source['belongs_to'] !== null)
        processBelongsTo(source);
      //Rho.ORMHelper.syncSource(source);
    }
    Rho.ORMHelper.syncSource(source);

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
          if(what === undefined)
            what = "all";
          var found = opalModel.$find(what,options);
          if(JSON.stringify(found).length == 2)
            return [];
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
        deleteAll: function(args) {
          opalModel.$delete_all(opalHash(args));
        }
    };
  };


  var ORM = {
    clear: function() {
      models = {};
      Rho.ORMHelper.clearAllSources();
    },
    clearFreeSourceIds: function(){
      clearFreeSourceIds();
    },
    databaseLocalReset: function(){
      databaseLocalReset();
    },
    databaseFullResetEx: function(args_hash){
      databaseFullResetEx(args_hash);
    },
    databaseFullResetAndLogout: function(){
      databaseFullResetAndLogout();
    },
    databaseFullReset: function(resetClientInfo,resetLocalModels){
      databaseFullReset(resetClientInfo,resetLocalModels);
    },
    databaseFullclientResetAndLogout: function(){
      databaseFullclientResetAndLogout();
    },
    addModel: function(modelDef) {
      modelname = null;
      builder = new makeModelBuilder();
      modelDef(Rho.ORM);
      models[modelname] = makeModel(modelname,builder);
      return models[modelname];
    },
    getModel: function(modelName) {
        return models[modelName];
    },
    getSourceId: function(partition){
      return getSourceId(partition);
    },
    getClientId: function(){
      var id = getClientId();
      if(id.length > 0)
        return id[0].map.client_id;
      else
        return id;
    },
    haveLocalChanges: function(){
      return haveLocalChanges();
    },
    accountSourceId: function(partition, sourceId){
      return accountSourceId(partition, sourceId);
    },
    enable: function(name){
      enable(name);
    },
    modelName: function(name){
      modelName(name);
    },
    addIndex: function(name,cols){
      addIndex(name,cols);
    },
    addUniqueIndex: function(name,cols){
      addUniqueIndex(name,cols);
    },
    property: function(name,type,option){
      property(name,type,option);
    },
    belongs_to: function(owner){
      belongs_to(owner);
    },
    set: function(name,value){
      set(name,value);
    }
  };
  //add Rho.ORM to public namespace
  var moduleNS = 'Rho.ORM';

  rhoUtil.namespace(moduleNS, ORM, true);

})(Rho.jQuery, Rho, Rho.util);// Module Rho.ORMHelper

(function ($,rho,rhoUtil) {
  'use strict';
  var moduleNS = 'Rho.ORMHelper';
  var dbPartitions = {};

  var createTable = function(source){
    var db = dbConnection(source['partition']);
    var create_table_str = "";
    if(!db.$is_table_exist(source['name'])){
      var column_names = formatColNames(source['schema']['property']);
      create_table_str = "CREATE TABLE " + source['name'] + " (" + column_names + ")";
      db.$execute_sql(create_table_str);
      if(source['index'] !== undefined){
        $.each(source['index'],function(name,columns){
          db.$execute_sql("CREATE INDEX " + name + " ON " + source['name'] + " (" + columns.join(',') + ")" );
        });
      }
      if(source['unique_index'] !== undefined){
        $.each(source['unique_index'],function(name,columns){
          db.$execute_sql("CREATE UNIQUE INDEX " + name + " ON " + source['name'] + " (" + columns.join(',') + ")" );
        });
      }
    }
  };

  function formatColNames(props){
    var col_str = "";
    $.each(props,function(name,d_type){
      col_str += name + " " + sql_type(d_type[0]) + ", ";
    });
    col_str += "\"object\" varchar(255) PRIMARY KEY";
    return col_str;
  }

  function sql_type(d_type){
    var cols = "";
    switch(d_type){
      case 'integer':
      case 'time':
        cols = 'integer';
        break;
      case 'float':
        cols = 'float';
        break;
      default:
        cols = 'varchar';
        break;
    }
    return cols;
  }

  function loadModel(modelName,init_db){
    if(Opal.Rho._scope.RhoConfig.$sources().map.hasOwnProperty(modelName) && !Opal.Rho._scope.RhoConfig.$sources().map[modelName]['loaded']){
      console.log("inside of load modal ready to load");
    }
  }

  var getDbPartitions = function(){
    return dbPartitions;
  };

  function clearAllSources(){
    var sources = Opal.Rho._scope.RhoConfig.$sources().map;
    $.each(sources,function(index,value){
      delete sources[index];
    });
  }

  function initSchemaSourcesPartition(uniq_sources, hash_migrate, partition, db){
    if(db.is_table_exist(source['name'])){
      call_migrate = true;
    }
  }

  function dbConnection(partition){
    //look for db connection, if not found create one
    var filepath = Rho.Application.databaseFilePath(partition);
    var partitions = getDbPartitions();
    var db;

    if(partitions && partitions[partition]){
      db = partitions[partition];
    }
    else{
      db = Opal.Database.$new(filepath, partition);
      partitions[partition] = db;
    }
    return db;
  }

  var syncSource = function(source){
    var db = dbConnection(source['partition']);
    db.$start_transaction;
    initDbSource(db, source);
    db.$commit;

    // ::Rho::RHO.init_schema_sources(hash_migrate)
    // ::Rho::RHO.check_sources_migration(uniq_sources)   
    // ::Rho::RHO.init_sync_source_properties(uniq_sources)
  };

  function initDbSource(db, source){
    var sql = "select sync_priority,source_id,partition, sync_type, schema_version, associations, blob_attribs, name from sources where name ='" + source['name'] + "'";
    var db_source_raw = db.$execute_sql(sql);
    var db_source;
    
    if(db_source_raw.length > 0)
      db_source = db_source_raw[0].map;
    else
      db_source = null;

    var blob_attribs = processBlobAttribs(source);

    var start_id = getStartId(source);
    var hash_migrate = {};
    if(db_source !== null){
      updateSourceModel(db,source,db_source,hash_migrate);
    }
    else{
      createSourceModel(db,source,start_id,blob_attribs);
    }
  }

  function getStartId(source){
    var start_id = 0;
    var src_id = source['source_id'];
    var partition = source['partition'];

    if(src_id > start_id)
      start_id = src_id;

    if(start_id < Rho.ORM.getSourceId(partition))
      start_id = Rho.ORM.getSourceId(partition) + 2;
    else
      start_id += 1;
    return start_id;
  }

  function createSourceModel(db,source,start_id,blob_attribs){
    // Need to find out how bulk mode is set
    //if Rho::RhoConfig.use_bulk_model.to_s != 'true' && Rho::RhoConfig.use_bulk_model.to_s != '1'
    if(source['source_id'] === undefined || source['source_id'] === null){
        source['source_id'] = start_id;
        Opal.Rho._scope.RhoConfig.$sources().map[source['name']]['source_id'] = start_id;
        start_id += 1;
    }
    db.$insert_into_table('sources',__hash2(
        {"source_id":source['source_id'],"name":source['name'], "sync_priority":source['sync_priority'], "sync_type":source['sync_type'], "partition":source['partition'],
        "schema_version":source['schema_version'], 'associations':source['associations'],'blob_attribs':blob_attribs }));
  }

  function updateSourceModel(db,source,source_db,hash_migrate){
    var final_hash = {"name":source['name']};
    if(source_db['sync_priority'] !== source['sync_priority'])
        final_hash["sync_priority"] = source['sync_priority'];
    if(source_db['sync_type'] !== source['sync_type'])
      final_hash["sync_type"] = source['sync_type'];
    if(source_db['schema_version'] !== source['schema_version']){
      if(source_db['partition'] == source['partition'])
        hash_migrate[source['name']] = source_db['schema_version'];
      else
        final_hash["schema_version"] = source['schema_version'];
    }
    if(source_db['partition'] !== source['partition'])
      final_hash["partition"] = source['partition'];
    if(source_db['associations'] !== source['associations'])
      final_hash["associations"] = source['associations'];
    if(source_db['blob_attribs'] !== source['blob_attribs'])
      final_hash["blob_attribs"] = source['blob_attribs'];

    //console.log("final hash is: " + JSON.stringiffinal_hash);
    db.$update_into_table('sources', Opal.hash2(final_hash),Opal.hash2({"source_id":source["source_id"]}));
    if(source['source_id'] === undefined || source['source_id'] === null){
        source['source_id'] = source_db['source_id'];
        Opal.Rho._scope.RhoConfig.$sources().map[source['name']]['source_id'] = source_db['source_id'];
    }
  }

  function processBlobAttribs(source){
    if(source['str_blob_attribs'] !== undefined)
      return source['str_blob_attribs'];
    else{
      source['str_blob_attribs'] = "";
      var props;
      if(source['schema'])
        props = source['schema']['property'];
      else
        props = source['property'];
      if(props){
        var str = "";
        var s = "";
        for(var i in props){
          s = props[i];
          if(typeof props[i] == String)
            s = s.split(",");
          if(s && s[0] == 'blob'){
            if(str.length > 0)
              str += ',';
            str += i + ',';
            if(s[1] == 'overwrite')
              str += '1';
            else
              str += '0';
          }
        }
        source['str_blob_attribs'] = str;
      }
      //console.log("str blob is: " + source['str_blob_attribs']);
      return source['str_blob_attribs'];
    }
  }

  //RhomDbAdapter functions

  function getValueForSqlStmt(value, convertValueToString){
    convertValueToString = typeof convertValueToString !== 'undefined' ? convertValueToString : true;
    var res;
    if(value === undefined || value === null){
      res = null;
    }
    else if(typeof value === 'string'){
      res = value.replace(/'/g,"''");
    }
    else{
      if(convertValueToString)
        res = String(value).replace(/'/g,"''");
      else
        res = value;
    }
    return res;
  }

  function whereStr(condition){
    var where_str = "";
    if(condition !== undefined){
      where_str += string_from_key_vals(condition,"and");
      where_str = where_str.substring(0,where_str.length - 5);
    }
    return where_str;
  }

  function string_from_key_vals_set(values, delim){
    var vals = "";
    var op;
    $.each(values,function(key,value){
      op = '= ';
      vals += " \"#{key}\" #{op} #{get_value_for_sql_stmt(value)} #{delim}";
    });
    return vals;
  }


  var ORMHelper = {
    getAllSources: function(){
      return Opal.Rho._scope.RhoConfig.$sources().map;
    },
    clearAllSources: function(){
      clearAllSources();
    },
    getDbPartitions: function(){
      return getDbPartitions();
    },
    createTable: function(modelName){
      createTable(modelName);
    },
    syncSource: function(source){
      syncSource(source);
    },
    dbConnection: function(partition){
      return dbConnection(partition);
    },
    getValueForSqlStmt: function(value,convertValueToString){
      return getValueForSqlStmt(value);
    },
    whereStr: function(condition){
      return whereStr(condition);
    }
  };
  rhoUtil.namespace(moduleNS, ORMHelper, true);

})(jQuery, Rho, Rho.util);
// Module Rho.Ruby.RunTime

(function ($, rho, rhoUtil) {
    // 'use strict';

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
        };

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

                var is_table_exist = function(table_name){
                  return db.isTableExist(table_name);
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
                        if(typeof values[key] === "object" && JSON.stringify(values[key] === "{}"))
                          vals.push(null);
                        else
                          vals.push(values[key]);
                    }
                    
                    var query = 'insert into "' + table + '" ("' + cols.join('", "') + '") values (' + quests.join(', ') + ')';
                    execute_sql(query, vals);
                };

                var delete_from_table = function(table, condition) {
                    var where = makeWhereParams(condition.map, 'and');
                    execute_sql('delete from "' + table + '" ' + where.clause, where.values);
                };

                var select_from_table = function(table, column, condition, params){
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


                //execute_sql(initDbSchemaSQL, []);

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
                    $execute_sql: execute_sql,
                    $is_table_exist: is_table_exist
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
              var partitions = Rho.ORMHelper.getDbPartitions();
              $.each(partitions, function(index, db) {
                var result = nil, self = this, _a, _b;
                if (db == null) db = nil;

                result = db.$execute_sql("SELECT object FROM changed_values LIMIT 1 OFFSET 0", []);
                if(result.length > 0){
                  TMP_1 = true;
                } 
                else {
                  if(TMP_1 !== true)
                    TMP_1 = nil;
                };
              });
              if(TMP_1 == true)
                return true;
              else
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
                      //return unless obj && (isSchemaSrc || Rho::RhoConfig.sources[get_inst_source_name()]['freezed'])
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
                          if(hash_props['$[]'] === undefined){
                            return nil;
                          }
                          alert(JSON.stringify(hash_props));
                          if ((_a = hash_props['$[]'](key.$to_s())) !== false && _a !== nil) {
                            return nil
                            } else {
                            return self.$raise(__scope.ArgumentError.$new("Non-exist property : " + (key) + ". For model : " + (self.$get_inst_source_name())))
                          };
                        }, TMP_4._s = this, TMP_4))
                        } else {
                        if(hash_props['$[]'] === undefined){
                            return nil;
                          }
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
                        res = db.$select_from_table("object_values", "object", __hash2({"source_id": this.$get_source_id()}), {"distinct": true}).$length()
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
                        //((__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$get_value_for_sql_stmt(value, false)))
                        var tmpsie = Rho.ORMHelper.getValueForSqlStmt(value, false);
                        res = res['$+'](val_op['$+'](" ")['$+'](tmpsie));
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
                      sql = [];
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
                      sql['$<<']("attrib="['$+'](Rho.ORMHelper.getValueForSqlStmt((function() { if (val_func.$upcase()['$==']("CAST")) {
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
                        //(__opal.Object._scope.Rhom)._scope.RhomDbAdapter.$get_value_for_sql_stmt(this.$get_source_id());
                        srcid_value = Rho.ORMHelper.getValueForSqlStmt(this.$get_source_id());
                        map_objs = __hash2({});
                        b_stop = false;
                        each(condition_hash, (TMP_12 = function(key, value) {

                          var sql = nil, res_objs = nil, self = TMP_12._s || this, TMP_13;
                          if (key == null) key = nil;
                          if (value == null) value = nil;

                          sql = [];
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
                                  sql += ("where "['$+'](Rho.ORMHelper.whereStr(where_cond))['$+']("\n"))
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
                            sql += (" WHERE "['$+'](Rho.ORMHelper.whereStr(where_cond)))
                            } else {
                            if (condition_str !== false && condition_str !== nil) {
                              sql += (" WHERE "['$+'](condition_str))
                              } else {
                              var opalsux = true;
                              if(args['$[]'](1) === undefined || args['$[]'](1)['$[]'] === undefined)
                                 opalsux = false;
                              if(opalsux && args['$[]'](1)['$[]'] === undefined)
                                opalsux = false;
                              if(opalsux && args['$[]'](1)['$[]']("conditions") === undefined){
                                opalsux = false;
                              }
                              if(opalsux){
                                if ((_a = (_b = args['$[]'](1), _b !== false && _b !== nil && _b !== undefined ? args['$[]'](1)['$[]']("conditions") : _b)) !== false && _a !== nil) {
                                  
                                    sql_cond = "";
                                    this.$convertConditionToStatement(args['$[]'](1)['$[]']("conditions"), args['$[]'](1)['$[]']("op"), sql_cond, vals);
                                    if (sql_cond.$length()['$>'](0)) {
                                      sql += (" WHERE "['$+'](sql_cond))
                                    };
                                }
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
                      console.log("inside is blob function");
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
                              attrs_list['$[]'](0).$each((TMP_47 = function(attr_name, attr_value) {

                                var self = TMP_47._s || this;
                                if (attr_name == null) attr_name = nil;
                                return db.$insert_into_table("changed_values", __hash2({"source_id": self.$get_inst_source_id(), "object": obj, "attrib": attr_name, "value": attr_value, "update_type": update_type}))
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
                    def.$is_blob_attrib = function(db_partition, n_src_id, attrib_name) {
                      return RRho.Database.SQLite3.isBlobAttr(db_partition, n_src_id.$to_i(), attrib_name);
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

              //(Opal.cvars["@@db"] = nil);

              RHO.$get_src_db = function(src_name) {
                var source = Opal.Rho._scope.RhoConfig.$sources().map[src_name];
                var db = nil;
                var partition = 'user';
                if(source !== undefined){
                  if(source['partition'] !== undefined)
                    partition = source['partition'];
                  db = RRho.ORMHelper.dbConnection(partition);
                }
                return db;
                // var _a, _b;
                // if ((_a = ((_b = Opal.cvars["@@db"]) == null ? nil : _b)) === false || _a === nil) {
                //   (Opal.cvars["@@db"] = __scope.Database.$new(RRho.Application.databaseFilePath('user'), "user"))
                // };
                // return ((_a = Opal.cvars["@@db"]) == null ? nil : _a);
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

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Application


(function ($, rho, rhoUtil) {
    'use strict';

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

            Application.HK_EVENT_DATA = "eventData"; 


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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Database.SQLite3


(function ($, rho, rhoUtil) {
    'use strict';

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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Log


(function ($, rho, rhoUtil) {
    'use strict';

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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeMenubar


(function ($, rho, rhoUtil) {
    'use strict';

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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeToolbar


(function ($, rho, rhoUtil) {
    'use strict';

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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Navbar


(function ($, rho, rhoUtil) {
    'use strict';

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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Network


(function ($, rho, rhoUtil) {
    'use strict';

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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Notification


(function ($, rho, rhoUtil) {
    'use strict';

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
            { propName: 'defaultInstance:getDefault:setDefault', propAccess: 'rw', customSet: function(obj) { if(!obj || 'function' != typeof obj.getId){ throw 'Default object should provide getId method!' }; currentDefaultID = obj.getId(); } }
          , { propName: 'defaultID:getDefaultID:setDefaultID', propAccess: 'rw', customSet: function(id) { currentDefaultID = id; } }
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

    

    rhoUtil.namespace(moduleNS, Push);

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.RhoFile


(function ($, rho, rhoUtil) {
    'use strict';

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
            
                this.open.apply(this, arguments);
            
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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.System


(function ($, rho, rhoUtil) {
    'use strict';

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
    
    
            System.HK_DO_NOT_RESTART_APP = "do_not_restart_app"; 

            System.HK_HIVE = "hive"; 

            System.HK_KEY = "key"; 

            System.HK_PERSISTENT = "persistent"; 

            System.HK_SETTING = "setting"; 

            System.HK_TYPE = "type"; 

            System.HK_VALUE = "value"; 


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
    
          // function(/* const rho::String& */ pathToBundle, /* const rho::Hashtable<rho::String, rho::String>& */ params, /* optional function */ oResult)
        , { methodName: 'replaceCurrentBundle', nativeName: 'replaceCurrentBundle', valueCallbackIndex: 2 }
    
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

    



})(Rho.jQuery, Rho, Rho.util);
// Module Rho.WebView


(function ($, rho, rhoUtil) {
    'use strict';

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
    var currentDefaultID = null;

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

    RhoConnectClient.getId = function() { return currentDefaultID; }

    // === RhoConnectClient instance properties ===

    rhoUtil.createPropsProxy(RhoConnectClient.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === RhoConnectClient instance methods ===

    rhoUtil.createMethodsProxy(RhoConnectClient.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    // === RhoConnectClient constants ===

    


    // === RhoConnectClient hash keys ===
    
    
            RhoConnectClient.HK_FROM = "from"; 

            RhoConnectClient.HK_MAX_RESULTS = "maxResults"; 

            RhoConnectClient.HK_OFFSET = "offset"; 

            RhoConnectClient.HK_PROGRESS_STEP = "progressStep"; 

            RhoConnectClient.HK_SEARCH_PARAMS = "searchParams"; 

            RhoConnectClient.HK_SOURCE_NAMES = "sourceNames"; 

            RhoConnectClient.HK_SYNC_CHANGES = "syncChanges"; 


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

    // Unnecessary because nothing has been defined for App object.
    // rhoUtil.namespace(moduleNS, App, true);

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
// Module rhoapi-native.rhosim

/* Rho API RhoSimulator native bridge */

(function ($, rho, rhoPlatform, rhoUtil) {
    'use strict';

    if (window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] && window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] == rhoPlatform.id.AJAX) return;

    var RHO_API_CALL_TAG = '__rhoNativeApiCall';
    var RHO_API_TAG = '__rhoNativeApi';

    var nativeApi = {

        apiCall: function (cmdText, async, resultHandler) {
            //window.alert(cmdText);

            var nativeApiResult = {};

            if (window[RHO_API_TAG] && 'function' == typeof window[RHO_API_TAG]['apiCall']) {
                nativeApiResult = window[RHO_API_TAG].apiCall(cmdText, async);
            }

            //window.alert(nativeApiResult);
            resultHandler(JSON.parse(nativeApiResult));
        }
    };

    // TODO: uncomment as native handler will be implemented
    rhoPlatform.nativeApiCall = nativeApi.apiCall;

})(Rho.jQuery, Rho, Rho.platform, Rho.util);
