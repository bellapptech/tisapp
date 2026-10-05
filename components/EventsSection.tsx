import {
  FaCalendarAlt,
  FaBirthdayCake,
  FaHeart,
  FaBriefcase,
  FaUsers,
  FaStore,
  FaPhoneAlt,
  FaUtensils,
  FaWhatsapp,
} from "react-icons/fa";

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* Decorative background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* HEADER */}
        <div
          className="text-center max-w-3xl mx-auto mb-14"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest bg-red-100 px-4 py-2 rounded-full">
            <FaCalendarAlt />
            Événements & Traiteur
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-5 leading-tight">
            Faites de votre événement
            <span className="text-red-600"> un moment inoubliable.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-5 max-w-2xl mx-auto">
            TIS Restaurant vous accompagne pour vos événements privés,
            professionnels et cérémonies avec des plats savoureux,
            un service soigné et des solutions adaptées à vos besoins.
          </p>
        </div>


        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGES */}
          <div
            className="grid grid-cols-2 gap-4"
            data-aos="fade-right"
          >

            {/* MAIN IMAGE */}
            <div className="col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/dishesforevents.jpeg"
                alt="Plats TIS Restaurant pour événements"
                className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-red-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-2">
                  Service Traiteur
                </span>

                <h3 className="text-white text-xl sm:text-2xl font-black">
                  Des plats savoureux pour vos événements
                </h3>
              </div>
            </div>


            {/* SECOND IMAGE */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/dishesforevents1.jpeg"
                alt="Repas de groupe TIS Restaurant"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="text-white text-xs font-black">
                  Repas de groupe
                </span>
              </div>
            </div>


            {/* THIRD IMAGE */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/dishesforevents2.jpeg"
                alt="Cuisine TIS pour cérémonies et événements"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="text-white text-xs font-black">
                  Cérémonies & fêtes
                </span>
              </div>
            </div>

          </div>


          {/* INFORMATION */}
          <div
            className="space-y-7"
            data-aos="fade-left"
          >

            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                POUR TOUS VOS ÉVÉNEMENTS
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Une cuisine adaptée à chaque occasion
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                Anniversaire, mariage, cérémonie, réunion professionnelle,
                séminaire, baptême ou fête familiale : TIS Restaurant
                met son expérience culinaire à votre service.
              </p>
            </div>


            {/* EVENT TYPES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Birthday */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <FaBirthdayCake />
                </div>

                <h4 className="font-black text-slate-900 text-sm">
                  Fêtes & Anniversaires
                </h4>

                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Des menus gourmands pour célébrer vos moments importants.
                </p>
              </div>


              {/* Weddings */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                  <FaHeart />
                </div>

                <h4 className="font-black text-slate-900 text-sm">
                  Mariages & Cérémonies
                </h4>

                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Des prestations culinaires pensées pour vos grandes cérémonies.
                </p>
              </div>


              {/* Corporate */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <FaBriefcase />
                </div>

                <h4 className="font-black text-slate-900 text-sm">
                  Événements professionnels
                </h4>

                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Réunions, séminaires, conférences et repas d'entreprise.
                </p>
              </div>


              {/* Groups */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <FaUsers />
                </div>

                <h4 className="font-black text-slate-900 text-sm">
                  Repas de groupe
                </h4>

                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Commandes en quantité pour groupes, associations et familles.
                </p>
              </div>

            </div>


            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-6 sm:p-7 shadow-xl shadow-red-600/20">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                <div>
                  <h4 className="text-white font-black text-lg">
                    Vous préparez un événement ?
                  </h4>

                  <p className="text-red-100 text-xs sm:text-sm mt-1">
                    Contactez-nous pour discuter de votre menu et de vos besoins.
                  </p>
                </div>

                <a
                  href="https://wa.me/237691891814?text=Bonjour%20TIS%20Restaurant,%20je%20souhaite%20organiser%20un%20événement%20et%20commander%20des%20plats."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-red-50 font-black text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg whitespace-nowrap"
                >
                  <FaWhatsapp className="text-lg" />
                  Demander un devis
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM FEATURES */}
        <div
          className="mt-16 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm"
          data-aos="fade-up"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Custom orders */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <FaUtensils />
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-sm">
                  Commandes sur mesure
                </h4>

                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Quantités et menus adaptés à votre événement.
                </p>
              </div>
            </div>


            {/* Restaurant */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <FaStore />
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-sm">
                  Espace restaurant
                </h4>

                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Possibilité d'utiliser notre cadre pour vos rencontres et événements.
                </p>
              </div>
            </div>


            {/* Reservation */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-sm">
                  Réservation facile
                </h4>

                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Contactez-nous directement pour réserver ou commander.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}