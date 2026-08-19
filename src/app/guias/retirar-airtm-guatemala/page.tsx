import Link from 'next/link';

export const metadata = {
  title: 'Cómo Usar y Retirar Dinero de Airtm a Bancos de Guatemala | FinanzasGuate',
  description: 'Guía completa para cobrar PayPal en Guatemala mediante la cuenta Virtual de EE.UU. de Airtm y retirar fondos en Quetzales a tu banco local.',
};

export default function AirtmGuiaPage() {
  const MI_LINK_AIRTM = 'https://app.airtm.com/ivt/pabloe8c9705f';

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
            <span>Guía de Cobros Internacionales</span>
            <span>•</span>
            <span>Actualizado 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Cómo Usar Airtm en Guatemala: Retira de PayPal y Trabajos en Línea a Tu Banco
          </h1>
          <p className="text-slate-400 text-lg">
            Aprende a usar la cuenta bancaria virtual en USD que te da Airtm para cobrar saldo de PayPal, plataformas freelance o exchangers, y transferirlo directamente a tu cuenta bancaria en Quetzales.
          </p>
        </div>

        {/* Caja de Registro con Enlace de Referido */}
        <div className="my-8 bg-slate-900 border-2 border-emerald-500/40 rounded-2xl p-6 shadow-xl text-center md:text-left md:flex md:items-center md:justify-between gap-4">
          <div>
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Bono de Registro
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">Crea tu cuenta de Airtm gratis</h3>
            <p className="text-slate-400 text-sm mt-1">
              Obtén acceso a tu cuenta en USD virtuales e integraciones para cobrar en Guatemala.
            </p>
          </div>
          <a
            href={MI_LINK_AIRTM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-center"
          >
            Registrarme en Airtm
          </a>
        </div>

        {/* Video Tutorial */}
        <section className="my-10 bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
            📺 Video Tutorial Explicativo
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            Mira paso a paso cómo vincular tu cuenta virtual de EE.UU. de Airtm a PayPal y retirar tus fondos a tu banco guatemalteco.
          </p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/CTf2-kj8t3Q"
              title="¡Por fin! El MEJOR Método para Retirar de PayPal en Guatemala 🇬🇹 (Airtm)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <div className="space-y-10 text-slate-300 leading-relaxed mt-10">
          
          {/* Para qué sirve Airtm */}
          <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">¿Para qué sirve Airtm en Guatemala?</h2>
            <p className="mb-4">
              Airtm funciona como una billetera de dólares virtuales (AirUSD) diseñada para conectar pasarelas de pago internacionales con la banca local guatemalteca. Resolver el problema de no poder retirar dinero de PayPal directamente a tu banco es uno de sus usos principales.
            </p>
          </section>

          {/* Funciones clave */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Casos de Uso Principales en Guatemala</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">💳 Cuenta Bancaria Virtual en EE.UU.</h3>
                <p className="text-slate-400 text-sm">
                  Airtm te brinda una cuenta bancaria virtual de Estados Unidos a tu nombre. Puedes vincular esta cuenta a tu PayPal para retirar el saldo hacia Airtm como si tuvieras una cuenta estadounidense.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">🇬🇹 Retiros ACH a Bancos Locales</h3>
                <p className="text-slate-400 text-sm">
                  Convierte tus AirUSD a Quetzales directamente hacia cualquier banco de Guatemala (Banco Industrial, Banrural, G&T Continental, BAC, etc.) vía transferencia ACH en minutos.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">🔄 Exchanger Multilink</h3>
                <p className="text-slate-400 text-sm">
                  Intercambia fondos desde o hacia plataformas como Payoneer, Skrill, Neteller, Wise, Binance (P2P), Payeer y tarjetas de regalo de Amazon.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-lg mb-2">💼 Cobro de Trabajos Freelance</h3>
                <p className="text-slate-400 text-sm">
                  Ideal para recibir pagos de plataformas de trabajo remoto como Upwork, Fiverr, Remotasks, Deel u Upwork mediante transferencia o correo.
                </p>
              </div>
            </div>
          </section>

          {/* Paso a Paso para Retirar de PayPal */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Paso a paso: Cómo cobrar de PayPal a tu banco en Guatemala</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">1</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Crea y verifica tu cuenta en Airtm</h3>
                  <p className="text-slate-400 text-sm mt-1">Registrate con tu correo y sube la foto de tu DPI para tener acceso a los servicios financieros sin límites de retiro.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">2</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Solicita tu Cuenta Virtual USA</h3>
                  <p className="text-slate-400 text-sm mt-1">Ve a la opción "Agregar" en Airtm, selecciona Cuenta Virtual de EE.UU. y copia el número de ruta y de cuenta que la plataforma te asigna.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">3</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Vincúlala a tu cuenta de PayPal</h3>
                  <p className="text-slate-400 text-sm mt-1">Ingresa a PayPal en la sección "Cartera", selecciona "Asociar una cuenta bancaria de EE.UU." e introduce los datos otorgados por Airtm.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-emerald-500/20 text-emerald-400 font-black rounded-xl p-3 text-lg leading-none">4</span>
                <div>
                  <h3 className="font-bold text-white text-lg">Transfiere a tu Banco en Quetzales</h3>
                  <p className="text-slate-400 text-sm mt-1">Una vez que el dinero llegue a Airtm, ve a la opción "Retirar", elige tu banco en Guatemala e ingresa tu número de cuenta en Quetzales para recibir la transferencia.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
            <h3 className="text-xl font-bold text-white">¿Listo para comenzar a cobrar tus pagos en Guatemala?</h3>
            <p className="text-slate-400 text-sm">Abre tu cuenta hoy mismo y empieza a gestionar tus fondos sin barreras internacionales.</p>
            <a
              href={MI_LINK_AIRTM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-3 rounded-xl transition-all"
            >
              Crear Cuenta en Airtm
            </a>
          </div>

        </div>
      </article>
    </main>
  );
}
