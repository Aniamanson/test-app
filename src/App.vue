<template>
  <div id="app">
    <AddNewItem />
    <div class="main">
      <ItemsSort :item-sort.sync="itemSort" :sorting-list="sorting" />
      <ItemsList :products="products" />
    </div>
  </div>
</template>

<script>
import AddNewItem from './components/AddNewItem.vue';
import ItemsSort from './components/ItemsSort.vue';
import ItemsList from './components/ItemsList.vue';

export default {
  name: 'App',
  components: {
    AddNewItem,
    ItemsList,
    ItemsSort,
  },
  data: () => ({
    itemSort: 'По умолчанию',
    sorting: ['По возрастанию цены', 'По убыванию цены', 'По наименованию'],
  }),
  computed: {
    products() {
      return this.sort(this.$store.state.products);
    },
  },
  methods: {
    sort(arr) {
      const sortProducts = arr;
      function byField(field) {
        return (a, b) => (a[field] > b[field] ? 1 : -1);
      }
      function byFieldDown(field) {
        return (a, b) => (b[field] > a[field] ? 1 : -1);
      }
      function byFieldText(field) {
        return (a, b) => (a[field] > b[field] ? 1 : -1);
      }

      switch (this.itemSort) {
        case 'По возрастанию цены':
          return sortProducts.sort(byField('price'));
        case 'По убыванию цены':
          return sortProducts.sort(byFieldDown('price'));
        case 'По наименованию':
          return sortProducts.sort(byFieldText('title'));
        default:
          return sortProducts;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  background: #e5e5e5;
  display: flex;
  height: 100vh;
  padding: 32px;
  overflow: auto;
}

.main {
  display: flex;
  flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
