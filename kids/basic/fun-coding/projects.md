# 趣味小项目 🎨

<script setup>
import { ref, onMounted } from 'vue'

// 项目1：魔法森林
const forest = ref({
  trees: Array(5).fill().map(() => ({
    height: Math.random() * 50 + 50,
    isGrowing: false
  })),
  waterLevel: 0,
  sunLevel: 0,
  isPlaying: false
})

// 项目2：音乐盒
const musicBox = ref({
  notes: ['🎵', '🎶', '🎼', '🎹', '🎸'],
  currentNote: 0,
  isPlaying: false,
  tempo: 500
})

// 项目3：宇宙探险
const space = ref({
  rocket: {
    x: 50,
    y: 50,
    fuel: 100,
    isFlying: false
  },
  stars: Array(10).fill().map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    collected: false
  }))
})

// 项目4：彩虹画笔
const rainbow = ref({
  colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
  currentColor: 0,
  isDrawing: false,
  paths: []
})

// 项目5：宠物训练营
const pets = ref({
  currentPet: '🐶',
  tricks: ['跳跃', '转圈', '握手', '坐下'],
  isPerforming: false,
  happiness: 50
})

// 项目1：魔法森林功能
function growTrees() {
  forest.value.isPlaying = true
  forest.value.trees.forEach((tree, index) => {
    setTimeout(() => {
      tree.isGrowing = true
    }, index * 500)
  })
}

// 项目2：音乐盒功能
function playMusic() {
  musicBox.value.isPlaying = !musicBox.value.isPlaying
  
  function playNote() {
    if (!musicBox.value.isPlaying) return
    
    musicBox.value.currentNote = (musicBox.value.currentNote + 1) % musicBox.value.notes.length
    setTimeout(playNote, musicBox.value.tempo)
  }
  
  if (musicBox.value.isPlaying) {
    playNote()
  }
}

// 项目3：宇宙探险功能
function flyRocket(direction) {
  if (space.value.rocket.fuel <= 0) return
  
  space.value.rocket.isFlying = true
  const oldX = space.value.rocket.x
  const oldY = space.value.rocket.y
  
  switch(direction) {
    case 'up':
      space.value.rocket.y -= 10
      break
    case 'down':
      space.value.rocket.y += 10
      break
    case 'left':
      space.value.rocket.x -= 10
      break
    case 'right':
      space.value.rocket.x += 10
      break
  }
  
  // 检查是否收集到星星
  space.value.stars.forEach(star => {
    if (!star.collected) {
      const starX = star.x * window.innerWidth / 100
      const starY = star.y * window.innerHeight / 100
      const distance = Math.sqrt(
        Math.pow(space.value.rocket.x - starX, 2) + 
        Math.pow(space.value.rocket.y - starY, 2)
      )
      if (distance < 30) {
        star.collected = true
      }
    }
  })
  
  space.value.rocket.fuel -= 1
  
  setTimeout(() => {
    space.value.rocket.isFlying = false
  }, 200)
}

// 项目4：彩虹画笔功能
let drawingContext = null

function initCanvas() {
  const canvas = document.querySelector('.drawing-canvas')
  if (canvas) {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    drawingContext = canvas.getContext('2d')
    drawingContext.lineCap = 'round'
    drawingContext.lineJoin = 'round'
  }
}

function startDrawing(event) {
  if (!drawingContext) return
  
  rainbow.value.isDrawing = true
  const rect = event.target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  drawingContext.beginPath()
  drawingContext.moveTo(x, y)
  drawingContext.strokeStyle = rainbow.value.colors[rainbow.value.currentColor]
  drawingContext.lineWidth = 5
}

function draw(event) {
  if (!rainbow.value.isDrawing || !drawingContext) return
  
  const rect = event.target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  drawingContext.lineTo(x, y)
  drawingContext.stroke()
}

function stopDrawing() {
  rainbow.value.isDrawing = false
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', initCanvas)
})

// 项目5：宠物训练营功能
function performTrick(trick) {
  if (pets.value.isPerforming) return
  
  pets.value.isPerforming = true
  pets.value.happiness += 10
  
  setTimeout(() => {
    pets.value.isPerforming = false
  }, 1000)
}
</script>

## 1. 魔法森林 🌳

<div class="project-container forest-project">
  <div class="forest-scene">
    <div v-for="(tree, index) in forest.trees" :key="index" 
         class="tree" 
         :class="{ growing: tree.isGrowing }"
         :style="{ height: tree.height + 'px' }">
      🌳
    </div>
  </div>
  <div class="controls">
    <button @click="growTrees" :disabled="forest.isPlaying">开始生长</button>
  </div>
