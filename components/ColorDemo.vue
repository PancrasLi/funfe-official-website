<template>
  <div class="color-demo">
    <div class="color-box" style="background-color: red">红色</div>
    <div class="color-box" style="background-color: yellow">黄色</div>
    <div class="color-box" style="background-color: blue">蓝色</div>
  </div>
</template>

<style scoped>
.color-box {
  width: 100px;
  height: 100px;
  margin: 10px;
  display: inline-block;
  text-align: center;
  line-height: 100px;
  color: white;
  border-radius: 10px;
  transition: transform 0.3s;
}

.color-box:hover {
  transform: scale(1.1);
}

.color-demo {
  text-align: center;
}
</style> 