import ServerComponent from "./server-component/page";

export default function Index() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1>Server</h1>
      <ServerComponent/>
    </div>
  )
}
