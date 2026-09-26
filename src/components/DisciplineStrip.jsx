const disciplines = [
  "Brand Identity",
  "Editorial Design",
  "Packaging",
  "Type Systems",
  "Art Direction",
  "Motion",
];

export function DisciplineStrip() {
  return (
    <div className="overflow-hidden border-b border-border bg-surface py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-[10px] uppercase text-muted-foreground">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex gap-10" aria-hidden={pass === 1}>
            {disciplines.map((item) => (
              <span key={item} className="flex gap-10">
                <span>{item}</span>
                 <span className="text-primary">+</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
