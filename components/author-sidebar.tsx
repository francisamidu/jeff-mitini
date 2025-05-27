import Image from "next/image"
import Link from "next/link"

export function AuthorSidebar() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="relative h-40 w-40 mx-auto mb-4">
          <Image src="/images/jeff-profile.png" alt="Jeff" fill className="object-cover rounded-lg" />
        </div>
        <h3 className="text-xl font-bold">Jeff</h3>
        <p className="text-gray-600 mt-2">
          Software developer, writer, and content creator specializing in web development and technology.
        </p>
        <Link href="/about" className="text-blue-600 hover:underline mt-2 inline-block font-medium">
          More About Me
        </Link>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/category/technology" className="text-blue-600 hover:underline">
              Technology
            </Link>
          </li>
          <li>
            <Link href="/category/web-development" className="text-blue-600 hover:underline">
              Web Development
            </Link>
          </li>
          <li>
            <Link href="/category/programming" className="text-blue-600 hover:underline">
              Programming
            </Link>
          </li>
          <li>
            <Link href="/category/career" className="text-blue-600 hover:underline">
              Career Advice
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
