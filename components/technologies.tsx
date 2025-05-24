import Image from "next/image";

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SQL */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image
                  src="/sql-logo.svg"
                  alt="Tableau"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl">SQL</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Expert in complex queries for data extraction and analysis.
            </p>
          </div>

          {/* Tableau */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image
                  src="/tableau-logo.png"
                  alt="Tableau"
                  width={400}
                  height={200}
                />
              </div>
              <h3 className="text-xl">Tableau</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Creating interactive dashboards and data visualizations.
            </p>
          </div>

          {/* Power BI */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image
                  src="/powerbi-logo.png"
                  alt="Tableau"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl">Power BI</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Building business intelligence solutions with interactive reports.
            </p>
          </div>

          {/* Python */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image
                  src="/python-logo.png"
                  alt="Tableau"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl">Python</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Data analysis with Pandas, NumPy, and scikit-learn.
            </p>
          </div>

          {/* AWS */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image src="/aws-logo-1.svg" alt="AWS" width={40} height={40} />
              </div>
              <h3 className="text-xl">AWS</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Cloud computing for scalable data storage and analytics.
            </p>
          </div>

          {/* Excel */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image
                  src="/excel-logo.png"
                  alt="Excel"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl">Excel</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Advanced skills with pivot tables, VLOOKUP, and data modeling.
            </p>
          </div>

          {/* IBM Cognos */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image
                  src="/cognos-logo.png"
                  alt="IBM Cognos"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl">IBM Cognos</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Enterprise BI platform for reporting and data analysis.
            </p>
          </div>

          {/* Agile/SCRUM */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Image
                  src="/agile-logo.png"
                  alt="Agile/SCRUM"
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="text-xl">Agile/SCRUM</h3>
            </div>
            <div className="h-px w-full bg-gray-300 mb-4"></div>
            <p className="text-gray-700">
              Project methodology for collaborative development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
