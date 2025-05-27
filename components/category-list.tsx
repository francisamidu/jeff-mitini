import Link from "next/link"

export function CategoryList() {
  const categories = [
    { name: "Culture", count: 7 },
    { name: "Fashion", count: 5 },
    { name: "Health", count: 4 },
    { name: "Inspiration", count: 5 },
    { name: "Lifestyle", count: 6 },
    { name: "Travel", count: 8 },
  ]

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name} className="flex justify-between items-center">
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              {category.name}
            </Link>
            <span className="text-sm text-gray-500">({category.count})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
