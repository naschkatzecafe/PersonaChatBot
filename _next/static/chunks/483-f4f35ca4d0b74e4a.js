(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s}});let o="refresh",l="navigate",u="restore",a="server-patch",i="prefetch",c="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),o=r._(n(7294)),l=n(4450),u=n(2227),a=n(4364),i=n(109),c=n(3607),s=n(1823),f=n(9031),d=n(920),p=n(30),m=n(7192),h=n(7498),v=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(v.has(l))return;v.add(l)}let a=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(a).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,l,a,i,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(isModifiedEvent(e)||!s&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:a,locale:c,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};s?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:a,children:v,prefetch:g=null,passHref:y,replace:b,shallow:_,scroll:x,locale:C,onClick:j,onMouseEnter:O,onTouchStart:E,legacyBehavior:k=!1,...S}=e;n=v,k&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let M=o.default.useContext(s.RouterContext),R=o.default.useContext(f.AppRouterContext),I=null!=M?M:R,N=!M,P=!1!==g,T=null===g?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:B,as:A}=o.default.useMemo(()=>{if(!M){let e=formatStringOrUrl(u);return{href:e,as:a?formatStringOrUrl(a):e}}let[e,t]=(0,l.resolveHref)(M,u,!0);return{href:e,as:a?(0,l.resolveHref)(M,a):t||e}},[M,u,a]),L=o.default.useRef(B),w=o.default.useRef(A);k&&(r=o.default.Children.only(n));let U=k?r&&"object"==typeof r&&r.ref:t,[H,q,D]=(0,d.useIntersection)({rootMargin:"200px"}),F=o.default.useCallback(e=>{(w.current!==A||L.current!==B)&&(D(),w.current=A,L.current=B),H(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[A,U,B,D,H]);o.default.useEffect(()=>{I&&q&&P&&prefetch(I,B,A,{locale:C},{kind:T},N)},[A,B,q,C,P,null==M?void 0:M.locale,I,N,T]);let K={ref:F,onClick(e){k||"function"!=typeof j||j(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&linkClicked(e,I,B,A,b,_,x,C,N,P)},onMouseEnter(e){k||"function"!=typeof O||O(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(P||!N)&&prefetch(I,B,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:T},N)},onTouchStart(e){k||"function"!=typeof E||E(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(P||!N)&&prefetch(I,B,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:T},N)}};if((0,i.isAbsoluteUrl)(A))K.href=A;else if(!k||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(A,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);K.href=t||(0,m.addBasePath)((0,c.addLocale)(A,e,null==M?void 0:M.defaultLocale))}return k?o.default.cloneElement(r,K):o.default.createElement("a",{...S,...K},n)}),y=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(3436),l="function"==typeof IntersectionObserver,u=new Map,a=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}function observe(e,t,n){let{id:r,observer:o,elements:l}=createObserver(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:u}=e,a=u||!l,[i,c]=(0,r.useState)(!1),s=(0,r.useRef)(null),f=(0,r.useCallback)(e=>{s.current=e},[]);(0,r.useEffect)(()=>{if(l){if(a||i)return;let e=s.current;if(e&&e.tagName){let r=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,i,s.current]);let d=(0,r.useCallback)(()=>{c(!1)},[]);return[f,i,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(5170)},9222:function(e,t,n){"use strict";n.d(t,{z:function(){return m}});var r=n(7294);function useButtonType(e){let[t,n]=(0,r.useState)(!e),o=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:o,type:t?"button":void 0}}var[o,l]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),u=n(296),a=n(5432),i=n(5893);function ButtonIcon(e){let{children:t,className:n,...o}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,a.cx)("chakra-button__icon",n);return(0,i.jsx)(u.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:c,children:l})}ButtonIcon.displayName="ButtonIcon";var c=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:o="0.5rem",children:l=(0,i.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:f,...d}=e,p=(0,a.cx)("chakra-button__spinner",s),m="start"===n?"marginEnd":"marginStart",h=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?o:0,fontSize:"1em",lineHeight:"normal",...f}),[f,t,m,o]);return(0,i.jsx)(u.m.div,{className:p,...d,__css:h,children:l})}ButtonSpinner.displayName="ButtonSpinner";var s=n(1103),f=n(5059),d=n(4662),p=n(3179),m=(0,f.G)((e,t)=>{let n=l(),o=(0,d.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:f,isActive:m,children:h,leftIcon:v,rightIcon:g,loadingText:y,iconSpacing:b="0.5rem",type:_,spinner:x,spinnerPlacement:C="start",className:j,as:O,...E}=(0,p.Lr)(e),k=(0,r.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}},[o,n]),{ref:S,type:M}=useButtonType(O),R={rightIcon:g,leftIcon:v,iconSpacing:b,children:h};return(0,i.jsxs)(u.m.button,{ref:(0,s.qq)(t,S),as:O,type:null!=_?_:M,"data-active":(0,a.PB)(m),"data-loading":(0,a.PB)(f),__css:k,className:(0,a.cx)("chakra-button",j),...E,disabled:c||f,children:[f&&"start"===C&&(0,i.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:b,children:x}),f?y||(0,i.jsx)(u.m.span,{opacity:0,children:(0,i.jsx)(ButtonContent,{...R})}):(0,i.jsx)(ButtonContent,{...R}),f&&"end"===C&&(0,i.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:b,children:x})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)(ButtonIcon,{marginEnd:o,children:t}),r,n&&(0,i.jsx)(ButtonIcon,{marginStart:o,children:n})]})}m.displayName="Button"},4418:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(5059),o=n(4662),l=n(3179),u=n(296),a=n(5432),i=n(5893),c=(0,r.G)(function(e,t){let n=(0,o.mq)("Heading",e),{className:r,...c}=(0,l.Lr)(e);return(0,i.jsx)(u.m.h2,{ref:t,className:(0,a.cx)("chakra-heading",e.className),...c,__css:n})});c.displayName="Heading"},204:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var r=n(5059),o=n(296),l=n(5893),u=(0,r.G)(function(e,t){let{direction:n,align:r,justify:u,wrap:a,basis:i,grow:c,shrink:s,...f}=e;return(0,l.jsx)(o.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:u,flexWrap:a,flexBasis:i,flexGrow:c,flexShrink:s},...f})});u.displayName="Flex"},1103:function(e,t,n){"use strict";n.d(t,{lq:function(){return mergeRefs},qq:function(){return useMergeRefs}});var r=n(7294);function assignRef(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function mergeRefs(...e){return t=>{e.forEach(e=>{assignRef(e,t)})}}function useMergeRefs(...e){return(0,r.useMemo)(()=>mergeRefs(...e),e)}}}]);