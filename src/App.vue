<template>
  <div id="app">
    <el-header class="header">
      <div class="-container">
        <el-popover placement="bottom" trigger="click" class="button lang-button">
          <el-radio-group :value="locale" @input="updateLang">
            <el-radio
              v-for="lang in langs"
              :key="lang.label"
              :label="lang.value"
            >{{ $t(lang.label) }}</el-radio>
          </el-radio-group>
          <el-tooltip effect="light" :content="$t('Language')" placement="bottom" slot="reference">
            <el-button icon="el-icon-map-location" circle></el-button>
          </el-tooltip>
        </el-popover>
        <el-tooltip
          v-if="$route.path == '/'"
          effect="light"
          :content="$t('Help')"
          placement="bottom"
        >
          <el-button
            icon="el-icon-question"
            class="button import-button"
            circle
            @click="showTutorial()"
          ></el-button>
        </el-tooltip>
        <el-tooltip
          v-if="$route.path == '/flow'"
          effect="light"
          :content="$t('Upload another flow')"
          placement="bottom"
        >
          <el-button
            icon="el-icon-upload"
            class="button import-button"
            circle
            @click="returnToHome()"
          ></el-button>
        </el-tooltip>
        <el-tooltip
          v-if="$route.path == '/flow'"
          effect="light"
          :content="$t('flip chart')"
          placement="bottom"
        >
          <el-button
            icon="el-icon-sort"
            :class="{ '-flipped' : direction == 'TB' }"
            class="button import-button"
            circle
            @click="toggleDirection()"
          ></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="light" placement="bottom">
          <span slot="content">NeoAssist.com S/A © {{ today }}. {{ $t('All rights reserved') }}</span>
          <img
            src="https://homologacao.neoassist.com/clients/watsonreader/logoNeo.png"
            alt="logo"
            class="logo"
          />
        </el-tooltip>
      </div>
    </el-header>
    <el-main class="content">
      <router-view ref="home" />
    </el-main>
  </div>
</template>

<script>
import topNavigation from "@/components/top-navigation";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      langs: [
        { label: "English", value: "en_us" },
        { label: "Portuguese", value: "pt_br" }
      ]
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      direction: state => state.direction
    }),
    today() {
      let dt = new Date();
      return dt.getUTCFullYear();
    }
  },
  methods: {
    updateLang(label) {
      this.$store.commit("SET_LANG", label);
      this.$root.$i18n.locale = label;
    },
    returnToHome() {
      this.$router.push("/");
    },
    toggleDirection() {
      this.$store.commit("TOGGLE_DIRECTION");
    },
    showTutorial() {
      this.$refs.home.toggle();
    },
    ...mapMutations[("SET_LANG", "TOGGLE_DIRECTION")]
  }
};
</script>

<style lang="sass">
@import "assets/sass/app.sass"

.chart
  cursor: grab;
  overflow: hidden
  padding: 30px 0
  max-width: 100%

  ::active
    cursor: grabbing

  .node
    cursor: default

::-webkit-scrollbar
  width: 0.75rem
  height: 0.75rem

::-webkit-scrollbar-track
  background: #ecf5ff;

::-webkit-scrollbar-thumb
  background: #00bff2

.-container
  max-width: 1200px
  margin: 0 auto

.el-drawer__body
  overflow: scroll

.el-drawer__header>:first-child 
  font-size: 20px
  text-align: center

.el-step__icon.is-icon
  border-radius: 100%;
  height: 40px;
  margin-top: -7px;
  border: 2px solid;

.el-message-box__close.el-icon-close
  display: none;

.el-main
  padding: 20px 0 !important

.header
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  background: #FFF

  .-container
    height: 60px
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-start
    align-items: center
  
  .label
    text-align: center
    
  .button
    &.import-button
      margin: 0 0 0 10px;
      transition: 0.5s ease

  .logo
    margin-left: auto
    height: 40px

.-flipped
  transform: rotate(90deg)

body
  background: #f5f7fa
      
.el-drawer
    @media(max-width: 600px)
      width: 100% !important

</style>
