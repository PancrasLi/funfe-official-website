# 趣味数学

## 加法学习

让我们通过有趣的动画来学习加法吧！

<ClientOnly>
  <div class="math-section">
    <!-- 加法练习区 -->
    <div class="math-container">
      <div class="problem-area">
        <div class="number-display">
          <span>{{ firstNumber }}</span>
          <span class="operator">+</span>
          <div class="number-group">
            <span>{{ secondNumber }}</span>
          </div>
        </div>
        <div class="visual-area">
          <div class="items-container">
            <div v-for="n in firstNumber" 
                 :key="'first-'+n" 
                 class="item apple"
                 :class="{'moving': isAnimating}"
            ></div>
          </div>
          <div class="items-container">
            <div v-for="n in secondNumber" 
                 :key="'second-'+n" 
                 class="item apple"
            ></div>
          </div>
        </div>
        <div class="result-area">
          <span class="operator">=</span>
          <span class="result">{{ result }}</span>
        </div>
      </div>
    </div>
    <!-- 控制按钮 -->
    <div class="controls">
      <button @click="generateNewProblem" class="primary-btn">新题目</button>
      <button @click="showAnimation" class="primary-btn">显示过程</button>
    </div>
  </div>
</ClientOnly>

<script setup>
import { ref, nextTick, computed } from 'vue'

// 加法部分的变量
const firstNumber = ref(2)
const secondNumber = ref(3)
const result = ref(5)
const isAnimating = ref(false)

// 减法部分的变量
const minuend = ref(5)
const subtrahend = ref(2)
const difference = ref(3)
const isSubtracting = ref(false)

// 乘法相关
const multiplicand = ref(2)
const multiplier = ref(3)
const product = ref(6)
const isMultiplying = ref(false)
const currentRow = ref(0)

// 除法相关
const dividend = ref(6)
const divisor = ref(2)
const quotient = ref(3)
const isDividing = ref(false)
const currentGroup = ref(0)
const divisionGroups = computed(() => Math.floor(dividend.value / divisor.value))

// 加法部分的函数
function generateNewProblem() {
  isAnimating.value = false
  firstNumber.value = Math.floor(Math.random() * 5) + 1
  secondNumber.value = Math.floor(Math.random() * 5) + 1
  result.value = firstNumber.value + secondNumber.value
}

function showAnimation() {
  isAnimating.value = false
  nextTick(() => {
    isAnimating.value = true
    setTimeout(() => {
      isAnimating.value = false
    }, 2000)
  })
}

// 减法部分的函数
function generateNewSubtraction() {
  isSubtracting.value = false
  minuend.value = Math.floor(Math.random() * 7) + 3
  subtrahend.value = Math.floor(Math.random() * minuend.value)
  difference.value = minuend.value - subtrahend.value
}

function showSubtractionAnimation() {
  isSubtracting.value = false
  nextTick(() => {
    isSubtracting.value = true
    setTimeout(() => {
      isSubtracting.value = false
    }, 2000)
  })
}

function generateNewMultiplication() {
  isMultiplying.value = false
  currentRow.value = 0
  nextTick(() => {
    multiplicand.value = Math.floor(Math.random() * 5) + 1
    multiplier.value = Math.floor(Math.random() * 4) + 2
    product.value = multiplicand.value * multiplier.value
  })
}

function showMultiplicationAnimation() {
  isMultiplying.value = false
  currentRow.value = 0
  
  nextTick(() => {
    isMultiplying.value = true
    const animate = () => {
      if (currentRow.value < multiplier.value) {
        currentRow.value++
        setTimeout(animate, 800)
      }
    }
    setTimeout(animate, 100)
  })
}

function generateNewDivision() {
  isDividing.value = false
  currentGroup.value = 0
  nextTick(() => {
    divisor.value = Math.floor(Math.random() * 3) + 2
    quotient.value = Math.floor(Math.random() * 3) + 2
    dividend.value = divisor.value * quotient.value
  })
}

function showDivisionAnimation() {
  isDividing.value = false
  currentGroup.value = 0
  
  nextTick(() => {
    isDividing.value = true
    const animate = () => {
      if (currentGroup.value < divisionGroups.value) {
        currentGroup.value++
        setTimeout(animate, 800)
      }
    }
    setTimeout(animate, 100)
  })
}
</script>

