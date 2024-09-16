<template>
  <collapse-render>
    <collapse-item
      :title="config.label"
      :name="prop"
      :disabled="config.disabled"
    >
      <template #options v-if="useDel">
        <el-button @click="handleDel"> 删除 </el-button>
      </template>
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
    </collapse-item>
  </collapse-render>
</template>

<script setup lang="ts">
import CollapseRender from "@/components/CollapseRender/index.vue";
import CollapseItem from "@/components/CollapseRender/item.vue";
import Item from "../item.vue";

const props = defineProps<{
  prop: string;
  index: number;
  config: FormItem;
  formData: any;
  useDel?: boolean; // 支持删除操作
}>();
const emits = defineEmits(["change", "del"]);
const model = defineModel();
const children = props.config.properties || {};
const style = props.config.style || {};
const column = style.column || 1;
const handleItemChange = (prop: string, val: string) => {
  console.log(prop, val);
  emits("change", prop, val);
};
const handleDel = () => {
  emits("del");
};
</script>

<style scoped lang="less"></style>
