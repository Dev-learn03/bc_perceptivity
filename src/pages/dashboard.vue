<template>
  <div>
    <h1 class="text-white">Dashboard page</h1>
    <p class="text-white">
      The response from the Firebase functions - {{ responseString }}
    </p>
  </div>
</template>
<script>
export default {
  layout: "layout",
  middleware: "routeAuth",
  data() {
    return {
      responseString: "",
    };
  },
  methods: {
    async getFirebaseResponse() {
      const testFunction = this.$fire.functions.httpsCallable("testFunction");
      const testPostFunction =
        this.$fire.functions.httpsCallable("testPostFunction");

      const resp1 = await testFunction();
      const resp2 = await testPostFunction({ name: "scott" });

      this.responseString = JSON.stringify(resp1) + "," + JSON.stringify(resp2);
    },
  },
  mounted() {
    this.getFirebaseResponse();
  },
};
</script>