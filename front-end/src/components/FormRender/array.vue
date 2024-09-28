<template>
  <div class="cw-array-item">
    <template v-if="mod === 'collapse'">
      <header class="options">
        <el-button text @click="handleAddItem">新增</el-button>
      </header>
      <main>
        <ObjectForm
          v-for="(_item, i) in model"
          v-model="model[i]"
          :prop="`[${i}]`"
          :index="i"
          :config="config"
          :formData
          @change="handleItemChange"
          @del="handleDel"
          is-array
        />
      </main>
    </template>
  </div>
</template>

<script setup lang="ts">
import ObjectForm from "./object.vue";

const props = defineProps<{
  prop: string;
  index: number;
  config: FormItem;
  formData: any;
}>();
const emits = defineEmits(["change"]);
const model = defineModel<any[]>({
  required: true,
  default: [],
});
const children = props.config.properties || {};
const mod = props.config.mod || "label";
const style = props.config.style || {};
const column = style.column || 1;
//
const handleAddItem = () => {
  model.value.push({});
};
const handleItemChange = (prop: string, path, val: string) => {
  emits("change", prop, path, val);
};
const handleDel = (i: number) => {
  model.value.splice(i, 1);
};
</script>

<style scoped lang="less"></style>
