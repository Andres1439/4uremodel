import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">The Science of Asphalt: Modern Techniques in Road Construction</h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/asphalt.jpg" alt="Road construction with asphalt" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Precision asphalt laying in modern road construction</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In the realm of infrastructure development, every layer of asphalt tells a story of engineering precision. From ancient Roman
            road-building techniques to modern polymer-modified mixes, the evolution of asphalt technology has revolutionized transportation networks.
          </p>

          <p>
            Despite advancements in material science, the core principles of quality pavement construction remain constant: proper compaction,
            temperature control, and material composition. These fundamentals ensure durable road surfaces that withstand heavy traffic and
            environmental challenges.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Essential Properties of Quality Asphalt</h2>

        <p>
          Modern asphalt engineering requires a balance between structural integrity and flexibility. Today&apos;s pavement specialists must master
          both traditional mix designs and innovative additives to meet diverse climate conditions and traffic loads.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;Good roads make good neighbors. The difference between a pavement and a problem lies in the quality of execution.&quot;
          <cite className="block text-right font-medium mt-2">— John McAdam, Road Construction Pioneer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sustainable Pavement Solutions</h2>

        <p>
          With increasing focus on eco-friendly infrastructure, the asphalt industry is leading in sustainable practices. From recycled asphalt
          pavement (RAP) to warm-mix technologies, new methods reduce environmental impact while improving performance characteristics.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Key Components in Modern Asphalt Mixes</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Aggregate gradation optimization</li>
          <li>Polymer-modified binders</li>
          <li>Recycled material integration</li>
          <li>Advanced compaction techniques</li>
        </ul>

        <p>
          The future of road construction lies in smart asphalt technologies, including self-healing materials and temperature-responsive surfaces. In
          this blog, we&apos;ll explore cutting-edge developments in asphalt production, laying methods, and maintenance strategies shaping
          tomorrow&apos;s infrastructure.
        </p>
      </section>
    </article>
  );
}
