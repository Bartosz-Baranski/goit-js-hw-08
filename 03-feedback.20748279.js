!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(w,t),s?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=p();if(j(e))return h(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&o?b(e):(o=r=void 0,u)}function T(){var e=p(),n=j(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(w,t),b(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:h(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form"),j=document.querySelector('input[name="email"]'),w=document.querySelector('textarea[name="message"]');window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));j.value=e.email,w.value=e.message})),O.addEventListener("input",e(t)((function(e){e.preventDefault();var t=O.elements,n=t.email,o=t.message,i={email:n.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500)),O.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("feedback-form-state")),n=t.email,o=t.message,i={email:n,message:o};t.email="",t.message="",console.log("local data:",t),console.log("submitted data:",i),console.log("\n    email: ".concat(n,"\n    message: ").concat(o,"\n    ")),localStorage.setItem("feedback-form-state",JSON.stringify(t)),O.reset()}))}();
//# sourceMappingURL=03-feedback.20748279.js.map
