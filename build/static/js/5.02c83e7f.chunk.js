webpackJsonp([5],{632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(744),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},744:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var a=t[o](u),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(38),c=r(s),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(0),d=n(6),l=n(1),h=r(l),y=n(37),b=n(113),v=n(112),_=r(v),m=function(e){function t(){var e,n,r,i,s=this;u(this,t);for(var f=arguments.length,p=Array(f),d=0;d<f;d++)p[d]=arguments[d];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),r.componentDidMount=o(c.default.mark(function e(){var t,n,o,u,a;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,n=t.isUserAuthenticated,o=t.match.params,o=void 0===o?{}:o,u=o.userId,a=o.token,e.next=5,r.props.sendVerificationToken({userId:u,token:a});case 5:return e.next=7,r.props.updateUserStatus();case 7:n?r.props.history.push(_.default.dashboard.dashboard):r.props.history.push(_.default.account.signIn);case 8:case"end":return e.stop()}},e,s)})),i=n,a(r,i)}return i(t,e),f(t,[{key:"render",value:function(){return!1}}]),t}(p.PureComponent);m.propTypes={isUserAuthenticated:h.default.bool,history:h.default.object,match:h.default.shape({params:h.default.shape({userId:h.default.string,token:h.default.string})}),sendVerificationToken:h.default.func.isRequired,updateUserStatus:h.default.func.isRequired},m.defaultProps={isUserAuthenticated:!1,history:{},match:{}};var w=function(e){return{isUserAuthenticated:(0,b.isUserAuthenticated)(e)}},k={sendVerificationToken:y.sendVerificationToken,updateUserStatus:y.updateUserStatus};t.default=(0,d.connect)(w,k)(m)}});
//# sourceMappingURL=5.02c83e7f.chunk.js.map