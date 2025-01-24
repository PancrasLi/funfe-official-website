---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# 添加自定义 CSS 类
class: home-page

hero:
  name: "FUNFE"
  text: "探索前端技术，启发编程思维"
  tagline: Explore Frontend & Develop Computational Thinking
  actions:
    - theme: brand
      text: 图形编辑器
      link: /playground/index.md
    - theme: alt
      text: JS学习记录
      link: /class/js/1.md
    - theme: alt
      text: 少儿编程课程体系
      link: /kids/index
  image:
    src: /images/logo.svg
    
features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"/></svg>
    title: 前端开发
    details: 系统学习 HTML、CSS、JavaScript 等前端技术，掌握现代化开发工具和框架
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/></svg>
    title: 可视化编程
    details: 通过图形化界面学习编程概念，培养逻辑思维和创造力
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5L9.99 9.99L6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1s-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1z"/></svg>
    title: 项目实战
    details: 结合前端技术开发游戏和动画，在实践中提升编程能力
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 22v-2h3v-3h2v3.5c0 .83-.67 1.5-1.5 1.5H17zm-2-22h2v9h-2V0zm-4 0h2v7h-2V0zm-4 0h2v5H7V0zM2 22v-3.5C2 16.67 2.67 16 3.5 16H7v2H4v3H2zm3.5-7C3.67 15 2 13.33 2 11.5V9h2v2.5c0 .83.67 1.5 1.5 1.5H7v2H5.5zm11 0c-.83 0-1.5-.67-1.5-1.5V9h2v2.5c0 .83-.67 1.5-1.5 1.5zM9 9h6v2H9V9zm2 4h2v11h-2V13z"/></svg>
    title: 算法思维
    details: 学习基础算法和数据结构，提升解决问题的能力
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 23C6.443 23 2 18.557 2 13c0-5.557 4.443-10 10-10s10 4.443 10 10c0 5.557-4.443 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10a5 5 0 0 1 0 10z"/></svg>
    title: UI设计
    details: 了解界面设计原则，提升产品美感和用户体验
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39z"/></svg>
    title: 开源社区
    details: 参与开源项目，培养协作精神和工程实践能力
---


<script setup>
import { ref, onMounted } from 'vue'

const springFestivalEnabled = ref(true)

onMounted(() => {
  // 检查本地存储的主题设置，如果没有存储过，则使用默认值 true
  const stored = localStorage.getItem('spring-festival-theme')
  const enabled = stored === null ? true : stored === 'true'
  springFestivalEnabled.value = enabled
  updateTheme(enabled)
})

// 更新主题
const updateTheme = (enabled) => {
  if (enabled) {
    document.documentElement.classList.add('spring-festival-theme')
  } else {
    document.documentElement.classList.remove('spring-festival-theme')
  }
  localStorage.setItem('spring-festival-theme', enabled)
}

// 监听主题变化
const toggleTheme = () => {
  springFestivalEnabled.value = !springFestivalEnabled.value
  updateTheme(springFestivalEnabled.value)
}

// AI 助手跳转
function goToAI() {
  window.location.href = 'https://yuanbao.tencent.com/chat/SdEAG1rI5fAw'
}
</script>

<div v-if="springFestivalEnabled" class="spring-festival-falling">
  <span>🧧</span>
  <span>福</span>
  <span>🧧</span>
  <span>福</span>
  <span>🧧</span>
  <span>福</span>
  <span>🧧</span>
  <span>福</span>
</div>

<div class="theme-toggle">
  <button class="toggle-button" @click="toggleTheme">
    {{ springFestivalEnabled ? '🧧 关闭春节主题' : '🎊 开启春节主题' }}
  </button>
</div>

<div class="home-container">
  <div class="ai-float-button" @click="goToAI">
    <div class="ai-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005L19 20H5z"/><path fill="currentColor" d="M12 10.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-4-2.5H6v-2h2v2zm8 0h2v-2h-2v2z"/></svg>
    </div>
    <span class="ai-text">问AI</span>
    <div class="ai-ripple"></div>
    <div class="ai-glow"></div>
  </div>
