import{_ as q,p as t,v as S,c as T,o as D,ag as x,j as a,N as v,n as d,t as n,a as f}from"./chunks/framework.CPp4lspA.js";const A={class:"demo-box"},B={class:"demo-box"},E={class:"demo-box"},N={class:"demo-box"},M=JSON.parse('{"title":"动画基础","description":"","frontmatter":{},"headers":[],"relativePath":"kids/basic/simple-animation/basics.md","filePath":"kids/basic/simple-animation/basics.md","lastUpdated":1737094921000}'),V={name:"kids/basic/simple-animation/basics.md"},y=Object.assign(V,{setup(z){const r=t(0),e=t(!1);let u;const c=t(50),i=t(!1);let p;const b=t(0),s=t(!1);let m;const g=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEEAD"],_=t(0),o=t(!1);let h;function k(){e.value=!e.value,e.value?u=setInterval(()=>{r.value=(r.value+5)%200},50):clearInterval(u)}function I(){i.value=!i.value,i.value?p=setInterval(()=>{c.value=50+Math.sin(Date.now()/500)*20},50):(clearInterval(p),c.value=50)}function C(){s.value=!s.value,s.value?m=setInterval(()=>{b.value=(b.value+5)%360},50):clearInterval(m)}function P(){o.value=!o.value,o.value?h=setInterval(()=>{_.value=(_.value+1)%g.length},1e3):clearInterval(h)}return S(()=>()=>{clearInterval(u),clearInterval(p),clearInterval(m),clearInterval(h)}),(w,l)=>(D(),T("div",null,[l[0]||(l[0]=x('<h1 id="动画基础" tabindex="-1" data-v-6132c889>动画基础 <a class="header-anchor" href="#动画基础" aria-label="Permalink to &quot;动画基础&quot;" data-v-6132c889>​</a></h1><h2 id="认识动画的四个魔法-✨" tabindex="-1" data-v-6132c889>认识动画的四个魔法 ✨ <a class="header-anchor" href="#认识动画的四个魔法-✨" aria-label="Permalink to &quot;认识动画的四个魔法 ✨&quot;" data-v-6132c889>​</a></h2><h3 id="_1-移动的魔法-🚀" tabindex="-1" data-v-6132c889>1. 移动的魔法 🚀 <a class="header-anchor" href="#_1-移动的魔法-🚀" aria-label="Permalink to &quot;1. 移动的魔法 🚀&quot;" data-v-6132c889>​</a></h3><p data-v-6132c889>想象一下，当你坐在车上，窗外的风景不断向后移动。这就是移动动画！</p>',4)),a("div",A,[a("div",{class:"magic-box",style:v({transform:`translateX(${r.value}px)`})}," 🚗 ",4),a("button",{onClick:k,class:d({active:e.value})},n(e.value?"停止":"开始")+"移动 ",3)]),l[1]||(l[1]=a("h3",{id:"_2-大小的魔法-🔍",tabindex:"-1"},[f("2. 大小的魔法 🔍 "),a("a",{class:"header-anchor",href:"#_2-大小的魔法-🔍","aria-label":'Permalink to "2. 大小的魔法 🔍"'},"​")],-1)),l[2]||(l[2]=a("p",null,"就像你呼吸时，胸口会有规律地起伏。这就是大小变化的动画！",-1)),a("div",B,[a("div",{class:"magic-box",style:v({width:c.value+"px",height:c.value+"px"})}," 🎈 ",4),a("button",{onClick:I,class:d({active:i.value})},n(i.value?"停止":"开始")+"缩放 ",3)]),l[3]||(l[3]=a("h3",{id:"_3-旋转的魔法-🎡",tabindex:"-1"},[f("3. 旋转的魔法 🎡 "),a("a",{class:"header-anchor",href:"#_3-旋转的魔法-🎡","aria-label":'Permalink to "3. 旋转的魔法 🎡"'},"​")],-1)),l[4]||(l[4]=a("p",null,"像是玩具陀螺在转圈圈，这就是旋转动画！",-1)),a("div",E,[a("div",{class:"magic-box",style:v({transform:`rotate(${b.value}deg)`})}," 🎡 ",4),a("button",{onClick:C,class:d({active:s.value})},n(s.value?"停止":"开始")+"旋转 ",3)]),l[5]||(l[5]=a("h3",{id:"_4-变色的魔法-🌈",tabindex:"-1"},[f("4. 变色的魔法 🌈 "),a("a",{class:"header-anchor",href:"#_4-变色的魔法-🌈","aria-label":'Permalink to "4. 变色的魔法 🌈"'},"​")],-1)),l[6]||(l[6]=a("p",null,"就像天空的颜色从早到晚慢慢变化，这就是颜色动画！",-1)),a("div",N,[a("div",{class:"magic-box",style:v({backgroundColor:g[_.value]})}," 🎨 ",4),a("button",{onClick:P,class:d({active:o.value})},n(o.value?"停止":"开始")+"变色 ",3)]),l[7]||(l[7]=x('<h2 id="动画的秘密-🔮" tabindex="-1" data-v-6132c889>动画的秘密 🔮 <a class="header-anchor" href="#动画的秘密-🔮" aria-label="Permalink to &quot;动画的秘密 🔮&quot;" data-v-6132c889>​</a></h2><p data-v-6132c889>动画就像是魔术，它的秘密就是&quot;一点一点的变化&quot;：</p><ol data-v-6132c889><li data-v-6132c889>移动：位置一点点改变</li><li data-v-6132c889>大小：尺寸一点点变化</li><li data-v-6132c889>旋转：角度一点点转动</li><li data-v-6132c889>变色：颜色一点点过渡</li></ol><div class="tip custom-block" data-v-6132c889><p class="custom-block-title" data-v-6132c889>小提示</p><p data-v-6132c889>试试看：</p><ul data-v-6132c889><li data-v-6132c889>同时点击多个按钮，看看会发生什么？</li><li data-v-6132c889>观察每种动画的变化过程</li><li data-v-6132c889>想想生活中还有哪些东西在动？</li></ul></div><h2 id="动手练习-✍️" tabindex="-1" data-v-6132c889>动手练习 ✍️ <a class="header-anchor" href="#动手练习-✍️" aria-label="Permalink to &quot;动手练习 ✍️&quot;" data-v-6132c889>​</a></h2><ol data-v-6132c889><li data-v-6132c889><p data-v-6132c889>找一找：</p><ul data-v-6132c889><li data-v-6132c889>你的玩具中，哪些会动？</li><li data-v-6132c889>它们是用了哪种动画魔法？</li></ul></li><li data-v-6132c889><p data-v-6132c889>想一想：</p><ul data-v-6132c889><li data-v-6132c889>如果把多种魔法组合起来会怎样？</li><li data-v-6132c889>比如：既旋转又变色的风车 🎡</li><li data-v-6132c889>或者：又移动又变大的气球 🎈</li></ul></li><li data-v-6132c889><p data-v-6132c889>画一画：</p><ul data-v-6132c889><li data-v-6132c889>在纸上画一个简单的动画</li><li data-v-6132c889>可以是一朵开放的花 🌸</li><li data-v-6132c889>或是一只飞翔的小鸟 🐦</li></ul></li></ol><div class="warning custom-block" data-v-6132c889><p class="custom-block-title" data-v-6132c889>注意事项</p><ul data-v-6132c889><li data-v-6132c889>动画不要太快，会让人眼花</li><li data-v-6132c889>变化要平滑，不要太突然</li><li data-v-6132c889>颜色选择要温和，不要太刺眼</li></ul></div><h2 id="下节预告-🎬" tabindex="-1" data-v-6132c889>下节预告 🎬 <a class="header-anchor" href="#下节预告-🎬" aria-label="Permalink to &quot;下节预告 🎬&quot;" data-v-6132c889>​</a></h2><p data-v-6132c889>下次我们将学习如何：</p><ul data-v-6132c889><li data-v-6132c889>让多个动画一起播放</li><li data-v-6132c889>制作更复杂的动画效果</li><li data-v-6132c889>创建自己的动画故事</li></ul><p data-v-6132c889>准备好你的想象力，我们下次见！ 👋</p>',11))]))}}),j=q(y,[["__scopeId","data-v-6132c889"]]);export{M as __pageData,j as default};
