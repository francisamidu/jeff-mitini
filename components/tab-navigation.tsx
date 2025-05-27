"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function TabNavigation() {
  const [activeTab, setActiveTab] = useState("latest")

  return (
    <div className="border-b">
      <div className="flex">
        <button
          onClick={() => setActiveTab("latest")}
          className={cn(
            "px-6 py-3 font-medium transition-colors",
            activeTab === "latest" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-800",
          )}
        >
          Latest
        </button>
        <button
          onClick={() => setActiveTab("popular")}
          className={cn(
            "px-6 py-3 font-medium transition-colors",
            activeTab === "popular" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-800",
          )}
        >
          Popular
        </button>
      </div>
    </div>
  )
}
