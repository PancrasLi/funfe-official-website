---
title: JSON 格式化工具
description: 在线JSON格式化工具，支持JSON美化、压缩、校验等功能
---

<script setup>
import { ref, watch, computed } from 'vue'
import JsonViewer from './components/JsonViewer.vue'

const inputText = ref('')
const parsedJson = ref(null)
const indentSize = ref(2)
const mode = ref('format')
const isFullscreen = ref(false)
const errorMessage = ref('')

// 计算输出结果
const outputText = computed(() => {
  if (!parsedJson.value) return ''
  
  if (mode.value === 'format') {
    return JSON.stringify(parsedJson.value, null, Number(indentSize.value))
  } else if (mode.value === 'compress') {
    return JSON.stringify(parsedJson.value)
  } else {
    return '√ JSON 格式正确'
  }
})

// 监听输入变化，自动格式化
watch(inputText, (newValue) => {
  if (newValue.trim()) {
    handleFormat()
  } else {
    parsedJson.value = null
    errorMessage.value = ''
  }
}, { debounce: 300 })

// 监听模式变化，重新格式化
watch(mode, () => {
  if (inputText.value.trim()) {
    handleFormat()
  }
})

const handleFormat = () => {
  try {
    parsedJson.value = JSON.parse(inputText.value)
    errorMessage.value = ''
  } catch (e) {
    errorMessage.value = e.message
    parsedJson.value = null
  }
}

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(outputText.value)
    showToast('已复制到剪贴板')
  } catch (e) {
    showToast('复制失败，请手动复制', 'error')
  }
}

const handleClear = () => {
  inputText.value = ''
  parsedJson.value = null
  errorMessage.value = ''
}

// 添加提示框功能
const toast = ref({ show: false, message: '', type: 'success' })
const showToast = (message, type = 'success') => {
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
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

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}
</script>

# JSON 格式化工具

<div class="json-tool" :class="{ 'is-fullscreen': isFullscreen }">
  <div class="tool-header">
    <div class="mode-switch">
      <button 
        v-for="(label, key) in { format: '格式化', compress: '压缩', validate: '校验' }"
        :key="key"
        :class="{ active: mode === key }" 
        @click="mode = key"
      >
        {{ label }}
      </button>
    </div>
    <div class="tool-options" v-if="mode === 'format'">
      <label>缩进：</label>
      <select v-model="indentSize">
        <option value="2">2 空格</option>
        <option value="4">4 空格</option>
        <option value="8">8 空格</option>
      </select>
    </div>
    <div class="tool-actions">
      <button @click="handleClear" class="clear-btn" title="清空">
        <span class="icon">🗑️</span>
      </button>
      <button @click="toggleFullscreen" class="fullscreen-btn">
        {{ isFullscreen ? '退出全屏' : '全屏' }}
      </button>
    </div>
  </div>

  <div class="tool-body">
    <div class="input-panel">
      <div class="panel-header">
        <h3>输入 JSON</h3>
        <button class="sample-btn" @click="loadSample">加载示例</button>
      </div>
      <textarea
        v-model="inputText"
        placeholder="请输入 JSON 字符串..."
        class="json-input"
        :class="{ 'has-error': errorMessage }"
      ></textarea>
      <div v-if="errorMessage" class="error-message">
        ❌ {{ errorMessage }}
      </div>
    </div>
    <div class="output-panel">
      <div class="panel-header">
        <h3>输出结果</h3>
        <button 
          v-if="parsedJson" 
          class="copy-btn" 
          @click="handleCopy"
          title="复制到剪贴板"
        >
          📋 复制
        </button>
      </div>
      <template v-if="mode === 'format' && parsedJson">
        <JsonViewer
          :value="parsedJson"
          :indent="Number(indentSize)"
        />
      </template>
      <textarea
        v-else
        :value="outputText"
        readonly
        class="json-output"
        :placeholder="mode === 'validate' ? '验证结果将显示在这里' : '转换结果将显示在这里'"
      ></textarea>
    </div>
  </div>

  <!-- 添加提示框 -->
  <div 
    v-if="toast.show" 
    class="toast-message"
    :class="toast.type"
  >
    {{ toast.message }}
  </div>
</div>

<style scoped>
.json-tool {
  width: 100%;
  height: calc(100vh - 200px);
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.json-tool.is-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  border-radius: 0;
}

.tool-body {
  display: flex;
  flex: 1;
  gap: 16px;
  padding: 16px;
  overflow: hidden;
}

.input-panel,
.output-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.json-input,
.json-output {
  flex: 1;
  width: 100%;
  padding: 16px;
  border: none;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  background: transparent;
  resize: none;
}

.json-input:focus {
  outline: none;
}

.json-input.has-error {
  border-color: var(--vp-c-danger);
}

.mode-switch {
  display: flex;
  gap: 8px;
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
  font-size: 14px;
}

.tool-actions {
  display: flex;
  gap: 8px;
}

.clear-btn,
.copy-btn {
  padding: 4px 8px;
  font-size: 13px;
}

.sample-btn {
  padding: 4px 8px;
  font-size: 0.9em;
  background: var(--vp-c-bg);
}

/* Dark mode optimization */
:deep(.dark) .tool-container {
  background: var(--vp-c-bg-soft);
}

:deep(.dark) textarea,
:deep(.dark) select {
  background: var(--vp-c-bg);
}

/* 新增 JsonViewer 组件样式 */
:deep(.json-viewer) {
  flex: 1;
  overflow: auto;
  padding: 16px;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .tool-body {
    flex-direction: column;
  }
  
  .json-tool {
    height: auto;
  }

  .tool-header {
    flex-wrap: wrap;
  }

  .tool-options {
    width: 100%;
    order: 3;
    margin-top: 8px;
  }
}

/* 全屏模式优化 */
.is-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  border-radius: 0;
}

/* 按钮样式优化 */
button {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

/* 错误消息样式 */
.error-message {
  padding: 8px 16px;
  color: var(--vp-c-danger);
  background: var(--vp-c-danger-soft);
  font-size: 0.9em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

/* 提示框样式 */
.toast-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.toast-message.success {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
}

.toast-message.error {
  background: var(--vp-c-danger-soft);
  color: var(--vp-c-danger-dark);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, 20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
</style> 