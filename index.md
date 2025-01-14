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
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

const route = useRoute()
let renderer, scene, camera
let textMeshes = []
const isDarkMode = ref(document.documentElement.classList.contains('dark'))

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
    textMeshes = []
    
    const canvas = document.querySelector('#funfe-animation-canvas')
    canvas?.remove()
  }
  window.removeEventListener('resize', onWindowResize)
}

async function initAnimation() {
  cleanup()
  const container = document.querySelector('.is-home')
  if (!container) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 50

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.domElement.id = 'funfe-animation-canvas'
  document.body.appendChild(renderer.domElement)

  try {
    const loader = new FontLoader()
    const font = await new Promise((resolve, reject) => {
      loader.load(
        '/fonts/helvetiker_regular.typeface.json',
        resolve,
        undefined,
        reject
      )
    })

    createText('FUNFE', font, 0)
    createText('CODE', font, -15)
    createOrbitLines()

    animate()
    window.addEventListener('resize', onWindowResize)
  } catch (error) {
    console.error('Failed to load font:', error)
  }
}

function createText(text, font, yPosition) {
  const letters = text.split('')
  const spacing = 8
  const startX = -(letters.length - 1) * spacing / 2

  letters.forEach((letter, i) => {
    const geometry = new TextGeometry(letter, {
      font: font,
      size: 5,
      height: 1,
    })
    
    const material = new THREE.MeshBasicMaterial({
      color: isDarkMode.value ? 0x4ecdc4 : 0x2ecc71,
      transparent: true,
      opacity: 0.8
    })
    
    const mesh = new THREE.Mesh(geometry, material)
    geometry.computeBoundingBox()
    
    mesh.position.x = startX + i * spacing
    mesh.position.y = yPosition
    
    scene.add(mesh)
    textMeshes.push(mesh)
  })
}

function createOrbitLines() {
  const curve = new THREE.EllipseCurve(
    0, 0,
    30, 20,
    0, 2 * Math.PI,
    false,
    0
  )

  const points = curve.getPoints(50)
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const material = new THREE.LineBasicMaterial({
    color: isDarkMode.value ? 0x6c5ce7 : 0x8e44ad,
    transparent: true,
    opacity: 0.5
  })

  const ellipse = new THREE.Line(geometry, material)
  scene.add(ellipse)
  textMeshes.push(ellipse)

  const ellipse2 = ellipse.clone()
  ellipse2.rotation.x = Math.PI / 4
  scene.add(ellipse2)
  textMeshes.push(ellipse2)
}

function updateColors() {
  textMeshes.forEach((mesh) => {
    if (mesh instanceof THREE.Line) {
      mesh.material.color.setHex(isDarkMode.value ? 0x6c5ce7 : 0x8e44ad)
    } else {
      mesh.material.color.setHex(isDarkMode.value ? 0x4ecdc4 : 0x2ecc71)
    }
  })
}

function animate() {
  requestAnimationFrame(animate)

  textMeshes.forEach((mesh, index) => {
    if (mesh instanceof THREE.Line) {
      mesh.rotation.z += 0.002
    } else {
      mesh.rotation.y = Math.sin(Date.now() * 0.001 + index * 0.5) * 0.2
      mesh.position.y += Math.sin(Date.now() * 0.002 + index * 0.5) * 0.02
    }
  })

  renderer.render(scene, camera)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
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
  padding: 2rem !important;
}

:global(.VPFeatures .container) {
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  background: transparent !important;
}

:global(.VPFeatures .item) {
  background: transparent !important;
  backdrop-filter: blur(5px);
  border-radius: 16px;
  transition: all 0.3s ease;
}

/* 暗色模式下的 Features 样式 */
:global(html.dark .VPFeatures .container) {
  background: rgba(20, 20, 40, 0.2) !important;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

:global(html.dark .VPFeatures .item) {
  background: rgba(30, 30, 60, 0.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

:global(html.dark .VPFeatures .item:hover) {
  background: rgba(40, 40, 80, 0.4) !important;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* 亮色模式下的 Features 样式 */
:global(html:not(.dark) .VPFeatures .container) {
  background: rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

:global(html:not(.dark) .VPFeatures .item) {
  background: rgba(255, 255, 255, 0.25) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
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