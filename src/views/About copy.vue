<template>
  <div>
    <div id="mainEditor">
      <VueDiagramEditor ref="diagram">
        <v-container slot="node" slot-scope="{ node }" @click="log(node)">
          <v-row
            v-if="1"
            v-bind:style="{
              height: node.size.height - 22 + 'px',
            }"
          >
            <!-- メイン入力 テンプレート -->
            <template v-if="node.data.type == 0">
              <v-col class="ma-0 pa-0" cols="12">
                <v-text-field
                  label="入力値"
                  color="red"
                  height="20px"
                  dense
                  hide-details
                  v-model="node.data.value"
                  class="my"
                ></v-text-field>
              </v-col>
              <v-col align-self="end" class="text-left ma-0 pa-0" cols="12">
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="red"
                  @click="addOutput(node)"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="primary"
                  @click="deleteOutput(node)"
                >
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
              </v-col>
            </template>

            <!-- メイン出力 テンプレート -->
            <template v-if="node.data.type == 1">
              <v-col class="ma-0 pa-0" cols="12">
                <v-text-field
                  label="出力結果"
                  color="red"
                  height="20px"
                  dense
                  readonly
                  hide-details
                  v-model="node.data.value"
                  @focus="
                    (v) => {
                      v.target.blur();
                    }
                  "
                ></v-text-field>
              </v-col>
              <v-col align-self="end" class="text-right ma-0 pa-0" cols="12">
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="red"
                  @click="addInput(node)"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="primary"
                  @click="deleteInput(node)"
                >
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
              </v-col>
            </template>

            <!-- 分岐 テンプレート -->
            <template v-if="node.data.type == 2">
              <v-col align-self="end" class="text-center ma-0 pa-0" cols="12">
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="red"
                  @click="addOutput(node)"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="primary"
                  @click="deleteOutput(node)"
                >
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
              </v-col>
            </template>

            <!-- 遅延素子 テンプレート -->
            <template v-if="node.data.type == 3">
              <v-col align-self="start" class="text-center ma-0 pa-0" cols="12">
                状態:{{ node.data.state }}
              </v-col>
            </template>

            <!-- 排他的論理和 テンプレート -->
            <template v-if="node.data.type == 4">
              <v-col align-self="end" class="text-center ma-0 pa-0" cols="12">
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="red"
                  @click="addInput(node)"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-btn
                  class="ma-1 pa-0"
                  dark
                  x-small
                  color="primary"
                  @click="deleteInput(node)"
                >
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </VueDiagramEditor>
      <div class="text-center">
        <v-btn class="mx-2" fab dark large color="primary" @click="runAll()">
          <v-icon dark> mdi-animation-play </v-icon>
        </v-btn>

        <v-btn class="mx-2" fab dark large color="red" @click="deleteAllLink()">
          <v-icon dark> mdi-autorenew </v-icon>
        </v-btn>

        <v-menu
          bottom
          origin="center center"
          transition="scale-transition"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              class="mx-2"
              fab
              dark
              large
              color="purple"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in ['分岐', '遅延素子', '排他的論理和']"
              :key="i"
              link
            >
              <v-list-item-title class="text-center" @click="addNode()">{{
                item
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
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
  data() {
    let nodeType = {
      mainInput: {
        type: 0,
        value: "11001",
      },
      mainOutput: {
        type: 1,
        value: null,
        in: [null, null],
      },
      branch: {
        type: 2,
        in: [null],
      },
      delay: {
        type: 3,
        state: "0",
        in: [null],
      },
      exor: {
        type: 4,
        in: [null, null],
      },
    };

    let nodeTemplate = {
      mainInput: {
        title: "メイン入力",
        size: {
          width: 130,
          height: 90,
        },
        portsOut: {
          o1: "出力1",
        },
        data: nodeType.mainInput,
      },
      mainOutput: {
        title: "メイン出力",
        size: {
          width: 130,
          height: 108,
        },
        portsIn: {
          i1: "入力1",
          i2: "入力2",
        },
        data: nodeType.mainOutput,
      },
      branch: {
        title: "分岐",
        size: {
          width: 160,
          height: 75,
        },
        portsIn: {
          i1: "入力1",
        },
        portsOut: {
          o1: "出力1",
          o2: "出力2",
        },
        data: nodeType.branch,
      },
      delay: {
        title: "遅延素子",
        size: {
          width: 100,
          height: 75,
        },
        portsIn: {
          i1: "入力1",
        },
        portsOut: {
          o1: "出力1",
        },
        data: nodeType.delay,
      },
      exor: {
        title: "排他的論理和",
        size: {
          width: 160,
          height: 75,
        },
        portsIn: {
          i1: "入力1",
          i2: "入力2",
        },
        portsOut: {
          o1: "出力1",
        },
        data: nodeType.exor,
      },
    };

    return {
      mainCount: 0,
      nodes: {
        mainInput: {
          id: "mainInput",
          ...JSON.parse(JSON.stringify(nodeTemplate.mainInput)),
          coordinates: {
            x: 0,
            y: 50,
          },
        },
        branch1: {
          id: "branch1",
          ...JSON.parse(JSON.stringify(nodeTemplate.branch)),
          coordinates: {
            x: 150,
            y: 50,
          },
        },
        delay1: {
          id: "delay1",
          ...JSON.parse(JSON.stringify(nodeTemplate.delay)),
          coordinates: {
            x: 330,
            y: 32,
          },
        },
        branch2: {
          id: "branch2",
          ...JSON.parse(JSON.stringify(nodeTemplate.branch)),
          coordinates: {
            x: 450,
            y: 50,
          },
        },
        exor1: {
          id: "exor1",
          ...JSON.parse(JSON.stringify(nodeTemplate.exor)),
          coordinates: {
            x: 630,
            y: 150,
          },
        },
        mainOutput: {
          id: "mainOutput",
          ...JSON.parse(JSON.stringify(nodeTemplate.mainOutput)),
          coordinates: {
            x: 810,
            y: 50,
          },
        },
      },
      links: {
        "link-1": {
          id: "link-1",
          start_id: "mainInput",
          start_port: "o1",
          end_id: "branch1",
          end_port: "i1",
        },
        "link-2": {
          id: "link-2",
          start_id: "branch1",
          start_port: "o1",
          end_id: "delay1",
          end_port: "i1",
        },
        "link-3": {
          id: "link-3",
          start_id: "branch1",
          start_port: "o2",
          end_id: "exor1",
          end_port: "i2",
        },
        "link-4": {
          id: "link-4",
          start_id: "delay1",
          start_port: "o1",
          end_id: "branch2",
          end_port: "i1",
        },
        "link-5": {
          id: "link-5",
          start_id: "branch2",
          start_port: "o1",
          end_id: "mainOutput",
          end_port: "i1",
        },
        "link-6": {
          id: "link-6",
          start_id: "branch2",
          start_port: "o2",
          end_id: "exor1",
          end_port: "i1",
        },
        "link-7": {
          id: "link-7",
          start_id: "exor1",
          start_port: "o1",
          end_id: "mainOutput",
          end_port: "i2",
        },
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
    init() {
      this.$refs.diagram.setModel({
        nodes: this.nodes,
        links: this.links,
      });
      this.$refs.diagram.disableDblClickZoom();
      this.$refs.diagram.disableDblClickZoom();
    },
    format(node) {
      return JSON.stringify(node, null, 2);
    },
    nodeColor(node) {
      if (node.coordinates.x > 200) {
        return "#0f0";
      }
      if (node.coordinates.y > 200) {
        return "#f00";
      }

      return "#00f";
    },

    nodePulsable(node) {
      return node.coordinates.y > 200;
    },

    addInput(node) {
      const inputCount = Object.keys(node.portsIn).length;
      // console.log(inputCount);
      node.portsIn = {
        ...node.portsIn,
        ["i" + (inputCount + 1)]: "入力" + (inputCount + 1),
      };
      node.size.height += 18;
    },

    deleteInput(node) {
      const inputCount = Object.keys(node.portsIn).length;
      // console.log(inputCount);
      if (inputCount <= 1) return;
      let buffer = {};
      for (let i = 0; i < inputCount - 1; i++) {
        console.log(node.portsIn[Object.keys(node.portsIn)[i]]);
        buffer = {
          ...buffer,
          [Object.keys(node.portsIn)[i]]:
            node.portsIn[Object.keys(node.portsIn)[i]],
        };
      }
      node.portsIn = buffer;
      node.size.height -= 18;
    },

    addOutput(node) {
      const outputCount = Object.keys(node.portsOut).length;
      // console.log(outputCount);
      node.portsOut = {
        ...node.portsOut,
        ["o" + (outputCount + 1)]: "出力" + (outputCount + 1),
      };
      node.size.height += 18;
    },

    deleteOutput(node) {
      const outputCount = Object.keys(node.portsOut).length;
      // console.log(outputCount);
      if (outputCount <= 1) return;
      let buffer = {};
      for (let i = 0; i < outputCount - 1; i++) {
        console.log(node.portsOut[Object.keys(node.portsOut)[i]]);
        buffer = {
          ...buffer,
          [Object.keys(node.portsOut)[i]]:
            node.portsOut[Object.keys(node.portsOut)[i]],
        };
      }
      node.portsOut = buffer;
      node.size.height -= 18;
    },

    deleteAllLink() {
      this.links = null;
      this.$refs.diagram.setModel({
        nodes: this.nodes,
        links: this.links,
      });
    },

    getConectedNodes(node) {
      let cNodes = [];
      Object.keys(this.links).forEach((a) => {
        if (this.links[a].start_id == node.id) {
          cNodes.push({
            node: this.nodes[this.links[a].end_id],
            port: this.links[a].end_port,
            index: Object.keys(
              this.nodes[
                Object.keys(this.nodes)[
                  this.pluck(Object.values(this.nodes), "id").indexOf(
                    this.links[a].end_id
                  )
                ]
              ].portsIn
            ).indexOf(this.links[a].end_port),
          });
          console.log("テスト", this.pluck(Object.values(this.nodes), "id"));
          // this.nodes[this.links[a].end_id] idとkeyが一緒なためこれにしている　課題　end_id　検索
        }
      });
      return cNodes;
    },

    clearCache() {
      Object.keys(this.nodes).forEach((key) => {
        if ("in" in this.nodes[key].data) {
          for (
            let i = 0;
            i < Object.keys(this.nodes[key].portsIn).length;
            i++
          ) {
            this.nodes[key].data.in[i] = null;
          }
        }
      });
      console.log(this.nodes);
    },

    runAll() {
      const serial = this.$refs.diagram.serialize();
      // this.nodes = serial.nodes;
      // this.links = serial.links;

      console.log(this.nodes[0]);
      const mainInput = this.nodes.mainInput;
      const value = mainInput.data.value;
      for (let i = 0; i < value.length; i++) {
        this.tick(mainInput, i);
        this.clearCache();
      }
    },

    tick(node, t = 0) {
      console.log(node);
      if (node.data.type == 0) {
        this.getConectedNodes(node).forEach((target) => {
          target.node.data.in[target.index] = node.data.value[t];
          // console.log((target.node.title = node.data.value[t]));
          this.tick(target.node);
        });
      } else if (node.data.type == 2) {
        // 要validation
        this.getConectedNodes(node).forEach((target) => {
          console.log(target.node.id, node.id, target.index, node.data.in[0]);
          target.node.data.in[target.index] = node.data.in[0];
          this.tick(target.node);
        });
      }

      // node = this.nodes.delay1;
      else if (node.data.type == 3) {
        // 要validation
        this.getConectedNodes(node).forEach((target) => {
          console.log(target.node.id, node.id, target.index, node.data.in[0]);
          target.node.data.in[target.index] = node.data.state;
          // console.log((target.node.title = node.data.state));
          this.tick(target.node);
        });
        node.data.state = node.data.in[0];
      }

      if (node.data.type == 4) {
        // 要validation
        console.log(node.data.in);
        if (node.data.in.indexOf(null) != -1) return;
        let result = 0;
        node.data.in.forEach((n) => {
          result += Number(n);
        });
        result = (result % 2).toString();
        this.getConectedNodes(node).forEach((target) => {
          target.node.data.in[target.index] = result;
          // console.log((target.node.title = result));
          this.tick(target.node);
        });
      }

      // node = this.nodes.mainOutput;
      if (node.data.type == 1) {
        // 要validation
        if (node.data.in.indexOf(null) != -1) return;
        node.data.in.forEach((n) => {
          if (node.data.value == null) node.data.value = n;
          else node.data.value = node.data.value + n;
        });
        // console.log(node.data.in);
      }

      this.$refs.diagram.setModel({
        nodes: this.nodes,
        links: this.links,
      });
    },

    pluck(array, prop) {
      const obj = array.map((prev) => {
        return prev[prop];
      });
      return obj;
    },
  },
};
</script>
