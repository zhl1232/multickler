<script setup>
import { ref } from "vue";
import { events } from "../../data/events.js";

let active = ref("1");
</script>

<template>
  <div class="cust-time-line">
    <div class="cust-time-node" v-for="(eV, eK) in events" :key="eK">
      <div class="thing-date">
        <div class="divider"></div>
        <div class="date">
          {{ eV.datetime }}
        </div>
        <el-tag class="ml-2" type="success">{{ eV.tag }}</el-tag>
      </div>
      <el-collapse class="thing-collapse" v-model="active">
        <el-collapse-item title="事件" name="1">
          <div v-html="eV.content"></div>
        </el-collapse-item>
      </el-collapse>
      <div class="thing-picture" v-if="eV.imgs">
        <el-image style="width: 100px; height: 100px" :initial-index="iK"
                  fit="cover" :src="iV"
                  :preview-src-list="eV.imgs" v-for="(iV, iK) in eV.imgs" :key="iK">
        </el-image>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divider {
  flex: 1;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  height: 4px;
  background-color: rgb(64, 158, 255);
}

.thing-date {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}

.date {
  margin: 0 10px;
}

.thing-collapse {
  margin: 10px 0;
}

.thing-picture > div {
  margin: 0 5px;
}

.el-collapse-item__content > div {
  font-size: 18px;
}
</style>