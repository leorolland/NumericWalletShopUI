<template>
  <div v-if="donneesClient.defined">
    <form action="">
      <input type="number">
    </form>
  </div>
</template>

<script>
import Magasin from "./magasin";
export default {
  name: "ajoutpoints",
  props: ["donneesClient"]
};
</script>

<style>
  div {
    border: 1px dotted black;
    padding: 8px;
  }
</style>
