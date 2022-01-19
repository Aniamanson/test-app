<template>
  <div class="modal__backdrop" @click="closeModal">
    <div class="modal__content modal__content--registration">
      <div class="modal__close" @click="closeModalIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="22"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M7.32166 5.99941L11.8083 10.4862C11.9317 10.6098 11.9998 10.7745 12
          10.9502C12 11.126 11.9319 11.291 11.8083 11.4143L11.4151 11.8074C11.2915
          11.9312 11.1267 11.999 10.9508 11.999C10.7752 11.999 10.6104 11.9312
          10.4868 11.8074L6.0002 7.32088L1.51337 11.8074C1.38995 11.9312 1.22507
          11.999 1.04927 11.999C0.873659 11.999 0.70878 11.9312 0.585366 11.8074L0.192
          11.4143C-0.064 11.1583 -0.064 10.7419 0.192 10.4862L4.67873 5.99941L0.192
          1.51278C0.0684878 1.38907 0.000487805 1.22429 0.000487805 1.04858C0.000487805
          0.872873 0.0684878 0.708094 0.192 0.584484L0.585268 0.19141C0.708683 0.0677032
          0.873658 -0.000199318 1.04917 -0.000199318C1.22498 -0.000199318 1.38985 0.0677032
          1.51327 0.19141L6.0001 4.67805L10.4867 0.19141C10.6103 0.0677032 10.7751 -0.000199318
          10.9507 -0.000199318H10.9509C11.1266 -0.000199318 11.2914 0.0677032 11.415 0.19141L11.8082
          0.584484C11.9316 0.707996 11.9997 0.872873 11.9997 1.04858C11.9997 1.22429 11.9316 1.38907
          11.8082 1.51268L7.32166 5.99941Z"
            fill="#3F3F3F"
          />
        </svg>
      </div>
      <ConfirmDelete
        v-if="targerBlock === 'confirmDelete'"
        :product="params"
        @cancelled="closeModalIcon"
      />
      <SuccessModal
        v-if="targerBlock === 'successModal'"
        @cancelled="closeModalIcon"
      />
    </div>
  </div>
</template>

<script>
import ConfirmDelete from './ConfirmDelete.vue';
import SuccessModal from './SuccessModal.vue';

export default {
  name: 'Modal',
  components: {
    ConfirmDelete,
    SuccessModal,
  },
  props: ['openTarget', 'params'],
  data: () => ({
    targerBlock: '',
  }),
  computed: {},
  mounted() {
    this.targerBlock = this.openTarget;
  },
  methods: {
    closeModal(event) {
      const content = document.querySelector('.modal__backdrop');
      const link = content.querySelector('.product__title');

      if (event.target === content || event.target === link) {
        console.log(event.target);
        this.$emit('close');
      }
    },
    closeModalIcon() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
.modal__backdrop {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(25, 34, 51, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow-y: auto;
}
.modal__content {
  position: relative;
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
  padding: 0 30px 40px;
  height: auto;
  width: 100%;
  position: relative;
  overflow-y: auto;
  cursor: default;
  max-width: 600px;
  border-radius: 10px;
  overflow-x: hidden;

  @media (max-width: 460px) {
    padding: 0 20px 40px;
  }
}
.modal__close {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid #3f3f3f;
  transition: all 0.2s ease-in-out;
  svg path {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    border: 2px solid #7bae73;
    svg path {
      fill: #7bae73;
    }
  }
}
h2.modal__title {
  font-size: 24px !important;
  line-height: 44px;
  margin: 0 0 8px;
}
</style>
