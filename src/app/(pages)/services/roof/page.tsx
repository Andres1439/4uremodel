import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Roofing Systems: Engineering Weathertight Building Envelopes
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/roof.jpg" alt="Commercial roofing installation" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">TPO membrane installation with heat-welded seams</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In contemporary construction, roofing has evolved from basic weather protection to engineered environmental systems. From traditional
            asphalt shingles to advanced cool roof membranes, modern roofing integrates material science with precision installation for optimal
            thermal performance and longevity.
          </p>

          <p>
            The fundamentals of professional roofing rely on proper slope calculations, continuous insulation, and water-shedding details. These
            critical elements prevent thermal bridging while managing hydrostatic pressure and structural movement.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Roof System Engineering</h2>

        <p>
          Modern roofing requires understanding of U-value calculations and wind uplift resistance. Advanced techniques include adhered EPDM systems,
          standing seam metal roof integration with solar panels, and fluid-applied waterproofing for complex architectural features.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A roof&apos;s true test comes not during installation, but decades later - every fastener pattern and seam detail must account for
          cumulative thermal cycling.&quot;
          <cite className="block text-right font-medium mt-2">— Sarah Thompson, Roof Systems Engineer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Roofing Solutions</h2>

        <p>
          The industry now offers photovoltaic shingles, vegetative roof assemblies, and drone-assisted infrared moisture mapping. Recent advancements
          include self-adhering ice/water barriers and modular roof panels with integrated insulation and vapor control.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Roofing Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>High-density polyiso insulation (R-30+)</li>
          <li>Peel-and-stick underlayment systems</li>
          <li>Stainless steel fasteners with neoprene washers</li>
          <li>Counterflashing integration with wall systems</li>
        </ul>

        <p>
          Future trends include phase-change insulation materials, self-repairing membrane compounds, and AI-powered leak detection systems. This blog
          explores how smart roofing technologies with embedded sensors are transforming building envelope maintenance and energy performance.
        </p>
      </section>
    </article>
  );
}
