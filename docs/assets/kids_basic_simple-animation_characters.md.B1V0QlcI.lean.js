import{_ as ta,p as t,v as H,c as la,o as na,ag as J,j as a,N as o,t as n,n as r,a as i}from"./chunks/framework.CPp4lspA.js";const oa={class:"demo-box"},sa={class:"demo-box"},da={class:"demo-box"},ra={class:"demo-box"},ia={class:"controls"},va={class:"demo-box party-box"},fa=JSON.parse('{"title":"角色动画","description":"","frontmatter":{},"headers":[],"relativePath":"kids/basic/simple-animation/characters.md","filePath":"kids/basic/simple-animation/characters.md","lastUpdated":1737094921000}'),ua={name:"kids/basic/simple-animation/characters.md"},ca=Object.assign(ua,{setup(ha){const v=t(0),O=t("🐰"),u=t(!1);let I;const g=t(0),B=t("🦅"),c=t(!1);let M;const x=t(0),F=["🐕","🦮","🐕","🐩"],h=t(!1);let P;const S=t(30),_=t(0),$=t("😺"),p=t(!1);let C;function U(){u.value=!u.value,u.value?I=setInterval(()=>{const l=Date.now()/300;v.value=Math.sin(l)*30;const e=Math.cos(l)*20;O.value=v.value>0?"🐰":"🐇",X.value={transform:`translateY(${v.value}px) translateX(${e}px) rotate(${v.value}deg)`}},50):(clearInterval(I),v.value=0,X.value={transform:"none"})}function W(){c.value=!c.value,c.value?M=setInterval(()=>{const l=Date.now()/400;g.value=Math.sin(l)*40;const e=Math.cos(l)*30,d=Math.sin(l)*15;B.value=g.value>0?"🦅":"🦢",Y.value={transform:`translateY(${g.value}px) translateX(${e}px) rotate(${d}deg)`}},50):(clearInterval(M),g.value=0,Y.value={transform:"none"})}function G(){h.value=!h.value,h.value?P=setInterval(()=>{x.value=(x.value+1)%F.length;const l=Math.abs(Math.sin(Date.now()/200))*10,e=Date.now()/10%100;N.value={transform:`translateY(-${l}px) translateX(${e}px)`}},200):(clearInterval(P),x.value=0,N.value={transform:"none"})}function K(){p.value=!p.value,p.value?C=setInterval(()=>{const l=Date.now()/300;S.value=30+Math.sin(l)*10,_.value=(_.value+10)%360;const e=Math.abs(Math.sin(l))*20,d=Math.cos(l)*15;$.value=["😺","😸","😺","😹"][Math.floor(l)%4],R.value={transform:`rotate(${_.value}deg) translateY(-${e}px) translateX(${d}px)`,fontSize:S.value+"px"}},50):(clearInterval(C),S.value=30,_.value=0,$.value="😺",R.value={transform:"none",fontSize:"30px"})}H(()=>()=>{clearInterval(I),clearInterval(M),clearInterval(P),clearInterval(C)});const D=t("garden");t(!1);const y=t(0),k=t(200),q=t(0),T=t(-30),f=t(!1);let w;const s=t({cat:0,dog:180}),m=t({cat:"😺",dog:"🐕"}),b=t(!1);let z;function L(){D.value={garden:"sky",sky:"playground",playground:"garden"}[D.value]}function Q(){f.value=!f.value,f.value?w=setInterval(()=>{const l=Date.now()/300;y.value=(y.value+3)%250,q.value=Math.sin(l)*20;const e=Math.sin(l)*10;k.value=(k.value+4)%250,T.value=-30+Math.sin(l*1.5)*30;const d=Math.cos(l)*15;V.value={transform:`translate(${y.value}px, ${q.value}px) rotate(${e}deg)`},A.value={transform:`translate(${k.value}px, ${T.value}px) rotate(${d}deg)`}},50):(clearInterval(w),aa())}function Z(){b.value=!b.value,b.value?z=setInterval(()=>{const l=Date.now()/300;s.value.cat=(s.value.cat+10)%360,s.value.dog=(s.value.dog+10)%360;const e=Math.abs(Math.sin(l))*20,d=Math.abs(Math.cos(l))*20;E.value={transform:`rotate(${s.value.cat}deg) translateX(50px) translateY(-${e}px)`},j.value={transform:`rotate(${s.value.dog}deg) translateX(50px) translateY(-${d}px)`},m.value.cat=["😺","😸","😺","😹"][Math.floor(l)%4],m.value.dog=["🐕","🦮","🐕","🐩"][Math.floor(l)%4]},100):(clearInterval(z),ea())}const X=t({transform:"none"}),Y=t({transform:"none"}),N=t({transform:"none"}),R=t({transform:"none",fontSize:"30px"}),V=t({transform:"none"}),A=t({transform:"none"}),E=t({transform:"none"}),j=t({transform:"none"});function aa(){y.value=0,k.value=200,q.value=0,T.value=-30,V.value={transform:"none"},A.value={transform:"none"}}function ea(){s.value={cat:0,dog:180},m.value={cat:"😺",dog:"🐕"},E.value={transform:"none"},j.value={transform:"none"}}return H(()=>()=>{clearInterval(w),clearInterval(z)}),(l,e)=>(na(),la("div",null,[e[0]||(e[0]=J("",5)),a("div",oa,[a("div",{class:"character",style:o(X.value)},n(O.value),5),a("button",{onClick:U,class:r({active:u.value})},n(u.value?"停止":"开始")+"跳跃 ",3)]),e[1]||(e[1]=a("h3",{id:"_2-自由飞翔的小鸟-🦅",tabindex:"-1"},[i("2. 自由飞翔的小鸟 🦅 "),a("a",{class:"header-anchor",href:"#_2-自由飞翔的小鸟-🦅","aria-label":'Permalink to "2. 自由飞翔的小鸟 🦅"'},"​")],-1)),e[2]||(e[2]=a("p",null,"小鸟在天空中飞翔，它的翅膀会随着高度变化而改变。",-1)),a("div",sa,[a("div",{class:"character",style:o(Y.value)},n(B.value),5),a("button",{onClick:W,class:r({active:c.value})},n(c.value?"停止":"开始")+"飞翔 ",3)]),e[3]||(e[3]=a("h3",{id:"_3-奔跑的小狗-🐕",tabindex:"-1"},[i("3. 奔跑的小狗 🐕 "),a("a",{class:"header-anchor",href:"#_3-奔跑的小狗-🐕","aria-label":'Permalink to "3. 奔跑的小狗 🐕"'},"​")],-1)),e[4]||(e[4]=a("p",null,"看，小狗在奔跑时会换不同的姿势！",-1)),a("div",da,[a("div",{class:"character",style:o(N.value)},n(F[x.value]),5),a("button",{onClick:G,class:r({active:h.value})},n(h.value?"停止":"开始")+"奔跑 ",3)]),e[5]||(e[5]=a("h3",{id:"_4-顽皮的小猫-😺",tabindex:"-1"},[i("4. 顽皮的小猫 😺 "),a("a",{class:"header-anchor",href:"#_4-顽皮的小猫-😺","aria-label":'Permalink to "4. 顽皮的小猫 😺"'},"​")],-1)),e[6]||(e[6]=a("p",null,"小猫最调皮了，它可以又转又跳，表情还会变化！",-1)),a("div",ra,[a("div",{class:"character",style:o(R.value)},n($.value),5),a("button",{onClick:K,class:r({active:p.value})},n(p.value?"停止":"开始")+"玩耍 ",3)]),e[7]||(e[7]=a("h2",{id:"让角色们一起玩耍-🎪",tabindex:"-1"},[i("让角色们一起玩耍！ 🎪 "),a("a",{class:"header-anchor",href:"#让角色们一起玩耍-🎪","aria-label":'Permalink to "让角色们一起玩耍！ 🎪"'},"​")],-1)),e[8]||(e[8]=a("h3",{id:"_1-追逐游戏-小兔子和小鸟-🎮",tabindex:"-1"},[i("1. 追逐游戏：小兔子和小鸟 🎮 "),a("a",{class:"header-anchor",href:"#_1-追逐游戏-小兔子和小鸟-🎮","aria-label":'Permalink to "1. 追逐游戏：小兔子和小鸟 🎮"'},"​")],-1)),e[9]||(e[9]=a("p",null,"看，小兔子想和小鸟一起玩！",-1)),a("div",{class:r(["demo-box scene-box",D.value])},[a("div",{class:"character bunny",style:o(V.value)}," 🐰 ",4),a("div",{class:"character bird",style:o(A.value)}," 🦅 ",4),a("div",ia,[a("button",{onClick:Q,class:r({active:f.value})},n(f.value?"停止":"开始")+"追逐 ",3),a("button",{onClick:L}," 换场景 ")])],2),e[10]||(e[10]=a("h3",{id:"_2-舞蹈派对-小猫和小狗-💃",tabindex:"-1"},[i("2. 舞蹈派对：小猫和小狗 💃 "),a("a",{class:"header-anchor",href:"#_2-舞蹈派对-小猫和小狗-💃","aria-label":'Permalink to "2. 舞蹈派对：小猫和小狗 💃"'},"​")],-1)),e[11]||(e[11]=a("p",null,"小猫和小狗在开舞会呢！",-1)),a("div",va,[a("div",{class:"character cat",style:o(E.value)},n(m.value.cat),5),a("div",{class:"character dog",style:o(j.value)},n(m.value.dog),5),a("button",{onClick:Z,class:r({active:b.value})},n(b.value?"停止":"开始")+"跳舞 ",3)]),e[12]||(e[12]=J("",15))]))}}),ma=ta(ca,[["__scopeId","data-v-7de1608e"]]);export{fa as __pageData,ma as default};
