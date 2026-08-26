import Link from 'next/link';
import type { Metadata } from 'next';

// 1. Metadata SEO On-Page
export const metadata: Metadata = {
  title: 'FinanzasGuate | Cómo Retirar PayPal, Binance e Invertir en Guatemala',
  description: 'Guías paso a paso para retirar PayPal a bancos de Guatemala, transferir USDC con Airtm, comprar en Binance e invertir en la bolsa de EE.UU.',
  keywords: [
    'retirar paypal guatemala',
    'airtm guatemala',
    'binance guatemala',
    'usdc guatemala',
    'hapi guatemala',
    'cripto guatemala',
    'inversiones guatemala',
  ],
  alternates: {
    canonical: 'https://finanzas-guate.vercel.app', // Corregido a la URL actual
  },
  openGraph: {
    title: 'FinanzasGuate | Guías de PayPal, Cripto e Inversiones en Guatemala',
    description: 'Aprende a mover, cobrar e invertir tu dinero desde Guatemala de forma legal y segura.',
    url: 'https://finanzas-guate.vercel.app', // Corregido a la URL actual
    siteName: 'FinanzasGuate',
    locale: 'es_GT',
    type: 'website',
  },
};

export default function Home() {
  // 2. Datos estructurados JSON-LD para Google Search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://finanzas-guate.vercel.app/#website', // Corregido
        url: 'https://finanzas-guate.vercel.app', // Corregido
        name: 'FinanzasGuate',
        description: 'Educación financiera, cripto y retiros internacionales en Guatemala.',
        inLanguage: 'es-GT',
      },
      {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Cómo retirar dinero de PayPal a Bancos de Guatemala',
            url: 'https://finanzas-guate.vercel.app/guias/retirar-airtm-guatemala', // Corregido
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Cómo ganar dinero con la App Zigi en Guatemala',
            url: 'https://finanzas-guate.vercel.app/guias/zigi-guatemala', // Corregido
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Cómo invertir en la Bolsa de EE.UU. desde Guatemala con Hapi',
            url: 'https://finanzas-guate.vercel.app/guias/hapi-guatemala', // Corregido
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Análisis Cripto y Bull Run en Binance para Guatemala',
            url: 'https://finanzas-guate.vercel.app/guias/ciclo-crypto-octubre', // Corregido
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Script inyectado de Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-emerald-500 text-slate-950 font-black px-2 py-1 rounded text-lg">FG</span>
            <span className="font-bold text-lg text-white">
              Finanzas<span className="text-emerald-400">Guate</span>
            </span>
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
          Aprende a Ganar, Mover y Retirar tu Dinero en <span className="text-emerald-400">Guatemala</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          Guías paso a paso para retirar PayPal a bancos locales (BI, Banrural, G&T), mover USDC, usar Binance, Airtm e invertir en la bolsa desde Guatemala.
        </p>
      </section>

      {/* Grid de Contenidos */}
      <section id="guias" className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            Tutoriales de Finanzas, Cripto y Retiros en Guatemala
          </h2>
          <span className="text-xs text-slate-500 uppercase font-semibold">Actualizado 2026</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Airtm / PayPal */}
          <Link
            href="/guias/retirar-airtm-guatemala"
            className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  PayPal & Remesas GT
                </span>
                <span className="text-xs text-slate-500">Airtm GT</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                Cómo Retirar Dinero de PayPal a Bancos de Guatemala
              </h3>

              <p className="text-slate-400 text-sm mt-2 line-clamp-3">
                Aprende a pasar tu saldo de PayPal, Wise, USDC o freelancing a quetzales en BI, Banrural o G&T usando Airtm.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Ver Tutorial de Retiro</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card Hapi */}
          <Link
            href="/guias/hapi-guatemala"
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
                Cómo Invertir en la Bolsa de EE.UU. desde Guatemala
              </h3>

              <p className="text-slate-400 text-sm mt-2 line-clamp-3">
                Crea tu cuenta en Hapi, deposita desde tus bancos locales e invierte en S&P500, ETFs y acciones sin comisiones.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Ver Guía de Inversión</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card Zigi */}
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
                Cómo Ganar Dinero con Zigi en Guatemala
              </h3>

              <p className="text-slate-400 text-sm mt-2 line-clamp-3">
                Gana de Q40 a Q70 por cada invitado que se registre en Zigi. Descubre el truco de la primera transferencia a tu cuenta.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Ver Guía Zigi</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card Crypto */}
          <Link
            href="/guias/ciclo-crypto-octubre"
            className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Binance & Trading
                </span>
                <span className="text-xs text-slate-500">Crypto GT</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Comprar Criptomonedas en Binance desde Guatemala
              </h3>

              <p className="text-slate-400 text-sm mt-2 line-clamp-3">
                Análisis del mercado para Bitcoin, Ethereum y USDC en Binance P2P. Cómo operar de forma segura con Quetzales.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-amber-400 text-sm font-semibold">
              <span>Ver Análisis Cripto</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Bloque SEO de Contenido Adicional (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 pt-16 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Preguntas Frecuentes sobre Finanzas Digitales en Guatemala</h2>
        <div className="space-y-4">
          <details className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <summary className="font-bold cursor-pointer text-emerald-400">¿Cómo cobrar dinero de PayPal en un banco de Guatemala?</summary>
            <p className="text-slate-400 text-sm mt-2">
              La forma más directa es vincular tu cuenta de PayPal con Airtm o usar el método P2P/cuenta virtual en dólares para transferir los fondos a tu cuenta bancaria local en quetzales o dólares.
            </p>
          </details>
          <details className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <summary className="font-bold cursor-pointer text-emerald-400">¿Es legal comprar Criptomonedas y USDC en Guatemala?</summary>
            <p className="text-slate-400 text-sm mt-2">
              Sí, el comercio de criptoactivos no está prohibido en Guatemala. Puedes comprar y vender USDT, USDC o BTC mediante Binance P2P utilizando transferencias de bancos guatemaltecos.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
