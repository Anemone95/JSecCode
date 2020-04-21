<template>
  <div>
    <p>Delete 处注入，安全做法见
      <router-link :to="{name:'StoredXSS'}">StoredXSS</router-link>
      中的删除实现
    </p>
    <p>Payload: XSS", version()) #</p>
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
    name: "Delete",
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
        this.$axios.delete(`sqli/msg?id=${id}`,{
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
