<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const handClickMenu = () => {
      store.dispatch("handSideOpen");
    };

    return { handClickMenu };
  },
};
</script>
<template>
  <a class="other menuBtn" @click="handClickMenu">
    <img src="../assets/other.png" alt="" />
  </a>
</template>
<style lang="scss" scoped>
.menuBtn {
  cursor: pointer;
}
</style>
