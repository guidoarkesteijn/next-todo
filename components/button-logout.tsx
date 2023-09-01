import { Button } from "./ui/button";

export default function ButtonLogout() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button>
        Logout
      </Button>
    </form>
  )
}
