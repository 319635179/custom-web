type BaseType = "string" | "number" | "boolean" | "object" | "array";

interface MetaItem {
  label: string;
  value: string;
  [key: string]: any;
}

interface MetaType {
  label: string;
  prop: string;
  type?: BaseType | string;
  [key: string]: any;
}

interface AnyObject {
  [key: string]: any;
}
