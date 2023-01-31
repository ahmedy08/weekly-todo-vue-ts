<template>
  <div id="app">
    <div class="app" :style="{width: width + 'vw', height: height + 'vh', marginTop: marginTop + 'rem'}">
      <ViewHeader @fullSize="setFullSize" @smallSize="setSmallSize"/>
      <RouterView to="/"/>
      <BaseNav/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseNav from './components/BaseNav.vue'
import ViewHeader from '@/components/ViewHeader.vue'
import { ref, watch} from "vue";

const width = ref(70)
const height = ref(60)
const marginTop = ref(6)

const setFullSize = (_width: number, _height: number, _marginTop: number) => {
  width.value = _width
  height.value = _height
  marginTop.value = _marginTop
}
const setSmallSize = (_width: number, _height: number, _marginTop: number) => {
  width.value = _width
  height.value = _height
  marginTop.value = _marginTop
}

watch(() => [width, height], (_width, _height) => {
  // @ts-ignore
  width.value = _width
  // @ts-ignore
  height.value = _height
})


</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    margin: auto;
    border: 1px solid transparent;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

</style>
