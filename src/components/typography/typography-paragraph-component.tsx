import React, { type PropsWithChildren } from "react"
import { cn } from "@/helpers/class-name-helper.ts"

function TypographyParagraphComponent({ className, muted = false, children }: PropsWithChildren<{ className?: string, muted?: boolean}>): React.ReactElement {
  return (
    <p className={cn(muted && "text-muted-foreground", "leading-7", className)}>
      { children }
    </p>
  )
}

export default TypographyParagraphComponent
