---
title: 颜色格式转换工具
description: 在线颜色格式转换工具，支持HEX、RGB、HSL、HSV等多种颜色格式互转
---

<script setup>
import { ref, computed } from 'vue'

const inputColor = ref('#3451b2')
const inputFormat = ref('hex')
const toastVisible = ref(false)
const toastMessage = ref('')

// 颜色格式选项
const formatOptions = [
  { value: 'hex', label: 'HEX', example: '#FF0000' },
  { value: 'rgb', label: 'RGB', example: 'rgb(255, 0, 0)' },
  { value: 'hsl', label: 'HSL', example: 'hsl(0, 100%, 50%)' },
  { value: 'hsv', label: 'HSV', example: 'hsv(0, 100%, 100%)' }
]

// 转换后的颜色值
const convertedColors = computed(() => {
  try {
    let r, g, b, h, s, l, v
    
    // 首先将输入转换为RGB
    switch (inputFormat.value) {
      case 'hex':
        if (!/^#[0-9A-Fa-f]{6}$/.test(inputColor.value)) {
          throw new Error('无效的HEX颜色值')
        }
        r = parseInt(inputColor.value.slice(1, 3), 16)
        g = parseInt(inputColor.value.slice(3, 5), 16)
        b = parseInt(inputColor.value.slice(5, 7), 16)
        break
        
      case 'rgb':
        const rgbMatch = inputColor.value.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
        if (!rgbMatch) {
          throw new Error('无效的RGB颜色值')
        }
        [, r, g, b] = rgbMatch.map(Number)
        break
        
      case 'hsl':
        const hslMatch = inputColor.value.match(/^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/)
        if (!hslMatch) {
          throw new Error('无效的HSL颜色值')
        }
        [, h, s, l] = hslMatch.map(Number)
        // HSL转RGB
        const hslToRgb = (h, s, l) => {
          s /= 100
          l /= 100
          const k = n => (n + h / 30) % 12
          const a = s * Math.min(l, 1 - l)
          const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
          r = Math.round(255 * f(0))
          g = Math.round(255 * f(8))
          b = Math.round(255 * f(4))
        }
        hslToRgb(h, s, l)
        break
        
      case 'hsv':
        const hsvMatch = inputColor.value.match(/^hsv\((\d+),\s*(\d+)%,\s*(\d+)%\)$/)
        if (!hsvMatch) {
          throw new Error('无效的HSV颜色值')
        }
        [, h, s, v] = hsvMatch.map(Number)
        // HSV转RGB
        const hsvToRgb = (h, s, v) => {
          s /= 100
          v /= 100
          const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
          r = Math.round(255 * f(5))
          g = Math.round(255 * f(3))
          b = Math.round(255 * f(1))
        }
        hsvToRgb(h, s, v)
        break
    }
    
    // 从RGB转换到其他格式
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase()
    const rgb = `rgb(${r}, ${g}, ${b})`
    
    // RGB转HSL
    const rgbToHsl = (r, g, b) => {
      r /= 255
      g /= 255
      b /= 255
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      let h, s
      const l = (max + min) / 2
      
      if (max === min) {
        h = s = 0
      } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break
          case g: h = (b - r) / d + 2; break
          case b: h = (r - g) / d + 4; break
        }
        h = Math.round(h * 60)
        if (h < 0) h += 360
      }
      
      return `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
    }
    
    // RGB转HSV
    const rgbToHsv = (r, g, b) => {
      r /= 255
      g /= 255
      b /= 255
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      let h, s
      const v = max
      
      const d = max - min
      s = max === 0 ? 0 : d / max
      
      if (max === min) {
        h = 0
      } else {
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break
          case g: h = (b - r) / d + 2; break
          case b: h = (r - g) / d + 4; break
        }
        h = Math.round(h * 60)
        if (h < 0) h += 360
      }
      
      return `hsv(${h}, ${Math.round(s * 100)}%, ${Math.round(v * 100)}%)`
    }
    
    const hsl = rgbToHsl(r, g, b)
    const hsv = rgbToHsv(r, g, b)
    
    return { hex, rgb, hsl, hsv }
  } catch (e) {
    return {
      hex: '#000000',
      rgb: 'rgb(0, 0, 0)',
      hsl: 'hsl(0, 0%, 0%)',
      hsv: 'hsv(0, 0%, 0%)'
    }
  }
})

// 复制颜色值
const copyColor = async (color) => {
  try {
    await navigator.clipboard.writeText(color)
    displayToast('已复制到剪贴板')
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

# 颜色格式转换工具

<div class="tool-container">
  <div class="input-section">
    <div class="format-selector">
      <label>输入格式：</label>
      <div class="format-buttons">
        <button 
          v-for="format in formatOptions"
          :key="format.value"
          :class="{ active: inputFormat === format.value }"
          @click="inputFormat = format.value"
        >
          {{ format.label }}
        </button>
      </div>
    </div>
    <div class="color-input">
      <input 
        type="text"
        v-model="inputColor"
        :placeholder="formatOptions.find(f => f.value === inputFormat).example"
      >
      <div 
        class="color-preview"
        :style="{ backgroundColor: convertedColors.rgb }"
      ></div>
    </div>
  </div>

  <div class="output-section">
    <h3>转换结果</h3>
    <div class="results-grid">
      <div 
        v-for="format in formatOptions"
        :key="format.value"
        class="result-item"
      >
        <div class="result-label">{{ format.label }}</div>
        <div class="result-value">
          <input 
            type="text"
            :value="convertedColors[format.value]"
            readonly
          >
          <button @click="copyColor(convertedColors[format.value])">
            复制
          </button>
        </div>
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

.input-section {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.format-selector {
  margin-bottom: 20px;
}

.format-selector label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
}

.format-buttons {
  display: flex;
  gap: 10px;
}

.format-buttons button {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.format-buttons button.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.color-input {
  display: flex;
  gap: 15px;
}

.color-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
}

.color-preview {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}

.output-section {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
}

.output-section h3 {
  margin: 0 0 20px 0;
}

.results-grid {
  display: grid;
  gap: 15px;
}

.result-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.result-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.result-value {
  display: flex;
  gap: 10px;
}

.result-value input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  cursor: text;
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
:deep(.dark) .input-section,
:deep(.dark) .output-section {
  background: var(--vp-c-bg-soft);
}

:deep(.dark) input,
:deep(.dark) button:not(.active) {
  background: var(--vp-c-bg);
}
</style> 