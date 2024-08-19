<script setup lang="ts">
import { useProductStore } from "../store/products";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["toggle"]);

const store = useProductStore();

const toggle = () => {
  emit("toggle");
};
</script>

<template>
  <button @click="toggle" class="favorite__button">
    <img v-if="!store.favorites.includes(props.id)" src="/favorite.svg" />
    <img v-else src="/favorite_added.svg" />
  </button>
</template>

<style scoped>
.favorite__button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
