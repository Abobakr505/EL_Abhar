import React from 'react';
import { PriceCard } from './PriceCard';

interface PriceItem {
  item: string;
  price: number;
}

interface PriceListProps {
  items: PriceItem[];
  onSelectService: (service: PriceItem) => void;
}

export function PriceList({ items, onSelectService }: PriceListProps) {
  return (
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((service, index) => (
        <PriceCard
          key={index}
          item={service.item}
          price={service.price}
          onClick={() => onSelectService(service)}
        />
      ))}
    </div>
  );
}