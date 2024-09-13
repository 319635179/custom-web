<template>
  <el-form-item
    :label="config.label"
    :required="config.required"
    :rules="config.rules"
    @change="handleChange"
    v-bind="style"
  >
    <!-- 1、字符类型 -->
    <el-input
      v-if="widget === 'input'"
      v-model="value"
      @change="handleChange"
      v-bind="config.attribute"
    ></el-input>
    <!-- 2、数字类型 -->
    <el-input-number
      v-else-if="widget === 'input-number'"
      v-model="value"
      :min="config.min"
      :max="config.max"
      @change="handleChange"
      v-bind="config.attribute"
    ></el-input-number>
    <!-- 3、布尔类型 -->
    <el-switch
      v-else-if="widget === 'switch'"
      v-model="value"
      @change="handleChange"
      v-bind="config.attribute"
    ></el-switch>
    <!-- 4、选择类型 -->
    <el-select
      v-else-if="widget === 'select'"
      v-model="value"
      @change="handleChange"
      v-bind="config.attribute"
    >
      <el-option
        v-for="opt in config.options"
        :key="opt.value"
        :label="opt.label"
        :value="opt.value"
      ></el-option>
    </el-select>
    <!--  自定义组件  -->
    <component
      v-else-if="widget === 'component' && config.component"
      :is="config.component"
      v-model="value"
      @change="handleChange"
      v-bind="config.attribute"
    ></component>
  </el-form-item>
</template>

<script setup lang="ts">
const props = defineProps<{
  prop: string;
  index: number;
  config: FormItem;
  type: FormType;
}>();
const emits = defineEmits(["change"]);

const value = defineModel();

const style = props.config.style || {};
const getWidget = (): WidgetType => {
  if (props.config.widget) {
    return props.config.widget;
  }
  switch (props.type) {
    case "number":
      return "input-number";
    case "boolean":
      return "switch";
    default:
      return "input";
  }
};
const widget = getWidget();

const handleChange = (val: any) => {
  emits("change", props.prop, val);
};
</script>

<style scoped lang="less"></style>
