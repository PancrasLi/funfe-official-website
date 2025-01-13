---
title: Base64 转换工具
description: 在线Base64编码解码工具，支持文本和文件的Base64转换
---

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const outputText = ref('')
const mode = ref('encode') // encode 或 decode

const handleConvert = () => {
  try {
    if (mode.value === 'encode') {
      outputText.value = btoa(encodeURIComponent(inputText.value))
    } else {
      outputText.value = decodeURIComponent(atob(inputText.value))
    }
  } catch (e) {
    outputText.value = '转换失败：输入内容格式不正确'
  }
}

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(outputText.value)
    alert('已复制到剪贴板')
  } catch (e) {
    alert('复制失败，请手动复制')
  }
}

const handleClear = () => {
  inputText.value = ''
  outputText.value = ''
}
</script>

# Base64 转换工具

<div class="tool-container">
  <div class="tool-header">
    <div class="mode-switch">
      <button 
        :class="{ active: mode === 'encode' }" 
        @click="mode = 'encode'"
      >
        编码
      </button>
      <button 
        :class="{ active: mode === 'decode' }" 
        @click="mode = 'decode'"
      >
        解码
      </button>
    </div>
  </div>

  <div class="input-area">
    <textarea
      v-model="inputText"
      :placeholder="mode === 'encode' ? '请输入要编码的文本' : '请输入要解码的Base64字符串'"
    ></textarea>
  </div>

  <div class="button-group">
    <button class="primary" @click="handleConvert">转换</button>
    <button @click="handleClear">清空</button>
  </div>

  <div class="output-area">
    <textarea
      v-model="outputText"
      readonly
      placeholder="转换结果将显示在这里"
    ></textarea>
    <button 
      class="copy-btn"
      v-if="outputText"
      @click="handleCopy"
    >
      复制结果
    </button>
  </div>
</div>

<style scoped>
.tool-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.tool-header {
  margin-bottom: 20px;
}

.mode-switch {
  display: flex;
  gap: 10px;
}

.mode-switch button {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.mode-switch button.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.input-area,
.output-area {
  position: relative;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  resize: vertical;
}

textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
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

button.primary {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

button:hover {
  opacity: 0.8;
}

.copy-btn {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 4px 8px;
  font-size: 0.9em;
  background: var(--vp-c-bg);
}

/* Dark mode optimization */
:deep(.dark) .tool-container {
  background: var(--vp-c-bg-soft);
}

:deep(.dark) textarea {
  background: var(--vp-c-bg);
}
</style> 