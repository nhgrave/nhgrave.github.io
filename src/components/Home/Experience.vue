<template>
  <div class="experience-section" id="experience">
    <div class="container">
      <h2 class="title">{{ t('experience.title') }}</h2>

      <div class="experience-content">
        <!-- List -->
        <div v-for="(item, index) in items" :key="index" class="experience-item">
          <span class="year-badge">{{ item.year }}</span>
          <h3 class="experience-position">{{ item.position }}</h3>
          <CustomLink :to="item.companyWebSite" external class="experience-company">{{ item.company }}</CustomLink>
          <p class="experience-description">{{ item.description }}</p>
          <ul class="experience-skills">
            <li v-for="skill in item.skills" :key="skill">
              <span class="experience-skill-badge">{{ skill }}</span>
            </li>
          </ul>
          <CustomLink v-if="item.fullDescription" prevent @click="showModal(item)" class="experience-show-more">
            {{ t('experience.showMore') }}
          </CustomLink>
        </div>

        <!-- Modal -->
         <Modal ref="modalRef">
          <template #header>
            <h3 class="modal-title">{{ selectedItem.company }}</h3>
          </template>
          <p v-html="selectedItem.fullDescription" class="experience-full-description" />
         </Modal>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomLink from '#components/Shared/CustomLink.vue';
import useI18n from '#composables/i18n.js';
import Modal from '#components/Shared/Modal.vue';

const { t } = useI18n();

const items = [
  {
    year: 2026,
    position: t('experience.clubedovalor.position'),
    company: t('experience.clubedovalor.company'),
    companyWebSite: 'https://www.clubedovalor.com.br',
    description: t('experience.clubedovalor.description'),
    fullDescription: t('experience.clubedovalor.fullDescription'),
    skills: ['PHP', 'MySQL', 'Git', 'CI/CD']
  },
  {
    year: 2021,
    position: t('experience.nelogica.position'),
    company: t('experience.nelogica.company'),
    companyWebSite: 'https://www.nelogica.com.br',
    description: t('experience.nelogica.description'),
    fullDescription: t('experience.nelogica.fullDescription'),
    skills: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'SCSS', 'HTML', 'CSS', 'Git', 'CI/CD']
  },
  {
    year: 2017,
    position: t('experience.zanshin.position'),
    company: t('experience.zanshin.company'),
    companyWebSite: 'https://www.zanshinsoftware.com',
    description: t('experience.zanshin.description'),
    fullDescription: t('experience.zanshin.fullDescription'),
    skills: ['Ruby on Rails', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MySQL', 'PostgreSQL', 'Git']
  },
  {
    year: 2014,
    position: t('experience.29sul.position'),
    company: t('experience.29sul.company'),
    companyWebSite: 'https://www.linkedin.com/company/29sul-tecnologia-da-informacao/about',
    description: t('experience.29sul.description'),
    skills: ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MySQL', 'Git']
  },
]

const modalRef = ref(null);
const selectedItem = ref(null);

function showModal(item) {
  selectedItem.value = item;

  modalRef.value.openModal();
}
</script>

<style lang="scss" scoped>
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
  margin: auto;
}

.experience-item {
  padding-left: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

}

.experience-item:before {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  background: var(--bg-active);
  border-radius: 50%;
  position: absolute;
  top: 0.75rem;
  left: 0;
  transform: translate(-50%, -0.6rem);
}

.experience-item:after {
  content: '';
  display: block;
  width: 1px;
  height: calc(100% - 2rem);
  background: var(--text-primary);
  position: absolute;
  left: 0;
  bottom: 0;
}

.year-badge {
  padding: 2px 12px 2px 4px;
  background: var(--bg-tertiary);
  display: flex;
  clip-path: polygon(0% 0%, 42px 0%, 100% 50%, 42px 100%, 0% 100%);
  max-width: fit-content;
}

.experience-position {
  font-size: 1.5rem;
  font-weight: 600;
}

.experience-company {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--text-active);
  }
}

.experience-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  & > li {
    display: flex;
  }
}

.experience-skill-badge {
  background: var(--bg-tertiary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.experience-show-more {
  color: var(--text-active);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.8rem;

  &:hover {
    color: var(--text-active-bright);
  }
}

.experience-full-description {
  &:deep(a) {
    color: var(--text-active);
    transition: color 0.3s;

    &:hover {
      color: var(--text-active-bright);
    }
  }
}
</style>
