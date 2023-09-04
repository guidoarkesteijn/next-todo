'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa, ViewType } from "@supabase/auth-ui-shared";
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from "react";

export default function Login() {
  const supabase = createClientComponentClient();
  const searchParams = useSearchParams();
  const [view, setView] = useState<ViewType>("sign_in");

  useEffect(() => {
    const next = searchParams.get("register") ? "sign_up" : "sign_in";
    setView(next)
  }, [searchParams])

  return (
    <Auth
      view={view}
      supabaseClient={supabase}
      magicLink={true}
      providers={[]}
      appearance={{
        theme: ThemeSupa, 
        variables: {
          default: {
            colors: {
              inputText: "",
              inputLabelText: ""
            }
      },}}}/>
  )
}
