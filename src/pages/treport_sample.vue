<template>
  <div>
    <h1 class="text-white">Tableau Report page</h1>
    <br />
    <div id="vizContainer" style="width: 800px; height: 700px"></div>
  </div>
</template>
<script>
export default {
  layout: "layout",
  methods: {
    initializeTableauVisual() {
      var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms",
        options = {
          hideTabs: true,
          onFirstInteractive: function () {
            console.log("Run this code when the viz has finished loading.");
          },
        };

      var viz = new tableau.Viz(containerDiv, url, options);
    },
  },
  mounted() {
    this.initializeTableauVisual();
  },
};
</script>