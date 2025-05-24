import Link from "next/link";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
      <div className="container border-t py-4 md:mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Jeff Mitini. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <Link
            href="https://linkedin.com/in/jeffmitini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://x.com/cjmitini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter />
          </Link>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cjmitini@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
