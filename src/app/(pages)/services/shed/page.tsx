import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Modern Shed Construction: Engineering Functional Outdoor Storage Solutions
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/shed.jpg" alt="Modular shed installation" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Prefabricated shed with composite siding and solar-ready roof</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            Contemporary shed construction has evolved from basic storage boxes to engineered outdoor structures. From traditional wood lean-tos to
            insulated smart sheds, modern designs combine material innovation with precision framing techniques for durability and multi-functional
            use.
          </p>

          <p>
            The fundamentals of professional shed construction rely on proper foundation preparation, moisture management, and load-bearing
            calculations. These critical elements ensure structural integrity while resisting weather extremes and seasonal ground movements.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Outbuilding Engineering Principles</h2>

        <p>
          Modern shed construction requires understanding of wind load resistance (ASCE 7-16) and thermal bridging prevention. Advanced techniques
          include frost-protected shallow foundations, cantilevered roof overhangs, and modular panel systems for rapid assembly.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A well-built shed isn&apos;t just storage - it&apos;s an engineered space that must handle thermal expansion, wind uplift, and decades
          of access cycles.&quot;
          <cite className="block text-right font-medium mt-2">— James Carter, Outdoor Structure Engineer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Shed Solutions</h2>

        <p>
          The industry now offers solar-integrated roof panels, vertical storage systems, and smart sheds with IoT climate control. Recent
          advancements include rot-resistant composite framing and fold-flat shed kits with tool-free assembly.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Shed Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Pressure-treated floor joists (16&quot; o.c.)</li>
          <li>Moisture-resistant sheathing (OSB-3)</li>
          <li>Galvanized steel roofing (29-gauge)</li>
          <li>Ventilated soffit systems</li>
        </ul>

        <p>
          Future trends include 3D-printed shed bases, self-monitoring pest deterrent systems, and convertible designs with retractable walls. This
          blog explores how modular construction and smart materials are revolutionizing backyard storage solutions.
        </p>
      </section>
    </article>
  );
}
