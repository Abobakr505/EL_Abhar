import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

export function MobileMenu({ isOpen, toggle }: MobileMenuProps) {
  return (
    <button
      onClick={toggle}
      className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      ) : (
        <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
}