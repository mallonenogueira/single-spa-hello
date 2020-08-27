<template>
  <div id="app">
    <h1>{{ name }} is mounted!</h1>

    <Count />
  </div>
</template>

<script>
import Count from "./components/Count.vue";

export default {
  name: "App",
  components: {
    Count,
  },
  props: {
    name: String,
  },
};
</script>

<style></style>
