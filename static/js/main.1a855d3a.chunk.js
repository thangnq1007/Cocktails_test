(this.webpackJsonpdrink=this.webpackJsonpdrink||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(17),r=c.n(a),i=(c(25),c(7)),o=c(2),l=c(20),j=c(0);function d(e){var t=e.image,c=e.name,n=e.id,s=e.info,a=e.glass;return Object(j.jsxs)("article",{className:"cocktail",children:[Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:t,alt:c})}),Object(j.jsxs)("div",{className:"cocktail-footer",children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("h4",{children:a}),Object(j.jsx)("p",{children:s}),Object(j.jsx)(i.b,{to:"/cocktail/".concat(n),className:"btn btn-primary btn-details",children:"details"})]})]})}var b=function(){return Object(j.jsx)("div",{className:"loader"})},h=c(10),u=c.n(h),m=c(12),O=c(9),x=s.a.createContext(),f=function(e){var t=e.children,c=Object(n.useState)(!0),s=Object(O.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)("a"),o=Object(O.a)(i,2),l=o[0],d=o[1],b=Object(n.useState)([]),h=Object(O.a)(b,2),f=h[0],p=h[1],g=Object(n.useCallback)(Object(m.a)(u.a.mark((function e(){var t,c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(l));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,console.log(c),(n=c.drinks)?(s=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),p(s)):p([]),r(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),r(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])}))),[l]);return Object(n.useEffect)((function(){g()}),[l,g]),Object(j.jsx)(x.Provider,{value:{loading:a,cocktails:f,searchTerm:l,setSearchTerm:d},children:t})},p=function(){return Object(n.useContext)(x)},g=function(){var e=p(),t=e.cocktails;return e.loading?Object(j.jsx)(b,{}):t.length<1?Object(j.jsx)("h2",{className:"section-title",children:"no cocktails matched"}):Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)("h2",{className:"section-title",children:"cocktails"}),Object(j.jsx)("div",{className:"cocktails-center",children:t.map((function(e){return Object(j.jsx)(d,Object(l.a)({},e),e.id)}))})]})};function k(){var e=p().setSearchTerm,t=s.a.useRef("");return s.a.useEffect((function(){t.current.focus()}),[]),Object(j.jsx)("section",{className:"section search",children:Object(j.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"name",children:"search your favorite cocktail"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",ref:t,onChange:function(){e(t.current.value)},autocomplete:"off"})]})})})}function v(){return Object(j.jsxs)("main",{children:[Object(j.jsx)(k,{}),Object(j.jsx)(g,{})]})}var N=function(){return Object(j.jsxs)("section",{className:"section about-section",children:[Object(j.jsx)("h1",{className:"section-title",children:"About us"}),Object(j.jsx)("p",{children:"Hi, I'm Lucifer. This Cocktail Web design you are viewing is an independent project and I am solely responsible for it."}),Object(j.jsx)("p",{children:"This is a website I made for Ckery - my lover. She is quite fond of bartending and alcohol, so I think these will be of great help to her."}),Object(j.jsxs)("p",{children:["If you have more information or need to contact me, contact me via ",Object(j.jsx)("a",{href:"https://www.facebook.com/thang.nguyenquang.18041/",children:"**Facebook**"})," or ",Object(j.jsx)("a",{href:"https://mail.google.com/mail/u/0/#search/thang.nq1007%40gmail.com",children:"**Gmail**"}),"."]})]})};function y(){var e=Object(o.f)().id,t=s.a.useState(!1),c=Object(O.a)(t,2),n=c[0],a=c[1],r=s.a.useState(null),l=Object(O.a)(r,2),d=l[0],h=l[1];if(s.a.useEffect((function(){function t(){return t=Object(m.a)(u.a.mark((function t(){var c,n,s,r,i,o,l,j,d,b,m,O,x,f;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e));case 3:return c=t.sent,t.next=6,c.json();case 6:(n=t.sent).drinks?(s=n.drinks[0],r=s.strDrink,i=s.strDrinkThumb,o=s.strAlcoholic,l=s.strCategory,j=s.strGlass,d=s.strInstructions,b=s.strIngredient1,m=s.strIngredient2,O=s.strIngredient3,x=s.strIngredient4,f=s.strIngredient5,h({name:r,image:i,info:o,category:l,glass:j,instructions:d,ingredients:[b,m,O,x,f]})):h(null),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:a(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])}))),t.apply(this,arguments)}a(!0),function(){t.apply(this,arguments)}()}),[e]),n)return Object(j.jsx)(b,{});if(d){var x=d.name,f=d.image,p=d.category,g=d.info,k=d.glass,v=d.instructions,N=d.ingredients;return Object(j.jsxs)("section",{className:"section cocktail-section",children:[Object(j.jsx)("h2",{className:"section-title",children:x}),Object(j.jsxs)("div",{className:"drink",children:[Object(j.jsx)("img",{src:f,alt:x}),Object(j.jsxs)("div",{className:"drink-info",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data data-name",children:"name :"})," ",x]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data data-category",children:"category :"})," ",p]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data data-info",children:"info :"})," ",g]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data data-glass",children:"glass :"})," ",k]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data data-instructions",children:"instructons :"})," ",v]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data data-ingredients",children:"ingredients :"}),N.map((function(e,t){return e?Object(j.jsxs)("span",{children:[" ",e]},t):null}))]})]})]}),Object(j.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"back home"})]})}return Object(j.jsx)("h2",{className:"section-title",children:"no cocktail to display"})}function w(){return Object(j.jsx)("section",{className:"error-page section",children:Object(j.jsxs)("div",{className:"error-container",children:[Object(j.jsx)("h1",{children:"Oops! it's a dead end"}),Object(j.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"back home"})]})})}var I=c.p+"static/media/logo.debb737a.svg";function S(){return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"nav-center",children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("img",{src:I,alt:"cocktail db logo",className:"logo"})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/about",children:"about"})})]})]})})}var C=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(S,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{path:"/about",children:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/cocktail/:id",children:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:"*",children:Object(j.jsx)(w,{})})]})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{children:Object(j.jsx)(C,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1a855d3a.chunk.js.map