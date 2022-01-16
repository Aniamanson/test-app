const errors = {
  img: /(https?:\/\/)[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~]*)*(#[\w\\-]*)?(\?.*)?(\.(jpg|png|webp|gif|jpeg))/gi,
  required: 'Поле не может быть пустым',
  error: 'Введено некорректное значение',
  title: 'Данный товар уже добавлен',
};

export default errors;
