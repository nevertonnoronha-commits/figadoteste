import { useState, useEffect, useCallback, useRef } from 'react';
import { ShieldCheck, Lock, ArrowRight, CheckCircle2, X, Tag, Clock, Users, Copy, ChevronUp, ChevronDown } from 'lucide-react';
import { getHotmartUrl, trackGoToCheckout } from '../../utils/analytics';

const HOTMART_URL = 'https://pay.hotmart.com/W105836452N?src=RodYaOoMDvTso6sTyZfNSf4gyR7let1Fd1YZ';

// Mesmos outlets da EditorialCoverageSection — consistência página/modal
const MEDIA_LOGOS = [
  { name: 'Infobae',      color: '#005fa3', bg: '#f0f6ff',  weight: '900' },
  { name: 'El Universal', color: '#b00020', bg: '#fff0f2',  weight: '900' },
  { name: 'El Comercio',  color: '#003580', bg: '#eef3ff',  weight: '900' },
  { name: 'RPP Noticias', color: '#d62026', bg: '#fff0f1',  weight: '800' },
];

const COUPON_CODE  = 'NATURALE85';
const FULL_PRICE   = 120.95;
const FINAL_PRICE  = 17.99;
const DISCOUNT_AMT = (FULL_PRICE - FINAL_PRICE).toFixed(2);

function useMiniTimer(isOpen) {
  const mRef = useRef(4);
  const sRef = useRef(47);
  const [display, setDisplay] = useState('04:47');

  useEffect(() => {
    if (!isOpen) return;
    mRef.current = 4; sRef.current = 47;
    setDisplay('04:47');

    const fmt = (v) => String(v).padStart(2, '0');
    const id = setInterval(() => {
      if (sRef.current > 0) {
        sRef.current -= 1;
      } else if (mRef.current > 0) {
        mRef.current -= 1;
        sRef.current  = 59;
      } else {
        clearInterval(id);
        return;
      }
      setDisplay(`${fmt(mRef.current)}:${fmt(sRef.current)}`);
    }, 1000);

    return () => clearInterval(id);
  }, [isOpen]);

  return display;
}

