# 打砖块

<script setup>
import { onMounted, onUnmounted } from 'vue'

let canvas, ctx
let ballX = 400, ballY = 300
let ballSpeedX = 4, ballSpeedY = -4
let paddleX = 350
const paddleWidth = 100
const paddleHeight = 10
const ballRadius = 8

// 砖块配置
const brickRowCount = 5
const brickColumnCount = 8
const brickWidth = 75
const brickHeight = 20
const brickPadding = 10
const brickOffsetTop = 30
const brickOffsetLeft = 95

let bricks = []
let gameLoop

// 添加新的状态变量
let isGameStarted = false
let isGameOver = false

function initBricks() {
  for(let c = 0; c < brickColumnCount; c++) {
    bricks[c] = []
    for(let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 }
    }
  }
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

function drawBricks() {
  for(let c = 0; c < brickColumnCount; c++) {
    for(let r = 0; r < brickRowCount; r++) {
      if(bricks[c][r].status === 1) {
        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft
        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop
        bricks[c][r].x = brickX
        bricks[c][r].y = brickY
        ctx.beginPath()
        ctx.rect(brickX, brickY, brickWidth, brickHeight)
        ctx.fillStyle = "#0095DD"
        ctx.fill()
        ctx.closePath()
      }
    }
  }
}

function collisionDetection() {
  for(let c = 0; c < brickColumnCount; c++) {
    for(let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r]
      if(b.status === 1) {
        if(ballX > b.x && ballX < b.x + brickWidth && ballY > b.y && ballY < b.y + brickHeight) {
          ballSpeedY = -ballSpeedY
          b.status = 0
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  drawBricks()
  drawBall()
  drawPaddle()
  
  if (!isGameStarted) {
    return
  }
  
  collisionDetection()
  
  // 球碰壁反弹
  if(ballX + ballSpeedX > canvas.width - ballRadius || ballX + ballSpeedX < ballRadius) {
    ballSpeedX = -ballSpeedX
  }
  if(ballY + ballSpeedY < ballRadius) {
    ballSpeedY = -ballSpeedY
  } else if(ballY + ballSpeedY > canvas.height - ballRadius) {
    if(ballX > paddleX && ballX < paddleX + paddleWidth) {
      ballSpeedY = -ballSpeedY
    } else {
      // 游戏结束
      alert("GAME OVER")
      clearInterval(gameLoop)
      return
    }
  }
  
  // 移动球
  ballX += ballSpeedX
  ballY += ballSpeedY
}

function handleMouseMove(e) {
  const relativeX = e.clientX - canvas.offsetLeft
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2
  }
}

// 修改移动控制函数
function movePaddle(direction) {
  const moveSpeed = 20
  if (direction === 'left' && paddleX > 0) {
    paddleX = Math.max(0, paddleX - moveSpeed)
  } else if (direction === 'right' && paddleX < canvas.width - paddleWidth) {
    paddleX = Math.min(canvas.width - paddleWidth, paddleX + moveSpeed)
  }
}

// 添加游戏重置函数
function resetGame() {
  ballX = 400
  ballY = 300
  ballSpeedX = 4
  ballSpeedY = -4
  paddleX = 350
  isGameStarted = false
  isGameOver = false
  initBricks()
}

// 添加开始游戏函数
function startGame() {
  if (!isGameStarted && !gameLoop) {
    isGameStarted = true
    gameLoop = setInterval(draw, 10)
  }
}

onMounted(() => {
  canvas = document.getElementById("breakoutGame")
  ctx = canvas.getContext("2d")
  
  initBricks()
  draw() // 初始绘制
  
  // 移除鼠标移动事件
  // canvas.addEventListener("mousemove", handleMouseMove)
})

onUnmounted(() => {
  clearInterval(gameLoop)
})
</script>

<div class="game-container">
  <canvas id="breakoutGame" width="800" height="600"></canvas>
  <div class="game-controls">
    <button @click="startGame" v-if="!isGameStarted">开始游戏</button>
    <button @click="resetGame" v-if="isGameOver">重新开始</button>
    <div class="movement-controls">
      <button @mousedown="movePaddle('left')" @touchstart="movePaddle('left')">←</button>
      <button @mousedown="movePaddle('right')" @touchstart="movePaddle('right')">→</button>
    </div>
  </div>
  <div class="game-instructions">
    <p>点击开始游戏，使用左右按钮移动挡板接住小球</p>
  </div>
</div>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
canvas {
  border: 2px solid #333;
  background: #f0f0f0;
}
.game-instructions {
  margin-top: 20px;
  color: #666;
}

.game-controls {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.movement-controls {
  display: flex;
  gap: 20px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background: #0095DD;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background: #0077aa;
}
</style>