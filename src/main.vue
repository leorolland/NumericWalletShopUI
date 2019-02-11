<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
    <button v-on:click="checkoutData">CheckoutData</button>
    <hr>
    <infosclient donneesClient=></infosclient>  
  </div>
</template>

<script>
import Infosclient from './infosClient';

export default {
  name: 'main',
  data () {
    return {
       title: '',
       donneesClient: {defined: false}
    }
  },
  components: {
    Infosclient
  },
  methods: {
    checkoutData: function () {
      this.donneesClient.defined = true
    }
  }
}
</script>
