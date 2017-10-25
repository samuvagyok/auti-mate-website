function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function setLangToEng() {
  createCookie("lang","en");
  location.reload();
}

function setLangToHu() {
  createCookie("lang","hu");
  location.reload();
}

jQuery(function($) {

  var lang = readCookie("lang");
  if (lang) {
    var flag;
    switch (lang) {
      case "hu":
        document.getElementById('flag-hu').style.opacity = 0.3;
        flag = document.getElementById('flag-en');
        if (flag.addEventListener) {  // all browsers except IE before version 9
          flag.addEventListener("click", setLangToEng, false);
        } else {
          if (flag.attachEvent) {   // IE before version 9
            flag.attachEvent("click", setLangToEng);
          }
        }
        break;
      default:
        document.getElementById('flag-en').style.opacity = 0.3;
        flag = document.getElementById('flag-hu');
        if (flag.addEventListener) {  // all browsers except IE before version 9
          flag.addEventListener("click", setLangToHu, false);
        } else {
          if (flag.attachEvent) {   // IE before version 9
            flag.attachEvent("click", setLangToHu);
          }
        }
    }
    flag.style.cursor = "pointer";
  } else {
    lang = navigator.language || navigator.userLanguage;
    if (lang!="hu" && lang!="en") {
      lang = "en";
    }
    createCookie("lang",lang);
  }

  $.i18n({
    locale: lang
  });
  $.i18n().load({
    'hu': {
      "subtitle": "Készségfejlesztő játékok gyerekeknek.",
      "h1": "Kinek szólnak a játékok?",
      "p1": "Játékainkat elsősorban általános iskolás gyerekeknek ajánljuk, de fontosnak tartjuk, hogy bárki számára szórakoztatóak és kihívásteliek legyenek.",
      "h2": "Autizmus spektrum-barát kezelőfelület",
      "p2": "A játékok tervezésekor kiemelt figyelmet kapnak az autizmussal élő gyerekek. Célunk, hogy olyan játékokat készítsünk, amik az ő igényeiknek megfelelően ingerszegényebbek, érthetőbbek és bejósolhatóbbak más játékokhoz képest.",
      "h3": "Hasznos időtöltés a gép előtt",
      "p3": "Hisszük, hogy a gyerekek számítógép előtt töltött ideje nem csak szórakoztató, de hasznos is lehet számukra. Az Auti-mate játékok olyan kognitív képességeket gyakoroltatnak, amiket a mindennapi életben is folyamatosan használunk. Többek között ilyenek az észlelés, a figyelem és az emlékezés képességek.",
      "h4": "Rólunk",
      "p4": "Az Auti-mate Budapesten működő csapata sokéves tapasztalattal rendelkezik mind képességfejlesztés, mind szoftvertervezés területén. Többen közülünk autizmussal élő hozzátartozóinkon keresztül ismerjük az ezzel járó sajátosságokat. Szívügyünknek tekintjük, hogy megfelelő eszközök készítésével segítsük az autista emberekkel való foglalkozást, és támogassuk az érintett családokat.",
      "p4-2": "Jelenleg játékaink fejlesztés alatt állnak. Ha felkeltettük az érdeklődését, kövessen minket ",
      "p4-3":"Facebook oldalunkon",
      "p4-4":"keresztül!"
    },
    'en': {
      "subtitle": "Skill developmental games for children.",
      "h1": "Who should play our games?",
      "p1": "We recommend our games primarily for school age children, however our goal is to design a great gaming experience for everyone who is up for challenges.",
      "h2": "Autism friendly user interface",
      "p2": "While designing the games we dedicate special attention to kids on the autism spectrum. We reduce sensory input, adjust all information and instructions to be easy-to-understand, and form a predictable outline of all possible steps and outcomes.",
      "h3": "Useful screen time",
      "p3": "We believe screen time can be more than mere amusement. The Auti-mate games are for practicing cognitive skills used in everyday life, such as perception, attention and memory.",
      "h4": "About us",
      "p4": "The Auti-mate team is based in Budapest (HU) and built up from experienced product designers, software engineers and skills development experts. Most of us love a person with special needs or autism, we all have an understanding of the background coming with the condition. It’s our labor of love to create tools which take special needs improvement to the next level helping autistic people and their families to live a full life as much as possible.",
      "p4-2": "Our games are in progress. If you want to be updated about the latest developments or the first to know the news ",
      "p4-3":"follow us on Facebook!",
      "p4-4":" "
    }
  });
  $('body').i18n();
});
