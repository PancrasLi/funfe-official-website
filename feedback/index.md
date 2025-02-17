---
title: 问题反馈
description: 欢迎提供您的宝贵意见和建议
# 类型为page
type: page
---

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const walineInstance = ref(null)

onMounted(() => {
  if (typeof window !== 'undefined') {
    const maxRetries = 10
    let retryCount = 0

    const initWaline = () => {
      // 如果已经初始化过，先销毁实例
      if (walineInstance.value) {
        walineInstance.value.destroy()
      }

      // 检查 DOM 元素是否存在
      const walineContainer = document.querySelector('#waline')
      if (!walineContainer) {
        console.warn('Waline container not found, retrying...')
        if (retryCount < maxRetries) {
          retryCount++
          setTimeout(initWaline, 100)
        }
        return
      }

      // 检查 Waline 脚本是否加载
      if (typeof window.Waline === 'undefined') {
        console.warn('Waline is not loaded yet, retrying...')
        if (retryCount < maxRetries) {
          retryCount++
          setTimeout(initWaline, 100)
        }
        return
      }

      try {
        // 初始化 Waline
        walineInstance.value = window.Waline.init({
          el: '#waline',
          serverURL: 'https://feedback-api.funfe.cn/',
          dark: isDark.value,
          lang: 'zh-CN',
          login: 'force',
          pageview: true,
          comment: true,
          emoji: [
            '//unpkg.com/@waline/emojis@1.1.0/weibo',
            '//unpkg.com/@waline/emojis@1.1.0/bilibili'
          ],
          imageUploader: false,
          search: false,
          wordLimit: 500,
          requiredMeta: ['nick', 'mail'],
          reaction: true,
          locale: {
            reactionTitle:"欢迎您对funfe提出宝贵的意见和建议！",
            placeholder: '欢迎留下您的意见和建议...'
          }
        })
        console.log('Waline initialized successfully!')
      } catch (error) {
        console.error('Failed to initialize Waline:', error)
        if (retryCount < maxRetries) {
          retryCount++
          setTimeout(initWaline, 100)
        }
      }
    }

    initWaline()
  }
})

// 监听路由变化
watch(
  () => route.path,
  () => {
    if (typeof window !== 'undefined') {
      initWaline()
    }
  }
)
</script>

<template>
  <div class="feedback-container">
    <div class="feedback-header">
      <h1>问题反馈</h1>
      <p class="description">
        欢迎提供您的宝贵意见和建议。您可以在下方直接发表评论，我们会及时回复。
      </p>
      <div class="features">
        <div class="feature">
          <h3>📝 问题反馈</h3>
          <p>遇到问题或 Bug？请详细描述问题发生的场景和复现步骤。</p>
        </div>
        <div class="feature">
          <h3>💡 功能建议</h3>
          <p>有新功能建议？欢迎分享您的想法。</p>
        </div>
        <div class="feature">
          <h3>👥 交流讨论</h3>
          <p>想要交流学习心得？在这里可以展开讨论。</p>
        </div>
      </div>
    </div>
    <ClientOnly>
      <div class="waline-container">
        <div id="waline"></div>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
.feedback-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.feedback-header {
  text-align: center;
  margin-bottom: 3rem;
}

.description {
  color: var(--vp-c-text-2);
  margin: 1rem 0 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature {
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s;
}

.feature:hover {
  transform: translateY(-2px);
}

.feature h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: var(--vp-c-brand);
}

.feature p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

.waline-container {
  margin-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 2rem;
}

@media (max-width: 640px) {
  .feedback-container {
    padding: 1rem;
  }
  
  .features {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

:deep(.wl-comment) {
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: var(--vp-c-bg-soft);
}

:deep(.wl-header) {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
</style>
