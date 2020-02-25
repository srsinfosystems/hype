/*...
	/clipone/js/jquery_2.0.3.js
*/

/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//# sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*...
	/js/icheck-1.x/icheck.min.js
*/
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);
/*...
	/clipone/plugins/bootstrap/js/bootstrap.min.js
*/
/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

/*...
	/clipone/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js
*/
/*
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 *
 * A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * License: MIT
 *
 * http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */(function(e,t,n){if("ontouchstart"in document)return;var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var i=e(this),s=i.parent(),o={delay:500,instantlyCloseOthers:!0},u={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},a=e.extend(!0,{},o,n,u),f;s.hover(function(n){if(!s.hasClass("open")&&!i.is(n.target))return!0;a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open");s.trigger(e.Event("show.bs.dropdown"))},function(){f=t.setTimeout(function(){s.removeClass("open");s.trigger("hide.bs.dropdown")},a.delay)});i.hover(function(){a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open");s.trigger(e.Event("show.bs.dropdown"))});s.find(".dropdown-submenu").each(function(){var n=e(this),r;n.hover(function(){t.clearTimeout(r);n.children(".dropdown-menu").show();n.siblings().children(".dropdown-menu").hide()},function(){var e=n.children(".dropdown-menu");r=t.setTimeout(function(){e.hide()},a.delay)})})})};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);
/*...
	/clipone/plugins/blockUI/jquery.blockUI.js
*/
/*!
 * jQuery blockUI plugin
 * Version 2.65.0-2013.09.02
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.65; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick();

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();
/*...
	/clipone/plugins/iCheck/jquery.icheck.min.js
*/
/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
(function(f){function C(a,c,d){var b=a[0],e=/er/.test(d)?k:/bl/.test(d)?u:j;active=d==E?{checked:b[j],disabled:b[u],indeterminate:"true"==a.attr(k)||"false"==a.attr(v)}:b[e];if(/^(ch|di|in)/.test(d)&&!active)p(a,e);else if(/^(un|en|de)/.test(d)&&active)w(a,e);else if(d==E)for(var e in active)active[e]?p(a,e,!0):w(a,e,!0);else if(!c||"toggle"==d){if(!c)a[r]("ifClicked");active?b[l]!==x&&w(a,e):p(a,e)}}function p(a,c,d){var b=a[0],e=a.parent(),g=c==j,H=c==k,m=H?v:g?I:"enabled",r=h(b,m+y(b[l])),L=h(b,
c+y(b[l]));if(!0!==b[c]){if(!d&&c==j&&b[l]==x&&b.name){var p=a.closest("form"),s='input[name="'+b.name+'"]',s=p.length?p.find(s):f(s);s.each(function(){this!==b&&f.data(this,n)&&w(f(this),c)})}H?(b[c]=!0,b[j]&&w(a,j,"force")):(d||(b[c]=!0),g&&b[k]&&w(a,k,!1));J(a,g,c,d)}b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"default");e[t](L||h(b,c));e[A](r||h(b,m)||"")}function w(a,c,d){var b=a[0],e=a.parent(),g=c==j,f=c==k,m=f?v:g?I:"enabled",n=h(b,m+y(b[l])),p=h(b,c+y(b[l]));if(!1!==b[c]){if(f||!d||"force"==d)b[c]=
!1;J(a,g,m,d)}!b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"pointer");e[A](p||h(b,c)||"");e[t](n||h(b,m))}function K(a,c){if(f.data(a,n)){var d=f(a);d.parent().html(d.attr("style",f.data(a,n).s||"")[r](c||""));d.off(".i").unwrap();f(D+'[for="'+a.id+'"]').add(d.closest(D)).off(".i")}}function h(a,c,d){if(f.data(a,n))return f.data(a,n).o[c+(d?"":"Class")]}function y(a){return a.charAt(0).toUpperCase()+a.slice(1)}function J(a,c,d,b){if(!b){if(c)a[r]("ifToggled");a[r]("ifChanged")[r]("if"+y(d))}}var n="iCheck",
F=n+"-helper",x="radio",j="checked",I="un"+j,u="disabled",v="determinate",k="in"+v,E="update",l="type",t="addClass",A="removeClass",r="trigger",D="label",z="cursor",G=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);f.fn[n]=function(a,c){var d=":checkbox, :"+x,b=f(),e=function(a){a.each(function(){var a=f(this);b=a.is(d)?b.add(a):b.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),
e(this),b.each(function(){"destroy"==a?K(this,"ifDestroyed"):C(f(this),!0,a);f.isFunction(c)&&c()});if("object"==typeof a||!a){var g=f.extend({checkedClass:j,disabledClass:u,indeterminateClass:k,labelHover:!0},a),h=g.handle,m=g.hoverClass||"hover",y=g.focusClass||"focus",v=g.activeClass||"active",z=!!g.labelHover,s=g.labelHoverClass||"hover",B=(""+g.increaseArea).replace("%","")|0;if("checkbox"==h||h==x)d=":"+h;-50>B&&(B=-50);e(this);return b.each(function(){K(this);var a=f(this),b=this,c=b.id,d=
-B+"%",e=100+2*B+"%",e={position:"absolute",top:d,left:d,display:"block",width:e,height:e,margin:0,padding:0,background:"#fff",border:0,opacity:0},d=G?{position:"absolute",visibility:"hidden"}:B?e:{position:"absolute",opacity:0},h="checkbox"==b[l]?g.checkboxClass||"icheckbox":g.radioClass||"i"+x,k=f(D+'[for="'+c+'"]').add(a.closest(D)),q=a.wrap('<div class="'+h+'"/>')[r]("ifCreated").parent().append(g.insert),e=f('<ins class="'+F+'"/>').css(e).appendTo(q);a.data(n,{o:g,s:a.attr("style")}).css(d);
g.inheritClass&&q[t](b.className);g.inheritID&&c&&q.attr("id",n+"-"+c);"static"==q.css("position")&&q.css("position","relative");C(a,!0,E);if(k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(c){var d=c[l],e=f(this);if(!b[u])if("click"==d?C(a,!1,!0):z&&(/ve|nd/.test(d)?(q[A](m),e[A](s)):(q[t](m),e[t](s))),G)c.stopPropagation();else return!1});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(c){var d=c[l];c=c.keyCode;if("click"==d)return!1;if("keydown"==
d&&32==c)return b[l]==x&&b[j]||(b[j]?w(a,j):p(a,j)),!1;if("keyup"==d&&b[l]==x)!b[j]&&p(a,j);else if(/us|ur/.test(d))q["blur"==d?A:t](y)});e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(d){var c=d[l],e=/wn|up/.test(c)?v:m;if(!b[u]){if("click"==c)C(a,!1,!0);else{if(/wn|er|in/.test(c))q[t](e);else q[A](e+" "+v);if(k.length&&z&&e==m)k[/ut|nd/.test(c)?A:t](s)}if(G)d.stopPropagation();else return!1}})})}return this}})(jQuery);
/*...
	/clipone/plugins/perfect-scrollbar/src/jquery.mousewheel.js
*/
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);
/*...
	/clipone/plugins/perfect-scrollbar/src/perfect-scrollbar.js
*/
/* Copyright (c) 2012 HyeonJe Jun (http://github.com/noraesae)
 * Licensed under the MIT License
 */
'use strict';
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  // The default settings for the plugin
  var defaultSettings = {
    wheelSpeed: 10,
    wheelPropagation: false,
    minScrollbarLength: null,
    useBothWheelAxes: false,
    useKeyboard: true,
    suppressScrollX: false,
    suppressScrollY: false,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0
  };

  $.fn.perfectScrollbar = function (suppliedSettings, option) {

    return this.each(function () {
      // Use the default settings
      var settings = $.extend(true, {}, defaultSettings),
          $this = $(this);

      if (typeof suppliedSettings === "object") {
        // But over-ride any supplied
        $.extend(true, settings, suppliedSettings);
      } else {
        // If no settings were supplied, then the first param must be the option
        option = suppliedSettings;
      }

      // Catch options

      if (option === 'update') {
        if ($this.data('perfect-scrollbar-update')) {
          $this.data('perfect-scrollbar-update')();
        }
        return $this;
      }
      else if (option === 'destroy') {
        if ($this.data('perfect-scrollbar-destroy')) {
          $this.data('perfect-scrollbar-destroy')();
        }
        return $this;
      }

      if ($this.data('perfect-scrollbar')) {
        // if there's already perfect-scrollbar
        return $this.data('perfect-scrollbar');
      }


      // Or generate new perfectScrollbar

      // Set class to the container
      $this.addClass('ps-container');

      var $scrollbarXRail = $("<div class='ps-scrollbar-x-rail'></div>").appendTo($this),
          $scrollbarYRail = $("<div class='ps-scrollbar-y-rail'></div>").appendTo($this),
          $scrollbarX = $("<div class='ps-scrollbar-x'></div>").appendTo($scrollbarXRail),
          $scrollbarY = $("<div class='ps-scrollbar-y'></div>").appendTo($scrollbarYRail),
          scrollbarXActive,
          scrollbarYActive,
          containerWidth,
          containerHeight,
          contentWidth,
          contentHeight,
          scrollbarXWidth,
          scrollbarXLeft,
          scrollbarXBottom = parseInt($scrollbarXRail.css('bottom'), 10),
          scrollbarYHeight,
          scrollbarYTop,
          scrollbarYRight = parseInt($scrollbarYRail.css('right'), 10);

      var updateContentScrollTop = function () {
        var scrollTop = parseInt(scrollbarYTop * (contentHeight - containerHeight) / (containerHeight - scrollbarYHeight), 10);
        $this.scrollTop(scrollTop);
        $scrollbarXRail.css({bottom: scrollbarXBottom - scrollTop});
      };

      var updateContentScrollLeft = function () {
        var scrollLeft = parseInt(scrollbarXLeft * (contentWidth - containerWidth) / (containerWidth - scrollbarXWidth), 10);
        $this.scrollLeft(scrollLeft);
        $scrollbarYRail.css({right: scrollbarYRight - scrollLeft});
      };

      var getSettingsAdjustedThumbSize = function (thumbSize) {
        if (settings.minScrollbarLength) {
          thumbSize = Math.max(thumbSize, settings.minScrollbarLength);
        }
        return thumbSize;
      };

      var updateScrollbarCss = function () {
        $scrollbarXRail.css({left: $this.scrollLeft(), bottom: scrollbarXBottom - $this.scrollTop(), width: containerWidth, display: settings.suppressScrollX ? "none": "inherit"});
        $scrollbarYRail.css({top: $this.scrollTop(), right: scrollbarYRight - $this.scrollLeft(), height: containerHeight, display: settings.suppressScrollY ? "none": "inherit"});
        $scrollbarX.css({left: scrollbarXLeft, width: scrollbarXWidth});
        $scrollbarY.css({top: scrollbarYTop, height: scrollbarYHeight});
      };

      var updateBarSizeAndPosition = function () {
        containerWidth = $this.width();
        containerHeight = $this.height();
        contentWidth = $this.prop('scrollWidth');
        contentHeight = $this.prop('scrollHeight');

        if (!settings.suppressScrollX && containerWidth + settings.scrollXMarginOffset < contentWidth) {
          scrollbarXActive = true;
          scrollbarXWidth = getSettingsAdjustedThumbSize(parseInt(containerWidth * containerWidth / contentWidth, 10));
          scrollbarXLeft = parseInt($this.scrollLeft() * (containerWidth - scrollbarXWidth) / (contentWidth - containerWidth), 10);
        }
        else {
          scrollbarXActive = false;
          scrollbarXWidth = 0;
          scrollbarXLeft = 0;
          $this.scrollLeft(0);
        }

        if (!settings.suppressScrollY && containerHeight + settings.scrollYMarginOffset < contentHeight) {
          scrollbarYActive = true;
          scrollbarYHeight = getSettingsAdjustedThumbSize(parseInt(containerHeight * containerHeight / contentHeight, 10));
          scrollbarYTop = parseInt($this.scrollTop() * (containerHeight - scrollbarYHeight) / (contentHeight - containerHeight), 10);
        }
        else {
          scrollbarYActive = false;
          scrollbarYHeight = 0;
          scrollbarYTop = 0;
          $this.scrollTop(0);
        }

        if (scrollbarYTop >= containerHeight - scrollbarYHeight) {
          scrollbarYTop = containerHeight - scrollbarYHeight;
        }
        if (scrollbarXLeft >= containerWidth - scrollbarXWidth) {
          scrollbarXLeft = containerWidth - scrollbarXWidth;
        }

        updateScrollbarCss();
      };

      var moveBarX = function (currentLeft, deltaX) {
        var newLeft = currentLeft + deltaX,
            maxLeft = containerWidth - scrollbarXWidth;

        if (newLeft < 0) {
          scrollbarXLeft = 0;
        }
        else if (newLeft > maxLeft) {
          scrollbarXLeft = maxLeft;
        }
        else {
          scrollbarXLeft = newLeft;
        }
        $scrollbarXRail.css({left: $this.scrollLeft()});
        $scrollbarX.css({left: scrollbarXLeft});
      };

      var moveBarY = function (currentTop, deltaY) {
        var newTop = currentTop + deltaY,
            maxTop = containerHeight - scrollbarYHeight;

        if (newTop < 0) {
          scrollbarYTop = 0;
        }
        else if (newTop > maxTop) {
          scrollbarYTop = maxTop;
        }
        else {
          scrollbarYTop = newTop;
        }
        $scrollbarYRail.css({top: $this.scrollTop()});
        $scrollbarY.css({top: scrollbarYTop});
      };

      var bindMouseScrollXHandler = function () {
        var currentLeft,
            currentPageX;

        $scrollbarX.bind('mousedown.perfect-scrollbar', function (e) {
          currentPageX = e.pageX;
          currentLeft = $scrollbarX.position().left;
          $scrollbarXRail.addClass('in-scrolling');
          e.stopPropagation();
          e.preventDefault();
        });

        $(document).bind('mousemove.perfect-scrollbar', function (e) {
          if ($scrollbarXRail.hasClass('in-scrolling')) {
            updateContentScrollLeft();
            moveBarX(currentLeft, e.pageX - currentPageX);
            e.stopPropagation();
            e.preventDefault();
          }
        });

        $(document).bind('mouseup.perfect-scrollbar', function (e) {
          if ($scrollbarXRail.hasClass('in-scrolling')) {
            $scrollbarXRail.removeClass('in-scrolling');
          }
        });

        currentLeft =
        currentPageX = null;
      };

      var bindMouseScrollYHandler = function () {
        var currentTop,
            currentPageY;

        $scrollbarY.bind('mousedown.perfect-scrollbar', function (e) {
          currentPageY = e.pageY;
          currentTop = $scrollbarY.position().top;
          $scrollbarYRail.addClass('in-scrolling');
          e.stopPropagation();
          e.preventDefault();
        });

        $(document).bind('mousemove.perfect-scrollbar', function (e) {
          if ($scrollbarYRail.hasClass('in-scrolling')) {
            updateContentScrollTop();
            moveBarY(currentTop, e.pageY - currentPageY);
            e.stopPropagation();
            e.preventDefault();
          }
        });

        $(document).bind('mouseup.perfect-scrollbar', function (e) {
          if ($scrollbarYRail.hasClass('in-scrolling')) {
            $scrollbarYRail.removeClass('in-scrolling');
          }
        });

        currentTop =
        currentPageY = null;
      };

      // check if the default scrolling should be prevented.
      var shouldPreventDefault = function (deltaX, deltaY) {
        var scrollTop = $this.scrollTop();
        if (deltaX === 0) {
          if (!scrollbarYActive) {
            return false;
          }
          if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= contentHeight - containerHeight && deltaY < 0)) {
            return !settings.wheelPropagation;
          }
        }

        var scrollLeft = $this.scrollLeft();
        if (deltaY === 0) {
          if (!scrollbarXActive) {
            return false;
          }
          if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= contentWidth - containerWidth && deltaX > 0)) {
            return !settings.wheelPropagation;
          }
        }
        return true;
      };

      // bind handlers
      var bindMouseWheelHandler = function () {
        var shouldPrevent = false;
        $this.bind('mousewheel.perfect-scrollbar', function (e, delta, deltaX, deltaY) {
          if (!settings.useBothWheelAxes) {
            // deltaX will only be used for horizontal scrolling and deltaY will
            // only be used for vertical scrolling - this is the default
            $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
            $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));
          } else if (scrollbarYActive && !scrollbarXActive) {
            // only vertical scrollbar is active and useBothWheelAxes option is
            // active, so let's scroll vertical bar using both mouse wheel axes
            if (deltaY) {
              $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
            } else {
              $this.scrollTop($this.scrollTop() + (deltaX * settings.wheelSpeed));
            }
          } else if (scrollbarXActive && !scrollbarYActive) {
            // useBothWheelAxes and only horizontal bar is active, so use both
            // wheel axes for horizontal bar
            if (deltaX) {
              $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));
            } else {
              $this.scrollLeft($this.scrollLeft() - (deltaY * settings.wheelSpeed));
            }
          }

          // update bar position
          updateBarSizeAndPosition();

          shouldPrevent = shouldPreventDefault(deltaX, deltaY);
          if (shouldPrevent) {
            e.preventDefault();
          }
        });

        // fix Firefox scroll problem
        $this.bind('MozMousePixelScroll.perfect-scrollbar', function (e) {
          if (shouldPrevent) {
            e.preventDefault();
          }
        });
      };

      var bindKeyboardHandler = function () {
        var hovered = false;
        $this.bind('mouseenter.perfect-scrollbar', function (e) {
          hovered = true;
        });
        $this.bind('mouseleave.perfect-scrollbar', function (e) {
          hovered = false;
        });

        var shouldPrevent = false;
        $(document).bind('keydown.perfect-scrollbar', function (e) {
          if (!hovered) {
            return;
          }

          var deltaX = 0,
              deltaY = 0;

          switch (e.which) {
          case 37: // left
            deltaX = -3;
            break;
          case 38: // up
            deltaY = 3;
            break;
          case 39: // right
            deltaX = 3;
            break;
          case 40: // down
            deltaY = -3;
            break;
          default:
            return;
          }

          $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
          $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));

          // update bar position
          updateBarSizeAndPosition();

          shouldPrevent = shouldPreventDefault(deltaX, deltaY);
          if (shouldPrevent) {
            e.preventDefault();
          }
        });
      };

      var bindRailClickHandler = function () {
        var stopPropagation = function (e) { e.stopPropagation(); };

        $scrollbarY.bind('click.perfect-scrollbar', stopPropagation);
        $scrollbarYRail.bind('click.perfect-scrollbar', function (e) {
          var halfOfScrollbarLength = parseInt(scrollbarYHeight / 2, 10),
              positionTop = e.pageY - $scrollbarYRail.offset().top - halfOfScrollbarLength,
              maxPositionTop = containerHeight - scrollbarYHeight,
              positionRatio = positionTop / maxPositionTop;

          if (positionRatio < 0) {
            positionRatio = 0;
          } else if (positionRatio > 1) {
            positionRatio = 1;
          }

          $this.scrollTop((contentHeight - containerHeight) * positionRatio);

          // update bar position
          updateBarSizeAndPosition();
        });

        $scrollbarX.bind('click.perfect-scrollbar', stopPropagation);
        $scrollbarXRail.bind('click.perfect-scrollbar', function (e) {
          var halfOfScrollbarLength = parseInt(scrollbarXWidth / 2, 10),
              positionLeft = e.pageX - $scrollbarXRail.offset().left - halfOfScrollbarLength,
              maxPositionLeft = containerWidth - scrollbarXWidth,
              positionRatio = positionLeft / maxPositionLeft;

          if (positionRatio < 0) {
            positionRatio = 0;
          } else if (positionRatio > 1) {
            positionRatio = 1;
          }

          $this.scrollLeft((contentWidth - containerWidth) * positionRatio);

          // update bar position
          updateBarSizeAndPosition();
        });
      };

      // bind mobile touch handler
      var bindMobileTouchHandler = function () {
        var applyTouchMove = function (differenceX, differenceY) {
          $this.scrollTop($this.scrollTop() - differenceY);
          $this.scrollLeft($this.scrollLeft() - differenceX);

          // update bar position
          updateBarSizeAndPosition();
        };

        var startCoords = {},
            startTime = 0,
            speed = {},
            breakingProcess = null,
            inGlobalTouch = false;

        $(window).bind("touchstart.perfect-scrollbar", function (e) {
          inGlobalTouch = true;
        });
        $(window).bind("touchend.perfect-scrollbar", function (e) {
          inGlobalTouch = false;
        });

        $this.bind("touchstart.perfect-scrollbar", function (e) {
          var touch = e.originalEvent.targetTouches[0];

          startCoords.pageX = touch.pageX;
          startCoords.pageY = touch.pageY;

          startTime = (new Date()).getTime();

          if (breakingProcess !== null) {
            clearInterval(breakingProcess);
          }

          e.stopPropagation();
        });
        $this.bind("touchmove.perfect-scrollbar", function (e) {
          if (!inGlobalTouch && e.originalEvent.targetTouches.length === 1) {
            var touch = e.originalEvent.targetTouches[0];

            var currentCoords = {};
            currentCoords.pageX = touch.pageX;
            currentCoords.pageY = touch.pageY;

            var differenceX = currentCoords.pageX - startCoords.pageX,
              differenceY = currentCoords.pageY - startCoords.pageY;

            applyTouchMove(differenceX, differenceY);
            startCoords = currentCoords;

            var currentTime = (new Date()).getTime();
            speed.x = differenceX / (currentTime - startTime);
            speed.y = differenceY / (currentTime - startTime);
            startTime = currentTime;

            e.preventDefault();
          }
        });
        $this.bind("touchend.perfect-scrollbar", function (e) {
          clearInterval(breakingProcess);
          breakingProcess = setInterval(function () {
            if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
              clearInterval(breakingProcess);
              return;
            }

            applyTouchMove(speed.x * 30, speed.y * 30);

            speed.x *= 0.8;
            speed.y *= 0.8;
          }, 10);
        });
      };

      var destroy = function () {
        $this.unbind('.perfect-scrollbar');
        $(window).unbind('.perfect-scrollbar');
        $(document).unbind('.perfect-scrollbar');
        $this.data('perfect-scrollbar', null);
        $this.data('perfect-scrollbar-update', null);
        $this.data('perfect-scrollbar-destroy', null);
        $scrollbarX.remove();
        $scrollbarY.remove();
        $scrollbarXRail.remove();
        $scrollbarYRail.remove();

        // clean all variables
        $scrollbarX =
        $scrollbarY =
        containerWidth =
        containerHeight =
        contentWidth =
        contentHeight =
        scrollbarXWidth =
        scrollbarXLeft =
        scrollbarXBottom =
        scrollbarYHeight =
        scrollbarYTop =
        scrollbarYRight = null;
      };

      var ieSupport = function (version) {
        $this.addClass('ie').addClass('ie' + version);

        var bindHoverHandlers = function () {
          var mouseenter = function () {
            $(this).addClass('hover');
          };
          var mouseleave = function () {
            $(this).removeClass('hover');
          };
          $this.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarXRail.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarYRail.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarX.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarY.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
        };

        var fixIe6ScrollbarPosition = function () {
          updateScrollbarCss = function () {
            $scrollbarX.css({left: scrollbarXLeft + $this.scrollLeft(), bottom: scrollbarXBottom, width: scrollbarXWidth});
            $scrollbarY.css({top: scrollbarYTop + $this.scrollTop(), right: scrollbarYRight, height: scrollbarYHeight});
            $scrollbarX.hide().show();
            $scrollbarY.hide().show();
          };
          updateContentScrollTop = function () {
            var scrollTop = parseInt(scrollbarYTop * contentHeight / containerHeight, 10);
            $this.scrollTop(scrollTop);
            $scrollbarX.css({bottom: scrollbarXBottom});
            $scrollbarX.hide().show();
          };
          updateContentScrollLeft = function () {
            var scrollLeft = parseInt(scrollbarXLeft * contentWidth / containerWidth, 10);
            $this.scrollLeft(scrollLeft);
            $scrollbarY.hide().show();
          };
        };

        if (version === 6) {
          bindHoverHandlers();
          fixIe6ScrollbarPosition();
        }
      };

      var supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

      var initialize = function () {
        var ieMatch = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
        if (ieMatch && ieMatch[1] === 'msie') {
          // must be executed at first, because 'ieSupport' may addClass to the container
          ieSupport(parseInt(ieMatch[2], 10));
        }

        updateBarSizeAndPosition();
        bindMouseScrollXHandler();
        bindMouseScrollYHandler();
        bindRailClickHandler();
        if (supportsTouch) {
          bindMobileTouchHandler();
        }
        if ($this.mousewheel) {
          bindMouseWheelHandler();
        }
        if (settings.useKeyboard) {
          bindKeyboardHandler();
        }
        $this.data('perfect-scrollbar', $this);
        $this.data('perfect-scrollbar-update', updateBarSizeAndPosition);
        $this.data('perfect-scrollbar-destroy', destroy);
      };

      // initialize
      initialize();

      return $this;
    });
  };
}));

