"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface ContentHeroImageProps {
  src?: string | null
  title: string
  className?: string
}

export function ContentHeroImage({ src, title, className }: ContentHeroImageProps) {
  // Using DiceBear 'shapes' style for abstract content covers
  // Other good options: 'identicon', 'icons', 'thumbs'
  const fallbackUrl = `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(title)}`;

  return (
    <div className={cn("relative w-full aspect-video overflow-hidden rounded-lg bg-muted", className)}>
      <Image
        src={src || fallbackUrl}
        alt={`Featured image for ${title}`}
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
