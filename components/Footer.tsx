import React from 'react';
import { FaFacebook, FaLinkedin, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-lg">
              TIS
            </div>
            <span className="font-black text-white text-base">TIS SARL</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Thierry Industrie Saucisses SARL — L'excellence de l'agroalimentaire, du restaurant et des innovations écologiques au Cameroun.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Liens Rapides</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#hero" className="hover:text-white transition-colors">Accueil</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Produits & Saucisses</a></li>
            <li><a href="#restaurant" className="hover:text-white transition-colors">TIS Restaurant</a></li>
            <li><a href="#stove" className="hover:text-white transition-colors">Foyer Écologique</a></li>
            <li><a href="#founder" className="hover:text-white transition-colors">Mot du Promoteur</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-3" id="contact">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contact</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-500 mt-0.5 flex-shrink-0" />
              <span>Douala: Bépanda face Hôtel Déborah<br />Yaoundé: Chapelle Tsinga</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-red-500 flex-shrink-0" />
              <span>+237 693 02 35 89 / 691 89 18 14</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-500 flex-shrink-0" />
              <span>thierryindustriesaucisses15@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Réseaux Sociaux</h4>
          <p className="text-xs text-slate-400">Rejoignez nos communautés en ligne pour ne rien rater.</p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://www.facebook.com/share/1Ci6gUgwsN/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white rounded-xl text-slate-300 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/thierry-industrie-saucisses-sarl/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white rounded-xl text-slate-300 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.tiktok.com/@thierryindustriesauciss0" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white rounded-xl text-slate-300 transition-colors">
              <FaTiktok />
            </a>
            <a href="https://whatsapp.com/channel/0029Vb8GKWh3wtb7bRQLsM1c" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white rounded-xl text-slate-300 transition-colors">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-slate-900 mt-12 pt-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Thierry Industrie Saucisses SARL. Tous droits réservés.
      </div>
    </footer>
  );
}