<template>
  <section>
    <h2>
      Contador com redux: <span>{{ store.counter }}</span>
    </h2>

    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="redirect">react-app</button>
  </section>
</template>

<script>
import { store, increment, decrement } from "@mallone/state-management";
import singleSpa from "single-spa";

export default {
  name: "Count",
  data() {
    return {
      store: store.getState(),
    };
  },
  mounted() {
    this.unsubscribe = store.subscribe(this.handleStore);
  },
  unmounted() {
    this.unsubscribe();
  },
  methods: {
    increment() {
      store.dispatch(increment());
    },
    decrement() {
      store.dispatch(decrement());
    },
    redirect() {
      singleSpa.navigateToUrl("/react-app");
    },
    handleStore() {
      this.store = store.getState();
    },
  },
};
</script>

<style scoped></style>
