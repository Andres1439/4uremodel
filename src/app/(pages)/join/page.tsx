"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const specializations = [
  "Painting",
  "Drywall",
  "Carpentry",
  "Wallpaper",
  "Hardwood-floor",
  "Masonry",
  "Tiling",
  "Power-wash",
  "Handyman",
  "Bathroom",
  "Kitchen",
  "Roofing",
  "Siding",
  "Remodeling",
  "Framing",
  "Concrete",
  "Decks",
  "Fence",
  "Deck",
  "Shed",
  "Gutter",
  "Drop-ceiling",
  "Flooring",
  "Insulation",
  "Landscaping",
  "Everything",
];

export default function JoinTeam() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    zipCode: "",
    phone: "",
    companyName: "",
    maxTravelDistance: "",
    specializations: [] as string[],
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    zipCode: "",
    phone: "",
    maxTravelDistance: "",
    specializations: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      zipCode: "",
      phone: "",
      maxTravelDistance: "",
      specializations: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    }

    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
      isValid = false;
    } else if (!zipRegex.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid zip code (e.g., 12345 or 12345-6789)";
      isValid = false;
    }

    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., 123-456-7890)";
      isValid = false;
    }

    if (!formData.maxTravelDistance.trim()) {
      newErrors.maxTravelDistance = "Max travel distance is required";
      isValid = false;
    }

    if (formData.specializations.length === 0) {
      newErrors.specializations = "Please select at least one specialization";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSpecializationChange = (value: string) => {
    setFormData((prev) => {
      const specializations = [...prev.specializations];
      if (specializations.includes(value)) {
        return {
          ...prev,
          specializations: specializations.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          specializations: [...specializations, value],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      toast.error("Form Error", {
        description: "Please correct the errors in the form and try again.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xvgkqwzv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          specializations: formData.specializations.join(", "),
          _subject: "New Team Member Application",
        }),
      });

      if (response.ok) {
        toast.success("Application Submitted", {
          description: "Thank you for your interest in joining our team. We'll be in touch soon!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          city: "",
          zipCode: "",
          phone: "",
          companyName: "",
          maxTravelDistance: "",
          specializations: [],
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error: unknown) {
      console.error("Submission error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      toast.error("Submission Error", {
        description: `There was a problem submitting your application: ${errorMessage}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto py-12 px-4 md:px-6 bg-white">
      <header>
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Join Our Team</h1>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <article className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Work on Your Terms</h2>
          <p className="text-lg mb-4">Work as much as you like. Get the additional income you want. At your preferred time.</p>
          <p className="text-lg mb-4">
            Carpenters, painters, drywall, mason, handyman, landscapers, remodelers, everything and more; we&apos;re looking to hire all of you. Your
            skills are proudly welcome here.
          </p>
          <p className="text-lg mb-4">
            All with a license or no license and independent skilled workers with experience are welcome here. We will do all the sales, and you will
            do the work.
          </p>
          <p className="text-lg mb-6">
            Instead of sweating over the downtime in your schedule, relax, chill out — and get to work near where you live now.
          </p>
        </article>

        <figure className="flex items-center justify-center">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image src="/img/join.jpg" alt="Join our team of professionals" fill className="object-cover" priority />
          </div>
        </figure>
      </section>

      <Card className="mb-16 bg-gray-50">
        <CardContent className="p-8">
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Application Form</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </article>

              <article className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </article>

              <article className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </article>

              <article className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </article>

              <article className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} className={errors.city ? "border-red-500" : ""} />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </article>

              <article className="space-y-2">
                <Label htmlFor="zipCode">
                  Zip Code <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={errors.zipCode ? "border-red-500" : ""}
                />
                {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
              </article>

              <article className="space-y-2">
                <Label htmlFor="companyName">Company Name (if associated)</Label>
                <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} />
              </article>

              <article className="space-y-2">
                <Label htmlFor="maxTravelDistance">
                  Max Travel Distance for Jobs <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="maxTravelDistance"
                  name="maxTravelDistance"
                  placeholder="e.g., 25 miles"
                  value={formData.maxTravelDistance}
                  onChange={handleInputChange}
                  className={errors.maxTravelDistance ? "border-red-500" : ""}
                />
                {errors.maxTravelDistance && <p className="text-red-500 text-sm">{errors.maxTravelDistance}</p>}
              </article>
            </section>

            <section className="space-y-4">
              <header>
                <Label className="text-lg font-medium">
                  Tell us about the type of work you specialize in <span className="text-red-500">*</span>
                </Label>
                {errors.specializations && <p className="text-red-500 text-sm mt-1">{errors.specializations}</p>}
              </header>

              <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {specializations.map((specialization) => (
                  <article key={specialization} className="flex items-center space-x-2">
                    <Checkbox
                      id={specialization}
                      checked={formData.specializations.includes(specialization)}
                      onCheckedChange={() => handleSpecializationChange(specialization)}
                    />
                    <Label htmlFor={specialization} className="cursor-pointer">
                      {specialization}
                    </Label>
                  </article>
                ))}
              </section>
            </section>

            <footer>
              <Button type="submit" className="w-full md:w-auto px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </footer>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
