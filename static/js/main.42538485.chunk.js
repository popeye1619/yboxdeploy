(this.webpackJsonpybox=this.webpackJsonpybox||[]).push([[0],{41:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),i=t.n(c),o=t(18),s=t.n(o),a=(t(41),t(20)),d=t(8),j=function(){var e=Object(d.c)((function(e){return e.posts})).slice().reverse();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{style:{textAlign:"center"},children:"All Posts"}),Object(r.jsx)("div",{children:e.map((function(e){return Object(r.jsx)("div",{style:{textAlign:"center"},children:Object(r.jsx)("div",{style:{padding:"1rem 2rem 1rem 2rem"},children:e.body})},e)}))})]})},u=t(10),b=t(12),l=t(13);function O(){var e=Object(b.a)(["\nfont-family: 'Work Sans', sans-serif;\n     width: 100%;     \n    height: 2rem;\n    border-radius: 5px;\n    padding: 0.5rem;\n    font-size: 1.5rem;\n  outline: none;\n        border: none;\n        background: #e8e8e8;\n"]);return O=function(){return e},e}function h(){var e=Object(b.a)(["\ntext-align: left;\nfont-size: 1rem;\n@media screen and (min-width: 768px){\n  font-size: 2.5rem;\n}\npadding: 1rem;\n"]);return h=function(){return e},e}function x(){var e=Object(b.a)(["\nbackground: #f5f5f7;\nwidth: 100%;\n@media screen and (min-width: 768px){\nwidth: 50%;\n}\n@media only screen \nand (min-device-width : 768px) \nand (max-device-width : 1024px){ \n  width: 100%;\n}\nmargin: auto;\nborder-radius: 10px;\n"]);return x=function(){return e},e}var p=l.a.div(x()),f=l.a.div(h()),m=l.a.input(O()),v=function(e){var n=e.addPost,t=i.a.useState({body:""}),c=Object(a.a)(t,2),o=c[0],s=c[1];return Object(r.jsxs)(p,{children:[Object(r.jsx)(f,{children:"New Post "}),Object(r.jsx)("hr",{style:{border:"0.1px solid lightgrey"}}),Object(r.jsxs)("div",{style:{padding:"1rem 2rem 1rem 1rem"},children:[Object(r.jsx)(m,{onChange:function(e){s(Object(u.a)(Object(u.a)({},o),{},{body:e.target.value}))},value:o.name,type:"text",name:"posts",placeholder:"Note"}),Object(r.jsx)("button",{style:{marginTop:"1rem"},onClick:function(){n(o)},children:"Add Post"})]})]})},g="ADD_POST",y="SET_POSTS",w=function(e){return{type:y,payload:e}},S=function(){var e=Object(d.b)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(v,{addPost:function(n){e(function(e){return{type:g,payload:e}}(n))}})]})},P=t(17),k=t(3),A=t(24),T=t.n(A),D=t(33),F=t(35),C={posts:[]};function L(){var e=Object(b.a)(["\ncursor: pointer;\ncolor: black;\n&:hover{\n    text-decoration: underline;\n}\n"]);return L=function(){return e},e}function E(){var e=Object(b.a)(["\nposition: fixed;\nwidth: 100%;\nbackground-color: lightgrey;\ndisplay: flex;\njustify-content: space-around;\nalign-items: center;\nheight: 3rem;\n"]);return E=function(){return e},e}var N=l.a.div(E()),z=l.a.section(L()),I=function(){return Object(r.jsxs)(N,{children:[Object(r.jsx)(P.b,{style:{textDecoration:"none"},to:"/allposts",children:Object(r.jsx)(z,{children:"ALL POSTS"})}),Object(r.jsx)(P.b,{style:{textDecoration:"none"},to:"/newpost",children:Object(r.jsx)(z,{children:"NEW POST"})})]})},B=function(){var e=Object(d.b)(),n=Object(c.useState)(!0),t=Object(a.a)(n,2),i=t[0],o=t[1];return Object(c.useEffect)((function(){e(function(){var e=Object(D.a)(T.a.mark((function e(n){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()}));case 2:t=e.sent,n(w(t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),o(!1)}),[]),Object(r.jsx)(P.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(I,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),i?Object(r.jsx)("div",{children:Object(r.jsx)("h1",{style:{textAlign:"center"},children:"...LOADING"})}):Object(r.jsxs)("div",{children:[Object(r.jsx)(k.a,{path:"/allposts",component:j})," "]}),Object(r.jsx)(k.a,{path:"/newpost",component:S})]})})};var J=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(B,{})})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),i(e),o(e)}))},_=t(16),G=t(34),M=Object(_.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(F.a)(e.posts),[n.payload])});case y:return Object(u.a)(Object(u.a)({},e),{},{posts:n.payload});default:return e}}),Object(_.a)(G.a));s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(d.a,{store:M,children:Object(r.jsx)(J,{})})}),document.getElementById("root")),W()}},[[49,1,2]]]);
//# sourceMappingURL=main.42538485.chunk.js.map