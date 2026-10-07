export const company = {
  name: 'IbrirMed Promotion',
  legalName: 'SARL Ibrir Med',
}

export const contact = {
  phoneDisplay: '0770 52 19 33',
  phoneHref: 'tel:+213770521933',
  whatsappNumber: '213770521933',
  whatsappHref: 'https://wa.me/213550000000',
  address: 'Rue de la Palestine, n°07, Aïn El Turck, Oran',
  mapsEmbed: 'https://www.google.com/maps?q=Rue+de+la+Palestine,+A%C3%AFn+El+Turck,+Oran&output=embed',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { href: '/#projets', label: 'Nos projets' },
  { href: '/#a-la-une', label: 'Les Jardins d\'Acil' },
  { href: '/#savoir-faire', label: 'Savoir-faire' },
  { href: '/#a-propos', label: 'À propos' },
  { href: '/#contact', label: 'Contact' },
]

export type Availability = 'Disponible' | 'Dernières unités' | 'Vendu'

export type Unit = {
  name: string
  kind: string
  surface: string
  rooms: string
  availability: Availability
}

export type Project = {
  slug: string
  name: string
  type: string
  status: string
  location: string
  mapQuery: string
  description: string
  longDescription: string
  highlights: string[]
  features: string[]
  image: string
  plan: string
  gallery: { src: string; alt: string }[]
  units: Unit[]
}

const interiorGallery = [
  { src: '/images/interieur-salon.png', alt: 'Séjour lumineux avec grande baie vitrée' },
  { src: '/images/interieur-cuisine.png', alt: 'Cuisine équipée aux finitions claires' },
  { src: '/images/chantier.png', alt: 'Équipes IBRIR Promotion sur le chantier' },
]

export const projects: Project[] = [
  {
    slug: 'residence-les-jardins-d-acil',
    name: 'Résidence Les Jardins d\'Acil',
    type: 'Appartements & duplex',
    status: 'Commercialisation en cours',
    location: 'Gambetta, Oran',
    mapQuery: 'Gambetta, Oran, Algérie',
    description:
      'Une résidence haut de gamme située au cœur de Gambetta, proches de toutes les commodités.',
    longDescription:
      'La Résidence Les Jardins d'Acil réunit des appartements luxueux avec parkings en sous-sol, ascenseurs et finitions premium. Larges baies vitrées, balcons, ascenseurs et parking en sous-sol : un cadre de vie moderne et sécurisé, à quelques minutes du centre d’Oran.',
    highlights: ['Du F2 au duplex', '75 à 160 m²', 'Résidence fermée & jardin'],
    features: [
      'Résidence clôturée et gardiennée',
      'Jardin intérieur paysager',
      'Ascenseurs',
      'Parking en sous-sol',
      'Double vitrage & isolation',
      'Proximité écoles, commerces et tramway',
    ],
    image: '/images/residence-falcon.png',
    plan: '/images/plan-appartement.png',
    gallery: [{ src: '/images/residence-falcon.png', alt: 'Vue d’ensemble de la Résidence Les Jardins d\'Acil' }, ...interiorGallery],
    units: [
      { name: 'Type F2', kind: 'Appartement', surface: '75 m²', rooms: 'F2', availability: 'Disponible' },
      { name: 'Type F3', kind: 'Appartement', surface: '95 m²', rooms: 'F3', availability: 'Disponible' },
      { name: 'Type F4', kind: 'Appartement', surface: '120 m²', rooms: 'F4', availability: 'Dernières unités' },
      { name: 'Duplex', kind: 'Duplex', surface: '160 m²', rooms: 'F5', availability: 'Disponible' },
    ],
  },
  {
    slug: 'residence-ibrir',
    name: 'Résidence Ibrir Med',
    type: 'Appartements & locaux',
    status: 'Livré',
    location: 'Bd des Lions, Bir El Djir',
    mapQuery: 'Boulevard des Lions, Bir El Djir, Oran, Algérie',
    description:
      'Une résidence mixte sur le Boulevard des Lions : logements en étages et locaux professionnels en rez-de-chaussée.',
    longDescription:
      'Livrée sur le Boulevard des Lions à Bir El Djir, la Résidence Ibrir associe des appartements familiaux et des locaux professionnels en pied d’immeuble. Une adresse devenue repère dans le quartier, qui accueille aujourd’hui commerces et cabinets médicaux.',
    highlights: ['Projet livré', 'Logements & locaux', 'Boulevard des Lions'],
    features: [
      'Emplacement sur grand axe',
      'Locaux commerciaux et professionnels',
      'Ascenseur',
      'Parking',
      'Proximité de l’USTO et des commerces',
      'Finitions soignées',
    ],
    image: '/images/residence-ibrir.png',
    plan: '/images/plan-appartement.png',
    gallery: [{ src: '/images/residence-ibrir.png', alt: 'Façade de la Résidence Ibrir' }, ...interiorGallery],
    units: [
      { name: 'Type F3', kind: 'Appartement', surface: '≈ 90 m²', rooms: 'F3', availability: 'Vendu' },
      { name: 'Type F4', kind: 'Appartement', surface: '≈ 115 m²', rooms: 'F4', availability: 'Vendu' },
      { name: 'Local professionnel', kind: 'Local', surface: '≈ 60 m²', rooms: '—', availability: 'Dernières unités' },
    ],
  },
  {
    slug: 'terrasses-ain-el-turk',
    name: 'Les Terrasses d’Aïn El Turk',
    type: 'Appartements vue mer',
    status: 'Prochainement',
    location: 'Aïn El Turk, Oran',
    mapQuery: 'Aïn El Turk, Oran, Algérie',
    description:
      'Une résidence à taille humaine face à la Méditerranée, avec de grandes terrasses et des vues dégagées sur la mer.',
    longDescription:
      'Les Terrasses d’Aïn El Turk proposent des appartements du F3 au F5 avec terrasses généreuses tournées vers la mer. Un programme pensé pour la résidence principale comme pour la résidence secondaire, sur la corniche oranaise.',
    highlights: ['Vue mer', 'F3 à F5', 'Grandes terrasses'],
    features: [
      'Terrasses orientées mer',
      'Résidence sécurisée',
      'Ascenseur',
      'Parking privatif',
      'À proximité des plages',
      'Accès rapide à Oran',
    ],
    image: '/images/residence-ain-el-turk.png',
    plan: '/images/plan-appartement.png',
    gallery: [{ src: '/images/residence-ain-el-turk.png', alt: 'Les Terrasses d’Aïn El Turk face à la mer' }, ...interiorGallery],
    units: [
      { name: 'Type F3', kind: 'Appartement', surface: '100 m²', rooms: 'F3', availability: 'Disponible' },
      { name: 'Type F4', kind: 'Appartement', surface: '125 m²', rooms: 'F4', availability: 'Disponible' },
      { name: 'Type F5', kind: 'Appartement', surface: '150 m²', rooms: 'F5', availability: 'Disponible' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const featuredProject = projects[0]
