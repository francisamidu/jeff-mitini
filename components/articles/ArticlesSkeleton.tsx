import React from "react";

// Utility skeleton block
const SkeletonBlock = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const ArticlesSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Featured Article Skeleton */}
      <section className="mb-16">
        <SkeletonBlock className="w-full h-64 mb-4" />
        <SkeletonBlock className="w-1/2 h-6 mb-2" />
        <SkeletonBlock className="w-1/3 h-4" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles List Skeleton */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-3">
                <SkeletonBlock className="w-full h-40 mb-2" />
                <SkeletonBlock className="w-3/4 h-5" />
                <SkeletonBlock className="w-1/2 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1 space-y-8">
          {/* Author Profile */}
          <div className="flex items-center gap-4 mb-8">
            <SkeletonBlock className="w-16 h-16 rounded-full" />
            <div>
              <SkeletonBlock className="w-24 h-4 mb-2" />
              <SkeletonBlock className="w-16 h-3" />
            </div>
          </div>
          {/* Categories */}
          <div>
            <SkeletonBlock className="w-1/2 h-4 mb-3" />
            {[1, 2, 3].map((i) => (
              <SkeletonBlock key={i} className="w-full h-3 mb-2" />
            ))}
          </div>
          {/* Newsletter */}
          <div>
            <SkeletonBlock className="w-full h-20" />
          </div>
        </div>
      </div>

      {/* Latest Articles Skeleton */}
      <section className="mt-20">
        <div className="flex justify-between items-center mb-8">
          <SkeletonBlock className="w-40 h-6" />
          <SkeletonBlock className="w-24 h-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <SkeletonBlock className="w-full h-48 mb-2" />
              <SkeletonBlock className="w-3/4 h-4" />
              <SkeletonBlock className="w-1/2 h-3" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlesSkeleton;
