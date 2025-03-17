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
import { onMounted } from 'vue';
import Header from '#components/App/Header.vue';
import useLanguage from '#composables/language.js';
import Home from '#views/Home.vue';

const { setLanguageByCode } = useLanguage();

onMounted(() => {
  setLanguageByCode('en');
})
</script>

<style lang="scss">
@import './styles.css';
</style>
