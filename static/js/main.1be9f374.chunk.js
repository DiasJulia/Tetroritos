(this.webpackJsonpaeroqueda=this.webpackJsonpaeroqueda||[]).push([[0],{14:function(n,e,t){n.exports=t(24)},19:function(n,e,t){},22:function(n,e,t){n.exports=t.p+"static/media/logo.ee7cd8ed.svg"},23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(7),c=t.n(a),i=(t(19),t(1)),u=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},l=function(n,e,t){for(var r=t.x,o=t.y,a=0;a<n.tetromino.length;a+=1)for(var c=0;c<n.tetromino[a].length;c+=1)if(0!==n.tetromino[a][c]&&(!e[a+n.pos.y+o]||!e[a+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[a+n.pos.y+o][c+n.pos.x+r][1]))return!0;return!1},f=t(2),s=t(3),d=t(8),p=t.n(d);function m(){var n=Object(f.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return b=function(){return n},n}var v=s.a.div(b(),p.a),g=s.a.div(m()),x=t(12),h={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 36"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},O=function(){var n="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return h[n]},y=function(n,e){var t=Object(r.useState)(u()),o=Object(i.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],d=f[1];return Object(r.useEffect)((function(){d(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(d((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n,e]),[a,c,s]};function j(){var n=Object(f.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return j=function(){return n},n}var w=s.a.div(j(),(function(n){return n.gameOver?"red":"#999"})),E=function(n){var e=n.gameOver,t=n.text;return o.a.createElement(w,{gameOver:e},t)};function k(){var n=Object(f.a)(["\n  width: auto;\n  /* border-radius: 5px; */\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return k=function(){return n},n}var S=s.a.div(k(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),I=function(n){var e=n.type;return o.a.createElement(S,{type:e,color:h[e].color})};function J(){var n=Object(f.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return J=function(){return n},n}var L=s.a.div(J(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),z=function(n){var e=n.stage;return o.a.createElement(L,{width:e[0].length,height:e.length},e.map((function(n){return n.map((function(n,e){return o.a.createElement(I,{key:e,type:n[0]})}))})))};function T(){var n=Object(f.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return T=function(){return n},n}var Z=s.a.button(T()),A=function(n){var e=n.callback;return o.a.createElement(Z,{onClick:e},"Start Game")},C=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(!1),f=Object(i.a)(c,2),s=f[0],d=f[1],p=function(){var n=Object(r.useState)({pos:{x:0,y:0},tetromino:h[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],o=e[1],a=Object(r.useCallback)((function(){o({pos:{x:4,y:0},tetromino:O().shape,collided:!1})}),[]),c=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()};return[t,function(n){var e=n.x,t=n.y,r=n.collided;o((function(n){return Object(x.a)({},n,{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:r})}))},a,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tetromino=c(r.tetromino,e);for(var a=r.pos.x,i=1;l(r,n,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return c(r.tetromino,-e),void(r.pos.x=a);o(r)}]}(),m=Object(i.a)(p,4),b=m[0],j=m[1],w=m[2],k=m[3],S=y(b,w),I=Object(i.a)(S,3),J=I[0],L=I[1],T=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],m=d[1],b=[40,100,300,1200],v=Object(r.useCallback)((function(){n>0&&(a((function(e){return e+b[n-1]*(p+1)})),f((function(e){return e+n})))}),[p,b,n]);return Object(r.useEffect)((function(){v()}),[v,n,o]),[o,a,l,f,p,m]}(I[2]),Z=Object(i.a)(T,6),C=Z[0],M=Z[1],N=Z[2],q=Z[3],B=Z[4],H=Z[5];console.log("renderizando");var K=function(n){l(b,J,{x:n,y:0})||j({x:n,y:0})},P=function(){N>10*(B+1)&&(H((function(n){return n+1})),a(1e3/(B+1)+200)),l(b,J,{x:0,y:1})?(b.pos.y<1&&(console.log("Fim!"),d(!0)),j({x:0,y:0,collided:!0})):j({x:0,y:1,collided:!1})},R=function(n){var e=n.keyCode;s||(37===e||65===e?K(-1):39===e||68===e?K(1):40===e||83===e?(a(null),P()):38!==e&&87!==e||k(J,1)),console.log(e)};return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){P()}),t),o.a.createElement(v,{role:"button",tabIndex:"0",onKeyDown:function(n){return R(n)},onKeyUp:function(n){var e=n.keyCode;s||40!==e&&83!==e||a(1e3/(B+1)+200)}},o.a.createElement(g,null,o.a.createElement(z,{stage:J}),o.a.createElement("aside",null,s?o.a.createElement("div",null,o.a.createElement(E,{gameOver:s,text:"game Over"}),o.a.createElement(E,{gameOver:s,text:"Mais sorte da pr\xf3xima vez"})):o.a.createElement("div",null,o.a.createElement(E,{text:"Score ".concat(C)}),o.a.createElement(E,{text:"Rows ".concat(N)}),o.a.createElement(E,{text:"Level ".concat(B)})),o.a.createElement(A,{callback:function(){L(u()),a(1e3),w(),M(0),q(0),H(0),d(!1)}}))))};t(22),t(23);var M=function(){return o.a.createElement("div",{className:""},o.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},8:function(n,e,t){n.exports=t.p+"static/media/bg.2810fe6b.png"}},[[14,1,2]]]);
//# sourceMappingURL=main.1be9f374.chunk.js.map