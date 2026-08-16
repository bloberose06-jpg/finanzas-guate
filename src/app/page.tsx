import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-emerald-500 text-slate-950 font-black px-2 py-1 rounded text-xl">FG</span>
            <span className="text-xl font-bold tracking-tight">Finanzas<span className="text-emerald-400">Guate</span></span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#guias" className="hover:text-emerald-400 transition-colors">Guías</a>
            <Link href="/guias/zigi-guatemala" className="hover:text-emerald-400 transition-colors">Gana Dinero</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-16 pb-12">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Guías y Métodos Verificados
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
          Aprende a mover y ganar dinero en <span className="text-emerald-400">Guatemala</span>
        </h1>
        <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
          Tutoriales paso a paso para retirar fondos de Airtm, aprovechar promociones de Zigi y optimizar tus finanzas personales sin pagar comisiones de más.
        </p>
      </section>

      {/* Sección de Guías Destacadas con id="guias" */}
      <section id="guias" className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Guías y Tutoriales Recientes</h2>
          <span className="text-xs text-slate-500 uppercase font-semibold">Actualizado 2026</span>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tarjeta de Zigi */}
          <Link 
            href="/guias/zigi-guatemala" 
            className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Gana Q40
              </span>
              <span className="text-xs text-slate-500">Zigi GT</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              Cómo Ganar Dinero Invitando Amigos a ZIGI
            </h3>

            <p className="text-slate-400 text-sm mt-2 line-clamp-3">
              Recibí Q40 por cada amigo que invités y Q10 para tu amigo. Aprende paso a paso cómo activar tu código de referido.
            </p>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Leer Guía Completa</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}