---
title: HTML 实体转换工具
description: 在线HTML实体编码解码工具，支持特殊字符与HTML实体的互相转换
---

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const outputText = ref('')
const mode = ref('encode')

// HTML实体映射表
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
  '¢': '&cent;',
  '£': '&pound;',
  '¥': '&yen;',
  '€': '&euro;',
  '©': '&copy;',
  '®': '&reg;',
  '™': '&trade;',
  ' ': '&nbsp;'
}

// 反向映射表
const reverseEntityMap = Object.fromEntries(
  Object.entries(entityMap).map(([key, value]) => [value, key])
)

const handleConvert = () => {
  try {
    if (mode.value === 'encode') {
      outputText.value = inputText.value.replace(
        /[&<>"'¢£¥€©®™ ]/g,
        char => entityMap[char] || char
      )
    } else {
      outputText.value = inputText.value.replace(
        /&[a-zA-Z]+;|&#\d+;/g,
        entity => {
          if (reverseEntityMap[entity]) {
            return reverseEntityMap[entity]
          }
          // 处理数字实体
          if (entity.startsWith('&#')) {
            const num = entity.slice(2, -1)
            return String.fromCharCode(Number(num))
          }
          return entity
        }
      )
    }
  } catch (e) {
    outputText.value = '转换失败：' + e.message
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

const commonEntities = [
  { char: '&', entity: '&amp;', desc: '和号' },
  { char: '<', entity: '&lt;', desc: '小于号' },
  { char: '>', entity: '&gt;', desc: '大于号' },
  { char: '"', entity: '&quot;', desc: '引号' },
  { char: "'", entity: '&apos;', desc: '撇号' },
  { char: '©', entity: '&copy;', desc: '版权' },
  { char: '®', entity: '&reg;', desc: '注册商标' },
  { char: '™', entity: '&trade;', desc: '商标' },
  { char: ' ', entity: '&nbsp;', desc: '空格' }
]
</script>

# HTML 实体转换工具

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

  <div class="common-entities">
    <h3>常用HTML实体对照表</h3>
    <table>
      <thead>
        <tr>
          <th>字符</th>
          <th>实体</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in commonEntities" :key="item.entity">
          <td>{{ item.char }}</td>
          <td>{{ item.entity }}</td>
          <td>{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="input-area">
    <textarea
      v-model="inputText"
      :placeholder="mode === 'encode' ? '请输入要转换为HTML实体的文本' : '请输入要解码的HTML实体'"
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
/* 基础样式保持一致 */
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

/* 对照表样式 */
.common-entities {
  margin-bottom: 20px;
  overflow-x: auto;
}

.common-entities h3 {
  margin-bottom: 10px;
  font-size: 1.1em;
  color: var(--vp-c-text-1);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 0.9em;
}

th, td {
  padding: 8px 12px;
  text-align: left;
  border: 1px solid var(--vp-c-divider);
}

th {
  background: var(--vp-c-bg);
  font-weight: 600;
}

/* 输入输出区域样式 */
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

:deep(.dark) th {
  background: var(--vp-c-bg-mute);
}
</style> 