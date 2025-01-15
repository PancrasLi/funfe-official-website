# 趣味拼图

## 图形世界大探险

在这个神奇的图形世界里，我们将学习如何用代码创造各种有趣的图形和拼图！

### 基础图形认知

让我们先来认识一些基本图形：

::: details 基础图形展示
<div class="shapes-demo">
  <div class="shape square"></div>
  <div class="shape circle"></div>
  <div class="shape triangle"></div>
  <div class="shape rectangle"></div>
</div>
:::

- 正方形：四条边一样长
- 圆形：没有边和角的完美图形
- 三角形：三个角的图形
- 长方形：对面的边相等

### 趣味拼图示例

::: tip 动手尝试
让我们一起来用这些基础图形拼出有趣的图案吧！
:::

#### 1. 小房子拼图

<div class="puzzle-container">
  <div class="house-puzzle">
    <div class="puzzle-piece house-body">
      <div class="piece-hint">1</div>
    </div>
    <div class="puzzle-piece house-roof">
      <div class="piece-hint">2</div>
    </div>
    <div class="puzzle-piece house-door">
      <div class="piece-hint">3</div>
    </div>
    <div class="puzzle-piece house-window left">
      <div class="piece-hint">4</div>
    </div>
    <div class="puzzle-piece house-window right">
      <div class="piece-hint">5</div>
    </div>
  </div>
</div>

<style>
.shapes-demo {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
}

.shape {
  width: 60px;
  height: 60px;
}

.square {
  background: #FF6B6B;
}

.circle {
  background: #4ECDC4;
  border-radius: 50%;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid #45B7D1;
}

.rectangle {
  background: #96CEB4;
  width: 80px;
}

.puzzle-container {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 12px;
  min-height: 450px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.house-puzzle {
  position: relative;
  width: 300px;
  height: 350px;
}

.puzzle-piece {
  position: absolute;
  opacity: 0;
  transition: all 0.5s ease-out;
}

.piece-hint {
  position: absolute;
  width: 24px;
  height: 24px;
  background: #FFD700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 10;
}

.house-body {
  bottom: 20px;
  left: 50px;
  width: 200px;
  height: 200px;
  background: #FF6B6B;
  transform: translate(-100px, 100px);
  animation: slidePiece1 0.8s ease-out 0.5s forwards;
}

.house-body .piece-hint {
  top: -12px;
  left: -12px;
}

.house-roof {
  top: 20px;
  left: 50px;
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 100px solid #45B7D1;
  transform: translate(0, -100px);
  animation: slidePiece2 0.8s ease-out 1.5s forwards;
}

.house-roof .piece-hint {
  top: 50px;
  left: -50px;
}

.house-door {
  bottom: 20px;
  left: 125px;
  width: 50px;
  height: 100px;
  background: #96CEB4;
  transform: translate(100px, 0);
  animation: slidePiece3 0.8s ease-out 2.5s forwards;
}

.house-door .piece-hint {
  top: -12px;
  right: -12px;
}

.house-window {
  bottom: 120px;
  width: 50px;
  height: 50px;
  background: #4ECDC4;
}

.house-window.left {
  left: 75px;
  transform: translate(-100px, 0);
  animation: slidePiece4 0.8s ease-out 3.5s forwards;
}

.house-window.right {
  right: 75px;
  transform: translate(100px, 0);
  animation: slidePiece5 0.8s ease-out 4.5s forwards;
}

.house-window.left .piece-hint {
  top: -12px;
  left: -12px;
}

.house-window.right .piece-hint {
  top: -12px;
  right: -12px;
}

@keyframes slidePiece1 {
  0% {
    opacity: 0;
    transform: translate(-100px, 100px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes slidePiece2 {
  0% {
    opacity: 0;
    transform: translate(0, -100px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes slidePiece3 {
  0% {
    opacity: 0;
    transform: translate(100px, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes slidePiece4 {
  0% {
    opacity: 0;
    transform: translate(-100px, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes slidePiece5 {
  0% {
    opacity: 0;
    transform: translate(100px, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

/* 添加拼图完成后的效果 */
.house-puzzle.completed .piece-hint {
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

/* 添加鼠标悬停效果 */
.puzzle-piece:hover {
  filter: brightness(1.1);
}
</style>



