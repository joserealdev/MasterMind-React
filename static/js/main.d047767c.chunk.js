(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={container:"movesTable__container__pLogR",expanded:"movesTable__expanded__1CeOU",header:"movesTable__header__3FjqU",table:"movesTable__table__1n41d"}},,function(e,t,n){e.exports={container:"header__container__epUkF",text:"header__text__1qqHg",reload:"header__reload__3GJhE"}},function(e,t,n){e.exports={wrapper:"App__wrapper__3QGUb",mainContainer:"App__mainContainer__3iVBU"}},function(e,t,n){e.exports={container:"numberSelector__container__1PZQN",btn:"numberSelector__btn__7IWBI",btnDisabled:"numberSelector__btnDisabled__IViLt"}},function(e,t,n){e.exports={container:"inputDisplay__container__labCm",input:"inputDisplay__input__xU2-k"}},function(e,t,n){e.exports={container:"body__container__3YjIu",actionButton:"body__actionButton__q3RiK"}},,,function(e,t,n){e.exports={button:"button__button__3MWgb",btnDisabled:"button__btnDisabled__1ltxk"}},,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),l=n.n(r),c=(n(23),n(1)),o=n(2),s=n(4),u=n(3),m=n(5),d=n(10),b=n.n(d),p=n(6),_=n.n(p),v=n(16),h=n.n(v),f=_.a.bind(h.a),E=function(e){var t=e.className,n=e.isDisabled,a=e.isHidden,r=e.onClick,l=e.text,c=_()(t,f({button:!0,btnDisabled:n})),o=null;return l&&(o=i.a.createElement("span",null,l)),i.a.createElement("button",{className:c,disabled:n,hidden:a,onClick:r?function(){return r(l)}:null,type:"button"},o)},x="MasterMind",k="Combinaci\xf3n",O="Posici\xf3n correcta",g="Coincidencias",N="\xdaltimo movimiento",j="Ver movimientos",D="Ocultar movimientos",y="Comprobar",w="Jugar de nuevo",C="Nueva partida",V=n(9),G=n.n(V),S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:G.a.container},i.a.createElement("div",{className:G.a.text},x),i.a.createElement(E,{className:G.a.reload,onClick:function(){return window.location.reload()},text:C}))}}]),t}(a.Component),B=n(8),A=n(11),U=n.n(A),H=function(e){var t=e.btnValues,n=e.isDisabled,a=e.onClick,r=t.map(function(e){return i.a.createElement("li",{key:e.text},i.a.createElement(E,{className:U.a.btn,isDisabled:n||e.isDisabled,onClick:a,text:e.text}))});return i.a.createElement("div",{className:U.a.container},i.a.createElement("ul",null,r))},I=function(e){var t=e.className,n=e.isDisabled,a=e.isHidden,r=e.value;return i.a.createElement("input",{className:t,disabled:n,hidden:a,type:"text",value:r})},M=n(12),P=n.n(M),q=function(e){var t=e.inputs.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(I,{className:P.a.input,isDisabled:!0,value:e.text}))});return i.a.createElement("div",{className:P.a.container},i.a.createElement("ul",null,t))},J=n(17),T=n(7),W=n.n(T),F=_.a.bind(W.a),L=function(e){var t=e.moves,n=Object(a.useState)(0),r=Object(J.a)(n,2),l=r[0],c=r[1],o=t.map(function(e){return i.a.createElement("tr",{key:e.id},i.a.createElement("td",null,e.combination),i.a.createElement("td",null,e.correctPosition),i.a.createElement("td",null,e.coincidence))}),s=F({container:!0,expanded:l});return i.a.createElement("div",{className:s},i.a.createElement("button",{type:"button",className:W.a.header,onClick:function(){return c(!l)}},i.a.createElement("div",{className:W.a.movements},l?D:j)),i.a.createElement("table",{className:W.a.table},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,k),i.a.createElement("th",null,O),i.a.createElement("th",null,g))),i.a.createElement("tbody",null,o)))},Q=function(){return[{text:"7"},{text:"8"},{text:"9"},{text:"4"},{text:"5"},{text:"6"},{text:"1"},{text:"2"},{text:"3"},{text:"0"}]},R=function(){return[{text:"",id:"inp0"},{text:"",id:"inp1"},{text:"",id:"inp2"},{text:"",id:"inp3"}]},K=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,n=[];n.length<4;){var a=Math.floor(Math.random()*(t-e+1)+e);-1===n.indexOf(a)&&n.push(a)}return console.log(n),n},Y=n(13),Z=n.n(Y),$=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).resetGame=function(e){n.setState({secretNumber:e,isDisabled:!1,btnValues:Q(),inputValues:R(),moves:[],isGameOver:!1})},n.checkAnswer=function(){var e=n.state,t=e.inputValues,a=e.secretNumber,i=e.moves,r=[],l=!1,c=t.map(function(e){return e.text}).join(""),o=0,s=0;a.forEach(function(e,n){"".concat(e)===t[n].text&&(o+=1,r[n]=1)}),o<a.length?a.forEach(function(e,n){if(1!==r[n]&&1!==r[n])for(var a=0;a<t.length;a+=1)if(t[a].text==="".concat(e)&&1!==r[a]){s+=1;break}}):l=!0,i.unshift({id:i.length,combination:c,correctPosition:o,coincidence:s}),l?n.setState({isGameOver:!0}):n.setState({btnValues:Q(),inputValues:R(),moves:i,isDisabled:!1})},n.clickHandler=function(e){for(var t=n.state,a=t.btnValues,i=t.inputValues,r=0;r<a.length;r+=1)if(a[r].text===e){a[r].isDisabled=!0;break}for(var l=0;l<i.length;l+=1)if(0===i[l].text.length){i[l].text=e;break}n.setState({btnValues:a,inputValues:i,isDisabled:i[i.length-1].text.length>0})},n.playAgain=function(){var e=K();n.resetGame(e)},n.resetGame=n.resetGame.bind(Object(B.a)(n));var a=K();return n.state={secretNumber:a,isDisabled:!1,btnValues:Q(),inputValues:R(),moves:[],isGameOver:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.btnValues,n=e.inputValues,a=e.isDisabled,r=e.moves,l=e.isGameOver,c=r[0]?i.a.createElement("div",null,N,i.a.createElement("div",null,"".concat(k,": "),i.a.createElement("span",null,r[0].combination)),i.a.createElement("div",null,"".concat(O,": "),i.a.createElement("span",null,r[0].correctPosition)),i.a.createElement("div",null,"".concat(g,": "),i.a.createElement("span",null,r[0].coincidence))):null;return i.a.createElement("div",{className:Z.a.container},i.a.createElement(q,{inputs:n}),i.a.createElement(H,{btnValues:t,isDisabled:a,onClick:this.clickHandler}),i.a.createElement(E,{className:Z.a.actionButton,isDisabled:0===n[n.length-1].text.length,onClick:l?this.playAgain:this.checkAnswer,text:l?w:y}),c,i.a.createElement(L,{moves:r}))}}]),t}(a.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:b.a.wrapper},i.a.createElement("div",{className:b.a.mainContainer},i.a.createElement(S,null),i.a.createElement($,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.d047767c.chunk.js.map