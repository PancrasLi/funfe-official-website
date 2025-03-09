import{_ as r,p as l,v,c as f,o as E,ag as p,j as a,n as i,a as d}from"./chunks/framework.ZWmXjvV8.js";const o={class:"demo-box"},c={class:"object-demo"},g={class:"creation-methods"},y={class:"demo-box"},b={class:"properties-demo"},u={class:"property-types"},F={class:"demo-box"},m={class:"prototype-chain"},C={class:"demo-box"},B={class:"class-demo"},P=JSON.parse('{"title":"对象、类与面向对象编程","description":"","frontmatter":{},"headers":[],"relativePath":"class/js/8.md","filePath":"class/js/8.md","lastUpdated":1739268936000}'),A={name:"class/js/8.md"},_=Object.assign(A,{setup(D){const e=l(0),t=l(0),n=l(0),h=l(!0);function k(){h.value&&(setInterval(()=>{e.value=(e.value+1)%3},3e3),setInterval(()=>{t.value=(t.value+1)%3},4e3),setInterval(()=>{n.value=(n.value+1)%2},5e3))}return v(()=>{k()}),(S,s)=>(E(),f("div",null,[s[13]||(s[13]=p("",3)),a("div",o,[a("div",c,[a("div",g,[a("div",{class:i(["method",{active:e.value===0}])},s[0]||(s[0]=[a("div",{class:"method-title"},"字面量语法",-1),a("pre",null,[a("code",null,`let person = {
  name: 'John',
  age: 30
};`)],-1)]),2),a("div",{class:i(["method",{active:e.value===1}])},s[1]||(s[1]=[a("div",{class:"method-title"},"构造函数",-1),a("pre",null,[a("code",null,`function Person(name, age) {
  this.name = name;
  this.age = age;
}`)],-1)]),2),a("div",{class:i(["method",{active:e.value===2}])},s[2]||(s[2]=[a("div",{class:"method-title"},"Object.create()",-1),a("pre",null,[a("code",null,`let person = Object.create(null);
person.name = 'John';
person.age = 30;`)],-1)]),2)])])]),s[14]||(s[14]=a("h3",{id:"_2-属性特性",tabindex:"-1"},[d("2. 属性特性 "),a("a",{class:"header-anchor",href:"#_2-属性特性","aria-label":'Permalink to "2. 属性特性"'},"​")],-1)),a("div",y,[a("div",b,[a("div",u,[a("div",{class:i(["property-type",{highlight:e.value===1}])},s[3]||(s[3]=[a("h4",null,"数据属性",-1),a("ul",null,[a("li",null,"[[Configurable]]"),a("li",null,"[[Enumerable]]"),a("li",null,"[[Writable]]"),a("li",null,"[[Value]]")],-1)]),2),a("div",{class:i(["property-type",{highlight:e.value===2}])},s[4]||(s[4]=[a("h4",null,"访问器属性",-1),a("ul",null,[a("li",null,"[[Configurable]]"),a("li",null,"[[Enumerable]]"),a("li",null,"[[Get]]"),a("li",null,"[[Set]]")],-1)]),2)])])]),s[15]||(s[15]=a("h2",{id:"原型与继承",tabindex:"-1"},[d("原型与继承 "),a("a",{class:"header-anchor",href:"#原型与继承","aria-label":'Permalink to "原型与继承"'},"​")],-1)),s[16]||(s[16]=a("h3",{id:"_1-原型链",tabindex:"-1"},[d("1. 原型链 "),a("a",{class:"header-anchor",href:"#_1-原型链","aria-label":'Permalink to "1. 原型链"'},"​")],-1)),a("div",F,[a("div",m,[a("div",{class:i(["chain-node",{active:t.value>=0}])},s[5]||(s[5]=[a("div",{class:"node-title"},"实例对象",-1),a("div",{class:"node-content"},[a("pre",null,[a("code",null,`person
name: 'John'
age: 30`)])],-1)]),2),s[8]||(s[8]=a("div",{class:"chain-arrow"},"↓",-1)),a("div",{class:i(["chain-node",{active:t.value>=1}])},s[6]||(s[6]=[a("div",{class:"node-title"},"Person.prototype",-1),a("div",{class:"node-content"},[a("pre",null,[a("code",null,`constructor: Person
sayHello()`)])],-1)]),2),s[9]||(s[9]=a("div",{class:"chain-arrow"},"↓",-1)),a("div",{class:i(["chain-node",{active:t.value>=2}])},s[7]||(s[7]=[a("div",{class:"node-title"},"Object.prototype",-1),a("div",{class:"node-content"},[a("pre",null,[a("code",null,`toString()
valueOf()`)])],-1)]),2)])]),s[17]||(s[17]=a("h3",{id:"_2-类的实现",tabindex:"-1"},[d("2. 类的实现 "),a("a",{class:"header-anchor",href:"#_2-类的实现","aria-label":'Permalink to "2. 类的实现"'},"​")],-1)),a("div",C,[a("div",B,[a("div",{class:i(["class-definition",{active:n.value>=0}])},s[10]||(s[10]=[a("div",{class:"class-title"},"基类定义",-1),a("pre",null,[a("code",null,`class Person {
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
}`)],-1)]),2)])]),s[18]||(s[18]=p("",12))]))}}),q=r(_,[["__scopeId","data-v-06af2e07"]]);export{P as __pageData,q as default};
