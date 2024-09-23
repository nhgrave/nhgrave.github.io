<template>
  <div class="contact-section" id="contact">
    <div class="container">
      <h2 class="title">Contact</h2>

      <div class="contact-content">
        <a href="mailto:nyko-23@hotmail.com" class="contact-item">
          <SvgEmail class="svg-icon" />
          nyko-23@hotmail.com
        </a>

        <a href="https://www.linkedin.com/in/nicolas-grave-97abb6114" class="contact-item">
          <SvgLinkedin class="svg-icon" />
          Linkedin
        </a>

        <a href="https://github.com/nhgrave" class="contact-item">
          <SvgGithub class="svg-icon" />
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgEmail from '@/assets/icons/email.svg';
import SvgLinkedin from '@/assets/icons/linkedin.svg';
import SvgGithub from '@/assets/icons/github.svg';
</script>

<style scoped lang="scss">
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

.svg-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-primary);
}
</style>
