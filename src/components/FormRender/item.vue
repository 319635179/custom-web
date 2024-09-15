<template>
  <div
    class="cw-form-item"
    :class="{
      'hidden-label': hiddenLabel,
    }"
    :style="getItemStyle()"
    v-if="!hidden"
  >
    <ObjectItem
      v-if="type === 'object'"
      v-model="value"
      :prop
      :index
      :config
      :hiddenLabel
      @change="handleObjChange"
    />
    <ArrayItem
      v-else-if="type === 'array'"
      v-model="value"
      :prop
      :index
      :config
      :hiddenLabel
      @change="handleObjChange"
    />
    <Widget
      v-else
      :prop
      :index
      :config
      :type
      :hiddenLabel
      v-model="value"
      @change="handleWidgetChange"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted } from "vue";
import { getFormItemHidden, setFormItemDefault } from "./index.ts";

const ObjectItem = defineAsyncComponent(() => import("./object.vue"));
const ArrayItem = defineAsyncComponent(() => import("./array.vue"));
const Widget = defineAsyncComponent(() => import("./widget.vue"));

const props = defineProps<{
  prop?: string;
  index: number;
  config: FormItem;
  column: number;
  formData: any;
}>();
const emits = defineEmits(["change"]);
const value = defineModel();
const type = props.config.type || "string";
const occupy = props.config.occupy || 1;
const style = props.config.style || {};
const hiddenLabel = style.hiddenLabel;
const getItemStyle = () => {
  return {
    "--form-item-width": `${(100 * occupy) / props.column - 0.01}%`,
  };
};

const hidden = computed(() =>
  getFormItemHidden(props.config.hidden, props.formData, props.prop),
);

const handleWidgetChange = (prop: string, val: any) => {
  emits("change", prop, prop, val);
};

const handleObjChange = (prop: string, path: string, val: any) => {
  emits("change", prop, `${prop}${path}`, val);
};

onMounted(() => {
  value.value = setFormItemDefault(value.value, type, props.config.default);
});
</script>

<style scoped lang="less"></style>
