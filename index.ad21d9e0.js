function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("3QLV5");var i,a="Expected a function",c=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,v=m||y||Function("return this")(),h=Object.prototype.toString,b=Math.max,g=Math.min,T=function(){return v.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function M(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==s}(e))return c;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=d.test(e);return n||f.test(e)?p(e.slice(2),n?2:8):u.test(e)?c:+e}i=function(e,t,n){var o,r,i,c,s,l,u=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(a);function m(t){var n=o,i=r;return o=r=void 0,u=t,c=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=i}function v(){var e=T();if(y(e))return h(e);s=setTimeout(v,function(e){var n=t-(e-l);return f?g(n,i-(e-u)):n}(e))}function h(e){return s=void 0,p&&o?m(e):(o=r=void 0,c)}function w(){var e=T(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(v,t),d?m(e):c}(l);if(f)return s=setTimeout(v,t),m(l)}return void 0===s&&(s=setTimeout(v,t)),c}return t=M(t)||0,x(n)&&(d=!!n.leading,i=(f="maxWait"in n)?b(M(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=l=r=s=void 0},w.flush=function(){return void 0===s?c:h(T())},w};var w=r("7DkDS"),k=r("2shzp");const L="https://api.themoviedb.org/3/search/movie?api_key=b972cd435eef10c3549386c0239d193f";async function S(e,t){try{return(await k.default.get(L,{params:{query:e,page:t}})).data}catch(e){console.log(e)}}function _(e,t){e.classList.remove("visually-hidden"),t?.classList.add("visually-hidden")}function j(e,t){e.classList.add("visually-hidden"),t?.classList.remove("visually-hidden")}const E={spinner:document.querySelector(".spinner"),iconSearch:document.querySelector(".icon-search"),spinnerGallery:document.querySelector(".js-spinner-gallery")};var C=r("2s6iM");C=r("2s6iM");const D=document.forms[0],H=D[1],O=D[2],q=document.querySelector(".hero__list"),z=document.querySelector(".header_main__form__error");z.style.opacity="0",z.style.transition="opacity 0.5s";let $=1;const N=document.createElement("ul");function A(e){e.style.opacity="0",e.style.transition="opacity 0.5s"}N.setAttribute("class","search-helper"),D.appendChild(N),H.addEventListener("input",e(i)((function(e){if(e.preventDefault(),!H.value.trim())return void A(N);S(H.value.trim(),1).then((e=>{N.innerHTML=e.results.map((({title:e,vote_average:t})=>`<li class="search-helper__item">${e}\n        <span class="search-helper__vote">${String(t).padEnd(2,".").padEnd(3,"0")}</span></li>`)).join(""),N.style.opacity="1",N.style.transition="opacity 0.5s"})).catch((e=>console.log(e)))}),500)),O.addEventListener("click",(async function(e){e.preventDefault();const t=H.value.trim();N.innerHTML="",C.paginationEl.style.display="none",$=1,H.value.trim()||(z.style.opacity="1",setTimeout((()=>A(z)),2e3));await S(t,$).then((e=>{const n=e.total_results;n||(z.style.opacity="1",setTimeout((()=>A(z)),2e3)),n>=1&&(q.innerHTML="",q.insertAdjacentHTML("beforeend",(0,w.createFilmCardMarkap)(e.results)),$+=1,(0,C.makePagination)(e.total_results,e.total_pages).on("afterMove",(({page:e})=>{S(t,e).then((e=>{console.log(e),q.innerHTML="",q.insertAdjacentHTML("beforeend",(0,w.createFilmCardMarkap)(e.results))}))})))})).catch((e=>console.log(e))).finally((()=>{D.reset()}))})),N.addEventListener("click",(function(e){let t=e.target.textContent.slice(0,-4).trim();H.value=t,_(E.spinnerGallery,E.iconSearch),S(H.value.trim().toLowerCase(),$).then((e=>{if(!e.results.length)return z.style.opacity="1",setTimeout((()=>A()),3e3),void setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),400);setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),400),q.innerHTML="",q.insertAdjacentHTML("beforeend",(0,w.createFilmCardMarkap)(e.results))})).catch((e=>console.log(e))),setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),400),A(N),D.reset()}));w=r("7DkDS"),C=r("2s6iM");var F=(k=r("2shzp")).default;const G="7b4917c1c89b56950d6ac1f3ef5382d2",I="https://api.themoviedb.org/3";P(1);const B=document.querySelector(".hero__list");async function P(e=1){try{const t=await W(e);console.log(t),B.insertAdjacentHTML("beforeend",(0,w.createFilmCardMarkap)(t.results)),(0,C.makePagination)(t.total_results,t.total_pages).on("afterMove",(({page:e})=>{W(e).then((e=>{B.innerHTML="",B.insertAdjacentHTML("beforeend",(0,w.createFilmCardMarkap)(e.results))}))}))}catch(e){console.error(e)}}async function W(e){_(E.spinnerGallery,E.iconSearch);try{const t=await F.get(`${I}/trending/movie/day?api_key=${G}&page=${e}`);return e+=1,console.log(t.data),console.log(t.data.results),t.data}catch(e){console.log(`${e}`)}finally{setTimeout((()=>{j(E.spinnerGallery,E.iconSearch)}),300)}}P().then();r("7DkDS"),r("5yuvo");var R,U,J={};function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}R="undefined"!=typeof self?self:void 0,U=function(e){e.addBackToTop=function(){var e,t,n,o,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r.backgroundColor,a=void 0===i?"#000":i,c=r.cornerOffset,s=void 0===c?20:c,l=r.diameter,u=void 0===l?56:l,d=r.ease,f=void 0===d?function(e){return.5*(1-Math.cos(Math.PI*e))}:d,p=r.id,m=void 0===p?"back-to-top":p,y=r.innerHTML,v=void 0===y?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':y,h=r.onClickScrollTo,b=void 0===h?0:h,g=r.scrollContainer,T=void 0===g?document.body:g,x=r.scrollDuration,M=void 0===x?100:x,w=r.showWhenScrollTopIs,k=void 0===w?1:w,L=r.size,S=void 0===L?u:L,_=r.textColor,j=void 0===_?"#fff":_,E=r.zIndex,C=void 0===E?1:E,D=T===document.body,H=D&&document.documentElement;e=Math.round(.43*S),t=Math.round(.29*S),n="#"+m+"{background:"+a+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+s+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+j+";cursor:pointer;display:block;height:"+S+"px;opacity:1;outline:0;position:fixed;right:"+s+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+S+"px;z-index:"+C+"}#"+m+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+t+"px auto 0;width:"+e+"px}#"+m+".hidden{bottom:-"+S+"px;opacity:0}",(o=document.createElement("style")).appendChild(document.createTextNode(n)),document.head.insertAdjacentElement("afterbegin",o);var O=function(){var e=document.createElement("div");return e.id=m,e.className="hidden",e.innerHTML=v,e.addEventListener("click",(function(e){e.preventDefault(),function(){var e="function"==typeof b?b():b,t=window,n=t.performance,o=t.requestAnimationFrame;if(M<=0||void 0===n||void 0===o)return N(e);var r=n.now(),i=$(),a=i-e;function c(e){var t=Math.min((e-r)/M,1);N(i-Math.round(f(t)*a)),t<1&&o(c)}o(c)}()})),document.body.appendChild(e),e}(),q=!0;function z(){$()>=k?q&&(O.className="",q=!1):q||(O.className="hidden",q=!0)}function $(){return T.scrollTop||H&&document.documentElement.scrollTop||0}function N(e){T.scrollTop=e,H&&(document.documentElement.scrollTop=e)}(D?window:T).addEventListener("scroll",z),z()}},"function"==typeof define&&define.amd?define(["exports"],U):"object"===Q(J)&&"string"!=typeof J.nodeName?U(J):U(R.commonJsStrict={}),(0,J.addBackToTop)({diameter:40,backgroundColor:"#ddd",textColor:"#ff6b08"});
//# sourceMappingURL=index.ad21d9e0.js.map
