---
title: JSON 格式化工具
description: 在线JSON格式化工具，支持JSON美化、压缩、校验等功能
---

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const outputText = ref('')
const indentSize = ref(2)
const mode = ref('format') // format, compress, validate

const handleFormat = () => {
  try {
    const obj = JSON.parse(inputText.value)
    if (mode.value === 'format') {
      outputText.value = JSON.stringify(obj, null, indentSize.value)
    } else if (mode.value === 'compress') {
      outputText.value = JSON.stringify(obj)
    } else {
      outputText.value = '√ JSON 格式正确'
    }
  } catch (e) {
    outputText.value = `× 错误：${e.message}`
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

const sampleJson = {
  name: "JSON示例",
  type: "object",
  properties: {
    string: "这是字符串",
    number: 123,
    boolean: true,
    array: [1, 2, 3],
    object: {
      key: "value"
    }
  }
}

const loadSample = () => {
  inputText.value = JSON.stringify(sampleJson)
  handleFormat()
}
</script>

# JSON 格式化工具

<div class="tool-container">
  <div class="tool-header">
    <div class="mode-switch">
      <button 
        :class="{ active: mode === 'format' }" 
        @click="mode = 'format'"
      >
        格式化
      </button>
      <button 
        :class="{ active: mode === 'compress' }" 
        @click="mode = 'compress'"
      >
        压缩
      </button>
      <button 
        :class="{ active: mode === 'validate' }" 
        @click="mode = 'validate'"
      >
        校验
      </button>
    </div>
    <div class="tool-options" v-if="mode === 'format'">
      <label>缩进空格：</label>
      <select v-model="indentSize">
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
      </select>
    </div>
  </div>

  <div class="input-area">
    <textarea
      v-model="inputText"
      placeholder="请输入JSON字符串"
    ></textarea>
    <button 
      class="sample-btn"
      @click="loadSample"
    >
      加载示例
    </button>
  </div>

  <div class="button-group">
    <button class="primary" @click="handleFormat">
      {{ mode === 'format' ? '格式化' : mode === 'compress' ? '压缩' : '验证' }}
    </button>
    <button @click="handleClear">清空</button>
  </div>

  <div class="output-area">
    <textarea
      v-model="outputText"
      readonly
      :placeholder="mode === 'validate' ? '验证结果将显示在这里' : '转换结果将显示在这里'"
    ></textarea>
    <button 
      class="copy-btn"
      v-if="outputText && mode !== 'validate'"
      @click="handleCopy"
    >
      复制结果
    </button>
  </div>
</div>

<style scoped>
/* 基础样式与之前相同 */
.tool-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.tool-header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mode-switch {
  display: flex;
  gap: 10px;
}

.tool-options {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tool-options select {
  padding: 4px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
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
  min-height: 200px;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  resize: vertical;
  line-height: 1.5;
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

.copy-btn,
.sample-btn {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 4px 8px;
  font-size: 0.9em;
  background: var(--vp-c-bg);
}

.sample-btn {
  bottom: auto;
  top: 10px;
}

/* Dark mode optimization */
:deep(.dark) .tool-container {
  background: var(--vp-c-bg-soft);
}

:deep(.dark) textarea,
:deep(.dark) select {
  background: var(--vp-c-bg);
}
</style> 