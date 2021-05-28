<template>
  <div>
    <div>This is the list.</div>
    <div v-for="event in events" v-bind:key="event.id">
      {{ event.name }}
    </div>
    <div>{{ counts }}</div>
    <eventlistitem></eventlistitem>
  </div>
</template>

<script>
import eventlistitem from "./EventListItem";

export default {
  components: {
    eventlistitem,
  },
  computed: {
    events: function() {
      return this.$store.state.events;
    },
    counts: function() {
      return this.$store.getters.count;
    },
  },
  methods: {},
  mounted() {
    return this.$store.dispatch("loadEvents");
  },
};
</script>
