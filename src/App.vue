<template>
  <div class="container">
    <CountdownTimer />
  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue'

export default {
  name: 'App',
  components: {
    CountdownTimer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
