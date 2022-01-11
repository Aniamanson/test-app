<template>
  <ul class="items__list">
    <ItemCard v-for="(item, index) in items" :product="item" :key="index" />
  </ul>
</template>

<script>
import ItemCard from './ItemCard.vue';

export default {
  name: 'ItemsList',
  components: {
    ItemCard,
  },
};
</script>

<style scoped lang="scss">
</style>
