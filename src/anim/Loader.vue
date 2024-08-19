<script setup lang="ts">
import { onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<template>
  <div class="video-wrapper" v-if="isLoading">
    <video
      ref="loadingVideo"
      class="loading-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/loader.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2f6f9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-video {
  width: 150px;
  height: 200px;
  object-fit: cover;
}
</style>
