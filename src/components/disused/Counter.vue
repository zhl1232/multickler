<script setup>
import { ref } from "vue";
import { ledpaths } from "../../data/ledpath.js";

let ledFigure = [
  {
    figure: ledpaths[0],
    msg: "七夕节！",
    color: "blue"
  },
  {
    figure: ledpaths[1],
    msg: "8月4日！",
    color: "blue"
  },
  {
    figure: ledpaths[2],
    msg: "2022年！",
    color: "blue"
  },
  {
    figure: ledpaths[3],
    msg: "一点小心意！",
    color: "gray"
  },
  {
    figure: ledpaths[4],
    msg: "这算惊喜吗？",
    color: "red"
  },
  {
    figure: ledpaths[5],
    msg: "准备好了吗？",
    color: "blue"
  }
];
let ledIndex = ref(5);

let interval = setInterval(() => {
  if ( ledIndex.value > 0 ) {
    ledIndex.value--;
  } else {
    clearInterval(interval);
  }
}, 1100);
</script>

<template>
  <div class="counter">
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
        >
      <defs>
        <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0" stop-color="green" />
          <stop offset="0.5" stop-color="yellow" />
          <stop offset="1" stop-color="red" />
        </linearGradient>
      </defs>
      <path v-bind:d="ledFigure[ledIndex].figure"></path>
    </svg>
    <div class="title">{{ ledFigure[ledIndex].msg }}</div>
  </div>
</template>

<style scoped>
.title {
  font-size: 90px;
}
</style>