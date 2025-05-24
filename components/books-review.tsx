import { Link, ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Books = () => {
  return (
    <section id="books-preview" className="p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Published Works
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore my books on leadership and data analytics
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center gap-6 bg-card p-6 rounded-lg border">
            <div className="w-28 h-36 relative flex-shrink-0">
              <Image
                src="/data-visualization-book-cover.png"
                alt="Book cover"
                width={122}
                height={144}
                className="object-cover h-full rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">Data Leadership</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Transform your organization with data-driven insights
              </p>
              <div className="mt-4">
                <Button asChild>
                  <Link href="/books">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center gap-6 bg-card p-6 rounded-lg border">
            <div className="w-28 !h-36 relative flex-shrink-0">
              <Image
                src="/leadership-book-cover.png"
                alt="Book cover"
                width={122}
                height={144}
                className="object-cover h-full rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">IT Leadership Principles</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Guide to effective leadership in technology
              </p>
              <div className="mt-4">
                <Button asChild>
                  <Link href="/books">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" asChild>
          <Link href="/books">
            View All Books <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Books;
