(this["webpackJsonpbank-search-app"]=this["webpackJsonpbank-search-app"]||[]).push([[0],{119:function(e,t,c){},120:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(24),i=c.n(s),r=(c(92),c(58)),l=c.n(r),j=c(73),o=c(22),b=c(14),O=c(127),d=(c(93),c(124)),u=c(44),h=c(128),x=c(125),f=(c(94),c(95),c(74)),m=c.n(f),p=c(5);var A=function(){for(var e=Object(b.f)(),t=Object(n.useState)([]),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)([]),r=Object(o.a)(i,2),f=r[0],A=r[1],g=Object(n.useState)(1),N=Object(o.a)(g,2),v=N[0],S=N[1],I=Object(n.useState)(5),k=Object(o.a)(I,2),D=k[0],y=k[1],C=Object(n.useState)(!1),H=Object(o.a)(C,2),T=H[0],M=H[1],W=Object(n.useState)(""),U=Object(o.a)(W,2),E=U[0],w=U[1],B=Object(n.useState)(5),L=Object(o.a)(B,1)[0],P=Object(n.useState)(5),R=Object(o.a)(P,2),K=R[0],J=R[1],_=Object(n.useState)(0),F=Object(o.a)(_,2),V=F[0],q=F[1],z=function(e){S(Number(e.target.id))},G=[],Q=1;Q<=Math.ceil(f.length/D);Q++)G.push(Q);var X=v*D,Y=X-D,Z=f.slice(Y,X);console.log(typeof Z);var $=G.map((function(e){return e<K+1&&e>V?Object(p.jsx)("li",{id:e,onClick:z,className:v===e?"active":null,children:e},e):null})),ee=function(){S(v+1),v+1>K&&(J(K+L),q(V+L))},te=function(){S(v-1),(v-1)%L===0&&(J(K-L),q(V-L))},ce=null;G.length>K&&(ce=Object(p.jsx)("li",{onClick:ee,children:" \u2026 "}));var ne=null;V>=1&&(ne=Object(p.jsx)("li",{onClick:te,children:" \u2026 "}));var ae=Object(n.useState)("MUMBAIROWDATA"),se=Object(o.a)(ae,2),ie=se[0],re=se[1],le=Object(n.useState)("MUMBAI"),je=Object(o.a)(le,2),oe=je[0],be=je[1],Oe=Object(n.useState)("MUMBAISHOWDATA"),de=Object(o.a)(Oe,2),ue=de[0],he=de[1];Object(n.useEffect)((function(){xe(oe,ie,ue)}),[]);var xe=function(){var e=Object(j.a)(l.a.mark((function e(t,c,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==localStorage.getItem(c)){e.next=12;break}return M(!0),e.next=4,m.a.get("https://vast-shore-74260.herokuapp.com/banks?city="+t);case 4:a=e.sent,console.log(typeof a),s(a.data),A(a.data),M(!1),console.log("fetch end"),e.next=15;break;case 12:A(JSON.parse(localStorage.getItem(c))),s(JSON.parse(localStorage.getItem(c))),console.log("localstorage fetched");case 15:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),fe=Object(p.jsxs)(d.a,{children:[Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){be("MUMBAI"),re("MUMBAIROWDATA"),he("MUMBAISHOWDATA"),w(""),xe("MUMBAI","MUMBAIROWDATA","MUMBAISHOWDATA")},danger:!0,children:"Mumbai"})}),Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){be("PUNE"),re("PUNEROWDATA"),he("PUNESHOWDATA"),w(""),xe("PUNE","PUNEROWDATA","PUNESHOWDATA")},danger:!0,children:"PUNE"})}),Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){be("NASHIK"),re("NASHIKROWDATA"),he("NASHIKSHOWDATA"),w(""),xe("NASHIK","NASHIKROWDATA","NASHIKSHOWDATA")},danger:!0,children:"NASHIK"})}),Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){be("DELHI"),re("DELHIROWDATA"),he("DELHISHOWDATA"),w(""),xe("DELHI","DELHIROWDATA","DELHISHOWDATA")},danger:!0,children:"DELHI"})})]}),me=Object(p.jsxs)(d.a,{children:[Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){y(5),console.log(D)},danger:!0,children:"5 / page"})}),Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){y(10),console.log(D)},danger:!0,children:"10 / page"})}),Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){y(15),console.log(D)},danger:!0,children:"15 / page"})}),Object(p.jsx)(d.a.Item,{children:Object(p.jsx)(u.a,{className:"btn-city",onClick:function(){y(20),console.log(D)},danger:!0,children:"20 / page"})})]}),pe=Object(n.useState)(!0),Ae=Object(o.a)(pe,2),ge=Ae[0],Ne=Ae[1];function ve(e){a.map((function(t){return t.ifsc===e&&(!0===t.favorite?(t.favorite=!1,Ne(!ge)):!1===t.favorite&&(t.favorite=!0,Ne(!ge))),ge})),localStorage.setItem(ie,JSON.stringify(a)),s(a);var t=Ie(E);localStorage.setItem(ue,JSON.stringify(t)),console.log("showData :",f)}var Se=0;function Ie(e){var t=a.filter((function(t){return t.bank_name.toLowerCase().includes(e.toLowerCase())||t.ifsc.toLowerCase().includes(e.toLowerCase())?t:null}));return A(t),f}return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("section",{className:"filters",children:[Object(p.jsx)(h.a,{overlay:fe,placement:"bottomCenter",arrow:!0,children:Object(p.jsx)(u.a,{children:"Search By City"})}),Object(p.jsx)("div",{className:"search-input",children:Object(p.jsx)(x.a.Search,{className:"ant-input-search",id:"search-bar",value:E,placeholder:"Search",onChange:function(e){return function(e){w(e.target.value);var t=e.target.value;""===t?A(a):(clearTimeout(Se),Se=setTimeout((function(){clearTimeout(Se),Ie(t)}),300))}(e)},onSearch:Ie,enterButton:!0})})]}),T?Object(p.jsx)("div",{className:"spin-container",children:Object(p.jsx)("div",{className:"loading"})}):Object(p.jsx)("section",{children:Z.map((function(t,c){return Object(p.jsx)("div",{className:"card-container",children:Object(p.jsxs)(O.a,{children:[void 0===t.favorite?Object.assign(t,{favorite:!1}):console.log(t.favorite),Object(p.jsx)(O.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[t.bank_name,t.favorite?Object(p.jsx)("button",{onClick:function(){return ve(t.ifsc)},className:"btn btn-danger",children:"Unlike"}):Object(p.jsx)("button",{onClick:function(){return ve(t.ifsc)},className:"btn btn-success",children:"Like"})]})}),Object(p.jsxs)(O.a.Body,{children:[Object(p.jsx)(O.a.Title,{children:t.ifsc}),Object(p.jsx)(O.a.Text,{children:t.address}),Object(p.jsx)(u.a,{variant:"primary",onClick:function(){return function(t){e.push({pathname:"/".concat(t.ifsc),data:t})}(t)},children:"View"})]})]})},c)}))}),T?null:Object(p.jsxs)("section",{className:"d-flex justify-content-center flex-wrap align-items-baseline",children:[Object(p.jsxs)("ul",{className:"pageNumbers",children:[Object(p.jsx)("li",{children:Object(p.jsx)("button",{onClick:te,disabled:v===G[0],children:"Prev"})}),ne,$,ce,Object(p.jsx)("li",{children:Object(p.jsx)("button",{onClick:ee,disabled:v===G[G.length-1],children:"Next"})})]}),Object(p.jsx)(h.a,{overlay:me,placement:"bottomCenter",arrow:!0,children:Object(p.jsx)(u.a,{children:"Items Per Page"})})]})]})};c(119);var g=function(){var e=Object(b.g)(),t=[];return console.log(typeof t),t.push(e.data),console.log(e.data),t?Object(p.jsxs)("div",{className:"main container",children:[Object(p.jsx)("h5",{className:"text-center font-weight-bold pb-3",children:Object(p.jsx)("span",{className:"values",children:t[0].bank_name})}),Object(p.jsxs)("p",{children:["Ifsc Code :  ",Object(p.jsx)("span",{children:t[0].ifsc})]}),Object(p.jsxs)("p",{children:["Bank Id :  ",Object(p.jsx)("span",{children:t[0].bank_id})]}),Object(p.jsxs)("p",{children:["Branch :  ",Object(p.jsx)("span",{children:t[0].branch})]}),Object(p.jsxs)("p",{children:["City :  ",Object(p.jsx)("span",{children:t[0].city})]}),Object(p.jsxs)("p",{children:["District :  ",Object(p.jsx)("span",{children:t[0].district})]}),Object(p.jsxs)("p",{children:["State :  ",Object(p.jsx)("span",{children:t[0].state})]}),Object(p.jsxs)("p",{children:["Full address :  ",Object(p.jsx)("span",{children:t[0].address})]})]}):null};var N=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:"/",children:Object(p.jsx)(A,{})}),Object(p.jsx)(b.a,{path:"/:ifsc",children:Object(p.jsx)(g,{})})]})})},v=c(45);i.a.render(Object(p.jsx)(v.a,{children:Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N,{})})}),document.getElementById("root"))},92:function(e,t,c){},95:function(e,t,c){}},[[120,1,2]]]);
//# sourceMappingURL=main.76c7f146.chunk.js.map