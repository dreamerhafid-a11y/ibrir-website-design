import { BrandLogo } from '@/components/brand-logo'
import { contact, navLinks } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-sm">
          <BrandLogo inverted />
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
            Promoteur et constructeur immobilier à Oran. Appartements, duplex et locaux
            professionnels en résidences sécurisées.
          </p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink-foreground/70 hover:text-ink-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <a href={contact.phoneHref} className="font-heading text-2xl font-semibold hover:text-primary">
            {contact.phoneDisplay}
          </a>
          <p className="mt-2 text-ink-foreground/70">{contact.address}</p>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-ink-foreground/50 md:px-8">
          © {new Date().getFullYear()} IbrirMed Promotion — SARL Ibrir Med. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
