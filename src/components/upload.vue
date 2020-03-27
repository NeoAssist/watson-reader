<template>
  <el-upload
    class="upload"
    action
    :limit="1"
    :auto-upload="false"
    accept="application/json"
    draggable="true"
    :drag="true"
    :file-list="fileList"
    :multiple="multiple"
    :on-change="uploadFile"
    :show-file-list="false"
  >
    <slot name="release"></slot>
  </el-upload>
</template>

<script>
export default {
  name: "upload",
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    },
    fileList: {
      type: Array,
      required: true,
      default: []
    },
    uploadFile: {
      type: Function,
      required: true,
      default: () => {}
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="sass">
.upload
  display: flex
  align-items: center
  justify-content: center
  transition: all 1s

  .release
    color: #9E9E9E

  .el-upload-dragger
    padding: 21% 0;
</style>