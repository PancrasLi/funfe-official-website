import{_ as D,h as c,l as C,c as A,m as t,t as k,a5 as E,a6 as F,a as p,o as O,q as R,s as B}from"./chunks/framework.B3gFn30p.js";const n=d=>(R("data-v-9781fb18"),d=d(),B(),d),L=n(()=>t("h1",{id:"贪吃蛇",tabindex:"-1"},[p("贪吃蛇 "),t("a",{class:"header-anchor",href:"#贪吃蛇","aria-label":'Permalink to "贪吃蛇"'},"​")],-1)),N={class:"game-container"},U={class:"game-header"},V={class:"score-board"},G=n(()=>t("span",{class:"score-label"},"得分",-1)),$={class:"score-value"},j={class:"speed-control"},q=n(()=>t("label",null,"速度：",-1)),J=n(()=>t("option",{value:200},"🐌 慢速",-1)),T=n(()=>t("option",{value:150},"🚶 中速",-1)),z=n(()=>t("option",{value:100},"🏃 快速",-1)),H=n(()=>t("option",{value:50},"⚡ 极速",-1)),K=[J,T,z,H],Q={class:"controls"},W=["disabled"],X=n(()=>t("span",{class:"btn-icon"},"▶️",-1)),Y=n(()=>t("span",{class:"btn-icon"},"🔄",-1)),Z=n(()=>t("div",{class:"game-tips"},[t("p",null,"使用键盘方向键控制蛇的移动 ⬆️ ⬇️ ⬅️ ➡️")],-1)),oe=JSON.parse('{"title":"贪吃蛇","description":"","frontmatter":{},"headers":[],"relativePath":"games/snake.md","filePath":"games/snake.md","lastUpdated":1737364282000}'),ee={name:"games/snake.md"},ae=Object.assign(ee,{setup(d){const i=c(null),a=c(null),o=c([{x:10,y:10}]),u=c({x:15,y:15}),v=c("right"),r=c(null),h=c(0),f=c(150);function w(){a.value=i.value.getContext("2d"),document.addEventListener("keydown",P),y(),g()}function m(){r.value||(r.value=setInterval(S,f.value))}function S(){a.value.clearRect(0,0,i.value.width,i.value.height),M(),I(),g(),y()}function M(){const e={...o.value[0]};switch(v.value){case"up":e.y--;break;case"down":e.y++;break;case"left":e.x--;break;case"right":e.x++;break}o.value.unshift(e),e.x===u.value.x&&e.y===u.value.y?(h.value+=10,b()):o.value.pop()}function y(){o.value.forEach((e,l)=>{if(l===0){a.value.fillStyle="#2E7D32",a.value.beginPath(),a.value.roundRect(e.x*20,e.y*20,18,18,5),a.value.fill(),a.value.fillStyle="white";const s=v.value==="left"?-2:2;a.value.beginPath(),a.value.arc(e.x*20+12+s,e.y*20+6,2,0,Math.PI*2),a.value.arc(e.x*20+12+s,e.y*20+12,2,0,Math.PI*2),a.value.fill()}else{const s=1-l/o.value.length*.6;a.value.fillStyle=`rgba(76, 175, 80, ${s})`,a.value.beginPath(),a.value.roundRect(e.x*20,e.y*20,18,18,5),a.value.fill()}})}function g(){a.value.fillStyle="#FF5252",a.value.beginPath(),a.value.arc(u.value.x*20+9,u.value.y*20+9,8,0,Math.PI*2),a.value.fill(),a.value.fillStyle="rgba(255, 255, 255, 0.4)",a.value.beginPath(),a.value.arc(u.value.x*20+7,u.value.y*20+7,3,0,Math.PI*2),a.value.fill()}function b(){u.value={x:Math.floor(Math.random()*(i.value.width/20)),y:Math.floor(Math.random()*(i.value.height/20))}}function P(e){e.preventDefault();const s={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"}[e.key];if(!s)return;({up:"down",down:"up",left:"right",right:"left"})[s]!==v.value&&(v.value=s)}function I(){const e=o.value[0];(e.x<0||e.x>=i.value.width/20||e.y<0||e.y>=i.value.height/20)&&x();for(let l=1;l<o.value.length;l++)e.x===o.value[l].x&&e.y===o.value[l].y&&x()}function x(){clearInterval(r.value),r.value=null,alert(`游戏结束！得分：${h.value}`),_()}function _(){o.value=[{x:10,y:10}],v.value="right",h.value=0,b()}return C(()=>{w()}),(e,l)=>(O(),A("div",null,[L,t("div",N,[t("div",U,[t("div",V,[G,t("span",$,k(h.value),1)]),t("div",j,[q,E(t("select",{"onUpdate:modelValue":l[0]||(l[0]=s=>f.value=s),onChange:_},K,544),[[F,f.value]])])]),t("canvas",{ref_key:"canvas",ref:i,width:"600",height:"400",class:"game-canvas"},null,512),t("div",Q,[t("button",{onClick:m,class:"start-btn",disabled:r.value},[X,p(" "+k(r.value?"游戏进行中":"开始游戏"),1)],8,W),t("button",{onClick:_,class:"reset-btn"},[Y,p(" 重新开始 ")])]),Z])]))}}),se=D(ae,[["__scopeId","data-v-9781fb18"]]);export{oe as __pageData,se as default};
