export const getFormItem = (
  meta: MetaType | FormMetaItem,
  entry?: FormEntry,
) => {
  const prop = entry?.prop || meta.prop;
  return {
    [prop]: {
      ...meta,
      ...entry,
    },
  };
};
