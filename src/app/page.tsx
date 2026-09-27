import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans pb-12">
      {/* Navbar / الشريط العلوي */}
      <header className="border-b border-slate-800/80 bg-[#070d1d]/90 backdrop-blur px-4 py-3 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-xl">🌐</span>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wider text-white leading-none">WASL</h1>
              <p className="text-xs text-slate-400 mt-1">وصل • منصة الوساطة العالمية</p>
            </div>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition">
            تسجيل الدخول
          </button>
        </div>

        {/* Navigation Tabs */}
        <nav className="max-w-6xl mx-auto flex items-center gap-2 mt-4 overflow-x-auto pb-1 text-sm">
          <button className="bg-slate-800/80 text-cyan-400 border border-cyan-500/30 px-4 py-1.5 rounded-lg font-medium flex items-center gap-2 whitespace-nowrap">
            🏠 الرئيسية
          </button>
          <button className="text-slate-400 hover:text-slate-200 px-4 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap">
            📊 لوحة التحكم
          </button>
          <button className="text-slate-400 hover:text-slate-200 px-4 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap">
            📈 الإيرادات العامة
          </button>
        </nav>
      </header>

      {/* Sub Header / شريط المعلومات */}
      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
          <div>
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase block mb-1">
              WASL • GLOBAL DIGITAL PLATFORM
            </span>
            <h2 className="text-lg font-bold text-slate-100">
              ربط العملاء بمقدمي الخدمات حول العالم
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-cyan-950/80 text-cyan-300 border border-cyan-800 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
              👤 Client Portal
            </span>
            <span className="bg-slate-800 text-cyan-400 text-xs font-bold px-3 py-1.5 rounded-full">
              12% • MAD
            </span>
          </div>
        </div>
      </section>

      {/* Hero Banner / البطاقة الرئيسية */}
      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0a152e] to-[#030712] border border-cyan-500/20 p-8 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs text-cyan-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            GLOBAL DIGITAL PLATFORM • WASL
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            وصل – جسر الثقة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              بين العملاء ومقدمي الخدمات
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            منصة متكاملة تضمن الحقوق، تدر الإيرادات، وتوفر حلول وساطة رقمية آمنة بلمسة احترافية.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/25">
              استكشف الخدمات
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl border border-slate-700 transition">
              تعرف على المنصة
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
