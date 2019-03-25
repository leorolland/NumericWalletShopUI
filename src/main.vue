<template>
  <div>
    <h4 style="text-align: center; color: grey">Interface Magasin</h4>
    <h1>NumericWallet</h1>
    <div class="container" v-if="donneesClient.defined">
      <p>Bienvenue dans l'interface magasin de Numeric Wallet, scannez une carte client pour 
        obtenir des informations sur son compte client et modifier son nombre de points.
      </p>
      Votre id Magasin est : 
      <input type="text" v-model="appParameters.id" class="field">
      <button v-on:click="clearData">ClearData</button>
    </div>
    <infosclient v-bind:donneesClient="donneesClient" v-bind:appParameters="appParameters"></infosclient>
    <actionsclient v-bind:donneesClient="donneesClient" v-bind:appParameters="appParameters"></actionsclient>
    <div class="container" v-if="!donneesClient.defined">
      <img src="./images/cardRead.png" id="cardRead" alt="Lecture de la carte">
      <span class="cardReadDesc">
        Passez une carte sur le lecteur !<br>
        <button v-on:click="mockReadCard">Simuler lecture</button>
      </span>
    </div>

  </div>
</template>

<script>
import Infosclient from "./infosclient";
import Actionsclient from "./actionsclient";
const Http = new XMLHttpRequest();

export default {
  name: "main",
  data() {
    return {
      title: "",
      donneesClient: { defined: false},
      appParameters: {
        type: "magasin",
        id: 10232,
        host: "noxunote.fr"
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
        donneesClient: { defined: false }
      }
    },
    mockReadCard: function() {
      this.$toaster.info('Simulation d\'une lecture de carte ...')
      this.readCard(123)
    },
    refreshData() {
      this.readCard(this.donneesClient.clientId)
    },
    readCard(x) {
      this.$toaster.success('Récupération des données en ligne...')
      // On envoie une requete de récupération des données sur l'API
      const url = 'http://'+this.appParameters.host+':3000/getClient/' + x;
      Http.open("GET", url);
      Http.send();
      // Quand la réponse de l'API est reçue
      Http.onreadystatechange = (e) => {
        if (Http.readyState === 4 && Http.status === 200) {
          const res = Http.responseText
          // Si la réponse est présente
          if (res.length > 0) {
            // On crée un objet réponse
            const resObj = JSON.parse(res)
            resObj.defined = true
            console.log("Réponse de l'API reçue pour client : " + x)
            console.log(resObj)
            this.$toaster.success('Données reçues.')
            this.donneesClient = resObj
          }
        }
      }
    },
  }
};
</script>

<style lang="sass">
  html {
    background-color: rgb(199, 225, 255)
  }
  #cardRead {
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
  }
  .cardReadDesc {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
    font-size: 2em;
    color: darkslategray;
    margin-top: 30px;
    button {
      font-size: 0.5em;
    }
  }
</style>
