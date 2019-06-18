/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?// For CommonJS and CommonJS-like environments where a proper window is present,
// execute the factory and get jQuery
// For environments that do not inherently posses a window with a document
// (such as Node.js), expose a jQuery-making factory as module.exports
// This accentuates the need for the creation of a real window
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info
module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=J.type(e);return"function"===n||J.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}// Implement the identical functionality for filter and not
function r(e,t,n){if(J.isFunction(t))return J.grep(e,function(e,r){/* jshint -W018 */
return!!t.call(e,r,e)!==n});if(t.nodeType)return J.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return J.filter(t,e,n);t=J.filter(t,e)}return J.grep(e,function(e){return G.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}// Convert String-formatted options into Object-formatted ones and store in cache
function o(e){var t=ht[e]={};return J.each(e.match(dt)||[],function(e,n){t[n]=!0}),t}/**
 * The ready event handler and self cleanup method
 */
function a(){K.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1),J.ready()}function s(){// Support: Android < 4,
// Old WebKit does not have Object.preventExtensions/freeze method,
// return new empty object instead with no [[set]] accessor
Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=J.expando+Math.random()}function l(e,t,n){var r;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(xt,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:// Only convert to a number if it doesn't change the string
+n+""===n?+n:wt.test(n)?J.parseJSON(n):n}catch(i){}// Make sure we set the data so it isn't changed later
yt.set(e,t,n)}else n=void 0;return n}function u(){return!0}function c(){return!1}function f(){try{return K.activeElement}catch(e){}}// Support: 1.x compatibility
// Manipulating tables requires a tbody
function p(e,t){return J.nodeName(e,"table")&&J.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function d(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Ot.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}// Mark scripts as having already been evaluated
function g(e,t){for(var n=0,r=e.length;r>n;n++)vt.set(e[n],"globalEval",!t||vt.get(t[n],"globalEval"))}function m(e,t){var n,r,i,o,a,s,l,u;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(vt.hasData(e)&&(o=vt.access(e),a=vt.set(t,o),u=o.events)){delete a.handle,a.events={};for(i in u)for(n=0,r=u[i].length;r>n;n++)J.event.add(t,i,u[i][n])}// 2. Copy user data
yt.hasData(e)&&(s=yt.access(e),l=J.extend({},s),yt.set(t,l))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&J.nodeName(e,t)?J.merge([e],n):n}// Support: IE >= 9
function y(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Ct.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function w(t,n){var r,i=J(n.createElement(t)).appendTo(n.body),// getDefaultComputedStyle might be reliably used only on attached element
o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?// Use of this method is a temporary fix (more like optmization) until something better comes along,
// since it was removed from specification and supported only in FF
r.display:J.css(i[0],"display");// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return i.detach(),o}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function x(e){var t=K,n=qt[e];// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return n||(n=w(e,t),"none"!==n&&n||(Rt=(Rt||J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Rt[0].contentDocument,t.write(),t.close(),n=w(e,t),Rt.detach()),qt[e]=n),n}function b(e,t,n){var r,i,o,a,s=e.style;// Support: IE9
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
// Support: iOS < 6
// A tribute to the "awesome hack by Dean Edwards"
// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE
// IE returns zIndex value as an integer.
return n=n||Wt(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||J.contains(e.ownerDocument,e)||(a=J.style(e,t)),$t.test(a)&&Ht.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function S(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){// Hook not needed (or it's not possible to use it due to missing dependency),
// remove it.
// Since there are no other hooks for marginRight, remove the whole object.
return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}// return a css property mapped to a potentially vendor prefixed property
function T(e,t){// shortcut for names that are not vendor prefixed
if(t in e)return t;for(// check for vendor prefixed names
var n=t[0].toUpperCase()+t.slice(1),r=t,i=Ut.length;i--;)if(t=Ut[i]+n,t in e)return t;return r}function C(e,t,n){var r=Vt.exec(t);// Guard against undefined "subtract", e.g., when used as in cssHooks
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?// If we already have the right measurement, avoid augmentation
4:// Otherwise initialize for horizontal or vertical properties
"width"===t?1:0,a=0;4>o;o+=2)// both box models exclude margin, so add it if we want it
"margin"===n&&(a+=J.css(e,n+St[o],!0,i)),r?(// border-box includes padding, so remove it if we want content
"content"===n&&(a-=J.css(e,"padding"+St[o],!0,i)),// at this point, extra isn't border nor margin, so remove border
"margin"!==n&&(a-=J.css(e,"border"+St[o]+"Width",!0,i))):(// at this point, extra isn't content, so add padding
a+=J.css(e,"padding"+St[o],!0,i),// at this point, extra isn't content nor padding, so add border
"padding"!==n&&(a+=J.css(e,"border"+St[o]+"Width",!0,i)));return a}function _(e,t,n){// Start with offset property, which is equivalent to the border-box value
var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Wt(e),a="border-box"===J.css(e,"boxSizing",!1,o);// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(0>=i||null==i){// Computed unit is not pixels. Stop here and return.
if(// Fall back to computed then uncomputed css if necessary
i=b(e,t,o),(0>i||null==i)&&(i=e.style[t]),$t.test(i))return i;// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
r=a&&(Q.boxSizingReliable()||i===e.style[t]),// Normalize "", auto, and prepare for extra
i=parseFloat(i)||0}// use the active box-sizing model to add/subtract irrelevant styles
return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function E(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=vt.get(r,"olddisplay"),n=r.style.display,t?(// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
o[a]||"none"!==n||(r.style.display=""),// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===r.style.display&&Tt(r)&&(o[a]=vt.access(r,"olddisplay",x(r.nodeName)))):(i=Tt(r),"none"===n&&i||vt.set(r,"olddisplay",i?n:J.css(r,"display"))));// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function M(e,t,n,r,i){return new M.prototype.init(e,t,n,r,i)}// Animations created synchronously will run synchronously
function A(){return setTimeout(function(){Qt=void 0}),Qt=J.now()}// Generate parameters to create a standard animation
function N(e,t){var n,r=0,i={height:e};for(// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
t=t?1:0;4>r;r+=2-t)n=St[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function L(e,t,n){for(var r,i=(nn[t]||[]).concat(nn["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))// we're done with this property
return r}function I(e,t,n){/* jshint validthis: true */
var r,i,o,a,s,l,u,c,f=this,p={},d=e.style,h=e.nodeType&&Tt(e),g=vt.get(e,"fxshow");// handle queue: false promises
n.queue||(s=J._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,f.always(function(){// doing this makes sure that the complete handler will be called
// before this completes
f.always(function(){s.unqueued--,J.queue(e,"fx").length||s.empty.fire()})})),// height/width overflow pass
1===e.nodeType&&("height"in t||"width"in t)&&(// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE9-10 do not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
n.overflow=[d.overflow,d.overflowX,d.overflowY],// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
u=J.css(e,"display"),// Test default display if display is currently "none"
c="none"===u?vt.get(e,"olddisplay")||x(e.nodeName):u,"inline"===c&&"none"===J.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));// show/hide pass
for(r in t)if(i=t[r],Zt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||J.style(e,r)}else u=void 0;if(J.isEmptyObject(p))"inline"===("none"===u?x(e.nodeName):u)&&(d.display=u);else{g?"hidden"in g&&(h=g.hidden):g=vt.access(e,"fxshow",{}),// store state if its toggle - enables .stop().toggle() to "reverse"
o&&(g.hidden=!h),h?J(e).show():f.done(function(){J(e).hide()}),f.done(function(){var t;vt.remove(e,"fxshow");for(t in p)J.style(e,t,p[t])});for(r in p)a=L(h?g[r]:0,r,f),r in g||(g[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function j(e,t){var n,r,i,o,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=J.camelCase(n),i=t[r],o=e[n],J.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=J.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function P(e,t,n){var r,i,o=0,a=tn.length,s=J.Deferred().always(function(){// don't match elem in the :animated selector
delete l.elem}),l=function(){if(i)return!1;for(var t=Qt||A(),n=Math.max(0,u.startTime+u.duration-t),// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:J.extend({},t),opts:J.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qt||A(),duration:n.duration,tweens:[],createTween:function(t,n){var r=J.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);// resolve when we played the last frame
// otherwise, reject
return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(j(c,u.opts.specialEasing);a>o;o++)if(r=tn[o].call(u,e,c,u.opts))return r;// attach callbacks from options
return J.map(c,L,u),J.isFunction(u.opts.start)&&u.opts.start.call(e,u),J.fx.timer(J.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function D(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(dt)||[];if(J.isFunction(n))// For each dataType in the dataTypeExpression
for(;r=o[i++];)// Prepend if requested
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}// Base inspection function for prefilters and transports
function O(e,t,n,r){function i(s){var l;return o[s]=!0,J.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},a=e===Sn;return i(t.dataTypes[0])||!o["*"]&&i("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function F(e,t){var n,r,i=J.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&J.extend(!0,e,r),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function B(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r)for(i in s)if(s[i]&&s[i].test(r)){l.unshift(i);break}// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{// Try convertible dataTypes
for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}a||(a=i)}// Or just use first one
o=o||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function R(e,t,n,r){var i,o,a,s,l,u={},// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),// Apply the dataFilter if provided
!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){// If none found, seek a pair
if(// Seek a direct converter
a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(// If conv2 outputs current
s=i.split(" "),s[1]===o&&(// If prev can be converted to accepted input
a=u[l+" "+s[0]]||u["* "+s[0]])){// Condense equivalence converters
a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}// Apply converter (if not an equivalence)
if(a!==!0)// Unless errors are allowed to bubble, catch and return them
if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function q(e,t,n,r){var i;if(J.isArray(t))// Serialize array item.
J.each(t,function(t,i){n||_n.test(e)?// Treat each array item as a scalar.
r(e,i):// Item is non-scalar (array or object), encode its numeric index.
q(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==J.type(t))// Serialize scalar item.
r(e,t);else// Serialize object item.
for(i in t)q(e+"["+i+"]",t[i],n,r)}/**
 * Gets a window from an element
 */
function H(e){return J.isWindow(e)?e:9===e.nodeType&&e.defaultView}// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var $=[],W=$.slice,z=$.concat,V=$.push,G=$.indexOf,X={},Y=X.toString,U=X.hasOwnProperty,Q={},// Use the correct document accordingly with window argument (sandbox)
K=e.document,Z="2.1.1",// Define a local copy of jQuery
J=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new J.fn.init(e,t)},// Support: Android<4.1
// Make sure we trim BOM and NBSP
et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
tt=/^-ms-/,nt=/-([\da-z])/gi,// Used by jQuery.camelCase as callback to replace()
rt=function(e,t){return t.toUpperCase()};J.fn=J.prototype={// The current version of jQuery being used
jquery:Z,constructor:J,// Start with an empty selector
selector:"",// The default length of a jQuery object is 0
length:0,toArray:function(){return W.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){// Return just the one element from the set
// Return all the elements in a clean array
return null!=e?0>e?this[e+this.length]:this[e]:W.call(this)},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=J.merge(this.constructor(),e);// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t.context=this.context,t},// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(e,t){return J.each(this,e,t)},map:function(e){return this.pushStack(J.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:V,sort:$.sort,splice:$.splice},J.extend=J.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for(// Handle a deep copy situation
"boolean"==typeof a&&(u=a,// skip the boolean and the target
a=arguments[s]||{},s++),// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||J.isFunction(a)||(a={}),// extend jQuery itself if only one argument is passed
s===l&&(a=this,s--);l>s;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))// Extend the base object
for(t in e)n=a[t],r=e[t],// Prevent never-ending loop
a!==r&&(// Recurse if we're merging plain objects or arrays
u&&r&&(J.isPlainObject(r)||(i=J.isArray(r)))?(i?(i=!1,o=n&&J.isArray(n)?n:[]):o=n&&J.isPlainObject(n)?n:{},// Never move original objects, clone them
a[t]=J.extend(u,o,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},J.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(e){return"function"===J.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return!J.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
return"object"!==J.type(e)||e.nodeType||J.isWindow(e)?!1:e.constructor&&!U.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?X[Y.call(e)]||"object":typeof e},// Evaluates a script in a global context
globalEval:function(e){var t,n=eval;e=J.trim(e),e&&(// If the code includes a valid, prologue position
// strict mode pragma, execute code by injecting a
// script tag into the document.
1===e.indexOf("use strict")?(t=K.createElement("script"),t.text=e,K.head.appendChild(t).parentNode.removeChild(t)):// Otherwise, avoid the DOM node creation, insertion
// and removal by using an indirect global eval
n(e))},// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(tt,"ms-").replace(nt,rt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},// args is for internal usage only
each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},// Support: Android<4.1
trim:function(e){return null==e?"":(e+"").replace(et,"")},// results is for internal usage only
makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?J.merge(r,"string"==typeof e?[e]:e):V.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:G.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},// arg is for internal usage only
map:function(e,t,r){var i,o=0,a=e.length,s=n(e),l=[];// Go through the array, translating each of the items to their new values
if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&l.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&l.push(i);// Flatten any nested arrays
return z.apply([],l)},// A global GUID counter for objects
guid:1,// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,t){var n,r,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return"string"==typeof t&&(n=e[t],t=e,e=n),J.isFunction(e)?(r=W.call(arguments,2),i=function(){return e.apply(t||this,r.concat(W.call(arguments)))},i.guid=e.guid=e.guid||J.guid++,i):void 0},now:Date.now,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:Q}),// Populate the class2type map
J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){X["[object "+t+"]"]=t.toLowerCase()});var it=/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
function(e){function t(e,t,n,r){var i,o,a,s,// QSA vars
l,u,f,d,h,g;if((t?t.ownerDocument||t:q)!==I&&L(t),t=t||I,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(P&&!r){// Shortcuts
if(i=yt.exec(e))// Speed-up: Sizzle("#ID")
if(a=i[1]){if(9===s){// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document (jQuery #6963)
if(o=t.getElementById(a),!o||!o.parentNode)return n;// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
if(o.id===a)return n.push(o),n}else// Context is not a document
if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&B(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return J.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&b.getElementsByClassName&&t.getElementsByClassName)return J.apply(n,t.getElementsByClassName(a)),n}// QSA path
if(b.qsa&&(!D||!D.test(e))){// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
if(d=f=R,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=k(e),(f=t.getAttribute("id"))?d=f.replace(xt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",l=u.length;l--;)u[l]=d+p(u[l]);h=wt.test(e)&&c(t.parentNode)||t,g=u.join(",")}if(g)try{return J.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}// All others
return E(e.replace(lt,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function n(){function e(n,r){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+" ")>S.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function r(e){return e[R]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function i(e){var t=I.createElement("div");try{return!!e(t)}catch(n){return!1}finally{// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function o(e,t){for(var n=e.split("|"),r=e.length;r--;)S.attrHandle[n[r]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Y)-(~e.sourceIndex||Y);// Use IE sourceIndex if available on both nodes
if(r)return r;// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function u(e){return r(function(t){return t=+t,r(function(n,r){// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function c(e){return e&&typeof e.getElementsByTagName!==X&&e}// Easy API for creating new setFilters
function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=$++;// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[H,o];// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[R]||(t[R]={}),(s=l[r])&&s[0]===H&&s[1]===o)// Assign to newCache so results back-propagate to previous elements
return u[2]=s[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
l[r]=u,u[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function v(e,t,n,i,o,a){return i&&!i[R]&&(i=v(i)),o&&!o[R]&&(o=v(o,a)),r(function(r,a,s,l){var u,c,f,p=[],d=[],h=a.length,// Get initial elements from seed or context
v=r||g(t||"*",s.nodeType?[s]:s,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
y=!e||!r&&t?v:m(v,p,e,s,l),w=n?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(r?e:h||i)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
a:y;// Apply postFilter
if(// Find primary matches
n&&n(y,w,s,l),i)for(u=m(w,d),i(u,[],s,l),// Un-match failing elements by moving them back to matcherIn
c=u.length;c--;)(f=u[c])&&(w[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
u=[],c=w.length;c--;)(f=w[c])&&// Restore matcherIn since elem is not yet a final match
u.push(y[c]=f);o(null,w=[],u,l)}for(// Move matched elements from seed to results to keep them synchronized
c=w.length;c--;)(f=w[c])&&(u=o?tt.call(r,f):p[c])>-1&&(r[u]=!(a[u]=f))}}else w=m(w===a?w.splice(h,w.length):w),o?o(null,a,w,l):J.apply(a,w)})}function y(e){for(var t,n,r,i=e.length,o=S.relative[e[0].type],a=o||S.relative[" "],s=o?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
l=d(function(e){return e===t},a,!0),u=d(function(e){return tt.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==M)||((t=n).nodeType?l(e,n,r):u(e,n,r))}];i>s;s++)if(n=S.relative[e[s].type])c=[d(h(c),n)];else{// Return special upon seeing a positional matcher
if(n=S.filter[e[s].type].apply(null,e[s].matches),n[R]){for(// Find the next relative operator (if any) for proper handling
r=++s;i>r&&!S.relative[e[r].type];r++);// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return v(s>1&&h(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(lt,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function w(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,l,u){var c,f,p,d=0,h="0",g=r&&[],v=[],y=M,// We must always have either seed elements or outermost context
w=r||o&&S.find.TAG("*",u),// Use integer dirruns iff this is the outermost matcher
x=H+=null==y?1:Math.random()||.1,b=w.length;// Add elements passing elementMatchers directly to results
// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(u&&(M=a!==I&&a);h!==b&&null!=(c=w[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){l.push(c);break}u&&(H=x)}// Track unmatched elements for set filters
i&&(// They will have gone through all possible matchers
(c=!p&&c)&&d--,// Lengthen the array for every element, matched or not
r&&g.push(c))}if(// Apply set filters to unmatched elements
d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,a,s);if(r){// Reintegrate element matches to eliminate the need for sorting
if(d>0)for(;h--;)g[h]||v[h]||(v[h]=K.call(l));// Discard index placeholder values to get only actual matches
v=m(v)}// Add matches to results
J.apply(l,v),// Seedless set matches succeeding multiple successful matchers stipulate sorting
u&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(l)}// Override manipulation of globals by nested matchers
return u&&(H=x,M=y),g};return i?r(a):a}var x,b,S,T,C,k,_,E,M,A,N,// Local document vars
L,I,j,P,D,O,F,B,// Instance-specific data
R="sizzle"+-new Date,q=e.document,H=0,$=0,W=n(),z=n(),V=n(),G=function(e,t){return e===t&&(N=!0),0},// General-purpose constants
X="undefined",Y=1<<31,// Instance methods
U={}.hasOwnProperty,Q=[],K=Q.pop,Z=Q.push,J=Q.push,et=Q.slice,// Use a stripped-down indexOf if we can't use a native one
tt=Q.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
rt="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/css3-syntax/#characters
it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
ot=it.replace("w","w#"),// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
at="\\["+rt+"*("+it+")(?:"+rt+// Operator (capture 2)
"*([*^$|!~]?=)"+rt+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+rt+"*\\]",st=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+at+")*)|.*)\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
lt=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),ut=new RegExp("^"+rt+"*,"+rt+"*"),ct=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),ft=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),pt=new RegExp(st),dt=new RegExp("^"+ot+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+at),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wt=/[+~]/,xt=/'|\\/g,// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
bt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),St=function(e,t,n){var r="0x"+t-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};// Optimize for push.apply( _, NodeList )
try{J.apply(Q=et.call(q.childNodes),q.childNodes),// Support: Android<4.0
// Detect silently failing push.apply
Q[q.childNodes.length].nodeType}catch(Tt){J={apply:Q.length?// Leverage slice if possible
function(e,t){Z.apply(e,et.call(t))}:// Support: IE<9
// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}// Expose support vars for convenience
b=t.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
C=t.isXML=function(e){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
L=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:q,r=n.defaultView;// If no document and documentElement is available, return
// If no document and documentElement is available, return
// Set our document
// Support tests
// Support: IE>8
// If iframe document is assigned to "document" variable and if iframe has been reloaded,
// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
// IE6-8 do not support the defaultView property so parent will be undefined
// IE11 does not have attachEvent, so all must suffer
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Check if getElementsByClassName can be trusted
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return n!==I&&9===n.nodeType&&n.documentElement?(I=n,j=n.documentElement,P=!C(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){L()},!1):r.attachEvent&&r.attachEvent("onunload",function(){L()})),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=vt.test(n.getElementsByClassName)&&i(function(e){// Support: Opera<10
// Catch gEBCN failure to find non-leading classes
// Support: Safari<4
// Catch class over-caching
return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),b.getById=i(function(e){return j.appendChild(e).id=R,!n.getElementsByName||!n.getElementsByName(R).length}),b.getById?(S.find.ID=function(e,t){if(typeof t.getElementById!==X&&P){var n=t.getElementById(e);// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return n&&n.parentNode?[n]:[]}},S.filter.ID=function(e){var t=e.replace(bt,St);return function(e){return e.getAttribute("id")===t}}):(delete S.find.ID,S.filter.ID=function(e){var t=e.replace(bt,St);return function(e){var n=typeof e.getAttributeNode!==X&&e.getAttributeNode("id");return n&&n.value===t}}),S.find.TAG=b.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==X?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);// Filter out possible comments
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},S.find.CLASS=b.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==X&&P?t.getElementsByClassName(e):void 0},O=[],D=[],(b.qsa=vt.test(n.querySelectorAll))&&(i(function(e){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
e.innerHTML="<select msallowclip=''><option selected=''></option></select>",// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowclip^='']").length&&D.push("[*^$]="+rt+"*(?:''|\"\")"),// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||D.push("\\["+rt+"*(?:value|"+nt+")"),// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||D.push(":checked")}),i(function(e){// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&D.push("name"+rt+"*[*^$|!~]?="),// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
e.querySelectorAll(":enabled").length||D.push(":enabled",":disabled"),// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),D.push(",.*:")})),(b.matchesSelector=vt.test(F=j.matches||j.webkitMatchesSelector||j.mozMatchesSelector||j.oMatchesSelector||j.msMatchesSelector))&&i(function(e){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
b.disconnectedMatch=F.call(e,"div"),// This should fail with an exception
// Gecko does not error, returns false instead
F.call(e,"[s!='']:x"),O.push("!=",st)}),D=D.length&&new RegExp(D.join("|")),O=O.length&&new RegExp(O.join("|")),t=vt.test(j.compareDocumentPosition),B=t||vt.test(j.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},G=t?function(e,t){// Flag for duplicate removal
if(e===t)return N=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var r=!e.compareDocumentPosition-!t.compareDocumentPosition;// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!b.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===q&&B(q,e)?-1:t===n||t.ownerDocument===q&&B(q,t)?1:A?tt.call(A,e)-tt.call(A,t):0:4&r?-1:1)}:function(e,t){// Exit early if the nodes are identical
if(e===t)return N=!0,0;var r,i=0,o=e.parentNode,s=t.parentNode,l=[e],u=[t];// Parentless nodes are either documents or disconnected
if(!o||!s)return e===n?-1:t===n?1:o?-1:s?1:A?tt.call(A,e)-tt.call(A,t):0;if(o===s)return a(e,t);for(// Otherwise we need full lists of their ancestors for comparison
r=e;r=r.parentNode;)l.unshift(r);for(r=t;r=r.parentNode;)u.unshift(r);// Walk down the tree looking for a discrepancy
for(;l[i]===u[i];)i++;// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return i?a(l[i],u[i]):l[i]===q?-1:u[i]===q?1:0},n):I},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(// Set document vars if needed
(e.ownerDocument||e)!==I&&L(e),// Make sure that attribute selectors are quoted
n=n.replace(ft,"='$1']"),!(!b.matchesSelector||!P||O&&O.test(n)||D&&D.test(n)))try{var r=F.call(e,n);// IE 9's matchesSelector returns false on disconnected nodes
if(r||b.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,I,null,[e]).length>0},t.contains=function(e,t){// Set document vars if needed
return(e.ownerDocument||e)!==I&&L(e),B(e,t)},t.attr=function(e,t){// Set document vars if needed
(e.ownerDocument||e)!==I&&L(e);var n=S.attrHandle[t.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&U.call(S.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==r?r:b.attributes||!P?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(// Unless we *know* we can detect duplicates, assume their presence
N=!b.detectDuplicates,A=!b.sortStable&&e.slice(0),e.sort(G),N){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return A=null,e},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
T=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===i||4===i)return e.nodeValue}else// If no nodeType, this is expected to be an array
for(;t=e[r++];)// Do not traverse comment nodes
n+=T(t);// Do not include comment or processing instruction nodes
return n},S=t.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(bt,St),e[3]=(e[3]||e[4]||e[5]||"").replace(bt,St),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return ht.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(bt,St).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==X&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;// Shortcut for :nth-*(n)
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(m){// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
h=g="only"===e&&!h&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(h=[a?m.firstChild:m.lastChild],a&&y){for(// Seek `elem` from a previously-cached index
c=m[R]||(m[R]={}),u=c[e]||[],d=u[0]===H&&u[1],p=u[0]===H&&u[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(// Fallback to seeking `elem` from the start
p=d=0)||h.pop();)// When found, cache indexes on `parent` and break
if(1===f.nodeType&&++p&&f===t){c[e]=[H,d,p];break}}else if(y&&(u=(t[R]||(t[R]={}))[e])&&u[0]===H)p=u[1];else// Use the same loop as above to seek `elem` from the start
for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(// Cache the index of each encountered element
y&&((f[R]||(f[R]={}))[e]=[H,p]),f!==t)););// Incorporate the offset, then check against cycle size
return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,o=S.pseudos[e]||S.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return o[R]?o(n):o.length>1?(i=[e,e,"",n],S.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=tt.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{// Potentially complex pseudos
not:r(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=_(e.replace(lt,"$1"));return i[R]?r(function(e,t,n,r){// Match elements unmatched by `matcher`
for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:r(function(e){// lang value must be a valid identifier
return dt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(bt,St).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===j},focus:function(e){return e===I.activeElement&&(!I.hasFocus||I.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},// Contents
empty:function(e){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!S.pseudos.empty(e)},// Element/input types
header:function(e){return mt.test(e.nodeName)},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},S.pseudos.nth=S.pseudos.eq;// Add button/input type pseudos
for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})S.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})S.pseudos[x]=l(x);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return f.prototype=S.filters=S.pseudos,S.setFilters=new f,k=t.tokenize=function(e,n){var r,i,o,a,s,l,u,c=z[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=S.preFilter;s;){// Comma and first run
(!r||(i=ut.exec(s)))&&(i&&(// Don't consume trailing commas as valid
s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,// Combinators
(i=ct.exec(s))&&(r=i.shift(),o.push({value:r,// Cast descendant combinators to space
type:i[0].replace(lt," ")}),s=s.slice(r.length));// Filters
for(a in S.filter)!(i=ht[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return n?s.length:s?t.error(e):z(e,l).slice(0)},_=t.compile=function(e,t){var n,r=[],i=[],o=V[e+" "];if(!o){for(// Generate a function of recursive functions that can be used to check each element
t||(t=k(e)),n=t.length;n--;)o=y(t[n]),o[R]?r.push(o):i.push(o);// Cache the compiled function
o=V(e,w(i,r)),// Save selector and tokenization
o.selector=e}return o},E=t.select=function(e,t,n,r){var i,o,a,s,l,u="function"==typeof e&&e,f=!r&&k(e=u.selector||e);// Try to minimize operations if there is no seed and only one group
if(n=n||[],1===f.length){if(// Take a shortcut and set the context if the root selector is an ID
o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&b.getById&&9===t.nodeType&&P&&S.relative[o[1].type]){if(t=(S.find.ID(a.matches[0].replace(bt,St),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(// Fetch a seed set for right-to-left matching
i=ht.needsContext.test(e)?0:o.length;i--&&(a=o[i],!S.relative[s=a.type]);)if((l=S.find[s])&&(r=l(a.matches[0].replace(bt,St),wt.test(o[0].type)&&c(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
o.splice(i,1),e=r.length&&p(o),!e)return J.apply(n,r),n;break}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(u||_(e,f))(r,t,!P,n,wt.test(e)&&c(t.parentNode)||t),n},b.sortStable=R.split("").sort(G).join("")===R,b.detectDuplicates=!!N,L(),b.sortDetached=i(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(I.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);J.find=it,J.expr=it.selectors,J.expr[":"]=J.expr.pseudos,J.unique=it.uniqueSort,J.text=it.getText,J.isXMLDoc=it.isXML,J.contains=it.contains;var ot=J.expr.match.needsContext,at=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,st=/^.[^:#\[\.,]*$/;J.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?J.find.matchesSelector(r,e)?[r]:[]:J.find.matches(e,J.grep(t,function(e){return 1===e.nodeType}))},J.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(J(e).filter(function(){for(t=0;n>t;t++)if(J.contains(i[t],this))return!0}));for(t=0;n>t;t++)J.find(e,i[t],r);// Needed because $( selector, context ) becomes $( context ).find( selector )
return r=this.pushStack(n>1?J.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!r(this,"string"==typeof e&&ot.test(e)?J(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var lt,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
ut=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ct=J.fn.init=function(e,t){var n,r;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if("string"==typeof e){// Match html or make sure no context is specified for #id
if(// Assume that strings that start and end with <> are HTML and skip the regex check
n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ut.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||lt).find(e):this.constructor(t).find(e);// HANDLE: $(html) -> $(array)
if(n[1]){// HANDLE: $(html, props)
if(t=t instanceof J?t[0]:t,// scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
J.merge(this,J.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:K,!0)),at.test(n[1])&&J.isPlainObject(t))for(n in t)// Properties of context are called as methods if possible
J.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
// Inject the element directly into the jQuery object
return r=K.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=K,this.selector=e,this}// Execute immediately if ready is not present
return e.nodeType?(this.context=this[0]=e,this.length=1,this):J.isFunction(e)?"undefined"!=typeof lt.ready?lt.ready(e):e(J):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),J.makeArray(e,this))};// Give the init function the jQuery prototype for later instantiation
ct.prototype=J.fn,// Initialize central reference
lt=J(K);var ft=/^(?:parents|prev(?:Until|All))/,// methods guaranteed to produce a unique set when starting from a unique set
pt={children:!0,contents:!0,next:!0,prev:!0};J.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&J(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),J.fn.extend({has:function(e){var t=J(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(J.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=ot.test(e)||"string"!=typeof e?J(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)// Always skip document fragments
if(n.nodeType<11&&(a?a.index(n)>-1:// Don't pass non-elements to Sizzle
1===n.nodeType&&J.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?J.unique(o):o)},// Determine the position of an element within
// the matched set of elements
index:function(e){// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?G.call(J(e),this[0]):G.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(J.unique(J.merge(this.get(),J(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),J.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return J.dir(e,"parentNode")},parentsUntil:function(e,t,n){return J.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return J.dir(e,"nextSibling")},prevAll:function(e){return J.dir(e,"previousSibling")},nextUntil:function(e,t,n){return J.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return J.dir(e,"previousSibling",n)},siblings:function(e){return J.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return J.sibling(e.firstChild)},contents:function(e){return e.contentDocument||J.merge([],e.childNodes)}},function(e,t){J.fn[e]=function(n,r){var i=J.map(this,t,n);// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=J.filter(r,i)),this.length>1&&(pt[e]||J.unique(i),ft.test(e)&&i.reverse()),this.pushStack(i)}});var dt=/\S+/g,ht={};/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
J.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?ht[e]||o(e):J.extend({},e);var// Last fire value (for non-forgettable lists)
t,// Flag to know if list was already fired
n,// Flag to know if list is currently firing
r,// First callback to fire (used internally by add and fireWith)
i,// End of the loop when firing
a,// Index of currently firing callback (modified by remove if needed)
s,// Actual callback list
l=[],// Stack of fire calls for repeatable lists
u=!e.once&&[],// Fire callbacks
c=function(o){for(t=e.memory&&o,n=!0,s=i||0,i=0,a=l.length,r=!0;l&&a>s;s++)if(l[s].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;// To prevent further calls using add
break}r=!1,l&&(u?u.length&&c(u.shift()):t?l=[]:f.disable())},// Actual Callbacks object
f={// Add a callback or a collection of callbacks to the list
add:function(){if(l){// First, we save the current length
var n=l.length;!function o(t){J.each(t,function(t,n){var r=J.type(n);"function"===r?e.unique&&f.has(n)||l.push(n):n&&n.length&&"string"!==r&&// Inspect recursively
o(n)})}(arguments),// Do we need to add the callbacks to the
// current firing batch?
r?a=l.length:t&&(i=n,c(t))}return this},// Remove a callback from the list
remove:function(){return l&&J.each(arguments,function(e,t){for(var n;(n=J.inArray(t,l,n))>-1;)l.splice(n,1),// Handle firing indexes
r&&(a>=n&&a--,s>=n&&s--)}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?J.inArray(e,l)>-1:!(!l||!l.length)},// Remove all callbacks from the list
empty:function(){return l=[],a=0,this},// Have the list do nothing anymore
disable:function(){return l=u=t=void 0,this},// Is it disabled?
disabled:function(){return!l},// Lock the list in its current state
lock:function(){return u=void 0,t||f.disable(),this},// Is it locked?
locked:function(){return!u},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return!l||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):c(t)),this},// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!n}};return f},J.extend({Deferred:function(e){var t=[// action, add listener, listener list, final state
["resolve","done",J.Callbacks("once memory"),"resolved"],["reject","fail",J.Callbacks("once memory"),"rejected"],["notify","progress",J.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return J.Deferred(function(n){J.each(t,function(t,o){var a=J.isFunction(e[t])&&e[t];// deferred[ done | fail | progress ] for forwarding actions to newDefer
i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&J.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?J.extend(e,r):r}},i={};// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return r.pipe=r.then,J.each(t,function(e,o){var a=o[2],s=o[3];// promise[ done | fail | progress ] = list.add
r[o[1]]=a.add,// Handle state
s&&a.add(function(){// state = [ resolved | rejected ]
n=s},t[1^e][2].disable,t[2][2].lock),// deferred[ resolve | reject | notify ]
i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},// Deferred helper
when:function(e){var t,n,r,i=0,o=W.call(arguments),a=o.length,// the count of uncompleted subordinates
s=1!==a||e&&J.isFunction(e.promise)?a:0,// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
l=1===s?e:J.Deferred(),// Update function for both resolve and progress values
u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?W.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};// add listeners to Deferred subordinates; treat others as resolved
if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&J.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;// if we're not waiting on anything, resolve the master
return s||l.resolveWith(r,o),l.promise()}});// The deferred used on DOM ready
var gt;J.fn.ready=function(e){// Add the callback
return J.ready.promise().done(e),this},J.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Hold (or release) the ready event
holdReady:function(e){e?J.readyWait++:J.ready(!0)},// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
(e===!0?--J.readyWait:J.isReady)||(// Remember that the DOM is ready
J.isReady=!0,// If a normal DOM Ready event fired, decrement, and wait if need be
e!==!0&&--J.readyWait>0||(// If there are functions bound, to execute
gt.resolveWith(K,[J]),// Trigger any bound ready events
J.fn.triggerHandler&&(J(K).triggerHandler("ready"),J(K).off("ready"))))}}),J.ready.promise=function(t){// Catch cases where $(document).ready() is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
// Handle it asynchronously to allow scripts the opportunity to delay ready
// Use the handy event callback
// A fallback to window.onload, that will always work
return gt||(gt=J.Deferred(),"complete"===K.readyState?setTimeout(J.ready):(K.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1))),gt.promise(t)},// Kick off the DOM ready check even if the user does not
J.ready.promise();// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var mt=J.access=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;// Sets many values
if("object"===J.type(n)){i=!0;for(s in n)J.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,J.isFunction(r)||(a=!0),u&&(// Bulk operations run against the entire set
a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(J(e),n)})),t))for(;l>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));// Gets
return i?e:u?t.call(e):l?t(e[0],n):o};/**
 * Determines whether an object can have data
 */
J.acceptData=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
/* jshint -W018 */
return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=J.acceptData,s.prototype={key:function(e){// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return the key for a frozen object.
if(!s.accepts(e))return 0;var t={},// Check if the owner object already has a cache key
n=e[this.expando];// If not, create one
if(!n){n=s.uid++;// Secure it in a non-enumerable, non-writable property
try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,J.extend(e,t)}}// Ensure the cache object
return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,// There may be an unlock assigned to this node,
// if there is no entry for this "owner", create one inline
// and set the unlock as though an owner entry had always existed
i=this.key(e),o=this.cache[i];// Handle: [ owner, key, value ] args
if("string"==typeof t)o[t]=n;else// Fresh assignments by object are shallow copied
if(J.isEmptyObject(o))J.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){// Either a valid cache is found, or will be created.
// New caches will be created and the unlock returned,
// allowing direct access to the newly created
// empty data object. A valid owner object must be provided.
var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// [*]When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,J.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(void 0===t)this.cache[o]={};else{// Support array or space separated string of keys
J.isArray(t)?// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
r=t.concat(t.map(J.camelCase)):(i=J.camelCase(t),// Try the string as a key before any manipulation
t in a?r=[t,i]:(// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
r=i,r=r in a?[r]:r.match(dt)||[])),n=r.length;for(;n--;)delete a[r[n]]}},hasData:function(e){return!J.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var vt=new s,yt=new s,wt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,xt=/([A-Z])/g;J.extend({hasData:function(e){return yt.hasData(e)||vt.hasData(e)},data:function(e,t,n){return yt.access(e,t,n)},removeData:function(e,t){yt.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to data_priv methods, these can be deprecated.
_data:function(e,t,n){return vt.access(e,t,n)},_removeData:function(e,t){vt.remove(e,t)}}),J.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(i=yt.get(o),1===o.nodeType&&!vt.get(o,"hasDataAttrs"))){for(n=a.length;n--;)// Support: IE11+
// The attrs elements can be null (#14894)
a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=J.camelCase(r.slice(5)),l(o,r,i[r])));vt.set(o,"hasDataAttrs",!0)}return i}// Sets multiple values
// Sets multiple values
return"object"==typeof e?this.each(function(){yt.set(this,e)}):mt(this,function(t){var n,r=J.camelCase(e);// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t){if(// Attempt to get data from the cache
// with the key as-is
n=yt.get(o,e),void 0!==n)return n;if(// Attempt to get data from the cache
// with the key camelized
n=yt.get(o,r),void 0!==n)return n;if(// Attempt to "discover" the data in
// HTML5 custom data-* attrs
n=l(o,r,void 0),void 0!==n)return n}else// Set the data...
this.each(function(){// First, attempt to store a copy or reference of any
// data that might've been store with a camelCased key.
var n=yt.get(this,r);// For HTML5 data-* attribute interop, we have to
// store property names with dashes in a camelCase form.
// This might not apply to all properties...*
yt.set(this,r,t),// *... In the case of properties that might _actually_
// have dashes, we need to also store a copy of that
// unchanged property.
-1!==e.indexOf("-")&&void 0!==n&&yt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){yt.remove(this,e)})}}),J.extend({queue:function(e,t,n){var r;// Speed up dequeue by getting out quickly if this is just a lookup
return e?(t=(t||"fx")+"queue",r=vt.get(e,t),n&&(!r||J.isArray(n)?r=vt.access(e,t,J.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=J.queue(e,t),r=n.length,i=n.shift(),o=J._queueHooks(e,t),a=function(){J.dequeue(e,t)};// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),// clear up the last queue stop function
delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},// not intended for public consumption - generates a queueHooks object, or returns the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return vt.get(e,n)||vt.access(e,n,{empty:J.Callbacks("once memory").add(function(){vt.remove(e,[t+"queue",n])})})}}),J.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?J.queue(this[0],e):void 0===t?this:this.each(function(){var n=J.queue(this,e,t);// ensure a hooks for this queue
J._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&J.dequeue(this,e)})},dequeue:function(e){return this.each(function(){J.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=J.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=vt.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var bt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,St=["Top","Right","Bottom","Left"],Tt=function(e,t){// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return e=t||e,"none"===J.css(e,"display")||!J.contains(e.ownerDocument,e)},Ct=/^(?:checkbox|radio)$/i;!function(){var e=K.createDocumentFragment(),t=e.appendChild(K.createElement("div")),n=K.createElement("input");// #11217 - WebKit loses check when the name is after the checked attribute
// Support: Windows Web Apps (WWA)
// `name` and `type` need .setAttribute for WWA
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
// old WebKit doesn't clone checked state correctly in fragments
Q.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE9-IE11+
t.innerHTML="<textarea>x</textarea>",Q.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var kt="undefined";Q.focusinBubbles="onfocusin"in e;var _t=/^key/,Et=/^(?:mouse|pointer|contextmenu)|click/,Mt=/^(?:focusinfocus|focusoutblur)$/,At=/^([^.]*)(?:\.(.+)|)$/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
J.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=vt.get(e);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(m)for(// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(o=n,n=o.handler,i=o.selector),// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=J.guid++),// Init the element's event structure and main handler, if this is the first
(l=m.events)||(l=m.events={}),(a=m.handle)||(a=m.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof J!==kt&&J.event.triggered!==t.type?J.event.dispatch.apply(e,arguments):void 0}),// Handle multiple events separated by a space
t=(t||"").match(dt)||[""],u=t.length;u--;)s=At.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),// There *must* be a type, no attaching namespace-only handlers
d&&(// If event changes its type, use the special event handlers for the changed type
f=J.event.special[d]||{},// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,// Update special based on newly reset type
f=J.event.special[d]||{},// handleObj is passed to all event handlers
c=J.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&J.expr.match.needsContext.test(i),namespace:h.join(".")},o),// Init the event handler queue if we're the first
(p=l[d])||(p=l[d]=[],p.delegateCount=0,// Only use addEventListener if the special events handler returns false
f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),// Add to the element's handler list, delegates in front
i?p.splice(p.delegateCount++,0,c):p.push(c),// Keep track of which events have ever been used, for event optimization
J.event.global[d]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=vt.hasData(e)&&vt.get(e);if(m&&(l=m.events)){for(// Once for each type.namespace in types; type may be omitted
t=(t||"").match(dt)||[""],u=t.length;u--;)// Unbind all events (on this namespace, if provided) for the element
if(s=At.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=J.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=l[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||J.removeEvent(e,d,m.handle),delete l[d])}else for(d in l)J.event.remove(e,d+t[u],n,r,!0);// Remove the expando if it's no longer used
J.isEmptyObject(l)&&(delete m.handle,vt.remove(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,l,u,c,f,p=[r||K],d=U.call(t,"type")?t.type:t,h=U.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(a=s=r=r||K,3!==r.nodeType&&8!==r.nodeType&&!Mt.test(d+J.event.triggered)&&(d.indexOf(".")>=0&&(// Namespaced trigger; create a regexp to match event type in handle()
h=d.split("."),d=h.shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,// Caller can pass in a jQuery.Event object, Object, or just an event type string
t=t[J.expando]?t:new J.Event(d,"object"==typeof t&&t),// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=r),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:J.makeArray(n,[t]),// Allow special events to draw outside the lines
f=J.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!f.noBubble&&!J.isWindow(r)){for(l=f.delegateType||d,Mt.test(l+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;// Only add window if we got to document (e.g., not plain obj or detached DOM)
s===(r.ownerDocument||K)&&p.push(s.defaultView||s.parentWindow||e)}for(// Fire handlers on the event path
o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?l:f.bindType||d,// jQuery handler
c=(vt.get(a,"events")||{})[t.type]&&vt.get(a,"handle"),c&&c.apply(a,n),// Native handler
c=u&&a[u],c&&c.apply&&J.acceptData(a)&&(t.result=c.apply(a,n),t.result===!1&&t.preventDefault());// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!J.acceptData(r)||u&&J.isFunction(r[d])&&!J.isWindow(r)&&(s=r[u],s&&(r[u]=null),J.event.triggered=d,r[d](),J.event.triggered=void 0,s&&(r[u]=s)),t.result}},dispatch:function(e){// Make a writable jQuery.Event from the native event object
e=J.event.fix(e);var t,n,r,i,o,a=[],s=W.call(arguments),l=(vt.get(this,"events")||{})[e.type]||[],u=J.event.special[e.type]||{};// Call the preDispatch hook for the mapped type, and let it bail if desired
if(// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(// Determine handlers
a=J.event.handlers.call(this,e,l),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)// Triggered event must either 1) have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((J.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));// Call the postDispatch hook for the mapped type
return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(l.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],// Don't conflict with Object.prototype properties (#13203)
i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?J(i,this).index(l)>=0:J.find(i,this,null,[l]).length),r[i]&&r.push(o);r.length&&a.push({elem:l,handlers:r})}// Add the remaining (directly-bound) handlers
return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){// Add which for key events
return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;// Calculate pageX/Y if missing and clientX/Y available
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||K,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[J.expando])return e;// Create a writable copy of the event object and normalize some properties
var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Et.test(i)?this.mouseHooks:_t.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new J.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];// Support: Cordova 2.5 (WebKit) (#13255)
// All events should have a target; Cordova deviceready doesn't
// Support: Safari 6.0+, Chrome < 28
// Target should not be a text node (#504, #13143)
return e.target||(e.target=K),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function(){return"checkbox"===this.type&&this.click&&J.nodeName(this,"input")?(this.click(),!1):void 0},// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return J.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var i=J.extend(new J.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?J.event.trigger(i,null,t):J.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},J.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},J.Event=function(e,t){// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: Android < 4.0
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof J.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?u:c):this.type=e,t&&J.extend(this,t),this.timeStamp=e&&e.timeStamp||J.now(),void(this[J.expando]=!0)):new J.Event(e,t)},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
J.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=u,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
J.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){J.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return(!i||i!==r&&!J.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
Q.focusinBubbles||J.each({focus:"focusin",blur:"focusout"},function(e,t){// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){J.event.simulate(t,e.target,J.event.fix(e),!0)};J.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=vt.access(r,t);i||r.addEventListener(e,n,!0),vt.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=vt.access(r,t)-1;i?vt.access(r,t,i):(r.removeEventListener(e,n,!0),vt.remove(r,t))}}}),J.fn.extend({on:function(e,t,n,r,/*INTERNAL*/i){var o,a;// Types can be a map of types/handlers
if("object"==typeof e){// ( types-Object, selector, data )
"string"!=typeof t&&(// ( types-Object, data )
n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(// ( types, fn )
r=t,n=t=void 0):null==r&&("string"==typeof t?(// ( types, selector, fn )
r=n,n=void 0):(// ( types, data, fn )
r=n,n=t,t=void 0)),r===!1)r=c;else if(!r)return this;// Use same guid so caller can remove using origFn
return 1===i&&(o=r,r=function(e){// Can use an empty set, since event contains the info
return J().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=J.guid++)),this.each(function(){J.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)// ( event )  dispatched jQuery.Event
return r=e.handleObj,J(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}// ( types [, fn] )
return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){J.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){J.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?J.event.trigger(e,t,n,!0):void 0}});var Nt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Lt=/<([\w:]+)/,It=/<|&#?\w+;/,jt=/<(?:script|style|link)/i,// checked="checked" or checked
Pt=/checked\s*(?:[^=]|=\s*.checked.)/i,Dt=/^$|\/(?:java|ecma)script/i,Ot=/^true\/(.*)/,Ft=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,// We have to close these tags to support XHTML (#13200)
Bt={// Support: IE 9
option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE 9
Bt.optgroup=Bt.option,Bt.tbody=Bt.tfoot=Bt.colgroup=Bt.caption=Bt.thead,Bt.th=Bt.td,J.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),l=J.contains(e.ownerDocument,e);// Support: IE >= 9
// Fix Cloning issues
if(!(Q.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||J.isXMLDoc(e)))for(// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
a=v(s),o=v(e),r=0,i=o.length;i>r;r++)y(o[r],a[r]);// Copy the events from the original to the clone
if(t)if(n)for(o=o||v(e),a=a||v(s),r=0,i=o.length;i>r;r++)m(o[r],a[r]);else m(e,s);// Return the cloned set
// Preserve script evaluation history
return a=v(s,"script"),a.length>0&&g(a,!l&&v(e,"script")),s},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if(i=e[p],i||0===i)// Add nodes directly
if("object"===J.type(i))// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
J.merge(f,i.nodeType?[i]:i);else if(It.test(i)){for(o=o||c.appendChild(t.createElement("div")),// Deserialize a standard representation
a=(Lt.exec(i)||["",""])[1].toLowerCase(),s=Bt[a]||Bt._default,o.innerHTML=s[1]+i.replace(Nt,"<$1></$2>")+s[2],// Descend through wrappers to the right content
u=s[0];u--;)o=o.lastChild;// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
J.merge(f,o.childNodes),// Remember the top-level container
o=c.firstChild,// Fixes #12346
// Support: Webkit, IE
o.textContent=""}else f.push(t.createTextNode(i));for(// Remove wrapper from fragment
c.textContent="",p=0;i=f[p++];)// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
if((!r||-1===J.inArray(i,r))&&(l=J.contains(i.ownerDocument,i),// Append to fragment
o=v(c.appendChild(i),"script"),// Preserve script evaluation history
l&&g(o),n))for(u=0;i=o[u++];)Dt.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=J.event.special,a=0;void 0!==(n=e[a]);a++){if(J.acceptData(n)&&(i=n[vt.expando],i&&(t=vt.cache[i]))){if(t.events)for(r in t.events)o[r]?J.event.remove(n,r):J.removeEvent(n,r,t.handle);vt.cache[i]&&// Discard any remaining `private` data
delete vt.cache[i]}// Discard any remaining `user` data
delete yt.cache[n[yt.expando]]}}}),J.fn.extend({text:function(e){return mt(this,function(e){return void 0===e?J.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?J.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||J.cleanData(v(n)),n.parentNode&&(t&&J.contains(n.ownerDocument,n)&&g(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
J.cleanData(v(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return J.clone(this,e,t)})},html:function(e){return mt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!jt.test(e)&&!Bt[(Lt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Nt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},// Remove element nodes and prevent memory leaks
1===t.nodeType&&(J.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];// Force removal if there was no new content (e.g., from empty arguments)
// Make the changes, replacing each context element with the new content
return this.domManip(arguments,function(t){e=this.parentNode,J.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){// Flatten any nested arrays
e=z.apply([],e);var n,r,i,o,a,s,l=0,u=this.length,c=this,f=u-1,p=e[0],g=J.isFunction(p);// We can't cloneNode fragments that contain checked, in WebKit
if(g||u>1&&"string"==typeof p&&!Q.checkClone&&Pt.test(p))return this.each(function(n){var r=c.eq(n);g&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(u&&(n=J.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(i=J.map(v(n,"script"),d),o=i.length;u>l;l++)a=n,l!==f&&(a=J.clone(a,!0,!0),// Keep references to cloned scripts for later restoration
o&&// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
J.merge(i,v(a,"script"))),t.call(this[l],a,l);if(o)// Evaluate executable scripts on first document insertion
for(s=i[i.length-1].ownerDocument,// Reenable scripts
J.map(i,h),l=0;o>l;l++)a=i[l],Dt.test(a.type||"")&&!vt.access(a,"globalEval")&&J.contains(s,a)&&(a.src?// Optional AJAX dependency, but won't run scripts if not present
J._evalUrl&&J._evalUrl(a.src):J.globalEval(a.textContent.replace(Ft,"")))}return this}}),J.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){J.fn[e]=function(e){for(var n,r=[],i=J(e),o=i.length-1,a=0;o>=a;a++)n=a===o?this:this.clone(!0),J(i[a])[t](n),// Support: QtWebKit
// .get() because push.apply(_, arraylike) throws
V.apply(r,n.get());return this.pushStack(r)}});var Rt,qt={},Ht=/^margin/,$t=new RegExp("^("+bt+")(?!px)[a-z%]+$","i"),Wt=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){a.style.cssText=// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(a,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=K.documentElement,o=K.createElement("div"),a=K.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",Q.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(a),// Support: node.js jsdom
// Don't assume that getComputedStyle is a property of the global object
e.getComputedStyle&&J.extend(Q,{pixelPosition:function(){// This test is executed only once but we still do memoizing
// since we can use the boxSizingReliable pre-computing.
// No need to check if the test was already performed, though.
return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){// Support: Android 2.3
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// This support function is only executed once so no memoizing is needed.
var t,n=a.appendChild(K.createElement("div"));// Reset CSS: box-sizing; display; margin; border; padding
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),t}}))}(),// A method for quickly swapping in/out CSS properties to get correct calculations.
J.swap=function(e,t,n,r){var i,o,a={};// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);// Revert the old values
for(o in t)e.style[o]=a[o];return i};var// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
zt=/^(none|table(?!-c[ea]).+)/,Vt=new RegExp("^("+bt+")(.*)$","i"),Gt=new RegExp("^([+-])=("+bt+")","i"),Xt={position:"absolute",visibility:"hidden",display:"block"},Yt={letterSpacing:"0",fontWeight:"400"},Ut=["Webkit","O","Moz","ms"];J.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=b(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{// normalize float css property
"float":"cssFloat"},// Get and set the style property on a DOM Node
style:function(e,t,n,r){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,o,a,s=J.camelCase(t),l=e.style;// Check if we're setting a value
// gets hook for the prefixed version
// followed by the unprefixed version
// Check if we're setting a value
// If a hook was provided get the non-computed value from there
// convert relative number strings (+= or -=) to relative numbers. #7345
// Fixes bug #9237
// Make sure that null and NaN values aren't set. See: #7116
// If a number was passed in, add 'px' to the (except for certain CSS properties)
// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
// but it would mean to define eight (for every problematic property) identical functions
// If a hook was provided, use that value, otherwise just set the specified value
return t=J.cssProps[s]||(J.cssProps[s]=T(l,s)),a=J.cssHooks[t]||J.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t]:(o=typeof n,"string"===o&&(i=Gt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(J.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||J.cssNumber[s]||(n+="px"),Q.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(l[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,s=J.camelCase(t);// Return, converting to number if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// gets hook for the prefixed version
// followed by the unprefixed version
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
//convert "normal" to computed value
// Return, converting to number if forced or a qualifier was provided and val looks numeric
return t=J.cssProps[s]||(J.cssProps[s]=T(e.style,s)),a=J.cssHooks[t]||J.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=b(e,t,r)),"normal"===i&&t in Yt&&(i=Yt[t]),""===n||n?(o=parseFloat(i),n===!0||J.isNumeric(o)?o||0:i):i}}),J.each(["height","width"],function(e,t){J.cssHooks[t]={get:function(e,n,r){return n?zt.test(J.css(e,"display"))&&0===e.offsetWidth?J.swap(e,Xt,function(){return _(e,t,r)}):_(e,t,r):void 0},set:function(e,n,r){var i=r&&Wt(e);return C(e,n,r?k(e,t,r,"border-box"===J.css(e,"boxSizing",!1,i),i):0)}}}),// Support: Android 2.3
J.cssHooks.marginRight=S(Q.reliableMarginRight,function(e,t){return t?J.swap(e,{display:"inline-block"},b,[e,"marginRight"]):void 0}),// These hooks are used by animate to expand properties
J.each({margin:"",padding:"",border:"Width"},function(e,t){J.cssHooks[e+t]={expand:function(n){for(var r=0,i={},// assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+St[r]+t]=o[r]||o[r-2]||o[0];return i}},Ht.test(e)||(J.cssHooks[e+t].set=C)}),J.fn.extend({css:function(e,t){return mt(this,function(e,t,n){var r,i,o={},a=0;if(J.isArray(t)){for(r=Wt(e),i=t.length;i>a;a++)o[t[a]]=J.css(e,t[a],!1,r);return o}return void 0!==n?J.style(e,t,n):J.css(e,t)},e,t,arguments.length>1)},show:function(){return E(this,!0)},hide:function(){return E(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Tt(this)?J(this).show():J(this).hide()})}}),J.Tween=M,M.prototype={constructor:M,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(J.cssNumber[n]?"":"px")},cur:function(){var e=M.propHooks[this.prop];return e&&e.get?e.get(this):M.propHooks._default.get(this)},run:function(e){var t,n=M.propHooks[this.prop];return this.pos=t=this.options.duration?J.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):M.propHooks._default.set(this),this}},M.prototype.init.prototype=M.prototype,M.propHooks={_default:{get:function(e){var t;// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=J.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
J.fx.step[e.prop]?J.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[J.cssProps[e.prop]]||J.cssHooks[e.prop])?J.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE9
// Panic based approach to setting things on disconnected nodes
M.propHooks.scrollTop=M.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},J.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},J.fx=M.prototype.init,// Back Compat <1.8 extension point
J.fx.step={};var Qt,Kt,Zt=/^(?:toggle|show|hide)$/,Jt=new RegExp("^(?:([+-])=|)("+bt+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[I],nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Jt.exec(t),o=i&&i[3]||(J.cssNumber[e]?"":"px"),// Starting value computation is required for potential unit mismatches
a=(J.cssNumber[e]||"px"!==o&&+r)&&Jt.exec(J.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){// Trust units reported by jQuery.css
o=o||a[3],// Make sure we update the tween properties later on
i=i||[],// Iteratively approximate from a nonzero starting point
a=+r||1;do// If previous iteration zeroed out, double until we get *something*
// Use a string for doubling factor so we don't accidentally see scale as unchanged below
s=s||".5",// Adjust and apply
a/=s,J.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}// Update tween properties
// If a +=/-= token was provided, we're doing a relative animation
return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};J.Animation=J.extend(P,{tweener:function(e,t){J.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),J.speed=function(e,t,n){var r=e&&"object"==typeof e?J.extend({},e):{complete:n||!n&&t||J.isFunction(e)&&e,duration:e,easing:n&&t||t&&!J.isFunction(t)&&t};// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return r.duration=J.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in J.fx.speeds?J.fx.speeds[r.duration]:J.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){J.isFunction(r.old)&&r.old.call(this),r.queue&&J.dequeue(this,r.queue)},r},J.fn.extend({fadeTo:function(e,t,n,r){// show any hidden elements after setting opacity to 0
return this.filter(Tt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=J.isEmptyObject(e),o=J.speed(t,n,r),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=P(this,J.extend({},e),o);// Empty animations, or finishing resolves immediately
(i||vt.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=J.timers,a=vt.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&en.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
(t||!n)&&J.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=vt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=J.timers,a=r?r.length:0;// look for any active animations, and finish them
for(// enable finishing flag on private data
n.finish=!0,// empty the queue first
J.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// look for any animations in the old queue and finish them
for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);// turn off finishing flag
delete n.finish})}}),J.each(["toggle","show","hide"],function(e,t){var n=J.fn[t];J.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(N(t,!0),e,r,i)}}),// Generate shortcuts for custom animations
J.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){J.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),J.timers=[],J.fx.tick=function(){var e,t=0,n=J.timers;for(Qt=J.now();t<n.length;t++)e=n[t],// Checks the timer has not already been removed
e()||n[t]!==e||n.splice(t--,1);n.length||J.fx.stop(),Qt=void 0},J.fx.timer=function(e){J.timers.push(e),e()?J.fx.start():J.timers.pop()},J.fx.interval=13,J.fx.start=function(){Kt||(Kt=setInterval(J.fx.tick,J.fx.interval))},J.fx.stop=function(){clearInterval(Kt),Kt=null},J.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
J.fn.delay=function(e,t){return e=J.fx?J.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=K.createElement("input"),t=K.createElement("select"),n=t.appendChild(K.createElement("option"));e.type="checkbox",// Support: iOS 5.1, Android 4.x, Android 2.3
// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
Q.checkOn=""!==e.value,// Must access the parent to make an option select properly
// Support: IE9, IE10
Q.optSelected=n.selected,// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
t.disabled=!0,Q.optDisabled=!n.disabled,// Check if an input maintains its value after becoming a radio
// Support: IE9, IE10
e=K.createElement("input"),e.value="t",e.type="radio",Q.radioValue="t"===e.value}();var rn,on,an=J.expr.attrHandle;J.fn.extend({attr:function(e,t){return mt(this,J.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){J.removeAttr(this,e)})}}),J.extend({attr:function(e,t,n){var r,i,o=e.nodeType;// don't get/set attributes on text, comment and attribute nodes
if(e&&3!==o&&8!==o&&2!==o)// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return typeof e.getAttribute===kt?J.prop(e,t,n):(1===o&&J.isXMLDoc(e)||(t=t.toLowerCase(),r=J.attrHooks[t]||(J.expr.match.bool.test(t)?on:rn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=J.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void J.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(dt);if(o&&1===e.nodeType)for(;n=o[i++];)r=J.propFix[n]||n,// Boolean attributes get special treatment (#10870)
J.expr.match.bool.test(n)&&(// Set corresponding property to false
e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Q.radioValue&&"radio"===t&&J.nodeName(e,"input")){// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to default in case type is set after value during creation
var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),// Hooks for boolean attributes
on={set:function(e,t,n){// Remove boolean attributes when set to false
return t===!1?J.removeAttr(e,n):e.setAttribute(n,n),n}},J.each(J.expr.match.bool.source.match(/\w+/g),function(e,t){var n=an[t]||J.find.attr;an[t]=function(e,t,r){var i,o;// Avoid an infinite loop by temporarily removing this function from the getter
return r||(o=an[t],an[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,an[t]=o),i}});var sn=/^(?:input|select|textarea|button)$/i;J.fn.extend({prop:function(e,t){return mt(this,J.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[J.propFix[e]||e]})}}),J.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;// don't get/set properties on text, comment and attribute nodes
if(e&&3!==a&&8!==a&&2!==a)// Fix name and attach hooks
return o=1!==a||!J.isXMLDoc(e),o&&(t=J.propFix[t]||t,i=J.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||sn.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
Q.optSelected||(J.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),J.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){J.propFix[this.toLowerCase()]=this});var ln=/[\t\r\n\f]/g;J.fn.extend({addClass:function(e){var t,n,r,i,o,a,s="string"==typeof e&&e,l=0,u=this.length;if(J.isFunction(e))return this.each(function(t){J(this).addClass(e.call(this,t,this.className))});if(s)for(// The disjunction here is for better compressibility (see removeClass)
t=(e||"").match(dt)||[];u>l;l++)if(n=this[l],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");// only assign if different to avoid unneeded rendering.
a=J.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0===arguments.length||"string"==typeof e&&e,l=0,u=this.length;if(J.isFunction(e))return this.each(function(t){J(this).removeClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(dt)||[];u>l;l++)if(n=this[l],// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):"")){for(o=0;i=t[o++];)// Remove *all* instances
for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");// only assign if different to avoid unneeded rendering.
a=e?J.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(J.isFunction(e)?function(n){J(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(// toggle individual class names
var t,r=0,i=J(this),o=e.match(dt)||[];t=o[r++];)// check each className given, space separated list
i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===kt||"boolean"===n)&&(this.className&&// store className if set
vt.set(this,"__className__",this.className),// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.className=this.className||e===!1?"":vt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(ln," ").indexOf(t)>=0)return!0;return!1}});var un=/\r/g;J.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=J.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,J(this).val()):e,// Treat null/undefined as ""; convert numbers to string
null==i?i="":"number"==typeof i?i+="":J.isArray(i)&&(i=J.map(i,function(e){return null==e?"":e+""})),t=J.valHooks[this.type]||J.valHooks[this.nodeName.toLowerCase()],// If set returns undefined, fall back to normal setting
t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)// handle most common string cases
// handle cases where value is null/undef or number
return t=J.valHooks[i.type]||J.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(un,""):null==n?"":n)}}}),J.extend({valHooks:{option:{get:function(e){var t=J.find.attr(e,"value");// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
return null!=t?t:J.trim(J.text(e))}},select:{get:function(e){// Loop through all the selected options
for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)// IE6-9 doesn't update selected after form reset (#2551)
if(n=r[l],!(!n.selected&&l!==i||(// Don't return options that are disabled or in a disabled optgroup
Q.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&J.nodeName(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=J(n).val(),o)return t;// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=J.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=J.inArray(r.value,o)>=0)&&(n=!0);// force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
J.each(["radio","checkbox"],function(){J.valHooks[this]={set:function(e,t){return J.isArray(t)?e.checked=J.inArray(J(e).val(),t)>=0:void 0}},Q.checkOn||(J.valHooks[this].get=function(e){// Support: Webkit
// "" is returned instead of "on" if a value isn't specified
return null===e.getAttribute("value")?"on":e.value})}),// Return jQuery for attributes-only inclusion
J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){// Handle event binding
J.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),J.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var cn=J.now(),fn=/\?/;// Support: Android 2.3
// Workaround failure to string-cast null input
J.parseJSON=function(e){return JSON.parse(e+"")},// Cross-browser xml parsing
J.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;// Support: IE9
try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&J.error("Invalid XML: "+e),t};var// Document location
pn,dn,hn=/#.*$/,gn=/([?&])_=[^&]*/,mn=/^(.*?):[ \t]*([^\r\n]*)$/gm,// #7653, #8125, #8152: local protocol detection
vn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,yn=/^(?:GET|HEAD)$/,wn=/^\/\//,xn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
bn={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Sn={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Tn="*/".concat("*");// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try{dn=location.href}catch(Cn){// Use the href attribute of an A element
// since IE will modify it given document.location
dn=K.createElement("a"),dn.href="",dn=dn.href}// Segment location into parts
pn=xn.exec(dn.toLowerCase())||[],J.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:dn,type:"GET",isLocal:vn.test(pn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Tn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":J.parseJSON,// Parse text as xml
"text xml":J.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){// Building a settings object
// Extending ajaxSettings
return t?F(F(e,J.ajaxSettings),t):F(J.ajaxSettings,e)},ajaxPrefilter:D(bn),ajaxTransport:D(Sn),// Main method
ajax:function(e,t){// Callback for when everything is done
function n(e,t,n,a){var l,c,v,y,x,S=t;// Called once
2!==w&&(// State is "done" now
w=2,// Clear timeout if it exists
s&&clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
o=a||"",// Set readyState
b.readyState=e>0?4:0,// Determine if successful
l=e>=200&&300>e||304===e,// Get response data
n&&(y=B(f,b,n)),// Convert no matter what (that way responseXXX fields are always set)
y=R(f,y,b,l),// If successful, handle type chaining
l?(// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
f.ifModified&&(x=b.getResponseHeader("Last-Modified"),x&&(J.lastModified[i]=x),x=b.getResponseHeader("etag"),x&&(J.etag[i]=x)),// if no content
204===e||"HEAD"===f.type?S="nocontent":304===e?S="notmodified":(S=y.state,c=y.data,v=y.error,l=!v)):(// We extract error from statusText
// then normalize statusText and status for non-aborts
v=S,(e||!S)&&(S="error",0>e&&(e=0))),// Set data for the fake xhr object
b.status=e,b.statusText=(t||S)+"",// Success/Error
l?h.resolveWith(p,[c,S,b]):h.rejectWith(p,[b,S,v]),// Status-dependent callbacks
b.statusCode(m),m=void 0,u&&d.trigger(l?"ajaxSuccess":"ajaxError",[b,f,l?c:v]),// Complete
g.fireWith(p,[b,S]),u&&(d.trigger("ajaxComplete",[b,f]),// Handle the global AJAX counter
--J.active||J.event.trigger("ajaxStop")))}// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),// Force options to be an object
t=t||{};var r,// URL without anti-cache param
i,// Response headers
o,a,// timeout handle
s,// Cross-domain detection vars
l,// To know if global events are to be dispatched
u,// Loop variable
c,// Create the final options object
f=J.ajaxSetup({},t),// Callbacks context
p=f.context||f,// Context for global events is callbackContext if it is a DOM node or jQuery collection
d=f.context&&(p.nodeType||p.jquery)?J(p):J.event,// Deferreds
h=J.Deferred(),g=J.Callbacks("once memory"),// Status-dependent callbacks
m=f.statusCode||{},// Headers (they are sent all at once)
v={},y={},// The jqXHR state
w=0,// Default abort message
x="canceled",// Fake xhr
b={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(2===w){if(!a)for(a={};t=mn.exec(o);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},// Raw string
getAllResponseHeaders:function(){return 2===w?o:null},// Caches the header
setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=y[n]=y[n]||e,v[e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return w||(f.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(2>w)for(t in e)// Lazy-add the new callback in a way that preserves old ones
m[t]=[m[t],e[t]];else// Execute the appropriate callbacks
b.always(e[b.status]);return this},// Cancel the request
abort:function(e){var t=e||x;return r&&r.abort(t),n(0,t),this}};// If request was aborted inside a prefilter, stop there
if(// Attach deferreds
h.promise(b).complete=g.add,b.success=b.done,b.error=b.fail,// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
f.url=((e||f.url||dn)+"").replace(hn,"").replace(wn,pn[1]+"//"),// Alias method option to type as per ticket #12004
f.type=t.method||t.type||f.method||f.type,// Extract dataTypes list
f.dataTypes=J.trim(f.dataType||"*").toLowerCase().match(dt)||[""],// A cross-domain request is in order when we have a protocol:host:port mismatch
null==f.crossDomain&&(l=xn.exec(f.url.toLowerCase()),f.crossDomain=!(!l||l[1]===pn[1]&&l[2]===pn[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(pn[3]||("http:"===pn[1]?"80":"443")))),// Convert data if not already a string
f.data&&f.processData&&"string"!=typeof f.data&&(f.data=J.param(f.data,f.traditional)),// Apply prefilters
O(bn,f,t,b),2===w)return b;// We can fire global events as of now if asked to
u=f.global,// Watch for a new set of requests
u&&0===J.active++&&J.event.trigger("ajaxStart"),// Uppercase the type
f.type=f.type.toUpperCase(),// Determine if request has content
f.hasContent=!yn.test(f.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
i=f.url,// More options handling for requests with no content
f.hasContent||(// If data is available, append data to url
f.data&&(i=f.url+=(fn.test(i)?"&":"?")+f.data,// #9682: remove data so that it's not used in an eventual retry
delete f.data),// Add anti-cache in url if needed
f.cache===!1&&(f.url=gn.test(i)?// If there is already a '_' parameter, set its value
i.replace(gn,"$1_="+cn++):// Otherwise add one to the end
i+(fn.test(i)?"&":"?")+"_="+cn++)),// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
f.ifModified&&(J.lastModified[i]&&b.setRequestHeader("If-Modified-Since",J.lastModified[i]),J.etag[i]&&b.setRequestHeader("If-None-Match",J.etag[i])),// Set the correct header, if data is being sent
(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&b.setRequestHeader("Content-Type",f.contentType),// Set the Accepts header for the server, depending on the dataType
b.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Tn+"; q=0.01":""):f.accepts["*"]);// Check for headers option
for(c in f.headers)b.setRequestHeader(c,f.headers[c]);// Allow custom headers/mimetypes and early abort
if(f.beforeSend&&(f.beforeSend.call(p,b,f)===!1||2===w))// Abort if not done already and return
return b.abort();// aborting is no longer a cancellation
x="abort";// Install callbacks on deferreds
for(c in{success:1,error:1,complete:1})b[c](f[c]);// If no transport, we auto-abort
if(// Get transport
r=O(Sn,f,t,b)){b.readyState=1,// Send global event
u&&d.trigger("ajaxSend",[b,f]),// Timeout
f.async&&f.timeout>0&&(s=setTimeout(function(){b.abort("timeout")},f.timeout));try{w=1,r.send(v,n)}catch(S){// Propagate exception as error if not done
if(!(2>w))throw S;n(-1,S)}}else n(-1,"No Transport");return b},getJSON:function(e,t,n){return J.get(e,t,n,"json")},getScript:function(e,t){return J.get(e,void 0,t,"script")}}),J.each(["get","post"],function(e,t){J[t]=function(e,n,r,i){// shift arguments if data argument was omitted
return J.isFunction(n)&&(i=i||r,r=n,n=void 0),J.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),// Attach a bunch of functions for handling common AJAX events
J.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){J.fn[t]=function(e){return this.on(t,e)}}),J._evalUrl=function(e){return J.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},J.fn.extend({wrapAll:function(e){var t;// The elements to wrap the target around
return J.isFunction(e)?this.each(function(t){J(this).wrapAll(e.call(this,t))}):(this[0]&&(t=J(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(J.isFunction(e)?function(t){J(this).wrapInner(e.call(this,t))}:function(){var t=J(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=J.isFunction(e);return this.each(function(n){J(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){J.nodeName(this,"body")||J(this).replaceWith(this.childNodes)}).end()}}),J.expr.filters.hidden=function(e){// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return e.offsetWidth<=0&&e.offsetHeight<=0},J.expr.filters.visible=function(e){return!J.expr.filters.hidden(e)};var kn=/%20/g,_n=/\[\]$/,En=/\r?\n/g,Mn=/^(?:submit|button|image|reset|file)$/i,An=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
J.param=function(e,t){var n,r=[],i=function(e,t){// If value is a function, invoke it and return its value
t=J.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};// If an array was passed in, assume that it is an array of form elements.
if(// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===t&&(t=J.ajaxSettings&&J.ajaxSettings.traditional),J.isArray(e)||e.jquery&&!J.isPlainObject(e))// Serialize the form elements
J.each(e,function(){i(this.name,this.value)});else// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)q(n,e[n],t,i);// Return the resulting serialization
return r.join("&").replace(kn,"+")},J.fn.extend({serialize:function(){return J.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=J.prop(this,"elements");return e?J.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!J(this).is(":disabled")&&An.test(this.nodeName)&&!Mn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=J(this).val();return null==n?null:J.isArray(n)?J.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),J.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Nn=0,Ln={},In={// file protocol always yields status code 0, assume 200
0:200,// Support: IE9
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},jn=J.ajaxSettings.xhr();// Support: IE9
// Open requests must be manually aborted on unload (#5280)
e.ActiveXObject&&J(e).on("unload",function(){for(var e in Ln)Ln[e]()}),Q.cors=!!jn&&"withCredentials"in jn,Q.ajax=jn=!!jn,J.ajaxTransport(function(e){var t;// Cross domain only allowed if supported through XMLHttpRequest
// Cross domain only allowed if supported through XMLHttpRequest
return Q.cors||jn&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),a=++Nn;// Apply custom fields if provided
if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];// Override mime type if needed
e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");// Set headers
for(i in n)o.setRequestHeader(i,n[i]);// Callback
t=function(e){return function(){t&&(delete Ln[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(// file: protocol always yields status 0; see #8605, #14207
o.status,o.statusText):r(In[o.status]||o.status,o.statusText,// Support: IE9
// Accessing binary-data responseText throws an exception
// (#11426)
"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},// Listen to events
o.onload=t(),o.onerror=t("error"),// Create the abort callback
t=Ln[a]=t("abort");try{// Do send the request (this may raise an exception)
o.send(e.hasContent&&e.data||null)}catch(s){// #14683: Only rethrow if this hasn't been notified as an error yet
if(t)throw s}},abort:function(){t&&t()}}:void 0}),// Install script dataType
J.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return J.globalEval(e),e}}}),// Handle cache's special case and crossDomain
J.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
J.ajaxTransport("script",function(e){// This transport only deals with cross domain requests
if(e.crossDomain){var t,n;return{send:function(r,i){t=J("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),K.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Pn=[],Dn=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
J.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Pn.pop()||J.expando+"_"+cn++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
J.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(Dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=J.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Dn,"$1"+i):t.jsonp!==!1&&(t.url+=(fn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||J.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){// Restore preexisting value
e[i]=o,// Save back as free
t[i]&&(// make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// save the callback name for future use
Pn.push(i)),// Call if it was a function and we have a response
a&&J.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
J.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||K;var r=at.exec(e),i=!n&&[];// Single tag
// Single tag
return r?[t.createElement(r[1])]:(r=J.buildFragment([e],t,i),i&&i.length&&J(i).remove(),J.merge([],r.childNodes))};// Keep a copy of the old load method
var On=J.fn.load;/**
 * Load a url into a page
 */
J.fn.load=function(e,t,n){if("string"!=typeof e&&On)return On.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return s>=0&&(r=J.trim(e.slice(s)),e=e.slice(0,s)),J.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&J.ajax({url:e,// if "type" variable is undefined, then "GET" method will be used
type:i,dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,a.html(r?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
J("<div>").append(J.parseHTML(e)).find(r):// Otherwise use the full result
e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},J.expr.filters.animated=function(e){return J.grep(J.timers,function(t){return e===t.elem}).length};var Fn=e.document.documentElement;J.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u,c=J.css(e,"position"),f=J(e),p={};// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),s=f.offset(),o=J.css(e,"top"),l=J.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1,// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
u?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),J.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},J.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){J.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;if(o)// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return t=o.documentElement,J.contains(t,r)?(typeof r.getBoundingClientRect!==kt&&(i=r.getBoundingClientRect()),n=H(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
// We assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===J.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),J.nodeName(e[0],"html")||(r=e.offset()),r.top+=J.css(e[0],"borderTopWidth",!0),r.left+=J.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-J.css(n,"marginTop",!0),left:t.left-r.left-J.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Fn;e&&!J.nodeName(e,"html")&&"static"===J.css(e,"position");)e=e.offsetParent;return e||Fn})}}),// Create scrollLeft and scrollTop methods
J.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;J.fn[t]=function(i){return mt(this,function(t,i,o){var a=H(t);return void 0===o?a?a[n]:t[i]:void(a?a.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
J.each(["top","left"],function(e,t){J.cssHooks[t]=S(Q.pixelPosition,function(e,n){return n?(n=b(e,t),$t.test(n)?J(e).position()[t]+"px":n):void 0})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
J.each({Height:"height",Width:"width"},function(e,t){J.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){// margin is only for outerHeight, outerWidth
J.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return mt(this,function(t,n,r){var i;// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return J.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?J.css(t,n,a):J.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),// The number of elements contained in the matched element set
J.fn.size=function(){return this.length},J.fn.andSelf=J.fn.addBack,// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return J});var// Map over jQuery in case of overwrite
Bn=e.jQuery,// Map over the $ in case of overwrite
Rn=e.$;// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return J.noConflict=function(t){return e.$===J&&(e.$=Rn),t&&e.jQuery===J&&(e.jQuery=Bn),J},typeof t===kt&&(e.jQuery=e.$=J),J}),/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{// t: current time, b: begInnIng value, c: change In value, d: duration
def:"easeOutQuad",swing:function(e,t,n,r,i){//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return 0==t?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){return 0==t?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(1==(t/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(r/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-o)*Math.PI/a))+n},easeOutElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(1==(t/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(r/s);return s*Math.pow(2,-10*t)*Math.sin(2*(t*i-o)*Math.PI/a)+r+n},easeInOutElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(2==(t/=i/2))return n+r;if(a||(a=.3*i*1.5),s<Math.abs(r)){s=r;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(r/s);return 1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-o)*Math.PI/a)+n:s*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*i-o)*Math.PI/a)*.5+r+n},easeInBack:function(e,t,n,r,i,o){return void 0==o&&(o=1.70158),r*(t/=i)*t*((o+1)*t-o)+n},easeOutBack:function(e,t,n,r,i,o){return void 0==o&&(o=1.70158),r*((t=t/i-1)*t*((o+1)*t+o)+1)+n},easeInOutBack:function(e,t,n,r,i,o){return void 0==o&&(o=1.70158),(t/=i/2)<1?r/2*t*t*(((o*=1.525)+1)*t-o)+n:r/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?7.5625*r*t*t+n:2/2.75>t?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return i/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,r,i)+n:.5*jQuery.easing.easeOutBounce(e,2*t-i,0,r,i)+.5*r+n}}),/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
function(){// Baseline setup
// --------------
// Establish the root object, `window` in the browser, or `exports` on the server.
var e=this,t=e._,n=Array.prototype,r=Object.prototype,i=Function.prototype,o=n.push,a=n.slice,s=n.concat,l=r.toString,u=r.hasOwnProperty,c=Array.isArray,f=Object.keys,p=i.bind,d=function(e){return e instanceof d?e:this instanceof d?void(this._wrapped=e):new d(e)};// Export the Underscore object for **Node.js**, with
// backwards-compatibility for the old `require()` API. If we're in
// the browser, add `_` as a global object.
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=d),exports._=d):e._=d,// Current version.
d.VERSION="1.7.0";// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var h=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,o){return e.call(t,n,r,i,o)}}return function(){return e.apply(t,arguments)}};// A mostly-internal function to generate callbacks that can be applied
// to each element in a collection, returning the desired result — either
// identity, an arbitrary callback, a property matcher, or a property accessor.
d.iteratee=function(e,t,n){return null==e?d.identity:d.isFunction(e)?h(e,t,n):d.isObject(e)?d.matches(e):d.property(e)},// Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
d.each=d.forEach=function(e,t,n){if(null==e)return e;t=h(t,n);var r,i=e.length;if(i===+i)for(r=0;i>r;r++)t(e[r],r,e);else{var o=d.keys(e);for(r=0,i=o.length;i>r;r++)t(e[o[r]],o[r],e)}return e},// Return the results of applying the iteratee to each element.
d.map=d.collect=function(e,t,n){if(null==e)return[];t=d.iteratee(t,n);for(var r,i=e.length!==+e.length&&d.keys(e),o=(i||e).length,a=Array(o),s=0;o>s;s++)r=i?i[s]:s,a[s]=t(e[r],r,e);return a};var g="Reduce of empty array with no initial value";// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
d.reduce=d.foldl=d.inject=function(e,t,n,r){null==e&&(e=[]),t=h(t,r,4);var i,o=e.length!==+e.length&&d.keys(e),a=(o||e).length,s=0;if(arguments.length<3){if(!a)throw new TypeError(g);n=e[o?o[s++]:s++]}for(;a>s;s++)i=o?o[s]:s,n=t(n,e[i],i,e);return n},// The right-associative version of reduce, also known as `foldr`.
d.reduceRight=d.foldr=function(e,t,n,r){null==e&&(e=[]),t=h(t,r,4);var i,o=e.length!==+e.length&&d.keys(e),a=(o||e).length;if(arguments.length<3){if(!a)throw new TypeError(g);n=e[o?o[--a]:--a]}for(;a--;)i=o?o[a]:a,n=t(n,e[i],i,e);return n},// Return the first value which passes a truth test. Aliased as `detect`.
d.find=d.detect=function(e,t,n){var r;return t=d.iteratee(t,n),d.some(e,function(e,n,i){return t(e,n,i)?(r=e,!0):void 0}),r},// Return all the elements that pass a truth test.
// Aliased as `select`.
d.filter=d.select=function(e,t,n){var r=[];return null==e?r:(t=d.iteratee(t,n),d.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r)},// Return all the elements for which a truth test fails.
d.reject=function(e,t,n){return d.filter(e,d.negate(d.iteratee(t)),n)},// Determine whether all of the elements match a truth test.
// Aliased as `all`.
d.every=d.all=function(e,t,n){if(null==e)return!0;t=d.iteratee(t,n);var r,i,o=e.length!==+e.length&&d.keys(e),a=(o||e).length;for(r=0;a>r;r++)if(i=o?o[r]:r,!t(e[i],i,e))return!1;return!0},// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
d.some=d.any=function(e,t,n){if(null==e)return!1;t=d.iteratee(t,n);var r,i,o=e.length!==+e.length&&d.keys(e),a=(o||e).length;for(r=0;a>r;r++)if(i=o?o[r]:r,t(e[i],i,e))return!0;return!1},// Determine if the array or object contains a given value (using `===`).
// Aliased as `include`.
d.contains=d.include=function(e,t){return null==e?!1:(e.length!==+e.length&&(e=d.values(e)),d.indexOf(e,t)>=0)},// Invoke a method (with arguments) on every item in a collection.
d.invoke=function(e,t){var n=a.call(arguments,2),r=d.isFunction(t);return d.map(e,function(e){return(r?t:e[t]).apply(e,n)})},// Convenience version of a common use case of `map`: fetching a property.
d.pluck=function(e,t){return d.map(e,d.property(t))},// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
d.where=function(e,t){return d.filter(e,d.matches(t))},// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
d.findWhere=function(e,t){return d.find(e,d.matches(t))},// Return the maximum element (or element-based computation).
d.max=function(e,t,n){var r,i,o=-1/0,a=-1/0;if(null==t&&null!=e){e=e.length===+e.length?e:d.values(e);for(var s=0,l=e.length;l>s;s++)r=e[s],r>o&&(o=r)}else t=d.iteratee(t,n),d.each(e,function(e,n,r){i=t(e,n,r),(i>a||i===-1/0&&o===-1/0)&&(o=e,a=i)});return o},// Return the minimum element (or element-based computation).
d.min=function(e,t,n){var r,i,o=1/0,a=1/0;if(null==t&&null!=e){e=e.length===+e.length?e:d.values(e);for(var s=0,l=e.length;l>s;s++)r=e[s],o>r&&(o=r)}else t=d.iteratee(t,n),d.each(e,function(e,n,r){i=t(e,n,r),(a>i||1/0===i&&1/0===o)&&(o=e,a=i)});return o},// Shuffle a collection, using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
d.shuffle=function(e){for(var t,n=e&&e.length===+e.length?e:d.values(e),r=n.length,i=Array(r),o=0;r>o;o++)t=d.random(0,o),t!==o&&(i[o]=i[t]),i[t]=n[o];return i},// Sample **n** random values from a collection.
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
d.sample=function(e,t,n){return null==t||n?(e.length!==+e.length&&(e=d.values(e)),e[d.random(e.length-1)]):d.shuffle(e).slice(0,Math.max(0,t))},// Sort the object's values by a criterion produced by an iteratee.
d.sortBy=function(e,t,n){return t=d.iteratee(t,n),d.pluck(d.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};// An internal function used for aggregate "group by" operations.
var m=function(e){return function(t,n,r){var i={};return n=d.iteratee(n,r),d.each(t,function(r,o){var a=n(r,o,t);e(i,r,a)}),i}};// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
d.groupBy=m(function(e,t,n){d.has(e,n)?e[n].push(t):e[n]=[t]}),// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
d.indexBy=m(function(e,t,n){e[n]=t}),// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
d.countBy=m(function(e,t,n){d.has(e,n)?e[n]++:e[n]=1}),// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
d.sortedIndex=function(e,t,n,r){n=d.iteratee(n,r,1);for(var i=n(t),o=0,a=e.length;a>o;){var s=o+a>>>1;n(e[s])<i?o=s+1:a=s}return o},// Safely create a real, live array from anything iterable.
d.toArray=function(e){return e?d.isArray(e)?a.call(e):e.length===+e.length?d.map(e,d.identity):d.values(e):[]},// Return the number of elements in an object.
d.size=function(e){return null==e?0:e.length===+e.length?e.length:d.keys(e).length},// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
d.partition=function(e,t,n){t=d.iteratee(t,n);var r=[],i=[];return d.each(e,function(e,n,o){(t(e,n,o)?r:i).push(e)}),[r,i]},// Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
d.first=d.head=d.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:0>t?[]:a.call(e,0,t)},// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N. The **guard** check allows it to work with
// `_.map`.
d.initial=function(e,t,n){return a.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},// Get the last element of an array. Passing **n** will return the last N
// values in the array. The **guard** check allows it to work with `_.map`.
d.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:a.call(e,Math.max(e.length-t,0))},// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array. The **guard**
// check allows it to work with `_.map`.
d.rest=d.tail=d.drop=function(e,t,n){return a.call(e,null==t||n?1:t)},// Trim out all falsy values from an array.
d.compact=function(e){return d.filter(e,d.identity)};// Internal implementation of a recursive `flatten` function.
var v=function(e,t,n,r){if(t&&d.every(e,d.isArray))return s.apply(r,e);for(var i=0,a=e.length;a>i;i++){var l=e[i];d.isArray(l)||d.isArguments(l)?t?o.apply(r,l):v(l,t,n,r):n||r.push(l)}return r};// Flatten out an array, either recursively (by default), or just one level.
d.flatten=function(e,t){return v(e,t,!1,[])},// Return a version of the array that does not contain the specified value(s).
d.without=function(e){return d.difference(e,a.call(arguments,1))},// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.
d.uniq=d.unique=function(e,t,n,r){if(null==e)return[];d.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=d.iteratee(n,r));for(var i=[],o=[],a=0,s=e.length;s>a;a++){var l=e[a];if(t)a&&o===l||i.push(l),o=l;else if(n){var u=n(l,a,e);d.indexOf(o,u)<0&&(o.push(u),i.push(l))}else d.indexOf(i,l)<0&&i.push(l)}return i},// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
d.union=function(){return d.uniq(v(arguments,!0,!0,[]))},// Produce an array that contains every item shared between all the
// passed-in arrays.
d.intersection=function(e){if(null==e)return[];for(var t=[],n=arguments.length,r=0,i=e.length;i>r;r++){var o=e[r];if(!d.contains(t,o)){for(var a=1;n>a&&d.contains(arguments[a],o);a++);a===n&&t.push(o)}}return t},// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
d.difference=function(e){var t=v(a.call(arguments,1),!0,!0,[]);return d.filter(e,function(e){return!d.contains(t,e)})},// Zip together multiple lists into a single array -- elements that share
// an index go together.
d.zip=function(e){if(null==e)return[];for(var t=d.max(arguments,"length").length,n=Array(t),r=0;t>r;r++)n[r]=d.pluck(arguments,r);return n},// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values.
d.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
d.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=d.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}for(;i>r;r++)if(e[r]===t)return r;return-1},d.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=e.length;for("number"==typeof n&&(r=0>n?r+n+1:Math.min(r,n+1));--r>=0;)if(e[r]===t)return r;return-1},// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
d.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),o=0;r>o;o++,e+=n)i[o]=e;return i};// Function (ahem) Functions
// ------------------
// Reusable constructor function for prototype setting.
var y=function(){};// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
d.bind=function(e,t){var n,r;if(p&&e.bind===p)return p.apply(e,a.call(arguments,1));if(!d.isFunction(e))throw new TypeError("Bind must be called on a function");return n=a.call(arguments,2),r=function(){if(!(this instanceof r))return e.apply(t,n.concat(a.call(arguments)));y.prototype=e.prototype;var i=new y;y.prototype=null;var o=e.apply(i,n.concat(a.call(arguments)));return d.isObject(o)?o:i}},// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder, allowing any combination of arguments to be pre-filled.
d.partial=function(e){var t=a.call(arguments,1);return function(){for(var n=0,r=t.slice(),i=0,o=r.length;o>i;i++)r[i]===d&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return e.apply(this,r)}},// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
d.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=d.bind(e[n],e);return e},// Memoize an expensive function by storing its results.
d.memoize=function(e,t){var n=function(r){var i=n.cache,o=t?t.apply(this,arguments):r;return d.has(i,o)||(i[o]=e.apply(this,arguments)),i[o]};return n.cache={},n},// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
d.delay=function(e,t){var n=a.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},// Defers a function, scheduling it to run after the current call stack has
// cleared.
d.defer=function(e){return d.delay.apply(d,[e,1].concat(a.call(arguments,1)))},// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
d.throttle=function(e,t,n){var r,i,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:d.now(),a=null,o=e.apply(r,i),a||(r=i=null)};return function(){var u=d.now();s||n.leading!==!1||(s=u);var c=t-(u-s);return r=this,i=arguments,0>=c||c>t?(clearTimeout(a),a=null,s=u,o=e.apply(r,i),a||(r=i=null)):a||n.trailing===!1||(a=setTimeout(l,c)),o}},// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
d.debounce=function(e,t,n){var r,i,o,a,s,l=function(){var u=d.now()-a;t>u&&u>0?r=setTimeout(l,t-u):(r=null,n||(s=e.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=d.now();var u=n&&!r;return r||(r=setTimeout(l,t)),u&&(s=e.apply(o,i),o=i=null),s}},// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
d.wrap=function(e,t){return d.partial(t,e)},// Returns a negated version of the passed-in predicate.
d.negate=function(e){return function(){return!e.apply(this,arguments)}},// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
d.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},// Returns a function that will only be executed after being called N times.
d.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},// Returns a function that will only be executed before being called N times.
d.before=function(e,t){var n;return function(){return--e>0?n=t.apply(this,arguments):t=null,n}},// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
d.once=d.partial(d.before,2),// Object Functions
// ----------------
// Retrieve the names of an object's properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
d.keys=function(e){if(!d.isObject(e))return[];if(f)return f(e);var t=[];for(var n in e)d.has(e,n)&&t.push(n);return t},// Retrieve the values of an object's properties.
d.values=function(e){for(var t=d.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},// Convert an object into a list of `[key, value]` pairs.
d.pairs=function(e){for(var t=d.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},// Invert the keys and values of an object. The values must be serializable.
d.invert=function(e){for(var t={},n=d.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},// Return a sorted list of the function names available on the object.
// Aliased as `methods`
d.functions=d.methods=function(e){var t=[];for(var n in e)d.isFunction(e[n])&&t.push(n);return t.sort()},// Extend a given object with all the properties in passed-in object(s).
d.extend=function(e){if(!d.isObject(e))return e;for(var t,n,r=1,i=arguments.length;i>r;r++){t=arguments[r];for(n in t)u.call(t,n)&&(e[n]=t[n])}return e},// Return a copy of the object only containing the whitelisted properties.
d.pick=function(e,t,n){var r,i={};if(null==e)return i;if(d.isFunction(t)){t=h(t,n);for(r in e){var o=e[r];t(o,r,e)&&(i[r]=o)}}else{var l=s.apply([],a.call(arguments,1));e=new Object(e);for(var u=0,c=l.length;c>u;u++)r=l[u],r in e&&(i[r]=e[r])}return i},// Return a copy of the object without the blacklisted properties.
d.omit=function(e,t,n){if(d.isFunction(t))t=d.negate(t);else{var r=d.map(s.apply([],a.call(arguments,1)),String);t=function(e,t){return!d.contains(r,t)}}return d.pick(e,t,n)},// Fill in a given object with default properties.
d.defaults=function(e){if(!d.isObject(e))return e;for(var t=1,n=arguments.length;n>t;t++){var r=arguments[t];for(var i in r)void 0===e[i]&&(e[i]=r[i])}return e},// Create a (shallow-cloned) duplicate of an object.
d.clone=function(e){return d.isObject(e)?d.isArray(e)?e.slice():d.extend({},e):e},// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
d.tap=function(e,t){return t(e),e};// Internal recursive comparison function for `isEqual`.
var w=function(e,t,n,r){// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(e===t)return 0!==e||1/e===1/t;// A strict comparison is necessary because `null == undefined`.
if(null==e||null==t)return e===t;// Unwrap any wrapped objects.
e instanceof d&&(e=e._wrapped),t instanceof d&&(t=t._wrapped);// Compare `[[Class]]` names.
var i=l.call(e);if(i!==l.call(t))return!1;switch(i){// Strings, numbers, regular expressions, dates, and booleans are compared by value.
case"[object RegExp]":// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
case"[object String]":// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
// equivalent to `new String("5")`.
return""+e==""+t;case"[object Number]":// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN
// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN
return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":// Coerce dates and booleans to numeric primitive values. Dates are compared by their
// millisecond representations. Note that invalid dates with millisecond representations
// of `NaN` are not equivalent.
return+e===+t}if("object"!=typeof e||"object"!=typeof t)return!1;for(// Assume equality for cyclic structures. The algorithm for detecting cyclic
// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
var o=n.length;o--;)// Linear search. Performance is inversely proportional to the number of
// unique nested structures.
if(n[o]===e)return r[o]===t;// Objects with different constructors are not equivalent, but `Object`s
// from different frames are.
var a=e.constructor,s=t.constructor;if(a!==s&&// Handle Object.create(x) cases
"constructor"in e&&"constructor"in t&&!(d.isFunction(a)&&a instanceof a&&d.isFunction(s)&&s instanceof s))return!1;// Add the first object to the stack of traversed objects.
n.push(e),r.push(t);var u,c;// Recursively compare objects and arrays.
if("[object Array]"===i){if(// Compare array lengths to determine if a deep comparison is necessary.
u=e.length,c=u===t.length)// Deep compare the contents, ignoring non-numeric properties.
for(;u--&&(c=w(e[u],t[u],n,r)););}else{// Deep compare objects.
var f,p=d.keys(e);if(u=p.length,// Ensure that both objects contain the same number of properties before comparing deep equality.
c=d.keys(t).length===u)for(;u--&&(// Deep compare each member
f=p[u],c=d.has(t,f)&&w(e[f],t[f],n,r)););}// Remove the first object from the stack of traversed objects.
return n.pop(),r.pop(),c};// Perform a deep comparison to check if two objects are equal.
d.isEqual=function(e,t){return w(e,t,[],[])},// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
d.isEmpty=function(e){if(null==e)return!0;if(d.isArray(e)||d.isString(e)||d.isArguments(e))return 0===e.length;for(var t in e)if(d.has(e,t))return!1;return!0},// Is a given value a DOM element?
d.isElement=function(e){return!(!e||1!==e.nodeType)},// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
d.isArray=c||function(e){return"[object Array]"===l.call(e)},// Is a given variable an object?
d.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
d.each(["Arguments","Function","String","Number","Date","RegExp"],function(e){d["is"+e]=function(t){return l.call(t)==="[object "+e+"]"}}),// Define a fallback version of the method in browsers (ahem, IE), where
// there isn't any inspectable "Arguments" type.
d.isArguments(arguments)||(d.isArguments=function(e){return d.has(e,"callee")}),// Optimize `isFunction` if appropriate. Work around an IE 11 bug.
"function"!=typeof/./&&(d.isFunction=function(e){return"function"==typeof e||!1}),// Is a given object a finite number?
d.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},// Is the given value `NaN`? (NaN is the only number which does not equal itself).
d.isNaN=function(e){return d.isNumber(e)&&e!==+e},// Is a given value a boolean?
d.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===l.call(e)},// Is a given value equal to null?
d.isNull=function(e){return null===e},// Is a given variable undefined?
d.isUndefined=function(e){return void 0===e},// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
d.has=function(e,t){return null!=e&&u.call(e,t)},// Utility Functions
// -----------------
// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
d.noConflict=function(){return e._=t,this},// Keep the identity function around for default iteratees.
d.identity=function(e){return e},d.constant=function(e){return function(){return e}},d.noop=function(){},d.property=function(e){return function(t){return t[e]}},// Returns a predicate for checking whether an object has a given set of `key:value` pairs.
d.matches=function(e){var t=d.pairs(e),n=t.length;return function(e){if(null==e)return!n;e=new Object(e);for(var r=0;n>r;r++){var i=t[r],o=i[0];if(i[1]!==e[o]||!(o in e))return!1}return!0}},// Run a function **n** times.
d.times=function(e,t,n){var r=Array(Math.max(0,e));t=h(t,n,1);for(var i=0;e>i;i++)r[i]=t(i);return r},// Return a random integer between min and max (inclusive).
d.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},// A (possibly faster) way to get the current timestamp as an integer.
d.now=Date.now||function(){return(new Date).getTime()};// List of HTML entities for escaping.
var x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},b=d.invert(x),S=function(e){var t=function(t){return e[t]},n="(?:"+d.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}};d.escape=S(x),d.unescape=S(b),// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
d.result=function(e,t){if(null==e)return void 0;var n=e[t];return d.isFunction(n)?e[t]():n};// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var T=0;d.uniqueId=function(e){var t=++T+"";return e?e+t:t},// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
d.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var C=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},_=/\\|'|\r|\n|\u2028|\u2029/g,E=function(e){return"\\"+k[e]};// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
d.template=function(e,t,n){!t&&n&&(t=n),t=d.defaults({},t,d.templateSettings);// Combine delimiters into one regular expression via alternation.
var r=RegExp([(t.escape||C).source,(t.interpolate||C).source,(t.evaluate||C).source].join("|")+"|$","g"),i=0,o="__p+='";e.replace(r,function(t,n,r,a,s){// Adobe VMs need the match returned to produce the correct offest.
return o+=e.slice(i,s).replace(_,E),i=s+t.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",// If a variable is not specified, place data values in local scope.
t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(t.variable||"obj","_",o)}catch(s){throw s.source=o,s}var l=function(e){return a.call(this,e,d)},u=t.variable||"obj";return l.source="function("+u+"){\n"+o+"}",l},// Add a "chain" function. Start chaining a wrapped Underscore object.
d.chain=function(e){var t=d(e);return t._chain=!0,t};// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.
var M=function(e){return this._chain?d(e).chain():e};// Add your own custom functions to the Underscore object.
d.mixin=function(e){d.each(d.functions(e),function(t){var n=d[t]=e[t];d.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),M.call(this,n.apply(d,e))}})},// Add all of the Underscore functions to the wrapper object.
d.mixin(d),// Add all mutator Array functions to the wrapper.
d.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=n[e];d.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],M.call(this,n)}}),// Add all accessor Array functions to the wrapper.
d.each(["concat","join","slice"],function(e){var t=n[e];d.prototype[e]=function(){return M.call(this,t.apply(this._wrapped,arguments))}}),// Extracts the result from a wrapped and chained object.
d.prototype.value=function(){return this._wrapped},// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
"function"==typeof define&&define.amd&&define("underscore",[],function(){return d})}.call(this),/*!
 * @overview RSVP - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/tildeio/rsvp.js/master/LICENSE
 * @version   3.0.13
 */
function(){"use strict";function e(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}function t(e){var t=e._promiseCallbacks;return t||(t=e._promiseCallbacks={}),t}function n(e,t){// handle for legacy users that expect the actual
// error to be passed to their function added via
// `RSVP.configure('onerror', someFunctionHere);`
return"onerror"===e?void U.on("error",t):2!==arguments.length?U[e]:void(U[e]=t)}function r(e){return"function"==typeof e||"object"==typeof e&&null!==e}function i(e){return"function"==typeof e}function o(e){return"object"==typeof e&&null!==e}function a(){}function s(){}function l(e){try{return e.then}catch(t){return ot.error=t,ot}}function u(e,t,n,r){try{e.call(t,n,r)}catch(i){return i}}function c(e,t,n){U.async(function(e){var r=!1,i=u(n,t,function(n){r||(r=!0,t!==n?d(e,n):g(e,n))},function(t){r||(r=!0,m(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&i&&(r=!0,m(e,i))},e)}function f(e,t){t._state===rt?g(e,t._result):e._state===it?m(e,t._result):v(t,void 0,function(n){t!==n?d(e,n):g(e,n)},function(t){m(e,t)})}function p(e,t){if(t.constructor===e.constructor)f(e,t);else{var n=l(t);n===ot?m(e,ot.error):void 0===n?g(e,t):i(n)?c(e,t,n):g(e,t)}}function d(e,t){e===t?g(e,t):r(t)?p(e,t):g(e,t)}function h(e){e._onerror&&e._onerror(e._result),y(e)}function g(e,t){e._state===nt&&(e._result=t,e._state=rt,0===e._subscribers.length?U.instrument&&tt("fulfilled",e):U.async(y,e))}function m(e,t){e._state===nt&&(e._state=it,e._result=t,U.async(h,e))}function v(e,t,n,r){var i=e._subscribers,o=i.length;e._onerror=null,i[o]=t,i[o+rt]=n,i[o+it]=r,0===o&&e._state&&U.async(y,e)}function y(e){var t=e._subscribers,n=e._state;if(U.instrument&&tt(n===rt?"fulfilled":"rejected",e),0!==t.length){for(var r,i,o=e._result,a=0;a<t.length;a+=3)r=t[a],i=t[a+n],r?b(n,r,i,o):i(o);e._subscribers.length=0}}function w(){this.error=null}function x(e,t){try{return e(t)}catch(n){return at.error=n,at}}function b(e,t,n,r){var o,a,s,l,u=i(n);if(u){if(o=x(n,r),o===at?(l=!0,a=o.error,o=null):s=!0,t===o)return void m(t,new TypeError("A promises callback cannot return that same promise."))}else o=r,s=!0;t._state!==nt||(u&&s?d(t,o):l?m(t,a):e===rt?g(t,o):e===it&&m(t,o))}function S(e,t){try{t(function(t){d(e,t)},function(t){m(e,t)})}catch(n){m(e,n)}}function T(e,t,n){return e===rt?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}function C(e,t,n,r){this._instanceConstructor=e,this.promise=new e(s,r),this._abortOnReject=n,this._validateInput(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._init(),0===this.length?g(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&g(this.promise,this._result))):m(this.promise,this._validationError())}function k(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function _(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}/**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class RSVP.Promise
      @param {function} resolver
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @constructor
    */
function E(e,t){this._id=dt++,this._label=t,this._state=void 0,this._result=void 0,this._subscribers=[],U.instrument&&tt("created",this),s!==e&&(i(e)||k(),this instanceof E||_(),S(this,e))}function M(){this.value=void 0}function A(e){try{return e.then}catch(t){return gt.value=t,gt}}function N(e,t,n){try{e.apply(t,n)}catch(r){return gt.value=r,gt}}function L(e,t){for(var n,r,i={},o=e.length,a=new Array(o),s=0;o>s;s++)a[s]=e[s];for(r=0;r<t.length;r++)n=t[r],i[n]=a[r+1];return i}function I(e){for(var t=e.length,n=new Array(t-1),r=1;t>r;r++)n[r-1]=e[r];return n}function j(e,t){return{then:function(n,r){return e.call(t,n,r)}}}function P(e,t,n,r){var i=N(n,r,t);return i===gt&&m(e,i.value),e}function D(e,t,n,r){return ht.all(t).then(function(t){var i=N(n,r,t);return i===gt&&m(e,i.value),e})}function O(e){return e&&"object"==typeof e?e.constructor===ht?!0:A(e):!1}function F(e,t,n){this._superConstructor(e,t,!1,n)}function B(e,t,n){this._superConstructor(e,t,!0,n)}function R(e,t,n){this._superConstructor(e,t,!1,n)}// node
function q(){return function(){process.nextTick(z)}}function H(){var e=0,t=new Pt(z),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}// web worker
function $(){var e=new MessageChannel;return e.port1.onmessage=z,function(){e.port2.postMessage(0)}}function W(){return function(){setTimeout(z,1)}}function z(){for(var e=0;Lt>e;e+=2){var t=Ot[e],n=Ot[e+1];t(n),Ot[e]=void 0,Ot[e+1]=void 0}Lt=0}function V(e,t){U.async(e,t)}function G(){U.on.apply(U,arguments)}function X(){U.off.apply(U,arguments)}var Y={/**
        `RSVP.EventTarget.mixin` extends an object with EventTarget methods. For
        Example:

        ```javascript
        var object = {};

        RSVP.EventTarget.mixin(object);

        object.on('finished', function(event) {
          // handle event
        });

        object.trigger('finished', { detail: value });
        ```

        `EventTarget.mixin` also works with prototypes:

        ```javascript
        var Person = function() {};
        RSVP.EventTarget.mixin(Person.prototype);

        var yehuda = new Person();
        var tom = new Person();

        yehuda.on('poke', function(event) {
          console.log('Yehuda says OW');
        });

        tom.on('poke', function(event) {
          console.log('Tom says OW');
        });

        yehuda.trigger('poke');
        tom.trigger('poke');
        ```

        @method mixin
        @for RSVP.EventTarget
        @private
        @param {Object} object object to extend with EventTarget methods
      */
mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},/**
        Registers a callback to be executed when `eventName` is triggered

        ```javascript
        object.on('event', function(eventInfo){
          // handle the event
        });

        object.trigger('event');
        ```

        @method on
        @for RSVP.EventTarget
        @private
        @param {String} eventName name of the event to listen for
        @param {Function} callback function to be called when the event is triggered.
      */
on:function(n,r){var i,o=t(this);i=o[n],i||(i=o[n]=[]),-1===e(i,r)&&i.push(r)},/**
        You can use `off` to stop firing a particular callback for an event:

        ```javascript
        function doStuff() { // do stuff! }
        object.on('stuff', doStuff);

        object.trigger('stuff'); // doStuff will be called

        // Unregister ONLY the doStuff callback
        object.off('stuff', doStuff);
        object.trigger('stuff'); // doStuff will NOT be called
        ```

        If you don't pass a `callback` argument to `off`, ALL callbacks for the
        event will not be executed when the event fires. For example:

        ```javascript
        var callback1 = function(){};
        var callback2 = function(){};

        object.on('stuff', callback1);
        object.on('stuff', callback2);

        object.trigger('stuff'); // callback1 and callback2 will be executed.

        object.off('stuff');
        object.trigger('stuff'); // callback1 and callback2 will not be executed!
        ```

        @method off
        @for RSVP.EventTarget
        @private
        @param {String} eventName event to stop listening to
        @param {Function} callback optional argument. If given, only the function
        given will be removed from the event's callback queue. If no `callback`
        argument is given, all callbacks will be removed from the event's callback
        queue.
      */
off:function(n,r){var i,o,a=t(this);return r?(i=a[n],o=e(i,r),void(-1!==o&&i.splice(o,1))):void(a[n]=[])},/**
        Use `trigger` to fire custom events. For example:

        ```javascript
        object.on('foo', function(){
          console.log('foo event happened!');
        });
        object.trigger('foo');
        // 'foo event happened!' logged to the console
        ```

        You can also pass a value as a second argument to `trigger` that will be
        passed as an argument to all event listeners for the event:

        ```javascript
        object.on('foo', function(value){
          console.log(value.name);
        });

        object.trigger('foo', { name: 'bar' });
        // 'bar' logged to the console
        ```

        @method trigger
        @for RSVP.EventTarget
        @private
        @param {String} eventName name of the event to be triggered
        @param {Any} options optional value to be passed to any event handlers for
        the given `eventName`
      */
trigger:function(e,n){var r,i,o=t(this);if(r=o[e])// Don't cache the callbacks.length since it may grow
for(var a=0;a<r.length;a++)(i=r[a])(n)}},U={instrument:!1};Y.mixin(U);var Q;Q=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var K=Q,Z=Date.now||function(){return(new Date).getTime()},J=Object.create||function(e){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof e)throw new TypeError("Argument must be an object");return a.prototype=e,new a},et=[],tt=function(e,t,n){1===et.push({name:e,payload:{guid:t._guidKey+t._id,eventName:e,detail:t._result,childGuid:n&&t._guidKey+n._id,label:t._label,timeStamp:Z(),stack:new Error(t._label).stack}})&&setTimeout(function(){for(var e,t=0;t<et.length;t++)e=et[t],U.trigger(e.name,e.payload);et.length=0},50)},nt=void 0,rt=1,it=2,ot=new w,at=new w;C.prototype._validateInput=function(e){return K(e)},C.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},C.prototype._init=function(){this._result=new Array(this.length)};var st=C;C.prototype._enumerate=function(){for(var e=this.length,t=this.promise,n=this._input,r=0;t._state===nt&&e>r;r++)this._eachEntry(n[r],r)},C.prototype._eachEntry=function(e,t){var n=this._instanceConstructor;o(e)?e.constructor===n&&e._state!==nt?(e._onerror=null,this._settledAt(e._state,t,e._result)):this._willSettleAt(n.resolve(e),t):(this._remaining--,this._result[t]=this._makeResult(rt,t,e))},C.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===nt&&(this._remaining--,this._abortOnReject&&e===it?m(r,n):this._result[t]=this._makeResult(e,t,n)),0===this._remaining&&g(r,this._result)},C.prototype._makeResult=function(e,t,n){return n},C.prototype._willSettleAt=function(e,t){var n=this;v(e,void 0,function(e){n._settledAt(rt,t,e)},function(e){n._settledAt(it,t,e)})};var lt=function(e,t){return new st(this,e,!0,t).promise},ut=function(e,t){function n(e){d(o,e)}function r(e){m(o,e)}/*jshint validthis:true */
var i=this,o=new i(s,t);if(!K(e))return m(o,new TypeError("You must pass an array to race.")),o;for(var a=e.length,l=0;o._state===nt&&a>l;l++)v(i.resolve(e[l]),void 0,n,r);return o},ct=function(e,t){/*jshint validthis:true */
var n=this;if(e&&"object"==typeof e&&e.constructor===n)return e;var r=new n(s,t);return d(r,e),r},ft=function(e,t){/*jshint validthis:true */
var n=this,r=new n(s,t);return m(r,e),r},pt="rsvp_"+Z()+"-",dt=0,ht=E;// deprecated
E.cast=ct,E.all=lt,E.race=ut,E.resolve=ct,E.reject=ft,E.prototype={constructor:E,_guidKey:pt,_onerror:function(e){U.trigger("error",e)},/**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
then:function(e,t,n){var r=this,i=r._state;if(i===rt&&!e||i===it&&!t)return U.instrument&&tt("chained",this,this),this;r._onerror=null;var o=new this.constructor(s,n),a=r._result;if(U.instrument&&tt("chained",r,o),i){var l=arguments[i-1];U.async(function(){b(i,o,l,a)})}else v(r,o,e,t);return o},/**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
"catch":function(e,t){return this.then(null,e,t)},/**
      `finally` will be invoked regardless of the promise's fate just as native
      try/catch/finally behaves

      Synchronous example:

      ```js
      findAuthor() {
        if (Math.random() > 0.5) {
          throw new Error();
        }
        return new Author();
      }

      try {
        return findAuthor(); // succeed or fail
      } catch(error) {
        return findOtherAuther();
      } finally {
        // always runs
        // doesn't affect the return value
      }
      ```

      Asynchronous example:

      ```js
      findAuthor().catch(function(reason){
        return findOtherAuther();
      }).finally(function(){
        // author was either found, or not
      });
      ```

      @method finally
      @param {Function} callback
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
"finally":function(e,t){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})},t)}};var gt=new M,mt=new M,vt=function(e,t){var n=function(){for(var n,r=this,i=arguments.length,o=new Array(i+1),a=!1,l=0;i>l;++l){if(n=arguments[l],!a){if(// TODO: clean this up
a=O(n),a===mt){var u=new ht(s);return m(u,mt.value),u}a&&a!==!0&&(n=j(a,n))}o[l]=n}var c=new ht(s);return o[i]=function(e,n){e?m(c,e):void 0===t?d(c,n):t===!0?d(c,I(arguments)):K(t)?d(c,L(arguments,t)):d(c,n)},a?D(c,o,e,r):P(c,o,e,r)};return n.__proto__=e,n},yt=function(e,t){return ht.all(e,t)};F.prototype=J(st.prototype),F.prototype._superConstructor=st,F.prototype._makeResult=T,F.prototype._validationError=function(){return new Error("allSettled must be called with an array")};var wt=function(e,t){return new F(ht,e,t).promise},xt=function(e,t){return ht.race(e,t)},bt=B;B.prototype=J(st.prototype),B.prototype._superConstructor=st,B.prototype._init=function(){this._result={}},B.prototype._validateInput=function(e){return e&&"object"==typeof e},B.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},B.prototype._enumerate=function(){var e=this.promise,t=this._input,n=[];for(var r in t)e._state===nt&&t.hasOwnProperty(r)&&n.push({position:r,entry:t[r]});var i=n.length;this._remaining=i;for(var o,a=0;e._state===nt&&i>a;a++)o=n[a],this._eachEntry(o.entry,o.position)};var St=function(e,t){return new bt(ht,e,t).promise};R.prototype=J(bt.prototype),R.prototype._superConstructor=st,R.prototype._makeResult=T,R.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};var Tt,Ct=function(e,t){return new R(ht,e,t).promise},kt=function(e){throw setTimeout(function(){throw e}),e},_t=function(e){var t={};return t.promise=new ht(function(e,n){t.resolve=e,t.reject=n},e),t},Et=function(e,t,n){return ht.all(e,n).then(function(e){if(!i(t))throw new TypeError("You must pass a function as map's second argument.");for(var r=e.length,o=new Array(r),a=0;r>a;a++)o[a]=t(e[a]);return ht.all(o,n)})},Mt=function(e,t){return ht.resolve(e,t)},At=function(e,t){return ht.reject(e,t)},Nt=function(e,t,n){return ht.all(e,n).then(function(e){if(!i(t))throw new TypeError("You must pass a function as filter's second argument.");for(var r=e.length,o=new Array(r),a=0;r>a;a++)o[a]=t(e[a]);return ht.all(o,n).then(function(t){for(var n=new Array(r),i=0,o=0;r>o;o++)t[o]&&(n[i]=e[o],i++);return n.length=i,n})})},Lt=0,It=function(e,t){Ot[Lt]=e,Ot[Lt+1]=t,Lt+=2,2===Lt&&// If len is 1, that means that we need to schedule an async flush.
// If additional callbacks are queued before the queue is flushed, they
// will be processed by this flush that we are scheduling.
Tt()},jt="undefined"!=typeof window?window:{},Pt=jt.MutationObserver||jt.WebKitMutationObserver,Dt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Ot=new Array(1e3);// Decide what async method to use to triggering processing of queued callbacks:
Tt="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?q():Pt?H():Dt?$():W(),// default async is asap;
U.async=It;// Set up instrumentation through `window.__PROMISE_INTRUMENTATION__`
if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Ft=window.__PROMISE_INSTRUMENTATION__;n("instrument",!0);for(var Bt in Ft)Ft.hasOwnProperty(Bt)&&G(Bt,Ft[Bt])}var Rt={race:xt,Promise:ht,allSettled:wt,hash:St,hashSettled:Ct,denodeify:vt,on:G,off:X,map:Et,filter:Nt,resolve:Mt,reject:At,all:yt,rethrow:kt,defer:_t,EventTarget:Y,configure:n,async:V};/* global define:true module:true window: true */
"function"==typeof define&&define.amd?define(function(){return Rt}):"undefined"!=typeof module&&module.exports?module.exports=Rt:"undefined"!=typeof this&&(this.RSVP=Rt)}.call(this),/*
 * jQuery spritely 0.6.7
 * http://spritely.net/
 *
 * Documentation:
 * http://spritely.net/documentation/
 *
 * Copyright 2010-2011, Peter Chater, Artlogic Media Ltd, http://www.artlogic.net/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
function(e){e._spritely={// shared methods and variables used by spritely plugin
instances:{},animate:function(t){var n=e(t.el),r=n.attr("id");if(!e._spritely.instances[r])return this;if(t=e.extend(t,e._spritely.instances[r]||{}),"sprite"==t.type&&t.fps){t.play_frames&&!e._spritely.instances[r].remaining_frames?e._spritely.instances[r].remaining_frames=t.play_frames+1:t.do_once&&!e._spritely.instances[r].remaining_frames&&(e._spritely.instances[r].remaining_frames=t.no_of_frames);var i,o=function(n){{var o=t.width;t.height}if(!i){i=[],total=0;for(var a=0;a<t.no_of_frames;a++)i[i.length]=0-total,total+=o}0==e._spritely.instances[r].current_frame?t.on_first_frame&&t.on_first_frame(n):e._spritely.instances[r].current_frame==i.length-1&&t.on_last_frame&&t.on_last_frame(n),t.on_frame&&t.on_frame[e._spritely.instances[r].current_frame]&&t.on_frame[e._spritely.instances[r].current_frame](n),e._spritely.instances[r].current_frame=1==t.rewind?e._spritely.instances[r].current_frame<=0?i.length-1:e._spritely.instances[r].current_frame-1:e._spritely.instances[r].current_frame>=i.length-1?0:e._spritely.instances[r].current_frame+1;var s=e._spritely.getBgY(n);if(n.css("background-position",i[e._spritely.instances[r].current_frame]+"px "+s),t.bounce&&t.bounce[0]>0&&t.bounce[1]>0){var l=t.bounce[0],u=t.bounce[1],c=t.bounce[2];// milliseconds
n.animate({top:"+="+l+"px",left:"-="+u+"px"},c).animate({top:"-="+l+"px",left:"+="+u+"px"},c)}};if(e._spritely.instances[r].remaining_frames&&e._spritely.instances[r].remaining_frames>0){if(e._spritely.instances[r].remaining_frames--,0==e._spritely.instances[r].remaining_frames)return e._spritely.instances[r].remaining_frames=-1,delete e._spritely.instances[r].remaining_frames,this;o(n)}else-1!=e._spritely.instances[r].remaining_frames&&o(n)}else if("pan"==t.type&&!e._spritely.instances[r]._stopped){// As we pan, reduce the offset to the smallest possible
// value to ease the load on the browser. This step is
// skipped if the image hasn't loaded yet.
var a=t.speed||1,s=e._spritely.instances[r].l||parseInt(e._spritely.getBgX(n).replace("px",""),10)||0,l=e._spritely.instances[r].t||parseInt(e._spritely.getBgY(n).replace("px",""),10)||0;if(t.do_once&&!e._spritely.instances[r].remaining_frames||e._spritely.instances[r].remaining_frames<=0){switch(t.dir){case"up":case"down":e._spritely.instances[r].remaining_frames=Math.floor((t.img_height||0)/a);break;case"left":case"right":e._spritely.instances[r].remaining_frames=Math.floor((t.img_width||0)/a)}e._spritely.instances[r].remaining_frames++}else t.do_once&&e._spritely.instances[r].remaining_frames--;switch(t.dir){case"up":a*=-1;case"down":e._spritely.instances[r].l||(e._spritely.instances[r].l=s),e._spritely.instances[r].t=l+a,t.img_height&&(e._spritely.instances[r].t%=t.img_height);break;case"left":a*=-1;case"right":e._spritely.instances[r].t||(e._spritely.instances[r].t=l),e._spritely.instances[r].l=s+a,t.img_width&&(e._spritely.instances[r].l%=t.img_width)}// When assembling the background-position string, care must be taken
// to ensure correct formatting.
var u=e._spritely.instances[r].l.toString();u+=-1==u.indexOf("%")?"px ":" ";var c=e._spritely.instances[r].t.toString();if(c+=-1==c.indexOf("%")?"px ":" ",e(n).css("background-position",u+c),t.do_once&&!e._spritely.instances[r].remaining_frames)return this}e._spritely.instances[r].options=t,e._spritely.instances[r].timeout=window.setTimeout(function(){e._spritely.animate(t)},parseInt(1e3/t.fps))},randomIntBetween:function(e,t){return parseInt(rand_no=Math.floor((t-(e-1))*Math.random())+e)},getBgUseXY:function(){try{return"string"==typeof e("body").css("background-position-x")}catch(t){return!1}}(),getBgY:function(t){return e._spritely.getBgUseXY?e(t).css("background-position-y")||"0":(e(t).css("background-position")||" ").split(" ")[1]},getBgX:function(t){return e._spritely.getBgUseXY?e(t).css("background-position-x")||"0":(e(t).css("background-position")||" ").split(" ")[0]},get_rel_pos:function(e,t){// return the position of an item relative to a background
// image of width given by w
var n=e;if(0>e)for(;0>n;)n+=t;else for(;n>t;)n-=t;return n},_spStrip:function(e,t){// Strip any character in 'chars' from the beginning or end of
// 'str'. Like Python's .strip() method, or jQuery's $.trim()
// function (but allowing you to specify the characters).
for(;e.length;){var n,r,i=!1,o=!1;for(n=0;n<t.length;n++){var a=e.slice(0,1);r=e.slice(1),t.indexOf(a)>-1?e=r:i=!0}for(n=0;n<t.length;n++){var s=e.slice(-1);r=e.slice(0,-1),t.indexOf(s)>-1?e=r:o=!0}if(i&&o)return e}return""}},e.fn.extend({spritely:function(t){var n=e(this),r=n.attr("id"),t=e.extend({type:"sprite",do_once:!1,width:null,height:null,img_width:0,img_height:0,fps:12,no_of_frames:2,play_frames:0},t||{}),i=new Image,o=e._spritely._spStrip(n.css("background-image")||"",'url("); ');return e._spritely.instances[r]||(e._spritely.instances[r]=t.start_at_frame?{current_frame:t.start_at_frame-1}:{current_frame:-1}),e._spritely.instances[r].type=t.type,e._spritely.instances[r].depth=t.depth,t.el=n,t.width=t.width||n.width()||100,t.height=t.height||n.height()||100,i.onload=function(){t.img_width=i.width,t.img_height=i.height,t.img=i;var n=function(){return parseInt(1e3/t.fps)};t.do_once?setTimeout(function(){e._spritely.animate(t)},0):setTimeout(function(){e._spritely.animate(t)},n(t.fps))},i.src=o,this},sprite:function(t){var t=e.extend({type:"sprite",bounce:[0,0,1e3]},t||{});return e(this).spritely(t)},pan:function(t){var t=e.extend({type:"pan",dir:"left",continuous:!0,speed:1},t||{});return e(this).spritely(t)},flyToTap:function(t){var t=e.extend({el_to_move:null,type:"moveToTap",ms:1e3,// milliseconds
do_once:!0},t||{});// iphone method see http://cubiq.org/remove-onclick-delay-on-webkit-for-iphone/9 or http://www.nimblekit.com/tutorials.html for clues...
return t.el_to_move&&e(t.el_to_move).active(),e._spritely.activeSprite&&(window.Touch?e(this)[0].ontouchstart=function(t){var n=e._spritely.activeSprite,r=t.touches[0],i=r.pageY-n.height()/2,o=r.pageX-n.width()/2;n.animate({top:i+"px",left:o+"px"},1e3)}:e(this).click(function(t){var n=e._spritely.activeSprite;e(n).stop(!0);var r=n.width(),i=n.height(),o=t.pageX-r/2,a=t.pageY-i/2;n.animate({top:a+"px",left:o+"px"},1e3)})),this},// isDraggable requires jQuery ui
isDraggable:function(t){if(!e(this).draggable)//console.log('To use the isDraggable method you need to load jquery-ui.js');
return this;var t=e.extend({type:"isDraggable",start:null,stop:null,drag:null},t||{}),n=e(this).attr("id");return e._spritely.instances[n]?(e._spritely.instances[n].isDraggableOptions=t,e(this).draggable({start:function(){var t=e(this).attr("id");e._spritely.instances[t].stop_random=!0,e(this).stop(!0),e._spritely.instances[t].isDraggableOptions.start&&e._spritely.instances[t].isDraggableOptions.start(this)},drag:t.drag,stop:function(){var t=e(this).attr("id");e._spritely.instances[t].stop_random=!1,e._spritely.instances[t].isDraggableOptions.stop&&e._spritely.instances[t].isDraggableOptions.stop(this)}}),this):this},active:function(){// the active sprite
return e._spritely.activeSprite=this,this},activeOnClick:function(){// make this the active script if clicked...
var t=e(this);// iphone method see http://cubiq.org/remove-onclick-delay-on-webkit-for-iphone/9 or http://www.nimblekit.com/tutorials.html for clues...
return window.Touch?t[0].ontouchstart=function(){e._spritely.activeSprite=t}:t.click(function(){e._spritely.activeSprite=t}),this},spRandom:function(t){var t=e.extend({top:50,left:50,right:290,bottom:320,speed:4e3,pause:0},t||{}),n=e(this).attr("id");if(!e._spritely.instances[n])return this;if(!e._spritely.instances[n].stop_random){var r=e._spritely.randomIntBetween,i=r(t.top,t.bottom),o=r(t.left,t.right);e("#"+n).animate({top:i+"px",left:o+"px"},t.speed)}return window.setTimeout(function(){e("#"+n).spRandom(t)},t.speed+t.pause),this},makeAbsolute:function(){// remove an element from its current position in the DOM and
// position it absolutely, appended to the body tag.
return this.each(function(){var t=e(this),n=t.position();t.css({position:"absolute",marginLeft:0,marginTop:0,top:n.top,left:n.left}).remove().appendTo("body")})},spSet:function(t,n){var r=e(this).attr("id");return e._spritely.instances[r][t]=n,this},spGet:function(t){var n=e(this).attr("id");return e._spritely.instances[n][t]},spStop:function(t){return this.each(function(){var n=e(this),r=n.attr("id");if(e._spritely.instances[r].options.fps&&(e._spritely.instances[r]._last_fps=e._spritely.instances[r].options.fps),"sprite"==e._spritely.instances[r].type&&n.spSet("fps",0),e._spritely.instances[r]._stopped=!0,e._spritely.instances[r]._stopped_f1=t,t){// set background image position to 0
var i=e._spritely.getBgY(e(this));n.css("background-position","0 "+i)}}),this},spStart:function(){return e(this).each(function(){var t=e(this).attr("id"),n=e._spritely.instances[t]._last_fps||12;"sprite"==e._spritely.instances[t].type&&e(this).spSet("fps",n),e._spritely.instances[t]._stopped=!1}),this},spToggle:function(){var t=e(this).attr("id"),n=e._spritely.instances[t]._stopped||!1,r=e._spritely.instances[t]._stopped_f1||!1;return n?e(this).spStart():e(this).spStop(r),this},fps:function(t){return e(this).each(function(){e(this).spSet("fps",t)}),this},goToFrame:function(t){var n=e(this).attr("id");return e._spritely.instances&&e._spritely.instances[n]&&(e._spritely.instances[n].current_frame=t-1),this},spSpeed:function(t){return e(this).each(function(){e(this).spSet("speed",t)}),this},spRelSpeed:function(t){return e(this).each(function(){var n=e(this).spGet("depth")/100;e(this).spSet("speed",t*n)}),this},spChangeDir:function(t){return e(this).each(function(){e(this).spSet("dir",t)}),this},spState:function(t){return e(this).each(function(){// change state of a sprite, where state is the vertical
// position of the background image (e.g. frames row)
var n=(t-1)*e(this).height()+"px",r=e._spritely.getBgX(e(this)),i=r+" -"+n;e(this).css("background-position",i)}),this},lockTo:function(t,n){return e(this).each(function(){var r=e(this).attr("id");return e._spritely.instances[r]?(e._spritely.instances[r].locked_el=e(this),e._spritely.instances[r].lock_to=e(t),e._spritely.instances[r].lock_to_options=n,void(e._spritely.instances[r].interval=window.setInterval(function(){if(e._spritely.instances[r].lock_to){var t=e._spritely.instances[r].locked_el,n=e._spritely.instances[r].lock_to,i=e._spritely.instances[r].lock_to_options,o=i.bg_img_width,a=(n.height(),e._spritely.getBgY(n)),s=e._spritely.getBgX(n),l=parseInt(s)+parseInt(i.left),u=parseInt(a)+parseInt(i.top);l=e._spritely.get_rel_pos(l,o),e(t).css({top:u+"px",left:l+"px"})}},n.interval||20))):this}),this},destroy:function(){var t=(e(this),e(this).attr("id"));return e._spritely.instances[t]&&e._spritely.instances[t].timeout&&window.clearTimeout(e._spritely.instances[t].timeout),e._spritely.instances[t]&&e._spritely.instances[t].interval&&window.clearInterval(e._spritely.instances[t].interval),delete e._spritely.instances[t],this}})}(jQuery);// Stop IE6 re-loading background images continuously
try{document.execCommand("BackgroundImageCache",!1,!0)}catch(err){}// Snap.svg 0.3.0
// 
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// build: 2014-06-03
!function(e){var t,n,r="0.4.2",i="hasOwnProperty",o=/[\.\/]/,a=/\s*,\s*/,s="*",l=function(e,t){return e-t},u={n:{}},c=function(){for(var e=0,t=this.length;t>e;e++)if("undefined"!=typeof this[e])return this[e]},f=function(){for(var e=this.length;--e;)if("undefined"!=typeof this[e])return this[e]},p=function(e,r){e=String(e);var i,o=n,a=Array.prototype.slice.call(arguments,2),s=p.listeners(e),u=0,d=[],h={},g=[],m=t;g.firstDefined=c,g.lastDefined=f,t=e,n=0;for(var v=0,y=s.length;y>v;v++)"zIndex"in s[v]&&(d.push(s[v].zIndex),s[v].zIndex<0&&(h[s[v].zIndex]=s[v]));for(d.sort(l);d[u]<0;)if(i=h[d[u++]],g.push(i.apply(r,a)),n)return n=o,g;for(v=0;y>v;v++)if(i=s[v],"zIndex"in i)if(i.zIndex==d[u]){if(g.push(i.apply(r,a)),n)break;do if(u++,i=h[d[u]],i&&g.push(i.apply(r,a)),n)break;while(i)}else h[i.zIndex]=i;else if(g.push(i.apply(r,a)),n)break;return n=o,t=m,g};p._events=u,p.listeners=function(e){var t,n,r,i,a,l,c,f,p=e.split(o),d=u,h=[d],g=[];for(i=0,a=p.length;a>i;i++){for(f=[],l=0,c=h.length;c>l;l++)for(d=h[l].n,n=[d[p[i]],d[s]],r=2;r--;)t=n[r],t&&(f.push(t),g=g.concat(t.f||[]));h=f}return g},p.on=function(e,t){if(e=String(e),"function"!=typeof t)return function(){};for(var n=e.split(a),r=0,i=n.length;i>r;r++)!function(e){for(var n,r=e.split(o),i=u,a=0,s=r.length;s>a;a++)i=i.n,i=i.hasOwnProperty(r[a])&&i[r[a]]||(i[r[a]]={n:{}});for(i.f=i.f||[],a=0,s=i.f.length;s>a;a++)if(i.f[a]==t){n=!0;break}!n&&i.f.push(t)}(n[r]);return function(e){+e==+e&&(t.zIndex=+e)}},p.f=function(e){var t=[].slice.call(arguments,1);return function(){p.apply(null,[e,null].concat(t).concat([].slice.call(arguments,0)))}},p.stop=function(){n=1},p.nt=function(e){return e?new RegExp("(?:\\.|\\/|^)"+e+"(?:\\.|\\/|$)").test(t):t},p.nts=function(){return t.split(o)},p.off=p.unbind=function(e,t){if(!e)return void(p._events=u={n:{}});var n=e.split(a);if(n.length>1)for(var r=0,l=n.length;l>r;r++)p.off(n[r],t);else{n=e.split(o);var c,f,d,r,l,h,g,m=[u];for(r=0,l=n.length;l>r;r++)for(h=0;h<m.length;h+=d.length-2){if(d=[h,1],c=m[h].n,n[r]!=s)c[n[r]]&&d.push(c[n[r]]);else for(f in c)c[i](f)&&d.push(c[f]);m.splice.apply(m,d)}for(r=0,l=m.length;l>r;r++)for(c=m[r];c.n;){if(t){if(c.f){for(h=0,g=c.f.length;g>h;h++)if(c.f[h]==t){c.f.splice(h,1);break}!c.f.length&&delete c.f}for(f in c.n)if(c.n[i](f)&&c.n[f].f){var v=c.n[f].f;for(h=0,g=v.length;g>h;h++)if(v[h]==t){v.splice(h,1);break}!v.length&&delete c.n[f].f}}else{delete c.f;for(f in c.n)c.n[i](f)&&c.n[f].f&&delete c.n[f].f}c=c.n}}},p.once=function(e,t){var n=function(){return p.unbind(e,n),t.apply(this,arguments)};return p.on(e,n)},p.version=r,p.toString=function(){return"You are running Eve "+r},"undefined"!=typeof module&&module.exports?module.exports=p:"function"==typeof define&&define.amd?define("eve",[],function(){return p}):e.eve=p}(this),function(e,t){"function"==typeof define&&define.amd?define(["eve"],function(n){return t(e,n)}):t(e,e.eve)}(this,function(e,t){var n=function(t){var n={},r=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,16)},i=Array.isArray||function(e){return e instanceof Array||"[object Array]"==Object.prototype.toString.call(e)},o=0,a="M"+(+new Date).toString(36),s=function(){return a+(o++).toString(36)},l=Date.now||function(){return+new Date},u=function(e){var t=this;if(null==e)return t.s;var n=t.s-e;t.b+=t.dur*n,t.B+=t.dur*n,t.s=e},c=function(e){var t=this;return null==e?t.spd:void(t.spd=e)},f=function(e){var t=this;return null==e?t.dur:(t.s=t.s*e/t.dur,void(t.dur=e))},p=function(){var e=this;delete n[e.id],e.update(),t("mina.stop."+e.id,e)},d=function(){var e=this;e.pdif||(delete n[e.id],e.update(),e.pdif=e.get()-e.b)},h=function(){var e=this;e.pdif&&(e.b=e.get()-e.pdif,delete e.pdif,n[e.id]=e)},g=function(){var e,t=this;if(i(t.start)){e=[];for(var n=0,r=t.start.length;r>n;n++)e[n]=+t.start[n]+(t.end[n]-t.start[n])*t.easing(t.s)}else e=+t.start+(t.end-t.start)*t.easing(t.s);t.set(e)},m=function(){var e=0;for(var i in n)if(n.hasOwnProperty(i)){var o=n[i],a=o.get();e++,o.s=(a-o.b)/(o.dur/o.spd),o.s>=1&&(delete n[i],o.s=1,e--,function(e){setTimeout(function(){t("mina.finish."+e.id,e)})}(o)),o.update()}e&&r(m)},v=function(e,t,i,o,a,l,y){var w={id:s(),start:e,end:t,b:i,s:0,dur:o-i,spd:1,get:a,set:l,easing:y||v.linear,status:u,speed:c,duration:f,stop:p,pause:d,resume:h,update:g};n[w.id]=w;var x,b=0;for(x in n)if(n.hasOwnProperty(x)&&(b++,2==b))break;return 1==b&&r(m),w};return v.time=l,v.getById=function(e){return n[e]||null},v.linear=function(e){return e},v.easeout=function(e){return Math.pow(e,1.7)},v.easein=function(e){return Math.pow(e,.48)},v.easeinout=function(e){if(1==e)return 1;if(0==e)return 0;var t=.48-e/1.04,n=Math.sqrt(.1734+t*t),r=n-t,i=Math.pow(Math.abs(r),1/3)*(0>r?-1:1),o=-n-t,a=Math.pow(Math.abs(o),1/3)*(0>o?-1:1),s=i+a+.5;return 3*(1-s)*s*s+s*s*s},v.backin=function(e){if(1==e)return 1;var t=1.70158;return e*e*((t+1)*e-t)},v.backout=function(e){if(0==e)return 0;e-=1;var t=1.70158;return e*e*((t+1)*e+t)+1},v.elastic=function(e){return e==!!e?e:Math.pow(2,-10*e)*Math.sin(2*(e-.075)*Math.PI/.3)+1},v.bounce=function(e){var t,n=7.5625,r=2.75;return 1/r>e?t=n*e*e:2/r>e?(e-=1.5/r,t=n*e*e+.75):2.5/r>e?(e-=2.25/r,t=n*e*e+.9375):(e-=2.625/r,t=n*e*e+.984375),t},e.mina=v,v}("undefined"==typeof t?function(){}:t),r=function(){function r(e,t){if(e){if(e.tagName)return C(e);if(o(e,"array")&&r.set)return r.set.apply(r,e);if(e instanceof x)return e;if(null==t)return e=k.doc.querySelector(e),C(e)}return e=null==e?"100%":e,t=null==t?"100%":t,new T(e,t)}function i(e,t){if(t){if("#text"==e&&(e=k.doc.createTextNode(t.text||"")),"string"==typeof e&&(e=i(e)),"string"==typeof t)return"xlink:"==t.substring(0,6)?e.getAttributeNS(Y,t.substring(6)):"xml:"==t.substring(0,4)?e.getAttributeNS(U,t.substring(4)):e.getAttribute(t);for(var n in t)if(t[_](n)){var r=E(t[n]);r?"xlink:"==n.substring(0,6)?e.setAttributeNS(Y,n.substring(6),r):"xml:"==n.substring(0,4)?e.setAttributeNS(U,n.substring(4),r):e.setAttribute(n,r):e.removeAttribute(n)}}else e=k.doc.createElementNS(U,e);return e}function o(e,t){return t=E.prototype.toLowerCase.call(t),"finite"==t?isFinite(e):"array"==t&&(e instanceof Array||Array.isArray&&Array.isArray(e))?!0:"null"==t&&null===e||t==typeof e&&null!==e||"object"==t&&e===Object(e)||F.call(e).slice(8,-1).toLowerCase()==t}function a(e){if("function"==typeof e||Object(e)!==e)return e;var t=new e.constructor;for(var n in e)e[_](n)&&(t[n]=a(e[n]));return t}function s(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return e.push(e.splice(n,1)[0])}function l(e,t,n){function r(){var i=Array.prototype.slice.call(arguments,0),o=i.join("␀"),a=r.cache=r.cache||{},l=r.count=r.count||[];return a[_](o)?(s(l,o),n?n(a[o]):a[o]):(l.length>=1e3&&delete a[l.shift()],l.push(o),a[o]=e.apply(t,i),n?n(a[o]):a[o])}return r}function u(e,t,n,r,i,o){if(null==i){var a=e-n,s=t-r;return a||s?(180+180*N.atan2(-s,-a)/P+360)%360:0}return u(e,t,i,o)-u(n,r,i,o)}function c(e){return e%360*P/180}function f(e){return 180*e/P%360}function p(e){var t=[];return e=e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(e,n,r){return r=r.split(/\s*,\s*|\s+/),"rotate"==n&&1==r.length&&r.push(0,0),"scale"==n&&(r.length>2?r=r.slice(0,2):2==r.length&&r.push(0,0),1==r.length&&r.push(r[0],0,0)),t.push("skewX"==n?["m",1,0,N.tan(c(r[0])),1,0,0]:"skewY"==n?["m",1,N.tan(c(r[0])),0,1,0,0]:[n.charAt(0)].concat(r)),e}),t}function d(e,t){var n=it(e),i=new r.Matrix;if(n)for(var o=0,a=n.length;a>o;o++){var s,l,u,c,f,p=n[o],d=p.length,h=E(p[0]).toLowerCase(),g=p[0]!=h,m=g?i.invert():0;"t"==h&&2==d?i.translate(p[1],0):"t"==h&&3==d?g?(s=m.x(0,0),l=m.y(0,0),u=m.x(p[1],p[2]),c=m.y(p[1],p[2]),i.translate(u-s,c-l)):i.translate(p[1],p[2]):"r"==h?2==d?(f=f||t,i.rotate(p[1],f.x+f.width/2,f.y+f.height/2)):4==d&&(g?(u=m.x(p[2],p[3]),c=m.y(p[2],p[3]),i.rotate(p[1],u,c)):i.rotate(p[1],p[2],p[3])):"s"==h?2==d||3==d?(f=f||t,i.scale(p[1],p[d-1],f.x+f.width/2,f.y+f.height/2)):4==d?g?(u=m.x(p[2],p[3]),c=m.y(p[2],p[3]),i.scale(p[1],p[1],u,c)):i.scale(p[1],p[1],p[2],p[3]):5==d&&(g?(u=m.x(p[3],p[4]),c=m.y(p[3],p[4]),i.scale(p[1],p[2],u,c)):i.scale(p[1],p[2],p[3],p[4])):"m"==h&&7==d&&i.add(p[1],p[2],p[3],p[4],p[5],p[6])}return i}function h(e,t){if(null==t){var n=!0;if(t=e.node.getAttribute("linearGradient"==e.type||"radialGradient"==e.type?"gradientTransform":"pattern"==e.type?"patternTransform":"transform"),!t)return new r.Matrix;t=p(t)}else t=r._.rgTransform.test(t)?E(t).replace(/\.{3}|\u2026/g,e._.transform||D):p(t),o(t,"array")&&(t=r.path?r.path.toString.call(t):E(t)),e._.transform=t;var i=d(t,e.getBBox(1));return n?i:void(e.matrix=i)}function m(e){var t=e.node.ownerSVGElement&&C(e.node.ownerSVGElement)||e.node.parentNode&&C(e.node.parentNode)||r.select("svg")||r(0,0),n=t.select("defs"),i=null==n?!1:n.node;return i||(i=S("defs",t.node).node),i}function v(e){return e.node.ownerSVGElement&&C(e.node.ownerSVGElement)||r.select("svg")}function y(e,t,n){function r(e){if(null==e)return D;if(e==+e)return e;i(u,{width:e});try{return u.getBBox().width}catch(t){return 0}}function o(e){if(null==e)return D;if(e==+e)return e;i(u,{height:e});try{return u.getBBox().height}catch(t){return 0}}function a(r,i){null==t?l[r]=i(e.attr(r)||0):r==t&&(l=i(null==n?e.attr(r)||0:n))}var s=v(e).node,l={},u=s.querySelector(".svg---mgr");switch(u||(u=i("rect"),i(u,{x:-9e9,y:-9e9,width:10,height:10,"class":"svg---mgr",fill:"none"}),s.appendChild(u)),e.type){case"rect":a("rx",r),a("ry",o);case"image":a("width",r),a("height",o);case"text":a("x",r),a("y",o);break;case"circle":a("cx",r),a("cy",o),a("r",r);break;case"ellipse":a("cx",r),a("cy",o),a("rx",r),a("ry",o);break;case"line":a("x1",r),a("x2",r),a("y1",o),a("y2",o);break;case"marker":a("refX",r),a("markerWidth",r),a("refY",o),a("markerHeight",o);break;case"radialGradient":a("fx",r),a("fy",o);break;case"tspan":a("dx",r),a("dy",o);break;default:a(t,r)}return s.removeChild(u),l}function w(e){o(e,"array")||(e=Array.prototype.slice.call(arguments,0));for(var t=0,n=0,r=this.node;this[t];)delete this[t++];for(t=0;t<e.length;t++)"set"==e[t].type?e[t].forEach(function(e){r.appendChild(e.node)}):r.appendChild(e[t].node);var i=r.childNodes;for(t=0;t<i.length;t++)this[n++]=C(i[t]);return this}function x(e){if(e.snap in Q)return Q[e.snap];var t,n=this.id=X();try{t=e.ownerSVGElement}catch(r){}if(this.node=e,t&&(this.paper=new T(t)),this.type=e.tagName,this.anims={},this._={transform:[]},e.snap=n,Q[n]=this,"g"==this.type&&(this.add=w),this.type in{g:1,mask:1,pattern:1})for(var i in T.prototype)T.prototype[_](i)&&(this[i]=T.prototype[i])}function b(e){this.node=e}function S(e,t){var n=i(e);t.appendChild(n);var r=C(n);return r}function T(e,t){var n,r,o,a=T.prototype;if(e&&"svg"==e.tagName){if(e.snap in Q)return Q[e.snap];var s=e.ownerDocument;n=new x(e),r=e.getElementsByTagName("desc")[0],o=e.getElementsByTagName("defs")[0],r||(r=i("desc"),r.appendChild(s.createTextNode("Created with Snap")),n.node.appendChild(r)),o||(o=i("defs"),n.node.appendChild(o)),n.defs=o;for(var l in a)a[_](l)&&(n[l]=a[l]);n.paper=n.root=n}else n=S("svg",k.doc.body),i(n.node,{height:t,version:1.1,width:e,xmlns:U});return n}function C(e){return e?e instanceof x||e instanceof b?e:e.tagName&&"svg"==e.tagName.toLowerCase()?new T(e):e.tagName&&"object"==e.tagName.toLowerCase()&&"image/svg+xml"==e.type?new T(e.contentDocument.getElementsByTagName("svg")[0]):new x(e):e}r.version="0.3.0",r.toString=function(){return"Snap v"+this.version},r._={};var k={win:e,doc:e.document};r._.glob=k;var _="hasOwnProperty",E=String,M=parseFloat,A=parseInt,N=Math,L=N.max,I=N.min,j=N.abs,P=(N.pow,N.PI),D=(N.round,""),O=" ",F=Object.prototype.toString,B=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,R="	\n\f\r   ᠎             　\u2028\u2029",q=(r._.separator=new RegExp("[,"+R+"]+"),new RegExp("["+R+"]","g"),new RegExp("["+R+"]*,["+R+"]*")),H={hs:1,rg:1},$=new RegExp("([a-z])["+R+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+R+"]*,?["+R+"]*)+)","ig"),W=new RegExp("([rstm])["+R+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+R+"]*,?["+R+"]*)+)","ig"),z=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+R+"]*,?["+R+"]*","ig"),V=0,G="S"+(+new Date).toString(36),X=function(){return G+(V++).toString(36)},Y="http://www.w3.org/1999/xlink",U="http://www.w3.org/2000/svg",Q={},K=r.url=function(e){return"url('#"+e+"')"};r._.$=i,r._.id=X,r.format=function(){var e=/\{([^\}]+)\}/g,t=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,n=function(e,n,r){var i=r;return n.replace(t,function(e,t,n,r,o){t=t||r,i&&(t in i&&(i=i[t]),"function"==typeof i&&o&&(i=i()))}),i=(null==i||i==r?e:i)+""};return function(t,r){return E(t).replace(e,function(e,t){return n(e,t,r)})}}(),r._.clone=a,r._.cacher=l,r.rad=c,r.deg=f,r.angle=u,r.is=o,r.snapTo=function(e,t,n){if(n=o(n,"finite")?n:10,o(e,"array")){for(var r=e.length;r--;)if(j(e[r]-t)<=n)return e[r]}else{e=+e;var i=t%e;if(n>i)return t-i;if(i>e-n)return t-i+e}return t},r.getRGB=l(function(e){if(!e||(e=E(e)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:tt};if("none"==e)return{r:-1,g:-1,b:-1,hex:"none",toString:tt};if(!(H[_](e.toLowerCase().substring(0,2))||"#"==e.charAt())&&(e=Z(e)),!e)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:tt};var t,n,i,a,s,l,u=e.match(B);return u?(u[2]&&(i=A(u[2].substring(5),16),n=A(u[2].substring(3,5),16),t=A(u[2].substring(1,3),16)),u[3]&&(i=A((s=u[3].charAt(3))+s,16),n=A((s=u[3].charAt(2))+s,16),t=A((s=u[3].charAt(1))+s,16)),u[4]&&(l=u[4].split(q),t=M(l[0]),"%"==l[0].slice(-1)&&(t*=2.55),n=M(l[1]),"%"==l[1].slice(-1)&&(n*=2.55),i=M(l[2]),"%"==l[2].slice(-1)&&(i*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(a=M(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),u[5]?(l=u[5].split(q),t=M(l[0]),"%"==l[0].slice(-1)&&(t/=100),n=M(l[1]),"%"==l[1].slice(-1)&&(n/=100),i=M(l[2]),"%"==l[2].slice(-1)&&(i/=100),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(t/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(a=M(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsb2rgb(t,n,i,a)):u[6]?(l=u[6].split(q),t=M(l[0]),"%"==l[0].slice(-1)&&(t/=100),n=M(l[1]),"%"==l[1].slice(-1)&&(n/=100),i=M(l[2]),"%"==l[2].slice(-1)&&(i/=100),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(t/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(a=M(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsl2rgb(t,n,i,a)):(t=I(N.round(t),255),n=I(N.round(n),255),i=I(N.round(i),255),a=I(L(a,0),1),u={r:t,g:n,b:i,toString:tt},u.hex="#"+(16777216|i|n<<8|t<<16).toString(16).slice(1),u.opacity=o(a,"finite")?a:1,u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:tt}},r),r.hsb=l(function(e,t,n){return r.hsb2rgb(e,t,n).hex}),r.hsl=l(function(e,t,n){return r.hsl2rgb(e,t,n).hex}),r.rgb=l(function(e,t,n,r){if(o(r,"finite")){var i=N.round;return"rgba("+[i(e),i(t),i(n),+r.toFixed(2)]+")"}return"#"+(16777216|n|t<<8|e<<16).toString(16).slice(1)});var Z=function(e){var t=k.doc.getElementsByTagName("head")[0]||k.doc.getElementsByTagName("svg")[0],n="rgb(255, 0, 0)";return(Z=l(function(e){if("red"==e.toLowerCase())return n;t.style.color=n,t.style.color=e;var r=k.doc.defaultView.getComputedStyle(t,D).getPropertyValue("color");return r==n?null:r}))(e)},J=function(){return"hsb("+[this.h,this.s,this.b]+")"},et=function(){return"hsl("+[this.h,this.s,this.l]+")"},tt=function(){return 1==this.opacity||null==this.opacity?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")"},nt=function(e,t,n){if(null==t&&o(e,"object")&&"r"in e&&"g"in e&&"b"in e&&(n=e.b,t=e.g,e=e.r),null==t&&o(e,string)){var i=r.getRGB(e);e=i.r,t=i.g,n=i.b}return(e>1||t>1||n>1)&&(e/=255,t/=255,n/=255),[e,t,n]},rt=function(e,t,n,i){e=N.round(255*e),t=N.round(255*t),n=N.round(255*n);var a={r:e,g:t,b:n,opacity:o(i,"finite")?i:1,hex:r.rgb(e,t,n),toString:tt};return o(i,"finite")&&(a.opacity=i),a};r.color=function(e){var t;return o(e,"object")&&"h"in e&&"s"in e&&"b"in e?(t=r.hsb2rgb(e),e.r=t.r,e.g=t.g,e.b=t.b,e.opacity=1,e.hex=t.hex):o(e,"object")&&"h"in e&&"s"in e&&"l"in e?(t=r.hsl2rgb(e),e.r=t.r,e.g=t.g,e.b=t.b,e.opacity=1,e.hex=t.hex):(o(e,"string")&&(e=r.getRGB(e)),o(e,"object")&&"r"in e&&"g"in e&&"b"in e&&!("error"in e)?(t=r.rgb2hsl(e),e.h=t.h,e.s=t.s,e.l=t.l,t=r.rgb2hsb(e),e.v=t.b):(e={hex:"none"},e.r=e.g=e.b=e.h=e.s=e.v=e.l=-1,e.error=1)),e.toString=tt,e},r.hsb2rgb=function(e,t,n,r){o(e,"object")&&"h"in e&&"s"in e&&"b"in e&&(n=e.b,t=e.s,e=e.h,r=e.o),e*=360;var i,a,s,l,u;return e=e%360/60,u=n*t,l=u*(1-j(e%2-1)),i=a=s=n-u,e=~~e,i+=[u,l,0,0,l,u][e],a+=[l,u,u,l,0,0][e],s+=[0,0,l,u,u,l][e],rt(i,a,s,r)},r.hsl2rgb=function(e,t,n,r){o(e,"object")&&"h"in e&&"s"in e&&"l"in e&&(n=e.l,t=e.s,e=e.h),(e>1||t>1||n>1)&&(e/=360,t/=100,n/=100),e*=360;var i,a,s,l,u;return e=e%360/60,u=2*t*(.5>n?n:1-n),l=u*(1-j(e%2-1)),i=a=s=n-u/2,e=~~e,i+=[u,l,0,0,l,u][e],a+=[l,u,u,l,0,0][e],s+=[0,0,l,u,u,l][e],rt(i,a,s,r)},r.rgb2hsb=function(e,t,n){n=nt(e,t,n),e=n[0],t=n[1],n=n[2];var r,i,o,a;return o=L(e,t,n),a=o-I(e,t,n),r=0==a?null:o==e?(t-n)/a:o==t?(n-e)/a+2:(e-t)/a+4,r=(r+360)%6*60/360,i=0==a?0:a/o,{h:r,s:i,b:o,toString:J}},r.rgb2hsl=function(e,t,n){n=nt(e,t,n),e=n[0],t=n[1],n=n[2];var r,i,o,a,s,l;return a=L(e,t,n),s=I(e,t,n),l=a-s,r=0==l?null:a==e?(t-n)/l:a==t?(n-e)/l+2:(e-t)/l+4,r=(r+360)%6*60/360,o=(a+s)/2,i=0==l?0:.5>o?l/(2*o):l/(2-2*o),{h:r,s:i,l:o,toString:et}},r.parsePathString=function(e){if(!e)return null;var t=r.path(e);if(t.arr)return r.path.clone(t.arr);var n={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},i=[];return o(e,"array")&&o(e[0],"array")&&(i=r.path.clone(e)),i.length||E(e).replace($,function(e,t,r){var o=[],a=t.toLowerCase();if(r.replace(z,function(e,t){t&&o.push(+t)}),"m"==a&&o.length>2&&(i.push([t].concat(o.splice(0,2))),a="l",t="m"==t?"l":"L"),"o"==a&&1==o.length&&i.push([t,o[0]]),"r"==a)i.push([t].concat(o));else for(;o.length>=n[a]&&(i.push([t].concat(o.splice(0,n[a]))),n[a]););}),i.toString=r.path.toString,t.arr=r.path.clone(i),i};var it=r.parseTransformString=function(e){if(!e)return null;var t=[];return o(e,"array")&&o(e[0],"array")&&(t=r.path.clone(e)),t.length||E(e).replace(W,function(e,n,r){var i=[];n.toLowerCase(),r.replace(z,function(e,t){t&&i.push(+t)}),t.push([n].concat(i))}),t.toString=r.path.toString,t};r._.svgTransform2string=p,r._.rgTransform=new RegExp("^[a-z]["+R+"]*-?\\.?\\d","i"),r._.transform2matrix=d,r._unit2px=y,k.doc.contains||k.doc.compareDocumentPosition?function(e,t){var n=9==e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e==r||!(!r||1!=r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t;)if(t=t.parentNode,t==e)return!0;return!1},r._.getSomeDefs=m,r._.getSomeSVG=v,r.select=function(e){return C(k.doc.querySelector(e))},r.selectAll=function(e){for(var t=k.doc.querySelectorAll(e),n=(r.set||Array)(),i=0;i<t.length;i++)n.push(C(t[i]));return n},setInterval(function(){for(var e in Q)if(Q[_](e)){var t=Q[e],n=t.node;("svg"!=t.type&&!n.ownerSVGElement||"svg"==t.type&&(!n.parentNode||"ownerSVGElement"in n.parentNode&&!n.ownerSVGElement))&&delete Q[e]}},1e4),function(e){function a(e){function t(e,t){var n=i(e.node,t);n=n&&n.match(a),n=n&&n[2],n&&"#"==n.charAt()&&(n=n.substring(1),n&&(l[n]=(l[n]||[]).concat(function(n){var r={};r[t]=K(n),i(e.node,r)})))}function n(e){var t=i(e.node,"xlink:href");t&&"#"==t.charAt()&&(t=t.substring(1),t&&(l[t]=(l[t]||[]).concat(function(t){e.attr("xlink:href","#"+t)})))}for(var r,o=e.selectAll("*"),a=/^\s*url\(("|'|)(.*)\1\)\s*$/,s=[],l={},u=0,c=o.length;c>u;u++){r=o[u],t(r,"fill"),t(r,"stroke"),t(r,"filter"),t(r,"mask"),t(r,"clip-path"),n(r);var f=i(r.node,"id");f&&(i(r.node,{id:r.id}),s.push({old:f,id:r.id}))}for(u=0,c=s.length;c>u;u++){var p=l[s[u].old];if(p)for(var d=0,h=p.length;h>d;d++)p[d](s[u].id)}}function s(e,t,n){return function(r){var i=r.slice(e,t);return 1==i.length&&(i=i[0]),n?n(i):i}}function l(e){return function(){var t=e?"<"+this.type:"",n=this.node.attributes,r=this.node.childNodes;if(e)for(var i=0,o=n.length;o>i;i++)t+=" "+n[i].name+'="'+n[i].value.replace(/"/g,'\\"')+'"';if(r.length){for(e&&(t+=">"),i=0,o=r.length;o>i;i++)3==r[i].nodeType?t+=r[i].nodeValue:1==r[i].nodeType&&(t+=C(r[i]).toString());e&&(t+="</"+this.type+">")}else e&&(t+="/>");return t}}e.attr=function(e,n){var r=this;if(r.node,!e)return r;if(o(e,"string")){if(!(arguments.length>1))return t("snap.util.getattr."+e,r).firstDefined();var i={};i[e]=n,e=i}for(var a in e)e[_](a)&&t("snap.util.attr."+a,r,e[a]);return r},e.getBBox=function(e){if(!r.Matrix||!r.path)return this.node.getBBox();var t=this,n=new r.Matrix;if(t.removed)return r._.box();for(;"use"==t.type;)if(e||(n=n.add(t.transform().localMatrix.translate(t.attr("x")||0,t.attr("y")||0))),t.original)t=t.original;else{var i=t.attr("xlink:href");t=t.original=t.node.ownerDocument.getElementById(i.substring(i.indexOf("#")+1))}var o=t._,a=r.path.get[t.type]||r.path.get.deflt;try{return e?(o.bboxwt=a?r.path.getBBox(t.realPath=a(t)):r._.box(t.node.getBBox()),r._.box(o.bboxwt)):(t.realPath=a(t),t.matrix=t.transform().localMatrix,o.bbox=r.path.getBBox(r.path.map(t.realPath,n.add(t.matrix))),r._.box(o.bbox))}catch(s){return r._.box()}};var u=function(){return this.string};e.transform=function(e){var t=this._;if(null==e){for(var n,o=this,a=new r.Matrix(this.node.getCTM()),s=h(this),l=[s],c=new r.Matrix,f=s.toTransformString(),p=E(s)==E(this.matrix)?E(t.transform):f;"svg"!=o.type&&(o=o.parent());)l.push(h(o));for(n=l.length;n--;)c.add(l[n]);return{string:p,globalMatrix:a,totalMatrix:c,localMatrix:s,diffMatrix:a.clone().add(s.invert()),global:a.toTransformString(),total:c.toTransformString(),local:f,toString:u}}return e instanceof r.Matrix?this.matrix=e:h(this,e),this.node&&("linearGradient"==this.type||"radialGradient"==this.type?i(this.node,{gradientTransform:this.matrix}):"pattern"==this.type?i(this.node,{patternTransform:this.matrix}):i(this.node,{transform:this.matrix})),this},e.parent=function(){return C(this.node.parentNode)},e.append=e.add=function(e){if(e){if("set"==e.type){var t=this;return e.forEach(function(e){t.add(e)}),this}e=C(e),this.node.appendChild(e.node),e.paper=this.paper}return this},e.appendTo=function(e){return e&&(e=C(e),e.append(this)),this},e.prepend=function(e){if(e){if("set"==e.type){var t,n=this;return e.forEach(function(e){t?t.after(e):n.prepend(e),t=e}),this}e=C(e);var r=e.parent();this.node.insertBefore(e.node,this.node.firstChild),this.add&&this.add(),e.paper=this.paper,this.parent()&&this.parent().add(),r&&r.add()}return this},e.prependTo=function(e){return e=C(e),e.prepend(this),this},e.before=function(e){if("set"==e.type){var t=this;return e.forEach(function(e){var n=e.parent();t.node.parentNode.insertBefore(e.node,t.node),n&&n.add()}),this.parent().add(),this}e=C(e);var n=e.parent();return this.node.parentNode.insertBefore(e.node,this.node),this.parent()&&this.parent().add(),n&&n.add(),e.paper=this.paper,this},e.after=function(e){e=C(e);var t=e.parent();return this.node.nextSibling?this.node.parentNode.insertBefore(e.node,this.node.nextSibling):this.node.parentNode.appendChild(e.node),this.parent()&&this.parent().add(),t&&t.add(),e.paper=this.paper,this},e.insertBefore=function(e){e=C(e);var t=this.parent();return e.node.parentNode.insertBefore(this.node,e.node),this.paper=e.paper,t&&t.add(),e.parent()&&e.parent().add(),this},e.insertAfter=function(e){e=C(e);var t=this.parent();return e.node.parentNode.insertBefore(this.node,e.node.nextSibling),this.paper=e.paper,t&&t.add(),e.parent()&&e.parent().add(),this},e.remove=function(){var e=this.parent();return this.node.parentNode&&this.node.parentNode.removeChild(this.node),delete this.paper,this.removed=!0,e&&e.add(),this},e.select=function(e){return C(this.node.querySelector(e))},e.selectAll=function(e){for(var t=this.node.querySelectorAll(e),n=(r.set||Array)(),i=0;i<t.length;i++)n.push(C(t[i]));return n},e.asPX=function(e,t){return null==t&&(t=this.attr(e)),+y(this,e,t)},e.use=function(){var e,t=this.node.id;return t||(t=this.id,i(this.node,{id:t})),e="linearGradient"==this.type||"radialGradient"==this.type||"pattern"==this.type?S(this.type,this.node.parentNode):S("use",this.node.parentNode),i(e.node,{"xlink:href":"#"+t}),e.original=this,e};var c=/\S+/g;e.addClass=function(e){var t,n,r,i,o=(e||"").match(c)||[],a=this.node,s=a.className.baseVal,l=s.match(c)||[];if(o.length){for(t=0;r=o[t++];)n=l.indexOf(r),~n||l.push(r);i=l.join(" "),s!=i&&(a.className.baseVal=i)}return this},e.removeClass=function(e){var t,n,r,i,o=(e||"").match(c)||[],a=this.node,s=a.className.baseVal,l=s.match(c)||[];if(l.length){for(t=0;r=o[t++];)n=l.indexOf(r),~n&&l.splice(n,1);i=l.join(" "),s!=i&&(a.className.baseVal=i)}return this},e.hasClass=function(e){var t=this.node,n=t.className.baseVal,r=n.match(c)||[];return!!~r.indexOf(e)},e.toggleClass=function(e,t){if(null!=t)return t?this.addClass(e):this.removeClass(e);var n,r,i,o,a=(e||"").match(c)||[],s=this.node,l=s.className.baseVal,u=l.match(c)||[];for(n=0;i=a[n++];)r=u.indexOf(i),~r?u.splice(r,1):u.push(i);return o=u.join(" "),l!=o&&(s.className.baseVal=o),this},e.clone=function(){var e=C(this.node.cloneNode(!0));return i(e.node,"id")&&i(e.node,{id:e.id}),a(e),e.insertAfter(this),e},e.toDefs=function(){var e=m(this);return e.appendChild(this.node),this},e.pattern=e.toPattern=function(e,t,n,r){var a=S("pattern",m(this));return null==e&&(e=this.getBBox()),o(e,"object")&&"x"in e&&(t=e.y,n=e.width,r=e.height,e=e.x),i(a.node,{x:e,y:t,width:n,height:r,patternUnits:"userSpaceOnUse",id:a.id,viewBox:[e,t,n,r].join(" ")}),a.node.appendChild(this.node),a},e.marker=function(e,t,n,r,a,s){var l=S("marker",m(this));return null==e&&(e=this.getBBox()),o(e,"object")&&"x"in e&&(t=e.y,n=e.width,r=e.height,a=e.refX||e.cx,s=e.refY||e.cy,e=e.x),i(l.node,{viewBox:[e,t,n,r].join(O),markerWidth:n,markerHeight:r,orient:"auto",refX:a||0,refY:s||0,id:l.id}),l.node.appendChild(this.node),l};var f=function(e,t,r,i){"function"!=typeof r||r.length||(i=r,r=n.linear),this.attr=e,this.dur=t,r&&(this.easing=r),i&&(this.callback=i)};r._.Animation=f,r.animation=function(e,t,n,r){return new f(e,t,n,r)},e.inAnim=function(){var e=this,t=[];for(var n in e.anims)e.anims[_](n)&&!function(e){t.push({anim:new f(e._attrs,e.dur,e.easing,e._callback),mina:e,curStatus:e.status(),status:function(t){return e.status(t)},stop:function(){e.stop()}})}(e.anims[n]);return t},r.animate=function(e,r,i,o,a,s){"function"!=typeof a||a.length||(s=a,a=n.linear);var l=n.time(),u=n(e,r,l,l+o,n.time,i,a);return s&&t.once("mina.finish."+u.id,s),u},e.stop=function(){for(var e=this.inAnim(),t=0,n=e.length;n>t;t++)e[t].stop();return this},e.animate=function(e,r,i,a){"function"!=typeof i||i.length||(a=i,i=n.linear),e instanceof f&&(a=e.callback,i=e.easing,r=i.dur,e=e.attr);var l,u,c,p,d=[],h=[],g={},m=this;for(var v in e)if(e[_](v)){m.equal?(p=m.equal(v,E(e[v])),l=p.from,u=p.to,c=p.f):(l=+m.attr(v),u=+e[v]);var y=o(l,"array")?l.length:1;g[v]=s(d.length,d.length+y,c),d=d.concat(l),h=h.concat(u)}var w=n.time(),x=n(d,h,w,w+r,n.time,function(e){var t={};for(var n in g)g[_](n)&&(t[n]=g[n](e));m.attr(t)},i);return m.anims[x.id]=x,x._attrs=e,x._callback=a,t("snap.animcreated."+m.id,x),t.once("mina.finish."+x.id,function(){delete m.anims[x.id],a&&a.call(m)}),t.once("mina.stop."+x.id,function(){delete m.anims[x.id]}),m};var p={};e.data=function(e,n){var i=p[this.id]=p[this.id]||{};if(0==arguments.length)return t("snap.data.get."+this.id,this,i,null),i;if(1==arguments.length){if(r.is(e,"object")){for(var o in e)e[_](o)&&this.data(o,e[o]);return this}return t("snap.data.get."+this.id,this,i[e],e),i[e]}return i[e]=n,t("snap.data.set."+this.id,this,n,e),this},e.removeData=function(e){return null==e?p[this.id]={}:p[this.id]&&delete p[this.id][e],this},e.outerSVG=e.toString=l(1),e.innerSVG=l()}(x.prototype),r.parse=function(e){var t=k.doc.createDocumentFragment(),n=!0,r=k.doc.createElement("div");if(e=E(e),e.match(/^\s*<\s*svg(?:\s|>)/)||(e="<svg>"+e+"</svg>",n=!1),r.innerHTML=e,e=r.getElementsByTagName("svg")[0])if(n)t=e;else for(;e.firstChild;)t.appendChild(e.firstChild);return r.innerHTML=D,new b(t)},b.prototype.select=x.prototype.select,b.prototype.selectAll=x.prototype.selectAll,r.fragment=function(){for(var e=Array.prototype.slice.call(arguments,0),t=k.doc.createDocumentFragment(),n=0,i=e.length;i>n;n++){var o=e[n];o.node&&o.node.nodeType&&t.appendChild(o.node),o.nodeType&&t.appendChild(o),"string"==typeof o&&t.appendChild(r.parse(o).node)}return new b(t)},r._.make=S,r._.wrap=C,T.prototype.el=function(e,t){var n=S(e,this.node);return t&&n.attr(t),n},t.on("snap.util.getattr",function(){var e=t.nt();e=e.substring(e.lastIndexOf(".")+1);var n=e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()});return ot[_](n)?this.node.ownerDocument.defaultView.getComputedStyle(this.node,null).getPropertyValue(n):i(this.node,e)});var ot={"alignment-baseline":0,"baseline-shift":0,clip:0,"clip-path":0,"clip-rule":0,color:0,"color-interpolation":0,"color-interpolation-filters":0,"color-profile":0,"color-rendering":0,cursor:0,direction:0,display:0,"dominant-baseline":0,"enable-background":0,fill:0,"fill-opacity":0,"fill-rule":0,filter:0,"flood-color":0,"flood-opacity":0,font:0,"font-family":0,"font-size":0,"font-size-adjust":0,"font-stretch":0,"font-style":0,"font-variant":0,"font-weight":0,"glyph-orientation-horizontal":0,"glyph-orientation-vertical":0,"image-rendering":0,kerning:0,"letter-spacing":0,"lighting-color":0,marker:0,"marker-end":0,"marker-mid":0,"marker-start":0,mask:0,opacity:0,overflow:0,"pointer-events":0,"shape-rendering":0,"stop-color":0,"stop-opacity":0,stroke:0,"stroke-dasharray":0,"stroke-dashoffset":0,"stroke-linecap":0,"stroke-linejoin":0,"stroke-miterlimit":0,"stroke-opacity":0,"stroke-width":0,"text-anchor":0,"text-decoration":0,"text-rendering":0,"unicode-bidi":0,visibility:0,"word-spacing":0,"writing-mode":0};t.on("snap.util.attr",function(e){var n=t.nt(),r={};n=n.substring(n.lastIndexOf(".")+1),r[n]=e;var o=n.replace(/-(\w)/gi,function(e,t){return t.toUpperCase()}),a=n.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()});ot[_](a)?this.node.style[o]=null==e?D:e:i(this.node,r)}),function(){}(T.prototype),r.ajax=function(e,n,r,i){var a=new XMLHttpRequest,s=X();if(a){if(o(n,"function"))i=r,r=n,n=null;else if(o(n,"object")){var l=[];for(var u in n)n.hasOwnProperty(u)&&l.push(encodeURIComponent(u)+"="+encodeURIComponent(n[u]));n=l.join("&")}return a.open(n?"POST":"GET",e,!0),n&&(a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("Content-type","application/x-www-form-urlencoded")),r&&(t.once("snap.ajax."+s+".0",r),t.once("snap.ajax."+s+".200",r),t.once("snap.ajax."+s+".304",r)),a.onreadystatechange=function(){4==a.readyState&&t("snap.ajax."+s+"."+a.status,i,a)},4==a.readyState?a:(a.send(n),a)}},r.load=function(e,t,n){r.ajax(e,function(e){var i=r.parse(e.responseText);n?t.call(n,i):t(i)})};var at=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.body,i=n.documentElement,o=i.clientTop||r.clientTop||0,a=i.clientLeft||r.clientLeft||0,s=t.top+(g.win.pageYOffset||i.scrollTop||r.scrollTop)-o,l=t.left+(g.win.pageXOffset||i.scrollLeft||r.scrollLeft)-a;return{y:s,x:l}};return r.getElementByPoint=function(e,t){var n=this,r=(n.canvas,k.doc.elementFromPoint(e,t));if(k.win.opera&&"svg"==r.tagName){var i=at(r),o=r.createSVGRect();o.x=e-i.x,o.y=t-i.y,o.width=o.height=1;var a=r.getIntersectionList(o,null);a.length&&(r=a[a.length-1])}return r?C(r):null},r.plugin=function(e){e(r,x,T,k,b)},k.win.Snap=r,r}();return r.plugin(function(e){function t(e,t,r,i,o,a){return null==t&&"[object SVGMatrix]"==n.call(e)?(this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.e=e.e,void(this.f=e.f)):void(null!=e?(this.a=+e,this.b=+t,this.c=+r,this.d=+i,this.e=+o,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0))}var n=Object.prototype.toString,r=String,i=Math,o="";!function(n){function a(e){return e[0]*e[0]+e[1]*e[1]
}function s(e){var t=i.sqrt(a(e));e[0]&&(e[0]/=t),e[1]&&(e[1]/=t)}n.add=function(e,n,r,i,o,a){var s,l,u,c,f=[[],[],[]],p=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],d=[[e,r,o],[n,i,a],[0,0,1]];for(e&&e instanceof t&&(d=[[e.a,e.c,e.e],[e.b,e.d,e.f],[0,0,1]]),s=0;3>s;s++)for(l=0;3>l;l++){for(c=0,u=0;3>u;u++)c+=p[s][u]*d[u][l];f[s][l]=c}return this.a=f[0][0],this.b=f[1][0],this.c=f[0][1],this.d=f[1][1],this.e=f[0][2],this.f=f[1][2],this},n.invert=function(){var e=this,n=e.a*e.d-e.b*e.c;return new t(e.d/n,-e.b/n,-e.c/n,e.a/n,(e.c*e.f-e.d*e.e)/n,(e.b*e.e-e.a*e.f)/n)},n.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},n.translate=function(e,t){return this.add(1,0,0,1,e,t)},n.scale=function(e,t,n,r){return null==t&&(t=e),(n||r)&&this.add(1,0,0,1,n,r),this.add(e,0,0,t,0,0),(n||r)&&this.add(1,0,0,1,-n,-r),this},n.rotate=function(t,n,r){t=e.rad(t),n=n||0,r=r||0;var o=+i.cos(t).toFixed(9),a=+i.sin(t).toFixed(9);return this.add(o,a,-a,o,n,r),this.add(1,0,0,1,-n,-r)},n.x=function(e,t){return e*this.a+t*this.c+this.e},n.y=function(e,t){return e*this.b+t*this.d+this.f},n.get=function(e){return+this[r.fromCharCode(97+e)].toFixed(4)},n.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")"},n.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},n.determinant=function(){return this.a*this.d-this.b*this.c},n.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=i.sqrt(a(n[0])),s(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=i.sqrt(a(n[1])),s(n[1]),t.shear/=t.scaley,this.determinant()<0&&(t.scalex=-t.scalex);var r=-n[0][1],o=n[1][1];return 0>o?(t.rotate=e.deg(i.acos(o)),0>r&&(t.rotate=360-t.rotate)):t.rotate=e.deg(i.asin(r)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},n.toTransformString=function(e){var t=e||this.split();return+t.shear.toFixed(9)?"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]:(t.scalex=+t.scalex.toFixed(4),t.scaley=+t.scaley.toFixed(4),t.rotate=+t.rotate.toFixed(4),(t.dx||t.dy?"t"+[+t.dx.toFixed(4),+t.dy.toFixed(4)]:o)+(1!=t.scalex||1!=t.scaley?"s"+[t.scalex,t.scaley,0,0]:o)+(t.rotate?"r"+[+t.rotate.toFixed(4),0,0]:o))}}(t.prototype),e.Matrix=t,e.matrix=function(e,n,r,i,o,a){return new t(e,n,r,i,o,a)}}),r.plugin(function(e,n,r,i,o){function a(r){return function(i){if(t.stop(),i instanceof o&&1==i.node.childNodes.length&&("radialGradient"==i.node.firstChild.tagName||"linearGradient"==i.node.firstChild.tagName||"pattern"==i.node.firstChild.tagName)&&(i=i.node.firstChild,d(this).appendChild(i),i=f(i)),i instanceof n)if("radialGradient"==i.type||"linearGradient"==i.type||"pattern"==i.type){i.node.id||g(i.node,{id:i.id});var a=m(i.node.id)}else a=i.attr(r);else if(a=e.color(i),a.error){var s=e(d(this).ownerSVGElement).gradient(i);s?(s.node.id||g(s.node,{id:s.id}),a=m(s.node.id)):a=i}else a=v(a);var l={};l[r]=a,g(this.node,l),this.node.style[r]=w}}function s(e){t.stop(),e==+e&&(e+="px"),this.node.style.fontSize=e}function l(e){for(var t=[],n=e.childNodes,r=0,i=n.length;i>r;r++){var o=n[r];3==o.nodeType&&t.push(o.nodeValue),"tspan"==o.tagName&&t.push(1==o.childNodes.length&&3==o.firstChild.nodeType?o.firstChild.nodeValue:l(o))}return t}function u(){return t.stop(),this.node.style.fontSize}var c=e._.make,f=e._.wrap,p=e.is,d=e._.getSomeDefs,h=/^url\(#?([^)]+)\)$/,g=e._.$,m=e.url,v=String,y=e._.separator,w="";t.on("snap.util.attr.mask",function(e){if(e instanceof n||e instanceof o){if(t.stop(),e instanceof o&&1==e.node.childNodes.length&&(e=e.node.firstChild,d(this).appendChild(e),e=f(e)),"mask"==e.type)var r=e;else r=c("mask",d(this)),r.node.appendChild(e.node);!r.node.id&&g(r.node,{id:r.id}),g(this.node,{mask:m(r.id)})}}),function(e){t.on("snap.util.attr.clip",e),t.on("snap.util.attr.clip-path",e),t.on("snap.util.attr.clipPath",e)}(function(e){if(e instanceof n||e instanceof o){if(t.stop(),"clipPath"==e.type)var r=e;else r=c("clipPath",d(this)),r.node.appendChild(e.node),!r.node.id&&g(r.node,{id:r.id});g(this.node,{"clip-path":m(r.id)})}}),t.on("snap.util.attr.fill",a("fill")),t.on("snap.util.attr.stroke",a("stroke"));var x=/^([lr])(?:\(([^)]*)\))?(.*)$/i;t.on("snap.util.grad.parse",function(e){e=v(e);var t=e.match(x);if(!t)return null;var n=t[1],r=t[2],i=t[3];return r=r.split(/\s*,\s*/).map(function(e){return+e==e?+e:e}),1==r.length&&0==r[0]&&(r=[]),i=i.split("-"),i=i.map(function(e){e=e.split(":");var t={color:e[0]};return e[1]&&(t.offset=parseFloat(e[1])),t}),{type:n,params:r,stops:i}}),t.on("snap.util.attr.d",function(n){t.stop(),p(n,"array")&&p(n[0],"array")&&(n=e.path.toString.call(n)),n=v(n),n.match(/[ruo]/i)&&(n=e.path.toAbsolute(n)),g(this.node,{d:n})})(-1),t.on("snap.util.attr.#text",function(e){t.stop(),e=v(e);for(var n=i.doc.createTextNode(e);this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.node.appendChild(n)})(-1),t.on("snap.util.attr.path",function(e){t.stop(),this.attr({d:e})})(-1),t.on("snap.util.attr.class",function(e){t.stop(),this.node.className.baseVal=e})(-1),t.on("snap.util.attr.viewBox",function(e){var n;n=p(e,"object")&&"x"in e?[e.x,e.y,e.width,e.height].join(" "):p(e,"array")?e.join(" "):e,g(this.node,{viewBox:n}),t.stop()})(-1),t.on("snap.util.attr.transform",function(e){this.transform(e),t.stop()})(-1),t.on("snap.util.attr.r",function(e){"rect"==this.type&&(t.stop(),g(this.node,{rx:e,ry:e}))})(-1),t.on("snap.util.attr.textpath",function(e){if(t.stop(),"text"==this.type){var r,i,o;if(!e&&this.textPath){for(i=this.textPath;i.node.firstChild;)this.node.appendChild(i.node.firstChild);return i.remove(),void delete this.textPath}if(p(e,"string")){var a=d(this),s=f(a.parentNode).path(e);a.appendChild(s.node),r=s.id,s.attr({id:r})}else e=f(e),e instanceof n&&(r=e.attr("id"),r||(r=e.id,e.attr({id:r})));if(r)if(i=this.textPath,o=this.node,i)i.attr({"xlink:href":"#"+r});else{for(i=g("textPath",{"xlink:href":"#"+r});o.firstChild;)i.appendChild(o.firstChild);o.appendChild(i),this.textPath=f(i)}}})(-1),t.on("snap.util.attr.text",function(e){if("text"==this.type){for(var n=this.node,r=function(e){var t=g("tspan");if(p(e,"array"))for(var n=0;n<e.length;n++)t.appendChild(r(e[n]));else t.appendChild(i.doc.createTextNode(e));return t.normalize&&t.normalize(),t};n.firstChild;)n.removeChild(n.firstChild);for(var o=r(e);o.firstChild;)n.appendChild(o.firstChild)}t.stop()})(-1),t.on("snap.util.attr.fontSize",s)(-1),t.on("snap.util.attr.font-size",s)(-1),t.on("snap.util.getattr.transform",function(){return t.stop(),this.transform()})(-1),t.on("snap.util.getattr.textpath",function(){return t.stop(),this.textPath})(-1),function(){function n(n){return function(){t.stop();var r=i.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+n);return"none"==r?r:e(i.doc.getElementById(r.match(h)[1]))}}function r(e){return function(n){t.stop();var r="marker"+e.charAt(0).toUpperCase()+e.substring(1);if(""==n||!n)return void(this.node.style[r]="none");if("marker"==n.type){var i=n.node.id;return i||g(n.node,{id:n.id}),void(this.node.style[r]=m(i))}}}t.on("snap.util.getattr.marker-end",n("end"))(-1),t.on("snap.util.getattr.markerEnd",n("end"))(-1),t.on("snap.util.getattr.marker-start",n("start"))(-1),t.on("snap.util.getattr.markerStart",n("start"))(-1),t.on("snap.util.getattr.marker-mid",n("mid"))(-1),t.on("snap.util.getattr.markerMid",n("mid"))(-1),t.on("snap.util.attr.marker-end",r("end"))(-1),t.on("snap.util.attr.markerEnd",r("end"))(-1),t.on("snap.util.attr.marker-start",r("start"))(-1),t.on("snap.util.attr.markerStart",r("start"))(-1),t.on("snap.util.attr.marker-mid",r("mid"))(-1),t.on("snap.util.attr.markerMid",r("mid"))(-1)}(),t.on("snap.util.getattr.r",function(){return"rect"==this.type&&g(this.node,"rx")==g(this.node,"ry")?(t.stop(),g(this.node,"rx")):void 0})(-1),t.on("snap.util.getattr.text",function(){if("text"==this.type||"tspan"==this.type){t.stop();var e=l(this.node);return 1==e.length?e[0]:e}})(-1),t.on("snap.util.getattr.#text",function(){return this.node.textContent})(-1),t.on("snap.util.getattr.viewBox",function(){t.stop();var n=g(this.node,"viewBox");return n?(n=n.split(y),e._.box(+n[0],+n[1],+n[2],+n[3])):void 0})(-1),t.on("snap.util.getattr.points",function(){var e=g(this.node,"points");return t.stop(),e?e.split(y):void 0})(-1),t.on("snap.util.getattr.path",function(){var e=g(this.node,"d");return t.stop(),e})(-1),t.on("snap.util.getattr.class",function(){return this.node.className.baseVal})(-1),t.on("snap.util.getattr.fontSize",u)(-1),t.on("snap.util.getattr.font-size",u)(-1)}),r.plugin(function(){function e(e){return e}function n(e){return function(t){return+t.toFixed(3)+e}}var r={"+":function(e,t){return e+t},"-":function(e,t){return e-t},"/":function(e,t){return e/t},"*":function(e,t){return e*t}},i=String,o=/[a-z]+$/i,a=/^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;t.on("snap.util.attr",function(e){var n=i(e).match(a);if(n){var s=t.nt(),l=s.substring(s.lastIndexOf(".")+1),u=this.attr(l),c={};t.stop();var f=n[3]||"",p=u.match(o),d=r[n[1]];if(p&&p==f?e=d(parseFloat(u),+n[2]):(u=this.asPX(l),e=d(this.asPX(l),this.asPX(l,n[2]+f))),isNaN(u)||isNaN(e))return;c[l]=e,this.attr(c)}})(-10),t.on("snap.util.equal",function(s,l){var u=i(this.attr(s)||""),c=i(l).match(a);if(c){t.stop();var f=c[3]||"",p=u.match(o),d=r[c[1]];return p&&p==f?{from:parseFloat(u),to:d(parseFloat(u),+c[2]),f:n(p)}:(u=this.asPX(s),{from:u,to:d(u,this.asPX(s,c[2]+f)),f:e})}})(-10)}),r.plugin(function(e,n,r,i){var o=r.prototype,a=e.is;o.rect=function(e,t,n,r,i,o){var s;return null==o&&(o=i),a(e,"object")&&"[object Object]"==e?s=e:null!=e&&(s={x:e,y:t,width:n,height:r},null!=i&&(s.rx=i,s.ry=o)),this.el("rect",s)},o.circle=function(e,t,n){var r;return a(e,"object")&&"[object Object]"==e?r=e:null!=e&&(r={cx:e,cy:t,r:n}),this.el("circle",r)};var s=function(){function e(){this.parentNode.removeChild(this)}return function(t,n){var r=i.doc.createElement("img"),o=i.doc.body;r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){n.call(r),r.onload=r.onerror=null,o.removeChild(r)},r.onerror=e,o.appendChild(r),r.src=t}}();o.image=function(t,n,r,i,o){var l=this.el("image");if(a(t,"object")&&"src"in t)l.attr(t);else if(null!=t){var u={"xlink:href":t,preserveAspectRatio:"none"};null!=n&&null!=r&&(u.x=n,u.y=r),null!=i&&null!=o?(u.width=i,u.height=o):s(t,function(){e._.$(l.node,{width:this.offsetWidth,height:this.offsetHeight})}),e._.$(l.node,u)}return l},o.ellipse=function(e,t,n,r){var i;return a(e,"object")&&"[object Object]"==e?i=e:null!=e&&(i={cx:e,cy:t,rx:n,ry:r}),this.el("ellipse",i)},o.path=function(e){var t;return a(e,"object")&&!a(e,"array")?t=e:e&&(t={d:e}),this.el("path",t)},o.group=o.g=function(e){var t=this.el("g");return 1==arguments.length&&e&&!e.type?t.attr(e):arguments.length&&t.add(Array.prototype.slice.call(arguments,0)),t},o.svg=function(e,t,n,r,i,o,s,l){var u={};return a(e,"object")&&null==t?u=e:(null!=e&&(u.x=e),null!=t&&(u.y=t),null!=n&&(u.width=n),null!=r&&(u.height=r),null!=i&&null!=o&&null!=s&&null!=l&&(u.viewBox=[i,o,s,l])),this.el("svg",u)},o.mask=function(e){var t=this.el("mask");return 1==arguments.length&&e&&!e.type?t.attr(e):arguments.length&&t.add(Array.prototype.slice.call(arguments,0)),t},o.ptrn=function(e,t,n,r,i,o,s,l){if(a(e,"object"))var u=e;else arguments.length?(u={},null!=e&&(u.x=e),null!=t&&(u.y=t),null!=n&&(u.width=n),null!=r&&(u.height=r),null!=i&&null!=o&&null!=s&&null!=l&&(u.viewBox=[i,o,s,l])):u={patternUnits:"userSpaceOnUse"};return this.el("pattern",u)},o.use=function(e){return null!=e?(make("use",this.node),e instanceof n&&(e.attr("id")||e.attr({id:ID()}),e=e.attr("id")),this.el("use",{"xlink:href":e})):n.prototype.use.call(this)},o.text=function(e,t,n){var r={};return a(e,"object")?r=e:null!=e&&(r={x:e,y:t,text:n||""}),this.el("text",r)},o.line=function(e,t,n,r){var i={};return a(e,"object")?i=e:null!=e&&(i={x1:e,x2:n,y1:t,y2:r}),this.el("line",i)},o.polyline=function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments,0));var t={};return a(e,"object")&&!a(e,"array")?t=e:null!=e&&(t={points:e}),this.el("polyline",t)},o.polygon=function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments,0));var t={};return a(e,"object")&&!a(e,"array")?t=e:null!=e&&(t={points:e}),this.el("polygon",t)},function(){function n(){return this.selectAll("stop")}function r(t,n){var r=u("stop"),i={offset:+n+"%"};return t=e.color(t),i["stop-color"]=t.hex,t.opacity<1&&(i["stop-opacity"]=t.opacity),u(r,i),this.node.appendChild(r),this}function i(){if("linearGradient"==this.type){var t=u(this.node,"x1")||0,n=u(this.node,"x2")||1,r=u(this.node,"y1")||0,i=u(this.node,"y2")||0;return e._.box(t,r,math.abs(n-t),math.abs(i-r))}var o=this.node.cx||.5,a=this.node.cy||.5,s=this.node.r||0;return e._.box(o-s,a-s,2*s,2*s)}function a(e,n){function r(e,t){for(var n=(t-f)/(e-p),r=p;e>r;r++)a[r].offset=+(+f+n*(r-p)).toFixed(2);p=e,f=t}var i,o=t("snap.util.grad.parse",null,n).firstDefined();if(!o)return null;o.params.unshift(e),i="l"==o.type.toLowerCase()?s.apply(0,o.params):l.apply(0,o.params),o.type!=o.type.toLowerCase()&&u(i.node,{gradientUnits:"userSpaceOnUse"});var a=o.stops,c=a.length,f=0,p=0;c--;for(var d=0;c>d;d++)"offset"in a[d]&&r(d,a[d].offset);for(a[c].offset=a[c].offset||100,r(c,a[c].offset),d=0;c>=d;d++){var h=a[d];i.addStop(h.color,h.offset)}return i}function s(t,o,a,s,l){var c=e._.make("linearGradient",t);return c.stops=n,c.addStop=r,c.getBBox=i,null!=o&&u(c.node,{x1:o,y1:a,x2:s,y2:l}),c}function l(t,o,a,s,l,c){var f=e._.make("radialGradient",t);return f.stops=n,f.addStop=r,f.getBBox=i,null!=o&&u(f.node,{cx:o,cy:a,r:s}),null!=l&&null!=c&&u(f.node,{fx:l,fy:c}),f}var u=e._.$;o.gradient=function(e){return a(this.defs,e)},o.gradientLinear=function(e,t,n,r){return s(this.defs,e,t,n,r)},o.gradientRadial=function(e,t,n,r,i){return l(this.defs,e,t,n,r,i)},o.toString=function(){var t,n=this.node.ownerDocument,r=n.createDocumentFragment(),i=n.createElement("div"),o=this.node.cloneNode(!0);return r.appendChild(i),i.appendChild(o),e._.$(o,{xmlns:"http://www.w3.org/2000/svg"}),t=i.innerHTML,r.removeChild(r.firstChild),t},o.clear=function(){for(var e,t=this.node.firstChild;t;)e=t.nextSibling,"defs"!=t.tagName?t.parentNode.removeChild(t):o.clear.call({node:t}),t=e}}()}),r.plugin(function(e,t){function n(e){var t=n.ps=n.ps||{};return t[e]?t[e].sleep=100:t[e]={sleep:100},setTimeout(function(){for(var n in t)t[O](n)&&n!=e&&(t[n].sleep--,!t[n].sleep&&delete t[n])}),t[e]}function r(e,t,n,r){return null==e&&(e=t=n=r=0),null==t&&(t=e.y,n=e.width,r=e.height,e=e.x),{x:e,y:t,width:n,w:n,height:r,h:r,x2:e+n,y2:t+r,cx:e+n/2,cy:t+r/2,r1:R.min(n,r)/2,r2:R.max(n,r)/2,r0:R.sqrt(n*n+r*r)/2,path:S(e,t,n,r),vb:[e,t,n,r].join(" ")}}function i(){return this.join(",").replace(F,"$1")}function o(e){var t=D(e);return t.toString=i,t}function a(e,t,n,r,i,o,a,s,u){return null==u?d(e,t,n,r,i,o,a,s):l(e,t,n,r,i,o,a,s,h(e,t,n,r,i,o,a,s,u))}function s(n,r){function i(e){return+(+e).toFixed(3)}return e._.cacher(function(e,o,s){e instanceof t&&(e=e.attr("d")),e=N(e);for(var u,c,f,p,d,h="",g={},m=0,v=0,y=e.length;y>v;v++){if(f=e[v],"M"==f[0])u=+f[1],c=+f[2];else{if(p=a(u,c,f[1],f[2],f[3],f[4],f[5],f[6]),m+p>o){if(r&&!g.start){if(d=a(u,c,f[1],f[2],f[3],f[4],f[5],f[6],o-m),h+=["C"+i(d.start.x),i(d.start.y),i(d.m.x),i(d.m.y),i(d.x),i(d.y)],s)return h;g.start=h,h=["M"+i(d.x),i(d.y)+"C"+i(d.n.x),i(d.n.y),i(d.end.x),i(d.end.y),i(f[5]),i(f[6])].join(),m+=p,u=+f[5],c=+f[6];continue}if(!n&&!r)return d=a(u,c,f[1],f[2],f[3],f[4],f[5],f[6],o-m)}m+=p,u=+f[5],c=+f[6]}h+=f.shift()+f}return g.end=h,d=n?m:r?g:l(u,c,f[0],f[1],f[2],f[3],f[4],f[5],1)},null,e._.clone)}function l(e,t,n,r,i,o,a,s,l){var u=1-l,c=W(u,3),f=W(u,2),p=l*l,d=p*l,h=c*e+3*f*l*n+3*u*l*l*i+d*a,g=c*t+3*f*l*r+3*u*l*l*o+d*s,m=e+2*l*(n-e)+p*(i-2*n+e),v=t+2*l*(r-t)+p*(o-2*r+t),y=n+2*l*(i-n)+p*(a-2*i+n),w=r+2*l*(o-r)+p*(s-2*o+r),x=u*e+l*n,b=u*t+l*r,S=u*i+l*a,T=u*o+l*s,C=90-180*R.atan2(m-y,v-w)/q;return{x:h,y:g,m:{x:m,y:v},n:{x:y,y:w},start:{x:x,y:b},end:{x:S,y:T},alpha:C}}function u(t,n,i,o,a,s,l,u){e.is(t,"array")||(t=[t,n,i,o,a,s,l,u]);var c=A.apply(null,t);return r(c.min.x,c.min.y,c.max.x-c.min.x,c.max.y-c.min.y)}function c(e,t,n){return t>=e.x&&t<=e.x+e.width&&n>=e.y&&n<=e.y+e.height}function f(e,t){return e=r(e),t=r(t),c(t,e.x,e.y)||c(t,e.x2,e.y)||c(t,e.x,e.y2)||c(t,e.x2,e.y2)||c(e,t.x,t.y)||c(e,t.x2,t.y)||c(e,t.x,t.y2)||c(e,t.x2,t.y2)||(e.x<t.x2&&e.x>t.x||t.x<e.x2&&t.x>e.x)&&(e.y<t.y2&&e.y>t.y||t.y<e.y2&&t.y>e.y)}function p(e,t,n,r,i){var o=-3*t+9*n-9*r+3*i,a=e*o+6*t-12*n+6*r;return e*a-3*t+3*n}function d(e,t,n,r,i,o,a,s,l){null==l&&(l=1),l=l>1?1:0>l?0:l;for(var u=l/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],d=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],h=0,g=0;c>g;g++){var m=u*f[g]+u,v=p(m,e,n,i,a),y=p(m,t,r,o,s),w=v*v+y*y;h+=d[g]*R.sqrt(w)}return u*h}function h(e,t,n,r,i,o,a,s,l){if(!(0>l||d(e,t,n,r,i,o,a,s)<l)){var u,c=1,f=c/2,p=c-f,h=.01;for(u=d(e,t,n,r,i,o,a,s,p);z(u-l)>h;)f/=2,p+=(l>u?1:-1)*f,u=d(e,t,n,r,i,o,a,s,p);return p}}function g(e,t,n,r,i,o,a,s){if(!($(e,n)<H(i,a)||H(e,n)>$(i,a)||$(t,r)<H(o,s)||H(t,r)>$(o,s))){var l=(e*r-t*n)*(i-a)-(e-n)*(i*s-o*a),u=(e*r-t*n)*(o-s)-(t-r)*(i*s-o*a),c=(e-n)*(o-s)-(t-r)*(i-a);if(c){var f=l/c,p=u/c,d=+f.toFixed(2),h=+p.toFixed(2);if(!(d<+H(e,n).toFixed(2)||d>+$(e,n).toFixed(2)||d<+H(i,a).toFixed(2)||d>+$(i,a).toFixed(2)||h<+H(t,r).toFixed(2)||h>+$(t,r).toFixed(2)||h<+H(o,s).toFixed(2)||h>+$(o,s).toFixed(2)))return{x:f,y:p}}}}function m(e,t,n){var r=u(e),i=u(t);if(!f(r,i))return n?0:[];for(var o=d.apply(0,e),a=d.apply(0,t),s=~~(o/8),c=~~(a/8),p=[],h=[],m={},v=n?0:[],y=0;s+1>y;y++){var w=l.apply(0,e.concat(y/s));p.push({x:w.x,y:w.y,t:y/s})}for(y=0;c+1>y;y++)w=l.apply(0,t.concat(y/c)),h.push({x:w.x,y:w.y,t:y/c});for(y=0;s>y;y++)for(var x=0;c>x;x++){var b=p[y],S=p[y+1],T=h[x],C=h[x+1],k=z(S.x-b.x)<.001?"y":"x",_=z(C.x-T.x)<.001?"y":"x",E=g(b.x,b.y,S.x,S.y,T.x,T.y,C.x,C.y);if(E){if(m[E.x.toFixed(4)]==E.y.toFixed(4))continue;m[E.x.toFixed(4)]=E.y.toFixed(4);var M=b.t+z((E[k]-b[k])/(S[k]-b[k]))*(S.t-b.t),A=T.t+z((E[_]-T[_])/(C[_]-T[_]))*(C.t-T.t);M>=0&&1>=M&&A>=0&&1>=A&&(n?v++:v.push({x:E.x,y:E.y,t1:M,t2:A}))}}return v}function v(e,t){return w(e,t)}function y(e,t){return w(e,t,1)}function w(e,t,n){e=N(e),t=N(t);for(var r,i,o,a,s,l,u,c,f,p,d=n?0:[],h=0,g=e.length;g>h;h++){var v=e[h];if("M"==v[0])r=s=v[1],i=l=v[2];else{"C"==v[0]?(f=[r,i].concat(v.slice(1)),r=f[6],i=f[7]):(f=[r,i,r,i,s,l,s,l],r=s,i=l);for(var y=0,w=t.length;w>y;y++){var x=t[y];if("M"==x[0])o=u=x[1],a=c=x[2];else{"C"==x[0]?(p=[o,a].concat(x.slice(1)),o=p[6],a=p[7]):(p=[o,a,o,a,u,c,u,c],o=u,a=c);var b=m(f,p,n);if(n)d+=b;else{for(var S=0,T=b.length;T>S;S++)b[S].segment1=h,b[S].segment2=y,b[S].bez1=f,b[S].bez2=p;d=d.concat(b)}}}}}return d}function x(e,t,n){var r=b(e);return c(r,t,n)&&w(e,[["M",t,n],["H",r.x2+10]],1)%2==1}function b(e){var t=n(e);if(t.bbox)return D(t.bbox);if(!e)return r();e=N(e);for(var i,o=0,a=0,s=[],l=[],u=0,c=e.length;c>u;u++)if(i=e[u],"M"==i[0])o=i[1],a=i[2],s.push(o),l.push(a);else{var f=A(o,a,i[1],i[2],i[3],i[4],i[5],i[6]);s=s.concat(f.min.x,f.max.x),l=l.concat(f.min.y,f.max.y),o=i[5],a=i[6]}var p=H.apply(0,s),d=H.apply(0,l),h=$.apply(0,s),g=$.apply(0,l),m=r(p,d,h-p,g-d);return t.bbox=D(m),m}function S(e,t,n,r,o){if(o)return[["M",+e+ +o,t],["l",n-2*o,0],["a",o,o,0,0,1,o,o],["l",0,r-2*o],["a",o,o,0,0,1,-o,o],["l",2*o-n,0],["a",o,o,0,0,1,-o,-o],["l",0,2*o-r],["a",o,o,0,0,1,o,-o],["z"]];var a=[["M",e,t],["l",n,0],["l",0,r],["l",-n,0],["z"]];return a.toString=i,a}function T(e,t,n,r,o){if(null==o&&null==r&&(r=n),e=+e,t=+t,n=+n,r=+r,null!=o)var a=Math.PI/180,s=e+n*Math.cos(-r*a),l=e+n*Math.cos(-o*a),u=t+n*Math.sin(-r*a),c=t+n*Math.sin(-o*a),f=[["M",s,u],["A",n,n,0,+(o-r>180),0,l,c]];else f=[["M",e,t],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return f.toString=i,f}function C(t){var r=n(t),a=String.prototype.toLowerCase;if(r.rel)return o(r.rel);e.is(t,"array")&&e.is(t&&t[0],"array")||(t=e.parsePathString(t));var s=[],l=0,u=0,c=0,f=0,p=0;"M"==t[0][0]&&(l=t[0][1],u=t[0][2],c=l,f=u,p++,s.push(["M",l,u]));for(var d=p,h=t.length;h>d;d++){var g=s[d]=[],m=t[d];if(m[0]!=a.call(m[0]))switch(g[0]=a.call(m[0]),g[0]){case"a":g[1]=m[1],g[2]=m[2],g[3]=m[3],g[4]=m[4],g[5]=m[5],g[6]=+(m[6]-l).toFixed(3),g[7]=+(m[7]-u).toFixed(3);break;case"v":g[1]=+(m[1]-u).toFixed(3);break;case"m":c=m[1],f=m[2];default:for(var v=1,y=m.length;y>v;v++)g[v]=+(m[v]-(v%2?l:u)).toFixed(3)}else{g=s[d]=[],"m"==m[0]&&(c=m[1]+l,f=m[2]+u);for(var w=0,x=m.length;x>w;w++)s[d][w]=m[w]}var b=s[d].length;switch(s[d][0]){case"z":l=c,u=f;break;case"h":l+=+s[d][b-1];break;case"v":u+=+s[d][b-1];break;default:l+=+s[d][b-2],u+=+s[d][b-1]}}return s.toString=i,r.rel=o(s),s}function k(t){var r=n(t);if(r.abs)return o(r.abs);if(P(t,"array")&&P(t&&t[0],"array")||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var a,s=[],l=0,u=0,c=0,f=0,p=0;"M"==t[0][0]&&(l=+t[0][1],u=+t[0][2],c=l,f=u,p++,s[0]=["M",l,u]);for(var d,h,g=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),m=p,v=t.length;v>m;m++){if(s.push(d=[]),h=t[m],a=h[0],a!=a.toUpperCase())switch(d[0]=a.toUpperCase(),d[0]){case"A":d[1]=h[1],d[2]=h[2],d[3]=h[3],d[4]=h[4],d[5]=h[5],d[6]=+h[6]+l,d[7]=+h[7]+u;break;case"V":d[1]=+h[1]+u;break;case"H":d[1]=+h[1]+l;break;case"R":for(var y=[l,u].concat(h.slice(1)),w=2,x=y.length;x>w;w++)y[w]=+y[w]+l,y[++w]=+y[w]+u;s.pop(),s=s.concat(I(y,g));break;case"O":s.pop(),y=T(l,u,h[1],h[2]),y.push(y[0]),s=s.concat(y);break;case"U":s.pop(),s=s.concat(T(l,u,h[1],h[2],h[3])),d=["U"].concat(s[s.length-1].slice(-2));break;case"M":c=+h[1]+l,f=+h[2]+u;default:for(w=1,x=h.length;x>w;w++)d[w]=+h[w]+(w%2?l:u)}else if("R"==a)y=[l,u].concat(h.slice(1)),s.pop(),s=s.concat(I(y,g)),d=["R"].concat(h.slice(-2));else if("O"==a)s.pop(),y=T(l,u,h[1],h[2]),y.push(y[0]),s=s.concat(y);else if("U"==a)s.pop(),s=s.concat(T(l,u,h[1],h[2],h[3])),d=["U"].concat(s[s.length-1].slice(-2));else for(var b=0,S=h.length;S>b;b++)d[b]=h[b];if(a=a.toUpperCase(),"O"!=a)switch(d[0]){case"Z":l=+c,u=+f;break;case"H":l=d[1];break;case"V":u=d[1];break;case"M":c=d[d.length-2],f=d[d.length-1];default:l=d[d.length-2],u=d[d.length-1]}}return s.toString=i,r.abs=o(s),s}function _(e,t,n,r){return[e,t,n,r,n,r]}function E(e,t,n,r,i,o){var a=1/3,s=2/3;return[a*e+s*n,a*t+s*r,a*i+s*n,a*o+s*r,i,o]}function M(t,n,r,i,o,a,s,l,u,c){var f,p=120*q/180,d=q/180*(+o||0),h=[],g=e._.cacher(function(e,t,n){var r=e*R.cos(n)-t*R.sin(n),i=e*R.sin(n)+t*R.cos(n);return{x:r,y:i}});if(c)C=c[0],k=c[1],S=c[2],T=c[3];else{f=g(t,n,-d),t=f.x,n=f.y,f=g(l,u,-d),l=f.x,u=f.y;var m=(R.cos(q/180*o),R.sin(q/180*o),(t-l)/2),v=(n-u)/2,y=m*m/(r*r)+v*v/(i*i);y>1&&(y=R.sqrt(y),r=y*r,i=y*i);var w=r*r,x=i*i,b=(a==s?-1:1)*R.sqrt(z((w*x-w*v*v-x*m*m)/(w*v*v+x*m*m))),S=b*r*v/i+(t+l)/2,T=b*-i*m/r+(n+u)/2,C=R.asin(((n-T)/i).toFixed(9)),k=R.asin(((u-T)/i).toFixed(9));C=S>t?q-C:C,k=S>l?q-k:k,0>C&&(C=2*q+C),0>k&&(k=2*q+k),s&&C>k&&(C-=2*q),!s&&k>C&&(k-=2*q)}var _=k-C;if(z(_)>p){var E=k,A=l,N=u;k=C+p*(s&&k>C?1:-1),l=S+r*R.cos(k),u=T+i*R.sin(k),h=M(l,u,r,i,o,0,s,A,N,[k,E,S,T])}_=k-C;var L=R.cos(C),I=R.sin(C),j=R.cos(k),P=R.sin(k),D=R.tan(_/4),O=4/3*r*D,F=4/3*i*D,B=[t,n],H=[t+O*I,n-F*L],$=[l+O*P,u-F*j],W=[l,u];if(H[0]=2*B[0]-H[0],H[1]=2*B[1]-H[1],c)return[H,$,W].concat(h);h=[H,$,W].concat(h).join().split(",");for(var V=[],G=0,X=h.length;X>G;G++)V[G]=G%2?g(h[G-1],h[G],d).y:g(h[G],h[G+1],d).x;return V}function A(e,t,n,r,i,o,a,s){for(var l,u,c,f,p,d,h,g,m=[],v=[[],[]],y=0;2>y;++y)if(0==y?(u=6*e-12*n+6*i,l=-3*e+9*n-9*i+3*a,c=3*n-3*e):(u=6*t-12*r+6*o,l=-3*t+9*r-9*o+3*s,c=3*r-3*t),z(l)<1e-12){if(z(u)<1e-12)continue;f=-c/u,f>0&&1>f&&m.push(f)}else h=u*u-4*c*l,g=R.sqrt(h),0>h||(p=(-u+g)/(2*l),p>0&&1>p&&m.push(p),d=(-u-g)/(2*l),d>0&&1>d&&m.push(d));for(var w,x=m.length,b=x;x--;)f=m[x],w=1-f,v[0][x]=w*w*w*e+3*w*w*f*n+3*w*f*f*i+f*f*f*a,v[1][x]=w*w*w*t+3*w*w*f*r+3*w*f*f*o+f*f*f*s;return v[0][b]=e,v[1][b]=t,v[0][b+1]=a,v[1][b+1]=s,v[0].length=v[1].length=b+2,{min:{x:H.apply(0,v[0]),y:H.apply(0,v[1])},max:{x:$.apply(0,v[0]),y:$.apply(0,v[1])}}}function N(e,t){var r=!t&&n(e);if(!t&&r.curve)return o(r.curve);for(var i=k(e),a=t&&k(t),s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},l={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},u=(function(e,t,n){var r,i;if(!e)return["C",t.x,t.y,t.x,t.y,t.x,t.y];switch(!(e[0]in{T:1,Q:1})&&(t.qx=t.qy=null),e[0]){case"M":t.X=e[1],t.Y=e[2];break;case"A":e=["C"].concat(M.apply(0,[t.x,t.y].concat(e.slice(1))));break;case"S":"C"==n||"S"==n?(r=2*t.x-t.bx,i=2*t.y-t.by):(r=t.x,i=t.y),e=["C",r,i].concat(e.slice(1));break;case"T":"Q"==n||"T"==n?(t.qx=2*t.x-t.qx,t.qy=2*t.y-t.qy):(t.qx=t.x,t.qy=t.y),e=["C"].concat(E(t.x,t.y,t.qx,t.qy,e[1],e[2]));break;case"Q":t.qx=e[1],t.qy=e[2],e=["C"].concat(E(t.x,t.y,e[1],e[2],e[3],e[4]));break;case"L":e=["C"].concat(_(t.x,t.y,e[1],e[2]));break;case"H":e=["C"].concat(_(t.x,t.y,e[1],t.y));break;case"V":e=["C"].concat(_(t.x,t.y,t.x,e[1]));break;case"Z":e=["C"].concat(_(t.x,t.y,t.X,t.Y))}return e}),c=function(e,t){if(e[t].length>7){e[t].shift();for(var n=e[t];n.length;)p[t]="A",a&&(d[t]="A"),e.splice(t++,0,["C"].concat(n.splice(0,6)));e.splice(t,1),v=$(i.length,a&&a.length||0)}},f=function(e,t,n,r,o){e&&t&&"M"==e[o][0]&&"M"!=t[o][0]&&(t.splice(o,0,["M",r.x,r.y]),n.bx=0,n.by=0,n.x=e[o][1],n.y=e[o][2],v=$(i.length,a&&a.length||0))},p=[],d=[],h="",g="",m=0,v=$(i.length,a&&a.length||0);v>m;m++){i[m]&&(h=i[m][0]),"C"!=h&&(p[m]=h,m&&(g=p[m-1])),i[m]=u(i[m],s,g),"A"!=p[m]&&"C"==h&&(p[m]="C"),c(i,m),a&&(a[m]&&(h=a[m][0]),"C"!=h&&(d[m]=h,m&&(g=d[m-1])),a[m]=u(a[m],l,g),"A"!=d[m]&&"C"==h&&(d[m]="C"),c(a,m)),f(i,a,s,l,m),f(a,i,l,s,m);var y=i[m],w=a&&a[m],x=y.length,b=a&&w.length;s.x=y[x-2],s.y=y[x-1],s.bx=B(y[x-4])||s.x,s.by=B(y[x-3])||s.y,l.bx=a&&(B(w[b-4])||l.x),l.by=a&&(B(w[b-3])||l.y),l.x=a&&w[b-2],l.y=a&&w[b-1]}return a||(r.curve=o(i)),a?[i,a]:i}function L(e,t){if(!t)return e;var n,r,i,o,a,s,l;for(e=N(e),i=0,a=e.length;a>i;i++)for(l=e[i],o=1,s=l.length;s>o;o+=2)n=t.x(l[o],l[o+1]),r=t.y(l[o],l[o+1]),l[o]=n,l[o+1]=r;return e}function I(e,t){for(var n=[],r=0,i=e.length;i-2*!t>r;r+=2){var o=[{x:+e[r-2],y:+e[r-1]},{x:+e[r],y:+e[r+1]},{x:+e[r+2],y:+e[r+3]},{x:+e[r+4],y:+e[r+5]}];t?r?i-4==r?o[3]={x:+e[0],y:+e[1]}:i-2==r&&(o[2]={x:+e[0],y:+e[1]},o[3]={x:+e[2],y:+e[3]}):o[0]={x:+e[i-2],y:+e[i-1]}:i-4==r?o[3]=o[2]:r||(o[0]={x:+e[r],y:+e[r+1]}),n.push(["C",(-o[0].x+6*o[1].x+o[2].x)/6,(-o[0].y+6*o[1].y+o[2].y)/6,(o[1].x+6*o[2].x-o[3].x)/6,(o[1].y+6*o[2].y-o[3].y)/6,o[2].x,o[2].y])}return n}var j=t.prototype,P=e.is,D=e._.clone,O="hasOwnProperty",F=/,?([a-z]),?/gi,B=parseFloat,R=Math,q=R.PI,H=R.min,$=R.max,W=R.pow,z=R.abs,V=s(1),G=s(),X=s(0,1),Y=e._unit2px,U={path:function(e){return e.attr("path")},circle:function(e){var t=Y(e);return T(t.cx,t.cy,t.r)},ellipse:function(e){var t=Y(e);return T(t.cx||0,t.cy||0,t.rx,t.ry)},rect:function(e){var t=Y(e);return S(t.x||0,t.y||0,t.width,t.height,t.rx,t.ry)},image:function(e){var t=Y(e);return S(t.x||0,t.y||0,t.width,t.height)},line:function(e){return"M"+[e.attr("x1")||0,e.attr("y1")||0,e.attr("x2"),e.attr("y2")]},polyline:function(e){return"M"+e.attr("points")},polygon:function(e){return"M"+e.attr("points")+"z"},deflt:function(e){var t=e.node.getBBox();return S(t.x,t.y,t.width,t.height)}};e.path=n,e.path.getTotalLength=V,e.path.getPointAtLength=G,e.path.getSubpath=function(e,t,n){if(this.getTotalLength(e)-n<1e-6)return X(e,t).end;var r=X(e,n,1);return t?X(r,t).end:r},j.getTotalLength=function(){return this.node.getTotalLength?this.node.getTotalLength():void 0},j.getPointAtLength=function(e){return G(this.attr("d"),e)},j.getSubpath=function(t,n){return e.path.getSubpath(this.attr("d"),t,n)},e._.box=r,e.path.findDotsAtSegment=l,e.path.bezierBBox=u,e.path.isPointInsideBBox=c,e.path.isBBoxIntersect=f,e.path.intersection=v,e.path.intersectionNumber=y,e.path.isPointInside=x,e.path.getBBox=b,e.path.get=U,e.path.toRelative=C,e.path.toAbsolute=k,e.path.toCubic=N,e.path.map=L,e.path.toString=i,e.path.clone=o}),r.plugin(function(e){var r=Math.max,i=Math.min,o=function(e){if(this.items=[],this.bindings={},this.length=0,this.type="set",e)for(var t=0,n=e.length;n>t;t++)e[t]&&(this[this.items.length]=this.items[this.items.length]=e[t],this.length++)},a=o.prototype;a.push=function(){for(var e,t,n=0,r=arguments.length;r>n;n++)e=arguments[n],e&&(t=this.items.length,this[t]=this.items[t]=e,this.length++);return this},a.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},a.forEach=function(e,t){for(var n=0,r=this.items.length;r>n;n++)if(e.call(t,this.items[n],n)===!1)return this;return this},a.animate=function(r,i,o,a){"function"!=typeof o||o.length||(a=o,o=n.linear),r instanceof e._.Animation&&(a=r.callback,o=r.easing,i=o.dur,r=r.attr);var s=arguments;if(e.is(r,"array")&&e.is(s[s.length-1],"array"))var l=!0;var u,c=function(){u?this.b=u:u=this.b},f=0,p=a&&function(){f++==this.length&&a.call(this)};return this.forEach(function(e,n){t.once("snap.animcreated."+e.id,c),l?s[n]&&e.animate.apply(e,s[n]):e.animate(r,i,o,p)})},a.remove=function(){for(;this.length;)this.pop().remove();return this},a.bind=function(e,t,n){var r={};if("function"==typeof t)this.bindings[e]=t;else{var i=n||e;this.bindings[e]=function(e){r[i]=e,t.attr(r)}}return this},a.attr=function(e){var t={};for(var n in e)this.bindings[n]?this.bindings[n](e[n]):t[n]=e[n];for(var r=0,i=this.items.length;i>r;r++)this.items[r].attr(t);return this},a.clear=function(){for(;this.length;)this.pop()},a.splice=function(e,t){e=0>e?r(this.length+e,0):e,t=r(0,i(this.length-e,t));var n,a=[],s=[],l=[];for(n=2;n<arguments.length;n++)l.push(arguments[n]);for(n=0;t>n;n++)s.push(this[e+n]);for(;n<this.length-e;n++)a.push(this[e+n]);var u=l.length;for(n=0;n<u+a.length;n++)this.items[e+n]=this[e+n]=u>n?l[n]:a[n-u];for(n=this.items.length=this.length-=t-u;this[n];)delete this[n++];return new o(s)},a.exclude=function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]==e)return this.splice(t,1),!0;return!1},a.insertAfter=function(e){for(var t=this.items.length;t--;)this.items[t].insertAfter(e);return this},a.getBBox=function(){for(var e=[],t=[],n=[],o=[],a=this.items.length;a--;)if(!this.items[a].removed){var s=this.items[a].getBBox();e.push(s.x),t.push(s.y),n.push(s.x+s.width),o.push(s.y+s.height)}return e=i.apply(0,e),t=i.apply(0,t),n=r.apply(0,n),o=r.apply(0,o),{x:e,y:t,x2:n,y2:o,width:n-e,height:o-t,cx:e+(n-e)/2,cy:t+(o-t)/2}},a.clone=function(e){e=new o;for(var t=0,n=this.items.length;n>t;t++)e.push(this.items[t].clone());return e},a.toString=function(){return"Snap‘s set"},a.type="set",e.set=function(){var e=new o;return arguments.length&&e.push.apply(e,Array.prototype.slice.call(arguments,0)),e}}),r.plugin(function(e,n){function r(e){var t=e[0];switch(t.toLowerCase()){case"t":return[t,0,0];case"m":return[t,1,0,0,1,0,0];case"r":return 4==e.length?[t,0,e[2],e[3]]:[t,0];case"s":return 5==e.length?[t,1,1,e[3],e[4]]:3==e.length?[t,1,1]:[t,1]}}function i(t,n,i){n=p(n).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],n=e.parseTransformString(n)||[];for(var o,a,s,c,f=Math.max(t.length,n.length),d=[],h=[],g=0;f>g;g++){if(s=t[g]||r(n[g]),c=n[g]||r(s),s[0]!=c[0]||"r"==s[0].toLowerCase()&&(s[2]!=c[2]||s[3]!=c[3])||"s"==s[0].toLowerCase()&&(s[3]!=c[3]||s[4]!=c[4])){t=e._.transform2matrix(t,i()),n=e._.transform2matrix(n,i()),d=[["m",t.a,t.b,t.c,t.d,t.e,t.f]],h=[["m",n.a,n.b,n.c,n.d,n.e,n.f]];break}for(d[g]=[],h[g]=[],o=0,a=Math.max(s.length,c.length);a>o;o++)o in s&&(d[g][o]=s[o]),o in c&&(h[g][o]=c[o])}return{from:u(d),to:u(h),f:l(d)}}function o(e){return e}function a(e){return function(t){return+t.toFixed(3)+e}}function s(t){return e.rgb(t[0],t[1],t[2])}function l(e){var t,n,r,i,o,a,s=0,l=[];for(t=0,n=e.length;n>t;t++){for(o="[",a=['"'+e[t][0]+'"'],r=1,i=e[t].length;i>r;r++)a[r]="val["+s++ +"]";
o+=a+"]",l[t]=o}return Function("val","return Snap.path.toString.call(["+l+"])")}function u(e){for(var t=[],n=0,r=e.length;r>n;n++)for(var i=1,o=e[n].length;o>i;i++)t.push(e[n][i]);return t}var c={},f=/[a-z]+$/i,p=String;c.stroke=c.fill="colour",n.prototype.equal=function(e,n){return t("snap.util.equal",this,e,n).firstDefined()},t.on("snap.util.equal",function(t,n){var r,d,h=p(this.attr(t)||""),g=this;if(h==+h&&n==+n)return{from:+h,to:+n,f:o};if("colour"==c[t])return r=e.color(h),d=e.color(n),{from:[r.r,r.g,r.b,r.opacity],to:[d.r,d.g,d.b,d.opacity],f:s};if("transform"==t||"gradientTransform"==t||"patternTransform"==t)return n instanceof e.Matrix&&(n=n.toTransformString()),e._.rgTransform.test(n)||(n=e._.svgTransform2string(n)),i(h,n,function(){return g.getBBox(1)});if("d"==t||"path"==t)return r=e.path.toCubic(h,n),{from:u(r[0]),to:u(r[1]),f:l(r[0])};if("points"==t)return r=p(h).split(e._.separator),d=p(n).split(e._.separator),{from:r,to:d,f:function(e){return e}};aUnit=h.match(f);var m=p(n).match(f);return aUnit&&aUnit==m?{from:parseFloat(h),to:parseFloat(n),f:a(aUnit)}:{from:this.asPX(t),to:this.asPX(t,n),f:o}})}),r.plugin(function(e,n,r,i){for(var o=n.prototype,a="hasOwnProperty",s=("createTouch"in i.doc),l=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},c=(function(e,t){var n="y"==e?"scrollTop":"scrollLeft",r=t&&t.node?t.node.ownerDocument:i.doc;return r[n in r.documentElement?"documentElement":"body"][n]}),f=function(){this.returnValue=!1},p=function(){return this.originalEvent.preventDefault()},d=function(){this.cancelBubble=!0},h=function(){return this.originalEvent.stopPropagation()},g=function(){return i.doc.addEventListener?function(e,t,n,r){var i=s&&u[t]?u[t]:t,o=function(i){var o=c("y",r),l=c("x",r);if(s&&u[a](t))for(var f=0,d=i.targetTouches&&i.targetTouches.length;d>f;f++)if(i.targetTouches[f].target==e||e.contains(i.targetTouches[f].target)){var g=i;i=i.targetTouches[f],i.originalEvent=g,i.preventDefault=p,i.stopPropagation=h;break}var m=i.clientX+l,v=i.clientY+o;return n.call(r,i,m,v)};return t!==i&&e.addEventListener(t,o,!1),e.addEventListener(i,o,!1),function(){return t!==i&&e.removeEventListener(t,o,!1),e.removeEventListener(i,o,!1),!0}}:i.doc.attachEvent?function(e,t,n,r){var i=function(e){e=e||r.node.ownerDocument.window.event;var t=c("y",r),i=c("x",r),o=e.clientX+i,a=e.clientY+t;return e.preventDefault=e.preventDefault||f,e.stopPropagation=e.stopPropagation||d,n.call(r,e,o,a)};e.attachEvent("on"+t,i);var o=function(){return e.detachEvent("on"+t,i),!0};return o}:void 0}(),m=[],v=function(e){for(var n,r=e.clientX,i=e.clientY,o=c("y"),a=c("x"),l=m.length;l--;){if(n=m[l],s){for(var u,f=e.touches&&e.touches.length;f--;)if(u=e.touches[f],u.identifier==n.el._drag.id||n.el.node.contains(u.target)){r=u.clientX,i=u.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var p=n.el.node;p.nextSibling,p.parentNode,p.style.display,r+=a,i+=o,t("snap.drag.move."+n.el.id,n.move_scope||n.el,r-n.el._drag.x,i-n.el._drag.y,r,i,e)}},y=function(n){e.unmousemove(v).unmouseup(y);for(var r,i=m.length;i--;)r=m[i],r.el._drag={},t("snap.drag.end."+r.el.id,r.end_scope||r.start_scope||r.move_scope||r.el,n);m=[]},w=l.length;w--;)!function(t){e[t]=o[t]=function(n,r){return e.is(n,"function")&&(this.events=this.events||[],this.events.push({name:t,f:n,unbind:g(this.node||document,t,n,r||this)})),this},e["un"+t]=o["un"+t]=function(e){for(var n=this.events||[],r=n.length;r--;)if(n[r].name==t&&(n[r].f==e||!e))return n[r].unbind(),n.splice(r,1),!n.length&&delete this.events,this;return this}}(l[w]);o.hover=function(e,t,n,r){return this.mouseover(e,n).mouseout(t,r||n)},o.unhover=function(e,t){return this.unmouseover(e).unmouseout(t)};var x=[];o.drag=function(n,r,i,o,a,s){function l(l,u,c){(l.originalEvent||l).preventDefault(),this._drag.x=u,this._drag.y=c,this._drag.id=l.identifier,!m.length&&e.mousemove(v).mouseup(y),m.push({el:this,move_scope:o,start_scope:a,end_scope:s}),r&&t.on("snap.drag.start."+this.id,r),n&&t.on("snap.drag.move."+this.id,n),i&&t.on("snap.drag.end."+this.id,i),t("snap.drag.start."+this.id,a||o||this,u,c,l)}if(!arguments.length){var u;return this.drag(function(e,t){this.attr({transform:u+(u?"T":"t")+[e,t]})},function(){u=this.transform().local})}return this._drag={},x.push({el:this,start:l}),this.mousedown(l),this},o.undrag=function(){for(var n=x.length;n--;)x[n].el==this&&(this.unmousedown(x[n].start),x.splice(n,1),t.unbind("snap.drag.*."+this.id));return!x.length&&e.unmousemove(v).unmouseup(y),this}}),r.plugin(function(e,n,r){var i=(n.prototype,r.prototype),o=/^\s*url\((.+)\)/,a=String,s=e._.$;e.filter={},i.filter=function(t){var r=this;"svg"!=r.type&&(r=r.paper);var i=e.parse(a(t)),o=e._.id(),l=(r.node.offsetWidth,r.node.offsetHeight,s("filter"));return s(l,{id:o,filterUnits:"userSpaceOnUse"}),l.appendChild(i.node),r.defs.appendChild(l),new n(l)},t.on("snap.util.getattr.filter",function(){t.stop();var n=s(this.node,"filter");if(n){var r=a(n).match(o);return r&&e.select(r[1])}}),t.on("snap.util.attr.filter",function(r){if(r instanceof n&&"filter"==r.type){t.stop();var i=r.node.id;i||(s(r.node,{id:r.id}),i=r.id),s(this.node,{filter:e.url(i)})}r&&"none"!=r||(t.stop(),this.node.removeAttribute("filter"))}),e.filter.blur=function(t,n){null==t&&(t=2);var r=null==n?t:[t,n];return e.format('<feGaussianBlur stdDeviation="{def}"/>',{def:r})},e.filter.blur.toString=function(){return this()},e.filter.shadow=function(t,n,r,i,o){return"string"==typeof r&&(i=r,o=i,r=4),"string"!=typeof i&&(o=i,i="#000"),i=i||"#000",null==r&&(r=4),null==o&&(o=1),null==t&&(t=0,n=2),null==n&&(n=t),i=e.color(i),e.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:i,dx:t,dy:n,blur:r,opacity:o})},e.filter.shadow.toString=function(){return this()},e.filter.grayscale=function(t){return null==t&&(t=1),e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:.2126+.7874*(1-t),b:.7152-.7152*(1-t),c:.0722-.0722*(1-t),d:.2126-.2126*(1-t),e:.7152+.2848*(1-t),f:.0722-.0722*(1-t),g:.2126-.2126*(1-t),h:.0722+.9278*(1-t)})},e.filter.grayscale.toString=function(){return this()},e.filter.sepia=function(t){return null==t&&(t=1),e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:.393+.607*(1-t),b:.769-.769*(1-t),c:.189-.189*(1-t),d:.349-.349*(1-t),e:.686+.314*(1-t),f:.168-.168*(1-t),g:.272-.272*(1-t),h:.534-.534*(1-t),i:.131+.869*(1-t)})},e.filter.sepia.toString=function(){return this()},e.filter.saturate=function(t){return null==t&&(t=1),e.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-t})},e.filter.saturate.toString=function(){return this()},e.filter.hueRotate=function(t){return t=t||0,e.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:t})},e.filter.hueRotate.toString=function(){return this()},e.filter.invert=function(t){return null==t&&(t=1),e.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:t,amount2:1-t})},e.filter.invert.toString=function(){return this()},e.filter.brightness=function(t){return null==t&&(t=1),e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:t})},e.filter.brightness.toString=function(){return this()},e.filter.contrast=function(t){return null==t&&(t=1),e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:t,amount2:.5-t/2})},e.filter.contrast.toString=function(){return this()}}),r});/*
 * Swiper 2.7.0
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: August 30, 2014
*/
var Swiper=function(e,t){"use strict";function n(e,t){return document.querySelectorAll?(t||document).querySelectorAll(e):jQuery(e,t)}function r(e){return"[object Array]"===Object.prototype.toString.apply(e)?!0:!1}/*==========================================
        Max and Min Positions
    ============================================*/
function i(){var e=L-P;// if (params.loop) a -= containerSize;
return t.freeMode&&(e=L-P),t.slidesPerView>M.slides.length&&!t.centeredSlides&&(e=0),0>e&&(e=0),e}/*==========================================
        Event Listeners
    ============================================*/
function o(){//Keyboard
function e(e){var n=new Image;n.onload=function(){"undefined"!=typeof M&&null!==M&&(void 0!==M.imagesLoaded&&M.imagesLoaded++,M.imagesLoaded===M.imagesToLoad.length&&(M.reInit(),t.onImagesReady&&M.fireCallback(t.onImagesReady,M)))},n.src=e}var r=M.h.addEventListener,i="wrapper"===t.eventTarget?M.wrapper:M.container;if(//Touch Events
M.browser.ie10||M.browser.ie11?(r(i,M.touchEvents.touchStart,g),r(document,M.touchEvents.touchMove,m),r(document,M.touchEvents.touchEnd,v)):(M.support.touch&&(r(i,"touchstart",g),r(i,"touchmove",m),r(i,"touchend",v)),t.simulateTouch&&(r(i,"mousedown",g),r(document,"mousemove",m),r(document,"mouseup",v))),//Resize Event
t.autoResize&&r(window,"resize",M.resizeFix),//Slide Events
a(),//Mousewheel
M._wheelEvent=!1,t.mousewheelControl){if(void 0!==document.onmousewheel&&(M._wheelEvent="mousewheel"),!M._wheelEvent)try{new WheelEvent("wheel"),M._wheelEvent="wheel"}catch(o){}M._wheelEvent||(M._wheelEvent="DOMMouseScroll"),M._wheelEvent&&r(M.container,M._wheelEvent,u)}if(t.keyboardControl&&r(document,"keydown",l),t.updateOnImagesReady){M.imagesToLoad=n("img",M.container);for(var s=0;s<M.imagesToLoad.length;s++)e(M.imagesToLoad[s].getAttribute("src"))}}function a(){var e,r=M.h.addEventListener;//Prevent Links Events
if(t.preventLinks){var i=n("a",M.container);for(e=0;e<i.length;e++)r(i[e],"click",d)}//Release Form Elements
if(t.releaseFormElements){var o=n("input, textarea, select",M.container);for(e=0;e<o.length;e++)r(o[e],M.touchEvents.touchStart,h,!0)}//Slide Clicks & Touches
if(t.onSlideClick)for(e=0;e<M.slides.length;e++)r(M.slides[e],"click",c);if(t.onSlideTouch)for(e=0;e<M.slides.length;e++)r(M.slides[e],M.touchEvents.touchStart,f)}function s(){var e,r=M.h.removeEventListener;//Slide Clicks & Touches
if(t.onSlideClick)for(e=0;e<M.slides.length;e++)r(M.slides[e],"click",c);if(t.onSlideTouch)for(e=0;e<M.slides.length;e++)r(M.slides[e],M.touchEvents.touchStart,f);//Release Form Elements
if(t.releaseFormElements){var i=n("input, textarea, select",M.container);for(e=0;e<i.length;e++)r(i[e],M.touchEvents.touchStart,h,!0)}//Prevent Links Events
if(t.preventLinks){var o=n("a",M.container);for(e=0;e<o.length;e++)r(o[e],"click",d)}}/*==========================================
        Keyboard Control
    ============================================*/
function l(e){var t=e.keyCode||e.charCode;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)){if(37===t||39===t||38===t||40===t){for(var n=!1,r=M.h.getOffset(M.container),i=M.h.windowScroll().left,o=M.h.windowScroll().top,a=M.h.windowWidth(),s=M.h.windowHeight(),l=[[r.left,r.top],[r.left+M.width,r.top],[r.left,r.top+M.height],[r.left+M.width,r.top+M.height]],u=0;u<l.length;u++){var c=l[u];c[0]>=i&&c[0]<=i+a&&c[1]>=o&&c[1]<=o+s&&(n=!0)}if(!n)return}B?((37===t||39===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),39===t&&M.swipeNext(),37===t&&M.swipePrev()):((38===t||40===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&M.swipeNext(),38===t&&M.swipePrev())}}function u(e){var n=M._wheelEvent,r=0;//Opera & IE
if(e.detail)r=-e.detail;else if("mousewheel"===n)if(t.mousewheelControlForceToAxis)if(B){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;r=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;r=e.wheelDeltaY}else r=e.wheelDelta;else if("DOMMouseScroll"===n)r=-e.detail;else if("wheel"===n)if(t.mousewheelControlForceToAxis)if(B){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;r=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;r=-e.deltaY}else r=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY,r*=16;if(t.freeMode){//Freemode or scrollContainer:
var o=M.getWrapperTranslate()+r;// Return page scroll on edge positions
if(o>0&&(o=0),o<-i()&&(o=-i()),M.setWrapperTransition(0),M.setWrapperTranslate(o),M.updateActiveSlide(o),0===o||o===-i())return}else(new Date).getTime()-G>60&&(0>r?M.swipeNext():M.swipePrev()),G=(new Date).getTime();return t.autoplay&&M.stopAutoplay(!0),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function c(e){M.allowSlideClick&&(p(e),M.fireCallback(t.onSlideClick,M,e))}function f(e){p(e),M.fireCallback(t.onSlideTouch,M,e)}function p(e){// IE 6-8 support
if(e.currentTarget)M.clickedSlide=e.currentTarget;else{var n=e.srcElement;do{if(n.className.indexOf(t.slideClass)>-1)break;n=n.parentNode}while(n);M.clickedSlide=n}M.clickedSlideIndex=M.slides.indexOf(M.clickedSlide),M.clickedSlideLoopIndex=M.clickedSlideIndex-(M.loopedSlides||0)}function d(e){return M.allowLinks?void 0:(e.preventDefault?e.preventDefault():e.returnValue=!1,t.preventLinksPropagation&&"stopPropagation"in e&&e.stopPropagation(),!1)}function h(e){return e.stopPropagation?e.stopPropagation():e.returnValue=!1,!1}function g(e){//Exit if slider is already was touched
if(t.preventLinks&&(M.allowLinks=!0),M.isTouched||t.onlyExternal)return!1;// Blur active elements
var n=e.target||e.srcElement;document.activeElement&&document.activeElement!==n&&document.activeElement!==document.body&&document.activeElement.blur();// Form tag names
var r="input select textarea".split(" ");// Check for no swiping
if(t.noSwiping&&n&&y(n))return!1;// prevent user enter with right and the swiper move (needs isTouchEvent)
if(Z=!1,//Check For Nested Swipers
M.isTouched=!0,K="touchstart"===e.type,!K&&"which"in e&&3===e.which)return!1;if(!K||1===e.targetTouches.length){M.callPlugins("onTouchStartBegin"),!K&&!M.isAndroid&&r.indexOf(n.tagName.toLowerCase())<0&&(e.preventDefault?e.preventDefault():e.returnValue=!1);var i=K?e.targetTouches[0].pageX:e.pageX||e.clientX,o=K?e.targetTouches[0].pageY:e.pageY||e.clientY;//Start Touches to check the scrolling
M.touches.startX=M.touches.currentX=i,M.touches.startY=M.touches.currentY=o,M.touches.start=M.touches.current=B?i:o,//Set Transition Time to 0
M.setWrapperTransition(0),//Get Start Translate Position
M.positions.start=M.positions.current=M.getWrapperTranslate(),//Set Transform
M.setWrapperTranslate(M.positions.start),//TouchStartTime
M.times.start=(new Date).getTime(),//Unset Scrolling
j=void 0,//Set Treshold
t.moveStartThreshold>0&&(Y=!1),//CallBack
t.onTouchStart&&M.fireCallback(t.onTouchStart,M,e),M.callPlugins("onTouchStartEnd")}}function m(e){// If slider is not touched - exit
if(M.isTouched&&!t.onlyExternal&&(!K||"mousemove"!==e.type)){var n=K?e.targetTouches[0].pageX:e.pageX||e.clientX,r=K?e.targetTouches[0].pageY:e.pageY||e.clientY;if(//check for scrolling
"undefined"==typeof j&&B&&(j=!!(j||Math.abs(r-M.touches.startY)>Math.abs(n-M.touches.startX))),"undefined"!=typeof j||B||(j=!!(j||Math.abs(r-M.touches.startY)<Math.abs(n-M.touches.startX))),j)return void(M.isTouched=!1);// One way swipes
if(B){if(!t.swipeToNext&&n<M.touches.startX||!t.swipeToPrev&&n>M.touches.startX)return}else if(!t.swipeToNext&&r<M.touches.startY||!t.swipeToPrev&&r>M.touches.startY)return;//Check For Nested Swipers
if(e.assignedToSwiper)return void(M.isTouched=!1);if(e.assignedToSwiper=!0,//Block inner links
t.preventLinks&&(M.allowLinks=!1),t.onSlideClick&&(M.allowSlideClick=!1),//Stop AutoPlay if exist
t.autoplay&&M.stopAutoplay(!0),!K||1===e.touches.length){//Resistance
if(//Moved Flag
M.isMoved||(M.callPlugins("onTouchMoveStart"),t.loop&&(M.fixLoop(),M.positions.start=M.getWrapperTranslate()),t.onTouchMoveStart&&M.fireCallback(t.onTouchMoveStart,M)),M.isMoved=!0,// cancel event
e.preventDefault?e.preventDefault():e.returnValue=!1,M.touches.current=B?n:r,M.positions.current=(M.touches.current-M.touches.start)*t.touchRatio+M.positions.start,//Resistance Callbacks
M.positions.current>0&&t.onResistanceBefore&&M.fireCallback(t.onResistanceBefore,M,M.positions.current),M.positions.current<-i()&&t.onResistanceAfter&&M.fireCallback(t.onResistanceAfter,M,Math.abs(M.positions.current+i())),t.resistance&&"100%"!==t.resistance){var o;//Resistance for After-End Sliding
if(//Resistance for Negative-Back sliding
M.positions.current>0&&(o=1-M.positions.current/P/2,M.positions.current=.5>o?P/2:M.positions.current*o),M.positions.current<-i()){var a=(M.touches.current-M.touches.start)*t.touchRatio+(i()+M.positions.start);o=(P+a)/P;var s=M.positions.current-a*(1-o)/2,l=-i()-P/2;M.positions.current=l>s||0>=o?l:s}}//Move Slides
if(t.resistance&&"100%"===t.resistance&&(//Resistance for Negative-Back sliding
M.positions.current>0&&(!t.freeMode||t.freeModeFluid)&&(M.positions.current=0),//Resistance for After-End Sliding
M.positions.current<-i()&&(!t.freeMode||t.freeModeFluid)&&(M.positions.current=-i())),!t.followFinger)return;if(t.moveStartThreshold)if(Math.abs(M.touches.current-M.touches.start)>t.moveStartThreshold||Y){if(!Y)return Y=!0,void(M.touches.start=M.touches.current);M.setWrapperTranslate(M.positions.current)}else M.positions.current=M.positions.start;else M.setWrapperTranslate(M.positions.current);//Grab Cursor
//Velocity
//Callbacks
return(t.freeMode||t.watchActiveIndex)&&M.updateActiveSlide(M.positions.current),t.grabCursor&&(M.container.style.cursor="move",M.container.style.cursor="grabbing",M.container.style.cursor="-moz-grabbin",M.container.style.cursor="-webkit-grabbing"),U||(U=M.touches.current),Q||(Q=(new Date).getTime()),M.velocity=(M.touches.current-U)/((new Date).getTime()-Q)/2,Math.abs(M.touches.current-U)<2&&(M.velocity=0),U=M.touches.current,Q=(new Date).getTime(),M.callPlugins("onTouchMoveEnd"),t.onTouchMove&&M.fireCallback(t.onTouchMove,M,e),!1}}}function v(e){// If slider is not touched exit
if(//Check For scrolling
j&&M.swipeReset(),!t.onlyExternal&&M.isTouched){M.isTouched=!1,//Return Grab Cursor
t.grabCursor&&(M.container.style.cursor="move",M.container.style.cursor="grab",M.container.style.cursor="-moz-grab",M.container.style.cursor="-webkit-grab"),//Check for Current Position
M.positions.current||0===M.positions.current||(M.positions.current=M.positions.start),//For case if slider touched but not moved
t.followFinger&&M.setWrapperTranslate(M.positions.current),// TouchEndTime
M.times.end=(new Date).getTime(),//Difference
M.touches.diff=M.touches.current-M.touches.start,M.touches.abs=Math.abs(M.touches.diff),M.positions.diff=M.positions.current-M.positions.start,M.positions.abs=Math.abs(M.positions.diff);var n=M.positions.diff,r=M.positions.abs,o=M.times.end-M.times.start;5>r&&300>o&&M.allowLinks===!1&&(t.freeMode||0===r||M.swipeReset(),//Release inner links
t.preventLinks&&(M.allowLinks=!0),t.onSlideClick&&(M.allowSlideClick=!0)),setTimeout(function(){//Release inner links
"undefined"!=typeof M&&null!==M&&(t.preventLinks&&(M.allowLinks=!0),t.onSlideClick&&(M.allowSlideClick=!0))},100);var a=i();//Not moved or Prevent Negative Back Sliding/After-End Sliding
if(!M.isMoved&&t.freeMode)return M.isMoved=!1,t.onTouchEnd&&M.fireCallback(t.onTouchEnd,M,e),void M.callPlugins("onTouchEnd");if(!M.isMoved||M.positions.current>0||M.positions.current<-a)return M.swipeReset(),t.onTouchEnd&&M.fireCallback(t.onTouchEnd,M,e),void M.callPlugins("onTouchEnd");//Free Mode
if(M.isMoved=!1,t.freeMode){if(t.freeModeFluid){var s,l=1e3*t.momentumRatio,u=M.velocity*l,c=M.positions.current+u,f=!1,p=20*Math.abs(M.velocity)*t.momentumBounceRatio;-a>c&&(t.momentumBounce&&M.support.transitions?(-p>c+a&&(c=-a-p),s=-a,f=!0,Z=!0):c=-a),c>0&&(t.momentumBounce&&M.support.transitions?(c>p&&(c=p),s=0,f=!0,Z=!0):c=0),//Fix duration
0!==M.velocity&&(l=Math.abs((c-M.positions.current)/M.velocity)),M.setWrapperTranslate(c),M.setWrapperTransition(l),t.momentumBounce&&f&&M.wrapperTransitionEnd(function(){Z&&(t.onMomentumBounce&&M.fireCallback(t.onMomentumBounce,M),M.callPlugins("onMomentumBounce"),M.setWrapperTranslate(s),M.setWrapperTransition(300))}),M.updateActiveSlide(c)}return(!t.freeModeFluid||o>=300)&&M.updateActiveSlide(M.positions.current),t.onTouchEnd&&M.fireCallback(t.onTouchEnd,M,e),void M.callPlugins("onTouchEnd")}//Direction
I=0>n?"toNext":"toPrev",//Short Touches
"toNext"===I&&300>=o&&(30>r||!t.shortSwipes?M.swipeReset():M.swipeNext(!0)),"toPrev"===I&&300>=o&&(30>r||!t.shortSwipes?M.swipeReset():M.swipePrev(!0));//Long Touches
var d=0;if("auto"===t.slidesPerView){for(var h,g=Math.abs(M.getWrapperTranslate()),m=0,v=0;v<M.slides.length;v++)if(h=B?M.slides[v].getWidth(!0,t.roundLengths):M.slides[v].getHeight(!0,t.roundLengths),m+=h,m>g){d=h;break}d>P&&(d=P)}else d=N*t.slidesPerView;"toNext"===I&&o>300&&(r>=d*t.longSwipesRatio?M.swipeNext(!0):M.swipeReset()),"toPrev"===I&&o>300&&(r>=d*t.longSwipesRatio?M.swipePrev(!0):M.swipeReset()),t.onTouchEnd&&M.fireCallback(t.onTouchEnd,M,e),M.callPlugins("onTouchEnd")}}/*==================================================
        noSwiping Bubble Check by Isaac Strack
    ====================================================*/
function y(e){/*This function is specifically designed to check the parent elements for the noSwiping class, up to the wrapper.
        We need to check parents because while onTouchStart bubbles, _this.isTouched is checked in onTouchStart, which stops the bubbling.
        So, if a text box, for example, is the initial target, and the parent slide container has the noSwiping class, the _this.isTouched
        check will never find it, and what was supposed to be noSwiping is able to be swiped.
        This function will iterate up and check for the noSwiping class in parents, up through the wrapperClass.*/
// First we create a truthy variable, which is that swiping is allowd (noSwiping = false)
var n=!1;// Now we iterate up (parentElements) until we reach the node with the wrapperClass.
do// Each time, we check to see if there's a 'swiper-no-swiping' class (noSwipingClass).
e.className.indexOf(t.noSwipingClass)>-1&&(n=!0),e=e.parentElement;while(!n&&e.parentElement&&-1===e.className.indexOf(t.wrapperClass));// if the wrapper has the noSwipingClass, we set noSwiping = true;
// also include el.parentElement truthy, just in case.
// because we didn't check the wrapper itself, we do so now, if noSwiping is false:
return!n&&e.className.indexOf(t.wrapperClass)>-1&&e.className.indexOf(t.noSwipingClass)>-1&&(n=!0),n}function w(e,t){var n,r=document.createElement("div");return r.innerHTML=t,n=r.firstChild,n.className+=" "+e,n.outerHTML}function x(e,n,r){function i(){var o=+new Date,f=o-a;s+=l*f/(1e3/60),c="toNext"===u?s>e:e>s,c?(M.setWrapperTranslate(Math.ceil(s)),M._DOMAnimating=!0,window.setTimeout(function(){i()},1e3/60)):(t.onSlideChangeEnd&&("to"===n?r.runCallbacks===!0&&M.fireCallback(t.onSlideChangeEnd,M,u):M.fireCallback(t.onSlideChangeEnd,M,u)),M.setWrapperTranslate(e),M._DOMAnimating=!1)}var o="to"===n&&r.speed>=0?r.speed:t.speed,a=+new Date;if(M.support.transitions||!t.DOMAnimation)M.setWrapperTranslate(e),M.setWrapperTransition(o);else{//Try the DOM animation
var s=M.getWrapperTranslate(),l=Math.ceil((e-s)/o*(1e3/60)),u=s>e?"toNext":"toPrev",c="toNext"===u?s>e:e>s;if(M._DOMAnimating)return;i()}//Update Active Slide Index
M.updateActiveSlide(e),//Callbacks
t.onSlideNext&&"next"===n&&M.fireCallback(t.onSlideNext,M,e),t.onSlidePrev&&"prev"===n&&M.fireCallback(t.onSlidePrev,M,e),//'Reset' Callback
t.onSlideReset&&"reset"===n&&M.fireCallback(t.onSlideReset,M,e),//'Next', 'Prev' and 'To' Callbacks
("next"===n||"prev"===n||"to"===n&&r.runCallbacks===!0)&&b(n)}function b(e){if(//Transition Start Callback
M.callPlugins("onSlideChangeStart"),t.onSlideChangeStart)if(t.queueStartCallbacks&&M.support.transitions){if(M._queueStartCallbacks)return;M._queueStartCallbacks=!0,M.fireCallback(t.onSlideChangeStart,M,e),M.wrapperTransitionEnd(function(){M._queueStartCallbacks=!1})}else M.fireCallback(t.onSlideChangeStart,M,e);//Transition End Callback
if(t.onSlideChangeEnd)if(M.support.transitions)if(t.queueEndCallbacks){if(M._queueEndCallbacks)return;M._queueEndCallbacks=!0,M.wrapperTransitionEnd(function(n){M.fireCallback(t.onSlideChangeEnd,n,e)})}else M.wrapperTransitionEnd(function(n){M.fireCallback(t.onSlideChangeEnd,n,e)});else t.DOMAnimation||setTimeout(function(){M.fireCallback(t.onSlideChangeEnd,M,e)},10)}function S(){var e=M.paginationButtons;if(e)for(var t=0;t<e.length;t++)M.h.removeEventListener(e[t],"click",C)}function T(){var e=M.paginationButtons;if(e)for(var t=0;t<e.length;t++)M.h.addEventListener(e[t],"click",C)}function C(e){for(var n,r=e.target||e.srcElement,i=M.paginationButtons,o=0;o<i.length;o++)r===i[o]&&(n=o);t.autoplay&&M.stopAutoplay(!0),M.swipeTo(n)}function k(){J=setTimeout(function(){t.loop?(M.fixLoop(),M.swipeNext(!0)):M.swipeNext(!0)||(t.autoplayStopOnLast?(clearTimeout(J),J=void 0):M.swipeTo(0)),M.wrapperTransitionEnd(function(){"undefined"!=typeof J&&k()})},t.autoplay)}/*==================================================
        Make Swiper
    ====================================================*/
function _(){M.calcSlides(),t.loader.slides.length>0&&0===M.slides.length&&M.loadSlides(),t.loop&&M.createLoop(),M.init(),o(),t.pagination&&M.createPagination(!0),t.loop||t.initialSlide>0?M.swipeTo(t.initialSlide,0,!1):M.updateActiveSlide(0),t.autoplay&&M.startAutoplay(),/**
         * Set center slide index.
         *
         * @author        Tomaz Lovrec <tomaz.lovrec@gmail.com>
         */
M.centerIndex=M.activeIndex,// Callbacks
t.onSwiperCreated&&M.fireCallback(t.onSwiperCreated,M),M.callPlugins("onSwiperCreated")}/*=========================
      A little bit dirty but required part for IE8 and old FF support
      ===========================*/
if(!document.body.outerHTML&&document.body.__defineGetter__&&HTMLElement){var E=HTMLElement.prototype;E.__defineGetter__&&E.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1}),(document.querySelectorAll||window.jQuery)&&"undefined"!=typeof e&&(e.nodeType||0!==n(e).length)){/*=========================
      _this
      ===========================*/
var M=this;/*=========================
      Default Flags and vars
      ===========================*/
M.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},M.positions={start:0,abs:0,diff:0,current:0},M.times={start:0,end:0},M.id=(new Date).getTime(),M.container=e.nodeType?e:n(e)[0],M.isTouched=!1,M.isMoved=!1,M.activeIndex=0,M.centerIndex=0,M.activeLoaderIndex=0,M.activeLoopIndex=0,M.previousIndex=null,M.velocity=0,M.snapGrid=[],M.slidesGrid=[],M.imagesToLoad=[],M.imagesLoaded=0,M.wrapperLeft=0,M.wrapperRight=0,M.wrapperTop=0,M.wrapperBottom=0,M.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var A,N,L,I,j,P,D={eventTarget:"wrapper",// or 'container'
mode:"horizontal",// or 'vertical'
touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:!0,//Fit to slide when spv "auto" and slides larger than container
simulateTouch:!0,followFinger:!0,shortSwipes:!0,longSwipesRatio:.5,moveStartThreshold:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,// or false or 100%
scrollContainer:!1,preventLinks:!0,preventLinksPropagation:!1,noSwiping:!1,// or class
noSwipingClass:"swiper-no-swiping",//:)
initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelControlForceToAxis:!1,useCSS3Transforms:!0,// Autoplay
autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,//Loop mode
loop:!1,loopAdditionalSlides:0,// Round length values
roundLengths:!1,//Auto Height
calculateHeight:!1,//Apply CSS for width and/or height
cssWidthAndHeight:!1,// or true or 'width' or 'height'
//Images Preloader
updateOnImagesReady:!0,//Form elements
releaseFormElements:!0,//Watch for active slide, useful when use effects on different slide states
watchActiveIndex:!1,//Slides Visibility Fit
visibilityFullFit:!1,//Slides Offset
offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,//Queue callbacks
queueStartCallbacks:!1,queueEndCallbacks:!1,//Auto Resize
autoResize:!0,resizeReInit:!1,//DOMAnimation
DOMAnimation:!0,//Slides Loader
loader:{slides:[],//array with slides
slidesHTMLType:"inner",// or 'outer'
surroundGroups:1,//keep preloaded slides groups around view
logic:"reload",//or 'change'
loadAllSlides:!1},// One way swipes
swipeToPrev:!0,swipeToNext:!0,//Namespace
slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};t=t||{};for(var O in D)if(O in t&&"object"==typeof t[O])for(var F in D[O])F in t[O]||(t[O][F]=D[O][F]);else O in t||(t[O]=D[O]);M.params=t,t.scrollContainer&&(t.freeMode=!0,t.freeModeFluid=!0),t.loop&&(t.resistance="100%");var B="horizontal"===t.mode,R=["mousedown","mousemove","mouseup"];M.browser.ie10&&(R=["MSPointerDown","MSPointerMove","MSPointerUp"]),M.browser.ie11&&(R=["pointerdown","pointermove","pointerup"]),M.touchEvents={touchStart:M.support.touch||!t.simulateTouch?"touchstart":R[0],touchMove:M.support.touch||!t.simulateTouch?"touchmove":R[1],touchEnd:M.support.touch||!t.simulateTouch?"touchend":R[2]};/*=========================
      Wrapper
      ===========================*/
for(var q=M.container.childNodes.length-1;q>=0;q--)if(M.container.childNodes[q].className)for(var H=M.container.childNodes[q].className.split(/\s+/),$=0;$<H.length;$++)H[$]===t.wrapperClass&&(A=M.container.childNodes[q]);M.wrapper=A,/*=========================
      Slide API
      ===========================*/
M._extendSwiperSlide=function(e){return e.append=function(){return t.loop?e.insertAfter(M.slides.length-M.loopedSlides):(M.wrapper.appendChild(e),M.reInit()),e},e.prepend=function(){return t.loop?(M.wrapper.insertBefore(e,M.slides[M.loopedSlides]),M.removeLoopedSlides(),M.calcSlides(),M.createLoop()):M.wrapper.insertBefore(e,M.wrapper.firstChild),M.reInit(),e},e.insertAfter=function(n){if("undefined"==typeof n)return!1;var r;return t.loop?(r=M.slides[n+1+M.loopedSlides],r?M.wrapper.insertBefore(e,r):M.wrapper.appendChild(e),M.removeLoopedSlides(),M.calcSlides(),M.createLoop()):(r=M.slides[n+1],M.wrapper.insertBefore(e,r)),M.reInit(),e},e.clone=function(){return M._extendSwiperSlide(e.cloneNode(!0))},e.remove=function(){M.wrapper.removeChild(e),M.reInit()},e.html=function(t){return"undefined"==typeof t?e.innerHTML:(e.innerHTML=t,e)},e.index=function(){for(var t,n=M.slides.length-1;n>=0;n--)e===M.slides[n]&&(t=n);return t},e.isActive=function(){return e.index()===M.activeIndex?!0:!1},e.swiperSlideDataStorage||(e.swiperSlideDataStorage={}),e.getData=function(t){return e.swiperSlideDataStorage[t]},e.setData=function(t,n){return e.swiperSlideDataStorage[t]=n,e},e.data=function(t,n){return"undefined"==typeof n?e.getAttribute("data-"+t):(e.setAttribute("data-"+t,n),e)},e.getWidth=function(t,n){return M.h.getWidth(e,t,n)},e.getHeight=function(t,n){return M.h.getHeight(e,t,n)},e.getOffset=function(){return M.h.getOffset(e)},e},//Calculate information about number of slides
M.calcSlides=function(e){var n=M.slides?M.slides.length:!1;M.slides=[],M.displaySlides=[];for(var r=0;r<M.wrapper.childNodes.length;r++)if(M.wrapper.childNodes[r].className)for(var i=M.wrapper.childNodes[r].className,o=i.split(/\s+/),l=0;l<o.length;l++)o[l]===t.slideClass&&M.slides.push(M.wrapper.childNodes[r]);for(r=M.slides.length-1;r>=0;r--)M._extendSwiperSlide(M.slides[r]);n!==!1&&(n!==M.slides.length||e)&&(// Number of slides has been changed
s(),a(),M.updateActiveSlide(),M.params.pagination&&M.createPagination(),M.callPlugins("numberOfSlidesChanged"))},//Create Slide
M.createSlide=function(e,n,r){n=n||M.params.slideClass,r=r||t.slideElement;var i=document.createElement(r);return i.innerHTML=e||"",i.className=n,M._extendSwiperSlide(i)},//Append Slide
M.appendSlide=function(e,t,n){return e?e.nodeType?M._extendSwiperSlide(e).append():M.createSlide(e,t,n).append():void 0},M.prependSlide=function(e,t,n){return e?e.nodeType?M._extendSwiperSlide(e).prepend():M.createSlide(e,t,n).prepend():void 0},M.insertSlideAfter=function(e,t,n,r){return"undefined"==typeof e?!1:t.nodeType?M._extendSwiperSlide(t).insertAfter(e):M.createSlide(t,n,r).insertAfter(e)},M.removeSlide=function(e){if(M.slides[e]){if(t.loop){if(!M.slides[e+M.loopedSlides])return!1;M.slides[e+M.loopedSlides].remove(),M.removeLoopedSlides(),M.calcSlides(),M.createLoop()}else M.slides[e].remove();return!0}return!1},M.removeLastSlide=function(){return M.slides.length>0?(t.loop?(M.slides[M.slides.length-1-M.loopedSlides].remove(),M.removeLoopedSlides(),M.calcSlides(),M.createLoop()):M.slides[M.slides.length-1].remove(),!0):!1},M.removeAllSlides=function(){for(var e=M.slides.length-1;e>=0;e--)M.slides[e].remove()},M.getSlide=function(e){return M.slides[e]},M.getLastSlide=function(){return M.slides[M.slides.length-1]},M.getFirstSlide=function(){return M.slides[0]},//Currently Active Slide
M.activeSlide=function(){return M.slides[M.activeIndex]},/*=========================
     Wrapper for Callbacks : Allows additive callbacks via function arrays
     ===========================*/
M.fireCallback=function(){var e=arguments[0];if("[object Array]"===Object.prototype.toString.call(e))for(var n=0;n<e.length;n++)"function"==typeof e[n]&&e[n](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);else"[object String]"===Object.prototype.toString.call(e)?t["on"+e]&&M.fireCallback(t["on"+e],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]):e(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},/**
     * Allows user to add callbacks, rather than replace them
     * @param callback
     * @param func
     * @return {*}
     */
M.addCallback=function(e,t){var n,i=this;return i.params["on"+e]?r(this.params["on"+e])?this.params["on"+e].push(t):"function"==typeof this.params["on"+e]?(n=this.params["on"+e],this.params["on"+e]=[],this.params["on"+e].push(n),this.params["on"+e].push(t)):void 0:(this.params["on"+e]=[],this.params["on"+e].push(t))},M.removeCallbacks=function(e){M.params["on"+e]&&(M.params["on"+e]=null)};/*=========================
      Plugins API
      ===========================*/
var W=[];for(var z in M.plugins)if(t[z]){var V=M.plugins[z](M,t[z]);V&&W.push(V)}M.callPlugins=function(e,t){t||(t={});for(var n=0;n<W.length;n++)e in W[n]&&W[n][e](t)},/*=========================
      Windows Phone 8 Fix
      ===========================*/
!M.browser.ie10&&!M.browser.ie11||t.onlyExternal||M.wrapper.classList.add("swiper-wp8-"+(B?"horizontal":"vertical")),/*=========================
      Free Mode Class
      ===========================*/
t.freeMode&&(M.container.className+=" swiper-free-mode"),/*==================================================
        Init/Re-init/Resize Fix
    ====================================================*/
M.initialized=!1,M.init=function(e,n){var r=M.h.getWidth(M.container,!1,t.roundLengths),i=M.h.getHeight(M.container,!1,t.roundLengths);if(r!==M.width||i!==M.height||e){M.width=r,M.height=i;var o,a,s,l,u,c,f;// loop index variable to avoid JSHint W004 / W038
P=B?r:i;var p=M.wrapper;if(e&&M.calcSlides(n),"auto"===t.slidesPerView){//Auto mode
var d=0,h=0;//Unset Styles
t.slidesOffset>0&&(p.style.paddingLeft="",p.style.paddingRight="",p.style.paddingTop="",p.style.paddingBottom=""),p.style.width="",p.style.height="",t.offsetPxBefore>0&&(B?M.wrapperLeft=t.offsetPxBefore:M.wrapperTop=t.offsetPxBefore),t.offsetPxAfter>0&&(B?M.wrapperRight=t.offsetPxAfter:M.wrapperBottom=t.offsetPxAfter),t.centeredSlides&&(B?(M.wrapperLeft=(P-this.slides[0].getWidth(!0,t.roundLengths))/2,M.wrapperRight=(P-M.slides[M.slides.length-1].getWidth(!0,t.roundLengths))/2):(M.wrapperTop=(P-M.slides[0].getHeight(!0,t.roundLengths))/2,M.wrapperBottom=(P-M.slides[M.slides.length-1].getHeight(!0,t.roundLengths))/2)),B?(M.wrapperLeft>=0&&(p.style.paddingLeft=M.wrapperLeft+"px"),M.wrapperRight>=0&&(p.style.paddingRight=M.wrapperRight+"px")):(M.wrapperTop>=0&&(p.style.paddingTop=M.wrapperTop+"px"),M.wrapperBottom>=0&&(p.style.paddingBottom=M.wrapperBottom+"px")),c=0;var g=0;for(M.snapGrid=[],M.slidesGrid=[],s=0,f=0;f<M.slides.length;f++){o=M.slides[f].getWidth(!0,t.roundLengths),a=M.slides[f].getHeight(!0,t.roundLengths),t.calculateHeight&&(s=Math.max(s,a));var m=B?o:a;if(t.centeredSlides){var v=f===M.slides.length-1?0:M.slides[f+1].getWidth(!0,t.roundLengths),y=f===M.slides.length-1?0:M.slides[f+1].getHeight(!0,t.roundLengths),w=B?v:y;if(m>P){if(t.slidesPerViewFit)M.snapGrid.push(c+M.wrapperLeft),M.snapGrid.push(c+m-P+M.wrapperLeft);else for(var x=0;x<=Math.floor(m/(P+M.wrapperLeft));x++)M.snapGrid.push(0===x?c+M.wrapperLeft:c+M.wrapperLeft+P*x);M.slidesGrid.push(c+M.wrapperLeft)}else M.snapGrid.push(g),M.slidesGrid.push(g);g+=m/2+w/2}else{if(m>P)if(t.slidesPerViewFit)M.snapGrid.push(c),M.snapGrid.push(c+m-P);else if(0!==P)for(var b=0;b<=Math.floor(m/P);b++)M.snapGrid.push(c+P*b);else M.snapGrid.push(c);else M.snapGrid.push(c);M.slidesGrid.push(c)}c+=m,d+=o,h+=a}t.calculateHeight&&(M.height=s),B?(L=d+M.wrapperRight+M.wrapperLeft,p.style.width=d+"px",p.style.height=M.height+"px"):(L=h+M.wrapperTop+M.wrapperBottom,p.style.width=M.width+"px",p.style.height=h+"px")}else if(t.scrollContainer)//Scroll Container
p.style.width="",p.style.height="",l=M.slides[0].getWidth(!0,t.roundLengths),u=M.slides[0].getHeight(!0,t.roundLengths),L=B?l:u,p.style.width=l+"px",p.style.height=u+"px",N=B?l:u;else{//For usual slides
if(t.calculateHeight){for(s=0,u=0,//ResetWrapperSize
B||(M.container.style.height=""),p.style.height="",f=0;f<M.slides.length;f++)//ResetSlideSize
M.slides[f].style.height="",s=Math.max(M.slides[f].getHeight(!0),s),B||(u+=M.slides[f].getHeight(!0));a=s,M.height=a,B?u=a:(P=a,M.container.style.height=P+"px")}else a=B?M.height:M.height/t.slidesPerView,t.roundLengths&&(a=Math.ceil(a)),u=B?M.height:M.slides.length*a;for(o=B?M.width/t.slidesPerView:M.width,t.roundLengths&&(o=Math.ceil(o)),l=B?M.slides.length*o:M.width,N=B?o:a,t.offsetSlidesBefore>0&&(B?M.wrapperLeft=N*t.offsetSlidesBefore:M.wrapperTop=N*t.offsetSlidesBefore),t.offsetSlidesAfter>0&&(B?M.wrapperRight=N*t.offsetSlidesAfter:M.wrapperBottom=N*t.offsetSlidesAfter),t.offsetPxBefore>0&&(B?M.wrapperLeft=t.offsetPxBefore:M.wrapperTop=t.offsetPxBefore),t.offsetPxAfter>0&&(B?M.wrapperRight=t.offsetPxAfter:M.wrapperBottom=t.offsetPxAfter),t.centeredSlides&&(B?(M.wrapperLeft=(P-N)/2,M.wrapperRight=(P-N)/2):(M.wrapperTop=(P-N)/2,M.wrapperBottom=(P-N)/2)),B?(M.wrapperLeft>0&&(p.style.paddingLeft=M.wrapperLeft+"px"),M.wrapperRight>0&&(p.style.paddingRight=M.wrapperRight+"px")):(M.wrapperTop>0&&(p.style.paddingTop=M.wrapperTop+"px"),M.wrapperBottom>0&&(p.style.paddingBottom=M.wrapperBottom+"px")),L=B?l+M.wrapperRight+M.wrapperLeft:u+M.wrapperTop+M.wrapperBottom,parseFloat(l)>0&&(!t.cssWidthAndHeight||"height"===t.cssWidthAndHeight)&&(p.style.width=l+"px"),parseFloat(u)>0&&(!t.cssWidthAndHeight||"width"===t.cssWidthAndHeight)&&(p.style.height=u+"px"),c=0,M.snapGrid=[],M.slidesGrid=[],f=0;f<M.slides.length;f++)M.snapGrid.push(c),M.slidesGrid.push(c),c+=N,parseFloat(o)>0&&(!t.cssWidthAndHeight||"height"===t.cssWidthAndHeight)&&(M.slides[f].style.width=o+"px"),parseFloat(a)>0&&(!t.cssWidthAndHeight||"width"===t.cssWidthAndHeight)&&(M.slides[f].style.height=a+"px")}M.initialized?(M.callPlugins("onInit"),t.onInit&&M.fireCallback(t.onInit,M)):(M.callPlugins("onFirstInit"),t.onFirstInit&&M.fireCallback(t.onFirstInit,M)),M.initialized=!0}},M.reInit=function(e){M.init(!0,e)},M.resizeFix=function(e){M.callPlugins("beforeResizeFix"),M.init(t.resizeReInit||e),// swipe to active slide in fixed mode
t.freeMode?M.getWrapperTranslate()<-i()&&(M.setWrapperTransition(0),M.setWrapperTranslate(-i())):(M.swipeTo(t.loop?M.activeLoopIndex:M.activeIndex,0,!1),// Fix autoplay
t.autoplay&&(M.support.transitions&&"undefined"!=typeof J?"undefined"!=typeof J&&(clearTimeout(J),J=void 0,M.startAutoplay()):"undefined"!=typeof et&&(clearInterval(et),et=void 0,M.startAutoplay()))),M.callPlugins("afterResizeFix")},//Remove Event Listeners
M.destroy=function(){var e=M.h.removeEventListener,n="wrapper"===t.eventTarget?M.wrapper:M.container;//Touch Events
M.browser.ie10||M.browser.ie11?(e(n,M.touchEvents.touchStart,g),e(document,M.touchEvents.touchMove,m),e(document,M.touchEvents.touchEnd,v)):(M.support.touch&&(e(n,"touchstart",g),e(n,"touchmove",m),e(n,"touchend",v)),t.simulateTouch&&(e(n,"mousedown",g),e(document,"mousemove",m),e(document,"mouseup",v))),//Resize Event
t.autoResize&&e(window,"resize",M.resizeFix),//Init Slide Events
s(),//Pagination
t.paginationClickable&&S(),//Mousewheel
t.mousewheelControl&&M._wheelEvent&&e(M.container,M._wheelEvent,u),//Keyboard
t.keyboardControl&&e(document,"keydown",l),//Stop autoplay
t.autoplay&&M.stopAutoplay(),M.callPlugins("onDestroy"),//Destroy variable
M=null},M.disableKeyboardControl=function(){t.keyboardControl=!1,M.h.removeEventListener(document,"keydown",l)},M.enableKeyboardControl=function(){t.keyboardControl=!0,M.h.addEventListener(document,"keydown",l)};/*==========================================
        Mousewheel Control
    ============================================*/
var G=(new Date).getTime();/*=========================
      Grab Cursor
      ===========================*/
if(M.disableMousewheelControl=function(){return M._wheelEvent?(t.mousewheelControl=!1,M.h.removeEventListener(M.container,M._wheelEvent,u),!0):!1},M.enableMousewheelControl=function(){return M._wheelEvent?(t.mousewheelControl=!0,M.h.addEventListener(M.container,M._wheelEvent,u),!0):!1},t.grabCursor){var X=M.container.style;X.cursor="move",X.cursor="grab",X.cursor="-moz-grab",X.cursor="-webkit-grab"}/*=========================
      Slides Events Handlers
      ===========================*/
M.allowSlideClick=!0,M.allowLinks=!0;/*==================================================
        Event Handlers
    ====================================================*/
var Y,U,Q,K=!1,Z=!0;/*==================================================
        Swipe Functions
    ====================================================*/
M.swipeNext=function(e){!e&&t.loop&&M.fixLoop(),!e&&t.autoplay&&M.stopAutoplay(!0),M.callPlugins("onSwipeNext");var n=M.getWrapperTranslate(),r=n;if("auto"===t.slidesPerView){for(var o=0;o<M.snapGrid.length;o++)if(-n>=M.snapGrid[o]&&-n<M.snapGrid[o+1]){r=-M.snapGrid[o+1];break}}else{var a=N*t.slidesPerGroup;r=-(Math.floor(Math.abs(n)/Math.floor(a))*a+a)}return r<-i()&&(r=-i()),r===n?!1:(x(r,"next"),!0)},M.swipePrev=function(e){!e&&t.loop&&M.fixLoop(),!e&&t.autoplay&&M.stopAutoplay(!0),M.callPlugins("onSwipePrev");var n,r=Math.ceil(M.getWrapperTranslate());if("auto"===t.slidesPerView){n=0;for(var i=1;i<M.snapGrid.length;i++){if(-r===M.snapGrid[i]){n=-M.snapGrid[i-1];break}if(-r>M.snapGrid[i]&&-r<M.snapGrid[i+1]){n=-M.snapGrid[i];break}}}else{var o=N*t.slidesPerGroup;n=-(Math.ceil(-r/o)-1)*o}return n>0&&(n=0),n===r?!1:(x(n,"prev"),!0)},M.swipeReset=function(){M.callPlugins("onSwipeReset");{var e,n=M.getWrapperTranslate(),r=N*t.slidesPerGroup;-i()}if("auto"===t.slidesPerView){e=0;for(var o=0;o<M.snapGrid.length;o++){if(-n===M.snapGrid[o])return;if(-n>=M.snapGrid[o]&&-n<M.snapGrid[o+1]){e=M.positions.diff>0?-M.snapGrid[o+1]:-M.snapGrid[o];break}}-n>=M.snapGrid[M.snapGrid.length-1]&&(e=-M.snapGrid[M.snapGrid.length-1]),n<=-i()&&(e=-i())}else e=0>n?Math.round(n/r)*r:0,n<=-i()&&(e=-i());return t.scrollContainer&&(e=0>n?n:0),e<-i()&&(e=-i()),t.scrollContainer&&P>N&&(e=0),e===n?!1:(x(e,"reset"),!0)},M.swipeTo=function(e,n,r){e=parseInt(e,10),M.callPlugins("onSwipeTo",{index:e,speed:n}),t.loop&&(e+=M.loopedSlides);var o=M.getWrapperTranslate();if(!(e>M.slides.length-1||0>e)){var a;return a="auto"===t.slidesPerView?-M.slidesGrid[e]:-e*N,a<-i()&&(a=-i()),a===o?!1:(r=r===!1?!1:!0,x(a,"to",{index:e,speed:n,runCallbacks:r}),!0)}},/*==================================================
        Transition Callbacks
    ====================================================*/
//Prevent Multiple Callbacks
M._queueStartCallbacks=!1,M._queueEndCallbacks=!1,/*==================================================
        Update Active Slide Index
    ====================================================*/
M.updateActiveSlide=function(e){if(M.initialized&&0!==M.slides.length){M.previousIndex=M.activeIndex,"undefined"==typeof e&&(e=M.getWrapperTranslate()),e>0&&(e=0);var n;if("auto"===t.slidesPerView){if(M.activeIndex=M.slidesGrid.indexOf(-e),M.activeIndex<0){for(n=0;n<M.slidesGrid.length-1&&!(-e>M.slidesGrid[n]&&-e<M.slidesGrid[n+1]);n++);var r=Math.abs(M.slidesGrid[n]+e),i=Math.abs(M.slidesGrid[n+1]+e);M.activeIndex=i>=r?n:n+1}}else M.activeIndex=Math[t.visibilityFullFit?"ceil":"round"](-e/N);// Check for slide
if(M.activeIndex===M.slides.length&&(M.activeIndex=M.slides.length-1),M.activeIndex<0&&(M.activeIndex=0),M.slides[M.activeIndex]){// Mark visible and active slides with additonal classes
if(// Calc Visible slides
M.calcVisibleSlides(e),M.support.classList){var o;for(n=0;n<M.slides.length;n++)o=M.slides[n],o.classList.remove(t.slideActiveClass),M.visibleSlides.indexOf(o)>=0?o.classList.add(t.slideVisibleClass):o.classList.remove(t.slideVisibleClass);M.slides[M.activeIndex].classList.add(t.slideActiveClass)}else{var a=new RegExp("\\s*"+t.slideActiveClass),s=new RegExp("\\s*"+t.slideVisibleClass);for(n=0;n<M.slides.length;n++)M.slides[n].className=M.slides[n].className.replace(a,"").replace(s,""),M.visibleSlides.indexOf(M.slides[n])>=0&&(M.slides[n].className+=" "+t.slideVisibleClass);M.slides[M.activeIndex].className+=" "+t.slideActiveClass}//Update loop index
if(t.loop){var l=M.loopedSlides;M.activeLoopIndex=M.activeIndex-l,M.activeLoopIndex>=M.slides.length-2*l&&(M.activeLoopIndex=M.slides.length-2*l-M.activeLoopIndex),M.activeLoopIndex<0&&(M.activeLoopIndex=M.slides.length-2*l+M.activeLoopIndex),M.activeLoopIndex<0&&(M.activeLoopIndex=0)}else M.activeLoopIndex=M.activeIndex;//Update Pagination
t.pagination&&M.updatePagination(e)}}},/*==================================================
        Pagination
    ====================================================*/
M.createPagination=function(e){if(t.paginationClickable&&M.paginationButtons&&S(),M.paginationContainer=t.pagination.nodeType?t.pagination:n(t.pagination)[0],t.createPagination){var r="",i=M.slides.length,o=i;t.loop&&(o-=2*M.loopedSlides);for(var a=0;o>a;a++)r+="<"+t.paginationElement+' class="'+t.paginationElementClass+'"></'+t.paginationElement+">";M.paginationContainer.innerHTML=r}M.paginationButtons=n("."+t.paginationElementClass,M.paginationContainer),e||M.updatePagination(),M.callPlugins("onCreatePagination"),t.paginationClickable&&T()},M.updatePagination=function(e){if(t.pagination&&!(M.slides.length<1)){var r=n("."+t.paginationActiveClass,M.paginationContainer);if(r){//Reset all Buttons' class to not active
var i=M.paginationButtons;if(0!==i.length){for(var o=0;o<i.length;o++)i[o].className=t.paginationElementClass;var a=t.loop?M.loopedSlides:0;if(t.paginationAsRange){M.visibleSlides||M.calcVisibleSlides(e);//Get Visible Indexes
var s,l=[];// lopp index - avoid JSHint W004 / W038
for(s=0;s<M.visibleSlides.length;s++){var u=M.slides.indexOf(M.visibleSlides[s])-a;t.loop&&0>u&&(u=M.slides.length-2*M.loopedSlides+u),t.loop&&u>=M.slides.length-2*M.loopedSlides&&(u=M.slides.length-2*M.loopedSlides-u,u=Math.abs(u)),l.push(u)}for(s=0;s<l.length;s++)i[l[s]]&&(i[l[s]].className+=" "+t.paginationVisibleClass);t.loop?void 0!==i[M.activeLoopIndex]&&(i[M.activeLoopIndex].className+=" "+t.paginationActiveClass):i[M.activeIndex].className+=" "+t.paginationActiveClass}else t.loop?i[M.activeLoopIndex]&&(i[M.activeLoopIndex].className+=" "+t.paginationActiveClass+" "+t.paginationVisibleClass):i[M.activeIndex].className+=" "+t.paginationActiveClass+" "+t.paginationVisibleClass}}}},M.calcVisibleSlides=function(e){var n=[],r=0,i=0,o=0;B&&M.wrapperLeft>0&&(e+=M.wrapperLeft),!B&&M.wrapperTop>0&&(e+=M.wrapperTop);for(var a=0;a<M.slides.length;a++){r+=i,i="auto"===t.slidesPerView?B?M.h.getWidth(M.slides[a],!0,t.roundLengths):M.h.getHeight(M.slides[a],!0,t.roundLengths):N,o=r+i;var s=!1;t.visibilityFullFit?(r>=-e&&-e+P>=o&&(s=!0),-e>=r&&o>=-e+P&&(s=!0)):(o>-e&&-e+P>=o&&(s=!0),r>=-e&&-e+P>r&&(s=!0),-e>r&&o>-e+P&&(s=!0)),s&&n.push(M.slides[a])}0===n.length&&(n=[M.slides[M.activeIndex]]),M.visibleSlides=n};/*==========================================
        Autoplay
    ============================================*/
var J,et;M.startAutoplay=function(){if(M.support.transitions){if("undefined"!=typeof J)return!1;if(!t.autoplay)return;M.callPlugins("onAutoplayStart"),t.onAutoplayStart&&M.fireCallback(t.onAutoplayStart,M),k()}else{if("undefined"!=typeof et)return!1;if(!t.autoplay)return;M.callPlugins("onAutoplayStart"),t.onAutoplayStart&&M.fireCallback(t.onAutoplayStart,M),et=setInterval(function(){t.loop?(M.fixLoop(),M.swipeNext(!0)):M.swipeNext(!0)||(t.autoplayStopOnLast?(clearInterval(et),et=void 0):M.swipeTo(0))},t.autoplay)}},M.stopAutoplay=function(e){if(M.support.transitions){if(!J)return;J&&clearTimeout(J),J=void 0,e&&!t.autoplayDisableOnInteraction&&M.wrapperTransitionEnd(function(){k()}),M.callPlugins("onAutoplayStop"),t.onAutoplayStop&&M.fireCallback(t.onAutoplayStop,M)}else et&&clearInterval(et),et=void 0,M.callPlugins("onAutoplayStop"),t.onAutoplayStop&&M.fireCallback(t.onAutoplayStop,M)},/*==================================================
        Loop
    ====================================================*/
M.loopCreated=!1,M.removeLoopedSlides=function(){if(M.loopCreated)for(var e=0;e<M.slides.length;e++)M.slides[e].getData("looped")===!0&&M.wrapper.removeChild(M.slides[e])},M.createLoop=function(){if(0!==M.slides.length){M.loopedSlides="auto"===t.slidesPerView?t.loopedSlides||1:t.slidesPerView+t.loopAdditionalSlides,M.loopedSlides>M.slides.length&&(M.loopedSlides=M.slides.length);var e,n="",r="",i="",o=M.slides.length,a=Math.floor(M.loopedSlides/o),s=M.loopedSlides%o;// assemble full sets of slides
for(e=0;a*o>e;e++){var l=e;if(e>=o){var u=Math.floor(e/o);l=e-o*u}i+=M.slides[l].outerHTML}// assemble remainder slides
// assemble remainder appended to existing slides
for(e=0;s>e;e++)r+=w(t.slideDuplicateClass,M.slides[e].outerHTML);// assemble slides that get preppended to existing slides
for(e=o-s;o>e;e++)n+=w(t.slideDuplicateClass,M.slides[e].outerHTML);// assemble all slides
var c=n+i+A.innerHTML+i+r;//Update Looped Slides with special class
for(// set the slides
A.innerHTML=c,M.loopCreated=!0,M.calcSlides(),e=0;e<M.slides.length;e++)(e<M.loopedSlides||e>=M.slides.length-M.loopedSlides)&&M.slides[e].setData("looped",!0);M.callPlugins("onCreateLoop")}},M.fixLoop=function(){var e;//Fix For Negative Oversliding
M.activeIndex<M.loopedSlides?(e=M.slides.length-3*M.loopedSlides+M.activeIndex,M.swipeTo(e,0,!1)):("auto"===t.slidesPerView&&M.activeIndex>=2*M.loopedSlides||M.activeIndex>M.slides.length-2*t.slidesPerView)&&(e=-M.slides.length+M.activeIndex+M.loopedSlides,M.swipeTo(e,0,!1))},/*==================================================
        Slides Loader
    ====================================================*/
M.loadSlides=function(){var e="";M.activeLoaderIndex=0;for(var n=t.loader.slides,r=t.loader.loadAllSlides?n.length:t.slidesPerView*(1+t.loader.surroundGroups),i=0;r>i;i++)e+="outer"===t.loader.slidesHTMLType?n[i]:"<"+t.slideElement+' class="'+t.slideClass+'" data-swiperindex="'+i+'">'+n[i]+"</"+t.slideElement+">";M.wrapper.innerHTML=e,M.calcSlides(!0),//Add permanent transitionEnd callback
t.loader.loadAllSlides||M.wrapperTransitionEnd(M.reloadSlides,!0)},M.reloadSlides=function(){var e=t.loader.slides,n=parseInt(M.activeSlide().data("swiperindex"),10);if(!(0>n||n>e.length-1)){//<-- Exit
M.activeLoaderIndex=n;var r=Math.max(0,n-t.slidesPerView*t.loader.surroundGroups),i=Math.min(n+t.slidesPerView*(1+t.loader.surroundGroups)-1,e.length-1);//Update Transforms
if(n>0){var o=-N*(n-r);M.setWrapperTranslate(o),M.setWrapperTransition(0)}var a;// loop index
//New Slides
if("reload"===t.loader.logic){M.wrapper.innerHTML="";var s="";for(a=r;i>=a;a++)s+="outer"===t.loader.slidesHTMLType?e[a]:"<"+t.slideElement+' class="'+t.slideClass+'" data-swiperindex="'+a+'">'+e[a]+"</"+t.slideElement+">";M.wrapper.innerHTML=s}else{var l=1e3,u=0;for(a=0;a<M.slides.length;a++){var c=M.slides[a].data("swiperindex");r>c||c>i?M.wrapper.removeChild(M.slides[a]):(l=Math.min(c,l),u=Math.max(c,u))}for(a=r;i>=a;a++){var f;l>a&&(f=document.createElement(t.slideElement),f.className=t.slideClass,f.setAttribute("data-swiperindex",a),f.innerHTML=e[a],M.wrapper.insertBefore(f,M.wrapper.firstChild)),a>u&&(f=document.createElement(t.slideElement),f.className=t.slideClass,f.setAttribute("data-swiperindex",a),f.innerHTML=e[a],M.wrapper.appendChild(f))}}//reInit
M.reInit(!0)}},_()}};Swiper.prototype={plugins:{},/*==================================================
        Wrapper Operations
    ====================================================*/
wrapperTransitionEnd:function(e,t){"use strict";function n(s){if(s.target===o&&(e(i),i.params.queueEndCallbacks&&(i._queueEndCallbacks=!1),!t))for(r=0;r<a.length;r++)i.h.removeEventListener(o,a[r],n)}var r,i=this,o=i.wrapper,a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(e)for(r=0;r<a.length;r++)i.h.addEventListener(o,a[r],n)},getWrapperTranslate:function(e){"use strict";var t,n,r,i,o=this.wrapper;// automatic axis detection
// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
//Latest Chrome and webkits Fix
//Latest Chrome and webkits Fix
return"undefined"==typeof e&&(e="horizontal"===this.params.mode?"x":"y"),this.support.transforms&&this.params.useCSS3Transforms?(r=window.getComputedStyle(o,null),window.WebKitCSSMatrix?i=new WebKitCSSMatrix("none"===r.webkitTransform?"":r.webkitTransform):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===e&&(n=window.WebKitCSSMatrix?i.m41:parseFloat(16===t.length?t[12]:t[4])),"y"===e&&(n=window.WebKitCSSMatrix?i.m42:parseFloat(16===t.length?t[13]:t[5]))):("x"===e&&(n=parseFloat(o.style.left,10)||0),"y"===e&&(n=parseFloat(o.style.top,10)||0)),n||0},setWrapperTranslate:function(e,t,n){"use strict";var r,i=this.wrapper.style,o={x:0,y:0,z:0};// passed all coordinates
3===arguments.length?(o.x=e,o.y=t,o.z=n):("undefined"==typeof t&&(t="horizontal"===this.params.mode?"x":"y"),o[t]=e),this.support.transforms&&this.params.useCSS3Transforms?(r=this.support.transforms3d?"translate3d("+o.x+"px, "+o.y+"px, "+o.z+"px)":"translate("+o.x+"px, "+o.y+"px)",i.webkitTransform=i.MsTransform=i.msTransform=i.MozTransform=i.OTransform=i.transform=r):(i.left=o.x+"px",i.top=o.y+"px"),this.callPlugins("onSetWrapperTransform",o),this.params.onSetWrapperTransform&&this.fireCallback(this.params.onSetWrapperTransform,this,o)},setWrapperTransition:function(e){"use strict";var t=this.wrapper.style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:e}),this.params.onSetWrapperTransition&&this.fireCallback(this.params.onSetWrapperTransition,this,e)},/*==================================================
        Helpers
    ====================================================*/
h:{getWidth:function(e,t,n){"use strict";var r=window.getComputedStyle(e,null).getPropertyValue("width"),i=parseFloat(r);//IE Fixes
return(isNaN(i)||r.indexOf("%")>0||0>i)&&(i=e.offsetWidth-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-right"))),t&&(i+=parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-right"))),n?Math.ceil(i):i},getHeight:function(e,t,n){"use strict";if(t)return e.offsetHeight;var r=window.getComputedStyle(e,null).getPropertyValue("height"),i=parseFloat(r);//IE Fixes
return(isNaN(i)||r.indexOf("%")>0||0>i)&&(i=e.offsetHeight-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-bottom"))),t&&(i+=parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-bottom"))),n?Math.ceil(i):i},getOffset:function(e){"use strict";var t=e.getBoundingClientRect(),n=document.body,r=e.clientTop||n.clientTop||0,i=e.clientLeft||n.clientLeft||0,o=window.pageYOffset||e.scrollTop,a=window.pageXOffset||e.scrollLeft;//IE7-8
return document.documentElement&&!window.pageYOffset&&(o=document.documentElement.scrollTop,a=document.documentElement.scrollLeft),{top:t.top+o-r,left:t.left+a-i}},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){"use strict";return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){"use strict";return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(e,t,n,r){"use strict";"undefined"==typeof r&&(r=!1),e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n)},removeEventListener:function(e,t,n,r){"use strict";"undefined"==typeof r&&(r=!1),e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},setTransform:function(e,t){"use strict";var n=e.style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=t},setTranslate:function(e,t){"use strict";var n=e.style,r={x:t.x||0,y:t.y||0,z:t.z||0},i=this.support.transforms3d?"translate3d("+r.x+"px,"+r.y+"px,"+r.z+"px)":"translate("+r.x+"px,"+r.y+"px)";n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=i,this.support.transforms||(n.left=r.x+"px",n.top=r.y+"px")},setTransition:function(e,t){"use strict";var n=e.style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms"},/*==================================================
        Feature Detection
    ====================================================*/
support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){"use strict";var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){"use strict";var e=document.createElement("div").style;return"transform"in e||"WebkitTransform"in e||"MozTransform"in e||"msTransform"in e||"MsTransform"in e||"OTransform"in e}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var e=document.createElement("div").style;return"transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"MsTransition"in e||"OTransition"in e}(),classList:function(){"use strict";var e=document.createElement("div");return"classList"in e}()},browser:{ie8:function(){"use strict";var e=-1;// Return value assumes failure.
if("Microsoft Internet Explorer"===navigator.appName){var t=navigator.userAgent,n=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null!==n.exec(t)&&(e=parseFloat(RegExp.$1))}return-1!==e&&9>e}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},/*=========================
  jQuery & Zepto Plugins
  ===========================*/
(window.jQuery||window.Zepto)&&!function(e){"use strict";e.fn.swiper=function(t){var n;return this.each(function(r){var i=e(this);if(!i.data("swiper")){var o=new Swiper(i[0],t);r||(n=o),i.data("swiper",o)}}),n}}(window.jQuery||window.Zepto),// component
"undefined"!=typeof module&&(module.exports=Swiper),// requirejs support
"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper}),/*
 * Swiper Scrollbar 2.4.1
 * Scrollbar plugin for Swiper
 *
 * http://www.idangero.us/sliders/swiper/plugins/scrollbar.php
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: June 27, 2014
*/
Swiper.prototype.plugins.scrollbar=function(e,t){function n(e){return document.querySelectorAll?document.querySelectorAll(e):jQuery(e)}function r(){x.style.width="",x.style.height="",y?(s=e.h.getWidth(w,!0),t.dragSize&&t.dragSize>0?(f=t.dragSize,d=s-f,g=e.h.getWidth(e.wrapper)+e.wrapperLeft+e.wrapperRight-e.width,c=d/g):(u=e.width/(e.h.getWidth(e.wrapper)+e.wrapperLeft+e.wrapperRight),c=u*(s/e.width),f=s*u),x.style.width=f+"px"):(l=e.h.getHeight(w,!0),t.dragSize&&t.dragSize>0?(p=t.dragSize,h=l-p,m=e.h.getHeight(e.wrapper)+e.wrapperTop+e.wrapperBottom-e.height,c=h/m):(u=e.height/(e.h.getHeight(e.wrapper)+e.wrapperTop+e.wrapperBottom),c=u*(l/e.height),p=l*u),p>l&&(p=l),x.style.height=p+"px"),v.style.display=u>=1?"none":""}var i=t&&t.container;if(i){/*=========================
      Default Parameters
      ===========================*/
var o={hide:!0,draggable:!0,snapOnRelease:!1,dragSize:void 0};t=t||{};for(var a in o)a in t||(t[a]=o[a]);/*=========================
      Container
      ===========================*/
if((document.querySelectorAll||window.jQuery)&&(t.container.nodeType||0!==n(t.container).length)){var s,l,u,c,f,p,d,h,g,m,v=t.container.nodeType?t.container:n(t.container)[0],y="horizontal"===e.params.mode,w=v,x=document.createElement("div");x.className="swiper-scrollbar-drag",t.draggable&&(x.className+=" swiper-scrollbar-cursor-drag"),w.appendChild(x),t.hide&&(w.style.opacity=0);var b,S,T,C,k=e.touchEvents;if(t.draggable){var _=!1;b=function(n){_=!0,n.preventDefault?n.preventDefault():n.returnValue=!1,C(n),clearTimeout(M),e.setTransition(w,0),w.style.opacity=1,e.setWrapperTransition(100),e.setTransition(x,100),t.onScrollbarDrag&&t.onScrollbarDrag(e)},S=function(n){_&&(n.preventDefault?n.preventDefault():n.returnValue=!1,C(n),e.setWrapperTransition(0),e.setTransition(w,0),e.setTransition(x,0),t.onScrollbarDrag&&t.onScrollbarDrag(e))},T=function(){_=!1,t.hide&&(clearTimeout(M),M=setTimeout(function(){w.style.opacity=0,e.setTransition(w,400)},1e3)),t.snapOnRelease&&e.swipeReset()};var E=e.support.touch?w:document;e.h.addEventListener(w,k.touchStart,b,!1),e.h.addEventListener(E,k.touchMove,S,!1),e.h.addEventListener(E,k.touchEnd,T,!1),C=function(t){var n=0,r=0;if(y){var i="touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].pageX:t.pageX||t.clientX;n=i-e.h.getOffset(w).left-f/2,0>n?n=0:n+f>s&&(n=s-f)}else{var o="touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].pageY:t.pageY||t.clientY;r=o-e.h.getOffset(w).top-p/2,0>r?r=0:r+p>l&&(r=l-p)}//Set Drag Position
e.setTranslate(x,{x:n,y:r});//Wrapper Offset
var a=-n/c,u=-r/c;e.setWrapperTranslate(a,u,0),e.updateActiveSlide(y?a:u)}}var M;return{onFirstInit:function(){r()},onInit:function(){r()},onTouchMoveEnd:function(){t.hide&&(clearTimeout(M),w.style.opacity=1,e.setTransition(w,200))},onTouchEnd:function(){t.hide&&(clearTimeout(M),M=setTimeout(function(){w.style.opacity=0,e.setTransition(w,400)},1e3))},onSetWrapperTransform:function(n){var r;if(y){var i=n.x*c,o=f;i>0?(r=i,i=0,o=f-r):-i+f>s&&(o=s+i),e.setTranslate(x,{x:-i}),x.style.width=o+"px"}else{var a=n.y*c,u=p;a>0?(r=a,a=0,u=p-r):-a+p>l&&(u=l+a),e.setTranslate(x,{y:-a}),x.style.height=u+"px"}e.params.freeMode&&t.hide&&(clearTimeout(M),w.style.opacity=1,M=setTimeout(function(){w.style.opacity=0,e.setTransition(w,400)},1e3))},onSetWrapperTransition:function(t){e.setTransition(x,t.duration)},onDestroy:function(){var t=e.support.touch?w:document;e.h.removeEventListener(w,k.touchStart,b,!1),e.h.removeEventListener(t,k.touchMove,S,!1),e.h.removeEventListener(t,k.touchEnd,T,!1)}}}}},/*global define:false require:false */
function(e,t,n){"undefined"!=typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd?define(n):t[e]=n()}("jquery-scrollto",this,function(){// Prepare
var e,t,n;// Export
// Fix scrolling animations on html/body on safari
// jQuery ScrollTo
// Apply our extensions to jQuery
return e=t=window.jQuery||require("jquery"),t.propHooks.scrollTop=t.propHooks.scrollLeft={get:function(e,t){var n=null;return("HTML"===e.tagName||"BODY"===e.tagName)&&("scrollLeft"===t?n=window.scrollX:"scrollTop"===t&&(n=window.scrollY)),null==n&&(n=e[t]),n}},t.Tween.propHooks.scrollTop=t.Tween.propHooks.scrollLeft={get:function(e){return t.propHooks.scrollTop.get(e.elem,e.prop)},set:function(e){// Our safari fix
"HTML"===e.elem.tagName||"BODY"===e.elem.tagName?(// Defaults
e.options.bodyScrollLeft=e.options.bodyScrollLeft||window.scrollX,e.options.bodyScrollTop=e.options.bodyScrollTop||window.scrollY,// Apply
"scrollLeft"===e.prop?e.options.bodyScrollLeft=Math.round(e.now):"scrollTop"===e.prop&&(e.options.bodyScrollTop=Math.round(e.now)),// Apply
window.scrollTo(e.options.bodyScrollLeft,e.options.bodyScrollTop)):e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},n={// Configuration
config:{duration:400,easing:"swing",callback:void 0,durationMode:"each",offsetTop:0,offsetLeft:0},// Set Configuration
configure:function(e){// Chain
// Apply Options to Config
return t.extend(n.config,e||{}),this},// Perform the Scroll Animation for the Collections
// We use $inline here, so we can determine the actual offset start for each overflow:scroll item
// Each collection is for each overflow:scroll item
scroll:function(e,r){// Prepare
var i,o,a,s,l,u,c,f,p,d,h,g,m,v,y,w,x,b;// Return true
// Determine the Scroll
// Prepare the Inline Element of the Container
// Insert the Inline Element of the Container
// Determine the top offset
// Determine the left offset
// Determine current scroll positions
// Reset the Inline Element of the Container
// Prepare the scroll options
// Prepare the callback
// Handle if we only want to scroll if we are outside the viewport
// Determine current scroll positions
// Check if we are in the range of the visible area of the container
// Determine the scroll options
// Check to see if the scroll is necessary
// Perform the scroll
return i=e.pop(),o=i.$container,a=i.$target,u=o.prop("tagName"),s=t("<span/>").css({position:"absolute",top:"0px",left:"0px"}),l=o.css("position"),o.css({position:"relative"}),s.appendTo(o),h=s.offset().top,g=a.offset().top,m=g-h-parseInt(r.offsetTop,10),v=s.offset().left,y=a.offset().left,w=y-v-parseInt(r.offsetLeft,10),c=o.prop("scrollTop"),f=o.prop("scrollLeft"),s.remove(),o.css({position:l}),x={},b=function(){// Return true
// Check
// Callback
// Recurse
return 0===e.length?"function"==typeof r.callback&&r.callback():n.scroll(e,r),!0},r.onlyIfOutside&&(p=c+o.height(),d=f+o.width(),m>c&&p>m&&(m=c),w>f&&d>w&&(w=f)),m!==c&&(x.scrollTop=m),w!==f&&(x.scrollLeft=w),o.prop("scrollHeight")===o.width()&&delete x.scrollTop,o.prop("scrollWidth")===o.width()&&delete x.scrollLeft,null!=x.scrollTop||null!=x.scrollLeft?o.animate(x,{duration:r.duration,easing:r.easing,complete:b}):b(),!0},// ScrollTo the Element using the Options
fn:function(e){// Prepare
var r,i,o,a;r=[];// Prepare
var s=t(this);if(0===s.length)// Chain
return this;// Cycle through the containers
for(// Handle Options
i=t.extend({},n.config,e),// Fetch
o=s.parent(),a=o.get(0);1===o.length&&a!==document.body&&a!==document;){// Check Container for scroll differences
var l,u;l="visible"!==o.css("overflow-y")&&a.scrollHeight!==a.clientHeight,u="visible"!==o.css("overflow-x")&&a.scrollWidth!==a.clientWidth,(l||u)&&(// Push the Collection
r.push({$container:o,$target:s}),// Update the Target
s=o),// Update the Container
o=o.parent(),a=o.get(0)}// Chain
// Add the final collection
// Adjust the Config
// Handle
return r.push({$container:t("html"),// document.body doesn't work in firefox, html works for all
// internet explorer starts at the beggining
$target:s}),"all"===i.durationMode&&(i.duration/=r.length),n.scroll(r,i),this}},t.ScrollTo=t.ScrollTo||n,t.fn.ScrollTo=t.fn.ScrollTo||n.fn,n});var FormSlider=function(){var e=this,t=$(".form-window"),n=$(".form-slider"),r=n.find("button.next"),i=n.find("button.prev"),o=t.find(".close"),a=n.find("button.send"),s=n.find("textarea");n.find(".error").hide();var l=!0,u=n.swiper({speed:1200,simulateTouch:!1,mode:"vertical"}),c=function(t,n){var r=!0;return"name"!=t||n||(e.error(t,formErrors.n1),r=!1),"contact"!=t||n||(e.error(t,formErrors.n2),r=!1),"info"!=t||n||(e.error(t,formErrors.n3),r=!1),"info"==t&&n.length>0&&n.length<10&&(e.error(t,formErrors.n4),r=!1),r};this.nextAction=function(){var t=$(u.getSlide(e.actualIndex)),r=t.attr("id").substr(6);if("budget"!=r){var i=n.find(":input[name="+r+"]").val().trim();if(c(r,i)){u.swipeNext(),e.actualIndex++;var o=$(u.getSlide(e.actualIndex));o.find("input, textarea").focus(),t.find(".error").html("")}}},this.prevAction=function(){u.swipePrev(),e.actualIndex--;var t=u.getSlide(e.actualIndex);$(t).find("input, textarea").focus()},n.find(":input").keypress(function(t){13==t.keyCode&&e.nextAction()}),r.click(function(){e.nextAction()}),i.click(function(){e.prevAction()}),o.click(function(){e.close()}),a.click(function(){e.send()}),s.keyup(function(){for(;$(this).outerHeight()<this.scrollHeight+parseFloat($(this).css("borderTopWidth"))+parseFloat($(this).css("borderBottomWidth"));)$(this).height($(this).height()+1)});var f=function(){n.find("input[name=name]").val(""),n.find("input[name=contact]").val(""),n.find("textarea[name=info]").val(""),n.find("input[name=budget]").val("")};this.error=function(e,t){var n=$("#slide-"+e+" .error");n.html(t),n.slideDown()},this.show=function(){t.fadeIn(),l&&u.reInit(),u.swipeTo(0,0),this.actualIndex=0;var e=u.getSlide(this.actualIndex);$(e).find("input").focus(),l=!1},this.close=function(){t.fadeOut()},this.send=function(){var e=n.find("input[name=name]").val(),t=n.find("input[name=contact]").val(),r=n.find("textarea[name=info]").val(),i=n.find("input[name=budget]").val();$.ajax({url:"email",type:"POST",data:{name:e,contact:t,info:r,budget:i},error:function(e){alert(e.responseText)},success:function(){u.swipeTo(4,1200),f()}})}};$(function(){if(!mobilecheck()){var e=new FormSlider;$(".open-form").click(function(t){t.preventDefault(),e.show()})}}),$(function(){function e(){{var e=new google.maps.LatLng(56.8330096,60.5895138,17),t={zoom:16,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!1,scrollwheel:!1,styles:[{featureType:"all",stylers:[{saturation:-100},{gamma:.5}]}]},n=new google.maps.Map(document.getElementById("map_canvas"),t);new google.maps.Marker({position:e,map:n,title:"Digital shark"})}}function t(){!isScrolledIntoView(a)&&!isScrolledIntoView(s)||u||l||(u=!0,o.animate({top:-25},4e3,function(){l=!0,u=!1}))}mobilecheck()&&$("html").addClass("mobile");var n=$(".arrow-left"),r=$(".arrow-right"),i=$(".process-slider").swiper({//useCSS3Transforms: false,
onSwiperCreated:function(){n.addClass("disabled")},onSlideChangeEnd:function(){var e=i.activeIndex;e+1>=5?r.addClass("disabled"):r.removeClass("disabled"),e+1==1?n.addClass("disabled"):n.removeClass("disabled")}});n.click(function(){i.swipePrev()}),r.click(function(){i.swipeNext()}),e();var o=$(".references-box"),a=($("#svg-factory"),$(".reference").first()),s=$(".reference").last(),l=!1,u=!1;mobilecheck()||t(),window.onscroll=function(){mobilecheck()||t()},$(window).scroll(function(){mobilecheck()||t()});var c=new Image;c.src="img/symbol.svg",//fix kvoli safari ... sipky v referenciach
-1!=navigator.userAgent.indexOf("Safari")&&-1!=navigator.userAgent.indexOf("Mac")&&-1==navigator.userAgent.indexOf("Chrome")&&//console.log('Safari on Mac detected, applying class...');
$("html").addClass("safari-mac")}),window.mobilecheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|android|ipad|playbook|silk|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},window.isScrolledIntoView=function(e){var t=$(window).scrollTop(),n=t+$(window).height(),r=e.offset().top,i=r+e.height();return n>=i&&r>=t},$(function(){//menuBgSvg.attr({height: '56px'});
function e(e){"block"==c.attr("display")?(c.attr({height:310}),f.animate({points:"200,0 0,0 0,310.8 200,310.8"},300,null,e)):(g.attr({height:242}),m.animate({points:"140,0 0,0 0,242 140,242"},300,null,e))}function t(){"block"==c.attr("display")?f.animate({points:"200,0 0,0 40,80 200,80"},300,null,function(){v.css("zIndex",100),c.attr({height:80})}):m.animate({points:"140,0 0,0 27.1,54.2 140,54.2"},300,null,function(){v.css("zIndex",100),g.attr({height:55})})}function n(){var e,t=400;e="block"==c.attr("display")?p:d;var n=e.select("path:nth-child(1)");n.animate({path:"M49.1,15L15.3,48.5"},t);var r=e.select("path:nth-child(2)");r.animate({opacity:0},t);var i=e.select("path:nth-child(3)");i.animate({path:"M49.1,48.5L15.3,15"},t)}function r(){w=!0;var e,t=400;e="block"==c.attr("display")?p:d;var n=e.select("path:nth-child(1)");n.animate({path:"M16.1,19.8h31.8"},t);var r=e.select("path:nth-child(2)");r.animate({opacity:1},t);var i=e.select("path:nth-child(3)");i.animate({path:"M16.1,44h31.8"},t,null,function(){w=!1})}function i(){if(!h&&!w&&!x){console.log("hover on");var e=p.select("path:nth-child(1)");e.animate({path:"M16.1,16h31.8"},200);var t=p.select("path:nth-child(3)");t.animate({path:"M16.1,47.9h31.8"},200)}}function o(){if(!h&&!w&&!x){console.log("hover out");var e=p.select("path:nth-child(1)");e.animate({path:"M16.1,19.8h31.8"},200);var t=p.select("path:nth-child(3)");t.animate({path:"M16.1,44h31.8"},200)}}function a(e){y.animate({right:"20%"},200,null,e)}function s(e){y.animate({right:-80},200,null,e)}function l(){x=!0,v.css("zIndex",200),n(),e(function(){a(function(){x=!1,h=!0})})}function u(){x=!0,r(),s(function(){t(function(){x=!1}),h=!1})}{var c=Snap(".menu-bg"),f=c.select(".menu"),p=Snap(".menu-button"),d=Snap(".menu-button-small"),h=!1,g=Snap(".menu-bg-small"),m=g.select(".menu"),v=$(".nav"),y=v.find("ul.links"),w=!1,x=!1;document.getElementsByClassName("menu-bg")}p.hover(i,o),p.click(function(){h?u():(console.log("dsfasd"),l())}),d.click(function(){h?u():(console.log("dsfasd"),l())}),$(".nav ul.links a").click(function(e){e.preventDefault();var t=$(this),n=t.attr("class");$("#"+n).ScrollTo({duration:1e3,callback:function(){u()}})}),$(".welcome button").click(function(e){e.preventDefault(),$("#services").ScrollTo({duration:1e3})}),$(".logo img").click(function(){$("#home").ScrollTo({duration:1e3})})}),$(function(){window.onload=function(){/* HELPERS */
function e(e,t,n){e.forEach(function(e,r){var i=t[r].attr("points");e.animate({points:i},n)})}function t(e,t,n,r){return setInterval(function(){e.animate({y:-t,opacity:0},n,null,function(){e.attr({y:0,opacity:1})})},r)}function n(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function r(e){I(e.name)||("home"==e.name&&(a.start(),s.start()),"designer"==e.name&&(c.start(),f.start()),"developer"==e.name&&(d.start(),h.start(),g.start()),"business"==e.name&&(v.start(),y.start(),w.start()),"references"==e.name&&(b.start(),S.start(),T.start(),C.start()),"about"==e.name&&(E.start(),M.start()),L.push(e.name))}function i(e){I(e.name)&&("home"==e.name&&(a.stop(),s.stop()),"designer"==e.name&&(c.stop(),f.stop()),"developer"==e.name&&(d.stop(),h.stop(),g.stop()),"business"==e.name&&(v.stop(),y.stop(),w.stop()),"references"==e.name&&(b.stop(),S.stop(),T.stop(),C.stop()),"about"==e.name&&(E.stop(),M.stop()),L=_.without(L,e.name))}/* HOME */
var o=Snap(document.getElementById("svg-enter").contentDocument.getElementById("enter")),a=new function(){var e=$("#rocks_big"),t=$("#rocks_small");this.start=function(){e.pan({fps:15,speed:1,dir:"right"}),t.pan({fps:10,speed:.5,dir:"right"})},this.stop=function(){e.destroy(),t.destroy()}},s=new function(){var e=(o.select("#button"),o.select("#button_glow")),t=null;e.attr({display:"block",opacity:0});var n=function(){e.animate({opacity:1},70,null,function(){setTimeout(function(){e.animate({opacity:0},50)},50)})};this.start=function(){t=setInterval(n,2e3)},this.stop=function(){clearInterval(t)}},l=(new function(){var e=this;this.duration=2200;var t=1e3/60/this.duration/4,n=o.select("#plane"),r=o.select("#route"),i=o.select("#button_green"),a=o.select("#button_glow"),s=r.getTotalLength(),l=function(e,t,n,r,i){var o=function(t){var r=1-t;return 3*r*r*t*e+3*r*t*t*n+t*t*t},a=function(e){var n=1-e;return 3*n*n*e*t+3*n*e*e*r+e*e*e},s=function(t){var r=1-t;return 3*(2*(t-1)*t+r*r)*e+3*(-t*t*t+2*r*t)*n};return function(e){var t,n,r,l,u,c,f=e;// First try a few iterations of Newton's method -- normally very fast.
for(r=f,c=0;8>c;c++){if(l=o(r)-f,Math.abs(l)<i)return a(r);if(u=s(r),Math.abs(u)<1e-6)break;r-=l/u}if(t=0,n=1,r=f,t>r)return a(t);if(r>n)return a(n);// Fallback to the bisection method for reliability.
for(;n>t;){if(l=o(r),Math.abs(l-f)<i)return a(r);f>l?t=r:n=r,r=.5*(n-t)+t}// Failure
return a(r)}},u=l(.73,1.09,.6,.56,t);this.run=function(){i.attr({display:"block"}),Snap.animate(0,s,function(e){var t=r.getPointAtLength(e);n.transform("t"+parseInt(t.x-45)+","+parseInt(t.y-0)+"r"+(t.alpha-180))},5500,u),setTimeout(function(){n.animate({opacity:0},500,null,function(){n.attr({opacity:1}),n.attr({transform:"none"}),i.attr({display:"none"})})},5e3)},a.click(e.run)},Snap(document.getElementById("svg-design").contentDocument.getElementById("design"))),u=l.select("#plant"),c=(new function(){var t=this,n=l.selectAll("#leaves_small polygon"),r=l.selectAll("#leaves_big polygon");this.run=function(){e(n,r,2e3)},u.click(t.run)},new function(){var e=l.select("#palicka"),t=(l.select("#hat"),null),n=function(){e.animate({y:-80},1900,null,r)},r=function(){e.animate({y:-60},1800,null,n)};this.start=function(){t=e.animate({y:-60},1e3,mina.easeIn,n)},this.stop=function(){t.stop()}}),f=(new function(){var e=this,t=l.selectAll("#tabula_poznamky svg"),n=function(e){return 1.7*e};this.run=function(e){e.animate({y:100,opacity:0},1200,n)},t.forEach(function(t){t.click(function(){e.run(t)})})},new function(){var e,t=l.selectAll("#stars polygon"),r=function(t){var i=n(200,300);e=t.animate({opacity:0},i,null,function(){t.animate({opacity:1},i,null,function(){r(t)})})};this.start=function(){t.forEach(function(e){r(e)})},this.stop=function(){e.stop()}}),p=Snap(document.getElementById("svg-code").contentDocument.getElementById("code")),d=new function(){var e=p.select("#rightbottom").selectAll("g.screen");e.attr({display:"none"}),e[0].attr({display:"block"});var t,n=0,r=function(){e.forEach(function(e){setTimeout(function(){e.attr({display:"block"}),setTimeout(function(){e.attr({display:"none"})},700)},n),n+=700}),n=0},i=function(){r(),t=setTimeout(i,2800)};this.start=function(){i()},this.stop=function(){clearTimeout(t)}},h=(new function(){var e=this,t=p.select("#right_top"),n=t.selectAll(".screen"),r=0;this.swap=function(){n.attr({display:"none"}),n[r%3].attr({display:"block"}),r++},t.click(function(){e.swap()})},new function(){var e,t,n,r,i=p.select("#redbutton_OFF"),o=p.select("#orangebutton_OFF"),a=p.select("#greenbutton_OFF"),s=p.select("#bluebutton_OFF"),l=function(e,t){return setInterval(function(){e.attr({display:"block"}),setTimeout(function(){e.attr({display:"none"})},t/2)},t)};this.start=function(){e=l(i,800),t=l(o,1e3),n=l(a,1500),r=l(s,1e3)},this.stop=function(){clearInterval(e),clearInterval(t),clearInterval(n),clearInterval(r)}}),g=new function(){var e=p.selectAll("#smoke svg"),r=[];this.start=function(){e.forEach(function(e){var i=n(700,1600);r.push(t(e,50,i,2*i))})},this.stop=function(){for(var e=0;e<r.length;e++){var t=r[e];clearInterval(t)}}},m=Snap(document.getElementById("svg-business").contentDocument.getElementById("business")),v=new function(){{var e={pads1:m.select("#poloha1"),pads2:m.select("#poloha2"),pads3:m.select("#poloha3")};m.select("#fan")}e.pads1.attr({display:"block"}),e.pads2.attr({display:"none"}),e.pads3.attr({display:"none"});var t,n=function(){for(var t=1;3>=t;t++)e["pads"+t].attr({display:"none"})},r=function(t){n(),e["pads"+t].attr({display:"block"})},i=function(){setTimeout(function(){r(2)},200),setTimeout(function(){r(3)},400),setTimeout(function(){r(1)},600)};this.start=function(){i(),t=setInterval(function(){i()},600)},this.stop=function(){clearInterval(t)}},y=new function(){var e,t=m.select("#owl"),n=m.selectAll("#opened rect"),r=m.selectAll("#closed rect"),i=!1,o=function(){i||n.forEach(function(e,t){var n=r[t].attr("height"),o=r[t].attr("y"),a=e.attr("height"),s=e.attr("y");i=!0,e.animate({height:n,y:o},100,null,function(){e.animate({height:a,y:s},100,null,function(){i=!1})})})};this.start=function(){e=setInterval(o,4e3)},this.stop=function(){clearInterval(e)},t.click(o)},w=(new function(){var e=m.select("#lamp"),t=e.select("#on"),n=e.select("#off"),r=function(){n.attr("none"==n.attr("display")?{display:"block"}:{display:"none"}),t.attr("none"==t.attr("display")?{display:"block"}:{display:"none"})};e.click(r)},new function(){var e,t=m.select("#ofina1"),n=m.select("#ofina2"),r=t.attr("d"),i=function(){e=t.animate({d:n.attr("d")},500,null,function(){t.animate({d:r},800,null,i)})};this.start=function(){i()},this.stop=function(){e.stop()}}),x=Snap(document.getElementById("svg-factory").contentDocument.getElementById("factory")),b=new function(){var e,n,r,i=x.select("#smoke1-svg"),o=x.select("#smoke2-svg"),a=x.select("#smoke3-svg");this.start=function(){e=t(i,200,2e3,3e3),n=t(o,200,2e3,2400),r=t(a,200,2e3,2900)},this.stop=function(){clearInterval(e),clearInterval(n),clearInterval(r)}},S=new function(){var e,t,n=x.select("#piest1_up"),r=x.select("#piest2_up"),i=function(e,t){return e.animate({y:t},500,null,function(){e.animate({y:0},500,null,function(){i(e,t)})})};this.start=function(){e=i(n,-20),t=i(r,20)},this.stop=function(){e.stop(),t.stop()}},T=new function(){var e,t,n=x.select("#rucicka1"),r=x.select("#rucicka2"),i=function(){return n.animate({transform:"r90, 894.8, 357"},200,null,function(){n.animate({transform:"r75, 894.8, 357"},200,null,i)})},o=function(){return r.animate({transform:"r90, 894.8, 428.4"},180,null,function(){r.animate({transform:"r70, 894.8, 428.4"},180,null,o)})};this.start=function(){e=i(),t=o()},this.stop=function(){e.stop(),t.stop(),n.animate({transform:"r-70, 894.8, 357"},800),r.animate({transform:"r-84, 894.8, 428.4"},800)}},C=new function(){var e,t,n,r,i=x.select("#movethis1"),o=x.select("#movethis2"),a=x.select("#movethis3"),s=x.select("#movethis4"),l=1400,u=function(e){return e.animate({height:0},l,null,function(){e.animate({height:53.5},l,null,function(){u(e)})})};this.start=function(){e=u(i),setTimeout(function(){t=u(o)},1300),setTimeout(function(){n=u(a)},350),setTimeout(function(){r=u(s)},800)};var c=function(e){e.animate({height:53.5},500)};this.stop=function(){e.stop(),t&&t.stop(),n&&n.stop(),r&&r.stop(),c(i),c(o),c(a),c(s)}},k=(new function(){var e=$("#switch"),t=!1,n=function(){e.sprite({fps:12,no_of_frames:9,play_frames:5}),t=!0},r=function(){e.sprite({fps:12,no_of_frames:9,play_frames:5,rewind:!0}),t=!1};e.click(function(){t?(r(),b.start(),S.start(),T.start(),C.start()):(n(),b.stop(),S.stop(),T.stop(),C.stop())})},Snap(document.getElementById("svg-about").contentDocument.getElementById("about"))),E=new function(){var e=k.select("#bubbles").selectAll("svg"),r=[];this.start=function(){e.forEach(function(e){var i=n(1500,3e3);r.push(t(e,200,i,2*i))})},this.stop=function(){for(var e=0;e<r.length;e++){var t=r[e];clearInterval(t)}}},M=new function(){var e,t=k.select("#panaci").selectAll("svg"),n=function(e,t){e.animate({opacity:.4},100,null,function(){e.attr({opacity:0}),e.animate({opacity:.6},160,null,function(){e.attr({opacity:.2}),e.animate({opacity:.8},210,null,function(){e.attr({opacity:1}),t()})})})},r=function(){var e=0;t.forEach(function(t){setTimeout(function(){n(t,function(){setTimeout(function(){t.animate({opacity:0},300)},1e3)})},e),e+=2e3})},i=function(){r(),e=setTimeout(i,6e3)};this.start=function(){i()},this.stop=function(){clearTimeout(e)}},A=new function(){var e=this,t=$("#svg-train"),n=$(".timer"),r=n.find("span"),i=9,o=!1,a=!0,s=function(e){var t=i;o=!0,n.css("cursor","default");var a=setInterval(function(){t--,r.html("0:0"+t),0==t&&(e(),clearInterval(a))},1e3)},l=function(){$(".jano").hide()},u=function(){$(".jano").show()},c=function(){t.animate({left:"25%"},5e3,"easeOutCirc",function(){a?(l(),a=!1):(u(),a=!0),setTimeout(f,4e3)})},f=function(){t.animate({left:-3e3},5e3,"easeInCirc",function(){r.html("0:0"+i),t.css("left",4e3),o=!1,n.css("cursor","pointer")})};this.start=function(){o||s(c)},n.click(e.start)},N={home:{name:"home",el:$("div.home")},designer:{name:"designer",el:$("div.designer")},developer:{name:"developer",el:$("div.developer")},business:{name:"business",el:$("div.business")},references:{name:"references",el:$("div.references")},about:{name:"about",el:$("div.about")},contact:{name:"contact",el:$("div.contact")}},L=[],I=function(e){return _.contains(L,e)},j=function(){_.each(N,function(e){e.top=e.el.offset().top,e.bottom=e.top+e.el.height()})};window.onresize=function(){j()},j();var P=function(e,t,n){return t<=e.bottom&&n>=e.top},D=function(){var e=$(window).scrollTop(),t=e+$(window).height();_.each(N,function(n){P(n,e,t)?r(n):i(n)})};mobilecheck()||D();var O=!1;window.onscroll=function(){mobilecheck()||(D(),isScrolledIntoView($(".timer"))&&!O&&(A.start(),O=!0))}}}),window.isScrolledIntoView=function(e){var t=$(window).scrollTop(),n=t+$(window).height(),r=e.offset().top,i=r+e.height();return n>=i&&r>=t};var ReferenceSlider=function(){var e=this,t=$(".reference-window"),n=$(".reference-slider"),r=($(".loader"),$(".next")),o=$(".prev"),a=!1,s=!1,l=!0,u=!0;//referenceWindow.bind('contextmenu', function(e) {
//    e.preventDefault();
//    e.stopPropagation();
//    console.log('zakazane prave');
//    return false;
//});
e.slides={},e.appendedIndexes=[],e.getReferencesOrder=function(){var e=$(".references-box .reference"),t=[];return e.each(function(e){var n=$(this).data("name");t[e]=n}),t},e.orders=e.getReferencesOrder(),e.total=e.orders.length;var c=function(){return e.orders[x()%e.total]},f=function(){return e.orders[w()%e.total]},p=function(t){var n;for(i=0;i<e.total;i++)e.orders[i]==t&&(n=i);return n},d=function(t){return e.orders[t]},h=function(e){return new RSVP.Promise(function(t){//console.log(slideContent);
var n=$("<div/>").html(e).find("img");0==n.length&&t();var r=[];n.each(function(e){r[e]=new Image,r[e].src=$(this).attr("src")});var i=n.length;n.load(function(){//console.log(count);
i--,0==i&&t()}).filter(function(){return this.complete}).load()})};this.loadSlide=function(t){return new RSVP.Promise(function(n,r){if(e.slides[t])n(e.slides[t]);else{var i=lang+"/referenceslide/"+t;$.ajax({url:i,success:function(r){e.slides[t]=r,h(r).then(function(){n(e.slides[t])})},error:function(){r()}})}})},e.prepareNeighbours=function(){-1==e.appendedIndexes.indexOf(e.actualIndex-1)&&0!=e.actualIndex&&e.preparePrev(),-1==e.appendedIndexes.indexOf(e.actualIndex+1)&&e.actualIndex!=e.total-1&&e.prepareNext()},e.prepareNext=function(){//nextArrow.addClass('load');
l=!1;var t=c();//var slide = swiper.appendSlide('<div><div class="loader"><div class="symbol"></div></div></div>');
e.loadSlide(t).then(function(n){//$(slide).html(slideContent);
//setSlideStyle(slide, next);
var r=b.appendSlide(n);g(r,t),v(r),e.appendedIndexes.push(e.actualIndex+1),l=!0})},e.preparePrev=function(){//prevArrow.addClass('load');
u=!1;var t=f();e.loadSlide(t).then(function(n){var r=b.prependSlide(n);g(r,t),v(r),e.appendedIndexes.push(e.actualIndex-1),b.swipeTo(1,0,!1),u=!0})};var g=function(e,t){$(e).addClass(t)},m=function(){t.addClass(e.actualName)};this.showSlide=function(n){//showLoader();
t.css("backgroundColor","#fff"),e.actualName=n,e.actualIndex=p(n);var r=$('<div><div class="loader"><div class="symbol"></div></div></div>'),i=b.appendSlide(r.html());$(".nav").hide(),$(".logo").hide(),e.loadSlide(n).then(function(t){return new RSVP.Promise(function(n){//var slide = swiper.appendSlide(slideContent);
$(i).html(t),b.reInit(),e.appendedIndexes.push(e.actualIndex),g(i,e.actualName),m(),v(i),y(),//hideLoader();
n()})}).then(function(){e.prepareNeighbours(),0==e.actualIndex&&b.swipeTo(0,0,!1)}),t.fadeIn(),a=!0,$("body").css("overflow-y","hidden")};var v=function(e){var t=$(e).find(".swiper-scrollbar");$(e).find(".scroll-container").swiper({mode:"vertical",scrollContainer:!0,//simulateTouch: false,
mousewheelControl:!0,scrollbar:{container:t[0],hide:!1,draggable:!0}})};this.nextSlide=function(){t.removeClass(e.actualName),e.actualIndex=x(),e.actualName=d(e.actualIndex),y(),m(),e.prepareNeighbours()},this.prevSlide=function(){t.removeClass(e.actualName),e.actualIndex=w(),e.actualName=d(e.actualIndex),y(),m(),e.prepareNeighbours()};var y=function(){r.show(),o.show(),e.actualIndex==e.total-1&&r.hide(),0==e.actualIndex&&o.hide()},w=function(){return 0==e.actualIndex?e.total-1:e.actualIndex-1},x=function(){return e.actualIndex==e.total-1?0:e.actualIndex+1};this.close=function(){t.css("backgroundColor","transparent"),t.fadeOut(300,function(){t.removeClass(e.actualName),b.removeAllSlides(),e.appendedIndexes=[]}),$("body").css("overflow-y","auto"),$(".nav").show(),$(".logo").show(),a=!1};var b=n.swiper({queueEndCallbacks:!0,loop:!1,simulateTouch:!1,//shortSwipes: false,
onSlideChangeStart:function(){s=!0},onSlideChangeEnd:function(t,n){"next"==n||"toNext"==n?e.nextSlide():("prev"==n||"toPrev"==n)&&e.prevSlide(),s=!1}});$(document).keydown(function(t){a&&(37==t.which&&(e.swipePrev(),t.preventDefault()),39==t.which&&(e.swipeNext(),t.preventDefault()),27==t.which&&(e.close(),t.preventDefault()))}),e.swipeNext=function(){!s&&l&&b.swipeNext()},e.swipePrev=function(){!s&&u&&b.swipePrev()}};$(function(){var e=$(".reference");if(mobilecheck())e.click(function(){var e=$(this).find("a").attr("href");window.location=e});});