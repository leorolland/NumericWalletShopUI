<template>
  <div>
    <h4 style="text-align: center; color: grey">Interface Magasin</h4>
    <h1>NumericWallet</h1>
    <div class="container">
      <p>Bienvenue dans l'interface magasin de Numeric Wallet, scannez une carte client pour 
        obtenir des informations sur son compte client et modifier son nombre de points.
      </p>
      Votre id Magasin est : 
      <input type="text" v-model="appParameters.id" class="field">
      <button v-on:click="clearData">ClearData</button>
    </div>
    <infosclient v-bind:donneesClient="donneesClient" v-bind:appParameters="appParameters"></infosclient>
    <actionsclient v-bind:donneesClient="donneesClient" v-bind:appParameters="appParameters"></actionsclient>
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
      donneesClient: { defined: false},
      appParameters: {
        type: "magasin",
        id: 10232
      }
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
    },
    updateIdMag: function () {
      
    }
  }
};
</script>
<style>
  html {
    background-color: rgb(199, 225, 255)
  }
</style>
