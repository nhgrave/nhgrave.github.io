<template>
  <div class="experience-section" id="experience">
    <div class="container">
      <h2 class="title">Experience</h2>

      <div class="experience-content">
        <div v-for="(item, index) in items" :key="index" class="experience-item">
          <span class="year-badge">{{ item.year }}</span>
          <h3 class="experience-position">{{ item.position }}</h3>
          <h4 class="experience-company">{{ item.company }}</h4>
          <p class="experience-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    year: 2021,
    position: 'Middle Frontend Web Developer',
    company: 'Nelogica',
    description: 'Working with VueJS and React in a frontend-focused team, I participated in the maintenance of 3 e-commerce sites, the creation of 2 additional e-commerce sites, and 3 static websites. I implemented PIX payments and WebSocket integration in the projects.'
  },
  {
    year: 2017,
    position: 'Middle Full Stack Web Developer',
    company: 'Zanshin Software',
    description: 'Working with Ruby on Rails and JavaScript in a team of 2 developers and maintaining 7 projects, I participated in the implementation of VueJS in part of a system, integration with CENP, integration with payment gateways (Mecado Pago + Paypal), rebranding of system layouts, and contributed financial management reports for users.'
  },
  {
    year: 2014,
    position: 'Junior Full Stack Web Developer',
    company: '29Sul',
    description: 'Working with Ruby on Rails and JavaScript in a team of 3 developers, we maintained a total of 5 software applications, which included management tools for advertising agencies, project management, financial management, and 2 internal management systems, all commercialized as SaaS. I also participated in the implementation of CNAB and OFX bank file remittance and return.'
  }
];
</script>

<style scoped lang="scss">
.experience-section {
  background: var(--bg-secondary);
  padding: 80px 0;
}

.title {
  font-size: var(--fs-title);
  font-weight: var(--fw-title);
  margin: 0 0 40px 0;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: calc(var(--container-max-width) - 200px);
  padding: 0 0 0 80px;
  margin: auto;
}

.experience-item {
  padding-left: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:before {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    background: var(--bg-active);
    border-radius: 50%;
    // filter: blur(10px);
    position: absolute;
    top: 0.75rem;
    left: 0;
    transform: translate(-50%, -0.6rem)
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: calc(100% - 2rem);
    background: var(--text-primary);
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.year-badge {
  padding: 2px 12px 2px 4px;
  background: var(--bg-tertiary);
  position: absolute;
  left: -1.5rem;
  top: 0;
  transform: translate(-100%, -2px);
  display: flex;
  clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
}

.experience-position {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
