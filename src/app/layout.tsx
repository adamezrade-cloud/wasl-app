import React from 'react';

export const metadata = {
  title: 'منصة وصل - WASL',
  description: 'منصة رقمية متكاملة للخدمات والوساطة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </head>
      <body style={{ backgroundColor: '#020617', color: '#f8fafc', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
