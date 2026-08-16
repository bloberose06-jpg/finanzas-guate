'use client';
import { useState } from 'react';

interface ReferralBoxProps {
  code: string;
  appLink: string;
}

export function ReferralBox({ code, appLink }: ReferralBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAndRedirect = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      window.open(appLink, '_blank');
      setCopied(false);
    }, 1200);
  };

  return (
    <div className="my-8 bg-slate-900 border-2 border-emerald-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
      <div className="absolute -right-8 -top-8 bg-emerald-500/10 w-32 h-32 rounded-full blur-2xl pointer-events-none" />
      
      <div className="text-center md:text-left md:flex md:items-center md:justify-between gap-4">
        <div>
          <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Bono de Bienvenida
          </span>
          <h3 className="text-2xl font-bold text-white mt-2">¡Gana tus primeros Q10 gratis!</h3>
          <p className="text-slate-400 text-sm mt-1">
            Copia este código e ingrésalo en la app Zigi antes de hacer tu primera transferencia mayor a Q5.
          </p>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end gap-2">
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-center w-full md:w-auto">
            <span className="text-xs text-slate-500 block uppercase font-semibold">Tu Código de Promoción</span>
            <span className="text-2xl font-black text-emerald-400 tracking-widest">{code}</span>
          </div>

          <button
            onClick={handleCopyAndRedirect}
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl transition-all transform active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            {copied ? '¡Código Copiado! Abriendo Zigi...' : 'Copiar Código e Ir a Zigi'}
          </button>
        </div>
      </div>
    </div>
  );
}