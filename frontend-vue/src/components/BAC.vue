<template>
  <div>
    <p> BAC（和信息泄露），获取任意用户信息 </p>
    <br>
    <p>User Id</p>
    <input v-model="uid">
    <button v-on:click="query">Query</button>
    <p>{{user.username}}::{{user.tel}}::{{user.bankcard}}</p>
  </div>
</template>

<script>
  export default {
    name: "BAC",
    data() {
      return {
        uid: null,
        user: {username: null, tel: null, bankcard: null}
      }
    },
    created() {
      this.$axios.get(`user/uid`).then(res => {
        this.uid = res.data.uid;
        this.query();
      });
    },
    methods: {
      query() {
        this.$axios.get(`bac/userdetail?uid=${this.uid}`, {
          headers: {
            "X-CSRF-TOKEN": sessionStorage.getItem('csrfToken')
          }
        }).then(res => {
          this.user = res.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
