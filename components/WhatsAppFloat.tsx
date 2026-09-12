'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      {/* Tooltip / Label that appears on hover */}
      <span className="absolute left-14 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Discutez avec TIS sur WhatsApp 👋
      </span>

      {/* Pulsing WhatsApp Floating Button */}
      <a 
        href="https://wa.me/237691891814?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20les%20produits%20et%20services%20de%20TIS%20SARL." 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center text-3xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <FaWhatsapp />
        {/* Subtle ping animation ring */}
        <span className="absolute inset-0 rounded-2xl bg-emerald-500 animate-ping opacity-25 pointer-events-none"></span>
      </a>
    </div>
  );
}