(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(3),a=c.n(s),o=(c(9),c(4)),i=(c(10),c(0));var r=function(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),c=e[0],s=e[1],a=function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){var e=Math.floor(Math.random()*t.length);s(t[e])}))};return Object(n.useEffect)((function(){a()}),[]),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"quote-box",children:[Object(i.jsxs)("p",{className:"quote",children:['"',c.text,'"']}),Object(i.jsxs)("p",{className:"author",children:["--",c.author]}),Object(i.jsxs)("div",{className:"btns",children:[Object(i.jsx)("button",{className:"click",onClick:a,children:"New Quote"}),Object(i.jsx)("a",{className:"tweet",href:"twitter.com/intent/tweet",target:"_blank",children:"Tweet"})]})]})})};a.a.render(Object(i.jsx)(r,{}),document.getElementById("root"))},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c639e6c0.chunk.js.map