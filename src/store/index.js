import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    products: [
      {
        title: 'Фотоаппарат Polaroid',
        text: `Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк`,
        img: 'img/photo.png',
        price: 3000,
      },
      {
        title: 'PlayStation 5',
        text: 'Игровая консоль нового поколения. Версия консоли без дисковода',
        img: 'https://cyber.pressball.by/wp-content/uploads/2020/12/ps5.jpg',
        price: 65000,
      },
      {
        title: 'Робот-пылесос Xiaomi Mi Robot Vacuum Mop',
        text: 'Моющий робот-пылесос с щёткой-валиком и двумя боковыми щётками для безупречной и быстрой уборки',
        img: 'https://opt-478917.ssl.1c-bitrix-cdn.ru/upload/medialibrary/fc6/1.jpg?1601468975122495',
        price: 22000,
      },
    ],
  },
  mutations: {
    // eslint-disable-next-line object-curly-newline
    addProduct(state, { title, text, img, price }) {
      const item = state.products.find((product) => product.title === title);
      if (!item) {
        state.products.push({
          title,
          text,
          img,
          price,
        });
      }
    },

    deleteProduct(state, title) {
      const index = state.products.findIndex(
        // eslint-disable-next-line comma-dangle
        (product) => product.title === title
      );
      state.products.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
