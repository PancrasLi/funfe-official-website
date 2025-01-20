# 神奇的绘画世界 🎨

<script setup>
import { ref, onMounted } from 'vue'

// 画布状态
const canvas = ref({
  width: 400,
  height: 300,
  context: null,
  isDrawing: false,
  currentTool: 'pen',
  color: '#42b883',
  lineWidth: 3
})

// 示例状态
const demo = ref({
  currentStep: 0,
  isPlaying: false,
  totalSteps: 4,
  message: '',
  showHint: false
})

// 添加更多示例状态
const examples = ref({
  currentExample: 'face',
  options: [
    { id: 'face', name: '笑脸', icon: '😊' },
    { id: 'house', name: '房子', icon: '🏠' },
    { id: 'flower', name: '花朵', icon: '🌸' }
  ]
})

// 添加颜色选择
const colors = ref({
  selected: '#42b883',
  options: [
    { color: '#42b883', name: '绿色', icon: '🟢' },
    { color: '#ff6b6b', name: '红色', icon: '🔴' },
    { color: '#4dabf7', name: '蓝色', icon: '🔵' },
    { color: '#ffd43b', name: '黄色', icon: '🟡' }
  ]
})

// 初始化画布
function initCanvas() {
  const canvasEl = document.querySelector('.drawing-canvas')
  if (canvasEl) {
    canvasEl.width = canvas.value.width
    canvasEl.height = canvas.value.height
    canvas.value.context = canvasEl.getContext('2d')
    canvas.value.context.lineCap = 'round'
    canvas.value.context.lineJoin = 'round'
  }
}

// 演示步骤
function nextStep() {
  if (demo.value.currentStep < demo.value.totalSteps) {
    demo.value.currentStep++
    updateStepContent()
  }
}

function prevStep() {
  if (demo.value.currentStep > 0) {
    demo.value.currentStep--
    updateStepContent()
  }
}

function updateStepContent() {
  clearCanvas()
  const ctx = canvas.value.context
  if (ctx) {
    ctx.strokeStyle = colors.value.selected
    ctx.lineWidth = canvas.value.lineWidth
    
    switch(examples.value.currentExample) {
      case 'face':
        switch(demo.value.currentStep) {
          case 0:
            demo.value.message = '让我们先画一个圆圆的脸蛋吧！'
            drawCircle(200, 150, 50)
            break
          case 1:
            demo.value.message = '现在给小朋友画上眼睛...'
            drawFace()
            break
          case 2:
            demo.value.message = '再画一个开心的笑容！'
            drawFaceWithSmile()
            break
          case 3:
            demo.value.message = '最后加上一些装饰，看看我们的作品吧！'
            drawCompleteFace()
            break
        }
        break
      
      case 'house':
        switch(demo.value.currentStep) {
          case 0:
            demo.value.message = '先画一个方方的房子主体！'
            drawHouse()
            break
          case 1:
            demo.value.message = '接着给房子加上尖尖的屋顶...'
            drawHouse()
            break
          case 2:
            demo.value.message = '现在来画几扇漂亮的窗户！'
            drawHouse()
            break
          case 3:
            demo.value.message = '最后加上一扇门，我们的房子完成啦！'
            drawHouse()
            break
        }
        break
      
      case 'flower':
        switch(demo.value.currentStep) {
          case 0:
            demo.value.message = '让我们从花朵的中心开始画起！'
            drawFlower()
            break
          case 1:
            demo.value.message = '现在给花朵画上美丽的花瓣...'
            drawFlower()
            break
          case 2:
            demo.value.message = '加上一根挺拔的花茎...'
            drawFlower()
            break
          case 3:
            demo.value.message = '最后点缀上翠绿的叶子，我们的花朵绽放啦！'
            drawFlower()
            break
        }
        break
    }
  }
}

// 绘图函数
function drawCircle(x, y, radius) {
  const ctx = canvas.value.context
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.stroke()
}

function drawFace() {
  drawCircle(200, 150, 50)
  // 眼睛
  drawCircle(180, 130, 5)
  drawCircle(220, 130, 5)
}

function drawFaceWithSmile() {
  drawFace()
  // 笑容
  const ctx = canvas.value.context
  ctx.beginPath()
  ctx.arc(200, 160, 20, 0, Math.PI)
  ctx.stroke()
}

function drawCompleteFace() {
  drawFaceWithSmile()
  // 装饰
  const ctx = canvas.value.context
  ctx.beginPath()
  ctx.moveTo(200, 100)
  ctx.lineTo(200, 80)
  ctx.stroke()
}

