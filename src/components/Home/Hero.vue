<template>
  <div class="hero-section" id="hero">
    <div class="presentation">
      <div class="container">
        I'm <h1 class="title">Nicolas Grave</h1>
        <br>
        <br>
        Full Stack Web Developer
      </div>
    </div>

    <img src="/assets/images/profile.jpg" alt="Profile image" title="Profile image" class="profile-image">
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.hero-section {
  background: var(--bg-hero);
  height: min(max(100svh, 400px), 800px);
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;
  box-shadow: var(--shadow);
}

.title {
  display: inline;
  color: var(--text-active);
  font-size: var(--fs-title);
}

.profile-image {
  width: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: var(--shadow);
}

@media (min-width: 768px) {
  .hero-section {
    align-items: unset;
  }

  .profile-image {
    width: 280px;
    position: absolute;
    right: 50%;
    transform: translate(120%, 0);
  }
}

@media (min-width: 992px) {
  .profile-image {
    width: 300px;
  }
}
</style>
