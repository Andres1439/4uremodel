import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Drywall Construction: Precision Techniques for Seamless Interior Spaces
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/drywall.jpg" alt="Drywall installation process" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Professional drywall finishing with joint compound</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In modern interior construction, drywall systems have revolutionized space division and surface finishing. From basic wall assemblies to
            curved architectural features, contemporary drywall techniques combine material science with precision craftsmanship for flawless results.
          </p>

          <p>
            The foundation of quality drywall installation lies in proper board orientation, screw spacing, and joint treatment. These critical
            elements ensure crack-resistant surfaces while accommodating building movement and environmental changes.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Wall System Engineering</h2>

        <p>
          Modern drywall construction requires understanding of load-bearing capacities and acoustic performance. Advanced techniques include
          double-layer installations, resilient channel systems, and specialized fire-rated assemblies for commercial applications.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;The beauty of drywall is in its imperfections - mastering the art of hiding seams is what separates good work from great
          craftsmanship.&quot;
          <cite className="block text-right font-medium mt-2">— Myron Ferguson, Drywall Master</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Surface Solutions</h2>

        <p>
          The industry now offers mold-resistant boards, impact-resistant panels, and pre-finished options. New technologies include laser-guided
          installation systems, quick-setting compounds, and dust-reduction sanding techniques for cleaner job sites.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Drywall Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Type-specific gypsum boards (X, C, etc.)</li>
          <li>Fiberglass mesh tape</li>
          <li>Low-dust joint compound</li>
          <li>Corrosion-resistant fasteners</li>
        </ul>

        <p>
          Future advancements include self-healing joint systems, integrated electrical conduits, and eco-friendly recycled board materials. This blog
          explores how smart drywall technologies with embedded sensors are transforming interior spaces into interactive surfaces.
        </p>
      </section>
    </article>
  );
}
