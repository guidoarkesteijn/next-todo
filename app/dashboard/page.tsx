export default async function Dashboard() {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    return (
        <h1>Dashboard</h1>
    )
}