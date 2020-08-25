<template>
  <div>
    <p>StoredXSS, 安全方式见
      <router-link :to="{name:'Insert'}">SQLi Insert</router-link>
      中的数据展示实现
    </p>
    <input v-model="inputValue">
    <button v-on:click="storeMessage">StoreMessage</button>
    <p v-for="msg in msgs" :key="msg.id">
      {{msg.id}}::<span v-html="msg.content"></span>
      <button v-on:click="deleteMessage(msg.id)">Delete</button>
    </p>
  </div>

</template>

<script>
  export default {
    name: "StoredXSS",
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
        this.$axios.post(`xss/store`, {msg: this.inputValue}, {
          headers: {
            "X-CSRF-TOKEN": sessionStorage.getItem('csrfToken')
          }
        }).then(res => {
          this.msgs = res.data;
        })
      },
      deleteMessage(id) {
        this.$axios.delete(`xss/store?id=${id}`,{
          headers: {
            "X-CSRF-TOKEN": sessionStorage.getItem('csrfToken')
          }
        }).then(res => {
          this.msgs = res.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
