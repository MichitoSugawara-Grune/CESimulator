<template>
  <div>
    <VueDiagramEditor
      ref="diagram"
      @deleted-node="nodeDeleted"
      @created-link="linkAdded"
      @deleted-link="linkDeleted"
    >
      <pre slot="node" slot-scope="{ node, width, height }">{{
        nodeAdded(node)
      }}</pre>
    </VueDiagramEditor>
    <v-btn @click="test"></v-btn>
    <v-btn @click="aaa"></v-btn>
  </div>
</template>

<script>
import VueDiagramEditor from "vue-diagram-editor";
import "vue-diagram-editor/dist/vue-diagram-editor.css";

export default {
  name: "simple-example",
  components: {
    VueDiagramEditor,
  },
  data: () => ({
    diagram: {
      nodes: [],
      links: [],
      getNodesByProperty(prop, value) {
        let result = [];
        this.nodes.forEach((node) => {
          if (node[prop] && node[prop] == value) result.push(node);
        });
        return result;
      },
      getLinksByProperty(prop, value) {
        let result = [];
        this.links.forEach((link) => {
          if (link[prop] && link[prop] == value) result.push(link);
        });
        return result;
      },
    },
    testNodes: [
      {
        title: "My node 1",
      },
    ],
    testLinks: [],
  }),
  mounted() {
    this.init();
  },
  methods: {
    log(log) {
      console.log(log);
    },
    init() {},
    test() {
      this.$refs.diagram.addNode({
        title: "test",
        portsIn: {
          1: "",
        },
        portsOut: {
          2: "",
        },
      });
    },
    nodeAdded(node) {
      if (this.diagram.getNodesByProperty("id", node.id).length != 0) return;
      this.diagram.nodes.push(node);
    },
    nodeDeleted(id) {
      const nodes = this.diagram.getNodesByProperty("id", id);
      if (nodes.length == 0) return;
      const index = this.diagram.nodes.indexOf(nodes[0]);
      this.diagram.nodes.splice(index, 1);
    },
    linkAdded(link) {
      this.diagram.links.push(link);
    },
    linkDeleted(id) {
      const links = this.diagram.getLinksByProperty("id", id);
      if (links.length == 0) return;
      const index = this.diagram.links.indexOf(links[0]);
      this.diagram.links.splice(index, 1);
    },
    aaa() {
      console.log(this.$refs.diagram.serialize().links);
    },
  },
};
</script>
