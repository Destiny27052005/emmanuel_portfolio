import portrait from "../assets/portrait.jpg";

export function Hero() {
    return (
        <section id="top" className="relative flex min-h-[92vh] flex-col justify-end border-b border-border pt-28 lg:min-h-screen">
            <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
                <img
                    src={portrait}
                    alt="Portrait of graphic designer Mara Voss in her studio"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover object-[50%_35%] grayscale"
                />
                <div className="absolute inset-0 bg-hero-shade" aria-hidden="true" />
            </div>

            <div className="relative z-10 px-6 pb-14 lg:px-12 lg:pb-20">
                <div className="max-w-3xl">
                    <p className="mb-5 font-mono text-[10px] uppercase text-primary">Independent visual designer</p>
                    <h1 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
                        I shape brands
                        <br />
                        <span className="text-primary">with character.</span>
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
                        Mara Voss creates identity systems, editorial worlds, and digital experiences for
                        ambitious ideas.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a href="#work" className="inline-flex min-h-12 items-center gap-3 bg-primary px-6 font-display text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-strong">
                            View selected work <span aria-hidden="true">→</span>
                        </a>
                        <a href="#contact" className="inline-flex min-h-12 items-center border border-foreground/30 px-6 font-display text-sm font-bold transition-colors hover:border-primary hover:text-primary">
                            Start a project
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 border-t border-border bg-background/80 px-6 py-5 backdrop-blur-sm lg:grid-cols-3 lg:px-12">
                <div>
                    <div className="font-mono text-[9px] uppercase text-muted-foreground">Email</div>
                    <a href="mailto:hello@maravoss.studio" className="mt-1 block text-xs hover:text-primary">hello@maravoss.studio</a>
                </div>
                <div>
                    <div className="font-mono text-[9px] uppercase text-muted-foreground">Location</div>
                    <div className="mt-1 text-xs">Ibadan · Worldwide</div>
                </div>
                <div className="hidden justify-self-end text-right lg:block">
                    <div className="font-mono text-[9px] uppercase text-muted-foreground">Availability</div>
                    <div className="mt-1 flex items-center gap-2 text-xs"><span className="h-2 w-2 bg-primary" /> Open for Q4</div>
                </div>
            </div>
        </section>
    );
}
