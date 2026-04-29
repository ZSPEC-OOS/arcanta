import ImageWithFallback from './ImageWithFallback';

const footerLinks = [
  {
    heading: 'Company',
    links: ['About Us', 'Our Process', 'Careers', 'Contact'],
  },
  {
    heading: 'Apps',
    links: ['All Apps', 'WolfKrow', 'BluSwan'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
  {
    heading: 'Follow Us',
    links: ['LinkedIn', 'X', 'Instagram'],
  },
];

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 py-10 sm:py-12"
      style={{ paddingBottom: 'max(40px, env(safe-area-inset-bottom))' }}
    >
      <div className="section-shell">
        {/* Brand block */}
        <div className="mb-8 sm:mb-10">
          <ImageWithFallback
            src="/assets/arcanta-emblem-horizontal.png"
            alt="Arcanta wordmark"
            fallbackLabel="ARCANTA"
            className="h-8 w-auto max-w-[160px] object-contain"
          />
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
            Building intelligent applications for a better tomorrow.
          </p>
        </div>

        {/* Links grid — 2 cols on mobile, 4 on sm+ */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/8 pt-8 sm:grid-cols-4">
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">{heading}</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-white/65">
                {links.map((link) => (
                  <li key={link} className="hover:text-white/90 transition cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-10 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Arcanta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
