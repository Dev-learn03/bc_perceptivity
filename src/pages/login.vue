<template>
  <div>
    <SignIn />
  </div>
</template>
<script>
import SignIn from "../components/signin.vue";

export default {
  layout: "layout",
  head() {
    return {
      title: "Perceptivity - Login",
    };
  },
  components: {
    SignIn,
  },
};
</script>