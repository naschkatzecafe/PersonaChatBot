(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{75511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(47200)}])},47200:function(e,t,n){"use strict";n.r(t),n.d(t,{Div_ac2a89ea84667d600a059f034bd91dfe:function(){return Div_ac2a89ea84667d600a059f034bd91dfe},Fragment_abbd7070303e01b59551167b5d4b2ad9:function(){return Fragment_abbd7070303e01b59551167b5d4b2ad9},Fragment_cf53a535ae2e610a113dd361eb6ac95b:function(){return Fragment_cf53a535ae2e610a113dd361eb6ac95b},Toaster_6e90e5e87a1cac8c96c683214079bef3:function(){return Toaster_6e90e5e87a1cac8c96c683214079bef3},default:function(){return Component}});var r=n(82729),a=n(35944),i=n(4511),o=n(67294),l=n(60687),s=n(6608),d=n(15637),c=n(70917),u=n(64712),_=n(73954),f=n(91669),m=n(88911),p=n(295),h=n(23100),b=n(204),g=n(14418),x=n(24093),v=n(29222),F=n(33838),Z=n(41664),k=n.n(Z),C=n(9008),w=n.n(C);function _templateObject(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Div_ac2a89ea84667d600a059f034bd91dfe(){let[e,t]=(0,o.useContext)(l.DR);return(0,a.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: ".concat(t.length>0?t[t.length-1].message:""),children:(0,a.tZ)(Fragment_cf53a535ae2e610a113dd361eb6ac95b,{})})}function Toaster_6e90e5e87a1cac8c96c683214079bef3(){let{resolvedColorMode:e}=(0,o.useContext)(l.kc);s.xL.__toast=u.A;let[t,n]=(0,o.useContext)(l.DR),r={description:"Check if server is reachable at ".concat((0,s.LH)(_.Ks).href),closeButton:!0,duration:12e4,id:"websocket-error"},[i,d]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{n.length>=2?i||u.A.error("Cannot connect to server: ".concat(n.length>0?n[n.length-1].message:"","."),{...r,onDismiss:()=>d(!0)}):(u.A.dismiss("websocket-error"),d(!1))},[n]),(0,a.tZ)(u.x,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}let y=(0,c.F4)(_templateObject());function Fragment_cf53a535ae2e610a113dd361eb6ac95b(){let[e,t]=(0,o.useContext)(l.DR);return(0,a.tZ)(o.Fragment,{children:(0,s.oA)(t.length>0)?(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(d.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:"".concat(y," 1s infinite")},size:32})}):(0,a.tZ)(o.Fragment,{})})}function Fallback(e){let{error:t,resetErrorBoundary:n}=e;return(0,a.BX)("div",{children:[(0,a.tZ)("p",{children:"Ooops...Unknown Reflex error has occured:"}),(0,a.tZ)("p",{css:{color:"red"},children:t.message}),(0,a.tZ)("p",{children:"Please contact the support."})]})}function Fragment_abbd7070303e01b59551167b5d4b2ad9(){let e=(0,o.useContext)(l.M4.reflex___state____state__app___app_state____app_state__app___state___registration_state____registration_state),[t,n]=(0,o.useContext)(l.DR),r=(0,o.useRef)(null);s.xL.ref_email=r;let i=(0,o.useRef)(null);s.xL.ref_password=i;let d=(0,o.useRef)(null);s.xL.ref_confirm_password=d;let c=(0,o.useCallback)(e=>{let n=e.target;e.preventDefault();let r={...Object.fromEntries(new FormData(n).entries()),password:(0,s.eA)(s.xL.ref_password),email:(0,s.eA)(s.xL.ref_email),confirm_password:(0,s.eA)(s.xL.ref_confirm_password)};t([(0,s.ju)("reflex___state____state.app___app_state____app_state.app___state___registration_state____registration_state.handle_registration",{form_data:r})])});return(0,a.tZ)(o.Fragment,{children:(0,s.oA)(e.success)?(0,a.tZ)(o.Fragment,{children:(0,a.BX)(f.g,{children:[(0,a.tZ)(m.x,{children:"Registration successful, check your mail to confirm signup so as to login!"}),(0,a.tZ)(p.$,{})]})}):(0,a.tZ)(o.Fragment,{children:(0,a.BX)(f.g,{children:[(0,a.tZ)(o.Fragment,{children:(0,s.oA)(""!==e.error_message)?(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(m.x,{children:e.error_message})}):(0,a.tZ)(o.Fragment,{})}),(0,a.tZ)(h.xu,{as:"form",onSubmit:c,sx:{width:"80vw"},children:(0,a.BX)(o.Fragment,{children:[(0,a.tZ)(b.k,{sx:{paddingBottom:"10vh"},children:(0,a.tZ)(g.X,{as:"h1",size:"4xl",sx:{weight:"bold",align:"left"},children:"iNotePal"})}),(0,a.tZ)(b.k,{sx:{paddingBottom:"2vh"},children:(0,a.tZ)(g.X,{as:"h1",size:"lg",sx:{align:"left"},children:"Sign up"})}),(0,a.BX)(b.k,{direction:"column",sx:{paddingBottom:"2vh"},children:[(0,a.tZ)(m.x,{sx:{size:"md",weight:"medium",align:"left"},children:"Email Address"}),(0,a.tZ)(x.I,{id:"email",placeholder:"email",ref:r,type:"email"}),(0,a.tZ)(m.x,{sx:{size:"md",weight:"bold",align:"left"},children:"Password"}),(0,a.tZ)(x.I,{id:"password",placeholder:"password",ref:i,type:"password"}),(0,a.tZ)(m.x,{sx:{size:"md",weight:"bold",align:"left"},children:"Confirm Password"}),(0,a.tZ)(x.I,{id:"confirm_password",placeholder:"confirm password",ref:d,type:"password"})]}),(0,a.tZ)(b.k,{children:(0,a.tZ)(v.z,{isLoading:e.is_loading,size:"lg",type:"submit",variant:"outline",children:"Register"})})]})}),(0,a.tZ)(F.r,{as:k(),href:"/login",children:"Already have an account?"})]})})})}function Component(){let[e,t]=(0,o.useContext)(l.DR);return(0,a.BX)(i.SV,{FallbackComponent:Fallback,onError:(t,n)=>{e([(0,s.ju)("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception",{stack:t.stack})])},children:[(0,a.BX)(o.Fragment,{children:[(0,a.tZ)(Div_ac2a89ea84667d600a059f034bd91dfe,{}),(0,a.tZ)(Toaster_6e90e5e87a1cac8c96c683214079bef3,{})]}),(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(Fragment_abbd7070303e01b59551167b5d4b2ad9,{})}),(0,a.BX)(w(),{children:[(0,a.tZ)("title",{children:"App | Register"}),(0,a.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},70654:function(e,t,n){"use strict";n.d(t,{NJ:function(){return p},e:function(){return f}});var r=n(55227),a=n(81103),i=n(35059),o=n(91639),l=n(33179),s=n(51337),d=n(25432),c=n(67294),u=n(85893),[_,f]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[m,p]=(0,r.k)({strict:!1,name:"FormControlContext"});function useFormControlProvider(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:i,isReadOnly:o,...l}=e,s=(0,c.useId)(),u=t||`field-${s}`,_=`${u}-label`,f=`${u}-feedback`,m=`${u}-helptext`,[p,h]=(0,c.useState)(!1),[b,g]=(0,c.useState)(!1),[x,v]=(0,c.useState)(!1),F=(0,c.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,a.lq)(t,e=>{e&&g(!0)})}),[m]),Z=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,d.PB)(x),"data-disabled":(0,d.PB)(i),"data-invalid":(0,d.PB)(r),"data-readonly":(0,d.PB)(o),id:void 0!==e.id?e.id:_,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,i,x,r,o,_]),k=(0,c.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,a.lq)(t,e=>{e&&h(!0)}),"aria-live":"polite"}),[f]),C=(0,c.useCallback)((e={},t=null)=>({...e,...l,ref:t,role:"group"}),[l]),w=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!o,isDisabled:!!i,isFocused:!!x,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:p,setHasFeedbackText:h,hasHelpText:b,setHasHelpText:g,id:u,labelId:_,feedbackId:f,helpTextId:m,htmlProps:l,getHelpTextProps:F,getErrorMessageProps:k,getRootProps:C,getLabelProps:Z,getRequiredIndicatorProps:w}}(0,i.G)(function(e,t){let n=(0,o.jC)("Form",e),r=(0,l.Lr)(e),{getRootProps:a,htmlProps:i,...c}=useFormControlProvider(r),f=(0,d.cx)("chakra-form-control",e.className);return(0,u.jsx)(m,{value:c,children:(0,u.jsx)(_,{value:n,children:(0,u.jsx)(s.m.div,{...a({},t),className:f,__css:n.container})})})}).displayName="FormControl",(0,i.G)(function(e,t){let n=p(),r=f(),a=(0,d.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(s.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:a})}).displayName="FormHelperText"},24093:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var r=n(70654),a=n(25432);function useFormControl(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:i,...o}=useFormControlProps(e);return{...o,disabled:t,readOnly:r,required:i,"aria-invalid":(0,a.Qm)(n),"aria-required":(0,a.Qm)(i),"aria-readonly":(0,a.Qm)(r)}}function useFormControlProps(e){var t,n,i;let o=(0,r.NJ)(),{id:l,disabled:s,readOnly:d,required:c,isRequired:u,isInvalid:_,isReadOnly:f,isDisabled:m,onFocus:p,onBlur:h,...b}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&g.push(o.feedbackId),(null==o?void 0:o.hasHelpText)&&g.push(o.helpTextId),{...b,"aria-describedby":g.join(" ")||void 0,id:null!=l?l:null==o?void 0:o.id,isDisabled:null!=(t=null!=s?s:m)?t:null==o?void 0:o.isDisabled,isReadOnly:null!=(n=null!=d?d:f)?n:null==o?void 0:o.isReadOnly,isRequired:null!=(i=null!=c?c:u)?i:null==o?void 0:o.isRequired,isInvalid:null!=_?_:null==o?void 0:o.isInvalid,onFocus:(0,a.v0)(null==o?void 0:o.onFocus,p),onBlur:(0,a.v0)(null==o?void 0:o.onBlur,h)}}var i=n(35059),o=n(91639),l=n(33179),s=n(51337),d=n(85893),c=(0,i.G)(function(e,t){let{htmlSize:n,...r}=e,i=(0,o.jC)("Input",r),c=(0,l.Lr)(r),u=useFormControl(c),_=(0,a.cx)("chakra-input",e.className);return(0,d.jsx)(s.m.input,{size:n,...u,__css:i.field,ref:t,className:_})});c.displayName="Input",c.id="Input"},33838:function(e,t,n){"use strict";n.d(t,{r:function(){return d}});var r=n(35059),a=n(91639),i=n(33179),o=n(51337),l=n(25432),s=n(85893),d=(0,r.G)(function(e,t){let n=(0,a.mq)("Link",e),{className:r,isExternal:d,...c}=(0,i.Lr)(e);return(0,s.jsx)(o.m.a,{target:d?"_blank":void 0,rel:d?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",r),...c,__css:n})});d.displayName="Link"}},function(e){e.O(0,[477,672,774,888,179],function(){return e(e.s=75511)}),_N_E=e.O()}]);