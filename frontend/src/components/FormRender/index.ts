import { FORM_TYPE_VALUE_DEFAULT_MAP } from "./constants.ts";

/**
 * @description 设置表单item默认值
 * @description 优先级按照原始数据->默认值->类型默认值进行排列
 * @param data 原始数据
 * @param type 类型
 * @param defaultVal 默认值
 */
export const setFormItemDefault = (
  data: any,
  type: FormType,
  defaultVal?: any,
) => {
  return data || defaultVal || FORM_TYPE_VALUE_DEFAULT_MAP[type] || undefined;
};

/**
 * @description 获取表单隐藏的方法
 * @param hidden 隐藏的布尔值或方法字符串
 * @param formData 表单数据
 * @param prop 字段名称，用于错误提示
 */
export const getFormItemHidden = (
  hidden?: string | boolean,
  formData: any,
  prop: string,
) => {
  if (typeof hidden === "boolean") {
    return hidden;
  }
  if (!hidden || !formData) {
    return false;
  }
  return Function(
    "formData",
    `
    try{
      return ${hidden}
    } catch(e) {
      console.error("FormItem Error!Can't read ${prop}'s hidden")
      return false
    }
  `,
  )(formData);
};
