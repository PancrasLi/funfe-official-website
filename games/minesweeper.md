# 扫雷

<script setup>
import { onMounted, ref } from 'vue'

const GRID_SIZE = 10
const MINES_COUNT = 10

const board = ref([])
const revealed = ref([])
const flagged = ref([])
const gameOver = ref(false)
const won = ref(false)
const minesLeft = ref(MINES_COUNT)

function init() {
  initBoard()
  placeMines()
  calculateNumbers()
  initRevealed()
  initFlagged()
}

function initBoard() {
  board.value = Array(GRID_SIZE).fill()
    .map(() => Array(GRID_SIZE).fill(0))
}

function initRevealed() {
  revealed.value = Array(GRID_SIZE).fill()
    .map(() => Array(GRID_SIZE).fill(false))
}

function initFlagged() {
  flagged.value = Array(GRID_SIZE).fill()
    .map(() => Array(GRID_SIZE).fill(false))
}

function placeMines() {
  let minesPlaced = 0
  while (minesPlaced < MINES_COUNT) {
    const x = Math.floor(Math.random() * GRID_SIZE)
    const y = Math.floor(Math.random() * GRID_SIZE)
    if (board.value[x][y] !== -1) {
      board.value[x][y] = -1
      minesPlaced++
    }
  }
}

function calculateNumbers() {
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (board.value[i][j] === -1) continue
      
      let count = 0
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          const ni = i + di
          const nj = j + dj
          if (ni >= 0 && ni < GRID_SIZE && nj >= 0 && nj < GRID_SIZE) {
            if (board.value[ni][nj] === -1) count++
          }
        }
      }
      board.value[i][j] = count
    }
  }
}

function handleClick(i, j, isRightClick = false) {
  if (gameOver.value || won.value) return
  
  if (isRightClick) {
    toggleFlag(i, j)
    return
  }
  
  if (flagged.value[i][j]) return
  
  if (board.value[i][j] === -1) {
    revealAll()
    gameOver.value = true
    alert('游戏结束！')
    return
  }
  
  reveal(i, j)
  checkWin()
}

function toggleFlag(i, j) {
  if (revealed.value[i][j]) return
  
  flagged.value[i][j] = !flagged.value[i][j]
  minesLeft.value += flagged.value[i][j] ? -1 : 1
}

function reveal(i, j) {
  if (i < 0 || i >= GRID_SIZE || j < 0 || j >= GRID_SIZE) return
  if (revealed.value[i][j] || flagged.value[i][j]) return
  
  revealed.value[i][j] = true
  
  if (board.value[i][j] === 0) {
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        reveal(i + di, j + dj)
      }
    }
  }
}

function revealAll() {
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      revealed.value[i][j] = true
    }
  }
}

function checkWin() {
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (board.value[i][j] !== -1 && !revealed.value[i][j]) return
    }
  }
  won.value = true
  alert('恭喜你赢了！')
}

function resetGame() {
  gameOver.value = false
  won.value = false
  minesLeft.value = MINES_COUNT
  init()
}

function getCellContent(i, j) {
  if (!revealed.value[i][j]) {
    return flagged.value[i][j] ? '🚩' : ''
  }
  if (board.value[i][j] === -1) {
    return '💣'
  }
  return board.value[i][j] || ''
}

onMounted(() => {
  init()
  window.addEventListener('contextmenu', e => e.preventDefault())
})
</script>

<div class="game-container">
  <div class="header">
    <div class="mines-left">剩余地雷：{{ minesLeft }}</div>
    <button @click="resetGame" class="reset-button">重新开始</button>
  </div>
  
  <div class="grid">
    <div v-for="(row, i) in board" :key="i" class="row">
      <div v-for="(cell, j) in row" :key="j"
           class="cell"
           :class="{
             revealed: revealed[i][j],
             mine: revealed[i][j] && board[i][j] === -1
           }"
           @click="handleClick(i, j)"
           @contextmenu="handleClick(i, j, true)">
        {{ getCellContent(i, j) }}
      </div>
    </div>
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

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
}

.mines-left {
  font-size: 20px;
  font-weight: bold;
}

.grid {
  background: #bbada0;
  padding: 10px;
  border-radius: 6px;
}

.row {
  display: flex;
}

.cell {
  width: 40px;
  height: 40px;
  background: #cdc1b4;
  border: 1px solid #bbada0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}

.cell.revealed {
  background: #d6d6d6;
}

.cell.mine {
  background: #ff0000;
}

.reset-button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background: #8f7a66;
  color: white;
  border: none;
  border-radius: 4px;
}

.reset-button:hover {
  background: #7f6a56;
}
</style> 