/*...
	/clipone/plugins/less/less-1.5.0.min.js
*/
/*! 
 * LESS - Leaner CSS v1.5.0 
 * http://lesscss.org 
 * 
 * Copyright (c) 2009-2013, Alexis Sellier <self@cloudhead.net> 
 * Licensed under the Apache v2 License. 
 * 
 * @licence 
 */ 

function require(a){return window.less[a.split("/")[1]]}function log(a,b){"development"==less.env&&"undefined"!=typeof console&&less.logLevel>=b&&console.log("less: "+a)}function extractId(a){return a.replace(/^[a-z-]+:\/+?[^\/]+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")}function errorConsole(a,b){var c="{line} {content}",d=a.filename||b,e=[],f=(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+" in "+d+" ",g=function(a,b,d){void 0!==a.extract[b]&&e.push(c.replace(/\{line\}/,(parseInt(a.line,10)||0)+(b-1)).replace(/\{class\}/,d).replace(/\{content\}/,a.extract[b]))};a.extract?(g(a,0,""),g(a,1,"line"),g(a,2,""),f+="on line "+a.line+", column "+(a.column+1)+":\n"+e.join("\n")):a.stack&&(f+=a.stack),log(f,logLevel.errors)}function createCSS(a,b,c){var d=b.href||"",e="less:"+(b.title||extractId(d)),f=document.getElementById(e),g=!1,h=document.createElement("style");if(h.setAttribute("type","text/css"),b.media&&h.setAttribute("media",b.media),h.id=e,h.styleSheet)try{h.styleSheet.cssText=a}catch(i){throw new Error("Couldn't reassign styleSheet.cssText.")}else h.appendChild(document.createTextNode(a)),g=null!==f&&f.childNodes.length>0&&h.childNodes.length>0&&f.firstChild.nodeValue===h.firstChild.nodeValue;var j=document.getElementsByTagName("head")[0];if(null===f||g===!1){var k=b&&b.nextSibling||null;k?k.parentNode.insertBefore(h,k):j.appendChild(h)}if(f&&g===!1&&f.parentNode.removeChild(f),c&&cache){log("saving "+d+" to cache.",logLevel.info);try{cache.setItem(d,a),cache.setItem(d+":timestamp",c)}catch(i){log("failed to save",logLevel.errors)}}}function errorHTML(a,b){var c,d,e="less-error-message:"+extractId(b||""),f='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',g=document.createElement("div"),h=[],i=a.filename||b,j=i.match(/([^\/]+(\?.*)?)$/)[1];g.id=e,g.className="less-error-message",d="<h3>"+(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+"</h3>"+'<p>in <a href="'+i+'">'+j+"</a> ";var k=function(a,b,c){void 0!==a.extract[b]&&h.push(f.replace(/\{line\}/,(parseInt(a.line,10)||0)+(b-1)).replace(/\{class\}/,c).replace(/\{content\}/,a.extract[b]))};a.extract?(k(a,0,""),k(a,1,"line"),k(a,2,""),d+="on line "+a.line+", column "+(a.column+1)+":</p>"+"<ul>"+h.join("")+"</ul>"):a.stack&&(d+="<br/>"+a.stack.split("\n").slice(1).join("<br/>")),g.innerHTML=d,createCSS([".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),g.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),"development"==less.env&&(c=setInterval(function(){document.body&&(document.getElementById(e)?document.body.replaceChild(g,document.getElementById(e)):document.body.insertBefore(g,document.body.firstChild),clearInterval(c))},10))}function error(a,b){less.errorReporting&&"html"!==less.errorReporting?"console"===less.errorReporting?errorConsole(a,b):"function"==typeof less.errorReporting&&less.errorReporting("add",a,b):errorHTML(a,b)}function removeErrorHTML(a){var b=document.getElementById("less-error-message:"+extractId(a));b&&b.parentNode.removeChild(b)}function removeErrorConsole(){}function removeError(a){less.errorReporting&&"html"!==less.errorReporting?"console"===less.errorReporting?removeErrorConsole(a):"function"==typeof less.errorReporting&&less.errorReporting("remove",a):removeErrorHTML(a)}function loadStyles(a){for(var b,c=document.getElementsByTagName("style"),d=0;d<c.length;d++)if(b=c[d],b.type.match(typePattern)){var e=new less.tree.parseEnv(less),f=b.innerHTML||"";e.filename=document.location.href.replace(/#.*$/,""),a&&(e.useFileCache=!0,f+="\n"+a);var g=function(a){return function(b,c){if(b)return error(b,"inline");var d=c.toCSS(less);a.type="text/css",a.styleSheet?a.styleSheet.cssText=d:a.innerHTML=d}}(b);new less.Parser(e).parse(f,g)}}function extractUrlParts(a,b){var c,d,e=/^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,f=a.match(e),g={},h=[];if(!f)throw new Error("Could not parse sheet href - '"+a+"'");if(!f[1]||f[2]){if(d=b.match(e),!d)throw new Error("Could not parse page url - '"+b+"'");f[1]=f[1]||d[1]||"",f[2]||(f[3]=d[3]+f[3])}if(f[3]){for(h=f[3].replace(/\\/g,"/").split("/"),c=0;c<h.length;c++)"."===h[c]&&(h.splice(c,1),c-=1);for(c=0;c<h.length;c++)".."===h[c]&&c>0&&(h.splice(c-1,2),c-=2)}return g.hostPart=f[1],g.directories=h,g.path=f[1]+h.join("/"),g.fileUrl=g.path+(f[4]||""),g.url=g.fileUrl+(f[5]||""),g}function pathDiff(a,b){var c,d,e,f,g=extractUrlParts(a),h=extractUrlParts(b),i="";if(g.hostPart!==h.hostPart)return"";for(d=Math.max(h.directories.length,g.directories.length),c=0;d>c&&h.directories[c]===g.directories[c];c++);for(f=h.directories.slice(c),e=g.directories.slice(c),c=0;c<f.length-1;c++)i+="../";for(c=0;c<e.length-1;c++)i+=e[c]+"/";return i}function getXMLHttpRequest(){if(window.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(a){return log("browser doesn't support AJAX.",logLevel.errors),null}}function doXHR(a,b,c,d){function e(b,c,d){b.status>=200&&b.status<300?c(b.responseText,b.getResponseHeader("Last-Modified")):"function"==typeof d&&d(b.status,a)}var f=getXMLHttpRequest(),g=isFileProtocol?less.fileAsync:less.async;"function"==typeof f.overrideMimeType&&f.overrideMimeType("text/css"),log("XHR: Getting '"+a+"'",logLevel.info),f.open("GET",a,g),f.setRequestHeader("Accept",b||"text/x-less, text/css; q=0.9, */*; q=0.5"),f.send(null),isFileProtocol&&!less.fileAsync?0===f.status||f.status>=200&&f.status<300?c(f.responseText):d(f.status,a):g?f.onreadystatechange=function(){4==f.readyState&&e(f,c,d)}:e(f,c,d)}function loadFile(a,b,c,d,e){b&&b.currentDirectory&&!/^([a-z-]+:)?\//.test(a)&&(a=b.currentDirectory+a);var f=extractUrlParts(a,window.location.href),g=f.url,h={currentDirectory:f.path,filename:g};if(b?(h.entryPath=b.entryPath,h.rootpath=b.rootpath,h.rootFilename=b.rootFilename,h.relativeUrls=b.relativeUrls):(h.entryPath=f.path,h.rootpath=less.rootpath||f.path,h.rootFilename=g,h.relativeUrls=d.relativeUrls),h.relativeUrls&&(h.rootpath=d.rootpath?extractUrlParts(d.rootpath+pathDiff(f.path,h.entryPath)).path:f.path),d.useFileCache&&fileCache[g])try{var i=fileCache[g];e&&(i+="\n"+e),c(null,i,g,h,{lastModified:new Date})}catch(j){c(j,null,g)}else doXHR(g,d.mime,function(a,b){fileCache[g]=a;try{c(null,a,g,h,{lastModified:b})}catch(d){c(d,null,g)}},function(a,b){c({type:"File",message:"'"+b+"' wasn't found ("+a+")"},null,g)})}function loadStyleSheet(a,b,c,d,e){var f=new less.tree.parseEnv(less);f.mime=a.type,e&&(f.useFileCache=!0),loadFile(a.href,null,function(e,g,h,i,j){if(j){j.remaining=d;var k=cache&&cache.getItem(h),l=cache&&cache.getItem(h+":timestamp");if(!c&&l&&j.lastModified&&new Date(j.lastModified).valueOf()===new Date(l).valueOf())return createCSS(k,a),j.local=!0,b(null,null,g,a,j,h),void 0}removeError(h),g?(f.currentFileInfo=i,new less.Parser(f).parse(g,function(c,d){if(c)return b(c,null,null,a);try{b(c,d,g,a,j,h)}catch(c){b(c,null,null,a)}})):b(e,null,null,a,j,h)},f,e)}function loadStyleSheets(a,b,c){for(var d=0;d<less.sheets.length;d++)loadStyleSheet(less.sheets[d],a,b,less.sheets.length-(d+1),c)}function initRunningMode(){"development"===less.env?(less.optimization=0,less.watchTimer=setInterval(function(){less.watchMode&&loadStyleSheets(function(a,b,c,d,e){a?error(a,d.href):b&&createCSS(b.toCSS(less),d,e.lastModified)})},less.poll)):less.optimization=3}("undefined"==typeof window.less||"undefined"!=typeof window.less.nodeType)&&(window.less={}),less=window.less,tree=window.less.tree={},less.mode="browser";var less,tree;void 0===less&&(less=exports,tree=require("./tree"),less.mode="node"),less.Parser=function(a){function b(){r=u[q],s=p,v=p}function c(){u[q]=r,p=s,v=p}function d(){p>v&&(u[q]=u[q].slice(p-v),v=p)}function e(a){var b=a.charCodeAt(0);return 32===b||10===b||9===b}function f(a){var b,c;if(a instanceof Function)return a.call(w.parsers);if("string"==typeof a)b=o.charAt(p)===a?a:null,c=1,d();else{if(d(),!(b=a.exec(u[q])))return null;c=b[0].length}return b?(g(c),"string"==typeof b?b:1===b.length?b[0]:b):void 0}function g(a){for(var b=p,c=q,d=p+u[q].length,f=p+=a;d>p&&e(o.charAt(p));)p++;return u[q]=u[q].slice(a+(p-f)),v=p,0===u[q].length&&q<u.length-1&&q++,b!==p||c!==q}function h(a,b){var c=f(a);return c?c:(i(b||("string"==typeof a?"expected '"+a+"' got '"+o.charAt(p)+"'":"unexpected token")),void 0)}function i(a,b){var c=new Error(a);throw c.index=p,c.type=b||"Syntax",c}function j(a){return"string"==typeof a?o.charAt(p)===a:a.test(u[q])}function k(a,b){return a.filename&&b.currentFileInfo.filename&&a.filename!==b.currentFileInfo.filename?w.imports.contents[a.filename]:o}function l(a,b){for(var c=a+1,d=null,e=-1;--c>=0&&"\n"!==b.charAt(c);)e++;return"number"==typeof a&&(d=(b.slice(0,a).match(/\n/g)||"").length),{line:d,column:e}}function m(a,b,c){var d=c.currentFileInfo.filename;return"browser"!==less.mode&&"rhino"!==less.mode&&(d=require("path").resolve(d)),{lineNumber:l(a,b).line+1,fileName:d}}function n(a,b){var c=k(a,b),d=l(a.index,c),e=d.line,f=d.column,g=a.call&&l(a.call,c).line,h=c.split("\n");this.type=a.type||"Syntax",this.message=a.message,this.filename=a.filename||b.currentFileInfo.filename,this.index=a.index,this.line="number"==typeof e?e+1:null,this.callLine=g+1,this.callExtract=h[g],this.stack=a.stack,this.column=f,this.extract=[h[e-1],h[e],h[e+1]]}var o,p,q,r,s,t,u,v,w,x=a&&a.filename;a instanceof tree.parseEnv||(a=new tree.parseEnv(a));var y=this.imports={paths:a.paths||[],queue:[],files:a.files,contents:a.contents,mime:a.mime,error:null,push:function(b,c,d,e){var f=this;this.queue.push(b);var g=function(a,c,d){f.queue.splice(f.queue.indexOf(b),1);var g=d in f.files||d===x;f.files[d]=c,a&&!f.error&&(f.error=a),e(a,c,g,d)};less.Parser.importer?less.Parser.importer(b,c,g,a):less.Parser.fileLoader(b,c,function(b,e,f,h){if(b)return g(b),void 0;var i=new tree.parseEnv(a);i.currentFileInfo=h,i.processImports=!1,i.contents[f]=e,(c.reference||d.reference)&&(h.reference=!0),d.inline?g(null,e,f):new less.Parser(i).parse(e,function(a,b){g(a,b,f)})},a)}};return n.prototype=new Error,n.prototype.constructor=n,this.env=a=a||{},this.optimization="optimization"in this.env?this.env.optimization:1,w={imports:y,parse:function(b,c){var d,e,g,h=null;if(p=q=v=t=0,o=b.replace(/\r\n/g,"\n"),o=o.replace(/^\uFEFF/,""),w.imports.contents[a.currentFileInfo.filename]=o,u=function(b){for(var c,d,e,f,g=0,i=/(?:@\{[\w-]+\}|[^"'`\{\}\/\(\)\\])+/g,j=/\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g,k=/"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'|`((?:[^`]|\\.)*)`/g,l=0,m=b[0],p=0;p<o.length;)if(i.lastIndex=p,(c=i.exec(o))&&c.index===p&&(p+=c[0].length,m.push(c[0])),e=o.charAt(p),j.lastIndex=k.lastIndex=p,(c=k.exec(o))&&c.index===p)p+=c[0].length,m.push(c[0]);else if(d||"/"!==e||(f=o.charAt(p+1),"/"!==f&&"*"!==f||!(c=j.exec(o))||c.index!==p)){switch(e){case"{":if(!d){l++,m.push(e);break}case"}":if(!d){l--,m.push(e),b[++g]=m=[];break}case"(":if(!d){d=!0,m.push(e);break}case")":if(d){d=!1,m.push(e);break}default:m.push(e)}p++}else p+=c[0].length,m.push(c[0]);return 0!==l&&(h=new n({index:p-1,type:"Parse",message:l>0?"missing closing `}`":"missing opening `{`",filename:a.currentFileInfo.filename},a)),b.map(function(a){return a.join("")})}([[]]),h)return c(new n(h,a));try{d=new tree.Ruleset([],f(this.parsers.primary)),d.root=!0,d.firstRoot=!0}catch(i){return c(new n(i,a))}if(d.toCSS=function(b){return function(c,d){c=c||{};var e,f,g=new tree.evalEnv(c);"object"!=typeof d||Array.isArray(d)||(d=Object.keys(d).map(function(a){var b=d[a];return b instanceof tree.Value||(b instanceof tree.Expression||(b=new tree.Expression([b])),b=new tree.Value([b])),new tree.Rule("@"+a,b,!1,null,0)}),g.frames=[new tree.Ruleset(null,d)]);try{e=b.call(this,g),(new tree.joinSelectorVisitor).run(e),(new tree.processExtendsVisitor).run(e),new tree.toCSSVisitor({compress:Boolean(c.compress)}).run(e),c.sourceMap&&(e=new tree.sourceMapOutput({writeSourceMap:c.writeSourceMap,rootNode:e,contentsMap:w.imports.contents,sourceMapFilename:c.sourceMapFilename,outputFilename:c.sourceMapOutputFilename,sourceMapBasepath:c.sourceMapBasepath,sourceMapRootpath:c.sourceMapRootpath,outputSourceFiles:c.outputSourceFiles,sourceMapGenerator:c.sourceMapGenerator})),f=e.toCSS({compress:Boolean(c.compress),dumpLineNumbers:a.dumpLineNumbers,strictUnits:Boolean(c.strictUnits)})}catch(h){throw new n(h,a)}return c.cleancss&&"node"===less.mode?require("clean-css").process(f):c.compress?f.replace(/(^(\s)+)|((\s)+$)/g,""):f}}(d.eval),p<o.length-1){p=t;var j=l(p,o);g=o.split("\n"),e=j.line+1,h={type:"Parse",message:"Unrecognised input",index:p,filename:a.currentFileInfo.filename,line:e,column:j.column,extract:[g[e-2],g[e-1],g[e]]}}var k=function(b){return b=h||b||w.imports.error,b?(b instanceof n||(b=new n(b,a)),c(b)):c(null,d)};return a.processImports===!1?k():(new tree.importVisitor(this.imports,k).run(d),void 0)},parsers:{primary:function(){for(var a,b=[];(a=f(this.extendRule)||f(this.mixin.definition)||f(this.rule)||f(this.ruleset)||f(this.mixin.call)||f(this.comment)||f(this.directive))||f(/^[\s\n]+/)||f(/^;+/);)a&&b.push(a);return b},comment:function(){var b;if("/"===o.charAt(p))return"/"===o.charAt(p+1)?new tree.Comment(f(/^\/\/.*/),!0,p,a.currentFileInfo):(b=f(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/))?new tree.Comment(b,!1,p,a.currentFileInfo):void 0},comments:function(){for(var a,b=[];a=f(this.comment);)b.push(a);return b},entities:{quoted:function(){var b,c,d=p,e=p;return"~"===o.charAt(d)&&(d++,c=!0),'"'===o.charAt(d)||"'"===o.charAt(d)?(c&&f("~"),(b=f(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/))?new tree.Quoted(b[0],b[1]||b[2],c,e,a.currentFileInfo):void 0):void 0},keyword:function(){var a;if(a=f(/^[_A-Za-z-][_A-Za-z0-9-]*/)){var b=tree.Color.fromKeyword(a);return b?b:new tree.Keyword(a)}},call:function(){var b,c,d,e,g=p;if(b=/^([\w-]+|%|progid:[\w\.]+)\(/.exec(u[q])){if(b=b[1],c=b.toLowerCase(),"url"===c)return null;if(p+=b.length,"alpha"===c&&(e=f(this.alpha),"undefined"!=typeof e))return e;if(f("("),d=f(this.entities.arguments),f(")"))return b?new tree.Call(b,d,g,a.currentFileInfo):void 0}},arguments:function(){for(var a,b=[];(a=f(this.entities.assignment)||f(this.expression))&&(b.push(a),f(",")););return b},literal:function(){return f(this.entities.dimension)||f(this.entities.color)||f(this.entities.quoted)||f(this.entities.unicodeDescriptor)},assignment:function(){var a,b;return(a=f(/^\w+(?=\s?=)/i))&&f("=")&&(b=f(this.entity))?new tree.Assignment(a,b):void 0},url:function(){var b;if("u"===o.charAt(p)&&f(/^url\(/))return b=f(this.entities.quoted)||f(this.entities.variable)||f(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",h(")"),new tree.URL(null!=b.value||b instanceof tree.Variable?b:new tree.Anonymous(b),a.currentFileInfo)},variable:function(){var b,c=p;return"@"===o.charAt(p)&&(b=f(/^@@?[\w-]+/))?new tree.Variable(b,c,a.currentFileInfo):void 0},variableCurly:function(){var b,c=p;return"@"===o.charAt(p)&&(b=f(/^@\{([\w-]+)\}/))?new tree.Variable("@"+b[1],c,a.currentFileInfo):void 0},color:function(){var a;return"#"===o.charAt(p)&&(a=f(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))?new tree.Color(a[1]):void 0},dimension:function(){var a,b=o.charCodeAt(p);if(!(b>57||43>b||47===b||44==b))return(a=f(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/))?new tree.Dimension(a[1],a[2]):void 0},unicodeDescriptor:function(){var a;return(a=f(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/))?new tree.UnicodeDescriptor(a[0]):void 0},javascript:function(){var b,c,d=p;return"~"===o.charAt(d)&&(d++,c=!0),"`"===o.charAt(d)?(void 0===a.javascriptEnabled||a.javascriptEnabled||i("You are using JavaScript, which has been disabled."),c&&f("~"),(b=f(/^`([^`]*)`/))?new tree.JavaScript(b[1],p,c):void 0):void 0}},variable:function(){var a;return"@"===o.charAt(p)&&(a=f(/^(@[\w-]+)\s*:/))?a[1]:void 0},extend:function(a){var b,c,d,e=p,g=[];if(f(a?/^&:extend\(/:/^:extend\(/)){do{for(d=null,b=[];;){if(d=f(/^(all)(?=\s*(\)|,))/))break;if(c=f(this.element),!c)break;b.push(c)}d=d&&d[1],g.push(new tree.Extend(new tree.Selector(b),d,e))}while(f(","));return h(/^\)/),a&&h(/^;/),g}},extendRule:function(){return this.extend(!0)},mixin:{call:function(){var d,e,g,i=[],k=p,l=o.charAt(p),m=!1;if("."===l||"#"===l){for(b();d=f(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/);)i.push(new tree.Element(e,d,p,a.currentFileInfo)),e=f(">");return f("(")&&(g=this.mixin.args.call(this,!0).args,h(")")),g=g||[],f(this.important)&&(m=!0),i.length>0&&(f(";")||j("}"))?new tree.mixin.Call(i,g,k,a.currentFileInfo,m):(c(),void 0)}},args:function(a){for(var b,c,d,e,g,j,k=[],l=[],m=[],n={args:null,variadic:!1};;){if(a)j=f(this.expression);else{if(f(this.comments),"."===o.charAt(p)&&f(/^\.{3}/)){n.variadic=!0,f(";")&&!b&&(b=!0),(b?l:m).push({variadic:!0});break}j=f(this.entities.variable)||f(this.entities.literal)||f(this.entities.keyword)}if(!j)break;e=null,j.throwAwayComments&&j.throwAwayComments(),g=j;var q=null;if(a?1==j.value.length&&(q=j.value[0]):q=j,q&&q instanceof tree.Variable)if(f(":"))k.length>0&&(b&&i("Cannot mix ; and , as delimiter types"),c=!0),g=h(this.expression),e=d=q.name;else{if(!a&&f(/^\.{3}/)){n.variadic=!0,f(";")&&!b&&(b=!0),(b?l:m).push({name:j.name,variadic:!0});break}a||(d=e=q.name,g=null)}g&&k.push(g),m.push({name:e,value:g}),f(",")||(f(";")||b)&&(c&&i("Cannot mix ; and , as delimiter types"),b=!0,k.length>1&&(g=new tree.Value(k)),l.push({name:d,value:g}),d=null,k=[],c=!1)}return n.args=b?l:m,n},definition:function(){var a,d,e,g,i=[],k=!1;if(!("."!==o.charAt(p)&&"#"!==o.charAt(p)||j(/^[^{]*\}/))&&(b(),d=f(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/))){a=d[1];var l=this.mixin.args.call(this,!1);if(i=l.args,k=l.variadic,f(")")||(t=p,c()),f(this.comments),f(/^when/)&&(g=h(this.conditions,"expected condition")),e=f(this.block))return new tree.mixin.Definition(a,i,e,g,k);c()}}},entity:function(){return f(this.entities.literal)||f(this.entities.variable)||f(this.entities.url)||f(this.entities.call)||f(this.entities.keyword)||f(this.entities.javascript)||f(this.comment)},end:function(){return f(";")||j("}")},alpha:function(){var a;if(f(/^\(opacity=/i))return(a=f(/^\d+/)||f(this.entities.variable))?(h(")"),new tree.Alpha(a)):void 0},element:function(){var b,c,d;return c=f(this.combinator),b=f(/^(?:\d+\.\d+|\d+)%/)||f(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||f("*")||f("&")||f(this.attribute)||f(/^\([^()@]+\)/)||f(/^[\.#](?=@)/)||f(this.entities.variableCurly),b||f("(")&&(d=f(this.selector))&&f(")")&&(b=new tree.Paren(d)),b?new tree.Element(c,b,p,a.currentFileInfo):void 0},combinator:function(){var a=o.charAt(p);if(">"===a||"+"===a||"~"===a||"|"===a){for(p++;o.charAt(p).match(/\s/);)p++;return new tree.Combinator(a)}return o.charAt(p-1).match(/\s/)?new tree.Combinator(" "):new tree.Combinator(null)},lessSelector:function(){return this.selector(!0)},selector:function(b){for(var c,d,e,g,j,k=[],l=[];(b&&(e=f(this.extend))||b&&(g=f(/^when/))||(c=f(this.element)))&&(g?j=h(this.conditions,"expected condition"):j?i("CSS guard can only be used at the end of selector"):e?l.push.apply(l,e):(l.length&&i("Extend can only be used at the end of selector"),d=o.charAt(p),k.push(c),c=null),"{"!==d&&"}"!==d&&";"!==d&&","!==d&&")"!==d););return k.length>0?new tree.Selector(k,l,j,p,a.currentFileInfo):(l.length&&i("Extend must be used to extend a selector, it cannot be used on its own"),void 0)},attribute:function(){var a,b,c;if(f("["))return(a=f(this.entities.variableCurly))||(a=h(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)),(c=f(/^[|~*$^]?=/))&&(b=f(this.entities.quoted)||f(/^[0-9]+%/)||f(/^[\w-]+/)||f(this.entities.variableCurly)),h("]"),new tree.Attribute(a,c,b)},block:function(){var a;return f("{")&&(a=f(this.primary))&&f("}")?a:void 0},ruleset:function(){var d,e,g,h=[];for(b(),a.dumpLineNumbers&&(g=m(p,o,a));(d=f(this.lessSelector))&&(h.push(d),f(this.comments),f(","));)d.condition&&i("Guards are only currently allowed on a single selector."),f(this.comments);if(h.length>0&&(e=f(this.block))){var j=new tree.Ruleset(h,e,a.strictImports);return a.dumpLineNumbers&&(j.debugInfo=g),j}t=p,c()},rule:function(d){var e,g,h,i=o.charAt(p),j=!1;if(b(),"."!==i&&"#"!==i&&"&"!==i&&(e=f(this.variable)||f(this.ruleProperty))){if(g=d||!a.compress&&"@"!==e.charAt(0)?f(this.anonymousValue)||f(this.value):f(this.value)||f(this.anonymousValue),h=f(this.important),"+"===e[e.length-1]&&(j=!0,e=e.substr(0,e.length-1)),g&&f(this.end))return new tree.Rule(e,g,h,j,s,a.currentFileInfo);if(t=p,c(),g&&!d)return this.rule(!0)}},anonymousValue:function(){var a;return(a=/^([^@+\/'"*`(;{}-]*);/.exec(u[q]))?(p+=a[0].length-1,new tree.Anonymous(a[1])):void 0},"import":function(){var d,e,g=p;b();var h=f(/^@import?\s+/),i=(h?f(this.importOptions):null)||{};return h&&(d=f(this.entities.quoted)||f(this.entities.url))&&(e=f(this.mediaFeatures),f(";"))?(e=e&&new tree.Value(e),new tree.Import(d,e,i,g,a.currentFileInfo)):(c(),void 0)},importOptions:function(){var a,b,c,d={};if(!f("("))return null;do if(a=f(this.importOption)){switch(b=a,c=!0,b){case"css":b="less",c=!1;break;case"once":b="multiple",c=!1}if(d[b]=c,!f(","))break}while(a);return h(")"),d},importOption:function(){var a=f(/^(less|css|multiple|once|inline|reference)/);return a?a[1]:void 0},mediaFeature:function(){var b,c,d=[];do if(b=f(this.entities.keyword)||f(this.entities.variable))d.push(b);else if(f("(")){if(c=f(this.property),b=f(this.value),!f(")"))return null;if(c&&b)d.push(new tree.Paren(new tree.Rule(c,b,null,null,p,a.currentFileInfo,!0)));else{if(!b)return null;d.push(new tree.Paren(b))}}while(b);return d.length>0?new tree.Expression(d):void 0},mediaFeatures:function(){var a,b=[];do if(a=f(this.mediaFeature)){if(b.push(a),!f(","))break}else if((a=f(this.entities.variable))&&(b.push(a),!f(",")))break;while(a);return b.length>0?b:null},media:function(){var b,c,d,e;return a.dumpLineNumbers&&(e=m(p,o,a)),f(/^@media/)&&(b=f(this.mediaFeatures),c=f(this.block))?(d=new tree.Media(c,b,p,a.currentFileInfo),a.dumpLineNumbers&&(d.debugInfo=e),d):void 0},directive:function(){var d,e,g,h,i,j,k,l;if("@"===o.charAt(p)){if(e=f(this["import"])||f(this.media))return e;if(b(),d=f(/^@[a-z-]+/)){switch(h=d,"-"==d.charAt(1)&&d.indexOf("-",2)>0&&(h="@"+d.slice(d.indexOf("-",2)+1)),h){case"@font-face":i=!0;break;case"@viewport":case"@top-left":case"@top-left-corner":case"@top-center":case"@top-right":case"@top-right-corner":case"@bottom-left":case"@bottom-left-corner":case"@bottom-center":case"@bottom-right":case"@bottom-right-corner":case"@left-top":case"@left-middle":case"@left-bottom":case"@right-top":case"@right-middle":case"@right-bottom":i=!0;break;case"@host":case"@page":case"@document":case"@supports":case"@keyframes":i=!0,j=!0;break;case"@namespace":k=!0}if(j&&(l=(f(/^[^{]+/)||"").trim(),l&&(d+=" "+l)),i){if(g=f(this.block))return new tree.Directive(d,g,p,a.currentFileInfo)}else if((e=k?f(this.expression):f(this.entity))&&f(";")){var n=new tree.Directive(d,e,p,a.currentFileInfo);return a.dumpLineNumbers&&(n.debugInfo=m(p,o,a)),n}c()}}},value:function(){for(var a,b=[];(a=f(this.expression))&&(b.push(a),f(",")););return b.length>0?new tree.Value(b):void 0},important:function(){return"!"===o.charAt(p)?f(/^! *important/):void 0},sub:function(){var a,b;return f("(")&&(a=f(this.addition))?(b=new tree.Expression([a]),h(")"),b.parens=!0,b):void 0},multiplication:function(){var a,b,c,d,g;if(a=f(this.operand)){for(g=e(o.charAt(p-1));!j(/^\/[*\/]/)&&(c=f("/")||f("*"))&&(b=f(this.operand));)a.parensInOp=!0,b.parensInOp=!0,d=new tree.Operation(c,[d||a,b],g),g=e(o.charAt(p-1));return d||a}},addition:function(){var a,b,c,d,g;if(a=f(this.multiplication)){for(g=e(o.charAt(p-1));(c=f(/^[-+]\s+/)||!g&&(f("+")||f("-")))&&(b=f(this.multiplication));)a.parensInOp=!0,b.parensInOp=!0,d=new tree.Operation(c,[d||a,b],g),g=e(o.charAt(p-1));return d||a}},conditions:function(){var a,b,c,d=p;if(a=f(this.condition)){for(;j(/^,\s*(not\s*)?\(/)&&f(",")&&(b=f(this.condition));)c=new tree.Condition("or",c||a,b,d);return c||a}},condition:function(){var a,b,c,d,e=p,g=!1;return f(/^not/)&&(g=!0),h("("),(a=f(this.addition)||f(this.entities.keyword)||f(this.entities.quoted))?((d=f(/^(?:>=|<=|=<|[<=>])/))?(b=f(this.addition)||f(this.entities.keyword)||f(this.entities.quoted))?c=new tree.Condition(d,a,b,e,g):i("expected expression"):c=new tree.Condition("=",a,new tree.Keyword("true"),e,g),h(")"),f(/^and/)?new tree.Condition("and",c,f(this.condition)):c):void 0},operand:function(){var a,b=o.charAt(p+1);"-"!==o.charAt(p)||"@"!==b&&"("!==b||(a=f("-"));var c=f(this.sub)||f(this.entities.dimension)||f(this.entities.color)||f(this.entities.variable)||f(this.entities.call);return a&&(c.parensInOp=!0,c=new tree.Negative(c)),c},expression:function(){for(var a,b,c=[];a=f(this.addition)||f(this.entity);)c.push(a),!j(/^\/[\/*]/)&&(b=f("/"))&&c.push(new tree.Anonymous(b));return c.length>0?new tree.Expression(c):void 0},property:function(){var a;return(a=f(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/))?a[1]:void 0},ruleProperty:function(){var a;return(a=f(/^(\*?-?[_a-zA-Z0-9-]+)\s*(\+?)\s*:/))?a[1]+(a[2]||""):void 0}}}},function(a){function b(b){return a.functions.hsla(b.h,b.s,b.l,b.a)}function c(b,c){return b instanceof a.Dimension&&b.unit.is("%")?parseFloat(b.value*c/100):d(b)}function d(b){if(b instanceof a.Dimension)return parseFloat(b.unit.is("%")?b.value/100:b.value);if("number"==typeof b)return b;throw{error:"RuntimeError",message:"color functions take numbers as parameters"}}function e(a){return Math.min(1,Math.max(0,a))}a.functions={rgb:function(a,b,c){return this.rgba(a,b,c,1)},rgba:function(b,e,f,g){var h=[b,e,f].map(function(a){return c(a,256)});return g=d(g),new a.Color(h,g)},hsl:function(a,b,c){return this.hsla(a,b,c,1)},hsla:function(a,b,c,f){function g(a){return a=0>a?a+1:a>1?a-1:a,1>6*a?i+6*(h-i)*a:1>2*a?h:2>3*a?i+6*(h-i)*(2/3-a):i}a=d(a)%360/360,b=e(d(b)),c=e(d(c)),f=e(d(f));var h=.5>=c?c*(b+1):c+b-c*b,i=2*c-h;return this.rgba(255*g(a+1/3),255*g(a),255*g(a-1/3),f)},hsv:function(a,b,c){return this.hsva(a,b,c,1)},hsva:function(a,b,c,e){a=360*(d(a)%360/360),b=d(b),c=d(c),e=d(e);var f,g;f=Math.floor(a/60%6),g=a/60-f;var h=[c,c*(1-b),c*(1-g*b),c*(1-(1-g)*b)],i=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return this.rgba(255*h[i[f][0]],255*h[i[f][1]],255*h[i[f][2]],e)},hue:function(b){return new a.Dimension(Math.round(b.toHSL().h))},saturation:function(b){return new a.Dimension(Math.round(100*b.toHSL().s),"%")},lightness:function(b){return new a.Dimension(Math.round(100*b.toHSL().l),"%")},hsvhue:function(b){return new a.Dimension(Math.round(b.toHSV().h))},hsvsaturation:function(b){return new a.Dimension(Math.round(100*b.toHSV().s),"%")},hsvvalue:function(b){return new a.Dimension(Math.round(100*b.toHSV().v),"%")},red:function(b){return new a.Dimension(b.rgb[0])},green:function(b){return new a.Dimension(b.rgb[1])},blue:function(b){return new a.Dimension(b.rgb[2])},alpha:function(b){return new a.Dimension(b.toHSL().a)},luma:function(b){return new a.Dimension(Math.round(100*b.luma()*b.alpha),"%")},saturate:function(a,c){if(!a.rgb)return null;var d=a.toHSL();return d.s+=c.value/100,d.s=e(d.s),b(d)},desaturate:function(a,c){var d=a.toHSL();return d.s-=c.value/100,d.s=e(d.s),b(d)},lighten:function(a,c){var d=a.toHSL();return d.l+=c.value/100,d.l=e(d.l),b(d)},darken:function(a,c){var d=a.toHSL();return d.l-=c.value/100,d.l=e(d.l),b(d)},fadein:function(a,c){var d=a.toHSL();return d.a+=c.value/100,d.a=e(d.a),b(d)},fadeout:function(a,c){var d=a.toHSL();return d.a-=c.value/100,d.a=e(d.a),b(d)},fade:function(a,c){var d=a.toHSL();return d.a=c.value/100,d.a=e(d.a),b(d)},spin:function(a,c){var d=a.toHSL(),e=(d.h+c.value)%360;return d.h=0>e?360+e:e,b(d)},mix:function(b,c,d){d||(d=new a.Dimension(50));var e=d.value/100,f=2*e-1,g=b.toHSL().a-c.toHSL().a,h=((-1==f*g?f:(f+g)/(1+f*g))+1)/2,i=1-h,j=[b.rgb[0]*h+c.rgb[0]*i,b.rgb[1]*h+c.rgb[1]*i,b.rgb[2]*h+c.rgb[2]*i],k=b.alpha*e+c.alpha*(1-e);return new a.Color(j,k)},greyscale:function(b){return this.desaturate(b,new a.Dimension(100))},contrast:function(a,b,c,e){if(!a.rgb)return null;if("undefined"==typeof c&&(c=this.rgba(255,255,255,1)),"undefined"==typeof b&&(b=this.rgba(0,0,0,1)),b.luma()>c.luma()){var f=c;c=b,b=f}return e="undefined"==typeof e?.43:d(e),a.luma()*a.alpha<e?c:b},e:function(b){return new a.Anonymous(b instanceof a.JavaScript?b.evaluated:b)},escape:function(b){return new a.Anonymous(encodeURI(b.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},"%":function(b){for(var c=Array.prototype.slice.call(arguments,1),d=b.value,e=0;e<c.length;e++)d=d.replace(/%[sda]/i,function(a){var b=a.match(/s/i)?c[e].value:c[e].toCSS();return a.match(/[A-Z]$/)?encodeURIComponent(b):b});return d=d.replace(/%%/g,"%"),new a.Quoted('"'+d+'"',d)},unit:function(b,c){if(!(b instanceof a.Dimension))throw{type:"Argument",message:"the first argument to unit must be a number"+(b instanceof a.Operation?". Have you forgotten parenthesis?":"")};return new a.Dimension(b.value,c?c.toCSS():"")},convert:function(a,b){return a.convertTo(b.value)},round:function(a,b){var c="undefined"==typeof b?0:b.value;return this._math(function(a){return a.toFixed(c)},null,a)},pi:function(){return new a.Dimension(Math.PI)},mod:function(b,c){return new a.Dimension(b.value%c.value,b.unit)},pow:function(b,c){if("number"==typeof b&&"number"==typeof c)b=new a.Dimension(b),c=new a.Dimension(c);else if(!(b instanceof a.Dimension&&c instanceof a.Dimension))throw{type:"Argument",message:"arguments must be numbers"};return new a.Dimension(Math.pow(b.value,c.value),b.unit)},_math:function(b,c,d){if(d instanceof a.Dimension)return new a.Dimension(b(parseFloat(d.value)),null==c?d.unit:c);if("number"==typeof d)return b(d);throw{type:"Argument",message:"argument must be a number"}},_minmax:function(b,c){switch(c=Array.prototype.slice.call(c),c.length){case 0:throw{type:"Argument",message:"one or more arguments required"};case 1:return c[0]}var d,e,f,g,h,i,j=[],k={};for(d=0;d<c.length;d++)f=c[d],f instanceof a.Dimension?(g=f.unify(),i=g.unit.toString(),e=k[i],void 0!==e?(h=j[e].unify(),(b&&g.value<h.value||!b&&g.value>h.value)&&(j[e]=f)):(k[i]=j.length,j.push(f))):j.push(f);return 1==j.length?j[0]:(c=j.map(function(a){return a.toCSS(this.env)}).join(this.env.compress?",":", "),new a.Anonymous((b?"min":"max")+"("+c+")"))},min:function(){return this._minmax(!0,arguments)},max:function(){return this._minmax(!1,arguments)},argb:function(b){return new a.Anonymous(b.toARGB())},percentage:function(b){return new a.Dimension(100*b.value,"%")},color:function(b){if(b instanceof a.Quoted){var c,d=b.value;if(c=a.Color.fromKeyword(d))return c;if(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(d))return new a.Color(d.slice(1));throw{type:"Argument",message:"argument must be a color keyword or 3/6 digit hex e.g. #FFF"}}throw{type:"Argument",message:"argument must be a string"}},iscolor:function(b){return this._isa(b,a.Color)},isnumber:function(b){return this._isa(b,a.Dimension)},isstring:function(b){return this._isa(b,a.Quoted)},iskeyword:function(b){return this._isa(b,a.Keyword)},isurl:function(b){return this._isa(b,a.URL)
},ispixel:function(a){return this.isunit(a,"px")},ispercentage:function(a){return this.isunit(a,"%")},isem:function(a){return this.isunit(a,"em")},isunit:function(b,c){return b instanceof a.Dimension&&b.unit.is(c.value||c)?a.True:a.False},_isa:function(b,c){return b instanceof c?a.True:a.False},multiply:function(a,b){var c=a.rgb[0]*b.rgb[0]/255,d=a.rgb[1]*b.rgb[1]/255,e=a.rgb[2]*b.rgb[2]/255;return this.rgb(c,d,e)},screen:function(a,b){var c=255-(255-a.rgb[0])*(255-b.rgb[0])/255,d=255-(255-a.rgb[1])*(255-b.rgb[1])/255,e=255-(255-a.rgb[2])*(255-b.rgb[2])/255;return this.rgb(c,d,e)},overlay:function(a,b){var c=a.rgb[0]<128?2*a.rgb[0]*b.rgb[0]/255:255-2*(255-a.rgb[0])*(255-b.rgb[0])/255,d=a.rgb[1]<128?2*a.rgb[1]*b.rgb[1]/255:255-2*(255-a.rgb[1])*(255-b.rgb[1])/255,e=a.rgb[2]<128?2*a.rgb[2]*b.rgb[2]/255:255-2*(255-a.rgb[2])*(255-b.rgb[2])/255;return this.rgb(c,d,e)},softlight:function(a,b){var c=b.rgb[0]*a.rgb[0]/255,d=c+a.rgb[0]*(255-(255-a.rgb[0])*(255-b.rgb[0])/255-c)/255;c=b.rgb[1]*a.rgb[1]/255;var e=c+a.rgb[1]*(255-(255-a.rgb[1])*(255-b.rgb[1])/255-c)/255;c=b.rgb[2]*a.rgb[2]/255;var f=c+a.rgb[2]*(255-(255-a.rgb[2])*(255-b.rgb[2])/255-c)/255;return this.rgb(d,e,f)},hardlight:function(a,b){var c=b.rgb[0]<128?2*b.rgb[0]*a.rgb[0]/255:255-2*(255-b.rgb[0])*(255-a.rgb[0])/255,d=b.rgb[1]<128?2*b.rgb[1]*a.rgb[1]/255:255-2*(255-b.rgb[1])*(255-a.rgb[1])/255,e=b.rgb[2]<128?2*b.rgb[2]*a.rgb[2]/255:255-2*(255-b.rgb[2])*(255-a.rgb[2])/255;return this.rgb(c,d,e)},difference:function(a,b){var c=Math.abs(a.rgb[0]-b.rgb[0]),d=Math.abs(a.rgb[1]-b.rgb[1]),e=Math.abs(a.rgb[2]-b.rgb[2]);return this.rgb(c,d,e)},exclusion:function(a,b){var c=a.rgb[0]+b.rgb[0]*(255-a.rgb[0]-a.rgb[0])/255,d=a.rgb[1]+b.rgb[1]*(255-a.rgb[1]-a.rgb[1])/255,e=a.rgb[2]+b.rgb[2]*(255-a.rgb[2]-a.rgb[2])/255;return this.rgb(c,d,e)},average:function(a,b){var c=(a.rgb[0]+b.rgb[0])/2,d=(a.rgb[1]+b.rgb[1])/2,e=(a.rgb[2]+b.rgb[2])/2;return this.rgb(c,d,e)},negation:function(a,b){var c=255-Math.abs(255-b.rgb[0]-a.rgb[0]),d=255-Math.abs(255-b.rgb[1]-a.rgb[1]),e=255-Math.abs(255-b.rgb[2]-a.rgb[2]);return this.rgb(c,d,e)},tint:function(a,b){return this.mix(this.rgb(255,255,255),a,b)},shade:function(a,b){return this.mix(this.rgb(0,0,0),a,b)},extract:function(a,b){return b=b.value-1,Array.isArray(a.value)?a.value[b]:Array(a)[b]},length:function(b){var c=Array.isArray(b.value)?b.value.length:1;return new a.Dimension(c)},"data-uri":function(b,c){if("undefined"!=typeof window)return new a.URL(c||b,this.currentFileInfo).eval(this.env);var d=b.value,e=c&&c.value,f=require("fs"),g=require("path"),h=!1;if(arguments.length<2&&(e=d),this.env.isPathRelative(e)&&(e=this.currentFileInfo.relativeUrls?g.join(this.currentFileInfo.currentDirectory,e):g.join(this.currentFileInfo.entryPath,e)),arguments.length<2){var i;try{i=require("mime")}catch(j){i=a._mime}d=i.lookup(e);var k=i.charsets.lookup(d);h=["US-ASCII","UTF-8"].indexOf(k)<0,h&&(d+=";base64")}else h=/;base64$/.test(d);var l=f.readFileSync(e),m=32,n=parseInt(l.length/1024,10);if(n>=m&&this.env.ieCompat!==!1)return this.env.silent||console.warn("Skipped data-uri embedding of %s because its size (%dKB) exceeds IE8-safe %dKB!",e,n,m),new a.URL(c||b,this.currentFileInfo).eval(this.env);l=h?l.toString("base64"):encodeURIComponent(l);var o="'data:"+d+","+l+"'";return new a.URL(new a.Anonymous(o))},"svg-gradient":function(b){function c(){throw{type:"Argument",message:"svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position]"}}arguments.length<3&&c();var d,e,f,g,h,i,j,k=Array.prototype.slice.call(arguments,1),l="linear",m='x="0" y="0" width="1" height="1"',n=!0,o={compress:!1},p=b.toCSS(o);switch(p){case"to bottom":d='x1="0%" y1="0%" x2="0%" y2="100%"';break;case"to right":d='x1="0%" y1="0%" x2="100%" y2="0%"';break;case"to bottom right":d='x1="0%" y1="0%" x2="100%" y2="100%"';break;case"to top right":d='x1="0%" y1="100%" x2="100%" y2="0%"';break;case"ellipse":case"ellipse at center":l="radial",d='cx="50%" cy="50%" r="75%"',m='x="-50" y="-50" width="101" height="101"';break;default:throw{type:"Argument",message:"svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"}}for(e='<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><'+l+'Gradient id="gradient" gradientUnits="userSpaceOnUse" '+d+">",f=0;f<k.length;f+=1)k[f].value?(g=k[f].value[0],h=k[f].value[1]):(g=k[f],h=void 0),g instanceof a.Color&&((0===f||f+1===k.length)&&void 0===h||h instanceof a.Dimension)||c(),i=h?h.toCSS(o):0===f?"0%":"100%",j=g.alpha,e+='<stop offset="'+i+'" stop-color="'+g.toRGB()+'"'+(1>j?' stop-opacity="'+j+'"':"")+"/>";if(e+="</"+l+"Gradient>"+"<rect "+m+' fill="url(#gradient)" /></svg>',n)try{e=new Buffer(e).toString("base64")}catch(q){n=!1}return e="'data:image/svg+xml"+(n?";base64":"")+","+e+"'",new a.URL(new a.Anonymous(e))}},a._mime={_types:{".htm":"text/html",".html":"text/html",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png"},lookup:function(b){var c=require("path").extname(b),d=a._mime._types[c];if(void 0===d)throw new Error('Optional dependency "mime" is required for '+c);return d},charsets:{lookup:function(a){return a&&/^text\//.test(a)?"UTF-8":""}}};for(var f=[{name:"ceil"},{name:"floor"},{name:"sqrt"},{name:"abs"},{name:"tan",unit:""},{name:"sin",unit:""},{name:"cos",unit:""},{name:"atan",unit:"rad"},{name:"asin",unit:"rad"},{name:"acos",unit:"rad"}],g=function(a,b){return function(c){return null!=b&&(c=c.unify()),this._math(Math[a],b,c)}},h=0;h<f.length;h++)a.functions[f[h].name]=g(f[h].name,f[h].unit);a.functionCall=function(a,b){this.env=a,this.currentFileInfo=b},a.functionCall.prototype=a.functions}(require("./tree")),function(a){a.colors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}}(require("./tree")),function(a){a.debugInfo=function(b,c,d){var e="";if(b.dumpLineNumbers&&!b.compress)switch(b.dumpLineNumbers){case"comments":e=a.debugInfo.asComment(c);break;case"mediaquery":e=a.debugInfo.asMediaQuery(c);break;case"all":e=a.debugInfo.asComment(c)+(d||"")+a.debugInfo.asMediaQuery(c)}return e},a.debugInfo.asComment=function(a){return"/* line "+a.debugInfo.lineNumber+", "+a.debugInfo.fileName+" */\n"},a.debugInfo.asMediaQuery=function(a){return"@media -sass-debug-info{filename{font-family:"+("file://"+a.debugInfo.fileName).replace(/([.:/\\])/g,function(a){return"\\"==a&&(a="/"),"\\"+a})+"}line{font-family:\\00003"+a.debugInfo.lineNumber+"}}\n"},a.find=function(a,b){for(var c,d=0;d<a.length;d++)if(c=b.call(a,a[d]))return c;return null},a.jsify=function(a){return Array.isArray(a.value)&&a.value.length>1?"["+a.value.map(function(a){return a.toCSS(!1)}).join(", ")+"]":a.toCSS(!1)},a.toCSS=function(a){var b=[];return this.genCSS(a,{add:function(a){b.push(a)},isEmpty:function(){return 0===b.length}}),b.join("")},a.outputRuleset=function(a,b,c){b.add(a.compress?"{":" {\n"),a.tabLevel=(a.tabLevel||0)+1;for(var d=a.compress?"":Array(a.tabLevel+1).join("  "),e=a.compress?"":Array(a.tabLevel).join("  "),f=0;f<c.length;f++)b.add(d),c[f].genCSS(a,b),b.add(a.compress?"":"\n");a.tabLevel--,b.add(e+"}")}}(require("./tree")),function(a){a.Alpha=function(a){this.value=a},a.Alpha.prototype={type:"Alpha",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return this.value.eval?new a.Alpha(this.value.eval(b)):this},genCSS:function(a,b){b.add("alpha(opacity="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value),b.add(")")},toCSS:a.toCSS}}(require("../tree")),function(a){a.Anonymous=function(a,b,c,d){this.value=a.value||a,this.index=b,this.mapLines=d,this.currentFileInfo=c},a.Anonymous.prototype={type:"Anonymous",eval:function(){return this},compare:function(a){if(!a.toCSS)return-1;var b=this.toCSS(),c=a.toCSS();return b===c?0:c>b?-1:1},genCSS:function(a,b){b.add(this.value,this.currentFileInfo,this.index,this.mapLines)},toCSS:a.toCSS}}(require("../tree")),function(a){a.Assignment=function(a,b){this.key=a,this.value=b},a.Assignment.prototype={type:"Assignment",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return this.value.eval?new a.Assignment(this.key,this.value.eval(b)):this},genCSS:function(a,b){b.add(this.key+"="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value)},toCSS:a.toCSS}}(require("../tree")),function(a){a.Call=function(a,b,c,d){this.name=a,this.args=b,this.index=c,this.currentFileInfo=d},a.Call.prototype={type:"Call",accept:function(a){this.args=a.visit(this.args)},eval:function(b){var c,d,e=this.args.map(function(a){return a.eval(b)}),f=this.name.toLowerCase();if(f in a.functions)try{if(d=new a.functionCall(b,this.currentFileInfo),c=d[f].apply(d,e),null!=c)return c}catch(g){throw{type:g.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(g.message?": "+g.message:""),index:this.index,filename:this.currentFileInfo.filename}}return new a.Call(this.name,e,this.index,this.currentFileInfo)},genCSS:function(a,b){b.add(this.name+"(",this.currentFileInfo,this.index);for(var c=0;c<this.args.length;c++)this.args[c].genCSS(a,b),c+1<this.args.length&&b.add(", ");b.add(")")},toCSS:a.toCSS}}(require("../tree")),function(a){a.Color=function(a,b){this.rgb=Array.isArray(a)?a:6==a.length?a.match(/.{2}/g).map(function(a){return parseInt(a,16)}):a.split("").map(function(a){return parseInt(a+a,16)}),this.alpha="number"==typeof b?b:1};var b="transparent";a.Color.prototype={type:"Color",eval:function(){return this},luma:function(){return.2126*this.rgb[0]/255+.7152*this.rgb[1]/255+.0722*this.rgb[2]/255},genCSS:function(a,b){b.add(this.toCSS(a))},toCSS:function(a,c){var d=a&&a.compress&&!c;if(this.alpha<1)return 0===this.alpha&&this.isTransparentKeyword?b:"rgba("+this.rgb.map(function(a){return Math.round(a)}).concat(this.alpha).join(","+(d?"":" "))+")";var e=this.toRGB();if(d){var f=e.split("");f[1]===f[2]&&f[3]===f[4]&&f[5]===f[6]&&(e="#"+f[1]+f[3]+f[5])}return e},operate:function(b,c,d){var e=[];d instanceof a.Color||(d=d.toColor());for(var f=0;3>f;f++)e[f]=a.operate(b,c,this.rgb[f],d.rgb[f]);return new a.Color(e,this.alpha+d.alpha)},toRGB:function(){return"#"+this.rgb.map(function(a){return a=Math.round(a),a=(a>255?255:0>a?0:a).toString(16),1===a.length?"0"+a:a}).join("")},toHSL:function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=(g+h)/2,j=g-h;if(g===h)a=b=0;else{switch(b=i>.5?j/(2-g-h):j/(g+h),g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,l:i,a:f}},toHSV:function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=g,j=g-h;if(b=0===g?0:j/g,g===h)a=0;else{switch(g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,v:i,a:f}},toARGB:function(){var a=[Math.round(255*this.alpha)].concat(this.rgb);return"#"+a.map(function(a){return a=Math.round(a),a=(a>255?255:0>a?0:a).toString(16),1===a.length?"0"+a:a}).join("")},compare:function(a){return a.rgb?a.rgb[0]===this.rgb[0]&&a.rgb[1]===this.rgb[1]&&a.rgb[2]===this.rgb[2]&&a.alpha===this.alpha?0:-1:-1}},a.Color.fromKeyword=function(c){if(a.colors.hasOwnProperty(c))return new a.Color(a.colors[c].slice(1));if(c===b){var d=new a.Color([0,0,0],0);return d.isTransparentKeyword=!0,d}}}(require("../tree")),function(a){a.Comment=function(a,b,c,d){this.value=a,this.silent=!!b,this.currentFileInfo=d},a.Comment.prototype={type:"Comment",genCSS:function(b,c){this.debugInfo&&c.add(a.debugInfo(b,this),this.currentFileInfo,this.index),c.add(this.value.trim())},toCSS:a.toCSS,isSilent:function(a){var b=this.currentFileInfo&&this.currentFileInfo.reference&&!this.isReferenced,c=a.compress&&!this.value.match(/^\/\*!/);return this.silent||b||c},eval:function(){return this},markReferenced:function(){this.isReferenced=!0}}}(require("../tree")),function(a){a.Condition=function(a,b,c,d,e){this.op=a.trim(),this.lvalue=b,this.rvalue=c,this.index=d,this.negate=e},a.Condition.prototype={type:"Condition",accept:function(a){this.lvalue=a.visit(this.lvalue),this.rvalue=a.visit(this.rvalue)},eval:function(a){var b,c=this.lvalue.eval(a),d=this.rvalue.eval(a),e=this.index;return b=function(a){switch(a){case"and":return c&&d;case"or":return c||d;default:if(c.compare)b=c.compare(d);else{if(!d.compare)throw{type:"Type",message:"Unable to perform comparison",index:e};b=d.compare(c)}switch(b){case-1:return"<"===a||"=<"===a||"<="===a;case 0:return"="===a||">="===a||"=<"===a||"<="===a;case 1:return">"===a||">="===a}}}(this.op),this.negate?!b:b}}}(require("../tree")),function(a){a.Dimension=function(b,c){this.value=parseFloat(b),this.unit=c&&c instanceof a.Unit?c:new a.Unit(c?[c]:void 0)},a.Dimension.prototype={type:"Dimension",accept:function(a){this.unit=a.visit(this.unit)},eval:function(){return this},toColor:function(){return new a.Color([this.value,this.value,this.value])},genCSS:function(a,b){if(a&&a.strictUnits&&!this.unit.isSingular())throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: "+this.unit.toString());var c=this.value,d=String(c);if(0!==c&&1e-6>c&&c>-1e-6&&(d=c.toFixed(20).replace(/0+$/,"")),a&&a.compress){if(0===c&&this.unit.isLength())return b.add(d),void 0;c>0&&1>c&&(d=d.substr(1))}b.add(d),this.unit.genCSS(a,b)},toCSS:a.toCSS,operate:function(b,c,d){var e=a.operate(b,c,this.value,d.value),f=this.unit.clone();if("+"===c||"-"===c)if(0===f.numerator.length&&0===f.denominator.length)f.numerator=d.unit.numerator.slice(0),f.denominator=d.unit.denominator.slice(0);else if(0===d.unit.numerator.length&&0===f.denominator.length);else{if(d=d.convertTo(this.unit.usedUnits()),b.strictUnits&&d.unit.toString()!==f.toString())throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '"+f.toString()+"' and '"+d.unit.toString()+"'.");e=a.operate(b,c,this.value,d.value)}else"*"===c?(f.numerator=f.numerator.concat(d.unit.numerator).sort(),f.denominator=f.denominator.concat(d.unit.denominator).sort(),f.cancel()):"/"===c&&(f.numerator=f.numerator.concat(d.unit.denominator).sort(),f.denominator=f.denominator.concat(d.unit.numerator).sort(),f.cancel());return new a.Dimension(e,f)},compare:function(b){if(b instanceof a.Dimension){var c=this.unify(),d=b.unify(),e=c.value,f=d.value;return f>e?-1:e>f?1:d.unit.isEmpty()||0===c.unit.compare(d.unit)?0:-1}return-1},unify:function(){return this.convertTo({length:"m",duration:"s",angle:"rad"})},convertTo:function(b){var c,d,e,f,g,h=this.value,i=this.unit.clone(),j={};if("string"==typeof b){for(c in a.UnitConversions)a.UnitConversions[c].hasOwnProperty(b)&&(j={},j[c]=b);b=j}g=function(a,b){return e.hasOwnProperty(a)?(b?h/=e[a]/e[f]:h*=e[a]/e[f],f):a};for(d in b)b.hasOwnProperty(d)&&(f=b[d],e=a.UnitConversions[d],i.map(g));return i.cancel(),new a.Dimension(h,i)}},a.UnitConversions={length:{m:1,cm:.01,mm:.001,"in":.0254,pt:.0254/72,pc:12*(.0254/72)},duration:{s:1,ms:.001},angle:{rad:1/(2*Math.PI),deg:1/360,grad:.0025,turn:1}},a.Unit=function(a,b,c){this.numerator=a?a.slice(0).sort():[],this.denominator=b?b.slice(0).sort():[],this.backupUnit=c},a.Unit.prototype={type:"Unit",clone:function(){return new a.Unit(this.numerator.slice(0),this.denominator.slice(0),this.backupUnit)},genCSS:function(a,b){this.numerator.length>=1?b.add(this.numerator[0]):this.denominator.length>=1?b.add(this.denominator[0]):a&&a.strictUnits||!this.backupUnit||b.add(this.backupUnit)},toCSS:a.toCSS,toString:function(){var a,b=this.numerator.join("*");for(a=0;a<this.denominator.length;a++)b+="/"+this.denominator[a];return b},compare:function(a){return this.is(a.toString())?0:-1},is:function(a){return this.toString()===a},isLength:function(){return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/))},isEmpty:function(){return 0===this.numerator.length&&0===this.denominator.length},isSingular:function(){return this.numerator.length<=1&&0===this.denominator.length},map:function(a){var b;for(b=0;b<this.numerator.length;b++)this.numerator[b]=a(this.numerator[b],!1);for(b=0;b<this.denominator.length;b++)this.denominator[b]=a(this.denominator[b],!0)},usedUnits:function(){var b,c,d={};c=function(a){return b.hasOwnProperty(a)&&!d[e]&&(d[e]=a),a};for(var e in a.UnitConversions)a.UnitConversions.hasOwnProperty(e)&&(b=a.UnitConversions[e],this.map(c));return d},cancel:function(){var a,b,c,d={};for(b=0;b<this.numerator.length;b++)a=this.numerator[b],c||(c=a),d[a]=(d[a]||0)+1;for(b=0;b<this.denominator.length;b++)a=this.denominator[b],c||(c=a),d[a]=(d[a]||0)-1;this.numerator=[],this.denominator=[];for(a in d)if(d.hasOwnProperty(a)){var e=d[a];if(e>0)for(b=0;e>b;b++)this.numerator.push(a);else if(0>e)for(b=0;-e>b;b++)this.denominator.push(a)}0===this.numerator.length&&0===this.denominator.length&&c&&(this.backupUnit=c),this.numerator.sort(),this.denominator.sort()}}}(require("../tree")),function(a){a.Directive=function(b,c,d,e){this.name=b,Array.isArray(c)?(this.rules=[new a.Ruleset([],c)],this.rules[0].allowImports=!0):this.value=c,this.currentFileInfo=e},a.Directive.prototype={type:"Directive",accept:function(a){this.rules=a.visit(this.rules),this.value=a.visit(this.value)},genCSS:function(b,c){c.add(this.name,this.currentFileInfo,this.index),this.rules?a.outputRuleset(b,c,this.rules):(c.add(" "),this.value.genCSS(b,c),c.add(";"))},toCSS:a.toCSS,eval:function(b){var c=this;return this.rules&&(b.frames.unshift(this),c=new a.Directive(this.name,null,this.index,this.currentFileInfo),c.rules=[this.rules[0].eval(b)],c.rules[0].root=!0,b.frames.shift()),c},variable:function(b){return a.Ruleset.prototype.variable.call(this.rules[0],b)},find:function(){return a.Ruleset.prototype.find.apply(this.rules[0],arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.rules[0])},markReferenced:function(){var a,b;if(this.isReferenced=!0,this.rules)for(b=this.rules[0].rules,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()}}}(require("../tree")),function(a){a.Element=function(b,c,d,e){this.combinator=b instanceof a.Combinator?b:new a.Combinator(b),this.value="string"==typeof c?c.trim():c?c:"",this.index=d,this.currentFileInfo=e},a.Element.prototype={type:"Element",accept:function(a){this.combinator=a.visit(this.combinator),this.value=a.visit(this.value)},eval:function(b){return new a.Element(this.combinator,this.value.eval?this.value.eval(b):this.value,this.index,this.currentFileInfo)},genCSS:function(a,b){b.add(this.toCSS(a),this.currentFileInfo,this.index)},toCSS:function(a){var b=this.value.toCSS?this.value.toCSS(a):this.value;return""===b&&"&"===this.combinator.value.charAt(0)?"":this.combinator.toCSS(a||{})+b}},a.Attribute=function(a,b,c){this.key=a,this.op=b,this.value=c},a.Attribute.prototype={type:"Attribute",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return new a.Attribute(this.key.eval?this.key.eval(b):this.key,this.op,this.value&&this.value.eval?this.value.eval(b):this.value)},genCSS:function(a,b){b.add(this.toCSS(a))},toCSS:function(a){var b=this.key.toCSS?this.key.toCSS(a):this.key;return this.op&&(b+=this.op,b+=this.value.toCSS?this.value.toCSS(a):this.value),"["+b+"]"}},a.Combinator=function(a){this.value=" "===a?" ":a?a.trim():""},a.Combinator.prototype={type:"Combinator",_outputMap:{"":""," ":" ",":":" :","+":" + ","~":" ~ ",">":" > ","|":"|"},_outputMapCompressed:{"":""," ":" ",":":" :","+":"+","~":"~",">":">","|":"|"},genCSS:function(a,b){b.add((a.compress?this._outputMapCompressed:this._outputMap)[this.value])},toCSS:a.toCSS}}(require("../tree")),function(a){a.Expression=function(a){this.value=a},a.Expression.prototype={type:"Expression",accept:function(a){this.value=a.visit(this.value)},eval:function(b){var c,d=this.parens&&!this.parensInOp,e=!1;return d&&b.inParenthesis(),this.value.length>1?c=new a.Expression(this.value.map(function(a){return a.eval(b)})):1===this.value.length?(this.value[0].parens&&!this.value[0].parensInOp&&(e=!0),c=this.value[0].eval(b)):c=this,d&&b.outOfParenthesis(),this.parens&&this.parensInOp&&!b.isMathOn()&&!e&&(c=new a.Paren(c)),c},genCSS:function(a,b){for(var c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(" ")},toCSS:a.toCSS,throwAwayComments:function(){this.value=this.value.filter(function(b){return!(b instanceof a.Comment)})}}}(require("../tree")),function(a){a.Extend=function(a,b,c){switch(this.selector=a,this.option=b,this.index=c,b){case"all":this.allowBefore=!0,this.allowAfter=!0;break;default:this.allowBefore=!1,this.allowAfter=!1}},a.Extend.prototype={type:"Extend",accept:function(a){this.selector=a.visit(this.selector)},eval:function(b){return new a.Extend(this.selector.eval(b),this.option,this.index)},clone:function(){return new a.Extend(this.selector,this.option,this.index)},findSelfSelectors:function(a){var b,c,d=[];for(b=0;b<a.length;b++)c=a[b].elements,b>0&&c.length&&""===c[0].combinator.value&&(c[0].combinator.value=" "),d=d.concat(a[b].elements);this.selfSelectors=[{elements:d}]}}}(require("../tree")),function(a){a.Import=function(a,b,c,d,e){if(this.options=c,this.index=d,this.path=a,this.features=b,this.currentFileInfo=e,void 0!==this.options.less||this.options.inline)this.css=!this.options.less||this.options.inline;else{var f=this.getPath();f&&/css([\?;].*)?$/.test(f)&&(this.css=!0)}},a.Import.prototype={type:"Import",accept:function(a){this.features=a.visit(this.features),this.path=a.visit(this.path),this.options.inline||(this.root=a.visit(this.root))},genCSS:function(a,b){this.css&&(b.add("@import ",this.currentFileInfo,this.index),this.path.genCSS(a,b),this.features&&(b.add(" "),this.features.genCSS(a,b)),b.add(";"))},toCSS:a.toCSS,getPath:function(){if(this.path instanceof a.Quoted){var b=this.path.value;return void 0!==this.css||/(\.[a-z]*$)|([\?;].*)$/.test(b)?b:b+".less"}return this.path instanceof a.URL?this.path.value.value:null},evalForImport:function(b){return new a.Import(this.path.eval(b),this.features,this.options,this.index,this.currentFileInfo)},evalPath:function(b){var c=this.path.eval(b),d=this.currentFileInfo&&this.currentFileInfo.rootpath;if(!(c instanceof a.URL)){if(d){var e=c.value;e&&b.isPathRelative(e)&&(c.value=d+e)}c.value=b.normalizePath(c.value)}return c},eval:function(b){var c,d=this.features&&this.features.eval(b);if(this.skip)return[];if(this.options.inline){var e=new a.Anonymous(this.root,0,{filename:this.importedFilename},!0);return this.features?new a.Media([e],this.features.value):[e]}if(this.css){var f=new a.Import(this.evalPath(b),d,this.options,this.index);if(!f.css&&this.error)throw this.error;return f}return c=new a.Ruleset([],this.root.rules.slice(0)),c.evalImports(b),this.features?new a.Media(c.rules,this.features.value):c.rules}}}(require("../tree")),function(a){a.JavaScript=function(a,b,c){this.escaped=c,this.expression=a,this.index=b},a.JavaScript.prototype={type:"JavaScript",eval:function(b){var c,d=this,e={},f=this.expression.replace(/@\{([\w-]+)\}/g,function(c,e){return a.jsify(new a.Variable("@"+e,d.index).eval(b))});try{f=new Function("return ("+f+")")}catch(g){throw{message:"JavaScript evaluation error: "+g.message+" from `"+f+"`",index:this.index}}for(var h in b.frames[0].variables())e[h.slice(1)]={value:b.frames[0].variables()[h].value,toJS:function(){return this.value.eval(b).toCSS()}};try{c=f.call(e)}catch(g){throw{message:"JavaScript evaluation error: '"+g.name+": "+g.message+"'",index:this.index}}return"string"==typeof c?new a.Quoted('"'+c+'"',c,this.escaped,this.index):Array.isArray(c)?new a.Anonymous(c.join(", ")):new a.Anonymous(c)}}}(require("../tree")),function(a){a.Keyword=function(a){this.value=a},a.Keyword.prototype={type:"Keyword",eval:function(){return this},genCSS:function(a,b){b.add(this.value)},toCSS:a.toCSS,compare:function(b){return b instanceof a.Keyword?b.value===this.value?0:1:-1}},a.True=new a.Keyword("true"),a.False=new a.Keyword("false")}(require("../tree")),function(a){a.Media=function(b,c,d,e){this.index=d,this.currentFileInfo=e;var f=this.emptySelectors();this.features=new a.Value(c),this.rules=[new a.Ruleset(f,b)],this.rules[0].allowImports=!0},a.Media.prototype={type:"Media",accept:function(a){this.features=a.visit(this.features),this.rules=a.visit(this.rules)},genCSS:function(b,c){c.add("@media ",this.currentFileInfo,this.index),this.features.genCSS(b,c),a.outputRuleset(b,c,this.rules)},toCSS:a.toCSS,eval:function(b){b.mediaBlocks||(b.mediaBlocks=[],b.mediaPath=[]);var c=new a.Media([],[],this.index,this.currentFileInfo);this.debugInfo&&(this.rules[0].debugInfo=this.debugInfo,c.debugInfo=this.debugInfo);var d=!1;b.strictMath||(d=!0,b.strictMath=!0);try{c.features=this.features.eval(b)}finally{d&&(b.strictMath=!1)}return b.mediaPath.push(c),b.mediaBlocks.push(c),b.frames.unshift(this.rules[0]),c.rules=[this.rules[0].eval(b)],b.frames.shift(),b.mediaPath.pop(),0===b.mediaPath.length?c.evalTop(b):c.evalNested(b)},variable:function(b){return a.Ruleset.prototype.variable.call(this.rules[0],b)},find:function(){return a.Ruleset.prototype.find.apply(this.rules[0],arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.rules[0])},emptySelectors:function(){var b=new a.Element("","&",this.index,this.currentFileInfo);return[new a.Selector([b],null,null,this.index,this.currentFileInfo)]},markReferenced:function(){var a,b=this.rules[0].rules;for(this.isReferenced=!0,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()},evalTop:function(b){var c=this;if(b.mediaBlocks.length>1){var d=this.emptySelectors();c=new a.Ruleset(d,b.mediaBlocks),c.multiMedia=!0}return delete b.mediaBlocks,delete b.mediaPath,c},evalNested:function(b){var c,d,e=b.mediaPath.concat([this]);for(c=0;c<e.length;c++)d=e[c].features instanceof a.Value?e[c].features.value:e[c].features,e[c]=Array.isArray(d)?d:[d];return this.features=new a.Value(this.permute(e).map(function(b){for(b=b.map(function(b){return b.toCSS?b:new a.Anonymous(b)}),c=b.length-1;c>0;c--)b.splice(c,0,new a.Anonymous("and"));return new a.Expression(b)})),new a.Ruleset([],[])},permute:function(a){if(0===a.length)return[];if(1===a.length)return a[0];for(var b=[],c=this.permute(a.slice(1)),d=0;d<c.length;d++)for(var e=0;e<a[0].length;e++)b.push([a[0][e]].concat(c[d]));return b},bubbleSelectors:function(b){this.rules=[new a.Ruleset(b.slice(0),[this.rules[0]])]}}}(require("../tree")),function(a){a.mixin={},a.mixin.Call=function(b,c,d,e,f){this.selector=new a.Selector(b),this.arguments=c,this.index=d,this.currentFileInfo=e,this.important=f},a.mixin.Call.prototype={type:"MixinCall",accept:function(a){this.selector=a.visit(this.selector),this.arguments=a.visit(this.arguments)},eval:function(b){var c,d,e,f,g,h,i,j,k,l=[],m=!1;for(e=this.arguments&&this.arguments.map(function(a){return{name:a.name,value:a.value.eval(b)}}),f=0;f<b.frames.length;f++)if((c=b.frames[f].find(this.selector)).length>0){for(j=!0,g=0;g<c.length;g++){for(d=c[g],i=!1,h=0;h<b.frames.length;h++)if(!(d instanceof a.mixin.Definition)&&d===(b.frames[h].originalRuleset||b.frames[h])){i=!0;break}if(!i&&d.matchArgs(e,b)){if(!d.matchCondition||d.matchCondition(e,b))try{d instanceof a.mixin.Definition||(d=new a.mixin.Definition("",[],d.rules,null,!1),d.originalRuleset=c[g].originalRuleset||c[g]),Array.prototype.push.apply(l,d.eval(b,e,this.important).rules)}catch(n){throw{message:n.message,index:this.index,filename:this.currentFileInfo.filename,stack:n.stack}}m=!0}}if(m){if(!this.currentFileInfo||!this.currentFileInfo.reference)for(f=0;f<l.length;f++)k=l[f],k.markReferenced&&k.markReferenced();return l}}throw j?{type:"Runtime",message:"No matching definition was found for `"+this.selector.toCSS().trim()+"("+(e?e.map(function(a){var b="";return a.name&&(b+=a.name+":"),b+=a.value.toCSS?a.value.toCSS():"???"}).join(", "):"")+")`",index:this.index,filename:this.currentFileInfo.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.currentFileInfo.filename}}},a.mixin.Definition=function(b,c,d,e,f){this.name=b,this.selectors=[new a.Selector([new a.Element(null,b,this.index,this.currentFileInfo)])],this.params=c,this.condition=e,this.variadic=f,this.arity=c.length,this.rules=d,this._lookups={},this.required=c.reduce(function(a,b){return!b.name||b.name&&!b.value?a+1:a},0),this.parent=a.Ruleset.prototype,this.frames=[]},a.mixin.Definition.prototype={type:"MixinDefinition",accept:function(a){this.params=a.visit(this.params),this.rules=a.visit(this.rules),this.condition=a.visit(this.condition)},variable:function(a){return this.parent.variable.call(this,a)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)},evalParams:function(b,c,d,e){var f,g,h,i,j,k,l,m,n=new a.Ruleset(null,[]),o=this.params.slice(0);if(c=new a.evalEnv(c,[n].concat(c.frames)),d)for(d=d.slice(0),h=0;h<d.length;h++)if(g=d[h],k=g&&g.name){for(l=!1,i=0;i<o.length;i++)if(!e[i]&&k===o[i].name){e[i]=g.value.eval(b),n.rules.unshift(new a.Rule(k,g.value.eval(b))),l=!0;
break}if(l){d.splice(h,1),h--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+d[h].name+" not found"}}for(m=0,h=0;h<o.length;h++)if(!e[h]){if(g=d&&d[m],k=o[h].name)if(o[h].variadic&&d){for(f=[],i=m;i<d.length;i++)f.push(d[i].value.eval(b));n.rules.unshift(new a.Rule(k,new a.Expression(f).eval(b)))}else{if(j=g&&g.value)j=j.eval(b);else{if(!o[h].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+d.length+" for "+this.arity+")"};j=o[h].value.eval(c),n.resetCache()}n.rules.unshift(new a.Rule(k,j)),e[h]=j}if(o[h].variadic&&d)for(i=m;i<d.length;i++)e[i]=d[i].value.eval(b);m++}return n},eval:function(b,c,d){var e,f,g=[],h=this.frames.concat(b.frames),i=this.evalParams(b,new a.evalEnv(b,h),c,g);return i.rules.unshift(new a.Rule("@arguments",new a.Expression(g).eval(b))),e=this.rules.slice(0),f=new a.Ruleset(null,e),f.originalRuleset=this,f=f.eval(new a.evalEnv(b,[this,i].concat(h))),d&&(f=this.parent.makeImportant.apply(f)),f},matchCondition:function(b,c){return this.condition&&!this.condition.eval(new a.evalEnv(c,[this.evalParams(c,new a.evalEnv(c,this.frames.concat(c.frames)),b,[])].concat(this.frames).concat(c.frames)))?!1:!0},matchArgs:function(a,b){var c,d=a&&a.length||0;if(this.variadic){if(d<this.required-1)return!1}else{if(d<this.required)return!1;if(d>this.params.length)return!1}c=Math.min(d,this.arity);for(var e=0;c>e;e++)if(!this.params[e].name&&!this.params[e].variadic&&a[e].value.eval(b).toCSS()!=this.params[e].value.eval(b).toCSS())return!1;return!0}}}(require("../tree")),function(a){a.Negative=function(a){this.value=a},a.Negative.prototype={type:"Negative",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("-"),this.value.genCSS(a,b)},toCSS:a.toCSS,eval:function(b){return b.isMathOn()?new a.Operation("*",[new a.Dimension(-1),this.value]).eval(b):new a.Negative(this.value.eval(b))}}}(require("../tree")),function(a){a.Operation=function(a,b,c){this.op=a.trim(),this.operands=b,this.isSpaced=c},a.Operation.prototype={type:"Operation",accept:function(a){this.operands=a.visit(this.operands)},eval:function(b){var c,d=this.operands[0].eval(b),e=this.operands[1].eval(b);if(b.isMathOn()){if(d instanceof a.Dimension&&e instanceof a.Color){if("*"!==this.op&&"+"!==this.op)throw{type:"Operation",message:"Can't substract or divide a color from a number"};c=e,e=d,d=c}if(!d.operate)throw{type:"Operation",message:"Operation on an invalid type"};return d.operate(b,this.op,e)}return new a.Operation(this.op,[d,e],this.isSpaced)},genCSS:function(a,b){this.operands[0].genCSS(a,b),this.isSpaced&&b.add(" "),b.add(this.op),this.isSpaced&&b.add(" "),this.operands[1].genCSS(a,b)},toCSS:a.toCSS},a.operate=function(a,b,c,d){switch(b){case"+":return c+d;case"-":return c-d;case"*":return c*d;case"/":return c/d}}}(require("../tree")),function(a){a.Paren=function(a){this.value=a},a.Paren.prototype={type:"Paren",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("("),this.value.genCSS(a,b),b.add(")")},toCSS:a.toCSS,eval:function(b){return new a.Paren(this.value.eval(b))}}}(require("../tree")),function(a){a.Quoted=function(a,b,c,d,e){this.escaped=c,this.value=b||"",this.quote=a.charAt(0),this.index=d,this.currentFileInfo=e},a.Quoted.prototype={type:"Quoted",genCSS:function(a,b){this.escaped||b.add(this.quote,this.currentFileInfo,this.index),b.add(this.value),this.escaped||b.add(this.quote)},toCSS:a.toCSS,eval:function(b){var c=this,d=this.value.replace(/`([^`]+)`/g,function(d,e){return new a.JavaScript(e,c.index,!0).eval(b).value}).replace(/@\{([\w-]+)\}/g,function(d,e){var f=new a.Variable("@"+e,c.index,c.currentFileInfo).eval(b,!0);return f instanceof a.Quoted?f.value:f.toCSS()});return new a.Quoted(this.quote+d+this.quote,d,this.escaped,this.index,this.currentFileInfo)},compare:function(a){if(!a.toCSS)return-1;var b=this.toCSS(),c=a.toCSS();return b===c?0:c>b?-1:1}}}(require("../tree")),function(a){a.Rule=function(b,c,d,e,f,g,h){this.name=b,this.value=c instanceof a.Value?c:new a.Value([c]),this.important=d?" "+d.trim():"",this.merge=e,this.index=f,this.currentFileInfo=g,this.inline=h||!1,this.variable="@"===b.charAt(0)},a.Rule.prototype={type:"Rule",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add(this.name+(a.compress?":":": "),this.currentFileInfo,this.index);try{this.value.genCSS(a,b)}catch(c){throw c.index=this.index,c.filename=this.currentFileInfo.filename,c}b.add(this.important+(this.inline||a.lastRule&&a.compress?"":";"),this.currentFileInfo,this.index)},toCSS:a.toCSS,eval:function(b){var c=!1;"font"!==this.name||b.strictMath||(c=!0,b.strictMath=!0);try{return new a.Rule(this.name,this.value.eval(b),this.important,this.merge,this.index,this.currentFileInfo,this.inline)}finally{c&&(b.strictMath=!1)}},makeImportant:function(){return new a.Rule(this.name,this.value,"!important",this.merge,this.index,this.currentFileInfo,this.inline)}}}(require("../tree")),function(a){a.Ruleset=function(a,b,c){this.selectors=a,this.rules=b,this._lookups={},this.strictImports=c},a.Ruleset.prototype={type:"Ruleset",accept:function(a){if(this.paths)for(var b=0;b<this.paths.length;b++)this.paths[b]=a.visit(this.paths[b]);else this.selectors=a.visit(this.selectors);this.rules=a.visit(this.rules)},eval:function(b){var c,d,e,f=this.selectors&&this.selectors.map(function(a){return a.eval(b)}),g=new a.Ruleset(f,this.rules.slice(0),this.strictImports);for(g.originalRuleset=this,g.root=this.root,g.firstRoot=this.firstRoot,g.allowImports=this.allowImports,this.debugInfo&&(g.debugInfo=this.debugInfo),b.frames.unshift(g),b.selectors||(b.selectors=[]),b.selectors.unshift(this.selectors),(g.root||g.allowImports||!g.strictImports)&&g.evalImports(b),e=0;e<g.rules.length;e++)g.rules[e]instanceof a.mixin.Definition&&(g.rules[e].frames=b.frames.slice(0));var h=b.mediaBlocks&&b.mediaBlocks.length||0;for(e=0;e<g.rules.length;e++)g.rules[e]instanceof a.mixin.Call&&(c=g.rules[e].eval(b).filter(function(b){return b instanceof a.Rule&&b.variable?!g.variable(b.name):!0}),g.rules.splice.apply(g.rules,[e,1].concat(c)),e+=c.length-1,g.resetCache());for(e=0;e<g.rules.length;e++)d=g.rules[e],d instanceof a.mixin.Definition||(g.rules[e]=d.eval?d.eval(b):d);if(b.frames.shift(),b.selectors.shift(),b.mediaBlocks)for(e=h;e<b.mediaBlocks.length;e++)b.mediaBlocks[e].bubbleSelectors(f);return g},evalImports:function(b){var c,d;for(c=0;c<this.rules.length;c++)this.rules[c]instanceof a.Import&&(d=this.rules[c].eval(b),"number"==typeof d.length?(this.rules.splice.apply(this.rules,[c,1].concat(d)),c+=d.length-1):this.rules.splice(c,1,d),this.resetCache())},makeImportant:function(){return new a.Ruleset(this.selectors,this.rules.map(function(a){return a.makeImportant?a.makeImportant():a}),this.strictImports)},matchArgs:function(a){return!a||0===a.length},matchCondition:function(b,c){var d=this.selectors[this.selectors.length-1];return d.condition&&!d.condition.eval(new a.evalEnv(c,c.frames))?!1:!0},resetCache:function(){this._rulesets=null,this._variables=null,this._lookups={}},variables:function(){return this._variables?this._variables:this._variables=this.rules.reduce(function(b,c){return c instanceof a.Rule&&c.variable===!0&&(b[c.name]=c),b},{})},variable:function(a){return this.variables()[a]},rulesets:function(){return this.rules.filter(function(b){return b instanceof a.Ruleset||b instanceof a.mixin.Definition})},find:function(b,c){c=c||this;var d,e=[],f=b.toCSS();return f in this._lookups?this._lookups[f]:(this.rulesets().forEach(function(f){if(f!==c)for(var g=0;g<f.selectors.length;g++)if(d=b.match(f.selectors[g])){b.elements.length>f.selectors[g].elements.length?Array.prototype.push.apply(e,f.find(new a.Selector(b.elements.slice(1)),c)):e.push(f);break}}),this._lookups[f]=e)},genCSS:function(b,c){var d,e,f,g,h,i=[],j=[],k=!0;b.tabLevel=b.tabLevel||0,this.root||b.tabLevel++;var l=b.compress?"":Array(b.tabLevel+1).join("  "),m=b.compress?"":Array(b.tabLevel).join("  ");for(d=0;d<this.rules.length;d++)g=this.rules[d],g.rules||g instanceof a.Media||g instanceof a.Directive||this.root&&g instanceof a.Comment?j.push(g):i.push(g);if(!this.root){for(f=a.debugInfo(b,this,m),f&&(c.add(f),c.add(m)),d=0;d<this.paths.length;d++){for(h=this.paths[d],b.firstSelector=!0,e=0;e<h.length;e++)h[e].genCSS(b,c),b.firstSelector=!1;d+1<this.paths.length&&c.add(b.compress?",":",\n"+m)}c.add((b.compress?"{":" {\n")+l)}for(d=0;d<i.length;d++)g=i[d],d+1!==i.length||this.root&&0!==j.length&&!this.firstRoot||(b.lastRule=!0),g.genCSS?g.genCSS(b,c):g.value&&c.add(g.value.toString()),b.lastRule?b.lastRule=!1:c.add(b.compress?"":"\n"+l);for(this.root||(c.add(b.compress?"}":"\n"+m+"}"),b.tabLevel--),d=0;d<j.length;d++)i.length&&k&&c.add((b.compress?"":"\n")+(this.root?l:m)),k||c.add((b.compress?"":"\n")+(this.root?l:m)),k=!1,j[d].genCSS(b,c);c.isEmpty()||b.compress||!this.firstRoot||c.add("\n")},toCSS:a.toCSS,markReferenced:function(){for(var a=0;a<this.selectors.length;a++)this.selectors[a].markReferenced()},joinSelectors:function(a,b,c){for(var d=0;d<c.length;d++)this.joinSelector(a,b,c[d])},joinSelector:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;for(e=0;e<d.elements.length;e++)j=d.elements[e],"&"===j.value&&(h=!0);if(h){for(r=[],i=[[]],e=0;e<d.elements.length;e++)if(j=d.elements[e],"&"!==j.value)r.push(j);else{for(s=[],r.length>0&&this.mergeElementsOnToSelectors(r,i),f=0;f<i.length;f++)if(k=i[f],0===c.length)k.length>0&&(k[0].elements=k[0].elements.slice(0),k[0].elements.push(new a.Element(j.combinator,"",0,j.index,j.currentFileInfo))),s.push(k);else for(g=0;g<c.length;g++)l=c[g],m=[],n=[],p=!0,k.length>0?(m=k.slice(0),q=m.pop(),o=d.createDerived(q.elements.slice(0)),p=!1):o=d.createDerived([]),l.length>1&&(n=n.concat(l.slice(1))),l.length>0&&(p=!1,o.elements.push(new a.Element(j.combinator,l[0].elements[0].value,j.index,j.currentFileInfo)),o.elements=o.elements.concat(l[0].elements.slice(1))),p||m.push(o),m=m.concat(n),s.push(m);i=s,r=[]}for(r.length>0&&this.mergeElementsOnToSelectors(r,i),e=0;e<i.length;e++)i[e].length>0&&b.push(i[e])}else if(c.length>0)for(e=0;e<c.length;e++)b.push(c[e].concat(d));else b.push([d])},mergeElementsOnToSelectors:function(b,c){var d,e;if(0===c.length)return c.push([new a.Selector(b)]),void 0;for(d=0;d<c.length;d++)e=c[d],e.length>0?e[e.length-1]=e[e.length-1].createDerived(e[e.length-1].elements.concat(b)):e.push(new a.Selector(b))}}}(require("../tree")),function(a){a.Selector=function(a,b,c,d,e,f){this.elements=a,this.extendList=b||[],this.condition=c,this.currentFileInfo=e||{},this.isReferenced=f,c||(this.evaldCondition=!0)},a.Selector.prototype={type:"Selector",accept:function(a){this.elements=a.visit(this.elements),this.extendList=a.visit(this.extendList),this.condition=a.visit(this.condition)},createDerived:function(b,c,d){d=null!=d?d:this.evaldCondition;var e=new a.Selector(b,c||this.extendList,this.condition,this.index,this.currentFileInfo,this.isReferenced);return e.evaldCondition=d,e},match:function(a){var b,c,d,e,f=this.elements,g=f.length;if(b=a.elements.slice(a.elements.length&&"&"===a.elements[0].value?1:0),c=b.length,d=Math.min(g,c),0===c||c>g)return!1;for(e=0;d>e;e++)if(f[e].value!==b[e].value)return!1;return!0},eval:function(a){var b=this.condition&&this.condition.eval(a);return this.createDerived(this.elements.map(function(b){return b.eval(a)}),this.extendList.map(function(b){return b.eval(a)}),b)},genCSS:function(a,b){var c,d;if(a&&a.firstSelector||""!==this.elements[0].combinator.value||b.add(" ",this.currentFileInfo,this.index),!this._css)for(c=0;c<this.elements.length;c++)d=this.elements[c],d.genCSS(a,b)},toCSS:a.toCSS,markReferenced:function(){this.isReferenced=!0},getIsReferenced:function(){return!this.currentFileInfo.reference||this.isReferenced},getIsOutput:function(){return this.evaldCondition}}}(require("../tree")),function(a){a.UnicodeDescriptor=function(a){this.value=a},a.UnicodeDescriptor.prototype={type:"UnicodeDescriptor",genCSS:function(a,b){b.add(this.value)},toCSS:a.toCSS,eval:function(){return this}}}(require("../tree")),function(a){a.URL=function(a,b){this.value=a,this.currentFileInfo=b},a.URL.prototype={type:"Url",accept:function(a){this.value=a.visit(this.value)},genCSS:function(a,b){b.add("url("),this.value.genCSS(a,b),b.add(")")},toCSS:a.toCSS,eval:function(b){var c,d=this.value.eval(b);return c=this.currentFileInfo&&this.currentFileInfo.rootpath,c&&"string"==typeof d.value&&b.isPathRelative(d.value)&&(d.quote||(c=c.replace(/[\(\)'"\s]/g,function(a){return"\\"+a})),d.value=c+d.value),d.value=b.normalizePath(d.value),new a.URL(d,null)}}}(require("../tree")),function(a){a.Value=function(a){this.value=a},a.Value.prototype={type:"Value",accept:function(a){this.value=a.visit(this.value)},eval:function(b){return 1===this.value.length?this.value[0].eval(b):new a.Value(this.value.map(function(a){return a.eval(b)}))},genCSS:function(a,b){var c;for(c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(a&&a.compress?",":", ")},toCSS:a.toCSS}}(require("../tree")),function(a){a.Variable=function(a,b,c){this.name=a,this.index=b,this.currentFileInfo=c},a.Variable.prototype={type:"Variable",eval:function(b){var c,d,e=this.name;if(0===e.indexOf("@@")&&(e="@"+new a.Variable(e.slice(1)).eval(b).value),this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+e,filename:this.currentFileInfo.file,index:this.index};if(this.evaluating=!0,c=a.find(b.frames,function(a){return(d=a.variable(e))?d.value.eval(b):void 0}))return this.evaluating=!1,c;throw{type:"Name",message:"variable "+e+" is undefined",filename:this.currentFileInfo.filename,index:this.index}}}}(require("../tree")),function(a){var b=["paths","optimization","files","contents","relativeUrls","rootpath","strictImports","insecure","dumpLineNumbers","compress","processImports","syncImport","javascriptEnabled","mime","useFileCache","currentFileInfo"];a.parseEnv=function(a){if(d(a,this,b),this.contents||(this.contents={}),this.files||(this.files={}),!this.currentFileInfo){var c=a&&a.filename||"input",e=c.replace(/[^\/\\]*$/,"");a&&(a.filename=null),this.currentFileInfo={filename:c,relativeUrls:this.relativeUrls,rootpath:a&&a.rootpath||"",currentDirectory:e,entryPath:e,rootFilename:c}}};var c=["silent","verbose","compress","yuicompress","ieCompat","strictMath","strictUnits","cleancss","sourceMap","importMultiple"];a.evalEnv=function(a,b){d(a,this,c),this.frames=b||[]},a.evalEnv.prototype.inParenthesis=function(){this.parensStack||(this.parensStack=[]),this.parensStack.push(!0)},a.evalEnv.prototype.outOfParenthesis=function(){this.parensStack.pop()},a.evalEnv.prototype.isMathOn=function(){return this.strictMath?this.parensStack&&this.parensStack.length:!0},a.evalEnv.prototype.isPathRelative=function(a){return!/^(?:[a-z-]+:|\/)/.test(a)},a.evalEnv.prototype.normalizePath=function(a){var b,c=a.split("/").reverse();for(a=[];0!==c.length;)switch(b=c.pop()){case".":break;case"..":0===a.length||".."===a[a.length-1]?a.push(b):a.pop();break;default:a.push(b)}return a.join("/")};var d=function(a,b,c){if(a)for(var d=0;d<c.length;d++)a.hasOwnProperty(c[d])&&(b[c[d]]=a[c[d]])}}(require("./tree")),function(a){a.visitor=function(a){this._implementation=a},a.visitor.prototype={visit:function(a){if(a instanceof Array)return this.visitArray(a);if(!a||!a.type)return a;var b,c,d="visit"+a.type,e=this._implementation[d];return e&&(b={visitDeeper:!0},c=e.call(this._implementation,a,b),this._implementation.isReplacing&&(a=c)),(!b||b.visitDeeper)&&a&&a.accept&&a.accept(this),d+="Out",this._implementation[d]&&this._implementation[d](a),a},visitArray:function(a){var b,c=[];for(b=0;b<a.length;b++){var d=this.visit(a[b]);d instanceof Array?(d=this.flatten(d),c=c.concat(d)):c.push(d)}return this._implementation.isReplacing?c:a},doAccept:function(a){a.accept(this)},flatten:function(a,b){return a.reduce(this.flattenReduce.bind(this),b||[])},flattenReduce:function(a,b){return b instanceof Array?a=this.flatten(b,a):a.push(b),a}}}(require("./tree")),function(a){a.importVisitor=function(b,c,d){this._visitor=new a.visitor(this),this._importer=b,this._finish=c,this.env=d||new a.evalEnv,this.importCount=0},a.importVisitor.prototype={isReplacing:!0,run:function(a){var b;try{this._visitor.visit(a)}catch(c){b=c}this.isFinished=!0,0===this.importCount&&this._finish(b)},visitImport:function(b,c){var d,e=this,f=b.options.inline;if(!b.css||f){try{d=b.evalForImport(this.env)}catch(g){g.filename||(g.index=b.index,g.filename=b.currentFileInfo.filename),b.css=!0,b.error=g}if(d&&(!d.css||f)){b=d,this.importCount++;var h=new a.evalEnv(this.env,this.env.frames.slice(0));b.options.multiple&&(h.importMultiple=!0),this._importer.push(b.getPath(),b.currentFileInfo,b.options,function(c,d,g,i){c&&!c.filename&&(c.index=b.index,c.filename=b.currentFileInfo.filename),g&&!h.importMultiple&&(b.skip=g);var j=function(a){e.importCount--,0===e.importCount&&e.isFinished&&e._finish(a)};return!d||(b.root=d,b.importedFilename=i,f||b.skip)?(j(),void 0):(new a.importVisitor(e._importer,j,h).run(d),void 0)})}}return c.visitDeeper=!1,b},visitRule:function(a,b){return b.visitDeeper=!1,a},visitDirective:function(a){return this.env.frames.unshift(a),a},visitDirectiveOut:function(){this.env.frames.shift()},visitMixinDefinition:function(a){return this.env.frames.unshift(a),a},visitMixinDefinitionOut:function(){this.env.frames.shift()},visitRuleset:function(a){return this.env.frames.unshift(a),a},visitRulesetOut:function(){this.env.frames.shift()},visitMedia:function(a){return this.env.frames.unshift(a.ruleset),a},visitMediaOut:function(){this.env.frames.shift()}}}(require("./tree")),function(a){a.joinSelectorVisitor=function(){this.contexts=[[]],this._visitor=new a.visitor(this)},a.joinSelectorVisitor.prototype={run:function(a){return this._visitor.visit(a)},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){var b=this.contexts[this.contexts.length-1],c=[];this.contexts.push(c),a.root||(a.selectors=a.selectors.filter(function(a){return a.getIsOutput()}),0===a.selectors.length&&(a.rules.length=0),a.joinSelectors(c,b,a.selectors),a.paths=c)},visitRulesetOut:function(){this.contexts.length=this.contexts.length-1},visitMedia:function(a){var b=this.contexts[this.contexts.length-1];a.rules[0].root=0===b.length||b[0].multiMedia}}}(require("./tree")),function(a){a.toCSSVisitor=function(b){this._visitor=new a.visitor(this),this._env=b},a.toCSSVisitor.prototype={isReplacing:!0,run:function(a){return this._visitor.visit(a)},visitRule:function(a){return a.variable?[]:a},visitMixinDefinition:function(){return[]},visitExtend:function(){return[]},visitComment:function(a){return a.isSilent(this._env)?[]:a},visitMedia:function(a,b){return a.accept(this._visitor),b.visitDeeper=!1,a.rules.length?a:[]},visitDirective:function(b){if(b.currentFileInfo.reference&&!b.isReferenced)return[];if("@charset"===b.name){if(this.charset){if(b.debugInfo){var c=new a.Comment("/* "+b.toCSS(this._env).replace(/\n/g,"")+" */\n");return c.debugInfo=b.debugInfo,this._visitor.visit(c)}return[]}this.charset=!0}return b},checkPropertiesInRoot:function(b){for(var c,d=0;d<b.length;d++)if(c=b[d],c instanceof a.Rule&&!c.variable)throw{message:"properties must be inside selector blocks, they cannot be in the root.",index:c.index,filename:c.currentFileInfo?c.currentFileInfo.filename:null}},visitRuleset:function(b,c){var d,e=[];if(b.firstRoot&&this.checkPropertiesInRoot(b.rules),b.root)b.accept(this._visitor),c.visitDeeper=!1,(b.firstRoot||b.rules.length>0)&&e.splice(0,0,b);else{b.paths=b.paths.filter(function(b){var c;for(" "===b[0].elements[0].combinator.value&&(b[0].elements[0].combinator=new a.Combinator("")),c=0;c<b.length;c++)return b[c].getIsReferenced()&&b[c].getIsOutput()?!0:!1});for(var f=0;f<b.rules.length;f++)d=b.rules[f],d.rules&&(e.push(this._visitor.visit(d)),b.rules.splice(f,1),f--);b.rules.length>0&&b.accept(this._visitor),c.visitDeeper=!1,this._mergeRules(b.rules),this._removeDuplicateRules(b.rules),b.rules.length>0&&b.paths.length>0&&e.splice(0,0,b)}return 1===e.length?e[0]:e},_removeDuplicateRules:function(b){var c,d,e,f={};for(e=b.length-1;e>=0;e--)if(d=b[e],d instanceof a.Rule)if(f[d.name]){c=f[d.name],c instanceof a.Rule&&(c=f[d.name]=[f[d.name].toCSS(this._env)]);var g=d.toCSS(this._env);-1!==c.indexOf(g)?b.splice(e,1):c.push(g)}else f[d.name]=d},_mergeRules:function(b){for(var c,d,e,f={},g=0;g<b.length;g++)d=b[g],d instanceof a.Rule&&d.merge&&(e=[d.name,d.important?"!":""].join(","),f[e]?b.splice(g--,1):c=f[e]=[],c.push(d));Object.keys(f).map(function(b){c=f[b],c.length>1&&(d=c[0],d.value=new a.Value(c.map(function(a){return a.value})))})}}}(require("./tree")),function(a){a.extendFinderVisitor=function(){this._visitor=new a.visitor(this),this.contexts=[],this.allExtendsStack=[[]]},a.extendFinderVisitor.prototype={run:function(a){return a=this._visitor.visit(a),a.allExtends=this.allExtendsStack[0],a},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(b){if(!b.root){var c,d,e,f,g=[];for(c=0;c<b.rules.length;c++)b.rules[c]instanceof a.Extend&&(g.push(b.rules[c]),b.extendOnEveryPath=!0);for(c=0;c<b.paths.length;c++){var h=b.paths[c],i=h[h.length-1];for(f=i.extendList.slice(0).concat(g).map(function(a){return a.clone()}),d=0;d<f.length;d++)this.foundExtends=!0,e=f[d],e.findSelfSelectors(h),e.ruleset=b,0===d&&(e.firstExtendOnThisSelectorPath=!0),this.allExtendsStack[this.allExtendsStack.length-1].push(e)}this.contexts.push(b.selectors)}},visitRulesetOut:function(a){a.root||(this.contexts.length=this.contexts.length-1)},visitMedia:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}},a.processExtendsVisitor=function(){this._visitor=new a.visitor(this)},a.processExtendsVisitor.prototype={run:function(b){var c=new a.extendFinderVisitor;return c.run(b),c.foundExtends?(b.allExtends=b.allExtends.concat(this.doExtendChaining(b.allExtends,b.allExtends)),this.allExtendsStack=[b.allExtends],this._visitor.visit(b)):b},doExtendChaining:function(b,c,d){var e,f,g,h,i,j,k,l,m=[],n=this;for(d=d||0,e=0;e<b.length;e++)for(f=0;f<c.length;f++)j=b[e],k=c[f],this.inInheritanceChain(k,j)||(i=[k.selfSelectors[0]],g=n.findMatch(j,i),g.length&&j.selfSelectors.forEach(function(b){h=n.extendSelector(g,i,b),l=new a.Extend(k.selector,k.option,0),l.selfSelectors=h,h[h.length-1].extendList=[l],m.push(l),l.ruleset=k.ruleset,l.parents=[k,j],k.firstExtendOnThisSelectorPath&&(l.firstExtendOnThisSelectorPath=!0,k.ruleset.paths.push(h))}));if(m.length){if(this.extendChainCount++,d>100){var o="{unable to calculate}",p="{unable to calculate}";try{o=m[0].selfSelectors[0].toCSS(),p=m[0].selector.toCSS()}catch(q){}throw{message:"extend circular reference detected. One of the circular extends is currently:"+o+":extend("+p+")"}}return m.concat(n.doExtendChaining(m,c,d+1))}return m},inInheritanceChain:function(a,b){if(a===b)return!0;if(b.parents){if(this.inInheritanceChain(a,b.parents[0]))return!0;if(this.inInheritanceChain(a,b.parents[1]))return!0}return!1},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitSelector:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){if(!a.root){var b,c,d,e,f=this.allExtendsStack[this.allExtendsStack.length-1],g=[],h=this;for(d=0;d<f.length;d++)for(c=0;c<a.paths.length;c++)e=a.paths[c],a.extendOnEveryPath||e[e.length-1].extendList.length||(b=this.findMatch(f[d],e),b.length&&f[d].selfSelectors.forEach(function(a){g.push(h.extendSelector(b,e,a))}));a.paths=a.paths.concat(g)}},findMatch:function(a,b){var c,d,e,f,g,h,i,j=this,k=a.selector.elements,l=[],m=[];for(c=0;c<b.length;c++)for(d=b[c],e=0;e<d.elements.length;e++)for(f=d.elements[e],(a.allowBefore||0===c&&0===e)&&l.push({pathIndex:c,index:e,matched:0,initialCombinator:f.combinator}),h=0;h<l.length;h++)i=l[h],g=f.combinator.value,""===g&&0===e&&(g=" "),!j.isElementValuesEqual(k[i.matched].value,f.value)||i.matched>0&&k[i.matched].combinator.value!==g?i=null:i.matched++,i&&(i.finished=i.matched===k.length,i.finished&&!a.allowAfter&&(e+1<d.elements.length||c+1<b.length)&&(i=null)),i?i.finished&&(i.length=k.length,i.endPathIndex=c,i.endPathElementIndex=e+1,l.length=0,m.push(i)):(l.splice(h,1),h--);return m},isElementValuesEqual:function(b,c){if("string"==typeof b||"string"==typeof c)return b===c;if(b instanceof a.Attribute)return b.op!==c.op||b.key!==c.key?!1:b.value&&c.value?(b=b.value.value||b.value,c=c.value.value||c.value,b===c):b.value||c.value?!1:!0;if(b=b.value,c=c.value,b instanceof a.Selector){if(!(c instanceof a.Selector)||b.elements.length!==c.elements.length)return!1;for(var d=0;d<b.elements.length;d++){if(b.elements[d].combinator.value!==c.elements[d].combinator.value&&(0!==d||(b.elements[d].combinator.value||" ")!==(c.elements[d].combinator.value||" ")))return!1;if(!this.isElementValuesEqual(b.elements[d].value,c.elements[d].value))return!1}return!0}return!1},extendSelector:function(b,c,d){var e,f,g,h,i,j=0,k=0,l=[];for(e=0;e<b.length;e++)h=b[e],f=c[h.pathIndex],g=new a.Element(h.initialCombinator,d.elements[0].value,d.elements[0].index,d.elements[0].currentFileInfo),h.pathIndex>j&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(c[j].elements.slice(k)),k=0,j++),i=f.elements.slice(k,h.index).concat([g]).concat(d.elements.slice(1)),j===h.pathIndex&&e>0?l[l.length-1].elements=l[l.length-1].elements.concat(i):(l=l.concat(c.slice(j,h.pathIndex)),l.push(new a.Selector(i))),j=h.endPathIndex,k=h.endPathElementIndex,k>=c[j].elements.length&&(k=0,j++);return j<c.length&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(c[j].elements.slice(k)),j++),l=l.concat(c.slice(j,c.length))},visitRulesetOut:function(){},visitMedia:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}}}(require("./tree")),function(a){a.sourceMapOutput=function(a){this._css=[],this._rootNode=a.rootNode,this._writeSourceMap=a.writeSourceMap,this._contentsMap=a.contentsMap,this._sourceMapFilename=a.sourceMapFilename,this._outputFilename=a.outputFilename,this._sourceMapBasepath=a.sourceMapBasepath,this._sourceMapRootpath=a.sourceMapRootpath,this._outputSourceFiles=a.outputSourceFiles,this._sourceMapGeneratorConstructor=a.sourceMapGenerator||require("source-map").SourceMapGenerator,this._sourceMapRootpath&&"/"!==this._sourceMapRootpath.charAt(this._sourceMapRootpath.length-1)&&(this._sourceMapRootpath+="/"),this._lineNumber=0,this._column=0},a.sourceMapOutput.prototype.normalizeFilename=function(a){return this._sourceMapBasepath&&0===a.indexOf(this._sourceMapBasepath)&&(a=a.substring(this._sourceMapBasepath.length),("\\"===a.charAt(0)||"/"===a.charAt(0))&&(a=a.substring(1))),(this._sourceMapRootpath||"")+a.replace(/\\/g,"/")},a.sourceMapOutput.prototype.add=function(a,b,c,d){if(a){var e,f,g,h,i;if(b){var j=this._contentsMap[b.filename].substring(0,c);f=j.split("\n"),h=f[f.length-1]}if(e=a.split("\n"),g=e[e.length-1],b)if(d)for(i=0;i<e.length;i++)this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+i+1,column:0===i?this._column:0},original:{line:f.length+i,column:0===i?h.length:0},source:this.normalizeFilename(b.filename)});else this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+1,column:this._column},original:{line:f.length,column:h.length},source:this.normalizeFilename(b.filename)});1===e.length?this._column+=g.length:(this._lineNumber+=e.length-1,this._column=g.length),this._css.push(a)}},a.sourceMapOutput.prototype.isEmpty=function(){return 0===this._css.length},a.sourceMapOutput.prototype.toCSS=function(a){if(this._sourceMapGenerator=new this._sourceMapGeneratorConstructor({file:this._outputFilename,sourceRoot:null}),this._outputSourceFiles)for(var b in this._contentsMap)this._sourceMapGenerator.setSourceContent(this.normalizeFilename(b),this._contentsMap[b]);if(this._rootNode.genCSS(a,this),this._css.length>0){var c,d=JSON.stringify(this._sourceMapGenerator.toJSON());this._sourceMapFilename&&(c=this.normalizeFilename(this._sourceMapFilename)),this._writeSourceMap?this._writeSourceMap(d):c="data:application/json,"+encodeURIComponent(d),c&&this._css.push("/*# sourceMappingURL="+c+" */")}return this._css.join("")}}(require("./tree"));var isFileProtocol=/^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);less.env=less.env||("127.0.0.1"==location.hostname||"0.0.0.0"==location.hostname||"localhost"==location.hostname||location.port.length>0||isFileProtocol?"development":"production");var logLevel={info:2,errors:1,none:0};if(less.logLevel="undefined"!=typeof less.logLevel?less.logLevel:logLevel.info,less.async=less.async||!1,less.fileAsync=less.fileAsync||!1,less.poll=less.poll||(isFileProtocol?1e3:1500),less.functions)for(var func in less.functions)less.tree.functions[func]=less.functions[func];var dumpLineNumbers=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);dumpLineNumbers&&(less.dumpLineNumbers=dumpLineNumbers[1]);var typePattern=/^text\/(x-)?less$/,cache=null,fileCache={};if(less.watch=function(){return less.watchMode||(less.env="development",initRunningMode()),this.watchMode=!0},less.unwatch=function(){return clearInterval(less.watchTimer),this.watchMode=!1},/!watch/.test(location.hash)&&less.watch(),"development"!=less.env)try{cache="undefined"==typeof window.localStorage?null:window.localStorage}catch(_){}var links=document.getElementsByTagName("link");less.sheets=[];for(var i=0;i<links.length;i++)("stylesheet/less"===links[i].rel||links[i].rel.match(/stylesheet/)&&links[i].type.match(typePattern))&&less.sheets.push(links[i]);less.modifyVars=function(a){var b="";for(var c in a)b+=("@"===c.slice(0,1)?"":"@")+c+": "+(";"===a[c].slice(-1)?a[c]:a[c]+";");less.refresh(!1,b)},less.refresh=function(a,b){var c,d;c=d=new Date,loadStyleSheets(function(a,b,e,f,g){return a?error(a,f.href):(g.local?log("loading "+f.href+" from cache.",logLevel.info):(log("parsed "+f.href+" successfully.",logLevel.info),createCSS(b.toCSS(less),f,g.lastModified)),log("css for "+f.href+" generated in "+(new Date-d)+"ms",logLevel.info),0===g.remaining&&log("css generated in "+(new Date-c)+"ms",logLevel.info),d=new Date,void 0)},a,b),loadStyles(b)},less.refreshStyles=loadStyles,less.Parser.fileLoader=loadFile,less.refresh("development"===less.env),"function"==typeof define&&define.amd&&define(function(){return less});