<template>
  <div class="nav-wrapper d-flex justify-content-center">
    <div
      class="nav-items"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="nav-item col d-flex align-items-center px-3 py-4">
        <RouterLink class="d-flex flex-row delete-underline" to="/home">
          <i class="fa-sharp fa-solid fa-house-user"></i>
          <span v-if="isHovered" class="mx-1">Home</span>
        </RouterLink>
      </div>
      <div class="nav-item col d-flex align-items-center px-3 py-4">
        <RouterLink class="d-flex flex-row delete-underline" to="/todo">
          <i class="fa-solid fa-clipboard-list"></i>
          <span v-if="isHovered" class="mx-2">Todo</span>
        </RouterLink>
      </div>
      <div class="nav-item col d-flex align-items-center px-3 py-4">
        <RouterLink class="d-flex flex-row delete-underline" to="/charts">
          <i class="fa-solid fa-chart-simple"></i>
          <span v-if="isHovered" class="mx-2">Charts</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";

const isHovered = ref(false)

</script>

<style>
.nav-wrapper {
  background: red;
  height: calc(100% - 1.5rem);
  width: 4rem;
}

.nav-items {
  width: 4rem;
  border: 1px solid black;
}

.nav-item {
  padding: 2rem 0;
}

.nav-item i {
  font-size: 1.6rem;
}

.delete-underline {
  text-decoration: none;
}

</style>
