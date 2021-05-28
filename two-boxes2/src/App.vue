<template>
  <div id="app">
    <event-detail/>
    <event-list/>
  </div>
</template>

<script>
import EventDetail from '@/components/EventDetail.vue';
import EventList from '@/components/EventList.vue';

export default {
  name: 'App',
  components: {
    EventList, EventDetail
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 2px solid silver;
  background: black; */
  /* display: flex;
  flex-direction: column; */
  /* margin-top: 60px; */
}
</style>
