# 角色动画

<script setup>
import { ref, onMounted } from 'vue'

// 小兔子状态
const bunnyPosition = ref(0)
const bunnyMood = ref('🐰')
const isHopping = ref(false)
let hopInterval

// 小鸟状态
const birdHeight = ref(0)
const birdWings = ref('🦅')
const isFlying = ref(false)
let flyInterval

// 小狗状态
const dogFrame = ref(0)
const dogEmojis = ['🐕', '🦮', '🐕', '🐩']
const isDogRunning = ref(false)
let runInterval

// 小猫状态
const catSize = ref(30)
const catRotation = ref(0)
const catMood = ref('😺')
const isPlaying = ref(false)
let playInterval

// 角色动画控制函数
function toggleHop() {
  isHopping.value = !isHopping.value
  if (isHopping.value) {
    hopInterval = setInterval(() => {
      // 添加水平移动
      const time = Date.now() / 300
      bunnyPosition.value = Math.sin(time) * 30
      // 水平位移
      const horizontalOffset = Math.cos(time) * 20
      bunnyMood.value = bunnyPosition.value > 0 ? '🐰' : '🐇'
      bunnyStyle.value = {
        transform: `translateY(${bunnyPosition.value}px) translateX(${horizontalOffset}px) rotate(${bunnyPosition.value}deg)`
      }
    }, 50)
  } else {
    clearInterval(hopInterval)
    bunnyPosition.value = 0
    bunnyStyle.value = { transform: 'none' }
  }
}

function toggleFly() {
  isFlying.value = !isFlying.value
  if (isFlying.value) {
    flyInterval = setInterval(() => {
      const time = Date.now() / 400
      birdHeight.value = Math.sin(time) * 40
      // 添加水平移动和旋转
      const horizontalOffset = Math.cos(time) * 30
      const rotation = Math.sin(time) * 15
      birdWings.value = birdHeight.value > 0 ? '🦅' : '🦢'
      birdStyle.value = {
        transform: `translateY(${birdHeight.value}px) translateX(${horizontalOffset}px) rotate(${rotation}deg)`
      }
    }, 50)
  } else {
    clearInterval(flyInterval)
    birdHeight.value = 0
    birdStyle.value = { transform: 'none' }
  }
}

function toggleRun() {
  isDogRunning.value = !isDogRunning.value
  if (isDogRunning.value) {
    runInterval = setInterval(() => {
      dogFrame.value = (dogFrame.value + 1) % dogEmojis.length
      // 添加弹跳效果
      const bounce = Math.abs(Math.sin(Date.now() / 200)) * 10
      const move = (Date.now() / 10) % 100
      dogStyle.value = {
        transform: `translateY(-${bounce}px) translateX(${move}px)`
      }
    }, 200)
  } else {
    clearInterval(runInterval)
    dogFrame.value = 0
    dogStyle.value = { transform: 'none' }
  }
}

function togglePlay() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    playInterval = setInterval(() => {
      const time = Date.now() / 300
      catSize.value = 30 + Math.sin(time) * 10
      catRotation.value = (catRotation.value + 10) % 360
      // 添加跳跃和移动
      const jump = Math.abs(Math.sin(time)) * 20
      const slide = Math.cos(time) * 15
      catMood.value = ['😺', '😸', '😺', '😹'][Math.floor(time) % 4]
      catStyle.value = {
        transform: `rotate(${catRotation.value}deg) translateY(-${jump}px) translateX(${slide}px)`,
        fontSize: catSize.value + 'px'
      }
    }, 50)
  } else {
    clearInterval(playInterval)
    catSize.value = 30
    catRotation.value = 0
    catMood.value = '😺'
    catStyle.value = { transform: 'none', fontSize: '30px' }
  }
}

// 清理定时器
onMounted(() => {
  return () => {
    clearInterval(hopInterval)
    clearInterval(flyInterval)
    clearInterval(runInterval)
    clearInterval(playInterval)
  }
})

// 互动场景状态
const scene = ref('garden') // garden, sky, playground
const isScenePlaying = ref(false)
let sceneInterval

// 小兔子和小鸟的追逐游戏
const bunnyX = ref(0)
const birdX = ref(200)
const bunnyY = ref(0)
const birdY = ref(-30)
const isChasing = ref(false)
let chaseInterval

// 小猫和小狗的舞蹈派对
const dancerPositions = ref({ cat: 0, dog: 180 })
const dancerEmotions = ref({ cat: '😺', dog: '🐕' })
const isDancing = ref(false)
let danceInterval

// 场景切换函数
function changeScene() {
  scene.value = {
    'garden': 'sky',
    'sky': 'playground',
    'playground': 'garden'
  }[scene.value]
}

