# 神奇的动画世界

<script setup>
import { ref } from 'vue'

// 小猫动画状态
const catPosition = ref(0)
const catMood = ref('😺')

// 彩虹颜色变换
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']
const currentColor = ref(colors[0])

// 小星星闪烁
const starSize = ref(20)
const starOpacity = ref(1)

function moveCat() {
  catPosition.value = (catPosition.value + 50) % 300
  catMood.value = catMood.value === '😺' ? '😸' : '😺'
}

function changeColor() {
  const currentIndex = colors.indexOf(currentColor.value)
  currentColor.value = colors[(currentIndex + 1) % colors.length]
}

function twinkleStar() {
  starSize.value = starSize.value === 20 ? 30 : 20
  starOpacity.value = starOpacity.value === 1 ? 0.5 : 1
}
</script>

## 欢迎来到动画乐园！ 🎨

嘿，小朋友们！你们想知道如何让图片动起来吗？
想让可爱的小猫在屏幕上跑来跑去，或者让星星在夜空中闪闪发光吗？
让我们一起进入神奇的动画世界吧！

### 1. 我们的第一个动画朋友 - 奔跑的小猫 🐱

<div class="demo-box">
  <div 
    class="cat"
    :style="{ transform: `translateX(${catPosition}px)` }"
    @click="moveCat"
  >
    {{ catMood }}
  </div>
  <div class="hint">点击小猫，看它跑起来！</div>
</div>

### 2. 会变色的魔法方块 ✨

<div class="demo-box">
  <div 
    class="color-box"
    :style="{ backgroundColor: currentColor }"
    @click="changeColor"
  ></div>
  <div class="hint">点击方块，看它变出新颜色！</div>
</div>

### 3. 闪闪发光的小星星 ⭐

<div class="demo-box">
  <div 
    class="star"
    :style="{ 
      fontSize: starSize + 'px',
      opacity: starOpacity
    }"
    @click="twinkleStar"
  >
    ⭐
  </div>
  <div class="hint">点击星星，让它闪起来！</div>
</div>

## 动画是什么？

想象一下，当你快速翻动一本画着小人的本子，小人就会动起来！
这就是动画的原理 - 把很多张图片快速地播放，就能创造出动起来的效果。

就像你最喜欢的动画片一样，我们也可以用编程来创造各种有趣的动画：
- 让蝴蝶在花丛中飞舞 🦋
- 让小球在屏幕上弹跳 ⚽
- 让彩虹慢慢出现在天空 🌈

## 准备好了吗？

接下来，我们将学习如何制作这些有趣的动画！
你将成为一名动画魔法师，创造出属于自己的精彩动画世界！

<style scoped>
.demo-box {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.cat {
  font-size: 40px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.color-box {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.star {
  cursor: pointer;
  transition: all 0.3s ease;
}

.hint {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

::: tip 小提示
- 点击每个示例，看看会发生什么有趣的事情！
- 试着想象更多有趣的动画效果
- 准备好你的创意，我们即将开始制作属于你的动画！
:::