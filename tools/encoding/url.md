---
title: URL 编解码工具
description: 在线URL编码解码工具，支持URL参数的编码和解码转换
---

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const outputText = ref('')
const mode = ref('encode')

const handleConvert = () => {
  try {
    if (mode.value === 'encode') {
      outputText.value = encodeURIComponent(inputText.value)
    } else {
      outputText.value = decodeURIComponent(inputText.value)
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

# URL 编解码工具

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
      :placeholder="mode === 'encode' ? '请输入要编码的URL' : '请输入要解码的URL'"
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
/* 使用与 base64.md 相同的样式 */
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