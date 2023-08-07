import{d3 as ne,g as ae}from"./index-57d81519.js";var te=String.prototype.replace,ie=/%20/g,$={RFC1738:"RFC1738",RFC3986:"RFC3986"},I={default:$.RFC3986,formatters:{RFC1738:function(a){return te.call(a,ie,"+")},RFC3986:function(a){return String(a)}},RFC1738:$.RFC1738,RFC3986:$.RFC3986},fe=I,L=Object.prototype.hasOwnProperty,w=Array.isArray,b=function(){for(var a=[],e=0;e<256;++e)a.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return a}(),le=function(e){for(;e.length>1;){var r=e.pop(),n=r.obj[r.prop];if(w(n)){for(var i=[],u=0;u<n.length;++u)typeof n[u]<"u"&&i.push(n[u]);r.obj[r.prop]=i}}},X=function(e,r){for(var n=r&&r.plainObjects?Object.create(null):{},i=0;i<e.length;++i)typeof e[i]<"u"&&(n[i]=e[i]);return n},oe=function a(e,r,n){if(!r)return e;if(typeof r!="object"){if(w(e))e.push(r);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!L.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var i=e;return w(e)&&!w(r)&&(i=X(e,n)),w(e)&&w(r)?(r.forEach(function(u,f){if(L.call(e,f)){var o=e[f];o&&typeof o=="object"&&u&&typeof u=="object"?e[f]=a(o,u,n):e.push(u)}else e[f]=u}),e):Object.keys(r).reduce(function(u,f){var o=r[f];return L.call(u,f)?u[f]=a(u[f],o,n):u[f]=o,u},i)},ue=function(e,r){return Object.keys(r).reduce(function(n,i){return n[i]=r[i],n},e)},ce=function(a,e,r){var n=a.replace(/\+/g," ");if(r==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},se=function(e,r,n,i,u){if(e.length===0)return e;var f=e;if(typeof e=="symbol"?f=Symbol.prototype.toString.call(e):typeof e!="string"&&(f=String(e)),n==="iso-8859-1")return escape(f).replace(/%u[0-9a-f]{4}/gi,function(s){return"%26%23"+parseInt(s.slice(2),16)+"%3B"});for(var o="",l=0;l<f.length;++l){var t=f.charCodeAt(l);if(t===45||t===46||t===95||t===126||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122||u===fe.RFC1738&&(t===40||t===41)){o+=f.charAt(l);continue}if(t<128){o=o+b[t];continue}if(t<2048){o=o+(b[192|t>>6]+b[128|t&63]);continue}if(t<55296||t>=57344){o=o+(b[224|t>>12]+b[128|t>>6&63]+b[128|t&63]);continue}l+=1,t=65536+((t&1023)<<10|f.charCodeAt(l)&1023),o+=b[240|t>>18]+b[128|t>>12&63]+b[128|t>>6&63]+b[128|t&63]}return o},de=function(e){for(var r=[{obj:{o:e},prop:"o"}],n=[],i=0;i<r.length;++i)for(var u=r[i],f=u.obj[u.prop],o=Object.keys(f),l=0;l<o.length;++l){var t=o[l],s=f[t];typeof s=="object"&&s!==null&&n.indexOf(s)===-1&&(r.push({obj:f,prop:t}),n.push(s))}return le(r),e},ye=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},ve=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},pe=function(e,r){return[].concat(e,r)},me=function(e,r){if(w(e)){for(var n=[],i=0;i<e.length;i+=1)n.push(r(e[i]));return n}return r(e)},Y={arrayToObject:X,assign:ue,combine:pe,compact:de,decode:ce,encode:se,isBuffer:ve,isRegExp:ye,maybeMap:me,merge:oe},Z=ne,z=Y,F=I,he=Object.prototype.hasOwnProperty,G={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},g=Array.isArray,be=String.prototype.split,ge=Array.prototype.push,J=function(a,e){ge.apply(a,g(e)?e:[e])},xe=Date.prototype.toISOString,W=F.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:z.encode,encodeValuesOnly:!1,format:W,formatter:F.formatters[W],indices:!1,serializeDate:function(e){return xe.call(e)},skipNulls:!1,strictNullHandling:!1},Oe=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},H={},we=function a(e,r,n,i,u,f,o,l,t,s,m,h,v,d,x,D){for(var c=e,N=D,E=0,M=!1;(N=N.get(H))!==void 0&&!M;){var V=N.get(e);if(E+=1,typeof V<"u"){if(V===E)throw new RangeError("Cyclic object value");M=!0}typeof N.get(H)>"u"&&(E=0)}if(typeof l=="function"?c=l(r,c):c instanceof Date?c=m(c):n==="comma"&&g(c)&&(c=z.maybeMap(c,function(Q){return Q instanceof Date?m(Q):Q})),c===null){if(u)return o&&!d?o(r,p.encoder,x,"key",h):r;c=""}if(Oe(c)||z.isBuffer(c)){if(o){var _=d?r:o(r,p.encoder,x,"key",h);if(n==="comma"&&d){for(var P=be.call(String(c),","),U="",C=0;C<P.length;++C)U+=(C===0?"":",")+v(o(P[C],p.encoder,x,"value",h));return[v(_)+(i&&g(c)&&P.length===1?"[]":"")+"="+U]}return[v(_)+"="+v(o(c,p.encoder,x,"value",h))]}return[v(r)+"="+v(String(c))]}var T=[];if(typeof c>"u")return T;var j;if(n==="comma"&&g(c))j=[{value:c.length>0?c.join(",")||null:void 0}];else if(g(l))j=l;else{var k=Object.keys(c);j=t?k.sort(t):k}for(var A=i&&g(c)&&c.length===1?r+"[]":r,R=0;R<j.length;++R){var O=j[R],K=typeof O=="object"&&typeof O.value<"u"?O.value:c[O];if(!(f&&K===null)){var re=g(c)?typeof n=="function"?n(A,O):A:A+(s?"."+O:"["+O+"]");D.set(e,E);var q=Z();q.set(H,D),J(T,a(K,re,n,i,u,f,o,l,t,s,m,h,v,d,x,q))}}return T},Se=function(e){if(!e)return p;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||p.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=F.default;if(typeof e.format<"u"){if(!he.call(F.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var i=F.formatters[n],u=p.filter;return(typeof e.filter=="function"||g(e.filter))&&(u=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:p.addQueryPrefix,allowDots:typeof e.allowDots>"u"?p.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:p.charsetSentinel,delimiter:typeof e.delimiter>"u"?p.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:p.encode,encoder:typeof e.encoder=="function"?e.encoder:p.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:p.encodeValuesOnly,filter:u,format:n,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:p.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:p.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:p.strictNullHandling}},je=function(a,e){var r=a,n=Se(e),i,u;typeof n.filter=="function"?(u=n.filter,r=u("",r)):g(n.filter)&&(u=n.filter,i=u);var f=[];if(typeof r!="object"||r===null)return"";var o;e&&e.arrayFormat in G?o=e.arrayFormat:e&&"indices"in e?o=e.indices?"indices":"repeat":o="indices";var l=G[o];if(e&&"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var t=l==="comma"&&e&&e.commaRoundTrip;i||(i=Object.keys(r)),n.sort&&i.sort(n.sort);for(var s=Z(),m=0;m<i.length;++m){var h=i[m];n.skipNulls&&r[h]===null||J(f,we(r[h],h,l,t,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,s))}var v=f.join(n.delimiter),d=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),v.length>0?d+v:""},S=Y,B=Object.prototype.hasOwnProperty,Fe=Array.isArray,y={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:S.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Ne=function(a){return a.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},ee=function(a,e){return a&&typeof a=="string"&&e.comma&&a.indexOf(",")>-1?a.split(","):a},Ee="utf8=%26%2310003%3B",Ce="utf8=%E2%9C%93",De=function(e,r){var n={},i=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=r.parameterLimit===1/0?void 0:r.parameterLimit,f=i.split(r.delimiter,u),o=-1,l,t=r.charset;if(r.charsetSentinel)for(l=0;l<f.length;++l)f[l].indexOf("utf8=")===0&&(f[l]===Ce?t="utf-8":f[l]===Ee&&(t="iso-8859-1"),o=l,l=f.length);for(l=0;l<f.length;++l)if(l!==o){var s=f[l],m=s.indexOf("]="),h=m===-1?s.indexOf("="):m+1,v,d;h===-1?(v=r.decoder(s,y.decoder,t,"key"),d=r.strictNullHandling?null:""):(v=r.decoder(s.slice(0,h),y.decoder,t,"key"),d=S.maybeMap(ee(s.slice(h+1),r),function(x){return r.decoder(x,y.decoder,t,"value")})),d&&r.interpretNumericEntities&&t==="iso-8859-1"&&(d=Ne(d)),s.indexOf("[]=")>-1&&(d=Fe(d)?[d]:d),B.call(n,v)?n[v]=S.combine(n[v],d):n[v]=d}return n},Pe=function(a,e,r,n){for(var i=n?e:ee(e,r),u=a.length-1;u>=0;--u){var f,o=a[u];if(o==="[]"&&r.parseArrays)f=[].concat(i);else{f=r.plainObjects?Object.create(null):{};var l=o.charAt(0)==="["&&o.charAt(o.length-1)==="]"?o.slice(1,-1):o,t=parseInt(l,10);!r.parseArrays&&l===""?f={0:i}:!isNaN(t)&&o!==l&&String(t)===l&&t>=0&&r.parseArrays&&t<=r.arrayLimit?(f=[],f[t]=i):l!=="__proto__"&&(f[l]=i)}i=f}return i},Te=function(e,r,n,i){if(e){var u=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,f=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,l=n.depth>0&&f.exec(u),t=l?u.slice(0,l.index):u,s=[];if(t){if(!n.plainObjects&&B.call(Object.prototype,t)&&!n.allowPrototypes)return;s.push(t)}for(var m=0;n.depth>0&&(l=o.exec(u))!==null&&m<n.depth;){if(m+=1,!n.plainObjects&&B.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;s.push(l[1])}return l&&s.push("["+u.slice(l.index)+"]"),Pe(s,r,n,i)}},Ae=function(e){if(!e)return y;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?y.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?y.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:y.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:y.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:y.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:y.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:y.comma,decoder:typeof e.decoder=="function"?e.decoder:y.decoder,delimiter:typeof e.delimiter=="string"||S.isRegExp(e.delimiter)?e.delimiter:y.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:y.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:y.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:y.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:y.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:y.strictNullHandling}},Re=function(a,e){var r=Ae(e);if(a===""||a===null||typeof a>"u")return r.plainObjects?Object.create(null):{};for(var n=typeof a=="string"?De(a,r):a,i=r.plainObjects?Object.create(null):{},u=Object.keys(n),f=0;f<u.length;++f){var o=u[f],l=Te(o,n[o],r,typeof a=="string");i=S.merge(i,l,r)}return r.allowSparse===!0?i:S.compact(i)},Qe=je,$e=Re,Le=I,He={formats:Le,parse:$e,stringify:Qe};const Be=ae(He);export{Be as q};
