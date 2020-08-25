<template>
  <div>
    <p> 路径任意读 </p>

    <input v-model="fileName">
    <button v-on:click="getFile">Cat</button>
    <br>
    {{ fileValue }}
  </div>
</template>

<script>
  export default {
    name: "PathTraversal",
    data() {
      return {
        fileName: "./README.md",
        fileValue: ""
      }
    },
    created: function () {
      this.getFile();
    },
    methods: {
      getFile() {
        this.$axios.get(`path/${this.fileName}`).then(res => {
          this.fileValue = res.data.msg;
        })
      }
    }
  }
</script>

<style scoped>

</style>
