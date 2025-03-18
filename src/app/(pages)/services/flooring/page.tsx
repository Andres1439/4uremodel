import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Flooring Systems: Engineering Durable Surfaces for Contemporary Construction
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/flooring.jpg"
            alt="Professional flooring installation"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Precision installation of engineered hardwood flooring</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In modern construction, flooring systems have evolved from basic surface coverings to complex multi-layer assemblies. From traditional
            concrete subfloors to advanced floating floor systems, contemporary flooring integrates structural performance with aesthetic requirements
            while addressing acoustic and thermal challenges.
          </p>

          <p>
            The foundation of quality flooring installation lies in precise subfloor preparation, moisture mitigation, and expansion joint planning.
            These critical elements ensure dimensional stability and prevent premature wear in both residential and commercial environments.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Floor System Engineering</h2>

        <p>
          Modern flooring construction requires understanding of load distribution and material compatibility. Advanced techniques include
          self-leveling underlayments, uncoupling membranes for tile installations, and engineered wood systems with integrated vapor barriers for
          below-grade applications.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A successful floor isn&apos;t just what you see - it&apos;s the invisible layers beneath that determine its longevity and
          performance.&quot;
          <cite className="block text-right font-medium mt-2">— Sarah Johnson, Flooring Systems Engineer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Surface Technologies</h2>

        <p>
          The flooring industry now offers photocatalytic ceramic tiles, conductive flooring for static control, and modular click-lock systems with
          integrated underfloor heating. Recent advancements include antimicrobial surface treatments and digital printing technologies for
          hyper-realistic material replication.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Flooring Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Moisture-resistant underlayment</li>
          <li>Expansion gap spacers</li>
          <li>Acoustic damping compounds</li>
          <li>UV-cured wear layers</li>
        </ul>

        <p>
          Future trends include self-healing polyurethane coatings, piezoelectric flooring for energy harvesting, and smart floors with
          pressure-sensitive sensors. This blog explores how these innovations are transforming floor surfaces into interactive building components
          with multifunctional capabilities.
        </p>
      </section>
    </article>
  );
}
