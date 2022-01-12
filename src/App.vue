<template>
  <div id="app">
    <AddNewItem />
    <ItemsList :products="products" />
  </div>
</template>

<script>
import AddNewItem from './components/AddNewItem.vue';
import ItemsList from './components/ItemsList.vue';

export default {
  name: 'App',
  components: {
    AddNewItem,
    ItemsList,
  },
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
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
</style>
