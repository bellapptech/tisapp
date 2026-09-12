'use client';
import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaBell } from 'react-icons/fa';

export default function NewsletterBox() {
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.trim()) {
      setSubmitted(true);
      // Here you can handle API submission or redirection to WhatsApp with the contact info
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-red-200 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/10">
          <FaBell /> Alertes & Nouveautés TIS
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Ne ratez aucun Plat du Jour ni nos Offres Exclusives
        </h2>
        <p className="text-red-100 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
          Inscrivez votre adresse email ou numéro WhatsApp pour recevoir nos actualités, promos sur les saucisses et nouveautés sur les foyers écologiques.
        </p>

        {submitted ? (
          <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto flex items-center justify-center gap-3 animate-fadeIn">
            <FaCheckCircle className="text-emerald-400 text-2xl flex-shrink-0" />
            <p className="text-white text-xs sm:text-sm font-semibold text-left">
              Merci ! Votre inscription a bien été prise en compte. Vous recevrez bientôt nos actualités TIS.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              required
              placeholder="Votre email ou numéro WhatsApp..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="flex-1 bg-white text-slate-900 px-4 py-3.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-400 shadow-inner"
            />
            <button 
              type="submit"
              className="bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <FaPaperPlane /> S'inscrire
            </button>
          </form>
        )}
      </div>
    </section>
  );
}