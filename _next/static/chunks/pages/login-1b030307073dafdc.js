(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{36429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(37644)}])},37644:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_cb3371db39358e81fdc3459da1c84dd9:function(){return Fragment_cb3371db39358e81fdc3459da1c84dd9},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},default:function(){return Component}});var r=n(82729),i=n(35944),a=n(67294),o=n(60687),c=n(6608),l=n(15637),d=n(70917),s=n(39177),m=n(6445),u=n(73954),g=n(31717),f=n(9564),h=n(23100),p=n(204),x=n(14418),_=n(31686),b=n(29222),v=n(33838),Z=n(41664),k=n.n(Z),y=n(9008),F=n.n(y);function _templateObject(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Fragment_cb3371db39358e81fdc3459da1c84dd9(){let e=(0,a.useContext)(o.M4.state),t=(0,a.useContext)(o.M4.state__app_state__login_state),[n,r]=(0,a.useContext)(o.DR),l=(0,a.useRef)(null);c.xL.ref_email=l;let d=(0,a.useRef)(null);c.xL.ref_password=d;let s=(0,a.useCallback)(e=>{let t=e.target;e.preventDefault();let r={...Object.fromEntries(new FormData(t).entries()),email:(0,c.eA)(c.xL.ref_email),password:(0,c.eA)(c.xL.ref_password)};n([(0,c.ju)("state.app_state.login_state.on_submit",{form_data:r})])});return(0,i.tZ)(a.Fragment,{children:(0,c.oA)(e.is_hydrated)?(0,i.tZ)(a.Fragment,{children:(0,i.BX)(g.g,{sx:{paddingTop:"3vh"},children:[(0,i.tZ)(a.Fragment,{children:(0,c.oA)(""!==t.error_message)?(0,i.tZ)(a.Fragment,{children:(0,i.tZ)(f.x,{children:t.error_message})}):(0,i.tZ)(a.Fragment,{})}),(0,i.tZ)(h.xu,{as:"form",onSubmit:s,sx:{width:"80vw"},children:(0,i.BX)(a.Fragment,{children:[(0,i.tZ)(p.k,{sx:{paddingBottom:"10vh"},children:(0,i.tZ)(x.X,{as:"h1",size:"4xl",sx:{weight:"bold",align:"left"},children:"Pal-ette"})}),(0,i.tZ)(p.k,{sx:{paddingBottom:"2vh"},children:(0,i.tZ)(x.X,{as:"h1",size:"lg",sx:{align:"left"},children:"Log In"})}),(0,i.BX)(p.k,{direction:"column",sx:{paddingBottom:"2vh"},children:[(0,i.tZ)(f.x,{sx:{size:"md",weight:"medium",align:"left"},children:"Email Address"}),(0,i.tZ)(_.I,{id:"email",placeholder:"email",ref:l,type:"email"}),(0,i.tZ)(f.x,{sx:{size:"md",weight:"bold",align:"left"},children:"Password"}),(0,i.tZ)(_.I,{id:"password",placeholder:"password",ref:d,type:"password"})]}),(0,i.tZ)(p.k,{children:(0,i.tZ)(b.z,{isLoading:t.is_loading,size:"lg",type:"submit",variant:"outline",children:"Login"})})]})}),(0,i.tZ)(v.r,{as:k(),href:"/register",children:"No account yet? Sign up."})]})}):(0,i.tZ)(a.Fragment,{})})}function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,a.useContext)(o.DR);return(0,i.tZ)(a.Fragment,{children:(0,c.oA)(t.length>0)?(0,i.tZ)(a.Fragment,{children:(0,i.tZ)(l.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(w," 1s infinite")},size:32})}):(0,i.tZ)(a.Fragment,{})})}function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,a.useContext)(o.DR);return(0,i.tZ)(a.Fragment,{children:(0,c.oA)(t.length>=2)?(0,i.tZ)(a.Fragment,{children:(0,i.tZ)(s.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,i.BX)(s.Vq.Content,{children:[(0,i.tZ)(s.Vq.Title,{children:"Connection Error"}),(0,i.BX)(m.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,c.LH)(u.Ks).href]})]})})}):(0,i.tZ)(a.Fragment,{})})}let w=(0,d.F4)(_templateObject());function Component(){return(0,i.BX)(a.Fragment,{children:[(0,i.BX)(a.Fragment,{children:[(0,i.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,i.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,i.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,i.tZ)(a.Fragment,{children:(0,i.tZ)(Fragment_cb3371db39358e81fdc3459da1c84dd9,{})}),(0,i.BX)(F(),{children:[(0,i.tZ)("title",{children:"App | Login"}),(0,i.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},31717:function(e,t,n){"use strict";n.d(t,{g:function(){return s}});var r=n(51337),i=n(85893),StackItem=e=>(0,i.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var a=n(25432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,a.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var o="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[o]:mapResponsive(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(n,e=>r[e])}}var c=n(35059),l=n(67294);function getValidChildren(e){return l.Children.toArray(e).filter(e=>(0,l.isValidElement)(e))}var d=(0,c.G)((e,t)=>{let{isInline:n,direction:c,align:d,justify:s,spacing:m="0.5rem",wrap:u,children:g,divider:f,className:h,shouldWrapChildren:p,...x}=e,_=n?"row":null!=c?c:"column",b=(0,l.useMemo)(()=>getStackStyles({direction:_,spacing:m}),[_,m]),v=(0,l.useMemo)(()=>getDividerStyles({spacing:m,direction:_}),[m,_]),Z=!!f,k=!p&&!Z,y=(0,l.useMemo)(()=>{let e=getValidChildren(g);return k?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,a=n+1===e.length,o=(0,i.jsx)(StackItem,{children:t},r),c=p?o:t;if(!Z)return c;let d=(0,l.cloneElement)(f,{__css:v});return(0,i.jsxs)(l.Fragment,{children:[c,a?null:d]},r)})},[f,v,Z,k,p,g]),F=(0,a.cx)("chakra-stack",h);return(0,i.jsx)(r.m.div,{ref:t,display:"flex",alignItems:d,justifyContent:s,flexDirection:b.flexDirection,flexWrap:u,className:F,__css:Z?{}:{[o]:b[o]},...x,children:y})});d.displayName="Stack";var s=(0,c.G)((e,t)=>(0,i.jsx)(d,{align:"center",...e,direction:"column",ref:t}));s.displayName="VStack"},9564:function(e,t,n){"use strict";n.d(t,{x:function(){return d}});var r=n(35059),i=n(54662),a=n(33179),o=n(51337),c=n(25432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var l=n(85893),d=(0,r.G)(function(e,t){let n=(0,i.mq)("Text",e),{className:r,align:d,decoration:s,casing:m,...u}=(0,a.Lr)(e),g=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(o.m.p,{ref:t,className:(0,c.cx)("chakra-text",e.className),...g,...u,__css:n})});d.displayName="Text"},33838:function(e,t,n){"use strict";n.d(t,{r:function(){return d}});var r=n(35059),i=n(54662),a=n(33179),o=n(51337),c=n(25432),l=n(85893),d=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:d,...s}=(0,a.Lr)(e);return(0,l.jsx)(o.m.a,{target:d?"_blank":void 0,rel:d?"noopener":void 0,ref:t,className:(0,c.cx)("chakra-link",r),...s,__css:n})});d.displayName="Link"}},function(e){e.O(0,[345,744,774,888,179],function(){return e(e.s=36429)}),_N_E=e.O()}]);