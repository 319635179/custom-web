<template>obj</template>

<script setup lang="ts">
defineProps<{
  prop: string;
  index: number;
  config: FormItem;
}>();
defineEmits(["change"]);
defineModel();
</script>

<style scoped lang="less"></style>
