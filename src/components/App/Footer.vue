<template>
  <div class="app-footer">
    {{ t("footer.message") }}
  </div>
</template>

<script setup>
import useI18n from '#composables/i18n.js';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.app-footer {
  font-family: 'Just Me Again Down Here', cursive;
  font-weight: 400;
  font-size: var(--fs-title);
  background: var(--bg-secondary);
  padding: 80px 0;
  text-align: center;
}
</style>
