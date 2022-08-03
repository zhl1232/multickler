<script setup>
import { shallowRef } from "vue";
import OpenedNoteBook from "./components/OpenedNoteBook.vue";
import ClosedNoteBook from "./components/ClosedNoteBook.vue";

let activeComponent = shallowRef(ClosedNoteBook);
</script>

<template>
  <div class="app-content">
    <Transition name="fade" mode="out-in">
      <component :is="activeComponent" @onclick-belt="activeComponent = OpenedNoteBook"></component>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.el-button, .el-input {
  font-family: XinYeNian !important;
}
</style>
