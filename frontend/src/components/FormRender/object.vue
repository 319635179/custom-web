<template>
  <el-form-item
    v-if="mod === 'label'"
    class="cw-form-item-object"
    :label="config.label"
    :required="config.required"
    :rules="config.rules"
    v-bind="style"
  >
    <Item
      v-for="(item, prop, i) in children"
      v-model="model[item.prop || prop]"
      :key="item.prop || prop"
      :prop="item.prop || prop"
      :index="i"
      :config="item"
      @change="handleItemChange"
      :column
      :form-data="formData"
    />
  </el-form-item>
  <Collapse
    v-else-if="mod === 'collapse'"
    v-model="model"
    :prop
    :index
    :config
    :formData
    @change="handleItemChange"
    :use-del="isArray"
    @del="handleDel"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Item = defineAsyncComponent(() => import("./item.vue"));
const Collapse = defineAsyncComponent(() => import("./expand/collapse.vue"));

const props = defineProps<{
  prop: string;
  index: number;
  config: FormItem;
  formData: any;
  isArray?: boolean; // 是数组类型的子元素
}>();
const emits = defineEmits(["change", "del"]);
const model = defineModel();
const children = props.config.properties || {};
const mod = props.config.mod || "label";
const style = props.config.style || {};
const column = style.column || 1;

const handleItemChange = (prop: string, val: string) => {
  emits(
    "change",
    prop,
    `${props.isArray ? `[${props.index}]` : props.prop}.${prop}`,
    val,
  );
};
const handleDel = () => {
  emits("del", props.index);
};
</script>

<style scoped lang="less"></style>