</div>

## 2. 音乐盒 🎵

<div class="project-container music-project">
  <div class="music-scene">
    <div class="note" :class="{ active: musicBox.isPlaying }">
      {{ musicBox.notes[musicBox.currentNote] }}
    </div>
  </div>
  <div class="controls">
    <button @click="playMusic">{{ musicBox.isPlaying ? '停止' : '播放' }}</button>
  </div>
</div>

## 3. 宇宙探险 🚀

<div class="project-container space-project">
  <div class="space-scene">
    <div class="rocket" :class="{ flying: space.rocket.isFlying }"
         :style="{ left: space.rocket.x + 'px', top: space.rocket.y + 'px' }">
      🚀
    </div>
    <div v-for="(star, index) in space.stars" :key="index"
         class="star" :class="{ collected: star.collected }"
         :style="{ left: star.x + '%', top: star.y + '%' }">
      ⭐
    </div>
  </div>
  <div class="controls">
    <div class="fuel-gauge">燃料: {{ space.rocket.fuel }}%</div>
    <div class="direction-pad">
      <button @click="flyRocket('up')">⬆️</button>
      <button @click="flyRocket('left')">⬅️</button>
      <button @click="flyRocket('right')">➡️</button>
      <button @click="flyRocket('down')">⬇️</button>
    </div>
  </div>
</div>

## 4. 彩虹画笔 🎨

<div class="project-container rainbow-project">
  <canvas class="drawing-canvas" 
          @mousedown="startDrawing"
          @mousemove="draw"
          @mouseup="stopDrawing"
          @mouseleave="stopDrawing">
  </canvas>
  <div class="color-palette">
    <div v-for="(color, index) in rainbow.colors" 
         :key="color"
         class="color-option"
         :style="{ backgroundColor: color }"
         @click="rainbow.currentColor = index">
    </div>
  </div>
</div>

## 5. 宠物训练营 🐾

<div class="project-container pet-project">
  <div class="pet-scene">
    <div class="pet" :class="{ performing: pets.isPerforming }">
      {{ pets.currentPet }}
    </div>
    <div class="happiness-meter">
      开心指数: {{ pets.happiness }}
    </div>
  </div>
  <div class="controls">
    <button v-for="trick in pets.tricks" 
            :key="trick"
            @click="performTrick(trick)"
            :disabled="pets.isPerforming">
      {{ trick }}
    </button>
  </div>
</div>

<style scoped>
.project-container {
  margin: 20px 0;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

/* 魔法森林样式 */
.forest-scene {
  height: 200px;
  background: linear-gradient(to bottom, #87CEEB 0%, #90EE90 100%);
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
}

.tree {
  font-size: 24px;
  transition: all 1s ease;
  transform-origin: bottom;
  transform: scale(0.5);
}

.tree.growing {
  transform: scale(1);
}

/* 音乐盒样式 */
.music-scene {
  height: 150px;
  background: #FFE5E5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.note {
  font-size: 48px;
  transition: all 0.3s ease;
}

.note.active {
  animation: bounce 0.5s infinite;
}

/* 宇宙探险样式 */
.space-scene {
  height: 300px;
  background: #000033;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.rocket {
  position: absolute;
  font-size: 32px;
  transition: all 0.3s ease;
}

.rocket.flying {
  animation: shake 0.2s infinite;
}

.star {
  position: absolute;
  font-size: 20px;
  transition: all 0.3s ease;
}

.star.collected {
  transform: scale(0);
  opacity: 0;
}

/* 彩虹画笔样式 */
.drawing-canvas {
  width: 100%;
  height: 300px;
  background: white;
  border-radius: 8px;
  cursor: crosshair;
  touch-action: none;
}

.color-palette {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.color-option {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-option:hover {
  transform: scale(1.2);
}

/* 宠物训练营样式 */
.pet-scene {
  height: 200px;
  background: #E8F5E9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.pet {
  font-size: 64px;
  transition: all 0.3s ease;
}

.pet.performing {
  animation: jump 1s ease;
}

.happiness-meter {
  margin-top: 20px;
  font-size: 18px;
  color: #4CAF50;
}

/* 动画关键帧 */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes jump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px) rotate(360deg); }
}

.controls {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

button:disabled {
  background: #ccc;
}

.direction-pad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.direction-pad button {
  padding: 10px;
}

.direction-pad button:nth-child(1) {
  grid-column: 2;
}
</style>
