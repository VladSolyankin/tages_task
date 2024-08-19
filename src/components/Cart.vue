<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "../store/products";
import ProductItem from "./ProductItem.vue";

const store = useProductStore();

const cartItems = computed(() => {
  return store.products.filter((product) => store.cart.includes(product.id));
});
</script>

<template>
  <div>
    <h1>Корзина</h1>
    <div v-if="cartItems.length === 0">Корзина пуста</div>
    <div v-else class="cart">
      <ProductItem
        v-for="product in cartItems"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
.cart {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
</style>
