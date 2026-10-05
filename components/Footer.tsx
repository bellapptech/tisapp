"use client";

import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaMobileAlt,
  FaUniversity,
  FaExclamationTriangle,
  FaCreditCard,
  FaUtensils,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-300 border-t border-slate-800 relative z-20"
    >
      {/* ============================================================
          RESERVATION & PAYMENT SECTION (HIGH VISIBILITY)
      ============================================================ */}
      <section
        id="reservation-paiement"
        className="w-full bg-slate-900 border-b border-slate-800 py-12 sm:py-16 relative z-10 block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-red-800/80 bg-slate-950 p-6 sm:p-10 shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge */}
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400 shadow-md">
                  <FaUtensils size={12} /> Réservation uniquement
                </span>
              </div>

              {/* Title */}
              <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Réservation & Paiement
              </h2>

              {/* Reservation Disclaimer */}
              <div className="mt-4 max-w-2xl mx-auto bg-slate-900/90 border border-red-900/50 rounded-xl p-4 text-center shadow-inner">
                <p className="text-sm sm:text-base font-semibold text-red-200">
                  Au niveau des plats, mentionné uniquement sur réservation.
                </p>
              </div>

              {/* Company Header */}
              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-center">
                <p className="text-base sm:text-lg font-black tracking-wide text-white">
                  THIERRY INDUSTRIE SAUCISSES SARL
                </p>
                <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center gap-2">
                  <FaCreditCard /> NOS MODES DE PAIEMENT
                </p>
              </div>

              {/* PAYMENT METHODS GRID */}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* 1. ORANGE MONEY */}
                <div className="rounded-2xl border border-orange-500/40 bg-slate-900 p-6 flex flex-col justify-between shadow-lg hover:border-orange-500/70 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
                        <FaMobileAlt size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                          1️⃣ Orange Money
                        </p>
                        <p className="text-sm font-bold text-white">Paiement Mobile</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-orange-500/30 bg-slate-950 p-4 space-y-2">
                      <p className="text-[11px] font-bold uppercase text-slate-400">Code USSD Direct</p>
                      <p className="font-mono text-sm font-bold text-white bg-slate-900 p-2 rounded border border-slate-800 break-all select-all">
                        #150*47*914250*MONTANT#
                      </p>
                      <p className="text-xs font-semibold text-orange-400 pt-1">
                        Intitulé : TIS SARL
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. MOBILE MONEY */}
                <div className="rounded-2xl border border-yellow-500/40 bg-slate-900 p-6 flex flex-col justify-between shadow-lg hover:border-yellow-500/70 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-slate-950 shadow-md">
                        <FaMobileAlt size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                          2️⃣ Mobile Money
                        </p>
                        <p className="text-sm font-bold text-white">MTN MoMo</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-yellow-500/30 bg-slate-950 p-4 space-y-2">
                      <p className="text-[11px] font-bold uppercase text-slate-400">Code USSD Direct</p>
                      <p className="font-mono text-sm font-bold text-white bg-slate-900 p-2 rounded border border-slate-800 break-all select-all">
                        *126*4*299219*Montant#
                      </p>
                      <p className="text-xs font-semibold text-yellow-400 pt-1">
                        Nom : Thierry Industrie saucisses
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. BANK TRANSFER */}
                <div className="rounded-2xl border border-emerald-500/40 bg-slate-900 p-6 flex flex-col justify-between shadow-lg hover:border-emerald-500/70 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                        <FaUniversity size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                          3️⃣ Chèque / Virement
                        </p>
                        <p className="text-sm font-bold text-white">Compte Bancaire</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-500/30 bg-slate-950 p-4 space-y-1.5 text-xs">
                      <p className="text-slate-400">Banque : <strong className="text-white">UBA</strong></p>
                      <p className="text-slate-400">RIB :</p>
                      <p className="font-mono text-xs font-bold text-white bg-slate-900 p-2 rounded border border-slate-800 select-all break-all">
                        10033 05206 06011000543 12
                      </p>
                      <p className="text-emerald-400 font-semibold pt-1">
                        Thierry Industrie Saucisses SARL
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DELIVERY IMPORTANT NOTICE */}
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 sm:p-5">
                <FaExclamationTriangle className="text-amber-400 text-xl shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-amber-200 leading-relaxed">
                  <strong className="text-amber-400 uppercase font-black mr-2">NB :</strong>
                  Donnez juste les frais de livraison au livreur et faites-nous le dépôt du reste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN FOOTER CONTENT
      ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-black text-white">
              THIERRY INDUSTRIE SAUCISSES SARL
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Une entreprise camerounaise spécialisée dans la production
              et la commercialisation de produits de charcuterie et services traiteur.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
              Navigation
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <a href="#accueil" className="block transition hover:text-white">Accueil</a>
              <a href="#about" className="block transition hover:text-white">À propos</a>
              <a href="#produits" className="block transition hover:text-white">Nos produits</a>
              <a href="#menu" className="block transition hover:text-white">Menu</a>
              <a href="#reservation-paiement" className="block font-bold text-red-400 transition hover:text-red-300">
                Réservation & Paiement
              </a>
              <a href="#contact" className="block transition hover:text-white">Contact</a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-red-500" />
                <p>Douala Bépanda, face Hôtel Déborah</p>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-red-500" />
                <p>Yaoundé, Chapelle Tsinga</p>
              </div>
              <a href="tel:+237693023589" className="flex items-center gap-3 transition hover:text-white">
                <FaPhone className="text-red-500" /> +237 693 02 35 89
              </a>
              <a href="tel:+237691891814" className="flex items-center gap-3 transition hover:text-white">
                <FaPhone className="text-red-500" /> +237 691 89 18 14
              </a>
              <a href="mailto:thierryindustriesaucisses15@gmail.com" className="flex items-center gap-3 break-all transition hover:text-white">
                <FaEnvelope className="shrink-0 text-red-500" /> thierryindustriesaucisses15@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
              Suivez-nous
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://www.facebook.com/share/1Ci6gUgwsN/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-blue-500 hover:text-blue-500">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-blue-500 hover:text-blue-500">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.tiktok.com/@thierryindustriesauciss0" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-white hover:text-white">
                <FaTiktok size={18} />
              </a>
              <a href="https://whatsapp.com/channel/0029Vb8GKWh3wtb7bRQLsM1c" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-green-500 hover:text-green-500">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Thierry Industrie Saucisses SARL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}