import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import {
  Server,
  Cpu,
  Network,
  Database,
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  HeartHandshake,
} from 'lucide-react';

interface InfrastructureFrameProps {
  onNavigateToContact: () => void;
}

export const InfrastructureFrame: React.FC<InfrastructureFrameProps> = ({ onNavigateToContact }) => {
  const { t } = useTranslation();

  const icons = [Server, Cpu, Network, Database];
  const pillars: Array<{ title: string; desc: string }> = t('infrastructure.pillars') || [];

  return (
    <section
      id="frame-8"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#0B0D0F] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Grid & High-Tech Ambient Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[450px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 tracking-widest font-bold bg-amber-500/10 border border-amber-400/30 shadow-xs">
            {t('infrastructure.frameTitle')}
          </span>
          <span className="hidden sm:inline font-sans text-neutral-500 dark:text-neutral-400">
            Sérénité, Stabilité & Proximité Humaine
          </span>
        </div>

        {/* Narrative & Natural Human Assurance Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
              {t('infrastructure.headline')}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              {t('infrastructure.intro')}
            </p>

            <div className="p-4 rounded-2xl border border-amber-500/25 dark:border-amber-400/25 bg-white/90 dark:bg-[#0D0F13]/90 flex items-center justify-between text-xs shadow-xs">
              <span className="text-neutral-700 dark:text-neutral-300 font-medium font-sans">
                Accompagnement continu & préventif
              </span>
              <span className="text-amber-500 dark:text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 font-mono text-xs">
                Disponibilité Garantie 99,9%
              </span>
            </div>
          </div>

          {/* Human-Centered Natural Service & Trust Showcase */}
          <div className="lg:col-span-6">
            <div className="card-luxury p-6 sm:p-8 rounded-3xl border border-amber-500/30 dark:border-amber-400/30 bg-[#090A0D] text-neutral-100 shadow-2xl space-y-6 transition-all">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-display font-bold text-white text-base tracking-tight">
                    Accompagnement Sur-Mesure & Sérénité
                  </span>
                </div>
                <span className="text-amber-400 font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Équipe Dédiée à Paris</span>
                </span>
              </div>

              {/* 4 Natural, Human and Clear Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/60 space-y-2 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-xs font-bold font-mono">01 · PROXIMITÉ</span>
                    <Users className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-white font-bold text-sm">Interlocuteur Dédié</div>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Un conseiller senior attitré à Paris 18e, disponible par téléphone ou email sans standard automatisé.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/60 space-y-2 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-xs font-bold font-mono">02 · DISPONIBILITÉ</span>
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-white font-bold text-sm">Disponibilité 24h/24</div>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Vos sites et outils restent accessibles en continu avec des sauvegardes quotidiennes automatiques.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/60 space-y-2 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-xs font-bold font-mono">03 · SOUVERAINETÉ</span>
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-white font-bold text-sm">Données 100% en France</div>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Hébergement souverain sécurisé à Paris, conformité RGPD intégrale et certificats de protection inclus.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/60 space-y-2 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-xs font-bold font-mono">04 · CLARTÉ</span>
                    <HeartHandshake className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-white font-bold text-sm">Zéro Jargon, 100% Écoute</div>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Nous gérons toute la technique pour vous et vous expliquons chaque démarche avec simplicité et clarté.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-400 font-sans">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Siège & équipe au 40 rue Damrémont, 75018 Paris</span>
                </span>
                <span className="text-amber-300 font-medium">Réponse sous 2h ouvrées</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid with Rounded Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {pillars.map((pil, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={pil.title}
                className="card-luxury p-8 sm:p-10 rounded-3xl border border-amber-500/20 dark:border-amber-400/20 space-y-4 bg-white/95 dark:bg-[#0D0F13]/95 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-900">
                  <span className="text-xs font-mono text-amber-500 dark:text-amber-400 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30">
                    ENGAGEMENT 0{idx + 1}
                  </span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-500/10 border border-amber-400/20">
                    <IconComp className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white leading-snug pb-1 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                  {pil.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  {pil.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Callout with Rounded 3xl & Gold Button */}
        <div className="card-luxury p-8 rounded-3xl border border-amber-500/25 dark:border-amber-400/25 bg-white/95 dark:bg-[#0D0F13]/95 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
          <div className="text-xs sm:text-sm font-sans text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed">
            Besoin d'un accompagnement personnalisé ou de conseils clairs pour vos outils web ? Échangez directement avec notre équipe.
          </div>
          <button
            onClick={onNavigateToContact}
            className="btn-gold px-7 py-3.5 text-xs font-bold flex items-center gap-2 shrink-0 self-start sm:self-auto transition-all shadow-[0_4px_15px_rgba(212,175,55,0.35)] cursor-pointer"
          >
            <span>Échanger avec un conseiller</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
