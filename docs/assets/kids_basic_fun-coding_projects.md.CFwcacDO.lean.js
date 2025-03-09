import{_ as T,p,v as D,c,o as u,j as e,a as v,F as _,B as m,N as y,n as g,t as f}from"./chunks/framework.CPp4lspA.js";const B={class:"project-container forest-project"},F={class:"forest-scene"},$={class:"controls"},S=["disabled"],E={class:"project-container music-project"},L={class:"music-scene"},z={class:"controls"},G={class:"project-container space-project"},R={class:"space-scene"},W={class:"controls"},X={class:"fuel-gauge"},Y={class:"direction-pad"},q={class:"project-container rainbow-project"},A={class:"color-palette"},H=["onClick"],J={class:"project-container pet-project"},O={class:"pet-scene"},V={class:"happiness-meter"},I={class:"controls"},U=["onClick","disabled"],te=JSON.parse('{"title":"趣味小项目 🎨","description":"","frontmatter":{},"headers":[],"relativePath":"kids/basic/fun-coding/projects.md","filePath":"kids/basic/fun-coding/projects.md","lastUpdated":1737097729000}'),K={name:"kids/basic/fun-coding/projects.md"},Q=Object.assign(K,{setup(Z){const h=p({trees:Array(5).fill().map(()=>({height:Math.random()*50+50,isGrowing:!1})),waterLevel:0,sunLevel:0,isPlaying:!1}),a=p({notes:["🎵","🎶","🎼","🎹","🎸"],currentNote:0,isPlaying:!1,tempo:500}),n=p({rocket:{x:50,y:50,fuel:100,isFlying:!1},stars:Array(10).fill().map(()=>({x:Math.random()*100,y:Math.random()*100,collected:!1}))}),d=p({colors:["red","orange","yellow","green","blue","purple"],currentColor:0,isDrawing:!1,paths:[]}),r=p({currentPet:"🐶",tricks:["跳跃","转圈","握手","坐下"],isPerforming:!1,happiness:50});function x(){h.value.isPlaying=!0,h.value.trees.forEach((s,t)=>{setTimeout(()=>{s.isGrowing=!0},t*500)})}function P(){a.value.isPlaying=!a.value.isPlaying;function s(){a.value.isPlaying&&(a.value.currentNote=(a.value.currentNote+1)%a.value.notes.length,setTimeout(s,a.value.tempo))}a.value.isPlaying&&s()}function k(s){if(!(n.value.rocket.fuel<=0)){switch(n.value.rocket.isFlying=!0,n.value.rocket.x,n.value.rocket.y,s){case"up":n.value.rocket.y-=10;break;case"down":n.value.rocket.y+=10;break;case"left":n.value.rocket.x-=10;break;case"right":n.value.rocket.x+=10;break}n.value.stars.forEach(t=>{if(!t.collected){const o=t.x*window.innerWidth/100,i=t.y*window.innerHeight/100;Math.sqrt(Math.pow(n.value.rocket.x-o,2)+Math.pow(n.value.rocket.y-i,2))<30&&(t.collected=!0)}}),n.value.rocket.fuel-=1,setTimeout(()=>{n.value.rocket.isFlying=!1},200)}}let l=null;function b(){const s=document.querySelector(".drawing-canvas");s&&(s.width=s.offsetWidth,s.height=s.offsetHeight,l=s.getContext("2d"),l.lineCap="round",l.lineJoin="round")}function C(s){if(!l)return;d.value.isDrawing=!0;const t=s.target.getBoundingClientRect(),o=s.clientX-t.left,i=s.clientY-t.top;l.beginPath(),l.moveTo(o,i),l.strokeStyle=d.value.colors[d.value.currentColor],l.lineWidth=5}function j(s){if(!d.value.isDrawing||!l)return;const t=s.target.getBoundingClientRect(),o=s.clientX-t.left,i=s.clientY-t.top;l.lineTo(o,i),l.stroke()}function w(){d.value.isDrawing=!1}D(()=>{b(),window.addEventListener("resize",b)});function M(s){r.value.isPerforming||(r.value.isPerforming=!0,r.value.happiness+=10,setTimeout(()=>{r.value.isPerforming=!1},1e3))}return(s,t)=>(u(),c("div",null,[t[4]||(t[4]=e("h1",{id:"趣味小项目-🎨",tabindex:"-1"},[v("趣味小项目 🎨 "),e("a",{class:"header-anchor",href:"#趣味小项目-🎨","aria-label":'Permalink to "趣味小项目 🎨"'},"​")],-1)),t[5]||(t[5]=e("h2",{id:"_1-魔法森林-🌳",tabindex:"-1"},[v("1. 魔法森林 🌳 "),e("a",{class:"header-anchor",href:"#_1-魔法森林-🌳","aria-label":'Permalink to "1. 魔法森林 🌳"'},"​")],-1)),e("div",B,[e("div",F,[(u(!0),c(_,null,m(h.value.trees,(o,i)=>(u(),c("div",{key:i,class:g(["tree",{growing:o.isGrowing}]),style:y({height:o.height+"px"})}," 🌳 ",6))),128))]),e("div",$,[e("button",{onClick:x,disabled:h.value.isPlaying},"开始生长",8,S)])]),t[6]||(t[6]=e("h2",{id:"_2-音乐盒-🎵",tabindex:"-1"},[v("2. 音乐盒 🎵 "),e("a",{class:"header-anchor",href:"#_2-音乐盒-🎵","aria-label":'Permalink to "2. 音乐盒 🎵"'},"​")],-1)),e("div",E,[e("div",L,[e("div",{class:g(["note",{active:a.value.isPlaying}])},f(a.value.notes[a.value.currentNote]),3)]),e("div",z,[e("button",{onClick:P},f(a.value.isPlaying?"停止":"播放"),1)])]),t[7]||(t[7]=e("h2",{id:"_3-宇宙探险-🚀",tabindex:"-1"},[v("3. 宇宙探险 🚀 "),e("a",{class:"header-anchor",href:"#_3-宇宙探险-🚀","aria-label":'Permalink to "3. 宇宙探险 🚀"'},"​")],-1)),e("div",G,[e("div",R,[e("div",{class:g(["rocket",{flying:n.value.rocket.isFlying}]),style:y({left:n.value.rocket.x+"px",top:n.value.rocket.y+"px"})}," 🚀 ",6),(u(!0),c(_,null,m(n.value.stars,(o,i)=>(u(),c("div",{key:i,class:g(["star",{collected:o.collected}]),style:y({left:o.x+"%",top:o.y+"%"})}," ⭐ ",6))),128))]),e("div",W,[e("div",X,"燃料: "+f(n.value.rocket.fuel)+"%",1),e("div",Y,[e("button",{onClick:t[0]||(t[0]=o=>k("up"))},"⬆️"),e("button",{onClick:t[1]||(t[1]=o=>k("left"))},"⬅️"),e("button",{onClick:t[2]||(t[2]=o=>k("right"))},"➡️"),e("button",{onClick:t[3]||(t[3]=o=>k("down"))},"⬇️")])])]),t[8]||(t[8]=e("h2",{id:"_4-彩虹画笔-🎨",tabindex:"-1"},[v("4. 彩虹画笔 🎨 "),e("a",{class:"header-anchor",href:"#_4-彩虹画笔-🎨","aria-label":'Permalink to "4. 彩虹画笔 🎨"'},"​")],-1)),e("div",q,[e("canvas",{class:"drawing-canvas",onMousedown:C,onMousemove:j,onMouseup:w,onMouseleave:w},null,32),e("div",A,[(u(!0),c(_,null,m(d.value.colors,(o,i)=>(u(),c("div",{key:o,class:"color-option",style:y({backgroundColor:o}),onClick:N=>d.value.currentColor=i},null,12,H))),128))])]),t[9]||(t[9]=e("h2",{id:"_5-宠物训练营-🐾",tabindex:"-1"},[v("5. 宠物训练营 🐾 "),e("a",{class:"header-anchor",href:"#_5-宠物训练营-🐾","aria-label":'Permalink to "5. 宠物训练营 🐾"'},"​")],-1)),e("div",J,[e("div",O,[e("div",{class:g(["pet",{performing:r.value.isPerforming}])},f(r.value.currentPet),3),e("div",V," 开心指数: "+f(r.value.happiness),1)]),e("div",I,[(u(!0),c(_,null,m(r.value.tricks,o=>(u(),c("button",{key:o,onClick:i=>M(),disabled:r.value.isPerforming},f(o),9,U))),128))])])]))}}),se=T(Q,[["__scopeId","data-v-bd1619fd"]]);export{te as __pageData,se as default};
