import { Skeleton } from "@/components/ui/skeleton";

export function CryptoGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="p-4 md:p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3 md:gap-4">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex-1 min-w-0">
                <Skeleton className="h-5 w-28 mb-1" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-5 w-12" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <Skeleton className="h-12 w-full rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
