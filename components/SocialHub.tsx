'use client';

import React from 'react';
import { 
  FaFacebook, FaLinkedin, FaTiktok, FaWhatsapp, FaGlobe 
} from 'react-icons/fa';

export default function SocialHub() {
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