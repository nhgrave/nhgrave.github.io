<template>
  <div class="navbar">
    <div class="container">
      <div class="nav-content">
        <a href="#home-section" v-scroll-to="'#home-section'" class="navbar-brand">
          <SvgHandler icon="codeblock" />
        </a>

        <div class="navbar-menu">
          <a v-for="item in items" :key="item.href" :href="item.href" v-scroll-to="item.href" class="navbar-link">
            {{ item.text }}
          </a>
        </div>

        <div>
          <DropdownLanguage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgHandler from '#components/Shared/SvgHandler.vue';
import DropdownLanguage from '#components/App/DropdownLanguage.vue';
import useI18n from '#composables/i18n.js';

const { t } = useI18n();

const items = [
  { text: t('header.about'), href: '#about' },
  { text: t('header.experience'), href: '#experience' },
  { text: t('header.contact'), href: '#contact' }
];
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.nav-content {
  display: flex;
  background: linear-gradient(90deg, color-mix(in srgb, var(--bg-secondary), transparent 25%), color-mix(in srgb, var(--bg-primary), transparent 25%));
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 8px 16px;
}

.navbar-brand {
  color: var(--text-active);
  width: 30px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: auto;
}

.navbar-link {
  color: var(--text-primary);
  opacity: 0.8;

  &:hover,
  &.active {
    opacity: 1;
  }
}

.flag {
  width: 20px;
  height: 10px;
  border-radius: 2px;
}
</style>
