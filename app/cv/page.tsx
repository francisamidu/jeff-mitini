import { Button } from "@/components/ui/button";
import {
  Download,
  MessageSquare,
  Plus,
  Bell,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CVPage() {
  return (
    <section className="p-5 bg-muted/30">
      <div className="container md:mx-auto min-h-screen pb-12 ">
        {/* Banner and Profile Section */}
        <div className="relative md:max-w-screen-lg mx-auto">
          {/* Banner Image */}
          <div className="h-40 md:h-60 w-full bg-gradient-to-r from-primary/20 to-primary/40 relative rounded-t-2xl">
            <div className="absolute inset-0 bg-[url('/banner-image.jpg')] bg-cover  opacity-90"></div>
          </div>

          {/* Profile Container */}
          <div className="container max-w-5xl">
            {/* Profile Picture */}
            <div className="relative -mt-16 md:-mt-24 mb-4 flex justify-between items-end">
              <div className="relative">
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-background overflow-hidden">
                  <Image
                    src="/jeff.jpg"
                    alt="Jeff Mitini"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 h-10 w-10 bg-background rounded-full flex items-center justify-center border-2 border-background">
                  <div className="text-xl font-bold">JM</div>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden md:inline">Download CV</span>
                </Button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold">
                      Jeffrey Mitini Nkhoma
                    </h1>
                    <Check />
                    <span className="text-sm text-muted-foreground">• 1st</span>
                  </div>
                  <p className="text-base text-muted-foreground mt-1">
                    Data Analytics | Business Intelligence | Data Specialist |
                    Statistics
                  </p>
                  <div className="flex items-center gap-1 my-2 text-sm text-muted-foreground">
                    <span>Dallas, Texas</span>
                    <span>•</span>
                    <Link
                      href="#contact"
                      className="text-secondary hover:text-secondary hover:underline"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-red-800">PU</span>
                    </div>

                    <Link
                      href="#park-uni"
                      className="text-sm hover:text-secondary"
                    >
                      Park University
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-800">
                        KW
                      </span>
                    </div>
                    <Link
                      href="#kw-int"
                      className="text-sm hover:text-secondary"
                    >
                      KW International
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span>
                  <span>469-631-5776 (Mobile)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <span>cjmitini@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/jeffmitini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    www.linkedin.com/in/jeffmitini
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground mb-2">
                Hi there! Welcome to my profile. I'm Jeff, a skilled BI and Data
                Analytics professional with over 5 years of experience in the
                field. I have a strong background in data analysis, data
                visualization, and data management. I am also a skilled
                communicator and team player, and I am always looking for new
                opportunities to learn and grow.
              </p>
            </div>

            {/* Experience Section */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Experience</h2>
              </div>

              <div className="space-y-6" id="kw-int">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12  bg-secondary/10 rounded flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Team Lead | Data Analyst
                    </h3>
                    <p className="text-muted-foreground">
                      KW International • Full-time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      July 2023 - Present • 1 yr 11 mos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Plano, Texas, United States
                    </p>
                    <div className="mt-2">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>
                          Developed tailored dashboards to meet specific needs
                        </li>
                        <li>
                          Extracted data from proprietary software and crafted
                          weekly reports utilizing advanced Excel skills,
                          including charts, pivot tables, and VLOOKUP
                        </li>
                        <li>
                          Played a key role in supporting informed
                          decision-making for optimizing call center performance
                        </li>
                        <li>
                          Provided weekly insights to both agents and
                          management, contributing to ongoing enhancements in
                          call center operations
                        </li>
                        <li>
                          Monitored real-time performance of call agents to
                          ensure efficiency and effectiveness
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Business Intelligence Developer
                    </h3>
                    <p className="text-muted-foreground">
                      ChannelMix • Full-time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      May 2022 - August 2022 • 4 mos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Kansas City, Missouri, United States
                    </p>
                    <div className="mt-2">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>
                          Solved clients' reporting inquiries using Tableau and
                          Power BI which received positive feedback from clients
                          while maintaining 100% SLAs
                        </li>
                        <li>
                          Created complex SQL queries to act as a template for
                          quality assurance allowing all teams including the
                          Business Intelligence Studio and Database Developers
                          to save 60% time through query automation
                        </li>
                        <li>
                          Created a new marketing dashboard for a client from
                          scratch using Tableau to show cost, impressions, and
                          CPM for traditional media channels that allows clients
                          to make well-informed marketing spending decisions
                        </li>
                        <li>
                          Performed quality assurance tests of reporting
                          dashboards using SQL and Tableau
                        </li>
                        <li>
                          Utilized Asana project management and weekly SCRUM
                          meetings leading to greater collaboration for
                          problem-solving customer queries resulting in 100%
                          customer satisfaction
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Principal</h3>
                    <p className="text-muted-foreground">
                      St. John Paul II Catholic College • Full-time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      January 2015 - December 2020 • 6 yrs
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Blantyre, Malawi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Head of Training</h3>
                    <p className="text-muted-foreground">
                      St. John Paul II Catholic College • Full-time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      January 2013 - December 2014 • 2 yrs
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Blantyre, Southern Region, Malawi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Instructor</h3>
                    <p className="text-muted-foreground">
                      St. John Paul II Catholic College • Full-time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      October 2011 - December 2012 • 1 yr 3 mos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Blantyre, Southern Region, Malawi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Instructor</h3>
                    <p className="text-muted-foreground">
                      New Horizons Computer Learning Centre Malawi • Full-time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      December 2004 - August 2007 • 2 yrs 9 mos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Blantyre, Southern Region, Malawi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Education</h2>
              </div>

              <div className="space-y-6" id="park-uni">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Park University</h3>
                    <p className="text-muted-foreground">
                      Master of Science Information Systems and Business
                      Analytics
                    </p>
                    <p className="text-sm text-muted-foreground">
                      January 2021 - April 2023
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Africa University</h3>
                    <p className="text-muted-foreground">
                      Bachelor of Science (BSc), Computer Information Systems
                    </p>
                    <p className="text-sm text-muted-foreground">2007 - 2011</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      New Horizons Computer Learning Centre
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced Diploma, Computer Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">2007</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Skills</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Top Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <span>Advertising</span>
                      <span className="bg-primary/20 px-1.5 rounded-full text-xs">
                        12
                      </span>
                    </div>
                    <div className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <span>Accounting</span>
                      <span className="bg-primary/20 px-1.5 rounded-full text-xs">
                        8
                      </span>
                    </div>
                    <div className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <span>Statistical Data Analysis</span>
                      <span className="bg-primary/20 px-1.5 rounded-full text-xs">
                        15
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                        <Code className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          SQL
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Python
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Power BI
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Tableau
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          AWS
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Excel
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          IBM Cognos
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Pandas
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Business Skills</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Agile
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          SCRUM
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Problem Solving
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Critical Thinking
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Communication
                        </span>
                        <span className="bg-secondary text-white border border-secondary/90 px-3 py-1 rounded-full text-sm">
                          Teamwork
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Google Analytics for Beginners
                    </h3>
                    <p className="text-muted-foreground">Google</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12  bg-secondary/10 rounded flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Extract, Transform, and Load Data
                    </h3>
                    <p className="text-muted-foreground">IBM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Tableau Desktop Specialist
                    </h3>
                    <p className="text-muted-foreground">Tableau</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Advanced Google Analytics
                    </h3>
                    <p className="text-muted-foreground">Google</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      AWS Cloud Practitioner
                    </h3>
                    <p className="text-muted-foreground">Amazon Web Services</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-secondary/10 rounded flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">IBM Data Analytics</h3>
                    <p className="text-muted-foreground">IBM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
