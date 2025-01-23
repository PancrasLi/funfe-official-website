<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 编辑器状态
const editorMode = ref('blocks') // 'blocks' | 'code'
const codeContent = ref('')

// 角色状态
const sprite = ref({
  x: 0,
  y: 0,
  direction: 90,
  costume: '🐱',
  visible: true
})

// 运行状态
const isRunning = ref(false)

// 添加变量系统
const variables = ref([
  { name: 'score', value: 0 },
  { name: 'lives', value: 3 }
])

// 积木块定义
const blocks = [
  {
    category: '动作',
    color: '#4C97FF',
    items: [
      { id: 'move', text: '移动 [N] 步', params: [{ type: 'number', default: 10 }] },
      { id: 'turn', text: '旋转 [N] 度', params: [{ type: 'number', default: 90 }] },
      { id: 'goto', text: '移到 x: [X] y: [Y]', params: [{ type: 'number', default: 0 }, { type: 'number', default: 0 }] }
    ]
  },
  {
    category: '外观',
    color: '#9966FF',
    items: [
      { id: 'say', text: '说 [TEXT]', params: [{ type: 'text', default: '你好！' }] },
      { id: 'show', text: '显示' },
      { id: 'hide', text: '隐藏' },
      { id: 'change_costume', text: '换装扮为 [COSTUME]', params: [{ type: 'select', options: ['🐱', '🐶', '🐰', '🐸'], default: '🐱' }] }
    ]
  },
  {
    category: '控制',
    color: '#FFAB19',
    items: [
      { id: 'wait', text: '等待 [N] 秒', params: [{ type: 'number', default: 1 }] },
      { id: 'repeat', text: '重复 [N] 次', params: [{ type: 'number', default: 10 }] },
      { id: 'forever', text: '重复执行', isContainer: true },
      { id: 'if', text: '如果 [COND] 那么', params: [{ type: 'condition' }], isContainer: true },
      { id: 'if_else', text: '如果 [COND] 那么/否则', params: [{ type: 'condition' }], isContainer: true, hasElse: true }
    ]
  },
  {
    category: '侦测',
    color: '#4CBFE6',
    items: [
      { id: 'touching_edge', text: '碰到边缘?' },
      { id: 'mouse_down', text: '鼠标按下?' },
      { id: 'key_pressed', text: '按下键 [KEY]?', params: [{ type: 'select', options: ['空格', '上', '下', '左', '右'], default: '空格' }] }
    ]
  },
  {
    category: '运算',
    color: '#40BF4A',
    items: [
      { id: 'add', text: '[A] + [B]', params: [{ type: 'number', default: 0 }, { type: 'number', default: 0 }] },
      { id: 'subtract', text: '[A] - [B]', params: [{ type: 'number', default: 0 }, { type: 'number', default: 0 }] },
      { id: 'multiply', text: '[A] × [B]', params: [{ type: 'number', default: 0 }, { type: 'number', default: 0 }] },
      { id: 'divide', text: '[A] ÷ [B]', params: [{ type: 'number', default: 1 }, { type: 'number', default: 1 }] },
      { id: 'greater', text: '[A] > [B]', params: [{ type: 'number', default: 0 }, { type: 'number', default: 0 }] },
      { id: 'less', text: '[A] < [B]', params: [{ type: 'number', default: 0 }, { type: 'number', default: 0 }] },
      { id: 'equals', text: '[A] = [B]', params: [{ type: 'number', default: 0 }, { type: 'number', default: 0 }] }
    ]
  },
  {
    category: '变量',
    color: '#FF8C1A',
    items: [
      { id: 'set_var', text: '设置变量 [VAR] 为 [VALUE]', params: [{ type: 'variable' }, { type: 'number', default: 0 }] },
      { id: 'change_var', text: '改变变量 [VAR] 增加 [VALUE]', params: [{ type: 'variable' }, { type: 'number', default: 1 }] },
      { id: 'get_var', text: '变量 [VAR] 的值', params: [{ type: 'variable' }] }
    ]
  }
]

// 工作区积木
const workspaceBlocks = ref([])

// 说话气泡状态
const speechBubble = ref({
  text: '',
  visible: false
})

