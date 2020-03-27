<template>
  <div>
    <div class="tabs">
      <el-button :disabled="entities.length == 0" @click="showEntities = true">{{ $t('Entities')}}</el-button>
      <el-button :disabled="intents.length == 0" @click="showIntents = true">{{ $t('Intents') }}</el-button>
    </div>
    <VueFlowy v-dragscroll="true" class="chart" :chart="chart"></VueFlowy>
    <el-drawer
      size="100%"
      :title="node.getTitle()"
      @close="nodeDetails = false"
      :visible="nodeDetails"
      direction="ttb"
      class="drawer"
    >
      <div class="drawer-content">
        <ul v-if="node.type != 'folder'">
          <li v-for="atr in (Object.entries(node))" :key="atr[0]">
            <div v-if="(!!atr[1] && !['previous'].includes(atr[0]))">
              <span class="label">{{ $t(atr[0]) }}:</span>

              <span class="text" v-if="atr[0] == 'parent'">{{ getDialog(atr[1]) }}</span>

              <span class="text" v-else-if="atr[0] == 'then' && atr[1].action == 'jump'">
                {{ $t('jump to') }}
                <span class="_italic">{{ getDialog(atr[1].to) }}</span>
                {{ $t(atr[1].check) }}
              </span>

              <span
                class="text"
                v-else-if="atr[0] == 'then' && atr[1].action == 'skip'"
              >{{ $t('skip user input') }}</span>

              <pre
                class="code"
                v-else-if="(typeof atr[1] === 'object' && atr[1] !== null) || Array.isArray(atr[1])"
              > {{ atr[1] }} </pre>

              <span class="text" v-else>{{atr[1]}}</span>
            </div>
          </li>
        </ul>
        <el-card v-else class="folder">
          <div class="title">
            <i class="el-icon-folder"></i>
            {{ node.getTitle() }}
          </div>
        </el-card>
      </div>
    </el-drawer>

    <el-drawer
      size="50%"
      :title="$t('Intents')"
      @close="showIntents = false"
      :visible="showIntents"
      direction="rtl"
      class="drawer"
    >
      <el-input placeholder="Buscar" class="search-bar" v-model="intentFilter"></el-input>
      <div class="drawer-content">
        <el-tree
          class="filter-tree"
          :empty-text="$t('no results')"
          :data="intentList"
          :props="defaultProps"
          :filter-node-method="filterData"
          ref="tree"
        ></el-tree>
      </div>
    </el-drawer>

    <el-drawer
      size="50%"
      :title="$t('Entities')"
      @close="showEntities = false"
      :visible="showEntities"
      direction="ltr"
      class="drawer"
    >
      <el-input placeholder="Buscar" class="search-bar" v-model="entityFilter"></el-input>
      <div class="drawer-content">
        <el-tree
          class="filter-tree"
          :empty-text="$t('no results')"
          :data="entityList"
          :props="defaultProps"
          :filter-node-method="filterData"
          ref="tree"
        ></el-tree>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import _ from "lodash";
import { VueFlowy, FlowChart } from "vue-flowy";
import { Handler, Dialog } from "@/classes/classes";
import { mapState, mapMutations } from "vuex";
import { dragscroll } from 'vue-dragscroll'

