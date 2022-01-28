<template>
  <div>
    <VueDiagramEditor
      ref="editor"
      :height="height"
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
    <v-btn @click="undo" :disabled="!undoable"> undo </v-btn>
    <v-btn @click="redo" :disabled="!redoable"> redo </v-btn>
    <v-btn @click="testInit2"> test </v-btn>
  </div>
</template>

<script>
import VueDiagramEditor from "vue-diagram-editor";
import "vue-diagram-editor/dist/vue-diagram-editor.css";

export default {
  name: "",
  components: {
    VueDiagramEditor,
  },
  data: () => ({
    debugMode: true, // trueのときログが出力されるように
    height: 500,
    diagram: {
      nodes: [],
      links: [],
    },
    history: [], // 図の変更履歴
    historyOffset: 0, // どのくらい履歴を遡っているか 0が最新(undoで+1 redoで-1)
    historySync: false, // 履歴をエディタと同期したときに
    isAutoSyncEnabled: false,
    unwatch: function () {},
  }),
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
        console.log(this.history);
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
      this.log("エディタによる変更を変数に適用");
      this.toggleAutoSync(); // ここからは自動で同期される
    },
    // 変数の図をエディタに同期
    syncToEditor(diagram = this.diagram) {
      this.toggleAutoSync(); // 次の toggleAutoSync() まで図が自動で同期されない
      this.$refs.editor.setModel(this.formatObject(diagram));
      this.log("変数による変更をエディタに適用");
      this.updateHistory(); // 変数からの編集でも履歴を更新
      this.toggleAutoSync(); // ここからは自動で同期される
    },
    // 変数・エディタ間の自動同期 切り替え
    toggleAutoSync() {
      if (!this.isAutoSyncEnabled) {
        let unwatchModel = this.$watch("model", this.syncFromEditor, {
          deep: true,
        });
        let unwatchDiagram = this.$watch("diagram", this.syncToEditor, {
          deep: true,
        });
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
    this.$refs.editor.setModel(this.diagram);
    this.toggleAutoSync();
    this.testInit();
  },
};
</script>
