'use client';

import React, { useState, useEffect, useRef } from 'react';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import NewsletterBox from '@/components/NewsletterBox';
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaGlobe,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaChevronDown,
  FaArrowUp,
  FaQuoteLeft,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaShieldAlt,
  FaSolarPanel,
} from 'react-icons/fa';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


// ============================================================
// GOOGLE MAPS
// ============================================================

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/F48qRi7DURKG6pin9?g_st=awb';


// ============================================================
// SOCIAL HUB
// ============================================================

function SocialHub() {
  const networks = [
    {
      name: 'Facebook Douala',
      icon: <FaFacebook className="text-blue-600 text-2xl" />,
      link: 'https://www.facebook.com/share/1Ci6gUgwsN/',
      desc: 'Rejoignez notre communauté principale à Douala.',
    },
    {
      name: 'Facebook Yaoundé',
      icon: <FaFacebook className="text-blue-600 text-2xl" />,
      link:
        'https://www.facebook.com/profile.php?id=61563195851463&mibextid=ZbWKwL',
      desc: 'Suivez nos activités et actualités à Yaoundé.',
    },
    {
      name: 'LinkedIn Officiel',
      icon: <FaLinkedin className="text-blue-700 text-2xl" />,
      link:
        'https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/',
      desc: 'Réseau professionnel et opportunités d’entreprise.',
    },
    {
      name: 'TikTok TIS SARL',
      icon: <FaTiktok className="text-slate-900 text-2xl" />,
      link: 'https://www.tiktok.com/@tis.restaurant',
      desc: 'Découvrez nos vidéos en coulisses et produits.',
    },
    {
      name: 'Canal WhatsApp',
      icon: <FaWhatsapp className="text-emerald-600 text-2xl" />,
      link:
        'https://whatsapp.com/channel/0029Vb8GKWh3wtb7bRQLsM1c',
      desc: 'Restez alerté de nos offres en temps réel.',
    },
  ];

  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
            Communauté
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Suivez Nos Réseaux & Communautés
          </h2>

          <p className="text-slate-600 text-sm mt-1">
            Restez connectés avec Thierry Industrie Saucisses SARL sur toutes
            nos plateformes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networks.map((net, idx) => (
            <a
              key={idx}
              href={net.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-all transform hover:-translate-y-1 flex items-start gap-4 group"
            >
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-red-50 transition-colors">
                {net.icon}
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-red-600 transition-colors">
                  {net.name}
                </h3>

                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  {net.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


// ============================================================
// TYPES
// ============================================================

type DayKey =
  | 'lundi'
  | 'mardi'
  | 'mercredi'
  | 'jeudi'
  | 'vendredi'
  | 'samedi'
  | 'dimanche';


// ============================================================
// COMPANY DATA
// ============================================================

const companyData = {
  name: 'Thierry Industrie Saucisses SARL',

  googleMaps: GOOGLE_MAPS_URL,

  founder: {
    name: 'Joël Thierry TSOPMO',
    title: 'Promoteur & Gérant de TIS SARL',
    img: '/images/ceo.jpeg',

    linkedin:
      'https://www.linkedin.com/in/jo%C3%ABl-thierry-tsopmo-386773194',

    bio:
      'Joël Thierry TSOPMO est un entrepreneur camerounais et spécialiste de la transformation agroalimentaire. Titulaire d’une Licence en Biochimie, option Nutrition et Sécurité Alimentaire, de l’Université de Dschang, il met ses compétences scientifiques et entrepreneuriales au service du développement du Made in Cameroon.',

    bio2:
      'Promoteur de TIS SARL (Thierry Industrie Saucisses SARL), il développe des solutions alimentaires locales, accessibles et innovantes, tout en intégrant une approche responsable de la production et de la valorisation des ressources.',

    laureate:
      'Lauréat de la Fondation Tony Elumelu (TEF) et ancien incubé de la Résidence Ukuzola, il ambitionne de faire de TIS SARL un champion national et une référence en Afrique centrale à l’horizon 2030.',

    quote:
      'Sa vision : transformer les ressources locales en produits de qualité, créer des emplois et contribuer à une industrie agroalimentaire camerounaise forte et durable.',
  },

  social: {
    facebookDouala:
      'https://www.facebook.com/share/1Ci6gUgwsN/',

    facebookYaounde:
      'https://www.facebook.com/profile.php?id=61563195851463&mibextid=ZbWKwL',

    facebookSecondary:
      'https://www.facebook.com/share/16qhUpiMMz/',

    espaceCommercial:
      'https://www.facebook.com/share/1GH8gApvHj/',

    linkedinTis:
      'https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/',

    tiktokTIS:
      'https://www.tiktok.com/@tis.restaurant',

    whatsappChannel:
      'https://whatsapp.com/channel/0029Vb8GKWh3wtb7bRQLsM1c',

    facebookRestaurant:
      'https://www.facebook.com/share/1HsPWF9eCw/',

    tiktokRestaurant:
      <a
  href="https://www.tiktok.com/@tis.restaurant"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TIS Restaurant sur TikTok"
>
  <FaTiktok />
</a>,

    whatsappRestaurant:
      'https://wa.me/message/H5WFXYWGWKGJC1',
  },

  restaurant: {
    phone: '+237 691 89 18 14',
  },
};


// ============================================================
// TEAM
// ============================================================

const teamInfo = {
  teamImg: '/images/team-tis.jpeg',
  title: 'Notre Équipe Passionnée',
  subtitle:
    'Des professionnels engagés pour vous offrir le meilleur au quotidien.',
};


// ============================================================
// ECO STOVE
// ============================================================

const stoveDetails = {
  title: 'Foyer Écologique — L’alternative au gaz',

  description:
    'Un foyer à charbon équipé d’une ventilation assistée réglable, permettant de contrôler la flamme comme une gazinière. Il fonctionne avec granulés de charbon, gros charbon ou charbon écologique et peut être alimenté par plaque solaire ou power bank.',

  specs:
    '🧱 Béton réfractaire • Garantie 12 mois • Ventilation réglable',

  image: '/images/Foyer écologiquemodèlestandard.jpeg',

  models: [
    {
      name: 'Modèle Standard',
      price: '35 000 FCFA',
      desc:
        'Compact, pratique et économique. Idéal pour la cuisine quotidienne.',
    },
    {
      name: 'Modèle avec Chariot',
      price: '50 000 FCFA',
      desc:
        'Plus robuste, conçu pour les grosses marmites. Son système basculant permet d’ajouter du charbon sans retirer la marmite du foyer.',
    },
  ],

  cta: '📞 Commandes : +237 691 89 18 14',
};


// ============================================================
// HOME
// ============================================================

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const [searchTerm, setSearchTerm] = useState('');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [productsDropdownOpen, setProductsDropdownOpen] =
    useState(false);

  const [moreDropdownOpen, setMoreDropdownOpen] =
    useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const [popupMessage, setPopupMessage] = useState('');

  const [isTyping, setIsTyping] = useState(false);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const [selectedMenuImage, setSelectedMenuImage] =
    useState<string | null>(null);

  const fullText = 'YOU ARE WELCOME';

  const productsRef = useRef<HTMLDivElement>(null);

  const moreRef = useRef<HTMLDivElement>(null);


  // ============================================================
  // INITIALIZATION
  // ============================================================

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // ============================================================
  // SCROLL TOP
  // ============================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  // ============================================================
  // DROPDOWN OUTSIDE CLICK
  // ============================================================

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setProductsDropdownOpen(false);
      }

      if (
        moreRef.current &&
        !moreRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // ============================================================
  // POPUP
  // ============================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);


  // ============================================================
  // TYPING EFFECT
  // ============================================================

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;

    setPopupMessage('');

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setPopupMessage(
          (prev) => prev + fullText.charAt(currentIndex)
        );

        currentIndex++;
      } else {
        clearInterval(typingInterval);

        setIsTyping(false);

        setTimeout(() => {
          setPopupMessage('');
        }, 5000);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, [isTyping]);


  const closePopup = () => {
    setShowPopup(false);
    setIsTyping(true);
  };


  // ============================================================
  // TRANSLATIONS
  // ============================================================

  const t = {
    fr: {
      tagline: "L'Excellence du Made in Cameroon",

      subtitle:
        'Industrie agroalimentaire, restaurant, porciculture, foyers écologiques et formation professionnelle.',

      catalog: 'Nos Produits & Tarifs',

      searchPlaceholder:
        'Rechercher un produit (saucisses, intrants, porc, baobab, lait caillé, foyer...)',

      servicesTitle: "Nos Domaines d'Activité",

      founderTitle: 'Mot du Promoteur & Présentation',

      founderSubtitle:
        'Découvrez Joël Thierry TSOPMO, promoteur et gérant de TIS SARL.',

      trainingTitle: 'TIS VisionLabs 2035 & Formations',

      restaurantTitle: 'Le Restaurant',

      restaurantSubtitle:
        "Découvrez le vrai goût au quotidien ! C'est bon, c'est rapide et c'est chic.",

      dailySpecialsTitle: 'Plats du Jour de la Semaine',

      dailySpecialsSubtitle:
        'Retrouvez nos saveurs authentiques qui font plaisir, du Lundi au Dimanche.',

      galleryTitle: 'Ambiance & Intérieur du TIS Restaurant',

      gallerySubtitle:
        "Plongez dans l'univers chaleureux et accueillant de notre espace de détente et de dégustation.",

      testimonialTitle: 'Ils Nous Ont Fait Confiance',

      testimonialSubtitle:
        'Des clients satisfaits partagent leur expérience TIS.',

      navProducts: 'Produits',
      navRestaurant: 'Restaurant',
      navStove: 'Foyer Écologique',
      navTraining: 'Formation',
      navMore: 'Plus',

      address:
        'Douala, Axe lourd Bépanda, face Hôtel Déborah | Yaoundé - Chapelle Tsinga',

      phone1: '+237 693 02 35 89 / 686 01 31 84',

      phone2: '+237 691 89 18 14 (WhatsApp)',

      followUs: 'Suivez-Nos Réseaux & Communautés',
    },

    en: {
      tagline: 'Excellence in Made in Cameroon',

      subtitle:
        'Agro-food industry, restaurant, pork supply, eco-friendly stoves and professional training.',

      catalog: 'Our Products & Prices',

      searchPlaceholder:
        'Search a product (sausages, inputs, pork, baobab, curdled milk, stove...)',

      servicesTitle: 'Our Services',

      founderTitle: "Founder's Word & Presentation",

      founderSubtitle:
        'Discover Joël Thierry TSOPMO, promoter and manager of TIS SARL.',

      trainingTitle: 'TIS VisionLabs 2035 & Training',

      restaurantTitle: 'The Restaurant',

      restaurantSubtitle:
        'Discover the true taste every day! Good, fast, and chic.',

      dailySpecialsTitle: 'Weekly Daily Specials',

      dailySpecialsSubtitle:
        'Find our authentic flavors that please, from Monday to Sunday.',

      galleryTitle: 'TIS Restaurant Interior & Ambiance',

      gallerySubtitle:
        'Dive into the warm and welcoming universe of our relaxation and tasting space.',

      testimonialTitle: 'They Trusted Us',

      testimonialSubtitle:
        'Satisfied customers share their TIS experience.',

      navProducts: 'Products',
      navRestaurant: 'Restaurant',
      navStove: 'Eco-Stove',
      navTraining: 'Training',
      navMore: 'More',

      address:
        'Douala, Bépanda heavy axis, opposite Deborah Hotel | Yaoundé - Tsinga Chapel',

      phone1: '+237 693 02 35 89 / 686 01 31 84',

      phone2: '+237 691 89 18 14 (WhatsApp)',

      followUs: 'Follow Our Networks & Communities',
    },
  }[lang];


  // ============================================================
  // RESTAURANT GALLERY
  // ============================================================

  const restaurantGallery = [
    {
      id: 1,
      img: '/images/interior.jpeg',
      title: 'Ambiance Animée & Conviviale',
      desc:
        "Nos clients profitent d'un service chaleureux et de plats savoureux au quotidien.",
    },
    {
      id: 2,
      img: '/images/interior1.jpeg',
      title: 'Coin Décoré & Intimiste',
      desc:
        'Un cadre soigné avec des touches florales murales pour un moment de détente unique.',
    },
  ];


  // ============================================================
  // WEEKLY MENU
  // ============================================================

  const weeklyMenuImages = [
    '/images/platdujour.jpeg',
    '/images/platdujour1.jpeg',
    '/images/platdujour2.jpeg',
    '/images/platdujour3.jpeg',
    '/images/platesoftheday.jpeg',
  ];

  const weeklyMenu: Record<DayKey, string[]> = {
    lundi: [
      'Saucisses sautées aux légumes',
      'Riz basmati parfumé',
    ],

    mardi: [
      'Porc braisé spécial TIS',
      'Miondo / Plantain mûr',
    ],

    mercredi: [
      'Saucisses en sauce tomate',
      'Spaghetti Bolognaise maison',
    ],

    jeudi: [
      'Eru royal aux saucisses',
      'Waterfufu chaud',
    ],

    vendredi: [
      'Poulet / Saucisses grillées',
      'Frites de plantains ou pomme de terre',
    ],

    samedi: [
      'Ndolé traditionnel aux crevettes & porc',
      'Miondo / Bobolo',
    ],

    dimanche: [
      'Menu chef spécial TIS',
      'Grillades & Accompagnement au choix',
    ],
  };

  const daysMap: DayKey[] = [
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  ];

  const currentDayKey: DayKey =
    daysMap[new Date().getDay()];


  // ============================================================
  // PRODUCTS
  // ============================================================

  const products = [
    {
      id: 1,
      name: 'Saucisses Cuites + Complément',
      desc:
        "2 grosses saucisses cuites avec accompagnement garni (C'est bon, c'est rapide et c'est chic !)",
      price: '2 500 FCFA',
      category: 'Restaurant',
      img: '/images/saucise quite product2.jpeg',
    },

    {
      id: 2,
      name: 'Jus de Baobab & Lait Caillé (TIS Restaurant)',
      desc:
        'Boissons naturelles rafraîchissantes. 0,5L : 1 000F | 1,5L : 3 000F (Ouvert tous les jours de 11H à 22H)',
      price: '1 000F - 3 000F',
      category: 'Boissons',
      img: '/images/baobab-lait-caille.jpeg',
    },

    {
      id: 3,
      name: 'Petites Saucisses de Porc',
      desc:
        'Paquet de pièces savoureuses et artisanales',
      price: '5 000 FCFA',
      category: 'Saucisses',
      img: '/images/saucise porc.jpeg',
    },

    {
      id: 4,
      name: 'Saucisses de Bœuf & Cocktails',
      desc:
        'Crues, précuites ou cuites de qualité supérieure',
      price: 'Sur commande',
      category: 'Saucisses',
      img: '/images/sacise de beauf.jpeg',
    },

    {
      id: 5,
      name: 'Intrants pour Saucisses',
      desc:
        'Viande, gras, boyau et épices de qualité professionnelle',
      price: 'À partir de 1 500 FCFA /kg',
      category: 'Intrants',
      img: '/images/instrantsaucis.jpeg',
    },

    {
      id: 6,
      name: 'Vente de Porc (Gros / Détail)',
      desc:
        'Viande de porc fraîche et saine contrôlée',
      price: 'Selon quantité',
      category: 'Viande',
      img: '/images/saucisporcnew.jpeg',
    },

    {
      id: 7,
      name: 'Foyer Écologique Modèle Standard',
      desc:
        'Spécial pour la cuisson au charbon utilisant un système solaire intégré',
      price: '35 000 FCFA',
      category: 'Écologie',
      img: '/images/Foyer écologiquemodèlestandard.jpeg',
    },

    {
      id: 8,
      name: 'Saucisses Cuites Officielles (Tarif & Détails)',
      desc:
        'Porc, Cocktail, Bœuf - Différents formats disponibles en gros et en détail.',
      price: 'À partir de 1 500 FCFA',
      category: 'Saucisses',
      img: '/images/saucisecuite.jpeg',
    },

    {
      id: 9,
      name: 'Saucisses Précuites Officielles (Paquets)',
      desc:
        'Porc, Cocktail, Bœuf - Formats paquets de 25 petites ou 8 grosses.',
      price: 'À partir de 4 000 FCFA',
      category: 'Saucisses',
      img: '/images/saucisepre.jpeg',
    },
  ];


  // ============================================================
  // SEARCH
  // ============================================================

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // ============================================================
  // RETURN
  // ============================================================

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white relative">

      {/* ======================================================
          AUTOMATIC PROMO POPUP
      ====================================================== */}

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">

          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative border border-slate-100">

            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-25 bg-slate-900/70 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>

            <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-6 text-center relative">

              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white text-red-700 font-bold text-2xl">
                TIS
              </div>

              <h3 className="text-xl font-extrabold mt-2 uppercase tracking-wide">
                TIS SARL & Restaurant
              </h3>

              <p className="text-xs text-red-200 mt-1">
                C'est bon, c'est rapide et c'est chic !
              </p>
            </div>

            <div className="p-6 pt-8 text-center space-y-4">

              <p className="text-slate-600 text-sm leading-relaxed">
                Commandez vos plats du jour préférés ou notre Foyer
                Écologique révolutionnaire dès maintenant. Livraison rapide à
                Douala & Yaoundé !
              </p>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-red-900 text-xs font-semibold">
                📞 Hotline: +237 691 89 18 14 / +237 693 02 35 89
              </div>

              <div className="flex gap-3 pt-2">

                <a
                  href="https://wa.me/237691891814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </a>

                <button
                  onClick={closePopup}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-4 rounded-xl transition-all"
                >
                  Explorer
                </button>

              </div>
            </div>
          </div>
        </div>
      )}


      {/* ======================================================
          FLOATING TYPING BANNER
      ====================================================== */}

      {isTyping && (
        <div className="fixed bottom-6 left-6 z-40 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce">

          <span className="w-3 h-3 rounded-full bg-red-600 animate-ping" />

          <span className="font-bold text-sm tracking-widest">
            {popupMessage}
          </span>

        </div>
      )}


      {/* ======================================================
          TOP BAR
      ====================================================== */}

      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">

          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">

            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-red-500" />
              Douala & Yaoundé, Cameroun
            </span>

            <span className="hidden md:inline text-slate-600">
              |
            </span>

            <span className="flex items-center gap-1.5">
              <FaPhone className="text-red-500" />
              +237 693 02 35 89
            </span>

          </div>

          <div className="flex items-center gap-4">

            <a
              href="mailto:thierryindustriesaucisses15@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-red-500" />
              Contact Email
            </a>

            <div className="h-3 w-px bg-slate-700" />

            <button
              onClick={() =>
                setLang(lang === 'fr' ? 'en' : 'fr')
              }
              className="flex items-center gap-1 text-white font-bold bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors"
            >
              <FaGlobe className="text-red-500" />
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

          </div>

        </div>
      </div>


      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">

          <a href="#hero" className="flex items-center gap-3 group">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-700 to-red-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              TIS
            </div>

            <div>
              <span className="font-black text-lg tracking-tight text-slate-900 block leading-tight">
                THIERRY INDUSTRIE
              </span>

              <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
                SAUCISSES SARL
              </span>
            </div>

          </a>


          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">

            <a
              href="#hero"
              className="hover:text-red-600 transition-colors"
            >
              Accueil
            </a>


            <div className="relative" ref={productsRef}>

              <button
                onClick={() =>
                  setProductsDropdownOpen(
                    !productsDropdownOpen
                  )
                }
                className="flex items-center gap-1 hover:text-red-600 transition-colors py-2"
              >
                {t.navProducts}

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    productsDropdownOpen
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 mt-2">

                  <a
                    href="#products"
                    onClick={() =>
                      setProductsDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Saucisses & Viandes
                  </a>

                  <a
                    href="#products"
                    onClick={() =>
                      setProductsDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Intrants de Fabrication
                  </a>

                </div>
              )}

            </div>


            <a
              href="#restaurant"
              className="text-red-600 font-bold hover:underline"
            >
              {t.navRestaurant}
            </a>

            <a
              href="#stove"
              className="hover:text-red-600 transition-colors"
            >
              {t.navStove}
            </a>

            <a
              href="#training"
              className="hover:text-red-600 transition-colors"
            >
              {t.navTraining}
            </a>


            <div className="relative" ref={moreRef}>

              <button
                onClick={() =>
                  setMoreDropdownOpen(
                    !moreDropdownOpen
                  )
                }
                className="flex items-center gap-1 hover:text-red-600 transition-colors py-2"
              >
                {t.navMore}

                <FaChevronDown
                  className={`text-xs transition-transform ${
                    moreDropdownOpen
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 mt-2">

                  <a
                    href="#services"
                    onClick={() =>
                      setMoreDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Services & Porciculture
                  </a>

                  <a
                    href="#founder"
                    onClick={() =>
                      setMoreDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Promoteur & Équipe
                  </a>

                  <a
                    href="#gallery"
                    onClick={() =>
                      setMoreDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Galerie Intérieur
                  </a>

                  <a
                    href="#testimonials"
                    onClick={() =>
                      setMoreDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Témoignages
                  </a>

                  <a
                    href="#location"
                    onClick={() =>
                      setMoreDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Localisation
                  </a>

                  <a
                    href="#contact"
                    onClick={() =>
                      setMoreDropdownOpen(false)
                    }
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold"
                  >
                    Contact
                  </a>

                </div>
              )}

            </div>

          </nav>


          {/* DESKTOP WHATSAPP */}

          <div className="hidden lg:flex items-center gap-4">

            <a
              href="https://wa.me/237691891814"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl shadow-md flex items-center gap-2 transition-all"
            >
              <FaWhatsapp className="text-base" />
              WhatsApp
            </a>

          </div>


          {/* MOBILE BUTTON */}

          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="lg:hidden text-slate-800 p-2 focus:outline-none text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>


        {/* MOBILE MENU */}

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl">

            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Accueil
            </a>

            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Produits & Tarifs
            </a>

            <a
              href="#restaurant"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-red-600"
            >
              Le Restaurant
            </a>

            <a
              href="#stove"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Foyer Écologique
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Domaines d'Activité
            </a>

            <a
              href="#training"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              TIS VisionLabs 2035
            </a>

            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Promoteur & Équipe
            </a>

            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Intérieur & Ambiance
            </a>

            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Témoignages Clients
            </a>

            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Localisation Google Maps
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-red-600"
            >
              Contact
            </a>

            <div className="pt-2">

              <a
                href="https://wa.me/237691891814"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp className="text-lg" />
                Commander sur WhatsApp
              </a>

            </div>

          </div>
        )}

      </header>


      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        id="hero"
        className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 text-white py-20 lg:py-32 overflow-hidden"
      >

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div
            className="space-y-6 text-center lg:text-left"
            data-aos="fade-right"
          >

            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-red-500/30">
              <FaCheckCircle />
              {t.tagline}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              THIERRY INDUSTRIE
              <span className="text-red-600 block mt-2">
                SAUCISSES SARL
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">

              <a
                href="#restaurant"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl text-center transition-all"
              >
                Découvrir le Restaurant
              </a>

              <a
                href="#stove"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl backdrop-blur-md text-center transition-all border border-white/10"
              >
                Foyer Écologique
              </a>

            </div>

          </div>


          <div
            className="relative flex justify-center"
            data-aos="fade-left"
          >

            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">

              <img
                src="/images/saucise quite product2.jpeg"
                alt="TIS Saucisses & Restaurant"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">

                <div>

                  <span className="bg-red-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full">
                    Plat Vedette
                  </span>

                  <p className="text-white font-bold text-lg mt-2">
                    Saucisses Cuites + Complément
                  </p>

                  <p className="text-slate-300 text-xs">
                    C'est bon, c'est rapide et c'est chic !
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FOUNDER
      ====================================================== */}

      <section
        id="founder"
        className="py-20 bg-slate-900 text-white"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div
            className="text-center max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
          >

            <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/25">
              Direction & Équipe
            </span>

            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              {t.founderTitle}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              {t.founderSubtitle}
            </p>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

            <div
              className="relative flex justify-center"
              data-aos="fade-right"
            >

              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">

                <img
                  src={companyData.founder.img}
                  alt={companyData.founder.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6">

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {companyData.founder.name}
                    </h3>

                    <p className="text-red-400 text-xs font-semibold">
                      {companyData.founder.title}
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div
              className="space-y-6"
              data-aos="fade-left"
            >

              <span className="text-red-500 font-bold text-xs uppercase tracking-wider">
                Parcours & Vision
              </span>

              <h3 className="text-2xl sm:text-3xl font-black">
                L'innovation au service de la nutrition au Cameroun
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {companyData.founder.bio}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {companyData.founder.bio2}
              </p>

              <div className="bg-slate-800/80 border border-slate-700/60 p-5 rounded-2xl">

                <p className="text-xs text-slate-300 font-medium leading-relaxed italic">
                  "{companyData.founder.laureate}"
                </p>

              </div>

              <a
                href={companyData.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-lg"
              >
                <FaLinkedin />
                Profil LinkedIn Officiel
              </a>

            </div>

          </div>


          {/* TEAM */}

          <div
            className="bg-slate-950 rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            data-aos="fade-up"
          >

            <div className="space-y-4">

              <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full">
                Notre Force
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold">
                {teamInfo.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {teamInfo.subtitle}
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Chez TIS SARL, chaque membre de l'équipe partage la même
                passion pour l'excellence, l'hygiène et la satisfaction du
                client. De la production des saucisses à l'accueil au
                restaurant, nous mettons notre cœur à l'ouvrage.
              </p>

            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-800">

              <img
                src={teamInfo.teamImg}
                alt="Équipe TIS SARL"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          PRODUCTS
      ====================================================== */}

      <section
        id="products"
        className="py-20 bg-slate-100"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div
            className="text-center max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
          >

            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Catalogue
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              {t.catalog}
            </h2>

            <p className="text-slate-600 text-sm mt-2">
              Découvrez notre gamme complète de produits artisanaux et
              industriels.
            </p>

          </div>


          {/* SEARCH */}

          <div
            className="max-w-md mx-auto mb-12 relative"
            data-aos="fade-up"
          >

            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <FaSearch />
            </span>

            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-11 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-800 placeholder-slate-400 transition-all"
            />

          </div>


          {/* PRODUCTS */}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredProducts.map((p, idx) => (

                <div
                  key={p.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >

                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">

                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                      {p.category}
                    </span>

                    <span className="absolute bottom-4 right-4 bg-red-600 text-white font-black text-sm px-3.5 py-1.5 rounded-xl shadow-lg">
                      {p.price}
                    </span>

                  </div>


                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">

                    <div>

                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-600 transition-colors">
                        {p.name}
                      </h3>

                      <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                        {p.desc}
                      </p>

                    </div>


                    <a
                      href={`https://wa.me/237691891814?text=Bonjour,%20je%20souhaite%20commander%20le%20produit:%20${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <FaWhatsapp className="text-base text-emerald-400 group-hover:text-white" />
                      Commander par WhatsApp
                    </a>

                  </div>

                </div>

              ))}

            </div>
          ) : (
            <div className="text-center py-16">

              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch />
              </div>

              <h3 className="font-black text-slate-900 text-xl">
                Aucun produit trouvé
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Essayez une autre recherche.
              </p>

            </div>
          )}

        </div>

      </section>


      {/* ======================================================
          RESTAURANT
      ====================================================== */}

      <section
        id="restaurant"
        className="py-20 bg-white"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div
            className="text-center max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
          >

            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              {t.restaurantTitle}
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Le Goût au Quotidien
            </h2>

            <p className="text-slate-600 text-sm mt-2">
              {t.restaurantSubtitle}
            </p>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

            <div
              className="space-y-6"
              data-aos="fade-right"
            >

              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 font-bold text-xs px-4 py-2 rounded-xl border border-red-100">
                <FaMapMarkerAlt className="text-red-600" />
                Douala — Axe lourd Bépanda, face Hôtel Déborah
              </div>

              <div className="text-xs text-slate-500">
                📍 Yaoundé — Chapelle Tsinga
              </div>


              {/* GOOGLE MAP BUTTON */}

              <a
                href={companyData.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5"
              >
                <FaMapMarkerAlt className="text-base" />
                Voir notre localisation sur Google Maps
              </a>


              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Un cadre chaleureux, des plats savoureux et un service
                ultra-rapide.
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Que ce soit sur place ou à emporter, TIS Restaurant vous
                propose des menus variés tous les jours de la semaine.
                Dégustation sur place à partir de 1 000 FCFA et plats à
                emporter dès 1 500 FCFA.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">

                  <span className="block font-black text-red-600 text-lg">
                    11H - 22H
                  </span>

                  <span className="text-xs text-slate-500 font-medium">
                    Ouvert 7j/7
                  </span>

                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">

                  <span className="block font-black text-red-600 text-lg">
                    +237 691 89 18 14
                  </span>

                  <span className="text-xs text-slate-500 font-medium">
                    Commandes directes
                  </span>

                </div>

              </div>

            </div>


            <div
              className="relative"
              data-aos="fade-left"
            >

              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

                <img
                  src="/images/interior.jpeg"
                  alt="TIS Restaurant Ambiance"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>


          {/* WEEKLY MENU */}

          <div
            className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
            data-aos="fade-up"
          >

            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-10 relative z-10">

              <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full">
                {t.dailySpecialsTitle}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black mt-3">
                {t.dailySpecialsSubtitle}
              </h3>

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">

              <div className="lg:col-span-1">

                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-700 group">

                  <img
                    src={
                      selectedMenuImage ??
                      weeklyMenuImages[
                        new Date().getDay() %
                          weeklyMenuImages.length
                      ]
                    }
                    alt="Plat du jour TIS"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5">

                    <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">

                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />

                      {currentDayKey} — Aujourd'hui

                    </div>

                  </div>

                </div>


                {/* FOOD GALLERY */}

                <div className="mt-4 flex gap-3 overflow-x-auto pb-2">

                  {weeklyMenuImages.map((image, index) => (

                    <button
                      key={image}
                      type="button"
                      onClick={() =>
                        setSelectedMenuImage(image)
                      }
                      className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        (
                          selectedMenuImage ??
                          weeklyMenuImages[
                            new Date().getDay() %
                              weeklyMenuImages.length
                          ]
                        ) === image
                          ? 'border-red-500 scale-105 shadow-lg'
                          : 'border-slate-700 opacity-80 hover:opacity-100 hover:border-red-400'
                      }`}
                    >

                      <img
                        src={image}
                        alt={`Plat TIS ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                    </button>

                  ))}

                </div>

              </div>


              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

                {(Object.keys(weeklyMenu) as DayKey[]).map(
                  (day) => {

                    const isToday =
                      day === currentDayKey;

                    return (
                      <div
                        key={day}
                        className={`p-5 rounded-2xl border transition-all ${
                          isToday
                            ? 'bg-red-600/20 border-red-500 text-white shadow-lg'
                            : 'bg-slate-800/60 border-slate-700 text-slate-300'
                        }`}
                      >

                        <div className="flex justify-between items-center mb-2">

                          <span className="font-bold uppercase text-xs tracking-widest text-red-400">

                            {day}

                            {isToday && (
                              <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full ml-2">
                                Aujourd'hui
                              </span>
                            )}

                          </span>

                        </div>

                        <ul className="space-y-1 text-xs sm:text-sm font-semibold">

                          {weeklyMenu[day].map(
                            (item, idx) => (

                              <li
                                key={idx}
                                className="flex items-center gap-2"
                              >

                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />

                                {item}

                              </li>

                            )
                          )}

                        </ul>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          ECO STOVE
      ====================================================== */}

      <section
        id="stove"
        className="py-20 bg-slate-900 text-white relative overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div
              className="space-y-6"
              data-aos="fade-right"
            >

              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-500/25">
                <FaSolarPanel />
                Innovation Durable
              </span>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                {stoveDetails.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {stoveDetails.description}
              </p>

              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-xs font-bold text-red-400">
                {stoveDetails.specs}
              </div>

              <div className="space-y-4 pt-2">

                {stoveDetails.models.map(
                  (mod, idx) => (

                    <div
                      key={idx}
                      className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex justify-between items-center"
                    >

                      <div>

                        <h4 className="font-bold text-sm text-white">
                          {mod.name}
                        </h4>

                        <p className="text-slate-400 text-xs mt-0.5">
                          {mod.desc}
                        </p>

                      </div>

                      <span className="bg-red-600 text-white font-black text-xs px-3 py-1.5 rounded-xl whitespace-nowrap ml-4">
                        {mod.price}
                      </span>

                    </div>

                  )
                )}

              </div>

              <div className="pt-4">

                <a
                  href="https://wa.me/237691891814?text=Bonjour,%20je%20souhaite%20commander%20un%20Foyer%20Écologique%20TIS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-4 rounded-xl inline-flex items-center gap-2 shadow-lg transition-all"
                >
                  <FaWhatsapp className="text-lg" />
                  {stoveDetails.cta}
                </a>

              </div>

            </div>


            <div
              className="relative flex justify-center"
              data-aos="fade-left"
            >

              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">

                <img
                  src={stoveDetails.image}
                  alt="Foyer Écologique TIS"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="py-20 bg-slate-50"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div
            className="text-center max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
          >

            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Expertise
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              {t.servicesTitle}
            </h2>

            <p className="text-slate-600 text-sm mt-2">
              De la porciculture à la transformation agroalimentaire complète.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4"
              data-aos="fade-up"
            >

              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold text-xl">
                🐖
              </div>

              <h3 className="font-bold text-slate-900 text-lg">
                Porciculture & Approvisionnement
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed">
                Élevage et vente de porcs en gros et en détail. Viande fraîche
                et saine rigoureusement contrôlée pour garantir la qualité
                supérieure de nos saucisses.
              </p>

            </div>


            <div
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4"
              data-aos="fade-up"
            >

              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold text-xl">
                🌭
              </div>

              <h3 className="font-bold text-slate-900 text-lg">
                Production Industrielle & Intrants
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed">
                Fabrication artisanale et industrielle de saucisses (porc,
                bœuf, cocktail). Vente d'intrants professionnels (boyaux,
                épices, gras) pour les transformateurs.
              </p>

            </div>


            <div
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4"
              data-aos="fade-up"
            >

              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold text-xl">
                🔥
              </div>

              <h3 className="font-bold text-slate-900 text-lg">
                Service Braise & Événementiel
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed">
                Prestation de service braise professionnelle pour vos
                cérémonies, mariages, anniversaires et événements d'entreprise
                à Douala et Yaoundé.
              </p>

            </div>

          </div>

        </div>

      </section>

    {/* =========================================================
    FORMATION & AVENIR — TIS VISIONLABS 2035
========================================================= */}
<section
  id="formations"
  className="relative overflow-hidden py-20 sm:py-24 bg-slate-50"
>
  {/* Decorative background */}
  <div className="absolute -top-32 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Section heading */}
    <div
      className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
      data-aos="fade-up"
    >
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-black uppercase tracking-[0.18em]">
        Formation & Avenir
      </span>

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
        TIS VisionLabs{" "}
        <span className="text-red-600">2035</span>{" "}
        & Formations
      </h2>

      <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
        TIS SARL s'engage dans le transfert de compétences à travers
        des programmes de formation professionnelle en transformation
        agroalimentaire et fabrication de saucisses.
      </p>
    </div>

    {/* Main content */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* IMAGE */}
      <div
        className="group relative"
        data-aos="fade-right"
      >
        <div className="absolute -inset-3 bg-gradient-to-br from-red-600/20 via-transparent to-red-600/10 rounded-[2.2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 shadow-2xl">
          
          {/* Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/90 backdrop-blur-md text-white px-4 py-2 text-[10px] sm:text-xs font-black shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              TIS VisionLabs 2035
            </span>
          </div>

          <img
            src="/images/vision-labs.jpeg"
            alt="TIS VisionLabs 2035 - Formation en fabrication des saucisses"
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />

          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-white text-xs sm:text-sm font-black">
                  Formation professionnelle
                </p>
                <p className="text-white/80 text-[10px] sm:text-xs mt-1">
                  Fabrication artisanale des saucisses
                </p>
              </div>

              <div className="hidden sm:block bg-red-600 text-white px-3 py-2 rounded-xl text-xs font-black">
                Made in Cameroon
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT / CONTENT */}
      <div
        data-aos="fade-left"
        data-aos-delay="120"
      >
        <div className="inline-flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-[0.18em] mb-4">
          <span className="w-8 h-0.5 bg-red-600" />
          Former pour construire
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
          Construire une industrie locale
          <span className="text-red-600"> forte, durable et compétitive.</span>
        </h3>

        <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
          À travers l'initiative{" "}
          <strong className="text-slate-900">
            TIS VisionLabs 2035
          </strong>
          , nous formons la nouvelle génération d'entrepreneurs
          camerounais pour bâtir une industrie locale forte, durable
          et compétitive.
        </p>

        {/* Training points */}
        <div className="mt-7 space-y-3">

          {[
            {
              title: "Hygiène & sécurité alimentaire",
              text: "Maîtrise des normes d’hygiène et de sécurité alimentaire, avec option nutrition.",
            },
            {
              title: "Fabrication des saucisses",
              text: "Techniques de découpe, assaisonnement et embossage des saucisses.",
            },
            {
              title: "Production & commercialisation",
              text: "Gestion d’unité de production et stratégie de commercialisation Made in Cameroon.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group/item flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={180 + index * 80}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover/item:bg-red-600 group-hover/item:text-white transition-colors duration-300">
                <FaCheckCircle className="text-lg" />
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-black text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">

          <a
            href="https://wa.me/237691891814?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%28e%29%20par%20vos%20programmes%20de%20formation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1"
          >
            <FaWhatsapp className="text-lg" />
            S’inscrire à une formation
          </a>

          <a
            href="tel:+237691891814"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1"
          >
            <FaPhone className="text-sm text-red-600" />
            Nous contacter
          </a>

        </div>

        {/* Small information line */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-bold text-slate-500">
          <span>✓ Formation pratique</span>
          <span>✓ Entrepreneurs</span>
          <span>✓ Made in Cameroon</span>
        </div>
      </div>
    </div>

    {/* Bottom highlight cards */}
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      {[
        {
          number: "5",
          label: "Jours de formation",
        },
        {
          number: "10",
          label: "Jeunes par cohorte",
        },
        {
          number: "37 500",
          label: "FCFA la formation",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-2xl sm:text-3xl font-black text-red-600">
            {item.number}
          </div>

          <div className="mt-1 text-xs sm:text-sm font-bold text-slate-600">
            {item.label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

{/* NEWSLETTER / ALERTES TIS */}
<NewsletterBox />


      {/* ======================================================
          RESTAURANT GALLERY
      ====================================================== */}

      <section
        id="gallery"
        className="py-20 bg-white"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div
            className="text-center max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
          >

            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Galerie Photos
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              {t.galleryTitle}
            </h2>

            <p className="text-slate-600 text-sm mt-2">
              {t.gallerySubtitle}
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {restaurantGallery.map((item, idx) => (

              <div
                key={item.id}
                className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-200 group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >

                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                <div className="p-6 space-y-2">

                  <h3 className="font-bold text-slate-900 text-base">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      <section
        id="testimonials"
        className="py-20 sm:py-24 bg-slate-100 relative overflow-hidden"
      >

        <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />


        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

          <div
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
            data-aos="fade-up"
          >

            <span className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-4 py-2 rounded-full border border-red-200">
              <FaQuoteLeft className="text-red-500" />
              Avis Clients
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              {t.testimonialTitle}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {t.testimonialSubtitle}
            </p>

            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-10 h-1 bg-red-600 rounded-full" />
              <span className="w-2 h-2 bg-red-300 rounded-full" />
              <span className="w-2 h-2 bg-red-200 rounded-full" />
            </div>

          </div>


          <div
            className="max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <Slider
              dots={true}
              infinite={true}
              speed={600}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4500}
              pauseOnHover={true}
              pauseOnFocus={true}
              arrows={true}
              swipeToSlide={true}
              touchMove={true}
              adaptiveHeight={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                  },
                },
              ]}
            >

              {[
                '/images/temoinage.jpeg',
                '/images/temoinage1.jpeg',
                '/images/temoinage2.jpeg',
                '/images/temoinage3.jpeg',
                '/images/temoinage4.jpeg',
                '/images/temoinage5.jpeg',
                '/images/temoinage6.jpeg',
                '/images/temoinage7.jpeg',
                '/images/temoinage8.jpeg',
              ].map((image, index) => (

                <div
                  key={image}
                  className="px-2 sm:px-3 pb-10"
                >

                  <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 h-full">

                    <div className="relative bg-slate-50 overflow-hidden">

                      <div className="absolute top-4 left-4 z-10">

                        <span className="inline-flex items-center justify-center min-w-10 h-8 px-3 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-black shadow-lg">
                          {String(index + 1).padStart(2, '0')} / 09
                        </span>

                      </div>

                      <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                        <FaQuoteLeft className="text-sm" />
                      </div>

                      <div className="p-2 sm:p-3">

                        <img
                          src={image}
                          alt={`Témoignage client TIS ${index + 1}`}
                          loading={
                            index === 0
                              ? 'eager'
                              : 'lazy'
                          }
                          className="w-full h-auto max-h-[620px] object-contain rounded-2xl group-hover:scale-[1.015] transition-transform duration-700"
                        />

                      </div>

                    </div>


                    <div className="px-5 sm:px-6 py-5 border-t border-slate-100 bg-white">

                      <div className="flex items-center justify-between gap-4">

                        <div>

                          <p className="text-slate-900 font-black text-sm">
                            Témoignage Client
                          </p>

                          <p className="text-slate-400 text-xs mt-1">
                            Expérience TIS SARL
                          </p>

                        </div>

                        <div className="flex items-center gap-0.5 text-amber-400 text-sm">
                          ★★★★★
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </Slider>

          </div>


          <div
            className="max-w-3xl mx-auto mt-10 sm:mt-14 text-center"
            data-aos="fade-up"
          >

            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">

              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                <FaCheckCircle />
              </div>

              <div className="text-center sm:text-left">

                <p className="font-black text-slate-900 text-sm">
                  Merci pour votre confiance ❤️
                </p>

                <p className="text-slate-500 text-xs mt-0.5">
                  Votre satisfaction est notre meilleure recommandation.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          GOOGLE MAPS LOCATION
      ====================================================== */}

      <section
        id="location"
        className="py-14 bg-white border-t border-slate-200"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div
            className="bg-slate-950 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                <FaMapMarkerAlt className="text-xl" />
              </div>

              <div>

                <h3 className="text-white font-black text-lg">
                  Retrouvez-nous à Douala
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Axe lourd Bépanda, face Hôtel Déborah
                </p>

                <p className="text-slate-500 text-xs mt-1">
                  TIS Restaurant
                </p>

              </div>

            </div>


            <a
              href={companyData.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5"
            >
              <FaMapMarkerAlt />
              Ouvrir Google Maps
            </a>

          </div>

        </div>

      </section>


      {/* ======================================================
          SOCIAL HUB
      ====================================================== */}

      <SocialHub />


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer
        id="contact"
        className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">


          {/* COMPANY */}

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-lg">
                TIS
              </div>

              <span className="font-black text-base">
                TIS SARL
              </span>

            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              {companyData.name} — {t.tagline}. Transformation
              agroalimentaire, restaurant, porciculture et foyers écologiques.
            </p>

          </div>


          {/* LOCATION */}

          <div className="space-y-4">

            <h4 className="font-bold text-sm uppercase tracking-wider text-red-500">
              Localisation
            </h4>

            <p className="text-slate-300 text-xs leading-relaxed">
              {t.address}
            </p>


            <a
              href={companyData.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-lg"
            >
              <FaMapMarkerAlt />
              Ouvrir Google Maps
            </a>

          </div>


          {/* CONTACT */}

          <div className="space-y-4">

            <h4 className="font-bold text-sm uppercase tracking-wider text-red-500">
              Contact Direct
            </h4>

            <p className="text-slate-300 text-xs leading-relaxed">
              {t.phone1}
              <br />
              {t.phone2}
              <br />
              thierryindustriesaucisses15@gmail.com
            </p>


            <a
              href="https://wa.me/237691891814"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
            >
              <FaWhatsapp />
              Nous écrire sur WhatsApp
            </a>

          </div>


          {/* QUICK LINKS */}

          <div className="space-y-4">

            <h4 className="font-bold text-sm uppercase tracking-wider text-red-500">
              Liens Rapides
            </h4>

            <ul className="space-y-2 text-xs text-slate-300">

              <li>
                <a
                  href="#hero"
                  className="hover:text-red-500 transition-colors"
                >
                  Accueil
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="hover:text-red-500 transition-colors"
                >
                  Produits & Tarifs
                </a>
              </li>

              <li>
                <a
                  href="#restaurant"
                  className="hover:text-red-500 transition-colors"
                >
                  Le Restaurant
                </a>
              </li>

              <li>
                <a
                  href="#stove"
                  className="hover:text-red-500 transition-colors"
                >
                  Foyer Écologique
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  className="hover:text-red-500 transition-colors"
                >
                  Google Maps
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">

          <p>
            © {new Date().getFullYear()} Thierry Industrie Saucisses SARL.
            Tous droits réservés.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">

            <a
              href="https://www.facebook.com/share/1Ci6gUgwsN/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook Douala
            </a>

            <a
              href="https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="https://www.tiktok.com/@tis.restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>

            <a
              href={companyData.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors font-bold"
            >
              Google Maps
            </a>

          </div>

        </div>

      </footer>


      {/* ======================================================
          FLOATING WHATSAPP
      ====================================================== */}

      <WhatsAppFloat />


      {/* ======================================================
          SCROLL TO TOP
      ====================================================== */}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-1"
          aria-label="Retour en haut"
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
}