import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export default function DialogAddTodo() {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    });

    if(!isMounted)
    {
        return;
    }
    
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