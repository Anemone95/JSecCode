<template>
  <div>
    <p>Login</p>
    <input v-model="username" v-show="isAnonymous">
    <br v-show="isAnonymous">
    <input v-model="password" v-show="isAnonymous">
    <br v-show="isAnonymous">
    <p v-show="~isAnonymous" v-text="welcome"/>
    <button v-on:click="login" v-show="isAnonymous">Login</button>
    <button v-on:click="logout" v-show="~isAnonymous">Logout</button>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "username",
        password: "password",
        welcome: "",
        isAnonymous: this.checkIsAnonymous(),
      }
    },
    methods: {
      checkIsAnonymous() {
        this.$axios.get('user/islogin' ).then(res => {
          if (res.data.username){
            this.isAnonymous = false;
            this.welcome = "Welcome, " + res.data.username;
          } else {
            this.isAnonymous = true;
          }
        }).catch(err => {
          this.isAnonymous = true;
          if (err.response.data.msg) {
            alert(err.response.data.msg);
          } else if (err.response) {
            alert(err.response.data);
          } else {
            alert(err.message);
          }
        });
        return this.isAnonymous;
      },
      logout() {
        this.$axios.get('user/logout' ).then(res => {
          this.isAnonymous = true;
          this.welcome = "";
        }).catch(err => {
          if (err.response) {
            alert(err.response.data);
          } else {
            alert(err.message);
          }
        });
        return true;
      },
      login() {
        this.$axios.post('user/login', {
          username: this.username, password: this.password
        }).then(res => {
          this.isAnonymous = false;
          this.welcome = "Welcome, " + res.data.username;
        }).catch(err => {
          if (err.response.data.msg) {
            alert(err.response.data.msg);
          } else if (err.response) {
            alert(err.response.data);
          } else {
            alert(err.message);
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
