import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

const stats = [
  { value: '3', label: 'programmes à Oran' },
  { value: 'F2 → Duplex', label: 'typologies proposées' },
  { value: '100%', label: 'construit par nos équipes' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <Image
        src="/images/hero-ibrir.png"
        alt="Tour résidentielle moderne à Oran sous un ciel bleu"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/10" aria-hidden="true" />

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 md:px-8 md:pb-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-ink-foreground/80">
            <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
            Promoteur & constructeur — Oran
          </p>
          <h1 className="mt-5 text-5xl font-extrabold uppercase leading-[0.98] tracking-tight md:text-7xl">
            Bâtir plus haut,
            <span className="block text-primary">vivre mieux.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/80">
            IbrirMed Promotion conçoit et construit des résidences modernes à Oran : appartements, duplex
            et locaux professionnels, de l’acquisition du terrain à la remise des clés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Découvrir nos projets
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-ink-foreground/30 px-6 py-3.5 font-semibold transition-colors hover:bg-ink-foreground/10"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-ink-foreground/20 pt-8 sm:grid-cols-[repeat(3,auto)_1fr] sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-extrabold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-foreground/70">{stat.label}</p>
            </div>
          ))}
          <p className="flex items-end gap-2 text-sm text-ink-foreground/70 sm:justify-end">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Falcon · Bir El Djir · Aïn El Turk
          </p>
        </div>
      </div>
    </section>
  )
}
