<template>
  <div class="number-animation">
    <canvas ref="canvas" width="400" height="300"></canvas>
    <div class="controls">
      <button @click="showNumber(currentNumber - 1)" :disabled="currentNumber <= 1">上一个</button>
      <span class="current-number">{{ currentNumber }}</span>
      <button @click="showNumber(currentNumber + 1)" :disabled="currentNumber >= 10">下一个</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)
const currentNumber = ref(1)
const ctx = ref(null)

onMounted(() => {
  ctx.value = canvas.value.getContext('2d')
  drawNumber(currentNumber.value)
})

function drawNumber(num) {
  ctx.value.clearRect(0, 0, 400, 300)
  ctx.value.font = '120px Arial'
  ctx.value.fillStyle = '#4CAF50'
  ctx.value.textAlign = 'center'
  
  // 绘制数字
  ctx.value.fillText(num, 200, 180)
  
  // 绘制对应数量的小圆点
  drawDots(num)
}

function drawDots(count) {
  const radius = 15
  const startX = 80
  const startY = 240
  const spacing = 35
  
  ctx.value.fillStyle = '#FF9800'
  for (let i = 0; i < count; i++) {
    ctx.value.beginPath()
    ctx.value.arc(startX + (i * spacing), startY, radius, 0, Math.PI * 2)
    ctx.value.fill()
  }
}

function showNumber(num) {
  if (num >= 1 && num <= 10) {
    currentNumber.value = num
    drawNumber(num)
  }
}
</script>

<style scoped>
.number-animation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.controls {
  margin-top: 20px;
}

button {
  padding: 8px 16px;
  margin: 0 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.current-number {
  font-size: 24px;
  font-weight: bold;
  margin: 0 20px;
}
</style> 