# 简单指令操作 🎮

<script setup>
import { ref, onMounted } from 'vue'

// 角色状态
const character = ref({
  x: 50,
  y: 50,
  direction: 'right',
  isMoving: false,
  isJumping: false,
  isSaying: false,
  message: ''
})

// 指令演示状态
const demoState = ref({
  currentCommand: '',
  isPlaying: false,
  speed: 1
})

// 循环演示状态
const loopDemo = ref({
  count: 0,
  isPlaying: false,
  maxCount: 3
})

// 条件演示状态
const conditionDemo = ref({
  hasWateringCan: false,
  hasSunHat: false,
  isRaining: false,
  isSunny: false,
  isFlowerBlooming: false,
  currentWeather: '⛅',
  message: '',
  thought: '',
  isPlaying: false
})

// 变量演示状态
const variableDemo = ref({
  score: 0,
  stars: 0,
  isCollecting: false
})

// 基本移动指令
function moveCharacter(direction) {
  character.value.isMoving = true
  character.value.direction = direction
  
  switch(direction) {
    case 'right':
      character.value.x += 30
      break
    case 'left':
      character.value.x -= 30
      break
    case 'up':
      character.value.y -= 30
      break
    case 'down':
      character.value.y += 30
      break
  }
  
  setTimeout(() => {
    character.value.isMoving = false
  }, 500)
}

// 跳跃动作
function jump() {
  if (!character.value.isJumping) {
    character.value.isJumping = true
    character.value.y -= 20
    
    setTimeout(() => {
      character.value.y += 20
      character.value.isJumping = false
    }, 500)
  }
}

// 说话动作
function say(message) {
  character.value.isSaying = true
  character.value.message = message
  
  setTimeout(() => {
    character.value.isSaying = false
    character.value.message = ''
  }, 2000)
}

// 循环演示
function demonstrateLoop() {
  loopDemo.value.isPlaying = true
  loopDemo.value.count = 0
  
  function step() {
    if (loopDemo.value.count < loopDemo.value.maxCount) {
      moveCharacter('right')
      loopDemo.value.count++
      setTimeout(step, 1000)
    } else {
      loopDemo.value.isPlaying = false
    }
  }
  
  step()
}

// 花园故事演示
function startGardenStory() {
  conditionDemo.value.isPlaying = true
  conditionDemo.value.message = '欢迎来到魔法花园！让我们一起照顾小花吧！'
  
  // 下雨天
  setTimeout(() => {
    conditionDemo.value.currentWeather = '🌧️'
    conditionDemo.value.isRaining = true
    conditionDemo.value.isSunny = false
    conditionDemo.value.message = '哎呀！下雨了！'
    conditionDemo.value.thought = '如果下雨了，就需要收集雨水给花儿浇水...'
  }, 2000)
  
  // 提示拿工具
  setTimeout(() => {
    if (!conditionDemo.value.hasWateringCan) {
      conditionDemo.value.message = '快点击拿起浇水壶，收集雨水吧！'
    }
  }, 3000)
  
  // 晴天
  setTimeout(() => {
    conditionDemo.value.currentWeather = '☀️'
    conditionDemo.value.isRaining = false
    conditionDemo.value.isSunny = true
    conditionDemo.value.message = '太阳出来了！'
    conditionDemo.value.thought = '如果是晴天，就要戴上帽子保护自己...'
  }, 6000)
  
  // 提示戴帽子
  setTimeout(() => {
    if (!conditionDemo.value.hasSunHat) {
      conditionDemo.value.message = '阳光好强，点击拿起帽子吧！'
    }
  }, 7000)
  
  // 花儿绽放
  setTimeout(() => {
    if (conditionDemo.value.hasWateringCan && conditionDemo.value.hasSunHat) {
      conditionDemo.value.isFlowerBlooming = true
      conditionDemo.value.message = '太棒了！你成功照顾好了小花，它开花啦！🌸'
    } else {
      conditionDemo.value.message = '要让花儿开花，我们需要在对的时候做对的事情哦！'
    }
  }, 9000)
}

// 拿起工具
function pickTool(tool) {
  if (tool === 'wateringCan') {
    conditionDemo.value.hasWateringCan = true
    conditionDemo.value.message = '有了浇水壶，就可以给花儿浇水啦！'
  } else if (tool === 'sunHat') {
    conditionDemo.value.hasSunHat = true
    conditionDemo.value.message = '戴上帽子，阳光就不会那么刺眼了！'
  }
}

// 变量演示
function collectStar() {
  if (!variableDemo.value.isCollecting) {
    variableDemo.value.isCollecting = true
    variableDemo.value.score += 10
    variableDemo.value.stars += 1
    
    setTimeout(() => {
      variableDemo.value.isCollecting = false
    }, 500)
  }
}

onMounted(() => {
  // 初始化动画
})
</script>

## 基本指令大冒险 🚀

### 移动指令 🏃‍♂️

<div class="command-demo">
  <div class="character" :class="{ moving: character.isMoving, jumping: character.isJumping }" :style="{ left: character.x + 'px', top: character.y + 'px', transform: 'scaleX(' + (character.direction === 'left' ? -1 : 1) + ')' }">
    🤖
    <div v-if="character.isSaying" class="speech-bubble">{{ character.message }}</div>
  </div>
  <div class="control-panel">
    <button @click="moveCharacter('left')">⬅️ 左移</button>
    <button @click="moveCharacter('right')">➡️ 右移</button>
    <button @click="moveCharacter('up')">⬆️ 上移</button>
    <button @click="moveCharacter('down')">⬇️ 下移</button>
    <button @click="jump">🦘 跳跃</button>
  </div>
</div>

### 循环指令 🔄

