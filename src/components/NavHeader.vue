<template>
  <div class="navbar">
    <div class="container">
      <div class="nav-content">
        <CodeBlockSvg class="navbar-brand" />

        <div class="navbar-menu">
          <a
            v-for="link in links"
            :key="link"
            :href="`#${link.toLowerCase()}`"
            @click="scrollTo"
            class="navbar-link"
          >
            {{ link }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeBlockSvg from '@/assets/icons/codeblock.svg';

const links = [
  'About',
  'Experience',
  'Contact'
];

function scrollTo(e: MouseEvent) {
  e.preventDefault();

  const target =  e.target as HTMLAnchorElement;
  const section = document.querySelector(target.getAttribute('href') as string);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}
</script>


<style scoped lang="scss">
.navbar {
  padding: 0.5rem 1rem;
  background: #34353A;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.nav-content {
  display: flex;
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
  color: #FFF;
  opacity: 0.8;

  &:hover, &.active {
    opacity: 1;
  }
}
</style>
