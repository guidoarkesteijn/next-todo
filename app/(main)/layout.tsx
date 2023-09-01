import Header from "@/components/headerNew"
import React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
        <Header/>
        <main>
            {children}
        </main>
    </React.Fragment>
  )
}
