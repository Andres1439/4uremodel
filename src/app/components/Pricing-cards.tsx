"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  additionalTimePercentage: number;
  baseHours: number;
  includedAdditionalHours: number;
  hourlyRate: number;
  color: string;
  popular?: boolean;
}

export function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  const pricingPlans: PricingPlan[] = [
    {
      id: "extra-large",
      name: "The Extra Large",
      description: "60 hours of service per year",
      monthlyPrice: 400,
      annualPrice: 4800,
      additionalTimePercentage: 30,
      baseHours: 60,
      includedAdditionalHours: 18,
      hourlyRate: 90,
      color: "bg-indigo-600",
    },
    {
      id: "upgrader",
      name: "Upgrader",
      description: "8 hours of service per year",
      monthlyPrice: 60,
      annualPrice: 720,
      additionalTimePercentage: 25,
      baseHours: 8,
      includedAdditionalHours: 10,
      hourlyRate: 90,
      color: "bg-indigo-500",
    },
    {
      id: "starter",
      name: "Starter",
      description: "4 hours of service per year",
      monthlyPrice: 40,
      annualPrice: 480,
      additionalTimePercentage: 20,
      baseHours: 4,
      includedAdditionalHours: 5,
      hourlyRate: 90,
      color: "bg-indigo-400",
    },
    {
      id: "best-value",
      name: "Best Value",
      description: "15 hours of service per year",
      monthlyPrice: 100,
      annualPrice: 1200,
      additionalTimePercentage: 20.5,
      baseHours: 15,
      includedAdditionalHours: 4.5,
      hourlyRate: 90,
      color: "bg-amber-500",
      popular: true,
    },
    {
      id: "advanced",
      name: "Advanced",
      description: "45 hours of service per year",
      monthlyPrice: 300,
      annualPrice: 3600,
      additionalTimePercentage: 30,
      baseHours: 45,
      includedAdditionalHours: 13.5,
      hourlyRate: 90,
      color: "bg-indigo-600",
    },
  ];

  return (
    <section className="container mx-auto py-12 px-4">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Service Plans</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best suits your needs. All plans include support and maintenance.
        </p>

        <nav className="flex items-center justify-center mt-6 space-x-4">
          <Button variant={billingCycle === "monthly" ? "default" : "outline"} onClick={() => setBillingCycle("monthly")} className="rounded-full">
            Monthly
          </Button>
          <Button variant={billingCycle === "annually" ? "default" : "outline"} onClick={() => setBillingCycle("annually")} className="rounded-full">
            Annually
          </Button>
        </nav>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className={cn(
              "flex flex-col h-full border-2 relative overflow-hidden transition-all duration-200 hover:shadow-lg",
              plan.popular && "border-primary shadow-md scale-[1.02]"
            )}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">Popular</span>
            )}

            <article className={cn("h-32 flex flex-col items-center justify-center text-white", plan.color)}>
              <h3 className="text-3xl font-bold">${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}</h3>
              <p className="text-sm opacity-90">{billingCycle === "monthly" ? "monthly" : "annually"}</p>
              <p className="text-xs mt-2 opacity-80">{plan.additionalTimePercentage}% additional time paid annually</p>
            </article>

            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>
                    {plan.baseHours} hours of service per year. Paid plan includes {plan.includedAdditionalHours} additional hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>Additional hours at ${plan.hourlyRate} per hour</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>Upgrade opportunity</span>
                </li>
                <li className="flex items-start text-xs text-muted-foreground">
                  <span className="ml-6">***Prices reflect the current promotion and are subject to change without notice***</span>
                </li>
              </ul>

              <section className="mt-4">
                <Select defaultValue={`monthly-${plan.monthlyPrice}`}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={`monthly-${plan.monthlyPrice}`}>Monthly - ${plan.monthlyPrice}</SelectItem>
                    <SelectItem value={`annually-${plan.annualPrice}`}>Annually - ${plan.annualPrice}</SelectItem>
                  </SelectContent>
                </Select>
              </section>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                <Link href="/contact">Select plan</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>

      <footer className="text-center mt-12 text-sm text-muted-foreground">
        <p>Prices are subject to change. Contact us for more details.</p>
      </footer>
    </section>
  );
}
