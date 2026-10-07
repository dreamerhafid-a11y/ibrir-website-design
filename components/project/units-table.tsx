import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { whatsappLink, type Availability, type Unit } from '@/lib/site'

const badge: Record<Availability, string> = {
  Disponible: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  'Dernières unités': 'bg-accent text-accent-foreground ring-primary/30',
  Vendu: 'bg-muted text-muted-foreground ring-border',
}

export function UnitsTable({ units, projectName }: { units: Unit[]; projectName: string }) {
  return (
    <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
      {units.map((unit) => {
        const sold = unit.availability === 'Vendu'
        return (
          <li key={unit.name} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold">{unit.name}</h3>
                <span className={cn('rounded-sm px-2 py-0.5 text-xs font-semibold ring-1 ring-inset', badge[unit.availability])}>
                  {unit.availability}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {unit.kind} · {unit.rooms} · {unit.surface}
              </p>
            </div>
            {sold ? (
              <span className="text-sm text-muted-foreground">Programme épuisé</span>
            ) : (
              <a
                href={whatsappLink(
                  `Bonjour, je souhaite des informations sur le ${unit.name} (${unit.surface}) — ${projectName}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Se renseigner
                <span className="sr-only"> sur {unit.name}</span>
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
