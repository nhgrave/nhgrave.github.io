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

    <img src="@/assets/images/profile.jpg" alt="Profile image" title="Profile image" class="profile-image">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hero-section {
  background: #34353A;
  height: min(max(100svh, 400px), 800px);
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;
  box-shadow: 0 8px 30px #303030;

  @include md {
    align-items: unset;
  }
}

.title {
  display: inline;
  color: var(--text-active);
  font-size: var(--fs-title);
}

.profile-image {
  width: 250px;
  aspect-ratio: 1;
  background-color: #f0f0f0;
  // clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border-radius: 50%;

  @include md {
    width: 350px;
    position: absolute;
    right: 50%;
    transform: translate(100%, 0);
  }

  @include lg {
    width: 460px;
  }
}
</style>
