import{_ as l,u as d,p as r,v as c,C as u,c as v,o as f,j as t,ag as p,G as m,w as _}from"./chunks/framework.CPp4lspA.js";const b={class:"feedback-container"},y=JSON.parse('{"title":"问题反馈","description":"欢迎提供您的宝贵意见和建议","frontmatter":{"title":"问题反馈","description":"欢迎提供您的宝贵意见和建议"},"headers":[],"relativePath":"feedback/index.md","filePath":"feedback/index.md","lastUpdated":1739782573000}'),w={name:"feedback/index.md"},h=Object.assign(w,{setup(g){const{isDark:n}=d(),i=r(null);return c(()=>{if(typeof window<"u"){let e=0;const a=()=>{if(i.value&&i.value.destroy(),!document.querySelector("#waline")){console.warn("Waline container not found, retrying..."),e<10&&(e++,setTimeout(a,100));return}if(typeof window.Waline>"u"){console.warn("Waline is not loaded yet, retrying..."),e<10&&(e++,setTimeout(a,100));return}try{i.value=window.Waline.init({el:"#waline",serverURL:"https://funfe-feedback.vercel.app/",dark:n.value,lang:"zh-CN",login:"force",pageview:!0,comment:!0,emoji:["//unpkg.com/@waline/emojis@1.1.0/weibo","//unpkg.com/@waline/emojis@1.1.0/bilibili"],imageUploader:!1,search:!1,wordLimit:500,requiredMeta:["nick","mail"],reaction:!0,locale:{placeholder:"欢迎留下您的意见和建议..."}}),console.log("Waline initialized successfully!")}catch(s){console.error("Failed to initialize Waline:",s),e<10&&(e++,setTimeout(a,100))}};a()}}),(o,e)=>{const a=u("ClientOnly");return f(),v("div",null,[t("template",null,[t("div",b,[e[1]||(e[1]=p('<div class="feedback-header" data-v-cb169297><h1 data-v-cb169297>问题反馈</h1><p class="description" data-v-cb169297> 欢迎提供您的宝贵意见和建议。您可以在下方直接发表评论，我们会及时回复。 </p><div class="features" data-v-cb169297><div class="feature" data-v-cb169297><h3 data-v-cb169297>📝 问题反馈</h3><p data-v-cb169297>遇到问题或 Bug？请详细描述问题发生的场景和复现步骤。</p></div><div class="feature" data-v-cb169297><h3 data-v-cb169297>💡 功能建议</h3><p data-v-cb169297>有新功能建议？欢迎分享您的想法。</p></div><div class="feature" data-v-cb169297><h3 data-v-cb169297>👥 交流讨论</h3><p data-v-cb169297>想要交流学习心得？在这里可以展开讨论。</p></div></div></div>',1)),m(a,null,{default:_(()=>e[0]||(e[0]=[t("div",{class:"waline-container"},[t("div",{id:"waline"})],-1)])),_:1})])])])}}}),C=l(h,[["__scopeId","data-v-cb169297"]]);export{y as __pageData,C as default};
