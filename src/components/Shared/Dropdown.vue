<template>
  <div class="dropdown" :class="{ open: isOpen }">
    <button class="dropdown-button" @click="isOpen = !isOpen">
      <slot v-if="$slots.label" name="label"></slot>
      <span v-else>{{ label || 'Select' }}</span>
      <SvgHandler icon="arrow" class="arrow-icon" />
    </button>
    <div v-if="isOpen" class="dropdown-content">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="() => change(item)"
        class="dropdown-item"
      >
        <slot :item="item"></slot>
        <SvgHandler
          v-if="JSON.stringify(item) === JSON.stringify(modelValue)"
          icon="check"
          class="check-icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SvgHandler from '#components/Shared/SvgHandler.vue';

defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
  }
});

const emit = defineEmits([
  'update:modelValue',
]);

const isOpen = ref(false);

function change(item) {
  isOpen.value = false;
  emit('update:modelValue', item);
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;

  &.open {
    .arrow-icon {
      transform: rotate(0deg);
    }
  }
}

.dropdown-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background: var(--bg-primary-invert);
  cursor: pointer;
}

.dropdown-content {
  display: block;
  position: absolute;
  min-width: 120px;
  background: var(--bg-primary-invert);
  color: var(--text-primary-invert);
  box-shadow: var(--shadow);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
}

.dropdown-item {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
  }
}

.arrow-icon {
  width: 16px;
  transition: transform 0.3s ease;
  transform: rotate(180deg);
}

.check-icon {
  width: 16px;
  height: 18px;
}
</style>
