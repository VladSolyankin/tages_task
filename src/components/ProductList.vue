<script setup lang="ts">
import { useProductStore } from "../store/products";
import Filters from "./Filters.vue";
import ProductItem from "./ProductItem.vue";

const store = useProductStore();

const addToCart = (productId: string) => {
  store.addToCart(productId);
};

const toggleFavorite = (productId: string) => {
  store.toggleFavorite(productId);
};

const sortProducts = (order: string) => {
  store.sortProducts(order);
};

const filterProducts = (material: string) => {
  store.filterProducts(material);
};
</script>

<template>
  <div>
    <h1>Комплекты стеллажных систем</h1>
    <Filters @sort="sortProducts" @filter="filterProducts" />
    <div class="product__list">
      <ProductItem
        v-for="product in store.filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
        @toggle-favorite="toggleFavorite"
      />
    </div>
  </div>
</template>
