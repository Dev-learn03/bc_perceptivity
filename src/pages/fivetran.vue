<template>
  <div>
    <h1 class="text-white">FiveTran connectivity page</h1>
    <p class="text-white">
      The response from the FiveTran GET API - {{ responseString }}
    </p>
    <p class="text-white">
      The response from the FiveTran POST API - {{ responseString1 }}
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
      responseString1: "",
    };
  },
  methods: {
    async getFiveTranMethodResponse() {
      var key = "t7kSmfYtfWTDhdVb";
      var secret = "6PLNpX9zZsW4nxSX1m7DlgvcfhGIl7Ew";

      var encodedString = btoa(key + ":" + secret);
      var authHeaderValue = "Basic " + encodedString;

      //Sample Get request
      const requestOptions = {
        method: "GET",
        headers: { Authorization: authHeaderValue },
      };
      const response = await fetch(
        "https://api.fivetran.com/v1/metadata/connector-types",
        requestOptions
      );
      const responseJson = await response.json();

      this.responseString = responseJson.data.items[0].name;

      //Sample Post request
      const requestOptions1 = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeaderValue,
        },
        body: JSON.stringify({ title: "Vue POST Request Example" }),
      };
      const response1 = fetch(
        "https://api.fivetran.com/v1/connectors",
        requestOptions1
      ).then(async (response) => {
        var respJson = await response.json();
        this.responseString1 = respJson.message;
      });
    },
  },
  mounted() {
    this.getFiveTranMethodResponse();
  },
};
</script>