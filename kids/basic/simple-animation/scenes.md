# 场景切换

<script setup>
import { ref, onMounted } from 'vue'

// 场景状态
const currentScene = ref('day')
const isTransitioning = ref(false)
const scenes = {
  day: {
    background: '#87CEEB',
    elements: ['☀️', '🌤️', '🦅'],
    nextScene: 'sunset'
  },
  sunset: {
    background: '#FFA07A',
    elements: ['🌅', '🦢', '🎈'],
    nextScene: 'night'
  },
  night: {
    background: '#191970',
    elements: ['🌙', '⭐', '🦉'],
    nextScene: 'day'
  }
}

// 游戏状态
const score = ref(0)
const gameActive = ref(false)
const targetElement = ref('')
const elements = ref([])
let gameInterval

// 场景元素位置
const elementPositions = ref({})

// 场景切换函数
function changeScene() {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  const nextScene = scenes[currentScene.value].nextScene
  
  setTimeout(() => {
    currentScene.value = nextScene
    resetElementPositions()
    isTransitioning.value = false
  }, 1000)
}

// 初始化元素位置
function resetElementPositions() {
  elementPositions.value = {}
  scenes[currentScene.value].elements.forEach((element, index) => {
    elementPositions.value[element] = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20
    }
  })
}

// 开始寻找游戏
function startGame() {
  if (gameActive.value) return
  
  gameActive.value = true
  score.value = 0
  elements.value = [...scenes[currentScene.value].elements]
  setNewTarget()
  
  gameInterval = setInterval(() => {
    moveElements()
  }, 2000)
}

// 停止游戏
function stopGame() {
  gameActive.value = false
  clearInterval(gameInterval)
  resetElementPositions()
}

// 设置新目标
function setNewTarget() {
  const availableElements = elements.value.filter(e => e !== targetElement.value)
  targetElement.value = availableElements[Math.floor(Math.random() * availableElements.length)]
}

// 移动元素
function moveElements() {
  Object.keys(elementPositions.value).forEach(element => {
    elementPositions.value[element] = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20
    }
  })
}

// 点击元素
function clickElement(element) {
  if (!gameActive.value) return
  
  if (element === targetElement.value) {
    score.value += 10
    setNewTarget()
  } else {
    score.value = Math.max(0, score.value - 5)
  }
}

onMounted(() => {
  resetElementPositions()
  return () => clearInterval(gameInterval)
})
</script>

## 神奇的场景变换 🎬

你好，小朋友！今天我们要学习如何让场景变得生动有趣。
就像魔法一样，我们可以让白天变成黑夜，让晴天变成雨天！

### 1. 变幻的天空 🌈

看，天空在不同时间会有不同的样子！

<div 
  class="scene-box"
  :style="{ 
    backgroundColor: scenes[currentScene].background,
    opacity: isTransitioning ? 0.5 : 1
  }"
>
  <div 
    v-for="(element, index) in scenes[currentScene].elements"
    :key="index"
    class="scene-element"
    :style="{
      left: elementPositions[element]?.x + '%',
      top: elementPositions[element]?.y + '%'
    }"
    @click="clickElement(element)"
  >
    {{ element }}
  </div>
  
  <div class="controls">
    <button @click="changeScene">
      切换场景
    </button>
  </div>
</div>

### 2. 寻找游戏 🎯

试试找出场景中的特定元素！

<div class="game-box">
  <div v-if="gameActive" class="target">
    寻找: {{ targetElement }}
  </div>
  <div class="score">
    得分: {{ score }}
  </div>
  <button 
    @click="gameActive ? stopGame() : startGame()"
    :class="{ active: gameActive }"
  >
    {{ gameActive ? '停止游戏' : '开始游戏' }}
  </button>
</div>

## 场景切换的秘密 🎨

让场景变化的魔法：
1. **渐变效果**：场景之间平滑过渡
2. **元素动画**：物体位置自然变化
3. **主题变换**：颜色和氛围的转换
4. **互动响应**：点击元素有反馈

::: tip 小提示
试试看：
- 点击"切换场景"按钮，观察场景如何变化
- 玩"寻找游戏"，找出指定的元素
- 注意场景中的元素是如何移动的
:::

## 动手练习时间 ✨

1. 观察练习：
   - 场景是如何切换的？
   - 元素是怎么移动的？
   - 颜色是怎么变化的？

2. 创意想象：
   - 你想设计什么样的场景？
   - 场景里可以放什么元素？
   - 怎样让场景更有趣？

3. 游戏设计：
   - 想一想还可以设计什么游戏？
   - 如何让游戏更有挑战性？
   - 可以加入什么新规则？

<style scoped>
.scene-box {
  margin: 20px 0;
  padding: 20px;
  border-radius: 12px;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  transition: all 1s ease;
}

.scene-element {
  position: absolute;
  font-size: 40px;
  transition: all 2s ease;
  cursor: pointer;
  user-select: none;
}

