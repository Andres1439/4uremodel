import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 my-8">
      <header className="space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Industrial Power Washing: Engineered Surface Preparation in Construction
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 mb-8">
        <figure className="md:w-1/3 flex-shrink-0">
          <Image
            src="/img/power.jpg"
            alt="Industrial pressure washing operation"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">4000 PSI surface preparation using hot water extraction</figcaption>
        </figure>

        <section className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            In modern construction, power washing has evolved from basic cleaning to precision surface engineering. From concrete etching to façade
            restoration, industrial pressure washing combines hydrodynamics with advanced chemistry to meet stringent surface preparation standards.
          </p>

          <p>
            The fundamentals of professional power washing rely on precise PSI/GPM ratios, nozzle selection, and surface compatibility analysis. These
            critical factors ensure optimal substrate profiles while preventing surface degradation or environmental contamination.
          </p>
        </section>
      </section>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Hydrodynamic Surface Engineering</h2>

        <p>
          Modern power washing systems require understanding of impact force calculations (lbs/ft²) and dwell time optimization. Advanced applications
          include graffiti removal using 300°F steam, concrete hydro-demolition at 10,000 PSI+, and eco-friendly bioremediation washing for historical
          structures.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          &quot;Industrial cleaning isn&apos;t about maximum pressure - it&apos;s about delivering precise energy per square inch to achieve the exact
          surface profile required by coating specifications.&quot;
          <cite className="block text-right font-medium mt-2">— Dr. Emily Rhodes, Surface Preparation Engineer</cite>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Innovative Hydrocleaning Solutions</h2>

        <p>
          The industry now features water recycling systems recovering 95% runoff, variable-pressure AI-controlled nozzles, and cryogenic blasting
          hybrids. Recent advancements include laser-guided contamination mapping and ultrasonic surface profile verification during washing
          operations.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Power Washing Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Triplex plunger pumps (3500+ PSI)</li>
          <li>Rotary surface cleaners (24&quot;+ diameters)</li>
          <li>Chemical injection systems (5 GPM+)</li>
          <li>Downstream injector proportioners</li>
        </ul>

        <p>
          Future trends include robotic crawler systems for vertical surfaces, real-time water quality monitoring sensors, and hydrogen-powered
          pressure washers with zero emissions. This blog explores how advanced hydrocleaning technologies are redefining surface preparation
          standards in structural rehabilitation and new construction.
        </p>
      </section>
    </article>
  );
}
