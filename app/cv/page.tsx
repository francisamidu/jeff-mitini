import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function CVPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Curriculum Vitae</h1>
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download CV
        </Button>
      </div>

      <div className="space-y-12 max-w-4xl">
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Professional Summary</h2>
          <p className="text-lg leading-relaxed">
            Business Intelligence Specialist and Data Analyst Team Lead with 15+ years of experience in transforming
            complex data into actionable insights. Author and Principal of a Leadership & IT Institute focused on
            developing data-driven leaders.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Work Experience</h2>

          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Principal & Founder</h3>
                <div className="text-muted-foreground">2018 - Present</div>
              </div>
              <div className="text-lg font-medium mb-2">Leadership & IT Institute</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Established and lead an institute focused on developing IT and leadership skills</li>
                <li>Designed comprehensive curriculum for data analytics and business intelligence</li>
                <li>Mentored over 200 professionals in data leadership and analytics</li>
                <li>Facilitated workshops for organizations transitioning to data-driven decision making</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Data Analytics Team Lead</h3>
                <div className="text-muted-foreground">2015 - Present</div>
              </div>
              <div className="text-lg font-medium mb-2">Global Tech Solutions</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lead a team of 12 data analysts across multiple projects and industries</li>
                <li>Implemented data governance frameworks resulting in 40% improvement in data quality</li>
                <li>Developed executive dashboards that drive strategic decision-making</li>
                <li>Reduced reporting time by 65% through process automation and tool optimization</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Business Intelligence Specialist</h3>
                <div className="text-muted-foreground">2010 - 2015</div>
              </div>
              <div className="text-lg font-medium mb-2">Data Insights Corporation</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Designed and implemented BI solutions for Fortune 500 clients</li>
                <li>Created data models and ETL processes for complex business requirements</li>
                <li>Developed interactive dashboards using Power BI, Tableau, and custom solutions</li>
                <li>Consulted on data strategy and analytics roadmap development</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Education</h2>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Master of Science in Business Analytics</h3>
                <div className="text-muted-foreground">2012 - 2014</div>
              </div>
              <div className="text-lg font-medium">University of Technology</div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Bachelor of Science in Information Systems</h3>
                <div className="text-muted-foreground">2006 - 2010</div>
              </div>
              <div className="text-lg font-medium">National University</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Technical Skills</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Data Visualization (Power BI, Tableau, Qlik)</li>
                <li>SQL and Database Management</li>
                <li>ETL Processes and Data Warehousing</li>
                <li>Statistical Analysis and Predictive Modeling</li>
                <li>Python, R, and Data Science Tools</li>
                <li>Cloud Platforms (Azure, AWS)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Leadership & Soft Skills</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Team Leadership and Development</li>
                <li>Strategic Planning and Execution</li>
                <li>Project Management</li>
                <li>Executive Communication</li>
                <li>Change Management</li>
                <li>Training and Mentorship</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Publications</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Data Leadership: Transforming Organizations Through Analytics</h3>
              <div className="text-muted-foreground">Published 2021</div>
              <p className="mt-1">
                A comprehensive guide for executives and managers on building data-driven organizations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">IT Leadership Principles: Bridging Technology and Business Strategy</h3>
              <div className="text-muted-foreground">Published 2019</div>
              <p className="mt-1">Framework for technology leaders to align IT initiatives with business objectives.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-bold">Microsoft Certified: Data Analyst Associate</h3>
              <div className="text-sm text-muted-foreground">Issued 2022</div>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-bold">Tableau Desktop Specialist</h3>
              <div className="text-sm text-muted-foreground">Issued 2020</div>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-bold">AWS Certified Data Analytics - Specialty</h3>
              <div className="text-sm text-muted-foreground">Issued 2021</div>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-bold">Project Management Professional (PMP)</h3>
              <div className="text-sm text-muted-foreground">Issued 2018</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
