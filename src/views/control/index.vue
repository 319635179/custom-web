<template>
  {{ data }}
  <FormRender :schema v-model="data" @change="handleChange" :column="3" />
  <CollapseRender>
    <CollapseItem title="123">
      <template #prefix>prefix </template>
      <template #suffix>suffix </template>
      <template #options>options </template>
      123123
    </CollapseItem>
  </CollapseRender>
</template>

<script setup lang="ts">
import FormRender from "@/components/FormRender/index.vue";
import { h, ref } from "vue";
import CollapseRender from "@/components/CollapseRender/index.vue";
import CollapseItem from "@/components/CollapseRender/item.vue";

const data = ref();

const schema: FormSchema = {
  // ...getFormItem(NAME),
  a: {
    label: "A",
    type: "password",
    default: "1",
    // appendNode: h("span", "这是一个appendNode"),
  },
  b: {
    type: "array",
    label: "B",
    mod: "collapse",
    occupy: 2,
    style: {
      column: 2,
    },
    // appendNode: h("span", "这是一个appendNode"),
    properties: {
      c: {
        label: "C",
        default: "2",
        style: {
          hiddenLabel: true,
        },
        appendNode: h("span", "这是一个appendNode"),
      },
      d: {
        label: "D",
        default: "2",
        style: {
          hiddenLabel: true,
        },
        hidden: 'formData.a === "1"',
      },
    },
  },
  d: {
    type: "object",
    label: "D",
    mod: "collapse",
    properties: {
      c: {
        label: "C",
        style: {
          hiddenLabel: true,
        },
      },
    },
    default: {
      c: 2,
    },
  },
  // e: {
  //   label: "e",
  //   type: "array",
  //   hidden: 'formData.a === "1"',
  // },
};

const handleChange = (...args) => {
  console.log(args);
};
</script>

<style scoped lang="less"></style>
