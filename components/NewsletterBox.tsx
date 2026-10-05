'use client';

import React, { useState } from 'react';
import {
  FaPaperPlane,
  FaCheckCircle,
  FaBell,
  FaExclamationCircle,
  FaSpinner,
  FaWhatsapp,
} from 'react-icons/fa';

export default function NewsletterBox() {
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [whatsappSuccess, setWhatsappSuccess] = useState(false);

  const isEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isWhatsAppNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');

    // Cameroon WhatsApp numbers:
    // 6XXXXXXXX or 2376XXXXXXXX
    return /^6\d{8}$/.test(digits) || /^2376\d{8}$/.test(digits);
  };

  const formatCameroonWhatsApp = (value: string) => {
    let digits = value.replace(/\D/g, '');

    if (digits.startsWith('237')) {
      return digits;
    }

    if (digits.startsWith('6') && digits.length === 9) {
      return `237${digits}`;
    }

    return digits;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanContact = contact.trim();

    setError('');
    setSubmitted(false);
    setWhatsappSuccess(false);

    if (!cleanContact) {
      setError('Veuillez saisir votre email ou numéro WhatsApp.');
      return;
    }

    /*
     * WHATSAPP
     * If the visitor enters a Cameroon WhatsApp number,
     * open WhatsApp directly.
     */
    if (isWhatsAppNumber(cleanContact)) {
      const whatsappNumber = formatCameroonWhatsApp(cleanContact);

      const message = encodeURIComponent(
        `Bonjour TIS SARL,\n\n` +
          `Je souhaite recevoir vos actualités, promotions, plats du jour ` +
          `et nouveautés sur les foyers écologiques.\n\n` +
          `Mon numéro WhatsApp : ${cleanContact}`
      );

      setWhatsappSuccess(true);
      setContact('');

      window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;

      return;
    }

    /*
     * EMAIL
     * Continue using the existing Resend API.
     */
    if (!isEmail(cleanContact)) {
      setError(
        'Veuillez saisir une adresse email valide ou un numéro WhatsApp camerounais.'
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact: cleanContact,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Impossible d'enregistrer votre inscription. Veuillez réessayer."
        );
      }

      setSubmitted(true);
      setContact('');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Veuillez réessayer.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 py-16 text-white">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-200">
          <FaBell />
          Alertes & Nouveautés TIS
        </div>

        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
          Ne ratez aucun Plat du Jour ni nos Offres Exclusives
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-red-100 sm:text-sm">
          Inscrivez votre adresse email ou numéro WhatsApp pour recevoir
          nos actualités, promos sur les saucisses et nouveautés sur les
          foyers écologiques.
        </p>

        {submitted ? (
          <div
            role="status"
            className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-6"
          >
            <FaCheckCircle className="shrink-0 text-2xl text-emerald-400" />

            <p className="text-left text-xs font-semibold sm:text-sm">
              Merci ! Votre inscription email a été enregistrée avec succès.
              Vous recevrez bientôt les actualités de TIS.
            </p>
          </div>
        ) : whatsappSuccess ? (
          <div
            role="status"
            className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-6"
          >
            <FaWhatsapp className="shrink-0 text-3xl text-emerald-400" />

            <p className="text-left text-xs font-semibold sm:text-sm">
              WhatsApp a été ouvert avec votre message. Appuyez sur
              <strong> Envoyer </strong>
              dans WhatsApp pour confirmer votre demande auprès de TIS.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              name="contact"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="Votre email ou numéro WhatsApp..."
              aria-label="Votre email ou numéro WhatsApp"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                setError('');
              }}
              disabled={loading}
              className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3.5 text-xs text-slate-900 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-60 sm:text-sm"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-slate-900 px-6 py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  S'inscrire
                </>
              )}
            </button>
          </form>
        )}

        {error && (
          <div
            role="alert"
            className="mx-auto mt-4 flex max-w-md items-start gap-2 rounded-xl border border-red-200/30 bg-black/20 p-4 text-left text-sm text-white"
          >
            <FaExclamationCircle className="mt-0.5 shrink-0 text-red-200" />
            <p>{error}</p>
          </div>
        )}

        <p className="mt-4 text-xs text-red-200">
          Vos coordonnées seront utilisées pour vous informer des actualités
          et offres de TIS.
        </p>
      </div>
    </section>
  );
}