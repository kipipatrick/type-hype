(this["webpackJsonptype-racer"]=this["webpackJsonptype-racer"]||[]).push([[0],{192:function(e,t,n){e.exports=n(363)},197:function(e,t,n){},198:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),i=n.n(o),c=n(16),l=n.n(c),s=(n(197),n(95)),u=n(27),m=(n(198),n(375)),d=n(376),f=n(49),p=n(368),h=n(373),g=n(62),y=n(377),E=n(378),v=n(96),b=n(97),w=[{name:"Rain Sindayen",email:"rain@sindayen.com",password:"P@ssw0rd123!",currentScore:110},{name:"Kipi Patrick",email:"kipi@patrick.com",password:"P@ssw0rd123!",currentScore:115}],S=function(){function e(){Object(v.a)(this,e)}return Object(b.a)(e,null,[{key:"login",value:function(e,t){var n=w.filter((function(t){return t.email===e}));if(n[0]){if(n[0].password===t)return sessionStorage.setItem("CURRENT_USER",JSON.stringify(n[0])),{name:n[0].name,email:n[0].email};throw new Error("Username or Password may be incorrect. Please try again.")}throw new Error("User Not Found")}}]),e}(),O="@@LOGIN_REQUEST",j="@@LOGIN_SUCCESS",C="@@LOGIN_FAILED",k="@@CLEAR",A=function(e,t,n){return function(a){try{console.log(e,t);var r=S.login(e,t);r&&n.push("/game"),a({type:j,payload:r})}catch(o){a({type:C,payload:o.message})}}},x=function(){return function(e){try{e({type:k})}catch(t){console.log(t.message)}}},T=n(36),W=function(){var e=Object(T.c)(),t=Object(u.e)(),n=p.a.useForm(),a=Object(f.a)(n,1)[0],r=Object(o.useState)(),c=Object(f.a)(r,2)[1];Object(o.useEffect)((function(){c({})}),[]);return i.a.createElement(p.a,{form:a,name:"horizontal_login",layout:"inline",onFinish:function(n){e(A(n.username,n.password,t))}},i.a.createElement(p.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}]},i.a.createElement(h.a,{prefix:i.a.createElement(y.a,{className:"site-form-item-icon"}),placeholder:"Username"})),i.a.createElement(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},i.a.createElement(h.a,{prefix:i.a.createElement(E.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),i.a.createElement(p.a.Item,{shouldUpdate:!0},(function(){return i.a.createElement(g.a,{style:{background:"#8E6AAC",color:"white"},htmlType:"submit",disabled:!a.isFieldsTouched(!0)||a.getFieldsError().filter((function(e){return e.errors.length})).length},"Log in")})))},z=m.a.Content,R=function(e){var t=Object(T.d)((function(e){return e.auth.error})),n=Object(T.c)();return i.a.createElement(m.a,null,i.a.createElement(z,{style:{backgroundColor:"#8E6AAC",width:"100vw",height:"100vh",backgroundSize:"cover",backgroundOrigin:"content-box",display:"flex",overflow:"hidden"}},i.a.createElement("div",{style:{height:"100vh",width:"50vw",margin:20,backgroundRepeat:"no-repeat"}}),i.a.createElement("div",{style:{marginLeft:"5vw"}},i.a.createElement("div",{style:{color:"white",fontSize:50,width:"50vw",lineHeight:.8,justifyContent:"start",marginTop:"20vh",fontWeight:700}},"TYPE+HYPE"),i.a.createElement("div",{style:{color:"white",fontSize:20,width:"40vw",justifyContent:"start",marginTop:"20vh"}},"Can you type fast? Or it is just a hype?"),i.a.createElement("div",{style:{color:"white",fontSize:30,width:"40vw",justifyContent:"start",marginBottom:"10vh",fontWeight:600}},"Try it now!"),i.a.createElement("div",{style:{width:"35vw",justifyContent:"start",marginBottom:"5vh",fontWeight:400}},t?i.a.createElement(d.a,{closable:!0,onClose:function(){return n(x())},type:"error",message:t}):""),i.a.createElement("div",{style:{color:"white",width:"50vw",justifyContent:"start"}},i.a.createElement(W,null)))))},I=n(365),M=n(366),U=n(371),L=n(41),B=n.n(L),N=n(64),P=n(114),_=n.n(P),Y="https://my-json-server.typicode.com/kipipatrick/type-hype",F=function(){function e(){Object(v.a)(this,e)}return Object(b.a)(e,null,[{key:"getText",value:function(){var e=Object(N.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://baconipsum.com/api/?type=all-meat&start-with-lorem=1");case 2:return t=e.sent,e.abrupt("return",t.data[Math.floor(4*Math.random())+1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"saveScore",value:function(){var e=Object(N.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(sessionStorage.getItem("CURRENT_USER")),e.next=3,_.a.post("".concat(Y,"/scores"),{id:(new Date).getTime(),name:n.name,score:t},{headers:{"Content-header":"application/json"}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getScores",value:function(){var e=Object(N.a)(B.a.mark((function e(){var t,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(sessionStorage.getItem("CURRENT_USER")),e.next=3,_.a.get("".concat(Y,"/scores"));case 3:return n=e.sent,e.abrupt("return",n.data.filter((function(e){return e.name===t.name})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),D="@@GAME_REQUEST",G="@@GAME_SUCCESS",J="@@GAME_SUCCESS_SCORES",H="@@SAVE_GAME",q=function(){return function(){var e=Object(N.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:D}),e.next=4,F.getText();case 4:n=e.sent,t({type:G,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},K=function(e,t){return function(){var t=Object(N.a)(B.a.mark((function t(n){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:D}),t.next=4,F.saveScore(e);case 4:a=t.sent,n({type:H,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(){return function(){var e=Object(N.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:D}),e.next=4,F.getScores();case 4:n=e.sent,t({type:J,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},V=n(370),$=n(367),X=n(374),Z=n(372),ee=n(109),te=n.n(ee),ne=function(e){var t,n=Object(T.c)(),a=Object(T.d)((function(e){return e.game.text}),T.b),r=Object(T.d)((function(e){return e.game.saved}),T.b),o=(Object(u.e)(),i.a.useState("")),c=Object(f.a)(o,2),l=c[0],s=c[1],m=i.a.useState(60),d=Object(f.a)(m,2),p=d[0],y=d[1],E=i.a.useState(0),v=Object(f.a)(E,2),b=v[0],w=v[1],S=i.a.useState(!1),O=Object(f.a)(S,2),j=O[0],C=O[1],k=i.a.useState(!1),A=Object(f.a)(k,2),x=A[0],W=A[1],z=a?a.split(" ").filter((function(e){return""!==e})):[],R=a?l.split(" ").filter((function(e){return""!==e})):[];function L(e,t){var n=!1;return e.length===t.length&&(t.map((function(t,a){n=t===e[a]})),n)}function B(){n(K(N()/(b/60))),W(!1)}function N(){var e=0;return z.map((function(t,n){t===R[n]&&(e+=1)})),e}return i.a.useEffect((function(){var e=null;return j&&p>0&&(e=setInterval((function(){y((function(e){return e-1})),w((function(e){return e+1}))}),1e3),L(R,z)&&C(!1)),function(){return clearInterval(e)}}),[j,p]),i.a.useEffect((function(){n(q())}),[]),i.a.createElement("div",null,i.a.createElement(V.a,{title:i.a.createElement("div",{style:{color:"#8E6AAC"}},"Your Results"),style:{padding:1,backgroundColor:"#8E6AAC"},visible:x,onOk:function(){return B()},onCancel:function(){return B()},okText:"Save and Retry",cancelButtonProps:{style:{display:"none"}},okButtonProps:{size:"large",style:{background:"#8E6AAC",color:"white"}}},i.a.createElement(I.a,{gutter:16},i.a.createElement(M.a,{span:24,style:{justifyContent:"center",display:"flex"}},i.a.createElement("div",null,i.a.createElement("div",{style:{justifyContent:"center",display:"flex",fontSize:20,color:"#8E6AAC",fontWeight:400}},N()/(b/60),i.a.createElement("span",{style:{color:"grey",fontWeight:200,fontSize:20}},"   \xa0WPM")),i.a.createElement(U.a,{value:(t=N()/(b/60),console.log(t),t>=40?5:t<40&&t>23?3:t<=23?1:void 0)})))),i.a.createElement("div",{style:{color:"#8E6AAC",fontWeight:400,fontSize:16,marginTop:10,marginBottom:10}},"What your score means"),i.a.createElement($.b,{itemLayout:"horizontal",dataSource:[{rate:5,description:"Fast",minLimit:40,maxLimit:"or more"},{rate:3,description:"Moderate",minLimit:24,maxLimit:"to 39"},{rate:1,description:"Slow",minLimit:23,maxLimit:"or less"}],renderItem:function(e){return i.a.createElement($.b.Item,null,i.a.createElement($.b.Item.Meta,{avatar:i.a.createElement(U.a,{value:e.rate}),title:i.a.createElement("span",{style:{color:"#8E6AAC",fontWeight:600}},e.description),description:"You can correctly encode ".concat(e.minLimit," ").concat(e.maxLimit," words per minute")}))}})),i.a.createElement(V.a,{title:i.a.createElement("div",{style:{color:"#8E6AAC"}},"Results Saved"),style:{padding:1},okText:"OK",cancelButtonProps:{style:{display:"none"}},okButtonProps:{size:"large",style:{background:"#8E6AAC",color:"white"}},visible:r,onOk:function(){window.location.reload()}},i.a.createElement("div",{style:{fontSize:14,fontWeight:600}},"ID : ",r?r.id:""),i.a.createElement("div",{style:{fontSize:14,fontWeight:600}},"NAME : ",r?r.name:""),i.a.createElement("div",{style:{fontSize:14,fontWeight:600}},"Score : ",r?r.score:""),i.a.createElement("div",{style:{fontSize:14,fontWeight:600}},"DATE: ",r?te()(r.id).format("DD MMM YYYY hh:mm A"):"")),i.a.createElement(I.a,{gutter:16,style:{marginTop:20,marginBottom:20}},i.a.createElement(M.a,{span:5},i.a.createElement(X.a,{round:!0,style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Total Words",value:z.length})),i.a.createElement(M.a,{span:5},i.a.createElement(X.a,{style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Correct Words",value:N()})),i.a.createElement(M.a,{span:5},i.a.createElement(X.a,{style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Incorrect Words",value:R.length-N()})),i.a.createElement(M.a,{span:5},i.a.createElement(X.a,{style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Time Remaining",value:p+"s"}))),i.a.createElement("div",{style:{marginBottom:20,fontSize:20,fontWeight:600,color:"white"}},"Try this!"),i.a.createElement("div",{style:{marginBottom:20}},z.map((function(e,t){return i.a.createElement("span",{key:t,style:{color:(n=t,R[n]&&R[n].replace(/\s/g,"")===z[n].replace(/\s/g,"")?"#25343E":"white"),fontSize:16,fontWeight:400}},e," ");var n}))),i.a.createElement("div",{style:{marginBottom:20,fontSize:20,fontWeight:600,color:"white"}},"Type here to start time!"),z.length>0?i.a.createElement("div",null,i.a.createElement(I.a,{gutter:16},i.a.createElement(M.a,{span:18},i.a.createElement(h.a.TextArea,{disabled:0===p||L(R,z),onClick:function(){return C(!0)},value:l,onChange:function(e){return function(e){s(e)}(e.target.value)},multiple:!0,rows:5})),i.a.createElement(M.a,{span:6},i.a.createElement(Z.a,{type:"circle",strokeColor:{"0%":"white","100%":"#8E6AAC"},percent:(R.length/z.length*100).toFixed(0)}))),i.a.createElement("div",{style:{color:"white",fontSize:16,fontWeight:"bold",marginTop:"5vh",marginBottom:"5vh",display:0===p||L(R,z)?"":"none"}},i.a.createElement(g.a,{size:"large",style:{background:"#8E6AAC",color:"white"},onClick:function(){return W(!0)}},"Show Results"))):"")},ae=function(){var e=JSON.parse(sessionStorage.getItem("CURRENT_USER")),t=Object(T.d)((function(e){return e.game.scores?e.game.scores:[]}),T.b),n=Object(u.e)(),a=i.a.useState(!1),r=Object(f.a)(a,2),o=r[0],c=r[1],l=Object(T.c)();return i.a.useEffect((function(){l(Q())}),[]),e||n.push("/"),i.a.createElement(I.a,{gutter:16,style:{backgroundColor:"#8E6AAC",padding:20,overflow:"hidden"}},i.a.createElement(M.a,{style:{padding:20,height:"100vh"},span:6},i.a.createElement("div",{style:{color:"white",fontSize:50,fontWeight:"600"}},"Type+Hype"),i.a.createElement("div",{style:{color:"white",fontSize:20,fontWeight:600,marginTop:"5vh"}},"Your Last 5 Records"),i.a.createElement("div",{style:{color:"white",fontSize:14,marginTop:10,marginBottom:10,minHeight:"30vh"}},0===t.length?i.a.createElement("div",{style:{fontWeight:300}}," No game recorded. "):"",t.sort((function(e,t){return t.id-e.id})).slice(0,5).map((function(e,t){return i.a.createElement("div",{key:t,style:{fontSize:12,fontWeight:600,marginBottom:20}},parseFloat(e.score).toFixed(0)+" WPM",i.a.createElement("span",{style:{fontWeight:300}}," ","(",te()(e.id).format("DD MMMM YYYY hh:mm "),")")," ",i.a.createElement("div",null,i.a.createElement(U.a,{value:(n=e.score,n>=40?5:n<40&&n>23?3:n<=23?1:void 0)})));var n}))),i.a.createElement("div",{style:{color:"white",fontSize:20,fontWeight:600}},"About Type+Hype"),i.a.createElement("div",{style:{color:"white",fontSize:14}},"React.js based application that will allow user to improve his/her typing skills, by measuring current progress and reviewing history of previous games.")),i.a.createElement(M.a,{style:{backgroundColor:"#8E6AAC",height:"100vh",padding:20,overflow:"hidden"},span:18},i.a.createElement("div",{style:{fontSize:30,color:"white",marginTop:20}}," ","Welcome! ",i.a.createElement("span",{style:{fontWeight:600}},e.name),i.a.createElement(g.a,{size:"large",onClick:function(){return l(function(e){return function(t){try{sessionStorage.removeItem("CURRENT_USER"),e.push("/")}catch(n){console.log(n.message)}}}(n))},style:{float:"right",background:"#8E6AAC",color:"white"}},"Logout")),o?"":i.a.createElement("div",{style:{fontSize:14,color:"white",marginTop:"5vh",fontWeight:600,width:"50%"}},"Tests the your typing speed and accuracy. Try it now to see how many correct words you can type in a minute. Get a free assessment after your type test--are you all hype or can you really type?"),i.a.createElement("div",{style:{color:"white",fontSize:16,fontWeight:"bold",marginTop:"5vh",marginBottom:"5vh",display:o?"none":""}},i.a.createElement(g.a,{size:"large",style:{background:"#8E6AAC",color:"white"},onClick:function(){return c(!0)}},"Start Typing Test")),o?i.a.createElement(ne,null):""))},re=n(61),oe=n(183),ie=n(185),ce=n.n(ie),le=n(184),se=n(46),ue=n(39),me=n(369),de={user:null,loading:!1,error:null},fe=Object(me.a)((a={},Object(se.a)(a,O,(function(e,t){return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0})})),Object(se.a)(a,j,(function(e,t){return Object(ue.a)(Object(ue.a)({},e),{},{user:t.payload})})),Object(se.a)(a,C,(function(e,t){return Object(ue.a)(Object(ue.a)({},e),{},{error:t.payload})})),Object(se.a)(a,k,(function(e,t){return{initialState:de}})),a),de),pe=Object(me.a)((r={},Object(se.a)(r,D,(function(e,t){return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0})})),Object(se.a)(r,G,(function(e,t){return Object(ue.a)(Object(ue.a)({},e),{},{text:t.payload})})),Object(se.a)(r,H,(function(e,t){return Object(ue.a)(Object(ue.a)({},e),{},{saved:t.payload})})),Object(se.a)(r,J,(function(e,t){return Object(ue.a)(Object(ue.a)({},e),{},{scores:t.payload})})),r),{text:null,loading:!1,error:null,scores:[],saved:null}),he=Object(re.c)({auth:fe,game:pe}),ge=ce()();var ye=function(){return i.a.createElement(T.a,{store:Object(re.e)(he,e,Object(re.d)(Object(re.a)(le.a,Object(oe.routerMiddleware)(ge)),window.devToolsExtension?window.devToolsExtension():function(e){return e}))},i.a.createElement(s.a,{basename:"/type-hype"},i.a.createElement(u.a,{exact:!0,path:"/",component:R}),i.a.createElement(u.a,{exact:!0,path:"/game",component:ae})));var e};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(362);l.a.render(i.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[192,1,2]]]);
//# sourceMappingURL=main.1f846f51.chunk.js.map