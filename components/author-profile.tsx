import Image from "next/image";
import { SocialIcons } from "./social-icons";
import { ArticleExtended } from "@/types/types";

export function AuthorProfile({
  author,
}: {
  author: ArticleExtended["author"];
}) {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image
          src={author.avatar.url}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{author.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{author.bio}</p>
      <div className="flex justify-center mb-4">
        <SocialIcons />
      </div>
    </div>
  );
}
