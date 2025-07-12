<template>
  <div class="navbar">
    <div class="container">
      <div class="nav-content" :class="{ 'open-menu': openMenu }">
        <a href="#home-section" v-scroll-to="'#home-section'" class="navbar-brand" aria-label="Navigate to home section">
          <SvgHandler icon="codeblock" />
        </a>

        <div class="navbar-menu-toggle">
          <SvgHandler icon="menu" @click="toggleMenu" />
        </div>

        <div class="navbar-menu-warpper">
          <div class="navbar-menu">
            <a v-for="item in items" :key="item.href" :href="item.href" v-scroll-to="item.href" @click="closeMenu" class="navbar-link">
              {{ item.text }}
            </a>
          </div>

          <div class="social-links">
            <a v-for="item in socialItems" :key="item.href" :href="item.href" target="blank" @click="closeMenu" class="social-link" :aria-label="`Navigate to ${item.icon}`">
              <SvgHandler :icon="item.icon" :style="{width: '20px', height: '20px'}"/>
            </a>
          </div>

          <div class="separator"></div>

          <DropdownLanguage class="language-dropdown" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import SvgHandler from '#components/Shared/SvgHandler.vue';
import DropdownLanguage from '#components/App/DropdownLanguage.vue';
import useI18n from '#composables/i18n.js';

const { t } = useI18n();

const items = [
  { text: t('header.about'), href: '#about' },
  { text: t('header.experience'), href: '#experience' },
  { text: t('header.contact'), href: '#contact' }
];

const socialItems = [
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/nicolas-grave' },
  { icon: 'github', href: 'https://github.com/nhgrave' }
];

const openMenu = ref(false);
const overflowMenu = ref('hidden');

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});

function toggleMenu() {
  openMenu.value = !openMenu.value;

  if (openMenu.value) {
    setTimeout(() => {
      overflowMenu.value = 'visible';
    }, 300);
  } else {
    overflowMenu.value = 'hidden';
  }
}

function closeMenu() {
  if (openMenu.value) toggleMenu();
}

function onResize() {
  if (window.innerWidth > 768) {
    closeMenu();
  }
}
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
  flex-wrap: wrap;
  background: linear-gradient(90deg, color-mix(in srgb, var(--bg-secondary), transparent 25%), color-mix(in srgb, var(--bg-primary), transparent 25%));
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 8px 16px;

  &.open-menu {
    .navbar-menu-warpper {
      height: auto;
    }
  }
}

.navbar-brand {
  display: flex;
  color: var(--text-active);

  svg {
    width: 30px;
  }
}

.navbar-menu-toggle {
  display: flex;
  margin-left: auto;
  cursor: pointer;

  @include screen-up-from-md {
    display: none;
  }

  svg {
    width: 30px;
  }
}

.navbar-menu-warpper {
  display: flex;
  flex-direction: column;
  height: 0;
  width: 100%;
  interpolate-size: allow-keywords;
  transition: height 0.3s ease-in-out;
  overflow: v-bind(overflowMenu);

  @include screen-up-from-md {
    position: unset;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: auto;
    width: auto;
    background: unset;
    overflow: unset;
  }
}

.navbar-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0px;

  @include screen-up-from-md {
    flex-direction: row;
    align-items: center;
    margin: 0px auto 0px 1rem;
  }
}

.navbar-link {
  color: var(--text-primary);
  opacity: 0.8;
  padding: 0.5rem 0px;

  &:hover,
  &.active {
    opacity: 1;
  }
}

.social-links {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;

  @include screen-up-from-md {
    align-items: center;
  }
}

.social-link {
  color: var(--text-primary);

  &:hover {
    color: var(--text-active);
  }
}

.separator {
  display: none;

  @include screen-up-from-md {
    display: flex;
    align-items: center;
    width: 2px;
    height: 25px;
    background: var(--bg-tertiary);
    opacity: 0.8;
  }
}

.language-dropdown {
  width: auto;
  margin: 1rem auto 0px;

  @include screen-up-from-md {
    margin: 0px;
  }
}

.flag {
  width: 20px;
  height: 10px;
  border-radius: 2px;
}
</style>
