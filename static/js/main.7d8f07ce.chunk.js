(this.webpackJsonpnetyforms=this.webpackJsonpnetyforms||[]).push([[0],{14:function(e,a,t){e.exports={flexContainerIcons:"style_flexContainerIcons__3GoLt",aboutUsDiv:"style_aboutUsDiv__1XbBg",divider2:"style_divider2__1jfxm",asHeadingDiv:"style_asHeadingDiv__3wu3p",asHeading2Div:"style_asHeading2Div__2wR8k",labelDiv:"style_labelDiv__2dGxg",errorMessage:"style_errorMessage__3PiqZ",nodata:"style_nodata__CfFVz",nodataHeading:"style_nodataHeading__31pUc",nodataDetailPara:"style_nodataDetailPara__2bKyB"}},28:function(e,a,t){e.exports={footer:"footer_footer__yGvg1",links:"footer_links__KmmhF",link:"footer_link__-mddI"}},38:function(e,a,t){e.exports={ccTop:"content_ccTop__3Cy5b",lineDiv:"content_lineDiv__1BqGt",line1:"content_line1__2T7Iw",line2:"content_line2__ORos2"}},54:function(e,a,t){e.exports={header:"header_header__KtytV",logo:"header_logo__r3kmo"}},7:function(e,a,t){e.exports={blog:"blog_blog__zgKf8",path:"blog_path__2_W2B",heading:"blog_heading__2mbpk",metaData:"blog_metaData__qQdUL",authorSection:"blog_authorSection__ETXz3",authorDp:"blog_authorDp__PRgGx",authorDpImage:"blog_authorDpImage__2wZwA",authorMeta:"blog_authorMeta__30AeP",timelogo:"blog_timelogo__3oqt3",responseSection:"blog_responseSection__xo_7G",likeDiv:"blog_likeDiv__mZXTn",icon:"blog_icon__1IjlZ",count:"blog_count__2hRjy",shareDiv:"blog_shareDiv__2imWE",forwardIcon:"blog_forwardIcon__3kMZ0",blogImage:"blog_blogImage__2hSvP",para:"blog_para__18Sye",SgsCard:"blog_SgsCard__3-gD5",SgsCardHeader:"blog_SgsCardHeader__cx0ws",SgsCardHeaderAuthorDp:"blog_SgsCardHeaderAuthorDp__1MjD1",SgsCardHeaderHeading:"blog_SgsCardHeaderHeading__1vFUi",SgsCardImage:"blog_SgsCardImage__3RIqK",SgsImage:"blog_SgsImage__1Ppm9",DetailPara:"blog_DetailPara__3oQX5"}},88:function(e,a,t){},89:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t(0),i=t.n(s),o=t(25),c=t.n(o),r=(t(88),t(89),t(15)),l=t(38),d=t.n(l);var j=function(){return Object(n.jsxs)("div",{className:d.a.lineDiv,children:[Object(n.jsx)("p",{className:d.a.line1,children:"Check Your Love Percentage"}),Object(n.jsx)("p",{className:d.a.line2,children:Object(n.jsx)("q",{children:"but something can never be calculated"})})]})},b=t(122),h=t(127),m=t(129),x=t(130),u=t(126),g=t(123),p=t(124),f=t(9),O=t(35),v=t(120),_=Object(v.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 30px",margin:"10px 40px",display:"flex",flexDirection:"column","&>div":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",margin:"10px 0",color:"#ffff"}},input:{"&:hover:not(.Mui-disabled):before":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},"&:hover:not(.Mui-disabled):after":{border:"1px solid rgba(255, 51, 133, 1)"},"&:before":{borderBottom:"1px solid rgba(255, 204, 224, 0.5)"},"&:after":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},color:"rgba(255,255,255,0.9)",padding:"0px 20px",fontFamily:"'Quicksand', sans-serif"},rootRadioGroup:{display:"flex",flexDirection:"row",justifyContent:"center",alignitems:"center"},labelFormControlLabelRadio:{color:"rgba(255, 204, 224, 0.9)",fontSize:"90%",fontFamily:"'Quicksand', sans-serif"},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",border:"1px solid white",color:"white"},rootRadio:{"&$checked":{color:"#ffccd5"},color:"pink"},checked:{}}),y=t(14),N=t.n(y);var k=Object(O.b)(null,(function(e){return{insertInfo:function(a,t,n,s){e({type:"INSERT_INFO",payload_name1:a,payload_name2:n,payload_gen1:t,payload_gen2:s})}}}))((function(e){var a=i.a.useState(),t=Object(r.a)(a,2),s=t[0],o=t[1],c=i.a.useState(),l=Object(r.a)(c,2),d=l[0],O=l[1],v=i.a.useState(),y=Object(r.a)(v,2),k=y[0],S=y[1],D=i.a.useState(),w=Object(r.a)(D,2),C=w[0],I=w[1],F=i.a.useState(!1),H=Object(r.a)(F,2),R=H[0],B=H[1],T=i.a.useState(0),M=Object(r.a)(T,2),E=M[0],L=M[1],P=i.a.useState(),U=Object(r.a)(P,2),Y=U[0],A=U[1],z=function(e){"n1"===e.target.id?S(e.target.value):I(e.target.value),L(0)},G={display:0===E?"none":"block"},K=_(),Q=[{title:"Your Name",name:"n1",radioName:"genderf1",al:"gender",val:s,method:function(e){o(e.target.value),L(0)},uniqueKey:1},{title:"Your Crush Name",name:"n2",radioName:"genderf2",al:"gender",val:d,method:function(e){O(e.target.value),L(0)},uniqueKey:2}].map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{onChange:z,id:e.name,name:e.name,placeholder:e.title,classes:{underline:K.input}})}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(m.a,{"aria-label":e.al,name:e.radioName,value:e.val,onChange:e.method,classes:{root:K.rootRadioGroup},children:[Object(n.jsx)(x.a,{value:"female",control:Object(n.jsx)(u.a,{size:"small",color:"primary",classes:{root:K.rootRadio,checked:K.checked}}),label:"Female",classes:{label:K.labelFormControlLabelRadio}}),Object(n.jsx)(x.a,{value:"male",control:Object(n.jsx)(u.a,{size:"small",color:"primary",classes:{root:K.rootRadio,checked:K.checked}}),label:"Male",classes:{label:K.labelFormControlLabelRadio}})]})})]},e.uniqueKey)}));return R?Object(n.jsx)(f.a,{push:!0,to:"/resultBox"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsxs)(g.a,{elevation:6,classes:{root:K.root},children:[Q,Object(n.jsx)("span",{style:G,children:Object(n.jsx)("span",{className:N.a.errorMessage,children:Object(n.jsxs)("label",{children:["ERROR : ",Y]})})}),Object(n.jsx)(p.a,{onClick:function(){null==k||null==C||null==s||null==d?(null==k?A("You forget to fill Your Name"):null==C?A("Your Crush Must Have a Name"):null==s?A("I think you must have a gender"):null==d&&A("You're cursh too have a gender, if yes then select"),L(1)):(e.insertInfo(k,s,C,d),B(!0))},variant:"outlined",classes:{root:K.rootButton},title:"Calculate Love",children:"Calculate"})]})]})})),S=t(128),D=Object(v.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 30px",margin:"10px 40px",display:"flex",flexDirection:"column","& > div":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",margin:"10px 0"}},rootLabel:{display:"flex",justifyContent:"center",fontFamily:"'Luckiest Guy', cursive",fontSize:"300%",color:"white",textShadow:"4px 4px 10px #ff00ff","&>span":{alignSelf:"center",fontSize:"60%"}},rootLabelDesc:{fontFamily:"'Quicksand', sans-serif",color:"white",fontSize:"80%",lineHeight:"140%",textAlign:"center","&>span":{backgroundColor:"rgba(242, 242, 242, 0.7)",padding:"2px 4px",borderRadius:"5px",color:"Green"}},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",border:"1px solid white",color:"white"}}),w=Object(O.b)((function(e){return{n1:e.info1.name,g1:e.info1.gender,n2:e.info2.name,g2:e.info2.gender}}))((function(e){var a=Math.round(100*Math.random()),t=D();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsxs)(g.a,{elevation:6,classes:{root:t.root},children:[Object(n.jsxs)(S.a,{classes:{root:t.rootLabel},children:[a,Object(n.jsx)("span",{children:"%"})]}),Object(n.jsx)(p.a,{variant:"outlined",classes:{root:t.rootButton},children:"Share Result"}),Object(n.jsxs)(S.a,{classes:{root:t.rootLabelDesc},children:[Object(n.jsx)("span",{children:"Congratulations!"})," ","male"===e.g1?"Mr.":"Miss"," ",e.n1,", Our Estimate is that you and ","male"===e.g2?"Mr.":"Miss"," ",e.n2," love each other with ",a,"% of love, but don't think much about it, you can increase this number, you just need to give more time to this relationship and yes, giver her a gift"]})]})]})})),C=t(125),I=t.p+"static/media/amanjat.10887b85.jpg",F=t.p+"static/media/jass.6a8bf4ef.jpg",H=t(66),R=t.n(H),B=t(67),T=t.n(B),M={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",fontFamily:"'Quicksand', sans-serif",padding:"10px 0 10px 0"},E={display:"flex",flexDirection:"row"},L={borderRadius:"20px"},P={fontSize:"80%",paddingTop:"10px",color:"whitesmoke"},U={fontSize:"130%",padding:"10px 0"},Y=[{src:I,post:"Frontend Designer & Logics",name:"Aman Jat"},{src:F,post:"She Does Nothing",name:"Jasmeet Kaur"}];var A=function(){var e=Object(s.useState)(0),a=Object(r.a)(e,2),t=a[0],i=a[1];return Object(n.jsxs)("div",{style:M,children:[Object(n.jsxs)("div",{style:E,children:[Object(n.jsx)(p.a,{onClick:function(){return i(0==t?0:--t)},style:{color:"white"},disableFocusRipple:!0,children:Object(n.jsx)(R.a,{})}),Object(n.jsx)("img",{src:Y[t].src,height:"300",width:"250",style:L,alt:Y[t].name}),Object(n.jsx)(p.a,{onClick:function(){return i(1==t?1:++t)},style:{color:"white"},children:Object(n.jsx)(T.a,{})})]}),Object(n.jsx)("label",{style:P,children:Y[t].post}),Object(n.jsx)("label",{style:U,children:Y[t].name})]})};var z=function(){return Object(n.jsxs)("div",{className:N.a.aboutUsDiv,children:[Object(n.jsx)("div",{className:N.a.asHeadingDiv,children:Object(n.jsx)("h1",{children:"About Us"})}),Object(n.jsx)(C.a,{className:N.a.divider2}),Object(n.jsx)("div",{className:N.a.asHeading2Div,children:Object(n.jsx)("h2",{children:"LoveCalcy"})}),Object(n.jsx)("div",{className:N.a.labelDiv,children:Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"LoveCalcy"})," is a website that calculates the love percentage between two people through the algorithm based on character or letter of name. This website is developed and designed by Aman Jat and Jasmeet Kaur Dhariwal. For more information please contact us."]})}),Object(n.jsx)(C.a,{className:N.a.divider2}),Object(n.jsx)("div",{className:N.a.asHeading2Div,children:Object(n.jsx)("h2",{children:"Our Team"})}),Object(n.jsx)(A,{})]})},G=t(69),K=t.n(G),Q=t(70),q=t.n(Q),J=t(68),X=t.n(J),V=Object(v.a)({locationIcon:{color:"#ff3385",fontSize:"2.5rem","&:hover:not(.Mui.disabled)":{color:"rgba(255, 51, 133, 1)"},"&:hover":{color:"#fff02"}}});var W=function(e){var a=V();return Object(n.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",margin:"10px 10px"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(X.a,{className:a.locationIcon,onClick:function(){return e.handler("visit")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Visit Us"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(K.a,{className:a.locationIcon,onClick:function(){return e.handler("call")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Call Us"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(q.a,{className:a.locationIcon,onClick:function(){return e.handler("email")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Email Us"})]})]})},Z=Object(v.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 20px",margin:"10px 40px",overflow:"hidden",fontWeight:"600","& > .formDiv":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"",padding:"20px 10px",margin:"5px 0",color:"#ffff"}},input:{"&:hover:not(.Mui-disabled):before":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},"&:hover:not(.Mui-disabled):after":{border:"1px solid rgba(255, 51, 133, 1)"},"&:before":{borderBottom:"1px solid rgba(255, 204, 224, 0.5)"},"&:after":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},color:"rgba(255,255,255,0.9)",padding:"0px 20px",fontFamily:"'Quicksand', sans-serif"},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",color:"#ffff",border:" 1px solid #ffff",padding:"7px 30px"}});var $=function(){var e=i.a.useState(""),a=Object(r.a)(e,2),t=a[0],s=a[1],o=i.a.useState("hide"),c=Object(r.a)(o,2),l=c[0],d=c[1],j=i.a.useState(""),m=Object(r.a)(j,2),x=m[0],u=m[1],g=["address","987342106","jasskaur@gmail.com"],f=Z(),O=[{title:"Your Name",name:"name1",key:1},{title:"Your email",name:"name2",key:2}].map((function(e){return Object(n.jsx)("div",{className:"formDiv",children:Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{id:e.name,name:e.name,placeholder:e.title,onChange:e.method2,classes:{underline:f.input}})})},e.key)})),v={color:"white",margin:"30px 0px",textAlign:"center",maxWidth:"hide"===l?"0px":"700px",opacity:"hide"===l?"0":"1",transition:"0.5s"};return Object(n.jsxs)("div",{className:f.root,children:[Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",color:"#ffff"},children:Object(n.jsx)("h2",{children:"Contact Us"})}),Object(n.jsx)(W,{handler:function(e){if(x!==e)switch(d("show"),u(e),e){case"visit":return Object(n.jsx)("div",{children:s(g[0])});case"call":return Object(n.jsxs)("div",{children:[s(g[1])," "]});case"email":return Object(n.jsx)("div",{children:s(g[2])});default:return Object(n.jsx)("div",{})}else d("hide"),u("")}}),Object(n.jsx)("p",{style:v,children:t}),O,Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)(p.a,{title:"Submit Your Info",variant:"outlined",classes:{root:f.rootButton},children:"submit"})})]})};var ee=function(){return Object(n.jsxs)("div",{className:N.a.nodata,children:[Object(n.jsx)("span",{children:Object(n.jsx)("label",{style:{fontSize:"50px",color:"pink"},children:"404"})}),Object(n.jsx)("span",{className:N.a.nodataHeading,children:Object(n.jsx)("label",{children:"No Data Found"})}),Object(n.jsx)("span",{className:N.a.nodataDetailPara,children:Object(n.jsx)("label",{children:"There is some error with this page. Please try after some time"})})]})},ae=t(7),te=t.n(ae),ne=t(72),se=t.n(ne),ie=t(73),oe=t.n(ie),ce=t.p+"static/media/image1.4ac0745a.jpg",re=t(71),le=t.n(re),de=t.p+"static/media/blogdp.7e7a0c32.jpg";var je=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:te.a.authorDp,children:Object(n.jsx)("img",{src:de,height:e.height,width:e.width,className:te.a.authorDpImage,alt:"dp"})})})};var be=function(){return Object(n.jsxs)("section",{className:te.a.SgsCard,children:[Object(n.jsxs)("div",{className:te.a.SgsCardHeader,children:[Object(n.jsx)("div",{className:te.a.SgsCardHeaderAuthorDp,children:Object(n.jsx)(je,{height:"40",width:"42"})}),Object(n.jsx)("div",{className:te.a.SgsCardHeaderHeading,children:Object(n.jsx)("label",{children:"How to Make YourSelf Unvisible"})})]}),Object(n.jsx)("div",{className:te.a.SgsCardImage,children:Object(n.jsx)("div",{className:te.a.SgsImage,children:Object(n.jsx)("img",{src:ce,height:"120",width:"250",alt:"blogimage"})})})]})};var he=function(){return Object(n.jsxs)("div",{className:te.a.blog,children:[Object(n.jsxs)("div",{className:te.a.section1,children:[Object(n.jsx)("label",{className:te.a.path,children:"Home / Blog /"}),Object(n.jsx)("h1",{className:te.a.heading,children:"How to Earn Money Online 2021"})]}),Object(n.jsx)(C.a,{}),Object(n.jsxs)("div",{className:te.a.metaData,children:[Object(n.jsxs)("div",{className:te.a.authorSection,children:[Object(n.jsx)(je,{height:"56",width:"55"}),Object(n.jsxs)("div",{className:te.a.authorMeta,children:[Object(n.jsx)("i",{children:"Aman Jat"}),Object(n.jsx)("i",{children:"01 January 2021"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{className:te.a.timelogo,children:Object(n.jsx)(le.a,{fontSize:"small"})}),Object(n.jsx)("label",{children:" 2 min"})]})]})]}),Object(n.jsxs)("div",{className:te.a.responseSection,children:[Object(n.jsxs)("div",{className:te.a.likeDiv,children:[Object(n.jsx)("div",{className:te.a.icon,children:Object(n.jsx)(se.a,{})}),Object(n.jsx)("div",{className:te.a.count,children:"0"})]}),Object(n.jsxs)("div",{className:te.a.likeDiv,children:[Object(n.jsx)("span",{className:te.a.icon,children:Object(n.jsx)(oe.a,{className:te.a.forwardIcon})}),Object(n.jsx)("span",{className:te.a.count,children:"0"})]})]})]}),Object(n.jsx)(C.a,{}),Object(n.jsx)("div",{className:te.a.blogImage,children:Object(n.jsx)("img",{src:ce,height:"200",width:"350",alt:"blogimage"})}),Object(n.jsx)("p",{className:te.a.para,children:"So, if you are looking to start making more money or if you want a new career path that lets you earn money from home, this list is especially for you. Over the past year I have been able to interview several people who are making money working from home. They are doing their own thing, and they are rocking at life. Hopefully, you had the chance to read their interviews on my blog, but in case you missed any of them, this post rounds them all up for you. This round-up includes everything from selling on Amazon, teaching English, becoming a cooking instructor, flipping items for profits, and more! If you\u2019re wondering \u201cHow can I earn money working from home?\u201d, then this is for you."}),Object(n.jsx)("div",{className:te.a.SuggestionSection,children:Object(n.jsx)(be,{})})]})};var me=function(){return Object(n.jsx)("div",{className:d.a.ccTop,children:Object(n.jsxs)(f.d,{children:[Object(n.jsx)(f.b,{exact:!0,path:"/",component:k}),Object(n.jsx)(f.b,{path:"/ccbox",component:k}),Object(n.jsx)(f.b,{path:"/resultbox",component:w}),Object(n.jsx)(f.b,{path:"/aboutus",component:z}),Object(n.jsx)(f.b,{path:"/contactus",component:$}),Object(n.jsx)(f.b,{path:"/notfound",component:ee}),Object(n.jsx)(f.b,{path:"/tempblog",component:he})]})})},xe=t(74),ue=t.n(xe),ge=t(75),pe=t.n(ge),fe=t(76),Oe=t.n(fe),ve=t(77),_e=t.n(ve),ye=t(78),Ne=t.n(ye);var ke=function(){return Object(n.jsxs)("div",{className:N.a.flexContainerIcons,children:[Object(n.jsx)("div",{children:Object(n.jsx)(ue.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(pe.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(Oe.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(_e.a,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(Ne.a,{})})]})},Se=t(28),De=t.n(Se),we=t(21);var Ce=function(){return Object(n.jsxs)("div",{className:De.a.links,children:[Object(n.jsx)("div",{children:Object(n.jsx)(we.b,{className:De.a.link,to:"/aboutus",children:"About Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(we.b,{className:De.a.link,to:"/contactus",children:"Contact Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(we.b,{className:De.a.link,to:"/privacypolicy",children:"Privacy Policy"})})]})};var Ie=function(){for(var e=1e3,a=0;0!=e;)a=e%10+a,e/=10;return console.log(a),Object(n.jsxs)("section",{className:De.a.footer,children:[Object(n.jsx)(ke,{}),Object(n.jsx)("hr",{})," ",Object(n.jsx)(Ce,{})]})},Fe=t(54),He=t.n(Fe),Re=t(39),Be=t.n(Re);t(96);var Te=function(){var e=Object(s.useState)("N"),a=Object(r.a)(e,2),t=a[0],i=a[1],o=Be()("hamburger","Y"==t?"clicked":""),c=Be()("sidebar","Y"==t?"show":""),l=Be()("line","Y"==t?"clicked":"","line1"),d=Be()("line","Y"==t?"clicked":"","line2"),j=Be()("line","Y"==t?"clicked":"","line3"),b=function(e){i("N"==t?"Y":"N")},h=[{title:"About Us",link:"/aboutus",key:1},{title:"Contact Us",link:"/contactus",key:2},{title:"Privacy Policy",link:"/notfound",key:3},{title:"Map",link:"/notfound",key:4},{title:"Career",link:"/notfound",key:5},{title:"Blog",link:"/tempblog",key:5}].map((function(e){return Object(n.jsx)("li",{className:"item",children:Object(n.jsx)(we.b,{className:"itemLink",to:e.link,onClick:b,children:e.title})},e.key)}));return Object(n.jsx)("div",{children:Object(n.jsxs)("section",{className:"section",children:[Object(n.jsxs)("div",{id:"stupid",className:o,onClick:b,children:[Object(n.jsx)("span",{className:l}),Object(n.jsx)("span",{className:d}),Object(n.jsx)("span",{className:j})]}),Object(n.jsxs)("div",{className:c,children:[Object(n.jsx)(C.a,{className:"divider"}),Object(n.jsx)("ul",{className:"sidebarItems",children:h}),Object(n.jsx)(C.a,{className:"divider2"}),Object(n.jsx)("label",{className:"logo",children:" Lovecalcy "}),Object(n.jsx)("label",{className:"bottomLine",children:" \xa9 2020"})]})]})})};var Me=function(){return Object(n.jsxs)("section",{className:He.a.header,children:[Object(n.jsx)(Te,{}),Object(n.jsx)("div",{className:He.a.logo,children:Object(n.jsx)(we.b,{to:"/",className:He.a.link,children:"LoveCalcy"})})]})};var Ee=function(){return Object(n.jsx)(we.a,{basename:"/netyforms-repo",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(Me,{}),Object(n.jsx)(me,{})]}),Object(n.jsx)(Ie,{})]})})},Le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,132)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),n(e),s(e),i(e),o(e)}))},Pe=t(60),Ue=t(50),Ye={info1:{name:"Aman Jat",gender:"male"},info2:{name:"Raveena",gender:"female"}},Ae=Object(Ue.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,a=arguments.length>1?arguments[1]:void 0;if("INSERT_INFO"===a.type)return Object(Pe.a)(Object(Pe.a)({},e),{},{info1:{name:a.payload_name1,gender:a.payload_gen1},info2:{name:a.payload_name2,gender:a.payload_gen2}})}),+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(n.jsx)(O.a,{store:Ae,children:Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Ee,{})})}),document.getElementById("root")),Le()}},[[97,1,2]]]);
//# sourceMappingURL=main.7d8f07ce.chunk.js.map