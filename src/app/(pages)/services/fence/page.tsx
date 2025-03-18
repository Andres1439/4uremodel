import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Fence Construction: Engineering Perimeter Solutions for Property Security
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/fence.jpg" alt="Professional fence installation" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Heavy-duty metal fence installation with concrete footings</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In modern perimeter construction, fencing systems combine structural integrity with aesthetic design. From traditional wood privacy fences
            to contemporary aluminum security barriers, today&apos;s fence construction integrates material science with precise engineering for
            durable property demarcation.
          </p>

          <p>
            The fundamentals of professional fence installation rely on proper post setting, tension management, and corrosion protection. These
            critical factors ensure long-term stability while withstanding environmental stressors and maintaining visual appeal.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Perimeter Engineering Considerations</h2>

        <p>
          Modern fence construction requires precise load calculations and terrain adaptation. Advanced techniques include helical pile foundations,
          cantilevered gate systems, and composite material integration to address challenges like sloping terrain and high wind loads.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A well-built fence is a three-dimensional structure - its strength comes from proper foundation, alignment, and material
          compatibility.&quot;
          <cite className="block text-right font-medium mt-2">— John Wagner, Fence Engineering Specialist</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Boundary Solutions</h2>

        <p>
          The fencing industry now features anti-climb coatings, automated access systems, and hybrid material designs. Recent advancements include
          solar-powered smart fences with intrusion detection and self-repairing powder coatings for enhanced durability.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Fence Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Galvanized steel posts with concrete footings</li>
          <li>UV-resistant polymer rails</li>
          <li>Marine-grade stainless steel fasteners</li>
          <li>Drainage-compatible base systems</li>
        </ul>

        <p>
          Future trends include photovoltaic fence panels, biometric access integration, and adaptive privacy screens. This blog explores how these
          technologies are transforming perimeter security into smart, multifunctional property features.
        </p>
      </section>
    </article>
  );
}
