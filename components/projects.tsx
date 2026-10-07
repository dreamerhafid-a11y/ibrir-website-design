import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import { projects } from '@/lib/site'

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-18 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nos projets</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Des programmes pensés, bâtis et livrés par nos équipes.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Appartements, duplex ou locaux professionnels : chaque programme est conçu pour durer,
            avec des espaces sécurisés et des finitions maîtrisées.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.type}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-background px-2.5 py-1 text-xs font-semibold">
                    {project.type}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                    {project.location}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm font-medium">
                        <Check className="size-4 text-primary" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/projets/${project.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-foreground underline-offset-4 hover:underline"
                  >
                    Voir les logements disponibles
                    <ArrowRight className="size-4" aria-hidden="true" />
                    <span className="sr-only"> — {project.name}</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
