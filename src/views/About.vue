<template>
  <div style="width: 100%">
    <DEditor ref="editor"></DEditor>
  </div>
</template>

<script>
import DEditor from "./auto2.vue";

export default {
  components: {
    DEditor,
  },
  data: () => {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = this.$refs.editor.editor;
    console.log(this.editor);
    this.editor.width = 10;
  },
};
</script>
