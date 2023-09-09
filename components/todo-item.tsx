'use client'

import { Guid } from "guid-typescript";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { useLayoutEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { LuTrash } from "react-icons/lu";
import { deleteTodo } from "@/actions/actions-todo";

interface IProps {
    id: string;
    created_at: Date,
    title : string;
    is_complete : boolean;
    user_id : string | null;
}

export default function TodoItem(props : IProps) {
    const [completed, setCompleted] =  useState(props.is_complete);
    const [isPending, startTransition] = useTransition();

    useLayoutEffect(() => {
        console.log(props.is_complete);
        if(completed != props.is_complete)
        {
            props.is_complete != props.is_complete;
            console.log('The checkbox was toggled: ' + props.is_complete + " : " + completed);
        }
    },[completed])

    const handleChange = () => {     
        setCompleted(!completed);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between gap-3">
                    {props.title}
                    <Button onClick={() => startTransition(() => deleteTodo(props.id))} variant="destructive">
                        <LuTrash/>
                    </Button>
                </CardTitle>
                <CardDescription>
                    {props.created_at.toLocaleString()}
                </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center space-x-2">
                <Checkbox id={props.id} checked={completed} onClick={handleChange}/>
                <label
                    htmlFor={props.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Completed
                </label>
            </div>
            </CardContent>
        </Card>
    );
}
