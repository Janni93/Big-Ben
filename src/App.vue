<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/navbar.vue'
import Foot from '@/components/foot.vue'

const route = useRoute()

</script>

<template>
  <Navbar />
 
    <RouterView />
  
  <Foot />
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
