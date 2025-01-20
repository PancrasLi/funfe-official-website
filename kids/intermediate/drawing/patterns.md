# 神奇的图案世界 🎨

<script setup>
import { ref, onMounted } from 'vue'

// 画布状态
const canvas = ref({
  width: 400,
  height: 300,
  context: null,
  exampleContext: null,
  color: '#42b883',
  lineWidth: 2
})

// 示例状态
const demo = ref({
  currentPattern: 'stars',
  currentStep: 0,
  totalSteps: 3,
  message: '',
  isPlaying: false,
  patterns: [
    { id: 'stars', name: '星星', icon: '⭐' },
    { id: 'flowers', name: '花朵', icon: '🌸' },
    { id: 'hearts', name: '爱心', icon: '❤️' }
  ]
})

// 颜色选择
const colors = ref({
  selected: '#42b883',
  options: [
    { color: '#42b883', name: '绿色', icon: '🟢' },
    { color: '#ff6b6b', name: '红色', icon: '🔴' },
    { color: '#4dabf7', name: '蓝色', icon: '🔵' },
    { color: '#ffd43b', name: '黄色', icon: '🟡' }
  ]
})

// 添加创意案例状态
const examples = ref({
  currentExample: 'birthday',
  isPlaying: false,
  examples: [
    { id: 'birthday', name: '生日贺卡', icon: '🎂' },
    { id: 'window', name: '窗户装饰', icon: '🪟' },
    { id: 'notebook', name: '笔记本', icon: '📔' },
    { id: 'frame', name: '相框', icon: '🖼️' },
    { id: 'holiday', name: '节日画', icon: '🎄' }
  ]
})

// 初始化画布
function initCanvas() {
  const patternCanvas = document.querySelector('.pattern-canvas')
  const exampleCanvas = document.querySelector('.example-canvas')
  
  if (patternCanvas) {
    patternCanvas.width = canvas.value.width
    patternCanvas.height = canvas.value.height
    canvas.value.context = patternCanvas.getContext('2d')
  }
  
  if (exampleCanvas) {
    exampleCanvas.width = canvas.value.width
    exampleCanvas.height = canvas.value.height
    canvas.value.exampleContext = exampleCanvas.getContext('2d')
  }
}

// 清空画布
function clearCanvas(ctx) {
  if (ctx) {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  }
}

// 画星星
function drawStar(x, y, size, ctx = canvas.value.context) {
  const spikes = 5
  const outerRadius = size
  const innerRadius = size / 2

  let rot = Math.PI / 2 * 3
  let step = Math.PI / spikes

  ctx.beginPath()
  ctx.moveTo(x, y - outerRadius)

  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius)
    rot += step

    ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius)
    rot += step
  }
  
  ctx.lineTo(x, y - outerRadius)
  ctx.closePath()
  ctx.stroke()
}

// 画花朵
function drawFlower(x, y, size, ctx = canvas.value.context) {
  // 花瓣
  for (let i = 0; i < 6; i++) {
    ctx.beginPath()
    ctx.arc(
      x + Math.cos(i * Math.PI / 3) * size/2,
      y + Math.sin(i * Math.PI / 3) * size/2,
      size/3,
      0,
      Math.PI * 2
    )
    ctx.stroke()
  }
  // 花心
  ctx.beginPath()
  ctx.arc(x, y, size/4, 0, Math.PI * 2)
  ctx.stroke()
}

// 画爱心
function drawHeart(x, y, size, ctx = canvas.value.context) {
  ctx.beginPath()
  ctx.moveTo(x, y + size/4)
  
  // 左半边
  ctx.bezierCurveTo(
    x - size/2, y - size/2,
    x - size, y + size/4,
    x, y + size
  )
  
  // 右半边
  ctx.bezierCurveTo(
    x + size, y + size/4,
    x + size/2, y - size/2,
    x, y + size/4
  )
  
  ctx.stroke()
}

