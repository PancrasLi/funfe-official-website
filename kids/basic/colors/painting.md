# 绘画练习

让我们一起来学习绘画吧！🎨

## 基础工具认识

- 🖌️ 画笔
- 📝 铅笔
- 🎨 颜料盒
- ⬜ 画纸

## 有趣的颜色练习

<ColorDemo />

### 神奇的调色实验 🌈

试试看把这些颜色混合在一起：
- 红色 + 黄色 = 橙色
- 蓝色 + 黄色 = 绿色
- 红色 + 蓝色 = 紫色

<ColorMixing />

## 简单的绘画步骤

1. 准备画具
2. 画出基本形状
3. 添加颜色
4. 完善细节

### 来画一朵小花吧！ 🌸

<div class="drawing-steps">
  <div class="step">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="20" fill="#FFD700" stroke="#000" stroke-width="2"/>
      <text x="100" y="150" text-anchor="middle">花心</text>
    </svg>
    <p>第一步：画一个圆形作为花心</p>
  </div>
  
  <div class="step">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="20" fill="#FFD700" stroke="#000" stroke-width="2"/>
      <path d="M100 80 Q120 50 140 80 Q120 90 100 80" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M120 100 Q150 100 140 120 Q120 110 120 100" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M100 120 Q120 150 140 120 Q120 110 100 120" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M80 100 Q50 100 60 120 Q80 110 80 100" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M100 80 Q80 50 60 80 Q80 90 100 80" fill="#FF69B4" stroke="#000" stroke-width="2"/>
    </svg>
    <p>第二步：画出花瓣</p>
  </div>
  
  <div class="step">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="20" fill="#FFD700" stroke="#000" stroke-width="2"/>
      <path d="M100 80 Q120 50 140 80 Q120 90 100 80" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M120 100 Q150 100 140 120 Q120 110 120 100" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M100 120 Q120 150 140 120 Q120 110 100 120" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M80 100 Q50 100 60 120 Q80 110 80 100" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M100 80 Q80 50 60 80 Q80 90 100 80" fill="#FF69B4" stroke="#000" stroke-width="2"/>
      <path d="M100 120 L100 180" stroke="#228B22" stroke-width="2"/>
      <path d="M100 150 Q120 140 130 150" fill="#90EE90" stroke="#228B22" stroke-width="2"/>
    </svg>
    <p>第三步：添加花茎和叶子</p>
  </div>
</div>

## 小贴士 💡

- 记得保持画具清洁
- 画画时要开心
- 不要着急，慢慢来
- 记得在画完后洗手

<style>
.color-box {
  width: 100px;
  height: 100px;
  margin: 10px;
  display: inline-block;
  text-align: center;
  line-height: 100px;
  color: white;
  border-radius: 10px;
  transition: transform 0.3s;
}

.color-box:hover {
  transform: scale(1.1);
}

.drawing-steps {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.step {
  text-align: center;
}

.step svg {
  border: 2px solid #ddd;
  border-radius: 10px;
  background: white;
}

.step svg path {
  transition: all 0.3s ease;
}

.step svg:hover path {
  transform-origin: center;
  transform: scale(1.05);
}

.step svg circle {
  transition: all 0.3s ease;
}

.step svg:hover circle {
  transform-origin: center;
  transform: scale(1.1);
}

.color-mixing {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.color-circle {
  transition: all 0.3s ease;
  cursor: pointer;
}

.color-circle:hover {
  transform-origin: center;
  transform: scale(1.2);
  filter: brightness(1.2);
}

.mixing-text {
  font-size: 14px;
  fill: #666;
}

@keyframes colorPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.color-demo {
  text-align: center;
}
</style>

<script>
document.querySelectorAll('.color-circle').forEach(circle => {
  circle.addEventListener('mouseover', () => {
    circle.style.animation = 'colorPulse 1s infinite';
  });
  
  circle.addEventListener('mouseout', () => {
    circle.style.animation = '';
  });
});
</script>
