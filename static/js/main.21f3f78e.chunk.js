(this["webpackJsonpgame-app"]=this["webpackJsonpgame-app"]||[]).push([[0],{110:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(5),c=a(6),l=a(8),u=a(7),o=a(0),i=a.n(o),s=a(59),m=a.n(s),b=(a(69),a(15)),E=a(1),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"start"},i.a.createElement("h4",null,"\ub9ac\uc561\ud2b8 \ud65c\uc6a9 \ud504\ub85c\uc81d\ud2b8"),"\ub9ac\uc561\ud2b8\ub97c \uc5f0\uc2b5\ud558\uae30 \uc704\ud574 \uac04\ub2e8\ud788 \uad6c\ud604\ud574 \ubcf8 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4!")}}]),a}(i.a.Component),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"introduce"},i.a.createElement("h4",null,"\uc18c\uac1c"),i.a.createElement("img",{src:a(70)}),i.a.createElement("div",null,"\uc774 \uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \ucee4\ubba4\ub2c8\ud2f0, Tic-Tac-Toe\uac8c\uc784, Lotto\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}}]),n}(i.a.Component),f=a(9);function p(e){return i.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)}var v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return i.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),i.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),i.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(i.a.Component);function j(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(f.a)(t[a],3),r=n[0],c=n[1],l=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}var O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(c.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();j(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=j(n.squares),c=a.map((function(e,a){var n=a?a+"\ub85c \uc774\ub3d9":"\ucc98\uc74c\uc73c\ub85c \uc774\ub3d9";return i.a.createElement("li",{key:a,className:"number"},i.a.createElement("button",{className:"numberbutton",onClick:function(){return t.jumpTo(a)}},n))}));return e=r?"\uc2b9\uc790: "+r:10===this.state.history.length?"\ubb34\uc2b9\ubd80":"\ub2e4\uc74c \ud0c0\uc790 : "+(this.state.xIsNext?"X":"O"),i.a.createElement("div",{className:"tic-tac-toe"},i.a.createElement("h4",null,"Tic-Tac-Toe \uac8c\uc784"),i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-board"},i.a.createElement(v,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),i.a.createElement("div",{className:"game-info"},i.a.createElement("div",null,e),i.a.createElement("ol",null,c))))}}]),a}(i.a.Component),y=a(14),N=a(60),g=a(61),k=a.n(g),S=a(62),C=a.n(S);var q=function(){var e=Object(o.useState)({title:"",content:""}),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)([]),l=Object(f.a)(c,2),u=l[0],s=l[1];return i.a.createElement("div",{className:"community"},i.a.createElement("h4",null,"\ucee4\ubba4\ub2c8\ud2f0"),i.a.createElement("div",{className:"community_container"},u.map((function(e){return i.a.createElement("div",null,i.a.createElement("h5",null,e.title),i.a.createElement("div",null,C()(e.content)))}))),i.a.createElement("div",{className:"community_form"},i.a.createElement("h5",null,"\uac8c\uc2dc\uae00 \uc791\uc131"),i.a.createElement("input",{className:"form-title",type:"text",placeholder:"\uc81c\ubaa9",onChange:function(e){var t=e.target,c=t.name,l=t.value;r(Object(y.a)(Object(y.a)({},a),{},Object(n.a)({},c,l)))},name:"title"}),i.a.createElement(N.CKEditor,{editor:k.a,data:"",onReady:function(e){console.log("Editor is ready to use!",e)},onChange:function(e,t){var n=t.getData();r(Object(y.a)(Object(y.a)({},a),{},{content:n}))},onBlur:function(e,t){console.log("Blur.",t)},onFocus:function(e,t){console.log("Focus.",t)}})),i.a.createElement("button",{className:"form-submit",onClick:function(){s(u.concat(Object(y.a)({},a)))}},"\uc791\uc131\ud558\uae30"))},x=a(29);var w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getBackgroundColor",value:function(e){return e<=10?"rgb(255, 129, 129)":e<=20?"rgb(255, 154, 87)":e<=30?"rgb(255, 253, 162)":e<=40?"rgb(87, 146, 255)":"rgb(115, 255, 115)"}},{key:"render",value:function(){var e=this.props.number;return i.a.createElement("div",{className:"ball",style:{backgroundColor:this.getBackgroundColor(e)}},e," ")}}]),a}(o.PureComponent),T=function(){var e=Object(o.useState)([]),t=Object(f.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)([]),c=Object(f.a)(r,2),l=c[0],u=c[1],s=Object(o.useState)(null),m=Object(f.a)(s,2),b=m[0],E=m[1],h=Object(o.useState)(!0),d=Object(f.a)(h,2),p=d[0],v=d[1],j=Object(o.useRef)([]);Object(o.useEffect)((function(){for(var e=function(e){j.current[e]=setTimeout((function(){u((function(t){return[].concat(Object(x.a)(t),[a[e]])}))}),1e3*(e+1))},t=0;t<a.length-1;t++)e(t);return j.current[6]=setTimeout((function(){E(a[6]),v(!0)}),7e3),function(){j.current.forEach((function(e){clearTimeout(e)}))}}),[j.current]);return i.a.createElement("div",{className:"lotto"},i.a.createElement("h4",null,"\ub85c\ub610 \uac8c\uc784"),i.a.createElement("div",null,i.a.createElement("span",{className:"lotto_number"},"\ub2f9\ucca8 \ubc88\ud638"),i.a.createElement("span",{className:"lotto_bonus"},"\ubcf4\ub108\uc2a4"),i.a.createElement("ul",{className:"lotto_game"},i.a.createElement("li",null,i.a.createElement(w,{key:l[0],number:l[0]})),i.a.createElement("li",null,i.a.createElement(w,{key:l[1],number:l[1]})),i.a.createElement("li",null,i.a.createElement(w,{key:l[2],number:l[2]})),i.a.createElement("li",null,i.a.createElement(w,{key:l[3],number:l[3]})),i.a.createElement("li",null,i.a.createElement(w,{key:l[4],number:l[4]})),i.a.createElement("li",null,i.a.createElement(w,{key:l[5],number:l[5]})),i.a.createElement("li",null," + "),i.a.createElement("li",null,b&&i.a.createElement(w,{number:b}))),p&&i.a.createElement("button",{className:"lotto_button",onClick:function(){n(function(){for(var e=Array(45).fill().map((function(e,t){return t+1})),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);var a=t[t.length-1],n=t.splice(0,6).sort((function(e,t){return e-t}));return[].concat(Object(x.a)(n),[a])}()),u([]),E(null),v(!1),j.current=[]}},"\ucd94\ucca8\ud558\uae30")))},I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e;return i.a.createElement("div",{className:"contents-wrapper"},i.a.createElement(b.a,null,i.a.createElement("div",{className:"menu"},i.a.createElement("ul",null,i.a.createElement(b.b,{to:"/Ewhaian-Study/introduce"},i.a.createElement("li",null,"Introduce")),i.a.createElement(b.b,{to:"/Ewhaian-Study/community"},i.a.createElement("li",null,"Community")),i.a.createElement(b.b,{to:"/Ewhaian-Study/tic-tac-toe"},i.a.createElement("li",null,"Game")),i.a.createElement(b.b,{to:"/Ewhaian-Study/lotto"},i.a.createElement("li",null,"Lotto")))),i.a.createElement("div",{className:"contents"},i.a.createElement(E.c,null,i.a.createElement(E.a,(e={exact:!0,path:"/"},Object(n.a)(e,"exact",!0),Object(n.a)(e,"component",h),e)),i.a.createElement(E.a,{exact:!0,path:"/Ewhaian-Study/",component:h}),i.a.createElement(E.a,{path:"/Ewhaian-Study/introduce",component:d}),i.a.createElement(E.a,{path:"/Ewhaian-Study/community",component:q}),i.a.createElement(E.a,{path:"/Ewhaian-Study/tic-tac-toe",component:O}),i.a.createElement(E.a,{path:"/Ewhaian-Study/lotto",component:T})))))}}]),a}(i.a.Component);t.default=I;m.a.render(i.a.createElement(I,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(132)},69:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/introduceImage.66c6ac29.webp"}},[[64,1,2]]]);
//# sourceMappingURL=main.21f3f78e.chunk.js.map