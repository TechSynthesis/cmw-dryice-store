import{W as v,X as h,V as w,U as p}from"./index-c507dc5b.js";import{l as I,g as z,u as A,i as S,C as P,a as E,b as y,c as L,m as M,e as k,p as R,P as F,f as B,h as Q,j as W,k as U}from"./a-0746c28a.js";import{i as V}from"./is-plan-event-enabled-a83d33b8.js";import"./layout-f1585c6f.js";import"./index-41453311.js";import"./index-b1992c76.js";import"./index-8fae0651.js";import"./index-9565e0c6.js";import"./index-598e690d.js";function C(i){return i.toLowerCase().replace(".","").replace(/\s+/g,"-")}function j(i,t){return t===void 0&&(t=!1),t?btoa(i).replace(/=/g,""):void 0}function G(i){return("Integration"in i?i.Integration:i).prototype.name}function T(i,t,r){var n,a;try{var e=((a=(n=window==null?void 0:window.performance)===null||n===void 0?void 0:n.getEntriesByName(i,"resource"))!==null&&a!==void 0?a:[])[0];e&&t.stats.gauge("legacy_destination_time",Math.round(e.duration),w([r],e.duration<100?["cached"]:[],!0))}catch{}}function X(i,t,r){var n;if("Integration"in i){var a={user:function(){return r.user()},addIntegration:function(){}};i(a),n=i.Integration}else n=i;var e=new n(t);return e.analytics=r,e}function H(i,t,r,n){return v(this,void 0,void 0,function(){var a,e,o,u,s,l;return h(this,function(c){switch(c.label){case 0:a=C(t),e=j(a,n),o=z(),u="".concat(o,"/integrations/").concat(e??a,"/").concat(r,"/").concat(e??a,".dynamic.js.gz"),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,I(u)];case 2:return c.sent(),T(u,i,t),[3,4];case 3:throw s=c.sent(),i.stats.gauge("legacy_destination_time",-1,["plugin:".concat(t),"failed"]),s;case 4:return l=window["".concat(a,"Deps")],[4,Promise.all(l.map(function(g){return I(o+g+".gz")}))];case 5:return c.sent(),window["".concat(a,"Loader")](),[2,window["".concat(a,"Integration")]]}})})}function J(i,t,r){return v(this,void 0,void 0,function(){var n,a,e,o;return h(this,function(u){return n=z(),a=C(i),e=j(i,r),o="".concat(n,"/integrations/").concat(e??a,"/").concat(t,"/").concat(e??a,".dynamic.js.gz"),[2,A(o)]})})}function K(i){var t,r,n,a;return(a=(r=(t=i==null?void 0:i.versionSettings)===null||t===void 0?void 0:t.override)!==null&&r!==void 0?r:(n=i==null?void 0:i.versionSettings)===null||n===void 0?void 0:n.version)!==null&&a!==void 0?a:"latest"}var Y=function(i,t){var r,n=t.type,a=t.bundlingStatus,e=t.versionSettings,o=a!=="unbundled"&&(n==="browser"||((r=e==null?void 0:e.componentTypes)===null||r===void 0?void 0:r.includes("browser")));return!i.startsWith("Segment")&&i!=="Iterable"&&o},Z=function(i,t){var r=t.All===!1&&t[i]===void 0;return t[i]===!1||r};function $(i,t){return v(this,void 0,void 0,function(){var r,n=this;return h(this,function(a){switch(a.label){case 0:return r=[],S()?[2,t]:[4,R(function(){return t.length>0&&W()},function(){return v(n,void 0,void 0,function(){var e,o,u;return h(this,function(s){switch(s.label){case 0:return e=t.pop(),e?[4,Q(e,i)]:[2];case 1:return o=s.sent(),u=o instanceof U,u||r.push(e),[2]}})})})];case 1:return a.sent(),r.map(function(e){return t.pushWithBackoff(e)}),[2,t]}})})}var q=function(){function i(t,r,n,a,e,o){a===void 0&&(a={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=r,this.settings=p({},a),this.disableAutoISOConversion=e.disableAutoISOConversion||!1,this.integrationSource=o,this.settings.type&&this.settings.type==="browser"&&delete this.settings.type,this.options=e,this.buffer=e.disableClientPersistence?new F(4,[]):new B(4,"".concat(n,":dest-").concat(t)),this.scheduleFlush()}return i.prototype.isLoaded=function(){return this._ready},i.prototype.ready=function(){var t;return(t=this.onReady)!==null&&t!==void 0?t:Promise.resolve()},i.prototype.load=function(t,r){var n;return v(this,void 0,void 0,function(){var a,e,o=this;return h(this,function(u){switch(u.label){case 0:return this._ready||this.onReady!==void 0?[2]:(n=this.integrationSource)!==null&&n!==void 0?(e=n,[3,3]):[3,1];case 1:return[4,H(t,this.name,this.version,this.options.obfuscate)];case 2:e=u.sent(),u.label=3;case 3:a=e,this.integration=X(a,this.settings,r),this.onReady=new Promise(function(s){var l=function(){o._ready=!0,s(!0)};o.integration.once("ready",l)}),this.onInitialize=new Promise(function(s){var l=function(){o._initialized=!0,s(!0)};o.integration.on("initialize",l)});try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(s){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),s}return[2]}})})},i.prototype.unload=function(t,r){return J(this.name,this.version,this.options.obfuscate)},i.prototype.addMiddleware=function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];this.middleware=(t=this.middleware).concat.apply(t,r)},i.prototype.shouldBuffer=function(t){return t.event.type!=="page"&&(S()||this._ready===!1||this._initialized===!1)},i.prototype.send=function(t,r,n){var a,e;return v(this,void 0,void 0,function(){var o,u,s,l,c,g;return h(this,function(f){switch(f.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(o=(e=(a=this.options)===null||a===void 0?void 0:a.plan)===null||e===void 0?void 0:e.track,u=t.event.event,o&&u&&this.name!=="Segment.io"){if(s=o[u],V(o,s))t.updateEvent("integrations",p(p({},t.event.integrations),s==null?void 0:s.integrations));else return t.updateEvent("integrations",p(p({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new P({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(s!=null&&s.enabled&&(s==null?void 0:s.integrations[this.name])===!1)return t.cancel(new P({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,E(this.name,t.event,this.middleware)];case 1:if(l=f.sent(),l===null)return[2,t];c=new r(l,{traverse:!this.disableAutoISOConversion}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(n),"integration_name:".concat(this.name)]),f.label=2;case 2:return f.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,n,c)]:[3,4];case 3:f.sent(),f.label=4;case 4:return[3,6];case 5:throw g=f.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(n),"integration_name:".concat(this.name)]),g;case 6:return[2,t]}})})},i.prototype.track=function(t){return v(this,void 0,void 0,function(){return h(this,function(r){return[2,this.send(t,y.Track,"track")]})})},i.prototype.page=function(t){var r;return v(this,void 0,void 0,function(){var n=this;return h(this,function(a){return!((r=this.integration)===null||r===void 0)&&r._assumesPageview&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then(function(){return n.send(t,y.Page,"page")})]})})},i.prototype.identify=function(t){return v(this,void 0,void 0,function(){return h(this,function(r){return[2,this.send(t,y.Identify,"identify")]})})},i.prototype.alias=function(t){return v(this,void 0,void 0,function(){return h(this,function(r){return[2,this.send(t,y.Alias,"alias")]})})},i.prototype.group=function(t){return v(this,void 0,void 0,function(){return h(this,function(r){return[2,this.send(t,y.Group,"group")]})})},i.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout(function(){return v(t,void 0,void 0,function(){var r;return h(this,function(n){switch(n.label){case 0:return this.flushing=!0,r=this,[4,$(this,this.buffer)];case 1:return r.buffer=n.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}})})},Math.random()*5e3)},i}();function ut(i,t,r,n,a,e){var o,u;if(r===void 0&&(r={}),n===void 0&&(n={}),L())return[];t.plan&&(n=n??{},n.plan=t.plan);var s=(u=(o=t.middlewareSettings)===null||o===void 0?void 0:o.routingRules)!==null&&u!==void 0?u:[],l=t.integrations,c=n.integrations,g=M(t,n??{}),f=e==null?void 0:e.reduce(function(d,b){var m;return p(p({},d),(m={},m[G(b)]=b,m))},{}),D=new Set(w(w([],Object.keys(l).filter(function(d){return Y(d,l[d])}),!0),Object.keys(f||{}).filter(function(d){return k(l[d])||k(c==null?void 0:c[d])}),!0));return Array.from(D).filter(function(d){return!Z(d,r)}).map(function(d){var b=l[d],m=K(b),_=new q(d,m,i,g[d],n,f==null?void 0:f[d]),N=s.filter(function(O){return O.destinationName===d});return N.length>0&&a&&_.addMiddleware(a),_})}export{q as LegacyDestination,ut as ajsDestinations};