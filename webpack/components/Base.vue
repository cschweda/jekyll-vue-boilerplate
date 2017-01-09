<template>


</template>

<script>
export default {
  name: 'Base',
  mounted: function () {
    console.log(this.msg)
  },
  data () {
    return {
      msg: 'App init'
    }
  }
}
</script>
