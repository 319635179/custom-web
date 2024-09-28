<template>
  <el-collapse-item class="cw-collapse-item" :name="name || title" :disabled>
    <template #title>
      <div class="header">
        <div class="header-item ahead">
          <div class="ahead-item" v-if="slots.prefix">
            <slot name="prefix" /> &nbsp;
          </div>
          <span v-if="title">{{ title }}</span>
          <div class="ahead-item" v-if="slots.suffix">
            &nbsp;<slot name="suffix" />
          </div>
        </div>
        <div class="header-item options" v-if="slots.options">
          <slot name="options" />
        </div>
      </div>
    </template>
    <slot></slot>
  </el-collapse-item>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

defineProps<{
  name?: string;
  title: string;
  disabled?: boolean;
}>();

const slots = defineSlots<{
  prefix?: any;
  suffix?: any;
  options?: any;
}>();
defineComponent({
  name: "CollapseItem",
});
</script>

<style scoped lang="less"></style>
