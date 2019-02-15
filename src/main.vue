<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
    <button v-on:click="checkoutData">CheckoutData</button>
    <button v-on:click="clearData">ClearData</button>
    <hr>
    <infosclient v-bind:donneesClient="donneesClient"></infosclient>
    <hr>
    <actionsclient v-bind:donneesClient="donneesClient"></actionsclient>
  </div>
</template>

<script>
import Infosclient from "./infosclient";
import Actionsclient from "./actionsclient";

export default {
  name: "main",
  data() {
    return {
      title: "",
      donneesClient: { defined: false}
    };
  },
  components: {
    Infosclient,
    Actionsclient
  },
  methods: {
    clearData: function() {
      this.donneesClient = {
        title: "",
        donneesClient: { defined: false}
      }
    },
    checkoutData: function() {
      this.donneesClient = {
        defined: true,
        prenom: "Léo",
        nom: "Rolland",
        id: "172fa323e",
        email: "rolland.leo@orange.fr",
        magasin: {
          id: 67832576,
          nom: "Leroy-Merlin",
          since: "2 juillet 2017",
          points: 130
        }
      };
    }
  }
};
</script>
