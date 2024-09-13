import { FORM_TYPE_VALUE_DEFAULT_MAP } from "./constants.ts";

export const useForm = (schema: FormSchema) => {
  const setFromDefault = (obj: FormSchema["properties"], val: any) => {
    const res = val || {};
    Object.entries(obj).map(([key, v]) => {
      const prop = v.prop || key;
      const type = v.type || "string";
      if (!res[prop]) {
        // 赋默认值
        res[prop] =
          v.default === undefined
            ? FORM_TYPE_VALUE_DEFAULT_MAP[type]
            : v.default;
      }
      if (type === "object") {
        res[prop] = setFromDefault(v.properties, res[prop]);
      }
    });
    return res;
  };

  const initFrom = (val: any) => {
    return setFromDefault(schema.properties, val);
  };

  return {
    initFrom,
  };
};
