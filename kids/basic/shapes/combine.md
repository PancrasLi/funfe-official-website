# 图形组合

想象一下，我们可以像搭积木一样把不同的图形组合在一起，创造出各种有趣的东西！

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  drawHouse()
  drawTrain()
})

function drawHouse() {
  const canvas = document.getElementById('houseCanvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  
  // 房子主体（大正方形）
  ctx.fillStyle = '#FFE4C4'
  ctx.fillRect(100, 100, 200, 200)
  
  // 屋顶（三角形）
  ctx.beginPath()
  ctx.fillStyle = '#8B4513'
  ctx.moveTo(50, 100)
  ctx.lineTo(200, 20)
  ctx.lineTo(350, 100)
  ctx.fill()
  
  // 门（小正方形）
  ctx.fillStyle = '#8B4513'
  ctx.fillRect(175, 200, 50, 100)
  
  // 窗户（两个小正方形）
  ctx.fillStyle = '#87CEEB'
  ctx.fillRect(125, 150, 50, 50)
  ctx.fillRect(225, 150, 50, 50)
}

function drawTrain() {
  const canvas = document.getElementById('trainCanvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  
  // 车厢（大长方形）
  ctx.fillStyle = '#FF6B6B'
  ctx.fillRect(100, 100, 200, 100)
  
  // 驾驶室（正方形）
  ctx.fillStyle = '#4D4D4D'
  ctx.fillRect(50, 100, 100, 100)
  
  // 车轮（圆形）
  ctx.fillStyle = '#333'
  ctx.beginPath()
  ctx.arc(100, 220, 20, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(200, 220, 20, 0, Math.PI * 2)
  ctx.fill()
  
  // 烟囱
  ctx.fillStyle = '#4D4D4D'
  ctx.fillRect(70, 50, 30, 50)
}
</script>

  <div class="canvas-demo">
    <canvas id="houseCanvas" width="400" height="300"></canvas>
    <canvas id="trainCanvas" width="400" height="300"></canvas>
  </div>

<style scoped>
.canvas-demo canvas {
  border: 1px solid #ccc;
  margin: 10px;
  background: #fff;
}
</style>

## 🎨 创意时间

### 🏠 温馨小屋
- 用一个大正方形作为房子的主体
- 在上面加一个三角形作为屋顶
- 添加一个小正方形作为门
- 两个小正方形作为窗户

### 🚂 开心小火车
- 用一个大长方形作为车厢
- 前面加一个正方形作为驾驶室
- 下面加上圆形的车轮
- 上面加一个小长方形作为烟囱

## 👋 轮到你了！

让我们来玩个游戏：
1. 看看周围的物品，比如你的玩具
2. 观察它是由哪些基本图形组成的
3. 试着在纸上画出来

### 🎯 挑战
你能用基本图形画出以下物品吗？
- 一只可爱的小猫（提示：圆形的脸，三角形的耳朵）
- 一艘帆船（提示：三角形的帆，长方形的船身）
- 一个机器人（提示：正方形的身体和头）

### ✨ 记住
- 所有复杂的图案都是由简单图形组成的
- 旋转和改变图形的大小可以创造出更多有趣的组合
- 发挥想象力，创造属于你的独特作品！

## 🌟 小贴士
当你在组合图形时，可以：
- 把图形重叠在一起
- 改变图形的大小
- 旋转图形的角度
- 使用不同的颜色

记住：没有对错之分，创意才是最重要的！
