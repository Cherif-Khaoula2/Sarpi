import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Accueil", href: "/" },
  { label: "A propos de nous", href: "/schedules" },
  { label: "Nos Métiers", href: "/speakers" },
  {
    label: "Nos projets",
    href: "/blog",
    submenu: [
      { label: "Projets Réalisés", href: "/blog" },
      { label: "Projets en Cours de Réalisation", href: "/blog/blog_1" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Actualités", href: "/documentation" },
];  