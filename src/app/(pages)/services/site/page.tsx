import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Construction Site Preparation: Engineering the Foundation for Successful Projects
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/site-preparation.jpg"
            alt="Heavy equipment performing site grading"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">GPS-guided grading operations for precise elevation control</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            Proper site preparation forms the critical first phase of any construction project, transforming raw land into a stable building platform.
            From vegetation clearing to subgrade compaction, modern site work combines geotechnical engineering with advanced machinery to create
            optimal conditions for structural development.
          </p>

          <p>
            The fundamentals of professional site preparation include soil analysis, erosion control implementation, and precise grading operations.
            These elements ensure load-bearing capacity while managing water drainage and regulatory compliance.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Geotechnical Engineering Principles</h2>

        <p>
          Modern site preparation requires understanding of Proctor density tests (ASTM D698) and bearing capacity calculations. Advanced techniques
          include laser-guided grading systems, dynamic compaction for problematic soils, and bioengineering solutions for slope stabilization.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;The success of any structure begins 6 feet down - proper site preparation eliminates future settlement and drainage issues before the
          first foundation form is set.&quot;
          <cite className="block text-right font-medium mt-2">— Dr. Rebecca Stone, Geotechnical Engineer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Site Work Solutions</h2>

        <p>
          The industry now utilizes drone-based topographic mapping, AI-powered cut/fill optimization software, and electric earthmoving equipment.
          Recent advancements include sensor-embedded compaction rollers and real-time soil moisture monitoring systems.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Site Preparation Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Stabilization geotextiles (Class 2, AASHTO M288)</li>
          <li>Temporary sediment control barriers (Type D, ASTM D7351)</li>
          <li>Lime-treated subgrades (5% minimum application)</li>
          <li>GPS machine control systems (±5mm accuracy)</li>
        </ul>

        <p>
          Future trends include autonomous grading equipment, 3D-printed erosion control structures, and nanotechnology soil stabilizers. This blog
          explores how smart site preparation technologies are reducing environmental impact while improving construction efficiency.
        </p>
      </section>
    </article>
  );
}
