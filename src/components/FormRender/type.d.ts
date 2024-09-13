type FormType = "string" | "number" | "boolean" | "object" | "array";
type BaseMod = "collapse" | "label";
type ObjectMod = "switch" | BaseMod;
type LabelPosition = "left" | "right" | "top";

type WidgetType = "component" | "input" | "switch" | "input-number" | "select";

interface FormItem {
  label: string;
  prop?: string;
  type?: FormType; // 数据类型
  widget?: WidgetType; // 组件类型
  options?: MetaItem[]; // 选项
  default?: any; // 默认值
  attribute?: AnyObject; // 透传
  component?: any; // 自定义组件
  properties?: FormSchema["properties"]; // obj或arr类型的子元素
  min?: number; // 数字类型最小值
  max?: number; // 数字类型最大值
  appendNode?: any; // 后缀展示内容
  mod?: ObjectMod; // obj或arr类型的集合类型
  description?: string; // 下方描述
  placeholder?: string; // 内部描述
  tooltip?: string; // label后缀描述
  required?: boolean; // 是否必要选择项
  hidden?: string | boolean; // 隐藏规则
  rules?: any; // 校验规则
  occupy?: number;
  style?: {
    // 其他样式
    labelPosition?: LabelPosition;
    labelWidth?: number; // label宽度
    [key: string]: any;
  };
}

interface FormSchema {
  labelWidth?: number; // label宽度
  labelPosition?: LabelPosition;
  column?: number; // 列数
  properties: {
    [key: string]: FormItem;
  };
}