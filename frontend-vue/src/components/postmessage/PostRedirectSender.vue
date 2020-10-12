<template>
</template>

<script>
  export default {
    name: "PostRedirectSender",
    mounted() {
      this.send();
    },
    methods: {
      send() {
        console.log("[Sender] sending message")
        parent.postMessage({url: "http://www.baidu.com/"}, '*');//data为传递内容，*修改为具体域名或者ip
      }
    }
  }
</script>

<style scoped>

</style>
