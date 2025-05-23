import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import RequestForm from "@/components/request-form";
import AboutSnippet from "@/components/about-snippet";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section id="about-snippet" className="container md:mx-auto">
        <AboutSnippet />
      </section>

      <section id="request">
        <RequestForm />
      </section>

      <section id="testimonials" className="bg-muted py-16">
        <div className="container md:mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What People Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Feedback from clients and collaborators
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

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

      <section id="contact" className="container mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or want to connect? Send me a message.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
