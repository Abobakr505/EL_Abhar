import React from 'react';
import { Car, Sparkles, Shield, Timer } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100"
          style={{
            fontFamily: "var(--font-arabic), sans-serif",
            textShadow: "1px 0px 10px rgb(37 99 235 / var(--tw-text-opacity))",
          }}
        >
          خدماتنا
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Car className="h-8 w-8" />}
            title="غسيل خارجي"
            description="غسيل شامل للهيكل الخارجي مع تنظيف الإطارات"
          />
          <ServiceCard
            icon={<Sparkles className="h-8 w-8" />}
            title="تنظيف داخلي"
            description="تنظيف عميق للمقصورة الداخلية وتعقيم"
          />
          <ServiceCard
            icon={<Shield className="h-8 w-8" />}
            title="تلميع وحماية"
            description="تلميع الهيكل وطبقة حماية نانو سيراميك"
          />
          <ServiceCard
            icon={<Timer className="h-8 w-8" />}
            title="خدمة سريعة"
            description="خدمة غسيل سريعة خلال ٣٠ دقيقة"
          />
        </div>
      </div>
    </section>
  );
}