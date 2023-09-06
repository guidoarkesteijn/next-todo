import { Guid } from "guid-typescript";

export type todo = Database["public"]["Tables"]["todos"]["Row"];

interface ITodo extends Omit<todo, 'user_id' | 'id' | 'created_at'>
{
    id : Guid;
    user_id : Guid,
    created_at : Date
}

export default class Todo implements ITodo {
    created_at: Date;
    id: Guid;
    is_complete: boolean | null;
    title: string | null;
    user_id: Guid;

    constructor(title : string, user_id : Guid) {
        this.id = Guid.create();
        this.created_at = new Date();
        this.is_complete = false;
        this.title = title;
        this.user_id = user_id;
    }

    public toTodo() : todo {
        return {
            created_at: this.created_at.toISOString(),
            id: this.id.toString(),
            is_complete: this.is_complete,
            title: this.title,
            user_id: this.user_id.toString()
        }
    }
}