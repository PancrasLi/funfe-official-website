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

function init() {
  ctx.value = canvas.value.getContext('2d')
  document.addEventListener('keydown', changeDirection)
  startGame()
}

function startGame() {
  if (gameLoop.value) return
  gameLoop.value = setInterval(update, 100)
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
  ctx.value.fillStyle = '#4CAF50'
  snake.value.forEach(segment => {
    ctx.value.fillRect(segment.x * 20, segment.y * 20, 18, 18)
  })
}

function drawFood() {
  ctx.value.fillStyle = '#FF5252'
  ctx.value.fillRect(food.value.x * 20, food.value.y * 20, 18, 18)
}

function generateFood() {
  food.value = {
    x: Math.floor(Math.random() * (canvas.value.width / 20)),
    y: Math.floor(Math.random() * (canvas.value.height / 20))
  }
}

function changeDirection(event) {
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
  <div class="score">得分：{{ score }}</div>
  <canvas ref="canvas" width="600" height="400" class="game-canvas"></canvas>
  <div class="controls">
    <button @click="startGame">开始游戏</button>
    <button @click="resetGame">重新开始</button>
  </div>
</div>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.game-canvas {
  border: 2px solid #333;
  background: #f0f0f0;
}

.score {
  font-size: 24px;
  font-weight: bold;
}

.controls {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background: #45a049;
}
</style> 