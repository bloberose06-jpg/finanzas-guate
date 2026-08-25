import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// 1. Metadata SEO On-Page
export const metadata: Metadata = {
  title: '¿Por qué Octubre Inicia el Próximo Bull Run Cripto? | Análisis Binance Guatemala',
  description: 'Análisis del ciclo de 4 años de Bitcoin. Descubre la oportunidad de 3x-5x en BTC, ETH y SOL y cómo comprar cripto desde Guatemala en Binance.',
  keywords: [
    'Bitcoin Guatemala',
    'Ethereum',
    'Solana',
    'Bull Run Cripto',
    'Ciclo de 4 años Bitcoin',
    'Binance P2P Guatemala',
    'Comprar criptomonedas Guatemala',
    'Invertir en cripto Guatemala',
  ],
  alternates: {
    canonical: 'https://finanzasguate.com/guias/ciclo-crypto-octubre',
  },
  openGraph: {
    title: '¿Por qué Octubre marca el inicio del próximo Bull Run Cripto?',
    description: 'Análisis de riesgo/beneficio (3x-5x) en Bitcoin, Ethereum y Solana. Guía para operar desde Guatemala.',
    url: 'https://finanzasguate.com/guias/ciclo-crypto-octubre',
    siteName: 'FinanzasGuate',
    locale: 'es_GT',
    type: 'article',
    publishedTime: '2026-08-01T00:00:00.000Z',
    authors: ['FinanzasGuate'],
    images: [
      {
        url: 'https://finanzasguate.com/ciclo-bitcoin.jpg',
        width: 1200,
        height: 675,
        alt: 'Gráfico del ciclo de 4 años de Bitcoin y proyección alcista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Por qué Octubre Inicia el Próximo Bull Run Cripto?',
    description: 'Análisis del ciclo de 4 años de Bitcoin y oportunidades en BTC, ETH y SOL desde Guatemala.',
    images: ['https://finanzasguate.com/ciclo-bitcoin.jpg'],
  },
};

export default function CicloCryptoPage() {
  const binanceRef = 'https://www.binance.com/register?ref=B8J9JHZM';

  // 2. Schema Markup (Article + FAQPage)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://finanzasguate.com/guias/ciclo-crypto-octubre/#article',
        headline: '¿Por qué Octubre podría marcar el inicio del próximo Bull Run Cripto?',
        description: 'Análisis completo del ciclo de 4 años de Bitcoin, Ethereum y Solana con proyecciones de retorno y guía de compra desde Guatemala.',
        image: 'https://finanzasguate.com/ciclo-bitcoin.jpg',
        datePublished: '2026-08-01T00:00:00.000Z',
        dateModified: '2026-08-25T00:00:00.000Z',
        author: {
          '@type': 'Organization',
          name: 'FinanzasGuate',
          url: 'https://finanzasguate.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'FinanzasGuate',
          url: 'https://finanzasguate.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://finanzasguate.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://finanzasguate.com/guias/ciclo-crypto-octubre',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cómo comprar Bitcoin y criptomonedas en Guatemala?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Puedes comprar Bitcoin, Ethereum y USDC de forma legal desde Guatemala registrándote en Binance y utilizando Binance P2P con transferencias locales de bancos como BI, Banrural o G&T.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué es el ciclo de 4 años de Bitcoin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El ciclo de 4 años de Bitcoin es un patrón histórico impulsado por el halving (reducción a la mitad de la emisión de BTC), donde habitualmente se produce una fase de acumulación seguida de un periodo alcista (Bull Run).',
            },
          },
        ],
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      {/* Inyección de JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Botón de Regreso Superior & Breadcrumbs */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200"
        >
          <span>←</span> Volver a FinanzasGuate
        </Link>

        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 hidden sm:block">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:underline text-emerald-600">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/#guias" className="hover:underline text-emerald-600">
                Guías
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-700 font-semibold" aria-current="page">
              Ciclo Crypto
            </li>
          </ol>
        </nav>
      </div>

      {/* Encabezado */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Análisis de Mercado & Trading
          </span>
          <span className="text-sm text-gray-500">• 4 min de lectura</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          ¿Por qué Octubre podría marcar el inicio del próximo Bull Run Cripto?
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Las principales criptomonedas se preparan para un movimiento proyectado de <strong>3x a 5x</strong>. Estamos al final del ciclo de 4 años de Bitcoin y ante un escenario de riesgo/beneficio clave para inversores en <strong>Guatemala</strong> y Latinoamérica.
        </p>
      </header>

      {/* Banner Resumen / Key Takeaways */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 mb-10 shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-amber-400 flex items-center gap-2">
          💡 Puntos Clave de la Oportunidad Actual
        </h2>
        <ul className="space-y-3 text-slate-200 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Cierre de ciclo de 4 años:</strong> Octubre históricamente marca la transición hacia la fase parabólica alcista en el mercado cripto.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Ratio Riesgo/Beneficio asimétrico:</strong> Riesgo estimado de corrección del 20%-30% vs. potencial de subida del 300%-500% (3x-5x).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Soportes semanales clave (Weekly Candles):</strong> Velas semanales sólidas en BTC, ETH y SOL confirman acumulación institucional.
            </span>
          </li>
        </ul>
      </div>

      {/* Contenido Principal */}
      <section className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          1. El Ciclo de 4 Años de Bitcoin y el Catalizador de Octubre
        </h2>
        <p>
          El mercado de criptomonedas se rige bajo un ciclo de cuatro años determinado por los eventos de <em>halving</em> de Bitcoin y la liquidez global. Históricamente, tras la fase de consolidación posterior al halving, <strong>octubre es el mes decisivo</strong> donde se reanuda la tendencia alcista dominante.
        </p>
        <p>
          No estar posicionado antes de este cambio de fase significa perder el tramo de mayor valorización del ciclo. Oportunidades con este grado de claridad técnica ocurren únicamente una o dos veces cada década.
        </p>

        {/* Imagen optimizada con Next.js Image */}
        <figure className="my-8">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/ciclo-bitcoin.jpg"
              alt="Gráfico técnico del ciclo de 4 años de Bitcoin y fase de expansión alcista"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            Estructura histórica del ciclo de 4 años de Bitcoin y la fase de expansión.
          </figcaption>
        </figure>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          2. ¿Por qué es fundamental acumular BTC y Major Coins (ETH, SOL) AHORA?
        </h2>
        <p>
          Durante las fases iniciales de un <em>Bull Run</em>, la liquidez fluye primero hacia los activos más consolidados y seguros. Comprar <strong>Bitcoin (BTC)</strong>, <strong>Ethereum (ETH)</strong> y <strong>Solana (SOL)</strong> en este punto ofrece dos ventajas críticas:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-5 border border-amber-200 bg-amber-50/50 rounded-xl">
            <h3 className="font-bold text-lg text-amber-900 mb-2">🛡️ Mayor Seguridad</h3>
            <p className="text-sm text-amber-800">
              El hecho de que estas criptomonedas hayan mostrado fortaleza reciente valida la presencia de compradores institucionales. Son activos con alta liquidez que no corren el riesgo de desaparecer como ocurre con proyectos de baja capitalización.
            </p>
          </div>
          <div className="p-5 border border-indigo-200 bg-indigo-50/50 rounded-xl">
            <h3 className="font-bold text-lg text-indigo-900 mb-2">📈 Velas Semanales Clave (Weekly Candles)</h3>
            <p className="text-sm text-indigo-800">
              Las velas semanales están sosteniendo niveles de soporte clave. Cuando una tendencia mayor arranca desde estos soportes, los retrocesos profundos son muy poco frecuentes.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          3. La Matemática del Riesgo vs. Beneficio (Risk/Reward Ratio)
        </h2>
        <p>
          En el trading e inversión profesional, todo se reduce a la asimetría de la oportunidad. Analicemos la estructura actual del mercado:
        </p>

        {/* Tabla Risk Reward */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-900 font-bold border-b border-gray-200">
                <th className="p-4">Escenario</th>
                <th className="p-4">Variación Proyectada</th>
                <th className="p-4">Interpretación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr>
                <td className="p-4 font-semibold text-red-600">Riesgo Bajista (Downside)</td>
                <td className="p-4 font-bold text-red-600">-20% a -30%</td>
                <td className="p-4 text-gray-600">Corrección máxima estimada retesteando soportes semanales.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-green-600">Potencial Alcista (Upside)</td>
                <td className="p-4 font-bold text-green-600">+300% a +500% (3x - 5x)</td>
                <td className="p-4 text-gray-600">Proyección conservadora para el pico del ciclo en BTC, ETH y SOL.</td>
              </tr>
              <tr className="bg-indigo-50/60 font-bold">
                <td className="p-4 text-indigo-950">Relación Riesgo / Beneficio</td>
                <td className="p-4 text-indigo-950" colSpan={2}>
                  Arriesgar 1% de caída para buscar entre 10% y 15% de ganancia (1:10+ R/R)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Pocos activos financieros ofrecen una ventana donde el riesgo está acotado a un 20%-30% frente a la posibilidad real de triplicar o quintuplicar el capital en los próximos meses.
        </p>
      </section>

      {/* CTA Box / Referral Binance */}
      <div className="my-12 p-8 bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 rounded-2xl text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Compra Cripto en Guatemala
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            ¿Listo para posicionarte en el próximo Bull Run?
          </h3>
          <p className="text-amber-100 text-sm md:text-base max-w-xl">
            Crea tu cuenta en <strong>Binance</strong> con nuestro enlace oficial. Puedes depositar y comprar Bitcoin, Ethereum y Solana directamente en quetzales mediante Binance P2P con tus bancos locales.
          </p>
        </div>

        <Link
          href={binanceRef}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-center whitespace-nowrap"
        >
          Registrarse en Binance GT 🚀
        </Link>
      </div>

      {/* Sección FAQ para Fragmentos Destacados de Google */}
      <section className="my-10 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Preguntas Frecuentes sobre el Mercado Cripto</h2>
        <div className="space-y-3">
          <details className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <summary className="font-bold cursor-pointer text-gray-900">¿Cómo comprar Bitcoin y Criptomonedas desde Guatemala?</summary>
            <p className="text-sm text-gray-600 mt-2">
              Puedes abrir una cuenta en Binance, verificar tu identidad (KYC) y utilizar Binance P2P para comprar USDT o Bitcoin transfiriendo desde tus cuentas de Banco Industrial, Banrural, G&T o BAM.
            </p>
          </details>
          <details className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <summary className="font-bold cursor-pointer text-gray-900">¿Qué es el ciclo de 4 años de Bitcoin?</summary>
            <p className="text-sm text-gray-600 mt-2">
              Es el comportamiento histórico del precio de BTC asociado al halving. Cada 4 años, la recompensa por minar Bitcoin se reduce a la mitad, limitando la oferta y generando ciclos de acumulación y expansión alcista masiva.
            </p>
          </details>
        </div>
      </section>

      {/* Botón Inferior para Volver al Inicio */}
      <div className="my-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
        >
          <span>←</span> Explora más guías en FinanzasGuate
        </Link>
      </div>

      {/* Footer del Artículo */}
      <footer className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-500 text-center">
        <p>
          <em>Aviso de Riesgo:</em> El contenido presentado es puramente educativo e informativo. Las inversiones en criptomonedas conllevan volatilidad y riesgo de mercado. Realiza tu propia investigación (DYOR) antes de tomar decisiones financieras.
        </p>
      </footer>
    </article>
  );
}
