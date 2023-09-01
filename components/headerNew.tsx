import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from './button-logout'
import { SwitchModeToggle } from './switch-mode-toggle';
import { buttonVariants } from './ui/button';
import React from 'react';

export const dynamic = "force-dynamic";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full flex flex-col items-center mb-3">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <div>
              <Link href="/" className='text-3xl'>
                My Website
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                  <React.Fragment>
                    {user?.email}
                    <LogoutButton />
                  </React.Fragment>
              ) : (
                <Link 
                  href="/login"
                  className={buttonVariants()}>
                    Login
                </Link>
              )}
              <SwitchModeToggle/>
            </div>
        </div>
      </nav>
    </div>
  )
}
