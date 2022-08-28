<template>
  <div class="row no-margin justify-content-center">
    <div class="card">
      <div class="card-body no-padding">
        <div id="auth-container"></div>
      </div>
    </div>
  </div>
</template>
<script>
if (typeof window !== "undefined") {
  var firebaseui = require("firebaseui");
  require("firebaseui/dist/firebaseui.css");
}

export default {
  layout: "layout",
  head() {
    return {
      title: "Perceptivity - Portal",
    };
  },
  methods: {
    initializeFirebaseUI() {
      // Initialize the FirebaseUI Widget using Firebase.
      var ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(this.$fire.auth);

      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            //window.location = "/";
            console.log('Auth change event');
            return true;
          },
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: "popup",
        signInSuccessUrl: "/",
        signInOptions: [
          {
            provider: this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
          },
          this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
          this.$fireModule.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        //tosUrl: "<your-tos-url>",
        // Privacy policy url.
        //privacyPolicyUrl: "<your-privacy-policy-url>",
      };

      ui.start("#auth-container", uiConfig);
    },
  },
  mounted() {
    if (typeof window !== "undefined") {
      this.initializeFirebaseUI();
    }
  },
};
</script>