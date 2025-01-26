// JavaScript 基础示例

// 1. 变量声明和数据类型
let name = "小明";              // 字符串
const age = 18;                // 数字（常量）
let isStudent = true;          // 布尔值
let hobbies = ['编程', '游戏'];  // 数组
let person = {                 // 对象
    name: '小红',
    age: 20,
    isStudent: true
};

// 2. 基本运算
let a = 10;
let b = 5;
console.log('加法:', a + b);
console.log('减法:', a - b);
console.log('乘法:', a * b);
console.log('除法:', a / b);

// 3. 字符串操作
let firstName = '张';
let lastName = '三';
let fullName = firstName + lastName;
console.log('姓名:', fullName);

// 4. 条件判断
let score = 85;
if (score >= 90) {
    console.log('优秀');
} else if (score >= 60) {
    console.log('及格');
} else {
    console.log('不及格');
}

// 5. 循环
console.log('for 循环示例:');
for (let i = 1; i <= 3; i++) {
    console.log(`第 ${i} 次循环`);
}

// 6. 函数定义和调用
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

let myAge = calculateAge(2000);
console.log('年龄计算:', myAge); 