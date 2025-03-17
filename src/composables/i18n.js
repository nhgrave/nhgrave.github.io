import { computed, readonly, ref } from "vue";
import { I18n } from "i18n-js";

const i18n = new I18n();

i18n.locale = '';

const currentLocale = ref('');

i18n.onChange(() => {
  if (currentLocale.value !== i18n.locale) {
    loadTranslations(i18n.locale);
  }
});

async function loadTranslations(locale) {
  const module = await import(`../locales/${locale}.json`);

  i18n.store({
    [locale]: module.default,
  });

  currentLocale.value = locale;
}

export default function useI18n() {

  function translate(key) {
    const obj = computed(() => {
      return currentLocale.value && i18n.t(key);
    });

    return obj;
  }

  function setLocale(locale) {
    i18n.locale = locale;
  }

  return {
    t: translate,
    locale: readonly(currentLocale),
    setLocale,
  }
}
