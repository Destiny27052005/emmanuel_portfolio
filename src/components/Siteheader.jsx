const links = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
    return (
        <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-7 lg:px-12 lg:py-9">
            <a href="#top" className="flex items-center gap-3" aria-label="Emmanuel, home">
                <span className="h-6 w-4 skew-x-[-14deg] bg-primary" aria-hidden="true" />
                <span className="font-display text-lg font-extrabold uppercase">Emmanuel</span>
            </a>
            <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase text-muted-foreground md:flex">
                {links.map((link) => (
                    <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                        {link.label}
                    </a>
                ))}
            </nav>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
                <span className="hidden sm:inline">Ibadan · Nigeria</span>
                <span className="flex flex-col items-end gap-1.5 md:hidden" aria-hidden="true">
                    <span className="h-px w-6 bg-foreground" />
                    <span className="h-px w-4 bg-primary" />
                </span>
            </div>
        </header>
    );
}
