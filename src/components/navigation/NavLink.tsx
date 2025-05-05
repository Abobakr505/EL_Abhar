import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`
        px-4 py-2 rounded-lg text-sm font-medium
        transition-colors duration-200
        ${isActive 
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100' 
          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
        }
      `}
    >
      {children}
    </a>
  );
}