"use client";

import { useRouter } from "next/navigation";
import { SomethingWentWrong } from "@/components/something-went-wrong";
import { SearchX } from "lucide-react"; // Using SearchX for a "not found" visual

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center bg-gray-100 p-4">
      <SomethingWentWrong
        icon={<SearchX className="h-12 w-12 text-red-500" />}
        title="404 - Page Not Found"
        message="Sorry, the page you are looking for doesn't exist or has been moved."
        primaryAction={{
          text: "Go to Homepage",
          onClick: handleGoHome,
        }}
        className="max-w-md" // Ensure the card doesn't get too wide
      />
    </div>
  );
}
