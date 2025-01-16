<template>
  <div class="pattern-animation">
    <canvas ref="canvas" :width="width" :height="height"></canvas>
    <div class="controls" v-if="interactive">
      <button @click="playAnimation">播放动画</button>
      <button @click="pauseAnimation">暂停</button>
      <button @click="resetAnimation">重置</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  type: String,
  sequence: String,
  interactive: Boolean
})

// ... 动画逻辑实现
</script>

<style scoped>
.pattern-animation {
  margin: 20px 0;
  position: relative;
}

canvas {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.controls {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: #4CAF50;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #45a049;
}
</style> 