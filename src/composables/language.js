import { readonly, ref } from "vue";
import useI18n from "./i18n";

const languages = [
  { code: 'EN', name: 'English', flag: 'united-kindom' },
  { code: 'ES', name: 'Español', flag: 'spain' },
  { code: 'PT', name: 'Portugues', flag: 'portugal' },
];

const language = ref(languages[0]);

export default function useLanguage() {
  function setLanguage(lang) {
    if (languages.includes(lang)) {
      language.value = lang;

      const { setLocale } = useI18n();
      setLocale(language.value.code.toLowerCase());
    } else {
      throw new Error(`Language code "${lang.code || lang}" is not allowed`);
    }
  };

  function setLanguageByCode(code) {
    const language = languages.find(language => language.code === code.toUpperCase());
    setLanguage(language);
  }

  return {
    languages,
    language: readonly(language),
    setLanguage,
    setLanguageByCode,
  };
}
