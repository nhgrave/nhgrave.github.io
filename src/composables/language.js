import { readonly, ref } from "vue";
import useI18n from "./i18n";

const languages = [
  { code: 'EN', name: 'English', flag: 'united-states' },
  { code: 'ES', name: 'Español', flag: 'spain' },
  { code: 'PT', name: 'Portugues', flag: 'brazil' },
];

const language = ref(languages[0]);

export default function useLanguage() {
  function setInitialLanguage() {
    const language = localStorage.getItem('language') || navigator.language || navigator.userLanguage || 'EN'
    setLanguageByCode(language);
  }

  function setLanguage(lang) {
    if (languages.includes(lang)) {
      language.value = lang;

      const { setLocale } = useI18n();
      setLocale(language.value.code.toLowerCase());
      document.documentElement.setAttribute('lang', language.value.code.toLowerCase());
      localStorage.setItem('language', language.value.code);
    } else {
      throw new Error(`Language code "${lang.code || lang}" is not allowed`);
    }
  };

  function setLanguageByCode(code) {
    let lang = code.toUpperCase();
    if (lang.split('-').length > 1) {
      lang = lang.split('-')[0];
    }
    const language = languages.find(language => language.code === lang);
    setLanguage(language);
  }

  return {
    languages,
    language: readonly(language),
    setLanguage,
    setLanguageByCode,
    setInitialLanguage,
  };
}
