<template>
  <div class="modal__inner">
    <h2 class="modal__title">Подтверждение удаления товара</h2>
    <p>Вы точно хотите удалить этот товар из корзины?</p>
    <div class="product-cart">
      <img :src="cartProduct.img" :alt="cartProduct.title" />
      <div class="product-cart__info">
        <p class="product__title">
          {{ cartProduct.title }}
        </p>
        <span class="product__price">
          {{ priceComputed(cartProduct.price) }} руб.
        </span>
      </div>
    </div>
    <div class="modal__footer">
      <button class="btn btn__delete" @click.prevent="deleteProduct">
        Удалить
      </button>
      <button class="btn btn__simple" @click.prevent="cancelled">
        Отменить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDelete',

  props: ['product'],
  data: () => ({}),
  computed: {
    cartProduct() {
      const items = this.$store.state.products;
      return items.find((cartItem) => cartItem.title === this.product);
    },
  },
  methods: {
    priceComputed(price) {
      return price.toLocaleString('ru-RU');
    },
    deleteProduct() {
      this.$store.commit('deleteProduct', this.product.title);
      this.cancelled();
    },
    cancelled() {
      this.$emit('cancelled');
    },
  },
};
</script>

<style lang="scss">
.modal {
  &__title {
    padding: 40px 30px 20px;
    margin: 0 -30px;
    color: #3f3f3f;
    font-size: 24px;
    line-height: 28px;

    @media (max-width: 460px) {
      font-size: 18px;
      margin-right: 20px;
    }
  }
  &__footer {
    display: flex;
    margin-top: 40px;
  }
}
.product-cart {
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }
}
.product {
  &__title {
    margin-top: 0;
    font-size: 18px;
    font-weight: bold;
  }
  &__price {
    font-weight: bold;
  }
}
.btn {
  &__delete {
    background-color: #7bae73;
    color: white;
    border: 3px solid #7bae73;
    margin-right: 20px;
    &:hover {
      background-color: darken($color: #7bae73, $amount: 7);
      border-color: darken($color: #7bae73, $amount: 7);
    }
  }
  &__simple {
    background-color: white;
    color: #3f3f3f;
    border: 2px solid #b4b4b4 !important;
    &:hover {
      border: 2px solid #3f3f3f !important;
    }
  }
}
.modal__inner .cart__item {
  margin: 0 0 30px;
}
</style>
