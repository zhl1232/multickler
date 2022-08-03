<script setup>
import { onMounted, ref, shallowRef } from "vue";
import PatchedPictures from "./right/PatchedPictures.vue";
import MusicPlayer from "./right/MusicPlayer.vue";
import CustTimeLine from "./left/CustTimeLine.vue";
import MiniGames from "./left/MiniGames.vue";
import BookMark from "./parts/BookMark.vue";

let notebook = ref(null);
let lPart = ref(null);
let rPart = ref(null);
let lPage = ref(null);
let rPage = ref(null);

onMounted(() => {
  lPart.value.style.height = notebook.value.clientHeight + "px";
  rPart.value.style.height = notebook.value.clientHeight + "px";
  setPageObjStyle(lPage, "left");
  setPageObjStyle(rPage, "right");
});

function setPageObjStyle(page, lOrR) {
  let width = `${ notebook.value.clientWidth * 0.5 - 28 }px`;
  let height = `${ notebook.value.clientHeight }px`;
  let zIndexGape = -2, offsetGap = -2, offset = offsetGap, zIndex = zIndexGape;
  for ( let key in page.value ) {
    let style = page.value[key].style;
    style.width = width;
    style.height = height;
    style.zIndex = zIndex;
    style[lOrR] = `${ offset }px`;
    offset += offsetGap * 2;
    zIndex += zIndex;
  }
}

let rightActiveComp = shallowRef(MusicPlayer);
let leftActiveComp = shallowRef(CustTimeLine);
</script>

<template>
  <div class="opened-notebook" ref="notebook">
    <div class="content">
      <div class="page left-page" v-for="(value, key) in 4" :key="key" ref="lPage"></div>
      <div class="left" ref="lPart">
        <Transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="leftActiveComp" />
          </keep-alive>
        </Transition>
      </div>
      <div class="right" style="z-index: 1;" ref="rPart">
        <Transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="rightActiveComp" />
          </keep-alive>
        </Transition>
      </div>
      <div class="page right-page" v-for="(value, key) in 4" :key="key" ref="rPage"></div>
      <BookMark @click="rightActiveComp = MusicPlayer" title="歌曲" justify="flex-end" pdr="15" right="-80" top="20"
                bgcolor="rgb(120 186 237 / 80%)" />
      <BookMark @click="rightActiveComp = PatchedPictures" title="相册" justify="flex-end" pdr="10" right="-60" top="120"
                bgcolor="rgb(237 202 146 / 80%)" />
      <BookMark @click="leftActiveComp = CustTimeLine" title="事件" justify="flex-start" pdl="10" right="810" top="360"
                bgcolor="rgb(149 209 157 / 80%)" />
      <BookMark @click="leftActiveComp = MiniGames" title="游戏" justify="flex-start" pdl="10" right="830" top="500"
                bgcolor="rgb(205 207 234 / 80%)" />
    </div>
  </div>
</template>

<style scoped>
.opened-notebook {
  margin: 0 auto;
  user-select: none;
  height: 600px;
  width: 900px;
  box-sizing: border-box;
  z-index: -999;
}

.content {
  box-sizing: border-box;
  z-index: 999;
  position: relative;
  background-color: #D0C3C8;
  display: flex;
  justify-content: space-between;
  align-content: start;
  align-items: start;
  border-left-width: 30px;
  border-right-width: 30px;
  border-top-width: 15px;
  border-bottom-width: 15px;
  border-style: solid;
  border-color: #D4ADBC;
  border-radius: 20px;
}

.left, .right {
  z-index: 9999;
  overflow-x: auto;
  background-color: white;
  border-radius: 18px;
  box-sizing: border-box;
  width: 50%;
  padding: 15px;
}

.left {
  border-right: 2px solid #CCCC;
}

.page {
  border-radius: 18px;
  position: absolute;
  background-color: #F0F0F0;
  box-sizing: border-box;
  top: 0;
}

.right-page {
  border-right: 2px solid #CCC9C9;
}

.left-page {
  border-left: 2px solid #CCC9C9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>