'use server'

import Todo from "@/models/Todo";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { Guid } from "guid-typescript";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const supabase = createServerActionClient<Database>({cookies});

export async function addTodo(title : string) : Promise<boolean>
{
    const user = await supabase.auth.getUser();

    if(user.data.user != null)
    {
        const userId = Guid.parse(user.data.user.id);

        const todo : Todo = new Todo(title as string, userId);

        const { error} = await supabase.from('todos').insert(todo.toTodo()).select().single();

        if(error){
            return false;
        }

        revalidatePath('/dashboard');
        return true;
    }

    return false;
}

export async function deleteTodo(id : string) : Promise<void>
{
    const user = await supabase.auth.getUser();
    
    if(user.data.user)
    {
        const { error } = await supabase
            .from("todos")
            .delete()
            .eq("id", id)

        console.log(error);

        revalidatePath('/dashboard');
    }
}