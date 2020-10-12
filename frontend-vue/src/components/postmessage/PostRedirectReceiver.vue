<template>
  <div>
    <p>Receiving postmessage...</p>
    <iframe src="/#/postmessage/PostRedirectSender" id="otherPage"></iframe>
  </div>
</template>

<script>
  export default {
    name: "PostRedirectReceiver",
    mounted() {
      window.addEventListener('message', this.receiveMsg, false);
    },
    methods: {
      receiveMsg(event) {
        console.log("[Receiver] Receive message",event);
        location.href = event.data.url;
      },
    }
  }
</script>

<style scoped>

</style>
