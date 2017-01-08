<template>
  <div>
    <h1>Goodbye world {{name}}</h1>

  </div>
</template>

<script>
export default {
  name: 'Goodbye',
  props: ['name'],
  data: function () {
    return {
      msg: 'Goodbye to Your Vue.js App'
    }
  }
}
</script>
