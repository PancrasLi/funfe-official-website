---
title: 迷宫冒险
description: 通过简单的编程指令，帮助小英雄走出迷宫
---

<script setup>
import { ref, computed, onMounted } from 'vue'

const currentLevel = ref(0)
const commands = ref([])
const isPlaying = ref(false)
const showHint = ref(false)
const toastVisible = ref(false)
const toastMessage = ref('')

const levels = [
  {
    title: '简单路径',
    map: [
      ['S', '.', '.', '.'],
      ['#', '#', '.', '#'],
      ['.', '.', '.', '#'],
      ['#', '#', '.', 'E']
    ],
    solution: ['前进', '前进', '右转', '前进', '前进'],
    hint: '先向前走，到达转角后向右转'
  },
  {
    title: '寻找宝藏',
    map: [
      ['S', '.', '#', '.'],
      ['.', '#', '.', '#'],
      ['.', '.', '.', 'E'],
      ['#', '#', '#', '#']
    ],
    solution: ['前进', '右转', '前进', '左转', '前进', '前进'],
    hint: '需要转弯两次才能到达终点'
  }
]

const hero = ref({
  x: 0,
  y: 0,
  direction: 0 // 0: 右, 1: 下, 2: 左, 3: 上
})

const currentMap = computed(() => levels[currentLevel.value].map)

const initLevel = () => {
  commands.value = []
  isPlaying.value = false
  // 找到起点位置
  for (let y = 0; y < currentMap.value.length; y++) {
    for (let x = 0; x < currentMap.value[y].length; x++) {
      if (currentMap.value[y][x] === 'S') {
        hero.value = { x, y, direction: 0 }
        break
      }
    }
  }
}

const addCommand = (command) => {
  if (isPlaying.value) return
  commands.value.push(command)
}

const executeCommands = async () => {
  if (isPlaying.value) return
  isPlaying.value = true

  for (const command of commands.value) {
    await executeCommand(command)
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  checkResult()
  isPlaying.value = false
}

const executeCommand = async (command) => {
  if (command === '前进') {
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    const newX = hero.value.x + dx[hero.value.direction]
    const newY = hero.value.y + dy[hero.value.direction]

    if (newX >= 0 && newX < currentMap.value[0].length &&
        newY >= 0 && newY < currentMap.value.length &&
        currentMap.value[newY][newX] !== '#') {
      hero.value.x = newX
      hero.value.y = newY
    }
  } else if (command === '左转') {
    hero.value.direction = (hero.value.direction + 3) % 4
  } else if (command === '右转') {
    hero.value.direction = (hero.value.direction + 1) % 4
  }
}

const checkResult = () => {
  if (currentMap.value[hero.value.y][hero.value.x] === 'E') {
    displayToast('太棒了！你到达了终点！')
    if (currentLevel.value < levels.length - 1) {
      setTimeout(() => {
        currentLevel.value++
        initLevel()
      }, 1000)
    }
  } else {
    displayToast('没有到达终点，再试试看！')
  }
}

const displayToast = (message) => {
  toastMessage.value = message
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 2000)
}

onMounted(() => {
  initLevel()
})
</script>
<div class="kids-adventure-container">
      <div class="game-header">
        <h2>第 {{ currentLevel + 1 }} 关：{{ levels[currentLevel].title }}</h2>
      </div>
      <div class="game-content">
        <div class="maze">
          <div v-for="(row, y) in currentMap" :key="y" class="maze-row">
            <div v-for="(cell, x) in row" :key="x" 
                 :class="['maze-cell', {
                   'wall': cell === '#',
                   'start': cell === 'S',
                   'end': cell === 'E',
                   'hero': x === hero.x && y === hero.y
                 }]">
              <div v-if="x === hero.x && y === hero.y" 
                   class="hero-direction"
                   :style="{ transform: `rotate(${hero.direction * 90}deg)` }">
                ▶
              </div>
            </div>
          </div>
        </div>
        <div class="controls">
          <div class="command-buttons">
            <button @click="addCommand('前进')" :disabled="isPlaying">前进</button>
            <button @click="addCommand('左转')" :disabled="isPlaying">左转</button>
            <button @click="addCommand('右转')" :disabled="isPlaying">右转</button>
          </div>
          <div class="command-list">
            <h3>命令列表：</h3>
            <div class="commands">
              <div v-for="(command, index) in commands" :key="index" class="command">
                {{ index + 1 }}. {{ command }}
              </div>
            </div>
          </div>
          <div class="action-buttons">
            <button @click="initLevel">重置</button>
            <button @click="executeCommands" :disabled="isPlaying || commands.length === 0">
              运行
            </button>
            <button @click="showHint = !showHint" class="hint-button">
              {{ showHint ? '隐藏提示' : '显示提示' }}
            </button>
          </div>
          <div v-if="showHint" class="hint-text">
            {{ levels[currentLevel].hint }}
          </div>
        </div>
      </div>
      <div class="toast" :class="{ show: toastVisible }">
        {{ toastMessage }}
      </div>
    </div>

<style scoped>
.kids-adventure-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.game-header {
  text-align: center;
  margin-bottom: 30px;
}
.game-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
}
.maze {
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.maze-row {
  display: flex;
  gap: 2px;
}
.maze-cell {
  width: 60px;
  height: 60px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: relative;
}
.wall {
  background: var(--vp-c-text-2);
}
.start {
  background: var(--vp-c-green-soft);
}
.end {
  background: var(--vp-c-brand-soft);
}
.hero-direction {
  color: var(--vp-c-brand);
  transition: transform 0.3s;
}
.controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.command-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.command-list {
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 15px;
  flex-grow: 1;
}
.commands {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}
.command {
  padding: 4px 0;
}
.action-buttons {
  display: flex;
  gap: 10px;
}
button {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}
button:not(:disabled):hover {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.hint-button {
  background: var(--vp-c-bg-soft);
}
.hint-text {
  padding: 10px;
  background: var(--vp-c-bg);
  border-radius: 4px;
  color: var(--vp-c-text-2);
  font-style: italic;
}
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  background: var(--vp-c-brand);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  transition: transform 0.3s;
  opacity: 0;
}
.toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .game-content {
    grid-template-columns: 1fr;
  }
  
  .maze {
    overflow-x: auto;
    padding: 10px;
  }
  
  .maze-row {
    min-width: fit-content;
  }
  
  .maze-cell {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  
  .command-buttons {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .action-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .action-buttons button {
    flex: 1 1 auto;
    min-width: 100px;
  }
  
  .command-list {
    max-height: 200px;
    overflow-y: auto;
  }
  
  .toast {
    width: 90%;
    max-width: 300px;
    text-align: center;
  }
}

/* 添加滚动条样式 */
.command-list::-webkit-scrollbar {
  width: 6px;
}

.command-list::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
}

.command-list::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand);
  border-radius: 3px;
}

.maze::-webkit-scrollbar {
  height: 6px;
}

.maze::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
}

.maze::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand);
  border-radius: 3px;
}
</style>
