---
layout: doc
---

<script setup>
import { ref, onMounted } from 'vue'
import MonacoEditor from './components/MonacoEditor.vue'

const code = ref('')
const files = ref([])
const currentFile = ref(null)
const fileTree = ref([])
const consoleOutput = ref([])
const previewUrl = ref('')
const activeTab = ref('editor') // 'editor', 'preview', 'console'
const showCreateModal = ref(false)
const newFileName = ref('')
const isCreatingFolder = ref(false)
const currentPath = ref('') // 当前选中的路径
const isPreviewLoading = ref(false)
const previewError = ref(null)

// 处理文件夹选择
const handleFolderSelect = async (event) => {
  const items = event.target.files
  fileTree.value = []
  
  for (let item of items) {
    const path = item.webkitRelativePath || item.name
    const pathParts = path.split('/')
    
    let currentLevel = fileTree.value
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i]
      const isFile = i === pathParts.length - 1
      
      let node = currentLevel.find(n => n.name === part)
      if (!node) {
        node = {
          name: part,
          isFile,
          content: isFile ? await item.text() : null,
          children: isFile ? null : []
        }
        currentLevel.push(node)
      }
      if (!isFile) {
        currentLevel = node.children
      }
    }
  }
}

// 打开文件
const openFile = (file) => {
  if (file.isFile) {
    currentFile.value = file
    code.value = file.content
  }
}

