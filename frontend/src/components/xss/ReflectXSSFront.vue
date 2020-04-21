<template>
  <div>
    <p>纯前端 XSS，浏览器不发请求</p>

    <input v-model="inputValue">
    <p v-html="echoValue"/>
    <button v-on:click="echoMessage">Echo</button>
  </div>
</template>

<script>
  export default {
    name: "ReflectXSSFront",
    data() {
      return {
        inputValue: "XSS ME!",
        echoValue: this.$route.params.xss
      }
    },
    created: function () {
      // `this` 指向 vm 实例
    },
    methods: {
      echoMessage: function () {
        this.$router.push({path: `/xss/reflectXSSFront/${this.inputValue}`});
        // this.echoValue = "You said '" + this.inputValue + "'";
      }
    },
    watch: {
      '$route'(to, from) {
        this.echoValue = this.$route.params.xss;
      }
    }
  }
</script>

<style scoped>

</style>
