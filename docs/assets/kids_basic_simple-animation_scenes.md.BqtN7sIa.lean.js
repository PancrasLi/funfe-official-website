import{_ as P,p as i,v as B,c as o,o as k,ag as _,j as e,F as S,B as T,N as F,t as u,a as j,e as M,n as I}from"./chunks/framework.CPp4lspA.js";const N=["onClick"],V={class:"game-box"},w={key:0,class:"target"},O={class:"score"},L=JSON.parse('{"title":"场景切换","description":"","frontmatter":{},"headers":[],"relativePath":"kids/basic/simple-animation/scenes.md","filePath":"kids/basic/simple-animation/scenes.md","lastUpdated":1737094921000}'),z={name:"kids/basic/simple-animation/scenes.md"},G=Object.assign(z,{setup(R){const s=i("day"),h=i(!1),n={day:{background:"#87CEEB",elements:["☀️","🌤️","🦅"],nextScene:"sunset"},sunset:{background:"#FFA07A",elements:["🌅","🦢","🎈"],nextScene:"night"},night:{background:"#191970",elements:["🌙","⭐","🦉"],nextScene:"day"}},v=i(0),t=i(!1),p=i(""),b=i([]);let c;const l=i({});function f(){if(h.value)return;h.value=!0;const d=n[s.value].nextScene;setTimeout(()=>{s.value=d,g(),h.value=!1},1e3)}function g(){l.value={},n[s.value].elements.forEach((d,a)=>{l.value[d]={x:Math.random()*80+10,y:Math.random()*60+20}})}function C(){t.value||(t.value=!0,v.value=0,b.value=[...n[s.value].elements],m(),c=setInterval(()=>{A()},2e3))}function q(){t.value=!1,clearInterval(c),g()}function m(){const d=b.value.filter(a=>a!==p.value);p.value=d[Math.floor(Math.random()*d.length)]}function A(){Object.keys(l.value).forEach(d=>{l.value[d]={x:Math.random()*80+10,y:Math.random()*60+20}})}function x(d){t.value&&(d===p.value?(v.value+=10,m()):v.value=Math.max(0,v.value-5))}return B(()=>(g(),()=>clearInterval(c))),(d,a)=>(k(),o("div",null,[a[1]||(a[1]=_("",5)),e("div",{class:"scene-box",style:F({backgroundColor:n[s.value].background,opacity:h.value?.5:1})},[(k(!0),o(S,null,T(n[s.value].elements,(r,D)=>{var y,E;return k(),o("div",{key:D,class:"scene-element",style:F({left:((y=l.value[r])==null?void 0:y.x)+"%",top:((E=l.value[r])==null?void 0:E.y)+"%"}),onClick:$=>x(r)},u(r),13,N)}),128)),e("div",{class:"controls"},[e("button",{onClick:f}," 切换场景 ")])],4),a[2]||(a[2]=e("h3",{id:"_2-寻找游戏-🎯",tabindex:"-1"},[j("2. 寻找游戏 🎯 "),e("a",{class:"header-anchor",href:"#_2-寻找游戏-🎯","aria-label":'Permalink to "2. 寻找游戏 🎯"'},"​")],-1)),a[3]||(a[3]=e("p",null,"试试找出场景中的特定元素！",-1)),e("div",V,[t.value?(k(),o("div",w," 寻找: "+u(p.value),1)):M("",!0),e("div",O," 得分: "+u(v.value),1),e("button",{onClick:a[0]||(a[0]=r=>t.value?q():C()),class:I({active:t.value})},u(t.value?"停止游戏":"开始游戏"),3)]),a[4]||(a[4]=_("",50))]))}}),U=P(G,[["__scopeId","data-v-2ed97201"]]);export{L as __pageData,U as default};
