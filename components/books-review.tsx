import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const books = [
  {
    image: "/data-visualization-book-cover.png",
    title: "Data Leadership",
    description: "Transform your organization with data-driven insights",
    link: "/books",
  },
  {
    image: "/leadership-book-cover.png",
    title: "IT Leadership Principles",
    description: "Guide to effective leadership in technology",
    link: "/books",
  },
];

const BookCard = ({ image, title, description, link }: { image: string; title: string; description: string; link: string }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative flex items-center gap-6 bg-card p-6 rounded-lg border">
      <div className={`w-28 h-36 relative flex-shrink-0${title === "IT Leadership Principles" ? " !h-36" : ""}`}>
        <Image
          src={image}
          alt="Book cover"
          width={122}
          height={144}
          className="object-cover h-full rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <div className="mt-4">
          <Button asChild>
            <Link href={link}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

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
        {books.map((book, idx) => (
          <BookCard key={book.title + idx} {...book} />
        ))}
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
