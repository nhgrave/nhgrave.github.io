<template>
  <a :href="to" :target="target" class="custom-link" @click="handleClick">
    <slot></slot>
    <SvgHandler v-if="external" icon="external" class="external-icon"/>
  </a>
</template>

<script setup>
import { computed } from 'vue';
import SvgHandler from './SvgHandler.vue';

const props = defineProps({
  to: {
    type: String,
    default: '#'
  },
  external: {
    type: Boolean,
    default: false
  },
  prevent: {
    type: Boolean,
    default: false
  }
});

const target = computed(() => (props.external ? '_blank' : '_self'));

function handleClick(event) {
  if (props.prevent) {
    event.preventDefault();
  }
}
</script>

<style lang="scss" scoped>
.custom-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  width: fit-content;
}

.external-icon {
  width: 1em;
}
</style>
