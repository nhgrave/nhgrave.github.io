<template>
  <div class="about-section" id="about">
    <div class="container">
      <h2 class="title">{{ t('about.title') }}</h2>
      {{ t('about.description') }}
    </div>
  </div>
</template>

<script setup>
import useI18n from '#composables/i18n.js';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.about-section {
  padding: 80px 0;
}

.title {
  font-size: var(--fs-title);
  font-weight: var(--fw-title);
  margin: 0 0 40px 0;
}
</style>
