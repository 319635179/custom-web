<template>
  <div class="cw-editor-page" v-if="container.mount">
    <header-render>123</header-render>
    {{ data }}
    <FormRender :schema v-model="data" @change="handleChange" :column="3" />
    <CollapseRender>
      <CollapseItem title="123">
        <template #prefix>prefix</template>
        <template #suffix>suffix</template>
        <template #options>options</template>
        123123
      </CollapseItem>
    </CollapseRender>
  </div>
</template>

<script setup lang="ts">
import HeaderRender from "@/components/HeaderRender/index.vue";
import FormRender from "@/components/FormRender/index.vue";
import { h, onMounted, onUnmounted, ref } from "vue";
import CollapseRender from "@/components/CollapseRender/index.vue";
import CollapseItem from "@/components/CollapseRender/item.vue";
import { useContainerStore } from "@/store/container";

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

const handleChange = (...args: any) => {
  console.log(args);
};

const container = useContainerStore();

onMounted(() => {
  container.setHeader(true);
  container.init();
});
onUnmounted(() => {
  container.setHeader(false);
  container.unMount();
});
</script>

<style scoped lang="less"></style>
