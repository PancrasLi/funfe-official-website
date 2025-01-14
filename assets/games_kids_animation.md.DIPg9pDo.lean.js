import{_ as x,p as m,v as P,x as q,o as b,c as v,j as i,a3 as A,a4 as w,a2 as p,G as F}from"./chunks/framework.CY7y63_A.js";const S={class:"animation-playground"},C={class:"controls"},R={__name:"AnimationPlayground",setup(y){const l=m(null),n=m("bounce");let a=null,o=null,r=!1;const t={bounce:{x:300,y:50,dy:5,radius:20},rotate:{angle:0},fade:{opacity:1,delta:-.02}};P(()=>{a=l.value.getContext("2d"),h()}),q(()=>{o&&cancelAnimationFrame(o)});const d=()=>{if(r){switch(a.clearRect(0,0,l.value.width,l.value.height),n.value){case"bounce":c();break;case"rotate":u();break;case"fade":f();break}o=requestAnimationFrame(d)}},c=()=>{const e=t.bounce;a.beginPath(),a.arc(e.x,e.y,e.radius,0,Math.PI*2),a.fillStyle="#4CAF50",a.fill(),a.closePath(),e.y+=e.dy,(e.y+e.radius>l.value.height||e.y-e.radius<0)&&(e.dy=-e.dy)},u=()=>{a.save(),a.translate(300,200),a.rotate(t.rotate.angle),a.fillStyle="#2196F3",a.fillRect(-40,-40,80,80),a.restore(),t.rotate.angle+=.02},f=()=>{a.fillStyle=`rgba(156, 39, 176, ${t.fade.opacity})`,a.fillRect(200,150,200,100),t.fade.opacity+=t.fade.delta,(t.fade.opacity<=0||t.fade.opacity>=1)&&(t.fade.delta=-t.fade.delta)},_=()=>{r=!0,d()},g=()=>{r=!1,o&&cancelAnimationFrame(o)},h=()=>{var e,s;switch(r=!1,o&&cancelAnimationFrame(o),t.bounce={x:300,y:50,dy:5,radius:20},t.rotate={angle:0},t.fade={opacity:1,delta:-.02},a==null||a.clearRect(0,0,((e=l.value)==null?void 0:e.width)||600,((s=l.value)==null?void 0:s.height)||400),n.value){case"bounce":c();break;case"rotate":u();break;case"fade":f();break}};return(e,s)=>(b(),v("div",S,[i("canvas",{ref_key:"canvas",ref:l,width:"600",height:"400"},null,512),i("div",C,[i("button",{onClick:_},"开始动画"),i("button",{onClick:g},"暂停"),i("button",{onClick:h},"重置"),A(i("select",{"onUpdate:modelValue":s[0]||(s[0]=k=>n.value=k)},s[1]||(s[1]=[i("option",{value:"bounce"},"弹跳球",-1),i("option",{value:"rotate"},"旋转方块",-1),i("option",{value:"fade"},"渐变效果",-1)]),512),[[w,n.value]])])]))}},B=x(R,[["__scopeId","data-v-f5a58e49"]]),N={class:"animation-container"},M=JSON.parse('{"title":"动画基础","description":"","frontmatter":{},"headers":[],"relativePath":"games/kids/animation.md","filePath":"games/kids/animation.md","lastUpdated":1736841305000}'),V={name:"games/kids/animation.md"},U=Object.assign(V,{setup(y){return(l,n)=>(b(),v("div",null,[n[0]||(n[0]=p('<h1 id="动画基础" tabindex="-1">动画基础 <a class="header-anchor" href="#动画基础" aria-label="Permalink to &quot;动画基础&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>通过简单有趣的动画编程，了解动画的基本原理。你将学习如何让物体移动、旋转和变化，创造出生动有趣的动画效果！</p><h2 id="互动区域" tabindex="-1">互动区域 <a class="header-anchor" href="#互动区域" aria-label="Permalink to &quot;互动区域&quot;">​</a></h2>',4)),i("div",N,[F(B)]),n[1]||(n[1]=p('<h2 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><ul><li>理解动画的基本原理</li><li>学习时间和运动的关系</li><li>掌握简单的动画控制方法</li><li>培养动态思维能力</li></ul><h2 id="编程概念" tabindex="-1">编程概念 <a class="header-anchor" href="#编程概念" aria-label="Permalink to &quot;编程概念&quot;">​</a></h2><ul><li>定时器</li><li>速度与加速度</li><li>状态管理</li><li>事件监听</li></ul>',4))]))}});export{M as __pageData,U as default};
