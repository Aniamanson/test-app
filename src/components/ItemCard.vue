<template>
  <div class="item-card">
    <div class="item-card__delete" @click="deleteProduct(product.title)">
      <img src="img/delete.svg" alt="удалить товар" />
    </div>
    <div class="item-card__img">
      <img :src="product.img" :alt="product.title" />
    </div>
    <div class="item-card__info">
      <div class="item-card__title">{{ product.title }}</div>
      <div class="item-card__text">{{ product.text }}</div>
      <div class="item-card__price">{{ priceComputed }} руб.</div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus';

export default {
  name: 'ItemCard',
  props: ['product'],
  data: () => ({}),
  computed: {
    priceComputed() {
      return Number(this.product.price).toLocaleString('ru-RU');
    },
  },
  methods: {
    deleteProduct(productTitle) {
      eventBus.$emit('deleteProduct', productTitle);
      // this.$store.commit('deleteProduct', this.product.title);
    },
  },
};
</script>

<style scoped lang="scss">
.item-card {
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    .item-card__delete {
      transform: scale(1);
    }
  }

  &__img {
    width: 100%;
    height: 200px;
    border-radius: 4px 4px 0px 0px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  &__text {
    font-size: 16px;
    line-height: 20px;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-top: auto;
  }

  &__delete {
    display: flex;
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 32px;
    height: 32px;
    transition: all 0.3s ease-in-out;
    transform: scale(0);
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: darken($color: #ff8484, $amount: 7);
    }
  }
}
</style>
