(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(46996)}])},46996:function(e,t,n){"use strict";n.r(t),n.d(t,{Div_ac2a89ea84667d600a059f034bd91dfe:function(){return Div_ac2a89ea84667d600a059f034bd91dfe},Fragment_1e6a34a6f7c1f908da0f2700f0377496:function(){return Fragment_1e6a34a6f7c1f908da0f2700f0377496},Fragment_cf53a535ae2e610a113dd361eb6ac95b:function(){return Fragment_cf53a535ae2e610a113dd361eb6ac95b},Toaster_89416713a273995fc60191a4cf573054:function(){return Toaster_89416713a273995fc60191a4cf573054},default:function(){return Component}});var a=n(82729),r=n(35944),i=n(67294),s=n(60687),c=n(6608),l=n(15637),d=n(94933),o=n(2546),h=n(98814),p=n(64998),x=n(45711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let g=(0,x.Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),m=(0,x.Z)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);var f=n(70917),u=n(64712),Z=n(73954),_=n(51842),b=n(204),y=n(14418),k=n(54641),C=n(93943),v=n(53948),w=n(29222),S=n(44416),z=n(1078),j=n(20623),F=n(17889),N=n(97822),W=n(91669),B=n(88911),R=n(23100),X=n(35059),I=n(33179),A=n(91639),D=n(51337),T=n(25432),P=n(85893),G=(0,X.G)(function(e,t){let{className:n,centerContent:a,...r}=(0,I.Lr)(e),i=(0,A.mq)("Container",e);return(0,P.jsx)(D.m.div,{ref:t,className:(0,T.cx)("chakra-container",n),...r,__css:{...i,...a&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});G.displayName="Container";var M=n(26137),Circle=e=>(0,P.jsx)(D.m.circle,{cx:50,cy:50,r:42,fill:"transparent",...e});function valueToPercent(e,t,n){return(e-t)*100/(n-t)}Circle.displayName="Circle";var L=(0,f.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),E=(0,f.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});function getProgressProps(e){let{value:t=0,min:n,max:a,valueText:r,getValueText:i,isIndeterminate:s,role:c="progressbar"}=e,l=valueToPercent(t,n,a);return{bind:{"data-indeterminate":s?"":void 0,"aria-valuemax":a,"aria-valuemin":n,"aria-valuenow":s?void 0:t,"aria-valuetext":(()=>{if(null!=t)return"function"==typeof i?i(t,l):r})(),role:c},percent:l,value:t}}(0,f.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),(0,f.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});var Shape=e=>{let{size:t,isIndeterminate:n,...a}=e;return(0,P.jsx)(D.m.svg,{viewBox:"0 0 100 100",__css:{width:t,height:t,animation:n?`${E} 2s linear infinite`:void 0},...a})};Shape.displayName="Shape";var O=(0,X.G)((e,t)=>{var n;let{size:a="48px",max:r=100,min:i=0,valueText:s,getValueText:c,value:l,capIsRound:d,children:o,thickness:h="10px",color:p="#0078d4",trackColor:x="#edebe9",isIndeterminate:g,...m}=e,f=getProgressProps({min:i,max:r,value:l,valueText:s,getValueText:c,isIndeterminate:g}),u=g?void 0:(null!=(n=f.percent)?n:0)*2.64,Z=null==u?void 0:`${u} ${264-u}`,_=g?{css:{animation:`${L} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:Z,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"};return(0,P.jsxs)(D.m.div,{ref:t,className:"chakra-progress",...f.bind,...m,__css:{display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:a},children:[(0,P.jsxs)(Shape,{size:a,isIndeterminate:g,children:[(0,P.jsx)(Circle,{stroke:x,strokeWidth:h,className:"chakra-progress__track"}),(0,P.jsx)(Circle,{stroke:p,strokeWidth:h,className:"chakra-progress__indicator",strokeLinecap:d?"round":void 0,opacity:0!==f.value||g?void 0:0,..._})]}),o]})});O.displayName="CircularProgress";var H=n(24093),$=n(62207),U=n(31963),q=n(84534),Q=n(44504),J=(0,X.G)((e,t)=>{let{className:n,...a}=e,{bodyId:r,setBodyMounted:s}=(0,$.vR)();(0,i.useEffect)(()=>(s(!0),()=>s(!1)),[s]);let c=(0,T.cx)("chakra-modal__body",n),l=(0,$.I_)();return(0,P.jsx)(D.m.div,{ref:t,className:c,id:r,...a,__css:l.body})});J.displayName="ModalBody";var K=n(47018),V=n(295),Y=n(41664),ee=n.n(Y),et=n(53798);n(54627);var en=n(44026),ea=n(9008),er=n.n(ea);function _templateObject(){let e=(0,a._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Div_ac2a89ea84667d600a059f034bd91dfe(){let[e,t]=(0,i.useContext)(s.DR);return(0,r.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: ".concat(t.length>0?t[t.length-1].message:""),children:(0,r.tZ)(Fragment_cf53a535ae2e610a113dd361eb6ac95b,{})})}function Fragment_cf53a535ae2e610a113dd361eb6ac95b(){let[e,t]=(0,i.useContext)(s.DR);return(0,r.tZ)(i.Fragment,{children:(0,c.oA)(t.length>0)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(l.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:"".concat(ei," 1s infinite")},size:32})}):(0,r.tZ)(i.Fragment,{})})}function Toaster_89416713a273995fc60191a4cf573054(){let[e,t]=(0,i.useContext)(s.kc);c.xL.__toast=u.A;let[n,a]=(0,i.useContext)(s.DR),l={description:"Check if server is reachable at ".concat((0,c.LH)(Z.Ks).href),closeButton:!0,duration:12e4,id:"websocket-error"},[d,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{a.length>=2?d||u.A.error("Cannot connect to server: ".concat(a.length>0?a[a.length-1].message:"","."),{...l,onDismiss:()=>o(!0)}):(u.A.dismiss("websocket-error"),o(!1))},[a]),(0,r.tZ)(u.x,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}let ei=(0,f.F4)(_templateObject());function Fragment_1e6a34a6f7c1f908da0f2700f0377496(){let e=(0,i.useContext)(s.M4.state),t=(0,i.useContext)(s.M4.state__app_state),[n,a]=(0,i.useContext)(s.DR),l=(0,i.useContext)(s.M4.state__calendar_n1),x=(0,i.useContext)(s.M4.state__app_state__chat_state),f=(0,i.useContext)(s.M4.state__app_state__chat_state__emotion_state),u=(0,i.useContext)(s.M4.state__calendar_n2),Z=(0,i.useRef)(null);c.xL.ref_chat_area=Z,(0,i.useEffect)(()=>(n([(0,c.ju)("state.app_state.chat_state.on_mount",{})]),()=>{}),[]);let X=(0,i.useRef)(null);c.xL.ref_message=X;let I=(0,i.useContext)(s.M4.state__modal_state),A=(0,i.useCallback)(e=>{let t=e.target;e.preventDefault();let a={...Object.fromEntries(new FormData(t).entries()),message:(0,c.eA)(c.xL.ref_message)};n([(0,c.ju)("state.app_state.chat_state.on_submit",{form_data:a})]),t.reset()});return(0,r.tZ)(i.Fragment,{children:(0,c.oA)(e.is_hydrated)?(0,r.tZ)(i.Fragment,{children:(0,c.oA)(t.token_is_valid)?(0,r.tZ)(i.Fragment,{children:(0,r.BX)(_.kC,{css:{justifyContent:"start",width:"100%",height:"100%",minHeight:"100vh"},direction:"column",children:[(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(b.k,{direction:"column",sx:{width:"100%",zIndex:"5",top:"0px",position:"fixed",alignItems:"left"},children:(0,r.BX)(_.kC,{css:{backgroundColor:"var(--mauve-1)",borderBottom:"1px solid var(--mauve-4)",width:"100%",alignItems:"center",padding:"7px 20px 7px 20px;"},gap:"5",children:[(0,r.tZ)(_.rU,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,r.BX)(ee(),{href:"/",passHref:!0,children:[(0,r.tZ)(y.X,{as:"h1",size:"4xl",sx:{weight:"bold",bgGradient:"linear(to-l, #f2ebc8, #de776c, #49312d)",bgClip:"text",display:["flex","flex","none","none","none","none"]},children:"iNP"}),(0,r.tZ)(y.X,{as:"h1",size:"4xl",sx:{weight:"bold",bgGradient:"linear(to-l, #f2ebc8, #de776c, #49312d)",bgClip:"text",display:["none","none","flex","flex","flex","flex"]},children:"iNotePal"})]})}),(0,r.BX)(k.U,{sx:{display:["none","none","flex","flex","flex","flex"]},children:[(0,r.tZ)(_.rU,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,r.tZ)(ee(),{href:"/analysis",passHref:!0,children:(0,r.tZ)(_.xv,{as:"p",color:"gray",children:"Analysis"})})}),(0,r.tZ)(_.rU,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,r.tZ)(ee(),{href:"/word_cloud",passHref:!0,children:(0,r.tZ)(_.xv,{as:"p",color:"gray",children:"Word Cloud"})})})]}),(0,r.tZ)(_.xu,{css:{flexGrow:"1"}}),(0,r.BX)(_.kC,{css:{alignItems:"center"},gap:"3",children:[(0,r.tZ)(_.kC,{children:(0,r.BX)(C.J,{children:[(0,r.tZ)(v.x,{children:(0,r.tZ)(w.z,{children:(0,r.tZ)(d.Z,{css:{color:"var(--current-color)"}})})}),(0,r.BX)(S.y,{children:[(0,r.tZ)(z.Y,{children:t.user_mail}),(0,r.tZ)(j.b,{children:(0,r.tZ)(w.z,{onClick:e=>n([(0,c.ju)("state.app_state.do_logout",{}),(0,c.ju)("state.app_state.check_login",{})],e,{}),sx:{width:"100%"},variant:"outline",children:"Logout"})}),(0,r.tZ)(F.u,{})]})]})}),(0,r.BX)(et.d.Root,{css:{spacing:"1"},direction:"left",children:[(0,r.tZ)(et.d.Trigger,{asChild:!0,children:(0,r.tZ)(w.z,{children:(0,r.tZ)(o.Z,{css:{color:"var(--current-color)"}})})}),(0,r.tZ)(et.d.Overlay,{css:{position:"fixed",left:"0",right:"0",bottom:"0",top:"0",z_index:50,background:"rgba(0, 0, 0, 0.5)",zIndex:"5"}}),(0,r.tZ)(et.d.Portal,{children:(0,r.tZ)(_.Q2,{css:{...en.Z.styles.global[":root"],...en.Z.styles.global.body},children:(0,r.tZ)(et.d.Content,{css:{left:"0",right:"auto",bottom:"0",top:"auto",position:"fixed",z_index:50,display:"flex",height:"100%",width:"27em",padding:"1em",backgroundColor:"#FFF"},children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:[(0,r.tZ)(y.X,{as:"h1",size:"4xl",sx:{weight:"bold",bgGradient:"linear(to-l, #f2ebc8, #de776c, #49312d)",bgClip:"text"},children:"iNotePal"}),(0,r.tZ)(N.i,{sx:{borderColor:"black"}}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.BX)(W.g,{sx:{width:"100%",display:["flex","flex","none","none","none","none"]},children:[(0,r.BX)(k.U,{children:[(0,r.tZ)(_.rU,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,r.tZ)(ee(),{href:"/analysis",passHref:!0,children:(0,r.tZ)(_.xv,{as:"p",color:"gray",children:"Analysis"})})}),(0,r.tZ)(_.rU,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,r.tZ)(ee(),{href:"/word_cloud",passHref:!0,children:(0,r.tZ)(_.xv,{as:"p",color:"gray",children:"Word Cloud"})})})]}),(0,r.tZ)(N.i,{sx:{borderColor:"black"}}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}})]}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:[(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{display:"flex",alignItems:"center",justifyContent:"center"},direction:"row",gap:"2",children:[(0,r.tZ)(h.Z,{css:{cursor:"pointer",color:"var(--current-color)"},onClick:e=>n([(0,c.ju)("state.calendar_n1.delta_calendar",{delta:-1})],e,{})}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.tZ)(_.xv,{as:"p",css:{width:"150px",display:"flex",justifyContent:"center"},children:"".concat(l.current_month," ").concat(l.year)}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.tZ)(p.Z,{css:{cursor:"pointer",color:"var(--current-color)"},onClick:e=>n([(0,c.ju)("state.calendar_n1.delta_calendar",{delta:1})],e,{})})]}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"월"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"화"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"수"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"목"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"금"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"토"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"일"})})]}),(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:l.monthdayscalendar.map((e,t)=>(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:e.map((e,t)=>(0,r.tZ)(i.Fragment,{children:(0,c.oA)(0===e)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"14px"},children:" "})})}):(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px",backgroundColor:(0,c.oA)(l.year===l.select_year&&l.month===l.select_month&&e===l.select_day)?"#e5988e":"rgba(255, 255, 255, 0.05)",cursor:"pointer"},onClick:t=>n([(0,c.ju)("state.calendar_n1.set_selected_date",{day:e}),(0,c.ju)("state.app_state.chat_state.switch_day_ymd",{year:l.year,month:l.month,day:e})],t,{}),size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"14px"},children:e})})})},t))},t))})]}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.tZ)(B.x,{as:"i",sx:{fontSize:"1.5em",weight:"bold"},children:"".concat(x.print_date_text,"의 감정")}),(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:Object.entries(f.colors).map((e,t)=>(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,r.tZ)(B.x,{sx:{color:e.at(1),fontSize:"1em"},children:"●"}),(0,r.tZ)(B.x,{sx:{fontSize:"1em"},children:e.at(0)})]},t))}),(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.kC,{css:{width:"100%",height:"30vh",flexWrap:"wrap"},gap:"2",children:f.get_box_params.map((e,t)=>(0,r.tZ)(R.xu,{sx:{background:e.at(1),borderRadius:"10px",width:"8em"}},t))})})]})})})})]})]})]})})}),(0,r.tZ)(_.W2,{css:{padding:"16px",marginTop:"30px"},size:"3"}),(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",css:{height:"100%",margin:"10px"},direction:"row",gap:"3",children:(0,r.tZ)(G,{sx:{width:["688px","688px","688px","688px","1136px","1136px"],maxWidth:["none","none","none","none","none","none"]},children:(0,r.BX)(M.M,{sx:{width:"100%",gridTemplateColumns:["repeat(1, 1fr)","repeat(1, 1fr)","repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]},children:[(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{"@media screen and (min-width: 0)":{display:"none"},"@media screen and (min-width: 30em)":{display:"none"},"@media screen and (min-width: 48em)":{display:"none"},"@media screen and (min-width: 62em)":{display:"none"},"@media screen and (min-width: 80em)":{display:"flex"},"@media screen and (min-width: 96em)":{display:"flex"}},direction:"column",gap:"3",children:[(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:[(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{display:"flex",alignItems:"center",justifyContent:"center"},direction:"row",gap:"2",children:[(0,r.tZ)(h.Z,{css:{cursor:"pointer",color:"var(--current-color)"},onClick:e=>n([(0,c.ju)("state.calendar_n2.delta_calendar",{delta:-1})],e,{})}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.tZ)(_.xv,{as:"p",css:{width:"150px",display:"flex",justifyContent:"center"},children:"".concat(u.current_month," ").concat(u.year)}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.tZ)(p.Z,{css:{cursor:"pointer",color:"var(--current-color)"},onClick:e=>n([(0,c.ju)("state.calendar_n2.delta_calendar",{delta:1})],e,{})})]}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"월"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"화"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"수"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"목"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"금"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"토"})}),(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"16px",fontWeight:"bold"},children:"일"})})]}),(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:u.monthdayscalendar.map((e,t)=>(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:e.map((e,t)=>(0,r.tZ)(i.Fragment,{children:(0,c.oA)(0===e)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px"},size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"14px"},children:" "})})}):(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.W2,{css:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",padding:"16px",backgroundColor:(0,c.oA)(u.year===u.select_year&&u.month===u.select_month&&e===u.select_day)?"#e5988e":"rgba(255, 255, 255, 0.05)",cursor:"pointer"},onClick:t=>n([(0,c.ju)("state.calendar_n2.set_selected_date",{day:e}),(0,c.ju)("state.app_state.chat_state.switch_day_ymd",{year:u.year,month:u.month,day:e})],t,{}),size:"3",children:(0,r.tZ)(_.xv,{align:"center",as:"p",css:{fontSize:"14px"},children:e})})})},t))},t))})]}),(0,r.tZ)(B.x,{as:"i",sx:{fontSize:"1.5em",weight:"bold"},children:"".concat(x.print_date_text,"의 감정")}),(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:Object.entries(f.colors).map((e,t)=>(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,r.tZ)(B.x,{sx:{color:e.at(1),fontSize:"1em"},children:"●"}),(0,r.tZ)(B.x,{sx:{fontSize:"1em"},children:e.at(0)})]},t))}),(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.kC,{css:{width:"100%",height:"30vh",flexWrap:"wrap"},gap:"2",children:f.get_box_params.map((e,t)=>(0,r.tZ)(R.xu,{sx:{background:e.at(1),borderRadius:"10px",width:"8em"}},t))})})]}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{height:"80vh",width:"100%"},direction:"column",gap:"3",children:[(0,r.tZ)(i.Fragment,{children:(0,c.oA)(x.has_past_chats)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:x.past_chats.map((e,t)=>(0,r.tZ)(w.z,{onClick:t=>n([(0,c.ju)("state.app_state.chat_state.select_past_card",{chat_id:e.at(1).id})],t,{}),sx:{background:(0,c.oA)(x.current_chat.id===e.at(1).id)?"#e5988e":"#f2ebc8",color:"#49312d"},children:e.at(0)},t))})}):(0,r.tZ)(i.Fragment,{})}),(0,r.tZ)(y.X,{size:"xl",sx:{weight:"bold",align:"center",paddingBottom:"2vh"},children:x.print_date_text}),(0,r.tZ)(_.xr,{css:{width:"100%",minHeight:"500px"},id:"chat_area",ref:Z,children:(0,r.tZ)(i.Fragment,{children:(0,c.oA)(x.is_creating)?(0,r.tZ)(i.Fragment,{children:(0,r.BX)(_.kC,{align:"center",className:"rx-Stack",direction:"row",gap:"3",children:[(0,r.tZ)(O,{isIndeterminate:x.is_creating}),(0,r.tZ)(_.xv,{as:"p",children:"친구가 말 거는 중.."})]})}):(0,r.tZ)(i.Fragment,{children:x.current_messages.map((e,t)=>(0,r.tZ)(i.Fragment,{children:(0,c.oA)("user"===e.at(0))?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.kC,{align:"end",className:"rx-Stack",css:{width:"100%"},direction:"column",gap:"3",children:(0,r.BX)(_.kC,{align:"end",className:"rx-Stack",css:{width:"100%"},direction:"row",justify:"end",gap:"3",children:[(0,r.tZ)(_.xv,{as:"p",css:{padding:"1em",borderRadius:"5px",marginTop:"0.5em",marginBottom:"0.5em",boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px",maxWidth:"30em",display:"inline-block",marginLeft:"20%",backgroundColor:"var(--gray-4)",width:"100%",textAlign:"right"},children:e.at(1)}),(0,r.tZ)(d.Z,{css:{color:"var(--current-color)"}})]})})}):(0,r.tZ)(i.Fragment,{children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,r.tZ)(g,{css:{color:"var(--current-color)"}}),(0,r.tZ)(_.xv,{as:"p",css:{padding:"1em",borderRadius:"5px",marginTop:"0.5em",marginBottom:"0.5em",boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px",maxWidth:"30em",display:"inline-block",marginRight:"20%",backgroundColor:"#ebb9b0",width:"100%"},children:e.at(1)})]})})},t))})})}),(0,r.BX)(_.kC,{align:"center",className:"rx-Stack",css:{width:"100%"},direction:"column",gap:"3",children:[(0,r.tZ)(R.xu,{as:"form",onSubmit:A,sx:{width:"100%"},children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,r.tZ)(H.I,{id:"message",isDisabled:!x.is_exist_chat,isRequired:!0,placeholder:"대화를 입력하세요.",ref:X,sx:{width:"100%"}}),(0,r.tZ)(i.Fragment,{children:(0,c.oA)(e.is_hydrated)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(w.z,{isDisabled:!x.is_exist_chat,isLoading:x.is_waiting,type:"submit",variant:"outline",children:(0,r.tZ)(m,{css:{color:"var(--current-color)"}})})}):(0,r.tZ)(i.Fragment,{})})]})}),(0,r.tZ)(i.Fragment,{children:(0,c.oA)(x.is_closed)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:(0,r.tZ)(w.z,{onClick:e=>n([(0,c.ju)("state.app_state.chat_state.start_new_chat",{})],e,{}),size:"sm",sx:{background:"#ebb9b0",color:"#49312d",borderRadius:"md"},children:"대화 새로 시작하기"})})}):(0,r.tZ)(i.Fragment,{children:(0,c.oA)(x.current_messages.length>2)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(w.z,{onClick:e=>n([(0,c.ju)("state.app_state.chat_state.evaluate_chat",{}),(0,c.ju)("state.modal_state.change",{})],e,{}),size:"sm",sx:{background:"#ebb9b0",color:"#49312d",borderRadius:"md"},children:"대화 마치기"})}):(0,r.tZ)(i.Fragment,{})})}),(0,r.tZ)($.u_,{isCentered:!0,isOpen:I.show,children:(0,r.tZ)(U.Z,{children:(0,r.BX)(q.h,{children:[(0,r.tZ)(Q.x,{children:"오늘의 감정"}),(0,r.tZ)(J,{children:(0,r.tZ)(_.kC,{children:(0,r.tZ)(R.xu,{sx:{background:f.get_box_params_for_one,borderRadius:"10px",width:"100%",height:"10vh"}})})}),(0,r.tZ)(K.m,{children:(0,r.tZ)(w.z,{onClick:e=>n([(0,c.ju)("state.modal_state.change",{})],e,{}),children:"닫기"})})]})})})]})]})]})})}),(0,r.tZ)(_.xu,{css:{flexGrow:1}})]})}):(0,r.tZ)(i.Fragment,{})}):(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(b.k,{align:"center",justify:"center",sx:{height:"100vh",weight:"100vw"},children:(0,r.tZ)(V.$,{})})})})}function Component(){return(0,r.BX)(i.Fragment,{children:[(0,r.BX)(i.Fragment,{children:[(0,r.tZ)(Div_ac2a89ea84667d600a059f034bd91dfe,{}),(0,r.tZ)(Toaster_89416713a273995fc60191a4cf573054,{})]}),(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(Fragment_1e6a34a6f7c1f908da0f2700f0377496,{})}),(0,r.BX)(er(),{children:[(0,r.tZ)("title",{children:"App | Index"}),(0,r.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},26137:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var a=n(35059),r=n(51337),i=n(85893),s=(0,a.G)(function(e,t){let{templateAreas:n,gap:a,rowGap:s,columnGap:c,column:l,row:d,autoFlow:o,autoRows:h,templateRows:p,autoColumns:x,templateColumns:g,...m}=e;return(0,i.jsx)(r.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:s,gridColumnGap:c,gridAutoColumns:x,gridColumn:l,gridRow:d,gridAutoFlow:o,gridAutoRows:h,gridTemplateRows:p,gridTemplateColumns:g},...m})});s.displayName="Grid";var c=n(75119),l=n(34629),d=n(33951),o=(0,a.G)(function(e,t){let{columns:n,spacingX:a,spacingY:r,spacing:l,minChildWidth:d,...o}=e,h=(0,c.F)(),p=d?widthToColumns(d,h):countToColumns(n);return(0,i.jsx)(s,{ref:t,gap:l,columnGap:a,rowGap:r,templateColumns:p,...o})});function toPx(e){return"number"==typeof e?`${e}px`:e}function widthToColumns(e,t){return(0,d.XQ)(e,e=>{let n=(0,l.LP)("sizes",e,toPx(e))(t);return null===e?null:`repeat(auto-fit, minmax(${n}, 1fr))`})}function countToColumns(e){return(0,d.XQ)(e,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)}o.displayName="SimpleGrid"}},function(e){e.O(0,[477,674,512,574,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);