import Image from "next/image";

export default function Technologie() {
  return (
    <div className="bg-[#F8F7FF] min-h-screen py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SQL */}
          <div>
            <div className="flex flex-col mb-4">
              <div className="bg-black h-16 w-16 flex justify-center mb-4">
                <span className="text-white text-2xl font-bold">SQL</span>
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
              <div className="bg-white h-16 w-16 flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=tableau logo"
                  alt="Tableau"
                  width={40}
                  height={40}
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
              <div className="bg-black h-16 w-16 rounded-full flex justify-center mb-4">
                <span className="text-white text-2xl font-bold">BI</span>
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
              <div className="bg-black h-16 w-16 flex justify-center mb-4">
                <span className="text-white text-2xl font-bold">PY</span>
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
              <div className="h-16 w-16 flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=aws logo"
                  alt="AWS"
                  width={40}
                  height={40}
                />
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
              <div className="h-16 w-16 flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=excel logo"
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
              <div className="h-16 w-16 flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=ibm cognos logo"
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
              <div className="h-16 w-16 flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=agile scrum logo"
                  alt="Agile/SCRUM"
                  width={40}
                  height={40}
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
