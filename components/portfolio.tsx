import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";
import { v4 as uuid } from "uuid";

const tableauProjects = [
  {
    id: uuid(),
    image: "/church-dashboard.png",
    alt: "Church Dashboard",
    badges: ["Tableau", "Dashboard"],
    title: "Church Dashboard",
    description:
      "A comprehensive dashboard tracking church attendance, donations, and member engagement metrics with interactive filters and trend analysis.",
    views: 35,
    likes: 0,
    link: "https://public.tableau.com/app/profile/jeffrey.mitini.nkhoma/viz/churchdashboard/NEW",
  },
  {
    id: uuid(),
    image: "/gender-split.png",
    alt: "Gender Split for Malawi",
    badges: ["Tableau", "Demographics"],
    title: "Gender Split for Malawi Population in 2018",
    description:
      "A population pyramid visualization showing the gender distribution across age groups in Malawi based on 2018 census data.",
    views: 103,
    likes: 0,
    link: "https://public.tableau.com/app/profile/jeffrey.mitini.nkhoma/viz/GendersplitforMalawipopulationin2018/Dashboard1",
  },
  {
    id: uuid(),
    image: "/dumbbell-chart.png",
    alt: "Dumbbell Chart",
    badges: ["Tableau", "#WOW2022"],
    title: "#WOW2022 Week 32: Dumbbell Chart",
    description:
      "A dumbbell chart visualization created for the Workout Wednesday 2022 Week 32 challenge, showing comparative data points with connected markers.",
    views: 61,
    likes: 0,
    link: "https://public.tableau.com/app/profile/jeffrey.mitini.nkhoma/viz/WOW2022Week32Canyoubuildadumbbellchart_16601963482990/BarbellDashboard",
  },
  {
    id: uuid(),
    image: "/butterfly-chart.png",
    alt: "Butterfly Chart",
    badges: ["Tableau", "#WOW2022"],
    title: "#WOW2022 W28: Butterfly Chart",
    description:
      "A butterfly chart visualization created for the Workout Wednesday 2022 Week 28 challenge, comparing two sets of categorical data with opposing horizontal bars.",
    views: 59,
    likes: 0,
    link: "https://public.tableau.com/app/profile/jeffrey.mitini.nkhoma/viz/WOW2022W28CanyoubuildaButterflychart_16601110912210/woww28",
  },
  {
    id: uuid(),
    image: "/kpi-dashboard.png",
    alt: "KPI Dashboard",
    badges: ["Tableau", "#WOW2022"],
    title: "#WOW2022 Week 31: KPI Dashboard",
    description:
      "A KPI dashboard created for the Workout Wednesday 2022 Week 31 challenge, displaying key performance indicators with financial metrics and trend analysis.",
    views: 52,
    likes: 0,
    link: "hhttps://public.tableau.com/app/profile/jeffrey.mitini.nkhoma/viz/WOW2022Week31LetsbuildaKPIdashboard_16600793653970/Dashboard1",
  },
  {
    id: uuid(),
    image: "/resume.png",
    alt: "Resume Visualization",
    badges: ["Tableau", "Resume"],
    title: "Interactive Resume",
    description:
      "An interactive visualization of my professional resume, showcasing skills, experience, and education in an engaging and interactive format.",
    views: 171,
    likes: 1,
    link: "https://public.tableau.com/app/profile/jeffrey.mitini.nkhoma/viz/JeffreyMitiniNkhomaResume/Dashboard1",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pb-12">
      <div className="container max-w-5xl py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            My{" "}
            <span className="text-secondary dark:text-blue-700/80">
              {"{data}"}
            </span>{" "}
            projects
          </h1>
          <p className="text-xl text-muted-foreground">
            From Data Visualization to Business Intelligence Dashboards
          </p>
        </div>

        <Tabs defaultValue="tableau" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="tableau">Tableau</TabsTrigger>
            <TabsTrigger value="powerbi">Power BI</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>

          <TabsContent value="tableau" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Church Dashboard */}
              {tableauProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-lg border overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {project.badges.map((badge) => (
                        <span
                          key={project.id + badge}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Eye className="h-4 w-4" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Heart className="h-4 w-4" />
                          <span>{project.likes}</span>
                        </div>
                      </div>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground dark:hover:text-blue-700/80 text-sm hover:underline"
                      >
                        View on Tableau Public
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 ">
              <Button
                asChild
                className="dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
              >
                <Link
                  href="https://public.tableau.com/app/profile/jeffrey.mitini.nkhoma/vizzes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Tableau Projects
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="powerbi" className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-medium mb-4">
                Power BI Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                I{`'`}m currently working on adding my Power BI projects to this
                portfolio. Check back soon!
              </p>
              <Button
                variant="outline"
                asChild
                className="dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
              >
                <Link href="/#contact">Contact me for Power BI samples</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="python" className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-medium mb-4">
                Python Data Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                I{`'`}m currently organizing my Python data analysis and
                visualization projects. Check back soon!
              </p>
              <Button
                variant="outline"
                asChild
                className="dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
              >
                <Link href="/#contact">Contact me for Python samples</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-card rounded-lg border p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Looking for a custom data visualization?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I can help you transform your data into meaningful insights through
            custom dashboards and visualizations. Let{`'`}s discuss how I can
            help your organization make data-driven decisions.
          </p>
          <Button
            asChild
            className="dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
