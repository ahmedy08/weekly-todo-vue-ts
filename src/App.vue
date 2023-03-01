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
import BaseNav from '@/components/BaseNav.vue'
import ViewHeader from '@/components/ViewHeader.vue'
import { ref, watch } from 'vue'

const width = ref<number> (100)
const height = ref<number> (100)
const marginTop = ref<number> (0)

// FIXME: Setting size is flushing when browser refresh
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

watch(() => [width, height], ([_width, _height]) => {
  // TODO: ask an experienced person 'is this a valid solution'
  width.value = _width.value
  height.value = _height.value
})

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    width: 100%;
    height: 100%;
    margin: auto;
    border: 1px solid transparent;
    box-shadow: -10px -10px 25px rgba(0,0,0,0.4), 10px 10px 20px rgba(0,0,0,0.4);
  }

</style>
