import{_ as Z,h as p,l as x,c,m as s,t as I,Q as A,F as S,G as E,o as i,n as C,q as N,s as O,a as P}from"./chunks/framework.B3gFn30p.js";const j=v=>(N("data-v-4b76f2e4"),v=v(),O(),v),B=j(()=>s("h1",{id:"_2048",tabindex:"-1"},[P("2048 "),s("a",{class:"header-anchor",href:"#_2048","aria-label":'Permalink to "2048"'},"​")],-1)),J={class:"game-container"},M={class:"score"},q=JSON.parse('{"title":"2048","description":"","frontmatter":{},"headers":[],"relativePath":"games/2048.md","filePath":"games/2048.md","lastUpdated":1736921119000}'),T={name:"games/2048.md"},U=Object.assign(T,{setup(v){const t=p([]),f=p(0),_=p(!1);function g(){h(),u(),u(),document.addEventListener("keydown",w)}function h(){t.value=Array(4).fill().map(()=>Array(4).fill(0))}function u(){const a=[];if(t.value.forEach((o,r)=>{o.forEach((n,R)=>{n===0&&a.push({x:r,y:R})})}),a.length===0)return;const{x:e,y:l}=a[Math.floor(Math.random()*a.length)];t.value[e][l]=Math.random()<.9?2:4}function w(a){if(_.value)return;let e=!1;switch(JSON.stringify(t.value),a.key){case"ArrowUp":e=k();break;case"ArrowDown":e=D();break;case"ArrowLeft":e=y();break;case"ArrowRight":e=G();break;default:return}e&&(u(),b())}function y(){return d(t.value)}function G(){t.value=t.value.map(e=>e.reverse());const a=d(t.value);return t.value=t.value.map(e=>e.reverse()),a}function k(){t.value=m(t.value);const a=d(t.value);return t.value=m(t.value),a}function D(){t.value=m(t.value),t.value=t.value.map(e=>e.reverse());const a=d(t.value);return t.value=t.value.map(e=>e.reverse()),t.value=m(t.value),a}function d(a){let e=!1;for(let l=0;l<a.length;l++){const o=a[l],r=o.filter(n=>n!==0);for(let n=0;n<r.length-1;n++)r[n]===r[n+1]&&(r[n]*=2,f.value+=r[n],r.splice(n+1,1),e=!0);for(;r.length<4;)r.push(0);JSON.stringify(o)!==JSON.stringify(r)&&(e=!0),a[l]=r}return e}function m(a){return a[0].map((e,l)=>a.map(o=>o[l]))}function b(){for(let a=0;a<4;a++)for(let e=0;e<4;e++)if(t.value[a][e]===0)return;for(let a=0;a<4;a++)for(let e=0;e<3;e++)if(t.value[a][e]===t.value[a][e+1]||t.value[e][a]===t.value[e+1][a])return;_.value=!0,alert(`游戏结束！得分：${f.value}`)}function L(){f.value=0,_.value=!1,h(),u(),u()}return x(()=>{g()}),(a,e)=>(i(),c("div",null,[B,s("div",J,[s("div",M,"得分："+I(f.value),1),s("div",{class:"grid",style:A(`width: ${4*110}px`)},[(i(!0),c(S,null,E(t.value,(l,o)=>(i(),c("div",{key:o,class:"row"},[(i(!0),c(S,null,E(l,(r,n)=>(i(),c("div",{key:n,class:C(["cell",`cell-${r}`])},I(r||""),3))),128))]))),128))],4),s("button",{onClick:L,class:"reset-button"},"重新开始")])]))}}),Q=Z(U,[["__scopeId","data-v-4b76f2e4"]]);export{q as __pageData,Q as default};
