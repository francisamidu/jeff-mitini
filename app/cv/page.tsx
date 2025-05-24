import Technologies from "@/components/technologies";
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
import InfoCard from "@/components/InfoCard";

// Experience Data
const experiences = [
  {
    icon: <Briefcase className="h-6 w-6 text-secondary dark:text-white" />,
    title: "Team Lead | Data Analyst",
    subtitle: "KW International • Full-time",
    period: "July 2023 - Present • 1 yr 11 mos",
    location: "Plano, Texas, United States",
    bullets: [
      "Developed tailored dashboards to meet specific needs",
      "Extracted data from proprietary software and crafted weekly reports utilizing advanced Excel skills, including charts, pivot tables, and VLOOKUP",
      "Played a key role in supporting informed decision-making for optimizing call center performance",
      "Provided weekly insights to both agents and management, contributing to ongoing enhancements in call center operations",
      "Monitored real-time performance of call agents to ensure efficiency and effectiveness",
    ],
    id: "kw-int",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-secondary dark:text-white" />,
    title: "Business Intelligence Developer",
    subtitle: "ChannelMix • Full-time",
    period: "May 2022 - August 2022 • 4 mos",
    location: "Kansas City, Missouri, United States",
    bullets: [
      "Solved clients' reporting inquiries using Tableau and Power BI which received positive feedback from clients while maintaining 100% SLAs",
      "Created complex SQL queries to act as a template for quality assurance allowing all teams including the Business Intelligence Studio and Database Developers to save 60% time through query automation",
      "Created a new marketing dashboard for a client from scratch using Tableau to show cost, impressions, and CPM for traditional media channels that allows clients to make well-informed marketing spending decisions",
      "Performed quality assurance tests of reporting dashboards using SQL and Tableau",
      "Utilized Asana project management and weekly SCRUM meetings leading to greater collaboration for problem-solving customer queries resulting in 100% customer satisfaction",
    ],
  },
  {
    icon: (
      <Briefcase className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Principal",
    subtitle: "St. John Paul II Catholic College • Full-time",
    period: "January 2015 - December 2020 • 6 yrs",
    location: "Blantyre, Malawi",
  },
  {
    icon: (
      <Briefcase className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Head of Training",
    subtitle: "St. John Paul II Catholic College • Full-time",
    period: "January 2013 - December 2014 • 2 yrs",
    location: "Blantyre, Southern Region, Malawi",
  },
  {
    icon: (
      <Briefcase className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Instructor",
    subtitle: "St. John Paul II Catholic College • Full-time",
    period: "October 2011 - December 2012 • 1 yr 3 mos",
    location: "Blantyre, Southern Region, Malawi",
  },
  {
    icon: (
      <Briefcase className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Instructor",
    subtitle: "New Horizons Computer Learning Centre Malawi • Full-time",
    period: "December 2004 - August 2007 • 2 yrs 9 mos",
    location: "Blantyre, Southern Region, Malawi",
  },
];

// Education Data
const education = [
  {
    icon: (
      <GraduationCap className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Park University",
    subtitle: "Master of Science Information Systems and Business Analytics",
    period: "January 2021 - April 2023",
  },
  {
    icon: (
      <GraduationCap className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Africa University",
    subtitle: "Bachelor of Science (BSc), Computer Information Systems",
    period: "2007 - 2011",
  },
  {
    icon: (
      <GraduationCap className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "New Horizons Computer Learning Centre",
    subtitle: "Advanced Diploma, Computer Engineering",
    period: "2007",
  },
];

// Certifications Data
const certifications = [
  {
    icon: (
      <Award className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Google Analytics for Beginners",
    subtitle: "Google",
  },
  {
    icon: (
      <Award className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Extract, Transform, and Load Data",
    subtitle: "IBM",
  },
  {
    icon: (
      <Award className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "Tableau Desktop Specialist",
    subtitle: "Tableau",
  },
  {
    icon: <Award className="h-6 w-6 text-secondar dark:text-white/50y" />,
    title: "Advanced Google Analytics",
    subtitle: "Google",
  },
  {
    icon: (
      <Award className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "AWS Cloud Practitioner",
    subtitle: "Amazon Web Services",
  },
  {
    icon: (
      <Award className="h-6 w-6 text-secondary dark:text-white dark:bg-gray-900/50 dark:border-gray-900" />
    ),
    title: "IBM Data Analytics",
    subtitle: "IBM",
  },
];

// Skills Data
const topSkills = [
  { name: "Advertising", count: 12 },
  { name: "Accounting", count: 8 },
  { name: "Statistical Data Analysis", count: 15 },
];

const technicalSkills = [
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "AWS",
  "Excel",
  "IBM Cognos",
  "Pandas",
];

const businessSkills = [
  "Agile",
  "SCRUM",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Teamwork",
];

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
                <div className="absolute bottom-2 right-7 h-4 w-4 bg-green-600 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="text-xl font-bold"></div>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <Button className="flex items-center gap-2 dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black">
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
                    <Check size={16} />
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
                      className="text-secondary dark:underline dark:text-white/50 hover:text-secondary hover:underline"
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
                      className="text-sm hover:text-secondary dark:underline dark:text-white/50 hover:dark:text-white"
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
                      className="text-sm hover:text-secondary dark:underline dark:text-white/50 hover:dark:text-white"
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
                    className="text-secondary dark:underline dark:text-white/50 hover:text-secondary hover:underline"
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
                {experiences.map((exp, idx) => (
                  <div key={exp.title + idx}>
                    <InfoCard
                      icon={exp.icon}
                      title={exp.title}
                      subtitle={exp.subtitle}
                      className="mb-1"
                    />
                    {exp.period && (
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    )}
                    {exp.location && (
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    )}
                    {exp.bullets && (
                      <div className="mt-2">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <div className="space-y-6" id="park-uni">
                {education.map((edu, idx) => (
                  <div key={edu.title + idx}>
                    <InfoCard
                      icon={edu.icon}
                      title={edu.title}
                      subtitle={edu.subtitle}
                      className="mb-1"
                    />
                    {edu.period && (
                      <p className="text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                    )}
                  </div>
                ))}
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
                    {topSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-card/50 text-white border px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        <span>{skill.name}</span>
                        <span className="bg-primary/20 px-1.5 rounded-full text-xs">
                          {skill.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-secondary/10 dark:border-gray-900 dark:border rounded flex items-center justify-center">
                        <Code className="h-6 w-6 text-secondary dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {technicalSkills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-secondary dark:bg-slate-900/70 text-white border border-slate-900/70 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
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
                        {businessSkills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-secondary dark:bg-slate-900/70 text-white border border-slate-900/70 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
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
                {certifications.map((cert, idx) => (
                  <InfoCard
                    key={cert.title + idx}
                    icon={cert.icon}
                    title={cert.title}
                    subtitle={cert.subtitle}
                  />
                ))}
              </div>
            </div>

            {/* Experise */}
            <div className="bg-card rounded-xl shadow-sm p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Technologies & Tools</h2>
              </div>
              <Technologies />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