<style scoped>
.math-section {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.math-container {
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.problem-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.number-display {
  font-size: 2em;
  display: flex;
  align-items: center;
  gap: 20px;
}

.operator {
  color: #666;
  margin: 0 10px;
}

.visual-area {
  display: flex;
  gap: 80px;
  margin: 20px 0;
  min-height: 120px;
  position: relative;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  min-width: 200px;
  position: relative;
}

.item.apple {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  transition: all 1s ease;
  position: relative;
}

.item.apple::before {
  content: '🍎';
}

.item.apple.moving {
  transform: translateX(95px);
}

.items-container:nth-child(2) .item.apple {
  opacity: 1;
  transform: translateX(0);
}

.result-area {
  font-size: 2em;
  display: flex;
  align-items: center;
  gap: 20px;
}

.result {
  color: #4CAF50;
  font-weight: bold;
}

.controls {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.primary-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.primary-btn:hover {
  background-color: #45a049;
}

.item.star {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  transition: all 1s ease;
}

.item.star::before {
  content: '⭐';
}

.item.star.fade-out {
  opacity: 0;
  transform: scale(0.5);
}

/* 乘法样式 */
.multiplication {
  flex-direction: column;
  gap: 15px;
}

.row-container {
  display: flex;
  gap: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  margin-bottom: 10px;
}

.row-container.show-row {
  opacity: 1;
  transform: translateY(0);
}

/* 除法样式 */
.division .groups-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.division .group {
  display: flex;
  gap: 5px;
  padding: 10px;
  border: 2px dashed transparent;
  border-radius: 10px;
  transition: all 0.5s ease;
  opacity: 0.5;
  transform: scale(0.95);
}

.division .group.highlight {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
  opacity: 1;
  transform: scale(1);
}

.fruit {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.multiplication, .division {
  min-height: 200px;
  padding: 20px;
}

.groups-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  min-height: 150px;
}
</style>

## 减法学习

<ClientOnly>
  <div class="math-section">
    <!-- 减法练习区 -->
    <div class="math-container">
      <div class="problem-area">
        <div class="number-display">
          <span>{{ minuend }}</span>
          <span class="operator">-</span>
          <span>{{ subtrahend }}</span>
        </div>
        <div class="visual-area">
          <div class="items-container">
            <div v-for="n in minuend" 
                 :key="'minuend-'+n" 
                 class="item star"
                 :class="{'fade-out': isSubtracting && n <= subtrahend}"
            ></div>
          </div>
        </div>
        <div class="result-area">
          <span class="operator">=</span>
          <span class="result">{{ difference }}</span>
        </div>
      </div>
    </div>
    <!-- 控制按钮 -->
    <div class="controls">
      <button @click="generateNewSubtraction" class="primary-btn">新题目</button>
      <button @click="showSubtractionAnimation" class="primary-btn">显示过程</button>
    </div>
  </div>
</ClientOnly>

## 乘法学习

<ClientOnly>
  <div class="math-section">
    <div class="math-container">
      <div class="problem-area">
        <div class="number-display">
          <span>{{ multiplicand }}</span>
          <span class="operator">×</span>
          <span>{{ multiplier }}</span>
        </div>
        <div class="visual-area multiplication">
          <div v-for="i in multiplier" :key="i" class="row-container"
               :class="{'show-row': isMultiplying && i <= currentRow}">
            <div v-for="j in multiplicand" :key="j" class="item fruit">
              🍊
            </div>
          </div>
        </div>
        <div class="result-area">
          <span class="operator">=</span>
          <span class="result">{{ product }}</span>
        </div>
      </div>
    </div>
    <div class="controls">
      <button @click="generateNewMultiplication" class="primary-btn">新题目</button>
      <button @click="showMultiplicationAnimation" class="primary-btn">显示过程</button>
    </div>
  </div>
</ClientOnly>

## 除法学习

<ClientOnly>
  <div class="math-section">
    <div class="math-container">
      <div class="problem-area">
        <div class="number-display">
          <span>{{ dividend }}</span>
          <span class="operator">÷</span>
          <span>{{ divisor }}</span>
        </div>
        <div class="visual-area division">
          <div class="groups-container">
            <div v-for="i in divisionGroups" :key="i" class="group"
                 :class="{'highlight': isDividing && i <= currentGroup}">
              <div v-for="j in divisor" :key="j" class="item fruit">
                🍇
              </div>
            </div>
          </div>
        </div>
        <div class="result-area">
          <span class="operator">=</span>
          <span class="result">{{ quotient }}</span>
        </div>
      </div>
    </div>
    <div class="controls">
      <button @click="generateNewDivision" class="primary-btn">新题目</button>
      <button @click="showDivisionAnimation" class="primary-btn">显示过程</button>
    </div>
  </div>
</ClientOnly>
