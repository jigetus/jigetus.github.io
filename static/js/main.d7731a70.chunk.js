(this.webpackJsonpjigetus=this.webpackJsonpjigetus||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(16),o=n.n(r),a=(n(22),n(14)),i=n(1);function s(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var l=function(e){for(var t=function(){var e=Object(c.useState)([0,0]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(c.useLayoutEffect)((function(){function e(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),n=Object(a.a)(t,2),r=n[0],o=(n[1],"magenta"),l="#3a405734",d=Math.round(window.innerWidth/51),j=Math.round(window.innerHeight/51),u=[],f=0;f<j;f++)for(var b=0;b<d;b++)u.push({i:f,j:b});var h=function(e){var t=e.match(/\w+/g);return{i:parseInt(t[0]),j:parseInt(t[1])}};r<=420&&0!==r&&setInterval((function(){for(var e=0;e<j;e++)for(var t=0;t<d;t++)document.getElementById("".concat(e,".").concat(t)).style.color=l;var n=s(0,j-1),c=s(0,d-1);document.getElementById("".concat(n,".").concat(c)).style.color=o}),700);return Object(i.jsx)("div",{id:"bg",children:u.map((function(e){return Object(i.jsx)("div",{id:"".concat(e.i,".").concat(e.j),style:{width:50,height:50},className:"cell",onMouseEnter:function(e){return r>420?function(e){var t=e.target,n=h(t.id),c=n.i,r=n.j;if(c>=1&&r>=1&&c<=j-2&&r<=d-2){if(c>=2&&r>=2&&c<=j-3&&r<=d-3)for(var a=c-2;a<=c+2;a++)for(var i=r-2;i<=r+2;i++)document.getElementById("".concat(a,".").concat(i)).style.color="#ff00ff73";for(var s=c-1;s<=c+1;s++)for(var l=r-1;l<=r+1;l++)document.getElementById("".concat(s,".").concat(l)).style.color=o}else t.style.color=o}(e):null},onMouseLeave:function(e){return r>420?function(e){var t=e.target,n=h(t.id),c=n.i,r=n.j;if(c>=1&&r>=1&&c<=j-2&&r<=d-2){if(c>=2&&r>=2&&c<=j-3&&r<=d-3)for(var o=c-2;o<=c+2;o++)for(var a=r-2;a<=r+2;a++)document.getElementById("".concat(o,".").concat(a)).style.color=l;for(var i=c-1;i<=c+1;i++)for(var s=r-1;s<=r+1;s++)document.getElementById("".concat(i,".").concat(s)).style.color=l}else t.style.color=l}(e):null},children:Math.round(Math.random())},"".concat(e.i,".").concat(e.j))}))})},d=n(8),j=function(e){return Object(i.jsxs)("div",{className:"hello",children:["\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0414\u0430\u043d\u0438\u043b\u043e\u0432.",Object(i.jsx)("br",{}),"---------------------",Object(i.jsx)("br",{})," \u042f - ",Object(i.jsx)("span",{className:"spec",children:"full-stack web developer"})," \u0438\u0437 \u041c\u043e\u0441\u043a\u0432\u044b.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(d.b,{to:"/projects",children:Object(i.jsxs)("div",{id:"btn",tabIndex:"1",children:[Object(i.jsx)("span",{className:"noselect",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u043e\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(i.jsx)("div",{id:"circle"})]})})]})},u=n(2),f=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{path:"/",exact:!0,children:Object(i.jsx)(j,{})}),Object(i.jsx)(u.a,{path:"/projects",children:function(){return Object(i.jsx)("div",{children:"Projects"})}})]})]})};o.a.render(Object(i.jsx)(d.a,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d7731a70.chunk.js.map