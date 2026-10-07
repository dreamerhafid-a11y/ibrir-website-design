'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { contact, navLinks } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <a href="/" aria-label="IBRIR Promotion — accueil">
          <BrandLogo />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-heading text-lg font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={contact.phoneHref}
                className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                Appeler le {contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
