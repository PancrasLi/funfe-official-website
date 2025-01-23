# 动画制作 🎬

<script setup>
import { ref, onMounted } from 'vue'

// 弹跳小球动画
const ballPosition = ref(0)
const ballDirection = ref(1)
const ballColor = ref('#42b883')
const isPlaying = ref(false)
let ballInterval

// 彩虹方块动画
const blockSize = ref(50)
const blockRotation = ref(0)
const blockColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']
const currentColorIndex = ref(0)
let blockInterval

// 小猫动画
const catPosition = ref(0)
const catMood = ref('😺')
let catInterval

// 新增：简单动画实验
const experimentFrame = ref(0)
const experimentEmoji = ref('🌱')
const experimentSpeed = ref(1)
let experimentInterval

// 新增：颜色实验
const colorValues = ref({
  red: 255,
  green: 0,
  blue: 0
})

// 新增：编程编辑器状态
const codeBlocks = ref([])
const previewEmoji = ref('🐱')
const previewX = ref(0)
const previewY = ref(0)
const previewScale = ref(1)
const previewRotation = ref(0)
const isPreviewPlaying = ref(false)
let previewInterval

// 可用的代码块类型
const blockTypes = [
  { id: 'move-right', label: '向右移动', icon: '👉', action: () => previewX.value += 20 },
  { id: 'move-left', label: '向左移动', icon: '👈', action: () => previewX.value -= 20 },
  { id: 'move-up', label: '向上移动', icon: '👆', action: () => previewY.value -= 20 },
  { id: 'move-down', label: '向下移动', icon: '👇', action: () => previewY.value += 20 },
  { id: 'grow', label: '变大', icon: '🔍', action: () => previewScale.value *= 1.2 },
  { id: 'shrink', label: '变小', icon: '🔎', action: () => previewScale.value /= 1.2 },
  { id: 'rotate-right', label: '向右转', icon: '🔄', action: () => previewRotation.value += 45 },
  { id: 'rotate-left', label: '向左转', icon: '🔄', action: () => previewRotation.value -= 45 },
  { id: 'change-emoji', label: '换角色', icon: '🔄', action: () => {
    const emojis = ['🐱', '🐶', '🐰', '🐼', '🐸']
    const currentIndex = emojis.indexOf(previewEmoji.value)
    previewEmoji.value = emojis[(currentIndex + 1) % emojis.length]
  }}
]

// 动画控制函数
function toggleBall() {
  if (isPlaying.value) {
    clearInterval(ballInterval)
  } else {
    ballInterval = setInterval(() => {
      if (ballPosition.value >= 100 || ballPosition.value <= 0) {
        ballDirection.value *= -1
      }
      ballPosition.value += (3 * ballDirection.value)
      ballColor.value = blockColors[Math.floor(Math.random() * blockColors.length)]
    }, 50)
  }
  isPlaying.value = !isPlaying.value
}

function toggleBlock() {
  if (blockInterval) {
    clearInterval(blockInterval)
    blockInterval = null
  } else {
    blockInterval = setInterval(() => {
      blockRotation.value = (blockRotation.value + 5) % 360
      blockSize.value = 50 + Math.sin(Date.now() / 500) * 20
      currentColorIndex.value = (currentColorIndex.value + 1) % blockColors.length
    }, 50)
  }
}

function toggleCat() {
  if (catInterval) {
    clearInterval(catInterval)
    catInterval = null
  } else {
    catInterval = setInterval(() => {
      catPosition.value = (catPosition.value + 10) % 200
      catMood.value = catMood.value === '😺' ? '😸' : '😺'
    }, 200)
  }
}

function startExperiment() {
  if (experimentInterval) {
    clearInterval(experimentInterval)
    experimentInterval = null
    return
  }
  
  experimentInterval = setInterval(() => {
    experimentFrame.value = (experimentFrame.value + 1) % 4
    switch(experimentFrame.value) {
      case 0: experimentEmoji.value = '🌱'; break;
      case 1: experimentEmoji.value = '🌿'; break;
      case 2: experimentEmoji.value = '🌳'; break;
      case 3: experimentEmoji.value = '🌲'; break;
    }
  }, 1000 / experimentSpeed.value)
}

