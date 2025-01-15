# Sudoku Game

<script setup>
import { ref, onMounted } from 'vue'

const board = ref([])
const selectedCell = ref(null)
const isValid = ref(true)

// 初始化9x9数独板
const initBoard = () => {
  board.value = Array(9).fill().map(() => 
    Array(9).fill().map(() => ({
      value: 0,
      isFixed: false
    }))
  )
  generatePuzzle()
}

// 生成数独谜题
const generatePuzzle = () => {
  // 这里简化为一个示例谜题
  const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
  ]
  
  puzzle.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value !== 0) {
        board.value[i][j].value = value
        board.value[i][j].isFixed = true
      }
    })
  })
}

// 处理数字输入
const handleInput = (row, col, event) => {
  if (board.value[row][col].isFixed) return
  
  const value = parseInt(event.key)
  if (value >= 1 && value <= 9) {
    board.value[row][col].value = value
    validateBoard()
  } else if (event.key === 'Backspace' || event.key === 'Delete') {
    board.value[row][col].value = 0
    validateBoard()
  }
}

// 验证数独是否有效
const validateBoard = () => {
  // 简化的验证逻辑
  isValid.value = true
  // TODO: 实现完整的验证逻辑
}

onMounted(() => {
  initBoard()
})
</script>

  <div class="sudoku-container">
    <div class="sudoku-board">
      <div v-for="(row, i) in board" 
           :key="i" 
           class="sudoku-row">
        <div v-for="(cell, j) in row" 
             :key="j" 
             :class="[
               'sudoku-cell',
               { 'fixed': cell.isFixed },
               { 'selected': selectedCell && selectedCell[0] === i && selectedCell[1] === j }
             ]"
             @click="selectedCell = [i, j]"
             @keydown="handleInput(i, j, $event)"
             tabindex="0">
          {{ cell.value || '' }}
        </div>
      </div>
    </div>
  </div>

<style scoped>
.sudoku-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.sudoku-board {
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  border: 2px solid #333;
}

.sudoku-row {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}

.sudoku-cell {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
}

.sudoku-cell:nth-child(3n) {
  border-right: 2px solid #333;
}

.sudoku-row:nth-child(3n) .sudoku-cell {
  border-bottom: 2px solid #333;
}

.fixed {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

.selected {
  background-color: #e3f2fd;
}
</style>
