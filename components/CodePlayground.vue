<template>
  <div class="playground-wrapper">
    <div class="playground-container">
      <div class="editor-section">
        <div class="editor-header">
          <div class="tabs">
            <button 
              v-for="tab in tabs" 
              :key="tab"
              :class="['tab-btn', { active: currentTab === tab }]"
              @click="currentTab = tab"
            >
              {{ tab }}
            </button>
          </div>
          <button class="run-btn" @click="runCode">
            <span class="run-icon">▶</span>
            运行
          </button>
        </div>
        <div class="editor-content">
          <div v-for="tab in tabs" 
               :key="tab" 
               :class="['editor', { 'editor-active': currentTab === tab }]"
          >
            <Codemirror
              v-show="currentTab === tab"
              :value="getCodeByTab(tab)"
              @change="(value) => handleCodeUpdate(tab, value)"
              :extensions="getExtensionsByTab(tab)"
              :style="{ height: '100%' }"
              :theme="editorTheme"
            />
          </div>
        </div>
      </div>
      <div class="preview-wrapper">
        <div class="preview-section">
          <iframe ref="previewFrame" sandbox="allow-scripts allow-same-origin"></iframe>
        </div>
        <div class="console-section">
          <div class="console-header">
            <span>控制台</span>
            <button class="clear-btn" @click="clearConsole">清除</button>
          </div>
          <div class="console-content" ref="consoleContent">
            <div v-for="(log, index) in consoleLogs" 
                 :key="index" 
                 :class="['console-item', `console-${log.type}`]">
              <span class="console-time">{{ log.time }}</span>
              <pre class="console-message">{{ log.message }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { 
  EditorView,
  lineNumbers
} from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import {
  defaultKeymap,
  history,
  historyKeymap,
} from '@codemirror/commands'
import {
  syntaxHighlighting,
  defaultHighlightStyle,
  indentOnInput,
  bracketMatching,
  foldGutter,
} from '@codemirror/language'
import { basicSetup } from 'codemirror'
import { oneDark } from '@codemirror/theme-one-dark'

const tabs = ['HTML', 'CSS', 'JavaScript']
const currentTab = ref('HTML')
const htmlCode = ref('<div class="container">\n  <h1>Hello World</h1>\n</div>')
const cssCode = ref('.container {\n  text-align: center;\n}')
const jsCode = ref('console.log("Hello from JavaScript!");')
const previewFrame = ref(null)

const editorTheme = oneDark

const createTheme = () => {
  const isDark = document.documentElement.classList.contains('dark')
  return EditorView.theme({
    '&': {
      backgroundColor: 'var(--vp-c-bg)',
      color: 'var(--vp-c-text-1)',
      height: '100%'
    },
    '.cm-content': {
      caretColor: 'var(--vp-c-brand)',
      fontFamily: 'var(--vp-font-family-mono)',
      fontSize: '14px',
      lineHeight: '1.6'
    },
    '.cm-cursor': {
      borderLeftColor: 'var(--vp-c-brand)',
      borderLeftWidth: '2px'
    },
    '.cm-activeLine': {
      backgroundColor: 'var(--vp-c-bg-mute)'
    },
    '.cm-gutters': {
      backgroundColor: 'var(--vp-c-bg-soft)',
      color: 'var(--vp-c-text-2)',
      border: 'none',
      borderRight: '1px solid var(--vp-c-divider)'
    },
    '.cm-activeLineGutter': {
      backgroundColor: 'var(--vp-c-bg-mute)',
      color: 'var(--vp-c-text-1)'
    },
    '.cm-lineNumbers': {
      color: 'var(--vp-c-text-2)'
    },
    '.cm-selectionBackground': {
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
    },
    '.cm-matchingBracket': {
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      color: 'var(--vp-c-text-1) !important',
      borderBottom: '1px solid var(--vp-c-brand)'
    },
    // 语法高亮
    '.cm-keyword': { color: 'var(--vp-c-brand)' },
    '.cm-operator': { color: 'var(--vp-c-text-1)' },
    '.cm-variable': { color: 'var(--vp-c-text-1)' },
    '.cm-variable-2': { color: 'var(--vp-c-brand-light)' },
    '.cm-string': { color: 'var(--vp-c-green)' },
    '.cm-number': { color: 'var(--vp-c-orange)' },
    '.cm-boolean': { color: 'var(--vp-c-brand)' },
    '.cm-comment': { color: 'var(--vp-c-text-2)', fontStyle: 'italic' },
    '.cm-function': { color: 'var(--vp-c-yellow)' },
    '.cm-property': { color: 'var(--vp-c-brand-light)' }
  }, { dark: isDark })
}

const commonExtensions = [
  basicSetup,
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  bracketMatching(),
  foldGutter(),
  EditorView.lineWrapping,
  createTheme()
]

const htmlExtensions = [html(), ...commonExtensions]
const cssExtensions = [css(), ...commonExtensions]
const jsExtensions = [javascript(), ...commonExtensions]

const getCodeByTab = (tab) => {
  switch (tab) {
    case 'HTML': return htmlCode.value
    case 'CSS': return cssCode.value
    case 'JavaScript': return jsCode.value
    default: return ''
  }
}

const updateCodeByTab = (tab, value) => {
  switch (tab) {
    case 'HTML': 
      htmlCode.value = value
      break
    case 'CSS': 
      cssCode.value = value
      break
    case 'JavaScript': 
      jsCode.value = value
      break
  }
}

const getExtensionsByTab = (tab) => {
  switch (tab) {
    case 'HTML': return htmlExtensions
    case 'CSS': return cssExtensions
    case 'JavaScript': return jsExtensions
    default: return []
  }
}

const consoleLogs = ref([])
const consoleContent = ref(null)

const clearConsole = () => {
  consoleLogs.value = []
}

const formatTime = () => {
  const now = new Date()
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
}

let consoleTimer = null;

const runCode = () => {
  console.log('Running code:', {
    html: htmlCode.value,
    css: cssCode.value,
    js: jsCode.value
  })

  if (consoleTimer) {
    clearInterval(consoleTimer)
    consoleTimer = null
  }

  if (previewFrame.value?.src) {
    URL.revokeObjectURL(previewFrame.value.src)
  }

  clearConsole()

  const wrappedJS = `
    (function() {
      let consoleTimer;
      if (consoleTimer) {
        clearInterval(consoleTimer);
        consoleTimer = null;
      }
      const originalConsole = window.console;
      window.console = {
        log: (...args) => {
          originalConsole.log(...args);
          window.parent.postMessage({
            type: "log",
            message: args.map(arg => 
              typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(" ")
          }, "*");
        },
        error: (...args) => {
          originalConsole.error(...args);
          window.parent.postMessage({
            type: "error",
            message: args.map(arg => 
              typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(" ")
          }, "*");
        },
        warn: (...args) => {
          originalConsole.warn(...args);
          window.parent.postMessage({
            type: "warn",
            message: args.map(arg => 
              typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(" ")
          }, "*");
        }
      };
      try {
        ${jsCode.value}
      } catch (error) {
        console.error(error.message);
      }
    })();
  `;

  nextTick(() => {
    const combinedCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            ${cssCode.value}
          </style>
        </head>
        <body>
          ${htmlCode.value}
          <script>${wrappedJS}<\/script>
        </body>
      </html>
    `.trim();

    const blob = new Blob([combinedCode], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    
    if (previewFrame.value) {
      previewFrame.value.src = url
    }
  })
}

const handleCodeUpdate = (tab, value) => {
  console.log('Code updated:', tab, value)
  switch (tab) {
    case 'HTML': 
      htmlCode.value = value
      break
    case 'CSS': 
      cssCode.value = value
      break
    case 'JavaScript': 
      jsCode.value = value
      break
  }
}

watch([htmlCode, cssCode, jsCode], () => {
  console.log('Code changed:', {
    html: htmlCode.value,
    css: cssCode.value,
    js: jsCode.value
  })
}, { deep: true })

const props = defineProps({
  initialCodes: {
    type: String,
    default: '{}',
  }
})

const initCodes = () => {
  try {
    const codes = JSON.parse(props.initialCodes)
    htmlCode.value = codes.html || '<div class="container">\n  <h1>Hello World</h1>\n</div>'
    cssCode.value = codes.css || '.container {\n  text-align: center;\n}'
    jsCode.value = codes.js || 'console.log("Hello from JavaScript!");'
  } catch (e) {
    console.error('Failed to parse initial codes:', e)
  }
}

onMounted(() => {
  initCodes()
  runCode()

  const messageHandler = (event) => {
    if (!event.data || !event.data.type) return;
    
    consoleLogs.value.push({
      type: event.data.type,
      message: event.data.message,
      time: formatTime()
    })
    if (consoleLogs.value.length > 100) {
      consoleLogs.value = consoleLogs.value.slice(-100)
    }
    nextTick(() => {
      if (consoleContent.value) {
        consoleContent.value.scrollTop = consoleContent.value.scrollHeight
      }
    })
  }

  window.addEventListener('message', messageHandler)

  onUnmounted(() => {
    window.removeEventListener('message', messageHandler)
    if (consoleTimer) {
      clearInterval(consoleTimer)
    }
  })
})
</script>

<style scoped>
.playground-wrapper {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-c-bg);
  z-index: 100;
}

.playground-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.editor-section {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--vp-c-shadow);
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: var(--vp-c-bg-mute);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tabs {
  display: flex;
  gap: 0.5rem;
}

.tab-btn {
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: var(--vp-c-text-1);
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.tab-btn:hover {
  background: var(--vp-c-bg-mute);
  opacity: 0.9;
}

.tab-btn.active {
  opacity: 1;
  background: var(--vp-c-bg-mute);
  border-bottom: 2px solid var(--vp-c-brand);
}

.run-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand);
  border: none;
  border-radius: 4px;
  color: var(--vp-c-white);
  cursor: pointer;
  transition: background 0.3s ease;
}

.run-btn:hover {
  background: var(--vp-c-brand-light);
}

.run-icon {
  font-size: 0.8rem;
}

.editor-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.editor {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.editor-active {
  opacity: 1;
  pointer-events: auto;
}

.preview-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow: hidden;
}

.preview-section {
  flex: 2;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px var(--vp-c-shadow);
  min-height: 0;
  border: 1px solid var(--vp-c-divider);
}

.preview-section iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
}

.console-section {
  flex: 1;
  min-height: 150px;
  max-height: 30vh;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px var(--vp-c-shadow);
}

.console-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-mute);
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.clear-btn {
  padding: 0.25rem 0.75rem;
  background: var(--vp-c-bg-mute);
  border: none;
  border-radius: 4px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  user-select: none;
}

.clear-btn:hover {
  background: var(--vp-c-bg-alt);
}

.clear-btn:active {
  transform: translateY(0);
}

.console-content {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

.console-content::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.console-content::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
}

.console-content::-webkit-scrollbar-thumb {
  background: var(--vp-c-text-3);
  border-radius: 3px;
}

.console-content::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-text-2);
}

.console-item {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.25rem;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  background: var(--vp-c-bg-soft);
}

.console-time {
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  white-space: nowrap;
  user-select: none;
}

.console-message {
  margin: 0;
  color: var(--vp-c-text-1);
  white-space: pre-wrap;
  word-break: break-word;
  flex: 1;
  font-size: 0.875rem;
}

.console-log {
  border-left: 3px solid var(--vp-c-text-3);
}

.console-error {
  background: var(--vp-c-danger-dimm);
  border-left: 3px solid var(--vp-c-danger);
}

.console-warn {
  background: var(--vp-c-warning-dimm);
  border-left: 3px solid var(--vp-c-warning);
}

.console-error .console-message {
  color: var(--vp-c-danger);
}

.console-warn .console-message {
  color: var(--vp-c-warning);
}

/* 编辑器选中文本的样式 */
::selection {
  background: var(--vp-c-brand-dimm);
  color: var(--vp-c-text-1);
}

/* 编辑器滚动条样式 */
:deep(.cm-scroller::-webkit-scrollbar) {
  width: 6px;
  height: 6px;
}

:deep(.cm-scroller::-webkit-scrollbar-track) {
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
}

:deep(.cm-scroller::-webkit-scrollbar-thumb) {
  background: var(--vp-c-text-3);
  border-radius: 3px;
}

:deep(.cm-scroller::-webkit-scrollbar-thumb:hover) {
  background: var(--vp-c-text-2);
}

/* 在暗色主题下调整预览区域的背景色 */
:root.dark .preview-section {
  background: #fff;
}

/* 响应式布局优化 */
@media (max-width: 768px) {
  .playground-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .preview-section {
    min-height: 300px;
  }

  .console-section {
    min-height: 120px;
    max-height: 25vh;
  }
}
</style> 