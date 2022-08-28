<template>
  <div>
    <h1 class="text-white">Tableau Report page</h1>
    <br />
    <tableau-viz
      id="tableauViz"
      src="https://tableau.bearcognition.com/views/ShopifyMarketInsights-Sales/Insights"
      :token="accessToken"
      height="500px"
      width="600px"
      toolbar="Bottom"
      hide-tabs
      v-if="showControl"
    >
    </tableau-viz>
  </div>
</template>
<script>
var jwt = require("jsonwebtoken");

export default {
  layout: "layout",
  middleware: "routeAuth",
  data() {
    return {
      accessToken: "",
      showControl: false,
    };
  },
  methods: {
    getToken() {
      var tokenVal = jwt.sign(
        { scp: ["tableau:views:embed"] },
        "S8YsyLSIcrO0L8QLGJKArOQZ5yvNUJ0M+CK0GMRhjwo=",
        {
          algorithm: "HS256",
          header: {
            kid: "072e240a-b5f1-4a18-8a70-b3a65ccf2931",
            iss: "01c4d26c-3797-4475-be83-b2cfeae7c9f2",
            alg: "HS256",
            typ: "JWT",
          },
          issuer: "01c4d26c-3797-4475-be83-b2cfeae7c9f2",
          audience: "tableau",
          subject: "mmullen",
          noTimestamp: true,
          expiresIn: 600,
          notBefore: "5s",
          jwtid: new Date().getTime().toString(),
        }
      );
      console.log("Token : ", tokenVal);
      this.accessToken = tokenVal;
      this.showControl = true;
    },
  },
  mounted() {
    this.getToken();
  },
};
</script>