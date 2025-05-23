import React, {  type PropsWithChildren } from 'react'
import "./app-styles.css"

function AppLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  )
}

export default AppLayout
