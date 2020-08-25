<template>
  <div>
    <p>反射型XSS，发GET请求到后端</p>
    <input v-model="inputValue">
    <p v-html="echoValue"/>
    <button v-on:click="redirect">Echo</button>

  </div>
</template>

<script>
  export default {
    name: "ReflectXSSBackend",
    data() {
      return {
        inputValue: "XSS ME!",
        echoValue: ""
      }
    },
    created: function () {
      this.echoMessage();
    },
    watch:{
      '$route'(to, from) {
        this.inputValue=this.$route.query.xss;
        this.echoMessage();
      }
    },
    methods: {
      redirect(){
        this.$router.push({path: `/xss/reflectXSSBackend?xss=${this.inputValue}`});
      },
      echoMessage() {
        this.$axios.get('xss/echo', {
          params: {xss: this.$route.query.xss}
        }).then(res => {
          this.echoValue = res.data.msg;
        }).catch(err => {
          alert(err);
        })
      }
    }

  }
</script>

<style scoped>

</style>