// 追逐游戏控制
function toggleChase() {
  isChasing.value = !isChasing.value
  if (isChasing.value) {
    chaseInterval = setInterval(() => {
      const time = Date.now() / 300
      // 小兔子追逐路径更自然
      bunnyX.value = (bunnyX.value + 3) % 250
      bunnyY.value = Math.sin(time) * 20
      const bunnyRotation = Math.sin(time) * 10
      
      // 小鸟飞行路径更复杂
      birdX.value = (birdX.value + 4) % 250
      birdY.value = -30 + Math.sin(time * 1.5) * 30
      const birdRotation = Math.cos(time) * 15
      
      // 更新样式
      bunnyChaseStyle.value = {
        transform: `translate(${bunnyX.value}px, ${bunnyY.value}px) rotate(${bunnyRotation}deg)`
      }
      birdChaseStyle.value = {
        transform: `translate(${birdX.value}px, ${birdY.value}px) rotate(${birdRotation}deg)`
      }
    }, 50)
  } else {
    clearInterval(chaseInterval)
    resetChasePositions()
  }
}

// 舞蹈派对控制
function toggleDance() {
  isDancing.value = !isDancing.value
  if (isDancing.value) {
    danceInterval = setInterval(() => {
      const time = Date.now() / 300
      // 更复杂的舞蹈动作
      dancerPositions.value.cat = (dancerPositions.value.cat + 10) % 360
      dancerPositions.value.dog = (dancerPositions.value.dog + 10) % 360
      
      // 添加跳跃效果
      const catJump = Math.abs(Math.sin(time)) * 20
      const dogJump = Math.abs(Math.cos(time)) * 20
      
      // 更新样式
      catDanceStyle.value = {
        transform: `rotate(${dancerPositions.value.cat}deg) translateX(50px) translateY(-${catJump}px)`
      }
      dogDanceStyle.value = {
        transform: `rotate(${dancerPositions.value.dog}deg) translateX(50px) translateY(-${dogJump}px)`
      }
      
      // 更丰富的表情变化
      dancerEmotions.value.cat = ['😺', '😸', '😺', '😹'][Math.floor(time) % 4]
      dancerEmotions.value.dog = ['🐕', '🦮', '🐕', '🐩'][Math.floor(time) % 4]
    }, 100)
  } else {
    clearInterval(danceInterval)
    resetDancePositions()
  }
}

// 新增样式状态
const bunnyStyle = ref({ transform: 'none' })
const birdStyle = ref({ transform: 'none' })
const dogStyle = ref({ transform: 'none' })
const catStyle = ref({ transform: 'none', fontSize: '30px' })
const bunnyChaseStyle = ref({ transform: 'none' })
const birdChaseStyle = ref({ transform: 'none' })
const catDanceStyle = ref({ transform: 'none' })
const dogDanceStyle = ref({ transform: 'none' })

// 重置函数
function resetChasePositions() {
  bunnyX.value = 0
  birdX.value = 200
  bunnyY.value = 0
  birdY.value = -30
  bunnyChaseStyle.value = { transform: 'none' }
  birdChaseStyle.value = { transform: 'none' }
}

function resetDancePositions() {
  dancerPositions.value = { cat: 0, dog: 180 }
  dancerEmotions.value = { cat: '😺', dog: '🐕' }
  catDanceStyle.value = { transform: 'none' }
  dogDanceStyle.value = { transform: 'none' }
}

onMounted(() => {
  return () => {
    clearInterval(chaseInterval)
    clearInterval(danceInterval)
  }
})
</script>

## 让角色动起来！ 🎭

你好，小朋友！今天我们要学习如何让可爱的小动物动起来。
每个角色都有自己特别的动作，让我们一起来认识它们吧！

### 1. 蹦蹦跳跳的小兔子 🐰

小兔子最喜欢跳跃了！它上下跳动的时候，样子也会变化哦。

<div class="demo-box">
  <div 
    class="character"
    :style="bunnyStyle"
  >
    {{ bunnyMood }}
  </div>
  <button 
    @click="toggleHop"
    :class="{ active: isHopping }"
  >
    {{ isHopping ? '停止' : '开始' }}跳跃
  </button>
</div>

### 2. 自由飞翔的小鸟 🦅

小鸟在天空中飞翔，它的翅膀会随着高度变化而改变。

<div class="demo-box">
  <div 
    class="character"
    :style="birdStyle"
  >
    {{ birdWings }}
  </div>
  <button 
    @click="toggleFly"
    :class="{ active: isFlying }"
  >
    {{ isFlying ? '停止' : '开始' }}飞翔
  </button>
