<template>
  <div>
    <h1>URLRedirect</h1>
    <br>
    <router-link :to="{name:'URLRedirectFrontend', query:{url: 'https://www.baidu.com/'}}">前端URL跳转</router-link>
    <br>
    <router-link :to="{name:'URLRedirectBackend'}">后端URL跳转</router-link>
    <br>
    <hr>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: "URLRedirect"
    }
</script>

<style scoped>

</style>
