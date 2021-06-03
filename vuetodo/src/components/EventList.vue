<template>
  <div>
    <div>This is the list!</div>
    <div v-for="event in events" v-bind:key="event.id">
        {{ event.name }}
    </div>
    <div>
        {{ counts }}
    </div>
    <event-list-item/>
  </div>
</template>

<script>
import EventListItem from "./EventListItem";

export default {
    name: "event-list",
    components: {
        EventListItem
    },
    computed: {
        events: function() {
            return this.$store.state.events
        },
        counts: function() {
            return this.$store.getters.count
        }
    },
    methods: {},
    mounted() {
        this.$store.dispatch("loadEvents");
    }
};
</script>
