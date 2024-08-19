<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["sort", "filter"]);

const sortValue = ref("asc");
const filterValue = ref("all");

const sort = (order: string) => {
  emit("sort", order);
};

const filter = (material: string) => {
  emit("filter", material);
};
</script>

<template>
  <div class="filters">
    <div class="filters__container">
      <label for="sort">Сортировать по:</label>
      <select v-model="sortValue" @change="sort(sortValue)">
        <option value="asc">Цена по возрастанию</option>
        <option value="desc">Цена по убыванию</option>
      </select>
    </div>
    <div class="filters__container">
      <label for="filter">Материал: </label>
      <select v-model="filterValue" @change="filter(filterValue)">
        <option value="all">Все материалы</option>
        <option value="1">Дерево</option>
        <option value="2">Металл</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  justify-content: start;
  gap: 5dvw;
}
.filters__container {
  display: flex;
  flex-direction: column;
  max-width: 250px;
}

.filters select {
  display: flex;
  height: 30px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 14px;
  margin-top: 5px;
  background: #f2f2f2;
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column;
    gap: 1dvh;
  }
}
</style>
