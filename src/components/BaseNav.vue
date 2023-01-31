<template>
  <div
    class="nav-wrapper row d-flex flex-column justify-content-center gx-0 my-5"
    @mouseover="setIsHovered(true)"
    @mouseleave="setIsHovered(false)"
  >
    <div class="nav-item col d-flex align-items-center px-4">
      <RouterLink class="delete-underline" to="/">
        <i class="fa-sharp fa-solid fa-house-user"></i>
        <span v-if="isHovered" class="mx-1">Home</span>
      </RouterLink>
    </div>
    <div class="nav-item col d-flex align-items-center px-4">
      <RouterLink class="delete-underline" to="/todo">
        <i class="fa-solid fa-clipboard-list"></i>
        <span v-if="isHovered" class="mx-2">Todo</span>
      </RouterLink>
    </div>
    <div class="nav-item col d-flex align-items-center px-4">
      <RouterLink class="delete-underline" to="/charts">
        <i class="fa-solid fa-chart-simple"></i>
        <span v-if="isHovered" class="mx-2">Charts</span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// TODO: Fix the hover effect it's problematic

const isHovered = ref<boolean>(false)
const setIsHovered = (value: boolean) => {
  setTimeout(() => {
    isHovered.value = value
  }, 100)
}

</script>

<style scoped>
.nav-wrapper {
  width: 4rem;
  height: 50vh;
  padding: 2rem 0;
  background: rgba(187,139,137,0.4);
  border-bottom-right-radius: .5rem;
  border-top-right-radius: .5rem;
  transition: width .2s ease-in-out;
  opacity: 1;
}

.nav-wrapper:hover {
  width: 10rem;
  padding: 2rem 0;
  transition: width .2s ease-in-out;
  opacity: 1;
}

.nav-item {
  max-height: 4rem;
}

i {
  font-size: 1.4rem;
  color: rgba(74,57,206,0.9);
}

.delete-underline {
  text-decoration: none;
}


</style>
