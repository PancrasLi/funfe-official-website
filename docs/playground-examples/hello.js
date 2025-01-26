// 一个简单的问候函数
function sayHello(name) {
  return `Hello, ${name}!`
}

// 测试不同的输入
console.log(sayHello('World'))
console.log(sayHello('JavaScript'))

// 展示对象输出
const user = {
  name: 'FunFE',
  role: 'Learner',
  interests: ['JavaScript', 'Vue', 'Web Development']
}
console.log('User Info:', user)

// 展示数组方法
const numbers = [1, 2, 3, 4, 5]
console.log('Original array:', numbers)
console.log('Mapped array:', numbers.map(n => n * 2))
console.log('Filtered array:', numbers.filter(n => n % 2 === 0)) 