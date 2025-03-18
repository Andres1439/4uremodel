import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Masonry Construction: Blending Ancient Craftsmanship with Engineering Innovation
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/masonry.jpg" alt="Precision bricklaying process" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Reinforced brickwork with seismic considerations</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In contemporary construction, masonry has evolved from traditional load-bearing walls to engineered structural systems. From hand-laid
            brick patterns to prefabricated stone panels, modern masonry combines material science with precision craftsmanship for durable and
            aesthetically striking buildings.
          </p>

          <p>
            The foundation of quality masonry lies in proper mortar mixing, joint reinforcement, and structural bonding patterns. These critical
            elements ensure compressive strength while accommodating thermal expansion and seismic forces.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Structural Masonry Engineering</h2>

        <p>
          Modern masonry construction requires understanding of compressive strength calculations and lateral load resistance. Advanced techniques
          include post-tensioned brick walls, composite masonry-concrete systems, and reinforced cavity walls with integrated insulation for energy
          efficiency.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A mason&apos;s true skill is revealed not in the first course, but in the last - when every cumulative millimeter of precision shows
          its worth.&quot;
          <cite className="block text-right font-medium mt-2">— Eduardo Soto, Master Mason</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Masonry Solutions</h2>

        <p>
          The industry now offers self-cleaning photocatalytic bricks, ultra-high-performance concrete masonry units (CMUs), and digitally fabricated
          stone veneers. Recent advancements include 3D-printed mortar joints and smart bricks with embedded sensors for structural health monitoring.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Masonry Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Type N/S/M mortar mixes</li>
          <li>Stainless steel ladder reinforcement</li>
          <li>Compressible joint fillers</li>
          <li>Cavity wall drainage systems</li>
        </ul>

        <p>
          Future trends include carbon-neutral bio-bricks, self-healing mortar with bacteria capsules, and robotic bricklaying systems with AI pattern
          recognition. This blog explores how ancient masonry techniques are merging with digital fabrication to create next-generation load-bearing
          structures.
        </p>
      </section>
    </article>
  );
}
