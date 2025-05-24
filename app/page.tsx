import React from "react";
import Hero from "@/components/hero";
import Services from "@/components/services";
import AboutSnippet from "@/components/about-snippet";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact-form";
import Books from "@/components/books-review";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />

      <AboutSnippet />

      <Services />

      <Testimonials />

      <Books />

      <Contact />
    </main>
  );
}
