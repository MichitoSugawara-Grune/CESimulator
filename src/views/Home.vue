<template>
  <div>
    <div ref="editorPanel" class="editor">
      <VueDiagramEditor
        ref="editor"
        :height="height"
        :node-color="nodeColor"
        :node-pulsable="nodePulsable"
        :node-deletable="
          (node) => {
            return node.data.type != 0 && node.data.type != 1;
          }
        "
        @updated-node="updateHistory"
        @deleted-node="updateHistory"
        @created-link="updateHistory"
        @deleted-link="updateHistory"
      >
        <v-container slot="node" slot-scope="{ node }" @click="log(node)">
          <v-row
            v-if="1"
            v-bind:style="{
              height: node.size.height - 22 + 'px',
            }"
          >
            <!-- メイン入力 テンプレート -->
            <template v-if="node.data.type == 0">
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
            <template v-if="node.data.type == 3"> </template>

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
    </div>
    <div class="panel">
      <v-container>
        <v-row>
          <v-col cols="5">
            <v-text-field
              label="入力値"
              color="primary"
              hide-details
              clearable
              v-model="input1"
              @keypress="isBinary($event)"
            >
              ></v-text-field
            >
          </v-col>
          <v-col cols="2">
            <v-btn
              width="100%"
              dark
              large
              :color="isDecode ? 'deep-orange' : 'primary'"
              @click="isDecode = !isDecode"
            >
              {{ isDecode ? "復号化" : "符号化" }}
            </v-btn>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="出力結果"
              color="primary"
              readonly
              hide-details
              clearable
              v-model="input2"
              @keypress="isBinary($event)"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn class="mx-2" fab large @click="undo" :disabled="!undoable">
            <v-icon large> mdi-arrow-left-thick </v-icon>
          </v-btn>

          <v-btn class="mx-2" fab large @click="redo" :disabled="!redoable">
            <v-icon large> mdi-arrow-right-thick </v-icon>
          </v-btn>

          <v-btn
            class="mx-2"
            fab
            large
            color="primary"
            :disabled="!isReady()"
            @click="run()"
          >
            <v-icon> mdi-play </v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark large color="red" @click="resetInput()">
            <v-icon> mdi-autorenew </v-icon>
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
                <v-list-item-title
                  class="text-center"
                  @click="addNodeByType(i + 2, 50, 50)"
                  >{{ item }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </div>
    <div class="text-center"></div>
  </div>
</template>

<script>
import VueDiagramEditor from "vue-diagram-editor";
import _ from "lodash";

export default {
  name: "",
  components: {
    VueDiagramEditor,
  },
  data: () => {
    const nodeType = {
      mainInput: {
        color: "#00f",
        type: 0,
      },
      mainOutput: {
        color: "#00f",
        type: 1,
        in: [null, null],
      },
      branch: {
        color: "#00f",
        type: 2,
        in: [null],
      },
      delay: {
        color: "#00f",
        type: 3,
        state: "0",
        in: [null],
      },
      exor: {
        color: "#00f",
        type: 4,
        in: [null, null],
      },
    };
    const mainTemplate = {
      mainInput: {
        title: "メイン入力",
        size: {
          width: 130,
          height: 57,
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
          height: 75,
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
          height: 57,
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
      debugMode: true, // trueのときログが出力されるように
      input1: "",
      input2: "",
      isCalculation: false,
      isDecode: false,
      height: 1000,
      nodeType: nodeType,
      nodeTemplate: mainTemplate,
      diagram: {
        nodes: [],
        links: [],
      },
      history: [], // 図の変更履歴
      historyOffset: 0, // どのくらい履歴を遡っているか 0が最新(undoで+1 redoで-1)
      historySync: false, // 履歴をエディタと同期したときに
      isAutoSyncEnabled: false,
      unwatch: function () {},
    };
  },
  methods: {
    // log - debugMode == true のときのみログを出力
    log(...log) {
      if (!this.debugMode) return;
      console.log(...log);
    },
    // Objectを参照渡ししないように, 別参照としての同じオブジェクトを返す
    formatObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    // 図の編集履歴 更新  履歴すべてのインデックス+1個ずれて 0番目が最新の状態
    updateHistory() {
      if (this.historySync) {
        this.historySync = false;
        return;
      }
      if (this.historyOffset != 0) {
        this.history.splice(0, this.historyOffset);
        this.history.unshift(this.formatObject(this.model));
        this.historyOffset = 0;
      } else {
        this.history.unshift(this.formatObject(this.model));
        this.log(this.history);
      }
    },
    undo() {
      this.log("履歴オフセット: ", this.historyOffset);
      this.log("履歴: ", this.history);
      let previous = this.history[this.historyOffset + 1]; // オフセット+1番目の履歴をpreviousと定義
      if (previous == null) return; // previous nullチェック (履歴がそもそも存在するかどうか "if(!this.undoable) return;" でも良)
      this.diagram = this.formatObject(previous); // 図の変数に代入 → 変数の監視(this.$watch.diagram)によりエディタに同期される
      this.historyOffset++; // オフセットに1を足す(nullチェック後に+1することで, +1番目の履歴が存在しなかった場合オフセットは+1されない)
      this.historySync = true; // "this.diagram = this.formatObject(previous)" により同期で2回 updateHistoryが呼び出されてしまうため 無理やり一回目を打ち消すためのフラグ 要:最適化
    },
    redo() {
      this.log("履歴オフセット: ", this.historyOffset);
      this.log("履歴: ", this.history);
      let previous = this.history[this.historyOffset - 1]; // オフセット-1番目の履歴をpreviousと定義
      if (previous == null) return; // previous nullチェック (履歴がそもそも存在するかどうか "if(!this.redoable) return;" でも良)
      this.diagram = this.formatObject(previous); // 図の変数に代入 → 変数の監視(this.$watch.diagram)によりエディタに同期される
      this.historyOffset--; // オフセットから1を引く(nullチェック後に+1することで, -1番目の履歴が存在しなかった場合オフセットは+1されない)
      this.historySync = true; // "this.diagram = this.formatObject(previous)" により同期で2回 updateHistoryが呼び出されてしまうため 無理やり一回目を打ち消すためのフラグ 要:最適化
    },
    mainInit() {
      const mainInput = this.nodeType["mainInput"].type;
      const mainOutput = this.nodeType["mainOutput"].type;
      const branch = this.nodeType["branch"].type;
      const delay = this.nodeType["delay"].type;
      const exor = this.nodeType["exor"].type;

      this.toggleAutoSync(); //履歴に追加されないようにエディターへの同期を無視

      this.addNodeByType(mainInput, 0, 50);
      this.addNodeByType(mainOutput, 810, 50);
      this.addNodeByType(branch, 150, 50);
      this.addNodeByType(delay, 330, 32);
      this.addNodeByType(branch, 450, 50);
      this.addNodeByType(exor, 630, 150);

      const links = [
        {
          start_id: "mainInput",
          start_port: "o1",
          end_id: "branch1",
          end_port: "i1",
        },
        {
          start_id: "branch1",
          start_port: "o1",
          end_id: "delay1",
          end_port: "i1",
        },
        {
          start_id: "branch1",
          start_port: "o2",
          end_id: "exor1",
          end_port: "i2",
        },
        {
          start_id: "delay1",
          start_port: "o1",
          end_id: "branch2",
          end_port: "i1",
        },
        {
          start_id: "branch2",
          start_port: "o1",
          end_id: "mainOutput",
          end_port: "i1",
        },
        {
          start_id: "branch2",
          start_port: "o2",
          end_id: "exor1",
          end_port: "i1",
        },
        {
          start_id: "exor1",
          start_port: "o1",
          end_id: "mainOutput",
          end_port: "i2",
        },
      ];
      this.diagram.links = links;
      this.toggleAutoSync();
      this.syncToEditor(); //すべて追加したあとで同期
      this.log(this.getNodesByType(1));
    },
    testInit() {
      const obj = function (n) {
        return {
          title: "test" + n,
          coordinates: {
            x: 10 + 100 * n,
            y: 10,
          },
          portsIn: {
            i1: "i1",
          },
          portsOut: {
            o1: "o1",
          },
          size: {
            width: 80,
            height: 50,
          },
        };
      };
      for (let i = 0; i < 2; i++) this.diagram.nodes.push({ ...obj(i) });
    },
    testInit2() {
      const obj = function (n) {
        return {
          title: "test" + n,
          coordinates: {
            x: 10 + 100 * n,
            y: 10,
          },
          portsIn: {
            i1: "i1",
          },
          portsOut: {
            o1: "o1",
          },
          size: {
            width: 80,
            height: 50,
          },
        };
      };
      this.toggleAutoSync();
      for (let i = 2; i < 5; i++) this.diagram.nodes.push({ ...obj(i) });
      this.toggleAutoSync();
      this.syncToEditor();
    },
    // エディタの図を変数に同期
    syncFromEditor(diagram = this.model) {
      this.toggleAutoSync(); // 次の切り替えまで図が自動で同期されない
      this.diagram = this.formatObject(diagram);
      // this.log("エディタによる変更を変数に適用");
      this.toggleAutoSync(); // ここからは自動で同期される
    },
    // 変数の図をエディタに同期
    syncToEditor(diagram = this.diagram) {
      this.toggleAutoSync(); // 次の toggleAutoSync() まで図が自動で同期されない
      this.$refs.editor.setModel(this.formatObject(diagram));
      // this.log("変数による変更をエディタに適用");
      this.toggleAutoSync(); // ここからは自動で同期される
      this.updateHistory(); // 変数からの編集でも履歴を更新
    },
    // 変数・エディタ間の自動同期 切り替え
    toggleAutoSync() {
      if (!this.isAutoSyncEnabled) {
        let unwatchModel = this.$watch(
          "model",
          _.debounce(this.syncFromEditor, 100),
          {
            deep: true,
          }
        );
        let unwatchDiagram = this.$watch(
          "diagram",
          _.debounce(this.syncToEditor, 100),
          {
            deep: true,
          }
        );
        this.unwatch = function () {
          unwatchModel();
          unwatchDiagram();
        };
        this.isAutoSyncEnabled = true;
      } else {
        this.unwatch();
        this.isAutoSyncEnabled = false;
      }
    },

    //addNodeByType
    addNodeByType(type, x = 0, y = 0) {
      if (type == 0) {
        if (this.getNodesByType(type).length > 0) return;
        this.diagram.nodes.push({
          ...this.formatObject(this.nodeTemplate.mainInput),
          id: "mainInput",
          coordinates: { x: x, y: y },
        });
      } else if (type == 1) {
        if (this.getNodesByType(type).length > 0) return;
        this.diagram.nodes.push({
          ...this.formatObject(this.nodeTemplate.mainOutput),
          id: "mainOutput",
          coordinates: { x: x, y: y },
        });
      } else if (type == 2) {
        this.diagram.nodes.push({
          coordinates: { x: x, y: y },
          ...this.formatObject(this.nodeTemplate.branch),
          id: "branch" + (this.getNodesByType(type).length + 1),
          title:
            this.nodeTemplate.branch.title +
            (this.getNodesByType(type).length > 0
              ? " " + (this.getNodesByType(type).length + 1)
              : ""),
        });
      } else if (type == 3) {
        this.diagram.nodes.push({
          coordinates: { x: x, y: y },
          ...this.formatObject(this.nodeTemplate.delay),
          id: "delay" + (this.getNodesByType(type).length + 1),
          title:
            this.nodeTemplate.delay.title +
            (this.getNodesByType(type).length > 0
              ? " " + (this.getNodesByType(type).length + 1)
              : ""),
        });
      } else if (type == 4) {
        this.diagram.nodes.push({
          coordinates: { x: x, y: y },
          ...this.formatObject(this.nodeTemplate.exor),
          id: "exor" + (this.getNodesByType(type).length + 1),
          title:
            this.nodeTemplate.exor.title +
            (this.getNodesByType(type).length > 0
              ? " " + (this.getNodesByType(type).length + 1)
              : ""),
        });
      }
    },
    addInput(node) {
      const inputCount = Object.keys(node.portsIn).length;
      node.portsIn = {
        ...node.portsIn,
        ["i" + (inputCount + 1)]: "入力" + (inputCount + 1),
      };
      node.size.height += 18;
      this.updateHistory();
    },

    deleteInput(node) {
      const inputCount = Object.keys(node.portsIn).length;
      if (inputCount <= 1) return;
      let buffer = {};
      for (let i = 0; i < inputCount - 1; i++) {
        buffer = {
          ...buffer,
          [Object.keys(node.portsIn)[i]]:
            node.portsIn[Object.keys(node.portsIn)[i]],
        };
      }
      node.portsIn = buffer;
      node.size.height -= 18;
      this.updateHistory();
    },

    addOutput(node) {
      const outputCount = Object.keys(node.portsOut).length;
      node.portsOut = {
        ...node.portsOut,
        ["o" + (outputCount + 1)]: "出力" + (outputCount + 1),
      };
      node.size.height += 18;
      this.updateHistory();
    },

    deleteOutput(node) {
      const outputCount = Object.keys(node.portsOut).length;
      if (outputCount <= 1) return;
      let buffer = {};
      for (let i = 0; i < outputCount - 1; i++) {
        buffer = {
          ...buffer,
          [Object.keys(node.portsOut)[i]]:
            node.portsOut[Object.keys(node.portsOut)[i]],
        };
      }
      node.portsOut = buffer;
      node.size.height -= 18;
      this.updateHistory();
    },

    deleteAllLink() {
      this.links = null;
      this.$refs.diagram.setModel({
        nodes: this.nodes,
        links: this.links,
      });
    },

    getNodesByType(type) {
      let nodes = [];
      this.diagram.nodes.forEach((node) => {
        if (node.data.type == type) nodes.push(node);
      });
      return nodes;
    },

    findMinRecords(array, prop, value) {
      let result = [];
      let buffer = [];
      for (let i = 0; i < array.length; i++) {
        let distance = this.getHammingDistance(value, array[i][prop]);
        if (distance == 0) {
          result.push(array[i]);
          break;
        } else {
          buffer.push(distance);
        }
      }
      if (result.length > 0) return result;
      return array.filter((record) => {
        return (
          this.getHammingDistance(value, record[prop]) == Math.min(...buffer)
        );
      });
      // return array.filter((record) => {
      //   return record[prop] == value;
      // });
    },

    findRecords(array, prop, value = null) {
      //テーブル形式の配列から指定のカラム名の指定の値を持つレコードを抽出
      let result = [];
      for (let i = 0; i < array.length; i++) {
        if (value == null || array[i][prop] == value) result.push(array[i]);
      }
      return result;
    },

    //Nodeの繋がっているlinksを取得
    getConnectedLinksByNode(node, isOpposite = false) {
      return this.findRecords(
        this.diagram.links,
        isOpposite ? "end_id" : "start_id",
        node.id
      );
    },

    //Linkの繋がっているnodeを取得
    getConnectedNodeByLink(link, isOpposite = false) {
      return this.findRecords(
        this.diagram.nodes,
        "id",
        isOpposite ? link.start_id : link.end_id
      )[0];
    },

    //Nodeから(outのlinks越しに)繋がっているnodesを取得
    getConnectedNodesByNode(node, isOpposite = false) {
      let result = [];
      this.getConnectedLinksByNode(node, isOpposite).forEach((link) => {
        result.push(this.getConnectedNodeByLink(link, isOpposite));
      });
      return result;
    },

    //接続先のポート番号を取得
    getPortIndexByNodes(startNode, endNode) {
      let connectedLinks = this.getConnectedLinksByNode(startNode);
      let link = this.findRecords(connectedLinks, "end_id", endNode.id)[0];
      let index = Object.keys(endNode.portsIn).indexOf(link.end_port);
      return index;
    },

    clearCache() {
      this.diagram.nodes.forEach((node) => {
        if ("in" in node.data) {
          for (let i = 0; i < node.data.in.length; i++) {
            node.data.in[i] = null;
          }
        }
      });
    },

    decode() {
      this.toggleAutoSync();
      const mainInput = this.getNodesByType(0)[0];
      const mainOutput = this.getNodesByType(1)[0];
      const allDelays = this.getNodesByType(3);
      let count = Object.keys(mainInput.portsOut).length;
      let inputs = this.getAllInputs(count);
      let delayStatus = this.getAllInputs(allDelays.length);

      const inputBuffer = this.input1;
      let table = [];
      for (let i = 0; i < delayStatus.length; i++) {
        for (let j = 0; j < delayStatus[i].length; j++) {
          allDelays[j].data.state = delayStatus[i][j].toString();
        }
        for (let k = 0; k < inputs.length; k++) {
          this.input1 = inputs[k]; //入力に0,1の全パターンを入れる
          console.log("aaaa", k, this.input1);

          for (let t = 0; t < this.input1.length; t++) {
            // this.input1 = "1";
            // this.getNodesByType(3)[0].data.state = "1";
            for (let t = 0; t < this.input1.length; t++) {
              this.tick(mainInput, t);
              this.clearCache();
            }
          }

          table.push({
            delay: delayStatus[i],
            nextDelay: this.getAllDelayState(),
            input: inputs[k],
            output: this.input2,
          });
          this.resetInput();
          for (let j = 0; j < delayStatus[i].length; j++) {
            allDelays[j].data.state = delayStatus[i][j].toString();
          }
        }
      }
      this.input1 = inputBuffer;
      const outputCount = Object.keys(mainOutput.portsIn).length;
      if (this.input1.length % outputCount != 0) {
        console.log("出力の数と合っていない");
        return;
      }
      let input = [];
      for (let i = 0; i < this.input1.length / outputCount; i++) {
        input.push(this.input1.substr(i * outputCount, outputCount));
      }
      console.log("input", input);
      console.log("table", table);

      let currentStatus = delayStatus[0];
      let result = "";
      for (let i = 0; i < input.length; i++) {
        let records = this.findMinRecords(
          this.findRecords(table, "delay", currentStatus),
          "output",
          input[i]
        );
        console.log("テスト reco", records);
        currentStatus = records[0].nextDelay;
        result += records[0].input;
      }
      console.log(result);
      this.resetInput();
      this.toggleAutoSync();

      this.input2 = result;
    },

    getValueMinDistance(a, b) {},

    getHammingDistance(a, b) {
      if (a.length != b.length) return;
      let result = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) result++;
      }
      return result;
    },

    getAllDelayState() {
      let result = "";
      const allDelays = this.getNodesByType(3);
      for (let i = 0; i < allDelays.length; i++) {
        result += allDelays[i].data.state;
      }
      return result;
    },
    getAllInputs(bitCount) {
      let inputs = [];
      for (let i = 0; i < Math.pow(2, bitCount); i++) {
        let input = "";
        for (let j = 0; j < bitCount; j++) {
          input += (
            Math.floor(i / Math.pow(2, bitCount - 1 - j)) % 2
          ).toString();
        }
        inputs.push(input);
      }
      return inputs;
    },

    run() {
      if (this.input1.length <= 0) return;
      if (this.isDecode) this.decode();
      else {
        this.encode();
      }
    },

    encode() {
      const mainInput = this.getNodesByType(0)[0];
      // this.input1 = "1";
      this.toggleAutoSync();
      // this.getNodesByType(3)[0].data.state = "1";
      for (let i = 0; i < this.input1.length; i++) {
        this.tick(mainInput, i);
        this.clearCache();
      }
      this.getNodesByType(3).forEach((delay) => {
        delay.data.state = "0";
      });
      this.toggleAutoSync();
    },

    tick(node, t = 0) {
      this.log("node", node);
      if (node.data.type == 0) {
        this.getConnectedNodesByNode(node).forEach((connectedNode) => {
          let index = this.getPortIndexByNodes(node, connectedNode);
          connectedNode.data.in[index] = this.input1[t];
          this.tick(connectedNode, t);
        });
      }
      //分岐
      else if (node.data.type == 2) {
        // 要validation
        this.getConnectedNodesByNode(node).forEach((connectedNode) => {
          let index = this.getPortIndexByNodes(node, connectedNode);
          connectedNode.data.in[index] = node.data.in[0];
          console.log("index", index, connectedNode.data.in);
          this.log("分岐", connectedNode.data.in);
          this.tick(connectedNode, t);
        });
      }
      //遅延素子
      else if (node.data.type == 3) {
        // 要validation
        this.getConnectedNodesByNode(node).forEach((connectedNode) => {
          let index = this.getPortIndexByNodes(node, connectedNode);
          connectedNode.data.in[index] = node.data.state;
          this.log("遅延素子", connectedNode.data.in);
          this.tick(connectedNode, t);
        });
        node.data.state = node.data.in[0];
      }
      // 排他的論理和
      else if (node.data.type == 4) {
        // 要validation
        this.log(node.data.in);
        console.log("論理和", node.data.in);
        if (node.data.in.indexOf(null) > 0) return;
        let result = 0;
        node.data.in.forEach((n) => {
          result += Number(n);
        });
        result = (result % 2).toString();
        this.getConnectedNodesByNode(node).forEach((connectedNode) => {
          let index = this.getPortIndexByNodes(node, connectedNode);
          connectedNode.data.in[index] = result;
          this.log("排他的論理和", connectedNode.data.in);
          this.tick(connectedNode, t);
        });
      }

      // メイン出力
      if (node.data.type == 1) {
        // 要validation
        if (node.data.in.indexOf(null) != -1) return;
        node.data.in.forEach((data) => {
          this.input2 += data;
        });
      }
    },

    pluck(array, prop) {
      const obj = array.map((prev) => {
        return prev[prop];
      });
      return obj;
    },

    isNodeOkay(node) {
      let portsOut =
        "portsOut" in node
          ? this.getConnectedNodesByNode(node).length ==
            Object.keys(node.portsOut).length
          : true;
      let portsIn =
        "portsIn" in node
          ? this.getConnectedNodesByNode(node, true).length ==
            Object.keys(node.portsIn).length
          : true;
      return portsOut && portsIn;
    },

    nodeColor(node) {
      if (this.isNodeOkay(node)) {
        node.data.color = "#06f";
      } else {
        node.data.color = "#f00";
      }
      return node.data.color;
    },

    nodePulsable(node) {
      return node.data.color == "#f00";
    },

    isReady() {
      return !this.diagram.nodes.some((node) => {
        return node.data.color == "#f00";
      });
    },

    resetInput() {
      this.input1 = "";
      this.input2 = "";
    },

    isBinary: function (event) {
      event = event ? event : window.event;
      var charCode = event.which ? event.which : event.keyCode;
      if (charCode == 48 || charCode == 49) {
        return true;
      } else {
        event.preventDefault();
      }
    },
  },
  computed: {
    model() {
      return this.$refs.editor.serialize();
    },
    undoable() {
      return this.history[this.historyOffset + 1] != null; //undoが可能かどうか(undoボタンのdisable/enableの切り替えに使う(undo出来ないときはボタンを押せないようにする))
    },
    redoable() {
      return this.history[this.historyOffset - 1] != null; //redoが可能かどうか(redoボタンのdisable/enableの切り替えに使う(redo出来ないときはボタンを押せないようにする))
    },
  },
  mounted() {
    this.log(this.$refs.editor.$refs.diagram.$refs);
    this.$refs.editor.disableDblClickZoom();
    this.$refs.editor.setModel(this.diagram);
    this.toggleAutoSync();
    this.mainInit();
  },
};
</script>

<style lang="scss">
.editor {
  height: 80vh;
}
.panel {
  height: 10vh;
}

.diagram-editor__wrapper {
  position: relative;
  height: 100%;
  svg {
    user-select: none;
    font-family: Helvetica, sans-serif;
  }
}

.diagram-editor__node-body {
  background-color: transparent;
}

.diagram-editor__delete {
  cursor: pointer;

  rect {
    fill: #000;
    fill-opacity: 0;
  }

  line {
    stroke: rgb(255, 255, 255);
    stroke-width: 1;
  }
}

.diagram--editor__pulse {
  animation-duration: 2s;
  animation-name: diagram-editor--node-pulse;
  animation-iteration-count: infinite;
}

@keyframes diagram-editor--node-pulse {
  0% {
    fill-opacity: 0;
    stroke-width: 0;
  }
  50% {
    fill-opacity: 1;
    stroke-width: 16;
  }
  100% {
    fill-opacity: 0;
    stroke-width: 0;
  }
}
</style>