// 绘制图案
function drawPattern() {
  const ctx = canvas.value.context
  if (!ctx) return

  clearCanvas(ctx)
  ctx.strokeStyle = colors.value.selected
  ctx.lineWidth = canvas.value.lineWidth

  const pattern = demo.value.currentPattern
  const step = demo.value.currentStep
  const spacing = 60
  const size = 20

  switch(step) {
    case 0:
      // 单个图案
      if (pattern === 'stars') {
        drawStar(200, 150, size, ctx)
        demo.value.message = '看，这是一颗小星星！'
      } else if (pattern === 'flowers') {
        drawFlower(200, 150, size, ctx)
        demo.value.message = '这是一朵漂亮的小花！'
      } else if (pattern === 'hearts') {
        drawHeart(200, 150, size, ctx)
        demo.value.message = '画一个爱心送给你！'
      }
      break
    
    case 1:
      // 水平排列
      for (let x = spacing; x < canvas.value.width - spacing/2; x += spacing) {
        if (pattern === 'stars') {
          drawStar(x, 150, size, ctx)
        } else if (pattern === 'flowers') {
          drawFlower(x, 150, size, ctx)
        } else if (pattern === 'hearts') {
          drawHeart(x, 150, size, ctx)
        }
      }
      demo.value.message = '让我们排成一排，像跳舞一样！'
      break
    
    case 2:
      // 网格排列
      for (let y = spacing; y < canvas.value.height - spacing/2; y += spacing) {
        for (let x = spacing; x < canvas.value.width - spacing/2; x += spacing) {
          if (pattern === 'stars') {
            drawStar(x, y, size, ctx)
          } else if (pattern === 'flowers') {
            drawFlower(x, y, size, ctx)
          } else if (pattern === 'hearts') {
            drawHeart(x, y, size, ctx)
          }
        }
      }
      demo.value.message = '哇！变成了一片星星/花朵/爱心海洋！'
      break
  }
}

// 切换图案
function changePattern(patternId) {
  demo.value.currentPattern = patternId
  demo.value.currentStep = 0
  drawPattern()
}

// 切换颜色
function changeColor(newColor) {
  colors.value.selected = newColor
  drawPattern()
}

// 下一步
function nextStep() {
  if (demo.value.currentStep < demo.value.totalSteps - 1) {
    demo.value.currentStep++
    drawPattern()
  }
}

// 上一步
function prevStep() {
  if (demo.value.currentStep > 0) {
    demo.value.currentStep--
    drawPattern()
  }
}

// 绘制生日贺卡
function drawBirthdayCard(ctx) {
  // 背景
  ctx.fillStyle = colors.value.selected + '20'
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
  
  // 上方星星
  for(let i = 0; i < 10; i++) {
    drawStar(
      Math.random() * canvas.value.width,
      Math.random() * canvas.value.height/2,
      10 + Math.random() * 10,
      ctx
    )
  }
  
  // 中间文字
  ctx.font = '30px Arial'
  ctx.textAlign = 'center'
  ctx.strokeText('生日快乐！', canvas.value.width/2, canvas.value.height/2)
  
  // 底部爱心
  for(let i = 0; i < 5; i++) {
    drawHeart(
      50 + i * 80,
      canvas.value.height - 50,
      15,
      ctx
    )
  }
}

// 绘制窗户装饰
function drawWindowDecoration(ctx) {
  // 窗框
  ctx.strokeRect(50, 50, canvas.value.width - 100, canvas.value.height - 100)
  
  // 四角花朵
  drawFlower(80, 80, 30, ctx)
  drawFlower(canvas.value.width - 80, 80, 30, ctx)
  drawFlower(80, canvas.value.height - 80, 30, ctx)
  drawFlower(canvas.value.width - 80, canvas.value.height - 80, 30, ctx)
  
  // 中间星星
  for(let i = 0; i < 12; i++) {
    drawStar(
      150 + Math.random() * 100,
      100 + Math.random() * 100,
      8,
      ctx
    )
  }
}

// 绘制笔记本封面
function drawNotebookCover(ctx) {
  // 边框爱心
  for(let i = 0; i < 8; i++) {
    drawHeart(
      30 + i * 50,
      30,
      10,
      ctx
    )
    drawHeart(
      30 + i * 50,
      canvas.value.height - 30,
      10,
      ctx
    )
  }
  
  // 角落花朵
  drawFlower(50, 50, 25, ctx)
  drawFlower(canvas.value.width - 50, 50, 25, ctx)
  drawFlower(50, canvas.value.height - 50, 25, ctx)
  drawFlower(canvas.value.width - 50, canvas.value.height - 50, 25, ctx)
  
  // 中间留空区域标记
  ctx.setLineDash([5, 5])
  ctx.strokeRect(100, 70, canvas.value.width - 200, canvas.value.height - 140)
  ctx.setLineDash([])
}

// 绘制相框
function drawPhotoFrame(ctx) {
  // 渐变边框
  const gradient = ctx.createLinearGradient(0, 0, canvas.value.width, canvas.value.height)
  gradient.addColorStop(0, colors.value.selected)
  gradient.addColorStop(1, colors.value.options[1].color)
  ctx.strokeStyle = gradient
  ctx.lineWidth = 10
  ctx.strokeRect(30, 30, canvas.value.width - 60, canvas.value.height - 60)
  ctx.lineWidth = canvas.value.lineWidth
  
  // 装饰图案
  for(let i = 0; i < 4; i++) {
    const size = 15 + i * 5
    drawStar(50 + i * 30, 50, size, ctx)
    drawHeart(canvas.value.width - 50 - i * 30, 50, size, ctx)
    drawFlower(50 + i * 30, canvas.value.height - 50, size, ctx)
    drawHeart(canvas.value.width - 50 - i * 30, canvas.value.height - 50, size, ctx)
  }
}

