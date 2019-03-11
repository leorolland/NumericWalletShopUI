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
      this.$toaster.info('Données réinitialisées.')
      this.donneesClient = {
        title: "",
        donneesClient: { defined: false}
      }
    },
    cardRead() {
      this.$toaster.success('Récupération des données en ligne...')
    },
    receivedData() {
      this.$toaster.success('Données reçues.')
    },
    checkoutData: function() {
      this.donneesClient = {
          "clientId": 123,
          "prenom": "LéoMOCKED",
          "nom": "RollandMOCKED",
          "magasins": {
              "10232": {
                  "points": 0,
                  "achats": 2,
                  "date": "12/12/2018",
                  "nom": "AlineaMOCKED"
              },
              "10233": {
                  "points": 0,
                  "achats": 0,
                  "date": "12/12/2018",
                  "nom": "Mr.BricolageMOCKED"
              }
          }
      };
    }
  }
};
</script>
