(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{75511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(47200)}])},47200:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_7c2d68e493f230cb9c483bfc76ff2c69:function(){return Fragment_7c2d68e493f230cb9c483bfc76ff2c69},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},default:function(){return Component}});var r=n(82729),i=n(35944),l=n(67294),a=n(60687),o=n(6608),s=n(15637),d=n(70917),c=n(58711),u=n(6445),m=n(73954),f=n(91669),h=n(9564),g=n(295),p=n(23100),x=n(204),_=n(14418),b=n(24093),v=n(96272),F=n(33838),y=n(41664),k=n.n(y),Z=n(9008),C=n.n(Z);function _templateObject(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}let w=(0,d.F4)(_templateObject());function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,l.useContext)(a.DR);return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(t.length>0)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(s.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(w," 1s infinite")},size:32})}):(0,i.tZ)(l.Fragment,{})})}function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,l.useContext)(a.DR);return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(t.length>=2)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(c.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,i.BX)(c.Vq.Content,{children:[(0,i.tZ)(c.Vq.Title,{children:"Connection Error"}),(0,i.BX)(u.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,o.LH)(m.Ks).href]})]})})}):(0,i.tZ)(l.Fragment,{})})}function Fragment_7c2d68e493f230cb9c483bfc76ff2c69(){let e=(0,l.useContext)(a.M4.state__app_state__registration_state),[t,n]=(0,l.useContext)(a.DR),r=(0,l.useRef)(null);o.xL.ref_email=r;let s=(0,l.useRef)(null);o.xL.ref_password=s;let d=(0,l.useRef)(null);o.xL.ref_confirm_password=d;let c=(0,l.useCallback)(e=>{let n=e.target;e.preventDefault();let r={...Object.fromEntries(new FormData(n).entries()),confirm_password:(0,o.eA)(o.xL.ref_confirm_password),email:(0,o.eA)(o.xL.ref_email),password:(0,o.eA)(o.xL.ref_password)};t([(0,o.ju)("state.app_state.registration_state.handle_registration",{form_data:r})])});return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(e.success)?(0,i.tZ)(l.Fragment,{children:(0,i.BX)(f.g,{children:[(0,i.tZ)(h.x,{children:"Registration successful, check your mail to confirm signup so as to login!"}),(0,i.tZ)(g.$,{})]})}):(0,i.tZ)(l.Fragment,{children:(0,i.BX)(f.g,{children:[(0,i.tZ)(l.Fragment,{children:(0,o.oA)(""!==e.error_message)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(h.x,{children:e.error_message})}):(0,i.tZ)(l.Fragment,{})}),(0,i.tZ)(p.xu,{as:"form",onSubmit:c,sx:{width:"80vw"},children:(0,i.BX)(l.Fragment,{children:[(0,i.tZ)(x.k,{sx:{paddingBottom:"10vh"},children:(0,i.tZ)(_.X,{as:"h1",size:"4xl",sx:{weight:"bold",align:"left"},children:"Pal-ette"})}),(0,i.tZ)(x.k,{sx:{paddingBottom:"2vh"},children:(0,i.tZ)(_.X,{as:"h1",size:"lg",sx:{align:"left"},children:"Sign up"})}),(0,i.BX)(x.k,{direction:"column",sx:{paddingBottom:"2vh"},children:[(0,i.tZ)(h.x,{sx:{size:"md",weight:"medium",align:"left"},children:"Email Address"}),(0,i.tZ)(b.I,{id:"email",placeholder:"email",ref:r,type:"email"}),(0,i.tZ)(h.x,{sx:{size:"md",weight:"bold",align:"left"},children:"Password"}),(0,i.tZ)(b.I,{id:"password",placeholder:"password",ref:s,type:"password"}),(0,i.tZ)(h.x,{sx:{size:"md",weight:"bold",align:"left"},children:"Confirm Password"}),(0,i.tZ)(b.I,{id:"confirm_password",placeholder:"confirm password",ref:d,type:"password"})]}),(0,i.tZ)(x.k,{children:(0,i.tZ)(v.z,{isLoading:e.is_loading,size:"lg",type:"submit",variant:"outline",children:"Register"})})]})}),(0,i.tZ)(F.r,{as:k(),href:"/login",children:"Already have an account?"})]})})})}function Component(){return(0,i.BX)(l.Fragment,{children:[(0,i.BX)(l.Fragment,{children:[(0,i.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,i.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,i.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(Fragment_7c2d68e493f230cb9c483bfc76ff2c69,{})}),(0,i.BX)(C(),{children:[(0,i.tZ)("title",{children:"App | Register"}),(0,i.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},33951:function(e,t,n){"use strict";n.d(t,{XQ:function(){return mapResponsive}});var r=n(25432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},70654:function(e,t,n){"use strict";n.d(t,{NJ:function(){return g},e:function(){return f}});var r=n(55227),i=n(81103),l=n(35059),a=n(54662),o=n(33179),s=n(51337),d=n(25432),c=n(67294),u=n(85893),[m,f]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,g]=(0,r.k)({strict:!1,name:"FormControlContext"});function useFormControlProvider(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:l,isReadOnly:a,...o}=e,s=(0,c.useId)(),u=t||`field-${s}`,m=`${u}-label`,f=`${u}-feedback`,h=`${u}-helptext`,[g,p]=(0,c.useState)(!1),[x,_]=(0,c.useState)(!1),[b,v]=(0,c.useState)(!1),F=(0,c.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,i.lq)(t,e=>{e&&_(!0)})}),[h]),y=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,d.PB)(b),"data-disabled":(0,d.PB)(l),"data-invalid":(0,d.PB)(r),"data-readonly":(0,d.PB)(a),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,l,b,r,a,m]),k=(0,c.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,i.lq)(t,e=>{e&&p(!0)}),"aria-live":"polite"}),[f]),Z=(0,c.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),C=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!l,isFocused:!!b,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:g,setHasFeedbackText:p,hasHelpText:x,setHasHelpText:_,id:u,labelId:m,feedbackId:f,helpTextId:h,htmlProps:o,getHelpTextProps:F,getErrorMessageProps:k,getRootProps:Z,getLabelProps:y,getRequiredIndicatorProps:C}}(0,l.G)(function(e,t){let n=(0,a.jC)("Form",e),r=(0,o.Lr)(e),{getRootProps:i,htmlProps:l,...c}=useFormControlProvider(r),f=(0,d.cx)("chakra-form-control",e.className);return(0,u.jsx)(h,{value:c,children:(0,u.jsx)(m,{value:n,children:(0,u.jsx)(s.m.div,{...i({},t),className:f,__css:n.container})})})}).displayName="FormControl",(0,l.G)(function(e,t){let n=g(),r=f(),i=(0,d.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(s.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:i})}).displayName="FormHelperText"},24093:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var r=n(70654),i=n(25432);function useFormControl(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:l,...a}=useFormControlProps(e);return{...a,disabled:t,readOnly:r,required:l,"aria-invalid":(0,i.Qm)(n),"aria-required":(0,i.Qm)(l),"aria-readonly":(0,i.Qm)(r)}}function useFormControlProps(e){var t,n,l;let a=(0,r.NJ)(),{id:o,disabled:s,readOnly:d,required:c,isRequired:u,isInvalid:m,isReadOnly:f,isDisabled:h,onFocus:g,onBlur:p,...x}=e,_=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&_.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&_.push(a.helpTextId),{...x,"aria-describedby":_.join(" ")||void 0,id:null!=o?o:null==a?void 0:a.id,isDisabled:null!=(t=null!=s?s:h)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=d?d:f)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(l=null!=c?c:u)?l:null==a?void 0:a.isRequired,isInvalid:null!=m?m:null==a?void 0:a.isInvalid,onFocus:(0,i.v0)(null==a?void 0:a.onFocus,g),onBlur:(0,i.v0)(null==a?void 0:a.onBlur,p)}}var l=n(35059),a=n(54662),o=n(33179),s=n(51337),d=n(85893),c=(0,l.G)(function(e,t){let{htmlSize:n,...r}=e,l=(0,a.jC)("Input",r),c=(0,o.Lr)(r),u=useFormControl(c),m=(0,i.cx)("chakra-input",e.className);return(0,d.jsx)(s.m.input,{size:n,...u,__css:l.field,ref:t,className:m})});c.displayName="Input",c.id="Input"},91669:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(7306),i=n(35059),l=n(85893),a=(0,i.G)((e,t)=>(0,l.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"},7306:function(e,t,n){"use strict";n.d(t,{K:function(){return c}});var r=n(51337),i=n(85893),StackItem=e=>(0,i.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var l=n(33951),a="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[a]:(0,l.XQ)(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(n,e=>r[e])}}var o=n(35059),s=n(25432),d=n(67294);function getValidChildren(e){return d.Children.toArray(e).filter(e=>(0,d.isValidElement)(e))}var c=(0,o.G)((e,t)=>{let{isInline:n,direction:l,align:o,justify:c,spacing:u="0.5rem",wrap:m,children:f,divider:h,className:g,shouldWrapChildren:p,...x}=e,_=n?"row":null!=l?l:"column",b=(0,d.useMemo)(()=>getStackStyles({direction:_,spacing:u}),[_,u]),v=(0,d.useMemo)(()=>getDividerStyles({spacing:u,direction:_}),[u,_]),F=!!h,y=!p&&!F,k=(0,d.useMemo)(()=>{let e=getValidChildren(f);return y?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,l=n+1===e.length,a=(0,i.jsx)(StackItem,{children:t},r),o=p?a:t;if(!F)return o;let s=(0,d.cloneElement)(h,{__css:v});return(0,i.jsxs)(d.Fragment,{children:[o,l?null:s]},r)})},[h,v,F,y,p,f]),Z=(0,s.cx)("chakra-stack",g);return(0,i.jsx)(r.m.div,{ref:t,display:"flex",alignItems:o,justifyContent:c,flexDirection:b.flexDirection,flexWrap:m,className:Z,__css:F?{}:{[a]:b[a]},...x,children:k})});c.displayName="Stack"},33838:function(e,t,n){"use strict";n.d(t,{r:function(){return d}});var r=n(35059),i=n(54662),l=n(33179),a=n(51337),o=n(25432),s=n(85893),d=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:d,...c}=(0,l.Lr)(e);return(0,s.jsx)(a.m.a,{target:d?"_blank":void 0,rel:d?"noopener":void 0,ref:t,className:(0,o.cx)("chakra-link",r),...c,__css:n})});d.displayName="Link"}},function(e){e.O(0,[18,424,774,888,179],function(){return e(e.s=75511)}),_N_E=e.O()}]);