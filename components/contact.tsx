import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-18 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Parlons de votre futur logement.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Visite de chantier, brochure, plans ou conditions de paiement : notre équipe commerciale
            vous répond et vous reçoit sur rendez-vous.
          </p>

          <ul className="mt-10 space-y-4">
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Téléphone</span>
                  <span className="font-heading text-xl font-semibold">{contact.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="flex size-11 items-center justify-center rounded-md bg-ink text-ink-foreground">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">WhatsApp</span>
                  <span className="font-heading text-xl font-semibold">Écrivez-nous</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
              <span className="flex size-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Siège</span>
                <span className="font-heading text-xl font-semibold">{contact.address}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="min-h-96 overflow-hidden rounded-lg border border-border">
          <iframe
            title="Carte — IbrirMed Promotion, Aïn El Turck, Oran"
            src={contact.mapsEmbed}
            className="size-full min-h-96 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
