<template>
  <div>
    <h1 class="text-white">AWS Quicksight Report page</h1>
    <br />
    <div id="vizContainer" style="width: 800px; height: 700px"></div>
  </div>
</template>
<script>
const { QuickSight } = require("@aws-sdk/client-quicksight");
var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");

export default {
  layout: "layout",
  middleware: "routeAuth",
  methods: {
    initializeAWSQuicksightVisual() {
      var quicksight = new QuickSight({
        region: "us-east-1",
        credentials: {
          accessKeyId: "AKIATUIVBTV345GAKYFO",
          secretAccessKey: "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",
        },
      });
      var params = {
        AuthorizedResourceArns: [
          "arn:aws:quicksight:us-east-1:249689120119:dashboards/24352054-8ae4-49d4-8ec3-7e34e30ff5c5",
        ],
        AwsAccountId: "249689120119",
        ExperienceConfiguration: {
          Dashboard: {
            InitialDashboardId: "24352054-8ae4-49d4-8ec3-7e34e30ff5c5",
          },
        },
        Namespace: "default",
      };
      quicksight.generateEmbedUrlForAnonymousUser(params, function (err, data) {
        if (err) {
          console.log(err, err.stack);
        } else {
          console.log(data);
        }
      });

      /*var options = {
                //url: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/24352054-8ae4-49d4-8ec3-7e34e30ff5c5?isauthcode=true&identityprovider=quicksight&code=",
                url: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/24352054-8ae4-49d4-8ec3-7e34e30ff5c5/views/08a96e9b-ae24-4990-9c4f-8c6fd4ded73a",
                container: document.getElementById("vizContainer"),
                loadCallback: function(){
                    console.log('Report loaded successfully');
                },
                errorCallback: function(){
                    console.log('Report loading failed');
                }
            };

            var dashboard = QuickSightEmbedding.embedDashboard(options);*/
    },
  },
  mounted() {
    this.initializeAWSQuicksightVisual();
  },
};
</script>