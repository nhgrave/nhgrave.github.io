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
import Home from '#views/Home.vue';

function scrollTo(e) {
  e.preventDefault();

  const reference = document.querySelector(e.target.getAttribute('data-scroll-to'));
  if (reference) reference.scrollIntoView({ behavior: 'smooth' });
}

onMounted(() => {
  document.querySelectorAll('[data-scroll-to]').forEach(($el) => {
    $el.addEventListener('click', scrollTo);
  });
});
</script>

<style lang="scss">
@import './styles.css';
</style>
