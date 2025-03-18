import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Tile & Marble Systems: Engineering Precision in Architectural Surfaces
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/tile.jpg"
            alt="Precision marble and tile installation"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">
            Laser-guided large format tile installation with uncoupling membrane
          </figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In contemporary construction, tile and marble installations have evolved into engineered surface systems. From ceramic mosaics to
            book-matched marble slabs, modern stonework combines material science with digital precision to achieve seamless architectural finishes.
          </p>

          <p>
            The fundamentals of professional tile/marble installation rely on substrate flatness (≤3mm/2m), mortar selection based on material
            porosity, and lippage control. These critical factors ensure long-term durability while meeting stringent aesthetic requirements.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Surface System Engineering</h2>

        <p>
          Modern stone installations require understanding of substrate deflection limits (L/720 for stone) and thermal movement accommodation.
          Advanced techniques include epoxy-backed marble stabilization, crack isolation membranes, and robotic waterjet cutting for complex patterns.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;Precision in stone work is measured in tenths of millimeters - every cut, joint, and plane must account for material behavior under
          load and temperature.&quot;
          <cite className="block text-right font-medium mt-2">— Elena Marchetti, Materials Engineer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Stone Solutions</h2>

        <p>
          The industry now offers nano-impregnated marble sealers, ultra-thin porcelain slabs (3-6mm), and digital templating systems with 0.5mm
          accuracy. Recent advancements include conductive tile heating systems and anti-microbial grout formulations.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Installation Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Uncoupling membranes (ASTM D6272)</li>
          <li>Large-format tile leveling systems</li>
          <li>Marble reinforcement mesh (9oz/sq.yd)</li>
          <li>Color-matched epoxy grout systems</li>
        </ul>

        <p>
          Future trends include self-cleaning photocatalytic tiles, smart surfaces with embedded moisture sensors, and recycled glass terrazzo
          systems. This blog explores how digital fabrication and advanced material engineering are redefining architectural stone applications.
        </p>
      </section>
    </article>
  );
}
