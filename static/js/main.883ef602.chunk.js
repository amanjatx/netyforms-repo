(this.webpackJsonpnetyforms=this.webpackJsonpnetyforms||[]).push([[0],{12:function(e,t,a){e.exports={blog:"blog_blog__zgKf8",path:"blog_path__2_W2B",heading:"blog_heading__2mbpk",metaData:"blog_metaData__qQdUL",authorDp:"blog_authorDp__PRgGx",authorDpImage:"blog_authorDpImage__2wZwA",authorMeta:"blog_authorMeta__30AeP",timelogo:"blog_timelogo__3oqt3",responseSection:"blog_responseSection__xo_7G",likeDiv:"blog_likeDiv__mZXTn",icon:"blog_icon__1IjlZ",count:"blog_count__2hRjy",shareDiv:"blog_shareDiv__2imWE",forwardIcon:"blog_forwardIcon__3kMZ0",para:"blog_para__18Sye",DetailPara:"blog_DetailPara__3oQX5"}},14:function(e,t,a){e.exports={flexContainerIcons:"style_flexContainerIcons__3GoLt",aboutUsDiv:"style_aboutUsDiv__1XbBg",divider2:"style_divider2__1jfxm",asHeadingDiv:"style_asHeadingDiv__3wu3p",asHeading2Div:"style_asHeading2Div__2wR8k",labelDiv:"style_labelDiv__2dGxg",errorMessage:"style_errorMessage__3PiqZ",nodata:"style_nodata__CfFVz",nodataHeading:"style_nodataHeading__31pUc",nodataDetailPara:"style_nodataDetailPara__2bKyB"}},28:function(e,t,a){e.exports={footer:"footer_footer__yGvg1",links:"footer_links__KmmhF",link:"footer_link__-mddI"}},38:function(e,t,a){e.exports={ccTop:"content_ccTop__3Cy5b",lineDiv:"content_lineDiv__1BqGt",line1:"content_line1__2T7Iw",line2:"content_line2__ORos2"}},54:function(e,t,a){e.exports={header:"header_header__KtytV",logo:"header_logo__r3kmo"}},88:function(e,t,a){},89:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a.n(i),o=a(25),c=a.n(o),r=(a(88),a(89),a(15)),l=a(38),d=a.n(l);var j=function(){return Object(n.jsxs)("div",{className:d.a.lineDiv,children:[Object(n.jsx)("p",{className:d.a.line1,children:"Check Your Love Percentage"}),Object(n.jsx)("p",{className:d.a.line2,children:Object(n.jsx)("q",{children:"but something can never be calculated"})})]})},b=a(123),h=a(128),u=a(130),x=a(131),m=a(127),p=a(124),f=a(125),O=a(8),g=a(35),v=a(121),y=Object(v.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 30px",margin:"10px 40px",display:"flex",flexDirection:"column","&>div":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",margin:"10px 0",color:"#ffff"}},input:{"&:hover:not(.Mui-disabled):before":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},"&:hover:not(.Mui-disabled):after":{border:"1px solid rgba(255, 51, 133, 1)"},"&:before":{borderBottom:"1px solid rgba(255, 204, 224, 0.5)"},"&:after":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},color:"rgba(255,255,255,0.9)",padding:"0px 20px",fontFamily:"'Quicksand', sans-serif"},rootRadioGroup:{display:"flex",flexDirection:"row",justifyContent:"center",alignitems:"center"},labelFormControlLabelRadio:{color:"rgba(255, 204, 224, 0.9)",fontSize:"90%",fontFamily:"'Quicksand', sans-serif"},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",border:"1px solid white",color:"white"},rootRadio:{"&$checked":{color:"#ffccd5"},color:"pink"},checked:{}}),_=a(14),k=a.n(_);var N=Object(g.b)(null,(function(e){return{insertInfo:function(t,a,n,i){e({type:"INSERT_INFO",payload_name1:t,payload_name2:n,payload_gen1:a,payload_gen2:i})}}}))((function(e){var t=s.a.useState(),a=Object(r.a)(t,2),i=a[0],o=a[1],c=s.a.useState(),l=Object(r.a)(c,2),d=l[0],g=l[1],v=s.a.useState(),_=Object(r.a)(v,2),N=_[0],D=_[1],w=s.a.useState(),C=Object(r.a)(w,2),S=C[0],F=C[1],I=s.a.useState(!1),B=Object(r.a)(I,2),R=B[0],T=B[1],E=s.a.useState(0),L=Object(r.a)(E,2),M=L[0],H=L[1],P=s.a.useState(),U=Object(r.a)(P,2),Y=U[0],z=U[1],A=function(e){"n1"===e.target.id?D(e.target.value):F(e.target.value),H(0)},G={display:0===M?"none":"block"},Q=y(),J=[{title:"Your Name",name:"n1",radioName:"genderf1",al:"gender",val:i,method:function(e){o(e.target.value),H(0)},uniqueKey:1},{title:"Your Crush Name",name:"n2",radioName:"genderf2",al:"gender",val:d,method:function(e){g(e.target.value),H(0)},uniqueKey:2}].map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{onChange:A,id:e.name,name:e.name,placeholder:e.title,classes:{underline:Q.input}})}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(u.a,{"aria-label":e.al,name:e.radioName,value:e.val,onChange:e.method,classes:{root:Q.rootRadioGroup},children:[Object(n.jsx)(x.a,{value:"female",control:Object(n.jsx)(m.a,{size:"small",color:"primary",classes:{root:Q.rootRadio,checked:Q.checked}}),label:"Female",classes:{label:Q.labelFormControlLabelRadio}}),Object(n.jsx)(x.a,{value:"male",control:Object(n.jsx)(m.a,{size:"small",color:"primary",classes:{root:Q.rootRadio,checked:Q.checked}}),label:"Male",classes:{label:Q.labelFormControlLabelRadio}})]})})]},e.uniqueKey)}));return R?Object(n.jsx)(O.a,{push:!0,to:"/resultBox"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsxs)(p.a,{elevation:6,classes:{root:Q.root},children:[J,Object(n.jsx)("span",{style:G,children:Object(n.jsx)("span",{className:k.a.errorMessage,children:Object(n.jsxs)("label",{children:["ERROR : ",Y]})})}),Object(n.jsx)(f.a,{onClick:function(){null==N||null==S||null==i||null==d?(null==N?z("You forget to fill Your Name"):null==S?z("Your Crush Must Have a Name"):null==i?z("I think you must have a gender"):null==d&&z("You're cursh too have a gender, if yes then select"),H(1)):(e.insertInfo(N,i,S,d),T(!0))},variant:"outlined",classes:{root:Q.rootButton},title:"Calculate Love",children:"Calculate"})]})]})})),D=a(129),w=Object(v.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 30px",margin:"10px 40px",display:"flex",flexDirection:"column","& > div":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",margin:"10px 0"}},rootLabel:{display:"flex",justifyContent:"center",fontFamily:"'Luckiest Guy', cursive",fontSize:"300%",color:"white",textShadow:"4px 4px 10px #ff00ff","&>span":{alignSelf:"center",fontSize:"60%"}},rootLabelDesc:{fontFamily:"'Quicksand', sans-serif",color:"white",fontSize:"80%",lineHeight:"140%",textAlign:"center","&>span":{backgroundColor:"rgba(242, 242, 242, 0.7)",padding:"2px 4px",borderRadius:"5px",color:"Green"}},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",border:"1px solid white",color:"white"}}),C=Object(g.b)((function(e){return{n1:e.info1.name,g1:e.info1.gender,n2:e.info2.name,g2:e.info2.gender}}))((function(e){var t=Math.round(100*Math.random()),a=w();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsxs)(p.a,{elevation:6,classes:{root:a.root},children:[Object(n.jsxs)(D.a,{classes:{root:a.rootLabel},children:[t,Object(n.jsx)("span",{children:"%"})]}),Object(n.jsx)(f.a,{variant:"outlined",classes:{root:a.rootButton},children:"Share Result"}),Object(n.jsxs)(D.a,{classes:{root:a.rootLabelDesc},children:[Object(n.jsx)("span",{children:"Congratulations!"})," ","male"===e.g1?"Mr.":"Miss"," ",e.n1,", Our Estimate is that you and ","male"===e.g2?"Mr.":"Miss"," ",e.n2," love each other with ",t,"% of love, but don't think much about it, you can increase this number, you just need to give more time to this relationship and yes, giver her a gift"]})]})]})})),S=a(126),F=a.p+"static/media/amanjat.10887b85.jpg",I=a.p+"static/media/jass.6a8bf4ef.jpg",B=a(66),R=a.n(B),T=a(67),E=a.n(T),L={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",fontFamily:"'Quicksand', sans-serif",padding:"10px 0 10px 0"},M={display:"flex",flexDirection:"row"},H={borderRadius:"20px"},P={fontSize:"80%",paddingTop:"10px",color:"whitesmoke"},U={fontSize:"130%",padding:"10px 0"},Y=[{src:F,post:"Frontend Designer & Logics",name:"Aman Jat"},{src:I,post:"She Does Nothing",name:"Jasmeet Kaur"}];var z=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(n.jsxs)("div",{style:L,children:[Object(n.jsxs)("div",{style:M,children:[Object(n.jsx)(f.a,{onClick:function(){return s(0==a?0:--a)},style:{color:"white"},disableFocusRipple:!0,children:Object(n.jsx)(R.a,{})}),Object(n.jsx)("img",{src:Y[a].src,height:"300",width:"250",style:H,alt:Y[a].name}),Object(n.jsx)(f.a,{onClick:function(){return s(1==a?1:++a)},style:{color:"white"},children:Object(n.jsx)(E.a,{})})]}),Object(n.jsx)("label",{style:P,children:Y[a].post}),Object(n.jsx)("label",{style:U,children:Y[a].name})]})};var A=function(){return Object(n.jsxs)("div",{className:k.a.aboutUsDiv,children:[Object(n.jsx)("div",{className:k.a.asHeadingDiv,children:Object(n.jsx)("h1",{children:"About Us"})}),Object(n.jsx)(S.a,{className:k.a.divider2}),Object(n.jsx)("div",{className:k.a.asHeading2Div,children:Object(n.jsx)("h2",{children:"LoveCalcy"})}),Object(n.jsx)("div",{className:k.a.labelDiv,children:Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"LoveCalcy"})," is a website that calculates the love percentage between two people through the algorithm based on character or letter of name. This website is developed and designed by Aman Jat and Jasmeet Kaur Dhariwal. For more information please contact us."]})}),Object(n.jsx)(S.a,{className:k.a.divider2}),Object(n.jsx)("div",{className:k.a.asHeading2Div,children:Object(n.jsx)("h2",{children:"Our Team"})}),Object(n.jsx)(z,{})]})},G=a(69),Q=a.n(G),J=a(70),K=a.n(J),q=a(68),X=a.n(q),V=Object(v.a)({locationIcon:{color:"#ff3385",fontSize:"2.5rem","&:hover:not(.Mui.disabled)":{color:"rgba(255, 51, 133, 1)"},"&:hover":{color:"#fff02"}}});var W=function(e){var t=V();return Object(n.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",margin:"10px 10px"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(X.a,{className:t.locationIcon,onClick:function(){return e.handler("visit")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Visit Us"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(Q.a,{className:t.locationIcon,onClick:function(){return e.handler("call")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Call Us"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(K.a,{className:t.locationIcon,onClick:function(){return e.handler("email")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Email Us"})]})]})},Z=Object(v.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 20px",margin:"10px 40px",overflow:"hidden",fontWeight:"600","& > .formDiv":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"",padding:"20px 10px",margin:"5px 0",color:"#ffff"}},input:{"&:hover:not(.Mui-disabled):before":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},"&:hover:not(.Mui-disabled):after":{border:"1px solid rgba(255, 51, 133, 1)"},"&:before":{borderBottom:"1px solid rgba(255, 204, 224, 0.5)"},"&:after":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},color:"rgba(255,255,255,0.9)",padding:"0px 20px",fontFamily:"'Quicksand', sans-serif"},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",color:"#ffff",border:" 1px solid #ffff",padding:"7px 30px"}});var $=function(){var e=s.a.useState(""),t=Object(r.a)(e,2),a=t[0],i=t[1],o=s.a.useState("hide"),c=Object(r.a)(o,2),l=c[0],d=c[1],j=s.a.useState(""),u=Object(r.a)(j,2),x=u[0],m=u[1],p=["address","987342106","jasskaur@gmail.com"],O=Z(),g=[{title:"Your Name",name:"name1",key:1},{title:"Your email",name:"name2",key:2}].map((function(e){return Object(n.jsx)("div",{className:"formDiv",children:Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{id:e.name,name:e.name,placeholder:e.title,onChange:e.method2,classes:{underline:O.input}})})},e.key)})),v={color:"white",margin:"30px 0px",textAlign:"center",maxWidth:"hide"===l?"0px":"700px",opacity:"hide"===l?"0":"1",transition:"0.5s"};return Object(n.jsxs)("div",{className:O.root,children:[Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",color:"#ffff"},children:Object(n.jsx)("h2",{children:"Contact Us"})}),Object(n.jsx)(W,{handler:function(e){if(x!==e)switch(d("show"),m(e),e){case"visit":return Object(n.jsx)("div",{children:i(p[0])});case"call":return Object(n.jsxs)("div",{children:[i(p[1])," "]});case"email":return Object(n.jsx)("div",{children:i(p[2])});default:return Object(n.jsx)("div",{})}else d("hide"),m("")}}),Object(n.jsx)("p",{style:v,children:a}),g,Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)(f.a,{title:"Submit Your Info",variant:"outlined",classes:{root:O.rootButton},children:"submit"})})]})};var ee=function(){return Object(n.jsxs)("div",{className:k.a.nodata,children:[Object(n.jsx)("span",{children:Object(n.jsx)("label",{style:{fontSize:"50px",color:"pink"},children:"404"})}),Object(n.jsx)("span",{className:k.a.nodataHeading,children:Object(n.jsx)("label",{children:"No Data Found"})}),Object(n.jsx)("span",{className:k.a.nodataDetailPara,children:Object(n.jsx)("label",{children:"There is some error with this page. Please try after some time"})})]})},te=a(12),ae=a.n(te),ne=a(72),ie=a.n(ne),se=a(73),oe=a.n(se),ce=a.p+"static/media/blogdp.7e7a0c32.jpg",re=a(71),le=a.n(re);var de=function(){return Object(n.jsxs)("div",{className:ae.a.blog,children:[Object(n.jsxs)("div",{className:ae.a.section1,children:[Object(n.jsx)("label",{className:ae.a.path,children:"Home > Blog >"}),Object(n.jsx)("h1",{className:ae.a.heading,children:"How to Earn Money Online 2021"})]}),Object(n.jsx)(S.a,{}),Object(n.jsxs)("div",{className:ae.a.metaData,children:[Object(n.jsx)("div",{className:ae.a.authorDp,children:Object(n.jsx)("img",{src:ce,height:"56",width:"55",className:ae.a.authorDpImage,alt:"dp"})}),Object(n.jsxs)("div",{className:ae.a.authorMeta,children:[Object(n.jsx)("i",{children:"Aman Jat"}),Object(n.jsx)("i",{children:"01 January 2021"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{className:ae.a.timelogo,children:Object(n.jsx)(le.a,{fontSize:"small"})}),Object(n.jsx)("label",{children:" 2 min"})]})]}),Object(n.jsxs)("div",{className:ae.a.responseSection,children:[Object(n.jsxs)("div",{className:ae.a.likeDiv,children:[Object(n.jsx)("div",{className:ae.a.icon,children:Object(n.jsx)(ie.a,{})}),Object(n.jsx)("div",{className:ae.a.count,children:"0"})]}),Object(n.jsxs)("div",{className:ae.a.likeDiv,children:[Object(n.jsx)("span",{className:ae.a.icon,children:Object(n.jsx)(oe.a,{className:ae.a.forwardIcon})}),Object(n.jsx)("span",{className:ae.a.count,children:"0"})]})]})]}),Object(n.jsx)(S.a,{}),Object(n.jsx)("p",{className:ae.a.para,children:"So, if you are looking to start making more money or if you want a new career path that lets you earn money from home, this list is especially for you. Over the past year I have been able to interview several people who are making money working from home. They are doing their own thing, and they are rocking at life. Hopefully, you had the chance to read their interviews on my blog, but in case you missed any of them, this post rounds them all up for you. This round-up includes everything from selling on Amazon, teaching English, becoming a cooking instructor, flipping items for profits, and more! If you\u2019re wondering \u201cHow can I earn money working from home?\u201d, then this is for you."})]})};var je=function(){return Object(n.jsx)("div",{className:d.a.ccTop,children:Object(n.jsxs)(O.d,{children:[Object(n.jsx)(O.b,{exact:!0,path:"/",component:N}),Object(n.jsx)(O.b,{path:"/ccbox",component:N}),Object(n.jsx)(O.b,{path:"/resultbox",component:C}),Object(n.jsx)(O.b,{path:"/aboutus",component:A}),Object(n.jsx)(O.b,{path:"/contactus",component:$}),Object(n.jsx)(O.b,{path:"/notfound",component:ee}),Object(n.jsx)(O.b,{path:"/tempblog",component:de})]})})},be=a(74),he=a.n(be),ue=a(75),xe=a.n(ue),me=a(76),pe=a.n(me),fe=a(77),Oe=a.n(fe),ge=a(78),ve=a.n(ge);var ye=function(){return Object(n.jsxs)("div",{className:k.a.flexContainerIcons,children:[Object(n.jsx)("div",{children:Object(n.jsx)(he.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(xe.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(pe.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(Oe.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(ve.a,{})})]})},_e=a(28),ke=a.n(_e),Ne=a(21);var De=function(){return Object(n.jsxs)("div",{className:ke.a.links,children:[Object(n.jsx)("div",{children:Object(n.jsx)(Ne.b,{className:ke.a.link,to:"/aboutus",children:"About Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(Ne.b,{className:ke.a.link,to:"/contactus",children:"Contact Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(Ne.b,{className:ke.a.link,to:"/privacypolicy",children:"Privacy Policy"})})]})};var we=function(){for(var e=1e3,t=0;0!=e;)t=e%10+t,e/=10;return console.log(t),Object(n.jsxs)("section",{className:ke.a.footer,children:[Object(n.jsx)(ye,{}),Object(n.jsx)("hr",{})," ",Object(n.jsx)(De,{})]})},Ce=a(54),Se=a.n(Ce),Fe=a(39),Ie=a.n(Fe);a(96);var Be=function(){var e=Object(i.useState)("N"),t=Object(r.a)(e,2),a=t[0],s=t[1],o=Ie()("hamburger","Y"==a?"clicked":""),c=Ie()("sidebar","Y"==a?"show":""),l=Ie()("line","Y"==a?"clicked":"","line1"),d=Ie()("line","Y"==a?"clicked":"","line2"),j=Ie()("line","Y"==a?"clicked":"","line3"),b=function(e){s("N"==a?"Y":"N")},h=[{title:"About Us",link:"/aboutus",key:1},{title:"Contact Us",link:"/contactus",key:2},{title:"Privacy Policy",link:"/notfound",key:3},{title:"Map",link:"/notfound",key:4},{title:"Career",link:"/notfound",key:5},{title:"Blog",link:"/tempblog",key:5}].map((function(e){return Object(n.jsx)("li",{className:"item",children:Object(n.jsx)(Ne.b,{className:"itemLink",to:e.link,onClick:b,children:e.title})},e.key)}));return Object(n.jsx)("div",{children:Object(n.jsxs)("section",{className:"section",children:[Object(n.jsxs)("div",{id:"stupid",className:o,onClick:b,children:[Object(n.jsx)("span",{className:l}),Object(n.jsx)("span",{className:d}),Object(n.jsx)("span",{className:j})]}),Object(n.jsxs)("div",{className:c,children:[Object(n.jsx)(S.a,{className:"divider"}),Object(n.jsx)("ul",{className:"sidebarItems",children:h}),Object(n.jsx)(S.a,{className:"divider2"}),Object(n.jsx)("label",{className:"logo",children:" Lovecalcy "}),Object(n.jsx)("label",{className:"bottomLine",children:" \xa9 2020"})]})]})})};var Re=function(){return Object(n.jsxs)("section",{className:Se.a.header,children:[Object(n.jsx)(Be,{}),Object(n.jsx)("div",{className:Se.a.logo,children:Object(n.jsx)(Ne.b,{to:"/",className:Se.a.link,children:"LoveCalcy"})})]})};var Te=function(){return Object(n.jsx)(Ne.a,{basename:"/netyforms-repo",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(Re,{}),Object(n.jsx)(je,{})]}),Object(n.jsx)(we,{})]})})},Ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))},Le=a(60),Me=a(50),He={info1:{name:"Aman Jat",gender:"male"},info2:{name:"Raveena",gender:"female"}},Pe=Object(Me.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;if("INSERT_INFO"===t.type)return Object(Le.a)(Object(Le.a)({},e),{},{info1:{name:t.payload_name1,gender:t.payload_gen1},info2:{name:t.payload_name2,gender:t.payload_gen2}})}),+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(n.jsx)(g.a,{store:Pe,children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Te,{})})}),document.getElementById("root")),Ee()}},[[97,1,2]]]);
//# sourceMappingURL=main.883ef602.chunk.js.map