import AddButton from "@/components/add-button"
import ServerComponent from "@/components/server-component/page"
import React from "react"

export default async function Dashboard() {
    //await new Promise((resolve) => setTimeout(resolve, 3000))

    return (    
        <div className="w-full flex flex-col">
            <div className="flex flex-row flex-grow justify-between">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl">
                    Dashboard
                </h1>
                <AddButton />
            </div>
            <ServerComponent/>
        </div>
    )
}