</div>

<style>
/* 容器样式 */
.home-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* 调整 VPHero 的样式 */
:global(.VPHero) {
  position: relative;
  z-index: 2;
}

/* 调整 Features 的样式 */
:global(.VPFeatures) {
  position: relative;
  z-index: 2;
  background: transparent !important;
}

/* 确保内容在动画上层 */
:global(.VPContent) {
  position: relative;
  z-index: 2;
}

/* 学习路线样式 */
.learning-path {
  position: relative;
  z-index: 2;
  padding: 4rem 2rem;
  text-align: center;
  background: var(--vp-c-bg);
}

.learning-path h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, var(--vp-c-brand), var(--vp-c-brand-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.path-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.path-item {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.path-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand);
}

.path-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

.path-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand);
}

.path-item p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Features 样式优化 */
:global(.VPFeatures .item) {
  background: var(--vp-c-bg-soft) !important;
  border-radius: 16px !important;
  padding: 2rem !important;
  transition: all 0.3s ease !important;
  border: 1px solid var(--vp-c-divider);
}

:global(.VPFeatures .item:hover) {
  transform: translateY(-8px) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1) !important;
  border-color: var(--vp-c-brand);
}

:global(.VPFeatures .icon) {
  font-size: 2.5rem !important;
  margin-bottom: 1.5rem !important;
  animation: wiggle 3s ease-in-out infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

/* AI 按钮样式升级 */
.ai-float-button {
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 30px;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(52, 81, 178, 0.1);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
}

.ai-float-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 25px rgba(52, 81, 178, 0.2);
  border-color: var(--vp-c-brand);
}

.ai-icon {
  position: relative;
  font-size: 24px;
  margin-right: 8px;
  color: var(--vp-c-text-1);
  animation: pulse 2s infinite;
}

.ai-text {
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.ai-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: var(--vp-c-brand);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 2s infinite;
}

.ai-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--vp-c-brand-dimm) 0%, transparent 70%);
  animation: glow 3s infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(20);
    opacity: 0;
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes glow {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .learning-path {
    padding: 2rem 1rem;
  }
  
  .path-item {
    min-width: 200px;
    padding: 1.5rem;
  }
  
  .ai-float-button {
    right: 20px;
    bottom: 20px;
    padding: 10px 20px;
  }
  
  .ai-icon {
    font-size: 20px;
  }
  
  .ai-text {
    font-size: 14px;
  }
}

/* 暗色模式适配 */
:global(html.dark) .path-item {
  background: var(--vp-c-bg-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

:global(html.dark) .path-item:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

:global(html.dark) .ai-float-button {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

:global(html.dark) .ai-float-button:hover {
  border-color: var(--vp-c-brand);
}

/* 优化 SVG 图标样式 */
:global(.VPFeatures .icon svg) {
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
}

:global(.VPFeatures .item:hover .icon svg) {
  transform: scale(1.1);
  color: var(--vp-c-brand);
}

.path-icon svg {
  width: 40px;
  height: 40px;
  color: var(--vp-c-brand);
  transition: all 0.3s ease;
}

.path-item:hover .path-icon svg {
  transform: scale(1.1);
}

/* 优化特性卡片样式 */
:global(.VPFeatures .item) {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft) !important;
}

:global(.VPFeatures .item:hover) {
  border-color: var(--vp-c-brand);
}

/* 优化路径卡片样式 */
.path-item {
  border: 1px solid var(--vp-c-divider);
}

.path-item:hover {
  border-color: var(--vp-c-brand);
}

.theme-toggle {
  position: fixed;
  top: 70px;
  right: 16px;
  z-index: 100;
}

.toggle-button {
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.toggle-button:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .theme-toggle {
    top: auto;
    bottom: 20px;
    right: 20px;
  }
  
  .toggle-button {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}
</style>