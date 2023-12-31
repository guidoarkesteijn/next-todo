import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "./button-logout";
import { SwitchModeToggle } from "./switch-mode-toggle";
import { buttonVariants } from "./ui/button";
import React from "react";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default async function Header() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center mb-3">
      <nav className="w-full flex justify-center h-16">
        <div className="w-full flex justify-between items-center p-3 text-sm">
          <div>
            <Link
              href="/"
              className="text-4xl font-extrabold leading-none tracking-tigh"
            >
              Godo
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {user ? (
              <React.Fragment>
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {user.email?.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <LogoutButton />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link
                  href="/login?register=true"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Register
                </Link>
                <Link href="/login" className={buttonVariants()}>
                  Login
                </Link>
              </React.Fragment>
            )}
            <SwitchModeToggle />
          </div>
        </div>
      </nav>
      <Separator />
    </div>
  );
}