// 绘制节日装饰画
function drawHolidayArt(ctx) {
  // 圣诞树
  const treeX = canvas.value.width/4
  const treeY = canvas.value.height/2
  for(let i = 0; i < 5; i++) {
    const y = treeY - i * 30
    const width = 100 - i * 15
    for(let j = 0; j < 3 + i; j++) {
      drawStar(
        treeX - width/2 + j * (width/(2 + i)),
        y,
        8,
        ctx
      )
    }
  }
  
  // 春字花朵
  const flowerX = canvas.value.width * 3/4
  const flowerY = canvas.value.height/2
  const positions = [
    [0, -40], [40, -40],  // 上
    [-40, 0], [0, 0], [40, 0],  // 中
    [-40, 40], [40, 40]   // 下
  ]
  positions.forEach(([dx, dy]) => {
    drawFlower(flowerX + dx, flowerY + dy, 15, ctx)
  })
}

// 播放创意案例动画
function playCreativeExample() {
  if (!examples.value.isPlaying) {
    examples.value.isPlaying = true
    const ctx = canvas.value.exampleContext
    if (!ctx) return
    
    ctx.strokeStyle = colors.value.selected
    ctx.lineWidth = canvas.value.lineWidth
    
    clearCanvas(ctx)
    switch(examples.value.currentExample) {
      case 'birthday':
        drawBirthdayCard(ctx)
        break
      case 'window':
        drawWindowDecoration(ctx)
        break
      case 'notebook':
        drawNotebookCover(ctx)
        break
      case 'frame':
        drawPhotoFrame(ctx)
        break
      case 'holiday':
        drawHolidayArt(ctx)
        break
    }
    examples.value.isPlaying = false
  }
}

// 切换创意案例
function changeExample(exampleId) {
  examples.value.currentExample = exampleId
  playCreativeExample()
}

onMounted(() => {
  initCanvas()
  // 初始化基本图案
  drawPattern()
  // 初始化创意案例
  const exampleCanvas = document.querySelector('.example-canvas')
  if (exampleCanvas) {
    exampleCanvas.width = canvas.value.width
    exampleCanvas.height = canvas.value.height
    canvas.value.exampleContext = exampleCanvas.getContext('2d')
    // 绘制第一个案例
    playCreativeExample()
  }
})
</script>

## 欢迎来到神奇的图案世界！ 🌈

<div class="welcome-banner">
  <div class="welcome-icon">✨</div>
  <div class="welcome-text">
    <h2>小朋友，准备好创造你的图案魔法了吗？</h2>
    <p>今天我们要学习用简单的图形创造出美丽的图案！</p>
  </div>
</div>

### 第一关：选择你的魔法图案 ✨

<div class="pattern-section">
  <div class="pattern-container">
    <div class="pattern-selector">
      <button 
        v-for="pattern in demo.patterns"
        :key="pattern.id"
        @click="changePattern(pattern.id)"
        :class="{ active: demo.currentPattern === pattern.id }"
        class="pattern-button">
        {{ pattern.icon }} {{ pattern.name }}
      </button>
    </div>
    <div class="color-selector">
      <span class="color-label">选择颜色：</span>
      <button 
        v-for="option in colors.options"
        :key="option.color"
        @click="changeColor(option.color)"
        :class="{ active: colors.selected === option.color }"
        class="color-button"
        :style="{ backgroundColor: option.color }">
        {{ option.icon }}
      </button>
    </div>
    <canvas class="pattern-canvas"></canvas>
    <div class="pattern-controls">
      <button @click="prevStep" :disabled="demo.currentStep === 0" class="control-button">
        ⬅️ 上一步
      </button>
      <button @click="nextStep" :disabled="demo.currentStep === demo.totalSteps - 1" class="control-button">
        下一步 ➡️
      </button>
    </div>
    <div class="step-message" v-if="demo.message">
      <span class="step-icon">✨</span>
      {{ demo.message }}
    </div>
  </div>
</div>

### 第二关：图案的秘密 🔍

让我们来看看图案是怎么变出来的：

1. **单个图案**
   - 先画一个小图案
   - 可以是星星、花朵或爱心
   - 选择喜欢的颜色

2. **排成一排**
   - 图案手拉手
   - 从左到右排列
   - 像跳舞一样整齐

3. **变成海洋**
   - 上下左右都排满
   - 形成漂亮的图案
   - 像魔法一样神奇

### 第三关：创意小贴士 💡

1. **颜色搭配**
   - 可以换不同的颜色
   - 试试彩虹色的效果
   - 找到最喜欢的配色

