<template>
  <div v-if="donneesClient.defined" class="container">
    <h3>Données sur le client</h3>
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
        <td>{{ donneesClient.email ? donneesClient.email : "(aucun mail défini)" }}</td>
      </tr>
    </table>
    <div v-if="appParameters.type == 'magasin' ">
      <p>(Vous n'avez pas accès à certaines données du client)</p>
    </div>
    <h3>Magasin(s)</h3>
    <div v-for="magasin in Object.entries(donneesClient.magasins)">
      <magasin 
        v-if="appParameters.type != 'magasin' || magasin[0] == appParameters.id" 
        v-bind:magasin="magasin[1]"
        ></magasin>
    </div>
    <div v-if="appParameters.type == 'magasin' ">
      <p>(Vous n'avez pas accès aux autres magasins)</p>
    </div>
  </div>
</template>

<script>
import Magasin from "./magasin";
export default {
  name: "infosclient",
  props: ["donneesClient", "appParameters"],
  components: {
    Magasin
  }
};
</script>

<style lang="scss" scoped>
table {
  max-width: 300px;
  border-collapse: collapse;
}
table,
th,
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
