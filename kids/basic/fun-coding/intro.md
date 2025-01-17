# 图形化编程入门 🎨

<script setup>
import { ref, onMounted } from 'vue'

// 角色状态
const characterPosition = ref({ x: 50, y: 50 })
const isMoving = ref(false)
const direction = ref('right')
const isExecuting = ref(false)

// 命令队列
const commands = ref([])
const commandResults = ref([])

// 动画状态
const showAnimation = ref(false)
const currentStep = ref(0)

// 新增：编程概念动画状态
const showCodingAnimation = ref(false)
const currentConcept = ref(0)
const concepts = [
  { 
    title: '程序就像食谱',
    steps: [
      '准备食材 🥕',
      '按步骤操作 📝',
      '完成美食 🍳'
    ],
    icon: '👩‍🍳'
  },
  {
    title: '程序需要按顺序',
    steps: [
      '先穿袜子 🧦',
      '再穿鞋子 👟',
      '准备出发 🚶'
    ],
    icon: '📋'
  },
  {
    title: '程序可以重复',
    steps: [
      '刷牙 🦷',
      '吃饭 🍚',
      '睡觉 😴',
      '每天都要重复！'
    ],
    icon: '🔄'
  }
]

// 新增：积木拼接演示
const blocks = ref([])
const blockTypes = {
  move: { color: '#42b883', text: '向前走' },
  turn: { color: '#ffaa00', text: '转向' },
  repeat: { color: '#ff6b6b', text: '重复' }
}

// 新增：动画控制函数
function showNextConcept() {
  if (currentConcept.value < concepts.length - 1) {
    currentConcept.value++
  } else {
    currentConcept.value = 0
  }
}

function addBlock(type) {
  blocks.value.push(type)
}

function clearBlocks() {
  blocks.value = []
}

// 执行命令
function executeCommand(command) {
  isExecuting.value = true
  const pos = characterPosition.value
  
  switch(command) {
    case 'forward':
      if(direction.value === 'right') pos.x += 20
      if(direction.value === 'left') pos.x -= 20
      if(direction.value === 'up') pos.y -= 20
      if(direction.value === 'down') pos.y += 20
      break
    case 'turn-right':
      const directions = ['right', 'down', 'left', 'up']
      const currentIndex = directions.indexOf(direction.value)
      direction.value = directions[(currentIndex + 1) % 4]
      break
  }
  
  setTimeout(() => {
    isExecuting.value = false
  }, 1000)
}

// 动画演示
function startAnimation() {
  showAnimation.value = true
  currentStep.value = 0
  
  const steps = [
    { command: 'forward', description: '向前移动一步' },
    { command: 'turn-right', description: '向右转' },
    { command: 'forward', description: '再次向前' }
  ]
  
  function playStep() {
    if(currentStep.value < steps.length) {
      executeCommand(steps[currentStep.value].command)
      commandResults.value.push(steps[currentStep.value].description)
      currentStep.value++
      setTimeout(playStep, 1500)
    }
  }
  
  playStep()
}

onMounted(() => {
  // 初始化动画
})
</script>

## 欢迎来到图形化编程世界！ 🌈

亲爱的小朋友，你知道吗？编程就像是在玩一个神奇的积木游戏！
我们不需要写复杂的代码，只要通过拖拽积木块，就能创造出精彩的程序！

### 认识我们的小伙伴 🤖

<div class="character-demo">
  <div 
    class="character"
    :style="{
      left: characterPosition.x + 'px',
      top: characterPosition.y + 'px',
      transform: 'rotate(' + 
        (direction === 'right' ? 0 : 
         direction === 'down' ? 90 : 
         direction === 'left' ? 180 : 270) + 'deg)'
    }"
  >
    🤖
  </div>
</div>

这是我们的机器人朋友，它会帮助我们学习编程！
让我们看看它能做些什么：

### 基本指令演示 ⚡

<div class="command-panel">
  <button @click="startAnimation" :disabled="isExecuting">
    开始演示
  </button>
  
  <div v-if="showAnimation" class="command-results">
    <div v-for="(result, index) in commandResults" :key="index">
      {{ result }}
    </div>
  </div>
