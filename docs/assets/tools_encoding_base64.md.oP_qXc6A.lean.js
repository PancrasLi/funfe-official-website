import{_ as m,h as d,c as i,m as e,n as r,a5 as u,a7 as v,e as f,o as p,q as B,s as C,a as x}from"./chunks/framework.B3gFn30p.js";const k=n=>(B("data-v-75e729fb"),n=n(),C(),n),y=k(()=>e("h1",{id:"base64-转换工具",tabindex:"-1"},[x("Base64 转换工具 "),e("a",{class:"header-anchor",href:"#base64-转换工具","aria-label":'Permalink to "Base64 转换工具"'},"​")],-1)),g={class:"tool-container"},I={class:"tool-header"},w={class:"mode-switch"},T={class:"input-area"},U=["placeholder"],V={class:"output-area"},D=JSON.parse('{"title":"Base64 转换工具","description":"在线Base64编码解码工具，支持文本和文件的Base64转换","frontmatter":{"title":"Base64 转换工具","description":"在线Base64编码解码工具，支持文本和文件的Base64转换"},"headers":[],"relativePath":"tools/encoding/base64.md","filePath":"tools/encoding/base64.md","lastUpdated":1736761270000}'),N={name:"tools/encoding/base64.md"},S=Object.assign(N,{setup(n){const s=d(""),a=d(""),o=d("encode"),_=()=>{try{o.value==="encode"?a.value=btoa(encodeURIComponent(s.value)):a.value=decodeURIComponent(atob(s.value))}catch{a.value="转换失败：输入内容格式不正确"}},b=async()=>{try{await navigator.clipboard.writeText(a.value),alert("已复制到剪贴板")}catch{alert("复制失败，请手动复制")}},h=()=>{s.value="",a.value=""};return(c,t)=>(p(),i("div",null,[y,e("div",g,[e("div",I,[e("div",w,[e("button",{class:r({active:o.value==="encode"}),onClick:t[0]||(t[0]=l=>o.value="encode")}," 编码 ",2),e("button",{class:r({active:o.value==="decode"}),onClick:t[1]||(t[1]=l=>o.value="decode")}," 解码 ",2)])]),e("div",T,[u(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=l=>s.value=l),placeholder:o.value==="encode"?"请输入要编码的文本":"请输入要解码的Base64字符串"},null,8,U),[[v,s.value]])]),e("div",{class:"button-group"},[e("button",{class:"primary",onClick:_},"转换"),e("button",{onClick:h},"清空")]),e("div",V,[u(e("textarea",{"onUpdate:modelValue":t[3]||(t[3]=l=>a.value=l),readonly:"",placeholder:"转换结果将显示在这里"},null,512),[[v,a.value]]),a.value?(p(),i("button",{key:0,class:"copy-btn",onClick:b}," 复制结果 ")):f("",!0)])])]))}}),O=m(S,[["__scopeId","data-v-75e729fb"]]);export{D as __pageData,O as default};
