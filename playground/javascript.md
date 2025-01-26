---
aside: false
---

# JavaScript Playground

<script setup>
import { ref, onMounted, shallowRef } from 'vue'
import * as monaco from 'monaco-editor'

// 配置 Monaco Editor 的 worker
if (typeof window !== 'undefined') {
  window.MonacoEnvironment = {
    getWorker(_, label) {
      const getWorkerModule = (moduleUrl) => {
        return new Worker(
          new URL(moduleUrl, import.meta.url),
          { type: 'module' }
        )
      }

      if (label === 'json') {
        return getWorkerModule('monaco-editor/esm/vs/language/json/json.worker')
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return getWorkerModule('monaco-editor/esm/vs/language/css/css.worker')
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return getWorkerModule('monaco-editor/esm/vs/language/html/html.worker')
      }
      if (label === 'typescript' || label === 'javascript') {
        return getWorkerModule('monaco-editor/esm/vs/language/typescript/ts.worker')
      }
      return getWorkerModule('monaco-editor/esm/vs/editor/editor.worker')
    }
  }
}

const editorContainer = ref(null)
const editor = shallowRef(null)
const output = ref('')
const error = ref('')
const loading = ref(false)

const defaultCode = `// 在这里编写你的 JavaScript 代码
function sayHello(name) {
  return \`Hello, \${name}!\`
}

console.log(sayHello('World'))`

// 加载示例代码
const loadExample = async (filename) => {
  loading.value = true
  try {
    const response = await fetch(`/playground-examples/${filename}`)
    if (!response.ok) throw new Error('Failed to load example')
    const code = await response.text()
    editor.value?.setValue(code)
    runCode()
  } catch (err) {
    error.value = 'Failed to load example: ' + err.message
  } finally {
    loading.value = false
  }
}

// 运行代码
const runCode = () => {
  try {
    output.value = ''
    error.value = ''
    const logs = []
    const originalLog = console.log
    console.log = (...args) => {
      logs.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '))
    }
    const code = editor.value?.getValue() || ''
    const result = new Function(code)()
    console.log = originalLog
    output.value = logs.join('\n')
  } catch (err) {
    error.value = err.toString()
  }
}

// 初始化编辑器
onMounted(() => {
  if (!editorContainer.value) return

  // 配置编辑器
  monaco.editor.defineTheme('funfe-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#1e1e1e',
    }
  })

  editor.value = monaco.editor.create(editorContainer.value, {
    value: defaultCode,
    language: 'javascript',
    theme: 'funfe-dark',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 14,
    fontFamily: "'Fira Code', monospace",
    tabSize: 2,
    automaticLayout: true,
    lineNumbers: 'on',
    roundedSelection: true,
    renderLineHighlight: 'all',
    padding: { top: 16, bottom: 16 },
    fixedOverflowWidgets: true
  })

  // 加载示例代码（如果URL中有指定）
  const urlParams = new URLSearchParams(window.location.search)
  const example = urlParams.get('example')
  if (example) {
    loadExample(example)
  } else {
    runCode()
  }
})
</script>

<div class="playground-container">
  <div class="editor-section">
    <div class="editor-header">
      <div class="header-left">
        <span>JavaScript Editor</span>
        <select 
          class="example-select" 
          :disabled="loading"
          @change="e => loadExample(e.target.value)"
        >
          <option value="">选择示例代码</option>
          <option value="hello.js">Hello World 示例</option>
          <option value="js-basics.js">JavaScript 基础示例</option>
          <option value="js-dom.js">DOM 操作示例</option>
        </select>
      </div>
      <button class="run-button" @click="runCode" :disabled="loading">
        {{ loading ? '加载中...' : '运行代码' }}
      </button>
    </div>
    <div ref="editorContainer" class="editor-container"></div>
  </div>
  
  <div class="output-section">
    <div class="output-header">
      <span>Console Output</span>
    </div>
    <div class="output-content">
      <pre v-if="output" class="output">{{ output }}</pre>
      <pre v-if="error" class="error">{{ error }}</pre>
    </div>
  </div>
</div>

<style>
.playground-container {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}

.editor-section,
.output-section {
  background: var(--vp-c-bg-soft);
  width: 100%;
}

.editor-header,
.output-header {
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-mute);
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.example-select {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 200px;
}

.example-select:hover,
.example-select:focus {
  border-color: var(--vp-c-brand);
  outline: none;
}

.run-button {
  padding: 4px 12px;
  border-radius: 4px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
}

.run-button:hover:not(:disabled) {
  background: var(--vp-c-brand-light);
  transform: translateY(-1px);
}

.run-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.editor-container {
  height: 300px;
  border-bottom: 1px solid var(--vp-c-divider);
  overflow: hidden;
}

.output-content {
  padding: 1rem;
  min-height: 100px;
  max-height: 200px;
  overflow: auto;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  background: var(--vp-c-bg-soft);
}

.output,
.error {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.error {
  color: #ff4d4f;
}

/* 春节主题适配 */
html.spring-festival-theme .run-button {
  background: var(--vp-button-brand-bg);
}

html.spring-festival-theme .run-button:hover:not(:disabled) {
  background: var(--vp-button-brand-hover-bg);
  box-shadow: 0 4px 12px rgba(255, 77, 79, 0.2);
}

html.spring-festival-theme .example-select:hover,
html.spring-festival-theme .example-select:focus {
  border-color: var(--vp-c-brand);
}
</style> 