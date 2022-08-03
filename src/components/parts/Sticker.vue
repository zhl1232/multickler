<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  left: String,
  top: String,
  width: {
    type: String,
    default: "100"
  },
  height: {
    type: String,
    default: "100"
  },
  radius: {
    type: String,
    default: "6"
  },
  depth: {
    type: String
  },
  fit: {
    validator(value) {
      return ["cover", "contain", "fill"].includes(value);
    }
  },
  rotate: String
});
</script>

<template>
  <div class="sticker" :style="{'left': left + 'px', 'top': top + 'px', 'z-index': depth,
   'transform': 'rotate(' + rotate + 'deg)'}">
    <img :src="src" alt="sticker"
         :style="{'width': width + 'px', 'height': height + 'px',
         'border-radius': radius, 'object-fit': fit
         }">
  </div>
</template>

<style scoped>
.sticker {
  position: absolute;
}
</style>