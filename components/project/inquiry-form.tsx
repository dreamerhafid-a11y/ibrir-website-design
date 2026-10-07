'use client'

import { useState, type FormEvent } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { contact, whatsappLink } from '@/lib/site'

type Props = {
  projectName: string
  unitNames: string[]
}

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30'

export function InquiryForm({ projectName, unitNames }: Props) {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const unit = String(data.get('unit') ?? '')
    const message = String(data.get('message') ?? '').trim()

    const text = [
      `Bonjour, je suis intéressé(e) par ${projectName}.`,
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Logement souhaité : ${unit}`,
      message ? `Message : ${message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-describedby="inquiry-note">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Nom complet
        </label>
        <input id="name" name="name" required autoComplete="name" maxLength={80} className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+\s]{9,16}"
          placeholder="05 XX XX XX XX"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="unit" className="text-sm font-medium">
          Logement souhaité
        </label>
        <select id="unit" name="unit" defaultValue={unitNames[0]} className={fieldClass}>
          {unitNames.map((u) => (
            <option key={u}>{u}</option>
          ))}
          <option>Je ne sais pas encore</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="font-normal text-muted-foreground">(facultatif)</span>
        </label>
        <textarea id="message" name="message" rows={3} maxLength={500} className={fieldClass} />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Envoyer ma demande
      </button>
      <a
        href={contact.phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        <Phone className="size-4" aria-hidden="true" />
        Appeler le {contact.phoneDisplay}
      </a>

      <p id="inquiry-note" className="text-xs leading-relaxed text-muted-foreground" aria-live="polite">
        {sent
          ? 'Merci ! Votre demande a été préparée sur WhatsApp, il ne reste qu’à l’envoyer.'
          : 'Votre demande est transmise directement à notre équipe commerciale via WhatsApp.'}
      </p>
    </form>
  )
}
