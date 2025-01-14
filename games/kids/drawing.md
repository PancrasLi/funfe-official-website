---
title: 图形绘制
description: 通过简单的图形命令，学习基础编程概念
---

<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)
const ctx = ref(null)
const commands = ref([])
const currentLevel = ref(0)
const showHint = ref(false)
const toastVisible = ref(false)
const toastMessage = ref('')

const levels = [
  {
    title: '画一个正方形',
    description: '使用以下命令画一个正方形：\n向前 100\n向右转 90\n向前 100\n向右转 90\n向前 100\n向右转 90\n向前 100',
    solution: ['forward 100', 'right 90', 'forward 100', 'right 90', 'forward 100', 'right 90', 'forward 100'],
    hint: '正方形有四条相等的边和四个直角'
  },
  {
    title: '画一个三角形',
    description: '使用以下命令画一个三角形：\n向前 100\n向右转 120\n向前 100\n向右转 120\n向前 100',
    solution: ['forward 100', 'right 120', 'forward 100', 'right 120', 'forward 100'],
    hint: '等边三角形的每个角都是120度'
  }
]

const addCommand = (command) => {
  commands.value.push(command)
  executeCommand(command)
}

const executeCommand = (command) => {
  const [action, value] = command.split(' ')
  const num = parseInt(value)

  if (action === 'forward') {
    ctx.value.beginPath()
    ctx.value.moveTo(turtle.x, turtle.y)
    turtle.x += Math.cos(turtle.angle * Math.PI / 180) * num
    turtle.y += Math.sin(turtle.angle * Math.PI / 180) * num
    ctx.value.lineTo(turtle.x, turtle.y)
    ctx.value.stroke()
  } else if (action === 'right') {
    turtle.angle += num
  }
}

const turtle = {
  x: 150,
  y: 150,
  angle: 0
}

const resetCanvas = () => {
  if (!canvas.value) return
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  turtle.x = 150
  turtle.y = 150
  turtle.angle = 0
  commands.value = []
}

const checkSolution = () => {
  const currentSolution = levels[currentLevel.value].solution
  if (commands.value.join(',') === currentSolution.join(',')) {
    displayToast('太棒了！你成功了！')
    if (currentLevel.value < levels.length - 1) {
      setTimeout(() => {
        currentLevel.value++
        resetCanvas()
      }, 1000)
    }
  } else {
    displayToast('再试试看！')
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
  if (canvas.value) {
    ctx.value = canvas.value.getContext('2d')
    ctx.value.strokeStyle = 'var(--vp-c-brand)'
    ctx.value.lineWidth = 2
  }
})
</script>

<div class="kids-drawing-container">
      <div class="game-header">
        <h2>第 {{ currentLevel + 1 }} 关：{{ levels[currentLevel].title }}</h2>
        <p class="level-description">{{ levels[currentLevel].description }}</p>
      </div>
      <div class="game-content">
        <div class="canvas-container">
          <canvas ref="canvas" width="300" height="300"></canvas>
        </div>
        <div class="controls">
          <div class="command-buttons">
            <button @click="addCommand('forward 100')">向前 100</button>
            <button @click="addCommand('right 90')">向右转 90°</button>
            <button @click="addCommand('right 120')">向右转 120°</button>
          </div>
          <div class="command-list">
            <h3>已输入的命令：</h3>
            <div class="commands">
              <div v-for="(command, index) in commands" :key="index" class="command">
                {{ command }}
              </div>
            </div>
          </div>
          <div class="action-buttons">
            <button @click="resetCanvas">重置</button>
            <button @click="checkSolution">检查</button>
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
.kids-drawing-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.game-header {
  text-align: center;
  margin-bottom: 30px;
}
.level-description {
  color: var(--vp-c-text-2);
  white-space: pre-line;
}
.game-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
}
.canvas-container {
  background: white;
  border-radius: 8px;
  padding: 10px;
}
canvas {
  border: 2px solid var(--vp-c-divider);
  border-radius: 4px;
}
.controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.command-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}
.command-list {
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 15px;
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
button:hover {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
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
  
  .canvas-container {
    overflow-x: auto;
    padding: 5px;
  }
  
  canvas {
    min-width: 300px;
  }
  
  .command-buttons {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .action-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .action-buttons button {
    flex: 1 1 auto;
    min-width: 120px;
  }
  
  .toast {
    width: 90%;
    max-width: 300px;
    text-align: center;
  }
}
</style> 