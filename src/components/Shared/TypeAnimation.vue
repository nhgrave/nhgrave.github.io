<template>
  <span>
    {{ displayText }}<span class="console">_</span>
  </span>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  sequence: {
    type: [ String, Array ],
    required: true
  },
  infinity: {
    type: Boolean,
    default: false
  },
});

const displayText = ref('');
const currentSequence = ref(Array.isArray(props.sequence) ? props.sequence : [props.sequence]);
const text = ref('');
const textCount = ref(1);
const interval = ref(null);
const walk = ref(1);

watch(text, (newText) => {
  if (newText === '') {
    clearInterval(interval.value);
    return;
  }

  interval.value = setInterval(() => {
    displayText.value = newText.substring(0, textCount.value);
    textCount.value += walk.value;
  }, 150);
});

watch(textCount, (newCount) => {
  if (newCount < 0) {
    currentSequence.value.shift();
    currentSequence.value.push(text.value);

    text.value = '';

    setTimeout(() => {
      walk.value = 1;
      text.value = currentSequence.value[0];
    }, 600);
  } else if (textCount.value > text.value.length) {
    text.value = '';

    setTimeout(() => {
      walk.value = -1;
      text.value = currentSequence.value[0];
    }, 1500);
  }
});

onMounted(() => {
  text.value = currentSequence.value[0];
});
</script>

<style lang="scss" scoped>
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.console {
  animation: blink 1s step-end infinite;
}
</style>