// 添加代码块
function addBlock(type) {
  codeBlocks.value.push({
    id: Date.now(),
    type: type
  })
}

// 删除代码块
function removeBlock(index) {
  codeBlocks.value.splice(index, 1)
}

// 运行代码
function runCode() {
  if (isPreviewPlaying.value) {
    clearInterval(previewInterval)
    isPreviewPlaying.value = false
    return
  }

  // 重置预览状态
  previewX.value = 0
  previewY.value = 0
  previewScale.value = 1
  previewRotation.value = 0
  
  let currentBlock = 0
  isPreviewPlaying.value = true
  
  previewInterval = setInterval(() => {
    if (currentBlock >= codeBlocks.value.length) {
      clearInterval(previewInterval)
      isPreviewPlaying.value = false
      return
    }
    
    const block = codeBlocks.value[currentBlock]
    const blockType = blockTypes.find(t => t.id === block.type)
    if (blockType) {
      blockType.action()
    }
    currentBlock++
  }, 500)
}

// 清空代码
function clearCode() {
  codeBlocks.value = []
  clearInterval(previewInterval)
  isPreviewPlaying.value = false
  previewX.value = 0
  previewY.value = 0
  previewScale.value = 1
  previewRotation.value = 0
}

onMounted(() => {
  return () => {
    clearInterval(ballInterval)
    clearInterval(blockInterval)
    clearInterval(catInterval)
    if (experimentInterval) clearInterval(experimentInterval)
    if (previewInterval) clearInterval(previewInterval)
  }
})
</script>

## 欢迎来到神奇的动画世界！ ✨

嗨，小朋友们！准备好创造自己的动画了吗？
今天我们要学习如何让物体动起来，就像魔法一样神奇！

### 1. 弹跳的彩虹球 🌈

看看这个神奇的小球，它不但会弹跳，还会变色呢！

<div class="demo-box">
  <div 
    class="bouncing-ball"
    :style="{
      transform: `translateY(${ballPosition}px)`,
      backgroundColor: ballColor
    }"
  ></div>
  <button @click="toggleBall">
    {{ isPlaying ? '停止' : '开始' }}弹跳
  </button>
</div>

### 2. 旋转的魔方 🎲

这个方块会旋转、变大变小，还会变换颜色！

<div class="demo-box">
  <div 
    class="magic-block"
    :style="{
      transform: `rotate(${blockRotation}deg)`,
      width: blockSize + 'px',
      height: blockSize + 'px',
      backgroundColor: blockColors[currentColorIndex]
    }"
  ></div>
  <button @click="toggleBlock">
    开始/停止旋转
  </button>
</div>

### 3. 奔跑的小猫 🐱

看，这只可爱的小猫会跑来跑去！

<div class="demo-box">
  <div 
    class="running-cat"
    :style="{ transform: `translateX(${catPosition}px)` }"
  >
    {{ catMood }}
  </div>
  <button @click="toggleCat">
    让小猫跑起来
  </button>
</div>

## 动画的秘密 🔮

### 1. 移动的魔法
- 位置的改变（上下左右）
- 速度的控制（快慢）
- 方向的变化（来回移动）

### 2. 变形的魔法
- 大小的变化（放大缩小）
- 旋转的效果（转圈圈）
- 形状的改变（变换形状）

### 3. 颜色的魔法
- 颜色渐变（慢慢变色）
- 闪烁效果（忽明忽暗）
- 彩虹变换（多彩效果）

## 动手练习时间 ✏️

### 1. 创意挑战
试试看能不能创造：
- 一朵会开放的花 🌸
- 一颗会闪烁的星星 ⭐
- 一只会飞的小鸟 🐦

### 2. 组合练习
把不同的动画组合在一起：
- 会跳舞的方块
- 会变色的月亮
- 会旋转的太阳

### 3. 故事动画
创造一个简单的动画故事：
- 小猫追蝴蝶
- 小狗找骨头
- 小兔子吃萝卜