2. **图案变化**
   - 大小可以改变
   - 方向可以旋转
   - 间距可以调整

3. **创意发挥**
   - 尝试新的组合
   - 发明自己的图案
   - 做成贺卡装饰

### 创意案例展示 🎨

<div class="pattern-section">
  <div class="pattern-container">
    <div class="example-selector">
      <button 
        v-for="example in examples.examples"
        :key="example.id"
        @click="changeExample(example.id)"
        :class="{ active: examples.currentExample === example.id }"
        class="pattern-button">
        {{ example.icon }} {{ example.name }}
      </button>
    </div>
    <canvas class="example-canvas"></canvas>
    <div class="example-description">
      <div v-if="examples.currentExample === 'birthday'">
        <h4>🎂 生日贺卡</h4>
        <p>上方撒满星星，中间写上祝福，底部环绕爱心</p>
      </div>
      <div v-if="examples.currentExample === 'window'">
        <h4>🪟 窗户装饰</h4>
        <p>四角放置大花朵，中间点缀小星星，形成漂亮的窗花</p>
      </div>
      <div v-if="examples.currentExample === 'notebook'">
        <h4>📔 笔记本封面</h4>
        <p>边框用小爱心装饰，角落放置花朵，中间留空写字</p>
      </div>
      <div v-if="examples.currentExample === 'frame'">
        <h4>🖼️ 相框装饰</h4>
        <p>使用不同大小的图案，搭配渐变色彩，营造立体效果</p>
      </div>
      <div v-if="examples.currentExample === 'holiday'">
        <h4>🎄 节日装饰画</h4>
        <p>左边用星星组成圣诞树，右边用花朵拼成春字</p>
      </div>
    </div>
  </div>
</div>

### 小小设计师的进阶秘籍 🌟

1. **图案设计小技巧**
   - 先从简单的开始
   - 保持图案整齐
   - 颜色不要太多

2. **有趣的创意**
   - 可以做生日贺卡
   - 可以装饰日记本
   - 可以做成墙面装饰

3. **和朋友一起玩**
   - 交换创意想法
   - 一起设计图案
   - 互相学习进步

<style scoped>
.pattern-section {
  background: var(--vp-c-bg);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 12px var(--vp-c-shadow);
}

.pattern-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.pattern-canvas {
  width: 400px;
  height: 300px;
  border: 3px solid var(--vp-c-brand);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.pattern-controls {
  display: flex;
  gap: 10px;
}

.pattern-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.pattern-button {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
  border: 2px solid var(--vp-c-brand);
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pattern-button.active {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  transform: scale(1.05);
}

.welcome-banner {
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  border-radius: 16px;
  padding: 30px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--vp-c-bg);
  box-shadow: 0 4px 15px var(--vp-c-shadow);
}

.welcome-icon {
  font-size: 48px;
  animation: float 3s ease-in-out infinite;
}

.welcome-text h2 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

.welcome-text p {
  margin: 0;
  opacity: 0.9;
}

.color-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.color-label {
  font-size: 16px;
  color: var(--vp-c-text-2);
}

.color-button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: 2px solid var(--vp-c-divider);
}

.color-button.active {
  transform: scale(1.15);
  box-shadow: 0 0 10px var(--vp-c-shadow);
}

.step-message {
  font-size: 18px;
  color: var(--vp-c-brand);
  text-align: center;
  margin: 10px 0;
  padding: 10px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  width: 100%;
}

.step-icon {
  margin-right: 8px;
  animation: sparkle 1.5s ease-in-out infinite;
}

.control-button {
  padding: 10px 20px;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.control-button:hover {
  transform: scale(1.05);
  background: var(--vp-c-brand-dark);
}

.control-button:disabled {
  background: var(--vp-c-gray);
  color: var(--vp-c-text-3);
  cursor: not-allowed;
}

h3 {
  color: var(--vp-c-brand);
  margin-top: 30px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  transition: all 0.3s ease;
  color: var(--vp-c-text-1);
}

li:hover {
  transform: translateX(10px);
  background: var(--vp-c-bg-mute);
}

/* 创意案例样式 */
pre {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  color: var(--vp-c-text-1);
}

code {
  color: var(--vp-c-brand);
}

/* 动画优化 */
@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0);
  }
  50% { 
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes sparkle {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1) rotate(0);
  }
  50% { 
    opacity: 0.5; 
    transform: scale(0.8) rotate(180deg);
  }
}

.example-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.example-description {
  text-align: center;
  padding: 15px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-top: 15px;
}

.example-description h4 {
  margin: 0 0 10px 0;
  color: var(--vp-c-brand);
}

.example-description p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.example-canvas {
  width: 400px;
  height: 300px;
  border: 3px solid var(--vp-c-brand);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
</style>
