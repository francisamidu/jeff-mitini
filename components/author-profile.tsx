import Image from "next/image"
import { SocialIcons } from "./social-icons"

export function AuthorProfile() {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image src="/images/bree-mukami.jpg" alt="Bree Mukami" fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">Bree Mukami</h3>
      <p className="text-gray-600 text-sm mb-4">
        Hello, I am a content writer who is fascinated by content creation, culture, and lifestyle. I help clients bring
        the right content to the right people.
      </p>
      <div className="flex justify-center mb-4">
        <SocialIcons />
      </div>
    </div>
  )
}
