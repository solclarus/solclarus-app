import { RefreshCw } from "lucide-react";

export function FeedLoading() {
  return (
    <div className="flex h-40 items-center justify-center">
      <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      <span className="ml-2">Loading feeds...</span>
    </div>
  );
}
