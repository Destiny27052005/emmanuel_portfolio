const services = [
  {
    index: "01",
    title: "Brand Identity",
    description: "Naming, logo, and a full visual language built to scale.",
  },
  {
    index: "02",
    title: "Editorial & Print",
    description: "Books, magazines, and reports with a strong typographic spine.",
  },
  {
    index: "03",
    title: "Digital & Motion",
    description: "Interfaces, web systems, and motion that carry the brand forward.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface px-6 py-20 lg:px-12 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mb-3 font-mono text-[10px] uppercase text-primary">
            02 / Services
          </div>
          <h2 className="font-display text-4xl font-bold lg:text-6xl">From first mark<br />to full world.</h2>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-3 lg:col-span-8">
          {services.map((service) => (
            <div key={service.index} className="group min-h-64 bg-background p-7 transition-colors hover:bg-surface-raised">
              <span className="font-mono text-[10px] text-primary">{service.index}</span>
              <div className="my-10 flex h-10 w-10 items-center justify-center border border-primary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground" aria-hidden="true">✦</div>
              <h3 className="font-display text-xl font-bold lg:text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
