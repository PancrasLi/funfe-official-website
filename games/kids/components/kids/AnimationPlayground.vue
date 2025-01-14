<template>
  <div class="animation-playground">
    <canvas ref="canvas" width="600" height="400"></canvas>
    <div class="controls">
      <button @click="startAnimation">开始动画</button>
      <button @click="pauseAnimation">暂停</button>
      <button @click="resetAnimation">重置</button>
      <select v-model="selectedAnimation">
        <option value="bounce">弹跳球</option>
        <option value="rotate">旋转方块</option>
        <option value="fade">渐变效果</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
const selectedAnimation = ref('bounce')
let ctx = null
let animationId = null
let isPlaying = false

// 动画状态
const state = {
  bounce: {
    x: 300,
    y: 50,
    dy: 5,
    radius: 20
  },
  rotate: {
    angle: 0
  },
  fade: {
    opacity: 1,
    delta: -0.02
  }
}

// 初始化画布
onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resetAnimation()
})

// 清理
onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

// 动画函数
const animate = () => {
  if (!isPlaying) return
  
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  switch (selectedAnimation.value) {
    case 'bounce':
      drawBounce()
      break
    case 'rotate':
      drawRotate()
      break
    case 'fade':
      drawFade()
      break
  }
  
  animationId = requestAnimationFrame(animate)
}

// 弹跳球动画
const drawBounce = () => {
  const s = state.bounce
  ctx.beginPath()
  ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
  ctx.fillStyle = '#4CAF50'
  ctx.fill()
  ctx.closePath()
  
  s.y += s.dy
  
  if (s.y + s.radius > canvas.value.height || s.y - s.radius < 0) {
    s.dy = -s.dy
  }
}

// 旋转方块动画
const drawRotate = () => {
  ctx.save()
  ctx.translate(300, 200)
  ctx.rotate(state.rotate.angle)
  ctx.fillStyle = '#2196F3'
  ctx.fillRect(-40, -40, 80, 80)
  ctx.restore()
  
  state.rotate.angle += 0.02
}

// 渐变效果动画
const drawFade = () => {
  ctx.fillStyle = `rgba(156, 39, 176, ${state.fade.opacity})`
  ctx.fillRect(200, 150, 200, 100)
  
  state.fade.opacity += state.fade.delta
  if (state.fade.opacity <= 0 || state.fade.opacity >= 1) {
    state.fade.delta = -state.fade.delta
  }
}

// 控制函数
const startAnimation = () => {
  isPlaying = true
  animate()
}

const pauseAnimation = () => {
  isPlaying = false
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
}

const resetAnimation = () => {
  isPlaying = false
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  // 重置状态
  state.bounce = { x: 300, y: 50, dy: 5, radius: 20 }
  state.rotate = { angle: 0 }
  state.fade = { opacity: 1, delta: -0.02 }
  
  // 绘制初始状态
  ctx?.clearRect(0, 0, canvas.value?.width || 600, canvas.value?.height || 400)
  switch (selectedAnimation.value) {
    case 'bounce':
      drawBounce()
      break
    case 'rotate':
      drawRotate()
      break
    case 'fade':
      drawFade()
      break
  }
}
</script>

<style scoped>
.animation-playground {
  margin: 20px 0;
}

canvas {
  border: 1px solid #ddd;
  background: #fff;
}

.controls {
  margin-top: 10px;
}

button {
  margin-right: 10px;
  padding: 5px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

select {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style> 