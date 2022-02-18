import { getLanguageDetector } from '@/utils/localStorage.utils';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import auth_en from './auth/auth-en.json';
import auth_vi from './auth/auth-vi.json';
import common_en from './common/common-en.json';
import common_vi from './common/common-vi.json';
import review_en from './review/review-en.json';
import review_vi from './review/review-vi.json';
import validations_en from './validations/validations-en.json';
import validations_vi from './validations/validations-vi.json';

// const cookies = new Cookies();

// const customLanguageDetector = {
//     init: Function.prototype,
//     type: 'languageDetector',
//     async: true, // flags below detection to be async
//     detect: async (callback: any) => {
//         const savedDataJSON = cookies.get('initLanguage');
//         const lng = savedDataJSON ? savedDataJSON : null;
//         const selectLanguage = lng || 'en';
//         console.log(selectLanguage);
//         callback(selectLanguage);
//     },
//     cacheUserLanguage: () => {},
// };

i18n
    // @ts-ignore
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: getLanguageDetector() || 'vi',
        fallbackLng: getLanguageDetector() || 'vi',
        resources: {
            en: {
                common: common_en,
                auth: auth_en,
                validations: validations_en,
                review: review_en,
            },
            vi: {
                common: common_vi,
                auth: auth_vi,
                validations: validations_vi,
                review: review_vi,
            },
        },

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        // debug: true,

        cache: {
            enabled: true,
        },

        interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        },
    });

export default i18n;
