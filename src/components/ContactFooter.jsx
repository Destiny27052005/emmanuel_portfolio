export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary px-6 pt-20 text-primary-foreground lg:px-12 lg:pt-28">
      <div>
        <div className="mb-5 font-mono text-[10px] uppercase text-primary-foreground/70">
          04 / Contact
        </div>
        <h2 className="max-w-6xl font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
          Have an idea worth making impossible to ignore?
        </h2>
        <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <a
            href="mailto:hello@maravoss.studio"
            className="font-display text-xl font-bold underline decoration-2 underline-offset-8 lg:text-2xl"
          >
            hello@maravoss.studio
          </a>
          <div className="font-mono text-[10px] uppercase text-primary-foreground/70">
            <span>Instagram</span> · <span>Behance</span> · <span>LinkedIn</span>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-primary-foreground/30 py-6 font-mono text-[9px] uppercase text-primary-foreground/70 sm:flex-row">
          <span>© 2026 Mara Voss Studio</span>
          <span>Built in-house · Berlin</span>
        </div>
      </div>
    </footer>
  );
}
