<template>
  <div class="navbar">
    <div class="container">
      <div class="nav-content">
        <embed src="/assets/icons/codeblock.svg" type="image/svg+xml" class="navbar-brand">

        <div class="navbar-menu">
          <a v-for="item in items" :key="item.href" :href="item.href" :data-scroll-to="item.href" class="navbar-link">
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { text: 'About', href: '#about' },
  { text: 'Experience', href: '#experience' },
  { text: 'Contact', href: '#contact' }
]
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
</style>
