<script setup lang="ts">
import { useProductStore } from "../store/products";
import CartButton from "./CartButton.vue";
import FavoriteButton from "./FavoriteButton.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const store = useProductStore();

const toggleFavorite = () => {
  store.toggleFavorite(props.product.id);
};

const addToCart = () => {
  store.addToCart(props.product.id);
};
</script>

<template>
  <div class="product__item">
    <div v-if="product.price.old_price" class="product__item-discount">
      Скидка
    </div>
    <img :src="product.image.url" :alt="product.name" />
    <div class="product__info">
      <div v-if="product.code" class="product__item-code">
        {{ product.code }}₽
      </div>
      <div>{{ product.name }}</div>
      <div class="info__container">
        <div class="product__item-price">
          <div v-if="product.price.old_price" class="product__item-old-price">
            {{ product.price.old_price }}₽
          </div>
          <div>{{ product.price.current_price }}₽</div>
        </div>
        <div class="container__buttons">
          <CartButton @addToCart="addToCart" :id="product.id" />
          <FavoriteButton @toggle="toggleFavorite" :id="product.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product__item {
  position: relative;
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
}

.product__info {
  text-align: left;
}

.info__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container__buttons {
  display: flex;
  gap: 1dvw;
}

.product__item img {
  width: 100%;
}

.product__item-discount {
  position: absolute;
  left: 0;
  top: 1dvh;
  padding: 0 10px;
  background-color: #eb5757;
  color: #fff;

  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  width: 81px;
  height: 24px;
}

.product__item-price {
  display: flex;
  gap: 10px;
}

.product__item-code {
  font-size: 10px;
  color: #888888;
}

.product__item-old-price {
  text-decoration: line-through;
  color: #888888;
}
</style>
