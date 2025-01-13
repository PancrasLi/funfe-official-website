---
title: 渐变生成器
description: 在线CSS渐变生成器，支持线性渐变、径向渐变，可视化编辑，实时预览
---

<script setup>
import { ref, computed } from 'vue'

const gradientType = ref('linear')
const direction = ref('to right')
const colors = ref([
  { color: '#3451b2', position: 0 },
  { color: '#e73c7e', position: 100 }
])
const centerX = ref(50)
const centerY = ref(50)
const shape = ref('circle')
const toastVisible = ref(false)
const toastMessage = ref('')

// 渐变方向选项
const directions = [
  { value: 'to right', label: '→', degrees: '90deg' },
  { value: 'to bottom right', label: '↘', degrees: '135deg' },
  { value: 'to bottom', label: '↓', degrees: '180deg' },
  { value: 'to bottom left', label: '↙', degrees: '225deg' },
  { value: 'to left', label: '←', degrees: '270deg' },
  { value: 'to top left', label: '↖', degrees: '315deg' },
  { value: 'to top', label: '↑', degrees: '0deg' },
  { value: 'to top right', label: '↗', degrees: '45deg' }
]

// 生成渐变CSS
const gradientCSS = computed(() => {
  if (gradientType.value === 'linear') {
    const colorStops = colors.value
      .map(c => `${c.color} ${c.position}%`)
      .join(', ')
    return `linear-gradient(${direction.value}, ${colorStops})`
  } else {
    const colorStops = colors.value
      .map(c => `${c.color} ${c.position}%`)
      .join(', ')
    return `radial-gradient(${shape.value} at ${centerX.value}% ${centerY.value}%, ${colorStops})`
  }
})

// 添加颜色节点
const addColor = () => {
  if (colors.value.length >= 5) {
    displayToast('最多支持5个颜色节点')
    return
  }
  const lastPosition = colors.value[colors.value.length - 1].position
  const newPosition = Math.min(lastPosition + 20, 100)
  colors.value.push({ color: '#ffffff', position: newPosition })
}

// 删除颜色节点
const removeColor = (index) => {
  if (colors.value.length > 2) {
    colors.value.splice(index, 1)
  } else {
    displayToast('至少需要2个颜色节点')
  }
}

// 复制CSS代码
const copyCSS = async () => {
  try {
    const css = `background: ${gradientCSS.value};`
    await navigator.clipboard.writeText(css)
    displayToast('CSS代码已复制到剪贴板')
  } catch (e) {
    displayToast('复制失败')
  }
}

// 显示提示消息
const displayToast = (message) => {
  toastMessage.value = message
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 2000)
}
</script>

# 渐变生成器

<div class="tool-container">
  <div class="gradient-preview" :style="{ background: gradientCSS }">
  </div>

  <div class="controls-section">
    <div class="type-selector">
      <label>渐变类型：</label>
      <div class="button-group">
        <button 
          :class="{ active: gradientType === 'linear' }"
          @click="gradientType = 'linear'"
        >
          线性渐变
        </button>
        <button 
          :class="{ active: gradientType === 'radial' }"
          @click="gradientType = 'radial'"
        >
          径向渐变
        </button>
      </div>
    </div>
    <template v-if="gradientType === 'linear'">
      <div class="direction-selector">
        <label>渐变方向：</label>
        <div class="direction-grid">
          <button 
            v-for="dir in directions"
            :key="dir.value"
            :class="{ active: direction === dir.value }"
            @click="direction = dir.value"
            :title="dir.degrees"
          >
            {{ dir.label }}
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="radial-controls">
        <div class="shape-selector">
          <label>形状：</label>
          <div class="button-group">
            <button 
              :class="{ active: shape === 'circle' }"
              @click="shape = 'circle'"
            >
              圆形
            </button>
            <button 
              :class="{ active: shape === 'ellipse' }"
              @click="shape = 'ellipse'"
            >
              椭圆
            </button>
          </div>
        </div>
        <div class="center-controls">
          <label>中心点：</label>
          <div class="center-inputs">
            <div class="input-group">
              <span>X:</span>
              <input 
                type="number"
                v-model.number="centerX"
                min="0"
                max="100"
              >
              <span>%</span>
            </div>
            <div class="input-group">
              <span>Y:</span>
              <input 
                type="number"
                v-model.number="centerY"
                min="0"
                max="100"
              >
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="colors-section">
      <div class="section-header">
        <label>颜色节点：</label>
        <button 
          class="add-color"
          @click="addColor"
          :disabled="colors.length >= 5"
        >
          添加颜色
        </button>
      </div>
      <div class="color-stops">
        <div 
          v-for="(stop, index) in colors"
          :key="index"
          class="color-stop"
        >
          <input 
            type="color"
            v-model="stop.color"
          >
          <input 
            type="number"
            v-model.number="stop.position"
            min="0"
            max="100"
            class="position-input"
          >
          <span>%</span>
          <button 
            v-if="colors.length > 2"
            class="remove-color"
            @click="removeColor(index)"
          >
            ×
          </button>
        </div>
      </div>
    </div>
    <div class="css-output">
      <div class="output-header">
        <label>CSS代码：</label>
        <button @click="copyCSS">复制</button>
      </div>
      <div class="code-block">
        background: {{ gradientCSS }};
      </div>
    </div>
  </div>

  <div 
    class="toast"
    :class="{ show: toastVisible }"
  >
    {{ toastMessage }}
  </div>
</div>

<style scoped>
.tool-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.gradient-preview {
  height: 200px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid var(--vp-c-divider);
}

.controls-section {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
}

.type-selector,
.direction-selector,
.radial-controls,
.colors-section,
.css-output {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
}

.button-group {
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

button.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.direction-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 150px;
}

.direction-grid button {
  aspect-ratio: 1;
  padding: 0;
  font-size: 1.2em;
}

.center-controls {
  margin-top: 15px;
}

.center-inputs {
  display: flex;
  gap: 20px;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 5px;
}

.input-group input {
  width: 60px;
  padding: 4px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.color-stops {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.color-stop {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-stop input[type="color"] {
  width: 50px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
}

.position-input {
  width: 60px;
  padding: 4px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.remove-color {
  padding: 4px 8px;
  font-size: 1.2em;
  line-height: 1;
  color: var(--vp-c-danger);
}

.output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.code-block {
  padding: 15px;
  background: var(--vp-c-bg);
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.9em;
  white-space: pre-wrap;
  word-break: break-all;
}

.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  background: var(--vp-c-brand);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  transition: transform 0.3s;
  opacity: 0;
}

.toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

/* Dark mode optimization */
:deep(.dark) .controls-section {
  background: var(--vp-c-bg-soft);
}

:deep(.dark) input,
:deep(.dark) .code-block,
:deep(.dark) button:not(.active) {
  background: var(--vp-c-bg);
}
</style> 