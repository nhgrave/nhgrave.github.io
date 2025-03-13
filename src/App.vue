<template>
  <div>
    <!-- Nav -->
    <Header />

    <main>
      <!-- Home -->
      <Home />
    </main>
  </div>
</template>

<script setup>
import Header from '#components/App/Header.vue';
import Home from '#views/Home.vue';
</script>

<style lang="scss">
@import './styles.css';
</style>
