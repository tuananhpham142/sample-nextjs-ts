export const LANGUAGE_DETECTOR_CONFIG_KEY =
  process.env.REACT_APP_LANGUAGE_DETECTOR_CONFIG_KEY || "i18nAcceptLanguage";

// const localStorageAddItem = ({ key, value }: { key: string; value: string }) => {
//     return typeof window !== 'undefined' ? localStorage.setItem(key, value) : undefined;
// };

export const localStorageGetItem = (key: string) => {
  return typeof window !== "undefined" ? localStorage.getItem(key) : undefined;
};

// const localStorageRemoveItem = (key: string) => {
//     return typeof window !== 'undefined' ? localStorage.removeItem(key) : undefined;
// };

export const getLanguageDetector = () =>
  localStorageGetItem(LANGUAGE_DETECTOR_CONFIG_KEY) || "vi";

// export const setLanguageDetector = (value: string) => {
//     localStorageAddItem({ key: LANGUAGE_DETECTOR_CONFIG_KEY, value });
// };

export function setLanguage(lang: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      LANGUAGE_DETECTOR_CONFIG_KEY,
      JSON.stringify({ selectedLang: lang })
    );
    window.location.reload();
  }
}

// export const clearLocalStorage = () => {
//     if (typeof window !== 'undefined') {
//         localStorage.clear();
//     }
// };
