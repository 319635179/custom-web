// 表单类型默认值声明
export const FORM_TYPE_VALUE_DEFAULT_MAP: {
  [key in FormType]: any;
} = {
  string: undefined, // 适配widget类型为component时，未指定type类型的场景，初始化为undefined
  number: 0,
  boolean: false,
  object: {},
  array: [],
};
