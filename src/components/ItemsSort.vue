<template>
  <div
    class="select-custom"
    :class="{ 'is-active': isOpenSelect === true }"
    id="item-sort"
    @mouseenter="openSelect"
    @mouseleave="closeSelect"
  >
    <div class="select__header">
      <span class="select__current select-placeholder">
        {{ currentItemSort }}
      </span>
      <div class="select__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
        >
          <path
            d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264"
            stroke="#B4B4B4"
          />
        </svg>
      </div>
    </div>
    <transition name="fade">
      <div class="select__body" v-if="isOpenSelect">
        <div
          class="select__item"
          v-for="sort in sortingList"
          :key="sort"
          @click="pickSort"
        >
          {{ sort }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ItemsSort',
  props: ['itemSort', 'sortingList'],
  data: () => ({
    isOpenSelect: false,
    currentItemSort: null,
  }),
  computed: {},
  methods: {
    pickSort(e) {
      this.currentItemSort = e.target.innerText;
      this.$emit('update:itemSort', this.currentItemSort);
      this.isOpenSelect = false;
    },

    openSelect() {
      this.isOpenSelect = true;
    },
    closeSelect() {
      this.isOpenSelect = false;
    },
  },
  created() {
    this.currentItemSort = this.itemSort;
  },
};
</script>

<style lang="scss">
.select-custom {
  position: relative;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: auto;
  color: #b4b4b4;
  font-size: 12px;
  line-height: 15px;

  &.is-active,
  &:hover {
    .select__header {
      background: #7bae73;
    }
    .select-placeholder,
    .select__current {
      color: white;
    }
    .select__icon {
      svg path {
        stroke: white;
      }
    }
  }
  &.is-active {
    .select__icon {
      transform: rotate(-180deg);
      margin-top: 0;
    }
  }
}

.select {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    padding: 10px 16px 11px 16px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  &-placeholder,
  &__current,
  &__item {
    color: #b4b4b4;
    font-size: 12px;
    line-height: 15px;
    margin-right: 5px;
    transition: all 0.2s ease-in-out;
  }

  &__icon {
    margin-top: 2px;
    display: flex;
    width: 8px;
    height: 6px;
    transition: all 0.2s ease-in-out;

    svg path {
      transition: all 0.2s ease-in-out;
    }
  }

  &__body {
    padding: 5px 16px 11px 5px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 160px;
    position: absolute;
    top: 38px;
    text-align: right;
    z-index: 10;
  }

  &__item {
    padding: 5px 0;
    cursor: pointer;
    &:hover {
      color: #7bae73;
    }
  }
}
</style>
