import React from "react"
import { cn } from "@/helpers/class-name-helper"

function SkeletonComponent({ className, ...props }: React.ComponentProps<"div">): React.ReactElement  {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export default SkeletonComponent
