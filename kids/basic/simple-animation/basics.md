# 动画基础

<script setup>
import { ref, onMounted } from 'vue'

// 位置动画
const position = ref(0)
const isMoving = ref(false)
let moveInterval

// 大小动画
const size = ref(50)
const isGrowing = ref(false)
let sizeInterval

// 旋转动画
const rotation = ref(0)
const isSpinning = ref(false)
let spinInterval

// 颜色动画
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']
const currentColorIndex = ref(0)
const isChangingColor = ref(false)
let colorInterval

// 动画控制函数
function toggleMove() {
  isMoving.value = !isMoving.value
  if (isMoving.value) {
    moveInterval = setInterval(() => {
      position.value = (position.value + 5) % 200
    }, 50)
  } else {
    clearInterval(moveInterval)
  }
}

function toggleSize() {
  isGrowing.value = !isGrowing.value
  if (isGrowing.value) {
    sizeInterval = setInterval(() => {
      size.value = 50 + Math.sin(Date.now() / 500) * 20
    }, 50)
  } else {
    clearInterval(sizeInterval)
    size.value = 50
  }
}

function toggleSpin() {
  isSpinning.value = !isSpinning.value
  if (isSpinning.value) {
    spinInterval = setInterval(() => {
      rotation.value = (rotation.value + 5) % 360
    }, 50)
  } else {
    clearInterval(spinInterval)
  }
}

function toggleColor() {
  isChangingColor.value = !isChangingColor.value
  if (isChangingColor.value) {
    colorInterval = setInterval(() => {
      currentColorIndex.value = (currentColorIndex.value + 1) % colors.length
    }, 1000)
  } else {
    clearInterval(colorInterval)
  }
}

// 清理定时器
onMounted(() => {
  return () => {
    clearInterval(moveInterval)
    clearInterval(sizeInterval)
    clearInterval(spinInterval)
    clearInterval(colorInterval)
  }
})
</script>

## 认识动画的四个魔法 ✨

### 1. 移动的魔法 🚀

想象一下，当你坐在车上，窗外的风景不断向后移动。这就是移动动画！

<div class="demo-box">
  <div 
    class="magic-box"
    :style="{ transform: `translateX(${position}px)` }"
  >
    🚗
  </div>
  <button 
    @click="toggleMove"
    :class="{ active: isMoving }"
  >
    {{ isMoving ? '停止' : '开始' }}移动
  </button>
</div>

### 2. 大小的魔法 🔍

就像你呼吸时，胸口会有规律地起伏。这就是大小变化的动画！

<div class="demo-box">
  <div 
    class="magic-box"
    :style="{ 
      width: size + 'px',
      height: size + 'px'
    }"
  >
    🎈
  </div>
  <button 
    @click="toggleSize"
    :class="{ active: isGrowing }"
  >
    {{ isGrowing ? '停止' : '开始' }}缩放
  </button>
</div>

### 3. 旋转的魔法 🎡

像是玩具陀螺在转圈圈，这就是旋转动画！

<div class="demo-box">
  <div 
    class="magic-box"
    :style="{ transform: `rotate(${rotation}deg)` }"
  >
    🎡
  </div>
  <button 
    @click="toggleSpin"
    :class="{ active: isSpinning }"
  >
    {{ isSpinning ? '停止' : '开始' }}旋转
  </button>
</div>

### 4. 变色的魔法 🌈

就像天空的颜色从早到晚慢慢变化，这就是颜色动画！

<div class="demo-box">
  <div 
    class="magic-box"
    :style="{ backgroundColor: colors[currentColorIndex] }"
  >
    🎨
  </div>
  <button 
    @click="toggleColor"
    :class="{ active: isChangingColor }"
  >
    {{ isChangingColor ? '停止' : '开始' }}变色
  </button>
</div>

## 动画的秘密 🔮

动画就像是魔术，它的秘密就是"一点一点的变化"：
1. 移动：位置一点点改变
2. 大小：尺寸一点点变化
3. 旋转：角度一点点转动
4. 变色：颜色一点点过渡

::: tip 小提示
试试看：
- 同时点击多个按钮，看看会发生什么？
- 观察每种动画的变化过程
- 想想生活中还有哪些东西在动？
:::

## 动手练习 ✍️

1. 找一找：
   - 你的玩具中，哪些会动？
   - 它们是用了哪种动画魔法？

2. 想一想：
   - 如果把多种魔法组合起来会怎样？
   - 比如：既旋转又变色的风车 🎡
   - 或者：又移动又变大的气球 🎈

3. 画一画：
   - 在纸上画一个简单的动画
   - 可以是一朵开放的花 🌸
   - 或是一只飞翔的小鸟 🐦

<style scoped>
.demo-box {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  overflow: hidden;
}

.magic-box {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
  border-radius: 8px;
}

button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

button.active {
  background: #ff6b6b;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

::: warning 注意事项
- 动画不要太快，会让人眼花
- 变化要平滑，不要太突然
- 颜色选择要温和，不要太刺眼
:::

## 下节预告 🎬

下次我们将学习如何：
- 让多个动画一起播放
- 制作更复杂的动画效果
- 创建自己的动画故事

准备好你的想象力，我们下次见！ 👋
