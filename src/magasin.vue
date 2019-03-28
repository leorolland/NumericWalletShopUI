<template>
  <div v-if="magasin">
    <h4>{{magasin.nom}}</h4>
    <p>Client depuis : {{magasin.date}}</p>
    <h4>{{magasin.points}} points</h4>
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
        margin-bottom: 20px;
    }
</style>