// 当前正在执行的积木索引
const activeBlockIndex = ref(-1)

// 添加积木到工作区
function addBlock(block) {
  const newBlock = {
    ...block,
    id: block.id,  // 使用原始id而不是生成新的
    text: block.text,
    params: block.params?.map(p => ({ ...p, value: p.default })) || []
  }
  workspaceBlocks.value.push(newBlock)
  updateCode()
}

// 移除积木
function removeBlock(index) {
  workspaceBlocks.value.splice(index, 1)
  updateCode()
}

// 更新代码
function updateCode() {
  codeContent.value = workspaceBlocks.value.map(block => {
    const params = block.params?.map(p => p.value).join(', ') || ''
    return `${block.id}(${params});`
  }).join('\n')
}

// 运行代码
async function runCode() {
  if (isRunning.value) return
  isRunning.value = true
  
  for (const block of workspaceBlocks.value) {
    try {
      await executeBlock(block)
    } catch (error) {
      console.error('执行错误:', error)
    }
  }
  
  isRunning.value = false
}

// 拖拽排序相关
const dragStartIndex = ref(-1)

function handleDragStart(e, index) {
  dragStartIndex.value = index
  e.target.classList.add('dragging')
}

function handleDragOver(e, index) {
  e.preventDefault()
  const draggingBlock = workspaceBlocks.value[dragStartIndex.value]
  if (dragStartIndex.value !== index && draggingBlock) {
    const blocks = [...workspaceBlocks.value]
    blocks.splice(dragStartIndex.value, 1)
    blocks.splice(index, 0, draggingBlock)
    workspaceBlocks.value = blocks
    dragStartIndex.value = index
  }
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging')
  dragStartIndex.value = -1
  updateCode()
}

