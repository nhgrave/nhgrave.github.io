<template>
  <Teleport defer to="#modals">
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container">
        <header class="modal-header">
          <slot name="header" />
          <SvgHandler icon="close" class="modal-close-button" @click="closeModal" />
        </header>

        <section class="modal-body">
          <slot />
        </section>

        <footer class="modal-footer" v-if="$slots.footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import SvgHandler from './SvgHandler.vue';

const isVisible = ref(false);

function closeModal() {
  isVisible.value = false;
}

function openModal() {
  isVisible.value = true;
}

defineExpose({ openModal, closeModal });
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--modal-index);
}

.modal-container {
  background: var(--bg-secondary);
  border-radius: 8px;
  width: 100%;
  max-width: calc(100vw - 40px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (min-width: 900px) {
    max-width: 800px;
  }
}

.modal-header, .modal-footer {
  padding: 1rem;
  background: var(--bg-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-close-button {
  width: 32px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
}

.modal-body {
  padding: 1rem;
  color: var(--text-primary);
}

.modal-close-button:hover {
  color: var(--text-active);
}

.modal-header {
  border-bottom: 1px solid var(--text-primary);
}

.modal-footer {
  border-top: 1px solid var(--text-primary);
  justify-content: flex-end;
}

.modal-body {
  max-height: 70vh;
  overflow-y: auto;
}

// .modal-body::-webkit-scrollbar {
//   width: 8px;
// }

// .modal-body::-webkit-scrollbar-thumb {
//   background: var(--bg-secondary);
//   border-radius: 4px;
// }

// .modal-body::-webkit-scrollbar-thumb:hover {
//   background: var(--bg-active);
// }

// .modal-body::-webkit-scrollbar-track {
//   background: var(--bg-primary);
// }

// .modal-body::-webkit-scrollbar-track:hover {
//   background: var(--bg-primary);
// }

// .modal-body::-webkit-scrollbar-corner {
//   background: var(--bg-primary);
// }
</style>
