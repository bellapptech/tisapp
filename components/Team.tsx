import React from 'react';
import { FaUsers, FaLinkedin } from 'react-icons/fa';

export default function Team() {
  const teamMembers = [
    {
      name: "Joël Thierry TSOPMO",
      role: "Promoteur & Gérant",
      desc: "Spécialiste en transformation agroalimentaire, nutrition et sécurité alimentaire.",
      img: "/images/ceo.jpeg",
      linkedin: "https://www.linkedin.com/in/jo%C3%ABl-thierry-tsopmo-386773194"
    },
    {
      name: "Équipe Opérationnelle TIS",
      role: "Production & Restauration",
      desc: "Des professionnels engagés pour garantir la qualité, l'hygiène et le goût au quotidien.",
      img: "/images/team-tis.jpeg",
      linkedin: "https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 flex items-center justify-center gap-1.5 w-fit mx-auto">
            <FaUsers /> Notre Équipe
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Des Professionnels Passionnés
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Une équipe dynamique dédiée au développement du Made in Cameroon et à votre satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-red-600 font-bold text-xs uppercase tracking-wider">{member.role}</span>
                  <h3 className="font-extrabold text-slate-900 text-xl">{member.name}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{member.desc}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md"
                >
                  <FaLinkedin /> Voir le profil
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}