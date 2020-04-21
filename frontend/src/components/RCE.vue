<template>
  <div>
    <p> 后台执行ping命令 </p>
    <p> Payload: "1.1.1.1||ls"</p>
    <input v-model="ip">
    <button v-on:click="ping">Ping</button>
    <br>
    {{ cmdRet }}
  </div>
</template>

<script>
  export default {
    name: "RCE",
    data() {
      return {
        ip: "1.1.1.1",
        cmdRet: ""
      }
    },
    created: function () {
      this.ping();
    },
    methods: {
      ping() {
        this.$axios.get(`rce/ping?ip=${this.ip}`).then(res => {
          this.cmdRet = res.data.msg;
        })
      }
    }
  }
</script>

<style scoped>

</style>
