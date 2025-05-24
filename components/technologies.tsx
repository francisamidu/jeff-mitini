import Image from "next/image";

// Reusable TechnologyCard component
function TechnologyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex flex-col mb-4">
        <div className="h-16 w-16 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl">{title}</h3>
      </div>
      <div className="h-px w-full bg-gray-300 mb-4"></div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

const technologies = [
  {
    icon: <Image src="/sql-logo.svg" alt="SQL" width={40} height={40} />,
    title: "SQL",
    description: "Expert in complex queries for data extraction and analysis.",
  },
  {
    icon: (
      <Image src="/tableau-logo.png" alt="Tableau" width={400} height={200} />
    ),
    title: "Tableau",
    description: "Creating interactive dashboards and data visualizations.",
  },
  {
    icon: (
      <Image src="/powerbi-logo.png" alt="Power BI" width={40} height={40} />
    ),
    title: "Power BI",
    description:
      "Building business intelligence solutions with interactive reports.",
  },
  {
    icon: <Image src="/python-logo.png" alt="Python" width={40} height={40} />,
    title: "Python",
    description: "Data analysis with Pandas, NumPy, and scikit-learn.",
  },
  {
    icon: <Image src="/aws-logo-1.svg" alt="AWS" width={40} height={40} />,
    title: "AWS",
    description: "Cloud computing for scalable data storage and analytics.",
  },
  {
    icon: <Image src="/excel-logo.png" alt="Excel" width={40} height={40} />,
    title: "Excel",
    description:
      "Advanced skills with pivot tables, VLOOKUP, and data modeling.",
  },
  {
    icon: (
      <Image src="/cognos-logo.png" alt="IBM Cognos" width={40} height={40} />
    ),
    title: "IBM Cognos",
    description: "Enterprise BI platform for reporting and data analysis.",
  },
  {
    icon: (
      <Image src="/agile-logo.png" alt="Agile/SCRUM" width={400} height={400} />
    ),
    title: "Agile/SCRUM",
    description: "Project methodology for collaborative development.",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech, idx) => (
          <TechnologyCard key={tech.title + idx} {...tech} />
        ))}
      </div>
    </div>
  );
}
