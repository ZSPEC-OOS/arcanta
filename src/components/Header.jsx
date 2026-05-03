import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';
import MobileMenu from './MobileMenu';

const navItems = ['Home', 'About', 'Apps', 'Process', 'Careers', 'Contact'];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="section-shell relative z-20 pt-6 md:pt-8">
        <div className="glass-card flex items-center justify-between rounded-2xl px-5 py-4 md:px-7">

          {/* Logo */}
          <a href="#home" className="inline-flex items-center shrink-0">
            <ImageWithFallback
              src="/assets/arcanta-emblem-horizontal.png"
              alt="Arcanta wordmark"
              fallbackLabel="ARCANTA"
              className="w-auto max-w-[200px] object-contain"
              style={{ height: '32px', mixBlendMode: 'screen' }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-x-6" aria-label="Main">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/login')}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Log In
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-[5px] items-end justify-center w-10 h-10 rounded-xl border border-white/15 px-2.5 transition hover:border-white/30 active:scale-95"
          >
            <span className="block h-px w-5 bg-white/75 rounded-full" />
            <span className="block h-px w-3.5 bg-white/60 rounded-full" />
            <span className="block h-px w-5 bg-white/75 rounded-full" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
