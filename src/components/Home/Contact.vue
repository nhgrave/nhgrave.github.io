<template>
  <div class="contact-section" id="contact">
    <div class="container">
      <h2 class="title">{{ t('contact.title') }}</h2>

      <div class="contact-content">
        <a v-for="item in items" :key="item.href" :href="item.href" class="contact-item">
          <embed :src="item.icon" type="image/svg+xml" class="svg-icon">
          {{ item.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import useI18n from '#composables/i18n.js';

const { t } = useI18n();

const items = [
  {
    href: 'mailto:nyko-23@hotmail.com',
    icon: '/assets/icons/email.svg',
    text: 'nyko-23@hotmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/nicolas-grave',
    icon: '/assets/icons/linkedin.svg',
    text: 'Linkedin',
  },
  {
    href: 'https://github.com/nhgrave',
    icon: '/assets/icons/github.svg',
    text: 'GitHub',
  },
]
</script>

<style lang="scss" scoped>
.contact-section {
  background: var(--bg-secondary);
  padding: 80px 0;
}

.title {
  font-size: var(--fs-title);
  font-weight: var(--fw-title);
  text-align: center;
  margin: 0 0 80px 0;
}

.contact-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: var(--bg-primary);
  border-radius: 0.25rem;
  width: 250px;
  color: var(--text-active);
}

.contact-item:hover {
  background: var(--bg-tertiary);
}

.svg-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-primary);
}
</style>
