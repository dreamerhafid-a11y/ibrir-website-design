import Image from 'next/image'

const steps = [
  { title: 'Foncier & études', text: 'Sélection des terrains, études de faisabilité et montage du programme.' },
  { title: 'Conception', text: 'Architectes et ingénieurs conçoivent des plans fonctionnels et durables.' },
  { title: 'Construction', text: 'Nos équipes réalisent le gros œuvre et les finitions, avec un suivi de chantier rigoureux.' },
  { title: 'Commercialisation & financement', text: 'Accompagnement à l’achat et au financement immobilier.' },
  { title: 'Remise des clés', text: 'Livraison contrôlée et suivi après la prise de possession.' },
]

export function SavoirFaire() {
  return (
    <section id="savoir-faire" className="scroll-mt-18 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Notre savoir-faire</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Promoteur et constructeur, du premier plan à la dernière pierre.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            IBRIR Promotion n’est pas un simple intermédiaire : nous construisons nous-mêmes nos
            programmes. Cette maîtrise de chaque étape nous permet de garantir la qualité, les
            délais et la transparence auprès de nos acquéreurs.
          </p>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/chantier.png"
              alt="Chantier de construction en béton armé avec grue"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-6 border-b border-border py-7 first:pt-0 last:border-b-0">
              <span className="font-heading text-3xl font-semibold text-primary tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
