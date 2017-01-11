<template>
  <footer>

    <div class="text-center">FOOTER HERE (c) {{getYear()}}</div>



  </footer>

</template>

<script>

export default {
  name: 'Footer',
  mounted: function() {
    // Holder.addTheme("new", {
    //                   fg: "#ccc",
    //                   bg: "#000",
    //                   size: 10
    //                 }).addImage("holder.js/200x100?theme=new", "#test").run();

  },
  methods: {
    getYear: function () {
      return moment().format('YYYY')
    },

  },
  data: function () {
    return {
      year: (function () {
        return moment().format('YYYY')
      })()
    }
  }
}

</script>

<style scoped scss>

footer {padding: 10px 10px; font-size: 12px; color: red; }

</style>
