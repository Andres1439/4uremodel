import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">The Art of Carpentry: A Journey Through Modern Woodworking</h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/carpentry.jpg" alt="Modern woodworking project" width={500} height={500} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Precision joinery in modern carpentry</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In the world of woodworking, every chisel stroke and saw cut tells a story. From ancient timber framing techniques to contemporary
            CNC-assisted craftsmanship, the evolution of carpentry has been remarkable.
          </p>

          <p>
            Despite technological advancements, the core principles of quality woodworking remain constant: precision, material selection, and
            attention to detail.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Timeless Techniques in Modern Woodworking</h2>

        <p>
          Contemporary carpentry demands a balance between traditional joinery methods and modern manufacturing. Today&apos;s woodworkers must master
          both hand tool techniques and digital fabrication tools to meet diverse project requirements.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;Measure twice, cut once. But more importantly, understand why you&apos;re making the cut.&quot;
          <cite className="block text-right font-medium mt-2">— Frank Klausz, Master Carpenter</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sustainable Craftsmanship</h2>

        <p>
          With the rise of eco-conscious construction, modern carpenters are pioneering sustainable practices. From reclaimed timber projects to
          energy-efficient building techniques, the industry is evolving to meet environmental challenges while maintaining artistic integrity.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Skills for Today&apos;s Woodworkers</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Advanced joinery techniques</li>
          <li>Material science understanding</li>
          <li>CAD/CAM software proficiency</li>
          <li>Project management expertise</li>
        </ul>

        <p>
          The future of woodworking is bright, blending centuries-old traditions with cutting-edge technology. In this blog, we&apos;ll explore
          innovative techniques, sustainable practices, and the tools shaping tomorrow&apos;s carpentry landscape.
        </p>
      </section>
    </article>
  );
}
