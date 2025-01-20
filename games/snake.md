# 贪吃蛇

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)
const ctx = ref(null)
const snake = ref([
  {x: 10, y: 10},
])
const food = ref({x: 15, y: 15})
const direction = ref('right')
const gameLoop = ref(null)
const score = ref(0)
const speed = ref(150)

function init() {
  ctx.value = canvas.value.getContext('2d')
  document.addEventListener('keydown', changeDirection)
  // 绘制初始状态
  drawSnake()
  drawFood()
}

function startGame() {
  if (gameLoop.value) return
  gameLoop.value = setInterval(update, speed.value)
}

function update() {
  // 清空画布
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  // 移动蛇
  moveSnake()
  
  // 检查碰撞
  checkCollision()
  
  // 绘制食物和蛇
  drawFood()
  drawSnake()
}

function moveSnake() {
  const head = {...snake.value[0]}
  
  switch(direction.value) {
    case 'up': head.y--; break
    case 'down': head.y++; break
    case 'left': head.x--; break
    case 'right': head.x++; break
  }
  
  snake.value.unshift(head)
  
  // 如果吃到食物
  if (head.x === food.value.x && head.y === food.value.y) {
    score.value += 10
    generateFood()
  } else {
    snake.value.pop()
  }
}

function drawSnake() {
  // 蛇身绘制优化
  snake.value.forEach((segment, index) => {
    // 蛇头使用不同颜色
    if (index === 0) {
      ctx.value.fillStyle = '#2E7D32'
      // 绘制蛇头
      ctx.value.beginPath()
      ctx.value.roundRect(segment.x * 20, segment.y * 20, 18, 18, 5)
      ctx.value.fill()
      
      // 绘制蛇眼
      ctx.value.fillStyle = 'white'
      const eyeOffset = direction.value === 'left' ? -2 : 2
      ctx.value.beginPath()
      ctx.value.arc(segment.x * 20 + 12 + eyeOffset, segment.y * 20 + 6, 2, 0, Math.PI * 2)
      ctx.value.arc(segment.x * 20 + 12 + eyeOffset, segment.y * 20 + 12, 2, 0, Math.PI * 2)
      ctx.value.fill()
    } else {
      // 蛇身渐变色
      const alpha = 1 - (index / snake.value.length) * 0.6
      ctx.value.fillStyle = `rgba(76, 175, 80, ${alpha})`
      ctx.value.beginPath()
      ctx.value.roundRect(segment.x * 20, segment.y * 20, 18, 18, 5)
      ctx.value.fill()
    }
  })
}

function drawFood() {
  // 食物绘制优化
  ctx.value.fillStyle = '#FF5252'
  ctx.value.beginPath()
  ctx.value.arc(food.value.x * 20 + 9, food.value.y * 20 + 9, 8, 0, Math.PI * 2)
  ctx.value.fill()
  
  // 添加光泽效果
  ctx.value.fillStyle = 'rgba(255, 255, 255, 0.4)'
  ctx.value.beginPath()
  ctx.value.arc(food.value.x * 20 + 7, food.value.y * 20 + 7, 3, 0, Math.PI * 2)
  ctx.value.fill()
}

function generateFood() {
  food.value = {
    x: Math.floor(Math.random() * (canvas.value.width / 20)),
    y: Math.floor(Math.random() * (canvas.value.height / 20))
  }
}

function changeDirection(event) {
  event.preventDefault()
  
  const keyMap = {
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'ArrowLeft': 'left',
    'ArrowRight': 'right'
  }
  
  const newDirection = keyMap[event.key]
  if (!newDirection) return
  
  // 防止反向移动
  const opposites = {
    'up': 'down',
    'down': 'up',
    'left': 'right',
    'right': 'left'
  }
  
  if (opposites[newDirection] !== direction.value) {
    direction.value = newDirection
  }
}

function checkCollision() {
  const head = snake.value[0]
  
  // 检查墙壁碰撞
  if (head.x < 0 || head.x >= canvas.value.width / 20 ||
      head.y < 0 || head.y >= canvas.value.height / 20) {
    gameOver()
  }
  
  // 检查自身碰撞
  for (let i = 1; i < snake.value.length; i++) {
    if (head.x === snake.value[i].x && head.y === snake.value[i].y) {
      gameOver()
    }
  }
}

function gameOver() {
  clearInterval(gameLoop.value)
  gameLoop.value = null
  alert(`游戏结束！得分：${score.value}`)
  resetGame()
}

function resetGame() {
  snake.value = [{x: 10, y: 10}]
  direction.value = 'right'
  score.value = 0
  generateFood()
}

onMounted(() => {
  init()
})
</script>

<div class="game-container">
  <div class="game-header">
    <div class="score-board">
      <span class="score-label">得分</span>
      <span class="score-value">{{ score }}</span>
    </div>
    <div class="speed-control">
      <label>速度：</label>
      <select v-model="speed" @change="resetGame">
        <option :value="200">🐌 慢速</option>
        <option :value="150">🚶 中速</option>
        <option :value="100">🏃 快速</option>
        <option :value="50">⚡ 极速</option>
      </select>
    </div>
  </div>
  <canvas ref="canvas" width="600" height="400" class="game-canvas"></canvas>
  <div class="controls">
    <button @click="startGame" class="start-btn" :disabled="gameLoop">
      <span class="btn-icon">▶️</span>
      {{ gameLoop ? '游戏进行中' : '开始游戏' }}
    </button>
    <button @click="resetGame" class="reset-btn">
      <span class="btn-icon">🔄</span>
      重新开始
    </button>
  </div>
  <div class="game-tips">
    <p>使用键盘方向键控制蛇的移动 ⬆️ ⬇️ ⬅️ ➡️</p>
  </div>
</div>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin-bottom: 10px;
}

.score-board {
  background: #4CAF50;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.score-label {
  font-size: 14px;
  opacity: 0.9;
}

.score-value {
  font-size: 24px;
  font-weight: bold;
}

.game-canvas {
  border: 3px solid #4CAF50;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  gap: 20px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, background-color 0.2s;
}

.start-btn {
  background: #4CAF50;
  color: white;
}

.reset-btn {
  background: #ff9800;
  color: white;
}

button:hover {
  transform: translateY(-2px);
}

button:disabled {
  background: #9e9e9e;
  cursor: not-allowed;
  transform: none;
}

.speed-control select {
  padding: 8px 16px;
  font-size: 16px;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  transition: border-color 0.2s;
}

.game-tips {
  color: #666;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  width: 100%;
}

.btn-icon {
  font-size: 20px;
}
</style> 