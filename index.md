---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# 添加自定义 CSS 类
class: home-page

hero:
  name: "FUNFE"
  text: "让代码变得有趣"
  tagline: Coding is Fun 
  actions:
    - theme: brand
      text: 关于本站
      link: /about/index.md
    - theme: alt
      text: 在线编辑器
      link: /playground
  image:
    src: /images/logo.svg
    
features:
  - icon: 
      dark: /icons/learn-dark.svg
      light: /icons/learn-light.svg
    title: 持续学习
    details: 保持对技术的热情与好奇，不断探索新的知识领域，让学习成为习惯
  - icon:
      dark: /icons/code-dark.svg
      light: /icons/code-light.svg
    title: 热爱编程
    details: 享受编程带来的乐趣，用代码创造价值，让工作充满激情
  - icon:
      dark: /icons/share-dark.svg
      light: /icons/share-light.svg
    title: 分享交流
    details: 乐于分享技术经验，建立良好的技术社区氛围，共同成长进步
---
<script setup>
import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import * as THREE from 'three'

const route = useRoute()
let renderer, scene, camera
let particles, particlePositions, linesMesh
const particlesData = []
const isDarkMode = ref(document.documentElement.classList.contains('dark'))
const PARTICLE_COUNT = 50
const PARTICLE_DISTANCE = 80
const PARTICLE_SIZE = 0.8
const CONNECTION_DISTANCE = 30
const MIN_LINE_OPACITY = 0.1

watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    nextTick(() => {
      initAnimation()
    })
  }
})

onMounted(() => {
  nextTick(() => {
    initAnimation()
  })
  
  const observer = new MutationObserver(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark')
    updateColors()
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

onUnmounted(() => {
  cleanup()
})

function cleanup() {
  if (renderer) {
    renderer.dispose()
    scene?.clear()
    particles = null
    linesMesh = null
    
    const canvas = document.querySelector('#funfe-animation-canvas')
    canvas?.remove()
  }
  window.removeEventListener('resize', onWindowResize)
}

function initAnimation() {
  cleanup()
  const container = document.querySelector('.VPHero')
  if (!container) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, 1, 1, 1000)
  camera.position.z = 100

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })
  
  const width = window.innerWidth > 960 ? window.innerWidth / 2 : window.innerWidth
  const height = window.innerWidth > 960 ? container.offsetHeight : container.offsetHeight / 2
  
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)
  renderer.domElement.id = 'funfe-animation-canvas'
  container.appendChild(renderer.domElement)

  createParticles()
  animate()
  window.addEventListener('resize', onWindowResize)
}

function createParticles() {
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const colors = new Float32Array(PARTICLE_COUNT * 3)
  const sizes = new Float32Array(PARTICLE_COUNT)

  const geometry = new THREE.BufferGeometry()
  const material = new THREE.PointsMaterial({
    size: PARTICLE_SIZE,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.9
  })

  // 创建粒子
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particlesData.push({
      velocity: new THREE.Vector3(
        (-0.5 + Math.random()) * 0.5,
        (-0.5 + Math.random()) * 0.5,
        (-0.5 + Math.random()) * 0.5
      ),
      numConnections: 0
    })

    const x = Math.random() * PARTICLE_DISTANCE - PARTICLE_DISTANCE/2
    const y = Math.random() * PARTICLE_DISTANCE - PARTICLE_DISTANCE/2
    const z = Math.random() * PARTICLE_DISTANCE - PARTICLE_DISTANCE/2

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    const color = isDarkMode.value ? 
      new THREE.Color(0x4ecdc4).multiplyScalar(Math.random() * 0.3 + 0.7) :
      new THREE.Color(0x2ecc71).multiplyScalar(Math.random() * 0.3 + 0.7)

    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b

    sizes[i] = PARTICLE_SIZE * (Math.random() * 0.5 + 0.75)
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // 创建连线 - 调整线条材质
  const linesGeometry = new THREE.BufferGeometry()
  const linesMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.15
  })

  // 使用不同的变量名
  const linesPositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3)
  const linesColors = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3)
  
  linesGeometry.setAttribute('position', new THREE.BufferAttribute(linesPositions, 3))
  linesGeometry.setAttribute('color', new THREE.BufferAttribute(linesColors, 3))

  linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
  scene.add(linesMesh)
}

