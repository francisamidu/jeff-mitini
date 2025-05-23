"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

export default function AboutSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="text-lg text-muted-foreground">
          I'm Jeff Mitini Nkhoma, a Business Intelligence Specialist with over 15 years of experience transforming data
          into actionable insights. As a Data Analyst Team Lead, I've helped organizations leverage their data assets to
          achieve strategic objectives.
        </p>
        <p className="text-lg text-muted-foreground">
          I'm also an author and the Principal of a Leadership & IT Institute, where I'm passionate about developing the
          next generation of data professionals.
        </p>
        <Button variant="outline" asChild>
          <Link href="/about" className="inline-flex items-center">
            Learn More About Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-75"></div>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=400&width=600&query=professional portrait of African business man analyzing data"
            alt="Jeff Mitini Nkhoma"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
