/* eslint-disable no-restricted-syntax */
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
            :class="{ error: msg.title }"
            v-model.trim="form.title"
          />
          <span class="form__error" v-if="msg.title">
            {{ msg.title }}
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
            :class="{ error: msg.img }"
            v-model.trim="form.img"
          />
          <span class="form__error" v-if="msg.img">
            {{ msg.img }}
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
            :class="{ error: msg.price }"
            v-model="form.price"
          />
          <span class="form__error" v-if="msg.price">
            {{ msg.price }}
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
export default {
  name: 'AddNewItem',
  data: () => ({
    form: {
      title: '',
      text: '',
      img: '',
      price: '',
    },
    msg: {},
    inValidObj: {
      title: true,
      img: true,
      price: true,
    },
    invalidForm: true,
  }),

  methods: {
    validateTitle(val) {
      if (val !== '') {
        const exist = this.$store.state.products.find((item) => item.title === val);
        if (exist) {
          this.msg.title = 'Данный товар уже добавлен';
        } else {
          this.msg.title = '';
        }
      } else {
        this.msg.title = 'Поле не может быть пустым';
      }

      this.isValid('title');
    },

    validateImg(val) {
      this.requiredVal(val, 'img');
      if (val !== '') {
        if (
          /(https?:\/\/)[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~]*)*(#[\w\\-]*)?(\?.*)?(\.(jpg|png|webp|gif|jpeg))/gi.test(
            val,
          )
        ) {
          this.msg.img = '';
        } else {
          this.msg.img = 'Введено некорректное значение';
        }
      } else {
        this.msg.img = 'Поле не может быть пустым';
      }

      this.isValid('img');
    },

    validatePrice(val) {
      this.requiredVal(val, 'price');
      this.form.price = this.form.price.replace(/[^0-9]/g, '');
      this.form.price = this.form.price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      this.isValid('price');
    },

    requiredVal(val, data) {
      if (val === '') {
        this.msg[data] = 'Поле не может быть пустым';
      } else {
        this.msg[data] = '';
      }
    },

    isValid(data) {
      if (this.form[data] !== '' && this.msg[data] === '') {
        this.inValidObj[data] = false;
      }

      this.validation();
    },

    validation() {
      const values = Object.values(this.inValidObj);
      console.log(values);
      const arr = [...values];

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

      Object.keys(this.form).forEach((key) => {
        this.form[key] = '';
      });

      this.invalidForm = true;

      Object.keys(this.inValidObj).forEach((key) => {
        this.inValidObj[key] = true;
      });

      this.$emit('succeed', 'successModal');
    },
  },
  watch: {
    /* eslint-disable */
    'form.title': function (val) {
      // localStorage.setItem('title', val);
      this.validateTitle(val);
    },
    'form.img': function (val) {
      // localStorage.setItem('img', val);
      this.validateImg(val);
    },
    'form.price': function (val) {
      // localStorage.setItem('price', val);
      this.validatePrice(val);
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
