<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/navbar.vue'
import Foot from '@/components/foot.vue'
</script>

<template>
  <Navbar />

  <RouterView />

  <Foot />
</template>

<style>
/* Fjern margin/padding og maks bredde for at video kan fylde hele bredden */
body, html {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
