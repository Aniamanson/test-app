<template>
  <div class="item-add">
    <h1 class="item-add__title">Добавление товара</h1>
    <div class="item-add__form"></div>
  </div>
</template>

<script>
export default {
  name: 'AddNewItem',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-add {
  max-width: 332px;
  margin-right: 16px;

  &__form {
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;
    margin-top: 16px;
  }
}
</style>
