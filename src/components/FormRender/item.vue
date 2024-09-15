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
      v-model="model"
      :prop
      :index
      :config
      @change="handleObjChange"
      :formData
    />
    <ArrayItem
      v-else-if="type === 'array'"
      v-model="model"
      :prop
      :index
      :config
      @change="handleObjChange"
      :formData
    />
    <Widget
      v-else
      :prop
      :index
      :config
      :type
      v-model="model"
      @change="handleWidgetChange"
      :formData
    />
    <div class="after-node" v-if="appendNode">
      <component :is="appendNode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onMounted } from "vue";
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
const model = defineModel();
const type = props.config.type || "string";
const occupy = props.config.occupy || 1;
const style = props.config.style || {};
const hiddenLabel = style.hiddenLabel;
const appendNode = props.config.appendNode;

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
  model.value = setFormItemDefault(model.value, type, props.config.default);
  nextTick(() => {
    console.log(props.prop, model.value);
  });
});
</script>

<style scoped lang="less"></style>
