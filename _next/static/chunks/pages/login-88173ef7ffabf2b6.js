(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(7644)}])},7644:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_937524b4021d7da6489d13fbd4c438e8:function(){return Fragment_937524b4021d7da6489d13fbd4c438e8},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},default:function(){return Component}});var r=n(2729),i=n(6811),l=n(7294),a=n(687),o=n(6608),d=n(2196),s=n(917),c=n(9177),u=n(4207),m=n(3954),f=n(1669),p=n(9564),h=n(3100),g=n(1686),b=n(9222),_=n(3838),F=n(1664),x=n.n(F),v=n(9008),C=n.n(v);function _templateObject(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}let Z=(0,s.F4)(_templateObject());function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,l.useContext)(a.DR);return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(t.length>=2)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(c.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,i.BX)(c.Vq.Content,{children:[(0,i.tZ)(c.Vq.Title,{children:"Connection Error"}),(0,i.BX)(u.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,o.LH)(m.Ks).href]})]})})}):(0,i.tZ)(l.Fragment,{})})}function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,l.useContext)(a.DR);return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(t.length>0)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(d.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(Z," 1s infinite")},size:32})}):(0,i.tZ)(l.Fragment,{})})}function Fragment_937524b4021d7da6489d13fbd4c438e8(){let e=(0,l.useContext)(a.M4.state),t=(0,l.useContext)(a.M4.state__app_state__login_state),[n,r]=(0,l.useContext)(a.DR),d=(0,l.useRef)(null);o.xL.ref_email=d;let s=(0,l.useRef)(null);o.xL.ref_password=s;let c=(0,l.useCallback)(e=>{let t=e.target;e.preventDefault();let r={...Object.fromEntries(new FormData(t).entries()),password:(0,o.eA)(o.xL.ref_password),email:(0,o.eA)(o.xL.ref_email)};n([(0,o.ju)("state.app_state.login_state.on_submit",{form_data:r})])});return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(e.is_hydrated)?(0,i.tZ)(l.Fragment,{children:(0,i.BX)(f.g,{sx:{paddingTop:"10vh"},children:[(0,i.tZ)(l.Fragment,{children:(0,o.oA)(""!==t.error_message)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(p.x,{children:t.error_message})}):(0,i.tZ)(l.Fragment,{})}),(0,i.BX)(h.xu,{as:"form",onSubmit:c,sx:{width:"80vw"},children:[(0,i.tZ)(g.I,{id:"email",placeholder:"email",ref:d,type:"email"}),(0,i.tZ)(g.I,{id:"password",placeholder:"password",ref:s,type:"password"}),(0,i.tZ)(b.z,{isLoading:t.is_loading,type:"submit",children:"Login"})]}),(0,i.tZ)(_.r,{as:x(),href:"/register",children:"Register"})]})}):(0,i.tZ)(l.Fragment,{})})}function Component(){return(0,i.BX)(l.Fragment,{children:[(0,i.BX)(l.Fragment,{children:[(0,i.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,i.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,i.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(Fragment_937524b4021d7da6489d13fbd4c438e8,{})}),(0,i.BX)(C(),{children:[(0,i.tZ)("title",{children:"App | Login"}),(0,i.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},1686:function(e,t,n){"use strict";n.d(t,{I:function(){return g}});var r=n(5227),i=n(1103),l=n(5059),a=n(1628),o=n(3179),d=n(296),s=n(5432),c=n(7294),u=n(5893),[m,f]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[p,h]=(0,r.k)({strict:!1,name:"FormControlContext"});function useFormControlProvider(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:l,isReadOnly:a,...o}=e,d=(0,c.useId)(),u=t||`field-${d}`,m=`${u}-label`,f=`${u}-feedback`,p=`${u}-helptext`,[h,g]=(0,c.useState)(!1),[b,_]=(0,c.useState)(!1),[F,x]=(0,c.useState)(!1),v=(0,c.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,i.lq)(t,e=>{e&&_(!0)})}),[p]),C=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,s.PB)(F),"data-disabled":(0,s.PB)(l),"data-invalid":(0,s.PB)(r),"data-readonly":(0,s.PB)(a),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,l,F,r,a,m]),Z=(0,c.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,i.lq)(t,e=>{e&&g(!0)}),"aria-live":"polite"}),[f]),y=(0,c.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),k=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!l,isFocused:!!F,onFocus:()=>x(!0),onBlur:()=>x(!1),hasFeedbackText:h,setHasFeedbackText:g,hasHelpText:b,setHasHelpText:_,id:u,labelId:m,feedbackId:f,helpTextId:p,htmlProps:o,getHelpTextProps:v,getErrorMessageProps:Z,getRootProps:y,getLabelProps:C,getRequiredIndicatorProps:k}}function useFormControl(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:i,...l}=useFormControlProps(e);return{...l,disabled:t,readOnly:r,required:i,"aria-invalid":(0,s.Qm)(n),"aria-required":(0,s.Qm)(i),"aria-readonly":(0,s.Qm)(r)}}function useFormControlProps(e){var t,n,r;let i=h(),{id:l,disabled:a,readOnly:o,required:d,isRequired:c,isInvalid:u,isReadOnly:m,isDisabled:f,onFocus:p,onBlur:g,...b}=e,_=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&_.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&_.push(i.helpTextId),{...b,"aria-describedby":_.join(" ")||void 0,id:null!=l?l:null==i?void 0:i.id,isDisabled:null!=(t=null!=a?a:f)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=o?o:m)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(r=null!=d?d:c)?r:null==i?void 0:i.isRequired,isInvalid:null!=u?u:null==i?void 0:i.isInvalid,onFocus:(0,s.v0)(null==i?void 0:i.onFocus,p),onBlur:(0,s.v0)(null==i?void 0:i.onBlur,g)}}(0,l.G)(function(e,t){let n=(0,a.jC)("Form",e),r=(0,o.Lr)(e),{getRootProps:i,htmlProps:l,...c}=useFormControlProvider(r),f=(0,s.cx)("chakra-form-control",e.className);return(0,u.jsx)(p,{value:c,children:(0,u.jsx)(m,{value:n,children:(0,u.jsx)(d.m.div,{...i({},t),className:f,__css:n.container})})})}).displayName="FormControl",(0,l.G)(function(e,t){let n=h(),r=f(),i=(0,s.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(d.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:i})}).displayName="FormHelperText";var g=(0,l.G)(function(e,t){let{htmlSize:n,...r}=e,i=(0,a.jC)("Input",r),l=(0,o.Lr)(r),c=useFormControl(l),m=(0,s.cx)("chakra-input",e.className);return(0,u.jsx)(d.m.input,{size:n,...c,__css:i.field,ref:t,className:m})});g.displayName="Input",g.id="Input"},9564:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(5059),i=n(1628),l=n(3179),a=n(296),o=n(5432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var d=n(5893),s=(0,r.G)(function(e,t){let n=(0,i.mq)("Text",e),{className:r,align:s,decoration:c,casing:u,...m}=(0,l.Lr)(e),f=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,d.jsx)(a.m.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...f,...m,__css:n})});s.displayName="Text"}},function(e){e.O(0,[144,565,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);