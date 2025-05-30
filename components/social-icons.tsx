import {
  Facebook,
  Instagram,
  Twitter,
  PinIcon as Pinterest,
} from "lucide-react";
import Link from "next/link";

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://www.facebook.com/jeffmitini"
        className="text-gray-600 hover:text-secondary transition-colors"
      >
        <Facebook size={18} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://www.instagram.com/jeffmitini"
        className="text-gray-600 hover:text-secondary transition-colors"
      >
        <Instagram size={18} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://twitter.com/jeffmitini"
        className="text-gray-600 hover:text-secondary transition-colors"
      >
        <Twitter size={18} />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="https://www.pinterest.com/jeffmitini"
        className="text-gray-600 hover:text-secondary transition-colors"
      >
        <Pinterest size={18} />
        <span className="sr-only">Pinterest</span>
      </Link>
    </div>
  );
}
