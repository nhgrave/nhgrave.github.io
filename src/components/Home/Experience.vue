<template>
  <div class="experience-section" id="experience">
    <div class="container">
      <h2 class="title">{{ t('experience.title') }}</h2>

      <div class="experience-content">
        <div v-for="(item, index) in items" :key="index" class="experience-item">
          <span class="year-badge">{{ item.year }}</span>
          <h3 class="experience-position">{{ item.position }}</h3>
          <h4 class="experience-company">{{ item.company }}</h4>
          <p class="experience-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useI18n from '#composables/i18n.js';

const { t } = useI18n();

const items = [
  {
    year: 2021,
    position: t('experience.0.position'),
    company: t('experience.0.company'),
    description: t('experience.0.description'),
  },
  {
    year: 2017,
    position: t('experience.1.position'),
    company: t('experience.1.company'),
    description: t('experience.1.description'),
  },
  {
    year: 2014,
    position: t('experience.2.position'),
    company: t('experience.2.company'),
    description: t('experience.2.description'),
  },
]
</script>

<style lang="scss" scoped>
.experience-section {
  background: var(--bg-secondary);
  padding: 80px 0;
}

.title {
  font-size: var(--fs-title);
  font-weight: var(--fw-title);
  margin: 0 0 40px 0;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: calc(var(--container-max-width) - 200px);
  margin: auto;
}

.experience-item {
  padding-left: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

}

.experience-item:before {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  background: var(--bg-active);
  border-radius: 50%;
  position: absolute;
  top: 0.75rem;
  left: 0;
  transform: translate(-50%, -0.6rem);
}

.experience-item:after {
  content: '';
  display: block;
  width: 1px;
  height: calc(100% - 2rem);
  background: var(--text-primary);
  position: absolute;
  left: 0;
  bottom: 0;
}

.year-badge {
  padding: 2px 12px 2px 4px;
  background: var(--bg-tertiary);
  display: flex;
  clip-path: polygon(0% 0%, 42px 0%, 100% 50%, 42px 100%, 0% 100%);
  max-width: fit-content;
}

.experience-position {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
