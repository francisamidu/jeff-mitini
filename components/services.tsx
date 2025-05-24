import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, Briefcase, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <UserPlus size={28} />,
    title: "Hiring",
    description:
      "Looking for a BI Developer with expertise in SQL, Python, Tableau, and Power BI? I specialize in designing and deploying BI solutions that drive business outcomes.",
    buttonText: "Hiring Inquiry",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Consulting",
    description:
      "Need help with data analysis, visualization, or BI implementation? I offer consulting services in dashboard development, statistical analysis, and AWS cloud solutions.",
    buttonText: "Consulting Request",
  },
  {
    icon: <Users size={28} />,
    title: "Collaboration",
    description:
      "Interested in collaborating on data-driven projects? Let's partner on developing innovative BI solutions, research projects, or data analysis initiatives that deliver measurable results.",
    buttonText: "Collaboration Request",
  },
];

function ServiceCard({
  icon,
  title,
  description,
  buttonText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group h-full dark:bg-black/90 dark:border-slate-900/50">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        {icon}
      </div>
      <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-slate-900 dark:text-gray-200">
        {title}
      </h2>
      <p className="mb-8 text-center text-slate-600 dark:text-muted-foreground">
        {description}
      </p>
      <div className="mt-auto">
        <Button
          className="bg-slate-800 hover:bg-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:border-slate-900/50 text-white group-hover:translate-y-[-2px] transition-transform duration-300 flex items-center gap-2"
          asChild
        >
          <Link href="#contact">
            {buttonText}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="request">
      <div className="w-full px-4 md:px-7 py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black/80 dark:to-black/60">
        <div className="md:container px-2 md:px-6 md:mx-auto">
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
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
            {services.map((s, idx) => (
              <ServiceCard key={s.title + idx} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
