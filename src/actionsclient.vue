<template>
  <div v-if="donneesClient.defined" class="container">
    <h3>Actions Client</h3>
    <div v-for="magasin in Object.entries(donneesClient.magasins)">
      <div v-if="appParameters.type != 'magasin' || magasin[0] == appParameters.id">
        {{magasin[1].nom}}
        <ul>
          <li>
            <button v-on:click="addPoints(magasin[0], 1)" class="waves-effect waves-light btn">+ 1 point</button>
            <button v-on:click="addPoints(magasin[0], -1)" class="waves-effect waves-light btn">- 1 point</button>
          </li>
          <li>
            <button v-on:click="addPoints(magasin[0], 2)" class="waves-effect waves-light btn">+ 2 points</button>
            <button v-on:click="addPoints(magasin[0], -2)" class="waves-effect waves-light btn">- 2 points</button>
          </li>
          <li>
            <button v-on:click="addPoints(magasin[0], 5)" class="waves-effect waves-light btn">+ 5 points</button>
            <button v-on:click="addPoints(magasin[0], -5)" class="waves-effect waves-light btn">- 5 points</button>
          </li>
          <li>Ajouter
            <input type="number" class="field" value="0"> points
            <button class="waves-effect waves-light btn">Valider</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Magasin from "./magasin";
export default {
  name: "actionsclient",
  props: ["donneesClient", "appParameters"],
  methods: {
    addPoints: function(magasinId, points) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://"+this.appParameters.host+":3000/ajoutePoints");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({
        "idc": this.donneesClient.clientId,
        "idm": magasinId,
        "points": points
      }));
      // Quand la réponse de l'API est reçue
      xhr.onreadystatechange = e => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this.$toaster.success(points + ' points ont été ajoutés à ce compte.')
          this.$parent.refreshData()
        }
      };
    }
  }
};
</script>

<style>
li {
  line-height: 2em;
  text-emphasis: none;
}
</style>
