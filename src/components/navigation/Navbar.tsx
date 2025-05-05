import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useDarkMode } from '../../hooks/useDarkMode';
import { BiSolidCarWash } from "react-icons/bi";

const navItems = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#prices', label: 'الأسعار' },
  { href: '#locations', label: 'الفروع' },
  { href: '#contact', label: 'اتصل بنا' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
      <nav className="container mx-auto px-4">
        <div
          className="h-16 flex items-center justify-between"
          style={{ gap: "2px" }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <BiSolidCarWash
              className="h-8 w-8 text-blue-600"
              style={{
                filter:
                  "drop-shadow(-0px -1px 10px rgb(37 99 235 / var(--tw-text-opacity)))",
              }}
            />
            <span
              className="text-2xl font-bold text-gray-900 dark:text-white"
              style={{
                textShadow:
                  "-8px -1px 10px rgb(37 99 235 / var(--tw-text-opacity))",
                fontFamily: "'Rakkas', sans-serif",
              }}
            >
              مغسلة الابهار لسيارات
            </span>
          </a>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse"
            style={{
              fontFamily: "var(--font-arabic), sans-serif",
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activeSection === item.href.slice(1)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <MobileMenu isOpen={isOpen} toggle={toggleMenu} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            lg:hidden
            overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 py-4" : "max-h-0"}
          `}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activeSection === item.href.slice(1)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}