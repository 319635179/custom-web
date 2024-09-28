import { defineStore } from "pinia";
import { ref } from "vue";

export const useContainerStore = defineStore("container", () => {
  const mount = ref(false);
  const useHeader = ref(false);
  const useAside = ref(false);
  const useMainPadding = ref(false);

  const setHeader = (val: boolean) => {
    useHeader.value = val;
  };
  const setAside = (val: boolean) => {
    useAside.value = val;
  };
  const setMainPadding = (val: boolean) => {
    useMainPadding.value = val;
  };

  const init = () => {
    mount.value = true;
  };
  const unMount = () => {
    mount.value = false;
  };

  return {
    mount,
    useHeader,
    useAside,
    useMainPadding,
    setAside,
    setHeader,
    setMainPadding,
    init,
    unMount,
  };
});
