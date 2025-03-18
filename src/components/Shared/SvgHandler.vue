<template>
  <component :is="dynamicComponent" class="icon" />
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});

const icons = import.meta.glob(`../../assets/icons/**/*.svg`);

const dynamicComponent = computed(() => {
  return defineAsyncComponent(icons[`../../assets/icons/${props.icon}.svg`]);
});
</script>
