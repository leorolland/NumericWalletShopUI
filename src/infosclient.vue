<template>
  <div v-if="donneesClient.defined">
    <h2>Données sur le client</h2>
    <table>
      <tr>
        <td>Prénom</td>
        <td>{{ donneesClient.prenom }}</td>
      </tr>
      <tr>
        <td>Nom</td>
        <td>{{ donneesClient.nom }}</td>
      </tr>
      <tr>
        <td>E-mail</td>
        <td>{{ donneesClient.email }}</td>
      </tr>
    </table>
    <h2>Magasin</h2>
    <magasin v-bind:magasin="donneesClient.magasin"></magasin>
  </div>
</template>

<script>
import Magasin from "./magasin";
export default {
  name: "infosclient",
  props: ["donneesClient"],
  components: {
    Magasin
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}
table,
th,
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
