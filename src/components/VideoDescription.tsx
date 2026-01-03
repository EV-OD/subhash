"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoDescriptionProps {
  description: string;
}

export function VideoDescription({ description }: VideoDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = description.length > 200; // Truncate if longer than 200 chars

  return (
    <div className="bg-muted/30 rounded-xl p-4">
      <div 
        className={cn(
          "prose prose-sm dark:prose-invert max-w-none text-text-description whitespace-pre-wrap transition-all duration-300",
          !isExpanded && shouldTruncate ? "line-clamp-3" : ""
        )}
      >
        {description}
      </div>
      
      {shouldTruncate && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 h-auto p-0 font-semibold text-text-heading hover:bg-transparent hover:underline"
        >
          {isExpanded ? "Show less" : "...more"}
        </Button>
      )}
    </div>
  );
}
