import { defineStore } from "pinia";
import { ref } from "vue";

export const useContainerStore = defineStore("container", () => {
  const useHeader = ref(true);
  const useAside = ref(true);
  const useMainPadding = ref(true);

  const setHeader = (val: boolean) => {
    useHeader.value = val;
  };
  const setAside = (val: boolean) => {
    useAside.value = val;
  };
  const setMainPadding = (val: boolean) => {
    useMainPadding.value = val;
  };

  return {
    useHeader,
    useAside,
    useMainPadding,
    setAside,
    setHeader,
    setMainPadding,
  };
});
