<template>
  <div>
    <h1>SQLi</h1>
    <br>
    <router-link :to="{name:'Where'}">Where 型注入</router-link>
    <br>
    <router-link :to="{name:'Insert'}">Insert 型注入</router-link>
    <br>
    <router-link :to="{name:'Delete'}">Delete 型注入</router-link>
    <br>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "SQLi"
  }
</script>

<style scoped>

</style>
