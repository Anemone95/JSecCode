<template>
  <div>
    <p>NoSQLi注入（可尝试查询anemone）, payload(repeat in burp): {"name":{"$ne": null}} </p>
    <input v-model="username">
    <button v-on:click="query">Query</button>
    <p v-for="user in users">
      {{user.username}}::{{user.tel.substring(0,4)+"****"}}::{{user.bankcard.substring(0,4)+"****"}}</p>
  </div>
</template>

<script>
  export default {
    name: "NoSQLi",
    data() {
      return {
        username: null,
        users: []
      }
    },
    created() {
      this.query();
    },
    methods: {
      query() {
        this.$axios.get(`nosqli/username`).then(res => {
          this.username = res.username;
        });
        this.$axios.post(`nosqli/userdetail`, {name: this.username}, {
          headers: {
            "X-CSRF-TOKEN": sessionStorage.getItem('csrfToken')
          }
        }).then(res => {
          this.users = res.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
