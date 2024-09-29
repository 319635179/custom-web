<template>
  <teleport v-if="el" :to="el">
    <slot />
  </teleport>
</template>

<script setup lang="ts">
import { J_HEADER_ID } from "@/constants/ids";
import { onMounted, onUnmounted, ref } from "vue";

const el = ref<HTMLElement | undefined>();
onMounted(() => {
  el.value = document.getElementById(J_HEADER_ID);
});

onUnmounted(() => {
  el.value = null;
});
</script>

<style lang="less">
.cw-header {
  padding: 0 20px;
  box-sizing: border-box;
  background: var(--color-header);
  color: var(--color-white);
}

.options {
  float: right;
}
</style>
