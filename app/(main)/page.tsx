'use client'

import { Button, buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export default function Index() {
  const { toast } = useToast()

  function fireToast()
  {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    })
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl">
        Welcome!</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mollis purus. Maecenas suscipit, massa a posuere semper, sem lectus molestie dolor, sed faucibus diam ante sed lorem. Cras eu sem eu libero rhoncus varius non scelerisque leo. Nam at arcu suscipit, vehicula felis sagittis, tincidunt nisi. Cras hendrerit est eu elementum sollicitudin. In commodo ac ipsum eget mollis. Praesent sodales, quam vitae elementum feugiat, elit justo efficitur orci, sed ullamcorper leo diam nec elit. Mauris ut tempus nisl, eget condimentum risus. Nullam ipsum felis, tincidunt eget neque sollicitudin, congue euismod ante.</p>
      <Link href="/login"
          className={buttonVariants()}>
          Learn more 
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
      <Button
        onClick={fireToast}>
        Toast
      </Button>
    </div>
  )
}
