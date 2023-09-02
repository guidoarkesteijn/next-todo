import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import React from 'react'
import TodoItem, { Todo } from '../todo-item'

export const dynamic = 'force-dynamic'

export default async function ServerComponent() {

  // Create a Supabase client configured to use cookies
  const supabase = createServerComponentClient({ cookies })

  // This assumes you have a `todos` table in Supabase. Check out
  // the `Create Table and seed with data` section of the README 👇
  // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {todos != null && todos.map((value : Todo) => (
        <TodoItem
          id={value.id}
          title={value.title}
          created_at={value.created_at}
          is_complete={value.is_complete}
          user_id={value.user_id}
        />
      ))}
    </div>
  );
}
