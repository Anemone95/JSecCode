<template>
  <div>
    <h1>Prototype</h1>
    <br>
    <router-link :to="{name:'SimpleProto'}">Simple Prototype Pollution</router-link>
    <br>
    <router-link :to="{name:'Lodash'}">Lodash</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Prototype",
  }
</script>

<style scoped>

</style>
