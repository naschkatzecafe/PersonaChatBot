(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{36429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(37644)}])},37644:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_a66b819accc8ece765b87b2d53a42c82:function(){return Fragment_a66b819accc8ece765b87b2d53a42c82},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},default:function(){return Component}});var r=n(82729),i=n(35944),l=n(67294),a=n(60687),o=n(6608),s=n(15637),d=n(70917),c=n(58711),u=n(6445),m=n(73954),f=n(89336),h=n(9564),g=n(23100),p=n(204),x=n(14418),b=n(31686),_=n(96272),v=n(33838),F=n(41664),y=n.n(F),k=n(9008),C=n.n(k);function _templateObject(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,l.useContext)(a.DR);return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(t.length>0)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(s.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(Z," 1s infinite")},size:32})}):(0,i.tZ)(l.Fragment,{})})}let Z=(0,d.F4)(_templateObject());function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,l.useContext)(a.DR);return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(t.length>=2)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(c.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,i.BX)(c.Vq.Content,{children:[(0,i.tZ)(c.Vq.Title,{children:"Connection Error"}),(0,i.BX)(u.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,o.LH)(m.Ks).href]})]})})}):(0,i.tZ)(l.Fragment,{})})}function Fragment_a66b819accc8ece765b87b2d53a42c82(){let e=(0,l.useContext)(a.M4.state),t=(0,l.useContext)(a.M4.state__app_state__login_state),[n,r]=(0,l.useContext)(a.DR),s=(0,l.useRef)(null);o.xL.ref_email=s;let d=(0,l.useRef)(null);o.xL.ref_password=d;let c=(0,l.useCallback)(e=>{let t=e.target;e.preventDefault();let r={...Object.fromEntries(new FormData(t).entries()),email:(0,o.eA)(o.xL.ref_email),password:(0,o.eA)(o.xL.ref_password)};n([(0,o.ju)("state.app_state.login_state.on_submit",{form_data:r})])});return(0,i.tZ)(l.Fragment,{children:(0,o.oA)(e.is_hydrated)?(0,i.tZ)(l.Fragment,{children:(0,i.BX)(f.g,{sx:{paddingTop:"3vh"},children:[(0,i.tZ)(l.Fragment,{children:(0,o.oA)(""!==t.error_message)?(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(h.x,{children:t.error_message})}):(0,i.tZ)(l.Fragment,{})}),(0,i.tZ)(g.xu,{as:"form",onSubmit:c,sx:{width:"80vw"},children:(0,i.BX)(l.Fragment,{children:[(0,i.tZ)(p.k,{sx:{paddingBottom:"10vh"},children:(0,i.tZ)(x.X,{as:"h1",size:"4xl",sx:{weight:"bold",align:"left"},children:"iNotePal"})}),(0,i.tZ)(p.k,{sx:{paddingBottom:"2vh"},children:(0,i.tZ)(x.X,{as:"h1",size:"lg",sx:{align:"left"},children:"Log In"})}),(0,i.BX)(p.k,{direction:"column",sx:{paddingBottom:"2vh"},children:[(0,i.tZ)(h.x,{sx:{size:"md",weight:"medium",align:"left"},children:"Email Address"}),(0,i.tZ)(b.I,{id:"email",placeholder:"email",ref:s,type:"email"}),(0,i.tZ)(h.x,{sx:{size:"md",weight:"bold",align:"left"},children:"Password"}),(0,i.tZ)(b.I,{id:"password",placeholder:"password",ref:d,type:"password"})]}),(0,i.tZ)(p.k,{children:(0,i.tZ)(_.z,{isLoading:t.is_loading,size:"lg",type:"submit",variant:"outline",children:"Login"})})]})}),(0,i.tZ)(v.r,{as:y(),href:"/register",children:"No account yet? Sign up."})]})}):(0,i.tZ)(l.Fragment,{})})}function Component(){return(0,i.BX)(l.Fragment,{children:[(0,i.BX)(l.Fragment,{children:[(0,i.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,i.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,i.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,i.tZ)(l.Fragment,{children:(0,i.tZ)(Fragment_a66b819accc8ece765b87b2d53a42c82,{})}),(0,i.BX)(C(),{children:[(0,i.tZ)("title",{children:"App | Login"}),(0,i.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},33951:function(e,t,n){"use strict";n.d(t,{XQ:function(){return mapResponsive}});var r=n(25432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},31686:function(e,t,n){"use strict";n.d(t,{I:function(){return p}});var r=n(55227),i=n(81103),l=n(35059),a=n(54662),o=n(33179),s=n(51337),d=n(25432),c=n(67294),u=n(85893),[m,f]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,g]=(0,r.k)({strict:!1,name:"FormControlContext"});function useFormControlProvider(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:l,isReadOnly:a,...o}=e,s=(0,c.useId)(),u=t||`field-${s}`,m=`${u}-label`,f=`${u}-feedback`,h=`${u}-helptext`,[g,p]=(0,c.useState)(!1),[x,b]=(0,c.useState)(!1),[_,v]=(0,c.useState)(!1),F=(0,c.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,i.lq)(t,e=>{e&&b(!0)})}),[h]),y=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,d.PB)(_),"data-disabled":(0,d.PB)(l),"data-invalid":(0,d.PB)(r),"data-readonly":(0,d.PB)(a),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,l,_,r,a,m]),k=(0,c.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,i.lq)(t,e=>{e&&p(!0)}),"aria-live":"polite"}),[f]),C=(0,c.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),Z=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!l,isFocused:!!_,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:g,setHasFeedbackText:p,hasHelpText:x,setHasHelpText:b,id:u,labelId:m,feedbackId:f,helpTextId:h,htmlProps:o,getHelpTextProps:F,getErrorMessageProps:k,getRootProps:C,getLabelProps:y,getRequiredIndicatorProps:Z}}function useFormControl(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:i,...l}=useFormControlProps(e);return{...l,disabled:t,readOnly:r,required:i,"aria-invalid":(0,d.Qm)(n),"aria-required":(0,d.Qm)(i),"aria-readonly":(0,d.Qm)(r)}}function useFormControlProps(e){var t,n,r;let i=g(),{id:l,disabled:a,readOnly:o,required:s,isRequired:c,isInvalid:u,isReadOnly:m,isDisabled:f,onFocus:h,onBlur:p,...x}=e,b=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&b.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&b.push(i.helpTextId),{...x,"aria-describedby":b.join(" ")||void 0,id:null!=l?l:null==i?void 0:i.id,isDisabled:null!=(t=null!=a?a:f)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=o?o:m)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(r=null!=s?s:c)?r:null==i?void 0:i.isRequired,isInvalid:null!=u?u:null==i?void 0:i.isInvalid,onFocus:(0,d.v0)(null==i?void 0:i.onFocus,h),onBlur:(0,d.v0)(null==i?void 0:i.onBlur,p)}}(0,l.G)(function(e,t){let n=(0,a.jC)("Form",e),r=(0,o.Lr)(e),{getRootProps:i,htmlProps:l,...c}=useFormControlProvider(r),f=(0,d.cx)("chakra-form-control",e.className);return(0,u.jsx)(h,{value:c,children:(0,u.jsx)(m,{value:n,children:(0,u.jsx)(s.m.div,{...i({},t),className:f,__css:n.container})})})}).displayName="FormControl",(0,l.G)(function(e,t){let n=g(),r=f(),i=(0,d.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(s.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:i})}).displayName="FormHelperText";var p=(0,l.G)(function(e,t){let{htmlSize:n,...r}=e,i=(0,a.jC)("Input",r),l=(0,o.Lr)(r),c=useFormControl(l),m=(0,d.cx)("chakra-input",e.className);return(0,u.jsx)(s.m.input,{size:n,...c,__css:i.field,ref:t,className:m})});p.displayName="Input",p.id="Input"},23100:function(e,t,n){"use strict";n.d(t,{xu:function(){return a}});var r=n(51337),i=n(35059),l=n(85893),a=(0,r.m)("div");a.displayName="Box";var o=(0,i.G)(function(e,t){let{size:n,centerContent:r=!0,...i}=e;return(0,l.jsx)(a,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});o.displayName="Square",(0,i.G)(function(e,t){let{size:n,...r}=e;return(0,l.jsx)(o,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},89336:function(e,t,n){"use strict";n.d(t,{g:function(){return u}});var r=n(51337),i=n(85893),StackItem=e=>(0,i.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var l=n(33951),a="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[a]:(0,l.XQ)(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(n,e=>r[e])}}var o=n(35059),s=n(25432),d=n(67294);function getValidChildren(e){return d.Children.toArray(e).filter(e=>(0,d.isValidElement)(e))}var c=(0,o.G)((e,t)=>{let{isInline:n,direction:l,align:o,justify:c,spacing:u="0.5rem",wrap:m,children:f,divider:h,className:g,shouldWrapChildren:p,...x}=e,b=n?"row":null!=l?l:"column",_=(0,d.useMemo)(()=>getStackStyles({direction:b,spacing:u}),[b,u]),v=(0,d.useMemo)(()=>getDividerStyles({spacing:u,direction:b}),[u,b]),F=!!h,y=!p&&!F,k=(0,d.useMemo)(()=>{let e=getValidChildren(f);return y?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,l=n+1===e.length,a=(0,i.jsx)(StackItem,{children:t},r),o=p?a:t;if(!F)return o;let s=(0,d.cloneElement)(h,{__css:v});return(0,i.jsxs)(d.Fragment,{children:[o,l?null:s]},r)})},[h,v,F,y,p,f]),C=(0,s.cx)("chakra-stack",g);return(0,i.jsx)(r.m.div,{ref:t,display:"flex",alignItems:o,justifyContent:c,flexDirection:_.flexDirection,flexWrap:m,className:C,__css:F?{}:{[a]:_[a]},...x,children:k})});c.displayName="Stack";var u=(0,o.G)((e,t)=>(0,i.jsx)(c,{align:"center",...e,direction:"column",ref:t}));u.displayName="VStack"},33838:function(e,t,n){"use strict";n.d(t,{r:function(){return d}});var r=n(35059),i=n(54662),l=n(33179),a=n(51337),o=n(25432),s=n(85893),d=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:d,...c}=(0,l.Lr)(e);return(0,s.jsx)(a.m.a,{target:d?"_blank":void 0,rel:d?"noopener":void 0,ref:t,className:(0,o.cx)("chakra-link",r),...c,__css:n})});d.displayName="Link"}},function(e){e.O(0,[18,651,774,888,179],function(){return e(e.s=36429)}),_N_E=e.O()}]);