// 执行单个积木
async function executeBlock(block, index) {
  activeBlockIndex.value = index
  
  switch (block.id) {
    case 'move':
      const steps = Number(block.params[0].value)
      const rad = sprite.value.direction * Math.PI / 180
      const targetX = sprite.value.x + Math.cos(rad) * steps
      const targetY = sprite.value.y + Math.sin(rad) * steps
      
      // 添加移动动画
      const startX = sprite.value.x
      const startY = sprite.value.y
      const frames = 20
      for (let i = 0; i <= frames; i++) {
        sprite.value.x = startX + (targetX - startX) * (i / frames)
        sprite.value.y = startY + (targetY - startY) * (i / frames)
        await new Promise(resolve => setTimeout(resolve, 20))
      }
      break
      
    case 'turn':
      const degrees = Number(block.params[0].value)
      const startAngle = sprite.value.direction
      const targetAngle = startAngle + degrees
      
      // 添加旋转动画
      const angleFrames = 20
      for (let i = 0; i <= angleFrames; i++) {
        sprite.value.direction = startAngle + (degrees * (i / angleFrames))
        await new Promise(resolve => setTimeout(resolve, 20))
      }
      break
      
    case 'goto':
      sprite.value.x = Number(block.params[0].value)
      sprite.value.y = Number(block.params[1].value)
      break
      
    case 'say':
      speechBubble.value = {
        text: block.params[0].value,
        visible: true
      }
      await new Promise(resolve => setTimeout(resolve, 2000))
      speechBubble.value.visible = false
      break
      
    case 'show':
      sprite.value.visible = true
      break
      
    case 'hide':
      sprite.value.visible = false
      break
      
    case 'wait':
      await new Promise(resolve => setTimeout(resolve, Number(block.params[0].value) * 1000))
      break
      
    case 'repeat':
      const count = Number(block.params[0].value)
      for (let i = 0; i < count; i++) {
        // 执行后续的积木直到遇到下一个控制积木
        for (let j = index + 1; j < workspaceBlocks.value.length; j++) {
          const nextBlock = workspaceBlocks.value[j]
          if (blocks.find(c => c.category === '控制')?.items.some(b => b.id === nextBlock.id)) {
            break
          }
          await executeBlock(nextBlock, j)
        }
      }
      break
      
    case 'change_costume':
      sprite.value.costume = block.params[0].value
      break
      
    case 'forever':
      while (isRunning.value) {
        for (let j = index + 1; j < workspaceBlocks.value.length; j++) {
          if (!isRunning.value) break
          const nextBlock = workspaceBlocks.value[j]
          if (blocks.find(c => c.category === '控制')?.items.some(b => b.id === nextBlock.id)) {
            break
          }
          await executeBlock(nextBlock, j)
        }
      }
      break
      
    case 'if':
      const condition = evaluateCondition(block.params[0].value)
      if (condition) {
        for (let j = index + 1; j < workspaceBlocks.value.length; j++) {
          const nextBlock = workspaceBlocks.value[j]
          if (blocks.find(c => c.category === '控制')?.items.some(b => b.id === nextBlock.id)) {
            break
          }
          await executeBlock(nextBlock, j)
        }
      }
      break
      
    case 'if_else':
      const conditionElse = evaluateCondition(block.params[0].value)
      if (conditionElse) {
        // 执行 then 分支
        for (let j = index + 1; j < workspaceBlocks.value.length; j++) {
          const nextBlock = workspaceBlocks.value[j]
          if (nextBlock.id === 'else' || blocks.find(c => c.category === '控制')?.items.some(b => b.id === nextBlock.id)) {
            break
          }
          await executeBlock(nextBlock, j)
        }
      } else {
        // 执行 else 分支
        let foundElse = false
        for (let j = index + 1; j < workspaceBlocks.value.length; j++) {
          const nextBlock = workspaceBlocks.value[j]
          if (!foundElse) {
            if (nextBlock.id === 'else') {
              foundElse = true
            }
            continue
          }
          if (blocks.find(c => c.category === '控制')?.items.some(b => b.id === nextBlock.id)) {
            break
          }
          await executeBlock(nextBlock, j)
        }
      }
      break
      
    // 运算相关
    case 'add':
      return Number(block.params[0].value) + Number(block.params[1].value)
    case 'subtract':
      return Number(block.params[0].value) - Number(block.params[1].value)
    case 'multiply':
      return Number(block.params[0].value) * Number(block.params[1].value)
    case 'divide':
      return Number(block.params[0].value) / Number(block.params[1].value)
    case 'greater':
      return Number(block.params[0].value) > Number(block.params[1].value)
    case 'less':
      return Number(block.params[0].value) < Number(block.params[1].value)
    case 'equals':
      return Number(block.params[0].value) === Number(block.params[1].value)
      
    // 变量相关
    case 'set_var':
      const varToSet = variables.value.find(v => v.name === block.params[0].value)
      if (varToSet) {
        varToSet.value = Number(block.params[1].value)
      }
      break
    case 'change_var':
      const varToChange = variables.value.find(v => v.name === block.params[0].value)
      if (varToChange) {
        varToChange.value += Number(block.params[1].value)
      }
      break
    case 'get_var':
      const varToGet = variables.value.find(v => v.name === block.params[0].value)
      return varToGet ? varToGet.value : 0
      
    // 侦测相关
    case 'touching_edge':
      const margin = 20
      return Math.abs(sprite.value.x) > 180 || Math.abs(sprite.value.y) > 140
    case 'mouse_down':
      return mouseDown.value
    case 'key_pressed':
      return pressedKeys.has(block.params[0].value)
  }
  
  activeBlockIndex.value = -1
}

// 添加鼠标和键盘状态
const mouseDown = ref(false)
const pressedKeys = ref(new Set())

// 事件处理
function handleKeydown(e) {
  if (e.code === 'Space') {
    e.preventDefault()
    if (!isRunning.value) {
      runCode()
    }
  } else if (e.code === 'Delete' || e.code === 'Backspace') {
    const selectedBlock = workspaceBlocks.value.findIndex((_, i) => i === activeBlockIndex.value)
    if (selectedBlock !== -1) {
      removeBlock(selectedBlock)
    }
  }
  pressedKeys.value.add(e.key)
}

function handleKeyup(e) {
  pressedKeys.value.delete(e.key)
}

function handleMousedown() {
  mouseDown.value = true
}

function handleMouseup() {
  mouseDown.value = false
}

