'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { useEffect, useLayoutEffect, useState } from "react";

interface IProps {
    id: string;
    created_at: Date,
    title : string;
    is_complete : boolean;
    user_id : string | null;
}

export default function TodoItem(props : IProps) {
    const [completed, setCompleted] =  useState(props.is_complete);
  
    async function completeElement() : Promise<void> 
    {

    }

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
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardDescription>
                    {props.created_at.toLocaleString()}
                </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center space-x-2">
                <form action={completeElement}>

                </form>
                <Checkbox id="completed" checked={completed} onClick={handleChange}/>
                <label
                    htmlFor="completed"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Completed
                </label>
            </div>
            </CardContent>
        </Card>
    );
}
