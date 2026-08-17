import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-emerald-500 text-slate-950 font-black px-2 py-1 rounded text-lg">FG</span>
            <span className="font-bold text-lg text-white">Finanzas<span className="text-emerald-400">Guate</span></span>
          </Link>
          <a
            href="#guias"
            className="text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold px-3 py-1.5 rounded-lg transition-all"
          >
            Ver Guías
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center space-y-6">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Educación Financiera & Oportunidades en GT
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Aprende a Ganar, Mover y Cobrar tu Dinero en <span className="text-emerald-400">Guatemala</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          Guías paso a paso para aprovechar billeteras digitales, retirar pagos internacionales de PayPal a bancos locales y maximizar tus recompensas de referidos.
        </p>
      </section>

      {/* Grid de Contenidos */}
      <section id="guias" className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Mejores Formas de Ganar y Mover Dinero en GT</h2>
          <span className="text-xs text-slate-500 uppercase font-semibold">Actualizado 2026</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card de Zigi */}
          <Link 
            href="/guias/zigi-guatemala" 
            className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Hasta Q70 por Amigo
                </span>
                <span className="text-xs text-slate-500">App Zigi</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                Cómo Ganar Dinero Invitando Gente a ZIGI
              </h3>

              <p className="text-slate-400 text-sm mt-2 line-clamp-3">
                Gana de Q40 a Q70 por cada conocido que se registre y Q10 directos para tu invitado. Aprende el truco de la primera transferencia.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Ver Guía y Código</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card de Airtm */}
          <Link 
            href="/guias/retirar-airtm-guatemala" 
            className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  PayPal & Remesas
                </span>
                <span className="text-xs text-slate-500">Airtm GT</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                Retirar Dinero de PayPal a Bancos de Guatemala
              </h3>

              <p className="text-slate-400 text-sm mt-2 line-clamp-3">
                Usa la cuenta bancaria de EE.UU. que otorga Airtm para transferir fondos de PayPal, Wise, Binance o freelancing directamente a tu cuenta local.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Ver Tutorial Completo</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card de Hapi */}
          <Link 
            href="/guias/Hapi-Guatemala" 
            className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Inversiones & Acciones
                </span>
                <span className="text-xs text-slate-500">Hapi GT</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                Cómo Invertir en Bolsa desde Guatemala con Hapi
              </h3>

              <p className="text-slate-400 text-sm mt-2 line-clamp-3">
                Aprende a crear tu cuenta, depositar fondos desde bancos locales e invertir en acciones y ETFs de EE.UU. de forma segura.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Ver Guía Paso a Paso</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}