</div>

### 图形化编程的魔法 ✨

1. **积木块 = 指令**
   - 每个积木块都代表一个动作
   - 积木块可以像搭积木一样组合
   - 不同颜色代表不同类型的指令

2. **顺序很重要**
   - 从上到下依次执行
   - 就像读故事书一样
   - 每个指令都要按顺序完成

3. **即时反馈**
   - 可以立即看到执行结果
   - 方便找出问题
   - 轻松修改程序

### 基本指令介绍 📝

1. **移动指令**
   - ⬆️ 向前移动
   - ⬇️ 向后移动
   - ⬅️ 向左转
   - ➡️ 向右转

2. **循环指令**
   - 🔄 重复执行
   - 可以设置重复次数
   - 节省重复编写代码的时间

3. **条件指令**
   - ❓ 如果...就...
   - 根据不同情况做出选择
   - 让程序更智能

### 动手练习时间 🎯

试试看：
1. 让机器人向前移动
2. 让机器人转向
3. 组合多个动作

::: tip 小提示
- 仔细观察每个指令的效果
- 动作之间要有停顿
- 可以随时暂停和重试
:::

## 创意挑战 🎨

尝试用这些基本指令：
1. 画一个正方形
2. 创造一个简单的舞蹈
3. 设计一个小迷宫游戏

### 下节预告 🎬

我们将学习：
- 更多有趣的指令
- 如何制作简单的游戏
- 创造自己的动画故事

准备好了吗？让我们开始编程冒险吧！ 🚀

## 什么是编程？让我们一起来看看！ 🎯

### 编程就像生活中的... 🌟

<div class="concept-animation">
  <div class="concept-card" :class="{ active: showCodingAnimation }">
    <div class="concept-icon">{{ concepts[currentConcept].icon }}</div>
    <h3>{{ concepts[currentConcept].title }}</h3>
    <div class="concept-steps">
      <div 
        v-for="(step, index) in concepts[currentConcept].steps" 
        :key="index"
        class="step"
        :style="{ animationDelay: index * 0.5 + 's' }"
      >
        {{ step }}
      </div>
    </div>
  </div>
  <button @click="showNextConcept" class="concept-button">
    看下一个例子
  </button>
</div>

### 像搭积木一样编程！ 🏗️

<div class="blocks-demo">
  <div class="blocks-palette">
    <div 
      v-for="(type, key) in blockTypes" 
      :key="key"
      class="block"
      :style="{ backgroundColor: type.color }"
      @click="addBlock(key)"
    >
      {{ type.text }}
    </div>
  </div>
  
  <div class="blocks-workspace">
    <div 
      v-for="(block, index) in blocks" 
      :key="index"
      class="block"
      :style="{ backgroundColor: blockTypes[block].color }"
    >
      {{ blockTypes[block].text }}
    </div>
  </div>
  
  <button @click="clearBlocks" class="clear-button">
    清空积木
  </button>
</div>

<style scoped>
.character-demo {
  position: relative;
  width: 300px;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
}

.character {
  position: absolute;
  font-size: 24px;
  transition: all 1s ease;
}

.command-panel {
  margin: 20px 0;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
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

button:disabled {
  background: #ccc;
}

.command-results {
  margin-top: 15px;
  padding: 10px;
  background: white;
  border-radius: 4px;
}

.command-results div {
  padding: 5px;
  margin: 5px 0;
  border-left: 3px solid #42b883;
}

/* 新增概念动画样式 */
.concept-animation {
  margin: 20px 0;
  text-align: center;
}

.concept-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 15px;
}

.concept-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.concept-steps .step {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  margin: 10px 0;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 6px;
}

.concept-button {
  margin-top: 10px;
}

/* 积木演示样式 */
.blocks-demo {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.blocks-palette {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.block {
  padding: 8px 16px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  user-select: none;
}

.block:hover {
  transform: scale(1.05);
}

.blocks-workspace {
  min-height: 100px;
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.clear-button {
  background: #ff6b6b;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
