import { Facebook, Instagram, Twitter, PinIcon as Pinterest, Youtube } from "lucide-react"
import Link from "next/link"

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
        <Facebook size={18} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
        <Instagram size={18} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
        <Twitter size={18} />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
        <Pinterest size={18} />
        <span className="sr-only">Pinterest</span>
      </Link>
      <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
        <Youtube size={18} />
        <span className="sr-only">Youtube</span>
      </Link>
    </div>
  )
}
