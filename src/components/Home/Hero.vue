<template>
  <div class="hero-section" id="hero">
    <div class="presentation">
      <div class="container">
        {{ t('home.presentation') }} <h1 class="title">Nicolas Grave</h1>
        <br>
        <br>
        <TypeAnimation
          :key="locale"
          :sequence="professions"
          infinity
        />
        <br>
        <br>
        <a href="https://drive.google.com/file/d/10CrzbpE2-TRKIUHS0IQ0XN4KrjFArUHN/view?usp=sharing" target="_blank" class="btn btn-primary">
          CV
        </a>
      </div>
    </div>

    <img src="/assets/images/profile.jpg" alt="Profile image" title="Profile image" class="profile-image">
  </div>
</template>

<script setup>
import TypeAnimation from '#components/Shared/TypeAnimation.vue';
import useI18n from '#composables/i18n.js';

const { t, locale } = useI18n();

const professions = t('home.profession');
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

@keyframes colorChange {
    0% { color: var(--text-active); }
    50% { color: var(--text-active-bright); }
    100% { color: var(--text-active); }
}

.title {
  display: inline;
  color: var(--text-active);
  font-size: var(--fs-title);
  animation: colorChange 5s infinite;
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

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: var(--bg-primary-invert);
  color: var(--text-primary-invert);
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  min-width: 120px;
  text-align: center;
  font-weight: 600;
}

.btn-primary {
  background-color: var(--bg-active);
  &:hover {
    background-color: var(--bg-active-bright);
  }
}
</style>