// 重置
function reset() {
  sprite.value = {
    x: 0,
    y: 0,
    direction: 90,
    costume: '🐱',
    visible: true
  }
  isRunning.value = false
}

const showHelp = ref(false)

onMounted(() => {
  reset()
  // 添加示例积木
  addBlock({
    id: 'move',
    text: '移动 [N] 步',
    params: [{ type: 'number', default: 10 }]
  })
  addBlock({
    id: 'turn',
    text: '旋转 [N] 度',
    params: [{ type: 'number', default: 90 }]
  })
  
  // 添加事件监听
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('keyup', handleKeyup)
  window.addEventListener('mousedown', handleMousedown)
  window.addEventListener('mouseup', handleMouseup)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('keyup', handleKeyup)
  window.removeEventListener('mousedown', handleMousedown)
  window.removeEventListener('mouseup', handleMouseup)
})
</script>

<template>
  <div class="playground">
    <div class="playground-header">
      <div class="mode-switch">
        <button 
          :class="['mode-btn', { active: editorMode === 'blocks' }]"
          @click="editorMode = 'blocks'"
        >
          图形编程
        </button>
        <button 
          :class="['mode-btn', { active: editorMode === 'code' }]"
          @click="editorMode = 'code'"
        >
          代码模式
        </button>
      </div>
      <div class="actions">
        <button 
          class="action-btn"
          @click="showHelp = true"
        >
          使用说明
        </button>
        <button 
          class="action-btn primary"
          :disabled="isRunning"
          @click="runCode"
        >
          {{ isRunning ? '运行中...' : '运行' }}
        </button>
        <button 
          class="action-btn"
          @click="reset"
        >
          重置
        </button>
      </div>
    </div>

    <div class="playground-main">
      <div class="editor-area">
        <template v-if="editorMode === 'blocks'">
          <div class="blocks-panel">
            <div 
              v-for="category in blocks"
              :key="category.category"
              class="block-category"
            >
              <div 
                class="category-header"
                :style="{ backgroundColor: category.color }"
              >
                {{ category.category }}
              </div>
              <div class="category-blocks">
                <div 
                  v-for="block in category.items"
                  :key="block.id"
                  class="block"
                  :style="{ backgroundColor: category.color }"
                  @click="addBlock(block)"
                >
                  {{ block.text }}
                </div>
              </div>
            </div>
          </div>
          <div class="workspace">
            <div 
              v-for="(block, index) in workspaceBlocks"
              :key="block.id"
              class="workspace-block"
              :class="{ active: index === activeBlockIndex }"
              draggable="true"
              @dragstart="handleDragStart($event, index)"
              @dragover="handleDragOver($event, index)"
              @dragend="handleDragEnd"
            >
              <div 
                class="block"
                :style="{ backgroundColor: blocks.find(c => 
                  c.items.some(b => b.id === block.id)
                )?.color }"
              >
                <span class="block-text">{{ block.text }}</span>
                <template v-if="block.params">
                  <input 
                    v-for="(param, pIndex) in block.params"
                    :key="pIndex"
                    :type="param.type === 'number' ? 'number' : 'text'"
                    v-model="param.value"
                    :placeholder="param.default"
                    class="block-input"
                  >
                </template>
                <button 
                  class="remove-block"
                  @click.stop="removeBlock(index)"
                >
                  ×
                </button>
              </div>
            </div>
            <div v-if="!workspaceBlocks.length" class="workspace-empty">
              从左侧拖入积木块开始编程
            </div>
          </div>
        </template>
        <div 
          v-else 
          class="code-view"
        >
          <pre>{{ codeContent }}</pre>
        </div>
      </div>
      <div class="stage">
        <div class="stage-header">
          舞台
        </div>
        <div class="stage-content">
          <div 
            class="sprite"
            :style="{
              transform: `translate(${sprite.x}px, ${sprite.y}px) rotate(${sprite.direction}deg)`,
              display: sprite.visible ? 'block' : 'none'
            }"
          >
            {{ sprite.costume }}
            <div 
              v-if="speechBubble.visible" 
              class="speech-bubble"
            >
              {{ speechBubble.text }}
            </div>
          </div>
        </div>
        <div class="stage-info">
          <span>x: {{ Math.round(sprite.x) }}</span>
          <span>y: {{ Math.round(sprite.y) }}</span>
          <span>方向: {{ Math.round(sprite.direction) }}°</span>
          <template v-for="variable in variables" :key="variable.name">
            <span>{{ variable.name }}: {{ variable.value }}</span>
          </template>
        </div>
      </div>
    </div>

    <!-- 使用说明弹窗 -->
    <div v-if="showHelp" class="help-modal">
      <div class="help-content">
        <h3>使用说明 📖</h3>
        <div class="help-text">
          <h4>基本操作</h4>
          <ul>
            <li>点击左侧积木块添加到工作区，可以拖动积木块调整顺序</li>
            <li>点击积木块上的 × 或选中后按 Delete 键可以删除</li>
            <li>点击积木块中的输入框可以修改参数值</li>
            <li>点击右上角的运行按钮或按空格键开始执行程序</li>
            <li>点击重置按钮可以将角色恢复到初始位置</li>
          </ul>

          <h4>积木分类</h4>
          <ul>
            <li><span class="tag motion">动作</span> 
              <ul>
                <li>移动：让角色向当前朝向移动指定步数</li>
                <li>旋转：让角色顺时针/逆时针旋转指定角度</li>
                <li>移到：让角色移动到指定的坐标位置</li>
              </ul>
            </li>
            <li><span class="tag looks">外观</span>
              <ul>
                <li>说：显示一个对话气泡，内容可自定义</li>
                <li>显示/隐藏：控制角色的可见性</li>
                <li>换装扮：更换角色的外观</li>
              </ul>
            </li>
            <li><span class="tag control">控制</span>
              <ul>
                <li>等待：暂停指定的秒数后继续执行</li>
                <li>重复：将后续积木重复执行指定次数</li>
                <li>重复执行：无限循环执行后续积木</li>
                <li>如果：根据条件判断是否执行后续积木</li>
              </ul>
            </li>
            <li><span class="tag sensing">侦测</span>
              <ul>
                <li>碰到边缘：检测角色是否碰到舞台边缘</li>
                <li>鼠标按下：检测鼠标是否被按下</li>
                <li>按下键：检测指定按键是否被按下</li>
              </ul>
            </li>
            <li><span class="tag operators">运算</span>
              <ul>
                <li>加减乘除：进行基本的数学运算</li>
                <li>大于/小于/等于：比较两个数值的关系</li>
              </ul>
            </li>
            <li><span class="tag variables">变量</span>
              <ul>
                <li>设置变量：给变量赋予一个新的值</li>
                <li>改变变量：将变量的值增加指定数值</li>
                <li>获取变量：读取变量的当前值</li>
              </ul>
            </li>
          </ul>

          <h4>快捷键</h4>
          <ul>
            <li><kbd>空格</kbd> 运行程序</li>
            <li><kbd>Delete</kbd> 或 <kbd>Backspace</kbd> 删除选中的积木</li>
            <li><kbd>Esc</kbd> 停止程序运行</li>
          </ul>

          <h4>编程技巧</h4>
          <ul>
            <li>使用重复执行可以创建持续运动的动画</li>
            <li>组合使用移动和旋转可以创建各种有趣的路径</li>
            <li>使用变量记录分数或生命值</li>
            <li>使用条件判断实现更复杂的交互逻辑</li>
            <li>注意调整等待时间来控制动画速度</li>
          </ul>
        </div>
        <button 
          class="action-btn"
          @click="showHelp = false"
        >
          知道了
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.playground {
  --primary-color: var(--vp-c-brand);
  --border-color: var(--vp-c-divider);
  --bg-color: var(--vp-c-bg-soft);
  --text-color: var(--vp-c-text-1);
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  z-index: 10;
}
.playground-header {
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--vp-c-bg);
}
.mode-switch {
  display: flex;
  gap: 8px;
}
.mode-btn {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}
.mode-btn.active {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  color: white;
}
.actions {
  display: flex;
  gap: 8px;
}
.action-btn {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}
.action-btn:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}
.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.action-btn.primary {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  color: white;
}
.action-btn.primary:hover {
  background: var(--vp-c-brand-dark);
  border-color: var(--vp-c-brand-dark);
}
.playground-main {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.editor-area {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.blocks-panel {
  width: 200px;
  padding: 16px;
  border-right: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow-y: auto;
}
.block-category {
  margin-bottom: 16px;
}
.category-header {
  padding: 8px 12px;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}
.category-blocks {
  margin-top: 8px;
}
.block {
  padding: 8px 12px;
  margin-bottom: 8px;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.workspace {
  flex: 1;
  padding: 16px;
  background: var(--vp-c-bg);
  overflow-y: auto;
}
.workspace-block {
  margin-bottom: 8px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s;
  cursor: move;
}
.workspace-block.active {
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-light);
}
.workspace-block.dragging {
  opacity: 0.5;
}
.block-input {
  width: 40px;
  padding: 2px 4px;
  margin: 0 4px;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 2px;
  font-size: 14px;
}
.block-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.4);
}
.block-input[type="text"] {
  width: 80px;
}
.remove-block {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0;
  line-height: 1;
}
.workspace-empty {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  font-size: 14px;
  border: 2px dashed var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px;
}
.code-view {
  flex: 1;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  overflow: auto;
}
.code-view pre {
  margin: 0;
  padding: 16px;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}
