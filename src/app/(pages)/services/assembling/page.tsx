import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">The Precision of Assembly: Modern Techniques in Construction</h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/assembling.jpg"
            alt="Prefabricated structure assembly"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Precision assembly of modular components</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In modern construction, assembly techniques have revolutionized how we build. From traditional steel framing to cutting-edge prefabricated
            modular systems, the art of precise component assembly combines engineering excellence with on-site efficiency.
          </p>

          <p>
            The core principles of successful structural assembly remain rooted in meticulous planning, tolerance management, and sequencing accuracy.
            These fundamentals enable the creation of complex structures with millimeter precision, reducing waste and improving project timelines.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Modular Assembly Strategies</h2>

        <p>
          Contemporary construction assembly requires seamless integration of off-site fabrication and on-site execution. Modern teams must master
          both traditional bolting/welding techniques and digital assembly protocols using BIM coordination.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;The strength of a structure lies not just in its materials, but in the precision of its assembly.&quot;
          <cite className="block text-right font-medium mt-2">— Leslie Robertson, Structural Engineer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Smart Assembly Technologies</h2>

        <p>
          With advancements in construction tech, assembly processes now incorporate RFID tracking, augmented reality guidance, and robotic
          assistance. These innovations improve quality control while enabling complex geometric configurations previously unimaginable.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Critical Assembly Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Precision-engineered connectors</li>
          <li>Automated alignment systems</li>
          <li>Load-bearing interface design</li>
          <li>Seismic movement accommodation</li>
        </ul>

        <p>
          The future of construction assembly lies in self-monitoring components and AI-driven sequencing optimization. This blog will explore how
          automated assembly systems, drone-assisted positioning, and smart fastening technologies are redefining modern construction methodologies.
        </p>
      </section>
    </article>
  );
}
