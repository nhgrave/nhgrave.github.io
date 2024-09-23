<template>
  <div class="skills-section" id="skills">
    <div class="container">
      <h2 class="title">My Skills</h2>

      <div class="skills-list">
        <div v-for="(item, index) in items" :key="index" class="skill-item">
          <img :src="loadLogoPath(item.logo)" :alt="item.title" :title="`${item.title} logo`" class="skill-item-logo" :class="{ large: item.large }">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Ruby on Rails',
    logo: 'ruby.svg',
  },
  {
    title: 'VueJS',
    logo: 'vuejs.svg',
  },
  {
    title: 'JavaScript',
    logo: 'javascript.svg',
  },
  {
    title: 'HTML & CSS',
    logo: 'html_css.svg',
    large: true,
  },
  {
    title: 'Git',
    logo: 'git.svg',
  },
  {
    title: 'PostgreSQL',
    logo: 'postgresql.svg',
  },
  {
    title: 'MySQL',
    logo: 'mysql.svg',
  },
];

function loadLogoPath(logo: string) {
  return new URL(`../assets/icons/${logo}`, import.meta.url).href;
}
</script>

<style scoped lang="scss">
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

  @include md {
    font-size: 1rem;
    width: 180px;
    height: 180px;
  }
}

.skill-item-logo {
  width: 60px;
  height: 60px;

  @include md {
    width: 80px;
    height: 80px;
  }

  &.large {
    width: 160px;
  }
}
</style>
