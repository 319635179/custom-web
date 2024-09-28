<template>
  <section
    class="cw-custom-web"
    :class="{
      'no-header': !container.useHeader,
      'no-aside': !container.useAside,
      'no-main-padding': !container.useMainPadding,
    }"
  >
    <header
      class="cw-header border-s-b"
      :id="J_HEADER_ID"
      v-if="container.useHeader"
    ></header>
    <main class="cw-main cw-container">
      <aside class="cw-aside va-t border-s-r" v-if="container.useAside"></aside>
      <main class="cw-main cw-view va-m">
        <router-view />
      </main>
    </main>
  </section>
</template>

<script setup lang="ts">
import { useContainerStore } from "@/store/container.ts";
import { J_HEADER_ID } from "@/constants/ids";

const container = useContainerStore();
</script>

<style scoped lang="less">
.cw-container {
  width: 100%;
  height: calc(100vh - var(--header-height));
}

.no-header {
  --header-height: 0px;
}

.no-aside {
  --aside-width: 0px;
}

.no-main-padding {
  --padding-main: 0px;
}

.cw-view {
  display: inline-block;
  width: calc(100% - var(--aside-width));
  height: 100%;
  padding: var(--padding-main);
}
</style>
