<template>
  <div>
    <p>页面内容</p>
    <br>
    <p v-html="page"/>

  </div>
</template>

<script>
  export default {
    name: "Frontend",
    data() {
      return {
        page: ""
      }
    },
    created() {
      window.location = this.$route.query.url
    },
  }
</script>

<style scoped>

</style>
