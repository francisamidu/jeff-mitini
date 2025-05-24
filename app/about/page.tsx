import PortfolioPage from "@/components/portfolio";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="md:max-w-screen-lg md:mx-auto py-12 md:py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
        About Me
      </h1>

      <div className="grid md:grid-cols-5 gap-12 items-start mt-4">
        <div className="md:col-span-3 space-y-6 about-section">
          <h2 className="text-2xl text-white font-bold">Profile</h2>
          <p className="leading-relaxed dark:text-muted-foreground">
            I{`'`}m Jeff Mitini Nkhoma, a Business Intelligence Specialist, Data
            Analyst Team Lead with over 4 years of experience transforming data
            into actionable insights.
          </p>
          <p className="leading-relaxed dark:text-muted-foreground">
            As a Data Analyst Team Lead, I've mentored professionals and built
            high-performing analytics teams that deliver impactful insights. My
            approach combines technical expertise with business acumen, ensuring
            that data solutions address real organizational challenges.
          </p>

          <h2 className="text-2xl text-white font-bold mt-8">Education</h2>

          <p className="leading-relaxed dark:text-muted-foreground">
            My educational background includes advanced degrees in Information
            Systems and Business Analytics, complemented by industry
            certifications in data visualization, cloud platforms, and project
            management.
          </p>

          {/* <h2 className="text-2xl font-bold mt-8">Author</h2>
          <p className="leading-relaxed">
            Drawing from my professional experiences, I've authored books on
            data leadership and technology management. These works aim to bridge
            the gap between technical implementation and strategic vision,
            helping leaders harness the full potential of their data resources.
          </p> */}

          <h2 className="text-2xl text-white font-bold mt-8">My Mission</h2>
          <p className="leading-relaxed dark:text-muted-foreground">
            I{`'`}m dedicated to helping organizations build data-driven
            cultures where insights lead to innovation. Whether through
            consulting, leadership, or education, my goal is to empower people
            to make better decisions through data.
          </p>
        </div>

        <div className="md:col-span-2 md:order-1 sticky top-24">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                src="/jeff-2.jpg"
                alt="Jeff Mitini Nkhoma"
                width={500}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4 bg-card p-6 rounded-lg border">
            <h3 className="font-bold text-xl">Areas of Expertise</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Business Intelligence Strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Data Analytics Leadership</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Dashboard Development</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Data Governance</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Team Building & Mentorship</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Technology Leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PortfolioPage />
    </div>
  );
}
