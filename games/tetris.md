# 俄罗斯方块

<script setup>
import { onMounted, ref } from 'vue'

// 基础配置
const COLS = 10
const ROWS = 20
const BLOCK_SIZE = 30

const canvas = ref(null)
const ctx = ref(null)
const gameLoop = ref(null)
const score = ref(0)

// 方块形状定义
const SHAPES = [
  [[1, 1, 1, 1]], // I
  [[1, 1], [1, 1]], // O
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1, 1], [1, 0, 0]], // L
  [[1, 1, 1], [0, 0, 1]], // J
  [[1, 1, 0], [0, 1, 1]], // S
  [[0, 1, 1], [1, 1, 0]]  // Z
]

const currentPiece = ref(null)
const board = ref([])

function init() {
  ctx.value = canvas.value.getContext('2d')
  initBoard()
  generatePiece()
  document.addEventListener('keydown', handleKeyPress)
  startGame()
}

function initBoard() {
  board.value = Array(ROWS).fill().map(() => Array(COLS).fill(0))
}

function generatePiece() {
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
  currentPiece.value = {
    shape,
    x: Math.floor(COLS / 2) - Math.floor(shape[0].length / 2),
    y: 0
  }
}

function draw() {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  drawBoard()
  drawCurrentPiece()
}

function drawBoard() {
  board.value.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        ctx.value.fillStyle = '#777'
        ctx.value.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1)
      }
    })
  })
}

function drawCurrentPiece() {
  ctx.value.fillStyle = '#f00'
  currentPiece.value.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        ctx.value.fillRect(
          (currentPiece.value.x + x) * BLOCK_SIZE,
          (currentPiece.value.y + y) * BLOCK_SIZE,
          BLOCK_SIZE - 1,
          BLOCK_SIZE - 1
        )
      }
    })
  })
}

function handleKeyPress(event) {
  switch(event.key) {
    case 'ArrowLeft':
      if (canMove(-1, 0)) currentPiece.value.x--
      break
    case 'ArrowRight':
      if (canMove(1, 0)) currentPiece.value.x++
      break
    case 'ArrowDown':
      if (canMove(0, 1)) currentPiece.value.y++
      break
    case 'ArrowUp':
      rotate()
      break
  }
  draw()
}

function canMove(offsetX, offsetY) {
  return currentPiece.value.shape.every((row, y) => {
    return row.every((value, x) => {
      const nextX = currentPiece.value.x + x + offsetX
      const nextY = currentPiece.value.y + y + offsetY
      return (
        value === 0 ||
        (nextX >= 0 &&
         nextX < COLS &&
         nextY < ROWS &&
         (nextY < 0 || board.value[nextY][nextX] === 0))
      )
    })
  })
}

function rotate() {
  const newShape = currentPiece.value.shape[0].map((_, i) =>
    currentPiece.value.shape.map(row => row[i]).reverse()
  )
  const oldShape = currentPiece.value.shape
  currentPiece.value.shape = newShape
  if (!canMove(0, 0)) {
    currentPiece.value.shape = oldShape
  }
}

function update() {
  if (canMove(0, 1)) {
    currentPiece.value.y++
  } else {
    freezePiece()
    clearLines()
    generatePiece()
    if (!canMove(0, 0)) {
      gameOver()
    }
  }
  draw()
}

function freezePiece() {
  currentPiece.value.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        board.value[currentPiece.value.y + y][currentPiece.value.x + x] = value
      }
    })
  })
}

function clearLines() {
  let linesCleared = 0
  board.value = board.value.filter(row => {
    const isComplete = row.every(cell => cell === 1)
    if (isComplete) linesCleared++
    return !isComplete
  })
  
  while (linesCleared > 0) {
    board.value.unshift(Array(COLS).fill(0))
    score.value += 100 * linesCleared
    linesCleared--
  }
}

function startGame() {
  if (gameLoop.value) return
  gameLoop.value = setInterval(update, 1000)
}

function gameOver() {
  clearInterval(gameLoop.value)
  gameLoop.value = null
  alert(`游戏结束！得分：${score.value}`)
  resetGame()
}

function resetGame() {
  score.value = 0
  initBoard()
  generatePiece()
  startGame()
}

onMounted(() => {
  init()
})
</script>

<div class="game-container">
  <div class="score">得分：{{ score }}</div>
  <canvas ref="canvas" :width="COLS * BLOCK_SIZE" :height="ROWS * BLOCK_SIZE" class="game-canvas"></canvas>
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