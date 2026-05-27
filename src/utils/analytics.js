const PRODUCT = {
  content_name: 'Naturale - Protocolo Clínico para el Hígado Graso',
  content_type: 'product',
  content_ids: ['naturale-protocolo-higado'],
  value: 17.99,
  currency: 'USD',
};

// ── Meta Pixel helper ─────────────────────────────────────────────
const fire = (event, params) => {
  try {
    if (typeof window.fbq !== 'function') return;
    window.fbq('track', event, params);
  } catch (e) {
    console.warn('[Meta Pixel] blocked or failed:', e);
  }
};

// ── Utmify helper — notifica o pixel Utmify de eventos ───────────
const fireUtmify = (event, params = {}) => {
  try {
    // Utmify expõe window.pixelManager após carregar
    if (window.pixelManager && typeof window.pixelManager.track === 'function') {
      window.pixelManager.track(event, params);
    }
  } catch (e) { /* silencioso */ }
};

// ── UTM passthrough — lê UTMs da URL atual e do Utmify storage ──
const UTM_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign',
  'utm_content', 'utm_term', 'fbclid', 'gclid',
];

export const getHotmartUrl = (baseUrl) => {
  try {
    const pageParams = new URLSearchParams(window.location.search);
    const append = new URLSearchParams();

    // 1. Parâmetros da URL atual (Bidcap/Facebook trafega aqui)
    UTM_KEYS.forEach((k) => {
      const v = pageParams.get(k);
      if (v) append.set(k, v);
    });

    // 2. Fallback: Utmify armazena UTMs em sessionStorage
    try {
      const stored = JSON.parse(sessionStorage.getItem('utmify_utms') || '{}');
      Object.entries(stored).forEach(([k, v]) => {
        if (v && !append.has(k)) append.set(k, String(v));
      });
    } catch { /* ignorar se storage indisponível */ }

    // 3. fbclid também pode estar em cookie (_fbc)
    try {
      const fbc = document.cookie.split('; ').find(r => r.startsWith('_fbc='));
      if (fbc && !append.has('fbclid')) append.set('_fbc', fbc.split('=')[1]);
    } catch { /* ignorar */ }

    const qs = append.toString();
    return qs ? `${baseUrl}&${qs}` : baseUrl;
  } catch {
    return baseUrl;
  }
};

// ── Eventos do funil ─────────────────────────────────────────────

// Dispara ao carregar a página
export const trackViewContent = () => {
  fire('ViewContent', PRODUCT);
  fireUtmify('ViewContent', PRODUCT);
};

// Dispara quando usuário clica em qualquer botão CTA (abre o modal)
export const openCheckoutModal = () => {
  fire('InitiateCheckout', { ...PRODUCT, num_items: 1 });
  fireUtmify('InitiateCheckout', { ...PRODUCT });
  window.dispatchEvent(new CustomEvent('naturale:checkout'));
};

// Dispara quando usuário CONFIRMA e vai ao Hotmart
// — AddToCart aqui = intenção real de compra
export const trackGoToCheckout = () => {
  fire('AddToCart', { ...PRODUCT, num_items: 1 });
  fireUtmify('AddToCart', { ...PRODUCT });
};

/*
  ═══════════════════════════════════════════════════════════════
  ⚠ EVENTO PURCHASE — Configuração necessária no Hotmart
  ═══════════════════════════════════════════════════════════════
  O evento Purchase deve ser disparado na página de obrigado
  (after-sale) do Hotmart. Há duas formas:

  OPÇÃO 1 (Recomendada — nenhum código adicional aqui):
    1. Acesse Hotmart → Ferramentas → Pixel
    2. Adicione o ID do pixel Meta: 2963254724006246
    3. Hotmart dispara Purchase automaticamente após pagamento

  OPÇÃO 2 (Página de obrigado própria):
    Configure uma URL de obrigado que contenha:
      fbq('track', 'Purchase', {
        value: 17.99,
        currency: 'USD',
        content_ids: ['naturale-protocolo-higado'],
        content_type: 'product'
      });
  ═══════════════════════════════════════════════════════════════
*/
