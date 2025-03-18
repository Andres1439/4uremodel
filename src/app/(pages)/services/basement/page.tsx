import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Basement Construction: Techniques for Functional Below-Grade Spaces
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/basement.jpg"
            alt="Basement waterproofing and framing"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Advanced basement construction with waterproofing membrane</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In modern home construction, basement development has evolved from simple storage areas to fully functional living spaces. From
            traditional concrete block foundations to advanced insulated concrete forms (ICFs), today&apos;s basement construction combines structural
            engineering with moisture control technology.
          </p>

          <p>
            The critical elements of safe basement construction remain anchored in proper waterproofing, structural load calculations, and ventilation
            design. These fundamentals prevent moisture intrusion while creating habitable spaces that add value and functionality to residential
            properties.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Below-Grade Engineering Challenges</h2>

        <p>
          Contemporary basement construction requires meticulous attention to hydrostatic pressure management and soil conditions. Modern techniques
          include exterior drainage systems, vapor barrier installation, and frost-protected shallow foundations to ensure long-term durability
          against water infiltration.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A basement&apos;s strength starts six inches beyond the excavation - proper waterproofing and drainage make the difference between a
          liability and an asset.&quot;
          <cite className="block text-right font-medium mt-2">— Bill Loden, Foundation Engineering Expert</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Below-Grade Solutions</h2>

        <p>
          The industry now utilizes smart moisture sensors, epoxy-injected crack repairs, and energy-efficient basement encapsulation systems.
          Advances in egress window technology and radon mitigation systems have transformed basements into safe, code-compliant living areas.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Basement Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Perimeter drainage systems</li>
          <li>Interior French drain with sump pump</li>
          <li>Closed-cell spray foam insulation</li>
          <li>Structural beam pocket details</li>
        </ul>

        <p>
          The future of basement construction includes self-monitoring foundation systems, heated floor slabs with thermal breaks, and modular
          basement retrofit solutions. This blog will explore how these technologies are redefining below-grade spaces as premium functional areas in
          modern home design.
        </p>
      </section>
    </article>
  );
}
