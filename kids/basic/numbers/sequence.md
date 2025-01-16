# 数字序列

<script setup>
import { ref, onMounted } from 'vue'
import AdvancedSequences from './components/AdvancedSequences.vue'

// 跳跃的小球动画
const position = ref(0)
const heights = [0, -100, -50, -80, -30]
let currentIndex = 0

function animate() {
  position.value = heights[currentIndex]
  currentIndex = (currentIndex + 1) % heights.length
  setTimeout(animate, 500)
}

// 彩虹数字链
const numbers = [2, 4, 6, 8, 10, 12]
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']

// 练习题动画
const solutions = ref([
  { sequence: [2, 4, 6, 8, 10], rule: '+2', current: 0 },
  { sequence: [1, 3, 6, 10, 15], rule: '+2, +3, +4, +5', current: 0 },
  { sequence: [1, 2, 4, 8, 16], rule: '×2', current: 0 }
])

const showSolution = ref(false)
const currentStep = ref(0)

function demonstrateSolution(index) {
  showSolution.value = true
  currentStep.value = 0
  const solution = solutions.value[index]
  
  const interval = setInterval(() => {
    if (currentStep.value < solution.sequence.length - 1) {
      currentStep.value++
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

onMounted(() => {
  animate()
})
</script>

## 什么是数字序列？

数字序列就像是数字们排队玩游戏，按照特定的规则一个接一个地排列。比如:
- 1, 2, 3, 4, 5... (每个数字比前一个数字大1)
- 2, 4, 6, 8... (每个数字比前一个数字大2)
- 1, 3, 6, 10... (等差数列)

## 有趣的动画案例

### 1. 跳跃的小球

<div class="ball-container">
  <div 
    class="ball"
    :style="{ transform: `translateY(${position}px)` }"
  ></div>
</div>

### 2. 彩虹数字链

<div class="number-chain">
  <span 
    v-for="(num, index) in numbers" 
    :key="index"
    :style="{ color: colors[index % colors.length] }"
    class="number"
  >
    {{ num }}
  </span>
</div>

<style scoped>
.ball-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ball {
  width: 50px;
  height: 50px;
  background-color: #42b883;
  border-radius: 50%;
  transition: transform 0.5s ease;
}

.number-chain {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.number {
  font-size: 24px;
  font-weight: bold;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 768px) {
  .number {
    font-size: 18px;
  }
  .number-chain {
    gap: 10px;
    flex-wrap: wrap;
  }
}

.solution-container {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
}

.sequence-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.number {
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  opacity: 0.5;
  transform: scale(0.9);
  transition: all 0.3s ease;
  position: relative;
}

.number.active {
  opacity: 1;
  transform: scale(1);
}

.number.highlight {
  background: #42b883;
  color: white;
  animation: pulse 1s infinite;
}

.rule {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #666;
  background: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #3aa876;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
</style>

## 练习题

1. 找规律：看看下面的数字序列，你能找出下一个数字是什么吗？
   - 2, 4, 6, __, 10
   - 1, 3, 6, 10, __
   - 1, 2, 4, 8, __

2. 创意挑战：
   试着用我们学过的数字序列，设计一个有趣的动画！可以是：
   - 跳动的星星
   - 变大变小的形状
   - 移动的小车

## 小贴士

- 观察数字之间的关系
- 寻找规律的方法：
  - 看相邻数字的差
  - 观察数字是否在乘以某个数
  - 找出数字变化的模式

## 练习题解答

### 1. 2, 4, 6, __, 10
<div class="solution-container">
  <div class="sequence-animation">
    <span 
      v-for="(num, index) in solutions[0].sequence" 
      :key="index"
      :class="{ 
        'number': true,
        'active': showSolution && index <= currentStep,
        'highlight': showSolution && index === currentStep
      }"
    >
      {{ num }}
      <span class="rule" v-if="showSolution && index < solutions[0].sequence.length - 1">
        +2
      </span>
    </span>
  </div>
  <button @click="demonstrateSolution(0)" v-if="!showSolution">
    显示解答
  </button>
</div>

### 2. 1, 3, 6, 10, __
<div class="solution-container">
  <div class="sequence-animation">
    <span 
      v-for="(num, index) in solutions[1].sequence" 
      :key="index"
      :class="{ 
        'number': true,
        'active': showSolution && index <= currentStep,
        'highlight': showSolution && index === currentStep
      }"
    >
      {{ num }}
      <span class="rule" v-if="showSolution && index < solutions[1].sequence.length - 1">
        +{{ index + 2 }}
      </span>
    </span>
  </div>
  <button @click="demonstrateSolution(1)" v-if="!showSolution">
    显示解答
  </button>
</div>

**规律总结**：
1. 第一次加2
2. 第二次加3
3. 第三次加4
4. 第四次加5

这种数列的特点是：
- 每一步增加的数都在递增
- 增加的数形成等差数列：2, 3, 4, 5
- 可以用公式表示：下一个数 = 当前数 + (位置 + 1)

**生活中的例子**：
- 堆积木：每层比上层多一块
- 爬楼梯：每次多爬一级
- 存钱：每月比上月多存一些

::: tip 小提示
解这类题目的技巧：
1. 先看相邻数字之间的差
2. 观察这些差是否有规律
3. 找出差的变化规律
4. 应用规律求解下一个数
:::

## 进阶内容

让我们一起探索三种神奇的数列！每种数列都有它独特的规律和美丽之处。

### 1. 斐波那契数列
这是一个神奇的数列，它藏在大自然的许多地方。每个数都是前两个数的和：
- 1, 1, 2, 3, 5, 8, 13, 21...
- 规律：从第三个数开始，每个数等于前两个数的和
- 大自然中的例子：
  - 向日葵的种子排列
  - 松果的螺旋纹路
  - 兔子的繁殖规律

### 2. 等差数列
想象你在爬楼梯，每次都上升相同的高度：
- 2, 5, 8, 11, 14, 17...
- 规律：每个数都比前一个数多一个固定的值（这个值叫做"公差"）
- 生活中的例子：
  - 楼梯的台阶
  - 公交车站的间距
  - 考试的分数等级

### 3. 等比数列
这就像滚雪球，每次都变大相同的倍数：
- 1, 1.3, 1.69, 2.197, 2.8561...
- 规律：每个数都是前一个数乘以一个固定的数（这个数叫做"公比"）
- 实际应用：
  - 银行的复利计算
  - 细胞的分裂
  - 声音的衰减

<AdvancedSequences />

::: tip 动手实验
试试改变这些值：
1. 等差数列的公差：看看数字之间的间隔如何变化
2. 等比数列的公比：观察圆圈是如何变大的
3. 点击"演示"按钮：观察每种数列的生长过程
:::

::: warning 注意事项
- 等差数列中，数字间的差值保持不变
- 等比数列中，相邻数字的比值保持不变
- 斐波那契数列在自然界中特别常见
:::

::: tip 实际应用
这些高级数列在现实生活中有很多应用：
- 斐波那契数列：植物生长、建筑设计、艺术创作
- 等差数列：音乐节奏、楼梯设计、考试评分
- 等比数列：细胞分裂、复利计算、声音传播
:::

### 趣味小知识
1. 斐波那契数列的任意相邻两数的比值，越往后越接近黄金比例0.618
2. 等差数列可以用来设计音乐的节奏，比如钢琴的黑键排列
3. 等比数列在自然界中常见于生物的生长过程

### 挑战思考
1. 你能在家里找到这些数列的例子吗？
2. 尝试用积木搭建一个等差或等比的图形
3. 观察植物的生长，看看能否发现斐波那契数列的痕迹
