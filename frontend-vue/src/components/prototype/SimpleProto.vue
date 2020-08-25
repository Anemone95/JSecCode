<template>
  <div>
    <p>Simple Prototype(Server will echo 'Object.pollution')</p>
    <p>Payload(request in burp): {"__proto__": {"pollution": "Say Hi"}}, otherwise server will echo nothing</p>
    <input v-model="inputValue">
    <button v-on:click="echoMessage">Echo</button>
    <p v-html="echoValue"/>
  </div>
</template>

<script>
  export default {
    name: "SimpleProto",
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
        this.$axios.post(`prototype/simple`,{"msg": this.inputValue},{
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
