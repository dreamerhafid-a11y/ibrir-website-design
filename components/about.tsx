const expertise = ['Ingénierie', 'Architecture', 'Construction', 'Financement immobilier', 'Vente']
const sectors = [
  { title: 'Résidentiel haut de gamme', text: 'Villas et appartements, notre cœur de métier.' },
  { title: 'Immobilier commercial', text: 'Locaux et espaces pour les activités professionnelles.' },
  { title: 'Hôtellerie', text: 'Des projets hôteliers pour accompagner le développement de la région.' },
]

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-18 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">À propos</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Un promoteur oranais, au service d’Oran.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              IbrirMed Promotion, portée par la SARL Ibrir Med, est une entreprise de promotion
              et de construction immobilière basée à Aïn El Turck, Oran.
            </p>
            <p>
              De la Résidence Les Jardins d'Acil à Gambetta à nos nouveaux programmes, nous
              concevons des logements et des locaux pensés pour les familles et les professionnels
              de l’Oranie, avec une exigence constante de qualité et de transparence.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {expertise.map((e) => (
                <li key={e} className="rounded-sm bg-background px-3 py-1.5 text-sm font-medium text-foreground">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {sectors.map((s) => (
            <li key={s.title} className="bg-background p-8">
              <span className="block h-1 w-10 bg-primary" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
