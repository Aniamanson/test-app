<template>
  <div class="item-add">
    <h1 class="item-add__title">Добавление товара</h1>
    <form class="item-add__form" @submit.prevent="onSubmit">
      <div class="form__item">
        <label class="form__label">
          <span class="form__label-title">Наименование товара</span>
          <input
            type="text"
            placeholder="Введите наименование товара"
            name="title"
            class="form__input input"
            :class="{
              error: errorList.title.value || errorList.title.required,
            }"
            v-model.trim="form.title"
          />
          <span class="form__error" v-if="errorList.title.required">
            {{ errors.required }}
          </span>
          <span class="form__error" v-else-if="errorList.title.value">
            {{ errors.title }}
          </span>
        </label>
      </div>
      <div class="form__item">
        <label class="form__label">
          <span class="form__label-title">Описание товара</span>
          <textarea
            rows="6"
            cols="15"
            placeholder="Введите описание товара"
            name="text"
            class="form__input input"
            v-model.trim="form.text"
          />
        </label>
      </div>
      <div class="form__item">
        <label class="form__label">
          <span class="form__label-title">Ссылка на изображение товара</span>
          <input
            type="text"
            placeholder="Введите ссылку"
            name="img"
            class="form__input input"
            :class="{ error: errorList.img.value || errorList.img.required }"
            v-model.trim="form.img"
          />
          <span class="form__error" v-if="errorList.img.required">
            {{ errors.required }}
          </span>
          <span class="form__error" v-else-if="errorList.img.value">
            {{ errors.error }}
          </span>
        </label>
      </div>
      <div class="form__item">
        <label class="form__label">
          <span class="form__label-title">Цена товара</span>
          <input
            type="text"
            placeholder="Введите цену"
            name="price"
            class="form__input input"
            :class="{ error: errorList.price.required }"
            v-model="form.price"
          />
          <span class="form__error" v-if="errorList.price.required">
            {{ errors.required }}
          </span>
        </label>
      </div>
      <button
        type="submit"
        class="btn btn-primary form__btn--submit"
        :disabled="invalidForm"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import errors from '../errors';

export default {
  name: 'AddNewItem',
  data: () => ({
    form: {
      title: '',
      text: '',
      img: '',
      price: '',
    },
    errorList: {
      title: {
        value: false,
        required: false,
      },
      img: {
        value: false,
        required: false,
      },
      price: {
        value: false,
        required: false,
      },
    },
    invalidForm: true,
  }),
  computed: {
    errors() {
      return errors;
    },
  },
  methods: {
    isValid() {
      const inputs = Object.keys(this.form);
      inputs.forEach((input) => {
        this.errorList[input].value = true;
        this.errorList[input].required = true;

        if (input === '') {
          this.errorList[input].required = true;
        } else {
          this.errorList[input].required = false;
        }
        if (input === 'price') {
          this.form.price = this.form.price.replace(/[^0-9]/g, '');
          this.form.price = this.form.price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        } else if (input === 'img') {
          if (this.errors.img.test(this.form.img) === false) {
            this.errorList.img.value = true;
          } else {
            this.errorList.img.value = false;
          }
        } else if (input === 'title') {
          const exist = this.$store.state.products.find((item) => item.title === this.form.title);

          if (exist) {
            this.errorList.title.value = true;
          } else {
            this.errorList.title.value = false;
          }
        }
      });

      this.validation();
    },

    validation() {
      const values = Object.values(this.errorList);
      console.log(values);
      const arr = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const value of values) {
        const val = Object.values(value);
        arr.push(...val);
      }

      if (arr.includes(true, 0)) {
        this.invalidForm = true;
      } else {
        this.invalidForm = false;
      }
    },
    onSubmit() {
      const price = Number(this.form.price.replace(/\s/g, ''));
      this.$store.commit('addProduct', {
        title: this.form.title,
        text: this.form.text,
        img: this.form.img,
        price,
      });
      this.form.title = '';
      this.form.text = '';
      this.form.img = '';
      this.form.price = '';
    },
  },
  mounted() {
    if (localStorage.title) {
      this.form.title = localStorage.getItem('title');
    }
    if (localStorage.text) {
      this.form.text = localStorage.getItem('text');
    }
    if (localStorage.img) {
      this.form.img = localStorage.getItem('img');
    }
    if (localStorage.price) {
      this.form.price = localStorage.getItem('price');
    }
  },
  watch: {
    'form.title': (val) => {
      localStorage.setItem('title', val);
      // this.isValid();
    },
    'form.text': (val) => {
      localStorage.setItem('text', val);
      // this.isValid();
    },
    'form.img': (val) => {
      localStorage.setItem('img', val);
      // this.isValid();
    },
    'form.price': (val) => {
      localStorage.setItem('price', val);
      // this.isValid();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.item-add {
  display: flex;
  flex-direction: column;
  flex: 1 0 332px;
  margin-right: 16px;
  position: sticky;
  top: 0;

  @media (max-width: 950px) {
    position: relative;
    margin: 0 0 30px;
  }

  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  &__form {
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;
    margin-top: 16px;
  }
}

.btn {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  width: 100%;
  height: 36px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &-primary {
    background: #7bae73;
    color: white;

    &:hover {
      background: darken($color: #7bae73, $amount: 7);
    }
  }

  &:disabled {
    background: #eeeeee;
    color: #b4b4b4;
  }
}

.form {
  &__item {
    margin-bottom: 16px;

    &:nth-of-type(2) {
      .form__label-title::after {
        display: none;
      }
    }
  }

  &__label {
    position: relative;
    display: flex;
    flex-direction: column;

    &-title {
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485e;
      margin-bottom: 4px;
      width: fit-content;
      position: relative;

      &::after {
        content: "";
        width: 4px;
        height: 4px;
        background: #ff8484;
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: -4px;
      }
    }
  }

  &__input {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;

    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }

    &.error {
      border: 1px solid #ff8484;
    }
  }

  &__error {
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
    position: absolute;
    bottom: -12px;
  }
}
</style>
