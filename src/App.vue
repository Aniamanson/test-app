<template>
  <div id="app">
    <transition name="fade">
      <Modal
        v-if="isOpenModal"
        :open-target="openTarget"
        :params="params"
        @close="closeModal"
      />
    </transition>
    <AddNewItem @succeed="openModal" />
    <div class="main">
      <ItemsSort :item-sort.sync="itemSort" :sorting-list="sorting" />
      <ItemsList :products="products" />
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus';
import Modal from './components/Modal.vue';
import AddNewItem from './components/AddNewItem.vue';
import ItemsSort from './components/ItemsSort.vue';
import ItemsList from './components/ItemsList.vue';

export default {
  name: 'App',
  components: {
    Modal,
    AddNewItem,
    ItemsList,
    ItemsSort,
  },
  data: () => ({
    isOpenModal: false,
    openTarget: '',
    params: {},
    itemSort: 'По умолчанию',
    sorting: ['По возрастанию цены', 'По убыванию цены', 'По наименованию'],
  }),
  computed: {
    products() {
      return this.sort(this.$store.state.products);
    },
  },
  created() {
    eventBus.$on('deleteProduct', (productTitle) => {
      this.openModal('confirmDelete', productTitle);
    });
  },
  methods: {
    closeModal() {
      this.isOpenModal = false;
      document.querySelector('body').style.overflow = this.isOpenModal ? 'hidden' : 'auto';
    },
    openModal(target, params) {
      console.log(target);
      this.openTarget = target;
      this.isOpenModal = true;
      this.params = params;
    },
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

  @media (max-width: 950px) {
    flex-direction: column;
  }
  @media (max-width: 430px) {
    padding: 32px 15px;
  }
}

.main {
  display: flex;
  flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
