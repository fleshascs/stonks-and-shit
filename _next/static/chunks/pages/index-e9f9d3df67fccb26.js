(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8022)}])},3344:function(e,t,n){"use strict";var r=n(5893),o=n(6010);t.Z=function(e){var t=e.children,n=e.className,a=e.innerPadding,u=void 0===a||a;return(0,r.jsx)("div",{className:(0,o.Z)(n,{"p-2 sm:p-6":u},"w-full text-md mb-4 rounded-lg bg-white shadow-md"),children:t})}},8022:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),o=n(239),a=n(3344),u=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{children:"Sidebar"}),(0,r.jsx)(o.Z.Google,{client:"ca-pub-3219722052726085",slot:"4021017786",style:{display:"block"},format:"auto",responsive:"true",layoutKey:"-gw-1+2a-9x+5c"}),t]})},i=n(1799);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=n(7294),s=n(1337),p=function(){return(0,r.jsxs)("svg",{role:"status",className:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})},d=n(8767);var y=f.forwardRef((function(e,t){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))})),h=function(e){return function(t){var n=t.signal;return fetch("/stonks-and-shit/stocks.json?q="+e,{signal:n}).then((function(e){return e.json()}))}},b=function(e){var t=undefined,n=(0,f.useState)(""),o=n[0],u=n[1],c=(0,d.useQuery)("stocks-query"+o,(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return h(o).apply(t,l(n))}),{enabled:!!o}),b=c.isLoading,v=c.error,w=c.data;return(0,s.Z)((function(){return u(e.value)}),500,[e.value]),(0,r.jsxs)("div",{className:"flex flex-col w-full",children:[(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"flex flex-row items-center lg:space-x-4",children:[(0,r.jsx)("input",(0,i.Z)({type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding text-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"},e)),(0,r.jsx)(y,{className:"h-7 w-7 inline"}),b?(0,r.jsx)(p,{}):null]})}),(0,r.jsx)("div",{children:b||v?null:JSON.stringify(w)})]})};function v(){var e=(0,f.useState)(""),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"justify-center flex pt-16",children:(0,r.jsx)(b,{placeholder:"Search for a stock",onChange:function(e){return n(e.target.value)},value:t})}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row lg:space-x-4 pb-24",children:[(0,r.jsx)("div",{className:"basis-2/3",children:(0,r.jsx)(a.Z,{children:"some content"})}),(0,r.jsx)("div",{className:"basis-1/3 pt-10 lg:pt-0",children:(0,r.jsx)(u,{})})]})]})}},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7294),u=(r=a)&&r.__esModule?r:{default:r};function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),t}(u.default.Component);t.default=l},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(7294)),a=u(n(5697));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return o.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),t}(o.default.Component);t.default=l,l.propTypes={className:a.default.string,style:a.default.object,client:a.default.string.isRequired,slot:a.default.string.isRequired,layout:a.default.string,layoutKey:a.default.string,format:a.default.string,responsive:a.default.string},l.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},239:function(e,t,n){"use strict";var r=a(n(232)),o=a(n(8802));function a(e){return e&&e.__esModule?e:{default:e}}var u={Google:r.default,Baidu:o.default};t.Z=u},1337:function(e,t,n){"use strict";var r=n(5272),o=n(7294),a=r.__importDefault(n(2370));t.Z=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var r=a.default(e,t),u=r[0],i=r[1],c=r[2];return o.useEffect(c,n),[u,i]}},2370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7294);t.default=function(e,t){void 0===t&&(t=0);var n=r.useRef(!1),o=r.useRef(),a=r.useRef(e),u=r.useCallback((function(){return n.current}),[]),i=r.useCallback((function(){n.current=!1,o.current&&clearTimeout(o.current),o.current=setTimeout((function(){n.current=!0,a.current()}),t)}),[t]),c=r.useCallback((function(){n.current=null,o.current&&clearTimeout(o.current)}),[]);return r.useEffect((function(){a.current=e}),[e]),r.useEffect((function(){return i(),c}),[t]),[u,c,i]}},5272:function(e,t,n){"use strict";n.r(t),n.d(t,{__assign:function(){return a},__asyncDelegator:function(){return g},__asyncGenerator:function(){return _},__asyncValues:function(){return j},__await:function(){return m},__awaiter:function(){return f},__classPrivateFieldGet:function(){return S},__classPrivateFieldIn:function(){return k},__classPrivateFieldSet:function(){return E},__createBinding:function(){return p},__decorate:function(){return i},__exportStar:function(){return d},__extends:function(){return o},__generator:function(){return s},__importDefault:function(){return C},__importStar:function(){return P},__makeTemplateObject:function(){return O},__metadata:function(){return l},__param:function(){return c},__read:function(){return h},__rest:function(){return u},__spread:function(){return b},__spreadArray:function(){return w},__spreadArrays:function(){return v},__values:function(){return y}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function i(e,t,n,r){var o,a=arguments.length,u=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(a<3?o(u):a>3?o(t,n,u):o(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(o,a){function u(e){try{c(r.next(e))}catch(t){a(t)}}function i(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var p=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function d(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||p(t,e,n)}function y(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)u.push(r.value)}catch(i){o={error:i}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return u}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],u=0,i=a.length;u<i;u++,o++)r[o]=a[u];return r}function w(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function _(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(c,l):f(a[0][2],n)}catch(r){f(a[0][3],r)}var n}function c(e){i("next",e)}function l(e){i("throw",e)}function f(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function j(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var x=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&p(t,e,n);return x(t,e),t}function C(e){return e&&e.__esModule?e:{default:e}}function S(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function E(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function k(e,t){if(null===t||"object"!==typeof t&&"function"!==typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"===typeof e?t===e:e.has(t)}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);