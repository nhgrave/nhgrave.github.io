<template>
  <div class="app-content">
    <!-- Nav -->
    <Header />

    <main>
      <!-- Home -->
      <Home />

      <div id="modals"></div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from '#components/App/Header.vue';
import useLanguage from '#composables/language.js';
import Home from '#views/Home.vue';

const { setLanguageByCode } = useLanguage();

onMounted(() => {
  setLanguageByCode(navigator.language || navigator.userLanguage || 'EN');
})
</script>

<style lang="scss">
@import './styles.css';
</style>
