"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  // 🎯 Fonction pour normaliser les URLs (enlever le slash final)
  const normalizePath = (url: string) => {
    return url.endsWith('/') && url !== '/' ? url.slice(0, -1) : url;
  };

  // 🎯 Fonction pour vérifier si le menu est actif
  const isActive = () => {
    const currentPath = normalizePath(path);
    
    // Si le menu a des sous-menus, vérifier si un des sous-menus correspond
    if (item.submenu && item.submenu.length > 0) {
      const isSubmenuActive = item.submenu.some(sub => {
        const subPath = normalizePath(sub.href);
        return currentPath === subPath;
      });
      if (isSubmenuActive) return true;
    }
    
    // Vérifier si c'est la page exacte (seulement si href n'est pas vide)
    if (item.href && item.href !== "") {
      const itemPath = normalizePath(item.href);
      return currentPath === itemPath;
    }
    
    return false;
  };

  return (
    <li
      className={`${item.submenu ? "relative" : ""} ${item.label === "Speakers" ? 'xl:block hidden' : "block"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        href={item.href || "#"} 
        className={`text-base text-MidnightNavyText py-3 dark:text-white flex font-normal hover:text-primary dark:hover:text-primary ${
          isActive() 
            ? 'text-primary dark:!text-primary font-semibold' 
            : 'text-black dark:text-white'
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 top-9 w-60 bg-white dark:bg-darkmode shadow-lg dark:shadow-darkmd rounded-lg`}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem, index) => {
            const currentPath = normalizePath(path);
            const subPath = normalizePath(subItem.href);
            
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`block px-4 py-2 text-[15px] ${
                  currentPath === subPath
                    ? "bg-primary text-white font-semibold"
                    : "text-black hover:bg-gray-100 dark:hover:bg-secondary dark:text-white hover:text-dark dark:hover:text-white"
                }`}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </li>
  );
};

export default HeaderLink;