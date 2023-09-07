'use client'

import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import React from "react";


export default function DialogAddTodo() {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    });

    if(!isMounted)
    {
        return (
            <div className="flex items-center justify-center w-[82.281px] h-[80px]">
                <Skeleton className="flex items-center justify-center rounded-md w-[82.281px] h-[40px] "/>
            </div>
        )
    }
    
return (
    <div className="flex items-center justify-center w-[82.281px] h-[80px]">
        <Skeleton className="flex items-center justify-center rounded-md w-[82.281px] h-[40px] "/>
    </div>)

    return (
        <Dialog>
            <DialogTrigger>
                <Button size="default">Add<PlusIcon/></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add Todo
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <h3 className="text-xl">Title</h3>
                    <Input/>
                    <h3 className="text-xl"></h3>
                    <Button>Send</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}