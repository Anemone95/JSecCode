<template>
  <div>
    <p>CSRF，安全方法见
      <router-link :to="{name:'StoredXSS'}">StoredXSS</router-link>
      中的删除实现
    </p>
    <br>
    <b>History:</b>
    <p v-for="msg in msgs" :key="msg.id">
      {{msg.id}}::{{msg.content}}::{{msg.extra}}
      <button v-on:click="deleteMessage(msg.id)">Delete</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "CSRF",
    data() {
      return {
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
      deleteMessage(id) {
        this.$axios.delete(`csrf/msg?id=${id}`).then(res => {
          this.msgs = res.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