</div>

### 3. 奔跑的小狗 🐕

看，小狗在奔跑时会换不同的姿势！

<div class="demo-box">
  <div 
    class="character"
    :style="dogStyle"
  >
    {{ dogEmojis[dogFrame] }}
  </div>
  <button 
    @click="toggleRun"
    :class="{ active: isDogRunning }"
  >
    {{ isDogRunning ? '停止' : '开始' }}奔跑
  </button>
</div>

### 4. 顽皮的小猫 😺

小猫最调皮了，它可以又转又跳，表情还会变化！

<div class="demo-box">
  <div 
    class="character"
    :style="catStyle"
  >
    {{ catMood }}
  </div>
  <button 
    @click="togglePlay"
    :class="{ active: isPlaying }"
  >
    {{ isPlaying ? '停止' : '开始' }}玩耍
  </button>
</div>

## 让角色们一起玩耍！ 🎪

### 1. 追逐游戏：小兔子和小鸟 🎮

看，小兔子想和小鸟一起玩！

<div class="demo-box scene-box" :class="scene">
  <div 
    class="character bunny"
    :style="bunnyChaseStyle"
  >
    🐰
  </div>
  <div 
    class="character bird"
    :style="birdChaseStyle"
  >
    🦅
  </div>
  <div class="controls">
    <button 
      @click="toggleChase"
      :class="{ active: isChasing }"
    >
      {{ isChasing ? '停止' : '开始' }}追逐
    </button>
    <button @click="changeScene">
      换场景
    </button>
  </div>
</div>

### 2. 舞蹈派对：小猫和小狗 💃

小猫和小狗在开舞会呢！

<div class="demo-box party-box">
  <div 
    class="character cat"
    :style="catDanceStyle"
  >
    {{ dancerEmotions.cat }}
  </div>
  <div 
    class="character dog"
    :style="dogDanceStyle"
  >
    {{ dancerEmotions.dog }}
  </div>
  <button 
    @click="toggleDance"
    :class="{ active: isDancing }"
  >
    {{ isDancing ? '停止' : '开始' }}跳舞
  </button>
</div>

## 角色动画的秘密 🎯

让角色生动起来的秘诀是：
1. **变换表情**：通过改变表情符号展现不同心情
2. **改变位置**：上下左右的移动让动作更自然
3. **切换造型**：使用不同的图案表现动作过程
4. **组合动画**：把多个动作组合在一起更有趣

::: tip 小贴士
- 观察每个角色的特点
- 想想它们是怎么动起来的
- 试试同时让多个角色动起来
:::

## 互动的魔法 ✨

让角色互动的秘诀：
1. **配合动作**：角色之间的动作要协调
2. **距离控制**：保持适当的距离让互动看起来自然
3. **情感互动**：通过表情变化展现角色的情感
4. **场景融入**：让角色的互动融入场景中

::: tip 创意提示
试试看：
- 点击"换场景"按钮，看看不同场景下的追逐游戏
- 观察小猫和小狗是怎么配合跳舞的
- 想象还可以设计什么有趣的互动
:::

## 动手创作时间 ✨

1. 想象创作：
   - 你最喜欢哪个小动物？
   - 它还可以做什么动作？
   - 画一画你心目中的动物动作

2. 故事创作：
   - 用这些会动的小动物编一个故事
   - 比如：小兔子和小鸟一起玩耍
   - 或者：小猫和小狗赛跑

3. 创意挑战：
   - 能不能让小动物们互相配合？
   - 试试让小鸟带着小兔子飞
   - 或者让小猫和小狗一起跳舞

<style scoped>
.demo-box {
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.character {
  font-size: 40px;
  transition: all 0.3s ease;
  position: relative;
  will-change: transform;
}

button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

button.active {
  background: #ff6b6b;
}

.scene-box {
  background-size: cover;
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.scene-box.garden {
  background-color: #90EE90;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
}

.scene-box.sky {
  background-color: #87CEEB;
  background-image: linear-gradient(to bottom, #fff 0%, transparent 100%);
}

.scene-box.playground {
  background-color: #DEB887;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
}

.party-box {
  position: relative;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
}

.controls {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.cat, .dog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: -50px 0;
}

.bunny, .bird {
  position: absolute;
  transition: transform 0.1s linear;
}
</style>

::: warning 友情提示
- 动作要自然，不要太夸张
- 表情要可爱，不要太吓人
- 速度要适中，不要太快或太慢
:::

## 下节预告 🌟

下次我们将学习：
- 让角色之间互动
- 制作更复杂的动作组合
- 创建一个完整的动画故事

记得带上你的创意，我们下次见！ 🌈
