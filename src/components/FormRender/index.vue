<template>
  <el-form
    ref="tableRef"
    class="cw-form-render"
    :labelWidth
    :labelPosition
    :disabled
  >
    <template v-if="value">
      <Item
        v-for="(item, prop, index) in schema.properties"
        v-model="value[item.prop || prop]"
        :key="item.prop || prop"
        :prop="item.prop || prop"
        :index="index"
        :config="item"
        @change="handleItemChange"
        :column
      ></Item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useForm } from "./index.ts";
import Item from "./item.vue";
import "./index.less";

const props = defineProps<{
  schema: FormSchema;
  disabled?: boolean;
}>();

const emits = defineEmits(["change"]);
const value = defineModel<any>();

const tableRef = ref();

const labelWidth = props.schema?.labelWidth || 80;
const labelPosition = props.schema?.labelPosition || "left";
const column = props.schema?.column || 1;

const { initFrom } = useForm(props.schema);

const handleItemChange = (prop: string, path: string, val: any) => {
  emits("change", prop, path, val);
};

onMounted(() => {
  value.value = initFrom(value.value);
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