::: tip 小贴士
- 动画要平滑，不要太快
- 颜色要温和，不要太刺眼
- 多观察生活中的动态
:::

## 进阶挑战 🚀

### 1. 互动动画
- 点击时的特效
- 鼠标跟随效果
- 键盘控制移动

### 2. 场景动画
- 日夜交替
- 四季变换
- 天气效果

### 3. 游戏动画
- 简单的弹球游戏
- 捉迷藏动画
- 赛跑比赛

## 动画是怎么工作的呢？ 🤔

### 1. 动画的小秘密 - 连续的画面 🎬

想象一下你在快速翻动一本小人书：
```
第1页：小人站着 🧍
第2页：小人抬脚 🏃
第3页：小人跑步 🏃‍♂️
```

当你快速翻动时，小人就像真的在跑步！
这就是动画的基本原理 - **很多张静止的图片快速播放**。

### 2. 动画中的数学魔法 🔢

#### 位置的变化
想象小猫在数轴上散步：
```
位置 = 当前位置 + 速度 × 时间
例如：
- 开始位置：0
- 每次移动：+5
- 最终位置：0 → 5 → 10 → 15
```

#### 速度和方向
就像荡秋千一样：
```
向前：位置 + 速度
向后：位置 - 速度
到边界时：速度 × (-1) // 改变方向
```

### 3. 时间的魔法 ⏰

想象你在玩跳绳：
```javascript
// 每隔一小段时间
setInterval(() => {
  // 做一个动作
  跳一下();
  // 等待一会儿
}, 1000) // 1秒钟
```

### 4. 让我们一起做个实验！ 🧪

<div class="experiment-box">
  <div class="experiment-display">
    {{ experimentEmoji }}
  </div>
  <div class="experiment-controls">
    <button @click="startExperiment">
      {{ experimentInterval ? '停止' : '开始' }}生长
    </button>
    <div class="speed-control">
      <span>速度：</span>
      <input 
        type="range" 
        v-model="experimentSpeed" 
        min="0.5" 
        max="3" 
        step="0.5"
      >
      <span>{{ experimentSpeed }}x</span>
    </div>
  </div>
</div>

### 5. 动画的数学游戏 🎲

#### 圆周运动
想象一个小球在转圈：
```
x = 圆心x + 半径 × cos(角度)
y = 圆心y + 半径 × sin(角度)
角度 = 角度 + 速度
```

#### 弹跳效果
就像弹力球：
```
速度 = 速度 + 重力
位置 = 位置 + 速度
如果碰到地面：速度 = -速度 × 弹力
```

### 6. 颜色变化的秘密 🎨

颜色也是数字的游戏：
```
红色：0-255
绿色：0-255
蓝色：0-255

例如：
红色 = rgb(255, 0, 0)
黄色 = rgb(255, 255, 0)
```

<div class="color-experiment">
  <div 
    class="color-box"
    :style="{
      backgroundColor: `rgb(${colorValues.red}, ${colorValues.green}, ${colorValues.blue})`
    }"
  ></div>
  <div class="color-controls">
    <label>
      红色：<input type="range" v-model="colorValues.red" min="0" max="255">
    </label>
    <label>
      绿色：<input type="range" v-model="colorValues.green" min="0" max="255">
    </label>
    <label>
      蓝色：<input type="range" v-model="colorValues.blue" min="0" max="255">
    </label>
  </div>
</div>

<style scoped>
.demo-box {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  overflow: hidden;
}

.bouncing-ball {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.05s linear;
}

.magic-block {
  background: #42b883;
  border-radius: 8px;
  transition: all 0.05s linear;
}

.running-cat {
  font-size: 40px;
  transition: all 0.2s linear;
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
  background: #3aa876;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.experiment-box {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
}

.experiment-display {
  font-size: 48px;
  margin: 20px 0;
}

.experiment-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.speed-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-experiment {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
}

.color-box {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin: 0 auto 20px;
}

.color-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.color-controls label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-controls input[type="range"] {
  flex: 1;
}
</style>

