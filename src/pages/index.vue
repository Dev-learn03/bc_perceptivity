<template>
  <div>
    <div v-if="isValidUser">
      <h3 class="text-white">Welcome to user</h3>
    </div>
    <div v-if="isFirstTimeUser">
      <h4 class="text-white">You have visited the site for the first time</h4>
    </div>
  </div>
</template>
<script>
export default {
  layout: "layout",
  middleware: "routeAuth",
  computed: {
    isValidUser() {
      return this.$store.getters["user/isValidUser"];
    },
    isFirstTimeUser() {
      return this.$store.getters["user/isFirstTimeUser"];
    },
  },
  methods: {},
};
</script>