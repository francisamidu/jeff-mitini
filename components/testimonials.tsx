"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "Jeff's expertise in business intelligence transformed our organization's approach to data. His strategic insights helped us implement a comprehensive BI solution that has significantly improved our decision-making process.",
    author: "Sarah Johnson",
    title: "CTO, Global Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    content:
      "Working with Jeff on our data analytics strategy was a game-changer. His ability to translate complex technical concepts into actionable business strategies is remarkable. I highly recommend his consulting services.",
    author: "Michael Chen",
    title: "Director of Analytics, Innovate Corp",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    content:
      "Jeff's book on Data Leadership has become essential reading for our entire management team. His frameworks for building data-driven organizations are practical, insightful, and immediately applicable.",
    author: "Priya Patel",
    title: "CEO, DataFirst Enterprises",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section id="testimonials" className="bg-card py-16">
      <div className="container md:mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Feedback from clients and collaborators
          </p>
        </div>
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-[350px] md:h-[300px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <Quote className="h-12 w-12 text-primary/20 mb-6" />
                  <p className="text-xl md:text-base italic mb-8">
                    {`"`}
                    {testimonials[current].content}
                    {`"`}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <p className="font-semibold">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 my-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 w-2 rounded-full transition-all !border-blue-500 ${
                    index === current ? "bg-white  w-4" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
