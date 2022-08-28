<template>
  <div>
    <h1 class="text-white">User logged out successfully</h1>
  </div>
</template>
<script>
export default {
  layout: "layout",
  middleware: "routeAuth",
  methods: {
    logout() {
      this.$store.dispatch("user/updateUserState", {
        isValid: false,
        isFirstTime: false,
      });
      this.$fire.auth.signOut();
    },
  },
  mounted() {
    this.logout();
  },
};
</script>