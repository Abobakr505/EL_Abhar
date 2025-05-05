import React from 'react';
import { Tag } from 'lucide-react';

interface PriceCardProps {
  item: string;
  price: number;
  onClick: () => void;
}

export function PriceCard({ item, price, onClick }: PriceCardProps) {
  return (
    <div
      className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Tag className="h-5 w-5 text-blue-500 dark:text-blue-400" />
        <span 
          className="text-gray-800 dark:text-gray-100 font-medium"
          style={{ fontFamily: 'var(--font-arabic), sans-serif' }}
        >
          {item}
        </span>
      </div>
      <span 
        className="text-blue-600 dark:text-blue-300 font-bold"
        style={{ fontFamily: 'var(--font-arabic), sans-serif' }}
      >
        {price} ريال
      </span>
    </div>
  );
}