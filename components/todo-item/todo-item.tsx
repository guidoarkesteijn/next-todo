"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { experimental_useOptimistic as useOptimistic } from "react";
import { Button } from "../ui/button";
import { completeTodo, deleteTodo } from "@/actions/actions-todo";
import { LucideLoader2, LucideTrash } from "lucide-react";
import { useToast } from "../ui/use-toast";

interface IProps {
  id: string;
  created_at: Date;
  title: string;
  is_complete: boolean;
  user_id: string | null;
}

export default function TodoItem(props: IProps) {
  const { toast } = useToast();
  const [optimisticComplete, toggleOptimisticComplete] = useOptimistic(
    props.is_complete || false,
    (state, value: boolean) => (state = value),
  );
  const [optimisticDelete, setOptimisticDelete] = useOptimistic(
    false,
    (state, value: boolean) => (state = value),
  );

  async function deleteElement() {
    setOptimisticDelete(true);
    const success = await deleteTodo(props.id);

    if (!success) {
      toast({
        title: "Failed to delete",
        description: props.title,
        variant: "destructive",
      });
    }
  }

  async function changeComplete() {
    toggleOptimisticComplete(!props.is_complete);
    const success = await completeTodo(props.id, !optimisticComplete); // Call the server action

    if (!success) {
      toast({
        title: "Failed to toggle complete",
        description: props.title,
        variant: "destructive",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between gap-3 break-all">
          {props.title}
          <Button
            disabled={optimisticDelete}
            onClick={deleteElement}
            variant="destructive"
            size="icon"
          >
            {optimisticDelete ? <LucideLoader2 className="animate-spin" /> : <LucideTrash />}
          </Button>
        </CardTitle>
        <CardDescription>{props.created_at.toLocaleString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Checkbox
            id={props.id}
            checked={optimisticComplete}
            onClick={changeComplete}
          />
          <label
            htmlFor={props.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Completed
          </label>
        </div>
      </CardContent>
    </Card>
  );
}
