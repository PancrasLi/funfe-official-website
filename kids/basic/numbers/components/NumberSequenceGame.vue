<template>
  <div class="sequence-game">
    <div class="game-container" :class="type">
      <div class="sequence-display">
        <div v-for="(num, index) in displaySequence" 
             :key="index" 
             class="number-box"
             :class="{ 'animated': isAnimated(index) }">
          {{ num }}
        </div>
        <div class="number-box input-box" v-if="!isCreateMode">
          <input 
            v-model="userAnswer"
            type="number"
            @input="checkAnswer"
            :placeholder="placeholder"
          />
        </div>
      </div>
      
      <div class="message">{{ currentMessage }}</div>
      
      <div class="controls">
        <button @click="checkAnswer" v-if="!isCreateMode">检查答案</button>
        <button @click="nextQuestion" v-if="type === 'quiz'">下一题</button>
        <button @click="resetGame">重新开始</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  type: String,
  sequence: String,
  placeholder: String,
  message: String,
  questions: Array
})

// ... 组件逻辑实现
</script>

<style scoped>
.sequence-game {
  margin: 20px 0;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.number-box {
  width: 60px;
  height: 60px;
  margin: 0 10px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.number-box.animated {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* ... 更多样式 */
</style> 