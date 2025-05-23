import * as React from "react"
import { cn } from "@/helpers/class-name-helper"

function CardComponent({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn("flex items-center w-full border-b-1 border-gray-300 last-of-type:border-0 py-5 px-10", className)}
      {...props}
    />
  )
}

export default CardComponent
