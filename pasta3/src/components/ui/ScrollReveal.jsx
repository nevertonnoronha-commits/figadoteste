import { useState, useEffect, useRef } from 'react';

// Easing unificado com o resto da página — sem overshoot
const EASING = 'cubic-bezier(0.25, 1, 0.5, 1)';

const hiddenTransform = {
  up:    'translateY(28px)',
  left:  'translateX(-28px)',
  right: 'translateX(28px)',
};

const buildStyle = (isVisible, direction, delay) => ({
  opacity:         isVisible ? 1 : 0,
  transform:       isVisible ? 'none' : (hiddenTransform[direction] ?? hiddenTransform.up),
  transition:      `opacity 900ms ${EASING}, transform 900ms ${EASING}`,
  transitionDelay: `${delay}ms`,
  willChange:      'opacity, transform',
});

export const ScrollReveal = ({
  children,
  delay     = 0,
  threshold = 0.2,
  className = '',
  direction = 'up',
  critical  = false,
}) => {
  const [isVisible, setIsVisible] = useState(critical);
  const ref = useRef();

  useEffect(() => {
    if (critical) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Anima apenas uma vez — não reseta ao rolar para cima
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        // Dispara quando o elemento está 80px dentro da viewport
        // — evita animações prematuras antes do usuário "chegar" no conteúdo
        rootMargin: '0px 0px -80px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, critical]);

  return (
    <div
      ref={critical ? null : ref}
      style={critical ? undefined : buildStyle(isVisible, direction, delay)}
      className={`${className} ${isVisible ? 'is-revealed' : ''}`.trim()}
    >
      {children}
    </div>
  );
};
