<template>
  <div>
    <p>Insert 处注入，安全做法见
      <router-link :to="{name:'StoredXSS'}">StoredXSS</router-link>
      中的插入实现
    </p>
    <p>Payload: XSS", version()) #</p>
    <input v-model="inputValue">
    <button v-on:click="storeMessage">StoreMessage</button>
    <br>
    <b>History:</b>
    <p v-for="msg in msgs" :key="msg.id">
      {{msg.id}}::{{msg.content}}::{{msg.extra}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "Insert",
    data() {
      return {
        inputValue: "XSS ME!",
        msgs: [],
      }
    },
    created() {
      this.getMessage();
    },
    methods: {
      getMessage() {
        this.$axios.get(`xss/store`).then(res => {
          this.msgs = res.data;
        })
      },
      storeMessage() {
        this.$axios.post(`sqli/insert`, {msg: this.inputValue}, {
          headers: {
            "X-CSRF-TOKEN": sessionStorage.getItem('csrfToken')
          }
        }).then(res => {
          this.msgs = res.data;
        })
      },
    }
  }
</script>

<style scoped>

</style>
