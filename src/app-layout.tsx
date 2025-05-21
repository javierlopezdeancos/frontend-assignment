import React, {  type PropsWithChildren } from 'react'

function AppLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <div>
      {children}
    </div>
  )
}

export default AppLayout
