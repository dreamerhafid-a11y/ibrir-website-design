import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, MapPin, MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { InquiryForm } from '@/components/project/inquiry-form'
import { UnitsTable } from '@/components/project/units-table'
import { getProject, projects, whatsappLink } from '@/lib/site'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/projets/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — ${project.type} à ${project.location} | IBRIR Promotion`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps<'/projets/[slug]'>) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const others = projects.filter((p) => p.slug !== project.slug)
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`

  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
          <Image
            src={project.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-45"
          />
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
            <Link
              href="/#projets"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-foreground/80 hover:text-ink-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Tous nos projets
            </Link>
            <div className="mt-10 flex max-w-3xl flex-col gap-4 md:mt-20">
              <p className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-sm bg-primary px-2.5 py-1 font-semibold text-primary-foreground">
                  {project.status}
                </span>
                <span className="flex items-center gap-1.5 text-ink-foreground/85">
                  <MapPin className="size-4" aria-hidden="true" />
                  {project.location}
                </span>
              </p>
              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">{project.name}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-foreground/85">{project.description}</p>
            </div>
            <dl className="mt-6 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-lg bg-ink-foreground/15 sm:grid-cols-3">
              {project.highlights.map((h, i) => (
                <div key={h} className="bg-ink/80 p-5 backdrop-blur">
                  <dt className="sr-only">Point clé {i + 1}</dt>
                  <dd className="font-heading text-xl font-semibold">{h}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_380px]">
          <div className="flex min-w-0 flex-col gap-20">
            <section aria-labelledby="presentation">
              <h2 id="presentation" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Le projet
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.longDescription}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="logements" id="logements" className="scroll-mt-24">
              <div className="flex flex-col gap-2">
                <h2 id="logements" className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Logements disponibles
                </h2>
                <p className="text-muted-foreground">
                  Surfaces et disponibilités à titre indicatif — contactez-nous pour les tarifs et l’état actuel du stock.
                </p>
              </div>
              <div className="mt-8">
                <UnitsTable units={project.units} projectName={project.name} />
              </div>
            </section>

            <section aria-labelledby="plan">
              <h2 id="plan" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Plan type
              </h2>
              <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.plan}
                    alt={`Plan type d’un logement — ${project.name}`}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <figcaption className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
                  Plan non contractuel. Plans détaillés de chaque type disponibles sur demande.
                </figcaption>
              </figure>
            </section>

            <section aria-labelledby="galerie">
              <h2 id="galerie" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Galerie
              </h2>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {project.gallery.map((img, i) => (
                  <li
                    key={img.src + i}
                    className={i === 0 ? 'relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg' : 'relative aspect-[4/3] overflow-hidden rounded-lg'}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={i === 0 ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 30vw, 50vw'}
                      className="object-cover"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="localisation">
              <h2 id="localisation" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Localisation
              </h2>
              <p className="mt-3 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {project.location}
              </p>
              <div className="mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-border">
                <iframe
                  src={mapSrc}
                  title={`Carte — ${project.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full"
                />
              </div>
            </section>
          </div>

          <aside aria-labelledby="demande" className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 id="demande" className="text-2xl font-semibold">
                Demande d’information
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tarifs, plans détaillés, visite : notre équipe commerciale vous répond rapidement.
              </p>
              <div className="mt-6">
                <InquiryForm projectName={project.name} unitNames={project.units.filter((u) => u.availability !== 'Vendu').map((u) => `${u.name} (${u.surface})`)} />
              </div>
            </div>
          </aside>
        </div>

        <section aria-labelledby="autres" className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <h2 id="autres" className="text-3xl font-semibold tracking-tight">
              Nos autres projets
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projets/${p.slug}`}
                    className="group flex items-center gap-5 overflow-hidden rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary"
                  >
                    <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-md">
                      <Image src={p.image} alt="" fill sizes="112px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{p.type}</p>
                      <p className="font-heading text-xl font-semibold group-hover:text-primary">{p.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />

      <a
        href={whatsappLink(`Bonjour, je souhaite des informations sur ${project.name}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-[#0b3d1f] shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
        <span className="sr-only"> — {project.name}</span>
      </a>
    </>
  )
}
