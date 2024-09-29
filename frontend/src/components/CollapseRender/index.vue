<template>
  <el-collapse
    class="cw-collapse-render"
    v-model="model"
    :accordion
    @change="handleChange"
  >
    <slot />
  </el-collapse>
</template>

<script setup lang="ts">
import "./index.less";
import { defineComponent } from "vue";

defineProps<{
  accordion?: boolean;
}>();
const emits = defineEmits(["change"]);
const model = defineModel();
const handleChange = (activeNames: Array | string) => {
  emits("change", activeNames);
};
defineComponent({
  name: "CollapseRender",
});
</script>

<style scoped lang="less"></style>
