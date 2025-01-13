---
title: 图片转 Base64 工具
description: 在线图片转Base64编码工具，支持拖拽上传、预览和复制
---

<script setup>
import { ref } from 'vue'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const imagePreview = ref('')
const base64Output = ref('')
const dragActive = ref(false)
const fileInfo = ref(null)

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    validateAndProcessFile(file)
  }
}

const handleDrop = (event) => {
  event.preventDefault()
  dragActive.value = false
  
  const file = event.dataTransfer.files[0]
  if (file) {
    validateAndProcessFile(file)
  }
}

const handleDragOver = (event) => {
  event.preventDefault()
  dragActive.value = true
}

const handleDragLeave = () => {
  dragActive.value = false
}

const validateAndProcessFile = (file) => {
  // 检查文件类型
  if (!file.type.startsWith('image/')) {
    alert('请选择图片文件')
    return
  }

  // 检查文件大小
  if (file.size > MAX_FILE_SIZE) {
    alert(`文件大小不能超过 ${MAX_FILE_SIZE / 1024 / 1024}MB`)
    return
  }

  processFile(file)
}

const formatFileSize = (bytes) => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

const processFile = (file) => {
  fileInfo.value = {
    name: file.name,
    size: formatFileSize(file.size),
    type: file.type,
    sizeRaw: file.size
  }

  const reader = new FileReader()
  
  reader.onload = (e) => {
    imagePreview.value = e.target.result
    base64Output.value = e.target.result
  }
  
  reader.onerror = () => {
    alert('读取文件失败')
  }
  
  reader.readAsDataURL(file)
}

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(base64Output.value)
    alert('已复制到剪贴板')
  } catch (e) {
    alert('复制失败，请手动复制')
  }
}

const handleClear = () => {
  imagePreview.value = ''
  base64Output.value = ''
  fileInfo.value = null
}
</script>

# 图片转 Base64 工具

<div class="tool-container">
  <div class="tool-info">
    <div class="info-item">
      <span class="info-icon">ℹ️</span>
      <span>文件大小限制：{{ formatFileSize(MAX_FILE_SIZE) }}</span>
    </div>
    <div class="info-item">
      <span class="info-icon">✓</span>
      <span>支持格式：JPG、PNG、GIF、WebP、SVG</span>
    </div>
  </div>

  <div class="upload-area" 
    :class="{ active: dragActive }"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
  >
    <input 
      type="file" 
      accept="image/*" 
      @change="handleFileSelect"
      class="file-input"
    >
    <div class="upload-content">
      <div class="upload-icon">📁</div>
      <p>点击或拖拽图片到此处</p>
      <p class="upload-tip">
        文件大小不超过 {{ formatFileSize(MAX_FILE_SIZE) }}
      </p>
    </div>
  </div>

  <div v-if="fileInfo" class="file-info">
    <h3>文件信息</h3>
    <p>文件名：{{ fileInfo.name }}</p>
    <p>大小：{{ fileInfo.size }}</p>
    <p>类型：{{ fileInfo.type }}</p>
    <div 
      class="size-warning" 
      v-if="fileInfo.sizeRaw > MAX_FILE_SIZE * 0.8"
    >
      <span class="warning-icon">⚠️</span>
      <span>文件较大，建议压缩后使用</span>
    </div>
  </div>

  <div v-if="imagePreview" class="preview-area">
    <h3>图片预览</h3>
    <img :src="imagePreview" alt="预览图">
  </div>

  <div v-if="base64Output" class="output-area">
    <h3>Base64 输出</h3>
    <div class="output-actions">
      <button @click="handleCopy">复制 Base64</button>
      <button @click="handleClear">清空</button>
    </div>
    <textarea
      v-model="base64Output"
      readonly
      placeholder="Base64编码将显示在这里"
    ></textarea>
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

.upload-area {
  position: relative;
  padding: 40px;
  border: 2px dashed var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  text-align: center;
  transition: all 0.3s;
  margin-bottom: 20px;
}

.upload-area.active {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.upload-content {
  pointer-events: none;
}

.upload-icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.upload-tip {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  margin-top: 5px;
}

.file-info {
  margin: 20px 0;
  padding: 15px;
  background: var(--vp-c-bg);
  border-radius: 6px;
}

.file-info h3 {
  margin-bottom: 10px;
  font-size: 1.1em;
  color: var(--vp-c-text-1);
}

.file-info p {
  margin: 5px 0;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.preview-area {
  margin: 20px 0;
}

.preview-area h3 {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.preview-area img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}

.output-area {
  margin: 20px 0;
}

.output-area h3 {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.output-actions {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
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
  font-size: 0.9em;
  resize: vertical;
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

/* Dark mode optimization */
:deep(.dark) .tool-container {
  background: var(--vp-c-bg-soft);
}

:deep(.dark) .upload-area,
:deep(.dark) .file-info,
:deep(.dark) textarea {
  background: var(--vp-c-bg);
}

.tool-info {
  margin-bottom: 20px;
  padding: 15px;
  background: var(--vp-c-bg);
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px 0;
  font-size: 0.9em;
}

.info-icon {
  font-size: 1.1em;
}

.size-warning {
  margin-top: 10px;
  padding: 8px;
  background: var(--vp-c-warning-soft);
  border-radius: 4px;
  color: var(--vp-c-warning);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
}

.warning-icon {
  font-size: 1.1em;
}
</style> 