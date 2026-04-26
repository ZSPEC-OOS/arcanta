import ImageWithFallback from './ImageWithFallback';

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.4fr_2fr]">
        <div>
          <ImageWithFallback
            src="/assets/arcanta-emblem-horizontal.png"
            alt="Arcanta wordmark"
            fallbackLabel="ARCANTA"
            className="h-8 w-auto max-w-[180px] object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Building intelligent applications for a better tomorrow.
          </p>
          <p className="mt-6 text-xs text-white/45">© {new Date().getFullYear()} Arcanta. All rights reserved.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Apps</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>All Apps</li>
              <li>WolfKrow</li>
              <li>BluSwan</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>LinkedIn</li>
              <li>X</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
