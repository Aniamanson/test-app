(function(t){function e(e){for(var r,o,a=e[0],c=e[1],l=e[2],d=0,m=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/test-app/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),s=(i("907d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"fade"}},[t.isOpenModal?i("Modal",{attrs:{"open-target":t.openTarget,params:t.params},on:{close:t.closeModal}}):t._e()],1),i("AddNewItem",{on:{succeed:t.openModal}}),i("div",{staticClass:"main"},[i("ItemsSort",{attrs:{"item-sort":t.itemSort,"sorting-list":t.sorting},on:{"update:itemSort":function(e){t.itemSort=e},"update:item-sort":function(e){t.itemSort=e}}}),i("ItemsList",{attrs:{products:t.products}})],1)],1)}),n=[],o=(i("4e82"),new r["a"]({})),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal__backdrop",on:{click:t.closeModal}},[i("div",{staticClass:"modal__content modal__content--registration"},[i("div",{staticClass:"modal__close",on:{click:t.closeModalIcon}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"22",viewBox:"0 0 12 12",fill:"none"}},[i("path",{attrs:{d:"M7.32166 5.99941L11.8083 10.4862C11.9317 10.6098 11.9998 10.7745 12\n        10.9502C12 11.126 11.9319 11.291 11.8083 11.4143L11.4151 11.8074C11.2915\n        11.9312 11.1267 11.999 10.9508 11.999C10.7752 11.999 10.6104 11.9312\n        10.4868 11.8074L6.0002 7.32088L1.51337 11.8074C1.38995 11.9312 1.22507\n        11.999 1.04927 11.999C0.873659 11.999 0.70878 11.9312 0.585366 11.8074L0.192\n        11.4143C-0.064 11.1583 -0.064 10.7419 0.192 10.4862L4.67873 5.99941L0.192\n        1.51278C0.0684878 1.38907 0.000487805 1.22429 0.000487805 1.04858C0.000487805\n        0.872873 0.0684878 0.708094 0.192 0.584484L0.585268 0.19141C0.708683 0.0677032\n        0.873658 -0.000199318 1.04917 -0.000199318C1.22498 -0.000199318 1.38985 0.0677032\n        1.51327 0.19141L6.0001 4.67805L10.4867 0.19141C10.6103 0.0677032 10.7751 -0.000199318\n        10.9507 -0.000199318H10.9509C11.1266 -0.000199318 11.2914 0.0677032 11.415 0.19141L11.8082\n        0.584484C11.9316 0.707996 11.9997 0.872873 11.9997 1.04858C11.9997 1.22429 11.9316 1.38907\n        11.8082 1.51268L7.32166 5.99941Z",fill:"#3F3F3F"}})])]),"confirmDelete"===t.targerBlock?i("ConfirmDelete",{attrs:{product:t.params},on:{cancelled:t.closeModalIcon}}):t._e(),"successModal"===t.targerBlock?i("SuccessModal",{on:{cancelled:t.closeModalIcon}}):t._e()],1)])},c=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal__inner"},[i("h2",{staticClass:"modal__title"},[t._v("Подтверждение удаления товара")]),i("p",[t._v("Вы точно хотите удалить этот товар из корзины?")]),i("div",{staticClass:"product-cart"},[i("img",{attrs:{src:t.cartProduct.img,alt:t.cartProduct.title}}),i("div",{staticClass:"product-cart__info"},[i("p",{staticClass:"product__title"},[t._v(" "+t._s(t.cartProduct.title)+" ")]),i("span",{staticClass:"product__price"},[t._v(" "+t._s(t.priceComputed(t.cartProduct.price))+" руб. ")])])]),i("div",{staticClass:"modal__footer"},[i("button",{staticClass:"btn btn__delete",on:{click:function(e){return e.preventDefault(),t.deleteProduct.apply(null,arguments)}}},[t._v(" Удалить ")]),i("button",{staticClass:"btn btn__simple",on:{click:function(e){return e.preventDefault(),t.cancelled.apply(null,arguments)}}},[t._v(" Отменить ")])])])},u=[],d=(i("7db0"),i("d3b7"),{name:"ConfirmDelete",props:["product"],data:function(){return{}},computed:{cartProduct:function(){var t=this,e=this.$store.state.products;return e.find((function(e){return e.title===t.product}))}},methods:{priceComputed:function(t){return t.toLocaleString("ru-RU")},deleteProduct:function(){this.$store.commit("deleteProduct",this.product.title),this.cancelled()},cancelled:function(){this.$emit("cancelled")}}}),m=d,p=(i("e5f6"),i("2877")),f=Object(p["a"])(m,l,u,!1,null,null,null),_=f.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal__inner"},[i("h2",{staticClass:"modal__title"},[t._v("Поздравляю!")]),i("p",[t._v("Товар успешно добавлен.")])])}],g={name:"SuccessModal"},b=g,C=Object(p["a"])(b,v,h,!1,null,null,null),S=C.exports,w={name:"Modal",components:{ConfirmDelete:_,SuccessModal:S},props:["openTarget","params"],data:function(){return{targerBlock:""}},computed:{},mounted:function(){this.targerBlock=this.openTarget},methods:{closeModal:function(t){var e=document.querySelector(".modal__backdrop"),i=e.querySelector(".product__title");t.target!==e&&t.target!==i||(console.log(t.target),this.$emit("close"))},closeModalIcon:function(){this.$emit("close")}}},x=w,y=(i("de42"),Object(p["a"])(x,a,c,!1,null,"53b6a354",null)),O=y.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-add"},[i("h1",{staticClass:"item-add__title"},[t._v("Добавление товара")]),i("form",{staticClass:"item-add__form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[i("div",{staticClass:"form__item"},[i("label",{staticClass:"form__label"},[i("span",{staticClass:"form__label-title"},[t._v("Наименование товара")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.title,expression:"form.title",modifiers:{trim:!0}}],staticClass:"form__input input",class:{error:t.msg.title},attrs:{type:"text",placeholder:"Введите наименование товара",name:"title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.msg.title?i("span",{staticClass:"form__error"},[t._v(" "+t._s(t.msg.title)+" ")]):t._e()])]),i("div",{staticClass:"form__item"},[i("label",{staticClass:"form__label"},[i("span",{staticClass:"form__label-title"},[t._v("Описание товара")]),i("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.text,expression:"form.text",modifiers:{trim:!0}}],staticClass:"form__input input",attrs:{rows:"6",cols:"15",placeholder:"Введите описание товара",name:"text"},domProps:{value:t.form.text},on:{input:function(e){e.target.composing||t.$set(t.form,"text",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),i("div",{staticClass:"form__item"},[i("label",{staticClass:"form__label"},[i("span",{staticClass:"form__label-title"},[t._v("Ссылка на изображение товара")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.img,expression:"form.img",modifiers:{trim:!0}}],staticClass:"form__input input",class:{error:t.msg.img},attrs:{type:"text",placeholder:"Введите ссылку",name:"img"},domProps:{value:t.form.img},on:{input:function(e){e.target.composing||t.$set(t.form,"img",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.msg.img?i("span",{staticClass:"form__error"},[t._v(" "+t._s(t.msg.img)+" ")]):t._e()])]),i("div",{staticClass:"form__item"},[i("label",{staticClass:"form__label"},[i("span",{staticClass:"form__label-title"},[t._v("Цена товара")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form__input input",class:{error:t.msg.price},attrs:{type:"text",placeholder:"Введите цену",name:"price"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t.msg.price?i("span",{staticClass:"form__error"},[t._v(" "+t._s(t.msg.price)+" ")]):t._e()])]),i("button",{staticClass:"btn btn-primary form__btn--submit",attrs:{type:"submit",disabled:t.invalidForm}},[t._v(" Добавить товар ")])])])},j=[],P=i("2909"),$=(i("ac1f"),i("00b4"),i("5319"),i("07ac"),i("caad"),i("2532"),i("a9e3"),i("159b"),i("b64b"),{name:"AddNewItem",data:function(){return{form:{title:"",text:"",img:"",price:""},msg:{},inValidObj:{title:!0,img:!0,price:!0},invalidForm:!0}},methods:{validateTitle:function(t){if(""!==t){var e=this.$store.state.products.find((function(e){return e.title===t}));this.msg.title=e?"Данный товар уже добавлен":""}else this.msg.title="Поле не может быть пустым";this.isValid("title")},validateImg:function(t){this.requiredVal(t,"img"),""!==t?/(https?:\/\/)[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~]*)*(#[\w\\-]*)?(\?.*)?(\.(jpg|png|webp|gif|jpeg))/gi.test(t)?this.msg.img="":this.msg.img="Введено некорректное значение":this.msg.img="Поле не может быть пустым",this.isValid("img")},validatePrice:function(t){this.requiredVal(t,"price"),this.form.price=this.form.price.replace(/[^0-9]/g,""),this.form.price=this.form.price.replace(/\B(?=(\d{3})+(?!\d))/g," "),this.isValid("price")},requiredVal:function(t,e){this.msg[e]=""===t?"Поле не может быть пустым":""},isValid:function(t){""!==this.form[t]&&""===this.msg[t]&&(this.inValidObj[t]=!1),this.validation()},validation:function(){var t=Object.values(this.inValidObj);console.log(t);var e=Object(P["a"])(t);e.includes(!0,0)?this.invalidForm=!0:this.invalidForm=!1},onSubmit:function(){var t=this,e=Number(this.form.price.replace(/\s/g,""));this.$store.commit("addProduct",{title:this.form.title,text:this.form.text,img:this.form.img,price:e}),Object.keys(this.form).forEach((function(e){t.form[e]=""})),this.invalidForm=!0,Object.keys(this.inValidObj).forEach((function(e){t.inValidObj[e]=!0})),this.$emit("succeed","successModal")}},watch:{"form.title":function(t){this.validateTitle(t)},"form.img":function(t){this.validateImg(t)},"form.price":function(t){this.validatePrice(t)}}}),I=$,k=(i("f632"),Object(p["a"])(I,M,j,!1,null,null,null)),L=k.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select-custom",class:{"is-active":!0===t.isOpenSelect},attrs:{id:"item-sort"},on:{mouseenter:t.openSelect,mouseleave:t.closeSelect}},[i("div",{staticClass:"select__header"},[i("span",{staticClass:"select__current select-placeholder"},[t._v(" "+t._s(t.currentItemSort)+" ")]),i("div",{staticClass:"select__icon"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"6",viewBox:"0 0 8 6",fill:"none"}},[i("path",{attrs:{d:"M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264",stroke:"#B4B4B4"}})])])]),i("transition",{attrs:{name:"fade"}},[t.isOpenSelect?i("div",{staticClass:"select__body"},t._l(t.sortingList,(function(e){return i("div",{key:e,staticClass:"select__item",on:{click:t.pickSort}},[t._v(" "+t._s(e)+" ")])})),0):t._e()])],1)},E=[],T={name:"ItemsSort",props:["itemSort","sortingList"],data:function(){return{isOpenSelect:!1,currentItemSort:null}},computed:{},methods:{pickSort:function(t){this.currentItemSort=t.target.innerText,this.$emit("update:itemSort",this.currentItemSort),this.isOpenSelect=!1},openSelect:function(){this.isOpenSelect=!0},closeSelect:function(){this.isOpenSelect=!1}},created:function(){this.currentItemSort=this.itemSort}},B=T,N=(i("82ec"),Object(p["a"])(B,V,E,!1,null,null,null)),D=N.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"items__list"},t._l(t.products,(function(t,e){return i("ItemCard",{key:e,attrs:{product:t}})})),1),i("div",{staticClass:"items__list-bottom"})])},q=[],U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-card"},[i("div",{staticClass:"item-card__delete",on:{click:function(e){return t.deleteProduct(t.product.title)}}},[i("img",{attrs:{src:"img/delete.svg",alt:"удалить товар"}})]),i("div",{staticClass:"item-card__img"},[i("img",{attrs:{src:t.product.img,alt:t.product.title}})]),i("div",{staticClass:"item-card__info"},[i("div",{staticClass:"item-card__title"},[t._v(t._s(t.product.title))]),i("div",{staticClass:"item-card__text"},[t._v(t._s(t.product.text))]),i("div",{staticClass:"item-card__price"},[t._v(t._s(t.priceComputed)+" руб.")])])])},A=[],R={name:"ItemCard",props:["product"],data:function(){return{}},computed:{priceComputed:function(){return Number(this.product.price).toLocaleString("ru-RU")}},methods:{deleteProduct:function(t){o.$emit("deleteProduct",t)}}},J=R,H=(i("7b27"),Object(p["a"])(J,U,A,!1,null,"708248a1",null)),X=H.exports,Z={name:"ItemsList",components:{ItemCard:X},props:["products"]},z=Z,G=(i("7e3d"),Object(p["a"])(z,F,q,!1,null,"490cfa00",null)),K=G.exports,Q={name:"App",components:{Modal:O,AddNewItem:L,ItemsList:K,ItemsSort:D},data:function(){return{isOpenModal:!1,openTarget:"",params:{},itemSort:"По умолчанию",sorting:["По возрастанию цены","По убыванию цены","По наименованию"]}},computed:{products:function(){return this.sort(this.$store.state.products)}},created:function(){var t=this;o.$on("deleteProduct",(function(e){t.openModal("confirmDelete",e)}))},methods:{closeModal:function(){this.isOpenModal=!1,document.querySelector("body").style.overflow=this.isOpenModal?"hidden":"auto"},openModal:function(t,e){console.log(t),this.openTarget=t,this.isOpenModal=!0,this.params=e},sort:function(t){var e=t;function i(t){return function(e,i){return e[t]>i[t]?1:-1}}function r(t){return function(e,i){return i[t]>e[t]?1:-1}}function s(t){return function(e,i){return e[t]>i[t]?1:-1}}switch(this.itemSort){case"По возрастанию цены":return e.sort(i("price"));case"По убыванию цены":return e.sort(r("price"));case"По наименованию":return e.sort(s("title"));default:return e}}}},W=Q,Y=(i("5c0b"),Object(p["a"])(W,s,n,!1,null,null,null)),tt=Y.exports,et=(i("c740"),i("a434"),i("2f62")),it=i("bfa9");r["a"].use(et["a"]);var rt=new it["a"]({key:"my-app",storage:window.localStorage}),st=new et["a"].Store({state:{products:[{title:"Фотоаппарат Polaroid",text:"Довольно-таки интересное описание товара в несколько строк.\n        Довольно-таки интересное описание товара в несколько строк",img:"img/photo.png",price:3e3},{title:"PlayStation 5",text:"Игровая консоль нового поколения. Версия консоли без дисковода",img:"https://cyber.pressball.by/wp-content/uploads/2020/12/ps5.jpg",price:65e3},{title:"Робот-пылесос Xiaomi Mi Robot Vacuum Mop",text:"Моющий робот-пылесос с щёткой-валиком и двумя боковыми щётками для безупречной и быстрой уборки",img:"https://opt-478917.ssl.1c-bitrix-cdn.ru/upload/medialibrary/fc6/1.jpg?1601468975122495",price:22e3}]},mutations:{addProduct:function(t,e){var i=e.title,r=e.text,s=e.img,n=e.price,o=t.products.find((function(t){return t.title===i}));o||t.products.push({title:i,text:r,img:s,price:n})},deleteProduct:function(t,e){var i=t.products.findIndex((function(t){return t.title===e}));t.products.splice(i,1)}},actions:{},modules:{},plugins:[rt.plugin]});r["a"].config.productionTip=!1,new r["a"]({store:st,render:function(t){return t(tt)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},6698:function(t,e,i){},"7b27":function(t,e,i){"use strict";i("8fa4")},"7e3d":function(t,e,i){"use strict";i("b8b0")},"82ec":function(t,e,i){"use strict";i("dc08")},"8fa4":function(t,e,i){},"907d":function(t,e,i){},"9c0c":function(t,e,i){},b8b0:function(t,e,i){},d857:function(t,e,i){},d916:function(t,e,i){},dc08:function(t,e,i){},de42:function(t,e,i){"use strict";i("d916")},e5f6:function(t,e,i){"use strict";i("d857")},f632:function(t,e,i){"use strict";i("6698")}});
//# sourceMappingURL=app.4b51bc9e.js.map