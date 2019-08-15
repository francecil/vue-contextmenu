<template>
  <div
    class="context-menu"
    v-show="show"
    :style="style"
    @mousedown.stop
    @contextmenu.prevent
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "context-menu",
  props: {
    offset: {
      type: Object,
      default: function() {
        return {
          left: 0,
          top: 0
        };
      }
    },
    show: Boolean
  },
  computed: {
    style() {
      return {
        left: `${this.offset.left}px`,
        top: `${this.offset.top}px`
      };
    }
  },
  beforeDestroy() {
    let popperElm = this.$el;
    if (popperElm && popperElm.parentNode === document.body) {
      document.body.removeChild(popperElm);
    }
    document.removeEventListener("mousedown", this.clickDocumentHandler);
  },
  mounted() {
    document.body.appendChild(this.$el);
    document.addEventListener("mousedown", this.clickDocumentHandler);
  },
  methods: {
    clickDocumentHandler() {
      if (this.show) {
        this.$emit("update:show", false);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.context-menu {
  z-index: 1000;
  display: block;
  position: absolute;
}
</style>
