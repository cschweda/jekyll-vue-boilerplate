<template>
  <div>
    <h1>Hello world {{name}} -- {{id}}</h1>

  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: ['name','id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1 {color: #ccc}

</style>
