import Link from 'next/link';

export const metadata = {
  title: 'Cómo Invertir en Hapi desde Guatemala: Acciones, ETFs y Dividendos | FinanzasGuate',
  description: 'Guía completa sobre cómo usar Hapi App en Guatemala para comprar acciones de EE.UU., cobrar dividendos y retirar tus ganancias a bancos locales.',
};

export default function HapiGuiaPage() {
  const MI_LINK_HAPI = 'https://hapi.trade/es/rewards?code=PABSAQ1';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-emerald-500 text-slate-950 font-black px-2 py-1 rounded text-lg">FG</span>
            <span className="font-bold text-lg">Finanzas<span className="text-emerald-400">Guate</span></span>
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            ← Volver al Inicio
          </Link>
        </div>
      </header>

      {/* Artículo Principal */}
      <article className="max-w-3xl mx-auto px-4 pt-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
            <span>Inversiones en Bolsa</span>
            <span>•</span>
            <span>Actualizado 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Cómo Usar Hapi en Guatemala: Invierte en Acciones, ETFs y Cobra Dividendos
          </h1>
          <p className="text-slate-400 text-lg">
            Aprende a abrir tu cuenta de corretaje regulada en EE.UU. desde Guatemala, comprar fracciones de acciones desde $1 y construir un portafolio generador de ingresos pasivos por dividendos.
          </p>
        </div>

        {/* Banner promocional / Imagen destacada */}
        <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
            alt="Inversión en Bolsa y Acciones de EE.UU."
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
            <span className="text-sm font-semibold text-emerald-400">
              Bolsa de Valores de EE.UU. accesible desde Latinoamérica
            </span>
          </div>
        </div>

        {/* Caja de Registro con Enlace de Referido */}
        <div className="my-8 bg-slate-900 border-2 border-emerald-500/40 rounded-2xl p-6 shadow-xl text-center md:text-left md:flex md:items-center md:justify-between gap-4">
          <div>
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Bono de Bienvenida
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">Crea tu cuenta gratis en Hapi</h3>
            <p className="text-slate-400 text-sm mt-1">
              Invierte en la Bolsa de EE.UU. sin pagar comisiones por operación y recibe una recompensa al registrarte.
            </p>
          </div>
          <a
            href={MI_LINK_HAPI}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-center whitespace-nowrap"
          >
            Abrir Cuenta en Hapi
          </a>
        </div>

        <div className="space-y-10 text-slate-300 leading-relaxed mt-10">

          {/* ¿Qué es Hapi? */}
          <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">¿Qué es Hapi y por qué utilizarlo desde Guatemala?</h2>
            <p className="mb-4">
              Hapi es un broker digital y aplicación móvil regulada en Estados Unidos (miembro de FINRA y SIPC) diseñada para facilitar el acceso a la Bolsa de Valores de EE.UU. a inversionistas de Guatemala y Latinoamérica.
            </p>
            <p>
              A diferencia de las bancas de inversión tradicionales que requieren montos de apertura elevados ($5,000+), Hapi te permite empezar a invertir desde tan solo **$1 USD** y sin comisiones por compra/venta de acciones.
            </p>
          </section>

          {/* Características y funciones clave */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Razones Principales para Invertir con Hapi</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">💵 Acciones Fraccionadas</h3>
                <p className="text-slate-400 text-sm">
                  No necesitas comprar una acción entera de empresas costosas como Apple, Microsoft o Amazon. Puedes invertir cualquier monto desde $1 en fracciones de acción.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">📈 Ingresos Pasivos por Dividendos</h3>
                <p className="text-slate-400 text-sm">
                  Recibe pagos de dividendos en dólares directamente en la aplicación cuando compras acciones o ETFs distribuidos trimestral o mensualmente (ej. Coca-Cola, Realty Income, SCHD).
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">🛡️ Regulado y Protegido</h3>
                <p className="text-slate-400 text-sm">
                  Tu dinero y títulos valores cuentan con el respaldo de la SIPC, cubriendo cuentas individuales de corretaje de hasta $500,000 USD en caso de insolvencia de la entidad.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">🇬🇹 Depósitos y Retiros Directos</h3>
                <p className="text-slate-400 text-sm">
                  Puedes fondear tu cuenta en Hapi utilizando transferencias ACH internacionales, Airtm, tarjeta o transferencias bancarias locales según disponibilidad de pasarelas.
                </p>
              </div>
            </div>
          </section>

          {/* Sección de Dividendos */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="md:w-1/2 space-y-3">
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Flujo de Efectivo
                </span>
                <h2 className="text-2xl font-bold text-white">¿Cómo funcionan los Dividendos en Hapi?</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cuando inviertes en una empresa o ETF que reparte utilidades a sus accionistas, Hapi acredita automáticamente el dividendo en tu saldo disponible en la app en la fecha de pago.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ese dinero acreditado puedes retirarlo hacia tu banco en Guatemala o reinvertirlo para acelerar el crecimiento de tu portafolio mediante el interés compuesto.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
                  alt="Análisis de gráficos de inversión y dividendos"
                  className="rounded-xl border border-slate-800 object-cover w-full h-48 md:h-full"
                />
              </div>
            </div>
          </section>

          {/* Paso a Paso para Iniciar en Hapi */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Guía Paso a Paso: Cómo Empezar desde Guatemala</h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">1</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Descarga la App y Completa la Verificación</h3>
                  <p className="text-slate-400 text-sm mt-1">Registra tus datos personales y verifica tu identidad escaneando tu DPI o pasaporte guatemalteco. El proceso suele ser aprobado en menos de 24 horas.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">2</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Realiza tu Primer Depósito</h3>
                  <p className="text-slate-400 text-sm mt-1">Selecciona el método de pago conveniente (Airtm, tarjeta de débito/crédito internacional o transferencia bancaria en USD) para agregar fondos a tu balance.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">3</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Busca tus Acciones o ETFs Favoritos</h3>
                  <p className="text-slate-400 text-sm mt-1">Utiliza el buscador para encontrar empresas como Apple (AAPL), Coca-Cola (KO) o ETFs diversificados como S&P 500 (VOO) o SCHD (Dividend Equity ETF).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">4</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Ejecuta la Compra y Recibe Dividendos</h3>
                  <p className="text-slate-400 text-sm mt-1">Ingresa el monto en dólares que deseas invertir, confirma la orden y listo. Tus dividendos llegarán automáticamente según el calendario de pagos de cada activo.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
            <h3 className="text-xl font-bold text-white">¿Listo para construir tu portafolio de dividendos?</h3>
            <p className="text-slate-400 text-sm">Empieza a invertir en las empresas más grandes del mundo desde Guatemala de forma segura y accesible.</p>
            <a
              href={MI_LINK_HAPI}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-3 rounded-xl transition-all"
            >
              Crear Cuenta Gratis en Hapi
            </a>
          </div>

        </div>
      </article>
    </main>
  );
}
