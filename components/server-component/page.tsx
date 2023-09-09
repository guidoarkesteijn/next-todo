import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import React from 'react'
import TodoItem from '../todo-item'
import { Guid } from 'guid-typescript'

export const dynamic = 'force-dynamic'

export default async function TodoList() {

  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {todos != null && todos.map((value) => (
        <TodoItem
          id={value.id}
          title={value.title ?? ""}
          created_at={new Date(value.created_at)}
          is_complete={value.is_complete ?? false}
          user_id={value.user_id}
          key={value.id}
        />
      ))}
    </div>
  );
}