// 画房子的函数
function drawHouse() {
  const ctx = canvas.value.context
  ctx.strokeStyle = canvas.value.color
  ctx.lineWidth = canvas.value.lineWidth

  switch(demo.value.currentStep) {
    case 0:
      // 画房子的主体
      ctx.beginPath()
      ctx.rect(150, 150, 100, 100)
      ctx.stroke()
      break
    case 1:
      // 主体 + 屋顶
      ctx.beginPath()
      ctx.rect(150, 150, 100, 100)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(150, 150)
      ctx.lineTo(200, 100)
      ctx.lineTo(250, 150)
      ctx.stroke()
      break
    case 2:
      // 主体 + 屋顶 + 窗户
      ctx.beginPath()
      ctx.rect(150, 150, 100, 100)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(150, 150)
      ctx.lineTo(200, 100)
      ctx.lineTo(250, 150)
      ctx.stroke()
      ctx.beginPath()
      ctx.rect(170, 170, 30, 30)
      ctx.rect(200, 170, 30, 30)
      ctx.stroke()
      break
    case 3:
      // 完整的房子
      ctx.beginPath()
      ctx.rect(150, 150, 100, 100)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(150, 150)
      ctx.lineTo(200, 100)
      ctx.lineTo(250, 150)
      ctx.stroke()
      ctx.beginPath()
      ctx.rect(170, 170, 30, 30)
      ctx.rect(200, 170, 30, 30)
      ctx.stroke()
      ctx.beginPath()
      ctx.rect(190, 200, 20, 50)
      ctx.stroke()
      break
  }
}

