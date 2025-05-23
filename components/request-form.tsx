import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, Briefcase, Users } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="w-full px-7 py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work with Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Interested in consulting, hiring, or collaboration? Let me know
              how I can help.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Hiring Column */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group h-full">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
              <UserPlus size={28} />
            </div>
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-slate-900">
              Hiring
            </h2>
            <p className="mb-8 text-center text-slate-600">
              Looking for a BI Developer with expertise in SQL, Python, Tableau,
              and Power BI? I specialize in designing and deploying BI solutions
              that drive business outcomes.
            </p>
            <div className="mt-auto">
              <Button className="bg-slate-800 hover:bg-slate-900 text-white group-hover:translate-y-[-2px] transition-transform duration-300 flex items-center gap-2">
                Hiring Inquiry
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Button>
            </div>
          </div>

          {/* Consulting Column */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group h-full">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
              <Briefcase size={28} />
            </div>
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-slate-900">
              Consulting
            </h2>
            <p className="mb-8 text-center text-slate-600">
              Need help with data analysis, visualization, or BI implementation?
              I offer consulting services in dashboard development, statistical
              analysis, and AWS cloud solutions.
            </p>
            <div className="mt-auto">
              <Button className="bg-slate-800 hover:bg-slate-900 text-white group-hover:translate-y-[-2px] transition-transform duration-300 flex items-center gap-2">
                Consulting Request
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Button>
            </div>
          </div>

          {/* Collaboration Column */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group h-full">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
              <Users size={28} />
            </div>
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-slate-900">
              Collaboration
            </h2>
            <p className="mb-8 text-center text-slate-600">
              Interested in collaborating on data-driven projects? Let's partner
              on developing innovative BI solutions, research projects, or data
              analysis initiatives that deliver measurable results.
            </p>
            <div className="mt-auto">
              <Button className="bg-slate-800 hover:bg-slate-900 text-white group-hover:translate-y-[-2px] transition-transform duration-300 flex items-center gap-2">
                Collaboration Request
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
