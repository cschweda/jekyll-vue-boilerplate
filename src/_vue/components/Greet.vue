<template>
  <div>
    <h3>Prop passed via data attribute: <span style="color: #aaa">{{message}}</span></h3>

  </div>
</template>

<script>
export default {
  name: 'Greet',
  props: ['message'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1 {color: blue}
</style>