export default {
  name: "flow",
  components: {
    VueFlowy
  },
  directives: {
    dragscroll
  },
  watch: {
    intentFilter(val) {
      this.$refs.tree.filter(val);
    },
    direction(orient) {
      this.tree = {};
      if (this.chart.elements && this.chart.elements.length > 0) {
        this.chart.destroy();
      }
      this.$store.commit("SET_CHART", this.tree);
      this.buildFlow();
    },
    entityFilter(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      node: new Dialog({}),
      nodeDetails: false,
      showEntities: false,
      showIntents: false,
      intentFilter: "",
      entityFilter: "",
      tree: {},
      intents: [],
      entities: [],
      dialogs: [],
      intentList: [],
      entityList: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  computed: {
    ...mapState({
      uploadedFile: state => state.file,
      chart: state => state.chart,
      direction: state => state.direction
    })
  },
  mounted() {
    if (
      Object.entries(this.uploadedFile).length === 0 &&
      this.uploadedFile.constructor === Object
    ) {
      this.$router.replace("/");
    } else {
      this.buildFlow();
    }
  },
  beforeDestroy() {
    this.tree = {};
    if (this.chart.elements && this.chart.elements.length > 0) {
      this.chart.destroy();
    }
    this.$store.commit("SET_CHART", this.tree);
  },
  methods: {
    selectNode(dialog, toggleThis) {
      this.node = dialog;
      this[toggleThis] = true;
    },
    filterData(value, data) {
      if (!value || data.children || data.floor) {
        return data.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }
      return true;
    },
    buildFlow() {
      const chart = new FlowChart({ direction: this.direction });
      const handler = new Handler(this.uploadedFile);
      this.dialogs = handler.dialogs;
      this.entities = handler.entities;
      this.intents = handler.intents;

      var i = 0;
      this.intentList = this.intents.map(intent => {
        return {
          id: i++,
          label: `#${intent.title}`,
          floor: false,
          children: intent.examples.map(example => {
            return {
              id: i++,
              label: example,
              floor: true
            };
          })
        };
      });

      this.entityList = this.entities.map(entity => {
        return {
          id: i++,
          label: `@${entity.title}`,
          floor: false,
          children: Object.keys(entity.values).map((synonyms, id) => {
            let payload = {
              id: i++,
              label: Object.keys(entity.values)[id],
              floor: true
            };
            if (
              Array.isArray(entity.values[payload.label]) &&
              entity.values[payload.label].length > 0
            ) {
              payload.children = entity.values[payload.label].map(synonym => {
                return {
                  id: i++,
                  label: synonym,
                  floor: true
                };
              });
            }
            return payload;
          })
        };
      });

      if (
        typeof this.chart === "object" &&
        this.chart !== null &&
        Object.entries(this.chart).length === 0
      ) {
        try {
          handler.dialogs.forEach(dialog => {
            this.tree[dialog.nodeId] = chart.addElement(dialog.nodeId, {
              label: dialog.getTitle()
            });
          });
          this.tree["root"] = chart.addElement("root", {
            label: this.$t("root")
          });

          handler.dialogs.forEach(dialog => {
            if (dialog.parent) {
              this.tree[dialog.parent].leadsTo(this.tree[dialog.nodeId]);
            } else {
              this.tree["root"].leadsTo(this.tree[dialog.nodeId]);
            }
            this.tree[dialog.nodeId].on("click", () =>
              this.selectNode(dialog, "nodeDetails")
            );
          });

          this.$store.commit("SET_CHART", chart);
        } catch (err) {
          this.tree = {};
          this.$store.commit("SET_FILE", {});
          this.$store.commit("SET_CHART", {});
          this.$router.replace("/");
          this.$notify({
            title: this.$t("Error"),
            message: this.$t("An error occurred") + err
          });
        }
      }
    },
    getDialog: _.debounce(function(id) {
      let dialog = this.dialogs.find(dialog => dialog.nodeId == id);
      return dialog.getTitle();
    }),
    ...mapMutations["SET_CHART"]
  }
};
</script>

<style lang="sass" scoped>

  .flow
    border-radius: 5px
    border: 1px #7f7f7f solid

  .search-bar
    border-radius: 0px;

  .drawer-content
    padding: 0 20px;
    line-height: 25px;

    .label
      font-weight: bold;

    .code
      border-radius: 1px
      border: 1px #7f7f7f solid
      background: #d1fcff
      padding: 5px
      word-wrap: break-word;
      white-space: pre-wrap;

    .text
      color: #111

    .folder
      font-size: 3rem

  .tabs
    margin: -20px 0;
    position: absolute
    width: 100%
    display: flex
    align-items: stretch
    align-content: flex-start
    justify-content: space-evenly
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) 
    
    button
      width: 100%;
      margin-left: 0px;
      border-radius: 0px;
</style>