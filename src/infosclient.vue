<template>
  <div v-if="donneesClient.defined">
    <h2>Données sur le client</h2>
  </div>
</template>

<script>
export default {
  name: 'infosclient',
  data () {
    return {
       title: '',
       donneesClient: {defined: false}
    }
  },
}
</script>
