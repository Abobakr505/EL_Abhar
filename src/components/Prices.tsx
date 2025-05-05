import React, { useState } from "react";
import { PriceList } from "./prices/PriceList";
import { BookingModal } from "./booking/BookingModal";

interface PriceItem {
  item: string;
  price: number;
}

const priceList: PriceItem[] = [
  { item: "غسيل خارجي - سيارة صغيرة", price: 30 },
  { item: "غسيل خارجي - سيارة متوسطة", price: 40 },
  { item: "غسيل خارجي - سيارة كبيرة", price: 50 },
  { item: "غسيل داخلي شامل", price: 80 },
  { item: "تلميع كامل", price: 150 },
  { item: "نانو سيراميك", price: 500 },
  { item: "غسيل VIP شامل", price: 200 },
  { item: "تنظيف المحرك", price: 70 },
];

export function Prices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<PriceItem | null>(
    null
  );

  const handleServiceClick = (service: PriceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="prices" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100"
          style={{ fontFamily: "var(--font-arabic), sans-serif" }}
        >
          قائمة الأسعار
        </h2>

        <PriceList items={priceList} onSelectService={handleServiceClick} />

        <p
          className="text-center mt-8 text-gray-600 dark:text-gray-300"
          style={{ fontFamily: "var(--font-arabic), sans-serif" }}
        >
          * الأسعار قد تختلف حسب حجم وحالة السيارة *
        </p>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </section>
  );
}
