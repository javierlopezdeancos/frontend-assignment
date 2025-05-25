import * as React from "react"
import { cn } from "@/helpers/class-name-helper"

function CardComponent({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn("flex items-center w-full py-5 px-10", className)}
      {...props}
    />
  )
}

export default CardComponent
