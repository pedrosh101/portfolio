import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from './App';

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["pt", "en"],
    fallbackLng: "pt",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

