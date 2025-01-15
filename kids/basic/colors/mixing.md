# 颜色混合

## 认识三原色

三原色是最基本的颜色，它们是：
- 🔴 红色 (Red)
- 💛 黄色 (Yellow)
- 🔵 蓝色 (Blue)

## 神奇的颜色混合

当我们把两种原色混合在一起时，就会产生新的颜色！

### 互动动画演示

点击下面的按钮，观看颜色混合的神奇过程：

<div class="color-mixing-demo">
  <div class="demo-box" id="red-yellow-mix">
    <button onclick="playMixAnimation('red-yellow')">
      🔴 + 💛 = 🟧
    </button>
    <div class="animation-area">
      <div class="color1">🔴</div>
      <div class="color2">💛</div>
      <div class="result">🟧</div>
    </div>
  </div>

  <div class="demo-box" id="yellow-blue-mix">
    <button onclick="playMixAnimation('yellow-blue')">
      💛 + 🔵 = 💚
    </button>
    <div class="animation-area">
      <div class="color1">💛</div>
      <div class="color2">🔵</div>
      <div class="result">💚</div>
    </div>
  </div>

  <div class="demo-box" id="blue-red-mix">
    <button onclick="playMixAnimation('blue-red')">
      🔵 + 🔴 = 💜
    </button>
    <div class="animation-area">
      <div class="color1">🔵</div>
      <div class="color2">🔴</div>
      <div class="result">💜</div>
    </div>
  </div>
</div>

<style>
.color-mixing-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.demo-box {
  border: 2px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.demo-box button {
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background: #f0f0f0;
  cursor: pointer;
}

.animation-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  height: 100px;
  position: relative;
}

.color1, .color2, .result {
  font-size: 2em;
  margin: 0 10px;
  transition: all 0.5s ease;
}

.result {
  opacity: 0;
}

.mixing .color1, .mixing .color2 {
  transform: translateX(0);
  opacity: 0.5;
}

.mixing .result {
  opacity: 1;
}
</style>

<script>
function playMixAnimation(colors) {
  const demoBox = document.getElementById(`${colors}-mix`);
  const area = demoBox.querySelector('.animation-area');
  
  area.classList.add('mixing');
  
  setTimeout(() => {
    area.classList.remove('mixing');
  }, 2000);
}
</script>

### 让我们一起来做实验：

1. 🔴 红色 + 💛 黄色 = 🟧 橙色
2. 💛 黄色 + 🔵 蓝色 = 💚 绿色
3. 🔵 蓝色 + 🔴 红色 = 💜 紫色

## 有趣的实验活动

### 水彩混合游戏
准备材料：
- 🔴 红色水彩颜料
- 💛 黄色水彩颜料
- 🔵 蓝色水彩颜料
- 📄 画纸
- 🖌️ 水彩笔或画笔
- 🎨 调色盘

### 动手尝试：
1. 在调色盘上放一点 🔴 红色和 💛 黄色
2. 用画笔轻轻把它们混在一起
3. 看看会出现什么颜色？
4. 试试其他颜色的组合！

## 生活中的颜色混合

我们可以在日常生活中发现很多颜色混合的例子：
- 🌅 日落时的天空（🔴 红色和 💛 黄色）
- 🌿 春天的树叶（💛 黄色和 🔵 蓝色）
- 🌸 美丽的紫罗兰（🔴 红色和 🔵 蓝色）

## 小测试

问问自己：
1. 🔴 红色和 💛 黄色混合会变成什么颜色？
2. 要做出 💚 绿色，需要混合哪两种颜色？
3. 💜 紫色是由哪两种颜色混合而成的？

记住：实验时要穿上旧衣服，以免弄脏新衣服哦！ 👕
