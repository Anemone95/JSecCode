<template>
  <div>
    <p>页面内容</p>
    <br>
<!--    <p v-html="page"/>-->
    <iframe width="100%" height="400" :src="url" frameborder="0" ></iframe>
  </div>
</template>

<script>
  export default {
    name: "Backend",
    data() {
      return {
        url: ""
      }
    },
    created() {
      // this.url=this.$axios.defaults.baseURL+`urlredirect/?`
      this.url=this.$axios.defaults.baseURL+`urlredirect?url=${decodeURIComponent('http://www.baidu.com/')}`
    },
  }
</script>

<style scoped>

</style>
