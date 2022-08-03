<script setup>
import BookMark from "./parts/BookMark.vue";
import Sticker from "./parts/Sticker.vue";
</script>

<template>
  <div class="closed-notebook">
    <img class="texture" alt="texture" src="../assets/images/paper-texture.jpeg" />
    <div class="belt" @click="$emit('onclickBelt', true)"></div>
    <div class="title">笔记本</div>
    <BookMark justify="flex-end" title="歌曲" bgcolor="rgb(120 186 237 / 80%)" top="20" right="-60" depth="-1" pdr="15" />
    <BookMark justify="flex-end" title="相册" bgcolor="rgb(237 202 146 / 80%)" top="120" right="-50" depth="-1"
              pdr="15" />
    <BookMark justify="flex-end" title="事件" bgcolor="rgb(149 209 157 / 80%)" top="360" right="-55" depth="-1"
              pdr="10" />
    <BookMark justify="flex-end" title="游戏" bgcolor="rgb(205 207 234 / 80%)" top="500" right="-65" depth="-1"
              pdr="20" />
    <Sticker
      depth="1" fit="cover" radius="50%" width="220" height="220" left="160" top="250"
      src="https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/d542b8975de686443f3e376b85fbcf53.gif"
    />
    <Sticker
      rotate="-34" depth="2" fit="fill" radius="50%" width="280" height="200" left="100" top="250"
      src="https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/a4bb75071cf9b3c932c32df83fbfaad8.gif"
    />
    <Sticker depth="1" fit="fill" radius="50%" width="80" height="80" left="10" top="10"
             src="https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/himawari.png"
    />
    <div class="signature sig-1">Time tick away, dream faded away.</div>
    <div class="signature sig-2">I just want something tacky and cert.</div>
  </div>
</template>

<style scoped>
.closed-notebook {
  border-top-style: dotted;
  border-top-width: 4px;
  border-top-color: rgb(255, 248, 242);
  border-bottom-style: dotted;
  border-bottom-width: 4px;
  border-bottom-color: rgb(255, 248, 242);
  border-right-style: dotted;
  border-right-width: 4px;
  border-right-color: rgb(255, 248, 242);
  position: relative;
  border-radius: 20px;
  padding: 15px;
  margin: 0 auto;
  user-select: none;
  height: 600px;
  width: 450px;
  box-sizing: border-box;
  background-color: #EEA6B7;
}

.texture {
  border-radius: 20px;
  box-sizing: border-box;
  position: absolute;
  opacity: 0.5;
  left: 0;
  top: -5px;
  width: 450px;
  height: 600px;
}

.belt {
  border: 4px dotted rgb(255, 248, 242);
  box-sizing: border-box;
  border-radius: 25px 10px 10px 25px;
  position: absolute;
  right: -15px;
  top: 275px;
  background-color: #D4ADBC;
  width: 120px;
  height: 50px;
}

.title {
  color: #EC8AA4;
  font-size: 80px;
  position: absolute;
  top: 110px;
  left: 31px;
}

.signature {
  color: #B94463;
  font-size: 20px;
  position: absolute;
  left: 28px;
}

.sig-1 {
  bottom: 40px;
}

.sig-2 {
  bottom: 20px;
}
</style>