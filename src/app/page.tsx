import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
        <h1 className="text-4xl font-extrabold mb-4 text-amber-400">
          منصة وصل · WASL
        </h1>
        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
          منصة رقمية عالمية متكاملة للوساطة والخدمات. مرحباً بكم في المعاينة المباشرة لمنصة وصل.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all">
            استكشف الخدمات
          </button>
          <button className="border border-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition-all">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </main>
  );
}
