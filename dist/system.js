!function(e){e.upgradeSystemLoader=function(){function t(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@\/?#]*(?::[^:@\/?#]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function r(e,a){function r(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return y&&(a=a.replace(/\\/g,"/")),a=t(a||""),e=t(e||""),a&&e?(a.protocol||e.protocol)+(a.protocol||a.authority?a.authority:e.authority)+r(a.protocol||a.authority||"/"===a.pathname.charAt(0)?a.pathname:a.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+a.pathname:e.pathname)+(a.protocol||a.authority||a.pathname?a.search:a.search||e.search)+a.hash:null}function n(t){var a={};if(("object"==typeof t||"function"==typeof t)&&t!==e)if(_)for(var r in t)"default"!==r&&o(a,t,r);else i(a,t);return a["default"]=t,S(a,"__useDefault",{value:!0}),a}function o(e,t,a){try{var r;(r=Object.getOwnPropertyDescriptor(t,a))&&S(e,a,r)}catch(n){return e[a]=t[a],!1}}function i(e,t,a){var r=t&&t.hasOwnProperty;for(var n in t)(!r||t.hasOwnProperty(n))&&(a&&n in e||(e[n]=t[n]));return e}function l(e){function t(e,t){t._extensions=[];for(var a=0,r=e.length;r>a;a++)e[a](t)}var a=e["import"];e["import"]=function(e,t){return a.call(this,e,t).then(function(e){return e.__useDefault?e["default"]:e})},e.set("@empty",e.newModule({})),"undefined"!=typeof require&&(e._nodeRequire=require),e.config=function(e){for(var t in e){var a=e[t];if("object"!=typeof a||a instanceof Array)this[t]=a;else{this[t]=this[t]||{};for(var r in a)this[t][r]=a[r]}}};var n;if("undefined"==typeof window&&"undefined"==typeof WorkerGlobalScope)n="file:"+process.cwd()+"/",y&&(n=n.replace(/\\/g,"/"));else if("undefined"==typeof window)n=e.global.location.href;else if(n=document.baseURI,!n){var o=document.getElementsByTagName("base");n=o[0]&&o[0].href||window.location.href}var i,s=e.locate;e.locate=function(e){return this.baseURL!=i&&(i=r(n,this.baseURL),"/"!=i.substr(i.length-1,1)&&(i+="/"),this.baseURL=i),Promise.resolve(s.call(this,e))},e._extensions=e._extensions||[],e._extensions.push(l),e.clone=function(){var e=this,a=new LoaderPolyfill(F);return a.baseURL=e.baseURL,a.paths={"*":"*.js"},t(e._extensions,a),a}}function s(e){function t(e,t){var a=e.meta&&e.meta[t.name];if(a)for(var r in a)t.metadata[r]=t.metadata[r]||a[r]}var a=/^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,r=/\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;e.meta={},e._extensions=e._extensions||[],e._extensions.push(s);var n=e.locate;e.locate=function(e){return t(this,e),n.call(this,e)};var o=e.translate;e.translate=function(e){var n=e.source.match(a);if(n)for(var i=n[0].match(r),l=0;l<i.length;l++){var s=i[l].length,u=i[l].substr(0,1);if(";"==i[l].substr(s-1,1)&&s--,'"'==u||"'"==u){var d=i[l].substr(1,i[l].length-3),c=d.substr(0,d.indexOf(" "));if(c){var f=d.substr(c.length+1,d.length-c.length-1);e.metadata[c]instanceof Array?e.metadata[c].push(f):e.metadata[c]||(e.metadata[c]=f)}}}return t(this,e),o.call(this,e)}}function u(e){function t(e,t){var n,o=this,i=e.source.lastIndexOf("\n");-1!=i&&"//# sourceMappingURL="==e.source.substr(i+1,21)&&(n=e.source.substr(i+22,e.source.length-i-22),"undefined"!=typeof r&&(n=r(e.address,n)));var l=e.metadata&&e.metadata.eval;t=t||o.global,a(e.source,e.address,t,n,l)}function o(e){for(var t=[],a=0,r=e.length;r>a;a++)-1==x.call(t,e[a])&&t.push(e[a]);return t}function i(t,a,r,n){"string"!=typeof t&&(n=r,r=a,a=t,t=null),v=!0;var o;if(o="boolean"==typeof r?{declarative:!1,deps:a,execute:n,executingRequire:r}:{declarative:!0,deps:a,declare:r},t)o.name=t,t in e.defined||(e.defined[t]=o);else if(o.declarative){if(g)throw new TypeError("Multiple anonymous System.register calls in the same module file.");g=o}}function l(e){if(!e.register){e.register=i,e.defined||(e.defined={});var t=e.onScriptLoad;e.onScriptLoad=function(e){t(e),g&&(e.metadata.entry=g),v&&(e.metadata.format=e.metadata.format||"register",e.metadata.registered=!0)}}}function s(e,t,a){if(a[e.groupIndex]=a[e.groupIndex]||[],-1==x.call(a[e.groupIndex],e)){a[e.groupIndex].push(e);for(var r=0,n=e.normalizedDeps.length;n>r;r++){var o=e.normalizedDeps[r],i=t.defined[o];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(void 0===i.groupIndex||i.groupIndex<l){if(void 0!==i.groupIndex&&(a[i.groupIndex].splice(x.call(a[i.groupIndex],i),1),0==a[i.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");i.groupIndex=l}s(i,t,a)}}}}function d(e,t){var a=t.defined[e];if(!a.module){a.groupIndex=0;var r=[];s(a,t,r);for(var n=!!a.declarative==r.length%2,o=r.length-1;o>=0;o--){for(var i=r[o],l=0;l<i.length;l++){var u=i[l];n?f(u,t):m(u,t)}n=!n}}}function c(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function f(e,t){if(!e.module){var a=e.module=c(e.name),r=e.module.exports,n=e.declare.call(t.global,function(e,t){a.locked=!0,r[e]=t;for(var n=0,o=a.importers.length;o>n;n++){var i=a.importers[n];if(!i.locked){var l=x.call(i.dependencies,a);i.setters[l](r)}}return a.locked=!1,t});if(a.setters=n.setters,a.execute=n.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+e.name);for(var o=0,i=e.normalizedDeps.length;i>o;o++){var l,s=e.normalizedDeps[o],u=t.defined[s],d=y[s];d?l=d.exports:u&&!u.declarative?l=u.module.exports&&u.module.exports.__esModule?u.module.exports:u.esModule:u?(f(u,t),d=u.module,l=d.exports):l=t.get(s),d&&d.importers?(d.importers.push(a),a.dependencies.push(d)):a.dependencies.push(null),a.setters[o]&&a.setters[o](l)}}}function p(e,t){var a,r=t.defined[e];if(r)r.declarative?h(e,[],t):r.evaluated||m(r,t),a=r.module.exports;else if(a=t.get(e),!a)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&a&&a.__useDefault?a["default"]:a}function m(e,t){if(!e.module){var a={},r=e.module={exports:a,id:e.name};if(!e.executingRequire)for(var o=0,i=e.normalizedDeps.length;i>o;o++){var l=e.normalizedDeps[o],s=t.defined[l];s&&m(s,t)}e.evaluated=!0;var u=e.execute.call(t.global,function(a){for(var r=0,n=e.deps.length;n>r;r++)if(e.deps[r]==a)return p(e.normalizedDeps[r],t);throw new TypeError("Module "+a+" not declared as a dependency.")},a,r);u&&(r.exports=u),a=r.exports,a&&(a.__esModule||a instanceof _)?e.esModule=a:e.esmExports&&a!==t.global?e.esModule=n(a):e.esModule={"default":a}}}function h(e,t,a){var r=a.defined[e];if(r&&!r.evaluated&&r.declarative){t.push(e);for(var n=0,o=r.normalizedDeps.length;o>n;n++){var i=r.normalizedDeps[n];-1==x.call(t,i)&&(a.defined[i]?h(i,t,a):a.get(i))}r.evaluated||(r.evaluated=!0,r.module.execute.call(a.global))}}"undefined"==typeof x&&(x=Array.prototype.indexOf),("undefined"==typeof a||"undefined"!=typeof document&&!document.addEventListener)&&(a=eval),e._extensions=e._extensions||[],e._extensions.push(u);e.__exec=t;var g,v;l(e);var y={},_=e.newModule({}).constructor,w=/System\.register/,S=e.fetch;e.fetch=function(e){var t=this;return l(t),t.defined[e.name]?(e.metadata.format="defined",""):(g=null,v=!1,S.call(t,e))};var F=e.translate;e.translate=function(e){return this.register=i,this.__exec=t,e.metadata.deps=e.metadata.deps||[],Promise.resolve(F.call(this,e)).then(function(t){return(e.metadata.init||e.metadata.exports)&&(e.metadata.format=e.metadata.format||"global"),("register"==e.metadata.format||!e.metadata.format&&e.source.match(w))&&(e.metadata.format="register"),t})};var I=e.instantiate;e.instantiate=function(e){var t,a=this;if(a.defined[e.name])t=a.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],esModule:null,execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format){g=null,v=!1;var r=a.global.System;if(a.global.System=a,a.__exec(e),a.global.System=r,g&&(t=g),!t&&b.defined[e.name]&&(t=b.defined[e.name]),!v&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.")}if(!t&&"es6"!=e.metadata.format)return{deps:e.metadata.deps,execute:function(){return a.newModule({})}};if(!t)return I.call(this,e);a.defined[e.name]=t,t.deps=o(t.deps),t.name=e.name,t.esmExports=e.metadata.esmExports!==!1;for(var n=[],i=0,l=t.deps.length;l>i;i++)n.push(Promise.resolve(a.normalize(t.deps[i],e.name)));return Promise.all(n).then(function(r){return t.normalizedDeps=r,{deps:t.deps,execute:function(){d(e.name,a),h(e.name,[],a),a.defined[e.name]=void 0;var r=t.module.exports;return t.declarative||(r=t.esModule),a.newModule(r)}}})}}function d(e){function t(e,t,a){if(e.meta[t]={format:"global"},s&&!e.paths[t])try{e.paths[t]=require.resolve(a||t)}catch(r){}}e._extensions.push(d);var a,r,n=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,o=/\$traceurRuntime\s*\./,i=/babelHelpers\s*\./,l=!0,s="undefined"!=typeof process&&"undefined"!=typeof require&&require.resolve,u=e.locate;e.locate=function(e){var a=this;return l&&("traceur"==a.transpiler?(t(a,"traceur","traceur/bin/traceur.js"),a.meta.traceur.exports="traceur",t(a,"traceur-runtime","traceur/bin/traceur-runtime.js")):"babel"==a.transpiler&&(t(a,"babel","babel-core/browser.js"),t(a,"babel-runtime","babel-core/external-helpers.js")),l=!1),u.call(a,e)};var c=e.translate;e.translate=function(e){var t=this;return c.call(t,e).then(function(l){if("es6"==e.metadata.format||!e.metadata.format&&l.match(n))return e.metadata.format="es6",l;if("register"==e.metadata.format){if(!t.global.$traceurRuntime&&e.source.match(o))return t["import"]("traceur-runtime").then(function(){return l});if(!t.global.babelHelpers&&e.source.match(i))return t["import"]("babel/external-helpers").then(function(){return l})}return"traceur"==t.transpiler?Promise.all([a||(a=t.normalize(t.transpiler)),r||(r=t.normalize(t.transpiler+"-runtime"))]).then(function(t){return e.name==t[0]||e.name==t[1]?"(function() { var curSystem = System; "+l+"\nSystem = curSystem; })();":l}):l})}}function c(e){function t(e,t){for(var a=e.split(".");a.length;)t=t[a.shift()];return t}function a(e){function a(e){for(var t={},a=0,r=e.length;r>a;a++)t[e[a]]=!0;return t}if(!e.has("@@global-helpers")){var r,n,o=e.global.hasOwnProperty,i={};e.set("@@global-helpers",e.newModule({prepareGlobal:function(t,l,s){var u;if("object"==typeof t){var d=t;l=d.deps,u=d.globals,s=d.exportName,t=d.moduleName}if(l)for(var c=0;c<l.length;c++){var f=i[l[c]];if(f)for(var p in f)e.global[p]=f[p]}if(u)for(var m in u)e.global[m]=u[m];if(!s&&s!==!1&&e.inferGlobals!==!1){r={},n=a(["indexedDB","sessionStorage","localStorage","clipboardData","frames","webkitStorageInfo","toolbar","statusbar","scrollbars","personalbar","menubar","locationbar","webkitIndexedDB","screenTop","screenLeft"]);for(var h in e.global)if(!n[h]&&(!o||e.global.hasOwnProperty(h)))try{r[h]=e.global[h]}catch(g){n[h]=!0}}},retrieveGlobal:function(a,l,s){var u,d,c={};if(s)u=s.call(e.global);else if(l){var f=l.split(".")[0];u=t(l,e.global),c[f]=e.global[f]}else if(l!==!1&&e.inferGlobals!==!1)for(var p in e.global)n[p]||o&&!e.global.hasOwnProperty(p)||p==e.global||r[p]==e.global[p]||(c[p]=e.global[p],u?u!==e.global[p]&&(d=!0):void 0===u&&(u=e.global[p]));return i[a]=c,d?c:u}}))}}e._extensions.push(c),a(e);var r=e.instantiate;e.instantiate=function(e){var t=this;a(t);var n=e.metadata.exports;if(e.metadata.format||(e.metadata.format="global"),e.metadata.globals)for(var o in e.metadata.globals)e.metadata.deps.push(e.metadata.globals[o]);return"global"==e.metadata.format&&(e.metadata.execute=function(a,r,o){var i;if(e.metadata.globals){i={};for(var l in e.metadata.globals)i[l]=a(e.metadata.globals[l])}t.get("@@global-helpers").prepareGlobal({globals:i,moduleName:o.id,exportName:n,deps:e.metadata.deps}),n&&(e.source+='\nthis["'+n+'"] = '+n+";");var s=t.global.define,a=t.global.require;return t.global.define=void 0,t.global.module=void 0,t.global.exports=void 0,t.__exec(e,t.global),t.global.require=a,t.global.define=s,t.get("@@global-helpers").retrieveGlobal(o.id,n,e.metadata.init)}),r.call(t,e)}}function f(e){function t(e){function t(e,t){for(var a=0;a<e.length;a++)if(e[a][0]<t.index&&e[a][1]>t.index)return!0;return!1}r.lastIndex=n.lastIndex=o.lastIndex=0;var a,i=[],l=[],s=[];if(e.length/e.split("\n").length<200){for(;a=o.exec(e);)l.push([a.index,a.index+a[0].length]);for(;a=n.exec(e);)t(l,a)||s.push([a.index,a.index+a[0].length])}for(;a=r.exec(e);)if(!t(l,a)&&!t(s,a)){var u=a[1].substr(1,a[1].length-2);if(u.match(/"|'/))continue;i.push(u)}return i}e._extensions.push(f);var a=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,n=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,i=e.instantiate;e.instantiate=function(n){return n.metadata.format||(a.lastIndex=0,r.lastIndex=0,(r.exec(n.source)||a.exec(n.source))&&(n.metadata.format="cjs")),"cjs"==n.metadata.format&&(n.metadata.deps=n.metadata.deps?n.metadata.deps.concat(t(n.source)):t(n.source),n.metadata.executingRequire=!0,n.metadata.execute=function(t,a,r){var o=(n.address||"").split("/");o.pop(),o=o.join("/"),b._nodeRequire&&(o=o.substr(5));var i=(e.global._g={global:e.global,exports:a,module:r,require:t,__filename:b._nodeRequire?n.address.substr(5):n.address,__dirname:o},e.global.define);e.global.define=void 0;var l={name:n.name,source:"(function() {\n(function(global, exports, module, require, __filename, __dirname){\n"+n.source+"\n}).call(_g.exports, _g.global, _g.exports, _g.module, _g.require, _g.__filename, _g.__dirname);})();",address:n.address};e.__exec(l),e.global.define=i,e.global._g=void 0}),i.call(this,n)}}function p(e){function t(e,t){function a(e,t){for(var a=0;a<e.length;a++)if(e[a][0]<t&&e[a][1]>t)return!0;return!1}for(var r,n=[];r=f.exec(e);)n.push([r.index,r.index+r[0].length]);e=e.replace(d,function(e,t,r,o,i,l){return a(n,l+1)?e:""});var o=e.match(v),i=(o[1].split(",")[t]||"require").replace(b,""),l=y[i]||(y[i]=new RegExp(h+i+g,"g"));l.lastIndex=0;for(var r,s=[];r=l.exec(e);)s.push(r[2]||r[3]);return s}function a(e,t,r,n){var o=this;if("object"==typeof e&&!(e instanceof Array))return a.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if(!(e instanceof Array)){if("string"==typeof e){var i=o.get(e);return i.__useDefault?i["default"]:i}throw new TypeError("Invalid require")}Promise.all(e.map(function(e){return o["import"](e,n)})).then(function(e){t&&t.apply(null,e)},r)}function r(e,t,r){return function(n,o,i){return"string"==typeof n?t(n):a.call(r,n,o,i,{name:e})}}function n(e){function a(a,n,o){"string"!=typeof a&&(o=n,n=a,a=null),n instanceof Array||(o=n,n=["require","exports","module"]),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===n[n.length-1]&&n.pop();var i,l,s;if(-1!=(i=x.call(n,"require"))){n.splice(i,1);var u=o.toString();n=n.concat(t(u,i))}-1!=(l=x.call(n,"exports"))&&n.splice(l,1),-1!=(s=x.call(n,"module"))&&n.splice(s,1);var d={deps:n,execute:function(t,a,u){for(var d=[],f=0;f<n.length;f++)d.push(t(n[f]));u.uri=e.baseURL+u.id,u.config=function(){},-1!=s&&d.splice(s,0,u),-1!=l&&d.splice(l,0,a),-1!=i&&d.splice(i,0,r(u.id,t,e));var p=o.apply(c,d);return"undefined"==typeof p&&u&&(p=u.exports),"undefined"!=typeof p?p:void 0}};if(a)_=0!=n.length||_||w?null:d,w=!0,e.register(a,d.deps,!1,d.execute);else{if(_)throw new TypeError("Multiple defines for anonymous module");_=d}}var n=e.onScriptLoad;e.onScriptLoad=function(e){n(e),(_||w)&&(e.metadata.format="defined",e.metadata.registered=!0),_&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(_.deps):_.deps,e.metadata.execute=_.execute)},a.amd={},e.amdDefine=a}function o(e){e.amdDefine||n(e),_=null,w=null;var t=e.global;S=t.module,F=t.exports,I=t.define,t.module=void 0,t.exports=void 0,t.define&&t.define===e.amdDefine||(t.define=e.amdDefine)}function i(e){var t=e.global;t.define=I,t.module=S,t.exports=F}var l="undefined"!=typeof module&&module.exports;e._extensions.push(p);var s=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,u=/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,d=/(\/\*([\s\S]*?)\*\/|([^:(?!\\)]|^)\/\/(.*)$)/gm,f=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,m=/(function|var|let|const|return|export|\"|\'|\(|\=)$/i,h="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",g="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",v=/\(([^\)]*)\)/,b=/^\s+|\s+$/g,y={};e.amdRequire=function(){return a.apply(this,arguments)};var _,w,S,F,I;if(n(e),e.scriptLoader){var L=e.fetch;e.fetch=function(e){return o(this),L.call(this,e)}}var E=e.instantiate;e.instantiate=function(e){var t=this,a=e.source.replace(u,"$1"),r=a.match(s);if("amd"==e.metadata.format||!e.metadata.format&&r){var n=a.substring(0,a.indexOf(r[0])),d=n.replace(b,"");if(!m.test(d)){if(e.metadata.format="amd",t.execute!==!1&&(o(t),t.__exec(e),i(t),!_&&!w&&!l))throw new TypeError("AMD module "+e.name+" did not define");_&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(_.deps):_.deps,e.metadata.execute=_.execute)}}return E.call(t,e)}}function m(e){function t(e,t){return e.length<t.length?!1:e.substr(0,t.length)!=t?!1:e[t.length]&&"/"!=e[t.length]?!1:!0}function a(e){for(var t=1,a=0,r=e.length;r>a;a++)"/"===e[a]&&t++;return t}function r(e,t,a){return a+e.substr(t)}function n(e,n,o){var i,l,s,u,d=0,c=0;if(n)for(var f in o.map){var p=o.map[f];if("object"==typeof p&&t(n,f)&&(s=a(f),!(c>=s)))for(var m in p)t(e,m)&&(u=a(m),d>=u||(i=m,d=u,l=f,c=s))}if(i)return r(e,i.length,o.map[l][i]);for(var f in o.map){var p=o.map[f];if("string"==typeof p&&t(e,f)){var u=a(f);d>=u||(i=f,d=u)}}return i?r(e,i.length,o.map[i]):e}e.map=e.map||{},e._extensions.push(m);var o=e.normalize;e.normalize=function(e,t,a){var r=this;r.map||(r.map={});var i=!1;return"/"==e.substr(e.length-1,1)&&(i=!0,e+="#"),Promise.resolve(o.call(r,e,t,a)).then(function(e){if(e=n(e,t,r),i){var a=e.split("/");a.pop();var o=a.pop();a.push(o),a.push(o),e=a.join("/")}return e})}}function h(e){"undefined"==typeof x&&(x=Array.prototype.indexOf),e._extensions.push(h);var t=e.normalize;e.normalize=function(e,a,r){var n,o=this;return a&&-1!=(n=a.indexOf("!"))&&(a=a.substr(0,n)),Promise.resolve(t.call(o,e,a,r)).then(function(e){var t=e.lastIndexOf("!");if(-1!=t){var n=e.substr(0,t),i=e.substr(t+1)||n.substr(n.lastIndexOf(".")+1);return new Promise(function(e){e(o.normalize(i,a,r))}).then(function(e){return i=e,o.normalize(n,a,r,!0)}).then(function(e){return e+"!"+i})}return e})};var a=e.locate;e.locate=function(e){var t=this,r=e.name;if(this.defined&&this.defined[r])return a.call(this,e);var n=r.lastIndexOf("!");if(-1!=n){var o=r.substr(n+1);e.name=r.substr(0,n);var i=t.pluginLoader||t;return i["import"](o,{metadata:{importingModuleName:r}}).then(function(){var a=i.get(o);return a=a["default"]||a,a.build===!1&&t.pluginLoader&&(e.metadata.build=!1),e.metadata.plugin=a,e.metadata.pluginName=o,e.metadata.pluginArgument=e.name,e.metadata.buildType=a.buildType||"js",a.locate?a.locate.call(t,e):Promise.resolve(t.locate(e)).then(function(e){return e.replace(/\.js$/,"")})})}return a.call(this,e)};var r=e.fetch;e.fetch=function(e){var t=this;return e.metadata.build===!1&&t.pluginLoader?"":e.metadata.plugin&&e.metadata.plugin.fetch&&!e.metadata.pluginFetchCalled?(e.metadata.pluginFetchCalled=!0,e.metadata.plugin.fetch.call(t,e,r)):r.call(t,e)};var n=e.translate;e.translate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.translate?Promise.resolve(e.metadata.plugin.translate.call(t,e)).then(function(a){return"string"==typeof a&&(e.source=a),n.call(t,e)}):n.call(t,e)};var o=e.instantiate;e.instantiate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.instantiate?Promise.resolve(e.metadata.plugin.instantiate.call(t,e)).then(function(a){return a?a:o.call(t,e)}):e.metadata.plugin&&e.metadata.plugin.build===!1?(e.metadata.format="defined",e.metadata.deps.push(e.metadata.pluginName),e.metadata.execute=function(){return t.newModule({})},o.call(t,e)):o.call(t,e)}}function g(e){"undefined"==typeof x&&(x=Array.prototype.indexOf),e._extensions.push(g),e.bundles=e.bundles||{};var t=e.fetch;e.fetch=function(e){var a=this;if(a.trace)return t.call(this,e);a.bundles||(a.bundles={});for(var r in a.bundles)if(-1!=x.call(a.bundles[r],e.name))return Promise.resolve(a.normalize(r)).then(function(e){return a.bundles[e]=a.bundles[e]||a.bundles[r],a.meta=a.meta||{},a.meta[e]=a.meta[e]||{},a.meta[e].bundle=!0,a.load(e)}).then(function(){return""});return t.call(this,e)}}function v(e){e.depCache=e.depCache||{},e._extensions.push(v);var t=e.locate;e.locate=function(e){var a=this;a.depCache||(a.depCache={});var r=a.depCache[e.name];if(r)for(var n=0;n<r.length;n++)a.load(r[n]);return t.call(a,e)}}e.upgradeSystemLoader=void 0;var b,x=Array.prototype.indexOf||function(e){for(var t=0,a=this.length;a>t;t++)if(this[t]===e)return t;return-1},y="undefined"!=typeof process&&!!process.platform.match(/^win/);!function(){var t=e.System;b=e.System=new LoaderPolyfill(t),b.baseURL=t.baseURL,b.paths={"*":"*.js"},b.originalSystem=t}(),b.noConflict=function(){e.SystemJS=b,e.System=b.originalSystem};var _=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(w){_=!1}var S;!function(){try{Object.defineProperty({},"a",{})&&(S=Object.defineProperty)}catch(e){S=function(e,t,a){try{e[t]=a.value||a.get.call(e)}catch(r){}}}}();var F=e.System.originalSystem;l(b),s(b),u(b),d(b),c(b),f(b),p(b),m(b),h(b),g(b),v(b)};var t,a;!function(){function r(e,a){if(!e.originalErr)for(var r=(e.stack||e.message||e).toString().split("\n"),n=[],o=0;o<r.length;o++)("undefined"==typeof t||-1==r[o].indexOf(t.src))&&n.push(r[o]);var i=(n?n.join("\n	"):e.message)+"\n	"+a;l||(i=i.replace(isWindows?/file:\/\/\//g:/file:\/\//g,""));var s=m?new Error(i,e.fileName,e.lineNumber):new Error(i);return l?s.stack=null:s.stack=i,s.originalErr=e.originalErr||e,s}var n,o,i="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,l="undefined"!=typeof window&&"undefined"!=typeof document,s=l&&window.chrome&&window.chrome.extension,u="object"==typeof process&&"[object process]"==={}.toString.call(process);if(n=function(e,t,a){try{new Function(e).call(a)}catch(n){throw r(n,"Evaluating "+t)}},i)e.upgradeSystemLoader();else if(l&&!s){var d,c=document.getElementsByTagName("script");t=c[c.length-1],o=function(e){d||(d=document.head||document.body||document.documentElement);var t=document.createElement("script");t.text=e;var a,r=window.onerror;if(window.onerror=function(e){a=e},d.appendChild(t),d.removeChild(t),window.onerror=r,a)throw a},e.upgradeSystemLoader()}else if(u){var f=require("steal-es6-module-loader");e.System=f.System,e.Loader=f.Loader,e.upgradeSystemLoader(),module.exports=e.System;var p=require("vm");n=function(e){p.runInThisContext(e)}}var m="_"==new Error(0,"_").fileName;a=function(e,t,a,r,i){e+="\n//# sourceURL="+t+(r?"\n//# sourceMappingURL="+r:"");var l="script"===i&&"function"==typeof o;l?o(e):n(e,t,a)}}()}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:global);
//# sourceMappingURL=system.js.map
