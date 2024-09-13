<template>
  <div class="cw-form-item" :style="getItemStyle()">
    <ObjectItem
      v-if="type === 'object'"
      v-model="value"
      :prop
      :index
      :config
      @change="handleObjChange"
    />
    <ArrayItem
      v-else-if="type === 'array'"
      v-model="value"
      :prop
      :index
      :config
      @change="handleObjChange"
    />
    <Widget
      v-else
      :prop
      :index
      :config
      :type
      v-model="value"
      @change="handleWidgetChange"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const ObjectItem = defineAsyncComponent(() => import("./object.vue"));
const ArrayItem = defineAsyncComponent(() => import("./array.vue"));
const Widget = defineAsyncComponent(() => import("./widget.vue"));

const props = defineProps<{
  prop?: string;
  index: number;
  config: FormItem;
  column: number;
}>();
const emits = defineEmits(["change"]);
const value = defineModel();
const type = props.config.type || "string";
const occupy = props.config.occupy || 1;
const getItemStyle = () => {
  return {
    "--form-item-width": `${(100 * occupy) / props.column - 0.01}%`,
  };
};

const handleWidgetChange = (prop: string, val: any) => {
  emits("change", prop, prop, val);
};

const handleObjChange = (prop: string, path: string, val: any) => {
  emits("change", prop, `${prop}${path}`, val);
};
</script>

<style scoped lang="less"></style>