function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001
  const positions = particles.geometry.attributes.position.array
  const linePositions = linesMesh.geometry.attributes.position.array
  const lineColors = linesMesh.geometry.attributes.color.array
  let vertexpos = 0
  let colorpos = 0
  let numConnected = 0

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particleData = particlesData[i]

    // 更新粒子位置
    positions[i * 3] += particleData.velocity.x * 0.1
    positions[i * 3 + 1] += particleData.velocity.y * 0.1
    positions[i * 3 + 2] += particleData.velocity.z * 0.1

    // 边界检查
    if (positions[i * 3] < -PARTICLE_DISTANCE/2 || positions[i * 3] > PARTICLE_DISTANCE/2) 
      particleData.velocity.x *= -1
    if (positions[i * 3 + 1] < -PARTICLE_DISTANCE/2 || positions[i * 3 + 1] > PARTICLE_DISTANCE/2) 
      particleData.velocity.y *= -1
    if (positions[i * 3 + 2] < -PARTICLE_DISTANCE/2 || positions[i * 3 + 2] > PARTICLE_DISTANCE/2) 
      particleData.velocity.z *= -1

    // 创建连线 - 优化连线逻辑
    for (let j = i + 1; j < PARTICLE_COUNT; j++) {
      const dx = positions[i * 3] - positions[j * 3]
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

      if (dist < CONNECTION_DISTANCE) {
        linePositions[vertexpos++] = positions[i * 3]
        linePositions[vertexpos++] = positions[i * 3 + 1]
        linePositions[vertexpos++] = positions[i * 3 + 2]
        linePositions[vertexpos++] = positions[j * 3]
        linePositions[vertexpos++] = positions[j * 3 + 1]
        linePositions[vertexpos++] = positions[j * 3 + 2]

        // 优化透明度计算
        const alpha = Math.max(MIN_LINE_OPACITY, 1.0 - (dist / CONNECTION_DISTANCE))
        const color = isDarkMode.value ? 
          new THREE.Color(0x4ecdc4).multiplyScalar(alpha * 0.8) :
          new THREE.Color(0x2ecc71).multiplyScalar(alpha * 0.8)

        lineColors[colorpos++] = color.r
        lineColors[colorpos++] = color.g
        lineColors[colorpos++] = color.b
        lineColors[colorpos++] = color.r
        lineColors[colorpos++] = color.g
        lineColors[colorpos++] = color.b

        numConnected++
      }
    }
  }

  linesMesh.geometry.setDrawRange(0, numConnected * 2)
  particles.geometry.attributes.position.needsUpdate = true
  linesMesh.geometry.attributes.position.needsUpdate = true
  linesMesh.geometry.attributes.color.needsUpdate = true

  renderer.render(scene, camera)
}

function onWindowResize() {
  const container = document.querySelector('.VPHero')
  if (!container) return

  const width = window.innerWidth > 960 ? window.innerWidth / 2 : window.innerWidth
  const height = window.innerWidth > 960 ? container.offsetHeight : container.offsetHeight / 2

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
</script>

<style>
/* 保持原有的 canvas 样式 */
#funfe-animation-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

/* 暗色模式背景 */
:global(html.dark) #funfe-animation-canvas {
  background: linear-gradient(to bottom, 
    rgba(13, 13, 25, 0.9) 0%,
    rgba(24, 24, 45, 0.9) 50%,
    rgba(43, 43, 78, 0.9) 100%
  );
}

/* 亮色模式背景 */
:global(html:not(.dark)) #funfe-animation-canvas {
  background: linear-gradient(to bottom, 
    rgba(245, 247, 250, 0.9) 0%,
    rgba(235, 240, 245, 0.9) 50%,
    rgba(230, 235, 240, 0.9) 100%
  );
}

/* Features 区域样式优化 */
:global(.VPFeatures) {
  position: relative;
  z-index: 1;
  margin-top: 3rem !important;
}

:global(.VPFeatures .container) {
  background: transparent !important;
  padding: 0 2rem;
}

:global(.VPFeatures .item) {
  background: transparent !important;
  border-radius: 12px;
  transition: all 0.3s ease;
}

/* 暗色模式下的 Features 样式 */
:global(html.dark .VPFeatures .item) {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:global(html.dark .VPFeatures .item:hover) {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

/* 亮色模式下的 Features 样式 */
:global(html:not(.dark) .VPFeatures .item) {
  border: 1px solid rgba(60, 60, 60, 0.12);
}

:global(html:not(.dark) .VPFeatures .item:hover) {
  background: rgba(255, 255, 255, 0.35) !important;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Features 内容样式优化 */
:global(.VPFeatures .details) {
  padding: 1.5rem !important;
  line-height: 1.6;
}

:global(.VPFeatures .title) {
  font-size: 1.25rem !important;
  margin-bottom: 0.75rem !important;
  font-weight: 600;
}

:global(.VPFeatures .icon) {
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

:global(.VPFeatures .item:hover .icon) {
  transform: scale(1.1);
}

/* 响应式优化 */
@media (max-width: 768px) {
  :global(.VPFeatures .container) {
    padding: 1rem;
  }
  
  :global(.VPFeatures .item) {
    margin: 0.5rem 0;
  }
  
  :global(.VPFeatures .details) {
    padding: 1rem !important;
  }
}

/* 确保毛玻璃效果在 Safari 上也能工作 */
@supports (-webkit-backdrop-filter: none) {
  :global(.VPFeatures .container),
  :global(.VPFeatures .item) {
    -webkit-backdrop-filter: blur(10px);
  }
}
</style>