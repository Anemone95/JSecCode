<template>
  <div>
    <p>where 型注入</p>
    <input v-model="inputId">
    <button v-on:click="query">Query</button>
    <p v-for="user in users">{{user.id}}::{{user.username}}::{{user.password}}</p>
  </div>
</template>

<script>
  export default {
    name: "WhereInt",
    data() {
      return {
        inputId: 2,
        users: []
      }
    },
    created() {
      this.query();
    },
    methods: {
      query() {
        this.$axios.get(`sqli/int/${this.inputId}`).then(res => {
          this.users = res.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
