<template>
  <div>
    <h1>{{msg}}</h1>

  </div>
</template>

<script>
export default {
  name: 'My-Footer',
  data () {
    return {
      msg: 'This is footer text from Vue'
    }
  }
}
</script>

<style scoped>
h1 {color: red}
</style>
