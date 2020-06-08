<template>
  <div>
    <p>NoSQLi注入, payload(repeat in burp): {"name":{"$ne": null}} </p>
    <br>
    <p>Encrypted Username</p>
    <input v-model="username">
    <button v-on:click="query">Query</button>
    <p v-for="user in users">
      {{user.username}}::{{user.tel}}::{{user.bankcard}}</p>
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
      this.$axios.get(`user/encryptedusername`).then(res => {
        this.username = res.data.username;
        this.query();
      });
    },
    methods: {
      query() {
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
