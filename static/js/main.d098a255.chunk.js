(this["webpackJsonptype-racer"]=this["webpackJsonptype-racer"]||[]).push([[0],{191:function(e,t,n){e.exports=n(360)},196:function(e,t,n){},197:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),c=n.n(o),i=n(14),l=n.n(i),s=(n(196),n(92)),u=n(29),m=(n(197),n(372)),p=n(48),f=n(365),d=n(370),h=n(61),g=n(373),v=n(374),E=n(93),y=n(94),b=[{name:"Rain Sindayen",email:"rain@sindayen.com",password:"P@ssw0rd123!",currentScore:110},{name:"Kipi Patrick",email:"kipi@patrick.com",password:"P@ssw0rd123!",currentScore:115}],w=function(){function e(){Object(E.a)(this,e)}return Object(y.a)(e,null,[{key:"login",value:function(e,t){var n=b.filter((function(t){return t.email===e}));if(n[0]){if(n[0].password===t)return sessionStorage.setItem("CURRENT_USER",JSON.stringify(n[0])),n[0];throw new Error("Username or Password may be incorrect. Please try again.")}throw console.log("error"),new Error("User Not Found")}}]),e}(),S="@@LOGIN_REQUEST",O="@@LOGIN_SUCCESS",j=function(e,t,n){return function(a){try{console.log(e,t);var r=w.login(e,t);r&&n.push("/game"),a({type:O,payload:r})}catch(o){console.log(o.message)}}},k=n(45),C=function(){var e=Object(k.c)(),t=Object(u.e)(),n=f.a.useForm(),a=Object(p.a)(n,1)[0],r=Object(o.useState)(),i=Object(p.a)(r,2)[1];Object(o.useEffect)((function(){i({})}),[]);return c.a.createElement(f.a,{form:a,name:"horizontal_login",layout:"inline",onFinish:function(n){e(j(n.username,n.password,t))}},c.a.createElement(f.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}]},c.a.createElement(d.a,{prefix:c.a.createElement(g.a,{className:"site-form-item-icon"}),placeholder:"Username"})),c.a.createElement(f.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement(d.a,{prefix:c.a.createElement(v.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),c.a.createElement(f.a.Item,{shouldUpdate:!0},(function(){return c.a.createElement(h.a,{htmlType:"submit",disabled:!a.isFieldsTouched(!0)||a.getFieldsError().filter((function(e){return e.errors.length})).length},"Log in")})))},x=m.a.Content,T=function(e){return console.log("production","env"),c.a.createElement(m.a,null,c.a.createElement(x,{style:{backgroundColor:"#8E6AAC",width:"100vw",height:"100vh",backgroundSize:"cover",backgroundOrigin:"content-box",display:"flex",overflow:"hidden"}},c.a.createElement("div",{style:{backgroundImage:"url('https://images.creativemarket.com/0.1.0/ps/1018030/910/607/m1/fpnw/wm0/my-desk-.jpg?1456207724&s=3ab17830770e59dcba5f8de761ea1004')",height:"100vh",width:"50vw",margin:20,backgroundRepeat:"no-repeat"}}),c.a.createElement("div",{style:{marginLeft:"5vw"}},c.a.createElement("div",{style:{color:"white",fontSize:50,width:"50vw",lineHeight:.8,justifyContent:"start",marginTop:"20vh",fontWeight:700}},"TYPE+HYPE"),c.a.createElement("div",{style:{color:"white",fontSize:20,width:"40vw",justifyContent:"start",marginTop:"20vh"}},"Can you type fast? Or it is just a hype?"),c.a.createElement("div",{style:{color:"white",fontSize:30,width:"40vw",justifyContent:"start",marginBottom:"10vh",fontWeight:600}},"Try it now!"),c.a.createElement("div",{style:{color:"white",width:"50vw",justifyContent:"start"}},"    ",c.a.createElement(C,null)))))},W=n(362),A=n(363),R=n(368),z=n(39),I=Object(z.a)(),U=n(40),M=n.n(U),N=n(63),L=n(107),B=n.n(L),P="https://my-json-server.typicode.com/kipipatrick/type-hype",_=function(){function e(){Object(E.a)(this,e)}return Object(y.a)(e,null,[{key:"getText",value:function(){var e=Object(N.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://baconipsum.com/api/?type=all-meat&start-with-lorem=1");case 2:return t=e.sent,console.log(t.data[Math.floor(4*Math.random())+1]),e.abrupt("return",t.data[Math.floor(4*Math.random())+1]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"saveScore",value:function(){var e=Object(N.a)(M.a.mark((function e(t){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(sessionStorage.getItem("CURRENT_USER")),e.next=3,B.a.post("".concat(P,"/scores"),{id:(new Date).getTime(),name:n.name,score:t});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getScores",value:function(){var e=Object(N.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(sessionStorage.getItem("CURRENT_USER")),e.next=3,B.a.get("".concat(P,"/scores"));case 3:return n=e.sent,e.abrupt("return",n.data.filter((function(e){return e.name===t.name})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),Y="@@GAME_REQUEST",F="@@GAME_SUCCESS",G="@@GAME_SUCCESS_SCORES",J=function(){return function(){var e=Object(N.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Y}),e.next=4,_.getText();case 4:n=e.sent,t({type:F,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},H=function(e,t){return function(){var t=Object(N.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:Y}),t.next=4,_.saveScore(e);case 4:window.location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},D=function(){return function(){var e=Object(N.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Y}),e.next=4,_.getScores();case 4:n=e.sent,t({type:G,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},q=n(367),Q=n(371),K=n(364),$=n(369),V=function(e){var t=Object(k.c)(),n=Object(k.d)((function(e){return e.game.text}),k.b),a=(Object(u.e)(),c.a.useState("")),r=Object(p.a)(a,2),o=r[0],i=r[1],l=c.a.useState(2),s=Object(p.a)(l,2),m=s[0],f=s[1],g=c.a.useState(0),v=Object(p.a)(g,2),E=v[0],y=v[1],b=c.a.useState(!1),w=Object(p.a)(b,2),S=w[0],O=w[1],j=c.a.useState(!1),C=Object(p.a)(j,2),x=C[0],T=C[1],z=n?n.split(" ").filter((function(e){return""!==e})):[],I=n?o.split(" ").filter((function(e){return""!==e})):[];function U(e,t){if(e.length!==t.length)return!1;t.map((function(t,n){return t===e[n]}))}function M(){var e=0;return z.map((function(t,n){t===I[n]&&(e+=1)})),e}return c.a.useEffect((function(){var e=null;return S&&m>0&&(e=setInterval((function(){f((function(e){return e-1})),y((function(e){return e+1}))}),1e3),U(I,z)&&O(!1)),function(){return clearInterval(e)}}),[S,m]),c.a.useEffect((function(){t(J())}),[]),console.log(M(),E),c.a.createElement("div",null,c.a.createElement(q.a,{title:"Your Results",visible:x,onOk:function(){return t(H(M()/(E/60))),void T(!1)},okText:"Save and Retry"},c.a.createElement(W.a,{gutter:16},c.a.createElement(A.a,{span:24},c.a.createElement(Q.a,{round:!0,style:{backgroundColor:"white"},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Total Words",value:M()/(E/60)+" WPM"}))),c.a.createElement("div",{style:{color:"#8E6AAC",fontWeight:600,fontSize:16,marginTop:10,marginBottom:10}},"What your score means"),c.a.createElement(K.b,{itemLayout:"horizontal",dataSource:[{rate:5,description:"Fast",minLimit:40,maxLimit:"or more"},{rate:3,description:"Moderate",minLimit:24,maxLimit:"to 39"},{rate:1,description:"Slow",minLimit:23,maxLimit:"or less"}],renderItem:function(e){return c.a.createElement(K.b.Item,null,c.a.createElement(K.b.Item.Meta,{avatar:c.a.createElement(R.a,{value:e.rate}),title:c.a.createElement("span",{style:{color:"#8E6AAC",fontWeight:600}},e.description),description:"You can correctly encode ".concat(e.minLimit," ").concat(e.maxLimit," words per minute")}))}})),c.a.createElement(W.a,{gutter:16,style:{marginTop:20,marginBottom:20}},c.a.createElement(A.a,{span:5},c.a.createElement(Q.a,{round:!0,style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Total Words",value:z.length})),c.a.createElement(A.a,{span:5},c.a.createElement(Q.a,{style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Correct Words",value:M()+"/"+I.length})),c.a.createElement(A.a,{span:5},c.a.createElement(Q.a,{style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Incorrect Words",value:I.length-M()})),c.a.createElement(A.a,{span:5},c.a.createElement(Q.a,{style:{backgroundColor:"white",padding:20},valueStyle:{color:"#8E6AAC",fontWeight:600},title:"Time Remaining",value:m+"s"}))),c.a.createElement("div",{style:{marginBottom:20,fontSize:20,fontWeight:600,color:"white"}},"Try this!"),c.a.createElement("div",{style:{marginBottom:20}},z.map((function(e,t){return c.a.createElement("span",{key:t,style:{color:(n=t,I[n]&&I[n].replace(/\s/g,"")===z[n].replace(/\s/g,"")?"blue":"white"),fontSize:16,fontWeight:400}},e," ");var n}))),c.a.createElement("div",{style:{marginBottom:20,fontSize:20,fontWeight:600,color:"white"}},"Type here to start time!"),c.a.createElement(W.a,{gutter:16},c.a.createElement(A.a,{span:18},c.a.createElement(d.a.TextArea,{disabled:0===m||U(I,z),onClick:function(){return O(!0)},value:o,onChange:function(e){return function(e){i(e)}(e.target.value)},multiple:!0,rows:5})),c.a.createElement(A.a,{span:6},c.a.createElement($.a,{type:"circle",strokeColor:{"0%":"white","100%":"#8E6AAC"},percent:(I.length/z.length*100).toFixed(0)}))),c.a.createElement("div",{style:{color:"white",fontSize:16,fontWeight:"bold",marginTop:"5vh",marginBottom:"5vh",display:0===m||U(I,z)?"":"none"}},c.a.createElement(h.a,{onClick:function(){return T(!0)}},"Show Results")))},X=n(181),Z=n.n(X),ee=function(){var e=JSON.parse(sessionStorage.getItem("CURRENT_USER")),t=Object(k.d)((function(e){return e.game.scores?e.game.scores:[]}),k.b),n=c.a.useState(!1),a=Object(p.a)(n,2),r=a[0],o=a[1],i=Object(k.c)();return c.a.useEffect((function(){i(D())}),[]),e||I.push("/"),c.a.createElement(W.a,null,c.a.createElement(A.a,{style:{backgroundColor:"#8E6AAC",padding:20,height:"100vh"},span:6},c.a.createElement("div",{style:{color:"white",fontSize:50,fontWeight:"600"}},"Type+Hype"),c.a.createElement("div",{style:{color:"white",fontSize:20,fontWeight:600,marginTop:"5vh"}}," Your Type+Hype Scorers"),c.a.createElement("div",{style:{color:"white",fontSize:14,marginTop:10,marginBottom:10}},t.sort((function(e,t){return t.currentScore-e.currentScore})).slice(0,5).map((function(e,t){return c.a.createElement("div",{key:t,style:{fontSize:12,fontWeight:600,marginBottom:20}},e.name+"-"+e.score,c.a.createElement("span",{style:{fontWeight:300}}," (",Z()(e.id).format("DD MMMM YYYY hh:mm "),")")," ",c.a.createElement("div",null,c.a.createElement(R.a,null)))})),t===[]?c.a.createElement("div",null," No Game Recorded "):""),c.a.createElement("div",{style:{color:"white",fontSize:20,fontWeight:600}},"About Type+Hype"),c.a.createElement("div",{style:{color:"white",fontSize:14}},"React.js based application that will allow user to improve his/her typing skills, by measuring current progress and reviewing history of previous games.")),c.a.createElement(A.a,{style:{backgroundColor:"#8E6AAC",height:"100vh",padding:20},span:18},c.a.createElement("div",{style:{fontSize:30,color:"white"}}," Welcome! ",c.a.createElement("span",{style:{fontWeight:600}},e.name)),c.a.createElement("div",{style:{color:"white",fontSize:16,fontWeight:"bold",marginTop:"5vh",marginBottom:"5vh",display:r?"none":""}},c.a.createElement(h.a,{onClick:function(){return o(!0)}},"Start Typing Test")),r?c.a.createElement(V,null):""))},te=n(60),ne=n(182),ae=n(184),re=n.n(ae),oe=n(183),ce=n(54),ie=n(46),le=n(366),se=Object(le.a)((a={},Object(ce.a)(a,S,(function(e,t){return Object(ie.a)(Object(ie.a)({},e),{},{loading:!0})})),Object(ce.a)(a,O,(function(e,t){return Object(ie.a)(Object(ie.a)({},e),{},{user:t.payload})})),a),{user:null,loading:!1,error:null}),ue=Object(le.a)((r={},Object(ce.a)(r,Y,(function(e,t){return Object(ie.a)(Object(ie.a)({},e),{},{loading:!0})})),Object(ce.a)(r,F,(function(e,t){return Object(ie.a)(Object(ie.a)({},e),{},{text:t.payload})})),Object(ce.a)(r,G,(function(e,t){return Object(ie.a)(Object(ie.a)({},e),{},{scores:t.payload})})),r),{text:null,loading:!1,error:null,scores:[]}),me=Object(te.c)({auth:se,game:ue}),pe=re()();var fe=function(){return c.a.createElement(k.a,{store:Object(te.e)(me,e,Object(te.d)(Object(te.a)(oe.a,Object(ne.routerMiddleware)(pe)),window.devToolsExtension?window.devToolsExtension():function(e){return e}))},c.a.createElement(s.a,{basename:"/type-hype"},c.a.createElement(u.a,{exact:!0,path:"/",component:T}),c.a.createElement(u.a,{exact:!0,path:"/game",component:ee})));var e};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(359);l.a.render(c.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[191,1,2]]]);
//# sourceMappingURL=main.d098a255.chunk.js.map