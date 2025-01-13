---
title: 调色板工具
description: 在线颜色选择器，支持多种颜色格式，颜色预览，调色板保存等功能
---

<script setup>
import { ref, onMounted } from 'vue'

const currentColor = ref('#3451b2')
const savedColors = ref([])
const toastVisible = ref(false)
const toastMessage = ref('')

// RGB 滑块值
const redValue = ref(52)
const greenValue = ref(81)
const blueValue = ref(178)

// 从 localStorage 加载保存的颜色
onMounted(() => {
  const saved = localStorage.getItem('savedColors')
  if (saved) {
    try {
      savedColors.value = JSON.parse(saved)
    } catch (e) {
      savedColors.value = []
    }
  }
})

// 更新 RGB 值
const updateRGBFromHex = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  redValue.value = r
  greenValue.value = g
  blueValue.value = b
}

// 从 RGB 更新十六进制
const updateHexFromRGB = () => {
  const r = redValue.value.toString(16).padStart(2, '0')
  const g = greenValue.value.toString(16).padStart(2, '0')
  const b = blueValue.value.toString(16).padStart(2, '0')
  currentColor.value = `#${r}${g}${b}`.toUpperCase()
}

// 监听 RGB 值变化
const handleRGBChange = () => {
  updateHexFromRGB()
}

// 监听十六进制值变化
const handleHexChange = (event) => {
  const hex = event.target.value
  if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    currentColor.value = hex.toUpperCase()
    updateRGBFromHex(hex)
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

// 保存颜色
const saveColor = () => {
  if (savedColors.value.length >= 20) {
    savedColors.value.pop()
  }
  savedColors.value.unshift(currentColor.value)
  localStorage.setItem('savedColors', JSON.stringify(savedColors.value))
  displayToast('颜色已保存')
}

// 复制颜色值
const copyColor = async (color) => {
  try {
    await navigator.clipboard.writeText(color)
    displayToast('已复制到剪贴板')
  } catch (e) {
    displayToast('复制失败')
  }
}

// 删除保存的颜色
const removeColor = (index) => {
  savedColors.value.splice(index, 1)
  localStorage.setItem('savedColors', JSON.stringify(savedColors.value))
}

// 清空保存的颜色
const clearSavedColors = () => {
  if (confirm('确定要清空所有保存的颜色吗？')) {
    savedColors.value = []
    localStorage.setItem('savedColors', '[]')
  }
}
</script>

# 调色板工具

<div class="tool-container">
  <div class="color-picker">
    <div class="preview-section">
      <div 
        class="color-preview" 
        :style="{ backgroundColor: currentColor }"
      ></div>
      <div class="color-value">
        <input 
          type="text" 
          :value="currentColor"
          @input="handleHexChange"
          maxlength="7"
          pattern="#[0-9A-Fa-f]{6}"
        >
        <button @click="copyColor(currentColor)">复制</button>
      </div>
    </div>
    <div class="sliders-section">
      <div class="slider-group">
        <label>R</label>
        <input 
          type="range" 
          v-model.number="redValue"
          @input="handleRGBChange"
          min="0" 
          max="255"
        >
        <span>{{ redValue }}</span>
      </div>
      <div class="slider-group">
        <label>G</label>
        <input 
          type="range" 
          v-model.number="greenValue"
          @input="handleRGBChange"
          min="0" 
          max="255"
        >
        <span>{{ greenValue }}</span>
      </div>
      <div class="slider-group">
        <label>B</label>
        <input 
          type="range" 
          v-model.number="blueValue"
          @input="handleRGBChange"
          min="0" 
          max="255"
        >
        <span>{{ blueValue }}</span>
      </div>
    </div>
    <button class="save-button" @click="saveColor">保存颜色</button>
  </div>

  <div class="saved-colors">
    <div class="saved-header">
      <h3>保存的颜色</h3>
      <button 
        v-if="savedColors.length" 
        @click="clearSavedColors"
        class="clear-button"
      >
        清空
      </button>
    </div>
    <div class="color-grid" v-if="savedColors.length">
      <div 
        v-for="(color, index) in savedColors" 
        :key="index"
        class="saved-color"
      >
        <div 
          class="color-box" 
          :style="{ backgroundColor: color }"
          @click="copyColor(color)"
        ></div>
        <span class="color-code">{{ color }}</span>
        <button 
          class="remove-button"
          @click="removeColor(index)"
        >
          ×
        </button>
      </div>
    </div>
    <div v-else class="empty-message">
      还没有保存的颜色
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

.color-picker {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.preview-section {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.color-preview {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.color-value {
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.color-value input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.sliders-section {
  margin-bottom: 20px;
}

.slider-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.slider-group label {
  width: 20px;
  font-weight: bold;
}

.slider-group input[type="range"] {
  flex: 1;
}

.slider-group span {
  width: 40px;
  text-align: right;
  font-family: var(--vp-font-family-mono);
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

button:hover {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.save-button {
  width: 100%;
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.saved-colors {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
}

.saved-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.saved-header h3 {
  margin: 0;
}

.clear-button {
  padding: 4px 8px;
  font-size: 0.9em;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
}

.saved-color {
  position: relative;
}

.color-box {
  height: 60px;
  border-radius: 4px;
  margin-bottom: 5px;
  cursor: pointer;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s;
}

.color-box:hover {
  transform: scale(1.05);
}

.color-code {
  display: block;
  font-size: 0.8em;
  text-align: center;
  color: var(--vp-c-text-2);
}

.remove-button {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background: var(--vp-c-danger);
  color: white;
  border: none;
  opacity: 0;
  transition: opacity 0.2s;
}

.saved-color:hover .remove-button {
  opacity: 1;
}

.empty-message {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 20px;
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
:deep(.dark) .color-picker,
:deep(.dark) .saved-colors {
  background: var(--vp-c-bg-soft);
}

:deep(.dark) input,
:deep(.dark) button:not(.save-button):not(.remove-button) {
  background: var(--vp-c-bg);
}
</style> 