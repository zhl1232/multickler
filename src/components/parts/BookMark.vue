<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  right: String,
  top: String,
  bgcolor: String,
  pdr: String,
  pdl: String,
  depth: String,
  justify: {
    validator(value) {
      return ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].includes(value);
    }
  }
});
</script>

<template>
  <div class="book-mark"
       :style="{
          'justify-content': justify,
          'right': right + 'px',
          'top': top + 'px',
          'background-color': bgcolor,
          'padding-left': pdl + 'px',
          'padding-right': pdr + 'px',
          'z-index': depth + ''}">
    <div>
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.book-mark {
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  width: 100px;
  height: 28px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  align-content: center;
}
</style>