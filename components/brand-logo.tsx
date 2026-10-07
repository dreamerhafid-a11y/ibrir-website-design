import Image from 'next/image'
import { cn } from '@/lib/utils'

export function BrandLogo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span className="relative size-12 shrink-0 overflow-hidden rounded-md bg-black">
        <Image
          src="/images/logo-ibrir.png"
          alt="IbrirMed Logo"
          fill
          sizes="48px"
          className="object-contain p-1"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-2xl font-extrabold tracking-tight',
            inverted ? 'text-ink-foreground' : 'text-foreground',
          )}
        >
          IBRIR MED
        </span>
        <span
          className={cn(
            'mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.25em]',
            inverted ? 'text-ink-foreground/70' : 'text-primary',
          )}
        >
          Promotion
        </span>
      </span>
    </span>
  )
}
