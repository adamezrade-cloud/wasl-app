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
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
