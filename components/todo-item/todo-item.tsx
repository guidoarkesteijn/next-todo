'use client'

import { Guid } from "guid-typescript";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { experimental_useOptimistic, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { LuTrash } from "react-icons/lu";
import { completeTodo, deleteTodo } from "@/actions/actions-todo";

interface IProps {
    id: string;
    created_at: Date,
    title : string;
    is_complete : boolean;
    user_id : string | null;
}

export default function TodoItem(props : IProps) {
    const [isPending, startTransition] = useTransition();

    function deleteElement() : void
    {
        startTransition(() => {
            deleteTodo(props.id);
        })
    }

    function changeComplete()
    {
        startTransition(() => {
            completeTodo(props.id, !props.is_complete);
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between gap-3">
                    {props.title}
                    <Button onClick={deleteElement} variant="destructive">
                        <LuTrash/>
                    </Button>
                </CardTitle>
                <CardDescription>
                    {props.created_at.toLocaleString()}
                </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center space-x-2">
                <Checkbox id={props.id} checked={props.is_complete} onClick={changeComplete}/>
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