export const CheckoutModal = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [couponRevealed, setCouponRevealed] = useState(false);
  const [couponOpen, setCouponOpen]        = useState(true);
  const [copied, setCopied]               = useState(false);
  const [exitWarning, setExitWarning]     = useState(false);
  const timer                              = useMiniTimer(isOpen);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(COUPON_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  // Intercepta qualquer tentativa de fechar — mostra aviso primeiro
  const requestClose = useCallback(() => {
    setExitWarning(true);
  }, []);

  // Fecha de verdade após confirmar saída
  const confirmClose = useCallback(() => {
    setExitWarning(false);
    setIsOpen(false);
  }, []);

  const stayAndBuy = useCallback(() => {
    setExitWarning(false);
  }, []);

  useEffect(() => {
    const open = () => {
      setIsOpen(true);
      setExitWarning(false);
      setCouponRevealed(false);
      setTimeout(() => setCouponRevealed(true), 800);
    };
    window.addEventListener('naturale:checkout', open);
    return () => window.removeEventListener('naturale:checkout', open);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        exitWarning ? confirmClose() : requestClose();
      }
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, exitWarning, requestClose, confirmClose]);

  const handleCheckout = useCallback(() => {
    // AddToCart dispara aqui — intenção real de compra confirmada
    trackGoToCheckout();
    // Passa UTMs do tráfego Bidcap/Facebook para o Hotmart
    window.open(getHotmartUrl(HOTMART_URL), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80"
      style={{ backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) requestClose(); }}
    >
      <div className="modal-card bg-white w-full max-w-md shadow-[8px_8px_0_#111111] border-2 border-[#111111] relative overflow-hidden max-h-[95vh] overflow-y-auto sm:max-h-none">

        {/* URGENCY BAR */}
        <div className="bg-[#B91C1C] text-white py-2.5 px-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Clock size={14} className="animate-pulse shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider">OFERTA EXPIRA EN:</span>
            <span className="font-mono font-black text-sm text-[#FBBF24]">{timer}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold opacity-80">
            <Users size={13} />
            <span>23 accesos</span>
          </div>
        </div>

        {/* Close — vai para requestClose, não fecha direto */}
        <button
          onClick={requestClose}
          aria-label="Cerrar"
          className="btn-press absolute top-12 right-4 w-8 h-8 flex items-center justify-center bg-[#F7F5F0] border border-[#D1D5DB] text-[#525252] hover:bg-[#111111] hover:text-white transition-colors z-10"
        >
          <X size={15} />
        </button>

        {/* ── EXIT-INTENT OVERLAY ── */}
        {exitWarning && (
          <div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
            style={{ backdropFilter: 'blur(3px)' }}
          >
            <div className="bg-white border-2 border-[#111111] shadow-[6px_6px_0_#111111] w-full max-w-xs animate-[modal-in_250ms_cubic-bezier(0.25,1,0.5,1)_both]">

              {/* Red header */}
              <div className="bg-[#B91C1C] px-4 py-3 text-center">
                <p className="text-white font-black text-sm uppercase tracking-widest">
                  ⚠ ESPERA UN MOMENTO
                </p>
              </div>

              <div className="px-5 py-6 text-center">
                <p className="font-editorial text-xl font-bold text-[#111111] leading-tight mb-2">
                  ¿Vas a dejar ir el{' '}
                  <span className="text-[#B91C1C]">85% OFF?</span>
                </p>
                <p className="text-sm text-[#525252] font-light leading-relaxed mb-1">
                  Si cerrás esta ventana, el cupón{' '}
                  <strong className="font-black text-[#111111] font-mono">{COUPON_CODE}</strong>{' '}
                  y el precio de{' '}
                  <strong className="text-[#16A34A]">$17.99</strong> pueden no estar disponibles la próxima vez.
                </p>
                <p className="text-xs text-[#B91C1C] font-bold uppercase tracking-wider mb-5">
                  El hígado no descansa — y el tiempo tampoco.
                </p>

                {/* Stay — primary action */}
                <button
                  onClick={stayAndBuy}
                  className="btn-press w-full bg-[#16A34A] text-white py-3.5 font-black text-sm uppercase tracking-wide border-2 border-[#166534] shadow-[3px_3px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100 mb-3"
                >
                  SÍ, QUIERO MI DESCUENTO
                </button>

                {/* Leave — secondary, visually subordinate */}
                <button
                  onClick={confirmClose}
                  className="btn-press w-full text-[#9CA3AF] text-xs underline underline-offset-2 hover:text-[#525252] transition-colors py-1"
                >
                  No, prefiero pagar precio completo
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6">

          {/* MEDIA CREDIBILITY */}
          <div className="mb-5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#525252] text-center mb-2.5">
              LA ESTEATOSIS HEPÁTICA FUE TEMA EN LOS PRINCIPALES MEDIOS:
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {MEDIA_LOGOS.map((m) => (
                <span
                  key={m.name}
                  className="px-2.5 py-1 text-xs border"
                  style={{
                    color: m.color, background: m.bg, fontWeight: m.weight,
                    borderColor: m.color + '40', fontFamily: 'Plus Jakarta Sans, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {m.name}
                </span>
              ))}
            </div>
            <p className="text-[9px] text-[#525252]/60 text-center mt-1.5 italic">
              * O problema é real. A solução também.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t-2 border-[#111111] mb-5" />

          {/* COUPON REVEAL */}
          <div
            className={`mb-5 transition-all duration-700 ease-out ${
              couponRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
            }`}
          >
            {/* Header row: label + toggle */}
            <button
              onClick={() => setCouponOpen((o) => !o)}
              className="btn-press w-full flex items-center justify-between gap-2 mb-1 group"
              aria-expanded={couponOpen}
              aria-controls="coupon-body"
            >
              <div className="flex items-center gap-1.5">
                <Tag size={13} className="text-[#16A34A]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16A34A]">
                  CUPÓN DE DESCUENTO ACTIVADO
                </span>
              </div>
              <span className="text-[#525252] group-hover:text-[#111111] transition-colors">
                {couponOpen
                  ? <ChevronUp  size={15} />
                  : <ChevronDown size={15} />}
              </span>
            </button>

            {/* Collapsible body */}
            <div
              id="coupon-body"
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: couponOpen ? '160px' : '0px', opacity: couponOpen ? 1 : 0 }}
            >
              <div className="border-2 border-dashed border-[#16A34A] bg-[#F0FDF4] p-4 relative overflow-hidden">
                {/* ticket notches */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-[#16A34A] rounded-full" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-[#16A34A] rounded-full" />

                <div className="flex items-center gap-3 px-3">
                  {/* code + copy */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono font-black text-lg text-[#111111] bg-white border border-[#16A34A] px-3 py-1 tracking-[0.22em] leading-none select-all">
                        {COUPON_CODE}
                      </span>
                      <CheckCircle2 size={15} className="text-[#16A34A] shrink-0" />
                    </div>
                    <p className="text-[11px] text-[#166534] font-bold leading-tight">
                      −85% aplicado automáticamente al precio final
                    </p>
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={handleCopy}
                    aria-label="Copiar código del cupón"
                    className={`btn-press shrink-0 flex flex-col items-center gap-1 px-3 py-2 border-2 font-black text-[10px] uppercase tracking-wider transition-all duration-200 ${
                      copied
                        ? 'bg-[#16A34A] border-[#166534] text-white shadow-none translate-x-[1px] translate-y-[1px]'
                        : 'bg-white border-[#111111] text-[#111111] shadow-[2px_2px_0_#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none'
                    }`}
                  >
                    {copied
                      ? <CheckCircle2 size={16} />
                      : <Copy size={16} />}
                    <span>{copied ? 'COPIADO' : 'COPIAR'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PRICE BREAKDOWN */}
          <div className="bg-[#F7F5F0] border-2 border-[#111111] p-4 mb-5 shadow-[3px_3px_0_#111111]">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#525252] mb-3 text-center">
              RESUMEN DE TU COMPRA
            </p>
            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#525252] font-light">Sistema NATURALE + 4 Bonos</span>
                <span className="text-[#525252] line-through decoration-[#B91C1C] decoration-2">${FULL_PRICE}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#16A34A] font-bold flex items-center gap-1">
                  <Tag size={12} /> Cupón {COUPON_CODE}
                </span>
                <span className="text-[#16A34A] font-bold">−${DISCOUNT_AMT}</span>
              </div>
            </div>
            <div className="border-t-2 border-[#111111] pt-3 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-[#111111]">TOTAL HOY</p>
                <p className="text-[10px] text-[#16A34A] font-bold">Pago único · acceso de por vida</p>
              </div>
              <div className="text-right font-editorial">
                <span className="text-2xl font-bold text-[#111111]">$</span>
                <span className="text-4xl font-bold text-[#111111]">
                  {String(FINAL_PRICE.toFixed(2)).split('.')[0]}
                </span>
                <span className="text-2xl font-bold text-[#16A34A]">
                  .{String(FINAL_PRICE.toFixed(2)).split('.')[1]}
                </span>
              </div>
            </div>
          </div>

          {/* SOCIAL PROOF micro */}
          <div className="flex items-center gap-2 mb-4 bg-[#F7F5F0] border border-[#D1D5DB] px-3 py-2">
            <div className="flex -space-x-1.5">
              {[1, 5, 9].map((n) => (
                <img key={n} src={`https://i.pravatar.cc/40?img=${n}`} alt="" loading="lazy"
                     className="w-5 h-5 rounded-full ring-1 ring-white object-cover" />
              ))}
            </div>
            <p className="text-[10px] text-[#333333] font-light">
              <strong className="font-bold text-[#111111]">12.678 personas</strong> ya accedieron al protocolo hoy
            </p>
          </div>

          {/* CTA BUTTON */}
          <button
            onClick={handleCheckout}
            className="btn-press btn-shine w-full bg-[#16A34A] text-white py-4 sm:py-5 font-black text-base sm:text-lg uppercase tracking-wide flex items-center justify-center gap-2 border-2 border-[#166534] shadow-[5px_5px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#166534] transition-all duration-100 brutal-pulse mb-3"
          >
            <Lock size={16} strokeWidth={2.5} />
            CONFIRMAR MI ACCESO CON DESCUENTO
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>

          {/* Risk nudge */}
          <p className="text-[10px] text-[#B91C1C] font-bold text-center mb-4 uppercase tracking-wider">
            ⚠ El precio puede volver a ${FULL_PRICE} al cerrar esta ventana
          </p>

          {/* SECURITY BADGES */}
          <div className="border-t border-[#D1D5DB] pt-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ShieldCheck size={14} className="text-[#16A34A] shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-wider text-[#525252]">COMPRA 100% SEGURA</span>
              <Lock size={11} className="text-[#525252]" />
            </div>
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {[
                'Plataforma Hotmart · certificada',
                'SSL 256-bit en toda transacción',
                'Garantía incondicional 30 días',
                'Acceso inmediato tras el pago',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-1.5 text-[10px] text-[#525252]">
                  <CheckCircle2 size={11} className="text-[#16A34A] shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-center text-[9px] text-[#525252]/50 tracking-wide">
              Procesado con seguridad por Hotmart · SSL 256-bit
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