## 小测试 📝

1. 动画的三个基本要素是什么？
   - [ ] 移动
   - [ ] 变形
   - [ ] 颜色变化

2. 以下哪些是平滑动画的要点？
   - [ ] 速度要适中
   - [ ] 变化要自然
   - [ ] 效果要连贯

3. 你能想到生活中有哪些动画效果？
   - 树叶随风摆动
   - 波浪起伏
   - 云朵飘动

## 作业小任务 📚

1. **观察记录**
   - 记录生活中看到的有趣动态
   - 画下你最喜欢的动画效果
   - 想象一个动画故事

2. **创意设计**
   - 设计一个简单的动画角色
   - 画出角色的不同动作
   - 想象角色的动画效果

3. **动手实践**
   - 制作一个简单的翻页动画
   - 创造一个有趣的动画场景
   - 设计一个动画小游戏

准备好了吗？让我们一起进入神奇的动画世界吧！ 🎨 

## 少儿动画编程工具 🎨

### 我的动画编程工具 🎮

<div class="code-editor">
  <div class="editor-container">
    <div class="block-palette">
      <h4>指令积木 🧱</h4>
      <div class="block-buttons">
        <button 
          v-for="block in blockTypes" 
          :key="block.id"
          @click="addBlock(block.id)"
          class="block-button"
        >
          {{ block.icon }} {{ block.label }}
        </button>
      </div>
    </div>
    <div class="code-workspace">
      <h4>我的程序 📝</h4>
      <div class="code-blocks" v-if="codeBlocks.length">
        <div 
          v-for="(block, index) in codeBlocks" 
          :key="block.id"
          class="code-block"
        >
          <span class="block-content">
            {{ blockTypes.find(t => t.id === block.type)?.icon }}
            {{ blockTypes.find(t => t.id === block.type)?.label }}
          </span>
          <button @click="removeBlock(index)" class="remove-block">❌</button>
        </div>
      </div>
      <div v-else class="empty-workspace">
        点击左边的积木开始编程吧！
      </div>
    </div>
  </div>
  
  <div class="preview-container">
    <h4>预览效果 👀</h4>
    <div class="preview-stage">
      <div 
        class="preview-character"
        :style="{
          transform: `translate(${previewX}px, ${previewY}px) 
                     scale(${previewScale}) 
                     rotate(${previewRotation}deg)`
        }"
      >
        {{ previewEmoji }}
      </div>
    </div>
    <div class="preview-controls">
      <button @click="runCode" :class="{ 'playing': isPreviewPlaying }">
        {{ isPreviewPlaying ? '停止' : '运行' }}
      </button>
      <button @click="clearCode">清空</button>
    </div>
  </div>
</div>

<style scoped>
.code-editor {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin: 20px 0;
  padding: 20px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
}

.editor-container {
  display: flex;
  gap: 20px;
}

.block-palette {
  width: 150px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.block-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.block-button {
  background: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
}

.block-button:hover {
  transform: translateX(5px);
}

.code-workspace {
  flex: 1;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.code-blocks {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.code-block {
  background: white;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.remove-block {
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.remove-block:hover {
  opacity: 1;
}

.empty-workspace {
  color: #666;
  text-align: center;
  padding: 20px;
}

.preview-container {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.preview-stage {
  background: white;
  border-radius: 8px;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.preview-character {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center;
  font-size: 40px;
  transition: all 0.3s ease;
}

.preview-controls {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.preview-controls button {
  min-width: 80px;
}

.playing {
  background: #ff6b6b;
}

h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}
</style>

### 编程小贴士 💡

1. **开始编程**
   - 从左边选择指令积木
   - 拖放到中间的程序区
   - 点击运行查看效果

2. **创作技巧**
   - 先想好要实现的效果
   - 一步一步添加指令
   - 多次尝试和调整

3. **进阶玩法**
   - 尝试组合不同的动作
   - 创造有趣的动画效果
   - 设计自己的小故事

::: tip 小提示
- 每个积木都是一个动作指令
- 程序会从上到下执行
- 可以随时修改或删除积木
::: 