import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function BooksPage() {
  return (
    <div className="container md:mx-auto py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
        Books
      </h1>

      <p className="text-xl leading-relaxed max-w-3xl mb-12">
        Drawing from my experience in business intelligence, data analytics, and
        leadership, I{`'`}ve authored books to help professionals navigate the
        complex intersection of technology and business strategy.
      </p>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group md:order-last">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-10 dark:opacity-0 dark:hover:group-opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                src="/Leadership from the heart-01.webp"
                alt="Leadership from the heart book cover"
                width={400}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Leadership from the heart</h2>

            <div className="flex flex-wrap gap-4">
              <div className="bg-muted px-3 py-1 rounded-full text-sm">IT</div>
              <div className="bg-muted px-3 py-1 rounded-full text-sm">
                Leadership
              </div>
              <div className="bg-muted px-3 py-1 rounded-full text-sm">
                Business
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Published:</span>
                <p className="font-medium">2024</p>
              </div>
              <div>
                <span className="text-muted-foreground">Author:</span>
                <p className="font-medium">Jeff Mitini Nkhoma</p>
              </div>
              <div>
                <span className="text-muted-foreground">Format:</span>
                <p className="font-medium">eBook</p>
              </div>
              <div>
                <span className="text-muted-foreground">Price:</span>
                <p className="font-medium">$1</p>
              </div>
            </div>

            <p className="leading-relaxed">
              {`"`}IT Leadership Principles{`"`} provides a framework for
              technology leaders to align IT initiatives with business
              objectives. The book explores how to develop a strategic vision,
              build high-performing teams, and communicate effectively with
              stakeholders at all levels of the organization.
            </p>

            <p className="leading-relaxed">
              Based on my experience leading technology teams and consulting
              with organizations, this book offers practical guidance for
              navigating the complex challenges of modern IT leadership.
            </p>

            <div className="pt-4">
              <Button className="flex items-center gap-2 dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black">
                Purchase on Gumroad
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
