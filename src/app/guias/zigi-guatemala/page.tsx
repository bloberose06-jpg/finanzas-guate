import Link from 'next/link';
import { ReferralBox } from '@/components/ReferralBox';

export const metadata = {
  title: 'Cómo Ganar Dinero con Zigi Guatemala (Hasta Q70 por Referido) | FinanzasGuate',
  description: 'Guía paso a paso para ganar entre Q40 y Q70 por cada amigo que invités a Zigi y cómo tu amigo recibe Q10 gratis en Guatemala.',
};

export default function ZigiGuiaPage() {
  const MI_CODIGO_ZIGI = 'HTY951'; 
  const LINK_OFICIAL_ZIGI = 'https://zigi.app/referidos/';

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
            <span>Guía de Referidos y Finanzas</span>
            <span>•</span>
            <span>Actualizado 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Cómo Ganar Dinero en Guatemala Invitando Amigos a ZIGI (Hasta Q70 por Cada Uno)
          </h1>
          <p className="text-slate-400 text-lg">
            Aprende cómo activar la promoción de Zigi, cómo ingresar tu código para ganar Q10 gratis y todo lo que puedes hacer con esta billetera digital respaldada por Banco Industrial.
          </p>
        </div>

        {/* Banner de Promo Especial */}
        <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3">
          <span className="text-xl">🔥</span>
          <p className="text-xs md:text-sm text-amber-200">
            <strong>Tip de Ganancia Extra:</strong> Aunque el bono estándar es de <strong>Q40 por referido</strong>, Zigi lanza promociones relámpago en días específicos donde incrementan la recompensa hasta <strong>Q70 por cada amigo</strong> que realice su primera transferencia.
          </p>
        </div>

        {/* Caja de Referido */}
        <ReferralBox code={MI_CODIGO_ZIGI} appLink={LINK_OFICIAL_ZIGI} />

        <div className="space-y-10 text-slate-300 leading-relaxed mt-10">
          
          {/* Cómo funciona el bono */}
          <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">¿Cómo funciona el programa de referidos?</h2>
            <p className="mb-4">
              Zigi es una plataforma financiera 100% digital respaldada por Banco Industrial. Por tiempo limitado, cuentan con un sistema de recompensas para nuevos usuarios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-200 font-medium">
              <li><strong className="text-emerald-400">Tu amigo recibe Q10 gratis:</strong> Al registrarse e ingresar tu código de invitación.</li>
              <li><strong className="text-emerald-400">Tú ganas de Q40 a Q70:</strong> En el instante en que tu amigo realice su primera transferencia mayor a Q5.</li>
            </ul>
          </section>

          {/* Para qué más sirve Zigi */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">¿Para qué sirve Zigi? Todos sus usos</h2>
            <p className="text-slate-400 text-sm">
              Más allá de la promoción de referidos, Zigi es una herramienta financiera completa para mover tu pisto en Guatemala desde el celular:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-base mb-1">💸 Transferencias GRATIS</h3>
                <p className="text-slate-400 text-xs">Transfiere dinero a cualquier banco de Guatemala (ACH) o a tus contactos sin pagar comisión ni agregar números de cuenta largos.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-base mb-1">📲 Cobro de Remesas</h3>
                <p className="text-slate-400 text-xs">Recibe el dinero que te envían desde EE. UU. directamente en tu app ingresando el código de remesa sin hacer filas en agencias.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-base mb-1">⚡ Créditos Inmediatos</h3>
                <p className="text-slate-400 text-xs">Solicita préstamos desde Q70 hasta Q3,500 en segundos, 24/7 y sin necesidad de fiador ni trámites en papel.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-base mb-1">💳 Tarjeta de Débito Gratis</h3>
                <p className="text-slate-400 text-xs">Obtén tu tarjeta Mastercard física/digital para comprar en línea o en establecimientos sin cobro de emisión ni anualidad.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-base mb-1">🧾 Pago de Servicios y QR</h3>
                <p className="text-slate-400 text-xs">Paga luz (EEGSA/Energuate), agua, teléfono (Claro/Tigo) o escanea un código QR para pagar en comercios.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-emerald-400 text-base mb-1">🏧 Retiro en Cajeros Bi</h3>
                <p className="text-slate-400 text-xs">Retira efectivo gratis en cualquier cajero o agencia de Banco Industrial usando tu tarjeta o mediante código sin tarjeta.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-6 pt-6 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white">Preguntas Frecuentes de la App</h2>

            <div className="space-y-4">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white">¿Zigi es 100% gratis o tiene cobros ocultos?</h3>
                <p className="text-slate-400 text-sm mt-2">
                  Es completamente gratuita. No cobra comisión por apertura, manejo de cuenta, saldo mínimo ni anualidad. Las transferencias entre bancos y los retiros en cajeros de Banco Industrial también son de costo Q0.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white">¿Qué necesito para registrarme?</h3>
                <p className="text-slate-400 text-sm mt-2">
                  Solo necesitas descargar la app (disponible para Android, iOS y Huawei), tener tu DPI vigente a la mano, un número de celular de Guatemala y un correo electrónico. No requieres constancia de ingresos.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white">¿Es seguro tener mi dinero en Zigi?</h3>
                <p className="text-slate-400 text-sm mt-2">
                  Sí, cuenta con todo el respaldo de Banco Industrial (BI), por lo que tu dinero opera dentro del sistema bancario formal regulado en Guatemala.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
