<template>
  <div class="advanced-sequences">
    <!-- 斐波那契数列动画 -->
    <div class="sequence-demo fibonacci">
      <h3>斐波那契数列</h3>
      <div class="visualization">
        <div class="sequence-display">
          <div 
            v-for="(num, index) in fibSequence" 
            :key="index"
            :class="['number', { 
              active: index <= currentFibIndex,
              current: index === currentFibIndex 
            }]"
          >
            {{ num }}
            <div class="formula" v-if="index > 1 && index <= currentFibIndex">
              ={{ fibSequence[index-1] }}+{{ fibSequence[index-2] }}
            </div>
          </div>
        </div>
        <div class="spiral-container">
          <canvas ref="fibCanvas" width="300" height="300"></canvas>
        </div>
      </div>
      <div class="controls">
        <button @click="startFibDemo">演示数列</button>
        <button @click="drawSpiral">显示完整螺旋</button>
      </div>
    </div>

    <!-- 等差数列动画 -->
    <div class="sequence-demo arithmetic">
      <h3>等差数列</h3>
      <div class="visualization">
        <div class="stairs">
          <div 
            v-for="(num, index) in arithmeticSequence" 
            :key="index"
            :class="['stair', { active: index <= currentArithIndex }]"
            :style="{ height: `${(index + 1) * 30}px` }"
          >
            {{ num }}
            <div class="difference" v-if="index > 0 && index <= currentArithIndex">
              +{{ difference }}
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <button @click="startArithmeticDemo">演示</button>
        <input 
          type="number" 
          v-model.number="difference" 
          min="1" 
          max="10"
          placeholder="公差"
        >
      </div>
    </div>

    <!-- 等比数列动画 -->
    <div class="sequence-demo geometric">
      <h3>等比数列</h3>
      <div class="visualization">
        <div class="circles">
          <div 
            v-for="(num, index) in geometricSequence" 
            :key="index"
            :class="['circle', { active: index <= currentGeoIndex }]"
            :style="{ 
              width: `${30 * Math.pow(ratio, index)}px`,
              height: `${30 * Math.pow(ratio, index)}px`
            }"
          >
            {{ num }}
            <div class="ratio" v-if="index > 0 && index <= currentGeoIndex">
              ×{{ ratio }}
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <button @click="startGeometricDemo">演示</button>
        <input 
          type="number" 
          v-model.number="ratio" 
          min="1.1" 
          max="3"
          step="0.1"
          placeholder="公比"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// 斐波那契数列
const fibSequence = ref([1, 1, 2, 3, 5, 8, 13, 21])
const currentFibIndex = ref(-1)
const fibCanvas = ref(null)

// 等差数列
const difference = ref(3)
const arithmeticSequence = ref([2, 5, 8, 11, 14, 17])
const currentArithIndex = ref(-1)

// 等比数列
const ratio = ref(1.3)
const geometricSequence = ref([1, 1.3, 1.69, 2.197, 2.8561])
const currentGeoIndex = ref(-1)

function startFibDemo() {
  currentFibIndex.value = -1
  const interval = setInterval(() => {
    if (currentFibIndex.value < fibSequence.value.length - 1) {
      currentFibIndex.value++
      // 每次更新数字时重绘螺旋
      if (currentFibIndex.value > 1) {
        drawPartialSpiral(currentFibIndex.value)
      }
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

function drawPartialSpiral(endIndex) {
  const ctx = fibCanvas.value.getContext('2d')
  ctx.clearRect(0, 0, 300, 300)
  ctx.save()
  ctx.translate(150, 150)
  
  let angle = 0
  ctx.beginPath()
  ctx.moveTo(0, 0)
  
  // 只绘制到当前显示的数字
  for (let i = 0; i <= endIndex; i++) {
    const radius = fibSequence.value[i] * 8 // 调整缩放比例
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

function drawSpiral() {
  currentFibIndex.value = fibSequence.value.length - 1
  drawPartialSpiral(currentFibIndex.value)
}

function startArithmeticDemo() {
  currentArithIndex.value = -1
  const interval = setInterval(() => {
    if (currentArithIndex.value < arithmeticSequence.value.length - 1) {
      currentArithIndex.value++
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

function updateGeometricSequence() {
  geometricSequence.value = Array(5).fill(0).map((_, index) => 
    Math.round(Math.pow(ratio.value, index) * 100) / 100
  )
}

// 监听公差变化
watch(difference, () => {
  arithmeticSequence.value = Array(6).fill(0).map((_, index) => 
    2 + difference.value * index
  )
})

// 监听比率变化
watch(ratio, () => {
  updateGeometricSequence()
})

function startGeometricDemo() {
  currentGeoIndex.value = -1
  const interval = setInterval(() => {
    if (currentGeoIndex.value < geometricSequence.value.length - 1) {
      currentGeoIndex.value++
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

onMounted(() => {
  if (fibCanvas.value) {
    // 初始化时绘制完整螺旋
    drawSpiral()
  }
})
</script>

<style scoped>
.advanced-sequences {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.sequence-demo {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.visualization {
  margin: 2rem 0;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 斐波那契样式 */
.spiral-container canvas {
  background: white;
  border-radius: 8px;
}

/* 等差数列样式 */
.stairs {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 200px;
}

.stair {
  width: 40px;
  background: #42b883;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  transition: all 0.5s ease;
}

/* 等比数列样式 */
.circles {
  display: flex;
  gap: 20px;
  align-items: center;
}

.circle {
  background: #42b883;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  transition: all 0.5s ease;
}

.active {
  opacity: 1;
}

.controls {
  display: flex;
  gap: 1rem;
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
}

input {
  width: 80px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.formula, .difference, .ratio {
  position: absolute;
  top: -20px;
  font-size: 0.8em;
  color: #666;
}

.sequence-display {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
}

.number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 8px;
  font-weight: bold;
  position: relative;
  opacity: 0.5;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.number.active {
  opacity: 1;
  transform: scale(1);
  background: #42b883;
  color: white;
}

.number.current {
  animation: pulse 0.5s infinite;
}

.formula {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  background: white;
  padding: 2px 6px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  white-space: nowrap;
}

.spiral-container {
  margin: 1rem;
}

.spiral-container canvas {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style> 