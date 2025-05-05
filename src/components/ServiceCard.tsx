import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
        {icon}
      </div>
      <h3 
        className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100" 
        style={{ fontFamily: 'var(--font-arabic), sans-serif' }}
      >
        {title}
      </h3>
      <p 
        className="text-gray-600 dark:text-gray-300" 
        style={{ fontFamily: 'var(--font-arabic), sans-serif' }}
      >
        {description}
      </p>
    </div>
  );
}