.stage {
  width: 400px;
  border-left: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
}
.stage-header {
  padding: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}
.stage-content {
  flex: 1;
  position: relative;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}
.sprite {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 32px;
  transform-origin: center;
  transition: none;  /* 移除默认过渡以使用自定义动画 */
}
.stage-info {
  padding: 12px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}
.speech-bubble {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 2px solid var(--vp-c-brand);
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  animation: pop-in 0.3s ease-out;
}
.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--vp-c-brand);
}
@keyframes pop-in {
  from {
    transform: translateX(-50%) scale(0);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .playground {
    top: var(--vp-nav-height-mobile);
  }
  .playground-main {
    flex-direction: column;
  }
  .editor-area {
    height: 50%;
  }
  .stage {
    width: 100%;
    height: 50%;
    border-left: none;
    border-top: 1px solid var(--border-color);
  }
  .blocks-panel {
    width: 160px;
  }
  .block {
    font-size: 12px;
    padding: 6px 8px;
  }
  .mode-btn,
  .action-btn {
    padding: 4px 8px;
    font-size: 12px;
  }
}

.help-modal {
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

.help-content {
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 24px;
  width: 90%;
  max-width: 480px;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 20px;
}

.help-content::-webkit-scrollbar {
  width: 8px;
}

.help-content::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
}

.help-content::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 4px;
}

