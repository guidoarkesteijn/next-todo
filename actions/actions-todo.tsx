'use server'

import Todo from "@/models/Todo";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
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

        const { error} = await supabase
            .from("todos")
            .insert(todo.toTodo())
            .select()
            .single();

        return handle(error);
    }

    return false;
}

export async function updateTodo(id : string, title : string) : Promise<boolean>
{
    const user = await supabase.auth.getUser();

    if(user.data.user)
    {
        const {error} = await supabase
            .from("todos")
            .update({title: title})
            .eq("id", id);
            
        return handle(error);
    }

    return false;
}

export async function deleteTodo(id : string) : Promise<boolean>
{
    const user = await supabase.auth.getUser();

    if(user.data.user)
    {
        const {error} = await supabase
            .from("todos")
            .delete()
            .eq("id", id);

        return handle(error);
    }

    return false;
}

export async function completeTodo(id : string, value : boolean) : Promise<boolean>
{
    const user = await supabase.auth.getUser();

    if(user.data.user)
    {
        const { error } = await supabase
            .from("todos")
            .update({is_complete: value})
            .eq("id", id);

        return handle(error);
    }

    return false;
}

function handle(error : PostgrestError | null) : boolean
{
    revalidatePath('/dashboard');

    if(error)
    {
        console.log(error);
    }
    return error == null;
}