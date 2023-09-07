import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Todo from "@/models/Todo";
import { useUser } from "@supabase/auth-helpers-react";
import { Guid } from "guid-typescript";
import { useToast } from "./ui/use-toast";
import DialogAddTodo from "./dialogs/dialog-add-todo";

export default function AddButton() {
    const supabase = createClientComponentClient<Database>();
    const user = useUser();
    const { toast } = useToast()

    async function add()
    {
        if(user == null)
        {
            return;
        }

        const todo = new Todo("Test", Guid.parse(user.id));

        console.log("Insert");

        const { data: element, error } = await supabase.from('todos')
            .insert(todo.toTodo())
            .select()
            .single();

        if( error)
        {
            console.error(error);
            return;
        }
        
        toast({
            title: "Added Todo",
            description: element.title,
        })
    }

    return (
        <DialogAddTodo/>
    );
}
