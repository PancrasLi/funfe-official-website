<template>
  <div class="creative-animations">
    <!-- 1. 斐波那契螺旋 -->
    <div class="creative-challenge spiral">
      <h3>斐波那契螺旋</h3>
      <canvas ref="spiralCanvas" width="300" height="300"></canvas>
      <div class="controls">
        <button @click="drawSpiral">重绘螺旋</button>
      </div>
    </div>

    <!-- 2. 音阶演奏器 -->
    <div class="creative-challenge scale">
      <h3>音阶演奏器</h3>
      <div class="piano-keys">
        <div 
          v-for="(note, index) in notes" 
          :key="note"
          class="key"
          :class="{ active: index === activeNote }"
          @click="playNote(index)"
        >
          {{ note }}
        </div>
      </div>
      <div class="controls">
        <button @click="playScale">播放音阶</button>
      </div>
    </div>

    <!-- 3. 图形缩放器 -->
    <div class="creative-challenge zoom">
      <h3>图形缩放器</h3>
      <div 
        class="zoom-container"
        :style="{ transform: `scale(${zoomLevel})` }"
      >
        <svg width="300" height="200" viewBox="0 0 300 200">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" stroke-width="1"/>
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#42b883;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#42b883;stop-opacity:0.8" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="150" cy="100" r="50" fill="url(#gradient)" />
          <rect x="50" y="50" width="50" height="50" fill="#42b883" opacity="0.5" />
          <polygon points="200,50 250,100 200,150" fill="#42b883" opacity="0.5" />
        </svg>
      </div>
      <div class="controls">
        <button @click="zoomIn">放大</button>
        <button @click="zoomOut">缩小</button>
        <div class="zoom-level">缩放: {{ Math.round(zoomLevel * 100) }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 斐波那契螺旋
const spiralCanvas = ref(null)
let ctx = null
const fibSpiral = [1, 1, 2, 3, 5, 8, 13, 21]

function drawSpiral() {
  if (!ctx) return
  ctx.clearRect(0, 0, 300, 300)
  ctx.save()
  ctx.translate(150, 150)
  
  let angle = 0
  ctx.beginPath()
  ctx.moveTo(0, 0)
  
  for (let i = 0; i < fibSpiral.length; i++) {
    const radius = fibSpiral[i] * 5
    angle += Math.PI / 2
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    ctx.lineTo(x, y)
  }
  
  ctx.strokeStyle = '#42b883'
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.restore()
}

// 音阶演奏器
const notes = ref(['do', 're', 'mi', 'fa', 'sol', 'la', 'si'])
const activeNote = ref(-1)

function playNote(index) {
  activeNote.value = index
  // 这里可以添加实际的音频播放逻辑
}

function playScale() {
  notes.value.forEach((_, index) => {
    setTimeout(() => {
      playNote(index)
    }, index * 500)
  })
}

// 图形缩放器
const zoomLevel = ref(1)
const maxZoom = 3
const zoomStep = 0.2

function zoomIn() {
  if (zoomLevel.value < maxZoom) {
    zoomLevel.value += zoomStep
  }
}

function zoomOut() {
  if (zoomLevel.value > 1) {
    zoomLevel.value -= zoomStep
  }
}

onMounted(() => {
  if (spiralCanvas.value) {
    ctx = spiralCanvas.value.getContext('2d')
    drawSpiral()
  }
})
</script>

<style scoped>
.creative-animations {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.creative-challenge {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
}

h3 {
  margin-bottom: 1rem;
  color: #42b883;
}

/* 斐波那契螺旋样式 */
.spiral canvas {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 音阶演奏器样式 */
.piano-keys {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 1rem 0;
}

.key {
  width: 40px;
  height: 120px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.key.active {
  background: #42b883;
  color: white;
  transform: translateY(5px);
}

/* 图形缩放器样式 */
.zoom-container {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.controls {
  margin: 1rem 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #3aa876;
}

.zoom-level {
  color: #666;
}
</style> 