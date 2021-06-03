<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <div>
      {{ counts }}
    </div>
  </div>
</template>

<script>
export default {
  name: "button-inc",
  computed: {
    counts: function() {
      return this.$store.getters.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
