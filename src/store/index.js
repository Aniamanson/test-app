import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        img: 'img/photo.png',
        title: 'Фотоаппарат Polaroid',
        text: `Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк`,
        price: 15000,
      },
      {
        id: 2,
        img: 'img/photo.png',
        title: 'Фотоаппарат Polaroid mini',
        text: `Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк`,
        price: 1000,
      },
      {
        id: 3,
        img: 'img/photo.png',
        title: 'Фотоаппарат Polaroid Pro',
        text: `Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк`,
        price: 30000,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
