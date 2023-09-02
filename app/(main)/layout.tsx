import Header from "@/components/header"
import React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
        <Header/>
        <main className="m-3">
            {children}
        </main>
    </React.Fragment>
  )
}
