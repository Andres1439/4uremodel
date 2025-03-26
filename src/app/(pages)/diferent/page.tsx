import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6 bg-white text-gray-800">
      <header>
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">How It Works</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <figure className="flex items-center justify-center">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image src="/img/diferent2.jpg" alt="PerfectoRemodel service" fill className="object-cover" priority />
          </div>
        </figure>

        <article className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">A Better Approach to Home Improvement</h2>
          <p className="text-lg mb-4">
            PerfectoRemodel is a home improvement subscription service that offers a much easier way to maintain your home.
          </p>
          <p className="text-lg mb-4">
            Unlike other home repair and remodel services that charge a large upfront fee, with PerfectoRemodel, you pay an annual subscription fee
            for a specific amount of hours. Once paid in full or by installments, we complete the work hour by hour for any small, odd job or big
            repair.
          </p>
          <p className="text-lg">
            Now you have a cost-effective way to easily manage your home repair, remodeling, or construction bills throughout the year. We accept
            credit cards, Zelle, or checks.
          </p>
        </article>
      </section>

      <Card className="mb-16 bg-blue-50">
        <CardContent className="p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Doing It Right Every Time</h2>
          <p className="text-lg mb-4">
            While you are at your house, your repair, remodel, or construction will be done. With PerfectoRemodel Corp., you get the satisfaction of
            knowing your job will be completed in a timely manner.
          </p>
          <p className="text-lg mb-4">
            No more waiting. We coordinate the technician&apos;s arrival with you. No more hours spent seeking out qualified people on your own. No
            more sweating over wasted time.
          </p>
          <p className="text-lg">
            Our company is licensed and insured in Long Island and NYC, and we will only send qualified technicians to your house.
          </p>
        </CardContent>
      </Card>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <article className="flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Five-Star Professionalism</h2>
          <section className="mb-6">
            <h3 className="text-xl font-medium mb-2">Licensed and Insured</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nassau License # H0305700000 (Exp. 08/31/25)</li>
              <li>Suffolk License # 47431-H (Exp. 05/01/26)</li>
              <li>NYC License # 2050066 (Exp. 02/28/27)</li>
            </ul>
          </section>
          <p className="text-lg mb-4">
            Our team has worked with us on many projects. Whatever you need inside and out — our workers take pride in what they do.
          </p>
          <p className="text-lg">
            Thanks to our thorough vetting process, you can always feel secure about our team working at your house. Stop worrying about strangers in
            your home; our company has made that a thing of the past.
          </p>
        </article>

        <figure className="flex items-center justify-center order-1 md:order-2">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image src="/img/diferent.jpg" alt="PerfectoRemodel professional team" fill className="object-cover" />
          </div>
        </figure>
      </section>

      <footer className="text-center p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Service Areas</h3>
        <p className="text-lg">Nassau County • Suffolk County • Queens • Brooklyn • Bronx • Staten Island • Manhattan</p>
        <address className="mt-4 not-italic">
          <p className="text-lg font-medium">Internal Main Office (not open to the public)</p>
          <p className="text-lg">10 EAST 19TH STREET, HUNTINGTON STATION NY 11746</p>
        </address>
      </footer>
    </main>
  );
}
