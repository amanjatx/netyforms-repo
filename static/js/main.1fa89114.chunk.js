(this.webpackJsonpnetyforms=this.webpackJsonpnetyforms||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),i=a(28),l=a.n(i),o=(a(91),a(92),a(16)),r=a(127),d=a(131),j=a(133),b=a(134),h=a(130),m=a(128),x=a(10),u=a(37),g=a(124),O=Object(g.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 30px",margin:"10px 40px",display:"flex",flexDirection:"column","&>div":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",margin:"10px 0",color:"#ffff"}},input:{"&:hover:not(.Mui-disabled):before":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},"&:hover:not(.Mui-disabled):after":{border:"1px solid rgba(255, 51, 133, 1)"},"&:before":{borderBottom:"1px solid rgba(255, 204, 224, 0.5)"},"&:after":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},color:"rgba(255,255,255,0.9)",padding:"0px 20px",fontFamily:"'Quicksand', sans-serif"},rootRadioGroup:{display:"flex",flexDirection:"row",justifyContent:"center",alignitems:"center"},labelFormControlLabelRadio:{color:"rgba(255, 204, 224, 0.9)",fontSize:"90%",fontFamily:"'Quicksand', sans-serif"},rootRadio:{"&$checked":{color:"#ffccd5"},color:"pink"},checked:{}}),p=a(25),f=a.n(p),_=a(126),v=a(70),N=a.n(v);var y=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(_.a,{onClick:e.method,variant:"outlined",className:N.a.ButtonOutlined,title:e.title,children:e.title})})};var S=Object(u.b)(null,(function(e){return{insertInfo:function(t,a,n,s){e({type:"INSERT_INFO",payload_name1:t,payload_name2:n,payload_gen1:a,payload_gen2:s})}}}))((function(e){var t=c.a.useState(),a=Object(o.a)(t,2),s=a[0],i=a[1],l=c.a.useState(),u=Object(o.a)(l,2),g=u[0],p=u[1],_=c.a.useState(),v=Object(o.a)(_,2),N=v[0],S=v[1],k=c.a.useState(),w=Object(o.a)(k,2),B=w[0],D=w[1],C=c.a.useState(!1),I=Object(o.a)(C,2),F=I[0],R=I[1],L=c.a.useState(0),H=Object(o.a)(L,2),P=H[0],T=H[1],E=c.a.useState(),M=Object(o.a)(E,2),X=M[0],Y=M[1],z=function(e){"n1"===e.target.id?S(e.target.value):D(e.target.value),T(0)},A={display:0===P?"none":"block"},U=O(),G=[{title:"Your Name",name:"n1",radioName:"genderf1",al:"gender",val:s,method:function(e){i(e.target.value),T(0)},uniqueKey:1},{title:"Your Crush Name",name:"n2",radioName:"genderf2",al:"gender",val:g,method:function(e){p(e.target.value),T(0)},uniqueKey:2}].map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(r.a,{children:Object(n.jsx)(d.a,{onChange:z,id:e.name,name:e.name,placeholder:e.title,classes:{underline:U.input}})}),Object(n.jsx)(r.a,{children:Object(n.jsxs)(j.a,{classes:{root:U.rootRadioGroup},"aria-label":e.al,name:e.radioName,value:e.val,onChange:e.method,children:[Object(n.jsx)(b.a,{value:"female",control:Object(n.jsx)(h.a,{size:"small",color:"primary",classes:{root:U.rootRadio,checked:U.checked}}),label:"Female",classes:{label:U.labelFormControlLabelRadio}}),Object(n.jsx)(b.a,{value:"male",control:Object(n.jsx)(h.a,{size:"small",color:"primary",classes:{root:U.rootRadio,checked:U.checked}}),label:"Male",classes:{label:U.labelFormControlLabelRadio}})]})})]},e.uniqueKey)}));return F?Object(n.jsx)(x.a,{push:!0,to:"/resultBox"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:f.a.lineDiv,children:[Object(n.jsx)("p",{className:f.a.line1,children:"Check Your Love Percentage"}),Object(n.jsx)("p",{className:f.a.line2,children:Object(n.jsx)("q",{children:"but something can never be calculated"})})]}),Object(n.jsxs)(m.a,{elevation:6,classes:{root:U.root},children:[G,Object(n.jsx)("span",{style:A,children:Object(n.jsx)("span",{className:f.a.errorMessage,children:Object(n.jsxs)("label",{children:["ERROR : ",X]})})}),Object(n.jsx)(y,{method:function(){null==N||null==B||null==s||null==g?(null==N?Y("You forget to fill Your Name"):null==B?Y("Your Crush Must Have a Name"):null==s?Y("I think you must have a gender"):null==g&&Y("You're cursh too have a gender, if yes then select"),T(1)):(e.insertInfo(N,s,B,g),R(!0))},title:"Calculate"})]})]})})),k=a(132),w=Object(g.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 30px",margin:"10px 40px",display:"flex",flexDirection:"column","& > div":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",margin:"10px 0"}},rootLabel:{display:"flex",justifyContent:"center",fontFamily:"'Luckiest Guy', cursive",fontSize:"300%",color:"white",textShadow:"4px 4px 10px #ff00ff","&>span":{alignSelf:"center",fontSize:"60%"}},rootLabelDesc:{fontFamily:"'Quicksand', sans-serif",color:"white",fontSize:"80%",lineHeight:"140%",textAlign:"center","&>span":{backgroundColor:"rgba(242, 242, 242, 0.7)",padding:"2px 4px",borderRadius:"5px",color:"Green"}},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",border:"1px solid white",color:"white"}}),B=Object(u.b)((function(e){return{n1:e.info1.name,g1:e.info1.gender,n2:e.info2.name,g2:e.info2.gender}}))((function(e){var t=Math.round(100*Math.random()),a=w();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:f.a.lineDiv,children:[Object(n.jsx)("p",{className:f.a.line1,children:"Check Your Love Percentage"}),Object(n.jsx)("p",{className:f.a.line2,children:Object(n.jsx)("q",{children:"but something can never be calculated"})})]}),Object(n.jsxs)(m.a,{elevation:6,classes:{root:a.root},children:[Object(n.jsxs)(k.a,{classes:{root:a.rootLabel},children:[t,Object(n.jsx)("span",{children:"%"})]}),Object(n.jsx)(y,{method:function(){},title:"Share Result"}),Object(n.jsxs)(k.a,{classes:{root:a.rootLabelDesc},children:[Object(n.jsx)("span",{children:"Congratulations!"})," ","male"===e.g1?"Mr.":"Miss"," ",e.n1,", Our Estimate is that you and ","male"===e.g2?"Mr.":"Miss"," ",e.n2," love each other with ",t,"% of love, but don't think much about it, you can increase this number, you just need to give more time to this relationship and yes, giver her a gift"]})]})]})})),D=a(129),C=a(23),I=a.n(C),F=a.p+"static/media/amanjat.10887b85.jpg",R=a.p+"static/media/jass.6a8bf4ef.jpg",L=a(71),H=a.n(L),P=a(72),T=a.n(P),E={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",fontFamily:"'Quicksand', sans-serif",padding:"10px 0 10px 0"},M={display:"flex",flexDirection:"row"},X={borderRadius:"20px"},Y={fontSize:"80%",paddingTop:"10px",color:"whitesmoke"},z={fontSize:"130%",padding:"10px 0"},A=[{src:F,post:"Frontend Designer & Logics",name:"Aman Jat"},{src:R,post:"She Does Nothing",name:"Jasmeet Kaur"}];var U=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{style:E,children:[Object(n.jsxs)("div",{style:M,children:[Object(n.jsx)(_.a,{onClick:function(){return c(0==a?0:--a)},style:{color:"white"},disableFocusRipple:!0,children:Object(n.jsx)(H.a,{})}),Object(n.jsx)("img",{src:A[a].src,height:"300",width:"250",style:X,alt:A[a].name}),Object(n.jsx)(_.a,{onClick:function(){return c(1==a?1:++a)},style:{color:"white"},children:Object(n.jsx)(T.a,{})})]}),Object(n.jsx)("label",{style:Y,children:A[a].post}),Object(n.jsx)("label",{style:z,children:A[a].name})]})};var G=function(){return Object(n.jsxs)("div",{className:I.a.aboutUsDiv,children:[Object(n.jsx)("div",{className:I.a.asHeadingDiv,children:Object(n.jsx)("h1",{children:"About Us"})}),Object(n.jsx)(D.a,{className:I.a.divider2}),Object(n.jsx)("div",{className:I.a.asHeading2Div,children:Object(n.jsx)("h2",{children:"LoveCalcy"})}),Object(n.jsx)("div",{className:I.a.labelDiv,children:Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"LoveCalcy"})," is a website that calculates the love percentage between two people through the algorithm based on character or letter of name. This website is developed and designed by Aman Jat and Jasmeet Kaur Dhariwal. For more information please contact us."]})}),Object(n.jsx)(D.a,{className:I.a.divider2}),Object(n.jsx)("div",{className:I.a.asHeading2Div,children:Object(n.jsx)("h2",{children:"Our Team"})}),Object(n.jsx)(U,{})]})},J=a(74),K=a.n(J),Q=a(75),q=a.n(Q),W=a(73),V=a.n(W),Z=Object(g.a)({locationIcon:{color:"#ff3385",fontSize:"2.5rem","&:hover:not(.Mui.disabled)":{color:"rgba(255, 51, 133, 1)"},"&:hover":{color:"#fff02"}}});var $=function(e){var t=Z();return Object(n.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",margin:"10px 10px"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(V.a,{className:t.locationIcon,onClick:function(){return e.handler("visit")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Visit Us"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(K.a,{className:t.locationIcon,onClick:function(){return e.handler("call")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Call Us"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(q.a,{className:t.locationIcon,onClick:function(){return e.handler("email")}}),Object(n.jsx)("p",{style:{marginTop:"5px"},children:"Email Us"})]})]})},ee=Object(g.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:8,border:0,padding:"20px 20px",margin:"10px 40px",overflow:"hidden",fontWeight:"600","& > .formDiv":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"",padding:"20px 10px",margin:"5px 0",color:"#ffff"}},input:{"&:hover:not(.Mui-disabled):before":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},"&:hover:not(.Mui-disabled):after":{border:"1px solid rgba(255, 51, 133, 1)"},"&:before":{borderBottom:"1px solid rgba(255, 204, 224, 0.5)"},"&:after":{borderBottom:"1px solid rgba(255, 51, 133, 1)"},color:"rgba(255,255,255,0.9)",padding:"0px 20px",fontFamily:"'Quicksand', sans-serif"},rootButton:{margin:"20px 10px",textTransform:"none",fontFamily:"'Quicksand', sans-serif",color:"#ffff",border:" 1px solid #ffff",padding:"7px 30px"}});var te=function(){var e=c.a.useState(""),t=Object(o.a)(e,2),a=t[0],s=t[1],i=c.a.useState("hide"),l=Object(o.a)(i,2),j=l[0],b=l[1],h=c.a.useState(""),m=Object(o.a)(h,2),x=m[0],u=m[1],g=["address","987342106","jasskaur@gmail.com"],O=ee(),p=[{title:"Your Name",name:"name1",key:1},{title:"Your email",name:"name2",key:2}].map((function(e){return Object(n.jsx)("div",{className:"formDiv",children:Object(n.jsx)(r.a,{children:Object(n.jsx)(d.a,{id:e.name,name:e.name,placeholder:e.title,onChange:e.method2,classes:{underline:O.input}})})},e.key)})),f={color:"white",margin:"30px 0px",textAlign:"center",maxWidth:"hide"===j?"0px":"700px",opacity:"hide"===j?"0":"1",transition:"0.5s"};return Object(n.jsxs)("div",{className:O.root,children:[Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",color:"#ffff"},children:Object(n.jsx)("h2",{children:"Contact Us"})}),Object(n.jsx)($,{handler:function(e){if(x!==e)switch(b("show"),u(e),e){case"visit":return Object(n.jsx)("div",{children:s(g[0])});case"call":return Object(n.jsxs)("div",{children:[s(g[1])," "]});case"email":return Object(n.jsx)("div",{children:s(g[2])});default:return Object(n.jsx)("div",{})}else b("hide"),u("")}}),Object(n.jsx)("p",{style:f,children:a}),p,Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)(_.a,{title:"Submit Your Info",variant:"outlined",classes:{root:O.rootButton},children:"submit"})})]})};var ae=function(){return Object(n.jsxs)("div",{className:I.a.nodata,children:[Object(n.jsx)("span",{children:Object(n.jsx)("label",{style:{fontSize:"50px",color:"pink"},children:"404"})}),Object(n.jsx)("span",{className:I.a.nodataHeading,children:Object(n.jsx)("label",{children:"No Data Found"})}),Object(n.jsx)("span",{className:I.a.nodataDetailPara,children:Object(n.jsx)("label",{children:"There is some error with this page. Please try after some time"})})]})},ne=a(4),se=a.n(ne),ce=a(56),ie=a.n(ce),le=a(76),oe=a.n(le),re=a.p+"static/media/image1.4ac0745a.jpg",de=a.p+"static/media/blogdp.7e7a0c32.jpg";var je=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:se.a.authorDp,children:Object(n.jsx)("img",{src:de,height:e.height,width:e.width,className:se.a.authorDpImage,alt:"dp"})})})},be=a(54),he=a.n(be),me=a(55),xe=a.n(me);var ue=function(){return Object(n.jsxs)("section",{className:se.a.SgsCard,children:[Object(n.jsxs)("div",{className:se.a.SgsCardHeader,children:[Object(n.jsx)("div",{className:se.a.SgsCardHeaderAuthorDp,children:Object(n.jsx)(je,{height:"40",width:"40"})}),Object(n.jsx)("div",{className:se.a.SgsCardHeaderHeading,children:Object(n.jsx)("label",{children:"How to Make YourSelf Unvisible"})})]}),Object(n.jsx)("div",{className:se.a.SgsImageDiv,children:Object(n.jsx)("img",{className:se.a.SgsImage,src:re,height:"120",width:"280",alt:"blogimage"})}),Object(n.jsxs)("div",{className:se.a.SgsStat,children:[Object(n.jsx)("div",{className:se.a.SgsStatBar1,children:Object(n.jsxs)("div",{className:se.a.SgsStatTime,children:[Object(n.jsx)("span",{className:se.a.timelogo,children:Object(n.jsx)(he.a,{fontSize:"small"})}),Object(n.jsx)("label",{children:" 2 min"})]})}),Object(n.jsx)("div",{className:se.a.SgsStatBar2,children:Object(n.jsxs)("div",{className:se.a.SgsStatStat,children:[Object(n.jsx)(xe.a,{className:se.a.SgsStaticons,fontSize:"small"}),"1.4k",Object(n.jsx)(ie.a,{className:se.a.SgsStaticons,fontSize:"small"}),"550"]})})]})]})},ge=a(9);var Oe=function(){return Object(n.jsxs)("div",{className:se.a.blog,children:[Object(n.jsxs)("div",{className:se.a.section1,children:[Object(n.jsx)("div",{children:Object(n.jsx)("label",{className:se.a.path,children:"Home / Blog /"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(ge.b,{className:se.a.link,to:"",children:"Edit"}),Object(n.jsx)(ge.b,{className:se.a.link,to:"",children:"Report"}),Object(n.jsx)(ge.b,{className:se.a.link,to:"",children:"Suggest"})]})]}),Object(n.jsxs)("div",{className:se.a.metaData,children:[Object(n.jsxs)("div",{className:se.a.authorSection,children:[Object(n.jsx)(je,{height:"56",width:"55"}),Object(n.jsxs)("div",{className:se.a.authorMeta,children:[Object(n.jsx)("i",{children:Object(n.jsx)("b",{children:Object(n.jsx)("a",{style:{textDecoration:"none"},href:"https://twitter.com/amanjat261",children:"Aman Jat"})})}),Object(n.jsx)("i",{children:"01 January 2021"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{className:se.a.timelogo,children:Object(n.jsx)(he.a,{fontSize:"small"})}),Object(n.jsx)("label",{children:" 2 min"})]})]})]}),Object(n.jsx)("div",{className:se.a.responseSection,children:Object(n.jsxs)("div",{className:se.a.likeDiv,children:[Object(n.jsx)("span",{className:se.a.icon,children:Object(n.jsx)(xe.a,{className:se.a.SgsStaticons,fontSize:"small"})}),Object(n.jsx)("span",{className:se.a.count,children:"0"})]})})]}),Object(n.jsx)("h1",{className:se.a.heading,children:"How to Earn Money Online 2021"}),Object(n.jsx)("div",{className:se.a.blogImage,children:Object(n.jsx)("img",{src:re,height:"200",width:"350",alt:"blogimage"})}),Object(n.jsx)("p",{className:se.a.para,children:"So, if you are looking to start making more money or if you want a new career path that lets you earn money from home, this list is especially for you. Over the past year I have been able to interview several people who are making money working from home. They are doing their own thing, and they are rocking at life. Hopefully, you had the chance to read their interviews on my blog, but in case you missed any of them, this post rounds them all up for you. This round-up includes everything from selling on Amazon, teaching English, becoming a cooking instructor, flipping items for profits, and more! If you\u2019re wondering \u201cHow can I earn money working from home?\u201d, then this is for you."}),Object(n.jsxs)("div",{className:se.a.blogBottom,children:[Object(n.jsx)(_.a,{className:se.a.blogBottomButton,children:Object(n.jsxs)("div",{className:se.a.blogBottomButtonInside,children:[Object(n.jsx)(ie.a,{className:se.a.blogButtonIcon,fontSize:"large"}),Object(n.jsx)("label",{className:se.a.blogButtonLabel,children:"Like"}),Object(n.jsx)("label",{className:se.a.blogButtonStat,children:"+54"})]})}),Object(n.jsx)(_.a,{className:se.a.blogBottomButton,children:Object(n.jsxs)("div",{className:se.a.blogBottomButtonInside,children:[Object(n.jsx)(oe.a,{className:se.a.blogButtonIcon,style:{transform:"scale(-1, 1)"},fontSize:"large"}),Object(n.jsx)("label",{className:se.a.blogButtonLabel,children:"Share"}),Object(n.jsx)("label",{className:se.a.blogButtonStat,children:"+25"})]})})]}),Object(n.jsx)("span",{style:{margin:"20px"},children:Object(n.jsx)(D.a,{})}),Object(n.jsx)("label",{children:Object(n.jsx)("b",{children:"Related Articles : "})}),Object(n.jsx)("div",{className:se.a.SuggestionSection,children:Object(n.jsx)(ue,{})})]})},pe=a(14),fe=a.n(pe);var _e=function(){return Object(n.jsx)("div",{className:fe.a.ControlPanel,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:fe.a.link,to:"/addblog",children:"Add A Blog"})}),Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:fe.a.link,children:"Delete A Blog"})}),Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:fe.a.link,children:"Edit Requests"})}),Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:fe.a.link,children:"Suggestions"})}),Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:fe.a.link,children:"Reports"})})]})})};var ve=function(){return Object(n.jsx)("div",{className:fe.a.ControlPanel,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:fe.a.X1Row,children:[Object(n.jsx)("div",{className:fe.a.X1Field1,children:Object(n.jsx)("label",{children:" Heading : "})}),Object(n.jsx)("div",{className:fe.a.X1Field2,children:Object(n.jsx)("input",{className:fe.a.input})})]}),Object(n.jsxs)("div",{className:fe.a.X1Row,children:[Object(n.jsx)("div",{className:fe.a.X1Field1,children:Object(n.jsx)("label",{children:" Para : "})}),Object(n.jsx)("div",{className:fe.a.X1Field2,children:Object(n.jsx)("textarea",{className:fe.a.textarea})})]}),Object(n.jsx)("div",{className:fe.a.X2button,children:Object(n.jsx)(_.a,{variant:"contained",className:fe.a.button,children:"Publish"})})]})})};var Ne=function(){return Object(n.jsx)("div",{className:f.a.ccTop,children:Object(n.jsxs)(x.d,{children:[Object(n.jsx)(x.b,{exact:!0,path:"/",component:S}),Object(n.jsx)(x.b,{path:"/ccbox",component:S}),Object(n.jsx)(x.b,{path:"/resultbox",component:B}),Object(n.jsx)(x.b,{path:"/aboutus",component:G}),Object(n.jsx)(x.b,{path:"/contactus",component:te}),Object(n.jsx)(x.b,{path:"/notfound",component:ae}),Object(n.jsx)(x.b,{path:"/tempblog",component:Oe}),Object(n.jsx)(x.b,{path:"/cp",component:_e}),Object(n.jsx)(x.b,{path:"/addblog",component:ve})]})})},ye=a(21),Se=a.n(ye),ke=a(77),we=a.n(ke),Be=a(78),De=a.n(Be),Ce=a(79),Ie=a.n(Ce),Fe=a(80),Re=a.n(Fe),Le=a(81),He=a.n(Le);var Pe=function(){return Object(n.jsxs)("div",{className:Se.a.flexContainerIcons,children:[Object(n.jsx)("div",{children:Object(n.jsx)("a",{className:Se.a.iconLink,href:"https://www.facebook.com/akshaykumarofficial/",children:Object(n.jsx)(we.a,{})})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{className:Se.a.iconLink,href:"https://www.instagram.com/akshaykumar",children:Object(n.jsx)(De.a,{})})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{className:Se.a.iconLink,href:"https://www.twitter.com/amanjat261",children:Object(n.jsx)(Ie.a,{})})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{className:Se.a.iconLink,href:"https://www.youtube.com/eduvellari",children:Object(n.jsx)(Re.a,{})})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{className:Se.a.iconLink,href:"https://www.linkedin.com/",children:Object(n.jsx)(He.a,{})})})]})};var Te=function(){return Object(n.jsxs)("div",{className:Se.a.links,children:[Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:Se.a.link,to:"/aboutus",children:"About Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:Se.a.link,to:"/contactus",children:"Contact Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(ge.b,{className:Se.a.link,to:"/privacypolicy",children:"Privacy Policy"})})]})};var Ee=function(){return Object(n.jsxs)("section",{className:Se.a.footer,children:[Object(n.jsx)(Pe,{}),Object(n.jsx)("hr",{})," ",Object(n.jsx)(Te,{})]})},Me=a(58),Xe=a.n(Me),Ye=a(40),ze=a.n(Ye);a(99);var Ae=function(){var e=Object(s.useState)("N"),t=Object(o.a)(e,2),a=t[0],c=t[1],i=ze()("hamburger","Y"==a?"clicked":""),l=ze()("sidebar","Y"==a?"show":""),r=ze()("line","Y"==a?"clicked":"","line1"),d=ze()("line","Y"==a?"clicked":"","line2"),j=ze()("line","Y"==a?"clicked":"","line3"),b=function(e){c("N"==a?"Y":"N")},h=[{title:"About Us",link:"/aboutus",key:1},{title:"Contact Us",link:"/contactus",key:2},{title:"Privacy Policy",link:"/notfound",key:3},{title:"Map",link:"/notfound",key:4},{title:"Career",link:"/notfound",key:5},{title:"Blog",link:"/tempblog",key:6}].map((function(e){return Object(n.jsx)("li",{className:"item",children:Object(n.jsx)(ge.b,{className:"itemLink",to:e.link,onClick:b,children:e.title})},e.key)}));return Object(n.jsx)("div",{children:Object(n.jsxs)("section",{className:"section",children:[Object(n.jsxs)("div",{id:"stupid",className:i,onClick:b,children:[Object(n.jsx)("span",{className:r}),Object(n.jsx)("span",{className:d}),Object(n.jsx)("span",{className:j})]}),Object(n.jsxs)("div",{className:l,children:[Object(n.jsx)(D.a,{className:"divider"}),Object(n.jsx)("ul",{className:"sidebarItems",children:h}),Object(n.jsx)(D.a,{className:"divider2"}),Object(n.jsx)("label",{className:"logo",children:" Lovecalcy "}),Object(n.jsx)("label",{className:"bottomLine",children:" \xa9 2020"})]})]})})};var Ue=function(){return Object(n.jsxs)("section",{className:Xe.a.header,children:[Object(n.jsx)(Ae,{}),Object(n.jsx)("div",{className:Xe.a.logo,children:Object(n.jsx)(ge.b,{to:"/",className:Xe.a.link,children:"LoveCalcy"})})]})};var Ge=function(){return Object(n.jsx)(ge.a,{basename:"/netyforms-repo",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(Ue,{}),Object(n.jsx)(Ne,{})]}),Object(n.jsx)(Ee,{})]})})},Je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,136)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))},Ke=a(64),Qe=a(51),qe={info1:{name:"Aman Jat",gender:"male"},info2:{name:"Raveena",gender:"female"}},We=Object(Qe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;if("INSERT_INFO"===t.type)return Object(Ke.a)(Object(Ke.a)({},e),{},{info1:{name:t.payload_name1,gender:t.payload_gen1},info2:{name:t.payload_name2,gender:t.payload_gen2}})}),+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(n.jsx)(u.a,{store:We,children:Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Ge,{})})}),document.getElementById("root")),Je()},14:function(e,t,a){e.exports={ControlPanel:"controlPanel_ControlPanel__3yN2i",X1Row:"controlPanel_X1Row__3Hxf2",X1Field1:"controlPanel_X1Field1__3pHT9",X1Field2:"controlPanel_X1Field2__2kBR2",input:"controlPanel_input__y9XK3",textarea:"controlPanel_textarea__Zf6p4",X2button:"controlPanel_X2button__27l9D",button:"controlPanel_button__HvRMW"}},21:function(e,t,a){e.exports={footer:"footer_footer__yGvg1",links:"footer_links__KmmhF",link:"footer_link__-mddI",flexContainerIcons:"footer_flexContainerIcons__2WYKo",iconLink:"footer_iconLink__1__FS"}},23:function(e,t,a){e.exports={aboutUsDiv:"style_aboutUsDiv__1XbBg",divider2:"style_divider2__1jfxm",asHeadingDiv:"style_asHeadingDiv__3wu3p",asHeading2Div:"style_asHeading2Div__2wR8k",labelDiv:"style_labelDiv__2dGxg"}},25:function(e,t,a){e.exports={ccTop:"content_ccTop__3Cy5b",lineDiv:"content_lineDiv__1BqGt",line1:"content_line1__2T7Iw",line2:"content_line2__ORos2",errorMessage:"content_errorMessage__3aO3_",nodata:"content_nodata__2nWRF",nodataHeading:"content_nodataHeading__1u-Q-",nodataDetailPara:"content_nodataDetailPara__30a2M"}},4:function(e,t,a){e.exports={blog:"blog_blog__zgKf8",section1:"blog_section1__3RJGB",path:"blog_path__2_W2B",link:"blog_link__1g-mf",heading:"blog_heading__2mbpk",metaData:"blog_metaData__qQdUL",authorSection:"blog_authorSection__ETXz3",authorDp:"blog_authorDp__PRgGx",authorDpImage:"blog_authorDpImage__2wZwA",authorMeta:"blog_authorMeta__30AeP",timelogo:"blog_timelogo__3oqt3",responseSection:"blog_responseSection__xo_7G",likeDiv:"blog_likeDiv__mZXTn",icon:"blog_icon__1IjlZ",count:"blog_count__2hRjy",shareDiv:"blog_shareDiv__2imWE",forwardIcon1:"blog_forwardIcon1__1u7ED",blogImage:"blog_blogImage__2hSvP",para:"blog_para__18Sye",blogBottom:"blog_blogBottom__1kQS8",blogBottomButton:"blog_blogBottomButton__1pSFY",blogBottomButtonInside:"blog_blogBottomButtonInside__wgOpk",blogButtonIcon:"blog_blogButtonIcon__1vB_j",blogButtonLabel:"blog_blogButtonLabel__n9h50",blogButtonStat:"blog_blogButtonStat__YN4mK",SgsCard:"blog_SgsCard__3-gD5",SgsCardHeader:"blog_SgsCardHeader__cx0ws",SgsCardHeaderAuthorDp:"blog_SgsCardHeaderAuthorDp__1MjD1",SgsCardHeaderHeading:"blog_SgsCardHeaderHeading__1vFUi",SgsImageDiv:"blog_SgsImageDiv__2IYx1",SgsImage:"blog_SgsImage__1Ppm9",SgsStat:"blog_SgsStat__TGIBj",SgsStatBar1:"blog_SgsStatBar1__son6R",SgsStatTime:"blog_SgsStatTime__3jMi8",SgsStatBar2:"blog_SgsStatBar2__2FX9R",SgsStatStat:"blog_SgsStatStat__C_L--",SgsStaticons:"blog_SgsStaticons__2sbJL",DetailPara:"blog_DetailPara__3oQX5"}},58:function(e,t,a){e.exports={header:"header_header__KtytV",logo:"header_logo__r3kmo"}},70:function(e,t,a){e.exports={ButtonOutlined:"com_ButtonOutlined__3cHrr"}},91:function(e,t,a){},92:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.1fa89114.chunk.js.map