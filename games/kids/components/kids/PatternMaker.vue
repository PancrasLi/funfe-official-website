<template>
  <div class="pattern-maker">
    <canvas ref="canvas" width="600" height="400"></canvas>
    <div class="controls">
      <button @click="setShape('circle')">圆形</button>
      <button @click="setShape('square')">方形</button>
      <button @click="setShape('star')">星形</button>
      <input type="color" v-model="color" />
      <input type="range" v-model="size" min="10" max="50" />
      <button @click="clear">清除</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const canvas = ref(null)
const ctx = ref(null)
const color = ref('#ff0000')
const size = ref(20)
const shape = ref('circle')

onMounted(() => {
  ctx.value = canvas.value.getContext('2d')
  setupCanvas()
})

function setupCanvas() {
  canvas.value.addEventListener('click', (e) => {
    const rect = canvas.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    drawShape(x, y)
  })
}

function drawShape(x, y) {
  ctx.value.fillStyle = color.value
  
  switch(shape.value) {
    case 'circle':
      ctx.value.beginPath()
      ctx.value.arc(x, y, size.value, 0, Math.PI * 2)
      ctx.value.fill()
      break
    case 'square':
      ctx.value.fillRect(x - size.value/2, y - size.value/2, size.value, size.value)
      break
    case 'star':
      drawStar(x, y)
      break
  }
}

function drawStar(x, y) {
  const spikes = 5
  const outerRadius = size.value
  const innerRadius = size.value / 2
  
  ctx.value.beginPath()
  for(let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius
    const angle = (i * Math.PI) / spikes
    const pointX = x + Math.cos(angle) * radius
    const pointY = y + Math.sin(angle) * radius
    if(i === 0) ctx.value.moveTo(pointX, pointY)
    else ctx.value.lineTo(pointX, pointY)
  }
  ctx.value.closePath()
  ctx.value.fill()
}

function setShape(newShape) {
  shape.value = newShape
}

function clear() {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
}
</script>

<style scoped>
.pattern-maker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

canvas {
  border: 1px solid #ccc;
  background: white;
}

.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #3451b2;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #2a4090;
}
</style> 