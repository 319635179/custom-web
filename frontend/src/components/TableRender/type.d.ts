type TableWidget = "text" | "rank";
type TableColumnType = "default" | "selection" | "index" | "expand";

interface TableRenderProps {
  schema: TableColumn[];
  data?: any[]; // 外部传入数据
  api?: string; // 内部直接获取数据
  method?: RequestMethod; // api接口方法
  params?: AnyObject; // api查询参数
  border?: boolean; // 是否启用边框
  maxHeight?: number | string;
  showHeader?: boolean; // 是否展示表头
  showOverflowTooltip?: boolean; // 是否启用tooltip
  props: AnyObject;
  style?: {
    width?: number | string;
    [key: string]: any;
  };
}

interface TableColumn {
  label?: string;
  prop: string;
  widget?: TableWidget; // 预设单元格组件
  type?: TableColumnType; // 单元格类型
  width?: number | string;
  minWidth?: number | string;
  sortable?: boolean; // 是否可排序
  resizable?: boolean; // 是否可拖动大小
  align?: AlignBase;
  selectable?: boolean; // 是否可选中
}
