'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch, 
  FaFacebook, FaLinkedin, FaTiktok, FaGraduationCap, FaUtensils, 
  FaShoppingBasket, FaStore, FaGlobe, FaBars, FaTimes, FaCheckCircle, FaSun
} from 'react-icons/fa';

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // États pour le Pop-up et l'effet Machine à écrire (Typing text)
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const fullText = "YOU ARE WELCOME";

  // 1. Afficher le pop-up après 10 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Effet Machine à écrire (Typing effect) pour le message de fermeture
  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      setPopupMessage(''); // Réinitialiser le texte
      
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setPopupMessage((prev) => prev + fullText.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Faire disparaître le message après 5 secondes supplémentaires
          setTimeout(() => {
            setPopupMessage('');
          }, 5000);
        }
      }, 90); // Vitesse de frappe fluide

      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  const closePopup = () => {
    setShowPopup(false);
    setIsTyping(true); // Déclenche l'effet de frappe du texte corrigé
  };

  // Textes multilingues
  const t = {
    fr: {
      tagline: "L'Excellence du Made in Cameroon",
      subtitle: "Industrie agroalimentaire, restaurant, porciculture, foyers écologiques et formation professionnelle.",
      catalog: "Nos Produits & Tarifs",
      searchPlaceholder: "Rechercher un produit (saucisses, intrants, porc, foyer...)",
      servicesTitle: "Nos Domaines d'Activité",
      founderTitle: "Le Mot du Promoteur",
      trainingTitle: "TIS VisionLabs 2035",
      contactTitle: "Contactez-Nous",
      whatsappBtn: "Commander sur WhatsApp",
      navProducts: "Produits",
      navServices: "Services",
      navTraining: "Formation",
      navAbout: "À propos",
      navContact: "Contact",
      address: "Douala, Axe lourd Bépanda, face Hôtel Déborah",
      phone1: "+237 693 02 35 89 / 686 01 31 84",
      phone2: "+237 691 89 18 14 (WhatsApp)",
      email: "thierryindustriesaucisses15@gmail.com"
    },
    en: {
      tagline: "Excellence in Made in Cameroon",
      subtitle: "Agro-food industry, restaurant, pork supply, eco-friendly stoves and professional training.",
      catalog: "Our Products & Prices",
      searchPlaceholder: "Search a product (sausages, inputs, pork, stove...)",
      servicesTitle: "Our Services",
      founderTitle: "Meet the Founder",
      trainingTitle: "TIS VisionLabs 2035",
      contactTitle: "Contact Us",
      whatsappBtn: "Order on WhatsApp",
      navProducts: "Products",
      navServices: "Services",
      navTraining: "Training",
      navAbout: "About",
      navContact: "Contact",
      address: "Douala, Bépanda heavy axis, opposite Deborah Hotel",
      phone1: "+237 693 02 35 89 / 686 01 31 84",
      phone2: "+237 691 89 18 14 (WhatsApp)",
      email: "thierryindustriesaucisses15@gmail.com"
    }
  }[lang];

  // Données des produits
  const products = [
    { id: 1, name: "Petites Saucisses de Porc", desc: "Paquet de 25 pièces savoureuses", price: "5 000 FCFA", category: "Saucisses", img: "/images/saucise porc.jpeg" },
    { id: 2, name: "Saucisses de Bœuf", desc: "Crues, précuites ou cuites de qualité supérieure", price: "Sur commande", category: "Saucisses", img: "/images/sacise de beauf.jpeg" },
    { id: 3, name: "Grosses Saucisses Précuites", desc: "Idéales pour vos réceptions et grillades", price: "Sur commande", category: "Saucisses", img: "/images/grosses saucisses precuites product.jpeg" },
    { id: 4, name: "Intrants pour Saucisses (Gras de porc, etc.)", desc: "Viande, gras, boyau et épices de qualité professionnelle", price: "À partir de 1 500 FCFA /kg", category: "Intrants", img: "/images/instrantsaucis.jpeg" },
    { id: 5, name: "Vente de Porc (Gros / Détail)", desc: "Viande de porc fraîche et saine contrôlée", price: "Selon quantité", category: "Viande", img: "/images/saucisporcnew.jpeg" },
    { id: 6, name: "Foyer Écologique Modèle Standard", desc: "Spécial pour la cuisson au charbon utilisant un système solaire intégré", price: "50 000 FCFA", category: "Écologie", img: "/images/Foyer écologiquemodèlestandard.jpeg" },
    { id: 7, name: "Jus de Baobab & Lait Caillé", desc: "Boissons locales rafraîchissantes et nutritives", price: "Frais & Naturels", category: "Boissons", img: "/images/platesoftheday.jpeg" },
  ];

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 relative">
      
      {/* POP-UP AUTOMATIQUE APRÈS 10 SECONDES (DESIGN ULTRA RESPONSIF) */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-300">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative border border-slate-100 transform transition-all animate-in fade-in zoom-in-95">
            
            {/* Bouton de fermeture élégant */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 bg-slate-900/70 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              aria-label="Fermer"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Image du produit responsive */}
            <div className="h-56 sm:h-64 bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
              <span className="absolute top-4 left-4 z-20 bg-emerald-600 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md tracking-wide uppercase">
                Écologie / Solaire
              </span>
              <img 
                src="/images/Foyer écologiquemodèlestandard.jpeg" 
                alt="Foyer Écologique Modèle Standard" 
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Contenu textuel */}
            <div className="p-6 sm:p-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                Foyer Écologique Modèle Standard
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Spécial pour la cuisson au charbon utilisant un système solaire intégré. Économique, robuste et moderne pour réduire votre consommation et protéger l'environnement.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-slate-100">
                <span className="text-red-700 font-black text-2xl">50 000 FCFA</span>
                <a 
                  href="https://wa.me/237691891814?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20le%20Foyer%20Écologique%20Modèle%20Standard." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition transform active:scale-95"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Commander</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MESSAGE FLOTTANT DESIGN AVEC EFFET MACHINE À ÉCRIRE ("YOU ARE WELCOME") */}
      {popupMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-sm sm:max-w-md bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-6 py-4 rounded-2xl shadow-2xl font-black tracking-wider text-center border-2 border-amber-300 flex items-center justify-center space-x-2 animate-bounce">
          <span className="text-base sm:text-lg uppercase drop-shadow-sm">{popupMessage}</span>
          <span className="w-2.5 h-6 bg-slate-950 inline-block animate-pulse"></span>
        </div>
      )}

      {/* BOUTON WHATSAPP FLOTTANT */}
      <a 
        href="https://wa.me/237691891814" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/images/tisreallogo.png" alt="TIS Logo" className="h-12 w-auto object-contain" />
            <div>
              <span className="font-bold text-lg block leading-tight text-slate-900">TIS SARL</span>
              <span className="text-xs text-slate-500">Thierry Industrie Saucisses</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#products" className="hover:text-red-700 transition">{t.navProducts}</a>
            <a href="#services" className="hover:text-red-700 transition">{t.navServices}</a>
            <a href="#training" className="hover:text-red-700 transition">{t.navTraining}</a>
            <a href="#about" className="hover:text-red-700 transition">{t.navAbout}</a>
            <a href="#contact" className="hover:text-red-700 transition">{t.navContact}</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-1 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full text-sm font-semibold transition"
            >
              <FaGlobe className="text-red-700" />
              <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-800 text-2xl focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">{t.navProducts}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">{t.navServices}</a>
            <a href="#training" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">{t.navTraining}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">{t.navAbout}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">{t.navContact}</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative text-white py-20 lg:py-28 px-4 text-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="/images/slides.jpeg" alt="Hero Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="bg-amber-400 text-slate-900 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider inline-block">
            {t.tagline}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Thierry Industrie Saucisses <span className="text-amber-400">SARL</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a 
              href="https://wa.me/237691891814?text=Bonjour,%20je%20souhaite%20commander%20vos%20produits." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center space-x-3 transition transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-2xl" />
              <span>{t.whatsappBtn}</span>
            </a>
            <a 
              href="#training" 
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center space-x-3 transition"
            >
              <FaGraduationCap className="text-xl" />
              <span>Découvrir la Formation 2035</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION RECHERCHE DE PRODUITS */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">{t.catalog}</h2>
          <p className="text-slate-600">Découvrez nos produits frais, emballés et disponibles à Douala</p>
          
          <div className="max-w-md mx-auto relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <FaSearch />
            </span>
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition flex flex-col justify-between">
              <div className="bg-slate-100 h-52 relative overflow-hidden">
                <span className="absolute top-3 right-3 z-10 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {prod.category}
                </span>
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{prod.name}</h3>
                  <p className="text-slate-600 text-sm mt-1">{prod.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-red-700 font-extrabold text-lg">{prod.price}</span>
                  <a 
                    href={`https://wa.me/237691891814?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20votre%20produit:%20${prod.name}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
                  >
                    Commander
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION NOS SERVICES & RESTAURANT */}
      <section id="services" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">{t.servicesTitle}</h2>
            <p className="text-slate-600">Un écosystème complet dédié à la qualité et au service client</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <div className="w-12 h-12 bg-red-100 text-red-700 rounded-lg flex items-center justify-center text-xl">
                <FaStore />
              </div>
              <h3 className="font-bold text-lg">Saucisses & Intrants</h3>
              <p className="text-sm text-slate-600">Vente de saucisses et d'intrants de qualité professionnelle.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center text-xl">
                <FaUtensils />
              </div>
              <h3 className="font-bold text-lg">TIS Restaurant</h3>
              <p className="text-sm text-slate-600">Dégustation de plats succulents et de boissons locales rafraîchissantes.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">
                <FaShoppingBasket />
              </div>
              <h3 className="font-bold text-lg">Porciculture & Gros</h3>
              <p className="text-sm text-slate-600">Vente de porc frais et sain en gros et en détail.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-xl">
                <FaSun />
              </div>
              <h3 className="font-bold text-lg">Foyer Écologique Solaire</h3>
              <p className="text-sm text-slate-600">Innovation pour la cuisson au charbon combinant l'énergie solaire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FORMATION TIS VISIONLABS 2035 */}
      <section id="training" className="py-20 bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-950 rounded-3xl p-8 lg:p-12 shadow-2xl border border-red-900 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="bg-amber-400 text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                {t.trainingTitle}
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Formation en Fabrication de Saucisses Artisanales
              </h2>
              <p className="text-slate-200 text-sm lg:text-base">
                Porc, bœuf et cocktails. Maîtrisez les techniques de fabrication et transformez votre savoir-faire en une véritable opportunité.
              </p>
              <a 
                href="https://wa.me/237691891814?text=Bonjour,%20je%20souhaite%20m'inscrire%20à%20la%20formation%20TIS%20VisionLabs%202035." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition"
              >
                <FaWhatsapp className="text-xl" />
                <span>S'inscrire via WhatsApp</span>
              </a>
            </div>
            <div className="space-y-6 lg:pl-6 border-t lg:border-t-0 lg:border-l border-red-900 pt-8 lg:pt-0">
              <h3 className="text-2xl font-bold">Apprendre. Manger. Entreprendre.</h3>
              <p className="text-slate-300 italic">« Plus qu’une formation, une opportunité de vie ! »</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-slate-200 text-slate-800 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-block">
              Le Promoteur
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Joël Thierry TSOPMO</h2>
            <p className="text-slate-600 leading-relaxed">
              Entrepreneur camerounais et spécialiste de la transformation agroalimentaire. Titulaire d’une Licence en Biochimie, option Nutrition et Sécurité Alimentaire, de l’Université de Dschang.
            </p>
          </div>
          <div className="rounded-3xl h-96 flex items-center justify-center relative overflow-hidden shadow-lg border border-slate-300">
            <img src="/images/ceo.jpeg" alt="Joël Thierry TSOPMO - CEO" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold">{t.contactTitle}</h2>
              <p className="text-slate-400">Contactez-nous pour toute commande ou question.</p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center text-white text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Localisation</span>
                    <span className="font-medium">Douala, axe lourd Bépanda, face hôtel Déborah</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold">Message bien envoyé !</h3>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-2">Envoyez-nous un message</h3>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Votre Nom</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-700" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Votre Téléphone / WhatsApp</label>
                    <input 
                      type="text" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-700" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Votre Message</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-700"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-lg transition"
                  >
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>&copy; {new Date().getFullYear()} TIS SARL (Thierry Industrie Saucisses). Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}