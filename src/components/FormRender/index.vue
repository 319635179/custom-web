<template>
  <el-form
    ref="tableRef"
    class="cw-form-render"
    :labelWidth
    :labelPosition
    :disabled
    @submit.native.prevent
  >
    <template v-if="model">
      <Item
        v-for="(item, prop, index) in schema"
        v-model="model[item.prop || prop]"
        :key="item.prop || prop"
        :prop="item.prop || prop"
        :index="index"
        :config="item"
        @change="handleItemChange"
        :column
        :form-data="model"
      ></Item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Item from "./item.vue";
import "./index.less";

const props = defineProps<{
  schema: FormSchema;
  disabled?: boolean;
  labelWidth?: number; // label宽度
  labelPosition?: LabelPosition;
  column?: number; // 列数
}>();

const emits = defineEmits(["change"]);
const model = defineModel<any>();

const tableRef = ref();

const labelWidth = props.labelWidth || 80;
const labelPosition = props.labelPosition || "left";
const column = props.column || 1;

const handleItemChange = (prop: string, path: string, val: any) => {
  emits("change", prop, path, val);
};

onMounted(() => {
  model.value = model.value || {};
});

defineExpose({
  getRef: () => tableRef.value,
  resetFields: () => tableRef.value?.resetFields!(),
  validate: (callback?: Function) => tableRef.value?.validate!(callback),
  clearValidate: (prop: string) => tableRef.value?.clearValidate!(prop),
});

defineComponent({
  name: "FormRender",
});
</script>

<style scoped lang="less"></style>
