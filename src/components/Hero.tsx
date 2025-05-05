import React from 'react';
export function Hero() {
  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70">
        <div
          className="container mx-auto px-4 h-full flex items-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="text-white max-w-2xl"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            <h1
              className=" font-bold mb-6"
              style={{
                fontFamily: "'Rakkas', sans-serif",
                textShadow:
                  "-8px -1px 10px rgb(37 99 235 / var(--tw-text-opacity))",
                fontSize: "3rem",
                fontWeight: "bold",
                lineHeight: "1.2",
                color: "#fff",
              }}
            >
              <span
                style={{
                  textShadow: "-2px -2px 5px #fff",
                  fontSize: "4rem",
                }}
              >
                نورتنا
              </span>{" "}
              في مغسلة الابهار لسيارات 
            </h1>
            <p
              className="text-xl opacity-90"
              style={{ fontFamily: "var(--font-arabic), sans-serif" }}
            >
              تقدم لكم خدمات غسيل وتلميع احترافية لسياراتكم مع عناية فائقة بكل
              التفاصيل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}