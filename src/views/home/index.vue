<template>
  <div
    class="cw-welcome"
    :class="{
      'use-bg': start,
    }"
  >
    <div class="view mark">
      create-web<br />
      low code page
    </div>
    <main class="view container" @wheel="handleWheel">
      <Transition name="view">
        <div class="view mask" v-if="!start">
          <div class="view message">
            欢迎使用
            <div>
              <el-button @click="start = true">开始</el-button>
            </div>
          </div>
        </div>
        <div class="options" v-else>
          <div>
            <el-button class="btn" @click="handleChangeRouter('control')"
              >仪表盘</el-button
            >
            <el-button class="btn">资源</el-button>
            <el-button class="btn">数据源</el-button>
          </div>
        </div>
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { handleChangeRouter } from "@/router";

const start = ref(false);

const handleWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    start.value = true;
  }
};
</script>

<style scoped lang="less">
.use-bg {
  background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.2),
      rgba(0, 0, 255, 0.2)
    ),
    linear-gradient(45deg, rgb(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  transition: background-color 0.5s;
}
.cw-welcome,
.view {
  width: 100%;
  height: 100%;
}
.mark {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 90px;
  font-weight: 900;
  line-height: 120px;
  text-align: center;
  padding-top: 16%;
  background: linear-gradient(45deg, #f00, #00f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.container {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.mask {
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  font-size: 90px;
  font-weight: 900;
  line-height: 120px;
  text-align: center;
}
.message {
  padding-top: 20%;
  background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.2),
      rgba(0, 0, 255, 0.2)
    ),
    linear-gradient(45deg, rgb(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
}
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease;
}

.view-enter-from,
.view-leave-to {
  opacity: 0;
}
.options {
  text-align: center;
  padding-top: calc(16% + 280px);
  .btn + .btn {
    margin-left: 30px;
  }
}
</style>
