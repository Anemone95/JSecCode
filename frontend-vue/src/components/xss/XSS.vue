<template>
  <div>
    <h1>XSS</h1>
    <p>
      {{ payload }}
    </p>
    <br>
    <router-link :to="{name:'ReflectXSSFront'}">ReflectXSSFront</router-link>
    <br>
    <router-link :to="{name:'ReflectXSSBackend'}">ReflectXSSBackend</router-link>
    <br>
    <router-link :to="{name:'StoredXSS'}">StoredXSS</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "XSS",
    data() {
      return {
        payload: "Payload: <img src onerror=alert(1)> (script,svg标签在页面初始化后被禁用)"
      }
    }
  }
</script>

<style scoped>

</style>
