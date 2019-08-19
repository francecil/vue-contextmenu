<template>
  <div :style="dashbox.style" class="dashbox" @contextmenu="showContextMenu">
    {{ dashbox.content }}
  </div>
</template>
<script>
export default {
  props: {
    dashbox: Object
  },
  methods: {
    showContextMenu(e) {
      this.$emit("show-contextmenu", e);
    }
  }
};
</script>
<style>
.dashbox {
  position: absolute;
  background-color: aliceblue;
}
</style>
