import{_ as P,h as t,l as T,c as D,m as a,Q as n,n as v,t as r,a4 as I,o as A,q as B,s as E,a as g}from"./chunks/framework.B3gFn30p.js";const l=o=>(B("data-v-6132c889"),o=o(),E(),o),V=I("",4),y={class:"demo-box"},N=l(()=>a("h3",{id:"_2-大小的魔法-🔍",tabindex:"-1"},[g("2. 大小的魔法 🔍 "),a("a",{class:"header-anchor",href:"#_2-大小的魔法-🔍","aria-label":'Permalink to "2. 大小的魔法 🔍"'},"​")],-1)),w=l(()=>a("p",null,"就像你呼吸时，胸口会有规律地起伏。这就是大小变化的动画！",-1)),z={class:"demo-box"},F=l(()=>a("h3",{id:"_3-旋转的魔法-🎡",tabindex:"-1"},[g("3. 旋转的魔法 🎡 "),a("a",{class:"header-anchor",href:"#_3-旋转的魔法-🎡","aria-label":'Permalink to "3. 旋转的魔法 🎡"'},"​")],-1)),M=l(()=>a("p",null,"像是玩具陀螺在转圈圈，这就是旋转动画！",-1)),O={class:"demo-box"},R=l(()=>a("h3",{id:"_4-变色的魔法-🌈",tabindex:"-1"},[g("4. 变色的魔法 🌈 "),a("a",{class:"header-anchor",href:"#_4-变色的魔法-🌈","aria-label":'Permalink to "4. 变色的魔法 🌈"'},"​")],-1)),$=l(()=>a("p",null,"就像天空的颜色从早到晚慢慢变化，这就是颜色动画！",-1)),j={class:"demo-box"},G=I("",11),K=JSON.parse('{"title":"动画基础","description":"","frontmatter":{},"headers":[],"relativePath":"kids/basic/simple-animation/basics.md","filePath":"kids/basic/simple-animation/basics.md","lastUpdated":1737094921000}'),J={name:"kids/basic/simple-animation/basics.md"},Q=Object.assign(J,{setup(o){const u=t(0),e=t(!1);let _;const d=t(50),i=t(!1);let h;const p=t(0),c=t(!1);let b;const x=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEEAD"],m=t(0),s=t(!1);let f;function k(){e.value=!e.value,e.value?_=setInterval(()=>{u.value=(u.value+5)%200},50):clearInterval(_)}function C(){i.value=!i.value,i.value?h=setInterval(()=>{d.value=50+Math.sin(Date.now()/500)*20},50):(clearInterval(h),d.value=50)}function S(){c.value=!c.value,c.value?b=setInterval(()=>{p.value=(p.value+5)%360},50):clearInterval(b)}function q(){s.value=!s.value,s.value?f=setInterval(()=>{m.value=(m.value+1)%x.length},1e3):clearInterval(f)}return T(()=>()=>{clearInterval(_),clearInterval(h),clearInterval(b),clearInterval(f)}),(U,X)=>(A(),D("div",null,[V,a("div",y,[a("div",{class:"magic-box",style:n({transform:`translateX(${u.value}px)`})}," 🚗 ",4),a("button",{onClick:k,class:v({active:e.value})},r(e.value?"停止":"开始")+"移动 ",3)]),N,w,a("div",z,[a("div",{class:"magic-box",style:n({width:d.value+"px",height:d.value+"px"})}," 🎈 ",4),a("button",{onClick:C,class:v({active:i.value})},r(i.value?"停止":"开始")+"缩放 ",3)]),F,M,a("div",O,[a("div",{class:"magic-box",style:n({transform:`rotate(${p.value}deg)`})}," 🎡 ",4),a("button",{onClick:S,class:v({active:c.value})},r(c.value?"停止":"开始")+"旋转 ",3)]),R,$,a("div",j,[a("div",{class:"magic-box",style:n({backgroundColor:x[m.value]})}," 🎨 ",4),a("button",{onClick:q,class:v({active:s.value})},r(s.value?"停止":"开始")+"变色 ",3)]),G]))}}),L=P(Q,[["__scopeId","data-v-6132c889"]]);export{K as __pageData,L as default};
