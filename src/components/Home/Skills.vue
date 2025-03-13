<template>
  <div class="skills-section" id="skills">
    <div class="container">
      <h2 class="title">My Skills</h2>

      <div class="skills-list">
        <div v-for="(item, index) in items" :key="index" class="skill-item">
          <img :src="item.logo" :alt="item.title" :title="`${item.title} logo`" class="skill-item-logo" :class="{ large: item.large }" loading="lazy">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    logo: '/assets/icons/ruby.svg',
    title: 'Ruby on Rails',
  },
  {
    logo: '/assets/icons/vuejs.svg',
    title: 'VueJS',
  },
  {
    logo: '/assets/icons/react.svg',
    title: 'React',
  },
  {
    logo: '/assets/icons/javascript.svg',
    title: 'JavaScript',
  },
  {
    logo: '/assets/icons/typescript.svg',
    title: 'TypeScript',
  },
  {
    logo: '/assets/icons/html_css.svg',
    title: 'HTML & CSS',
    large: true,
  },
  {
    logo: '/assets/icons/git.svg',
    title: 'Git',
  },
  {
    logo: '/assets/icons/postgresql.svg',
    title: 'PostgreSQL',
  },
  {
    logo: '/assets/icons/mysql.svg',
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
