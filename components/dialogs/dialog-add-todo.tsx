'use client'

import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import React from "react";
import { addTodo } from "@/actions/actions-todo";
import { useToast } from "../ui/use-toast";


export default function DialogAddTodo() {
    const [isMounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        setMounted(true)
    });

    if(!isMounted)
    {
        return (
            <Skeleton className={buttonVariants({variant: "ghost"}) + " text-muted"}>
                Add<PlusIcon className="bg-muted"/>
            </Skeleton>
        )
    }

    async function addTodoElement(formdata : FormData) : Promise<void>
    {
        const title = formdata.get("title") as string;
        const result = await addTodo(title);
        if(!result)
        {
            
            return;
        }

        toast({
            title: "Todo Added",
            description: "Title: " + title,
        });
        setOpen(false)
    }
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className={buttonVariants({variant:"default"})}>
                Add<PlusIcon/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add Todo
                    </DialogTitle>
                </DialogHeader>
                <form className="flex flex-col gap-3" action={addTodoElement}>
                    <h3 className="text-xl">Title</h3>
                    <Input name="title" required/>
                    <h3 className="text-xl"></h3>
                    <Button>Add</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}