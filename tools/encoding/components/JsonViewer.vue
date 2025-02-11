<!-- components/JsonViewer.vue -->
<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  value: {
    type: [Object, Array],
    required: true
  },
  indent: {
    type: Number,
    default: 2
  }
})

const searchText = ref('')
const currentMatchIndex = ref(0)
const matchCount = ref(0)
const contentRef = ref(null)
const expandedNodes = ref(new Set(['root']))

// 格式化节点
const formattedNodes = computed(() => {
  const nodes = []
  const format = (value, key = null, path = 'root', level = 0, isLast = true) => {
    const isObject = value && typeof value === 'object'
    const isArray = Array.isArray(value)
    const expanded = expandedNodes.value.has(path)
    
    if (isObject) {
      const entries = Object.entries(value)
      const prefix = isArray ? '[' : '{'
      const suffix = isArray ? ']' : '}'
      
      nodes.push({
        indent: level,
        key: key,
        value: prefix,
        collapsible: true,
        expanded,
        path,
        valueClass: 'json-bracket'
      })
      
      if (expanded) {
        entries.forEach(([entryKey, val], index) => {
          format(val, entryKey, `${path}.${entryKey}`, level + 1, index === entries.length - 1)
        })
      }
      
      nodes.push({
        indent: level,
        value: suffix + (isLast ? '' : ','),
        valueClass: 'json-bracket'
      })
    } else {
      nodes.push({
        indent: level,
        key: key,
        value: formatValue(value) + (isLast ? '' : ','),
        valueClass: getValueClass(value)
      })
    }
  }
  
  format(props.value)
  return nodes
})

// 搜索相关
const handleSearch = () => {
  if (!searchText.value) {
    matchCount.value = 0
    currentMatchIndex.value = 0
    return
  }
  
  const matches = formattedNodes.value.filter(node => 
    node.value?.toString().toLowerCase().includes(searchText.value.toLowerCase())
  )
  matchCount.value = matches.length
  scrollToMatch()
}

const scrollToMatch = () => {
  if (matchCount.value === 0) return
  
  const matches = contentRef.value.querySelectorAll('.highlight')
  if (matches[currentMatchIndex.value]) {
    matches[currentMatchIndex.value].scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}

const nextMatch = () => {
  if (currentMatchIndex.value < matchCount.value - 1) {
    currentMatchIndex.value++
  } else {
    currentMatchIndex.value = 0
  }
  scrollToMatch()
}

const prevMatch = () => {
  if (currentMatchIndex.value > 0) {
    currentMatchIndex.value--
  } else {
    currentMatchIndex.value = matchCount.value - 1
  }
  scrollToMatch()
}

// 展开/折叠相关
const toggleNode = (node) => {
  if (expandedNodes.value.has(node.path)) {
    expandedNodes.value.delete(node.path)
  } else {
    expandedNodes.value.add(node.path)
  }
}

const expandAll = () => {
  const paths = getAllPaths(props.value)
  expandedNodes.value = new Set(paths)
}

const collapseAll = () => {
  expandedNodes.value = new Set(['root'])
}

// 辅助函数
function getAllPaths(obj, path = 'root', paths = []) {
  paths.push(path)
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(key => {
      getAllPaths(obj[key], `${path}.${key}`, paths)
    })
  }
  return paths
}

function formatValue(value) {
  if (typeof value === 'string') return `"${value}"`
  if (value === null) return 'null'
  return String(value)
}

function getValueClass(value) {
  if (value === null) return 'json-null'
  if (typeof value === 'string') return 'json-string'
  if (typeof value === 'number') return 'json-number'
  if (typeof value === 'boolean') return 'json-boolean'
  return ''
}

function isHighlighted(node) {
  return searchText.value && 
    node.value?.toString().toLowerCase().includes(searchText.value.toLowerCase())
}
</script>

<template>
  <div class="json-viewer">
    <div class="json-toolbar">
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchText"
          placeholder="搜索..."
          @input="handleSearch"
        >
        <span v-if="matchCount > 0" class="match-count">
          {{ currentMatchIndex + 1 }}/{{ matchCount }}
        </span>
        <button 
          v-if="searchText" 
          class="nav-btn" 
          @click="prevMatch"
          title="上一个"
        >↑</button>
        <button 
          v-if="searchText" 
          class="nav-btn" 
          @click="nextMatch"
          title="下一个"
        >↓</button>
      </div>
      <div class="actions">
        <button @click="expandAll" title="展开全部">
          <span class="icon">⊞</span>
        </button>
        <button @click="collapseAll" title="折叠全部">
          <span class="icon">⊟</span>
        </button>
      </div>
    </div>
    <div class="json-content" ref="contentRef">
      <div v-for="(node, index) in formattedNodes" :key="index" class="json-line">
        <span 
          v-if="node.collapsible" 
          class="toggle"
          @click="toggleNode(node)"
        >
          {{ node.expanded ? '▼' : '▶' }}
        </span>
        <span 
          v-else 
          class="toggle-placeholder"
        ></span>
        <span 
          class="line-content"
          :class="{
            'highlight': isHighlighted(node),
            'collapsed': !node.expanded && node.collapsible
          }"
          :style="{ paddingLeft: node.indent * 20 + 'px' }"
        >
          <template v-if="node.key">
            <span class="json-key">"{{ node.key }}":</span>
          </template>
          <span :class="node.valueClass">{{ node.value }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.json-viewer {
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  background: var(--vp-c-bg);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.json-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 4px;
}

.search-box input {
  padding: 4px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 13px;
}

.match-count {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.nav-btn {
  padding: 2px 6px;
  font-size: 12px;
}

.json-content {
  flex: 1;
  overflow: auto;
  padding: 16px;
}

.json-line {
  display: flex;
  align-items: flex-start;
}

.toggle {
  width: 20px;
  cursor: pointer;
  user-select: none;
  color: var(--vp-c-text-2);
}

.toggle:hover {
  color: var(--vp-c-text-1);
}

.toggle-placeholder {
  width: 20px;
}

.line-content {
  flex: 1;
  white-space: pre;
  display: flex;
  align-items: flex-start;
}

.highlight {
  background: var(--vp-c-yellow-soft);
  border-radius: 2px;
}

.json-key {
  color: var(--vp-c-brand);
  margin-right: 8px;
}

.json-string { color: #690; }
.json-number { color: #905; }
.json-boolean { color: #219; }
.json-null { color: #999; }
.json-bracket { color: var(--vp-c-text-1); }

/* 暗色主题适配 */
:root.dark .json-viewer {
  .json-string { color: #b5cea8; }
  .json-number { color: #ce9178; }
  .json-boolean { color: #569cd6; }
  .json-null { color: #d16969; }
  .highlight { background: var(--vp-c-yellow-darker); }
}
</style>