import{_ as na,h as e,l as Q,c as oa,m as a,Q as s,t as n,n as r,a4 as U,o as sa,q as da,s as ia,a as c}from"./chunks/framework.B3gFn30p.js";const o=g=>(da("data-v-7de1608e"),g=g(),ia(),g),ra=U("",5),ca={class:"demo-box"},va=o(()=>a("h3",{id:"_2-自由飞翔的小鸟-🦅",tabindex:"-1"},[c("2. 自由飞翔的小鸟 🦅 "),a("a",{class:"header-anchor",href:"#_2-自由飞翔的小鸟-🦅","aria-label":'Permalink to "2. 自由飞翔的小鸟 🦅"'},"​")],-1)),ua=o(()=>a("p",null,"小鸟在天空中飞翔，它的翅膀会随着高度变化而改变。",-1)),ha={class:"demo-box"},_a=o(()=>a("h3",{id:"_3-奔跑的小狗-🐕",tabindex:"-1"},[c("3. 奔跑的小狗 🐕 "),a("a",{class:"header-anchor",href:"#_3-奔跑的小狗-🐕","aria-label":'Permalink to "3. 奔跑的小狗 🐕"'},"​")],-1)),pa=o(()=>a("p",null,"看，小狗在奔跑时会换不同的姿势！",-1)),ma={class:"demo-box"},fa=o(()=>a("h3",{id:"_4-顽皮的小猫-😺",tabindex:"-1"},[c("4. 顽皮的小猫 😺 "),a("a",{class:"header-anchor",href:"#_4-顽皮的小猫-😺","aria-label":'Permalink to "4. 顽皮的小猫 😺"'},"​")],-1)),ba=o(()=>a("p",null,"小猫最调皮了，它可以又转又跳，表情还会变化！",-1)),ga={class:"demo-box"},xa=o(()=>a("h2",{id:"让角色们一起玩耍-🎪",tabindex:"-1"},[c("让角色们一起玩耍！ 🎪 "),a("a",{class:"header-anchor",href:"#让角色们一起玩耍-🎪","aria-label":'Permalink to "让角色们一起玩耍！ 🎪"'},"​")],-1)),ya=o(()=>a("h3",{id:"_1-追逐游戏-小兔子和小鸟-🎮",tabindex:"-1"},[c("1. 追逐游戏：小兔子和小鸟 🎮 "),a("a",{class:"header-anchor",href:"#_1-追逐游戏-小兔子和小鸟-🎮","aria-label":'Permalink to "1. 追逐游戏：小兔子和小鸟 🎮"'},"​")],-1)),ka=o(()=>a("p",null,"看，小兔子想和小鸟一起玩！",-1)),Ia={class:"controls"},Sa=o(()=>a("h3",{id:"_2-舞蹈派对-小猫和小狗-💃",tabindex:"-1"},[c("2. 舞蹈派对：小猫和小狗 💃 "),a("a",{class:"header-anchor",href:"#_2-舞蹈派对-小猫和小狗-💃","aria-label":'Permalink to "2. 舞蹈派对：小猫和小狗 💃"'},"​")],-1)),Ma=o(()=>a("p",null,"小猫和小狗在开舞会呢！",-1)),Pa={class:"demo-box party-box"},$a=U("",15),Ta=JSON.parse('{"title":"角色动画","description":"","frontmatter":{},"headers":[],"relativePath":"kids/basic/simple-animation/characters.md","filePath":"kids/basic/simple-animation/characters.md","lastUpdated":1737094921000}'),qa={name:"kids/basic/simple-animation/characters.md"},Ca=Object.assign(qa,{setup(g){const v=e(0),F=e("🐰"),u=e(!1);let M;const x=e(0),H=e("🦅"),h=e(!1);let P;const y=e(0),J=["🐕","🦮","🐕","🐩"],_=e(!1);let $;const q=e(30),k=e(0),C=e("😺"),p=e(!1);let D;function W(){u.value=!u.value,u.value?M=setInterval(()=>{const t=Date.now()/300;v.value=Math.sin(t)*30;const l=Math.cos(t)*20;F.value=v.value>0?"🐰":"🐇",R.value={transform:`translateY(${v.value}px) translateX(${l}px) rotate(${v.value}deg)`}},50):(clearInterval(M),v.value=0,R.value={transform:"none"})}function G(){h.value=!h.value,h.value?P=setInterval(()=>{const t=Date.now()/400;x.value=Math.sin(t)*40;const l=Math.cos(t)*30,i=Math.sin(t)*15;H.value=x.value>0?"🦅":"🦢",V.value={transform:`translateY(${x.value}px) translateX(${l}px) rotate(${i}deg)`}},50):(clearInterval(P),x.value=0,V.value={transform:"none"})}function K(){_.value=!_.value,_.value?$=setInterval(()=>{y.value=(y.value+1)%J.length;const t=Math.abs(Math.sin(Date.now()/200))*10,l=Date.now()/10%100;A.value={transform:`translateY(-${t}px) translateX(${l}px)`}},200):(clearInterval($),y.value=0,A.value={transform:"none"})}function L(){p.value=!p.value,p.value?D=setInterval(()=>{const t=Date.now()/300;q.value=30+Math.sin(t)*10,k.value=(k.value+10)%360;const l=Math.abs(Math.sin(t))*20,i=Math.cos(t)*15;C.value=["😺","😸","😺","😹"][Math.floor(t)%4],N.value={transform:`rotate(${k.value}deg) translateY(-${l}px) translateX(${i}px)`,fontSize:q.value+"px"}},50):(clearInterval(D),q.value=30,k.value=0,C.value="😺",N.value={transform:"none",fontSize:"30px"})}Q(()=>()=>{clearInterval(M),clearInterval(P),clearInterval($),clearInterval(D)});const T=e("garden");e(!1);const I=e(0),S=e(200),w=e(0),z=e(-30),m=e(!1);let X;const d=e({cat:0,dog:180}),f=e({cat:"😺",dog:"🐕"}),b=e(!1);let Y;function Z(){T.value={garden:"sky",sky:"playground",playground:"garden"}[T.value]}function aa(){m.value=!m.value,m.value?X=setInterval(()=>{const t=Date.now()/300;I.value=(I.value+3)%250,w.value=Math.sin(t)*20;const l=Math.sin(t)*10;S.value=(S.value+4)%250,z.value=-30+Math.sin(t*1.5)*30;const i=Math.cos(t)*15;E.value={transform:`translate(${I.value}px, ${w.value}px) rotate(${l}deg)`},O.value={transform:`translate(${S.value}px, ${z.value}px) rotate(${i}deg)`}},50):(clearInterval(X),ta())}function ea(){b.value=!b.value,b.value?Y=setInterval(()=>{const t=Date.now()/300;d.value.cat=(d.value.cat+10)%360,d.value.dog=(d.value.dog+10)%360;const l=Math.abs(Math.sin(t))*20,i=Math.abs(Math.cos(t))*20;j.value={transform:`rotate(${d.value.cat}deg) translateX(50px) translateY(-${l}px)`},B.value={transform:`rotate(${d.value.dog}deg) translateX(50px) translateY(-${i}px)`},f.value.cat=["😺","😸","😺","😹"][Math.floor(t)%4],f.value.dog=["🐕","🦮","🐕","🐩"][Math.floor(t)%4]},100):(clearInterval(Y),la())}const R=e({transform:"none"}),V=e({transform:"none"}),A=e({transform:"none"}),N=e({transform:"none",fontSize:"30px"}),E=e({transform:"none"}),O=e({transform:"none"}),j=e({transform:"none"}),B=e({transform:"none"});function ta(){I.value=0,S.value=200,w.value=0,z.value=-30,E.value={transform:"none"},O.value={transform:"none"}}function la(){d.value={cat:0,dog:180},f.value={cat:"😺",dog:"🐕"},j.value={transform:"none"},B.value={transform:"none"}}return Q(()=>()=>{clearInterval(X),clearInterval(Y)}),(t,l)=>(sa(),oa("div",null,[ra,a("div",ca,[a("div",{class:"character",style:s(R.value)},n(F.value),5),a("button",{onClick:W,class:r({active:u.value})},n(u.value?"停止":"开始")+"跳跃 ",3)]),va,ua,a("div",ha,[a("div",{class:"character",style:s(V.value)},n(H.value),5),a("button",{onClick:G,class:r({active:h.value})},n(h.value?"停止":"开始")+"飞翔 ",3)]),_a,pa,a("div",ma,[a("div",{class:"character",style:s(A.value)},n(J[y.value]),5),a("button",{onClick:K,class:r({active:_.value})},n(_.value?"停止":"开始")+"奔跑 ",3)]),fa,ba,a("div",ga,[a("div",{class:"character",style:s(N.value)},n(C.value),5),a("button",{onClick:L,class:r({active:p.value})},n(p.value?"停止":"开始")+"玩耍 ",3)]),xa,ya,ka,a("div",{class:r(["demo-box scene-box",T.value])},[a("div",{class:"character bunny",style:s(E.value)}," 🐰 ",4),a("div",{class:"character bird",style:s(O.value)}," 🦅 ",4),a("div",Ia,[a("button",{onClick:aa,class:r({active:m.value})},n(m.value?"停止":"开始")+"追逐 ",3),a("button",{onClick:Z}," 换场景 ")])],2),Sa,Ma,a("div",Pa,[a("div",{class:"character cat",style:s(j.value)},n(f.value.cat),5),a("div",{class:"character dog",style:s(B.value)},n(f.value.dog),5),a("button",{onClick:ea,class:r({active:b.value})},n(b.value?"停止":"开始")+"跳舞 ",3)]),$a]))}}),wa=na(Ca,[["__scopeId","data-v-7de1608e"]]);export{Ta as __pageData,wa as default};
