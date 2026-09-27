import React from 'react';

export default function Home() {
  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 dir-rtl">
        <header className="flex justify-between items-center py-4 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-cyan-400">WASL • منصة وصل</h1>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm">
            تسجيل الدخول
          </button>
        </header>

        <section className="my-auto text-center py-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            منصة رقمية متكاملة للوساطة والخدمات
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
            مرحباً بكم في المعاينة المباشرة لمنصة وصل.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20">
              استكشف الخدمات
            </button>
          </div>
        </section>

        <footer className="text-center text-slate-500 text-sm py-4 border-t border-slate-800">
          © 2026 جميع الحقوق محفوظة لمنصة وصل
        </footer>
      </main>
    </>
  );
}
