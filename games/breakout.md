---
title: 打砖块
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 游戏状态
const gameStarted = ref(false)
const gameOver = ref(false)
const score = ref(0)
const lives = ref(3)
const isPaused = ref(false)

// 画布尺寸
const canvasWidth = ref(800)
const canvasHeight = ref(600)
const isMobile = ref(false)

// 游戏元素
const canvas = ref(null)
const ctx = ref(null)

// 球的属性
const ball = ref({
  x: 0,
  y: 0,
  dx: 3,
  dy: -3,
  radius: 8,
  speed: 4
})

// 挡板属性
const paddle = ref({
  x: 0,
  width: 100,
  height: 15,
  speed: 6,
  dx: 0
})

// 砖块属性
const brickRowCount = 5
const brickColumnCount = 9
const brickWidth = 80
const brickHeight = 20
const brickPadding = 10
const brickOffsetTop = 50
const brickOffsetLeft = 35

// 砖块数组
const bricks = ref([])

// 初始化砖块
function initBricks() {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']
  for (let c = 0; c < brickColumnCount; c++) {
    bricks.value[c] = []
    for (let r = 0; r < brickRowCount; r++) {
      bricks.value[c][r] = {
        x: 0,
        y: 0,
        status: 1,
        color: colors[r]
      }
    }
  }
}

// 绘制球
function drawBall() {
  if (!ctx.value) return
  ctx.value.beginPath()
  ctx.value.arc(ball.value.x, ball.value.y, ball.value.radius, 0, Math.PI * 2)
  ctx.value.fillStyle = '#333'
  ctx.value.fill()
  ctx.value.closePath()
}

// 绘制挡板
function drawPaddle() {
  if (!ctx.value) return
  ctx.value.beginPath()
  ctx.value.roundRect(
    paddle.value.x,
    canvasHeight.value - paddle.value.height,
    paddle.value.width,
    paddle.value.height,
    8
  )
  ctx.value.fillStyle = '#333'
  ctx.value.fill()
  ctx.value.closePath()
}

// 绘制砖块
function drawBricks() {
  if (!ctx.value) return
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks.value[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
        bricks.value[c][r].x = brickX
        bricks.value[c][r].y = brickY
        ctx.value.beginPath()
        ctx.value.roundRect(brickX, brickY, brickWidth, brickHeight, 4)
        ctx.value.fillStyle = bricks.value[c][r].color
        ctx.value.fill()
        ctx.value.closePath()
      }
    }
  }
}

// 绘制分数
function drawScore() {
  if (!ctx.value) return
  ctx.value.font = '20px Arial'
  ctx.value.fillStyle = '#333'
  ctx.value.fillText(`得分: ${score.value}`, 8, 30)
}

// 绘制生命值
function drawLives() {
  if (!ctx.value) return
  ctx.value.font = '20px Arial'
  ctx.value.fillStyle = '#333'
  ctx.value.fillText(`生命: ${lives.value}`, canvasWidth.value - 80, 30)
}

// 碰撞检测
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks.value[c][r]
      if (b.status === 1) {
        if (
          ball.value.x > b.x &&
          ball.value.x < b.x + brickWidth &&
          ball.value.y > b.y &&
          ball.value.y < b.y + brickHeight
        ) {
          ball.value.dy = -ball.value.dy
          b.status = 0
          score.value += 10
          
          // 检查是否获胜
          if (score.value === brickRowCount * brickColumnCount * 10) {
            gameOver.value = true
            gameStarted.value = false
          }
        }
      }
    }
  }
}

// 移动球
function moveBall() {
  ball.value.x += ball.value.dx
  ball.value.y += ball.value.dy
  
  // 墙壁碰撞
  if (ball.value.x + ball.value.dx > canvasWidth.value - ball.value.radius || 
      ball.value.x + ball.value.dx < ball.value.radius) {
    ball.value.dx = -ball.value.dx
  }
  
  if (ball.value.y + ball.value.dy < ball.value.radius) {
    ball.value.dy = -ball.value.dy
  } else if (ball.value.y + ball.value.dy > canvasHeight.value - ball.value.radius) {
    // 检查是否击中挡板
    if (ball.value.x > paddle.value.x && 
        ball.value.x < paddle.value.x + paddle.value.width) {
      // 根据击中挡板的位置改变反弹角度
      const hitPoint = (ball.value.x - (paddle.value.x + paddle.value.width/2)) / (paddle.value.width/2)
      ball.value.dx = hitPoint * ball.value.speed
      ball.value.dy = -Math.sqrt(ball.value.speed * ball.value.speed - ball.value.dx * ball.value.dx)
    } else {
      lives.value--
      if (lives.value === 0) {
        gameOver.value = true
        gameStarted.value = false
      } else {
        // 重置球和挡板位置
        ball.value.x = canvasWidth.value / 2
        ball.value.y = canvasHeight.value - 30
        ball.value.dx = 3
        ball.value.dy = -3
        paddle.value.x = (canvasWidth.value - paddle.value.width) / 2
      }
    }
  }
}

// 移动挡板
function movePaddle() {
  paddle.value.x += paddle.value.dx
  
  // 防止挡板移出画布
  if (paddle.value.x < 0) {
    paddle.value.x = 0
  } else if (paddle.value.x + paddle.value.width > canvasWidth.value) {
    paddle.value.x = canvasWidth.value - paddle.value.width
  }
}

