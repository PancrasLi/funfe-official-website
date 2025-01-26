import{_ as H,h as T,l as O,c as u,m as o,F as y,G as q,a as X,t as w,e as k,a4 as E,o as h,n as M,Q as Y,q as J,s as Q}from"./chunks/framework.B3gFn30p.js";const c=C=>(J("data-v-1877a3de"),C=C(),Q(),C),U=E("",4),x={class:"pattern-section"},K={class:"pattern-container"},Z={class:"pattern-selector"},z=["onClick"],aa={class:"color-selector"},ea=c(()=>o("span",{class:"color-label"},"选择颜色：",-1)),ta=["onClick"],la=c(()=>o("canvas",{class:"pattern-canvas"},null,-1)),ia={class:"pattern-controls"},oa=["disabled"],da=["disabled"],na={key:0,class:"step-message"},sa=c(()=>o("span",{class:"step-icon"},"✨",-1)),ra=E("",6),ca={class:"pattern-section"},va={class:"pattern-container"},ua={class:"example-selector"},ha=["onClick"],_a=c(()=>o("canvas",{class:"example-canvas"},null,-1)),pa={class:"example-description"},ma={key:0},fa=c(()=>o("h4",null,"🎂 生日贺卡",-1)),ga=c(()=>o("p",null,"上方撒满星星，中间写上祝福，底部环绕爱心",-1)),ba=[fa,ga],wa={key:1},ka=c(()=>o("h4",null,"🪟 窗户装饰",-1)),Sa=c(()=>o("p",null,"四角放置大花朵，中间点缀小星星，形成漂亮的窗花",-1)),Pa=[ka,Sa],Ca={key:2},Ta=c(()=>o("h4",null,"📔 笔记本封面",-1)),ya=c(()=>o("p",null,"边框用小爱心装饰，角落放置花朵，中间留空写字",-1)),qa=[Ta,ya],Ma={key:3},Ea=c(()=>o("h4",null,"🖼️ 相框装饰",-1)),Ia=c(()=>o("p",null,"使用不同大小的图案，搭配渐变色彩，营造立体效果",-1)),Aa=[Ea,Ia],Ra={key:4},Va=c(()=>o("h4",null,"🎄 节日装饰画",-1)),Na=c(()=>o("p",null,"左边用星星组成圣诞树，右边用花朵拼成春字",-1)),Wa=[Va,Na],Da=E("",2),$a=JSON.parse('{"title":"神奇的图案世界 🎨","description":"","frontmatter":{},"headers":[],"relativePath":"kids/intermediate/drawing/patterns.md","filePath":"kids/intermediate/drawing/patterns.md","lastUpdated":1737364282000}'),Ba={name:"kids/intermediate/drawing/patterns.md"},Fa=Object.assign(Ba,{setup(C){const e=T({width:400,height:300,context:null,exampleContext:null,color:"#42b883",lineWidth:2}),d=T({currentPattern:"stars",currentStep:0,totalSteps:3,message:"",isPlaying:!1,patterns:[{id:"stars",name:"星星",icon:"⭐"},{id:"flowers",name:"花朵",icon:"🌸"},{id:"hearts",name:"爱心",icon:"❤️"}]}),m=T({selected:"#42b883",options:[{color:"#42b883",name:"绿色",icon:"🟢"},{color:"#ff6b6b",name:"红色",icon:"🔴"},{color:"#4dabf7",name:"蓝色",icon:"🔵"},{color:"#ffd43b",name:"黄色",icon:"🟡"}]}),_=T({currentExample:"birthday",isPlaying:!1,examples:[{id:"birthday",name:"生日贺卡",icon:"🎂"},{id:"window",name:"窗户装饰",icon:"🪟"},{id:"notebook",name:"笔记本",icon:"📔"},{id:"frame",name:"相框",icon:"🖼️"},{id:"holiday",name:"节日画",icon:"🎄"}]});function R(){const a=document.querySelector(".pattern-canvas"),t=document.querySelector(".example-canvas");a&&(a.width=e.value.width,a.height=e.value.height,e.value.context=a.getContext("2d")),t&&(t.width=e.value.width,t.height=e.value.height,e.value.exampleContext=t.getContext("2d"))}function I(a){a&&a.clearRect(0,0,e.value.width,e.value.height)}function g(a,t,l,i=e.value.context){const s=l,r=l/2;let p=Math.PI/2*3,P=Math.PI/5;i.beginPath(),i.moveTo(a,t-s);for(let b=0;b<5;b++)i.lineTo(a+Math.cos(p)*s,t+Math.sin(p)*s),p+=P,i.lineTo(a+Math.cos(p)*r,t+Math.sin(p)*r),p+=P;i.lineTo(a,t-s),i.closePath(),i.stroke()}function v(a,t,l,i=e.value.context){for(let n=0;n<6;n++)i.beginPath(),i.arc(a+Math.cos(n*Math.PI/3)*l/2,t+Math.sin(n*Math.PI/3)*l/2,l/3,0,Math.PI*2),i.stroke();i.beginPath(),i.arc(a,t,l/4,0,Math.PI*2),i.stroke()}function f(a,t,l,i=e.value.context){i.beginPath(),i.moveTo(a,t+l/4),i.bezierCurveTo(a-l/2,t-l/2,a-l,t+l/4,a,t+l),i.bezierCurveTo(a+l,t+l/4,a+l/2,t-l/2,a,t+l/4),i.stroke()}function S(){const a=e.value.context;if(!a)return;I(a),a.strokeStyle=m.value.selected,a.lineWidth=e.value.lineWidth;const t=d.value.currentPattern,l=d.value.currentStep,i=60,n=20;switch(l){case 0:t==="stars"?(g(200,150,n,a),d.value.message="看，这是一颗小星星！"):t==="flowers"?(v(200,150,n,a),d.value.message="这是一朵漂亮的小花！"):t==="hearts"&&(f(200,150,n,a),d.value.message="画一个爱心送给你！");break;case 1:for(let s=i;s<e.value.width-i/2;s+=i)t==="stars"?g(s,150,n,a):t==="flowers"?v(s,150,n,a):t==="hearts"&&f(s,150,n,a);d.value.message="让我们排成一排，像跳舞一样！";break;case 2:for(let s=i;s<e.value.height-i/2;s+=i)for(let r=i;r<e.value.width-i/2;r+=i)t==="stars"?g(r,s,n,a):t==="flowers"?v(r,s,n,a):t==="hearts"&&f(r,s,n,a);d.value.message="哇！变成了一片星星/花朵/爱心海洋！";break}}function V(a){d.value.currentPattern=a,d.value.currentStep=0,S()}function N(a){m.value.selected=a,S()}function W(){d.value.currentStep<d.value.totalSteps-1&&(d.value.currentStep++,S())}function D(){d.value.currentStep>0&&(d.value.currentStep--,S())}function B(a){a.fillStyle=m.value.selected+"20",a.fillRect(0,0,e.value.width,e.value.height);for(let t=0;t<10;t++)g(Math.random()*e.value.width,Math.random()*e.value.height/2,10+Math.random()*10,a);a.font="30px Arial",a.textAlign="center",a.strokeText("生日快乐！",e.value.width/2,e.value.height/2);for(let t=0;t<5;t++)f(50+t*80,e.value.height-50,15,a)}function F(a){a.strokeRect(50,50,e.value.width-100,e.value.height-100),v(80,80,30,a),v(e.value.width-80,80,30,a),v(80,e.value.height-80,30,a),v(e.value.width-80,e.value.height-80,30,a);for(let t=0;t<12;t++)g(150+Math.random()*100,100+Math.random()*100,8,a)}function L(a){for(let t=0;t<8;t++)f(30+t*50,30,10,a),f(30+t*50,e.value.height-30,10,a);v(50,50,25,a),v(e.value.width-50,50,25,a),v(50,e.value.height-50,25,a),v(e.value.width-50,e.value.height-50,25,a),a.setLineDash([5,5]),a.strokeRect(100,70,e.value.width-200,e.value.height-140),a.setLineDash([])}function $(a){const t=a.createLinearGradient(0,0,e.value.width,e.value.height);t.addColorStop(0,m.value.selected),t.addColorStop(1,m.value.options[1].color),a.strokeStyle=t,a.lineWidth=10,a.strokeRect(30,30,e.value.width-60,e.value.height-60),a.lineWidth=e.value.lineWidth;for(let l=0;l<4;l++){const i=15+l*5;g(50+l*30,50,i,a),f(e.value.width-50-l*30,50,i,a),v(50+l*30,e.value.height-50,i,a),f(e.value.width-50-l*30,e.value.height-50,i,a)}}function j(a){const t=e.value.width/4,l=e.value.height/2;for(let r=0;r<5;r++){const p=l-r*30,P=100-r*15;for(let b=0;b<3+r;b++)g(t-P/2+b*(P/(2+r)),p,8,a)}const i=e.value.width*3/4,n=e.value.height/2;[[0,-40],[40,-40],[-40,0],[0,0],[40,0],[-40,40],[40,40]].forEach(([r,p])=>{v(i+r,n+p,15,a)})}function A(){if(!_.value.isPlaying){_.value.isPlaying=!0;const a=e.value.exampleContext;if(!a)return;switch(a.strokeStyle=m.value.selected,a.lineWidth=e.value.lineWidth,I(a),_.value.currentExample){case"birthday":B(a);break;case"window":F(a);break;case"notebook":L(a);break;case"frame":$(a);break;case"holiday":j(a);break}_.value.isPlaying=!1}}function G(a){_.value.currentExample=a,A()}return O(()=>{R(),S();const a=document.querySelector(".example-canvas");a&&(a.width=e.value.width,a.height=e.value.height,e.value.exampleContext=a.getContext("2d"),A())}),(a,t)=>(h(),u("div",null,[U,o("div",x,[o("div",K,[o("div",Z,[(h(!0),u(y,null,q(d.value.patterns,l=>(h(),u("button",{key:l.id,onClick:i=>V(l.id),class:M([{active:d.value.currentPattern===l.id},"pattern-button"])},w(l.icon)+" "+w(l.name),11,z))),128))]),o("div",aa,[ea,(h(!0),u(y,null,q(m.value.options,l=>(h(),u("button",{key:l.color,onClick:i=>N(l.color),class:M([{active:m.value.selected===l.color},"color-button"]),style:Y({backgroundColor:l.color})},w(l.icon),15,ta))),128))]),la,o("div",ia,[o("button",{onClick:D,disabled:d.value.currentStep===0,class:"control-button"}," ⬅️ 上一步 ",8,oa),o("button",{onClick:W,disabled:d.value.currentStep===d.value.totalSteps-1,class:"control-button"}," 下一步 ➡️ ",8,da)]),d.value.message?(h(),u("div",na,[sa,X(" "+w(d.value.message),1)])):k("",!0)])]),ra,o("div",ca,[o("div",va,[o("div",ua,[(h(!0),u(y,null,q(_.value.examples,l=>(h(),u("button",{key:l.id,onClick:i=>G(l.id),class:M([{active:_.value.currentExample===l.id},"pattern-button"])},w(l.icon)+" "+w(l.name),11,ha))),128))]),_a,o("div",pa,[_.value.currentExample==="birthday"?(h(),u("div",ma,ba)):k("",!0),_.value.currentExample==="window"?(h(),u("div",wa,Pa)):k("",!0),_.value.currentExample==="notebook"?(h(),u("div",Ca,qa)):k("",!0),_.value.currentExample==="frame"?(h(),u("div",Ma,Aa)):k("",!0),_.value.currentExample==="holiday"?(h(),u("div",Ra,Wa)):k("",!0)])])]),Da]))}}),ja=H(Fa,[["__scopeId","data-v-1877a3de"]]);export{$a as __pageData,ja as default};
