'use client'

import Messages from './messages'
import { Label } from '@/components/ui/label'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2"
        action="/auth/sign-in"
        method="post"
      >
        <Label className="text-md" htmlFor="email">
          Email
        </Label>
        <Input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <Label className="text-md" htmlFor="password">
          Password
        </Label>
        <Input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button>
          Sign In
        </Button>
        <Button
          formAction="/auth/sign-up"
          variant={'outline'}
        >
          Sign Up
        </Button>
        <Messages />
      </form>
      <Button onClick={router.back} className='absolute top-5 left-5'>
        Back
      </Button>
    </div>
  )
}