.help-content::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .help-content {
    width: calc(100% - 32px);
    max-height: calc(100vh - 120px);
    margin: 16px;
    padding: 16px;
  }
}

.help-content h3 {
  margin: 0 0 16px;
  font-size: 20px;
  color: var(--vp-c-text-1);
}

.help-content h4 {
  margin: 16px 0 8px;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.help-text {
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.help-text ul {
  margin: 8px 0;
  padding-left: 20px;
}

.help-text li {
  margin: 4px 0;
}

.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  color: white;
  font-size: 12px;
}

.tag.motion {
  background: #4C97FF;
}

.tag.looks {
  background: #9966FF;
}

.tag.control {
  background: #FFAB19;
}

.tag.sensing {
  background: #4CBFE6;
}

.tag.operators {
  background: #40BF4A;
}

.tag.variables {
  background: #FF8C1A;
}

kbd {
  display: inline-block;
  padding: 2px 6px;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
}

/* 添加条件块的样式 */
.block[data-type="condition"] {
  border-left: 4px solid var(--vp-c-brand);
}

/* 添加容器块的样式 */
.block[data-container="true"] {
  padding-left: 24px;
  border-left: 4px solid var(--vp-c-brand);
}

/* 添加变量选择器的样式 */
.block-input[data-type="variable"],
.block-input[data-type="select"] {
  width: auto;
  min-width: 80px;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
}

.help-text ul ul {
  margin-left: 8px;
  margin-top: 4px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.help-text ul ul li {
  margin: 2px 0;
}
</style> 