// 保存当前文件
const saveFile = () => {
  if (currentFile.value) {
    currentFile.value.content = code.value
  }
  const blob = new Blob([code.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = currentFile.value?.name || 'code.txt'
  a.click()
  URL.revokeObjectURL(url)
}

// 控制台输出处理
const handleConsoleOutput = (type, ...args) => {
  consoleOutput.value.push({
    type,
    content: args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' '),
    timestamp: new Date().toLocaleTimeString()
  })
}

// 运行代码
const runCode = () => {
  try {
    previewError.value = null
    consoleOutput.value = []
    isPreviewLoading.value = true
    
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
    
    const script = `
      <script>
        console.log = (...args) => window.parent.postMessage({ type: 'log', args }, '*');
        console.error = (...args) => window.parent.postMessage({ type: 'error', args }, '*');
        console.warn = (...args) => window.parent.postMessage({ type: 'warn', args }, '*');
        console.info = (...args) => window.parent.postMessage({ type: 'info', args }, '*');
        
        try {
          ${code.value}
        } catch (error) {
          console.error(error.message);
        }
      <\/script>
    `
    
    previewUrl.value = URL.createObjectURL(new Blob([script], { type: 'text/html' }))
    
    window.addEventListener('message', (event) => {
      if (event.data.type) {
        handleConsoleOutput(event.data.type, ...event.data.args)
      }
    })
    
    document.body.removeChild(iframe)
  } catch (error) {
    previewError.value = error.message
    handleConsoleOutput('error', error.message)
  } finally {
    setTimeout(() => {
      isPreviewLoading.value = false
    }, 500)
  }
}

// 创建文件或文件夹
const createFileOrFolder = () => {
  if (!newFileName.value.trim()) return
  
  // 只允许创建文件,移除文件夹选项
  const newItem = {
    name: newFileName.value,
    isFile: true,
    content: '',
    children: null
  }
  
  // 如果有选中的路径,添加到对应文件夹
  if (currentPath.value) {
    const pathParts = currentPath.value.split('/')
    let current = fileTree.value
    
    // 遍历到目标文件夹
    for (const part of pathParts) {
      const folder = current.find(item => item.name === part && !item.isFile)
      if (folder) {
        current = folder.children
      }
    }
    current.push(newItem)
  } else {
    // 添加到根目录
    fileTree.value.push(newItem)
  }
  
  // 重置状态
  showCreateModal.value = false
  newFileName.value = ''
}

// 处理文件夹选择
const handleItemClick = (item, path) => {
  if (item.isFile) {
    currentFile.value = item
    code.value = item.content
  } else {
    currentPath.value = path
  }
}

// 删除文件或文件夹
const deleteItem = (item, parentArray) => {
  const index = parentArray.indexOf(item)
  if (index > -1) {
    parentArray.splice(index, 1)
    if (currentFile.value === item) {
      currentFile.value = null
      code.value = ''
    }
  }
}
</script>

  <div class="editor-wrapper">
    <div class="editor-layout">
      <!-- 左侧文件树 -->
      <div class="sidebar">
        <div class="folder-actions">
          <div class="create-actions">
            <button class="create-btn" @click="showCreateModal = true">
              <span class="btn-icon">+</span>
              <span class="btn-text">新建</span>
            </button>
          </div>
        </div>
        <div class="file-tree">
          <template v-for="item in fileTree" :key="item.name">
            <div class="tree-item-wrapper">
              <div 
                :class="['tree-item', { 'is-file': item.isFile }]"
                @click="handleItemClick(item, item.name)"
              >
                <span class="item-icon">{{ item.isFile ? '📄' : '📁' }}</span>
                <span class="item-name">{{ item.name }}</span>
                <button 
                  class="delete-btn"
                  @click.stop="deleteItem(item, fileTree)"
                >×</button>
              </div>
              <template v-if="item.children">
                <div 
                  v-for="child in item.children" 
                  :key="child.name"
                  class="tree-item-wrapper"
                >
                  <div 
                    :class="['tree-item', 'tree-child', { 'is-file': child.isFile }]"
                    @click="handleItemClick(child, `${item.name}/${child.name}`)"
                  >
                    <span class="item-icon">{{ child.isFile ? '📄' : '📁' }}</span>
                    <span class="item-name">{{ child.name }}</span>
                    <button 
                      class="delete-btn"
                      @click.stop="deleteItem(child, item.children)"
                    >×</button>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
        <!-- 创建文件/文件夹模态框 -->
        <div v-if="showCreateModal" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-header">
              <h3>新建文件</h3>
              <button class="close-btn" @click="showCreateModal = false">×</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>文件名:</label>
                <input 
                  v-model="newFileName"
                  placeholder="输入文件名"
                  @keyup.enter="createFileOrFolder"
                >
              </div>
            </div>
            <div class="modal-footer">
              <button class="cancel-btn" @click="showCreateModal = false">取消</button>
              <button class="confirm-btn" @click="createFileOrFolder">确认</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 主要内容区域 -->
      <div class="main-container">
        <div class="toolbar">
          <button @click="saveFile" :disabled="!currentFile">保存文件</button>
          <button 
            v-if="isHtmlFile"
            @click="runCode"
          >运行代码</button>
          <span v-if="currentFile" class="current-file">
            当前文件: {{ currentFile.name }}
          </span>
        </div>
        <div class="content-layout">
          <!-- 左侧编辑器 -->
          <div class="editor-section">
            <div class="section-header">编辑器</div>
            <div class="monaco-container">
              <MonacoEditor
                v-model="code"
                language="javascript"
                theme="vs-dark"
                :options="{
                  minimap: { enabled: true },
                  fontSize: 14,
                  lineNumbers: 'on',
                  automaticLayout: true,
                  scrollBeyondLastLine: false
                }"
              />
            </div>
          </div>
          <!-- 右侧区域 -->
          <div v-if="isHtmlFile" class="preview-console-section">
            <!-- 预览窗口 -->
            <div class="preview-section">
              <div class="section-header">
                <span>预览</span>
                <div class="header-actions">
                  <button class="icon-button" @click="refreshPreview" title="刷新预览">
                    <span class="icon">🔄</span>
                  </button>
                </div>
              </div>
              <div class="preview-container">
                <div v-if="isPreviewLoading" class="preview-loading">
                  <span class="loading-spinner"></span>
                  <span>加载中...</span>
                </div>
                <iframe
                  v-if="previewUrl"
                  :src="previewUrl"
                  class="preview-iframe"
                  sandbox="allow-scripts allow-same-origin"
                  @load="isPreviewLoading = false"
                ></iframe>
                <div v-if="previewError" class="preview-error">
                  {{ previewError }}
                </div>
              </div>
            </div>
            <!-- 控制台输出 -->
            <div class="console-section">
              <div class="section-header">
                <span>控制台</span>
                <div class="header-actions">
                  <button 
                    class="icon-button" 
                    @click="clearConsole" 
                    title="清空控制台"
                    :disabled="!consoleOutput.length"
                  >
                    <span class="icon">🗑️</span>
                  </button>
                </div>
              </div>
              <div class="console-output">
                <div
                  v-for="(log, index) in consoleOutput"
                  :key="index"
                  :class="['console-item', log.type]"
                >
                  <span class="timestamp">{{ log.timestamp }}</span>
                  <span class="content">{{ log.content }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<style scoped>
/* 重置 VitePress 默认样式 */
.VPDoc {
  padding: 0 !important;
  max-width: none !important;
}

.VPDoc .content {
  max-width: none !important;
  padding: 0 !important;
}

.VPContent {
  padding: 0 !important;
}

.VPDoc.has-aside .content-container {
  max-width: none !important;
}

.aside {
  display: none !important;
}

/* 编辑器样式 */
.editor-wrapper {
  width: 100vw;
  /* 减去导航栏高度 */
  height: calc(100vh - var(--vp-nav-height));
  position: fixed;
  top: var(--vp-nav-height); /* 确保在导航栏下方 */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10; /* 降低 z-index，确保导航栏在上层 */
  background: #1e1e1e;
}

.editor-layout {
  width: 100%;
  height: 100%;
  margin: 0;
  border: none;
  display: flex;
}

.sidebar {
  width: 280px;
  background: #252526;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
}

.toolbar {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #252526;
  border-bottom: 1px solid #333;
  gap: 12px;
}

.tab-buttons {
  margin-left: auto;
  display: flex;
  gap: 4px;
}

.tab-btn {
  padding: 6px 12px;
  background: #2d2d2d;
  border: 1px solid #404040;
  color: #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.tab-btn.active {
  background: #0066b8;
  border-color: #0077d4;
  color: white;
}

.content-container {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
}

.panel.active {
  display: block;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

.console-panel {
  background: #1e1e1e;
  color: #fff;
}

.console-output {
  height: 100%;
  overflow-y: auto;
  padding: 12px;
  font-family: monospace;
}

.console-item {
  padding: 4px 8px;
  border-bottom: 1px solid #333;
  white-space: pre-wrap;
}

.console-item .timestamp {
  color: #666;
  margin-right: 8px;
  font-size: 0.9em;
}

.console-item.error {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

.console-item.warn {
  color: #ffd93d;
  background: rgba(255, 217, 61, 0.1);
}

.console-item.info {
  color: #4dabf7;
  background: rgba(77, 171, 247, 0.1);
}

/* 响应式布局优化 */
@media (max-width: 768px) {
  .editor-wrapper {
    height: calc(100vh - var(--vp-nav-height));
  }
  
  .sidebar {
    width: 240px;
  }
}

@media (max-width: 640px) {
  .editor-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: 200px;
  }
  
  .editor-container {
    height: calc(100% - 200px);
  }
}

/* 处理移动设备上的安全区域 */
@supports (padding: env(safe-area-inset-bottom)) {
  .editor-wrapper {
    padding-bottom: env(safe-area-inset-bottom);
  }
}

.folder-actions {
  padding: 12px;
  border-bottom: 1px solid #333;
}

.create-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: linear-gradient(180deg, #2c2c2c 0%, #252525 100%);
  border: 1px solid #404040;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.create-btn:hover {
  background: linear-gradient(180deg, #333333 0%, #2c2c2c 100%);
  border-color: #505050;
}

.btn-icon {
  font-size: 16px;
}

.btn-text {
  flex: 1;
  text-align: center;
}

.file-tree {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.tree-item {
  padding: 6px 12px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.tree-item:hover {
  background: #2a2a2a;
}

.tree-child {
  padding-left: 28px;
}

.item-icon {
  margin-right: 8px;
}

.toolbar button {
  background: #0066b8;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.toolbar button:hover {
  background: #0077d4;
}

.toolbar button:disabled {
  background: #444;
  cursor: not-allowed;
}

.current-file {
  color: #9d9d9d;
  font-size: 14px;
}

/* 添加导航栏样式确保其始终在顶层 */
:root {
  --vp-nav-height: 55px; /* 确保与 VitePress 导航栏高度一致 */
}

.VPNav {
  z-index: 100 !important; /* 确保导航栏在最上层 */
}

/* 新增样式 */
.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
}

.toolbar {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #252526;
  border-bottom: 1px solid #333;
  gap: 12px;
}

.tab-buttons {
  margin-left: auto;
  display: flex;
  gap: 4px;
}

.tab-btn {
  padding: 6px 12px;
  background: #2d2d2d;
  border: 1px solid #404040;
  color: #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.tab-btn.active {
  background: #0066b8;
  border-color: #0077d4;
  color: white;
}

.content-container {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
}

.panel.active {
  display: block;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

.console-panel {
  background: #1e1e1e;
  color: #fff;
}

.console-output {
  height: 100%;
  overflow-y: auto;
  padding: 12px;
  font-family: monospace;
}

.console-item {
  padding: 4px 8px;
  border-bottom: 1px solid #333;
  white-space: pre-wrap;
}

.console-item .timestamp {
  color: #666;
  margin-right: 8px;
  font-size: 0.9em;
}

.console-item.error {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

.console-item.warn {
  color: #ffd93d;
  background: rgba(255, 217, 61, 0.1);
}

.console-item.info {
  color: #4dabf7;
  background: rgba(77, 171, 247, 0.1);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .tab-buttons {
    flex-wrap: wrap;
  }
  
  .tab-btn {
    padding: 4px 8px;
    font-size: 12px;
  }
}

/* 新的布局样式 */
.content-layout {
  display: flex;
  flex: 1;
  min-height: 0;
  gap: 1px;
  background: #1e1e1e;
}

.editor-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #1e1e1e;
}

.preview-console-section {
  width: 40%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #333;
}

.preview-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #333;
}

.console-section {
  height: 40%;
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background: #252526;
  border-bottom: 1px solid #333;
  color: #fff;
  font-size: 12px;
}

.preview-iframe {
  flex: 1;
  border: none;
  background: white;
}

.console-output {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  line-height: 1.5;
}

.console-item {
  display: flex;
  gap: 8px;
  padding: 6px 12px;
  border-bottom: 1px solid #333;
}

.console-item .timestamp {
  flex-shrink: 0;
  color: #666;
  font-size: 0.9em;
}

.console-item .content {
  flex: 1;
  overflow-x: auto;
  white-space: pre-wrap;
  font-family: monospace;
}

/* 不同类型的日志样式 */
.console-item.error {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

.console-item.warn {
  color: #ffd93d;
  background: rgba(255, 217, 61, 0.1);
}

.console-item.info {
  color: #4dabf7;
  background: rgba(77, 171, 247, 0.1);
}

.console-item.log {
  color: #e9ecef;
}

/* 控制台头部样式 */
.header-actions {
  display: flex;
  gap: 4px;
}

.icon-button {
  padding: 4px 8px;
  background: none;
  border: none;
  color: #9d9d9d;
  cursor: pointer;
  transition: all 0.2s;
}

.icon-button:hover {
  color: #fff;
}

.icon-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 响应式布局 */
@media (max-width: 1024px) {
  .content-layout {
    flex-direction: column;
  }
  
  .preview-console-section {
    width: 100%;
    height: 50%;
    border-left: none;
    border-top: 1px solid #333;
  }
  
  .preview-section {
    height: 60%;
  }
  
  .console-section {
    height: 40%;
  }
}

/* 确保编辑器容器正确填充 */
.monaco-container {
  flex: 1;
  min-height: 0;
}

/* 工具栏样式优化 */
.toolbar {
  padding: 8px 12px;
  background: #252526;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar button {
  background: #0066b8;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.toolbar button:hover {
  background: #0077d4;
}

.current-file {
  color: #9d9d9d;
  font-size: 12px;
}

/* 新增样式 */
.create-actions {
  margin-top: 8px;
}

.create-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: #2c2c2c;
  border: 1px solid #404040;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.create-btn:hover {
  background: #333;
  border-color: #505050;
}

.tree-item-wrapper {
  position: relative;
}

.tree-item {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.2s;
}

.tree-item:hover {
  background: #2a2a2a;
}

.item-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.delete-btn {
  opacity: 0;
  padding: 2px 6px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}

.tree-item:hover .delete-btn {
  opacity: 1;
}

.delete-btn:hover {
  color: #ff4444;
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #2d2d2d;
  border-radius: 6px;
  width: 400px;
  max-width: 90%;
}

.modal-header {
  padding: 12px 16px;
  border-bottom: 1px solid #404040;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
  color: #fff;
  font-size: 16px;
}

.close-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  padding: 16px;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  color: #ccc;
}

.form-group input[type="text"] {
  width: 100%;
  padding: 8px;
  background: #1e1e1e;
  border: 1px solid #404040;
  border-radius: 4px;
  color: #fff;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.modal-footer {
  padding: 12px 16px;
  border-top: 1px solid #404040;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.modal-footer button {
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  background: #3a3a3a;
  border: 1px solid #404040;
  color: #ccc;
}

.confirm-btn {
  background: #0066b8;
  border: 1px solid #0077d4;
  color: #fff;
}

.confirm-btn:hover {
  background: #0077d4;
}

.file-type-hint {
  color: #ff6b6b;
  font-size: 0.9em;
  margin-left: 8px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button[title] {
  position: relative;
}

button[title]:hover::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: #333;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
}

/* 右侧区域布局 */
.right-section {
  width: 40%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #333;
}

.preview-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #333;
}

.console-section {
  height: 40%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
}

/* 当没有预览时,控制台占满右侧区域 */
.right-section:not(:has(.preview-section)) .console-section {
  height: 100%;
}

/* 运行按钮样式 */
.icon-button .icon {
  font-size: 14px;
}

/* 响应式布局调整 */
@media (max-width: 1024px) {
  .right-section {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .content-layout {
    flex-direction: column;
  }
  
  .right-section {
    width: 100%;
    height: 50%;
  }
  
  .preview-section {
    height: 60%;
  }
  
  .console-section {
    height: 40%;
  }
}
</style> 