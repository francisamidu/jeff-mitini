import { Facebook, Twitter, Instagram, Github } from "lucide-react"

type SocialIconProps = {
  type: "facebook" | "twitter" | "instagram" | "github"
}

export function SocialIcon({ type }: SocialIconProps) {
  const getIcon = () => {
    switch (type) {
      case "facebook":
        return <Facebook size={20} />
      case "twitter":
        return <Twitter size={20} />
      case "instagram":
        return <Instagram size={20} />
      case "github":
        return <Github size={20} />
    }
  }

  return (
    <a
      href={`https://${type}.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 hover:bg-gray-600 transition-colors p-2 rounded-full text-white"
    >
      {getIcon()}
    </a>
  )
}
