"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSnippet() {
  return (
    <section id="about-snippet" className="container md:mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 px-5"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground ">
            <span className="block my-4">👋 Hey, I'm Jeff</span>
            <span>
              I'm here to help you design, develop, and deploy BI solutions to
              drive business impact. I spend my days leveraging data analysis,
              data visualization, and statistical techniques to deliver
              strategic insights.
            </span>
          </p>

          <Button variant="outline" asChild>
            <Link href="/about" className="inline-flex items-center my-4">
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <h2 className="text-2xl font-bold mt-8">Online Profiles</h2>
          <ul className="space-y-2 flex flex-row gap-4">
            <li>
              <Link href="https://www.credly.com/users/jeffrey-mitini-nkhoma">
                <Image
                  src="/credly_logo.svg"
                  alt="Credly"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
            <li>
              <Link href="https://public.tableau.com/profile/jeffmitini">
                <Image
                  src="/tableau_logo.svg"
                  alt="Tableau"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/mitinicj/">
                <Image
                  src="/instagram_logo.svg"
                  alt="Instagram"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          <div className="relative ">
            <Image
              src="/jeff-2.jpg"
              alt="Jeff Mitini Nkhoma"
              width={100}
              height={100}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
