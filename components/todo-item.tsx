'use client'

import { BedIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface IProps {
    id: string;
    created_at: Date,
    title : string;
    is_complete : boolean;
    user_id : string | null;
}

export default function TodoItem(props : IProps) {
    function clicked()
    {
        console.log("Clicked");
    }

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
                <Checkbox id="terms" checked={props.is_complete}/>
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Completed
                </label>
            </div>
            </CardContent>
        </Card>
    );
}
