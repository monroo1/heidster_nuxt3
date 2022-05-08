<template>
  <div class="scroll-up" @click="clickScroll">
    <img src="~/assets/img/icons/scroll.png" />
  </div>
</template>

<script>
export default {
  methods: {
    clickScroll() {
      this.$parent.clickScroll();
    },
  },
};
</script>

<style lang="scss">
.scroll-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: block;
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  height: 50px;
  border-radius: 53px;
  z-index: 9999;
  transition: 0.3s ease-in;
  opacity: 0;
}
.scroll-show {
  opacity: 1;
  cursor: pointer;
}
</style>
