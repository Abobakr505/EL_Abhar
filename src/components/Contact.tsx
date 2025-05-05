import React from 'react';
import { PhoneCall } from 'lucide-react';

export function Contact() {
    const phoneNumber = "966551234567"; // Replace with actual phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <section id="contact" className="bg-blue-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-100"
          style={{ fontFamily: "var(--font-arabic), sans-serif" }}
        >
          اتصل بنا للتوصيل الخارجي
        </h2>
        <div className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-white dark:bg-gray-700 rounded-lg px-6 py-4 shadow-lg gap-1">
          <PhoneCall className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <a
            className="text-2xl font-bold text-blue-900 dark:text-blue-100 rtl:mr-2"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا عبر واتساب"
          >
            01093954137
          </a>
        </div>
      </div>
    </section>
  );
}