<template>
  <div id="app">
    <h1>Contents</h1>
    <router-link :to="{name:'Login'}">Login</router-link>
    <br/>
    <router-link :to="{name:'SQLi'}">SQLi</router-link>
    <br/>
    <router-link :to="{name:'NoSQLi'}">NoSQLi</router-link>
    <br/>
    <router-link :to="{name:'XSS'}">XSS</router-link>
    <br/>
    <router-link :to="{name:'CSRF'}">CSRF</router-link>
    <br/>
    <router-link :to="{name:'PathTraversal'}">Path Traversal</router-link>
    <br/>
    <router-link :to="{name:'RCE'}">RCE</router-link>
    <br/>
    <router-link :to="{name:'SSRF'}">SSRF</router-link>
    <br/>
    <router-link :to="{name:'URLRedirect'}">URL Redirect</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.getCSRF();
    },
    methods: {
      getCSRF() {
        this.$axios.get(`csrftoken`).then(res => {
          sessionStorage.setItem('csrfToken', res.data.csrf);
        })
      },
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
