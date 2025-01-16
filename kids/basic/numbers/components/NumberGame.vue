<template>
  <div class="number-game">
    <div class="game-container">
      <div class="game-status">
        <h3>找到相同的数字！</h3>
        <p>得分: {{ score }}</p>
      </div>
      
      <div class="game-grid">
        <div 
          v-for="(card, index) in cards" 
          :key="index"
          class="card"
          :class="{ flipped: card.isFlipped }"
          @click="flipCard(index)"
        >
          <div class="card-inner">
            <div class="card-front">?</div>
            <div class="card-back">{{ card.value }}</div>
          </div>
        </div>
      </div>
      
      <button class="restart-btn" @click="restartGame">重新开始</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cards = ref([])
const score = ref(0)
let flippedCards = []
let canFlip = true

function initializeCards() {
  const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  cards.value = numbers
    .sort(() => Math.random() - 0.5)
    .map(value => ({
      value,
      isFlipped: false,
      isMatched: false
    }))
}

function flipCard(index) {
  if (!canFlip) return
  if (cards.value[index].isFlipped || cards.value[index].isMatched) return
  
  cards.value[index].isFlipped = true
  flippedCards.push(index)
  
  if (flippedCards.length === 2) {
    canFlip = false
    checkMatch()
  }
}

function checkMatch() {
  const [firstIndex, secondIndex] = flippedCards
  const firstCard = cards.value[firstIndex]
  const secondCard = cards.value[secondIndex]
  
  if (firstCard.value === secondCard.value) {
    firstCard.isMatched = true
    secondCard.isMatched = true
    score.value += 10
    resetFlippedCards()
  } else {
    setTimeout(() => {
      firstCard.isFlipped = false
      secondCard.isFlipped = false
      resetFlippedCards()
    }, 1000)
  }
}

function resetFlippedCards() {
  flippedCards = []
  canFlip = true
}

function restartGame() {
  score.value = 0
  initializeCards()
}

onMounted(() => {
  initializeCards()
})
</script>

<style scoped>
.number-game {
  padding: 20px;
}

.game-container {
  max-width: 600px;
  margin: 0 auto;
}

.game-status {
  text-align: center;
  margin-bottom: 20px;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.card {
  aspect-ratio: 1;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background: #4CAF50;
  color: white;
  border-radius: 8px;
}

.card-back {
  background: #2196F3;
  transform: rotateY(180deg);
}

.restart-btn {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.restart-btn:hover {
  background: #45a049;
}
</style> 