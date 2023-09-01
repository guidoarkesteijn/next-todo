import ServerComponent from "@/components/server-component/page"

export default async function Dashboard() {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    return (
        <div>
            <h1>Dashboard</h1>
            <ServerComponent/>
        </div>
    )
}