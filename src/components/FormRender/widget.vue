<template>
  <el-form-item
    :label="config.label"
    :required="config.required"
    :rules="config.rules"
    v-bind="style"
  >
    <!-- 1、字符类型 -->
    <el-input
      v-if="widget === 'input'"
      v-model="model"
      v-bind="config.attribute"
    ></el-input>
    <!-- 2、密码类型 -->
    <el-input
      v-if="widget === 'password'"
      v-model="model"
      v-bind="config.attribute"
      show-password
    ></el-input>
    <!-- 3、数字类型 -->
    <el-input-number
      v-else-if="widget === 'input-number'"
      v-model="model"
      :min="config.min"
      :max="config.max"
      v-bind="config.attribute"
    ></el-input-number>
    <!-- 4、布尔类型 -->
    <el-switch
      v-else-if="widget === 'switch'"
      v-model="model"
      v-bind="config.attribute"
    ></el-switch>
    <!-- 5、选择类型 -->
    <el-select
      v-else-if="widget === 'select'"
      v-model="model"
      v-bind="config.attribute"
    >
      <el-option
        v-for="opt in config.options"
        :key="opt.value"
        :label="opt.label"
        :value="opt.value"
      ></el-option>
    </el-select>
    <!--  6、自定义组件  -->
    <component
      v-else-if="widget === 'component' && config.component"
      :is="config.component"
      v-model="model"
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

const model = defineModel({
  set(v: any) {
    emits("change", props.prop, v);
    return v;
  },
});

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
    case "password":
      return "password";
    default:
      return "input";
  }
};
const widget = getWidget();
</script>

<style scoped lang="less"></style>
