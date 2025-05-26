"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl">
              <span className="block">Turning Complex Data</span>
              <span className="block text-secondary">Into Business Impact</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            BI Developer • Data Visualization Expert • AWS Certified Analyst
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center sm:px-4 gap-4 justify-center"
          >
            <Button
              className="w-fit dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
              asChild
            >
              <Link href="#request">
                Work with Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
            </Button>
            <Button className="w-fit" variant="outline" asChild>
              <Link href="/books">Explore My Books</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Analysis-Inspired Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          {/* Dotted grid */}
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="#60A5FA" fillOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="1440" height="600" fill="url(#dots)" />

          {/* Abstract line graph */}
          <polyline
            className="analysis-polyline polyline-1"
            points="0,500 200,400 400,420 600,320 800,350 1000,200 1200,300 1440,180"
            stroke="#60A5FA"
            strokeWidth="2"
            fill="none"
            opacity="0.16"
          />
          <polyline
            className="analysis-polyline polyline-2"
            points="0,550 180,420 360,500 540,380 720,330 900,400 1080,250 1260,320 1440,210"
            stroke="#F472B6"
            strokeWidth="2"
            fill="none"
            opacity="0.11"
          />

          {/* Motion Paths */}
          <defs>
            <path
              id="bluePath"
              d="M0,550 180,420 360,500 540,380 720,330 900,400 1080,250 1260,320 1440,210"
              fill="none"
            />
            <path
              id="redPath"
              d="M0,500 200,400 400,420 600,320 800,350 1000,200 1200,300 1440,180"
              fill="none"
            />
          </defs>

          {/* Data points */}
          <circle
            className="analysis-point point-1"
            r="6"
            fill="#60A5FA"
            opacity="0.12"
          >
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M0,550 180,420 360,500 540,380 720,330 900,400 1080,250 1260,320 1440,210"
            />
          </circle>
          <circle
            className="analysis-point point-2"
            r="6"
            fill="#60A5FA"
            opacity="0.12"
          >
            <animateMotion
              dur="8s"
              begin="2s"
              repeatCount="indefinite"
              path="M0,550 180,420 360,500 540,380 720,330 900,400 1080,250 1260,320 1440,210"
            />
          </circle>
          <circle
            className="analysis-point point-3"
            r="6"
            fill="#60A5FA"
            opacity="0.12"
          >
            <animateMotion
              dur="8s"
              begin="4s"
              repeatCount="indefinite"
              path="M0,550 180,420 360,500 540,380 720,330 900,400 1080,250 1260,320 1440,210"
            />
          </circle>
          <circle
            className="analysis-point point-4"
            r="4"
            fill="#F472B6"
            opacity="0.13"
          >
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M0,500 200,400 400,420 600,320 800,350 1000,200 1200,300 1440,180"
            />
          </circle>
          <circle
            className="analysis-point point-5"
            r="4"
            fill="#F472B6"
            opacity="0.13"
          >
            <animateMotion
              dur="8s"
              begin="3s"
              repeatCount="indefinite"
              path="M0,500 200,400 400,420 600,320 800,350 1000,200 1200,300 1440,180"
            />
          </circle>
        </svg>
      </div>
    </section>
  );
}