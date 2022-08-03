<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { formatDate } from "../../utils/date-formatter.js";
import awarding from "../../assets/audio/awarding.wav";
import failure from "../../assets/audio/failure.wav";

let point = ref(null);
let audio = ref(null);
let layout = ref([]);
let methods = ref({});
let audioSrc = [awarding, failure];
let audioSrcIndex = ref(0);
let usedTime = ref(0);

function initLayout() {
  let index = 0;
  for ( let i = 0; i < 12; i++ ) {
    layout.value[i] = [];
    for ( let j = 0; j < 12; j++ ) {
      layout.value[i][j] = point.value[index];
      index++;
    }
  }
}

let y = ref(0);
let x = ref(0);
let ly = ref(0);
let lx = ref(0);
let rx = ref(0);
let ry = ref(0);

let interval = ref();
let timeInterval = ref();
let speed = ref(350);
let score = ref(0);
let isDead = false;

function controller(condition, movement, options = { lcolor: "white", color: "rgb(212, 173,188)" }) {
  if ( !isDead ) {
    countTime();
  }
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    ly.value = y.value;
    lx.value = x.value;
    layout.value[ly.value][lx.value].style.backgroundColor = options.lcolor;
    movement();
    if ( condition() ) {
      layout.value[ly.value][lx.value].style.backgroundColor = options.lcolor;
      layout.value[0][0].style.backgroundColor = options.color;
      ElMessage.error("你已经超出地图边界！");
      audioSrcIndex.value = 1;
      audio.value.play();
      score.value = 0;
      ly.value = 0;
      lx.value = 0;
      y.value = 0;
      x.value = 0;
      usedTime.value = 0;
      isDead = true;
      clearInterval(interval.value);
    } else {
      isDead = false;
      layout.value[y.value][x.value].style.backgroundColor = options.color;
      if ( rx.value === y.value && ry.value === x.value ) {
        audioSrcIndex.value = 0;
        audio.value.play();
        score.value++;
        newScorePosition();
      }
    }
  }, speed.value);
}

function setScorePosition() {
  let x = Math.floor(Math.random() * 12);
  let y = Math.floor(Math.random() * 12);
  return { x, y };
}

function newScorePosition() {
  let { x, y } = setScorePosition();
  rx.value = x;
  ry.value = y;
  layout.value[x][y].style.backgroundColor = "gray";
}

function countTime() {
  clearInterval(timeInterval.value);
  timeInterval.value = setInterval(() => {
    usedTime.value++;
  }, 1000);
}

function initPoint() {
  countTime();
  controller(() => x.value >= 12, () => x.value++);
}

function downPoint() {
  controller(() => y.value >= 12, () => y.value++);
}

function upPoint() {
  controller(() => y.value < 0, () => y.value--);
}

function leftPoint() {
  controller(() => x.value < 0, () => x.value--);
}

function rightPoint() {
  controller(() => x.value >= 12, () => x.value++);
}

function onInputChange(value) {
  clearInterval(interval.value);
  if ( value === 100 ) {
    ElMessage.warning("这就是大佬吗，这样的速度都无法满足！");
  }
}

onMounted(() => {
  initLayout();
  initPoint();
  newScorePosition();
});
</script>

<template>
  <div class="mini-games">
    <div class="games">
      <div class="content">
        <div ref="point" class="point" v-for="d in 144" :key="d"></div>
      </div>
    </div>
    <audio ref="audio" autoplay :src="audioSrc[audioSrcIndex]"></audio>
    <div class="middle">
      <div class="config">
        <div>速度：</div>
        <div>
          <el-input-number size="small" v-model="speed" :min="100" :max="800" :step="50" @change="onInputChange" />
        </div>
      </div>
      <div class="score">得分：<span>{{ score }}</span></div>
      <div class="used-time">用时：{{ usedTime }} s</div>
    </div>
    <div class="controls">
      <div class="layer-1">
        <div class="top-button">
          <el-button type="success" plain @click="upPoint">上</el-button>
        </div>
        <div class="down-button">
          <el-button type="success" plain @click="downPoint">下</el-button>
        </div>
      </div>
      <div class="layer-2">
        <div class="left-button">
          <el-button type="primary" plain @click="leftPoint">左</el-button>
        </div>
        <div class="right-button">
          <el-button type="primary" plain @click="rightPoint">右</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mini-games {
  position: relative;
}

.games {
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.games .content {
  border: 1px solid #EBEBEB;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
}

.games .content .point {
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  border: 1px solid #F0F0F0;
  background-color: white;
}

.middle {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.middle .score span {
  font-size: 20px;
}

.config {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.layer-1, .layer-2 {
  position: absolute;
}

.layer-1 {
  display: flex;
  top: 400px;
  height: 140px;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

.layer-2 {
  display: flex;
  top: 450px;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.el-button {
  font-family: XinYeNian;
}
</style>