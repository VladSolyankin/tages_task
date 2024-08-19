<script setup lang="ts">
import { useProductStore } from "../store/products";

const emit = defineEmits(["addToCart"]);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const store = useProductStore();

const addToCart = () => {
  emit("addToCart");
};
</script>

<template>
  <button @click="addToCart" class="cart__button">
    <img v-if="!store.cart.includes(props.id)" src="/cart.svg" />
    <img v-else src="/cart_added.svg" />
  </button>
</template>

<style scoped>
.cart__button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
