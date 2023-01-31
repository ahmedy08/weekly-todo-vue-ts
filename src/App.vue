<script setup lang="ts">
import BaseNav from './components/BaseNav.vue'

</script>

<template>
  <div id="app">
    <div class="app">
    <BaseNav/>
    </div>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    width: 70vw;
    height: 60vh;
    margin: auto;
    margin-top: 6rem;
    border: 1px solid transparent;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

</style>
