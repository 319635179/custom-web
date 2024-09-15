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
      v-model="value[item.prop || prop]"
      :key="item.prop || prop"
      :prop="item.prop || prop"
      :index="i"
      :config="item"
      @change="handleItemChange"
      :column
      :form-data="value"
    />
  </el-form-item>
</template>

<script setup lang="ts">
import Item from "@/components/FormRender/item.vue";

const props = defineProps<{
  prop: string;
  index: number;
  config: FormItem;
}>();
const emits = defineEmits(["change"]);
const value = defineModel();
const children = props.config.properties || {};
const mod = props.config.mod || "label";
const style = props.config.style || {};
const column = style.column || 1;

const handleItemChange = (prop: string, val: string) => {
  emits("change", props.prop, `${props.prop}.prop`, val);
};
</script>

<style scoped lang="less"></style>
