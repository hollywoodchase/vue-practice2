<template>
  <div id="app">
    <event-list/>
    <event-detail/>
    <button-inc/>
  </div>
</template>

<script>
import EventList from './components/EventList.vue';
import EventDetail from './components/EventDetail.vue';
import ButtonInc from './components/ButtonInc.vue'

export default {
  name: 'App',
  components: {
    EventList, EventDetail, ButtonInc
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
