
"use client";

import React from "react";
import {
  CalendarCheck,
  CreditCard,
  Smartphone,
  Building2,
  Copy,
  Check,
  Truck,
  Utensils,
  ShieldCheck,
} from "lucide-react";

import { useState } from "react";

export default function PaymentReservation() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <section
      id="payment-reservation"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ============================================================
            HEADER
        ============================================================ */}
        <div
          className="mx-auto mb-12 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
            <CalendarCheck className="h-4 w-4" />
            Réservation & Paiement
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Réservez votre commande
            <span className="block text-red-600">
              en toute simplicité
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Commandez vos produits et plats TIS SARL facilement.
            Pour certains plats, la préparation est disponible
            <strong className="text-slate-900">
              {" "}
              uniquement sur réservation.
            </strong>
          </p>
        </div>

        {/* ============================================================
            RESERVATION NOTICE
        ============================================================ */}
        <div
          className="mb-10 overflow-hidden rounded-3xl border border-red-200 bg-white shadow-xl shadow-red-900/5"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row">

            <div className="flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 p-8 lg:w-1/3 lg:p-10">
              <div className="text-center text-white">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <Utensils className="h-8 w-8" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-100">
                  Information importante
                </p>

                <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                  Plats sur réservation
                </h3>
              </div>
            </div>

            <div className="flex items-center p-7 sm:p-8 lg:w-2/3 lg:p-10">
              <div>
                <p className="text-lg font-bold text-slate-900">
                  Certains plats sont disponibles uniquement sur réservation.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Pensez à réserver votre plat à l’avance afin de nous
                  permettre de préparer votre commande dans les meilleures
                  conditions.
                </p>

                <a
                  href="#reservation-contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Faire une réservation
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================
            PAYMENT TITLE
        ============================================================ */}
        <div
          className="mb-8 text-center"
          data-aos="fade-up"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
            TIS SARL
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
            Nos modes de paiement
          </h3>

          <p className="mt-2 text-slate-600">
            Choisissez le moyen de paiement qui vous convient.
          </p>
        </div>

        {/* ============================================================
            PAYMENT CARDS
        ============================================================ */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* ORANGE MONEY */}
          <div
            className="group rounded-3xl border border-orange-200 bg-white p-6 shadow-lg shadow-orange-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Smartphone className="h-7 w-7" />
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">
                Mobile Money
              </span>
            </div>

            <h4 className="mt-6 text-xl font-black text-slate-900">
              Orange Money
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Paiement rapide et sécurisé
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                Code USSD
              </p>

              <div className="flex items-center gap-2">
                <code className="flex-1 break-all text-sm font-black text-slate-900">
                  #150*47*914250*MONTANT#
                </code>

                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      "#150*47*914250*MONTANT#",
                      "orange"
                    )
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:text-orange-600"
                  aria-label="Copier le code Orange Money"
                >
                  {copied === "orange" ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              <span className="font-bold text-slate-900">Compte :</span>{" "}
              TIS SARL
            </p>
          </div>

          {/* MOBILE MONEY */}
          <div
            className="group rounded-3xl border border-blue-200 bg-white p-6 shadow-lg shadow-blue-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Smartphone className="h-7 w-7" />
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                Mobile Money
              </span>
            </div>

            <h4 className="mt-6 text-xl font-black text-slate-900">
              Mobile Money
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Paiement mobile
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                Code USSD
              </p>

              <div className="flex items-center gap-2">
                <code className="flex-1 break-all text-sm font-black text-slate-900">
                  *126*4*299219*Montant#
                </code>

                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      "*126*4*299219*Montant#",
                      "mobile"
                    )
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:text-blue-600"
                  aria-label="Copier le code Mobile Money"
                >
                  {copied === "mobile" ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              <span className="font-bold text-slate-900">Nom :</span>{" "}
              Thierry Industrie Saucisses
            </p>
          </div>

          {/* BANK */}
          <div
            className="group rounded-3xl border border-emerald-200 bg-white p-6 shadow-lg shadow-emerald-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 md:col-span-2 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <Building2 className="h-7 w-7" />
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                Banque
              </span>
            </div>

            <h4 className="mt-6 text-xl font-black text-slate-900">
              Chèque ou virement
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Paiement bancaire
            </p>

            <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Banque
                </p>
                <p className="mt-1 font-black text-slate-900">
                  UBA
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  RIB
                </p>

                <div className="mt-1 flex items-start gap-2">
                  <p className="flex-1 break-all text-sm font-black text-slate-900">
                    10033 05206 06011000543 12
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        "10033 05206 06011000543 12",
                        "rib"
                      )
                    }
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:text-emerald-600"
                    aria-label="Copier le RIB"
                  >
                    {copied === "rib" ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              <span className="font-bold text-slate-900">
                Nom du compte :
              </span>{" "}
              Thierry Industrie Saucisses SARL
            </p>
          </div>

        </div>

        {/* ============================================================
            DELIVERY NOTE
        ============================================================ */}
        <div
          className="mt-10 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6 shadow-sm sm:p-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm">
              <Truck className="h-7 w-7" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">
                Livraison & paiement
              </p>

              <h4 className="mt-1 text-xl font-black text-slate-900">
                Important à savoir
              </h4>

              <p className="mt-3 leading-7 text-slate-700">
                Donnez uniquement les{" "}
                <strong>frais de livraison</strong> au livreur et
                effectuez le dépôt du reste du montant directement
                selon l’un de nos modes de paiement indiqués ci-dessus.
              </p>
            </div>

          </div>
        </div>

        {/* ============================================================
            SECURITY / TRUST
        ============================================================ */}
        <div
          className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-slate-500 sm:flex-row"
          data-aos="fade-up"
        >
          <ShieldCheck className="h-5 w-5 text-green-600" />

          <span>
            Paiement auprès de{" "}
            <strong className="text-slate-800">
              Thierry Industrie Saucisses SARL
            </strong>
          </span>
        </div>

        {/* ============================================================
            RESERVATION CTA
        ============================================================ */}
        <div
          id="reservation-contact"
          className="mt-12 rounded-3xl bg-slate-900 p-8 text-center text-white shadow-2xl sm:p-10"
          data-aos="fade-up"
        >
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
              <CalendarCheck className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-2xl font-black sm:text-3xl">
              Besoin de réserver un plat ?
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Contactez-nous pour confirmer la disponibilité,
              effectuer votre réservation et recevoir les
              informations nécessaires pour votre commande.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
              >
                <CalendarCheck className="h-5 w-5" />
                Réserver maintenant
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/15"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
