import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Painting Techniques: Engineering Durable Surface Finishes in Construction
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/painting.jpg" alt="Industrial painting application" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">High-build coating application using airless spray system</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In contemporary construction, painting has evolved from basic surface coverage to engineered protective systems. From traditional brush
            application to advanced electrostatic spraying, modern painting techniques combine material science with precision application for both
            aesthetic and functional performance.
          </p>

          <p>
            The foundation of professional painting lies in proper surface preparation, coating compatibility, and environmental condition control.
            These critical factors ensure adhesion longevity and consistent finish across various substrates and climates.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Surface Engineering Principles</h2>

        <p>
          Modern painting systems require understanding of DFT (Dry Film Thickness) measurements and cure time calculations. Advanced techniques
          include multi-coat applications, zinc-rich primers for corrosion control, and intumescent coatings for fire protection.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;Quality painting is 80% preparation and 20% application - every micron of surface profile matters in achieving optimal coating
          performance.&quot;
          <cite className="block text-right font-medium mt-2">— Karen Mitchell, Coating Inspector</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Coating Technologies</h2>

        <p>
          The industry now offers self-cleaning hydrophobic paints, anti-graffiti coatings, and thermal-reflective finishes. Recent advancements
          include photocatalytic air-purifying paints and smart coatings that change color based on temperature or light exposure.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Painting Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Epoxy/polyurethane hybrid systems</li>
          <li>Surface profile test gauges</li>
          <li>Moisture-cured urethane topcoats</li>
          <li>Adhesion promoter additives</li>
        </ul>

        <p>
          Future trends include nano-ceramic coatings for extreme durability, self-healing elastomeric finishes, and IoT-enabled application equipment
          with real-time thickness monitoring. This blog explores how advanced coating technologies are revolutionizing protective surface treatments
          in construction.
        </p>
      </section>
    </article>
  );
}
