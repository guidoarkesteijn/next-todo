'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa, ViewType } from "@supabase/auth-ui-shared";
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from "react";
import { 
  useSessionContext, 
  useSupabaseClient
} from '@supabase/auth-helpers-react';

export default function Login() {
  const supabase = useSupabaseClient();
  const searchParams = useSearchParams();
  const [view, setView] = useState<ViewType>("sign_in");
  const router = useRouter();
  const { session } = useSessionContext();

  useEffect(() => {
    const next = searchParams.get("register") ? "sign_up" : "sign_in";
    setView(next)
  }, [searchParams])

  useEffect(() => {
    console.log(session);
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

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
