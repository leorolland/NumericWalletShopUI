<template>
  <div v-if="donneesClient.defined" class="container">
    <h3>Actions Client</h3>
    <div v-for="magasin in Object.entries(donneesClient.magasins)">
      <div v-if="appParameters.type != 'magasin' || magasin[0] == appParameters.id" >
        {{magasin[1].nom}}
        <ul>
          <li>
            <button class="waves-effect waves-light btn">+ 1 point</button> <button class="waves-effect waves-light btn">- 1 point</button>
          </li>
          <li>
            <button class="waves-effect waves-light btn">+ 2 points</button> <button class="waves-effect waves-light btn">- 2 points</button>
          </li>
          <li>
            <button class="waves-effect waves-light btn">+ 5 points</button> <button class="waves-effect waves-light btn">- 5 points</button>
          </li>
          <li>
            Ajouter <input type="number" class="field" value="0"> points <button class="waves-effect waves-light btn">Valider</button>
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
  props: ["donneesClient", "appParameters"]
};
</script>

<style>

  li {
    line-height: 2em;
    text-emphasis: none;
  }
</style>