.scene-element:hover {
  transform: scale(1.2);
}

.controls {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.game-box {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.target {
  font-size: 24px;
  font-weight: bold;
  color: #42b883;
}

.score {
  font-size: 20px;
  color: #666;
}

button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

button.active {
  background: #ff6b6b;
}
</style>

::: warning 注意事项
- 场景切换要平滑，不要太突然
- 元素移动要自然，不要太快
- 游戏规则要简单，容易理解
:::

## 进阶挑战 🚀

1. 场景创意：
   - 设计四季变换的场景
   - 创作天气变化的效果
   - 制作昼夜交替的动画

2. 游戏玩法：
   - 增加计时挑战
   - 添加连击奖励
   - 设计关卡进阶

3. 互动方式：
   - 加入音效反馈
   - 设计特殊效果
   - 创造新的玩法

准备好了吗？让我们一起创造更多神奇的场景吧！ 🌟

## 场景动画详解 📚

### 1. 场景切换是如何实现的？ 🎨

想象一下，我们在翻一本魔法书：
1. **渐变过渡**
   - 当前页面慢慢变淡（opacity从1变到0.5）
   - 新页面慢慢显现（opacity从0.5变到1）
   - 这就像魔法书页在慢慢翻动一样

2. **背景变化**
   - 白天是天蓝色（`#87CEEB`）
   - 黄昏是橙红色（`#FFA07A`）
   - 夜晚是深蓝色（`#191970`）
   - 颜色的变化就像天空在慢慢改变颜色

### 2. 元素是怎么移动的？ 🎯

每个场景中的元素（太阳、月亮、星星等）都有自己的运动规则：

1. **位置计算**
```js
x: Math.random() * 80 + 10  // 在宽度10%-90%的范围内随机
y: Math.random() * 60 + 20  // 在高度20%-80%的范围内随机
```

2. **移动方式**
   - 每2秒钟，元素会找到一个新的位置
   - 使用CSS过渡效果让移动变得平滑
   - 就像小鸟在天空中飞来飞去

### 3. 游戏机制详解 🎮

寻找游戏是怎么工作的：

1. **开始游戏时**
   - 初始化分数为0
   - 从当前场景中选择一个目标元素
   - 开始元素的自动移动

2. **计分规则**
   - 找到正确元素：+10分
   - 点错元素：-5分（但不会低于0分）
   - 这样可以训练观察力和反应速度

3. **游戏难度**
   - 元素会不断移动位置
   - 需要在移动的元素中找到目标
   - 越快找到，得分越多

## 编程知识小贴士 💡

### 1. 动画原理

```js
// 过渡动画
transition: all 1s ease;  // 所有属性在1秒内平滑变化

// 定时器动画
setInterval(() => {
  // 每隔一段时间执行的动作
}, 2000);  // 2000毫秒 = 2秒
```

### 2. 随机位置生成

```js
// 生成10到90之间的随机数
Math.random() * 80 + 10

// 这样可以保证元素不会太靠近边缘
```

### 3. 状态管理

```js
// 使用ref来跟踪状态变化
const score = ref(0)      // 跟踪分数
const isActive = ref(false)  // 跟踪游戏状态
```

## 趣味知识拓展 🌟

### 1. 为什么天空会变色？

- 白天：阳光直射，天空呈现蓝色
- 黄昏：阳光斜射，散射出橙红色
- 夜晚：没有阳光，呈现深蓝色
- 我们的场景正是模仿这个自然现象！

### 2. 动画在生活中的应用

- 电影和动画片
- 游戏画面
- 手机应用界面
- 网页特效

### 3. 编程中的数学应用

- 随机数生成
- 位置计算
- 时间控制
- 分数统计

## 动手实验 🔬

### 1. 创建新场景

试试设计这些场景：
- 下雨天：🌧️ + ⚡ + ☔
- 春天：🌸 + 🦋 + 🌺
- 冬天：❄️ + ⛄ + 🧊

### 2. 自制动画

可以尝试：
1. 画一个简单的翻书动画
2. 用积木搭建场景变换
3. 制作一个简单的天气变化表

### 3. 编程练习

思考这些问题：
- 如何让元素移动得更自然？
- 能不能添加更多互动效果？
- 怎样设计更有趣的游戏规则？

::: tip 学习建议
1. 先观察，再动手
2. 从简单开始，慢慢增加难度
3. 多尝试，不怕犯错
4. 记录自己的创意想法
:::

## 课后小任务 📝

1. **观察记录**
   - 记录一天中天空的变化
   - 画下不同时间的天空颜色
   - 观察云朵的移动

2. **创意设计**
   - 设计一个新的场景主题
   - 画出场景中的元素
   - 想象元素如何移动

3. **编程思考**
   - 写下游戏规则构想
   - 设计新的计分方式
   - 想象新的互动方式

准备好了吗？让我们一起进入神奇的编程世界！ 🚀
