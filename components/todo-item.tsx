'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

export type Todo = {
    id: string;
    created_at: string,
    title : string;
    is_complete : boolean;
    user_id : string;
}

interface IProps {
    id: string;
    created_at: string,
    title : string;
    is_complete : boolean;
    user_id : string;
}

export default function TodoItem(props : IProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardDescription>
                    {props.created_at}
                </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={props.is_complete}/>
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Completed
                </label>
            </div>
            </CardContent>
            <CardFooter>
                {props.user_id}
            </CardFooter>
        </Card>
    );
}
