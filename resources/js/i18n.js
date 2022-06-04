const lngs = {
  en: { nativeName: 'English' },
  sk: { nativeName: 'Slovenčina' }
};

const rerender = () => {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $('body').localize();
}

$(function () {
  // use plugins and options as needed, for options, detail see
  // https://www.i18next.com
  i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(i18nextBrowserLanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      fallbackLng: 'en',
      resources: {
        en: {
          translation: {
            header: {
              about: 'About me',
              education: 'Education',
              jobs: 'Jobs',
              skills: 'Skills',
            },
            homepage: {
              more: 'More about me'
            },
            about: {
              title: 'About me',
              downloadCV: 'Here you can download my CV',
              clickDownload: 'Download CV',
            },
            education: {
              title: 'Education',
              gymnasium: 'Gymnasium',
              secondary: 'Secondary education',
              informatics: 'Informatics',
              bachelor: 'Bachelor\'s degree',
              softwareSystems: 'Software systems',
              master: 'Master\'s degree',
            },
            jobs: {
              title: 'JOBS',
              softwareDeveloper: 'Software developer',
              anasoftAbout: 'Development of a system for BlockChain and Digital signature.',
              softwareArchitecture: 'Software architecture',
              androidDeveloper: 'Android developer',
              qbswAbout: 'Design and development of Android applications and Samsung Dex applications.',
              uxDesign: 'UX/UI mobile design',
              userTest: 'Tests with users',
              internationTeam: 'International team',
              accentureAbout: 'Web applications for wagons management development',
            },
            commom: {
              more: 'More',
            }
          }
        },
        sk: {
          translation: {
            header: {
              about: 'Niečo o mne',
              education: 'Vzdelanie',
              jobs: 'Práca',
              skills: 'Znalosti',
            },
            homepage: {
              more: 'Zistiť viac'
            },
            about: {
              title: 'Niečo o mne',
              downloadCV: 'Životopis na stiahnutie',
              clickDownload: 'Zobraziť životopis',
            },
            education: {
              title: 'Moje vzdelanie',
              gymnasium: 'Gymnázium',
              secondary: 'Stredoškolské vzdelanie',
              informatics: 'Informatika',
              bachelor: 'Ukončené Bc. vzdelanie',
              softwareSystems: 'Int. softvérové systémy',
              master: 'Ukončené Ing. vzdelanie',
            },
            jobs: {
              title: 'PRACOVNÉ SKÚSENOSTI',
              softwareDeveloper: 'Softvérový vývojár',
              anasoftAbout: 'Vytvorenie systému kombinujúceho BlockChain a digitálny podpis.',
              softwareArchitecture: 'Softvérová architektúra',
              androidDeveloper: 'Android vývojár',
              qbswAbout: 'Vývoj a implementácia Android aplikácií a Samsung Dex aplikácií.',
              uxDesign: 'UX/UI mobilný dizajn',
              userTest: 'Používateľské testy',
              internationTeam: 'Medzinárodný tím - ENG',
              accentureAbout: 'Vývoj webových aplikácií pre správu a manažment wagónov.',
            },
            commom: {
              more: 'Viac',
            }
          }
        }
      }
    }, (err, t) => {
      if (err) return console.error(err);

      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });

      // fill language switcher
      Object.keys(lngs).map((lng) => {
        const opt = new Option(lngs[lng].nativeName, lng);
        if (lng === i18next.resolvedLanguage) {
          opt.setAttribute("selected", "selected");
        }
        $('#languageSwitcher').append(opt);
      });
      $('#languageSwitcher').change((a, b, c) => {
        const chosenLng = $(this).find("option:selected").attr('value');
        i18next.changeLanguage(chosenLng, () => {
          rerender();
        });
      });

      rerender();
    });
});
