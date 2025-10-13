<template>
  <div class="app-content">
    <!-- Nav -->
    <Header />

    <main>
      <!-- Home -->
      <Home />

      <div id="modals"></div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from '#components/App/Header.vue';
import Footer from '#components/App/Footer.vue';
import useLanguage from '#composables/language.js';
import Home from '#views/Home.vue';

const { setInitialLanguage } = useLanguage();

onMounted(() => {
  setInitialLanguage();
})
</script>

<style lang="scss">
@import './styles.css';
</style>
