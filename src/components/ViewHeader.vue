<template>
  <div class="d-flex g-0 align-items-center p-1 background">
    <button class="btn btn-danger width-20 px-1 mx-1" @click="close"/>
    <button class="btn btn-warning width-20 px-1 mx-1" @click="setToSmallSize"/>
    <button class="btn btn-success width-20 px-1 mx-1" @click="setToFullSize"/>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const emit = defineEmits(['fullSize', 'smallSize'])
const close = () => {
  router.push('/')
}
const setToSmallSize = () => {
  emit('smallSize', 70, 60, 6)
}
const setToFullSize = () => {
  console.log('worked')
  emit('fullSize', 90, 90, 3)
}

</script>

<style scoped>
.background{
  background: rgba(131,166,206,0.9);
}

.width-20 {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

</style>
