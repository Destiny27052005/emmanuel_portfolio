import kova from "../assets/work-kova.jpg";
import meridian from "../assets/work-meridian.jpg";
import hallow from "../assets/work-hallow.jpg";
import fathom from "../assets/work-fathom.jpg";

const projects = [
  {
    index: "01",
    title: "Kova Coffee",
    meta: "Identity · Packaging — 2024",
    image: kova,
    alt: "Coffee brand identity on kraft packaging with deep blue print",
  },
  {
    index: "02",
    title: "Meridian Press",
    meta: "Editorial · Type — 2023",
    image: meridian,
    alt: "Architectural monograph cover with a strict grid layout",
  },
  {
    index: "03",
    title: "Hallow Studio",
    meta: "Brand System · Digital — 2023",
    image: hallow,
    alt: "Wellness brand collateral in soft geometric shapes and ink blue",
  },
  {
    index: "04",
    title: "Fathom Records",
    meta: "Posters · Art Direction — 2022",
    image: fathom,
    alt: "Record label poster series with experimental lettering on a gallery wall",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <div className="mb-3 font-mono text-[10px] uppercase text-primary">
            01 / Selected Work
          </div>
          <h2 className="font-display text-4xl font-bold lg:text-6xl">Built to be remembered.</h2>
        </div>
        <div className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">
          2021 — 2024
        </div>
      </div>

      <div className="space-y-16 lg:space-y-24">
        {projects.map((project, position) => (
          <article key={project.title} className="group grid items-end gap-6 border-t border-border pt-6 lg:grid-cols-12">
            <div className={position % 2 ? "overflow-hidden lg:order-2 lg:col-span-8" : "overflow-hidden lg:col-span-8"}>
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-4/3 w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <div className={position % 2 ? "lg:order-1 lg:col-span-4" : "lg:col-span-4 lg:pl-5"}>
              <div className="mb-4 font-mono text-[10px] text-primary">PROJECT / {project.index}</div>
              <h3 className="font-display text-3xl font-bold transition-colors group-hover:text-primary lg:text-4xl">
                  {project.title}
              </h3>
              <div className="mt-3 font-mono text-[10px] uppercase text-muted-foreground">{project.meta}</div>
              <div className="mt-8 h-px w-12 bg-primary transition-all duration-500 group-hover:w-24" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
