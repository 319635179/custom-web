<template>
  {{ data }}
  <FormRender :schema v-model="data" @change="handleChange" :column="3" />
</template>

<script setup lang="ts">
import FormRender from "@/components/FormRender/index.vue";
import { ref } from "vue";
import { getFormItem } from "@/components/FormRender/tools.ts";
import { NAME } from "@/meta/utils.ts";

const data = ref();

const schema: FormSchema = {
  ...getFormItem(NAME),
  a: {
    label: "A",
    type: "password",
    default: "1",
  },
  b: {
    type: "object",
    label: "B",
    occupy: 2,
    style: {
      column: 2,
    },
    properties: {
      c: {
        label: "C",
        default: "2",
        style: {
          hiddenLabel: true,
        },
      },
      d: {
        label: "D",
        default: "2",
        style: {
          hiddenLabel: true,
        },
      },
    },
  },
  d: {
    type: "object",
    label: "B",
    properties: {
      c: {
        label: "C",
      },
    },
    default: {
      c: 2,
    },
  },
  e: {
    label: "e",
    type: "array",
    hidden: 'formData.a === "1"',
  },
};

const handleChange = (...args) => {
  console.log(args);
};
</script>

<style scoped lang="less"></style>
