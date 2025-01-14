# 动画基础

## 简介
通过简单有趣的动画编程，了解动画的基本原理。你将学习如何让物体移动、旋转和变化，创造出生动有趣的动画效果！

## 互动区域
<script setup>
import AnimationPlayground from './components/kids/AnimationPlayground.vue'
</script>

<div class="animation-container">
  <AnimationPlayground />
</div>

<style>
.animation-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  overflow-x: hidden;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .animation-container {
    padding: 0.5rem;
    max-width: 100%;
  }
}

:deep(h1) {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
}

:deep(h2) {
  font-size: clamp(1.2rem, 4vw, 2rem);
}

:deep(p, li) {
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  line-height: 1.6;
}
</style>

## 学习目标
- 理解动画的基本原理
- 学习时间和运动的关系
- 掌握简单的动画控制方法
- 培养动态思维能力

## 编程概念
- 定时器
- 速度与加速度
- 状态管理
- 事件监听 