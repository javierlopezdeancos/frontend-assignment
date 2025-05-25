import React, { type PropsWithChildren } from "react"

function TypographyHeader2Component({ children }: PropsWithChildren): React.ReactElement {
  return (
    <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export default TypographyHeader2Component
