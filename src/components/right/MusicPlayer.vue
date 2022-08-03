<script setup>
import { onMounted, ref } from "vue";
import Sticker from "../parts/Sticker.vue";

let musics = ref([
  {
    src: "https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/%E4%B9%85%E7%9F%B3%E8%AD%B2%20-%20%E3%81%B5%E3%81%9F%E3%81%9F%E3%81%B3%20(%E5%8D%83%E3%81%A8%E5%8D%83%E5%B0%8B%E3%81%AE%E7%A5%9E%E9%9A%A0%E3%81%97).mp3",
    cover: "https://p1.music.126.net/ahHhYhz5N4r9c-EpLkwXYA==/933485371981854.jpg?param=130y130",
    title: "千与千寻的神隐",
    author: "宫崎骏",
    desc: "没看过千与千寻，音乐听着很欢快，这是网易云私人推送给我的歌，想让你也听听。"
  },
  {
    src: "https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/%E8%90%A4%E7%81%AB%E4%B9%8B%E6%A3%AE-CMJ.mp3",
    cover: "https://p2.music.126.net/jNh5VIYGzc74RFPMv_TouQ==/109951164615554163.jpg?param=130y130",
    title: "萤火之森",
    author: "CMJ",
    desc: `银笑着对萤说：“来吧！萤！我终于可以碰你了！”两人紧紧的拥抱在一起，虽然只是一瞬间，但对他们来说是永恒的。银最终化为点点荧光，消失在夜空中。`
  },
  {
    src: "https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/%E5%A4%8F%E3%81%AE%E5%96%9A%E3%81%8F-%E9%82%B1%E6%9C%89%E5%8F%A5.mp3",
    cover: "https://p2.music.126.net/7BPYzlYTQp285WXdO-u2Ug==/18215609137826245.jpg?param=130y130",
    title: "夏天的呼唤",
    author: "邱有句",
    desc: `八月，透蓝的天空，悬着火球似的太阳，云彩好似被太阳烧化了，也消失得无影无踪。</br>天气闷热得要命，一丝风也没有稠乎乎的空气好像凝住了。`
  }
]);
let index = ref(0);
let audio = ref(null);
let flag = ref(true);
let methods = {};
let icons = ref([
  "https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/play.svg",
  "https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/stop.svg"
]);
let iconIndex = ref(0);

onMounted(() => {
  methods.onclickLeft = () => {
    if ( index.value <= 0 ) {
      index.value = musics.value.length - 1;
    } else {
      index.value--;
    }
    audio.value.pause();
    iconIndex.value = 0;
  };

  methods.onclickStopOrPlay = () => {
    if ( flag.value ) {
      audio.value.play();
      iconIndex.value = 1;
    } else {
      audio.value.pause();
      iconIndex.value = 0;
    }
    flag.value = !flag.value;
  };

  methods.onclickRight = () => {
    if ( index.value >= musics.value.length - 1 ) {
      index.value = 0;
    } else {
      index.value++;
    }
    audio.value.pause();
    iconIndex.value = 0;
  };
});
</script>

<template>
  <div class="music-player">
    <Sticker src="https://generic-data.oss-cn-chengdu.aliyuncs.com/2022Qixi/8414ee132a3c13aa2b90b6cfce339bc1.jpeg"
             top="10" left="315" width="60" height="60" />
    <audio ref="audio" :src="musics[index].src" style="display: none"></audio>
    <div class="msg title">歌曲名：{{ musics[index].title }}</div>
    <div class="msg author">作者：{{ musics[index].author }}</div>
    <div class="cover-wrapper">
      <img class="cover" :src="musics[index].cover" alt="music cover" />
    </div>
    <div class="control-wrapper">
      <div class="control">
        <div class="left">
          <img @click="methods.onclickLeft" src="../../assets/icons/left.svg" alt="">
        </div>
        <div class="stop-or-play">
          <img @click="methods.onclickStopOrPlay" :src="icons[iconIndex]" alt="">
        </div>
        <div class="right">
          <img @click="methods.onclickRight" src="../../assets/icons/right.svg" alt="">
        </div>
      </div>
    </div>
    <div class="desc" v-html="musics[index].desc"></div>
  </div>
</template>

<style scoped>
.control-wrapper {
  width: 100%;
  position: absolute;
  top: 360px;
  left: 0;
}

.control {
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.control img {
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.music-player {
  position: relative;
}

.cover-wrapper {
  position: absolute;
  top: 130px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.cover {
  box-sizing: border-box;
  border: 20px solid black;
  width: 175px;
  height: 175px;
  object-fit: cover;
  border-radius: 50%;
}

.title {
  font-size: 22px;
}

.author {
  margin-top: 20px;
  font-size: 18px;
}

.desc {
  position: absolute;
  top: 450px;
  font-size: 18px;
}
</style>