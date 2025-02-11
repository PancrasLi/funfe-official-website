import{_ as k,p as l,v as r,c as v,o as E,ag as e,j as a,n as i,a as b}from"./chunks/framework.DR0w2vtD.js";const o={class:"demo-box"},g={class:"object-demo"},y={class:"creation-methods"},c={class:"demo-box"},F={class:"properties-demo"},u={class:"property-types"},C={class:"demo-box"},m={class:"prototype-chain"},B={class:"demo-box"},A={class:"class-demo"},P=JSON.parse('{"title":"对象、类与面向对象编程","description":"","frontmatter":{},"headers":[],"relativePath":"class/js/8.md","filePath":"class/js/8.md","lastUpdated":1739268936000}'),_={name:"class/js/8.md"},f=Object.assign(_,{setup(D){const t=l(0),d=l(0),n=l(0),h=l(!0);function p(){h.value&&(setInterval(()=>{t.value=(t.value+1)%3},3e3),setInterval(()=>{d.value=(d.value+1)%3},4e3),setInterval(()=>{n.value=(n.value+1)%2},5e3))}return r(()=>{p()}),(S,s)=>(E(),v("div",null,[s[13]||(s[13]=e("",3)),a("div",o,[a("div",g,[a("div",y,[a("div",{class:i(["method",{active:t.value===0}])},s[0]||(s[0]=[a("div",{class:"method-title"},"字面量语法",-1),a("pre",null,[a("code",null,`let person = {
  name: 'John',
  age: 30
};`)],-1)]),2),a("div",{class:i(["method",{active:t.value===1}])},s[1]||(s[1]=[a("div",{class:"method-title"},"构造函数",-1),a("pre",null,[a("code",null,`function Person(name, age) {
  this.name = name;
  this.age = age;
}`)],-1)]),2),a("div",{class:i(["method",{active:t.value===2}])},s[2]||(s[2]=[a("div",{class:"method-title"},"Object.create()",-1),a("pre",null,[a("code",null,`let person = Object.create(null);
person.name = 'John';
person.age = 30;`)],-1)]),2)])])]),s[14]||(s[14]=a("h3",{id:"_2-属性特性",tabindex:"-1"},[b("2. 属性特性 "),a("a",{class:"header-anchor",href:"#_2-属性特性","aria-label":'Permalink to "2. 属性特性"'},"​")],-1)),a("div",c,[a("div",F,[a("div",u,[a("div",{class:i(["property-type",{highlight:t.value===1}])},s[3]||(s[3]=[a("h4",null,"数据属性",-1),a("ul",null,[a("li",null,"[[Configurable]]"),a("li",null,"[[Enumerable]]"),a("li",null,"[[Writable]]"),a("li",null,"[[Value]]")],-1)]),2),a("div",{class:i(["property-type",{highlight:t.value===2}])},s[4]||(s[4]=[a("h4",null,"访问器属性",-1),a("ul",null,[a("li",null,"[[Configurable]]"),a("li",null,"[[Enumerable]]"),a("li",null,"[[Get]]"),a("li",null,"[[Set]]")],-1)]),2)])])]),s[15]||(s[15]=a("h2",{id:"原型与继承",tabindex:"-1"},[b("原型与继承 "),a("a",{class:"header-anchor",href:"#原型与继承","aria-label":'Permalink to "原型与继承"'},"​")],-1)),s[16]||(s[16]=a("h3",{id:"_1-原型链",tabindex:"-1"},[b("1. 原型链 "),a("a",{class:"header-anchor",href:"#_1-原型链","aria-label":'Permalink to "1. 原型链"'},"​")],-1)),a("div",C,[a("div",m,[a("div",{class:i(["chain-node",{active:d.value>=0}])},s[5]||(s[5]=[a("div",{class:"node-title"},"实例对象",-1),a("div",{class:"node-content"},[a("pre",null,[a("code",null,`person
name: 'John'
age: 30`)])],-1)]),2),s[8]||(s[8]=a("div",{class:"chain-arrow"},"↓",-1)),a("div",{class:i(["chain-node",{active:d.value>=1}])},s[6]||(s[6]=[a("div",{class:"node-title"},"Person.prototype",-1),a("div",{class:"node-content"},[a("pre",null,[a("code",null,`constructor: Person
sayHello()`)])],-1)]),2),s[9]||(s[9]=a("div",{class:"chain-arrow"},"↓",-1)),a("div",{class:i(["chain-node",{active:d.value>=2}])},s[7]||(s[7]=[a("div",{class:"node-title"},"Object.prototype",-1),a("div",{class:"node-content"},[a("pre",null,[a("code",null,`toString()
valueOf()`)])],-1)]),2)])]),s[17]||(s[17]=a("h3",{id:"_2-类的实现",tabindex:"-1"},[b("2. 类的实现 "),a("a",{class:"header-anchor",href:"#_2-类的实现","aria-label":'Permalink to "2. 类的实现"'},"​")],-1)),a("div",B,[a("div",A,[a("div",{class:i(["class-definition",{active:n.value>=0}])},s[10]||(s[10]=[a("div",{class:"class-title"},"基类定义",-1),a("pre",null,[a("code",null,`class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
}`)],-1)]),2),s[12]||(s[12]=a("div",{class:"inheritance-arrow"},"↓",-1)),a("div",{class:i(["class-definition",{active:n.value>=1}])},s[11]||(s[11]=[a("div",{class:"class-title"},"派生类定义",-1),a("pre",null,[a("code",null,`class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  work() {
    console.log(\`\${this.name} is working as \${this.role}\`);
  }
}`)],-1)]),2)])]),s[18]||(s[18]=e("",12))]))}}),q=k(f,[["__scopeId","data-v-39d34bb3"]]);export{P as __pageData,q as default};
