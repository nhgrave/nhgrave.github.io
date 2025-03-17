<template>
  <div class="navbar">
    <div class="container">
      <div class="nav-content">
        <a href="#home-section" v-scroll-to="'#home-section'" aria-label="Home" class="navbar-brand">
          <embed src="/assets/icons/codeblock.svg" type="image/svg+xml">
        </a>

        <div class="navbar-menu">
          <a v-for="item in items" :key="item.href" :href="item.href" v-scroll-to="item.href" class="navbar-link">
            {{ item.text }}
          </a>
        </div>

        <div>
          <Dropdown
            :modelValue="language"
            :items="languages"
            @update:modelValue="setLanguage"
          >
            <template v-slot:label>
              <div class="flex items-center gap-1">
                <embed :src="language.flag" type="image/svg+xml" class="flag">
                <span>{{ language.code }}</span>
              </div>
            </template>
            <template v-slot="{ item }">
              <div class="flex items-center gap-1">
                <embed :src="item.flag" type="image/svg+xml" class="flag">
                <span>{{ item.code }}</span>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dropdown from '#components/Shared/Dropdown.vue';
import useI18n from '#composables/i18n.js';
import useLanguage from '#composables/language';

const { languages, language, setLanguage } = useLanguage();
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
