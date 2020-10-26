import Vue from "vue";
import VueI18n from "vue-i18n";
import BlogLangs from "./blogs/lang";
import UserLangs from "./users/lang";

Vue.use(VueI18n);

const defaultMessages = {
  en: {
    welcomeMsg: "Chainels multi-language application in Vue",
    guide:
      "For a guide and recipes on how to configure / customize this project,",
    checkout: "check out the",
    localization: "Localization",
    pluralization: "Pluralization",
    "number-localization": "Number Localization",
    car: "car | cars", // Pluralization
    apple: "no apples | one apple | {count} apples"
  },
  bn: {
    welcomeMsg: "Aplicación multilingüe Chainels en Vue",
    guide:
      "Para una guía y recetas sobre cómo configurar / personalizar este proyecto,",
    checkout: "revisar la",
    localization: "Localización",
    pluralization: "Pluralización",
    "number-localization": "Localización de números",
    car: "coche | coches",
    apple: "sin manzanas | una manzana | {count} manzanas"
  }
};

const enLangs = Object.assign(BlogLangs.en, UserLangs.en, defaultMessages.en);
const bnLangs = Object.assign(BlogLangs.bn, UserLangs.bn, defaultMessages.bn);
const messages = { en: enLangs, bn: bnLangs };

console.log("message=", defaultMessages);
console.log("mergedMessages=", messages);

const dateTimeFormats = {
  en: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric"
    }
  },
  bn: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }
  }
};

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD"
    }
  },
  bn: {
    currency: {
      style: "currency",
      currency: "EUR",
      currencyDisplay: "symbol"
    }
  }
};

const i18n = new VueI18n({
  locale: "en", // set locale, could be the http header?
  fallbackLocale: "bn", // set fallback locale
  dateTimeFormats,
  numberFormats,
  // mergedMessages
  messages // set locale messages
});

export default i18n;
