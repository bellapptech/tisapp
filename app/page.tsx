'use client';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch, 
  FaGlobe, FaBars, FaTimes, FaCheckCircle, FaChevronDown, 
  FaArrowUp, FaUsers, FaQuoteLeft, FaFacebook, FaLinkedin, FaTiktok, FaShieldAlt, FaSolarPanel
} from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- INLINE SocialHub Component ---
function SocialHub() {
  const networks = [
    {
      name: "Facebook Douala",
      icon: <FaFacebook className="text-blue-600 text-2xl" />,
      link: "https://www.facebook.com/share/1Ci6gUgwsN/",
      desc: "Rejoignez notre communauté principale à Douala."
    },
    {
      name: "Facebook Yaoundé",
      icon: <FaFacebook className="text-blue-600 text-2xl" />,
      link: "https://www.facebook.com/profile.php?id=61563195851463&mibextid=ZbWKwL",
      desc: "Suivez nos activités et actualités à Yaoundé."
    },
    {
      name: "LinkedIn Officiel",
      icon: <FaLinkedin className="text-blue-700 text-2xl" />,
      link: "https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/",
      desc: "Réseau professionnel et opportunités d'entreprise."
    },
    {
      name: "TikTok TIS SARL",
      icon: <FaTiktok className="text-slate-900 text-2xl" />,
      link: "https://www.tiktok.com/@thierryindustriesauciss0",
      desc: "Découvrez nos vidéos en coulisses et produits."
    },
    {
      name: "Canal WhatsApp",
      icon: <FaWhatsapp className="text-emerald-600 text-2xl" />,
      link: "https://whatsapp.com/channel/0029Vb8GKWh3wtb7bRQLsM1c",
      desc: "Restez alerté de nos offres en temps réel."
    }
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
            Restez connectés avec Thierry Industrie Saucisses SARL sur toutes nos plateformes.
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

type DayKey = 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi' | 'dimanche';

const companyData = {
  name: "Thierry Industrie Saucisses SARL",
  founder: {
    name: "Joël Thierry TSOPMO",
    title: "Promoteur & Gérant de TIS SARL",
    img: "/images/ceo.jpeg",
    linkedin: "https://www.linkedin.com/in/jo%C3%ABl-thierry-tsopmo-386773194",
    bio: "Joël Thierry TSOPMO est un entrepreneur camerounais et spécialiste de la transformation agroalimentaire. Titulaire d’une Licence en Biochimie, option Nutrition et Sécurité Alimentaire, de l’Université de Dschang, il met ses compétences scientifiques et entrepreneuriales au service du développement du Made in Cameroon.",
    bio2: "Promoteur de TIS SARL (Thierry Industrie Saucisses SARL), il développe des solutions alimentaires locales, accessibles et innovantes, tout en intégrant une approche responsable de la production et de la valorisation des ressources.",
    laureate: "Lauréat de la Fondation Tony Elumelu (TEF) et ancien incubé de la Résidence Ukuzola, il ambitionne de faire de TIS SARL un champion national et une référence en Afrique centrale à l’horizon 2030.",
    quote: "Sa vision : transformer les ressources locales en produits de qualité, créer des emplois et contribuer à une industrie agroalimentaire camerounaise forte et durable."
  },
  social: {
    facebookDouala: "https://www.facebook.com/share/1Ci6gUgwsN/",
    facebookYaounde: "https://www.facebook.com/profile.php?id=61563195851463&mibextid=ZbWKwL",
    facebookSecondary: "https://www.facebook.com/share/16qhUpiMMz/",
    espaceCommercial: "https://www.facebook.com/share/1GH8gApvHj/",
    linkedinTis: "https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/",
    tiktokTIS: "https://www.tiktok.com/@thierryindustriesauciss0",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb8GKWh3wtb7bRQLsM1c",
    facebookRestaurant: "https://www.facebook.com/share/1HsPWF9eCw/",
    tiktokRestaurant: "https://www.tiktok.com/@tis.restaurant",
    whatsappRestaurant: "https://wa.me/message/H5WFXYWGWKGJC1"
  },
  restaurant: {
    phone: "+237 691 89 18 14"
  }
};

const teamInfo = {
  teamImg: "/images/team-tis.jpeg",
  title: "Notre Équipe Passionnée",
  subtitle: "Des professionnels engagés pour vous offrir le meilleur au quotidien."
};

const stoveDetails = {
  title: "Foyer Écologique — L’alternative au gaz",
  description: "Un foyer à charbon équipé d’une ventilation assistée réglable, permettant de contrôler la flamme comme une gazinière. Il fonctionne avec granulés de charbon, gros charbon ou charbon écologique et peut être alimenté par plaque solaire ou power bank.",
  specs: "🧱 Béton réfractaire • Garantie 12 mois • Ventilation réglable",
  image: "/images/Foyer écologiquemodèlestandard.jpeg",
  models: [
    { name: "Modèle Standard", price: "35 000 FCFA", desc: "Compact, pratique et économique. Idéal pour la cuisine quotidienne." },
    { name: "Modèle avec Chariot", price: "50 000 FCFA", desc: "Plus robuste, conçu pour les grosses marmites. Son système basculant permet d’ajouter du charbon sans retirer la marmite du foyer." }
  ],
  cta: "📞 Commandes : +237 691 89 18 14"
};

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // FIX: Re-added showScrollTop state and scroll listener
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const fullText = "YOU ARE WELCOME";

  const productsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      setPopupMessage('');
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setPopupMessage((prev) => prev + fullText.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => setPopupMessage(''), 5000);
        }
      }, 90);
      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  const closePopup = () => {
    setShowPopup(false);
    setIsTyping(true);
  };

  const t = {
    fr: {
      tagline: "L'Excellence du Made in Cameroon",
      subtitle: "Industrie agroalimentaire, restaurant, porciculture, foyers écologiques et formation professionnelle.",
      catalog: "Nos Produits & Tarifs",
      searchPlaceholder: "Rechercher un produit (saucisses, intrants, porc, baobab, lait caillé, foyer...)",
      servicesTitle: "Nos Domaines d'Activité",
      founderTitle: "Mot du Promoteur & Présentation",
      founderSubtitle: "Découvrez Joël Thierry TSOPMO, promoteur et gérant de TIS SARL.",
      trainingTitle: "TIS VisionLabs 2035 & Formations",
      restaurantTitle: "Le Restaurant",
      restaurantSubtitle: "Découvrez le vrai goût au quotidien ! C'est bon, c'est rapide et c'est chic.",
      dailySpecialsTitle: "Plats du Jour de la Semaine",
      dailySpecialsSubtitle: "Retrouvez nos saveurs authentiques qui font plaisir, du Lundi au Dimanche.",
      galleryTitle: "Ambiance & Intérieur du TIS Restaurant",
      gallerySubtitle: "Plongez dans l'univers chaleureux et accueillant de notre espace de détente et de dégustation.",
      testimonialTitle: "Ils Nous Ont Fait Confiance",
      testimonialSubtitle: "Des clients satisfaits partagent leur expérience TIS.",
      navProducts: "Produits",
      navRestaurant: "Restaurant",
      navStove: "Foyer Écologique",
      navTraining: "Formation",
      navMore: "Plus",
      address: "Douala, Axe lourd Bépanda, face Hôtel Déborah | Yaoundé - Chapelle Tsinga",
      phone1: "+237 693 02 35 89 / 686 01 31 84",
      phone2: "+237 691 89 18 14 (WhatsApp)",
      followUs: "Suivez-Nos Réseaux & Communautés"
    },
    en: {
      tagline: "Excellence in Made in Cameroon",
      subtitle: "Agro-food industry, restaurant, pork supply, eco-friendly stoves and professional training.",
      catalog: "Our Products & Prices",
      searchPlaceholder: "Search a product (sausages, inputs, pork, baobab, curdled milk, stove...)",
      servicesTitle: "Our Services",
      founderTitle: "Founder's Word & Presentation",
      founderSubtitle: "Discover Joël Thierry TSOPMO, promoter and manager of TIS SARL.",
      trainingTitle: "TIS VisionLabs 2035 & Training",
      restaurantTitle: "The Restaurant",
      restaurantSubtitle: "Discover the true taste every day! Good, fast, and chic.",
      dailySpecialsTitle: "Weekly Daily Specials",
      dailySpecialsSubtitle: "Find our authentic flavors that please, from Monday to Sunday.",
      galleryTitle: "TIS Restaurant Interior & Ambiance",
      gallerySubtitle: "Dive into the warm and welcoming universe of our relaxation and tasting space.",
      testimonialTitle: "They Trusted Us",
      testimonialSubtitle: "Satisfied customers share their TIS experience.",
      navProducts: "Products",
      navRestaurant: "Restaurant",
      navStove: "Eco-Stove",
      navTraining: "Training",
      navMore: "More",
      address: "Douala, Bépanda heavy axis, opposite Deborah Hotel | Yaoundé - Tsinga Chapel",
      phone1: "+237 693 02 35 89 / 686 01 31 84",
      phone2: "+237 691 89 18 14 (WhatsApp)",
      followUs: "Follow Our Networks & Communities"
    }
  }[lang];

  const restaurantGallery = [
    {
      id: 1,
      img: "/images/image of the resttaurant.jpeg",
      title: "Ambiance Animée & Conviviale",
      desc: "Nos clients profitent d'un service chaleureux et de plats savoureux au quotidien."
    },
    {
      id: 2,
      img: "/images/image of restau.jpeg",
      title: "Coin Décoré & Intimiste",
      desc: "Un cadre soigné avec des touches florales murales pour un moment de détente unique."
    },
    {
      id: 3,
      img: "/images/inage of restau.jpeg",
      title: "Espace Professionnel & Stockage",
      desc: "Rigueur et organisation pour garantir la fraîcheur et la qualité de nos produits et boissons."
    }
  ];

  const weeklyMenu: Record<DayKey, string[]> = {
    lundi: ["Saucisses sautées aux légumes", "Riz basmati parfumé"],
    mardi: ["Porc braisé spécial TIS", "Miondo / Plantain mûr"],
    mercredi: ["Saucisses en sauce tomate", "Spaghetti Bolognaise maison"],
    jeudi: ["Eru royal aux saucisses", "Waterfufu chaud"],
    vendredi: ["Poulet / Saucisses grillées", "Frites de plantains ou pomme de terre"],
    samedi: ["Ndolé traditionnel aux crevettes & porc", "Miondo / Bobolo"],
    dimanche: ["Menu chef spécial TIS", "Grillades & Accompagnement au choix"]
  };

  const daysMap: DayKey[] = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const currentDayKey: DayKey = daysMap[new Date().getDay()];

  const testimonials = [
    { name: "Dr. Arnauld Mbappe", role: "Entrepreneur, Douala", text: "Les saucisses TIS et les plats du restaurant à Bépanda sont d'une qualité irréprochable. C'est rapide, propre et délicieux !", stars: 5 },
    { name: "Marie-Claire Ngo Libii", role: "Cliente fidélisée, Yaoundé", text: "Le lait caillé et le jus de baobab naturels sont mes favoris absolus. Merci à toute l'équipe pour le professionnalisme.", stars: 5 },
    { name: "Serge Kenmoé", role: "Promoteur d'événementiel", text: "Le service braise pour nos cérémonies a surpassé toutes nos attentes. Viande fraîche et service au top !", stars: 5 }
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } }
    ]
  };

  const products = [
    { 
      id: 1, 
      name: "Saucisses Cuites + Complément", 
      desc: "2 grosses saucisses cuites avec accompagnement garni (C'est bon, c'est rapide et c'est chic !)", 
      price: "2 500 FCFA", 
      category: "Restaurant", 
      img: "/images/saucise quite product2.jpeg" 
    },
    { 
      id: 2, 
      name: "Jus de Baobab & Lait Caillé (TIS Restaurant)", 
      desc: "Boissons naturelles rafraîchissantes. 0,5L : 1 000F | 1,5L : 3 000F (Ouvert tous les jours de 11H à 22H)", 
      price: "1 000F - 3 000F", 
      category: "Boissons", 
      img: "/images/baobab-lait-caille.jpeg" 
    },
    { 
      id: 3, 
      name: "Petites Saucisses de Porc", 
      desc: "Paquet de pièces savoureuses et artisanales", 
      price: "5 000 FCFA", 
      category: "Saucisses", 
      img: "/images/saucise porc.jpeg" 
    },
    { 
      id: 4, 
      name: "Saucisses de Bœuf & Cocktails", 
      desc: "Crues, précuites ou cuites de qualité supérieure", 
      price: "Sur commande", 
      category: "Saucisses", 
      img: "/images/sacise de beauf.jpeg" 
    },
    { 
      id: 5, 
      name: "Intrants pour Saucisses", 
      desc: "Viande, gras, boyau et épices de qualité professionnelle", 
      price: "À partir de 1 500 FCFA /kg", 
      category: "Intrants", 
      img: "/images/instrantsaucis.jpeg" 
    },
    { 
      id: 6, 
      name: "Vente de Porc (Gros / Détail)", 
      desc: "Viande de porc fraîche et saine contrôlée", 
      price: "Selon quantité", 
      category: "Viande", 
      img: "/images/saucisporcnew.jpeg" 
    },
    { 
      id: 7, 
      name: "Foyer Écologique Modèle Standard", 
      desc: "Spécial pour la cuisson au charbon utilisant un système solaire intégré", 
      price: "35 000 FCFA", 
      category: "Écologie", 
      img: "/images/Foyer écologiquemodèlestandard.jpeg" 
    },
  ];

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white relative">
      
      {/* AUTOMATIC PROMO POP-UP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative border border-slate-100 transform transition-all">
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 z-25 bg-slate-900/70 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>
            <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-6 text-center relative">
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white text-red-700 font-bold text-2xl">
                TIS
              </div>
              <h3 className="text-xl font-extrabold mt-2 uppercase tracking-wide">TIS SARL & Restaurant</h3>
              <p className="text-xs text-red-200 mt-1">C'est bon, c'est rapide et c'est chic !</p>
            </div>
            <div className="p-6 pt-8 text-center space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                Commandez vos plats du jour préférés ou notre Foyer Écologique révolutionnaire dès maintenant. Livraison rapide à Douala & Yaoundé !
              </p>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-red-900 text-xs font-semibold">
                📞 Hotline: +237 691 89 18 14 / +237 693 02 35 89
              </div>
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://wa.me/237691891814" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <FaWhatsapp className="text-lg" /> WhatsApp
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

      {/* FLOATING TYPING BANNER */}
      {isTyping && (
        <div className="fixed bottom-6 left-6 z-40 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce">
          <span className="w-3 h-3 rounded-full bg-red-600 animate-ping"></span>
          <span className="font-bold text-sm tracking-widest">{popupMessage}</span>
        </div>
      )}

      {/* TOP BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-red-500" /> Douala & Yaoundé, Cameroun</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5"><FaPhone className="text-red-500" /> +237 693 02 35 89</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:thierryindustriesaucisses15@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FaEnvelope className="text-red-500" /> Contact Email
            </a>
            <div className="h-3 w-px bg-slate-700"></div>
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} 
              className="flex items-center gap-1 text-white font-bold bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors"
            >
              <FaGlobe className="text-red-500" /> {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </div>

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-700 to-red-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              TIS
            </div>
            <div>
              <span className="font-black text-lg tracking-tight text-slate-900 block leading-tight">THIERRY INDUSTRIE</span>
              <span className="text-xs font-bold text-red-600 tracking-widest uppercase">SAUCISSES SARL</span>
            </div>
          </a>

          {/* Minimalist Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
            <a href="#hero" className="hover:text-red-600 transition-colors">Accueil</a>
            
            <div className="relative" ref={productsRef}>
              <button 
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="flex items-center gap-1 hover:text-red-600 transition-colors py-2 focus:outline-none"
              >
                {t.navProducts} <FaChevronDown className={`text-xs transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 mt-2 animate-fadeIn">
                  <a href="#products" onClick={() => setProductsDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold">Saucisses & Viandes</a>
                  <a href="#products" onClick={() => setProductsDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold">Intrants de Fabrication</a>
                </div>
              )}
            </div>

            <a href="#restaurant" className="text-red-600 font-bold hover:underline">{t.navRestaurant}</a>
            <a href="#stove" className="hover:text-red-600 transition-colors">{t.navStove}</a>
            <a href="#training" className="hover:text-red-600 transition-colors">{t.navTraining}</a>

            <div className="relative" ref={moreRef}>
              <button 
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1 hover:text-red-600 transition-colors py-2 focus:outline-none"
              >
                {t.navMore} <FaChevronDown className={`text-xs transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 mt-2 animate-fadeIn">
                  <a href="#services" onClick={() => setMoreDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold">Services & Porciculture</a>
                  <a href="#founder" onClick={() => setMoreDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold">Promoteur & Équipe</a>
                  <a href="#gallery" onClick={() => setMoreDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold">Galerie Intérieur</a>
                  <a href="#testimonials" onClick={() => setMoreDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold">Témoignages</a>
                  <a href="#contact" onClick={() => setMoreDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-xs font-semibold">Contact</a>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/237691891814" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl shadow-md shadow-emerald-600/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-base" /> WhatsApp
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-800 p-2 focus:outline-none text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Accueil</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Produits & Tarifs</a>
            <a href="#restaurant" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-red-600">Le Restaurant</a>
            <a href="#stove" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Foyer Écologique</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Domaines d'Activité</a>
            <a href="#training" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">TIS VisionLabs 2035</a>
            <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Promoteur & Équipe</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Intérieur & Ambiance</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Témoignages Clients</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-slate-800 hover:text-red-600">Contact</a>
            <div className="pt-2">
              <a 
                href="https://wa.me/237691891814" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp className="text-lg" /> Commander sur WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left" data-aos="fade-right">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-red-500/30">
              <FaCheckCircle /> {t.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              THIERRY INDUSTRIE <span className="text-red-600 block mt-2">SAUCISSES SARL</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#restaurant" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-red-600/30 text-center transition-all transform hover:-translate-y-1"
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
          <div className="relative flex justify-center" data-aos="fade-left">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
              <img 
                src="/images/saucise quite product2.jpeg" 
                alt="TIS Saucisses & Restaurant" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="bg-red-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full">Plat Vedette</span>
                  <p className="text-white font-bold text-lg mt-2">Saucisses Cuites + Complément</p>
                  <p className="text-slate-300 text-xs">C'est bon, c'est rapide et c'est chic !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER & TEAM SECTION */}
      <section id="founder" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/25">
              Direction & Équipe
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">{t.founderTitle}</h2>
            <p className="text-slate-400 text-sm mt-2">{t.founderSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Card */}
            <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700 shadow-xl space-y-6" data-aos="fade-right">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-slate-700 flex-shrink-0 border-2 border-red-600 shadow-md">
                  <img src={companyData.founder.img} alt={companyData.founder.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-black">{companyData.founder.name}</h3>
                  <p className="text-red-400 text-xs font-bold mt-1 uppercase tracking-wide">{companyData.founder.title}</p>
                  <a 
                    href={companyData.founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 mt-3 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20"
                  >
                    <FaLinkedin /> Profil LinkedIn
                  </a>
                </div>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {companyData.founder.bio}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {companyData.founder.bio2}
              </p>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 italic">
                "{companyData.founder.quote}"
              </div>
            </div>

            {/* Team Showcase */}
            <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700 shadow-xl space-y-6" data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-700 border border-slate-600">
                <img src={teamInfo.teamImg} alt={teamInfo.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black">{teamInfo.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {teamInfo.subtitle} Nos collaborateurs s'investissent au quotidien dans les ateliers de fabrication, la porciculture, la restauration et l'innovation technologique pour garantir des standards irréprochables.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                  <span className="block text-red-500 font-black text-xl">+10</span>
                  <span className="text-xs text-slate-400">Experts & Partenaires</span>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                  <span className="block text-red-500 font-black text-xl">100%</span>
                  <span className="text-xs text-slate-400">Engagement Local</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / DOMAINES D'ACTIVITÉ */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Expertise TIS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">{t.servicesTitle}</h2>
            <p className="text-slate-600 text-sm mt-2">Une approche intégrée de l'amont à l'aval dans l'écosystème agroalimentaire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                🥩
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Industrie Agroalimentaire</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Fabrication artisanale de saucisses de porc et de bœuf de haute qualité, sans additifs chimiques nocifs, ainsi que la commercialisation d'intrants.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                🍽️
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Restauration & Fast-Food</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Le TIS Restaurant à Douala (Bépanda) vous accueille pour des plats du jour savoureux, des grillades et nos jus naturels de baobab et lait caillé.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                🔥
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Foyers Écologiques</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Conception et vente de foyers à charbon à ventilation assistée solaire. Une alternative économique et durable pour les ménages camerounais.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="400">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                🎓
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Formation & Conseil</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Programmes de formation professionnelle en transformation de charcuterie, porciculture et accompagnement d'entrepreneurs à travers TIS VisionLabs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS & CATALOG SECTION */}
      <section id="products" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Catalogue TIS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">{t.catalog}</h2>
            <p className="text-slate-600 text-sm mt-2">Découvrez nos produits certifiés et commandez directement en ligne.</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12" data-aos="fade-up">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white pl-12 pr-4 py-4 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col group" data-aos="fade-up">
                <div className="relative aspect-video overflow-hidden bg-slate-200">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {prod.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{prod.name}</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{prod.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="font-black text-red-600 text-base">{prod.price}</span>
                    <a 
                      href={`https://wa.me/237691891814?text=Bonjour,%20je%20souhaite%20commander%20:${encodeURIComponent(prod.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <FaWhatsapp /> Commander
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANT SECTION */}
      <section id="restaurant" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              TIS Restaurant
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">{t.restaurantTitle}</h2>
            <p className="text-slate-600 text-sm mt-2">{t.restaurantSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-2xl font-black text-slate-900">{t.dailySpecialsTitle}</h3>
              <p className="text-slate-600 text-sm">{t.dailySpecialsSubtitle}</p>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="font-bold text-xs uppercase text-red-600 tracking-wider">Jour Actuel ({currentDayKey.toUpperCase()})</span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Spécialité du Jour</span>
                </div>
                <ul className="space-y-2">
                  {weeklyMenu[currentDayKey]?.map((dish, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-800 font-medium text-sm">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span> {dish}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://wa.me/237691891814" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <FaWhatsapp className="text-lg" /> Réserver sa table ou plat
                </a>
                <a 
                  href="tel:+237691891814" 
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center gap-2 transition-all"
                >
                  <FaPhone /> {companyData.restaurant.phone}
                </a>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100 aspect-video">
                <img src="/images/image of the resttaurant.jpeg" alt="TIS Restaurant Ambiance" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOYER ÉCOLOGIQUE SECTION */}
      <section id="stove" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <span className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-red-500/25">
                <FaSolarPanel /> Innovation Énergétique
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">{stoveDetails.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {stoveDetails.description}
              </p>
              <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 text-red-400 font-bold text-xs">
                {stoveDetails.specs}
              </div>

              <div className="space-y-3 pt-2">
                {stoveDetails.models.map((mod, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-white">{mod.name}</h4>
                      <p className="text-slate-400 text-xs mt-0.5">{mod.desc}</p>
                    </div>
                    <span className="font-black text-red-500 text-sm whitespace-nowrap">{mod.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/237691891814?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20le%20Foyer%20Écologique%20TIS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-emerald-600/30 inline-flex items-center gap-2 transition-all"
                >
                  <FaWhatsapp className="text-lg" /> Commander le Foyer Écologique
                </a>
              </div>
            </div>

            <div className="relative flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                <img src={stoveDetails.image} alt="Foyer Écologique TIS" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING / TIS VISIONLABS 2035 & FORMATIONS SECTION */}
      <section id="training" className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-red-200">
              <FaShieldAlt className="text-red-600" /> Centre de Formation Professionnelle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">{t.trainingTitle}</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Formez-vous aux métiers de la transformation agroalimentaire et devenez un acteur clé de l'industrie camerounaise de demain.
            </p>
          </div>

          {/* Main Content Grid with Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Image Showcase */}
            <div className="lg:col-span-5 relative" data-aos="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-4/5 group">
                <img 
                  src="/images/vision-labs.jpeg" 
                  alt="TIS VisionLabs Formation" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
                  <span className="bg-red-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full w-max mb-3 shadow-md">
                    Programmes de Formation
                  </span>
                  <h4 className="text-white font-extrabold text-xl leading-snug">
                    Apprentissage Pratique & Certification TIS
                  </h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                    Un cadre d'expertise dédié à la transmission des compétences en charcuterie et gestion d'entreprise.
                  </p>
                </div>
              </div>
              {/* Decorative background blur element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Right Column: Key Pillars / Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
              
              {/* Card 1 */}
              <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-200/80 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-black text-base mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    01
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Formations Pratiques en Charcuterie</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Maîtrisez les techniques de fabrication professionnelle de saucisses : sélection rigoureuse des viandes, dosage des épices, fumage et normes d'hygiène.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-red-600 font-bold text-xs">
                  <FaCheckCircle /> Expertise technique certifiée
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-200/80 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-black text-base mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    02
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Mentorship & Entrepreneuriat</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Profitez du retour d'expérience de notre promoteur (Lauréat Fondation Tony Elumelu - TEF) pour structurer, lancer et pérenniser votre propre projet agroalimentaire.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-red-600 font-bold text-xs">
                  <FaUsers /> Accompagnement TEF & Coaching
                </div>
              </div>

              {/* Card 3 (Full Width on Desktop grid) */}
              <div className="sm:col-span-2 bg-gradient-to-r from-slate-900 to-red-950 text-white p-7 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-red-400 font-bold text-xs uppercase tracking-widest">Sessions de Formation Ouvertes</span>
                  <h3 className="text-lg font-black">Prêt à lancer votre carrière ou votre entreprise ?</h3>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-xl">
                    Inscrivez-vous dès maintenant à nos prochaines sessions de formation professionnelle certifiante chez TIS SARL.
                  </p>
                </div>
                <a 
                  href="https://wa.me/237691891814?text=Bonjour,%20je%20souhaite%20m'inscrire%20aux%20formations%20professionnelles%20TIS%20VisionLabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-2xl shadow-lg transition-all whitespace-nowrap flex items-center gap-2"
                >
                  <FaWhatsapp className="text-base" /> S'inscrire à la formation
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Immersion Visuelle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">{t.galleryTitle}</h2>
            <p className="text-slate-600 text-sm mt-2">{t.gallerySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantGallery.map((item) => (
              <div key={item.id} className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-200 group" data-aos="fade-up">
                <div className="aspect-video overflow-hidden bg-slate-200">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              Avis Clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">{t.testimonialTitle}</h2>
            <p className="text-slate-600 text-sm mt-2">{t.testimonialSubtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <Slider {...testimonialSettings}>
              {testimonials.map((test, idx) => (
                <div key={idx} className="px-3">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-4 h-full flex flex-col justify-between">
                    <FaQuoteLeft className="text-red-600 text-2xl opacity-50" />
                    <p className="text-slate-700 text-sm italic leading-relaxed">"{test.text}"</p>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                        <p className="text-slate-500 text-xs">{test.role}</p>
                      </div>
                      <div className="flex text-amber-400 text-xs">
                        {[...Array(test.stars)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* SOCIAL HUB SECTION */}
      <SocialHub />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/25">
              Contactez-Nous
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">Parlons de vos besoins</h2>
            <p className="text-slate-400 text-sm mt-2">Nos équipes à Douala et Yaoundé sont à votre entière disposition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center text-xl mx-auto border border-red-500/30">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-bold text-lg">Nos Implantations</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{t.address}</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center text-xl mx-auto border border-red-500/30">
                <FaPhone />
              </div>
              <h3 className="font-bold text-lg">Téléphones</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{t.phone1}<br />{t.phone2}</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center space-y-4" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center text-xl mx-auto border border-red-500/30">
                <FaEnvelope />
              </div>
              <h3 className="font-bold text-lg">Email & Réseaux</h3>
              <p className="text-slate-300 text-xs leading-relaxed">thierryindustriesaucisses15@gmail.com<br />Réactivité garantie sous 24h.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER IMPORT */}
      <Footer />

      {/* FLOATING WHATSAPP COMPONENT */}
      <WhatsAppFloat />

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Remonter en haut"
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
}