<div class="loop-demo">
  <h4>重复执行示例</h4>
  <div class="demo-container">
    <div class="loop-character" :style="{ transform: `translateX(${loopDemo.count * 30}px)` }">🤖</div>
  </div>
  <button @click="demonstrateLoop" :disabled="loopDemo.isPlaying">开始循环演示</button>
  <div class="loop-counter">重复次数: {{ loopDemo.count }} / {{ loopDemo.maxCount }}</div>
</div>

### 条件指令 - 小精灵的魔法花园 🌈

<div class="condition-demo">
  <div class="garden-scene">
    <div class="sky">
      <div class="weather-icon">{{ conditionDemo.currentWeather }}</div>
    </div>
    <div class="garden">
      <div class="fairy-character">
        <div class="fairy">🧚</div>
        <div v-if="conditionDemo.hasWateringCan" class="tool watering-can">🚿</div>
        <div v-if="conditionDemo.hasSunHat" class="tool sun-hat">👒</div>
      </div>
      <div class="flower" :class="{ blooming: conditionDemo.isFlowerBlooming }">🌱</div>
    </div>
    <div class="tools">
      <div v-if="!conditionDemo.hasWateringCan && conditionDemo.isRaining" class="tool watering-can" @click="pickTool('wateringCan')">🚿</div>
      <div v-if="!conditionDemo.hasSunHat && conditionDemo.isSunny" class="tool sun-hat" @click="pickTool('sunHat')">👒</div>
    </div>
  </div>
  <div class="story-box">
    <div class="story-message" v-if="conditionDemo.message">{{ conditionDemo.message }}</div>
    <div class="thought-bubble" v-if="conditionDemo.thought">{{ conditionDemo.thought }}</div>
  </div>
  <button @click="startGardenStory" :disabled="conditionDemo.isPlaying" class="story-button">开始魔法花园历险记</button>
</div>

### 变量指令 ⭐

<div class="variable-demo">
  <div class="score-board">分数: {{ variableDemo.score }} 收集星星: {{ variableDemo.stars }}</div>
  <div class="game-area">
    <div class="star" @click="collectStar" :class="{ collecting: variableDemo.isCollecting }">⭐</div>
  </div>
</div>

## 指令说明 📖

### 1. 移动指令
- **向前移动**: 让角色向前走一步
- **向后移动**: 让角色向后走一步
- **转向**: 改变角色的朝向
- **跳跃**: 让角色跳起来

### 2. 循环指令
- **重复执行**: 多次执行相同的动作
- **重复次数**: 设置要重复的次数
- **无限循环**: 一直重复执行
- **循环中断**: 满足条件时停止循环

### 3. 条件指令
- **如果天气变化**: 我们要做对应的准备
  - 下雨天要收集雨水浇花
  - 晴天要戴帽子防晒
- **根据情况选择**: 选择正确的工具
  - 下雨时用浇水壶
  - 晴天时戴遮阳帽
- **完成目标**: 照顾好小花
  - 需要正确使用工具
  - 要在合适的时机行动

### 4. 变量指令
- **计数器**: 记录数值
- **状态记录**: 保存游戏状态
- **数值计算**: 进行简单的运算
- **显示数值**: 展示变量的值

::: tip 小贴士
- 观察天气的变化
- 选择合适的工具
- 照顾好小花朋友
:::

## 创意练习 🎨

1. **魔法花园设计师**
   - 设计不同的天气场景
   - 创造新的互动工具
   - 照顾更多的小花

2. **天气小助手**
   - 观察天气变化
   - 选择合适的工具
   - 帮助小精灵完成任务

3. **花园护理员**
   - 记录照顾小花的方法
   - 设计护理计划
   - 让更多花儿绽放

<style scoped>
.command-demo {
  position: relative;
  width: 100%;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
}

.character {
  position: absolute;
  font-size: 24px;
  transition: all 0.5s ease;
}

.character.moving {
  animation: bounce 0.5s infinite;
}

.character.jumping {
  animation: jump 0.5s ease;
}

.speech-bubble {
  position: absolute;
  background: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  font-size: 14px;
  white-space: nowrap;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
}

.control-panel {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.loop-demo {
  margin: 20px 0;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
}

.demo-container {
  height: 60px;
  background: white;
  border-radius: 4px;
  margin: 10px 0;
  position: relative;
  overflow: hidden;
}

.loop-character {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.5s ease;
  font-size: 24px;
}

.condition-demo {
  margin: 20px 0;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
}

.garden-scene {
  height: 200px;
  background: linear-gradient(to bottom, #87CEEB 0%, #90EE90 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}

.sky {
  height: 50%;
  position: relative;
}

.garden {
  height: 50%;
  position: relative;
  background: rgba(144, 238, 144, 0.3);
}

.fairy-character {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.5s ease;
}

.fairy {
  font-size: 32px;
  animation: float 2s infinite ease-in-out;
}

.tool {
  position: absolute;
  font-size: 24px;
  transition: all 0.3s ease;
}

.watering-can {
  top: -20px;
  left: 30px;
}

.sun-hat {
  top: -25px;
  left: 0;
}

.flower {
  position: absolute;
  bottom: 0;
  left: 70%;
  font-size: 32px;
  transition: all 0.5s ease;
}

.flower.blooming {
  transform: scale(1.2);
  content: '🌸';
}

.tools {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.story-box {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  min-height: 60px;
}

.story-message {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.thought-bubble {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.story-button {
  background: #FF69B4;
}

.variable-demo {
  margin: 20px 0;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
}

.score-board {
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
}

.game-area {
  height: 100px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.star {
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.star:hover {
  transform: scale(1.2);
}

.star.collecting {
  animation: collect 0.5s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes jump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes collect {
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
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
</style>
