<template>
  <div>
    <p> SSRF </p>
    <p> 输入URL获取页面内容</p>
    <input v-model="url">
    <button v-on:click="get">Get</button>
    <br>
    {{ page }}
  </div>
</template>

<script>
  export default {
    name: "SSRF",
    data() {
      return {
        url: "http://www.baidu.com/",
        page: ""
      }
    },
    created: function () {
      this.get();
    },
    methods: {
      get() {
        this.$axios.get(`ssrf/get?url=${encodeURIComponent(this.url)}`).then(res => {
          this.page = res.data.msg;
        })
      }
    }
  }
</script>

<style scoped>

</style>
