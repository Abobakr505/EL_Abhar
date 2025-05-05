import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
interface Location {
  name: string;
  address: string;
  hours: string;
  phone: string;
  mapUrl: string;
}

const locations: Location[] = [
  {
    name: "الفرع الرئيسي - الرياض",
    address: "شارع العليا، حي العليا، الرياض",
    hours: "السبت - الخميس: 7 صباحاً - 11 مساءً",
    phone: "01093954137",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "فرع النزهة",
    address: "شارع النزهة، حي النزهة، الرياض",
    hours: "السبت - الخميس: 8 صباحاً - 10 مساءً",
    phone: "01093954137",
    mapUrl: "https://maps.google.com",
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100"
          style={{
            fontFamily: "var(--font-arabic), sans-serif",
            textShadow: "1px 0px 10px rgb(37 99 235 / var(--tw-text-opacity))",
          }}
        >
          فروعنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100"
                style={{ fontFamily: "var(--font-arabic), sans-serif" }}
              >
                {location.name}
              </h3>

              <div className="space-y-3 ">
                <div className="flex items-start space-x-3 rtl:space-x-reverse  gap-1">
                  <MapPin className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-1" />
                  <div>
                    <p
                      className="text-gray-700 dark:text-gray-300"
                      style={{ fontFamily: "var(--font-arabic), sans-serif" }}
                    >
                      {location.address}
                    </p>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-1 inline-block"
                      style={{ fontFamily: "var(--font-arabic), sans-serif" }}
                    >
                      عرض على الخريطة
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse gap-1">
                  <Clock className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <p
                    className="text-gray-700 dark:text-gray-300"
                    style={{ fontFamily: "var(--font-arabic), sans-serif" }}
                  >
                    {location.hours}
                  </p>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse gap-1">
                  <Phone className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <p
                    className="text-gray-700 dark:text-gray-300 direction-ltr"
                    style={{ fontFamily: "var(--font-arabic), sans-serif" }}
                  >
                    {location.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}