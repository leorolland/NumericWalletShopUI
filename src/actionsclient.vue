<template>
  <div v-if="donneesClient.defined">
    <h2>Actions Client</h2>
  </div>
</template>

<script>
import Magasin from "./magasin";
export default {
  name: "actionsclient",
  props: ["donneesClient"]
};
</script>