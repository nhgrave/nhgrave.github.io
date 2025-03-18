<template>
  <div class="skills-section" id="skills">
    <div class="container">
      <h2 class="title">{{ t('skills.title') }}</h2>

      <div class="skills-list">
        <div v-for="(item, index) in items" :key="index" class="skill-item">
          <SvgHandler :icon="item.icon" class="skill-item-logo" :class="{ large: item.large }" />
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useI18n from '#composables/i18n.js';
import SvgHandler from '#components/Shared/SvgHandler.vue';

const { t } = useI18n();

const items = [
  {
    icon: 'ruby',
    title: 'Ruby on Rails',
  },
  {
    icon: 'vuejs',
    title: 'VueJS',
  },
  {
    icon: 'react',
    title: 'React',
  },
  {
    icon: 'javascript',
    title: 'JavaScript',
  },
  {
    icon: 'typescript',
    title: 'TypeScript',
  },
  {
    icon: 'html_css',
    title: 'HTML & CSS',
    large: true,
  },
  {
    icon: 'git',
    title: 'Git',
  },
  {
    icon: 'postgresql',
    title: 'PostgreSQL',
  },
  {
    icon: 'mysql',
    title: 'MySQL',
  },
]
</script>

<style lang="scss" scoped>
.skills-section {
  padding: 80px 0;
}

.title {
  font-size: var(--fs-title);
  font-weight: var(--fw-title);
  margin: 0 0 60px 0;
  text-align: center;
}

.skills-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-item {
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  width: 150px;
  height: 150px;
}

.skill-item-logo {
  width: 60px;
  height: 60px;
}

.skill-item-logo.large {
  width: 160px;
}

@media (min-width: 768px) {
  .skill-item {
    font-size: 1rem;
    width: 180px;
    height: 180px;
  }

  .skill-item-logo {
    width: 80px;
    height: 80px;
  }
}
</style>
