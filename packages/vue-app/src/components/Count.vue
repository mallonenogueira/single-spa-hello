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
  name: "HelloWorld",
  data() {
    return {
      store: store.getState(),
    };
  },
  mounted() {
    function handleStore() {
      this.store = store.getState();
    }
    store.subscribe(handleStore.bind(this));
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
  },
};
</script>

<style scoped></style>
