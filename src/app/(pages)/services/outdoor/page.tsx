import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Outdoor Construction: Engineering Functional Exterior Spaces
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/outdoor.jpg" alt="Contemporary outdoor living space" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Composite deck with integrated lighting system</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In contemporary construction, outdoor spaces have evolved from basic areas to functional extensions of interior living. From traditional
            patios to sophisticated landscaping systems, modern outdoor design combines innovative materials with architectural planning to create
            durable and visually appealing environments.
          </p>

          <p>
            The fundamentals of quality outdoor construction include efficient drainage systems, weather-resistant materials, and seamless transitions
            between spaces. These elements ensure durability and low maintenance across diverse climates.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Exterior Space Engineering</h2>

        <p>
          Modern outdoor construction requires careful planning of slopes, advanced waterproofing systems, and selection of non-porous materials.
          Current techniques include floating slabs with expansion joints, automated irrigation systems, and bioclimatic structures for thermal
          regulation.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A well-designed outdoor space is a perfect transition between architecture and nature, where every material must withstand the
          elements without compromising aesthetics.&quot;
          <cite className="block text-right font-medium mt-2">— Carlos Mijares, Landscape Architect</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Outdoor Solutions</h2>

        <p>
          The industry now offers permeable pavers, thermally-modified wood, and lightweight solar-control roofing. Recent advancements include
          photocatalytic surfaces that reduce pollutants and modular terrace systems with integrated utilities.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Key Outdoor Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Root-resistant membranes for green areas</li>
          <li>Structural aluminum framing</li>
          <li>Low-voltage LED lighting</li>
          <li>Modernized French drain systems</li>
        </ul>

        <p>
          Future trends include smart surfaces with moisture sensors, solar-integrated outdoor furniture, and efficient exterior climate control
          systems. This blog explores how outdoor automation and self-healing materials are transforming exterior spaces into technologically advanced
          environments.
        </p>
      </section>
    </article>
  );
}
