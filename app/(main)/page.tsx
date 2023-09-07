'use client'

import { Button, buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { LuAlarmCheck, LuArrowRight } from "react-icons/lu";
import Link from "next/link";

export default function Index() {
  const { toast } = useToast()

  function fireToast()
  {
    var today = new Date();

    toast({
      title: "Reminder: Catch up",
      description: today.toLocaleString(),
    })
  }

  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl">
        Welcome!</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mollis purus. Maecenas suscipit, massa a posuere semper, sem lectus molestie dolor, sed faucibus diam ante sed lorem. Cras eu sem eu libero rhoncus varius non scelerisque leo. Nam at arcu suscipit, vehicula felis sagittis, tincidunt nisi. Cras hendrerit est eu elementum sollicitudin. In commodo ac ipsum eget mollis. Praesent sodales, quam vitae elementum feugiat, elit justo efficitur orci, sed ullamcorper leo diam nec elit. Mauris ut tempus nisl, eget condimentum risus. Nullam ipsum felis, tincidunt eget neque sollicitudin, congue euismod ante.</p>
      <Link href="/login"
          className={buttonVariants() + " mb-3"}>
          Learn more 
          <LuArrowRight/>
      </Link>
      <Button
        onClick={fireToast}>
        Toast
        <LuAlarmCheck className="ml-2"/>
      </Button>
    </section>
  )
}
