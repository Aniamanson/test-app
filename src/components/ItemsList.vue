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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
}
</style>
