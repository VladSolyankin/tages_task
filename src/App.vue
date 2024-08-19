<script setup lang="ts">
import Loader from "./anim/Loader.vue";
</script>

<template>
  <div id="app">
    <Loader />
    <div>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/cart">Корзина</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  font-family: "Monserrat", sans-serif;
}
nav {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #000;
}

nav a.router-link-active {
  font-weight: bold;
  color: blue;
}
</style>
