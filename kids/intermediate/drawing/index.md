# 神奇的图形世界 🎨

欢迎来到神奇的图形绘制世界！在这里，我们将用代码画出美丽的图案！

## 准备好开始冒险了吗？ 🚀

<div class="demo-canvas">
  <div class="drawing-preview">
    <div class="turtle">🐢</div>
    <div class="drawing-path"></div>
  </div>
  <div class="controls">
    <button class="demo-btn" @click="startDemo">开始演示</button>
  </div>
</div>

## 你将学到什么？ ✨

### 1. 基础图形 📐
- 画直线和曲线
- 创造正方形和三角形
- 绘制圆形和星星

### 2. 炫酷效果 🌈
- 变换颜色
- 添加渐变
- 制作动画

### 3. 创意设计 🎨
- 设计自己的图案
- 创作艺术作品
- 制作互动游戏

## 为什么要学习图形编程？ 🤔

想象一下，你可以：
- 画出自己喜欢的卡通人物
- 设计独特的游戏场景
- 创造炫酷的动画效果
- 制作精美的贺卡

## 学习路线 🗺️

1. **第一站：基础图形**
   - 认识坐标系统
   - 学习基本命令
   - 掌握简单图形

2. **第二站：组合创作**
   - 组合多个图形
   - 添加颜色效果
   - 制作简单动画

3. **第三站：创意设计**
   - 设计个性图案
   - 创作艺术作品
   - 开发小游戏

::: tip 小贴士
- 不要害怕犯错，每个艺术家都是从涂鸦开始的
- 记得保存你的作品，它们都是独一无二的艺术品
- 发挥想象力，创造出属于你的神奇世界
:::

## 准备好了吗？ 🎯

让我们一起：
- 探索图形的奥秘
- 释放创意的力量
- 创造美丽的作品

<style>
.demo-canvas {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.drawing-preview {
  width: 100%;
  height: 150px;
  background: white;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border: 2px solid #e9ecef;
}

.turtle {
  position: absolute;
  font-size: 24px;
  transform-origin: center;
  transition: all 0.5s ease;
  animation: float 2s infinite ease-in-out;
}

.drawing-path {
  position: absolute;
  width: 100%;
  height: 100%;
}

.demo-btn {
  padding: 8px 20px;
  background: linear-gradient(135deg, #42b883, #3488ce);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.2);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(10deg); }
}

/* 暗色模式适配 */
:global(html.dark) .demo-canvas {
  background: #1a1a1a;
}

:global(html.dark) .drawing-preview {
  background: #2a2a2a;
  border-color: #333;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-canvas {
    padding: 15px;
  }
  
  .drawing-preview {
    height: 120px;
  }
  
  .turtle {
    font-size: 20px;
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

const pathPoints = ref([])
const isAnimating = ref(false)

function startDemo() {
  if (isAnimating.value) return
  isAnimating.value = true
  
  // 这里可以添加更复杂的动画逻辑
  const turtle = document.querySelector('.turtle')
  const path = document.querySelector('.drawing-path')
  
  // 简单的演示动画
  turtle.style.left = '10%'
  turtle.style.top = '50%'
  
  setTimeout(() => {
    turtle.style.left = '90%'
    path.style.background = 'linear-gradient(90deg, #42b883, transparent)'
    
    setTimeout(() => {
      turtle.style.top = '20%'
      path.style.background = 'linear-gradient(90deg, #42b883, #3488ce)'
      
      setTimeout(() => {
        turtle.style.left = '10%'
        isAnimating.value = false
      }, 1000)
    }, 1000)
  }, 1000)
}

onMounted(() => {
  const turtle = document.querySelector('.turtle')
  turtle.style.left = '10%'
  turtle.style.top = '50%'
})
</script>
