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
              aboutProffesions: 'After I graduated from the Faculty of informatics and information technologies at Slovak technical university with a Master\'s degree, I continued improving my skills in the IT-sphere. I collected first real work experiences also during my study and when it was over, I took a path of web development. My favorite part of the application development is building a FrontEnd, UI, and blocks that are responsible for interaction with the end-user of the application also glad to use and incorporate new progressive technologies, that are improving my knowledge.',
              aboutMe: 'Besides informatics, I am also developing myself in other life\'s aspects. I like to go walking in nature, travel and explore new places. In my free time I also cycle, play guitar or see some interesting movie. I don\'t despise a good book, ideally from a motivation or esoteric genre.'
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
              timeFrame: '12/2020 - Present',
              softwareDeveloper: 'App developer',
              anasoftAbout: 'Development of a system for BlockChain and Digital signature.',
              softwareArchitecture: 'Software architecture',
              androidDeveloper: 'Android developer',
              qbswAbout: 'Design and development of Android applications and Samsung Dex applications.',
              uxDesign: 'UX/UI mobile design',
              userTest: 'Tests with users',
              internationTeam: 'International team',
              accentureAbout: 'Web applications for wagons management development.',
            },
            skills: {
              title: 'Skills and Knowledge',
              quote: 'If you want to build up a large company, first build up yourself.',
              english: 'English (B2)',
              german: 'German (B1/2)',
              slovak: 'Slovak (C2)',
              cssPreprocessors: 'CSS Preprocessors',
              uiDesign: 'UI/UX design',
              languges: 'Language knowledge',
              otherKnowledge: 'I have also an experience with',
            },
            quotes: {
                title: 'Favorite quotes',
            },
            contact: {
              title: 'Contact',
              quote: 'Skill is fine, and genius is splendid, but the right contacts are more valuable than either.',
              allRights: 'All rights reserved.',
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
              aboutProffesions: 'Po úspešnom dokončení štúdia na Fakulte informatiky a informačných technológií (FIIT STU) a zisku titulu Ing. z informačných systémov som pokračoval v prehlbovaní svojich znalostí vo sfére IT. Prvé pracovné skúsenosti som nazbieral už počas štúdia, neskôr som sa rozhodol zamerať na vývoj webových aplikácií. Najviac ma v profesnej sfére baví a zaujíma vývoj a implementácia aplikácií, najmä ich grafického rozhrania, kde sa môžem naplno angažovať. Pri práci rád spoznávam nové a progresívne technológie, ktoré zvyšujú moje možnosti.',
              aboutMe: 'Popri informatike sa samozrejme venujem aj iným aspektom života. Milujem prechádzky v prírode, cestovanie a s tým spojené objavovanie nových miest. Vo voľnom čase sa zaujímam o históriu, zahrám si na gitare či prevetrám bicykel. Okrem toho nepohrdnem dobrou knihou, ideálne motivačnou alebo ezoterickou.',
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
              timeFrame: '12/2020 - Doteraz',
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
            skills: {
              title: 'Znalosti a schopnosti',
              quote: 'Ak chcete vybudovať veľký podnik, vybudujte najprv seba.',
              english: 'Angličtina (B2)',
              german: 'Nemčina (B1/2)',
              slovak: 'Slovenčina (C2)',
              cssPreprocessors: 'CSS preprocesory',
              uiDesign: 'UI/UX dizajn',
              languges: 'JAZYKOVÉ ZNALOSTI',
              otherKnowledge: 'OKREM TOHO SOM PRIČUCHOL AJ K'
            },
            quotes: {
                title: 'Obľúbené citáty',
            },
            contact: {
              title: 'Kontakt',
              quote: 'Zručnosť je výborná a genialita je ohromná, ale správne kontakty sú cennejšie ako jedno aj druhé.',
              allRights: 'Všetky práva vyhradené.',
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
