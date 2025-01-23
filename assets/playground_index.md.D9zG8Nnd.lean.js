import{p as m,v as ue,x as oe,o as d,c,j as l,n as j,t as p,F as w,C as N,N as A,ah as de,ak as ce,e as T,a0 as ve,a as me,ag as pe,G as fe}from"./chunks/framework.DA00aFuW.js";const ye={class:"playground"},be={class:"playground-header"},ge={class:"mode-switch"},_e={class:"actions"},he=["disabled"],ke={class:"playground-main"},xe={class:"editor-area"},we={class:"blocks-panel"},Ne={class:"category-blocks"},Ce=["onClick"],Be={class:"workspace"},Ee=["onDragstart","onDragover"],De={class:"block-text"},Ae=["type","onUpdate:modelValue","placeholder"],Te=["onClick"],Me={key:0,class:"workspace-empty"},Ve={key:1,class:"code-view"},Fe={class:"stage"},Le={class:"stage-content"},Se={key:0,class:"speech-bubble"},$e={class:"stage-info"},Pe={key:0,class:"help-modal"},je={class:"help-content"},Ue={__name:"Playground",setup(Z){const g=m("blocks"),M=m(""),i=m({x:0,y:0,direction:90,costume:"🐱",visible:!0}),f=m(!1),C=m([{name:"score",value:0},{name:"lives",value:3}]),y=[{category:"动作",color:"#4C97FF",items:[{id:"move",text:"移动 [N] 步",params:[{type:"number",default:10}]},{id:"turn",text:"旋转 [N] 度",params:[{type:"number",default:90}]},{id:"goto",text:"移到 x: [X] y: [Y]",params:[{type:"number",default:0},{type:"number",default:0}]}]},{category:"外观",color:"#9966FF",items:[{id:"say",text:"说 [TEXT]",params:[{type:"text",default:"你好！"}]},{id:"show",text:"显示"},{id:"hide",text:"隐藏"},{id:"change_costume",text:"换装扮为 [COSTUME]",params:[{type:"select",options:["🐱","🐶","🐰","🐸"],default:"🐱"}]}]},{category:"控制",color:"#FFAB19",items:[{id:"wait",text:"等待 [N] 秒",params:[{type:"number",default:1}]},{id:"repeat",text:"重复 [N] 次",params:[{type:"number",default:10}]},{id:"forever",text:"重复执行",isContainer:!0},{id:"if",text:"如果 [COND] 那么",params:[{type:"condition"}],isContainer:!0},{id:"if_else",text:"如果 [COND] 那么/否则",params:[{type:"condition"}],isContainer:!0,hasElse:!0}]},{category:"侦测",color:"#4CBFE6",items:[{id:"touching_edge",text:"碰到边缘?"},{id:"mouse_down",text:"鼠标按下?"},{id:"key_pressed",text:"按下键 [KEY]?",params:[{type:"select",options:["空格","上","下","左","右"],default:"空格"}]}]},{category:"运算",color:"#40BF4A",items:[{id:"add",text:"[A] + [B]",params:[{type:"number",default:0},{type:"number",default:0}]},{id:"subtract",text:"[A] - [B]",params:[{type:"number",default:0},{type:"number",default:0}]},{id:"multiply",text:"[A] × [B]",params:[{type:"number",default:0},{type:"number",default:0}]},{id:"divide",text:"[A] ÷ [B]",params:[{type:"number",default:1},{type:"number",default:1}]},{id:"greater",text:"[A] > [B]",params:[{type:"number",default:0},{type:"number",default:0}]},{id:"less",text:"[A] < [B]",params:[{type:"number",default:0},{type:"number",default:0}]},{id:"equals",text:"[A] = [B]",params:[{type:"number",default:0},{type:"number",default:0}]}]},{category:"变量",color:"#FF8C1A",items:[{id:"set_var",text:"设置变量 [VAR] 为 [VALUE]",params:[{type:"variable"},{type:"number",default:0}]},{id:"change_var",text:"改变变量 [VAR] 增加 [VALUE]",params:[{type:"variable"},{type:"number",default:1}]},{id:"get_var",text:"变量 [VAR] 的值",params:[{type:"variable"}]}]}],u=m([]),B=m({text:"",visible:!1}),E=m(-1);function V(e){var s;const t={...e,id:e.id,text:e.text,params:((s=e.params)==null?void 0:s.map(r=>({...r,value:r.default})))||[]};u.value.push(t),F()}function U(e){u.value.splice(e,1),F()}function F(){M.value=u.value.map(e=>{var s;const t=((s=e.params)==null?void 0:s.map(r=>r.value).join(", "))||"";return`${e.id}(${t});`}).join(`
`)}async function I(){if(!f.value){f.value=!0;for(const e of u.value)try{await h(e)}catch(t){console.error("执行错误:",t)}f.value=!1}}const _=m(-1);function ee(e,t){_.value=t,e.target.classList.add("dragging")}function ae(e,t){e.preventDefault();const s=u.value[_.value];if(_.value!==t&&s){const r=[...u.value];r.splice(_.value,1),r.splice(t,0,s),u.value=r,_.value=t}}function te(e){e.target.classList.remove("dragging"),_.value=-1,F()}async function h(e,t){var s,r,k,v,x;switch(E.value=t,e.id){case"move":const D=Number(e.params[0].value),q=i.value.direction*Math.PI/180,se=i.value.x+Math.cos(q)*D,le=i.value.y+Math.sin(q)*D,z=i.value.x,G=i.value.y,P=20;for(let a=0;a<=P;a++)i.value.x=z+(se-z)*(a/P),i.value.y=G+(le-G)*(a/P),await new Promise(n=>setTimeout(n,20));break;case"turn":const ie=Number(e.params[0].value),ne=i.value.direction,H=20;for(let a=0;a<=H;a++)i.value.direction=ne+ie*(a/H),await new Promise(n=>setTimeout(n,20));break;case"goto":i.value.x=Number(e.params[0].value),i.value.y=Number(e.params[1].value);break;case"say":B.value={text:e.params[0].value,visible:!0},await new Promise(a=>setTimeout(a,2e3)),B.value.visible=!1;break;case"show":i.value.visible=!0;break;case"hide":i.value.visible=!1;break;case"wait":await new Promise(a=>setTimeout(a,Number(e.params[0].value)*1e3));break;case"repeat":const re=Number(e.params[0].value);for(let a=0;a<re;a++)for(let n=t+1;n<u.value.length;n++){const o=u.value[n];if((s=y.find(b=>b.category==="控制"))!=null&&s.items.some(b=>b.id===o.id))break;await h(o,n)}break;case"change_costume":i.value.costume=e.params[0].value;break;case"forever":for(;f.value;)for(let a=t+1;a<u.value.length&&f.value;a++){const n=u.value[a];if((r=y.find(o=>o.category==="控制"))!=null&&r.items.some(o=>o.id===n.id))break;await h(n,a)}break;case"if":if(evaluateCondition(e.params[0].value))for(let a=t+1;a<u.value.length;a++){const n=u.value[a];if((k=y.find(o=>o.category==="控制"))!=null&&k.items.some(o=>o.id===n.id))break;await h(n,a)}break;case"if_else":if(evaluateCondition(e.params[0].value))for(let a=t+1;a<u.value.length;a++){const n=u.value[a];if(n.id==="else"||(v=y.find(o=>o.category==="控制"))!=null&&v.items.some(o=>o.id===n.id))break;await h(n,a)}else{let a=!1;for(let n=t+1;n<u.value.length;n++){const o=u.value[n];if(!a){o.id==="else"&&(a=!0);continue}if((x=y.find(b=>b.category==="控制"))!=null&&x.items.some(b=>b.id===o.id))break;await h(o,n)}}break;case"add":return Number(e.params[0].value)+Number(e.params[1].value);case"subtract":return Number(e.params[0].value)-Number(e.params[1].value);case"multiply":return Number(e.params[0].value)*Number(e.params[1].value);case"divide":return Number(e.params[0].value)/Number(e.params[1].value);case"greater":return Number(e.params[0].value)>Number(e.params[1].value);case"less":return Number(e.params[0].value)<Number(e.params[1].value);case"equals":return Number(e.params[0].value)===Number(e.params[1].value);case"set_var":const J=C.value.find(a=>a.name===e.params[0].value);J&&(J.value=Number(e.params[1].value));break;case"change_var":const Q=C.value.find(a=>a.name===e.params[0].value);Q&&(Q.value+=Number(e.params[1].value));break;case"get_var":const W=C.value.find(a=>a.name===e.params[0].value);return W?W.value:0;case"touching_edge":return Math.abs(i.value.x)>180||Math.abs(i.value.y)>140;case"mouse_down":return L.value;case"key_pressed":return S.has(e.params[0].value)}E.value=-1}const L=m(!1),S=m(new Set);function O(e){if(e.code==="Space")e.preventDefault(),f.value||I();else if(e.code==="Delete"||e.code==="Backspace"){const t=u.value.findIndex((s,r)=>r===E.value);t!==-1&&U(t)}S.value.add(e.key)}function R(e){S.value.delete(e.key)}function K(){L.value=!0}function X(){L.value=!1}function Y(){i.value={x:0,y:0,direction:90,costume:"🐱",visible:!0},f.value=!1}const $=m(!1);return ue(()=>{Y(),V({id:"move",text:"移动 [N] 步",params:[{type:"number",default:10}]}),V({id:"turn",text:"旋转 [N] 度",params:[{type:"number",default:90}]}),window.addEventListener("keydown",O),window.addEventListener("keyup",R),window.addEventListener("mousedown",K),window.addEventListener("mouseup",X)}),oe(()=>{window.removeEventListener("keydown",O),window.removeEventListener("keyup",R),window.removeEventListener("mousedown",K),window.removeEventListener("mouseup",X)}),(e,t)=>(d(),c("div",ye,[l("div",be,[l("div",ge,[l("button",{class:j(["mode-btn",{active:g.value==="blocks"}]),onClick:t[0]||(t[0]=s=>g.value="blocks")}," 图形编程 ",2),l("button",{class:j(["mode-btn",{active:g.value==="code"}]),onClick:t[1]||(t[1]=s=>g.value="code")}," 代码模式 ",2)]),l("div",_e,[l("button",{class:"action-btn",onClick:t[2]||(t[2]=s=>$.value=!0)}," 使用说明 "),l("button",{class:"action-btn primary",disabled:f.value,onClick:I},p(f.value?"运行中...":"运行"),9,he),l("button",{class:"action-btn",onClick:Y}," 重置 ")])]),l("div",ke,[l("div",xe,[g.value==="blocks"?(d(),c(w,{key:0},[l("div",we,[(d(),c(w,null,N(y,s=>l("div",{key:s.category,class:"block-category"},[l("div",{class:"category-header",style:A({backgroundColor:s.color})},p(s.category),5),l("div",Ne,[(d(!0),c(w,null,N(s.items,r=>(d(),c("div",{key:r.id,class:"block",style:A({backgroundColor:s.color}),onClick:k=>V(r)},p(r.text),13,Ce))),128))])])),64))]),l("div",Be,[(d(!0),c(w,null,N(u.value,(s,r)=>{var k;return d(),c("div",{key:s.id,class:j(["workspace-block",{active:r===E.value}]),draggable:"true",onDragstart:v=>ee(v,r),onDragover:v=>ae(v,r),onDragend:te},[l("div",{class:"block",style:A({backgroundColor:(k=y.find(v=>v.items.some(x=>x.id===s.id)))==null?void 0:k.color})},[l("span",De,p(s.text),1),s.params?(d(!0),c(w,{key:0},N(s.params,(v,x)=>de((d(),c("input",{key:x,type:v.type==="number"?"number":"text","onUpdate:modelValue":D=>v.value=D,placeholder:v.default,class:"block-input"},null,8,Ae)),[[ce,v.value]])),128)):T("",!0),l("button",{class:"remove-block",onClick:ve(v=>U(r),["stop"])}," × ",8,Te)],4)],42,Ee)}),128)),u.value.length?T("",!0):(d(),c("div",Me," 从左侧拖入积木块开始编程 "))])],64)):(d(),c("div",Ve,[l("pre",null,p(M.value),1)]))]),l("div",Fe,[t[4]||(t[4]=l("div",{class:"stage-header"}," 舞台 ",-1)),l("div",Le,[l("div",{class:"sprite",style:A({transform:`translate(${i.value.x}px, ${i.value.y}px) rotate(${i.value.direction}deg)`,display:i.value.visible?"block":"none"})},[me(p(i.value.costume)+" ",1),B.value.visible?(d(),c("div",Se,p(B.value.text),1)):T("",!0)],4)]),l("div",$e,[l("span",null,"x: "+p(Math.round(i.value.x)),1),l("span",null,"y: "+p(Math.round(i.value.y)),1),l("span",null,"方向: "+p(Math.round(i.value.direction))+"°",1),(d(!0),c(w,null,N(C.value,s=>(d(),c("span",{key:s.name},p(s.name)+": "+p(s.value),1))),128))])])]),$.value?(d(),c("div",Pe,[l("div",je,[t[5]||(t[5]=pe("",2)),l("button",{class:"action-btn",onClick:t[3]||(t[3]=s=>$.value=!1)}," 知道了 ")])])):T("",!0)]))}},Xe=JSON.parse('{"title":"少儿编程工具","description":"","frontmatter":{"layout":"page","title":"少儿编程工具","aside":false},"headers":[],"relativePath":"playground/index.md","filePath":"playground/index.md","lastUpdated":1737621672000}'),Ie={name:"playground/index.md"},Ye=Object.assign(Ie,{setup(Z){return(g,M)=>(d(),c("div",null,[fe(Ue)]))}});export{Xe as __pageData,Ye as default};
