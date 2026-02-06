// Blog mock data for Detectivi Focșani

export const blogCategories = [
  { id: 1, name: "Investigații", slug: "investigatii", count: 12 },
  { id: 2, name: "Verificare Fidelitate", slug: "verificare-fidelitate", count: 8 },
  { id: 3, name: "Sfaturi Juridice", slug: "sfaturi-juridice", count: 5 },
  { id: 4, name: "Tehnologie", slug: "tehnologie", count: 4 },
  { id: 5, name: "Studii de Caz", slug: "studii-de-caz", count: 6 }
];

export const blogPosts = [
  {
    id: 1,
    title: "Cum să recunoști semnele infidelității: Ghid complet pentru 2025",
    slug: "semne-infidelitate-ghid-2025",
    excerpt: "Descoperă cele mai comune semne de infidelitate și cum să le interpretezi corect. Ghidul nostru te ajută să înțelegi schimbările de comportament și să iei decizii informate.",
    content: "",
    category: "Investigații",
    categorySlug: "investigatii",
    image: "https://customer-assets.emergentagent.com/job_a6e7e9b0-0fe7-4305-96be-d63ea68c51f3/artifacts/yu0iilfu_Adulter%20Detectiv%20Focsani.jpg",
    author: "Echipa Detectivi Focșani",
    date: "2025-02-01",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Dovezile în instanță: Ce trebuie să știi despre investigațiile private",
    slug: "dovezi-instanta-investigatii-private",
    excerpt: "Află cum dovezile obținute de detectivii particulari pot fi folosite în proceduri legale. Tot ce trebuie să știi despre admisibilitatea probelor în România.",
    content: "",
    category: "Investigații",
    categorySlug: "investigatii",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
    author: "Echipa Detectivi Focșani",
    date: "2025-01-28",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "Supravegherea discretă: Tehnici profesionale folosite de detectivi",
    slug: "supraveghere-discreta-tehnici",
    excerpt: "Explorează metodele legale de supraveghere utilizate de detectivii profesioniști. De la filaj la detectare microfoane ascunse - totul în limitele legii.",
    content: "",
    category: "Investigații",
    categorySlug: "investigatii",
    image: "https://customer-assets.emergentagent.com/job_a6e7e9b0-0fe7-4305-96be-d63ea68c51f3/artifacts/9e6m50jg_Detectiv%20Focsani.jpeg",
    author: "Echipa Detectivi Focșani",
    date: "2025-01-25",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Background Check: De ce este esențial înainte de o colaborare de afaceri",
    slug: "background-check-afaceri",
    excerpt: "Protejează-ți afacerea prin verificări complete de antecedente. Află ce informații poți obține legal și cum te ajută să eviți parteneriatele riscante.",
    content: "",
    category: "Investigații",
    categorySlug: "investigatii",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    author: "Echipa Detectivi Focșani",
    date: "2025-01-20",
    readTime: "4 min"
  },
  {
    id: 5,
    title: "Detectarea dispozitivelor de spionaj: Cum îți protejezi intimitatea",
    slug: "detectare-dispozitive-spionaj",
    excerpt: "Camere ascunse, microfoane și GPS-uri - cum să le descoperi și să-ți protejezi viața privată. Servicii profesionale de contra-supraveghere în Focșani.",
    content: "",
    category: "Investigații",
    categorySlug: "investigatii",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    author: "Echipa Detectivi Focșani",
    date: "2025-01-15",
    readTime: "5 min"
  },
  {
    id: 6,
    title: "Cum funcționează testul poligraf și când este recomandat",
    slug: "test-poligraf-detectorul-minciuni",
    excerpt: "Totul despre detectorul de minciuni: cum funcționează, cât de precis este și în ce situații este util. Informații de la experții noștri certificați.",
    content: "",
    category: "Tehnologie",
    categorySlug: "tehnologie",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    author: "Echipa Detectivi Focșani",
    date: "2025-01-10",
    readTime: "6 min"
  }
];

export const getPostsByCategory = (categorySlug, limit = 5) => {
  return blogPosts
    .filter(post => post.categorySlug === categorySlug)
    .slice(0, limit);
};

export const getRecentPosts = (limit = 5) => {
  return blogPosts.slice(0, limit);
};
