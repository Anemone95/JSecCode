<template>
  <div>
    <h1>Prototype</h1>
    <br>
    <router-link :to="{name:'PostRedirectReceiver'}">Post Receiver</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: "PostMessage"
    }
</script>

<style scoped>

</style>
