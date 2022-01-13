<template>
  <div>
    <ul class="items__list">
      <ItemCard
        v-for="(product, index) in products"
        :product="product"
        :key="index"
      />
    </ul>
    <div class="items__list-bottom"></div>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';

export default {
  name: 'ItemsList',
  components: {
    ItemCard,
  },
  props: ['products'],
};
</script>

<style scoped lang="scss">
.items__list {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px 0 0;
  margin: 0;

  &-bottom {
    height: 30px;
    margin-top: 50px;
  }
}
</style>
