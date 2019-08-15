<template>
  <div class="context-menu" v-show="show" :style="style">
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
  mounted() {
    document.body.appendChild(this.$el);
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
