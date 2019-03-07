<template>
  <div v-if="magasin">
    <h2>{{magasin.nom}}</h2>
    <p>Client depuis : {{magasin.date}}</p>
    <h2>{{magasin.points}} points</h2>
  </div>
</template>

<script>
export default {
  name: 'magasin',
  props: ['magasin']
}
</script>

<style lang="scss" scoped>
    div {
        background-color: greenyellow;
        border-radius: 10px;
        padding: 10px;
        max-width: 300px;
        text-align: center;
    }
</style>
