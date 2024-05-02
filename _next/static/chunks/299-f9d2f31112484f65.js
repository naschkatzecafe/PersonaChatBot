"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{84377:function(e,r,t){t.d(r,{C:function(){return f}});var a=t(67294),o=t(93967),l=t.n(o),n=t(48291),i=t(86679),c=t(78219);let s={size:{type:"enum",values:["1","2"],default:"1",responsive:!0},variant:{type:"enum",values:["solid","soft","surface","outline"],default:"soft"},color:{...n.m,default:void 0},highContrast:i.B,radius:c.C};var d=t(23843),u=t(6776);let f=a.forwardRef((e,r)=>{let{rest:t,...o}=(0,d.FY)(e),{className:n,size:i=s.size.default,variant:c=s.variant.default,color:f=s.color.default,highContrast:h=s.highContrast.default,radius:v=s.radius.default,...p}=t;return a.createElement("span",{"data-accent-color":f,"data-radius":v,...p,ref:r,className:l()("rt-Badge",n,(0,u.g)(i,"rt-r-size"),`rt-variant-${c}`,{"rt-high-contrast":h},(0,d.we)(o))})});f.displayName="Badge"},29248:function(e,r,t){t.d(r,{x:function(){return Y}});var a=t(67294),o=t(93967),l=t.n(o),n=t(87462),i=t(75320),c=t(29115),s=t(25360),d=t(28771),u=t(79698),f=t(78990),h=t(9981);function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(e,[r,t]){return Math.min(t,Math.max(r,e))}var v=t(36206);function $6c2e24571c90391f$export$3e6543de14f8614f(e,r){return(0,a.useReducer)((e,t)=>{let a=r[e][t];return null!=a?a:e},e)}let p="ScrollArea",[b,m]=(0,s.b)(p),[g,w]=b(p),S=(0,a.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:o="hover",dir:l,scrollHideDelay:c=600,...s}=e,[u,h]=(0,a.useState)(null),[v,p]=(0,a.useState)(null),[b,m]=(0,a.useState)(null),[w,S]=(0,a.useState)(null),[$,E]=(0,a.useState)(null),[y,C]=(0,a.useState)(0),[T,P]=(0,a.useState)(0),[R,_]=(0,a.useState)(!1),[z,k]=(0,a.useState)(!1),x=(0,d.e)(r,e=>h(e)),D=(0,f.gm)(l);return(0,a.createElement)(g,{scope:t,type:o,dir:D,scrollHideDelay:c,scrollArea:u,viewport:v,onViewportChange:p,content:b,onContentChange:m,scrollbarX:w,onScrollbarXChange:S,scrollbarXEnabled:R,onScrollbarXEnabledChange:_,scrollbarY:$,onScrollbarYChange:E,scrollbarYEnabled:z,onScrollbarYEnabledChange:k,onCornerWidthChange:C,onCornerHeightChange:P},(0,a.createElement)(i.WV.div,(0,n.Z)({dir:D},s,{ref:x,style:{position:"relative","--radix-scroll-area-corner-width":y+"px","--radix-scroll-area-corner-height":T+"px",...e.style}})))}),$=(0,a.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:o,...l}=e,c=w("ScrollAreaViewport",t),s=(0,a.useRef)(null),u=(0,d.e)(r,s,c.onViewportChange);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,a.createElement)(i.WV.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},l,{ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,a.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},o)))}),E="ScrollAreaScrollbar",y=(0,a.forwardRef)((e,r)=>{let{forceMount:t,...o}=e,l=w(E,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=l,s="horizontal"===e.orientation;return(0,a.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===l.type?(0,a.createElement)(C,(0,n.Z)({},o,{ref:r,forceMount:t})):"scroll"===l.type?(0,a.createElement)(T,(0,n.Z)({},o,{ref:r,forceMount:t})):"auto"===l.type?(0,a.createElement)(P,(0,n.Z)({},o,{ref:r,forceMount:t})):"always"===l.type?(0,a.createElement)(R,(0,n.Z)({},o,{ref:r})):null}),C=(0,a.forwardRef)((e,r)=>{let{forceMount:t,...o}=e,l=w(E,e.__scopeScrollArea),[i,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=l.scrollArea,r=0;if(e){let handlePointerEnter=()=>{window.clearTimeout(r),s(!0)},handlePointerLeave=()=>{r=window.setTimeout(()=>s(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",handlePointerEnter),e.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",handlePointerEnter),e.removeEventListener("pointerleave",handlePointerLeave)}}},[l.scrollArea,l.scrollHideDelay]),(0,a.createElement)(c.z,{present:t||i},(0,a.createElement)(P,(0,n.Z)({"data-state":i?"visible":"hidden"},o,{ref:r})))}),T=(0,a.forwardRef)((e,r)=>{let{forceMount:t,...o}=e,l=w(E,e.__scopeScrollArea),i="horizontal"===e.orientation,s=$57acba87d6e25586$var$useDebounceCallback(()=>u("SCROLL_END"),100),[d,u]=$6c2e24571c90391f$export$3e6543de14f8614f("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return(0,a.useEffect)(()=>{if("idle"===d){let e=window.setTimeout(()=>u("HIDE"),l.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,l.scrollHideDelay,u]),(0,a.useEffect)(()=>{let e=l.viewport,r=i?"scrollLeft":"scrollTop";if(e){let t=e[r],handleScroll=()=>{let a=e[r],o=t!==a;o&&(u("SCROLL"),s()),t=a};return e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[l.viewport,i,u,s]),(0,a.createElement)(c.z,{present:t||"hidden"!==d},(0,a.createElement)(R,(0,n.Z)({"data-state":"hidden"===d?"hidden":"visible"},o,{ref:r,onPointerEnter:(0,v.M)(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:(0,v.M)(e.onPointerLeave,()=>u("POINTER_LEAVE"))})))}),P=(0,a.forwardRef)((e,r)=>{let t=w(E,e.__scopeScrollArea),{forceMount:o,...l}=e,[i,s]=(0,a.useState)(!1),d="horizontal"===e.orientation,u=$57acba87d6e25586$var$useDebounceCallback(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(d?e:r)}},10);return $57acba87d6e25586$var$useResizeObserver(t.viewport,u),$57acba87d6e25586$var$useResizeObserver(t.content,u),(0,a.createElement)(c.z,{present:o||i},(0,a.createElement)(R,(0,n.Z)({"data-state":i?"visible":"hidden"},l,{ref:r})))}),R=(0,a.forwardRef)((e,r)=>{let{orientation:t="vertical",...o}=e,l=w(E,e.__scopeScrollArea),i=(0,a.useRef)(null),c=(0,a.useRef)(0),[s,d]=(0,a.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=$57acba87d6e25586$var$getThumbRatio(s.viewport,s.content),f={...o,sizes:s,onSizesChange:d,hasThumb:!!(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function getScrollPosition(e,r){return $57acba87d6e25586$var$getScrollPositionFromPointer(e,c.current,s,r)}return"horizontal"===t?(0,a.createElement)(_,(0,n.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=l.viewport.scrollLeft,r=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,s,l.dir);i.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=getScrollPosition(e,l.dir))}})):"vertical"===t?(0,a.createElement)(z,(0,n.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=l.viewport.scrollTop,r=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,s);i.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=getScrollPosition(e))}})):null}),_=(0,a.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:o,...l}=e,i=w(E,e.__scopeScrollArea),[c,s]=(0,a.useState)(),u=(0,a.useRef)(null),f=(0,d.e)(r,u,i.onScrollbarXChange);return(0,a.useEffect)(()=>{u.current&&s(getComputedStyle(u.current))},[u]),(0,a.createElement)(D,(0,n.Z)({"data-orientation":"horizontal"},l,{ref:f,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$57acba87d6e25586$var$getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let a=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(a),a>0&&a<t&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&c&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:$57acba87d6e25586$var$toInt(c.paddingLeft),paddingEnd:$57acba87d6e25586$var$toInt(c.paddingRight)}})}}))}),z=(0,a.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:o,...l}=e,i=w(E,e.__scopeScrollArea),[c,s]=(0,a.useState)(),u=(0,a.useRef)(null),f=(0,d.e)(r,u,i.onScrollbarYChange);return(0,a.useEffect)(()=>{u.current&&s(getComputedStyle(u.current))},[u]),(0,a.createElement)(D,(0,n.Z)({"data-orientation":"vertical"},l,{ref:f,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$57acba87d6e25586$var$getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let a=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(a),a>0&&a<t&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&c&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:$57acba87d6e25586$var$toInt(c.paddingTop),paddingEnd:$57acba87d6e25586$var$toInt(c.paddingBottom)}})}}))}),[k,x]=b(E),D=(0,a.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:o,hasThumb:l,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:f,onThumbPositionChange:h,onDragScroll:p,onWheelScroll:b,onResize:m,...g}=e,S=w(E,t),[$,y]=(0,a.useState)(null),C=(0,d.e)(r,e=>y(e)),T=(0,a.useRef)(null),P=(0,a.useRef)(""),R=S.viewport,_=o.content-o.viewport,z=(0,u.W)(b),x=(0,u.W)(h),D=$57acba87d6e25586$var$useDebounceCallback(m,10);function handleDragScroll(e){if(T.current){let r=e.clientX-T.current.left,t=e.clientY-T.current.top;p({x:r,y:t})}}return(0,a.useEffect)(()=>{let handleWheel=e=>{let r=e.target,t=null==$?void 0:$.contains(r);t&&z(e,_)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})},[R,$,_,z]),(0,a.useEffect)(x,[o,x]),$57acba87d6e25586$var$useResizeObserver($,D),$57acba87d6e25586$var$useResizeObserver(S.content,D),(0,a.createElement)(k,{scope:t,scrollbar:$,hasThumb:l,onThumbChange:(0,u.W)(c),onThumbPointerUp:(0,u.W)(s),onThumbPositionChange:x,onThumbPointerDown:(0,u.W)(f)},(0,a.createElement)(i.WV.div,(0,n.Z)({},g,{ref:C,style:{position:"absolute",...g.style},onPointerDown:(0,v.M)(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),T.current=$.getBoundingClientRect(),P.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),handleDragScroll(e)}}),onPointerMove:(0,v.M)(e.onPointerMove,handleDragScroll),onPointerUp:(0,v.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=P.current,S.viewport&&(S.viewport.style.scrollBehavior=""),T.current=null})})))}),L="ScrollAreaThumb",A=(0,a.forwardRef)((e,r)=>{let{forceMount:t,...o}=e,l=x(L,e.__scopeScrollArea);return(0,a.createElement)(c.z,{present:t||l.hasThumb},(0,a.createElement)(N,(0,n.Z)({ref:r},o)))}),N=(0,a.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:o,...l}=e,c=w(L,t),s=x(L,t),{onThumbPositionChange:u}=s,f=(0,d.e)(r,e=>s.onThumbChange(e)),h=(0,a.useRef)(),p=$57acba87d6e25586$var$useDebounceCallback(()=>{h.current&&(h.current(),h.current=void 0)},100);return(0,a.useEffect)(()=>{let e=c.viewport;if(e){let handleScroll=()=>{if(p(),!h.current){let r=$57acba87d6e25586$var$addUnlinkedScrollListener(e,u);h.current=r,u()}};return u(),e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[c.viewport,p,u]),(0,a.createElement)(i.WV.div,(0,n.Z)({"data-state":s.hasThumb?"visible":"hidden"},l,{ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...o},onPointerDownCapture:(0,v.M)(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),a=e.clientX-t.left,o=e.clientY-t.top;s.onThumbPointerDown({x:a,y:o})}),onPointerUp:(0,v.M)(e.onPointerUp,s.onThumbPointerUp)}))}),W="ScrollAreaCorner",M=(0,a.forwardRef)((e,r)=>{let t=w(W,e.__scopeScrollArea),o=!!(t.scrollbarX&&t.scrollbarY),l="scroll"!==t.type&&o;return l?(0,a.createElement)(Z,(0,n.Z)({},e,{ref:r})):null}),Z=(0,a.forwardRef)((e,r)=>{let{__scopeScrollArea:t,...o}=e,l=w(W,t),[c,s]=(0,a.useState)(0),[d,u]=(0,a.useState)(0);return $57acba87d6e25586$var$useResizeObserver(l.scrollbarX,()=>{var e;let r=(null===(e=l.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;l.onCornerHeightChange(r),u(r)}),$57acba87d6e25586$var$useResizeObserver(l.scrollbarY,()=>{var e;let r=(null===(e=l.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;l.onCornerWidthChange(r),s(r)}),c&&d?(0,a.createElement)(i.WV.div,(0,n.Z)({},o,{ref:r,style:{width:c,height:d,position:"absolute",right:"ltr"===l.dir?0:void 0,left:"rtl"===l.dir?0:void 0,bottom:0,...e.style}})):null});function $57acba87d6e25586$var$toInt(e){return e?parseInt(e,10):0}function $57acba87d6e25586$var$getThumbRatio(e,r){let t=e/r;return isNaN(t)?0:t}function $57acba87d6e25586$var$getThumbSize(e){let r=$57acba87d6e25586$var$getThumbRatio(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-t)*r;return Math.max(a,18)}function $57acba87d6e25586$var$getScrollPositionFromPointer(e,r,t,a="ltr"){let o=$57acba87d6e25586$var$getThumbSize(t),l=r||o/2,n=t.scrollbar.paddingStart+l,i=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),c=t.content-t.viewport,s=$57acba87d6e25586$var$linearScale([n,i],"ltr"===a?[0,c]:[-1*c,0]);return s(e)}function $57acba87d6e25586$var$getThumbOffsetFromScroll(e,r,t="ltr"){let a=$57acba87d6e25586$var$getThumbSize(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,n=r.content-r.viewport,i="ltr"===t?[0,n]:[-1*n,0],c=$ae6933e535247d3d$export$7d15b64cf5a3a4c4(e,i),s=$57acba87d6e25586$var$linearScale([0,n],[0,l-a]);return s(c)}function $57acba87d6e25586$var$linearScale(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let a=(r[1]-r[0])/(e[1]-e[0]);return r[0]+a*(t-e[0])}}let $57acba87d6e25586$var$addUnlinkedScrollListener=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},a=0;return!function loop(){let o={left:e.scrollLeft,top:e.scrollTop},l=t.left!==o.left,n=t.top!==o.top;(l||n)&&r(),t=o,a=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(a)};function $57acba87d6e25586$var$useDebounceCallback(e,r){let t=(0,u.W)(e),o=(0,a.useRef)(0);return(0,a.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,a.useCallback)(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}function $57acba87d6e25586$var$useResizeObserver(e,r){let t=(0,u.W)(r);(0,h.b)(()=>{let r=0;if(e){let a=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return a.observe(e),()=>{window.cancelAnimationFrame(r),a.unobserve(e)}}},[e,t])}var O=t(78219);let F={size:{type:"enum",values:["1","2","3"],default:"1",responsive:!0},radius:O.C,scrollbars:{type:"enum",values:["vertical","horizontal","both"],default:"both"}};var H=t(23843),I=t(6776);let Y=a.forwardRef((e,r)=>{let{rest:t,...o}=(0,H.FY)(e),{className:n,style:i,type:c,scrollHideDelay:s="scroll"!==c?0:void 0,dir:d,size:u=F.size.default,radius:f=F.radius.default,scrollbars:h=F.scrollbars.default,...v}=t;return a.createElement(S,{type:c,scrollHideDelay:s,className:l()("rt-ScrollAreaRoot",n,(0,H.we)(o)),style:i},a.createElement($,{...v,ref:r,className:"rt-ScrollAreaViewport"}),a.createElement("div",{className:"rt-ScrollAreaViewportFocusRing"}),"vertical"!==h?a.createElement(y,{"data-radius":f,orientation:"horizontal",className:l()("rt-ScrollAreaScrollbar",(0,I.g)(u,"rt-r-size"))},a.createElement(A,{className:"rt-ScrollAreaThumb"})):null,"horizontal"!==h?a.createElement(y,{"data-radius":f,orientation:"vertical",className:l()("rt-ScrollAreaScrollbar",(0,I.g)(u,"rt-r-size"))},a.createElement(A,{className:"rt-ScrollAreaThumb"})):null,"both"===h?a.createElement(M,{className:"rt-ScrollAreaCorner"}):null)});Y.displayName="ScrollArea"},71581:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(45711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},42841:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(45711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]])},41689:function(e,r,t){t.d(r,{C:function(){return s}});var a=t(35059),o=t(54662),l=t(33179),n=t(51337),i=t(25432),c=t(85893),s=(0,a.G)(function(e,r){let t=(0,o.mq)("Badge",e),{className:a,...s}=(0,l.Lr)(e);return(0,c.jsx)(n.m.span,{ref:r,className:(0,i.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...t}})});s.displayName="Badge"},73793:function(e,r,t){t.d(r,{f:function(){return s}});var a=t(62207),o=t(25432),l=t(35059),n=t(51337),i=t(67294),c=t(85893),s=(0,l.G)((e,r)=>{let{className:t,...l}=e,{bodyId:s,setBodyMounted:d}=(0,a.vR)();(0,i.useEffect)(()=>(d(!0),()=>d(!1)),[d]);let u=(0,o.cx)("chakra-modal__body",t),f=(0,a.I_)();return(0,c.jsx)(n.m.div,{ref:r,className:u,id:s,...l,__css:f.body})});s.displayName="ModalBody"},77626:function(e,r,t){t.d(r,{D:function(){return c}});var a=t(51337),o=t(85893),Circle=e=>(0,o.jsx)(a.m.circle,{cx:50,cy:50,r:42,fill:"transparent",...e});Circle.displayName="Circle";var l=t(70917);function valueToPercent(e,r,t){return(e-r)*100/(t-r)}var n=(0,l.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),i=(0,l.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});function getProgressProps(e){let{value:r=0,min:t,max:a,valueText:o,getValueText:l,isIndeterminate:n,role:i="progressbar"}=e,c=valueToPercent(r,t,a);return{bind:{"data-indeterminate":n?"":void 0,"aria-valuemax":a,"aria-valuemin":t,"aria-valuenow":n?void 0:r,"aria-valuetext":(()=>{if(null!=r)return"function"==typeof l?l(r,c):o})(),role:i},percent:c,value:r}}(0,l.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),(0,l.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});var Shape=e=>{let{size:r,isIndeterminate:t,...l}=e;return(0,o.jsx)(a.m.svg,{viewBox:"0 0 100 100",__css:{width:r,height:r,animation:t?`${i} 2s linear infinite`:void 0},...l})};Shape.displayName="Shape";var c=(0,t(35059).G)((e,r)=>{var t;let{size:l="48px",max:i=100,min:c=0,valueText:s,getValueText:d,value:u,capIsRound:f,children:h,thickness:v="10px",color:p="#0078d4",trackColor:b="#edebe9",isIndeterminate:m,...g}=e,w=getProgressProps({min:c,max:i,value:u,valueText:s,getValueText:d,isIndeterminate:m}),S=m?void 0:(null!=(t=w.percent)?t:0)*2.64,$=null==S?void 0:`${S} ${264-S}`,E=m?{css:{animation:`${n} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:$,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"};return(0,o.jsxs)(a.m.div,{ref:r,className:"chakra-progress",...w.bind,...g,__css:{display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:l},children:[(0,o.jsxs)(Shape,{size:l,isIndeterminate:m,children:[(0,o.jsx)(Circle,{stroke:b,strokeWidth:v,className:"chakra-progress__track"}),(0,o.jsx)(Circle,{stroke:p,strokeWidth:v,className:"chakra-progress__indicator",strokeLinecap:f?"round":void 0,opacity:0!==w.value||m?void 0:0,...E})]}),h]})});c.displayName="CircularProgress"}}]);