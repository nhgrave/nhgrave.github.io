<template>
  <Dropdown
    :modelValue="language"
    :items="languages"
    class="dropdown-language"
    @update:modelValue="setLanguage"
  >
    <template v-slot:label>
      <div class="flex items-center gap-1">
        <SvgHandler :icon="`flags/${language.flag}`" class="flag-icon" />
        <span>{{ language.code }}</span>
      </div>
    </template>
    <template v-slot="{ item }">
      <div class="flex items-center gap-1">
        <SvgHandler :icon="`flags/${item.flag}`" class="flag-icon" />
        <span>{{ item.code }}</span>
      </div>
    </template>
  </Dropdown>
</template>

<script setup>
import Dropdown from '#components/Shared/Dropdown.vue';
import SvgHandler from '#components/Shared/SvgHandler.vue';
import useLanguage from '#composables/language';

const { languages, language, setLanguage } = useLanguage();
</script>

<style scoped lang="scss">
.dropdown-language {
  :deep(.dropdown-button) {
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  :deep(.dropdown-content) {
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }
}

.flag-icon {
  height: 12px;
}
</style>
