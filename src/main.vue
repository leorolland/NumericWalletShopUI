<template>
  <div>
    <h4 style="text-align: center; color: grey">Interface Client</h4>
    <img id="logo" src="images/logo.png" alt="">
    <div class="container" v-if="donneesClient.defined">
      <p>Bienvenue dans l'interface client de Numeric Wallet, ici vous pouvez consulter l'ensemble de vos données sécurisées.
      </p>
      <button v-on:click="clearData">ClearData</button>
    </div>
    <infosclient v-bind:donneesClient="donneesClient" v-bind:appParameters="appParameters"></infosclient>
    <!-- <actionsclient v-bind:donneesClient="donneesClient" v-bind:appParameters="appParameters"></actionsclient> -->
    <div class="container" v-if="!donneesClient.defined">
      <img src="./images/cardRead.png" id="cardRead" alt="Lecture de la carte">
      <span class="cardReadDesc">
        S'identifier en tant que <br>
        <button v-on:click="readCard('2485148486649535051536853300')">Léo Rolland</button>
        <button v-on:click="readCard('2485148486649535054495649300')">Eloy Martinez</button>
        <button v-on:click="readCard('123456')">Alexis Gaillard</button>
      </span>
    </div>
  </div>
</template>

<script>
import Infosclient from "./infosclient";
import Actionsclient from "./actionsclient";
import { setInterval, setTimeout } from 'timers';
const Http = new XMLHttpRequest();

export default {
  name: "main",
  data() {
    return {
      title: "",
      donneesClient: { defined: false},
      appParameters: {
        type: "client",
        id: 10232,
        host: "localhost"
      },
      refresher: null
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
      clearTimeout(this.refresher)
    },
    mockReadCard: function() {
      this.$toaster.info('Simulation d\'une lecture de carte ...')
      // Lecture Léo ROLLAND
      this.readCard("2485148486649535051536853300")
    },
    refreshData(silent) {
      if (this.donneesClient.defined) this.readCard(this.donneesClient.clientId, silent?silent:false)
    },
    readCard: function(x, silent) {
      var v = this
      if (!silent) this.$toaster.success('Récupération des données en ligne...')
      // On envoie une requete de récupération des données sur l'API
      const url = 'http://'+this.appParameters.host+':3000/getClient/' + x;
      Http.open("GET", url);
      Http.send();
      // Quand la réponse de l'API est reçue
      const that = this
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
            if (!silent) this.$toaster.success('Données reçues.')
            this.donneesClient = resObj
            window.setTimeout(() => {
              this.refreshData(true)
            }, 2000)
          }
        }
      }
    }
  }
};
</script>

<style lang="sass">
#logo {
    width: 284.4px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
  html {
    background-color: #e0e0e0;
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