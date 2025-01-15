<template>
  <div class="color-mixing">
    <svg width="300" height="200" viewBox="0 0 300 200">
      <circle 
        v-for="(circle, index) in circles" 
        :key="index"
        :cx="circle.cx" 
        :cy="circle.cy" 
        :r="40" 
        :fill="circle.fill"
        :ref="el => circleRefs[index] = el"
        class="color-circle"
        @mouseenter="startAnimation(index)"
        @mouseleave="stopAnimation(index)"
      />
      <text x="150" y="160" text-anchor="middle" class="mixing-text">
        移动鼠标到颜色上试试看！
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const circles = [
  { cx: 80, cy: 80, fill: 'red' },
  { cx: 150, cy: 80, fill: 'yellow' },
  { cx: 220, cy: 80, fill: 'blue' }
]

const circleRefs = ref([])

const startAnimation = (index) => {
  if (circleRefs.value[index]) {
    circleRefs.value[index].style.animation = 'colorPulse 1s infinite'
  }
}

const stopAnimation = (index) => {
  if (circleRefs.value[index]) {
    circleRefs.value[index].style.animation = ''
  }
}
</script>

<style scoped>
.color-mixing {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.color-circle {
  transition: all 0.3s ease;
  cursor: pointer;
}

.color-circle:hover {
  transform-origin: center;
  transform: scale(1.2);
  filter: brightness(1.2);
}

.mixing-text {
  font-size: 14px;
  fill: #666;
}

@keyframes colorPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style> 