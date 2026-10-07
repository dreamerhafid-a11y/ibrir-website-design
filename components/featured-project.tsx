import Image from 'next/image'
import Link from 'next/link'
import { Building2, ShieldCheck, Trees, Car } from 'lucide-react'
import { featuredProject } from '@/lib/site'

const amenities = [
  { icon: ShieldCheck, title: 'Résidence fermée & gardiennée', text: 'Accès contrôlé pour la tranquillité des familles.' },
  { icon: Trees, title: 'Jardin intérieur', text: 'Une cour paysagée au calme, au cœur de la ville.' },
  { icon: Car, title: 'Parking en sous-sol', text: 'Places de stationnement réservées aux résidents.' },
  { icon: Building2, title: 'Du F2 au duplex', text: 'Des plans fonctionnels pour chaque étape de vie.' },
]

export function FeaturedProject() {
  const project = featuredProject

  return (
    <section id="a-la-une" className="scroll-mt-18 bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-80 overflow-hidden rounded-lg lg:min-h-full">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.location}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {project.status}
          </span>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Projet à la une · {project.location}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase tracking-tight md:text-5xl">{project.name}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-foreground/80">{project.longDescription}</p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {amenities.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-foreground/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-ink-foreground/15 pt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
              Typologies disponibles
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.units.map((unit) => (
                <li
                  key={unit.name}
                  className="rounded-sm border border-ink-foreground/20 px-4 py-2 font-heading text-base font-semibold"
                >
                  {unit.name} · {unit.surface}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/projets/${project.slug}`}
            className="mt-10 inline-flex items-center rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voir les logements disponibles
          </Link>
        </div>
      </div>
    </section>
  )
}
