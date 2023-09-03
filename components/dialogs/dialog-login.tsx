import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LoginForm from "../login-form"

export default function ModelLogin() {
    return (
        <Dialog>
          <DialogTrigger >
            <Button>Login</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>
                Please fill in the below fields to either login or register.
              </DialogDescription>
            </DialogHeader>
            <LoginForm/>
          </DialogContent>
        </Dialog>
      )
}