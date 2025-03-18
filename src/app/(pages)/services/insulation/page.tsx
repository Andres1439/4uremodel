import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Insulation Techniques: Engineering Energy-Efficient Building Envelopes
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/insulation.jpg"
            alt="Advanced insulation installation"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Spray foam insulation application in wall cavities</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In contemporary construction, insulation systems have transformed from basic thermal barriers to sophisticated building envelope
            solutions. From traditional fiberglass batts to aerogel-infused materials, modern insulation technologies combine thermal performance with
            air sealing capabilities for optimal energy conservation.
          </p>

          <p>
            The fundamentals of effective insulation installation rely on continuous thermal breaks, proper vapor barrier placement, and airtight
            sealing. These critical factors prevent thermal bridging while maintaining indoor air quality and moisture control.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Building Envelope Dynamics</h2>

        <p>
          Modern insulation engineering requires understanding of R-value calculations and air permeability rates. Advanced techniques include
          blown-in cellulose with fire retardants, structural insulated panels (SIPs), and hybrid systems combining rigid foam with reflective radiant
          barriers.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;Proper insulation isn&apos;t just about thickness - it&apos;s about creating a continuous thermal boundary that adapts to a
          building&apos;s breathing points.&quot;
          <cite className="block text-right font-medium mt-2">— Dr. Allison Green, Building Science Expert</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Thermal Solutions</h2>

        <p>
          The industry now offers vacuum-insulated panels (VIPs), phase-change materials (PCMs), and smart insulation with embedded moisture sensors.
          Recent advancements include aerogel blankets for space-constrained areas and bio-based foams made from agricultural byproducts.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Insulation Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Closed-cell spray polyurethane foam</li>
          <li>Radiant barrier sheathing</li>
          <li>Vapor-permeable housewrap</li>
          <li>Thermal break gaskets</li>
        </ul>

        <p>
          Future trends include dynamic insulation adapting to temperature changes, photovoltaic-integrated insulation panels, and self-healing
          sealants. This blog explores how nanotechnology and smart materials are revolutionizing building envelope performance for net-zero energy
          structures.
        </p>
      </section>
    </article>
  );
}
