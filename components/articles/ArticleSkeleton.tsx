import React from "react";

const SkeletonBlock = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const ArticleSkeleton: React.FC = () => {
  return (
    <div className="pl-4 col-span-3 my-3">
      <div className="mb-8">
        <SkeletonBlock className="w-3/4 h-10 mb-4" /> {/* Title */}
        <div className="mb-6">
          <div className="flex items-center gap-8 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-4 mb-6">
              <SkeletonBlock className="h-10 w-10 rounded-full" /> {/* Avatar */}
              <div>
                <SkeletonBlock className="w-24 h-4 mb-2" /> {/* Author name */}
                <SkeletonBlock className="w-16 h-3" /> {/* Author meta */}
              </div>
            </div>
          </div>
        </div>
        <SkeletonBlock className="w-1/2 h-5 mb-3" /> {/* Date or meta */}
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonBlock key={i} className="w-full h-5" /> // Paragraph lines
        ))}
      </div>
    </div>
  );
};

export default ArticleSkeleton;
