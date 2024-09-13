<template>
  <FormRender :schema v-model="data" @change="handleChange" />
</template>

<script setup lang="ts">
import FormRender from "@/components/FormRender/index.vue";
import { ref } from "vue";

const data = ref();

const schema: FormSchema = {
  column: 3,
  properties: {
    a: {
      label: "A",
      type: "boolean",
      required: true,
    },
    b: {
      type: "object",
      label: "B",
      occupy: 2,
      properties: {
        c: {
          label: "C",
          default: "2",
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
    },
  },
};

const handleChange = (...args) => {
  console.log(args);
};
</script>

<style scoped lang="less"></style>
