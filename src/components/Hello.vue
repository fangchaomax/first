<template>
  <div class="hello">
    <h1>{{ msg|uppercase }}</h1>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  data () { 
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '',
      list:["aa","bb","cc"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>