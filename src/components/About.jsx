const stats = [
  { value: "9", label: "Years Studio" },
  { value: "48", label: "Brands Shipped" },
  { value: "12", label: "Design Awards" },
  { value: "3", label: "Continents" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="mb-2 font-mono text-[10px] uppercase text-primary">
            03 / About
          </div>
        </div>
        <div className="lg:col-span-9">
          <p className="max-w-5xl font-display text-3xl font-semibold leading-tight lg:text-5xl">
            For nine years I've helped founders and cultural institutions find a voice that's{" "}
            <span className="text-primary">specific</span> rather than safe — pairing rigorous
            grids with a sense of play.
          </p>
          <div className="mt-16 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background py-6 md:px-5">
                <div className="font-display text-4xl font-extrabold text-primary">{stat.value}</div>
                <div className="mt-2 font-mono text-[9px] uppercase text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
