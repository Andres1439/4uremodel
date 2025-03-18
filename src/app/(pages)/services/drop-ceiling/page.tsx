import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Drop Ceiling Systems: Engineering Overhead Solutions in Construction
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/drop-ceiling.jpg"
            alt="Commercial drop ceiling installation"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Precision installation of modular ceiling grid system</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In modern interior construction, drop ceiling systems have evolved from basic functional solutions to sophisticated architectural
            elements. From standard acoustic tiles to custom modular designs, contemporary suspended ceilings integrate utility with aesthetics while
            providing critical access to building infrastructure.
          </p>

          <p>
            The foundation of effective drop ceiling installation lies in precise grid alignment, proper load distribution, and seamless integration
            with MEP systems. These elements ensure both visual appeal and functional performance in commercial and residential spaces.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Suspended Ceiling Engineering</h2>

        <p>
          Modern drop ceiling construction requires meticulous planning of service zones and deflection calculations. Advanced systems now incorporate
          seismic bracing, fire-rated assemblies, and integrated lighting solutions while maintaining accessibility for maintenance and upgrades.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A well-designed drop ceiling is the silent workhorse of interior spaces - concealing services while enhancing acoustics and light
          distribution.&quot;
          <cite className="block text-right font-medium mt-2">— Diane Hoskins, Architectural Designer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Overhead Solutions</h2>

        <p>
          The industry now features moisture-resistant panels, bacteriostatic surfaces, and smart ceiling tiles with embedded IoT sensors. Recent
          advancements include retractable ceiling systems and modular panels with integrated HVAC diffusers for optimized space utilization.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Drop Ceiling Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Galvanized steel main tees and cross tees</li>
          <li>Vibration-resistant hanger wires</li>
          <li>Acoustic insulation backing</li>
          <li>Perimeter molding and transition profiles</li>
        </ul>

        <p>
          Future trends include self-cleaning photocatalytic tiles, dynamic ceiling panels that adjust to ambient light, and energy-harvesting
          surfaces. This blog will explore how these innovations are transforming overhead spaces into interactive building components that contribute
          to smart facility management.
        </p>
      </section>
    </article>
  );
}
