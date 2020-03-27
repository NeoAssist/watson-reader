<template>
  <div class="-container">
    <h1 class="title">{{ $t('Welcome to Watson Reader') }}</h1>
    <el-steps :active="3" class="steps" align-center>
      <el-step icon="el-icon-download">
        <div @click="instVisible = true" slot="title">{{$t('Export JSON')}}</div>
      </el-step>
      <el-step icon="el-icon-upload2" circle>
        <div slot="title">{{$t('Upload Here')}}</div>
      </el-step>
      <el-step icon="el-icon-check" circle>
        <div slot="title">{{$t('Overview')}}</div>
      </el-step>
    </el-steps>

    <div class="steps-mobile" v-on:show-tutorial="console.log('test')">
      <el-button class="box" @click="instVisible = true">
        <div class="body">
          <i class="el-icon-download"></i>
          <span class="pull-right">{{$t('Export JSON')}}</span>
        </div>
      </el-button>
      <el-button class="box" disabled>
        <div class="body">
          <span>{{$t('Upload Here')}}</span>
          <i class="el-icon-upload2 pull-right"></i>
        </div>
      </el-button>
      <el-button slot="reference" class="box" disabled>
        <div class="body">
          <i class="el-icon-check"></i>
          <span class="pull-right">{{$t('Overview')}}</span>
        </div>
      </el-button>
    </div>
    <br />
    <upload name="watsonjson" class="uploader" :uploadFile="uploadHandle" :fileList="fileList">
      <span slot="release" class="release">{{ $t('Drop your JSON file here') }}</span>
    </upload>
    <el-drawer
      size="100%"
      :title="$t('How to Export Watson\'s JSON')"
      @close="instVisible = false"
      @open="addScroll"
      :visible="instVisible"
      direction="ttb"
      class="drawer"
    >
      <div class="drawer-content -container">
        <label>{{$t('step')}} 1: </label>
        <span>
          <a
            href="https://assistant-us-south.watsonplatform.net/"
          >{{$t('Access Watson\'s platform')}}</a>
        </span>
        <br />
        <label>{{$t('step')}} 2: </label>
        <span>{{$t('Select an Instance')}}</span>
        <el-image :src="url[0]" fit="scale-down" class="bordinha"></el-image>
        <br />
        <label>{{$t('step')}} 3: </label>
        <span>{{$t('Click on the Skills tab')}}</span>
        <el-image :src="url[1]" fit="scale-down" class="bordinha"></el-image>
        <br />
        <label>{{$t('step')}} 4: </label>
        <span>{{$t('Select \'Export\' for the Skill you\'d like to export')}}</span>
        <el-image :src="url[2]" fit="scale-down" class="bordinha"></el-image>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import upload from "../components/upload";
import { mapMutations } from "vuex";
import { MessageBox } from "element-ui";

export default {
  name: "home",
  data() {
    return {
      fileList: [],
      instVisible: false,
      url: [
        "https://homologacao.neoassist.com/clients/watsonreader/step1.png",
        "https://homologacao.neoassist.com/clients/watsonreader/step2.png",
        "https://homologacao.neoassist.com/clients/watsonreader/step3.png"
      ]
    };
  },
  components: {
    upload
  },
  methods: {
    uploadHandle(file) {
      var messageBox = MessageBox.confirm(
        this.$t("Processing file..."),
        this.$t("Loading"),
        {
          iconClass: "",
          showCancelButton: false,
          showConfirmButton: false,
          center: true
        }
      )
        .then(() => {})
        .catch(err => {});
      let uploadFile = file;
      let reader = new FileReader();
      reader.readAsText(uploadFile.raw);
      reader.onload = async e => {
        try {
          let fileContent = JSON.parse(e.target.result);
          if (this.validateJSON(fileContent)) {
            this.$store.commit("SET_FILE", fileContent);
            this.$router.push("/flow");
            this.$notify({
              title: this.$t("Success"),
              message: this.$t("Bot successfully imported")
            });
          } else {
            this.$notify({
              title: this.$t("Error"),
              message: this.$t("JSON File is not a Watson Bot")
            });
          }
        } catch (err) {
          this.$notify({
            title: this.$t("Error"),
            message: this.$t("Failed to read file")
          });
        }
        this.fileList = [];
        MessageBox.close();
      };
    },
    addScroll() {
      let page = document.querySelector("div.el-drawer.ttb");
      page.style.overflow = "scroll";
    },
    validateJSON(json) {
      return (
        typeof json === "object" &&
        json !== null &&
        json.intents !== undefined &&
        json.entities !== undefined &&
        json.dialog_nodes !== undefined &&
        json.name !== undefined
      );
    },
    toggle(){
      this.instVisible = !this.instVisible
    },
    ...mapMutations(["SET_FILE"])
  }
};
</script>

<style lang="sass" scoped>

  .title
    text-align: center;
    margin: 20px 0
    font-size: 30px

  .drawer-content
    padding: 0 20px;
    line-height: 25px;

    .label
      font-weight: bold;

  .steps
   @media(max-width: 420px)
     display: none

  .steps-mobile
    display: none
    @media(max-width: 420px)
      display: block

    .box
      margin: 5px 0
      align-items: center
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border-radius: 4px;
      border: 1px solid #ebeef5;
      background-color: #fff;
      overflow: hidden;
      color: #303133;
      transition: .3s;
      padding: 20px
      width: 100%

      .body
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        justify-content: flex-start
        align-content: center
        align-items: center

        .pull-right
          margin-left: auto

      i
        padding: 10px
        border: 1px solid #00bff2;
        border-radius: 100%

  .bordinha
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #ebeef5;
    margin: 5px 0
</style>