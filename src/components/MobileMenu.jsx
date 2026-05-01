import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const navItems = ['Home', 'About', 'Apps', 'Process', 'Careers', 'Contact'];

function MobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function handleLogin() {
    onClose();
    navigate('/login');
  }

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-arcanta-dark/85 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-[300px] bg-arcanta-card border-l border-white/10 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <ImageWithFallback
            src="/assets/arcanta-emblem-horizontal.png"
            alt="Arcanta"
            fallbackLabel="ARCANTA"
            className="h-7 w-auto max-w-[150px] object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1 px-4 py-6" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="flex items-center px-4 py-3.5 text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 py-6 border-t border-white/8 flex flex-col gap-3" style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom))' }}>
          <button
            className="w-full rounded-full border border-white/20 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-white active:scale-95"
            onClick={handleLogin}
          >
            Log In
          </button>
          <button
            className="w-full rounded-full border border-arcanta-gold/65 py-3.5 text-sm font-semibold text-arcanta-gold transition hover:bg-arcanta-gold/10 active:scale-95"
            onClick={onClose}
          >
            Let&apos;s Build
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