// 画花朵的函数
function drawFlower() {
  const ctx = canvas.value.context
  ctx.strokeStyle = canvas.value.color
  ctx.lineWidth = canvas.value.lineWidth

  switch(demo.value.currentStep) {
    case 0:
      // 画花心
      ctx.beginPath()
      ctx.arc(200, 150, 15, 0, Math.PI * 2)
      ctx.stroke()
      break
    case 1:
      // 花心 + 花瓣
      ctx.beginPath()
      ctx.arc(200, 150, 15, 0, Math.PI * 2)
      ctx.stroke()
      // 画5个花瓣
      for(let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(
          200 + Math.cos(i * Math.PI * 2/5) * 30,
          150 + Math.sin(i * Math.PI * 2/5) * 30,
          20,
          0,
          Math.PI * 2
        )
        ctx.stroke()
      }
      break
    case 2:
      // 花心 + 花瓣 + 茎
      ctx.beginPath()
      ctx.arc(200, 150, 15, 0, Math.PI * 2)
      ctx.stroke()
      for(let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(
          200 + Math.cos(i * Math.PI * 2/5) * 30,
          150 + Math.sin(i * Math.PI * 2/5) * 30,
          20,
          0,
          Math.PI * 2
        )
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.moveTo(200, 170)
      ctx.lineTo(200, 250)
      ctx.stroke()
      break
    case 3:
      // 完整的花朵
      ctx.beginPath()
      ctx.arc(200, 150, 15, 0, Math.PI * 2)
      ctx.stroke()
      for(let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(
          200 + Math.cos(i * Math.PI * 2/5) * 30,
          150 + Math.sin(i * Math.PI * 2/5) * 30,
          20,
          0,
          Math.PI * 2
        )
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.moveTo(200, 170)
      ctx.lineTo(200, 250)
      ctx.stroke()
      // 添加叶子
      ctx.beginPath()
      ctx.arc(180, 200, 15, 0.5, Math.PI * 1.5, true)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(220, 220, 15, Math.PI * 1.5, 2.5, true)
      ctx.stroke()
      break
  }
}

function clearCanvas() {
  if (canvas.value.context) {
    canvas.value.context.clearRect(0, 0, canvas.value.width, canvas.value.height)
  }
}

function toggleHint() {
  demo.value.showHint = !demo.value.showHint
}

function changeColor(newColor) {
  colors.value.selected = newColor
  canvas.value.color = newColor
  updateStepContent()
}

function changeExample(exampleId) {
  examples.value.currentExample = exampleId
  demo.value.currentStep = 0
  updateStepContent()
}

onMounted(() => {
  initCanvas()
  updateStepContent()
})
</script>

## 欢迎来到神奇的绘画世界！ 🌈

<div class="welcome-banner">
  <div class="welcome-icon">🎨</div>
  <div class="welcome-text">
    <h2>亲爱的小朋友，准备好开始一段神奇的绘画冒险了吗？</h2>
    <p>今天我们要一起学习用电脑来画画，就像变魔法一样有趣！</p>
  </div>
</div>

### 第一关：认识我们的画板 🎨

<div class="learning-section">
  <div class="canvas-container">
    <div class="example-selector">
      <button 
        v-for="example in examples.options"
        :key="example.id"
        @click="changeExample(example.id)"
        :class="{ active: examples.currentExample === example.id }"
        class="example-button">
        {{ example.icon }} {{ example.name }}
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
    <canvas class="drawing-canvas"></canvas>
    <div class="canvas-controls">
      <button @click="prevStep" :disabled="demo.currentStep === 0" class="control-button">
        ⬅️ 上一步
      </button>
      <button @click="nextStep" :disabled="demo.currentStep === demo.totalSteps" class="control-button">
        下一步 ➡️
      </button>
      <button @click="toggleHint" class="hint-button">
        💡 需要帮助
      </button>
    </div>
    <div class="step-message" v-if="demo.message">
      <span class="step-icon">✨</span>
      {{ demo.message }}
    </div>
  </div>
  
  <div class="hint-box" v-if="demo.showHint">
    <h4>🌟 小贴士</h4>
    <ul>
      <li>🎯 圆圈是用 arc() 画出来的</li>
      <li>📏 直线是用 moveTo() 和 lineTo() 连接的</li>
      <li>🔄 每次画之前要用 beginPath()</li>
    </ul>
  </div>
</div>

### 第二关：基本图形 ✨

让我们来认识一下基本的图形：

1. **圆圈**：
   - 像气球一样圆圆的
   - 可以画脸蛋、眼睛
   - 还可以画太阳和月亮

2. **直线**：
   - 可以画树枝
   - 可以画房子的边
   - 可以连接不同的点

3. **方块**：
   - 可以画房子
   - 可以画窗户
   - 可以画积木

### 第三关：颜色世界 🌈

我们可以给图形涂上漂亮的颜色：

- 🔴 红色：像苹果一样
- 🟡 黄色：像太阳一样
- 🟢 绿色：像草地一样
- 🔵 蓝色：像天空一样

### 第四关：创意时间 🎪

让我们用学到的本领来画一些有趣的东西：

1. **笑脸**
   - 一个大圆圈做脸
   - 两个小圆圈做眼睛
   - 一条弧线做嘴巴

2. **小房子**
   - 一个方块做房子
   - 一个三角形做屋顶
   - 小方块做窗户

3. **花朵**
   - 小圆圈围成花瓣
   - 直线做花茎
   - 叶子点缀两边

## 小画家的进阶秘籍 🌟

1. **画画小技巧**
   - 先想好要画什么
   - 从简单的形状开始
   - 慢慢添加细节

2. **颜色搭配**
   - 天空配白云
   - 太阳配彩虹
   - 花朵配绿叶

3. **创意建议**
   - 画自己喜欢的东西
   - 可以和朋友一起画
   - 把作品保存下来

<style scoped>
.learning-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.canvas-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.drawing-canvas {
  width: 400px;
  height: 300px;
  border: 3px solid #42b883;
  border-radius: 12px;
  background: white;
}

.canvas-controls {
  display: flex;
  gap: 10px;
}

.step-message {
  font-size: 18px;
  color: #42b883;
  text-align: center;
  margin: 10px 0;
  padding: 10px;
  background: #f0f9f4;
  border-radius: 8px;
  width: 100%;
}

button {
  padding: 10px 20px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
}

button:hover {
  transform: scale(1.05);
  background: #3aa876;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.hint-button {
  background: #ff9800;
}

.hint-box {
  margin-top: 20px;
  padding: 15px;
  background: #fff3e0;
  border-left: 4px solid #ff9800;
  border-radius: 8px;
}

.hint-box h4 {
  color: #f57c00;
  margin: 0 0 10px 0;
}

.hint-box ul {
  margin: 0;
  padding-left: 20px;
}

.hint-box li {
  color: #666;
  margin: 5px 0;
}

h3 {
  color: #42b883;
  margin-top: 30px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  transition: all 0.3s ease;
}

li:hover {
  transform: translateX(10px);
  background: #e0e0e0;
}

.welcome-banner {
  background: linear-gradient(135deg, #42b883 0%, #3488ce 100%);
  border-radius: 16px;
  padding: 30px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.2);
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

.example-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.example-button {
  background: white;
  color: #42b883;
  border: 2px solid #42b883;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.example-button.active {
  background: #42b883;
  color: white;
  transform: scale(1.05);
}

.color-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.color-label {
  font-size: 16px;
  color: #666;
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
}

.color-button.active {
  transform: scale(1.15);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.control-button {
  display: flex;
  align-items: center;
  gap: 5px;
}

.step-icon {
  margin-right: 8px;
  animation: sparkle 1.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
</style>
