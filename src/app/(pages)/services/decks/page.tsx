import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          The Art of Deck Building: Modern Techniques in Outdoor Construction
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image src="/img/decks.jpg" alt="Custom deck construction project" width={400} height={400} className="rounded-lg object-cover w-full" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Modern deck building with composite materials</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In outdoor construction, deck building combines structural engineering with aesthetic design. From traditional wood platforms to
            innovative cantilevered systems, modern deck construction techniques create functional outdoor living spaces that seamlessly blend with
            architectural styles.
          </p>

          <p>
            The fundamentals of durable deck construction remain anchored in proper footings, moisture management, and load calculations. These
            critical elements ensure safety and longevity while accommodating evolving design trends and material innovations.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Design & Engineering Considerations</h2>

        <p>
          Contemporary deck construction requires precision in material selection and structural planning. Modern builders must balance composite
          material properties with traditional woodworking skills, while integrating features like built-in lighting, drainage systems, and hidden
          fasteners.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;A well-built deck is where architecture meets nature - every joint must withstand the elements while creating beauty underfoot.&quot;
          <cite className="block text-right font-medium mt-2">— Paul Lafrance, Deck Specialist</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sustainable Outdoor Solutions</h2>

        <p>
          The decking industry now prioritizes eco-friendly materials like recycled composites and FSC-certified hardwoods. Advanced treatments
          protect against weathering while maintaining environmental responsibility, with innovations in low-maintenance surfaces and integrated
          rainwater management systems.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Deck Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Corrosion-resistant fasteners</li>
          <li>Proper ventilation systems</li>
          <li>Load-bearing post connections</li>
          <li>Waterproof membrane integration</li>
        </ul>

        <p>
          The future of deck construction includes smart surfaces with embedded lighting and heating, modular deck systems, and bio-composite
          materials. This blog will explore how these innovations are transforming outdoor spaces into multi-functional extensions of modern living
          areas.
        </p>
      </section>
    </article>
  );
}
