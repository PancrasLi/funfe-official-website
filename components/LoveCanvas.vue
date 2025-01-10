<template>
  <div class="love-canvas-container">
    <canvas ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
const width = window.innerWidth
const height = window.innerHeight
let ctx
let particles = []
let mouse = { x: width/2, y: height/2 }
let hue = 0
let animationFrame

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 3 + 1
    this.baseX = x
    this.baseY = y
    this.density = (Math.random() * 30) + 1
    this.angle = Math.random() * Math.PI * 2
    this.velocity = 0.03 + Math.random() * 0.02
    this.randomness = Math.random() * 5
    this.brightness = Math.random() * 50 + 50
    this.alpha = 1
  }

  update() {
    // 呼吸效果
    this.angle += this.velocity
    const breathEffect = Math.sin(this.angle) * this.randomness
    
    // 鼠标交互
    let dx = mouse.x - this.x
    let dy = mouse.y - this.y
    let distance = Math.sqrt(dx * dx + dy * dy)
    let forceDirectionX = dx / distance
    let forceDirectionY = dy / distance
    let maxDistance = 150
    let force = (maxDistance - distance) / maxDistance
    let directionX = forceDirectionX * force * this.density
    let directionY = forceDirectionY * force * this.density

    if (distance < maxDistance) {
      this.x += directionX
      this.y += directionY
      this.alpha = Math.min(1, this.alpha + 0.05)
    } else {
      if (this.x !== this.baseX) {
        dx = this.x - this.baseX
        this.x -= dx/10
      }
      if (this.y !== this.baseY) {
        dy = this.y - this.baseY
        this.y -= dy/10
      }
      this.x += Math.sin(this.angle) * 0.3
      this.y += breathEffect * 0.2
      this.alpha = Math.max(0.4, this.alpha - 0.01)
    }
  }

  draw() {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size
    )
    gradient.addColorStop(0, `hsla(${hue}, 100%, ${this.brightness}%, ${this.alpha})`)
    gradient.addColorStop(1, `hsla(${hue}, 100%, ${this.brightness}%, 0)`)
    
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function createHeart(x, y, size) {
  const points = []
  const numberOfPoints = 180 // 增加点数使心形更平滑
  
  for (let i = 0; i < numberOfPoints; i++) {
    const angle = (i / numberOfPoints) * Math.PI * 2
    const heartX = x + size * 16 * Math.pow(Math.sin(angle), 3)
    const heartY = y - size * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle))
    points.push({ x: heartX, y: heartY })
  }
  
  return points
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
  ctx.fillRect(0, 0, width, height)
  
  particles.forEach(particle => {
    particle.update()
    particle.draw()
  })
  
  // 颜色渐变效果
  hue = (hue + 0.5) % 360
  
  animationFrame = requestAnimationFrame(animate)
}

function handleMouseMove(event) {
  mouse.x = event.x
  mouse.y = event.y
}

function handleTouchMove(event) {
  event.preventDefault()
  mouse.x = event.touches[0].clientX
  mouse.y = event.touches[0].clientY
}

// 添加点击效果
function createExplosion(x, y) {
  for (let i = 0; i < 15; i++) {
    const angle = (i / 15) * Math.PI * 2
    const velocity = 2 + Math.random() * 2
    const particle = new Particle(x, y)
    particle.velocity = velocity
    particle.angle = angle
    particles.push(particle)
  }
}

function handleClick(event) {
  createExplosion(event.clientX, event.clientY)
}

function handleTouch(event) {
  event.preventDefault()
  createExplosion(event.touches[0].clientX, event.touches[0].clientY)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, width, height)
  
  // 创建心形粒子
  const heartPoints = createHeart(width/2, height/2, 8)
  for (let point of heartPoints) {
    particles.push(new Particle(point.x, point.y))
  }
  
  animate()

  // 添加交互事件
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('touchmove', handleTouchMove, { passive: false })
  window.addEventListener('click', handleClick)
  window.addEventListener('touchstart', handleTouch)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('click', handleClick)
  window.removeEventListener('touchstart', handleTouch)
})
</script>

<style scoped>
.love-canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
  z-index: 999;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  touch-action: none;
  cursor: pointer;
}
</style> 