// 绘制游戏
function draw() {
  if (!ctx.value) return
  
  // 清空画布
  ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
  
  // 绘制游戏元素
  drawBricks()
  drawBall()
  drawPaddle()
  drawScore()
  drawLives()
  
  // 碰撞检测
  collisionDetection()
  
  if (gameStarted.value && !isPaused.value) {
    // 移动球和挡板
    moveBall()
    movePaddle()
  }
  
  // 继续动画
  if (!gameOver.value) {
    requestAnimationFrame(draw)
  }
}

// 键盘控制
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.value.dx = paddle.value.speed
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.value.dx = -paddle.value.speed
  } else if (e.key === ' ' || e.key === 'Spacebar') {
    if (!gameStarted.value && !gameOver.value) {
      startGame()
    } else {
      isPaused.value = !isPaused.value
    }
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight' || 
      e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.value.dx = 0
  }
}

// 触摸控制
function touchMoveHandler(e) {
  e.preventDefault()
  const relativeX = e.touches[0].clientX - canvas.value.offsetLeft
  if (relativeX > 0 && relativeX < canvasWidth.value) {
    paddle.value.x = relativeX - paddle.value.width / 2
  }
}

// 方向按钮控制
function moveLeft() {
  paddle.value.dx = -paddle.value.speed
}

function moveRight() {
  paddle.value.dx = paddle.value.speed
}

function stopMove() {
  paddle.value.dx = 0
}

// 开始游戏
function startGame() {
  if (gameOver.value) {
    // 重置游戏状态
    score.value = 0
    lives.value = 3
    initBricks()
    gameOver.value = false
  }
  
  // 初始化球和挡板位置
  ball.value.x = canvasWidth.value / 2
  ball.value.y = canvasHeight.value - 30
  ball.value.dx = 3
  ball.value.dy = -3
  paddle.value.x = (canvasWidth.value - paddle.value.width) / 2
  
  gameStarted.value = true
  isPaused.value = false
}

// 调整画布大小
function resizeCanvas() {
  const container = canvas.value.parentElement
  const newWidth = container.clientWidth
  isMobile.value = newWidth < 600
  
  // 调整画布和游戏元素尺寸
  canvasWidth.value = Math.min(800, newWidth)
  canvasHeight.value = Math.min(600, newWidth * 0.75)
  
  canvas.value.width = canvasWidth.value
  canvas.value.height = canvasHeight.value
  
  // 调整挡板尺寸
  paddle.value.width = isMobile.value ? 80 : 100
  paddle.value.height = isMobile.value ? 12 : 15
  
  // 调整球的大小
  ball.value.radius = isMobile.value ? 6 : 8
  
  // 重新定位挡板
  paddle.value.x = (canvasWidth.value - paddle.value.width) / 2
}

// 生命周期钩子
onMounted(() => {
  // 初始化画布
  ctx.value = canvas.value.getContext('2d')
  
  // 初始化游戏
  initBricks()
  resizeCanvas()
  draw()
  
  // 添加事件监听
  document.addEventListener('keydown', keyDownHandler)
  document.addEventListener('keyup', keyUpHandler)
  canvas.value.addEventListener('touchmove', touchMoveHandler)
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  // 移除事件监听
  document.removeEventListener('keydown', keyDownHandler)
  document.removeEventListener('keyup', keyUpHandler)
  canvas.value?.removeEventListener('touchmove', touchMoveHandler)
  window.removeEventListener('resize', resizeCanvas)
})
</script>

  <div class="game-container">
    <canvas ref="canvas" class="game-canvas"></canvas>
    <div class="game-controls">
      <div class="direction-controls" v-if="isMobile">
        <button 
          class="direction-btn"
          @touchstart.prevent="moveLeft"
          @touchend.prevent="stopMove"
          @mousedown.prevent="moveLeft"
          @mouseup.prevent="stopMove"
          @mouseleave.prevent="stopMove"
        >←</button>
        <button 
          class="direction-btn"
          @touchstart.prevent="moveRight"
          @touchend.prevent="stopMove"
          @mousedown.prevent="moveRight"
          @mouseup.prevent="stopMove"
          @mouseleave.prevent="stopMove"
        >→</button>
      </div>
      <div class="game-buttons">
        <button v-if="!gameStarted" @click="startGame">
          {{ gameOver ? '重新开始' : '开始游戏' }}
        </button>
        <button v-else @click="isPaused = !isPaused">
          {{ isPaused ? '继续' : '暂停' }}
        </button>
      </div>
    </div>
    <div class="game-instructions">
      <template v-if="!gameStarted && !gameOver">
        按空格键或点击开始按钮开始游戏<br>
        使用方向键或触摸控制挡板移动
      </template>
      <template v-if="gameOver">
        游戏结束！得分：{{ score }}
      </template>
    </div>
  </div>


<style scoped>
.game-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.game-canvas {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.game-controls {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.direction-controls {
  display: flex;
  gap: 20px;
}

.direction-btn {
  width: 50px;
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 25px;
  background: #42b883;
  color: white;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.direction-btn:active {
  transform: scale(0.95);
  background: #3aa876;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  background: #42b883;
  color: white;
  cursor: pointer;
  min-width: 100px;
  transition: all 0.3s ease;
}

button:hover {
  background: #3aa876;
}

.game-instructions {
  text-align: center;
  color: #666;
  font-size: 14px;
  padding: 10px 15px;
  background: #f8f9fa;
  border-radius: 8px;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .game-container {
    padding: 10px;
  }
  
  .game-controls {
    gap: 6px;
  }
  
  .direction-btn {
    width: 36px;
    height: 36px;
    font-size: 13px;
  }
  
  button {
    padding: 6px 12px;
    font-size: 13px;
    min-width: 70px;
  }
  
  .game-instructions {
    font-size: 13px;
    padding: 8px 12px;
  }
}
</style>